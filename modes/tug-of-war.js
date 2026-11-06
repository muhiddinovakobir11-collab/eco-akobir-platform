/**
 * ============================================================================
 * ECO-BATL REJIMI: TOZA ARQON (TUG-OF-WAR ARENA)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Mexanika:
 * - Ikkala jamoa umumiy savollarga bir vaqtda to'qnashadi.
 * - To'g'ri javob chegarani raqib tomonga suradi (pull).
 * - Chegara chetga yetsa (0% yoki 100%) mutlaq nokaut bilan o'yin tugaydi.
 * - Oxirgi 10 soniyada har bir to'g'ri javob kuchi 2x ga oshadi!
 * - Xato javob 1.5 soniya qotiradi (stun) va raqibga kichik ustunlik beradi.
 * - 60 FPS: Faqat transform va opacity orqali animatsiyalar.
 */

(function () {
  'use strict';

  // Tug-of-war uchun maxsus stillar
  (function injectTugStyles() {
    if (document.getElementById('eco-tug-styles')) return;
    const style = document.createElement('style');
    style.id = 'eco-tug-styles';
    style.textContent = `
      .rope-track-bg {
        background: linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(244, 63, 94, 0.25) 100%);
      }
      .rope-fiber-pattern {
        background-image: repeating-linear-gradient(45deg, #78350f, #78350f 10px, #b45309 10px, #b45309 20px);
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.6), 0 3px 8px rgba(0,0,0,0.5);
      }
      .rope-knot-marker {
        transition: left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: left;
      }
      @keyframes pullStrainLeft {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        50% { transform: translateX(-8px) rotate(-6deg); }
      }
      @keyframes pullStrainRight {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        50% { transform: translateX(8px) rotate(6deg); }
      }
      .strain-left {
        animation: pullStrainLeft 0.5s ease-in-out infinite;
      }
      .strain-right {
        animation: pullStrainRight 0.5s ease-in-out infinite;
      }
      @keyframes superPowerFlash {
        0%, 100% { opacity: 0.85; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.03); }
      }
      .super-power-banner {
        animation: superPowerFlash 0.8s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  })();

  const TugOfWarMode = {
    active: false,
    paused: false,
    config: {
      t1Name: "1-Jamoa (Zumrad)",
      t2Name: "2-Jamoa (Yoqut)",
      t1Avatar: "🛡️",
      t2Avatar: "⚡",
      matchTime: 60, // soniya
      questionCount: 30
    },

    state: {
      ropePercent: 50, // 0 = T1 Knockout Victory, 100 = T2 Knockout Victory
      timeRemaining: 60,
      timerInterval: null,
      isSuperPowerActive: false,
      questions: [],
      currentIndex: 0,
      t1: {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        isStunned: false,
        stunTimer: null,
        selectedIdx: null
      },
      t2: {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        isStunned: false,
        stunTimer: null,
        selectedIdx: null
      }
    },

    // 1. Rejimni boshlash
    async start(customConfig = {}) {
      this.config = Object.assign({}, this.config, customConfig);
      this.active = true;
      this.paused = false;

      this.state.ropePercent = 50;
      this.state.timeRemaining = this.config.matchTime || 60;
      this.state.isSuperPowerActive = false;
      this.state.currentIndex = 0;

      this.state.t1 = {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        isStunned: false,
        stunTimer: null,
        selectedIdx: null
      };

      this.state.t2 = {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        isStunned: false,
        stunTimer: null,
        selectedIdx: null
      };

      // Savollarni questions manager orqali olish
      if (window.EcoBattleCoreQuestions) {
        this.state.questions = await window.EcoBattleCoreQuestions.getQuestionsForMode('tug_of_war', 35);
      } else {
        this.state.questions = [];
      }

      // Agar savollar bo'lmasa fallback
      if (!this.state.questions || this.state.questions.length === 0) {
        this.state.questions = this.getFallbackQuestions();
      }

      this.renderArena();
      this.bindControls();
      this.startMatchTimer();

      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.playCountdown();
      }
    },

    // Fallback savollar
    getFallbackQuestions() {
      return [
        {
          q: "Plastik butilka tabiatda to'liq parchalanishi uchun necha yil kerak?",
          options: ["450 yil", "5 yil", "50 yil", "10 yil"],
          correct: 0,
          exp: "Oddiy PET butilka tabiatda 450-500 yilgacha saqlanadi."
        },
        {
          q: "ISO 14001 standarti qaysi sohani tartibga soladi?",
          options: ["Ekologik menejment tizimi", "Axborot xavfsizligi", "Moliyaviy audit", "Mehnat muhofazasi"],
          correct: 0,
          exp: "ISO 14001 xalqaro ekologik menejment standarti hisoblanadi."
        },
        {
          q: "Chiqindilarni boshqarish ierarxiyasida eng yuqori pog'ona nima?",
          options: ["Chiqindi hosil bo'lishini oldini olish (Reduce)", "Yoqish (Incineration)", "Poligonga ko'mish", "Qayta ishlash (Recycle)"],
          correct: 0,
          exp: "Birinchi navbatda keraksiz chiqindi hosil bo'lishini kamaytirish kerak."
        }
      ];
    },

    // 2. Maydonni chizish (HTML UI)
    renderArena() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const q = this.getCurrentQuestion();
      const t1 = this.state.t1;
      const t2 = this.state.t2;

      container.innerHTML = `
        <div id="tug-of-war-view" class="bg-slate-900 border border-emerald-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl relative select-none overflow-hidden">
          
          <!-- Orqa fon ambient effektlari -->
          <div class="absolute inset-0 pointer-events-none opacity-30 rope-track-bg"></div>

          <!-- YUQORI HEADER BARI: Taymer, Rejim nomi va Tugmalar -->
          <div class="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black uppercase flex items-center gap-1.5 shadow-sm">
                🪢 Toza Arqon Arenasi
              </span>
              <span class="text-xs text-slate-400 font-bold hidden sm:inline">
                ${this.state.currentIndex + 1} / ${this.state.questions.length} savol
              </span>
            </div>

            <!-- Markaziy Asosiy Taymer -->
            <div class="flex items-center gap-2">
              <div class="bg-slate-950 border border-slate-700/80 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-inner">
                <i class="fa-solid fa-stopwatch text-amber-400 text-sm"></i>
                <span id="tug-timer-display" class="font-mono text-lg font-black text-white">
                  ${this.state.timeRemaining}s
                </span>
              </div>
            </div>

            <!-- Boshqaruv tugmalari -->
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="EcoBattleTugOfWarMode.togglePause()" 
                id="tug-pause-btn" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-pause text-amber-400"></i>
                <span id="tug-pause-text">Pauza (Space)</span>
              </button>

              <button 
                type="button" 
                onclick="EcoBattleTugOfWarMode.exitToSetup()" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-door-open text-rose-400"></i>
                <span>Chiqish (Esc)</span>
              </button>
            </div>
          </div>

          <!-- 2X SUPER-KUCH BANNERI (Oxirgi 10 soniyada paydo bo'ladi) -->
          <div id="tug-super-power-banner" class="${this.state.isSuperPowerActive ? '' : 'hidden'} mb-4 py-2 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 text-slate-950 font-black text-xs text-center uppercase tracking-wider shadow-lg shadow-rose-500/20 super-power-banner flex items-center justify-center gap-2">
            <i class="fa-solid fa-bolt-lightning text-sm animate-bounce"></i>
            <span>⚡ 2X SUPER-KUCH FAOL! HAR BIR TO'G'RI JAVOB ARQONNI IKKI BAROBAR ITARADI! ⚡</span>
            <i class="fa-solid fa-bolt-lightning text-sm animate-bounce"></i>
          </div>

          <!-- ARQON MAYDONI (INTERAKTIV VISUAL TUG-OF-WAR TRACK) -->
          <div class="relative z-10 bg-slate-950/80 border-2 border-slate-800 rounded-2xl p-4 sm:p-6 mb-6 shadow-xl">
            
            <!-- Jamoalar sarlavhasi va hisoblari -->
            <div class="flex items-center justify-between mb-3 text-xs font-black">
              <div class="flex items-center gap-2 text-emerald-400">
                <span class="text-2xl">${this.config.t1Avatar}</span>
                <div>
                  <span class="text-sm block text-white">${this.config.t1Name}</span>
                  <span class="text-[10px] text-emerald-400 font-bold">Streak: x${t1.streak} • Ball: ${t1.score}</span>
                </div>
              </div>

              <!-- Chegara ko'rsatkichi -->
              <div class="text-center">
                <span class="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold block">Chegara Holati</span>
                <span id="tug-boundary-status" class="text-xs font-mono font-black text-amber-300">
                  ${Math.round(100 - this.state.ropePercent)}% Zumrad vs ${Math.round(this.state.ropePercent)}% Yoqut
                </span>
              </div>

              <div class="flex items-center gap-2 text-rose-400 text-right">
                <div>
                  <span class="text-sm block text-white">${this.config.t2Name}</span>
                  <span class="text-[10px] text-rose-400 font-bold">Streak: x${t2.streak} • Ball: ${t2.score}</span>
                </div>
                <span class="text-2xl">${this.config.t2Avatar}</span>
              </div>
            </div>

            <!-- Arqon yo'lagi (Track) -->
            <div class="relative h-12 sm:h-14 bg-slate-900 rounded-2xl overflow-hidden border border-slate-700/80 flex items-center px-4 shadow-inner">
              
              <!-- Chap (Zumrad) G'alaba Zonasi -->
              <div class="absolute left-0 top-0 bottom-0 w-8 sm:w-10 bg-emerald-500/30 border-r-2 border-dashed border-emerald-400 flex items-center justify-center text-[10px] font-black text-emerald-300 rotate-180 [writing-mode:vertical-lr]">
                K.O. CHEGARA
              </div>

              <!-- O'ng (Yoqut) G'alaba Zonasi -->
              <div class="absolute right-0 top-0 bottom-0 w-8 sm:w-10 bg-rose-500/30 border-l-2 border-dashed border-rose-400 flex items-center justify-center text-[10px] font-black text-rose-300 [writing-mode:vertical-lr]">
                K.O. CHEGARA
              </div>

              <!-- Markaziy chiziq (50%) -->
              <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-600/80 -translate-x-1/2 z-0"></div>

              <!-- Harakatlanuvchi qalin arqon tolasi -->
              <div class="w-full h-3 sm:h-4 rope-fiber-pattern rounded-full relative z-10 flex items-center">
                
                <!-- Markaziy tugun va bayroqcha (Knot & Ribbon) -->
                <div 
                  id="rope-knot" 
                  class="rope-knot-marker absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
                  style="left: ${this.state.ropePercent}%;"
                >
                  <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 border-2 border-slate-950 flex items-center justify-center text-xs font-black shadow-lg shadow-amber-500/50">
                    🚩
                  </div>
                  <div class="w-1.5 h-3 bg-amber-400 rounded-full"></div>
                </div>

              </div>

              <!-- Chapdagi tortuvchi piktogramma -->
              <div class="absolute left-12 z-20 text-xl ${this.state.ropePercent < 50 ? 'strain-left scale-110' : ''}">
                ${this.config.t1Avatar}
              </div>

              <!-- O'ngdagi tortuvchi piktogramma -->
              <div class="absolute right-12 z-20 text-xl ${this.state.ropePercent > 50 ? 'strain-right scale-110' : ''}">
                ${this.config.t2Avatar}
              </div>

            </div>

            <!-- Maslahat matni -->
            <div class="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
              <span>⬅️ <strong>${this.config.t1Name}</strong> darvozasi (0%)</span>
              <span class="text-slate-500 hidden sm:inline">To'g'ri javob arqonni o'z tomoningizga tortadi!</span>
              <span><strong>${this.config.t2Name}</strong> darvozasi (100%) ➡️</span>
            </div>
          </div>

          <!-- IKKI JAMOAGA SAVOL VA JAVOBLAR (SPLIT SCREEN) -->
          <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <!-- CHAP: 1-Jamoa (Zumrad) Kartasi -->
            <div class="relative p-5 rounded-2xl bg-slate-950/90 border-2 border-emerald-500/40 shadow-xl flex flex-col justify-between ${t1.isStunned ? 'opacity-50 ring-2 ring-rose-500/50' : ''}">
              
              <!-- Stun Holati Xabarnomasi -->
              ${t1.isStunned ? `
                <div class="absolute inset-0 bg-slate-950/85 backdrop-blur-xs rounded-2xl z-30 flex flex-col items-center justify-center text-center p-4">
                  <div class="text-3xl mb-1 animate-bounce">⚠️</div>
                  <span class="text-sm font-black text-rose-400 uppercase tracking-wide">Xato javob!</span>
                  <p class="text-xs text-slate-300 mt-1">1.5 soniyaga qotish (Stun)...</p>
                </div>
              ` : ''}

              <div>
                <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span class="text-xs font-black uppercase text-emerald-400 flex items-center gap-1.5">
                    <i class="fa-solid fa-shield-halved"></i> ${this.config.t1Name}
                  </span>
                  <span class="text-[11px] font-mono font-bold bg-slate-900 text-emerald-300 px-2.5 py-0.5 rounded-lg border border-emerald-500/30">
                    Klaviatura: A • S • D • F
                  </span>
                </div>

                <h3 class="text-sm sm:text-base font-bold text-white mb-4 leading-relaxed min-h-[50px]">
                  ${q.q || q.question}
                </h3>

                <!-- Variantlar (A, S, D, F) -->
                <div class="space-y-2.5">
                  ${q.options.map((opt, idx) => {
                    const keys = ['A', 'S', 'D', 'F'];
                    return `
                      <button 
                        type="button" 
                        onclick="EcoBattleTugOfWarMode.handleOptionClick(1, ${idx})" 
                        class="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-850 active:scale-[0.98] border border-slate-800 hover:border-emerald-500/80 transition-all cursor-pointer flex items-center justify-between group text-xs text-slate-200"
                      >
                        <div class="flex items-center gap-3">
                          <span class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-black flex items-center justify-center text-xs border border-emerald-500/40 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                            ${keys[idx]}
                          </span>
                          <span class="font-medium group-hover:text-white">${opt}</span>
                        </div>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>To'g'ri: <strong class="text-emerald-400">${t1.correctCount}</strong></span>
                <span>Noto'g'ri: <strong class="text-rose-400">${t1.wrongCount}</strong></span>
                <span>Max Streak: <strong class="text-amber-400">${t1.maxStreak}</strong></span>
              </div>
            </div>

            <!-- O'NG: 2-Jamoa (Yoqut) Kartasi -->
            <div class="relative p-5 rounded-2xl bg-slate-950/90 border-2 border-rose-500/40 shadow-xl flex flex-col justify-between ${t2.isStunned ? 'opacity-50 ring-2 ring-rose-500/50' : ''}">
              
              <!-- Stun Holati Xabarnomasi -->
              ${t2.isStunned ? `
                <div class="absolute inset-0 bg-slate-950/85 backdrop-blur-xs rounded-2xl z-30 flex flex-col items-center justify-center text-center p-4">
                  <div class="text-3xl mb-1 animate-bounce">⚠️</div>
                  <span class="text-sm font-black text-rose-400 uppercase tracking-wide">Xato javob!</span>
                  <p class="text-xs text-slate-300 mt-1">1.5 soniyaga qotish (Stun)...</p>
                </div>
              ` : ''}

              <div>
                <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span class="text-xs font-black uppercase text-rose-400 flex items-center gap-1.5">
                    <i class="fa-solid fa-swords"></i> ${this.config.t2Name}
                  </span>
                  <span class="text-[11px] font-mono font-bold bg-slate-900 text-rose-300 px-2.5 py-0.5 rounded-lg border border-rose-500/30">
                    Klaviatura: J • K • L • ;
                  </span>
                </div>

                <h3 class="text-sm sm:text-base font-bold text-white mb-4 leading-relaxed min-h-[50px]">
                  ${q.q || q.question}
                </h3>

                <!-- Variantlar (J, K, L, ;) -->
                <div class="space-y-2.5">
                  ${q.options.map((opt, idx) => {
                    const keys = ['J', 'K', 'L', ';'];
                    return `
                      <button 
                        type="button" 
                        onclick="EcoBattleTugOfWarMode.handleOptionClick(2, ${idx})" 
                        class="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-850 active:scale-[0.98] border border-slate-800 hover:border-rose-500/80 transition-all cursor-pointer flex items-center justify-between group text-xs text-slate-200"
                      >
                        <div class="flex items-center gap-3">
                          <span class="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 font-mono font-black flex items-center justify-center text-xs border border-rose-500/40 group-hover:bg-rose-500 group-hover:text-slate-950 transition-colors">
                            ${keys[idx]}
                          </span>
                          <span class="font-medium group-hover:text-white">${opt}</span>
                        </div>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>To'g'ri: <strong class="text-emerald-400">${t2.correctCount}</strong></span>
                <span>Noto'g'ri: <strong class="text-rose-400">${t2.wrongCount}</strong></span>
                <span>Max Streak: <strong class="text-amber-400">${t2.maxStreak}</strong></span>
              </div>
            </div>

          </div>

        </div>
      `;
    },

    getCurrentQuestion() {
      const qs = this.state.questions;
      if (!qs || qs.length === 0) return this.getFallbackQuestions()[0];
      return qs[this.state.currentIndex % qs.length];
    },

    // 3. Markaziy Taymer va 2x Super-Kuch
    startMatchTimer() {
      this.clearTimers();

      this.state.timerInterval = setInterval(() => {
        if (!this.active || this.paused) return;

        this.state.timeRemaining--;

        // Taymer matnini yangilash
        const display = document.getElementById('tug-timer-display');
        if (display) {
          display.textContent = `${this.state.timeRemaining}s`;
        }

        // Oxirgi 10 soniya tekshiruvi: 2x SUPER-KUCH
        if (this.state.timeRemaining <= 10 && !this.state.isSuperPowerActive) {
          this.activateSuperPower();
        }

        // Vaqt tugaganda g'olibni aniqlash
        if (this.state.timeRemaining <= 0) {
          this.clearTimers();
          this.finishByTimeLimit();
        }
      }, 1000);
    },

    activateSuperPower() {
      this.state.isSuperPowerActive = true;
      const banner = document.getElementById('tug-super-power-banner');
      if (banner) banner.classList.remove('hidden');

      const timerEl = document.getElementById('tug-timer-display');
      if (timerEl && window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.triggerTimerWarning(timerEl);
        window.EcoBattleCoreFx.shakeScreen(400);
      }
    },

    // 4. Javobni qabul qilish va Arqonni itarish (Pulling physics)
    handleAnswer(teamId, optionIndex) {
      if (!this.active || this.paused) return;

      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      if (team.isStunned) return; // Qotgan bo'lsa javob qabul qilinmaydi

      const q = this.getCurrentQuestion();
      const isCorrect = (optionIndex === q.correct);

      const fx = window.EcoBattleCoreFx;

      if (isCorrect) {
        team.correctCount++;
        team.streak++;
        if (team.streak > team.maxStreak) team.maxStreak = team.streak;

        // Ball hisoblash
        const baseScore = 100;
        const streakBonus = Math.min(team.streak * 25, 200);
        team.score += (baseScore + streakBonus);

        // Tortish kuchi (Pull Power)
        let pullPower = 7; // Asosiy siljish: 7%
        if (team.streak >= 5) pullPower += 3;
        else if (team.streak >= 3) pullPower += 1.5;

        // Oxirgi 10 soniyada kuch 2x!
        if (this.state.isSuperPowerActive) {
          pullPower *= 2;
        }

        // Chegarani o'zgartirish:
        // 1-Jamoa (Zumrad) chapga tortadi: 50 -> 0 ga qarab
        // 2-Jamoa (Yoqut) o'ngga tortadi: 50 -> 100 ga qarab
        if (teamId === 1) {
          this.state.ropePercent = Math.max(0, this.state.ropePercent - pullPower);
        } else {
          this.state.ropePercent = Math.min(100, this.state.ropePercent + pullPower);
        }

        if (fx) {
          fx.playCorrect();
          fx.flashBorder(teamId);
        }

        this.updateRopeUI();

        // Nokaut tekshiruvi
        if (this.state.ropePercent <= 0) {
          this.finishByKnockout(1);
          return;
        } else if (this.state.ropePercent >= 100) {
          this.finishByKnockout(2);
          return;
        }

        // Keyingi savolga o'tish (Ikkala jamoa uchun umumiy)
        this.nextQuestion();

      } else {
        // Noto'g'ri javob: Qotish (Stun) va Raqibga kichik ustunlik
        team.wrongCount++;
        team.streak = 0;

        if (fx) {
          fx.playError();
          fx.shakeScreen(350);
        }

        // Raqib tomoniga 3% siljish
        const penaltyShift = this.state.isSuperPowerActive ? 5 : 3;
        if (teamId === 1) {
          this.state.ropePercent = Math.min(100, this.state.ropePercent + penaltyShift);
        } else {
          this.state.ropePercent = Math.max(0, this.state.ropePercent - penaltyShift);
        }
        this.updateRopeUI();

        // Stun mexanikasi: 1.5 soniya
        team.isStunned = true;
        this.renderArena(); // Stun qatlami paydo bo'lishi uchun

        if (team.stunTimer) clearTimeout(team.stunTimer);
        team.stunTimer = setTimeout(() => {
          team.isStunned = false;
          if (this.active) this.renderArena();
        }, 1500);

        // Agar penalti orqali nokaut bo'lsa
        if (this.state.ropePercent <= 0) {
          this.finishByKnockout(1);
        } else if (this.state.ropePercent >= 100) {
          this.finishByKnockout(2);
        }
      }
    },

    updateRopeUI() {
      const knot = document.getElementById('rope-knot');
      if (knot) {
        knot.style.left = `${this.state.ropePercent}%`;
      }
      const statusEl = document.getElementById('tug-boundary-status');
      if (statusEl) {
        const t1Perc = Math.round(100 - this.state.ropePercent);
        const t2Perc = Math.round(this.state.ropePercent);
        statusEl.textContent = `${t1Perc}% Zumrad vs ${t2Perc}% Yoqut`;
      }
    },

    nextQuestion() {
      this.state.currentIndex++;
      this.renderArena();
    },

    handleOptionClick(teamId, optionIndex) {
      this.handleAnswer(teamId, optionIndex);
    },

    // 5. Boshqaruvni ulash (CoreInput bilan integratsiya)
    bindControls() {
      if (window.EcoBattleCoreInput) {
        window.EcoBattleCoreInput.onAction((teamId, action, data) => {
          if (!this.active) return;

          if (action === 'select_option') {
            this.handleAnswer(teamId, data.optionIndex);
          } else if (action === 'toggle_pause') {
            this.togglePause();
          } else if (action === 'escape') {
            this.exitToSetup();
          }
        });
      }
    },

    togglePause() {
      this.paused = !this.paused;
      const btnText = document.getElementById('tug-pause-text');
      if (btnText) {
        btnText.textContent = this.paused ? "Davom ettirish" : "Pauza (Space)";
      }
      if (window.ecoAudio) window.ecoAudio.playClick();
    },

    exitToSetup() {
      this.clearTimers();
      this.active = false;
      if (window.EcoBattleArena && typeof window.EcoBattleArena.init === 'function') {
        window.EcoBattleArena.init();
      }
    },

    clearTimers() {
      if (this.state.timerInterval) {
        clearInterval(this.state.timerInterval);
        this.state.timerInterval = null;
      }
      if (this.state.t1.stunTimer) clearTimeout(this.state.t1.stunTimer);
      if (this.state.t2.stunTimer) clearTimeout(this.state.t2.stunTimer);
    },

    // 6. G'alaba va Yakunlash
    finishByKnockout(winnerId) {
      this.clearTimers();
      this.active = false;
      this.showVictoryModal(winnerId, 'knockout');
    },

    finishByTimeLimit() {
      this.clearTimers();
      this.active = false;

      let winnerId = 0;
      if (this.state.ropePercent < 50) winnerId = 1;
      else if (this.state.ropePercent > 50) winnerId = 2;

      this.showVictoryModal(winnerId, 'timeout');
    },

    showVictoryModal(winnerId, reason) {
      const fx = window.EcoBattleCoreFx;
      if (fx) {
        fx.playVictory();
        fx.triggerVictoryLeaves(60);
      }

      const winnerName = winnerId === 1 ? this.config.t1Name : (winnerId === 2 ? this.config.t2Name : "Durang!");
      const winnerAvatar = winnerId === 1 ? this.config.t1Avatar : (winnerId === 2 ? this.config.t2Avatar : "🤝");
      const winnerColor = winnerId === 1 ? 'text-emerald-400' : (winnerId === 2 ? 'text-rose-400' : 'text-amber-400');

      const isKO = (reason === 'knockout');

      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      container.innerHTML = `
        <div class="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-2xl mx-auto text-center relative select-none animate-bounce-in">
          
          <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center text-4xl shadow-xl shadow-amber-500/30 mb-4">
            🏆
          </div>

          <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black uppercase tracking-wider">
            ${isKO ? '🔥 MUTLAQ NOKAUT G\'ALABASI!' : '⏱️ VAQT BO\'YICHA G\'ALABA!'}
          </span>

          <h2 class="text-2xl sm:text-3xl font-black text-white mt-3">
            <span class="${winnerColor}">${winnerAvatar} ${winnerName}</span> G'alaba Qozondi!
          </h2>

          <p class="text-xs text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
            ${isKO 
              ? "Chegara to'liq raqib tomoniga surib tashlandi va arqon tortishuvida to'liq ustunlikka erishildi!" 
              : "Vaqt tugadi va chegarani o'z foydasiga ko'proq ushlab turgan jamoa g'olib deb topildi!"}
          </p>

          <!-- Statistikalar -->
          <div class="grid grid-cols-2 gap-4 my-6 text-left">
            
            <div class="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30">
              <span class="text-xs font-black text-emerald-400 uppercase block mb-1">
                ${this.config.t1Avatar} ${this.config.t1Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>To'g'ri javob: <strong class="text-white">${this.state.t1.correctCount} ta</strong></div>
                <div>Xatolar: <strong class="text-rose-400">${this.state.t1.wrongCount} ta</strong></div>
                <div>Max Streak: <strong class="text-amber-400">x${this.state.t1.maxStreak}</strong></div>
                <div>Yakuniy ball: <strong class="text-emerald-400">${this.state.t1.score} XP</strong></div>
              </div>
            </div>

            <div class="bg-slate-950 p-4 rounded-2xl border border-rose-500/30">
              <span class="text-xs font-black text-rose-400 uppercase block mb-1">
                ${this.config.t2Avatar} ${this.config.t2Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>To'g'ri javob: <strong class="text-white">${this.state.t2.correctCount} ta</strong></div>
                <div>Xatolar: <strong class="text-rose-400">${this.state.t2.wrongCount} ta</strong></div>
                <div>Max Streak: <strong class="text-amber-400">x${this.state.t2.maxStreak}</strong></div>
                <div>Yakuniy ball: <strong class="text-rose-400">${this.state.t2.score} XP</strong></div>
              </div>
            </div>

          </div>

          <!-- Tugmalar -->
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <button 
              type="button" 
              onclick="EcoBattleTugOfWarMode.start()" 
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-rotate-right"></i> Qayta O'ynash
            </button>

            <button 
              type="button" 
              onclick="EcoBattleTugOfWarMode.exitToSetup()" 
              class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-list"></i> Boshqa Rejimni Tanlash
            </button>
          </div>

        </div>
      `;
    }
  };

  // Global ob'yekt sifatida e'lon qilish va CoreEngine'ga ro'yxatdan o'tkazish
  window.EcoBattleTugOfWarMode = TugOfWarMode;
  if (window.EcoBattleCoreEngine) {
    window.EcoBattleCoreEngine.registerMode('tug_of_war', TugOfWarMode);
  }
})();
