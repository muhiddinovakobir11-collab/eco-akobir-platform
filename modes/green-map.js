/**
 * ============================================================================
 * ECO-BATL REJIMI: YASHIL XARITA (5x5 STRATEGIK HUDUD EGALLASH)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Mexanika:
 * - 5x5 o'lchamdagi 25 ta katakli strategik ekologik xarita.
 * - Savolga to'g'ri javob bergan jamoa katakni egallash huquqiga ega bo'ladi:
 *   - 1-Jamoa (Zumrad): 🌲 Daraxt (Yashil maydon) ekadi.
 *   - 2-Jamoa (Yoqut): 🏭 Zavod (Sanoat hududi) quradi.
 * - Raqib katagini bosib olish mumkin (Zavod ustiga Daraxt, yoki Daraxt ustiga Zavod).
 * - To'liq gorizontal, vertikal yoki diagonal 5 talik qator +300 ball COMBO beradi!
 * - 60 FPS: Faqat transform va opacity orqali silliq animatsiyalar.
 */

(function () {
  'use strict';

  // Yashil xarita maxsus stillari
  (function injectMapStyles() {
    if (document.getElementById('eco-green-map-styles')) return;
    const style = document.createElement('style');
    style.id = 'eco-green-map-styles';
    style.textContent = `
      .map-grid-cell {
        transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        will-change: transform;
      }
      .map-grid-cell:hover {
        transform: scale(1.06) translateY(-2px);
        z-index: 5;
      }
      .cell-tree {
        background: radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(6, 78, 59, 0.6) 100%) !important;
        border-color: #10b981 !important;
        box-shadow: 0 0 12px rgba(16, 185, 129, 0.45);
      }
      .cell-factory {
        background: radial-gradient(circle, rgba(244, 63, 94, 0.35) 0%, rgba(136, 19, 55, 0.6) 100%) !important;
        border-color: #f43f5e !important;
        box-shadow: 0 0 12px rgba(244, 63, 94, 0.45);
      }
      @keyframes popInCell {
        0% { transform: scale(0.4) rotate(-15deg); opacity: 0; }
        70% { transform: scale(1.18) rotate(5deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
      .cell-pop {
        animation: popInCell 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      }
      @keyframes lineComboPulse {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px transparent); }
        50% { transform: scale(1.12); filter: drop-shadow(0 0 16px #fde047); }
      }
      .line-combo-active {
        animation: lineComboPulse 0.8s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  })();

  const WINNING_LINES = [
    // 5 Gorizontal
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // 5 Vertikal
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // 2 Diagonal
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ];

  const GreenMapMode = {
    active: false,
    paused: false,
    config: {
      t1Name: "1-Jamoa (Zumrad)",
      t2Name: "2-Jamoa (Yoqut)",
      t1Avatar: "🛡️",
      t2Avatar: "⚡",
      matchTime: 75,
      questionCount: 30
    },

    state: {
      grid: Array(25).fill(null), // null, 1 (tree), 2 (factory)
      timeRemaining: 75,
      timerInterval: null,
      completedLines: new Set(),
      questions: [],
      currentIndex: 0,
      pendingAction: null, // { teamId, timer }
      t1: {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        treesCount: 0,
        bonusLines: 0,
        isStunned: false,
        stunTimer: null
      },
      t2: {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        factoriesCount: 0,
        bonusLines: 0,
        isStunned: false,
        stunTimer: null
      }
    },

    // 1. Rejimni boshlash
    async start(customConfig = {}) {
      this.config = Object.assign({}, this.config, customConfig);
      this.active = true;
      this.paused = false;

      this.state.grid = Array(25).fill(null);
      this.state.timeRemaining = this.config.matchTime || 75;
      this.state.completedLines = new Set();
      this.state.currentIndex = 0;
      this.state.pendingAction = null;

      this.state.t1 = {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        treesCount: 0,
        bonusLines: 0,
        isStunned: false,
        stunTimer: null
      };

      this.state.t2 = {
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        maxStreak: 0,
        factoriesCount: 0,
        bonusLines: 0,
        isStunned: false,
        stunTimer: null
      };

      if (window.EcoBattleCoreQuestions) {
        this.state.questions = await window.EcoBattleCoreQuestions.getQuestionsForMode('green_map', 35);
      } else {
        this.state.questions = [];
      }

      if (!this.state.questions || this.state.questions.length === 0) {
        this.state.questions = this.getFallbackQuestions();
      }

      this.renderArena();
      this.bindControls();
      this.startTimer();

      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.playCountdown();
      }
    },

    getFallbackQuestions() {
      return [
        {
          q: "5x5 xaritada 'Daraxt ekish' hududning biologik salomatligini qanday oshiradi?",
          options: ["CO2 ni yutadi va tuproq eroziyasini to'xtatadi", "Faqat soya beradi", "Faqat meva beradi", "Tuproqni quritadi"],
          correct: 0,
          exp: "Daraxt ildizlari tuproqni mustahkamlaydi va kislorod ishlab chiqaradi."
        },
        {
          q: "Sanoat korxonasida filtr o'rnatilmasa, atrof-muhitga qanday zarar yetadi?",
          options: ["Atmosferaga zaharli gazlar va og'ir chang tarqaladi", "Faqat havo harorati ko'tariladi", "Hech qanday ta'sir bo'lmaydi", "Yog'ingarchilik ko'payadi"],
          correct: 0,
          exp: "Filtrsiz korxonalar atmosferaga SO2, NOx va og'ir changlarni tarqatadi."
        },
        {
          q: "Aylanma (Circular) iqtisodiyot modelining asosiy tamoyili nima?",
          options: ["Chiqindisiz ishlab chiqarish va resurslarni qayta aylantirish", "Chiqindilarni ko'proq yoqish", "Plastikdan ko'proq foydalanish", "Tabiiy resurslarni ayamasdan sarflash"],
          correct: 0,
          exp: "Yopiq siklli aylanma iqtisodiyot chiqindini resursga aylantiradi."
        }
      ];
    },

    getCurrentQuestion() {
      const qs = this.state.questions;
      if (!qs || qs.length === 0) return this.getFallbackQuestions()[0];
      return qs[this.state.currentIndex % qs.length];
    },

    // 2. Maydonni render qilish
    renderArena() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const q = this.getCurrentQuestion();
      const t1 = this.state.t1;
      const t2 = this.state.t2;

      // Kataklar hisobi
      let treeTotal = 0, factoryTotal = 0;
      this.state.grid.forEach(cell => {
        if (cell === 1) treeTotal++;
        else if (cell === 2) factoryTotal++;
      });
      t1.treesCount = treeTotal;
      t2.factoriesCount = factoryTotal;

      container.innerHTML = `
        <div id="green-map-view" class="bg-slate-900 border border-lime-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl relative select-none overflow-hidden">
          
          <!-- Top Header -->
          <div class="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-lime-500/20 to-emerald-500/20 text-lime-300 border border-lime-500/40 text-xs font-black uppercase flex items-center gap-1.5 shadow-sm">
                🗺️ Yashil Xarita 5x5
              </span>
              <span class="text-xs text-slate-400 font-bold hidden sm:inline">
                Strategik Hudud Egallash
              </span>
            </div>

            <!-- Taymer -->
            <div class="flex items-center gap-2">
              <div class="bg-slate-950 border border-slate-700/80 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-inner">
                <i class="fa-solid fa-stopwatch text-amber-400 text-sm"></i>
                <span id="map-timer-display" class="font-mono text-lg font-black text-white">
                  ${this.state.timeRemaining}s
                </span>
              </div>
            </div>

            <!-- Boshqaruv tugmalari -->
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="EcoBattleGreenMapMode.togglePause()" 
                id="map-pause-btn" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-pause text-amber-400"></i>
                <span id="map-pause-text">Pauza (Space)</span>
              </button>

              <button 
                type="button" 
                onclick="EcoBattleGreenMapMode.exitToSetup()" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-door-open text-rose-400"></i>
                <span>Chiqish (Esc)</span>
              </button>
            </div>
          </div>

          <!-- Pending Action banner (Qaysi jamoa katak tanlashi kerak) -->
          <div id="map-action-banner" class="mb-4 py-2 px-4 rounded-2xl ${this.state.pendingAction ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'} text-xs font-black text-center transition-all flex items-center justify-center gap-2">
            ${this.state.pendingAction 
              ? `<i class="fa-solid fa-hand-pointer animate-bounce"></i> <span>${this.state.pendingAction.teamId === 1 ? '🌲 ' + this.config.t1Name + ': Daraxt ekish uchun istalgan katakni bosing!' : '🏭 ' + this.config.t2Name + ': Zavod qurish uchun istalgan katakni bosing!'} (2s)</span>`
              : `<span>💡 Savolga birinchi to'g'ri javob bering va 5x5 xaritadan katakni egallang! 5 talik qator +300 ball beradi!</span>`
            }
          </div>

          <!-- ASOSIY O'YIN MAYDONI: Savollar (Chap/O'ng) va Markazda 5x5 Xarita -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            <!-- CHAP: 1-Jamoa (Zumrad) Savol Paneli -->
            <div class="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border-2 border-emerald-500/40 shadow-xl flex flex-col justify-between ${t1.isStunned ? 'opacity-50 ring-2 ring-rose-500/50' : ''}">
              <div>
                <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span class="text-xs font-black uppercase text-emerald-400 flex items-center gap-1.5">
                    <i class="fa-solid fa-tree"></i> ${this.config.t1Name}
                  </span>
                  <span class="text-[10px] font-mono font-bold bg-slate-900 text-emerald-300 px-2 py-0.5 rounded-lg border border-emerald-500/30">
                    A • S • D • F
                  </span>
                </div>

                <div class="flex items-center justify-between text-xs mb-3 font-bold">
                  <span class="text-emerald-400">🌲 Daraxtlar: ${t1.treesCount}/25</span>
                  <span class="text-amber-400">Ball: ${t1.score} XP</span>
                </div>

                <h4 class="text-xs sm:text-sm font-bold text-white mb-3 min-h-[45px] leading-relaxed">
                  ${q.q || q.question}
                </h4>

                <div class="space-y-2">
                  ${q.options.map((opt, idx) => {
                    const keys = ['A', 'S', 'D', 'F'];
                    return `
                      <button 
                        type="button" 
                        onclick="EcoBattleGreenMapMode.handleAnswer(1, ${idx})" 
                        class="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 active:scale-[0.98] border border-slate-800 hover:border-emerald-500/80 transition-all cursor-pointer flex items-center justify-between group text-xs text-slate-200"
                      >
                        <div class="flex items-center gap-2.5">
                          <span class="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 font-mono font-black flex items-center justify-center text-[10px] border border-emerald-500/40 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                            ${keys[idx]}
                          </span>
                          <span class="font-medium group-hover:text-white line-clamp-2">${opt}</span>
                        </div>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <div class="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span>Streak: <strong class="text-amber-400">x${t1.streak}</strong></span>
                <span>To'liq Qatorlar: <strong class="text-emerald-400">${t1.bonusLines} ta</strong></span>
              </div>
            </div>

            <!-- MARKAZ: 5x5 STRATEGIK XARITA -->
            <div class="lg:col-span-4 bg-slate-950/90 border-2 border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center">
              
              <div class="flex items-center justify-between w-full mb-3 px-1 text-xs font-black">
                <span class="text-emerald-400 flex items-center gap-1">
                  <span>🌲</span> ${t1.treesCount} ta
                </span>
                <span class="text-[11px] text-slate-400 uppercase tracking-wider font-extrabold">5x5 Eko-Maydon</span>
                <span class="text-rose-400 flex items-center gap-1">
                  ${t2.factoriesCount} ta <span>🏭</span>
                </span>
              </div>

              <!-- 5x5 Grid Container -->
              <div class="grid grid-cols-5 gap-2 w-full max-w-[280px] sm:max-w-[320px] aspect-square bg-slate-900 p-2.5 rounded-2xl border border-slate-700/80 shadow-inner">
                ${this.state.grid.map((cell, idx) => {
                  let cellCls = "bg-slate-950/80 border border-slate-800 text-slate-600 hover:border-slate-600";
                  let content = `<span class="text-[10px] font-mono opacity-30">${idx + 1}</span>`;

                  if (cell === 1) {
                    cellCls = "cell-tree cell-pop text-emerald-300 font-black";
                    content = `<span class="text-xl sm:text-2xl drop-shadow">🌲</span>`;
                  } else if (cell === 2) {
                    cellCls = "cell-factory cell-pop text-rose-300 font-black";
                    content = `<span class="text-xl sm:text-2xl drop-shadow">🏭</span>`;
                  }

                  return `
                    <button 
                      type="button" 
                      onclick="EcoBattleGreenMapMode.handleCellClick(${idx})" 
                      class="map-grid-cell rounded-xl flex items-center justify-center cursor-pointer select-none ${cellCls}"
                      title="Katak #${idx + 1}"
                    >
                      ${content}
                    </button>
                  `;
                }).join('')}
              </div>

              <div class="mt-3 text-[10px] text-slate-500 text-center leading-tight">
                To'g'ri javob bergach, istalgan katakni bosing yoki raqib mulkini tortib oling!
              </div>

            </div>

            <!-- O'NG: 2-Jamoa (Yoqut) Savol Paneli -->
            <div class="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-slate-950/90 border-2 border-rose-500/40 shadow-xl flex flex-col justify-between ${t2.isStunned ? 'opacity-50 ring-2 ring-rose-500/50' : ''}">
              <div>
                <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span class="text-xs font-black uppercase text-rose-400 flex items-center gap-1.5">
                    <i class="fa-solid fa-industry"></i> ${this.config.t2Name}
                  </span>
                  <span class="text-[10px] font-mono font-bold bg-slate-900 text-rose-300 px-2 py-0.5 rounded-lg border border-rose-500/30">
                    J • K • L • ;
                  </span>
                </div>

                <div class="flex items-center justify-between text-xs mb-3 font-bold">
                  <span class="text-rose-400">🏭 Zavodlar: ${t2.factoriesCount}/25</span>
                  <span class="text-amber-400">Ball: ${t2.score} XP</span>
                </div>

                <h4 class="text-xs sm:text-sm font-bold text-white mb-3 min-h-[45px] leading-relaxed">
                  ${q.q || q.question}
                </h4>

                <div class="space-y-2">
                  ${q.options.map((opt, idx) => {
                    const keys = ['J', 'K', 'L', ';'];
                    return `
                      <button 
                        type="button" 
                        onclick="EcoBattleGreenMapMode.handleAnswer(2, ${idx})" 
                        class="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 active:scale-[0.98] border border-slate-800 hover:border-rose-500/80 transition-all cursor-pointer flex items-center justify-between group text-xs text-slate-200"
                      >
                        <div class="flex items-center gap-2.5">
                          <span class="w-5 h-5 rounded-md bg-rose-500/20 text-rose-400 font-mono font-black flex items-center justify-center text-[10px] border border-rose-500/40 group-hover:bg-rose-500 group-hover:text-slate-950 transition-colors">
                            ${keys[idx]}
                          </span>
                          <span class="font-medium group-hover:text-white line-clamp-2">${opt}</span>
                        </div>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <div class="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span>Streak: <strong class="text-amber-400">x${t2.streak}</strong></span>
                <span>To'liq Qatorlar: <strong class="text-rose-400">${t2.bonusLines} ta</strong></span>
              </div>
            </div>

          </div>

        </div>
      `;
    },

    // 3. Javobni qabul qilish
    handleAnswer(teamId, optionIndex) {
      if (!this.active || this.paused) return;

      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      if (team.isStunned) return;

      const q = this.getCurrentQuestion();
      const isCorrect = (optionIndex === q.correct);
      const fx = window.EcoBattleCoreFx;

      if (isCorrect) {
        team.correctCount++;
        team.streak++;
        if (team.streak > team.maxStreak) team.maxStreak = team.streak;

        const earned = 100 + (team.streak >= 3 ? 50 : 0);
        team.score += earned;

        if (fx) {
          fx.playCorrect();
          fx.flashBorder(teamId);
        }

        // Katak egallash huquqini berish
        this.grantCellPlacement(teamId);

      } else {
        team.wrongCount++;
        team.streak = 0;

        if (fx) {
          fx.playError();
          fx.shakeScreen(300);
        }

        // Stun 1.5 soniya
        team.isStunned = true;
        this.renderArena();

        if (team.stunTimer) clearTimeout(team.stunTimer);
        team.stunTimer = setTimeout(() => {
          team.isStunned = false;
          if (this.active) this.renderArena();
        }, 1500);
      }
    },

    // 4. Katak egallash huquqi va avto-joylash
    grantCellPlacement(teamId) {
      // Oldingi taymer bo'lsa tozalash
      if (this.state.pendingAction && this.state.pendingAction.timer) {
        clearTimeout(this.state.pendingAction.timer);
      }

      this.state.pendingAction = { teamId, timer: null };
      this.renderArena();

      // Agar o'yinchi 2 soniya ichida katakni tanlamasa, avtomatik strategik katak tanlanadi
      this.state.pendingAction.timer = setTimeout(() => {
        if (this.state.pendingAction && this.state.pendingAction.teamId === teamId) {
          const autoIdx = this.findBestCell(teamId);
          this.applyPlacement(teamId, autoIdx);
        }
      }, 2000);
    },

    handleCellClick(cellIndex) {
      if (!this.active || this.paused) return;
      if (!this.state.pendingAction) {
        // Agar action yo'q bo'lsa, xabar
        return;
      }

      const teamId = this.state.pendingAction.teamId;
      if (this.state.pendingAction.timer) {
        clearTimeout(this.state.pendingAction.timer);
      }
      this.applyPlacement(teamId, cellIndex);
    },

    applyPlacement(teamId, cellIndex) {
      this.state.pendingAction = null;
      this.state.grid[cellIndex] = teamId; // 1 = Daraxt, 2 = Zavod

      const fx = window.EcoBattleCoreFx;
      if (fx) fx.playClick();

      // 5 talik qator tekshiruvi (Gorizontal, Vertikal, Diagonal)
      this.checkLineCombos(teamId);

      // Keyingi savolga o'tish
      this.state.currentIndex++;
      this.renderArena();

      // Barcha 25 ta katak to'lgan bo'lsa tugatish
      if (this.state.grid.every(cell => cell !== null)) {
        this.finishMatch();
      }
    },

    // Strategik eng ma'qul katakni topish (Auto-solver)
    findBestCell(teamId) {
      const oppId = teamId === 1 ? 2 : 1;
      const grid = this.state.grid;

      // 1. Qatorni to'ldirib 5 ta qiladigan bo'sh katak bormi?
      for (let line of WINNING_LINES) {
        const teamCells = line.filter(idx => grid[idx] === teamId);
        const emptyCells = line.filter(idx => grid[idx] === null);
        if (teamCells.length === 4 && emptyCells.length === 1) {
          return emptyCells[0];
        }
      }

      // 2. Raqibning 4 talik qatorini to'sadigan katak bormi?
      for (let line of WINNING_LINES) {
        const oppCells = line.filter(idx => grid[idx] === oppId);
        if (oppCells.length >= 3) {
          const target = oppCells[0];
          return target;
        }
      }

      // 3. Markaziy katak (12)
      if (grid[12] !== teamId) return 12;

      // 4. Istalgan bo'sh katak
      const emptyIndices = grid.map((val, idx) => val === null ? idx : null).filter(idx => idx !== null);
      if (emptyIndices.length > 0) {
        return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      }

      // 5. Raqibning istalgan katagini bosib olish
      const oppIndices = grid.map((val, idx) => val === oppId ? idx : null).filter(idx => idx !== null);
      if (oppIndices.length > 0) {
        return oppIndices[Math.floor(Math.random() * oppIndices.length)];
      }

      return 0;
    },

    // 5 talik qator kombinatsiyalari
    checkLineCombos(teamId) {
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      const grid = this.state.grid;

      WINNING_LINES.forEach((line, lineIdx) => {
        const lineKey = `${teamId}_${lineIdx}`;
        if (this.state.completedLines.has(lineKey)) return;

        const isFullLine = line.every(idx => grid[idx] === teamId);
        if (isFullLine) {
          this.state.completedLines.add(lineKey);
          team.bonusLines++;
          team.score += 300; // +300 Combo Bonusi

          const fx = window.EcoBattleCoreFx;
          if (fx) {
            fx.playVictory();
            fx.triggerVictoryLeaves(25);
          }
        }
      });
    },

    // 5. Taymer
    startTimer() {
      this.clearTimers();
      this.state.timerInterval = setInterval(() => {
        if (!this.active || this.paused) return;

        this.state.timeRemaining--;

        const display = document.getElementById('map-timer-display');
        if (display) {
          display.textContent = `${this.state.timeRemaining}s`;
        }

        if (this.state.timeRemaining <= 10 && window.EcoBattleCoreFx) {
          window.EcoBattleCoreFx.triggerTimerWarning(display);
        }

        if (this.state.timeRemaining <= 0) {
          this.clearTimers();
          this.finishMatch();
        }
      }, 1000);
    },

    clearTimers() {
      if (this.state.timerInterval) {
        clearInterval(this.state.timerInterval);
        this.state.timerInterval = null;
      }
      if (this.state.pendingAction && this.state.pendingAction.timer) {
        clearTimeout(this.state.pendingAction.timer);
      }
      if (this.state.t1.stunTimer) clearTimeout(this.state.t1.stunTimer);
      if (this.state.t2.stunTimer) clearTimeout(this.state.t2.stunTimer);
    },

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
      const btnText = document.getElementById('map-pause-text');
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

    // 6. G'alaba va Yakunlash
    finishMatch() {
      this.clearTimers();
      this.active = false;

      const t1 = this.state.t1;
      const t2 = this.state.t2;

      let winnerId = 0;
      if (t1.treesCount > t2.factoriesCount) winnerId = 1;
      else if (t2.factoriesCount > t1.treesCount) winnerId = 2;
      else {
        // Hudud teng bo'lsa ball bo'yicha
        if (t1.score > t2.score) winnerId = 1;
        else if (t2.score > t1.score) winnerId = 2;
      }

      const fx = window.EcoBattleCoreFx;
      if (fx) {
        fx.playVictory();
        fx.triggerVictoryLeaves(50);
      }

      const winnerName = winnerId === 1 ? this.config.t1Name : (winnerId === 2 ? this.config.t2Name : "Durang!");
      const winnerAvatar = winnerId === 1 ? this.config.t1Avatar : (winnerId === 2 ? this.config.t2Avatar : "🤝");
      const winnerColor = winnerId === 1 ? 'text-emerald-400' : (winnerId === 2 ? 'text-rose-400' : 'text-amber-400');

      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      container.innerHTML = `
        <div class="bg-slate-900 border-2 border-lime-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-2xl mx-auto text-center relative select-none animate-bounce-in">
          
          <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-lime-500 to-emerald-400 text-slate-950 flex items-center justify-center text-4xl shadow-xl shadow-lime-500/30 mb-4">
            🗺️
          </div>

          <span class="px-3 py-1 rounded-full bg-lime-500/20 text-lime-300 border border-lime-500/30 text-xs font-black uppercase tracking-wider">
            YASHIL XARITA STRATEGIK JANGI YAKUNLANDI
          </span>

          <h2 class="text-2xl sm:text-3xl font-black text-white mt-3">
            <span class="${winnerColor}">${winnerAvatar} ${winnerName}</span> Xaritani Egalladi!
          </h2>

          <p class="text-xs text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
            ${winnerId === 1 
              ? "Zumrad jamoasi xaritani yam-yashil daraxtzorlarga aylantirdi va ekologik barqarorlikka erishdi!" 
              : "Yoqut jamoasi sanoat quvvatlarini ustun qilib o'z strategiyasini to'liq namoyon etdi!"}
          </p>

          <!-- Natijalar -->
          <div class="grid grid-cols-2 gap-4 my-6 text-left">
            <div class="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30">
              <span class="text-xs font-black text-emerald-400 uppercase block mb-1">
                🌲 ${this.config.t1Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>Egallangan hudud: <strong class="text-emerald-400">${t1.treesCount} ta daraxt</strong></div>
                <div>To'liq qatorlar: <strong class="text-amber-400">${t1.bonusLines} ta combo</strong></div>
                <div>To'g'ri javoblar: <strong class="text-white">${t1.correctCount} ta</strong></div>
                <div>Yakuniy ball: <strong class="text-emerald-400">${t1.score} XP</strong></div>
              </div>
            </div>

            <div class="bg-slate-950 p-4 rounded-2xl border border-rose-500/30">
              <span class="text-xs font-black text-rose-400 uppercase block mb-1">
                🏭 ${this.config.t2Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>Egallangan hudud: <strong class="text-rose-400">${t2.factoriesCount} ta zavod</strong></div>
                <div>To'liq qatorlar: <strong class="text-amber-400">${t2.bonusLines} ta combo</strong></div>
                <div>To'g'ri javoblar: <strong class="text-white">${t2.correctCount} ta</strong></div>
                <div>Yakuniy ball: <strong class="text-rose-400">${t2.score} XP</strong></div>
              </div>
            </div>
          </div>

          <!-- Tugmalar -->
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <button 
              type="button" 
              onclick="EcoBattleGreenMapMode.start()" 
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-lime-500/20 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-rotate-right"></i> Qayta O'ynash
            </button>

            <button 
              type="button" 
              onclick="EcoBattleGreenMapMode.exitToSetup()" 
              class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-list"></i> Boshqa Rejimni Tanlash
            </button>
          </div>

        </div>
      `;
    }
  };

  window.EcoBattleGreenMapMode = GreenMapMode;
  if (window.EcoBattleCoreEngine) {
    window.EcoBattleCoreEngine.registerMode('green_map', GreenMapMode);
  }
})();
