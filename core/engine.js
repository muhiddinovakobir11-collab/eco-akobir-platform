/**
 * ============================================================================
 * ECO-BATL CORE: ENGINE (ASOSIY YADRO VA O'YIN DAVRI MENEJERI)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Barcha 6 ta jang rejimi uchun umumiy holat mashinasi, combo hisoblash,
 * taymer boshqaruvi va g'olibni aniqlash mexanizmi.
 */

(function () {
  'use strict';

  const CoreEngine = {
    phase: 'setup', // 'setup', 'countdown', 'playing', 'paused', 'finished'
    activeMode: 'conveyor',
    modeHandlers: {},

    config: {
      roundsCount: 15,
      timePerRound: 15, // soniya (0 = cheksiz)
      t1Name: "1-Jamoa (Zumrad)",
      t2Name: "2-Jamoa (Yoqut)",
      t1Avatar: "🛡️",
      t2Avatar: "⚡"
    },

    state: {
      matchTimeRemaining: 90,
      timerInterval: null,
      tugOfWarPercent: 50,
      t1: {
        score: 0,
        streak: 0,
        maxStreak: 0,
        currentIndex: 0,
        timeLeft: 15,
        isLocked: false,
        finished: false,
        history: []
      },
      t2: {
        score: 0,
        streak: 0,
        maxStreak: 0,
        currentIndex: 0,
        timeLeft: 15,
        isLocked: false,
        finished: false,
        history: []
      }
    },

    // Yangi rejimni yadrog'a ro'yxatdan o'tkazish
    registerMode(name, handler) {
      this.modeHandlers[name] = handler;
    },

    // Initsializatsiya
    init() {
      this.phase = 'setup';
      if (window.EcoBattleCoreInput) {
        window.EcoBattleCoreInput.unbind();
      }
    },

    // Yangi matchni boshlash
    async startMatch(modeName, customConfig = {}) {
      this.activeMode = modeName || 'conveyor';
      this.config = Object.assign(this.config, customConfig);

      this.state.t1 = {
        score: 0,
        streak: 0,
        maxStreak: 0,
        currentIndex: 0,
        timeLeft: this.config.timePerRound,
        isLocked: false,
        finished: false,
        history: []
      };

      this.state.t2 = {
        score: 0,
        streak: 0,
        maxStreak: 0,
        currentIndex: 0,
        timeLeft: this.config.timePerRound,
        isLocked: false,
        finished: false,
        history: []
      };

      this.state.tugOfWarPercent = 50;
      this.phase = 'playing';

      // Klaviaturani ulash
      if (window.EcoBattleCoreInput) {
        window.EcoBattleCoreInput.bind();
      }

      // Rejim maxsus handlerini chaqirish
      const handler = this.modeHandlers[this.activeMode];
      if (handler && typeof handler.onStart === 'function') {
        await handler.onStart(this.config, this.state);
      }
    },

    // Javob berilganda ball va streakni hisoblash
    recordAnswer(teamId, isCorrect, points = 100) {
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      const fx = window.EcoBattleCoreFx;

      if (isCorrect) {
        team.streak += 1;
        if (team.streak > team.maxStreak) team.maxStreak = team.streak;

        // Combo ko'paytiruvchisi: x1, x2 (3+), x3 (5+), x5 (8+)
        let multiplier = 1;
        if (team.streak >= 8) multiplier = 5;
        else if (team.streak >= 5) multiplier = 3;
        else if (team.streak >= 3) multiplier = 2;

        const earned = points * multiplier;
        team.score += earned;

        if (fx) fx.playCorrect();
        return { isCorrect: true, earned, multiplier, streak: team.streak };
      } else {
        team.streak = 0;
        if (fx) fx.playError();
        return { isCorrect: false, earned: 0, multiplier: 1, streak: 0 };
      }
    },

    // Pauza qilish
    togglePause() {
      if (this.phase === 'playing') {
        this.phase = 'paused';
        const handler = this.modeHandlers[this.activeMode];
        if (handler && typeof handler.onPause === 'function') handler.onPause();
      } else if (this.phase === 'paused') {
        this.phase = 'playing';
        const handler = this.modeHandlers[this.activeMode];
        if (handler && typeof handler.onResume === 'function') handler.onResume();
      }
    },

    // Matchni yakunlash
    endMatch(winnerData = null) {
      this.phase = 'finished';
      if (window.EcoBattleCoreInput) {
        window.EcoBattleCoreInput.unbind();
      }

      const t1 = this.state.t1;
      const t2 = this.state.t2;

      let winnerId = 0; // 0 = durang
      if (winnerData && winnerData.winnerId) {
        winnerId = winnerData.winnerId;
      } else {
        if (t1.score > t2.score) winnerId = 1;
        else if (t2.score > t1.score) winnerId = 2;
      }

      // G'alaba barglari effekti
      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.triggerVictoryLeaves(50);
      }

      const handler = this.modeHandlers[this.activeMode];
      if (handler && typeof handler.onEnd === 'function') {
        handler.onEnd({
          winnerId,
          t1: this.state.t1,
          t2: this.state.t2,
          config: this.config
        });
      }
    }
  };

  window.EcoBattleCoreEngine = CoreEngine;
})();
