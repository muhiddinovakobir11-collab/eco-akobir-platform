/**
 * ============================================================================
 * ECO-BATL CORE: QUESTIONS MANAGER (SAVOLLAR VA TOPSHIRIQLAR DRAYVERI)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * data/questions.json dan yuklaydi, Fisher-Yates va Recency Penalty qo'llaydi.
 */

(function () {
  'use strict';

  const CoreQuestions = {
    cache: null,
    isLoaded: false,

    async load() {
      if (this.isLoaded && this.cache) return this.cache;

      try {
        const res = await fetch('data/questions.json?v=' + Date.now());
        if (res.ok) {
          this.cache = await res.json();
          this.isLoaded = true;
          return this.cache;
        }
      } catch (e) {
        console.warn('[CoreQuestions] fetch failed, falling back to window.ECO_WASTE_DATABASE');
      }

      // Zaxira: mavjud bazalardan to'ldirish
      this.cache = {
        conveyor: (window.ECO_WASTE_DATABASE || []).slice(0, 40).map(item => ({
          id: item.id,
          name: item.name,
          cat: item.cat,
          slug: item.slug,
          icon: item.icon || '📦',
          isTrap: !!item.isTrap,
          difficulty: item.difficulty || 'orta',
          options: ["Plastik", "Qog'oz", "Shisha", "Utilizatsiya"],
          correct: 0,
          exp: item.explanation || "Chiqindini to'g'ri qutiga joylash lozim."
        })),
        duel: (window.HARD_AUDIT_QUESTIONS || []).slice(0, 30).map((q, idx) => ({
          id: 'fb_d_' + idx,
          q: q.question,
          options: q.options,
          correct: q.correctAnswer,
          exp: q.explanation || "ISO 14001 va Ekologik audit qoidalari."
        })),
        tug_of_war: [],
        green_map: [],
        food_chain: [],
        spot_polluter: []
      };
      this.isLoaded = true;
      return this.cache;
    },

    // Fisher-Yates tasodifiy aralashtirish
    shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },

    // Rejim uchun savollar to'plamini olish
    async getQuestionsForMode(mode, count = 15) {
      await this.load();
      const pool = (this.cache && this.cache[mode]) ? this.cache[mode] : [];
      if (pool.length === 0) {
        // Fallback to conveyor or duel
        return this.shuffle(this.cache.conveyor || []).slice(0, count);
      }

      let recentIds = [];
      try {
        recentIds = JSON.parse(localStorage.getItem('ECO_BATTLE_RECENT_' + mode) || '[]');
      } catch (e) { recentIds = []; }

      // Fresh savollarni ustuvor qilish (Recency penalty)
      const fresh = pool.filter(q => !recentIds.includes(q.id));
      const poolToUse = fresh.length >= count ? fresh : pool;
      const shuffled = this.shuffle(poolToUse).slice(0, count);

      try {
        const updatedRecent = [...shuffled.map(q => q.id), ...recentIds].slice(0, 35);
        localStorage.setItem('ECO_BATTLE_RECENT_' + mode, JSON.stringify(updatedRecent));
      } catch (e) {}

      return shuffled;
    }
  };

  window.EcoBattleCoreQuestions = CoreQuestions;
})();
