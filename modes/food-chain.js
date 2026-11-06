/**
 * ============================================================================
 * ECO-BATL REJIMI: OZIQ ZANJIRI (TROPHIC FOOD CHAIN PUZZLE)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Mexanika:
 * - Ekotizimning aralash kartalaridan to'g'ri trofik oziq zanjirini yig'ish.
 * - Ortiqcha tuzoq kartalar bor (plastik qopcha, zaharli chiqindi, batareya va h.k.).
 * - Tuzoq karta ekologik zanjirni zaharlaydi va 1.5s stun beradi.
 * - Karta sudraladi (Drag & Drop) yoki ketma-ket bosish (Click/Tap) orqali ulanadi.
 * - Zanjir to'g'ri ulanishi bilan yashil rishta nurlari (Connecting Lines) porlaydi.
 * - Birinchi to'liq zanjir yig'gan jamoa raundda g'alaba qozonadi!
 * - 60 FPS: CSS transforms va opacity orqali toza animatsiyalar.
 */

(function () {
  'use strict';

  // Oziq zanjiri maxsus stillari
  (function injectFoodChainStyles() {
    if (document.getElementById('eco-food-chain-styles')) return;
    const style = document.createElement('style');
    style.id = 'eco-food-chain-styles';
    style.textContent = `
      .food-card {
        border-bottom-width: 4px !important;
        transition: all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
        cursor: pointer;
      }
      .food-card:hover {
        transform: translateY(-3px) scale(1.02);
        filter: brightness(1.1);
      }
      .food-card:active {
        transform: translateY(2px) scale(0.98);
        border-bottom-width: 1px !important;
      }
      .food-card.selected {
        border-color: #a855f7 !important;
        border-bottom-color: #7e22ce !important;
        background: linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(88, 28, 135, 0.6) 100%) !important;
        box-shadow: 0 0 16px rgba(168, 85, 247, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3) !important;
        transform: scale(1.04) translateY(-2px);
      }
      .chain-slot {
        border-bottom-width: 4px !important;
        transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .chain-slot.filled {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(6, 78, 59, 0.7) 100%) !important;
        border-color: #10b981 !important;
        border-bottom-color: #047857 !important;
        box-shadow: 0 0 14px rgba(16, 185, 129, 0.5);
      }
      @keyframes linkLaserBeam {
        0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 2px #a855f7); }
        50% { opacity: 1; filter: drop-shadow(0 0 8px #38bdf8); }
      }
      .chain-link-arrow {
        animation: linkLaserBeam 1.2s ease-in-out infinite;
      }
    `;
    style.textContent = `
      .chain-slot {
        transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        will-change: transform;
      }
      .chain-slot.filled {
        background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(15, 23, 42, 0.9) 100%) !important;
        border-color: #10b981 !important;
        box-shadow: 0 0 15px rgba(16, 185, 129, 0.35);
      }
      .chain-link-line {
        position: relative;
      }
      .chain-link-line::after {
        content: "➔";
        position: absolute;
        right: -14px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        font-weight: 900;
        color: #64748b;
        z-index: 10;
        transition: color 0.3s ease, transform 0.3s ease;
      }
      .chain-link-line.connected::after {
        color: #10b981 !important;
        transform: translateY(-50%) scale(1.25);
        text-shadow: 0 0 8px #10b981;
      }
      .food-card {
        cursor: grab;
        touch-action: none;
        user-select: none;
        transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, border-color 0.2s ease;
        will-change: transform;
      }
      .food-card:active {
        cursor: grabbing;
        transform: scale(1.05) rotate(-2deg);
        box-shadow: 0 12px 24px rgba(0,0,0,0.6);
        z-index: 20;
      }
      .food-card.selected {
        border-color: #fde047 !important;
        background-color: rgba(253, 224, 71, 0.15) !important;
        transform: scale(1.04) translateY(-3px);
        box-shadow: 0 0 16px rgba(253, 224, 71, 0.4);
      }
      .trap-card-shake {
        animation: trapShake 0.45s cubic-bezier(.36,.07,.19,.97) both;
      }
      @keyframes trapShake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-9px) rotate(-3deg); }
        40% { transform: translateX(8px) rotate(3deg); }
        60% { transform: translateX(-5px); }
        80% { transform: translateX(4px); }
      }
      @keyframes pulseBeam {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; filter: drop-shadow(0 0 8px #34d399); }
      }
      .energy-beam {
        animation: pulseBeam 1s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  })();

  const FoodChainMode = {
    active: false,
    paused: false,
    config: {
      t1Name: "1-Jamoa (Zumrad)",
      t2Name: "2-Jamoa (Yoqut)",
      t1Avatar: "🛡️",
      t2Avatar: "⚡",
      matchTime: 90,
      totalRounds: 5
    },

    state: {
      currentRound: 0,
      timeRemaining: 90,
      timerInterval: null,
      challenges: [],
      currentChallenge: null,
      t1: {
        score: 0,
        roundsWon: 0,
        streak: 0,
        maxStreak: 0,
        placedSlots: [], // [cardId, ...]
        selectedCard: null,
        availableCards: [], // { id, name, isTrap, icon }
        isStunned: false,
        stunTimer: null
      },
      t2: {
        score: 0,
        roundsWon: 0,
        streak: 0,
        maxStreak: 0,
        placedSlots: [],
        selectedCard: null,
        availableCards: [],
        isStunned: false,
        stunTimer: null
      }
    },

    // 1. Rejimni boshlash
    async start(customConfig = {}) {
      this.config = Object.assign({}, this.config, customConfig);
      this.active = true;
      this.paused = false;

      this.state.currentRound = 0;
      this.state.timeRemaining = this.config.matchTime || 90;

      // Savollarni questions manager orqali olish
      if (window.EcoBattleCoreQuestions) {
        this.state.challenges = await window.EcoBattleCoreQuestions.getQuestionsForMode('food_chain', 15);
      } else {
        this.state.challenges = [];
      }

      if (!this.state.challenges || this.state.challenges.length === 0) {
        this.state.challenges = this.getFallbackChallenges();
      }

      this.state.t1 = {
        score: 0,
        roundsWon: 0,
        streak: 0,
        maxStreak: 0,
        placedSlots: [],
        selectedCard: null,
        availableCards: [],
        isStunned: false,
        stunTimer: null
      };

      this.state.t2 = {
        score: 0,
        roundsWon: 0,
        streak: 0,
        maxStreak: 0,
        placedSlots: [],
        selectedCard: null,
        availableCards: [],
        isStunned: false,
        stunTimer: null
      };

      this.loadRound(0);
      this.bindControls();
      this.startTimer();

      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.playCountdown();
      }
    },

    getFallbackChallenges() {
      return [
        {
          id: "fc1",
          name: "Chuchuk Suv Daryosi Ekotizimi",
          steps: ["Quyosh nuri (Energiya)", "Yashil suv o'tlari (Produtsent)", "Mayda daphniya qisqichbaqasi", "Zog'ora baliq (Karp)", "Suv burguti / Qoravoy"],
          traps: ["Plastik xalta", "Kimyoviy oqova suv"],
          exp: "Quyosh energiyasidan boshlanib, fitoplanktondan mayda baliqlar va suv qushlariga uzatiladi."
        },
        {
          id: "fc2",
          name: "To'qayzor Qayir O'rmoni",
          steps: ["Quyosh nuri", "To'rang'i va Yulg'un", "Yovvoyi quyon / Kemiruvchi", "To'qay mushugi / Qashqir", "Qora kalxat"],
          traps: ["Eski avtomobil shinasi", "Sintetik kanop ipi"],
          exp: "To'qay florasi birlamchi fitomassa yaratadi, kemiruvchilar orqali ikkilamchi konsumentlarga o'tadi."
        }
      ];
    },

    // 2. Raundni yuklash
    loadRound(roundIndex) {
      this.state.currentRound = roundIndex;
      const ch = this.state.challenges[roundIndex % this.state.challenges.length];
      this.state.currentChallenge = ch;

      // Ikkala jamoaga aralash kartalar to'plamini tayyorlash
      const cards = [];
      ch.steps.forEach((step, sIdx) => {
        cards.push({
          id: `step_${sIdx}`,
          name: step,
          stepIndex: sIdx,
          isTrap: false,
          icon: this.getStepIcon(sIdx, ch.steps.length)
        });
      });

      ch.traps.forEach((trap, tIdx) => {
        cards.push({
          id: `trap_${tIdx}`,
          name: trap,
          stepIndex: -1,
          isTrap: true,
          icon: "⚠️"
        });
      });

      // Kartalarni aralashtirish
      this.state.t1.placedSlots = Array(ch.steps.length).fill(null);
      this.state.t1.selectedCard = null;
      this.state.t1.availableCards = this.shuffle([...cards]);

      this.state.t2.placedSlots = Array(ch.steps.length).fill(null);
      this.state.t2.selectedCard = null;
      this.state.t2.availableCards = this.shuffle([...cards]);

      this.renderArena();
    },

    getStepIcon(idx, total) {
      if (idx === 0) return "☀️";
      if (idx === 1) return "🌱";
      if (idx === total - 1) return "🦅";
      if (idx === total - 2) return "🐺";
      return "🦗";
    },

    shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },

    // 3. Maydonni render qilish
    renderArena() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const ch = this.state.currentChallenge;
      const t1 = this.state.t1;
      const t2 = this.state.t2;

      container.innerHTML = `
        <div id="food-chain-view" class="bg-slate-900 border border-purple-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl relative select-none overflow-hidden">
          
          <!-- Yuqori Header -->
          <div class="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/40 text-xs font-black uppercase flex items-center gap-1.5 shadow-sm">
                🦅 Oziq Zanjiri Arenasi
              </span>
              <span class="text-xs text-white font-black bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                ${ch.name}
              </span>
              <span class="text-xs text-slate-400 font-bold hidden sm:inline">
                ${this.state.currentRound + 1} / ${this.config.totalRounds} raund
              </span>
            </div>

            <!-- Taymer -->
            <div class="flex items-center gap-2">
              <div class="bg-slate-950 border border-slate-700/80 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-inner">
                <i class="fa-solid fa-stopwatch text-amber-400 text-sm"></i>
                <span id="chain-timer-display" class="font-mono text-lg font-black text-white">
                  ${this.state.timeRemaining}s
                </span>
              </div>
            </div>

            <!-- Boshqaruv tugmalari -->
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="EcoBattleFoodChainMode.togglePause()" 
                id="chain-pause-btn" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-pause text-amber-400"></i>
                <span id="chain-pause-text">Pauza (Space)</span>
              </button>

              <button 
                type="button" 
                onclick="EcoBattleFoodChainMode.exitToSetup()" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-door-open text-rose-400"></i>
                <span>Chiqish (Esc)</span>
              </button>
            </div>
          </div>

          <!-- Izoh / Qoida Banneri -->
          <div class="mb-4 py-2 px-4 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-xs text-purple-200 text-center flex items-center justify-between gap-3 flex-wrap">
            <span class="font-bold flex items-center gap-1.5">
              💡 <strong>Topshiriq:</strong> Kartalarni bosib yoki sudrab 1-dan ${ch.steps.length}-gacha to'g'ri oziq zanjirini birinchi bo'lib yiging!
            </span>
            <span class="text-[11px] font-black text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/30">
              ⚠️ Ehtiyot bo'ling: Tuzoq chiqindilar bor!
            </span>
          </div>

          <!-- IKKI JAMOAGA BO'LINGAN MAYDON (SPLIT SCREEN) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <!-- CHAP: 1-Jamoa (Zumrad) -->
            ${this.renderTeamPanel(1, t1, ch)}

            <!-- O'NG: 2-Jamoa (Yoqut) -->
            ${this.renderTeamPanel(2, t2, ch)}

          </div>

        </div>
      `;
    },

    renderTeamPanel(teamId, teamState, challenge) {
      const isT1 = (teamId === 1);
      const teamName = isT1 ? this.config.t1Name : this.config.t2Name;
      const accentBorder = isT1 ? 'border-emerald-500/40' : 'border-rose-500/40';
      const accentText = isT1 ? 'text-emerald-400' : 'text-rose-400';
      const keyGuide = isT1 ? 'A • S • D • F' : 'J • K • L • ;';

      return `
        <div class="relative p-4 sm:p-5 rounded-2xl bg-slate-950/90 border-2 ${accentBorder} shadow-xl flex flex-col justify-between ${teamState.isStunned ? 'opacity-50 ring-2 ring-rose-500/50' : ''}">
          
          <!-- Stun qatlami -->
          ${teamState.isStunned ? `
            <div class="absolute inset-0 bg-slate-950/85 backdrop-blur-xs rounded-2xl z-30 flex flex-col items-center justify-center text-center p-4">
              <div class="text-3xl mb-1 animate-bounce">⚠️</div>
              <span class="text-sm font-black text-rose-400 uppercase tracking-wide">Tuzoq Karta / Xato!</span>
              <p class="text-xs text-slate-300 mt-1">Bu noorganik chiqindi oziq zanjiriga kirmaydi! (1.5s)</p>
            </div>
          ` : ''}

          <div>
            <!-- Team Bar -->
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <span class="text-xs font-black uppercase ${accentText} flex items-center gap-1.5">
                <i class="fa-solid fa-link"></i> ${teamName}
              </span>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold bg-slate-900 text-slate-300 px-2 py-0.5 rounded-lg border border-slate-800">
                  ${keyGuide}
                </span>
                <span class="text-xs font-black text-amber-400">
                  ${teamState.score} XP
                </span>
              </div>
            </div>

            <!-- RISHTA SLATLARI (TROPHIC CHAIN SLOTS) -->
            <div class="mb-4">
              <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
                Trofik Pog'onalar (Zanjir qatori):
              </span>

              <div class="grid grid-cols-${challenge.steps.length} gap-1.5">
                ${challenge.steps.map((step, idx) => {
                  const placed = teamState.placedSlots[idx];
                  const isConnected = !!placed;
                  const isLast = (idx === challenge.steps.length - 1);
                  const lineClass = (!isLast ? 'chain-link-line ' : '') + (isConnected ? 'connected' : '');

                  return `
                    <div 
                      onclick="EcoBattleFoodChainMode.handleSlotClick(${teamId}, ${idx})"
                      class="chain-slot ${lineClass} ${placed ? 'filled' : 'border-2 border-dashed border-slate-800 bg-slate-900/60 hover:border-slate-600'} rounded-xl p-2 min-h-[75px] flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                    >
                      ${placed ? `
                        <span class="text-xl mb-1">${placed.icon}</span>
                        <span class="text-[10px] font-bold text-white line-clamp-2 leading-tight">${placed.name}</span>
                      ` : `
                        <span class="text-[11px] font-mono font-bold text-slate-500">${idx + 1}-pog'ona</span>
                        <span class="text-[9px] text-slate-600 mt-0.5">Bo'sh halqa</span>
                      `}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- ARALASH KARTALAR DOKKASI (CARD TRAY) -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Mavjud Kartalar (Tanlang va zanjirga ulang):
                </span>
                <span class="text-[10px] text-slate-500 font-medium">
                  Kartani bosing, so'ng slotni bosing
                </span>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                ${teamState.availableCards.map((card, cardIdx) => {
                  const isSelected = (teamState.selectedCard && teamState.selectedCard.id === card.id);
                  const isTrapCard = card.isTrap;
                  const borderCls = isSelected 
                    ? 'selected' 
                    : (isTrapCard ? 'border-slate-800 bg-slate-950/70 hover:border-rose-500/50' : 'border-slate-800 bg-slate-950/70 hover:border-emerald-500/50');

                  const keyShortcuts = isT1 ? ['A','S','D','F','G','Z'] : ['J','K','L',';','H','N'];
                  const keyChar = keyShortcuts[cardIdx] || (cardIdx + 1);

                  return `
                    <div 
                      onclick="EcoBattleFoodChainMode.handleCardClick(${teamId}, '${card.id}')"
                      class="food-card ${borderCls} rounded-xl p-2.5 border-2 flex items-center justify-between group shadow-md"
                    >
                      <div class="flex items-center gap-2 overflow-hidden">
                        <span class="text-2xl shrink-0 group-hover:scale-110 transition-transform">${card.icon}</span>
                        <div class="flex flex-col overflow-hidden text-left">
                          <span class="text-xs font-black text-white group-hover:text-purple-300 transition-colors truncate">${card.name}</span>
                          <span class="text-[9px] font-extrabold ${isTrapCard ? 'text-rose-400' : 'text-purple-400'}">${isTrapCard ? '⚠️ Noorganik Qopqon' : 'Trofik Bo'g'in'}</span>
                        </div>
                      </div>
                      <span class="w-5 h-5 rounded bg-black/40 border border-slate-700 text-[10px] font-mono font-black text-slate-400 flex items-center justify-center shrink-0">
                        ${keyChar}
                      </span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

          </div>

          <!-- Pastki panel -->
          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Yutilgan raundlar: <strong class="${accentText}">${teamState.roundsWon} ta</strong></span>
            <span>Streak: <strong class="text-amber-400">x${teamState.streak}</strong></span>
          </div>

        </div>
      `;
    },

    // 4. Karta va Slot bosilish hodisalari
    handleCardClick(teamId, cardId) {
      if (!this.active || this.paused) return;
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      if (team.isStunned) return;

      const card = team.availableCards.find(c => c.id === cardId);
      if (!card) return;

      // Agar kartani tanlasa
      team.selectedCard = card;
      this.renderArena();

      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.playClick();
      }

      // Agar bo'sh slot bo'lsa, tezkor ulanish imkoniyati (auto-target first empty)
      const firstEmptyIdx = team.placedSlots.findIndex(s => s === null);
      if (firstEmptyIdx !== -1) {
        // Avtomatik ravishda birinchi bo'sh slotga urinib ko'rish
        setTimeout(() => {
          if (team.selectedCard && team.selectedCard.id === cardId) {
            this.handleSlotClick(teamId, firstEmptyIdx);
          }
        }, 150);
      }
    },

    handleSlotClick(teamId, slotIndex) {
      if (!this.active || this.paused) return;
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      if (team.isStunned) return;

      const card = team.selectedCard;
      if (!card) {
        // Agar slotda karta bo'lsa, uni chiqarib qaytarish (Undo)
        const existing = team.placedSlots[slotIndex];
        if (existing) {
          team.placedSlots[slotIndex] = null;
          team.availableCards.push(existing);
          this.renderArena();
          if (window.EcoBattleCoreFx) window.EcoBattleCoreFx.playClick();
        }
        return;
      }

      const fx = window.EcoBattleCoreFx;

      // 1. Tuzoq karta tekshiruvi!
      if (card.isTrap) {
        team.selectedCard = null;
        team.streak = 0;

        if (fx) {
          fx.playError();
          fx.shakeScreen(350);
        }

        // 1.5s Stun
        team.isStunned = true;
        this.renderArena();

        if (team.stunTimer) clearTimeout(team.stunTimer);
        team.stunTimer = setTimeout(() => {
          team.isStunned = false;
          if (this.active) this.renderArena();
        }, 1500);
        return;
      }

      // 2. To'g'ri pog'ona tekshiruvi
      if (card.stepIndex === slotIndex) {
        // To'g'ri pog'onaga joylandi!
        team.placedSlots[slotIndex] = card;
        team.availableCards = team.availableCards.filter(c => c.id !== card.id);
        team.selectedCard = null;

        team.streak++;
        if (team.streak > team.maxStreak) team.maxStreak = team.streak;
        team.score += 50;

        if (fx) {
          fx.playCorrect();
          fx.flashBorder(teamId);
        }

        this.renderArena();

        // Butun zanjir to'ldimi?
        if (team.placedSlots.every(s => s !== null)) {
          this.handleRoundVictory(teamId);
        }

      } else {
        // Noto'g'ri pog'onaga qo'yishga urindi
        team.selectedCard = null;
        team.streak = 0;

        if (fx) {
          fx.playError();
          fx.shakeScreen(250);
        }

        this.renderArena();
      }
    },

    // 5. Raundda g'alaba qozonish
    handleRoundVictory(winnerTeamId) {
      const winner = winnerTeamId === 1 ? this.state.t1 : this.state.t2;
      winner.roundsWon++;
      winner.score += 200; // Raund g'alabasi bonusi: +200 XP

      const fx = window.EcoBattleCoreFx;
      if (fx) {
        fx.playVictory();
        fx.triggerVictoryLeaves(30);
      }

      // Agar barcha raundlar tugagan bo'lsa
      if (this.state.currentRound + 1 >= this.config.totalRounds) {
        this.finishMatch();
        return;
      }

      // 2 soniyadan so'ng keyingi raundga o'tish
      if (this.state.nextRoundTimer) clearTimeout(this.state.nextRoundTimer);
      this.state.nextRoundTimer = setTimeout(() => {
        if (this.active) {
          this.loadRound(this.state.currentRound + 1);
        }
      }, 2000);
    },

    // 6. Taymer va boshqaruv
    startTimer() {
      this.clearTimers();
      this.state.timerInterval = setInterval(() => {
        if (!this.active || this.paused) return;

        this.state.timeRemaining--;

        const display = document.getElementById('chain-timer-display');
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
      if (this.state.nextRoundTimer) {
        clearTimeout(this.state.nextRoundTimer);
        this.state.nextRoundTimer = null;
      }
      if (this.state.t1.stunTimer) clearTimeout(this.state.t1.stunTimer);
      if (this.state.t2.stunTimer) clearTimeout(this.state.t2.stunTimer);
    },

    bindControls() {
      if (window.EcoBattleCoreInput) {
        window.EcoBattleCoreInput.onAction((teamId, action, data) => {
          if (!this.active) return;
          if (action === 'select_option') {
            // A, S, D, F yoki J, K, L, ; orqali kartalarni tanlash
            const team = teamId === 1 ? this.state.t1 : this.state.t2;
            const card = team.availableCards[data.optionIndex];
            if (card) {
              this.handleCardClick(teamId, card.id);
            }
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
      const btnText = document.getElementById('chain-pause-text');
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

    // 7. G'alaba va Yakunlash
    finishMatch() {
      this.clearTimers();
      this.active = false;

      const t1 = this.state.t1;
      const t2 = this.state.t2;

      let winnerId = 0;
      if (t1.roundsWon > t2.roundsWon) winnerId = 1;
      else if (t2.roundsWon > t1.roundsWon) winnerId = 2;
      else {
        if (t1.score > t2.score) winnerId = 1;
        else if (t2.score > t1.score) winnerId = 2;
      }

      const fx = window.EcoBattleCoreFx;
      if (fx) {
        fx.playVictory();
        fx.triggerVictoryLeaves(55);
      }

      const winnerName = winnerId === 1 ? this.config.t1Name : (winnerId === 2 ? this.config.t2Name : "Durang!");
      const winnerAvatar = winnerId === 1 ? this.config.t1Avatar : (winnerId === 2 ? this.config.t2Avatar : "🤝");
      const winnerColor = winnerId === 1 ? 'text-emerald-400' : (winnerId === 2 ? 'text-rose-400' : 'text-amber-400');

      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      container.innerHTML = `
        <div class="bg-slate-900 border-2 border-purple-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-2xl mx-auto text-center relative select-none animate-bounce-in">
          
          <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-purple-500 to-pink-500 text-slate-950 flex items-center justify-center text-4xl shadow-xl shadow-purple-500/30 mb-4">
            🦅
          </div>

          <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-black uppercase tracking-wider">
            OZIQ ZANJIRI BELLASHUVI YAKUNLANDI
          </span>

          <h2 class="text-2xl sm:text-3xl font-black text-white mt-3">
            <span class="${winnerColor}">${winnerAvatar} ${winnerName}</span> G'olib Bo'ldi!
          </h2>

          <p class="text-xs text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
            Ekotizim trofik pog'onalarini eng tez va xatosiz yig'ib, plastik va zaharli tuzoqlardan muvaffaqiyatli saqlanildi!
          </p>

          <!-- Natijalar -->
          <div class="grid grid-cols-2 gap-4 my-6 text-left">
            <div class="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30">
              <span class="text-xs font-black text-emerald-400 uppercase block mb-1">
                ${this.config.t1Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>Yutilgan zanjirlar: <strong class="text-emerald-400">${t1.roundsWon} ta</strong></div>
                <div>Max Streak: <strong class="text-amber-400">x${t1.maxStreak}</strong></div>
                <div>Yakuniy ball: <strong class="text-emerald-400">${t1.score} XP</strong></div>
              </div>
            </div>

            <div class="bg-slate-950 p-4 rounded-2xl border border-rose-500/30">
              <span class="text-xs font-black text-rose-400 uppercase block mb-1">
                ${this.config.t2Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>Yutilgan zanjirlar: <strong class="text-rose-400">${t2.roundsWon} ta</strong></div>
                <div>Max Streak: <strong class="text-amber-400">x${t2.maxStreak}</strong></div>
                <div>Yakuniy ball: <strong class="text-rose-400">${t2.score} XP</strong></div>
              </div>
            </div>
          </div>

          <!-- Tugmalar -->
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <button 
              type="button" 
              onclick="EcoBattleFoodChainMode.start()" 
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-purple-500/20 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-rotate-right"></i> Qayta O'ynash
            </button>

            <button 
              type="button" 
              onclick="EcoBattleFoodChainMode.exitToSetup()" 
              class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-list"></i> Boshqa Rejimni Tanlash
            </button>
          </div>

        </div>
      `;
    }
  };

  window.EcoBattleFoodChainMode = FoodChainMode;
  if (window.EcoBattleCoreEngine) {
    window.EcoBattleCoreEngine.registerMode('food_chain', FoodChainMode);
  }
})();
