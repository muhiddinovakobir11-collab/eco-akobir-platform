// =========================================================================
// MUKAMMAL CHIQINDI SARALASH TIZIMI (Eco Sorting Pro Engine)
// Asoschi: Akobir | Akosh Eco Platform
// 120 ta Chiqindi Bazasi, Fisher-Yates, Adaptive Weighting, Pointer Events
// Drag-and-Drop, Click-to-Place, 1-9 Klaviaturasi, Imtihon va Mashq Rejimi,
// Qopqon Chiqindilar va Chuqur Natija Tahlili
// =========================================================================

(function () {
  'use strict';

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
  // 2. ADAPTIVE & BALANCED ITEM SELECTOR (Muvozanatli va Moslashuvchan Tanlash)
  // -----------------------------------------------------------------------
  function selectBalancedRoundItems(options = {}) {
    const db = window.ECO_WASTE_DATABASE || [];
    if (!db || db.length === 0) return [];

    const totalCount = options.count || 10;
    const filterDifficulty = options.difficulty || 'all';

    // 1) Qiyinlik bo'yicha saralash
    let pool = db;
    if (filterDifficulty !== 'all') {
      pool = db.filter(item => item.difficulty === filterDifficulty);
      if (pool.length < totalCount) pool = db; // Zaxira
    }

    // 2) Recency penalty (oxirgi 2-3 o'yinda chiqqan rasmlar kamroq tushsin)
    let recentIds = [];
    try {
      recentIds = JSON.parse(localStorage.getItem('ECO_RECENT_SORT_IDS') || '[]');
    } catch (e) { recentIds = []; }

    // 3) Moslashuvchan tanlash: foydalanuvchi ko'p xato qilgan toifalar (weak categories)
    let weakCategories = {};
    try {
      weakCategories = JSON.parse(localStorage.getItem('ECO_WEAK_CATEGORIES') || '{}');
    } catch (e) { weakCategories = {}; }

    // Toifalarni guruhlash
    const byCategory = {};
    pool.forEach(item => {
      if (!byCategory[item.cat]) byCategory[item.cat] = [];
      byCategory[item.cat].push(item);
    });

    const categoryKeys = Object.keys(byCategory);

    // Zaif toifalarni saralash (eng ko'p xato qilinganlari yuqorida)
    const sortedCategories = [...categoryKeys].sort((a, b) => {
      const errA = weakCategories[a] || 0;
      const errB = weakCategories[b] || 0;
      return errB - errA;
    });

    const chosenItems = [];
    const usedCategoriesCount = {};

    // Qopqon (Trap) chiqindilardan kamida 2-3 ta qo'shish
    const traps = pool.filter(i => i.isTrap && !recentIds.slice(-15).includes(i.id));
    const shuffledTraps = fisherYatesShuffle(traps.length > 0 ? traps : pool.filter(i => i.isTrap));
    const trapCount = Math.min(shuffledTraps.length, 3);
    for (let i = 0; i < trapCount; i++) {
      const it = shuffledTraps[i];
      if (it && !chosenItems.some(c => c.id === it.id)) {
        chosenItems.push(it);
        usedCategoriesCount[it.cat] = (usedCategoriesCount[it.cat] || 0) + 1;
      }
    }

    // Zaif toifalardan alohida 1-2 ta kiritish
    for (const cat of sortedCategories) {
      if (chosenItems.length >= totalCount) break;
      if ((weakCategories[cat] || 0) > 0 && (!usedCategoriesCount[cat] || usedCategoriesCount[cat] < 2)) {
        const catCandidates = byCategory[cat].filter(it => !chosenItems.some(c => c.id === it.id));
        if (catCandidates.length > 0) {
          const fresh = catCandidates.filter(it => !recentIds.includes(it.id));
          const pick = fresh.length > 0 ? fresh[Math.floor(Math.random() * fresh.length)] : catCandidates[0];
          chosenItems.push(pick);
          usedCategoriesCount[pick.cat] = (usedCategoriesCount[pick.cat] || 0) + 1;
        }
      }
    }

    // Qolgan toifalardan muvozanatli to'ldirish (kamida 5-6 toifa, bitta toifadan max 3 ta)
    const remainingCats = fisherYatesShuffle(categoryKeys);
    let catIndex = 0;

    while (chosenItems.length < totalCount && catIndex < remainingCats.length * 4) {
      const cat = remainingCats[catIndex % remainingCats.length];
      catIndex++;

      if ((usedCategoriesCount[cat] || 0) >= 3) continue; // Bitta toifadan ko'pi bilan 3 ta!

      const available = (byCategory[cat] || []).filter(it => !chosenItems.some(c => c.id === it.id));
      if (available.length === 0) continue;

      // Recency bo'yicha saralash
      const freshItems = available.filter(it => !recentIds.includes(it.id));
      const chosenCandidate = freshItems.length > 0
        ? freshItems[Math.floor(Math.random() * freshItems.length)]
        : available[Math.floor(Math.random() * available.length)];

      chosenItems.push(chosenCandidate);
      usedCategoriesCount[cat] = (usedCategoriesCount[cat] || 0) + 1;
    }

    // Agar 10 taga yetmay qolsa, qolgan hamma pool'dan to'ldiramiz
    if (chosenItems.length < totalCount) {
      const leftover = pool.filter(it => !chosenItems.some(c => c.id === it.id));
      const shuffledLeftover = fisherYatesShuffle(leftover);
      for (const item of shuffledLeftover) {
        if (chosenItems.length >= totalCount) break;
        chosenItems.push(item);
      }
    }

    // Yakuniy tartib ham Fisher-Yates orqali to'liq aralashtiriladi (toifalar ketma-ket tushmasin!)
    const finalShuffled = fisherYatesShuffle(chosenItems);

    // Oxirgi o'ynalganlar ro'yxatini yangilash (oxirgi 30 ta)
    const newRecentIds = [...recentIds, ...finalShuffled.map(i => i.id)].slice(-30);
    try {
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
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/40 shadow-lg shadow-emerald-500/10 shrink-0">
              ♻️
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-xl font-black text-white tracking-wide">Tafakkur Bilan Chiqindilarni Saralash</h3>
                <span class="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  120 ta Chiqindi Bazasi
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
            <div class="bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-center">
              <span class="text-[9px] text-slate-500 uppercase font-black block">Joylandi</span>
              <span id="sorting-placed-counter" class="text-sm font-black text-emerald-400">0 / 10</span>
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

        <!-- 9 Ta Konteyner Paneli (Drop Targets) -->
        <div class="mb-5">
          <div class="flex items-center justify-between mb-2 px-1">
            <span class="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <i class="fa-solid fa-boxes-stacked text-emerald-400"></i>
              Saralash Konteynerlari (Qutilar)
            </span>
            <span class="text-[11px] text-slate-500 hidden sm:inline">
              💡 Klaviatura: Chiqindini tanlang va <strong>1-9</strong> raqamlarini bosing
            </span>
          </div>

          <div id="sorting-bins-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
            <!-- Dinamik ravishda render qilinadi -->
          </div>
        </div>

        <!-- Chiqindilar qatori (Tray / Dock - 10 ta element) -->
        <div class="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-5 relative shadow-inner">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-hand-pointer animate-bounce"></i>
                Saralanishi kerak bo'lgan chiqindilar (10 ta)
              </span>
              <span class="text-[10px] text-slate-500 hidden md:inline">
                (Sudrang yoki ustiga bosing, so'ng konteynerni tanlang)
              </span>
            </div>
            <span id="tray-remaining-count" class="text-xs font-bold text-slate-400">10 ta qoldi</span>
          </div>

          <div id="sorting-tray-items" class="flex flex-wrap gap-3 min-h-[120px] items-center justify-center p-2 rounded-xl border border-dashed border-slate-800 bg-slate-900/50">
            <!-- 10 ta chiqindi kartochkalari shu yerda joylashadi -->
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
  function renderBins() {
    const binsGrid = document.getElementById('sorting-bins-grid');
    if (!binsGrid) return;

    const categories = window.ECO_CATEGORIES || [
      { key: "plastik", name: "Plastik", color: "amber", icon: "🧴", btnClass: "border-amber-500/50 bg-amber-500/10 text-amber-300", binBg: "bg-amber-950/30 border-amber-500/40" },
      { key: "qogoz", name: "Qog'oz & Karton", color: "blue", icon: "📦", btnClass: "border-blue-500/50 bg-blue-500/10 text-blue-300", binBg: "bg-blue-950/30 border-blue-500/40" },
      { key: "shisha", name: "Shisha idish", color: "emerald", icon: "🍾", btnClass: "border-emerald-500/50 bg-emerald-500/10 text-emerald-300", binBg: "bg-emerald-950/30 border-emerald-500/40" },
      { key: "metall", name: "Metall", color: "cyan", icon: "🥫", btnClass: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300", binBg: "bg-cyan-950/30 border-cyan-500/40" },
      { key: "organik", name: "Organik", color: "yellow", icon: "🍌", btnClass: "border-yellow-700/50 bg-yellow-900/20 text-amber-200", binBg: "bg-yellow-950/30 border-yellow-700/40" },
      { key: "xavfli", name: "Xavfli chiqindi", color: "rose", icon: "🔋", btnClass: "border-rose-500/50 bg-rose-500/10 text-rose-300", binBg: "bg-rose-950/30 border-rose-500/40" },
      { key: "elektronika", name: "Elektronika (E-waste)", color: "purple", icon: "📱", btnClass: "border-purple-500/50 bg-purple-500/10 text-purple-300", binBg: "bg-purple-950/30 border-purple-500/40" },
      { key: "tekstil", name: "Tekstil / Kiyim", color: "pink", icon: "👕", btnClass: "border-pink-500/50 bg-pink-500/10 text-pink-300", binBg: "bg-pink-950/30 border-pink-500/40" },
      { key: "U", name: "U (Utilizatsiya)", color: "slate", icon: "🗑️", btnClass: "border-slate-500/60 bg-slate-800/80 text-slate-200", binBg: "bg-slate-900/80 border-slate-600/50" }
    ];

    binsGrid.innerHTML = categories.map((cat, idx) => {
      const shortcutNum = idx + 1; // 1 dan 9 gacha
      return `
        <div 
          id="sorting-bin-${cat.key}" 
          data-bin-key="${cat.key}" 
          onclick="EcoSortingEngine.handleBinClick('${cat.key}')"
          class="sorting-drop-bin ${cat.binBg} border-2 rounded-2xl p-3 sm:p-3.5 transition-all duration-200 flex flex-col justify-between min-h-[110px] sm:min-h-[125px] relative group cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
        >
          <!-- Top Bin Header -->
          <div class="flex items-center justify-between gap-1 mb-1.5">
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="text-xl sm:text-2xl shrink-0 transition-transform group-hover:scale-110">${cat.icon}</span>
              <div class="truncate">
                <span class="text-xs sm:text-sm font-black text-white block truncate">${cat.name}</span>
                <span class="text-[9px] text-slate-400 block">${cat.key === 'U' ? 'Qayta ishlanmaydi' : 'Qayta ishlanadi'}</span>
              </div>
            </div>
            <span class="w-5 h-5 rounded-md bg-slate-950/80 border border-slate-700/80 text-slate-400 text-[10px] font-black flex items-center justify-center shrink-0">
              ${shortcutNum}
            </span>
          </div>

          <!-- Bin Slot Badges (Joylashtirilgan elementlar kichik nishonlari) -->
          <div id="bin-items-slot-${cat.key}" class="flex flex-wrap gap-1 items-center min-h-[30px] p-1 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <span class="text-[10px] text-slate-500 italic px-1 bin-empty-label">Bo'sh</span>
          </div>

          <!-- Bottom Bin Count -->
          <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 mt-1 pt-1 border-t border-slate-800/60">
            <span class="bin-counter-text">0 ta chiqindi</span>
            <span class="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">Tashlash 📥</span>
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
      count: 10,
      difficulty: EcoSortingState.difficulty
    });

    // Trayni render qilish
    renderTrayItems();
    updateBinsContentUI();
    updatePlacedCountUI();

    // Taymerni boshlash (agar yoniq bo'lsa)
    const timerRow = document.getElementById('sorting-timer-row');
    if (EcoSortingState.timerEnabled) {
      if (timerRow) timerRow.classList.remove('hidden');
      startSortingGameTimer(EcoSortingState.timerTotal);
    } else {
      if (timerRow) timerRow.classList.add('hidden');
    }

    if (window.ecoAudio) window.ecoAudio.playClick();
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
        <div class="py-6 text-center animate-fade-in text-emerald-400 font-bold text-xs flex flex-col items-center gap-2 w-full">
          <i class="fa-solid fa-circle-check text-3xl animate-bounce"></i>
          <span>Barcha 10 ta chiqindi konteynerlarga joylandi!</span>
          <span class="text-slate-400 text-[11px]">Agar xohlasangiz qutilardagi elementlarni bosib qaytarib olishingiz mumkin. Tayyor bo'lsangiz <strong>"Tekshirish"</strong> tugmasini bosing!</span>
        </div>
      `;
      return;
    }

    tray.innerHTML = unplacedItems.map(item => {
      const isSelected = EcoSortingState.selectedItemId === item.id;
      const isTrap = item.isTrap;
      return `
        <div 
          id="waste-card-${item.id}"
          data-item-id="${item.id}"
          class="waste-draggable-card bg-slate-900 border ${isSelected ? 'ring-4 ring-cyan-400 border-cyan-400 scale-105' : 'border-slate-700/80 hover:border-emerald-400'} rounded-2xl p-2.5 sm:p-3 w-[140px] sm:w-[155px] flex flex-col items-center justify-between text-center transition-all duration-150 cursor-grab active:cursor-grabbing hover:shadow-xl relative group shadow-md"
          style="touch-action: none;"
          onpointerdown="EcoSortingEngine.handlePointerDown(event, ${item.id})"
          onclick="EcoSortingEngine.handleCardClick(event, ${item.id})"
        >
          <!-- Trap / Difficulty badge -->
          <div class="w-full flex items-center justify-between gap-1 mb-1">
            <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
              ${item.difficulty.toUpperCase()}
            </span>
            ${isTrap ? `
              <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">
                ⚠️ DIQQAT
              </span>
            ` : ''}
          </div>

          <!-- Image with Fallback Emoji -->
          <div class="w-16 h-16 sm:w-20 sm:h-20 my-1 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center p-1 overflow-hidden relative group-hover:scale-105 transition-transform">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              class="w-full h-full object-contain filter drop-shadow-md"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="hidden w-full h-full text-3xl sm:text-4xl items-center justify-center">
              ${item.icon}
            </div>
          </div>

          <!-- Name -->
          <span class="text-xs font-extrabold text-white line-clamp-2 leading-tight min-h-[32px] flex items-center justify-center">
            ${item.name}
          </span>

          <!-- Grab hint -->
          <div class="mt-1 text-[9px] font-bold text-slate-500 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
            <i class="fa-solid fa-arrows-up-down-left-right text-[8px]"></i>
            <span>Sudrang / Bosing</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // -----------------------------------------------------------------------
  // 8. KONTEYNERLARNING ICHIDAGI ELEMENTLARNI YANGILASH
  // -----------------------------------------------------------------------
  function updateBinsContentUI() {
    const categories = window.ECO_CATEGORIES || [];
    categories.forEach(cat => {
      const slotEl = document.getElementById(`bin-items-slot-${cat.key}`);
      const binEl = document.getElementById(`sorting-bin-${cat.key}`);
      if (!slotEl || !binEl) return;

      // Ushbu qutiga tushgan chiqindilar
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
            class="px-2 py-1 rounded-md bg-slate-900 hover:bg-rose-950/80 text-white hover:text-rose-300 border border-slate-700 hover:border-rose-500/60 text-[10px] font-bold flex items-center gap-1 transition-all group/item shadow-sm cursor-pointer"
          >
            <span>${it.icon}</span>
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
  // 9. POINTER EVENTS DRAG-AND-DROP ENGINE (Mouse, Finger Touch, Stylus)
  // -----------------------------------------------------------------------
  function handlePointerDown(e, itemId) {
    if (e.button !== 0 && e.pointerType === 'mouse') return; // Faqat chap tugma

    const card = document.getElementById(`waste-card-${itemId}`);
    if (!card) return;

    EcoSortingState.dragActive = true;
    EcoSortingState.dragItemId = itemId;
    EcoSortingState.touchStartX = e.clientX;
    EcoSortingState.touchStartY = e.clientY;

    // Pointer capture
    try {
      card.setPointerCapture(e.pointerId);
    } catch (err) {}

    // Ghost/Clone sudrash elementini yaratish
    const rect = card.getBoundingClientRect();
    const ghost = card.cloneNode(true);
    ghost.id = 'waste-drag-ghost';
    ghost.style.position = 'fixed';
    ghost.style.left = `${rect.left}px`;
    ghost.style.top = `${rect.top}px`;
    ghost.style.width = `${rect.width}px`;
    ghost.style.height = `${rect.height}px`;
    ghost.style.zIndex = '9999';
    ghost.style.pointerEvents = 'none';
    ghost.style.transform = 'scale(1.08) rotate(3deg)';
    ghost.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.7)';
    ghost.style.opacity = '0.95';
    ghost.style.transition = 'transform 0.08s ease';
    document.body.appendChild(ghost);
    EcoSortingState.dragGhostEl = ghost;

    card.style.opacity = '0.35';

    // Global harakat va qo'yib yuborish tinglovchilari
    const onMove = (moveEvt) => handlePointerMove(moveEvt);
    const onUp = (upEvt) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      handlePointerUp(upEvt, itemId, card);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  }

  function handlePointerMove(e) {
    if (!EcoSortingState.dragActive || !EcoSortingState.dragGhostEl) return;

    const ghost = EcoSortingState.dragGhostEl;
    const ghostWidth = ghost.offsetWidth || 140;
    const ghostHeight = ghost.offsetHeight || 120;

    ghost.style.left = `${e.clientX - ghostWidth / 2}px`;
    ghost.style.top = `${e.clientY - ghostHeight / 2}px`;

    // Sichqoncha/barmoq ostidagi konteynerni magnit effekti bilan aniqlash
    const elementsUnder = document.elementsFromPoint(e.clientX, e.clientY) || [];
    let foundBinKey = null;

    for (const el of elementsUnder) {
      const binEl = el.closest ? el.closest('.sorting-drop-bin') : null;
      if (binEl && binEl.dataset.binKey) {
        foundBinKey = binEl.dataset.binKey;
        break;
      }
    }

    // Barcha binlarning nurini yangilash
    document.querySelectorAll('.sorting-drop-bin').forEach(bin => {
      const key = bin.dataset.binKey;
      if (key === foundBinKey) {
        bin.classList.add('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'shadow-emerald-500/30', 'bg-emerald-950/40');
      } else {
        bin.classList.remove('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'shadow-emerald-500/30', 'bg-emerald-950/40');
      }
    });

    EcoSortingState.dragCandidateBinKey = foundBinKey;
  }

  function handlePointerUp(e, itemId, originalCard) {
    if (!EcoSortingState.dragActive) return;
    EcoSortingState.dragActive = false;

    // Nur va vizual belgilarni tozalash
    document.querySelectorAll('.sorting-drop-bin').forEach(bin => {
      bin.classList.remove('ring-4', 'ring-emerald-400', 'scale-[1.03]', 'shadow-emerald-500/30', 'bg-emerald-950/40');
    });

    if (EcoSortingState.dragGhostEl) {
      EcoSortingState.dragGhostEl.remove();
      EcoSortingState.dragGhostEl = null;
    }

    if (originalCard) {
      originalCard.style.opacity = '1';
    }

    const candidateBin = EcoSortingState.dragCandidateBinKey;
    EcoSortingState.dragCandidateBinKey = null;

    if (candidateBin) {
      // Konteyner ustiga tushdi!
      placeItemInBin(itemId, candidateBin);
    } else {
      // Konteynerdan tashqariga tushdi — kartochka o'z joyiga silliq qaytadi
      if (originalCard) {
        originalCard.classList.add('animate-shake');
        setTimeout(() => originalCard.classList.remove('animate-shake'), 400);
      }
    }
  }

  // -----------------------------------------------------------------------
  // 10. CLICK-TO-PLACE & KLAVIATURA BOSHQARUVI (Accessibility)
  // -----------------------------------------------------------------------
  function handleCardClick(e, itemId) {
    if (EcoSortingState.dragActive) return;

    if (EcoSortingState.selectedItemId === itemId) {
      EcoSortingState.selectedItemId = null;
    } else {
      EcoSortingState.selectedItemId = itemId;
      if (window.ecoAudio) window.ecoAudio.playClick();
    }
    renderTrayItems();
  }

  function handleBinClick(binKey) {
    if (!EcoSortingState.selectedItemId) return;
    placeItemInBin(EcoSortingState.selectedItemId, binKey);
  }

  function placeItemInBin(itemId, binKey) {
    const item = EcoSortingState.activeItems.find(i => i.id === itemId);
    if (!item) return;

    EcoSortingState.placements[itemId] = binKey;
    EcoSortingState.selectedItemId = null;

    if (window.ecoAudio) window.ecoAudio.playClick();

    // Mashq rejimida bo'lsa darhol to'g'ri/xato ekanligini aytib turish
    if (EcoSortingState.mode === 'practice') {
      const isCorrect = item.cat === binKey;
      if (isCorrect) {
        if (window.ecoAudio) window.ecoAudio.playSuccess();
        if (window.showToast) window.showToast(`✅ To'g'ri! ${item.name} «${binKey.toUpperCase()}» toifasiga kiradi.`);
      } else {
        if (window.ecoAudio) window.ecoAudio.playError();
        if (window.showToast) window.showToast(`❌ Xato! ${item.hint || item.explanation}`);
      }
    }

    renderTrayItems();
    updateBinsContentUI();
    updatePlacedCountUI();
  }

  function removeFromBin(itemId) {
    delete EcoSortingState.placements[itemId];
    EcoSortingState.selectedItemId = null;
    if (window.ecoAudio) window.ecoAudio.playClick();

    renderTrayItems();
    updateBinsContentUI();
    updatePlacedCountUI();
  }

  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // 1 dan 9 gacha raqamlar
      if (e.key >= '1' && e.key <= '9') {
        const categories = window.ECO_CATEGORIES || [];
        const idx = parseInt(e.key, 10) - 1;
        const targetCat = categories[idx];

        if (targetCat && EcoSortingState.selectedItemId) {
          e.preventDefault();
          placeItemInBin(EcoSortingState.selectedItemId, targetCat.key);
        }
      }
      // Escape bosilsa tanlangan kartochkani bekor qilish
      if (e.key === 'Escape') {
        EcoSortingState.selectedItemId = null;
        renderTrayItems();
      }
    });
  }

  // -----------------------------------------------------------------------
  // 11. YAKUNIY NATIJANI TEKSHIRISH VA CHUQUR TAHLIL (Exam Result Screen)
  // -----------------------------------------------------------------------
  function verifyRound() {
    submitExamResults(false);
  }

  function submitExamResults(isTimeout = false) {
    stopSortingGameTimer();
    EcoSortingState.isFinished = true;
    EcoSortingState.endTime = Date.now();

    const elapsedSeconds = Math.max(1, Math.round((EcoSortingState.endTime - EcoSortingState.startTime) / 1000));
    const items = EcoSortingState.activeItems;
    const categories = window.ECO_CATEGORIES || [];

    let correctCount = 0;
    const categoryStats = {};
    const detailedList = [];

    // Zaif toifalarni saqlab borish uchun obyekt
    let storedWeakCats = {};
    try {
      storedWeakCats = JSON.parse(localStorage.getItem('ECO_WEAK_CATEGORIES') || '{}');
    } catch (e) {}

    items.forEach(item => {
      const chosenCatKey = EcoSortingState.placements[item.id] || 'unplaced';
      const isCorrect = chosenCatKey === item.cat;

      if (!categoryStats[item.cat]) {
        categoryStats[item.cat] = { total: 0, correct: 0, catName: item.cat };
        const foundCat = categories.find(c => c.key === item.cat);
        if (foundCat) categoryStats[item.cat].catName = foundCat.name;
      }
      categoryStats[item.cat].total++;

      if (isCorrect) {
        correctCount++;
        categoryStats[item.cat].correct++;
      } else {
        // Xato qilgan toifani saqlash (Adaptive Selection uchun!)
        storedWeakCats[item.cat] = (storedWeakCats[item.cat] || 0) + 1;
      }

      const correctCatObj = categories.find(c => c.key === item.cat);
      const chosenCatObj = categories.find(c => c.key === chosenCatKey);

      detailedList.push({
        item: item,
        chosenKey: chosenCatKey,
        chosenName: chosenCatObj ? chosenCatObj.name : 'Joylashtirilmadi',
        correctKey: item.cat,
        correctName: correctCatObj ? correctCatObj.name : item.cat,
        isCorrect: isCorrect
      });
    });

    try {
      localStorage.setItem('ECO_WEAK_CATEGORIES', JSON.stringify(storedWeakCats));
    } catch (e) {}

    const totalCount = items.length || 10;
    const accuracy = Math.round((correctCount / totalCount) * 100);

    // Ball va XP hisoblash (Anti-spam / Diminishing Returns hisobi bilan)
    let baseXP = correctCount * 10;
    let perfectionBonus = (correctCount === totalCount) ? 50 : 0;
    let earnedXP = baseXP + perfectionBonus;
    let earnedCoins = Math.floor(earnedXP / 2);

    // Kunlik o'yinlar sonini hisoblash
    let dailyPlayCount = 1;
    try {
      const today = new Date().toISOString().slice(0, 10);
      const lastDate = localStorage.getItem('ECO_SORT_LAST_DATE');
      if (lastDate === today) {
        dailyPlayCount = parseInt(localStorage.getItem('ECO_SORT_DAILY_COUNT') || '1', 10) + 1;
      } else {
        localStorage.setItem('ECO_SORT_LAST_DATE', today);
        dailyPlayCount = 1;
      }
      localStorage.setItem('ECO_SORT_DAILY_COUNT', dailyPlayCount.toString());
    } catch (e) {}

    // Agar kuniga 5 tadan ko'p o'ynasa kamayib boruvchi XP
    if (dailyPlayCount > 5) {
      earnedXP = Math.max(5, Math.floor(earnedXP * 0.7));
      earnedCoins = Math.floor(earnedXP / 2);
    }

    // Profilga ball qo'shish
    if (window.addPlayerXP) {
      window.addPlayerXP(earnedXP);
    }

    // Unvonni aniqlash
    let titleBadge = "🌱 Yangi boshlovchi";
    let titleColor = "text-slate-300";
    if (correctCount === 10) {
      titleBadge = "👑 Eko-ustoz";
      titleColor = "text-amber-400";
    } else if (correctCount >= 7) {
      titleBadge = "🥈 Saralash ustasi";
      titleColor = "text-emerald-400";
    } else if (correctCount >= 4) {
      titleBadge = "🥉 O'rganuvchi";
      titleColor = "text-cyan-400";
    }

    // Audio va Paqldoq
    if (correctCount >= 7) {
      if (window.ecoAudio) window.ecoAudio.playLevelUp();
      if (window.EcoFxEngine) {
        window.EcoFxEngine.triggerPaqldoq(window.innerWidth / 2, window.innerHeight / 3, earnedXP);
      }
    } else {
      if (window.ecoAudio) window.ecoAudio.playError();
    }

    // Natija oynasini render qilish
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

    // Zaif toifalarni topish (xatosi bo'lganlar)
    const weakList = Object.entries(stats.categoryStats).filter(([k, v]) => v.correct < v.total);

    content.innerHTML = `
      <!-- Top Title & Badge -->
      <div class="text-center pb-4 mb-4 border-b border-slate-800">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-3 text-xs font-black ${stats.titleColor}">
          <span>${stats.titleBadge}</span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-black text-white">
          ${stats.isTimeout ? '⏱️ Vaqt Tugadi! Yakuniy Natija' : '🎉 Saralash Yakunlandi!'}
        </h3>
        <p class="text-xs text-slate-400 mt-1">10 ta chiqindini tafakkur qilib saralash bo'yicha hisobot:</p>
      </div>

      <!-- Katta Ball va Ko'rsatkichlar Grid -->
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
          <span class="text-[10px] text-slate-500 uppercase font-black block">Mukofot XP</span>
          <span class="text-2xl font-black text-amber-400">+${stats.earnedXP} XP</span>
        </div>
      </div>

      <!-- Toifalar bo'yicha statistika (Zaif toifalarni ajratib ko'rsatish) -->
      <div class="bg-slate-950/80 border border-slate-800 rounded-2xl p-3.5 mb-5">
        <h5 class="text-xs font-black uppercase tracking-wider text-slate-300 mb-2 flex items-center justify-between">
          <span>Toifalar bo'yicha tahlil:</span>
          ${weakList.length > 0 ? `<span class="text-[10px] text-rose-400 font-bold">⚠️ ${weakList.length} ta toifada xato bor</span>` : `<span class="text-[10px] text-emerald-400 font-bold">✅ Barcha toifalar 100% to'g'ri!</span>`}
        </h5>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          ${Object.entries(stats.categoryStats).map(([k, st]) => {
            const isPerfect = st.correct === st.total;
            return `
              <div class="p-2 rounded-xl bg-slate-900 border ${isPerfect ? 'border-emerald-500/30' : 'border-rose-500/40'} flex items-center justify-between">
                <span class="font-bold text-slate-300 truncate">${st.catName}:</span>
                <span class="font-black ${isPerfect ? 'text-emerald-400' : 'text-rose-400'}">${st.correct} / ${st.total}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Har bir rasm uchun qator (Rasm, Siz tanlagan, To'g'ri, ✅/❌, Chuqur Izoh) -->
      <div class="mb-5">
        <h5 class="text-xs font-black uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-cyan-400"></i>
          10 ta Chiqindining Batafsil Tahlili va Qoidalari:
        </h5>

        <div class="space-y-2.5 max-h-64 overflow-y-auto custom-scrollbar pr-1.5">
          ${stats.detailedList.map((row, idx) => `
            <div class="p-3 rounded-xl bg-slate-950 border ${row.isCorrect ? 'border-emerald-500/30' : 'border-rose-500/40'} flex flex-col gap-1.5 text-xs">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2 font-bold text-white">
                  <span class="text-lg">${row.item.icon}</span>
                  <span>${idx + 1}. ${row.item.name}</span>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-black ${row.isCorrect ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}">
                  ${row.isCorrect ? '✅ TO\'G\'RI' : '❌ XATO'}
                </span>
              </div>

              <div class="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                <span>Sizning tanlovingiz: <strong class="${row.isCorrect ? 'text-emerald-400' : 'text-rose-400'}">${row.chosenName}</strong></span>
                ${!row.isCorrect ? `<span>To'g'ri konteyner: <strong class="text-emerald-400">${row.correctName}</strong></span>` : ''}
              </div>

              <!-- Chuqur ilmiy izoh -->
              <p class="text-[11px] text-slate-300 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                💡 <strong>Qoida:</strong> ${row.item.explanation}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action Buttons -->
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

  // Faqat xato qilingan elementlarni qayta mashq qilish rejimi
  function retryOnlyMistakes() {
    closeResultModal();
    const mistakes = EcoSortingState.activeItems.filter(
      item => EcoSortingState.placements[item.id] !== item.cat
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

  // -----------------------------------------------------------------------
  // 12. SOZLAMALAR VA MODAL BOSHQARUVI
  // -----------------------------------------------------------------------
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

  // Public API
  window.EcoSortingEngine = {
    init: initSortingGame,
    startNewRound: startNewSortingRound,
    restartRound: startNewSortingRound,
    handlePointerDown,
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
    retryOnlyMistakes
  };

  // Eski API nomlarini saqlab qolish (moslik uchun)
  window.startNew25Session = startNewSortingRound;

})();
