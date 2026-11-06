// =========================================================================
// MUKAMMAL CHIQINDI SARALASH TIZIMI (Eco Sorting Pro Engine)
// Asoschi: Akobir | Akosh Eco Platform
// 200 TA CHIQINDI BAZASI, Fisher-Yates, Adaptive Weighting, Pointer Events
// Drag-and-Drop, Click-to-Place, 1-9 Klaviaturasi, Imtihon va Mashq Rejimi,
// Qopqon Chiqindilar va Chuqur Natija Tahlili
// =========================================================================

(function () {
  'use strict';

  // Injected CSS for short waste card animations
  (function injectWasteAnimations() {
    if (document.getElementById('waste-animations-style')) return;
    const styleEl = document.createElement('style');
    styleEl.id = 'waste-animations-style';
    styleEl.textContent = `
      @keyframes wasteCardPopIn {
        0% { opacity: 0; transform: translateY(24px) scale(0.9); }
        70% { opacity: 1; transform: translateY(-4px) scale(1.02); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .waste-card-animated {
        animation: wasteCardPopIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        animation-delay: calc(var(--idx, 0) * 40ms);
      }
      @keyframes wasteImageFloat {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-3.5px) rotate(1.6deg); }
      }
      .waste-img-float {
        animation: wasteImageFloat 2.8s ease-in-out infinite;
        will-change: transform;
      }
      @keyframes wasteShimmerSweep {
        0% { transform: translateX(-150%) skewX(-20deg); }
        100% { transform: translateX(250%) skewX(-20deg); }
      }
      .waste-card-shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.25s;
        border-radius: 1rem;
      }
      .waste-draggable-card:hover .waste-card-shimmer {
        opacity: 1;
        animation: wasteShimmerSweep 0.85s ease-out;
      }
      @keyframes trapPillPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.5); }
        50% { transform: scale(1.06); box-shadow: 0 0 10px 2px rgba(244, 63, 94, 0.75); }
      }
      .waste-trap-pulse {
        animation: trapPillPulse 1.5s infinite ease-in-out;
      }
      @keyframes wasteBinAbsorb {
        0% { transform: scale(0.6) rotate(-8deg); opacity: 0; }
        60% { transform: scale(1.15) rotate(2deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
      .waste-bin-badge-animate {
        animation: wasteBinAbsorb 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both;
      }
    `;
    document.head.appendChild(styleEl);
  })();


  // O'yin konfiguratsiyasi va sessiya holati
  const EcoSortingState = {
    mode: 'exam', // 'exam' (yakunda tekshirish) yoki 'practice' (darhol izoh)
    difficulty: 'all', // 'all', 'easy', 'medium', 'hard'
    timerEnabled: false,
    timerTotal: 90, // Qiyin/Imtihon rejimida 90 soniya umumiy vaqt
    timerRemaining: 90,
    timerInterval: null,
    isTimerRunning: false,

    // Raund elementlari (10 ta balanslashtirilgan chiqindi)
    activeItems: [],
    // Foydalanuvchi joylagan joylar: { [itemId]: categoryKey }
    placements: {},
    // Natijalar
    results: null,
    selectedItemId: null, // Click-to-place yoki klaviatura uchun
    startTime: 0,
    endTime: 0,
    isFinished: false,

    // Pointer drag holati
    dragActive: false,
    dragItemId: null,
    dragGhostEl: null,
    dragCandidateBinKey: null,
    touchStartX: 0,
    touchStartY: 0
  };

  window.EcoSortingState = EcoSortingState;

  // -----------------------------------------------------------------------
  // 1. FISHER-YATES ARALASHTIRISH ALGORITMI
  // -----------------------------------------------------------------------
  function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  // -----------------------------------------------------------------------
  // 2. ADAPTIVE & BALANCED ITEM SELECTOR (9 ta Qutiga 9 Xil Chiqindi!)
  // -----------------------------------------------------------------------
  function normalizeItemCategory(item) {
    if (!item) return 'utilizatsiya';
    const c = (item.cat || item.categoryKey || item.category || '').toLowerCase().trim();
    if (c === 'u' || c.includes('utiliz') || c.includes('qayta ishlanmaydi')) return 'utilizatsiya';
    if (c.includes('plast')) return 'plastik';
    if (c.includes('qog') || c.includes('kart')) return 'qogoz';
    if (c.includes('shish')) return 'shisha';
    if (c.includes('met')) return 'metall';
    if (c.includes('organ')) return 'organik';
    if (c.includes('xavf')) return 'xavfli';
    if (c.includes('elektron')) return 'elektronika';
    if (c.includes('tekst') || c.includes('kiyim')) return 'tekstil';
    return 'utilizatsiya';
  }

  function selectBalancedRoundItems(options = {}) {
    const db = window.ECO_WASTE_DATABASE || [];
    if (!db || db.length === 0) return [];

    let recentIds = [];
    try {
      recentIds = JSON.parse(localStorage.getItem('ECO_RECENT_SORT_IDS') || '[]');
    } catch (e) { recentIds = []; }

    // Toifalarni 9 ta qutiga normallashtirib guruhlash
    const byCategory = {};
    MASTER_ECO_CATEGORIES.forEach(c => { byCategory[c.key] = []; });

    db.forEach(item => {
      const catKey = normalizeItemCategory(item);
      if (byCategory[catKey]) {
        byCategory[catKey].push(item);
      }
    });

    const chosenItems = [];
    const usedIds = new Set();

    // 9 ta rangli qutining HAR BIRIDAN AYNAN 1 TADAN chiqindi tanlash (9 qutiga 9 xil axlat)
    MASTER_ECO_CATEGORIES.forEach(catObj => {
      const pool = byCategory[catObj.key] || [];
      if (pool.length === 0) return;

      const fresh = pool.filter(i => !recentIds.includes(i.id) && !usedIds.has(i.id));
      const candidates = fresh.length > 0 ? fresh : pool.filter(i => !usedIds.has(i.id));
      const pickList = candidates.length > 0 ? candidates : pool;
      const pick = pickList[Math.floor(Math.random() * pickList.length)];
      if (pick && !usedIds.has(pick.id)) {
        chosenItems.push(pick);
        usedIds.add(pick.id);
      }
    });

    // Agar 9 taga yetmay qolsa
    if (chosenItems.length < 9) {
      const leftover = db.filter(i => !usedIds.has(i.id));
      const shuffled = fisherYatesShuffle(leftover);
      for (const item of shuffled) {
        if (chosenItems.length >= 9) break;
        chosenItems.push(item);
        usedIds.add(item.id);
      }
    }

    // Fisher-Yates orqali aralashtirish
    const finalShuffled = fisherYatesShuffle(chosenItems);

    try {
      const newRecentIds = [...recentIds, ...finalShuffled.map(i => i.id)].slice(-30);
      localStorage.setItem('ECO_RECENT_SORT_IDS', JSON.stringify(newRecentIds));
    } catch (e) {}

    return finalShuffled;
  }

  // -----------------------------------------------------------------------
  // 3. TAYMER BOSHQARUVI (90 soniya & Sound Acceleration)
  // -----------------------------------------------------------------------
  function stopSortingGameTimer() {
    if (EcoSortingState.timerInterval) {
      clearInterval(EcoSortingState.timerInterval);
      EcoSortingState.timerInterval = null;
    }
    EcoSortingState.isTimerRunning = false;
    if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
      window.ecoAudio.stopCountdownSound();
    }
  }
  window.stopSortingGameTimer = stopSortingGameTimer;

  function startSortingGameTimer(seconds) {
    stopSortingGameTimer();
    const total = seconds || EcoSortingState.timerTotal || 90;
    EcoSortingState.timerRemaining = total;
    EcoSortingState.isTimerRunning = true;
    const startTime = Date.now();

    updateSortingTimerUI(total, 100);

    // Pause Engine registratsiyasi
    if (window.EcoPauseEngine) {
      window.EcoPauseEngine.registerGame({
        type: 'sorting-pro',
        pause: () => { stopSortingGameTimer(); },
        resume: () => { startSortingGameTimer(EcoSortingState.timerRemaining); },
        restart: () => { startNewSortingRound(); },
        getCurrentStats: () => ({
          counter: `Joylandi: ${Object.keys(EcoSortingState.placements).length} / ${EcoSortingState.activeItems.length}`,
          score: `Rejim: ${EcoSortingState.mode === 'exam' ? 'Imtihon' : 'Mashq'}`
        })
      });
    }

    EcoSortingState.timerInterval = setInterval(() => {
      if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;

      const elapsed = (Date.now() - startTime) / 1000;
      const remaining = Math.max(0, total - elapsed);
      EcoSortingState.timerRemaining = remaining;
      const displaySec = Math.ceil(remaining);
      const percent = Math.max(0, (remaining / total) * 100);

      updateSortingTimerUI(displaySec, percent);

      // Vaqt tezlashganda audio effekti
      if (window.ecoAudio && typeof window.ecoAudio.updateCountdownSound === 'function') {
        window.ecoAudio.updateCountdownSound(remaining, total);
      }

      if (remaining <= 0) {
        stopSortingGameTimer();
        if (window.ecoAudio && typeof window.ecoAudio.playTimeoutBuzzer === 'function') {
          window.ecoAudio.playTimeoutBuzzer();
        }
        // Vaqt tugaganda avtomatik natija tekshiriladi
        submitExamResults(true);
      }
    }, 100);
  }

  function updateSortingTimerUI(seconds, percent) {
    const secEl = document.getElementById('sorting-timer-seconds');
    const barEl = document.getElementById('sorting-timer-bar');
    const badgeEl = document.getElementById('sorting-timer-badge');

    if (secEl) secEl.textContent = `${seconds}s`;
    if (barEl) {
      barEl.style.width = `${percent}%`;
      if (seconds <= 10) {
        barEl.className = 'h-full bg-rose-500 rounded-full transition-all duration-100 ease-linear animate-pulse';
      } else if (seconds <= 25) {
        barEl.className = 'h-full bg-amber-500 rounded-full transition-all duration-100 ease-linear';
      } else {
        barEl.className = 'h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-100 ease-linear';
      }
    }
    if (badgeEl) {
      if (seconds <= 10) {
        badgeEl.className = 'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-400 border border-rose-500/50 animate-pulse';
      } else if (seconds <= 25) {
        badgeEl.className = 'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/50';
      } else {
        badgeEl.className = 'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
      }
    }
  }

  // -----------------------------------------------------------------------
  // 4. ASOSIY INTERFEYSNI RENDER QILISH
  // -----------------------------------------------------------------------
  function initSortingGame() {
    const container = document.getElementById('sorting-game-container');
    if (container) {
      renderSortingGameUI(container);
    }
  }
  window.initSortingGame = initSortingGame;

  function renderSortingGameUI(container) {
    const target = container || document.getElementById('sorting-game-container') || document.getElementById('game-dynamic-content');
    if (!target) return;

    target.innerHTML = `
      <div id="eco-sorting-app" class="bg-slate-900 border border-emerald-500/30 rounded-3xl p-4 sm:p-7 shadow-2xl relative select-none">
        
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/40 shadow-lg shadow-emerald-500/9 shrink-0">
              ♻️
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-xl font-black text-white tracking-wide">Tafakkur Bilan Chiqindilarni Saralash</h3>
                <span class="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  200 TA CHIQINDI BAZASI
                </span>
                <span id="active-mode-tag" class="text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full">
                  Imtihon Rejimi
                </span>
              </div>
              <p class="text-xs text-slate-400 mt-0.5">
                Chiqindilarni qo'l bilan tegishli rangli konteynerga sudrang yoki bosing. "Tekshirish" bosilguncha javobni o'zgartirish mumkin!
              </p>
            </div>
          </div>

          <!-- Quick Stats / Controls -->
          <div class="flex items-center gap-2 flex-wrap">
            <button onclick="EcoSortingEngine.showStartModal()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-gear text-amber-400"></i>
              <span>Rejim</span>
            </button>
            <button onclick="EcoSortingEngine.restartRound()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-rotate-right text-emerald-400"></i>
              <span>Yangi 10 talik</span>
            </button>
            <button onclick="EcoSortingEngine.switchToConveyorQuiz()" class="px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm">
              <i class="fa-solid fa-bolt text-amber-400"></i>
              <span>⚡ 4 Talik Konveyer</span>
            </button>
            <div class="bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-center">
              <span class="text-[9px] text-slate-500 uppercase font-black block">Joylandi</span>
              <span id="sorting-placed-counter" class="text-sm font-black text-emerald-400">0 / 9</span>
            </div>
          </div>
        </div>

        <!-- Timer & Pause Header (Faqat taymer yoniq bo'lsa) -->
        <div id="sorting-timer-row" class="hidden mb-4">
          <div class="flex items-center justify-between gap-3 mb-1.5">
            <span class="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-stopwatch text-cyan-400"></i>
              Vaqt chegarasi (90s)
            </span>
            <div class="flex items-center gap-2">
              <button onclick="EcoPauseEngine.togglePause()" type="button" class="eco-pause-btn flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-500/40 transition-all active:scale-95 cursor-pointer">
                <i class="fa-solid fa-pause text-[10px]"></i>
                <span>Pauza</span>
              </button>
              <div id="sorting-timer-badge" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                <i class="fa-solid fa-clock"></i>
                <span id="sorting-timer-seconds">90s</span>
              </div>
            </div>
          </div>
          <div class="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800 p-0.5">
            <div id="sorting-timer-bar" class="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-100 ease-linear" style="width: 100%;"></div>
          </div>
        </div>

        <!-- 1. Chiqindilar qatori (Tray / Dock - 10 ta element) — TEPADA QULAY JOYLASHGAN -->
        <div class="bg-slate-950/95 border-2 border-emerald-500/30 rounded-2xl p-3 sm:p-4 mb-4 shadow-xl">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-hand-pointer animate-bounce text-emerald-400"></i>
                Saralanishi kerak bo'lgan 9 ta chiqindi (9 qutiga 9 xil):
              </span>
              <span class="text-[11px] text-slate-400 hidden sm:inline">
                (Qutiga sudrab tashlang yoki kartani bir marta bosib, so'ng kerakli qutini bosing)
              </span>
            </div>
            <span id="tray-remaining-count" class="text-xs font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/40">9 ta qoldi</span>
          </div>

          <div id="sorting-tray-items" class="flex flex-wrap gap-2.5 min-h-[110px] items-center justify-center p-2 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/60">
            <!-- 10 ta chiqindi kartochkalari shu yerda joylashadi -->
          </div>
        </div>

        <!-- 2. 9 Ta Konteyner Paneli (Drop Targets) — PASTDAGI BARCHA QUTILAR OSON KO'RINIB TURADI -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2 px-1">
            <span class="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <i class="fa-solid fa-boxes-stacked text-emerald-400"></i>
              Saralash Konteynerlari (9 ta rangli quti)
            </span>
            <span class="text-[11px] text-slate-500 hidden sm:inline">
              💡 Klaviatura: Chiqindini tanlab <strong>1-9</strong> raqamlarini bosing
            </span>
          </div>

          <div id="sorting-bins-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-3">
            <!-- Dinamik ravishda render qilinadi -->
          </div>
        </div>

        <!-- Pastki "Tekshirish" va Boshqaruv Paneli -->
        <div class="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="text-xs text-slate-400 flex items-center gap-2">
            <span id="sorting-status-hint" class="font-medium">
              Chiqindilarni tegishli qutiga joylang. Hammasi tugagach "Tekshirish" tugmasi ochiladi.
            </span>
          </div>

          <div class="flex items-center gap-3">
            <button id="verify-sorting-btn" onclick="EcoSortingEngine.verifyRound()" disabled class="px-7 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-black rounded-xl text-sm transition-all transform shadow-lg shadow-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95">
              <i class="fa-solid fa-check-double"></i>
              <span>Tekshirish & Yakuniy Natija</span>
            </button>
          </div>
        </div>

        <!-- Yakuniy Natija Ekrani (Modal / Overlay) -->
        <div id="sorting-result-modal" class="hidden fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div id="sorting-result-content" class="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative animate-fade-in my-auto max-h-[92vh] overflow-y-auto custom-scrollbar">
            <!-- Natijalar render qilinadi -->
          </div>
        </div>

        <!-- Rejim Tanlash Oynasi (Modal) -->
        <div id="sorting-config-modal" class="hidden fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div class="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl animate-fade-in">
            <h4 class="text-xl font-black text-white mb-2 flex items-center gap-2">
              <i class="fa-solid fa-sliders text-emerald-400"></i>
              O'yin Rejimini Sozlash
            </h4>
            <p class="text-xs text-slate-400 mb-5">
              O'zingizga qulay rejim va qiyinlik darajasini tanlang:
            </p>

            <!-- Rejim: Imtihon vs Mashq -->
            <div class="space-y-3 mb-5">
              <label onclick="EcoSortingEngine.setMode('exam')" class="flex items-center justify-between p-3.5 rounded-xl border border-slate-700 hover:border-emerald-500/60 bg-slate-950/60 cursor-pointer transition-all">
                <div>
                  <div class="font-bold text-sm text-white flex items-center gap-2">
                    <span>🏆 Imtihon Rejimi</span>
                    <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-black">Asosiy (+100 XP)</span>
                  </div>
                  <div class="text-xs text-slate-400 mt-0.5">10 ta rasm sudrab joylanadi, natija faqat oxirida tekshiriladi.</div>
                </div>
                <input type="radio" name="sorting-mode-choice" value="exam" ${EcoSortingState.mode === 'exam' ? 'checked' : ''} class="w-4 h-4 accent-emerald-500">
              </label>

              <label onclick="EcoSortingEngine.setMode('practice')" class="flex items-center justify-between p-3.5 rounded-xl border border-slate-700 hover:border-cyan-500/60 bg-slate-950/60 cursor-pointer transition-all">
                <div>
                  <div class="font-bold text-sm text-white flex items-center gap-2">
                    <span>🎓 Mashq Rejimi</span>
                    <span class="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-black">Ta'limiy (+50 XP)</span>
                  </div>
                  <div class="text-xs text-slate-400 mt-0.5">Har bir tashlanganda darhol to'g'ri/xato izohi ko'rsatiladi.</div>
                </div>
                <input type="radio" name="sorting-mode-choice" value="practice" ${EcoSortingState.mode === 'practice' ? 'checked' : ''} class="w-4 h-4 accent-cyan-500">
              </label>
            </div>

            <!-- Taymer parametri -->
            <div class="p-3.5 rounded-xl border border-slate-700 bg-slate-950/60 mb-6 flex items-center justify-between">
              <div>
                <span class="text-sm font-bold text-white block">⏱️ 90 Soniyalik Taymer</span>
                <span class="text-xs text-slate-400">O'yinni vaqt poygasi sifatida o'ynash</span>
              </div>
              <input type="checkbox" id="sorting-timer-toggle" onchange="EcoSortingEngine.toggleTimerOption(this.checked)" ${EcoSortingState.timerEnabled ? 'checked' : ''} class="w-5 h-5 accent-emerald-500 cursor-pointer">
            </div>

            <div class="flex gap-2 justify-end">
              <button onclick="EcoSortingEngine.hideStartModal()" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all cursor-pointer">
                Yopish
              </button>
              <button onclick="EcoSortingEngine.applyConfigAndStart()" class="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/20 cursor-pointer">
                O'yinni Boshlash
              </button>
            </div>
          </div>
        </div>

      </div>
    `;

    renderBins();
    startNewSortingRound();
    setupKeyboardShortcuts();
  }
  window.renderSortingGameUI = renderSortingGameUI;

  // -----------------------------------------------------------------------
  // 5. 9 TA KONTEYNERNI RENDER QILISH VA DROP HUDUDLARI
  // -----------------------------------------------------------------------
  const MASTER_ECO_CATEGORIES = [
    { key: "plastik", name: "Plastik", color: "amber", icon: "🧴", binBg: "bg-amber-950/30 border-amber-500/40" },
    { key: "qogoz", name: "Qog'oz & Karton", color: "blue", icon: "📦", binBg: "bg-blue-950/30 border-blue-500/40" },
    { key: "shisha", name: "Shisha idish", color: "emerald", icon: "🍾", binBg: "bg-emerald-950/30 border-emerald-500/40" },
    { key: "metall", name: "Metall", color: "cyan", icon: "🥫", binBg: "bg-cyan-950/30 border-cyan-500/40" },
    { key: "organik", name: "Organik", color: "yellow", icon: "🍌", binBg: "bg-yellow-950/30 border-yellow-700/40" },
    { key: "xavfli", name: "Xavfli chiqindi", color: "rose", icon: "🔋", binBg: "bg-rose-950/30 border-rose-500/40" },
    { key: "elektronika", name: "Elektronika (E-waste)", color: "purple", icon: "📱", binBg: "bg-purple-950/30 border-purple-500/40" },
    { key: "tekstil", name: "Tekstil / Kiyim", color: "pink", icon: "👕", binBg: "bg-pink-950/30 border-pink-500/40" },
    { key: "utilizatsiya", name: "U (Utilizatsiya)", color: "slate", icon: "🗑️", binBg: "bg-slate-900/80 border-slate-600/50" }
  ];

  function getItemCatKey(item) {
    if (!item) return 'utilizatsiya';
    const raw = (item.categoryKey || item.cat || item.category || '').toLowerCase().trim();
    if (raw === 'u' || raw.includes('utiliz') || raw.includes('qayta ishlanmaydi')) return 'utilizatsiya';
    if (raw.includes('plast')) return 'plastik';
    if (raw.includes('qog') || raw.includes('kart')) return 'qogoz';
    if (raw.includes('shish')) return 'shisha';
    if (raw.includes('met')) return 'metall';
    if (raw.includes('organ')) return 'organik';
    if (raw.includes('xavf')) return 'xavfli';
    if (raw.includes('elektron')) return 'elektronika';
    if (raw.includes('tekst') || raw.includes('kiyim')) return 'tekstil';
    return raw || 'utilizatsiya';
  }

  function isItemMatchBin(item, binKey) {
    const itemCat = getItemCatKey(item);
    const bKey = (binKey || '').toLowerCase().trim();
    if ((itemCat === 'utilizatsiya' || itemCat === 'u') && (bKey === 'utilizatsiya' || bKey === 'u')) return true;
    return itemCat === bKey;
  }

  function renderBins() {
    const binsGrid = document.getElementById('sorting-bins-grid');
    if (!binsGrid) return;

    binsGrid.innerHTML = MASTER_ECO_CATEGORIES.map((cat, idx) => {
      const shortcutNum = idx + 1; // 1 dan 9 gacha
      return `
        <div 
          id="sorting-bin-${cat.key}" 
          data-bin-key="${cat.key}" 
          onclick="EcoSortingEngine.handleBinClick('${cat.key}')"
          ondragover="EcoSortingEngine.handleNativeDragOver(event, '${cat.key}')"
          ondragleave="EcoSortingEngine.handleNativeDragLeave(event, '${cat.key}')"
          ondrop="EcoSortingEngine.handleNativeDrop(event, '${cat.key}')"
          class="sorting-drop-bin ${cat.binBg} border-2 rounded-2xl p-2.5 sm:p-3 transition-all duration-200 flex flex-col justify-between min-h-[95px] sm:min-h-[110px] relative group cursor-pointer hover:shadow-xl hover:-translate-y-0.5 select-none"
        >
          <!-- Top Bin Header -->
          <div class="flex items-center justify-between gap-1 mb-1">
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="text-xl sm:text-2xl shrink-0 transition-transform group-hover:scale-110">${cat.icon}</span>
              <div class="truncate">
                <span class="text-xs sm:text-sm font-black text-white block truncate">${cat.name}</span>
                <span class="text-[9px] text-slate-400 block">${cat.key === 'utilizatsiya' ? 'Qayta ishlanmaydi' : 'Qayta ishlanadi'}</span>
              </div>
            </div>
            <span class="w-5 h-5 rounded-md bg-slate-950/80 border border-slate-700/80 text-slate-300 text-[10px] font-black flex items-center justify-center shrink-0">
              ${shortcutNum}
            </span>
          </div>

          <!-- Bin Slot Badges (Joylashtirilgan elementlar) -->
          <div id="bin-items-slot-${cat.key}" class="flex flex-wrap gap-1 items-center min-h-[26px] p-1 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <span class="text-[10px] text-slate-500 italic px-1 bin-empty-label">Bo'sh</span>
          </div>

          <!-- Bottom Bin Count & Drop Hint -->
          <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 mt-1 pt-1 border-t border-slate-800/60">
            <span class="bin-counter-text">0 ta chiqindi</span>
            <span class="text-emerald-400 text-[10px] font-extrabold flex items-center gap-0.5">
              <span>📥 Tashlash</span>
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  // -----------------------------------------------------------------------
  // 6. YANGI RAUND BOSHLASH (10 ta Balanslashtirilgan Chiqindi)
  // -----------------------------------------------------------------------
  function startNewSortingRound() {
    stopSortingGameTimer();
    EcoSortingState.placements = {};
    EcoSortingState.results = null;
    EcoSortingState.selectedItemId = null;
    EcoSortingState.isFinished = false;
    EcoSortingState.startTime = Date.now();

    // 10 ta chiqindini Fisher-Yates + Adaptive + Balans qoidalari bilan tanlash
    EcoSortingState.activeItems = selectBalancedRoundItems({
      count: 9,
      difficulty: EcoSortingState.difficulty
    });

    renderBins();
    renderTrayItems();
    updateBinsContentUI();
    updatePlacedCountUI();

    const timerRow = document.getElementById('sorting-timer-row');
    if (EcoSortingState.timerEnabled) {
      if (timerRow) timerRow.classList.remove('hidden');
      startSortingGameTimer(EcoSortingState.timerTotal);
    } else {
      if (timerRow) timerRow.classList.add('hidden');
    }

    if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
      window.ecoAudio.playClick();
    }
  }

  // -----------------------------------------------------------------------
  // 7. TRAYDAGI 10 TA CHIQINDI KARTOCHKALARINI RENDER QILISH
  // -----------------------------------------------------------------------
  function renderTrayItems() {
    const tray = document.getElementById('sorting-tray-items');
    if (!tray) return;

    // Hali konteynerga joylanmagan chiqindilar
    const unplacedItems = EcoSortingState.activeItems.filter(
      item => !EcoSortingState.placements[item.id]
    );

    const remainingCountEl = document.getElementById('tray-remaining-count');
    if (remainingCountEl) {
      remainingCountEl.textContent = `${unplacedItems.length} ta qoldi`;
    }

    if (unplacedItems.length === 0) {
      tray.innerHTML = `
        <div class="py-5 text-center animate-fade-in text-emerald-400 font-bold text-xs flex flex-col items-center gap-2 w-full">
          <i class="fa-solid fa-circle-check text-3xl animate-bounce"></i>
          <span class="text-sm font-black">Barcha 9 ta chiqindi 9 ta qutiga joylandi!</span>
          <span class="text-slate-300 text-[11px]">Agar xohlasangiz qutilardagi elementlarni bosib qaytarib olishingiz mumkin. Tayyor bo'lsangiz quyidagi <strong>"Tekshirish"</strong> tugmasini bosing!</span>
        </div>
      `;
      return;
    }

    tray.innerHTML = unplacedItems.map((item, idx) => {
      const isSelected = EcoSortingState.selectedItemId === item.id;
      const isTrap = !!item.isTrap;
      const imgSrc = item.svg ? null : (item.image || `images/waste/${item.slug}.svg`);

      return `
        <div 
          id="waste-card-${item.id}"
          data-item-id="${item.id}"
          draggable="true"
          ondragstart="EcoSortingEngine.handleNativeDragStart(event, ${item.id})"
          ondragend="EcoSortingEngine.handleNativeDragEnd(event)"
          onpointerdown="EcoSortingEngine.handlePointerDown(event, ${item.id})"
          onclick="EcoSortingEngine.handleCardClick(event, ${item.id})"
          style="touch-action: none; --idx: ${idx};"
          class="waste-draggable-card waste-card-animated bg-slate-900 border-2 ${isSelected ? 'ring-4 ring-emerald-400 border-emerald-400 scale-105 bg-emerald-950/60 shadow-emerald-500/30' : 'border-slate-700 hover:border-emerald-400'} rounded-2xl p-2.5 w-[130px] sm:w-[145px] flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer hover:shadow-2xl relative group shadow-md hover:-translate-y-1 select-none"
        >
          <!-- Shimmer Effect -->
          <div class="waste-card-shimmer"></div>

          ${isSelected ? `
            <span class="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-lg z-20 animate-pulse tracking-wider">
              Tanlandi
            </span>
          ` : ''}

          <!-- Header badge -->
          <div class="w-full flex items-center justify-between gap-1 mb-1 relative z-10">
            <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
              ${(item.difficulty || 'orta').toUpperCase()}
            </span>
            ${isTrap ? `
              <span class="waste-trap-pulse text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
                ⚠️ QOPQON
              </span>
            ` : `
              <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-500/9 text-emerald-400 border border-emerald-500/20">
                +10 XP
              </span>
            `}
          </div>

          <!-- Rasm yoki Vektorli SVG Icon -->
          <div class="w-14 h-14 my-1 flex items-center justify-center relative z-10 pointer-events-none select-none">
            ${item.svg ? `
              <div class="w-full h-full flex items-center justify-center transition-transform group-hover:scale-110 drop-shadow-md">
                ${item.svg}
              </div>
            ` : `
              <img 
                src="${imgSrc}" 
                alt="${item.name}" 
                draggable="false"
                class="w-14 h-14 object-contain transition-transform group-hover:scale-110 drop-shadow-md select-none pointer-events-none"
                onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'text-3xl animate-bounce\'>${item.icon || item.emoji || '📦'}</div>';"
              />
            `}
          </div>

          <!-- Chiqindi Nomi -->
          <span class="text-xs font-black text-white line-clamp-2 leading-tight min-h-[30px] flex items-center justify-center group-hover:text-emerald-300 transition-colors z-10">
            ${item.name}
          </span>

          <!-- Harakat ko'rsatkichi -->
          <div class="mt-1 text-[9px] font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-400'} group-hover:text-emerald-300 transition-colors flex items-center gap-1 z-10">
            <i class="fa-solid ${isSelected ? 'fa-arrow-down' : 'fa-hand-pointer'} text-[9px]"></i>
            <span>${isSelected ? "Qutini bosing!" : "Bosing / Sudrang"}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // -----------------------------------------------------------------------
  // 8. KONTEYNERLARNING ICHIDAGI ELEMENTLARNI YANGILASH
  // -----------------------------------------------------------------------
  function updateBinsContentUI() {
    MASTER_ECO_CATEGORIES.forEach(cat => {
      const slotEl = document.getElementById(`bin-items-slot-${cat.key}`);
      const binEl = document.getElementById(`sorting-bin-${cat.key}`);
      if (!slotEl || !binEl) return;

      const placedInThisBin = EcoSortingState.activeItems.filter(
        item => EcoSortingState.placements[item.id] === cat.key
      );

      const counterTextEl = binEl.querySelector('.bin-counter-text');
      if (counterTextEl) {
        counterTextEl.textContent = `${placedInThisBin.length} ta chiqindi`;
      }

      if (placedInThisBin.length === 0) {
        slotEl.innerHTML = `<span class="text-[10px] text-slate-500 italic px-1 bin-empty-label">Bo'sh</span>`;
      } else {
        slotEl.innerHTML = placedInThisBin.map(it => `
          <button 
            type="button"
            onclick="event.stopPropagation(); EcoSortingEngine.removeFromBin(${it.id})"
            title="${it.name} (Qaytarib olish uchun bosing)"
            class="px-2 py-0.5 rounded-md bg-slate-900 hover:bg-rose-950/80 text-white hover:text-rose-300 border border-slate-700 hover:border-rose-500/60 text-[10px] font-bold flex items-center gap-1 transition-all group/item shadow-sm cursor-pointer"
          >
            <span>${it.icon || it.emoji || '♻️'}</span>
            <span class="max-w-[70px] truncate">${it.name}</span>
            <i class="fa-solid fa-xmark text-[9px] text-slate-400 group-hover/item:text-rose-400"></i>
          </button>
        `).join('');
      }
    });
  }

  function updatePlacedCountUI() {
    const total = EcoSortingState.activeItems.length || 10;
    const placed = Object.keys(EcoSortingState.placements).length;

    const counter = document.getElementById('sorting-placed-counter');
    if (counter) counter.textContent = `${placed} / ${total}`;

    const verifyBtn = document.getElementById('verify-sorting-btn');
    const statusHint = document.getElementById('sorting-status-hint');

    if (placed >= total) {
      if (verifyBtn) {
        verifyBtn.disabled = false;
        verifyBtn.className = "px-7 py-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 font-black rounded-xl text-sm transition-all transform shadow-xl shadow-emerald-500/30 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 animate-pulse";
      }
      if (statusHint) {
        statusHint.innerHTML = `<span class="text-emerald-400 font-bold"><i class="fa-solid fa-circle-check mr-1"></i> Barcha 10 ta chiqindi saralandi! Natijani tekshirishga tayyor.</span>`;
      }
    } else {
      if (verifyBtn) {
        verifyBtn.disabled = true;
        verifyBtn.className = "px-7 py-3 bg-slate-800 text-slate-500 font-bold rounded-xl text-sm transition-all flex items-center gap-2 opacity-50 cursor-not-allowed";
      }
      if (statusHint) {
        statusHint.innerHTML = `<span>Yana <strong>${total - placed} ta</strong> chiqindini qutilarga joylang.</span>`;
      }
    }
  }

  // -----------------------------------------------------------------------
  // 9. NATIVE HTML5 DRAG & DROP ENGINE (Desktop brauzerlar uchun)
  // -----------------------------------------------------------------------
  function handleNativeDragStart(e, itemId) {
    EcoSortingState.dragActive = true;
    EcoSortingState.dragItemId = itemId;
    if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', String(itemId));
      e.dataTransfer.effectAllowed = 'move';
    }
    const card = document.getElementById(`waste-card-${itemId}`);
    if (card) card.style.opacity = '0.4';
  }

  function handleNativeDragOver(e, binKey) {
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
    const bin = document.getElementById(`sorting-bin-${binKey}`);
    if (bin) {
      bin.classList.add('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'bg-emerald-950/60');
    }
  }

  function handleNativeDragLeave(e, binKey) {
    const bin = document.getElementById(`sorting-bin-${binKey}`);
    if (bin) {
      bin.classList.remove('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'bg-emerald-950/60');
    }
  }

  function handleNativeDrop(e, binKey) {
    e.preventDefault();
    const bin = document.getElementById(`sorting-bin-${binKey}`);
    if (bin) {
      bin.classList.remove('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'bg-emerald-950/60');
    }

    let itemId = EcoSortingState.dragItemId;
    if (!itemId && e.dataTransfer) {
      const raw = e.dataTransfer.getData('text/plain');
      if (raw) itemId = parseInt(raw, 10);
    }

    if (itemId) {
      placeItemInBin(itemId, binKey);
    }
    EcoSortingState.dragActive = false;
    EcoSortingState.dragItemId = null;
  }

  function handleNativeDragEnd(e) {
    EcoSortingState.dragActive = false;
    EcoSortingState.dragItemId = null;
    document.querySelectorAll('.sorting-drop-bin').forEach(bin => {
      bin.classList.remove('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'bg-emerald-950/60');
    });
    document.querySelectorAll('.waste-draggable-card').forEach(c => {
      c.style.opacity = '1';
    });
  }

  // -----------------------------------------------------------------------
  // 10. POINTER EVENTS DRAG-AND-DROP (Touch, Mobile & Unified Pointer)
  // -----------------------------------------------------------------------
  let pointerStartPos = null;
  let dragGhost = null;

  function handlePointerDown(e, itemId) {
    if (e.button !== undefined && e.button !== 0) return;
    const card = document.getElementById(`waste-card-${itemId}`);
    if (!card) return;

    // Pointer capture (touch siljishida ham nazorat yo'qolmasligi uchun)
    try {
      card.setPointerCapture(e.pointerId);
    } catch (err) {}

    pointerStartPos = {
      x: e.clientX,
      y: e.clientY,
      itemId: itemId,
      hasMoved: false,
      pointerId: e.pointerId
    };

    const onMove = (moveEvt) => {
      if (!pointerStartPos) return;
      const dx = moveEvt.clientX - pointerStartPos.x;
      const dy = moveEvt.clientY - pointerStartPos.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 6 && !pointerStartPos.hasMoved) {
        pointerStartPos.hasMoved = true;
        EcoSortingState.dragActive = true;
        EcoSortingState.dragItemId = itemId;

        const item = EcoSortingState.activeItems.find(i => i.id === itemId);
        dragGhost = document.createElement('div');
        dragGhost.id = 'waste-drag-ghost';
        dragGhost.className = 'fixed pointer-events-none z-[9999] rounded-2xl bg-slate-900/95 border-2 border-emerald-400 p-2.5 flex items-center gap-2 shadow-2xl';
        dragGhost.style.transform = 'translate(-50%, -50%) scale(1.08)';
        dragGhost.innerHTML = `
          <span class="text-2xl">${item ? (item.icon || item.emoji || '📦') : '📦'}</span>
          <span class="text-xs font-black text-white">${item ? item.name : ''}</span>
        `;
        document.body.appendChild(dragGhost);
        card.style.opacity = '0.35';
      }

      if (pointerStartPos.hasMoved && dragGhost) {
        dragGhost.style.left = `${moveEvt.clientX}px`;
        dragGhost.style.top = `${moveEvt.clientY}px`;

        let foundKey = null;
        document.querySelectorAll('.sorting-drop-bin').forEach(bin => {
          const r = bin.getBoundingClientRect();
          if (moveEvt.clientX >= r.left && moveEvt.clientX <= r.right && moveEvt.clientY >= r.top && moveEvt.clientY <= r.bottom) {
            foundKey = bin.dataset.binKey;
            bin.classList.add('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'bg-emerald-950/60');
          } else {
            bin.classList.remove('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'bg-emerald-950/60');
          }
        });
        EcoSortingState.dragCandidateBinKey = foundKey;
      }
    };

    const onUp = (upEvt) => {
      try {
        card.releasePointerCapture(upEvt.pointerId || (pointerStartPos ? pointerStartPos.pointerId : 0));
      } catch (err) {}

      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);

      document.querySelectorAll('.sorting-drop-bin').forEach(bin => {
        bin.classList.remove('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'bg-emerald-950/60');
      });

      if (dragGhost) {
        dragGhost.remove();
        dragGhost = null;
      }
      card.style.opacity = '1';

      if (pointerStartPos && pointerStartPos.hasMoved) {
        EcoSortingState.dragActive = false;
        let candidate = EcoSortingState.dragCandidateBinKey;
        
        // Agar drop koordinatasida quti aniqlanmagan bo'lsa, up nuqtasi bo'yicha ham tekshirish
        if (!candidate && upEvt.clientX !== undefined) {
          document.querySelectorAll('.sorting-drop-bin').forEach(bin => {
            const r = bin.getBoundingClientRect();
            if (upEvt.clientX >= r.left && upEvt.clientX <= r.right && upEvt.clientY >= r.top && upEvt.clientY <= r.bottom) {
              candidate = bin.dataset.binKey;
            }
          });
        }
        EcoSortingState.dragCandidateBinKey = null;

        if (candidate) {
          placeItemInBin(itemId, candidate);
        } else {
          card.classList.add('animate-shake');
          setTimeout(() => card.classList.remove('animate-shake'), 400);
        }
      }
      pointerStartPos = null;
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  }

  // -----------------------------------------------------------------------
  // 11. CLICK-TO-PLACE & KLAVIATURA BOSHQARUVI
  // -----------------------------------------------------------------------
  function handleCardClick(e, itemId) {
    if (e) e.stopPropagation();
    if (EcoSortingState.selectedItemId === itemId) {
      EcoSortingState.selectedItemId = null; // Bekor qilish
    } else {
      EcoSortingState.selectedItemId = itemId;
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    }
    renderTrayItems();
    updateBinsHighlightForClickToPlace();
  }

  function updateBinsHighlightForClickToPlace() {
    const hasSelection = !!EcoSortingState.selectedItemId;
    document.querySelectorAll('.sorting-drop-bin').forEach(bin => {
      if (hasSelection) {
        bin.classList.add('ring-2', 'ring-emerald-400', 'animate-pulse');
      } else {
        bin.classList.remove('ring-2', 'ring-emerald-400', 'animate-pulse');
      }
    });
  }

  function handleBinClick(binKey) {
    if (!EcoSortingState.selectedItemId) {
      if (window.showToast) window.showToast("Avval yuqoridagi chiqindilardan birini bosing, so'ng qutini tanlang!");
      return;
    }
    placeItemInBin(EcoSortingState.selectedItemId, binKey);
  }

  function placeItemInBin(itemId, binKey) {
    const item = EcoSortingState.activeItems.find(i => i.id === itemId);
    if (!item) return;

    EcoSortingState.placements[itemId] = binKey;
    EcoSortingState.selectedItemId = null;

    if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
      window.ecoAudio.playClick();
    }

    // Mashq rejimida bo'lsa darhol to'g'ri/xato ekanligini aytib turish
    if (EcoSortingState.mode === 'practice') {
      const isCorrect = isItemMatchBin(item, binKey);
      if (isCorrect) {
        if (window.ecoAudio && typeof window.ecoAudio.playSuccess === 'function') window.ecoAudio.playSuccess();
        if (window.showToast) window.showToast(`✅ To'g'ri! ${item.name} ushbu qutiga to'g'ri joylandi.`);
      } else {
        if (window.ecoAudio && typeof window.ecoAudio.playError === 'function') window.ecoAudio.playError();
        if (window.showToast) window.showToast(`❌ Xato! ${item.hint || item.explanation || "Bu qutiga kirmaydi"}`);
      }
    }

    renderTrayItems();
    updateBinsHighlightForClickToPlace();
    updateBinsContentUI();
    updatePlacedCountUI();
  }

  function removeFromBin(itemId) {
    delete EcoSortingState.placements[itemId];
    EcoSortingState.selectedItemId = null;
    if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
      window.ecoAudio.playClick();
    }

    renderTrayItems();
    updateBinsHighlightForClickToPlace();
    updateBinsContentUI();
    updatePlacedCountUI();
  }

  // -----------------------------------------------------------------------
  // 12. KLAVIATURA TEZKOR TUGMALARI (1-9)
  // -----------------------------------------------------------------------
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (!EcoSortingState.selectedItemId) return;

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) {
        e.preventDefault();
        const targetCat = MASTER_ECO_CATEGORIES[num - 1];
        if (targetCat) {
          placeItemInBin(EcoSortingState.selectedItemId, targetCat.key);
        }
      }
    });
  }

  // -----------------------------------------------------------------------
  // 13. NATIJANI TEKSHIRISH VA YAKUNIY HISOBOT (Imtihon Rejimi)
  // -----------------------------------------------------------------------
  function verifyRound() {
    const total = EcoSortingState.activeItems.length || 10;
    const placed = Object.keys(EcoSortingState.placements).length;
    if (placed < total) {
      if (window.showToast) window.showToast(`Hali ${total - placed} ta chiqindi qutilarga joylanmagan!`);
      return;
    }
    submitExamResults(false);
  }

  function submitExamResults(isTimeout = false) {
    stopSortingGameTimer();
    EcoSortingState.isFinished = true;

    const items = EcoSortingState.activeItems;
    const elapsedSeconds = Math.round((Date.now() - EcoSortingState.startTime) / 1000);

    let correctCount = 0;
    const categoryStats = {};
    const detailedList = [];

    let storedWeakCats = {};
    try {
      storedWeakCats = JSON.parse(localStorage.getItem('ECO_WEAK_CATEGORIES') || '{}');
    } catch (e) {}

    items.forEach(item => {
      const chosenCatKey = EcoSortingState.placements[item.id] || 'unplaced';
      const isCorrect = isItemMatchBin(item, chosenCatKey);
      const itemCat = getItemCatKey(item);

      if (!categoryStats[itemCat]) {
        categoryStats[itemCat] = { total: 0, correct: 0, catName: itemCat };
        const foundCat = MASTER_ECO_CATEGORIES.find(c => c.key === itemCat);
        if (foundCat) categoryStats[itemCat].catName = foundCat.name;
      }
      categoryStats[itemCat].total++;

      if (isCorrect) {
        correctCount++;
        categoryStats[itemCat].correct++;
      } else {
        storedWeakCats[itemCat] = (storedWeakCats[itemCat] || 0) + 1;
      }

      const correctCatObj = MASTER_ECO_CATEGORIES.find(c => c.key === itemCat);
      const chosenCatObj = MASTER_ECO_CATEGORIES.find(c => c.key === chosenCatKey);

      detailedList.push({
        item: item,
        chosenKey: chosenCatKey,
        chosenName: chosenCatObj ? chosenCatObj.name : 'Joylashtirilmadi',
        correctKey: itemCat,
        correctName: correctCatObj ? correctCatObj.name : itemCat,
        isCorrect: isCorrect
      });
    });

    try {
      localStorage.setItem('ECO_WEAK_CATEGORIES', JSON.stringify(storedWeakCats));
    } catch (e) {}

    const totalCount = items.length || 10;
    const accuracy = Math.round((correctCount / totalCount) * 100);

    let baseXP = correctCount * 10;
    let perfectionBonus = (correctCount === totalCount) ? 50 : 0;
    let earnedXP = baseXP + perfectionBonus;
    let earnedCoins = Math.floor(earnedXP / 2);

    if (typeof addPlayerXP === 'function') addPlayerXP(earnedXP);
    if (typeof addEcoCoins === 'function') addEcoCoins(earnedCoins);

    let titleBadge = "🌱 Yangi boshlovchi";
    let titleColor = "text-slate-400";
    if (correctCount === totalCount) {
      titleBadge = "👑 Eko-ustoz (10/9 Mukammal!)";
      titleColor = "text-amber-400";
    } else if (correctCount >= 7) {
      titleBadge = "🥈 Saralash ustasi";
      titleColor = "text-emerald-400";
    } else if (correctCount >= 4) {
      titleBadge = "🥉 O'rganuvchi";
      titleColor = "text-cyan-400";
    }

    if (correctCount >= 7) {
      if (window.ecoAudio) window.ecoAudio.playLevelUp();
      if (window.EcoFxEngine) {
        window.EcoFxEngine.triggerPaqldoq(window.innerWidth / 2, window.innerHeight / 3, earnedXP);
      }
    } else {
      if (window.ecoAudio) window.ecoAudio.playError();
    }

    renderResultModalUI({
      totalCount,
      correctCount,
      accuracy,
      elapsedSeconds,
      earnedXP,
      earnedCoins,
      titleBadge,
      titleColor,
      categoryStats,
      detailedList,
      isTimeout
    });
  }

  function renderResultModalUI(stats) {
    const modal = document.getElementById('sorting-result-modal');
    const content = document.getElementById('sorting-result-content');
    if (!modal || !content) return;

    modal.classList.remove('hidden');

    const weakList = Object.entries(stats.categoryStats).filter(([k, v]) => v.correct < v.total);

    content.innerHTML = `
      <div class="text-center pb-4 mb-4 border-b border-slate-800">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-3 text-xs font-black ${stats.titleColor}">
          <span>${stats.titleBadge}</span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-black text-white">
          ${stats.isTimeout ? '⏱️ Vaqt Tugadi! Yakuniy Natija' : '🎉 Saralash Yakunlandi!'}
        </h3>
        <p class="text-xs text-slate-400 mt-1">10 ta chiqindini tafakkur qilib saralash bo'yicha hisobot:</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5 text-center">
        <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <span class="text-[10px] text-slate-500 uppercase font-black block">To'g'ri / Jami</span>
          <span class="text-2xl font-black text-emerald-400">${stats.correctCount} / ${stats.totalCount}</span>
        </div>

        <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <span class="text-[10px] text-slate-500 uppercase font-black block">Aniqlik</span>
          <span class="text-2xl font-black ${stats.accuracy >= 70 ? 'text-emerald-400' : 'text-amber-400'}">${stats.accuracy}%</span>
        </div>

        <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <span class="text-[10px] text-slate-500 uppercase font-black block">Sarflangan Vaqt</span>
          <span class="text-2xl font-black text-cyan-400">${stats.elapsedSeconds}s</span>
        </div>

        <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <span class="text-[10px] text-slate-500 uppercase font-black block">Mukofot</span>
          <span class="text-xl font-black text-amber-400">+${stats.earnedXP} XP</span>
        </div>
      </div>

      ${weakList.length > 0 ? `
        <div class="mb-5 p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/40 text-xs">
          <div class="font-bold text-rose-300 flex items-center gap-1.5 mb-1">
            <i class="fa-solid fa-triangle-exclamation"></i>
            E'tibor bering: Zaif toifalar aniqlandi!
          </div>
          <p class="text-slate-300">
            Siz <strong>${weakList.map(([k, v]) => `${v.catName} (${v.correct}/${v.total})`).join(', ')}</strong> toifalarida adashdingiz. Tizim bu toifalarni keyingi o'yinlarda ko'proq chiqarib sizni o'rgatadi.
          </p>
        </div>
      ` : ''}

      <div class="mb-5">
        <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-emerald-400"></i>
          Har bir chiqindi bo'yicha tahlil:
        </h4>
        <div class="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
          ${stats.detailedList.map(row => `
            <div class="p-3 rounded-xl border ${row.isCorrect ? 'border-emerald-500/30 bg-emerald-950/20' : 'border-rose-500/30 bg-rose-950/20'} text-xs">
              <div class="flex items-center justify-between mb-1.5">
                <span class="font-black text-white flex items-center gap-2">
                  <span>${row.item.icon || row.item.emoji || '📦'}</span>
                  <span>${row.item.name}</span>
                </span>
                <span class="${row.isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-bold">
                  ${row.isCorrect ? '✅ To\'g\'ri' : '❌ Xato'}
                </span>
              </div>
              <div class="text-[11px] text-slate-400 mb-1">
                Tanlangan quti: <strong class="text-slate-200">${row.chosenName}</strong> | 
                Asl to'g'ri quti: <strong class="text-emerald-300">${row.correctName}</strong>
              </div>
              <p class="text-[11px] text-slate-300 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                💡 <strong>Qoida:</strong> ${row.item.explanation}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-2.5 pt-3 border-t border-slate-800">
        ${stats.correctCount < stats.totalCount ? `
          <button onclick="EcoSortingEngine.retryOnlyMistakes()" class="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Faqat Xatolarni Qayta Mashq Qilish (${stats.totalCount - stats.correctCount} ta)</span>
          </button>
        ` : ''}

        <button onclick="EcoSortingEngine.closeResultAndRestart()" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer">
          <i class="fa-solid fa-rotate-right"></i>
          <span>Yangi 10 talik O'yin</span>
        </button>

        <button onclick="EcoSortingEngine.closeResultModal(); switchMainTab('teacher-tab');" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-trophy"></i>
          <span>Liderlar Jadvali</span>
        </button>
      </div>
    `;
  }

  function closeResultModal() {
    const modal = document.getElementById('sorting-result-modal');
    if (modal) modal.classList.add('hidden');
  }

  function closeResultAndRestart() {
    closeResultModal();
    startNewSortingRound();
  }

  function retryOnlyMistakes() {
    closeResultModal();
    const mistakes = EcoSortingState.activeItems.filter(
      item => !isItemMatchBin(item, EcoSortingState.placements[item.id])
    );

    if (mistakes.length === 0) {
      startNewSortingRound();
      return;
    }

    EcoSortingState.placements = {};
    EcoSortingState.results = null;
    EcoSortingState.isFinished = false;
    EcoSortingState.selectedItemId = null;
    EcoSortingState.startTime = Date.now();
    EcoSortingState.activeItems = fisherYatesShuffle(mistakes);

    renderTrayItems();
    updateBinsContentUI();
    updatePlacedCountUI();

    if (window.showToast) {
      window.showToast(`🎯 Faqat xato qilingan ${mistakes.length} ta chiqindi yuklandi!`);
    }
  }

  function showStartModal() {
    const modal = document.getElementById('sorting-config-modal');
    if (modal) modal.classList.remove('hidden');
  }

  function hideStartModal() {
    const modal = document.getElementById('sorting-config-modal');
    if (modal) modal.classList.add('hidden');
  }

  function setMode(modeName) {
    EcoSortingState.mode = modeName;
    const modeTag = document.getElementById('active-mode-tag');
    if (modeTag) {
      if (modeName === 'exam') {
        modeTag.className = "text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full";
        modeTag.textContent = "Imtihon Rejimi";
      } else {
        modeTag.className = "text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full";
        modeTag.textContent = "Mashq Rejimi";
      }
    }
  }

  function toggleTimerOption(enabled) {
    EcoSortingState.timerEnabled = enabled;
  }

  function applyConfigAndStart() {
    hideStartModal();
    startNewSortingRound();
  }

  function switchToConveyorQuiz() {
    stopSortingGameTimer();
    const container = document.getElementById('sorting-game-container');
    if (typeof window.launchConveyorQuizMode === 'function') {
      window.launchConveyorQuizMode(container);
    }
  }

  function switchToTraySorting() {
    if (typeof stopConveyorQuizTimer === 'function') stopConveyorQuizTimer();
    const container = document.getElementById('sorting-game-container') || document.getElementById('game-dynamic-content');
    if (window.EcoWasteDragLab && typeof window.EcoWasteDragLab.renderUI === 'function') {
      window.EcoWasteDragLab.renderUI(container);
    } else {
      renderSortingGameUI(container);
      startNewSortingRound();
    }
  }

  // To'liq xavfsiz va declared EcoSortingEngine
  const EcoSortingEngine = {
    init: initSortingGame,
    startNewRound: startNewSortingRound,
    restartRound: startNewSortingRound,
    handlePointerDown,
    handleNativeDragStart,
    handleNativeDragOver,
    handleNativeDragLeave,
    handleNativeDrop,
    handleNativeDragEnd,
    handleCardClick,
    handleBinClick,
    removeFromBin,
    verifyRound,
    showStartModal,
    hideStartModal,
    setMode,
    toggleTimerOption,
    applyConfigAndStart,
    closeResultModal,
    closeResultAndRestart,
    retryOnlyMistakes,
    switchToConveyorQuiz,
    switchToTraySorting
  };

  window.EcoSortingEngine = EcoSortingEngine;
    // Eski API nomlarini saqlab qolish (moslik uchun)
  window.startNew25Session = startNewSortingRound;

})();



// =======================================================================
// QO'SHIMCHA REJIM: 4 TALIK VARIANTLI 2D KONVEYER SKANERI (10s Taymer)
// =======================================================================
(function() {
  let conveyorSession = {
    activeBatch: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    results: [],
    isFinished: false,
    remainingSeconds: 10,
    timerInterval: null,
    isAnsweringLocked: false,
    currentChoices: []
  };

  function stopConveyorQuizTimer() {
    if (conveyorSession.timerInterval) {
      clearInterval(conveyorSession.timerInterval);
      conveyorSession.timerInterval = null;
    }
  }
  window.stopConveyorQuizTimer = stopConveyorQuizTimer;

  function launchConveyorQuizMode(container) {
    const target = container || document.getElementById('sorting-game-container');
    if (!target) return;

    target.innerHTML = `
      <div class="bg-slate-900 border border-cyan-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl relative select-none">
        <!-- Top Session Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl border border-cyan-500/40 shadow-lg shadow-cyan-500/9 shrink-0">
              ⚡
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-xl font-black text-white">4 Talik Tezkor Konveyer Skaneri</h3>
                <span class="text-[10px] uppercase font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                  200 TA CHIQINDI BAZASI
                </span>
                <span class="text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded-full">
                  10s Taymer
                </span>
              </div>
              <p class="text-xs text-slate-400 mt-0.5">Har bir chiqindi uchun 10 soniya! A, B, C, D variantlaridan to'g'risini tanlang.</p>
            </div>
          </div>

          <div class="flex items-center gap-3 flex-wrap">
            <button onclick="EcoSortingEngine.switchToTraySorting()" class="px-3.5 py-2 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm">
              <i class="fa-solid fa-hand text-emerald-400"></i>
              <span>🖐️ 10 Talik Sudrab Saralashga Qaytish</span>
            </button>
            <div class="bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-center min-w-[75px]">
              <span class="text-[9px] text-slate-500 uppercase font-black block">Jarayon</span>
              <span id="conveyor-progress" class="text-sm sm:text-base font-black text-cyan-400">0 / 25</span>
            </div>
            <div class="bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-center min-w-[80px]">
              <span class="text-[9px] text-slate-500 uppercase font-black block">Ball</span>
              <span id="conveyor-score" class="text-sm sm:text-base font-black text-amber-400">0 XP</span>
            </div>
          </div>
        </div>

        <!-- Playfield -->
        <div id="conveyor-playfield">
          <!-- Question Timer -->
          <div class="max-w-2xl mx-auto mb-3">
            <div class="flex items-center justify-between mb-1.5 px-1">
              <span id="conveyor-card-counter" class="text-xs uppercase font-black text-cyan-400 tracking-wider">
                Chiqindi 1 / 25
              </span>
              <div class="flex items-center gap-2">
                <button onclick="EcoPauseEngine.togglePause()" type="button" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 cursor-pointer">
                  <i class="fa-solid fa-pause text-[10px]"></i>
                  <span>Pauza</span>
                </button>
                <div class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  <i class="fa-solid fa-stopwatch"></i>
                  <span>Vaqt: <strong id="conveyor-timer-sec">10</strong>s</span>
                </div>
              </div>
            </div>
            <div class="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800 p-0.5 shadow-inner">
              <div id="conveyor-timer-bar" class="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-100 ease-linear" style="width: 100%;"></div>
            </div>
          </div>

          <!-- Card Anim -->
          <div id="conveyor-card-anim" class="max-w-2xl mx-auto mb-3"></div>

          <!-- Central Waste Card -->
          <div class="bg-slate-950/85 border border-slate-800 rounded-2xl p-5 text-center max-w-2xl mx-auto mb-4 shadow-inner relative">
            <div id="conveyor-trap-badge" class="hidden absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/50 animate-pulse">
              ⚠️ QOPQON CHIQINDI!
            </div>
            <div class="w-24 h-24 mx-auto my-1 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center p-2 shadow-lg relative group">
              <img id="conveyor-item-img" src="" alt="Chiqindi" class="w-full h-full object-contain filter drop-shadow-md waste-img-float" onerror="this.style.display='none'; document.getElementById('conveyor-item-icon').style.display='block';"/>
              <div id="conveyor-item-icon" class="text-6xl hidden waste-img-float">📦</div>
            </div>
            <h4 id="conveyor-item-name" class="text-2xl font-black text-white mt-2 mb-1 tracking-wide">Chiqindi nomi</h4>
            <div id="conveyor-feedback" class="text-xs text-slate-400 italic min-h-[26px] flex items-center justify-center">
              Ushbu chiqindi qaysi toifaga kiradi? To'g'ri variantni tanlang:
            </div>
          </div>

          <!-- 4 Choices Grid -->
          <div id="conveyor-4-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto"></div>

          <div class="text-center mt-3 text-[11px] text-slate-500">
            💡 Klaviatura: <strong>1, 2, 3, 4</strong> yoki <strong>A, B, C, D</strong> tugmalarini bosing
          </div>
        </div>
      </div>
    `;

    startNewConveyorSession();
  }
  window.launchConveyorQuizMode = launchConveyorQuizMode;

  function startNewConveyorSession() {
    stopConveyorQuizTimer();
    const db = window.ECO_WASTE_DATABASE || [];
    const pool = db.length > 0 ? db : (window.ALL_200_WASTES || []);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    conveyorSession.activeBatch = shuffled.slice(0, 25);
    conveyorSession.currentIndex = 0;
    conveyorSession.score = 0;
    conveyorSession.correctCount = 0;
    conveyorSession.wrongCount = 0;
    conveyorSession.results = [];
    conveyorSession.isFinished = false;

    displayConveyorQuestion();
  }

  function displayConveyorQuestion() {
    const item = conveyorSession.activeBatch[conveyorSession.currentIndex];
    if (!item) return;

    conveyorSession.isAnsweringLocked = false;
    if (window.EcoFxEngine && typeof window.EcoFxEngine.clearAllFeedback === 'function') {
      window.EcoFxEngine.clearAllFeedback(document.getElementById('conveyor-playfield') || document);
    }

    const total = conveyorSession.activeBatch.length;
    const counterEl = document.getElementById('conveyor-card-counter');
    const nameEl = document.getElementById('conveyor-item-name');
    const imgEl = document.getElementById('conveyor-item-img');
    const iconEl = document.getElementById('conveyor-item-icon');
    const trapEl = document.getElementById('conveyor-trap-badge');
    const fbEl = document.getElementById('conveyor-feedback');
    const progEl = document.getElementById('conveyor-progress');
    const scoreEl = document.getElementById('conveyor-score');

    if (counterEl) counterEl.textContent = `Chiqindi ${conveyorSession.currentIndex + 1} / ${total}`;
    if (nameEl) nameEl.textContent = item.name;
    if (imgEl) {
      imgEl.style.display = 'block';
      imgEl.src = item.image || `images/waste/${item.slug}.svg`;
    }
    if (iconEl) {
      iconEl.style.display = 'none';
      iconEl.textContent = item.icon || '📦';
    }
    if (trapEl) {
      if (item.isTrap) trapEl.classList.remove('hidden');
      else trapEl.classList.add('hidden');
    }
    if (fbEl) {
      fbEl.className = "text-xs text-slate-400 italic min-h-[26px] flex items-center justify-center";
      fbEl.textContent = "Ushbu chiqindi qaysi toifaga kiradi? To'g'ri variantni tanlang:";
    }
    if (progEl) progEl.textContent = `${conveyorSession.currentIndex + 1} / ${total}`;
    if (scoreEl) scoreEl.textContent = `${conveyorSession.score} XP`;

    // 2D Conveyor animation
    const animEl = document.getElementById('conveyor-card-anim');
    if (animEl && window.Eco2DAnimator && typeof window.Eco2DAnimator.getSortingConveyorHtml === 'function') {
      animEl.innerHTML = window.Eco2DAnimator.getSortingConveyorHtml(item);
    }

    // 4 choices
    const cats = window.ECO_CATEGORIES || [];
    const correctCat = cats.find(c => c.key === item.cat) || cats[0];
    const otherCats = cats.filter(c => c.key !== item.cat).sort(() => Math.random() - 0.5).slice(0, 3);
    const choices = [correctCat, ...otherCats].sort(() => Math.random() - 0.5);
    conveyorSession.currentChoices = choices;

    const grid = document.getElementById('conveyor-4-grid');
    if (grid) {
      grid.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      grid.innerHTML = choices.map((cat, idx) => `
        <button 
          onclick="window.submitConveyorChoice('${cat.key}', this)"
          data-cat-key="${cat.key}"
          class="conveyor-choice-btn p-4 rounded-2xl border ${cat.btnClass} transition-all duration-200 flex items-center justify-between group cursor-pointer active:scale-95 shadow-lg hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
        >
          <div class="flex items-center gap-3 min-w-0">
            <span class="w-8 h-8 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white font-black text-xs flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
              ${letters[idx]}
            </span>
            <span class="text-2xl shrink-0 group-hover:scale-125 transition-transform duration-200">${cat.icon}</span>
            <div class="text-left truncate">
              <div class="font-extrabold text-sm sm:text-base text-white group-hover:underline truncate">${cat.name}</div>
              <span class="text-[10px] opacity-75 block">${cat.key === 'U' ? 'Qayta ishlanmaydi' : 'Qayta ishlanadi'}</span>
            </div>
          </div>
          <span class="text-[10px] text-slate-500 font-mono hidden sm:inline">[${idx + 1}]</span>
        </button>
      `).join('');
    }

    startConveyorTimer();
  }

  function startConveyorTimer() {
    stopConveyorQuizTimer();
    conveyorSession.remainingSeconds = 30;
    const bar = document.getElementById('conveyor-timer-bar');
    const sec = document.getElementById('conveyor-timer-sec');

    conveyorSession.timerInterval = setInterval(() => {
      conveyorSession.remainingSeconds -= 0.1;
      if (bar) bar.style.width = `${Math.max(0, (conveyorSession.remainingSeconds / 30) * 100)}%`;
      if (sec) sec.textContent = Math.max(0, Math.ceil(conveyorSession.remainingSeconds));

      if (conveyorSession.remainingSeconds <= 0) {
        stopConveyorQuizTimer();
        submitConveyorChoice('timeout', null);
      }
    }, 100);
  }

  function submitConveyorChoice(selectedCategory, clickedBtn) {
    if (conveyorSession.isAnsweringLocked || conveyorSession.isFinished) return;
    conveyorSession.isAnsweringLocked = true;
    stopConveyorQuizTimer();

    const item = conveyorSession.activeBatch[conveyorSession.currentIndex];
    if (!item) return;

    const isCorrect = selectedCategory === item.cat;
    const btns = document.querySelectorAll('.conveyor-choice-btn');
    let correctBtn = null;

    btns.forEach(btn => {
      btn.disabled = true;
      if (btn.getAttribute('data-cat-key') === item.cat) {
        correctBtn = btn;
        btn.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/40', 'scale-[1.02]');
      } else if (btn.getAttribute('data-cat-key') === selectedCategory) {
        btn.classList.add('ring-4', 'ring-rose-500', 'bg-rose-600/40');
      } else {
        btn.classList.add('opacity-30');
      }
    });

    let transitionDelay = 550;

    if (isCorrect) {
      conveyorSession.correctCount++;
      conveyorSession.score += 10;
      if (window.ecoAudio) window.ecoAudio.playSuccess();
      if (window.addPlayerXP) window.addPlayerXP(10);
      if (window.EcoFxEngine) {
        const rect = clickedBtn ? clickedBtn.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
        window.EcoFxEngine.triggerPaqldoq(rect.left + rect.width / 2, rect.top + rect.height / 2, 10);
      }
      const fb = document.getElementById('conveyor-feedback');
      if (fb) {
        fb.className = "text-xs text-emerald-400 font-bold min-h-[26px] flex items-center justify-center animate-bounce";
        fb.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5"></i> To'g'ri! ${item.hint || ''} (+10 XP)`;
      }
    } else {
      conveyorSession.wrongCount++;
      if (window.ecoAudio) window.ecoAudio.playError();
      if (window.EcoFxEngine) {
        window.EcoFxEngine.triggerWrongFeedback(clickedBtn, correctBtn, document.getElementById('conveyor-playfield'));
      }
      const fb = document.getElementById('conveyor-feedback');
      if (fb) {
        fb.className = "text-xs text-rose-400 font-bold min-h-[26px] flex items-center justify-center";
        fb.innerHTML = `<i class="fa-solid fa-circle-xmark mr-1.5"></i> Noto'g'ri! ${item.hint || ''}`;
      }
      transitionDelay = 850;
    }

    setTimeout(() => {
      if (window.EcoFxEngine && typeof window.EcoFxEngine.clearAllFeedback === 'function') {
        window.EcoFxEngine.clearAllFeedback(document.getElementById('conveyor-playfield') || document);
      }
      conveyorSession.currentIndex++;
      if (conveyorSession.currentIndex >= conveyorSession.activeBatch.length) {
        finishConveyorSession();
      } else {
        displayConveyorQuestion();
      }
    }, transitionDelay);
  }
  window.submitConveyorChoice = submitConveyorChoice;

  function finishConveyorSession() {
    stopConveyorQuizTimer();
    conveyorSession.isFinished = true;
    if (window.ecoAudio) window.ecoAudio.playLevelUp();
    const target = document.getElementById('conveyor-playfield');
    if (target) {
      target.innerHTML = `
        <div class="py-10 text-center max-w-lg mx-auto bg-slate-950/80 rounded-3xl p-6 border border-emerald-500/30">
          <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/9 border border-emerald-500/30 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/9 animate-bounce">
            🏆
          </div>
          <h4 class="text-2xl font-black text-white mb-2">25 Talik Konveyer Yakunlandi!</h4>
          <p class="text-xs text-slate-300 mb-6">Natijangiz: <strong>${conveyorSession.correctCount} / 25</strong> to'g'ri. To'plangan ball: <strong>${conveyorSession.score} XP</strong></p>
          <div class="flex items-center justify-center gap-3">
            <button onclick="launchConveyorQuizMode()" class="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition-all cursor-pointer">
              <i class="fa-solid fa-rotate-right mr-1.5"></i> Qayta O'ynash
            </button>
            <button onclick="EcoSortingEngine.switchToTraySorting()" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all cursor-pointer">
              <i class="fa-solid fa-hand mr-1.5"></i> 10 Talik Sudrab Saralash
            </button>
          </div>
        </div>
      `;
    }
  }

  // Global conveyor shortcuts
  window.addEventListener('keydown', (e) => {
    if (conveyorSession.isAnsweringLocked || conveyorSession.isFinished) return;
    if (!conveyorSession.currentChoices || conveyorSession.currentChoices.length === 0) return;
    const grid = document.getElementById('conveyor-4-grid');
    if (!grid) return; // Only when conveyor mode is active

    let chosenIdx = -1;
    const k = e.key.toUpperCase();
    if (k === '1' || k === 'A') chosenIdx = 0;
    else if (k === '2' || k === 'B') chosenIdx = 1;
    else if (k === '3' || k === 'C') chosenIdx = 2;
    else if (k === '4' || k === 'D') chosenIdx = 3;

    if (chosenIdx >= 0 && chosenIdx < conveyorSession.currentChoices.length) {
      e.preventDefault();
      const choice = conveyorSession.currentChoices[chosenIdx];
      const btn = grid.querySelector(`[data-cat-key="${choice.key}"]`);
      submitConveyorChoice(choice.key, btn);
    }
  });

})();
