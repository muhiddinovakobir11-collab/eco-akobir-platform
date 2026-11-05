// =======================================================================
// Akosh Eco / EcoAkobir — Chiqindilarni Tafakkur Qilib Saralash O'yini
// Asoschi: Akobir | 200 ta Chiqindi Bazasi, 4 talik Javob Variantlari,
// 2D Konveyer Animatsiyasi, 10s Taymer, Ovoz Effektlari, Paqldoq & Avto-Pauza
// =======================================================================

(function () {
  'use strict';

  // 9 Asosiy Saralash Toifalari
  const CATEGORIES_MAP = [
    { key: "plastik", name: "Plastik", color: "amber", icon: "🧴", btnClass: "border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/25 text-amber-300", tag: "Qayta ishlanadi" },
    { key: "qogoz", name: "Qog'oz & Karton", color: "blue", icon: "📦", btnClass: "border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/25 text-blue-300", tag: "Qayta ishlanadi" },
    { key: "shisha", name: "Shisha idish", color: "emerald", icon: "🍾", btnClass: "border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/25 text-emerald-300", tag: "Qayta ishlanadi" },
    { key: "metall", name: "Metall", color: "cyan", icon: "🥫", btnClass: "border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300", tag: "Qayta ishlanadi" },
    { key: "organik", name: "Organik", color: "yellow", icon: "🍌", btnClass: "border-yellow-700/50 bg-yellow-900/20 hover:bg-yellow-900/35 text-amber-200", tag: "Kompost / Biogaz" },
    { key: "xavfli", name: "Xavfli chiqindi", color: "rose", icon: "🔋", btnClass: "border-rose-500/50 bg-rose-500/10 hover:bg-rose-500/25 text-rose-300", tag: "Maxsus xavfli quti" },
    { key: "elektronika", name: "Elektronika (E-waste)", color: "purple", icon: "📱", btnClass: "border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/25 text-purple-300", tag: "E-waste qayta ishlash" },
    { key: "tekstil", name: "Tekstil / Kiyim", color: "pink", icon: "👕", btnClass: "border-pink-500/50 bg-pink-500/10 hover:bg-pink-500/25 text-pink-300", tag: "Ikkilamchi tola" },
    { key: "U", name: "U (Utilizatsiya / Chiqit)", color: "slate", icon: "🗑️", btnClass: "border-slate-500/60 bg-slate-800/80 hover:bg-slate-700 text-slate-200", tag: "Qayta ishlanmaydi" }
  ];

  window.CATEGORIES_MAP = CATEGORIES_MAP;

  // Sessiya holati
  let gameSession = {
    activeBatch: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    results: [],
    isFinished: false,
    questionTimer: 10,
    remainingSeconds: 10,
    timerInterval: null,
    isAnsweringLocked: false,
    currentChoices: [] // 4 ta variant ro'yxati
  };
  window.gameSession = gameSession;

  let currentSortingContainer = null;

  // -----------------------------------------------------------------------
  // 1. FISHER-YATES SHUFFLE
  // -----------------------------------------------------------------------
  function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  // -----------------------------------------------------------------------
  // 2. 4 TALIK VARIANTLARNI INTELLEKTUAL SHAKLLANTIRISH
  // -----------------------------------------------------------------------
  function generate4Choices(wasteItem) {
    const correctCat = CATEGORIES_MAP.find(c => c.key === wasteItem.cat) || CATEGORIES_MAP[0];
    let candidateDistractors = CATEGORIES_MAP.filter(c => c.key !== wasteItem.cat);

    // Qopqonlar uchun maxsus mantiqiy chalg'ituvchilar
    let priorityKeys = [];
    if (wasteItem.slug === 'tetra-pak') priorityKeys = ['qogoz', 'plastik'];
    else if (wasteItem.slug === 'thermal-receipt') priorityKeys = ['qogoz', 'U'];
    else if (wasteItem.slug === 'greasy-pizza-box') priorityKeys = ['qogoz', 'organik'];
    else if (wasteItem.slug === 'synthetic-teabag') priorityKeys = ['organik', 'qogoz'];
    else if (wasteItem.slug === 'pyrex-glass') priorityKeys = ['shisha', 'U'];
    else if (wasteItem.slug === 'window-glass') priorityKeys = ['shisha', 'U'];
    else if (wasteItem.slug === 'disposable-coffee-cup') priorityKeys = ['qogoz', 'plastik'];
    else if (wasteItem.slug === 'powerbank') priorityKeys = ['xavfli', 'elektronika'];
    else if (wasteItem.slug === 'incandescent-bulb') priorityKeys = ['shisha', 'xavfli'];

    let chosenDistractors = [];
    if (priorityKeys.length > 0) {
      priorityKeys.forEach(k => {
        const match = candidateDistractors.find(c => c.key === k);
        if (match && !chosenDistractors.some(d => d.key === match.key)) {
          chosenDistractors.push(match);
        }
      });
    }

    const remaining = candidateDistractors.filter(c => !chosenDistractors.some(d => d.key === c.key));
    const shuffledRemaining = fisherYatesShuffle(remaining);
    for (const c of shuffledRemaining) {
      if (chosenDistractors.length >= 3) break;
      chosenDistractors.push(c);
    }

    // 1 ta to'g'ri toifa + 3 ta chalg'ituvchi toifa = 4 ta variant!
    const final4 = fisherYatesShuffle([correctCat, ...chosenDistractors]);
    return final4;
  }

  // -----------------------------------------------------------------------
  // 3. TAYMER VA AUDIO TEZLASHISH BOSHQARUVI
  // -----------------------------------------------------------------------
  function stopSortingGameTimer() {
    if (gameSession.timerInterval) {
      clearInterval(gameSession.timerInterval);
      gameSession.timerInterval = null;
    }
    if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
      window.ecoAudio.stopCountdownSound();
    }
  }
  window.stopSortingGameTimer = stopSortingGameTimer;

  function startQuestionTimer(customRemaining) {
    stopSortingGameTimer();
    const totalSeconds = (window.ECO_CONFIG && window.ECO_CONFIG.sortingTimer) ? window.ECO_CONFIG.sortingTimer : 10;
    const initialRemaining = (typeof customRemaining === 'number' && customRemaining > 0) ? customRemaining : totalSeconds;
    gameSession.remainingSeconds = initialRemaining;
    const startTime = Date.now();

    updateTimerUI(Math.ceil(initialRemaining), (initialRemaining / totalSeconds) * 100);

    // EcoPauseEngine bilan integratsiya
    if (window.EcoPauseEngine) {
      window.EcoPauseEngine.registerGame({
        type: 'sorting-quiz',
        pause: () => { stopSortingGameTimer(); },
        resume: () => { startQuestionTimer(gameSession.remainingSeconds); },
        restart: () => { startNew25Session(); },
        getCurrentStats: () => ({
          counter: `Chiqindi ${gameSession.currentIndex + 1} / ${(gameSession.activeBatch ? gameSession.activeBatch.length : 25)}`,
          score: `${gameSession.score} XP`
        })
      });
    }

    gameSession.timerInterval = setInterval(() => {
      if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;

      const elapsed = (Date.now() - startTime) / 1000;
      const remainingTime = Math.max(0, initialRemaining - elapsed);
      gameSession.remainingSeconds = remainingTime;
      const remainingDisplay = Math.ceil(remainingTime);
      const percent = Math.max(0, (remainingTime / totalSeconds) * 100);

      updateTimerUI(remainingDisplay, percent);

      // Vaqt kamaygan sari audio tezlashishi
      if (window.ecoAudio && typeof window.ecoAudio.updateCountdownSound === 'function') {
        window.ecoAudio.updateCountdownSound(remainingTime, totalSeconds);
      }

      if (remainingTime <= 0) {
        stopSortingGameTimer();
        handleQuestionTimeout();
      }
    }, 80);
  }

  function updateTimerUI(seconds, percent) {
    document.querySelectorAll('#card-timer-seconds').forEach(el => el.textContent = seconds);
    document.querySelectorAll('#card-timer-bar').forEach(bar => {
      bar.style.width = `${percent}%`;
      if (seconds <= 3) {
        bar.className = "h-full bg-rose-500 rounded-full transition-all duration-100 ease-linear animate-pulse";
      } else if (seconds <= 6) {
        bar.className = "h-full bg-amber-500 rounded-full transition-all duration-100 ease-linear";
      } else {
        bar.className = "h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-100 ease-linear";
      }
    });
    document.querySelectorAll('#card-timer-badge').forEach(badge => {
      if (seconds <= 3) {
        badge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-400 border border-rose-500/50 animate-pulse";
      } else if (seconds <= 6) {
        badge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/50";
      } else {
        badge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
      }
    });
  }

  // -----------------------------------------------------------------------
  // 4. ASOSIY INTERFEYSNI RENDER QILISH
  // -----------------------------------------------------------------------
  function initSortingGame() {
    const container = document.getElementById('sorting-game-container');
    if (!container) return;
    currentSortingContainer = container;
    renderSortingGameUI(container);
  }
  window.initSortingGame = initSortingGame;

  function renderSortingGameUI(container) {
    if (container) currentSortingContainer = container;
    const target = currentSortingContainer || document.getElementById('sorting-game-container') || document.getElementById('game-dynamic-content');
    if (!target) return;

    target.innerHTML = `
      <div class="bg-slate-900 border border-emerald-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl relative select-none">
        
        <!-- Top Session Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/40 shadow-lg shadow-emerald-500/10 shrink-0">
              ♻️
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-xl font-black text-white">Chiqindilarni Tafakkur Qilib Saralash</h3>
                <span class="text-[10px] uppercase font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                  200 TA CHIQINDI BAZASI
                </span>
                <span class="text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded-full">
                  4 Talik Variantlar
                </span>
              </div>
              <p class="text-xs text-slate-400 mt-0.5">Har bir savol uchun <strong>10 soniya vaqt</strong> beriladi! 4 ta toifadan to'g'risini tanlang.</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center min-w-[80px]">
              <span class="text-[9px] text-slate-500 uppercase font-black block">Jarayon</span>
              <span id="session-progress" class="text-base sm:text-lg font-black text-emerald-400">0 / 25</span>
            </div>
            <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center min-w-[90px]">
              <span class="text-[9px] text-slate-500 uppercase font-black block">To'plangan Ball</span>
              <span id="session-score" class="text-base sm:text-lg font-black text-amber-400">0 XP</span>
            </div>
          </div>
        </div>

        <!-- Main Playfield -->
        <div id="session-playfield">
          <!-- Start screen -->
          <div id="session-start-screen" class="text-center py-10 max-w-lg mx-auto">
            <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/10 animate-bounce">
              ♻️
            </div>
            <h4 class="text-2xl font-black text-white mb-2">200 Ta Chiqindi Tafakkur Raundi</h4>
            <p class="text-xs text-slate-300 leading-relaxed mb-6">
              200 xil real hayotiy va qopqon chiqindilar ichidan <strong>25 tasi tasodifiy</strong> shaklda tushadi.<br/>
              Har bir savolda qulaylik uchun <strong>faqat 4 ta variant (A, B, C, D)</strong> taqdim etiladi.<br/>
              10 soniyalik taymer, rang-barang 2D konveyer animatsiyasi va tezkor natijalar!
            </p>

            <button onclick="startNew25Session()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black rounded-2xl shadow-xl shadow-emerald-500/20 text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5 mx-auto cursor-pointer">
              <i class="fa-solid fa-play"></i>
              <span>Raundni Boshlash (10s Taymer bilan)</span>
            </button>
          </div>

          <!-- Question Card (Hidden initially) -->
          <div id="session-question-card" class="hidden">
            
            <!-- Question Timer & Counter Header -->
            <div class="max-w-2xl mx-auto mb-3">
              <div class="flex items-center justify-between mb-2 px-1">
                <span id="card-item-counter" class="text-xs uppercase font-black text-emerald-400 tracking-wider">
                  Chiqindi 1 / 25
                </span>
                <div class="flex items-center gap-2">
                  <button onclick="EcoPauseEngine.togglePause()" type="button" class="eco-pause-btn flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-500/40 transition-all active:scale-95 cursor-pointer shadow-sm">
                    <i class="fa-solid fa-pause text-[10px]"></i>
                    <span>Pauza</span>
                  </button>
                  <div id="card-timer-badge" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <i class="fa-solid fa-stopwatch"></i>
                    <span>Vaqt: <strong id="card-timer-seconds">10</strong>s</span>
                  </div>
                </div>
              </div>

              <!-- 10s progress bar -->
              <div class="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800 p-0.5 shadow-inner">
                <div id="card-timer-bar" class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-100 ease-linear" style="width: 100%;"></div>
              </div>
            </div>

            <!-- 2D Konveyer Animatsiyasi Maydoni -->
            <div id="sorting-card-anim" class="max-w-2xl mx-auto mb-3"></div>

            <!-- Markaziy Chiqindi Kartochkasi -->
            <div class="bg-slate-950/85 border border-slate-800 rounded-2xl p-5 sm:p-6 text-center max-w-2xl mx-auto mb-4 shadow-inner relative">
              
              <!-- Qopqon nishoni (Trap badge) -->
              <div id="card-trap-badge" class="hidden absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/50 animate-pulse">
                ⚠️ QOPQON CHIQINDI!
              </div>

              <!-- SVG Rasm yoki Katta Emoji -->
              <div class="w-24 h-24 sm:w-28 sm:h-28 mx-auto my-1 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center p-2 shadow-lg relative group">
                <img 
                  id="card-item-img" 
                  src="" 
                  alt="Chiqindi rasmi" 
                  class="w-full h-full object-contain filter drop-shadow-md"
                  onerror="this.style.display='none'; document.getElementById('card-item-icon').style.display='block';"
                />
                <div id="card-item-icon" class="text-6xl filter drop-shadow-md hidden">📦</div>
              </div>

              <h4 id="card-item-name" class="text-2xl sm:text-3xl font-black text-white mt-2 mb-1 tracking-wide">Chiqindi nomi</h4>
              <div id="card-feedback" class="text-xs text-slate-400 italic min-h-[26px] flex items-center justify-center">
                Ushbu chiqindi qaysi toifaga kiradi? To'g'ri variantni tanlang:
              </div>
            </div>

            <!-- 4 TALIK JAVOB VARIANTLARI (A, B, C, D) -->
            <div id="categories-4-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <!-- Dinamik ravishda 4 ta variant render qilinadi -->
            </div>

            <!-- Klaviatura eslatmasi -->
            <div class="text-center mt-3 text-[11px] text-slate-500">
              💡 Klaviatura orqali tezkor tanlash: <strong>1, 2, 3, 4</strong> yoki <strong>A, B, C, D</strong> tugmalarini bosing
            </div>

          </div>

          <!-- Final Summary Screen (Hidden initially) -->
          <div id="session-summary-screen" class="hidden"></div>
        </div>

      </div>
    `;

    setupQuizKeyboardShortcuts();
  }
  window.renderSortingGameUI = renderSortingGameUI;

  // -----------------------------------------------------------------------
  // 5. YANGI 25 TALIK RAUNDNI BOSHLASH (200 ta Baza ichidan)
  // -----------------------------------------------------------------------
  function startNew25Session() {
    stopSortingGameTimer();
    if (window.EcoPauseEngine) window.EcoPauseEngine.resetTimeouts();

    const db = window.ECO_WASTE_DATABASE || [];
    const sourcePool = db.length > 0 ? db : (window.ALL_200_WASTES || []);

    // Fisher-Yates bilan 200 tadan 25 tasini aralashtirib olish
    const shuffled = fisherYatesShuffle(sourcePool);
    const batchSize = (window.ECO_CONFIG && window.ECO_CONFIG.sortingBatchSize) ? window.ECO_CONFIG.sortingBatchSize : 25;
    gameSession.activeBatch = shuffled.slice(0, batchSize);
    gameSession.currentIndex = 0;
    gameSession.score = 0;
    gameSession.correctCount = 0;
    gameSession.wrongCount = 0;
    gameSession.results = [];
    gameSession.isFinished = false;
    gameSession.isAnsweringLocked = false;

    document.querySelectorAll('#session-start-screen').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('#session-summary-screen').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('#session-question-card').forEach(el => el.classList.remove('hidden'));

    updateSessionProgressUI();
    displayCurrentItem();

    if (window.ecoAudio) window.ecoAudio.playClick();
  }
  window.startNew25Session = startNew25Session;

  // -----------------------------------------------------------------------
  // 6. JORIY CHIQINDINI VA 4 TALIK VARIANTLARNI CHIQARISH
  // -----------------------------------------------------------------------
  function displayCurrentItem() {
    const item = gameSession.activeBatch[gameSession.currentIndex];
    if (!item) return;

    gameSession.isAnsweringLocked = false;

    const total = gameSession.activeBatch.length || 25;
    const counterText = `Chiqindi ${gameSession.currentIndex + 1} / ${total}`;

    // Nom va rasm
    document.querySelectorAll('#card-item-name').forEach(el => el.textContent = item.name);
    document.querySelectorAll('#card-item-counter').forEach(el => el.textContent = counterText);

    // Trap nishoni
    document.querySelectorAll('#card-trap-badge').forEach(el => {
      if (item.isTrap) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });

    // Rasm va emoji fallback
    document.querySelectorAll('#card-item-img').forEach(img => {
      img.style.display = 'block';
      img.src = item.image || `images/waste/${item.slug}.svg`;
    });
    document.querySelectorAll('#card-item-icon').forEach(icon => {
      icon.style.display = 'none';
      icon.textContent = item.icon || '📦';
    });

    document.querySelectorAll('#card-feedback').forEach(el => {
      el.className = "text-xs text-slate-400 italic min-h-[26px] flex items-center justify-center";
      el.textContent = "Ushbu chiqindi qaysi toifaga kiradi? To'g'ri variantni tanlang:";
    });

    // 2D Konveyer animatsiyasi
    const animContainers = document.querySelectorAll('#sorting-card-anim');
    if (animContainers.length && window.Eco2DAnimator && typeof window.Eco2DAnimator.getSortingConveyorHtml === 'function') {
      const animHtml = window.Eco2DAnimator.getSortingConveyorHtml(item);
      animContainers.forEach(el => el.innerHTML = animHtml);
    }

    // 4 ta variantni shakllantirish va render qilish!
    const choices = generate4Choices(item);
    gameSession.currentChoices = choices;
    render4ChoicesUI(choices);

    // 10 soniyalik taymerni yoqish
    startQuestionTimer();
  }

  // -----------------------------------------------------------------------
  // 7. 4 TA VARIANTNI (A, B, C, D) EKRANDA KATTA CHIQARISH
  // -----------------------------------------------------------------------
  function render4ChoicesUI(choices) {
    const container = document.getElementById('categories-4-grid');
    if (!container) return;

    const letters = ['A', 'B', 'C', 'D'];

    container.innerHTML = choices.map((cat, idx) => {
      const letter = letters[idx];
      const shortcutNum = idx + 1;

      return `
        <button 
          type="button"
          onclick="submitChoiceAnswer('${cat.key}', this)"
          data-cat-key="${cat.key}"
          data-choice-letter="${letter}"
          class="quiz-choice-btn p-4 sm:p-4.5 rounded-2xl border ${cat.btnClass} transition-all duration-200 flex items-center justify-between group cursor-pointer active:scale-95 shadow-lg hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
        >
          <div class="flex items-center gap-3 min-w-0">
            <!-- Harf nishoni (A, B, C, D) -->
            <span class="w-8 h-8 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white font-black text-xs flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
              ${letter}
            </span>
            <span class="text-2xl shrink-0 group-hover:scale-125 transition-transform duration-200">${cat.icon}</span>
            <div class="text-left truncate">
              <div class="font-extrabold text-sm sm:text-base text-white group-hover:underline truncate">${cat.name}</div>
              <span class="text-[10px] opacity-75 block">${cat.tag || (cat.key === 'U' ? 'Qayta ishlanmaydi' : 'Qayta ishlanadi')}</span>
            </div>
          </div>

          <span class="text-[10px] text-slate-500 font-mono hidden sm:inline">[${shortcutNum}]</span>
        </button>
      `;
    }).join('');
  }

  // -----------------------------------------------------------------------
  // 8. FOYDALANUVCHI VARIANTNI TANLAGANDA (To'g'ri / Xato, Paqldoq, Seysmik)
  // -----------------------------------------------------------------------
  function submitChoiceAnswer(selectedCategory, clickedBtnElement) {
    if (gameSession.isAnsweringLocked || gameSession.isFinished) return;
    if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;
    if (window.EcoPauseEngine) window.EcoPauseEngine.recordUserAnswer();
    gameSession.isAnsweringLocked = true;

    stopSortingGameTimer();

    const currentItem = gameSession.activeBatch[gameSession.currentIndex];
    if (!currentItem) return;

    const isCorrect = selectedCategory === currentItem.cat;
    const correctCatObj = CATEGORIES_MAP.find(c => c.key === currentItem.cat);
    const correctName = correctCatObj ? correctCatObj.name : currentItem.cat;

    // Tugmalarni belgilash
    const allChoiceBtns = document.querySelectorAll('.quiz-choice-btn');
    let clickedBtn = clickedBtnElement;
    let correctBtn = null;

    allChoiceBtns.forEach(btn => {
      btn.disabled = true;
      const key = btn.getAttribute('data-cat-key');
      if (key === currentItem.cat) {
        correctBtn = btn;
        btn.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/40', 'scale-[1.02]');
      } else if (key === selectedCategory) {
        btn.classList.add('ring-4', 'ring-rose-500', 'bg-rose-600/40');
      } else {
        btn.classList.add('opacity-30');
      }
    });

    if (isCorrect) {
      gameSession.correctCount++;
      const itemXP = 10;
      gameSession.score += itemXP;

      if (window.ecoAudio) window.ecoAudio.playSuccess();
      if (window.addPlayerXP) window.addPlayerXP(itemXP);

      // PAQLDOQ (FIREWORKS & CONFETTI) PORTLASHI
      if (window.EcoFxEngine) {
        const rect = clickedBtn ? clickedBtn.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
        window.EcoFxEngine.triggerPaqldoq(rect.left + rect.width / 2, rect.top + rect.height / 2, itemXP);
      }

      document.querySelectorAll('#card-feedback').forEach(feedbackEl => {
        feedbackEl.className = "text-xs text-emerald-400 font-bold min-h-[26px] flex items-center justify-center animate-bounce";
        feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5 text-sm"></i> To'g'ri! ${currentItem.hint || currentItem.explanation} (+${itemXP} XP)`;
      });

      gameSession.results.push({
        item: currentItem,
        userChoice: selectedCategory,
        isCorrect: true
      });
    } else {
      gameSession.wrongCount++;
      if (window.ecoAudio) window.ecoAudio.playError();

      // SEYSMIK SILKINISH VA QIZIL VINETKA
      if (window.EcoFxEngine) {
        window.EcoFxEngine.triggerWrongFeedback(clickedBtn, correctBtn, document.getElementById('session-playfield'));
      }

      document.querySelectorAll('#card-feedback').forEach(feedbackEl => {
        feedbackEl.className = "text-xs text-rose-400 font-bold min-h-[26px] flex items-center justify-center";
        feedbackEl.innerHTML = `<i class="fa-solid fa-circle-xmark mr-1.5 text-sm"></i> Noto'g'ri! To'g'ri toifa: «${correctName}». ${currentItem.hint || currentItem.explanation}`;
      });

      gameSession.results.push({
        item: currentItem,
        userChoice: selectedCategory,
        isCorrect: false,
        correctName: correctName
      });
    }

    updateSessionProgressUI();

    // Silliq va tezkor keyingi savolga o'tish (420ms)
    setTimeout(() => {
      gameSession.currentIndex++;
      if (gameSession.currentIndex >= gameSession.activeBatch.length) {
        finish25Session();
      } else {
        displayCurrentItem();
      }
    }, 420);
  }
  window.submitChoiceAnswer = submitChoiceAnswer;
  window.submitCategoryAnswer = submitChoiceAnswer; // Orqaga moslik

  // -----------------------------------------------------------------------
  // 9. VAQT TUGAGANDA AVTO-KEYINGISIGA O'TISH VA AVTO-PAUZA
  // -----------------------------------------------------------------------
  function handleQuestionTimeout() {
    if (gameSession.isAnsweringLocked || gameSession.isFinished) return;
    gameSession.isAnsweringLocked = true;

    if (window.ecoAudio && typeof window.ecoAudio.playTimeoutBuzzer === 'function') {
      window.ecoAudio.playTimeoutBuzzer();
    }

    const currentItem = gameSession.activeBatch[gameSession.currentIndex];
    if (!currentItem) return;

    const correctCatObj = CATEGORIES_MAP.find(c => c.key === currentItem.cat);
    const correctName = correctCatObj ? correctCatObj.name : currentItem.cat;

    gameSession.wrongCount++;
    if (window.ecoAudio) window.ecoAudio.playError();

    // To'g'ri variantni yashil qilib ochish
    document.querySelectorAll('.quiz-choice-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.getAttribute('data-cat-key') === currentItem.cat) {
        btn.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/40');
      } else {
        btn.classList.add('opacity-30');
      }
    });

    document.querySelectorAll('#card-feedback').forEach(feedbackEl => {
      feedbackEl.className = "text-xs text-rose-400 font-bold min-h-[26px] flex items-center justify-center animate-pulse";
      feedbackEl.innerHTML = `<i class="fa-solid fa-clock mr-1.5"></i> Vaqt tugadi (10s)! To'g'ri toifa: «${correctName}». ${currentItem.hint || currentItem.explanation}`;
    });

    gameSession.results.push({
      item: currentItem,
      userChoice: "timeout",
      isCorrect: false,
      correctName: correctName,
      isTimeout: true
    });

    updateSessionProgressUI();

    // AVTO-PAUZA: 2 ta savol belgilanmasa o'yin avtomatik to'xtatiladi
    if (window.EcoPauseEngine && window.EcoPauseEngine.recordTimeout()) {
      window.EcoPauseEngine.triggerAutoPause({
        onContinue: () => {
          gameSession.currentIndex++;
          if (gameSession.currentIndex >= gameSession.activeBatch.length) {
            finish25Session();
          } else {
            displayCurrentItem();
          }
        }
      });
      return;
    }

    setTimeout(() => {
      gameSession.currentIndex++;
      if (gameSession.currentIndex >= gameSession.activeBatch.length) {
        finish25Session();
      } else {
        displayCurrentItem();
      }
    }, 420);
  }

  // -----------------------------------------------------------------------
  // 10. RAUNDNI YAKUNLASH VA HISOBOT
  // -----------------------------------------------------------------------
  function finish25Session() {
    stopSortingGameTimer();
    gameSession.isFinished = true;
    if (window.ecoAudio) window.ecoAudio.playLevelUp();

    let bonusXP = 0;
    if (gameSession.correctCount >= 20) {
      bonusXP = 50;
      if (window.addPlayerXP) window.addPlayerXP(bonusXP);
    }

    document.querySelectorAll('#session-question-card').forEach(el => el.classList.add('hidden'));
    const summary = document.getElementById('session-summary-screen');
    document.querySelectorAll('#session-summary-screen').forEach(el => el.classList.remove('hidden'));

    if (summary) {
      const total = gameSession.activeBatch.length || 25;
      const accuracy = Math.round((gameSession.correctCount / total) * 100);

      // Unvon
      let unvon = "🌱 Yangi boshlovchi";
      if (gameSession.correctCount === total) unvon = "👑 Eko-ustoz";
      else if (gameSession.correctCount >= 20) unvon = "🥈 Saralash ustasi";
      else if (gameSession.correctCount >= 12) unvon = "🥉 O'rganuvchi";

      summary.innerHTML = `
        <div class="text-center py-6 animate-fade-in max-w-2xl mx-auto">
          <div class="w-20 h-20 mx-auto mb-4 rounded-3xl ${accuracy >= 80 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'} flex items-center justify-center text-4xl shadow-xl">
            ${accuracy >= 80 ? '🏆' : '📊'}
          </div>

          <div class="inline-block px-3 py-1 rounded-full bg-slate-800 text-amber-300 border border-amber-500/40 text-xs font-black mb-2">
            ${unvon}
          </div>

          <h3 class="text-3xl font-black text-white mb-1">Raund Yakunlandi!</h3>
          <p class="text-xs text-slate-400 mb-6">200 ta chiqindi bazasidan saralangan 25 ta savol hisoboti:</p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-3 mb-6">
            <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase font-bold block">To'g'ri javoblar</span>
              <span class="text-2xl font-black text-emerald-400">${gameSession.correctCount} / ${total}</span>
            </div>

            <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase font-bold block">Aniqlik darajasi</span>
              <span class="text-2xl font-black ${accuracy >= 80 ? 'text-emerald-400' : 'text-amber-400'}">${accuracy}%</span>
            </div>

            <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase font-bold block">Jami Ball / XP</span>
              <span class="text-2xl font-black text-amber-400">+${gameSession.score + bonusXP} XP</span>
            </div>
          </div>

          ${bonusXP > 0 ? `
            <div class="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl text-xs font-bold text-amber-300 mb-6 flex items-center justify-center gap-2">
              <i class="fa-solid fa-star"></i> A'lo natija uchun +50 XP bonus qo'shildi! Liderlar reytingida yuqoriladingiz!
            </div>
          ` : ''}

          <!-- Xatolar tahlili -->
          <div class="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left mb-6">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <i class="fa-solid fa-list-check text-cyan-400"></i>
              Xatolar tahlili va o'rganilgan qoidalar:
            </h4>

            ${gameSession.wrongCount === 0 
              ? '<p class="text-xs text-emerald-400 font-bold">🎉 Qoyilmaqom! Birorta ham xatoga yo\'l qo\'ymadingiz. 100% toza ekologik tafakkur!</p>'
              : `
                <div class="space-y-2.5 max-h-56 overflow-y-auto custom-scrollbar pr-2 text-xs">
                  ${gameSession.results.filter(r => !r.isCorrect).map(w => `
                    <div class="p-3 bg-slate-900 border border-rose-500/20 rounded-xl">
                      <div class="flex items-center justify-between text-white font-bold mb-1">
                        <span>${w.item.icon} ${w.item.name}</span>
                        <span class="text-emerald-400 text-[11px] bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                          To'g'ri: ${w.correctName}
                        </span>
                      </div>
                      <p class="text-[11px] text-slate-400 leading-relaxed">${w.item.hint || w.item.explanation}</p>
                    </div>
                  `).join('')}
                </div>
              `
            }
          </div>

          <!-- Tugmalar -->
          <div class="flex flex-wrap justify-center gap-3">
            <button onclick="startNew25Session()" class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95">
              <i class="fa-solid fa-rotate-right"></i>
              <span>Keyingi 25 ta Tasodifiy Chiqindini Saralash</span>
            </button>

            <button onclick="switchMainTab('teacher-tab')" class="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer">
              <i class="fa-solid fa-trophy"></i>
              <span>Liderlar Jadvalini Ko'rish</span>
            </button>
          </div>

        </div>
      `;
    }
  }

  function updateSessionProgressUI() {
    const total = (gameSession.activeBatch && gameSession.activeBatch.length) ? gameSession.activeBatch.length : 25;
    const curr = Math.min(gameSession.currentIndex + 1, total);
    document.querySelectorAll('#session-progress').forEach(el => el.textContent = `${curr} / ${total}`);
    document.querySelectorAll('#session-score').forEach(el => el.textContent = `${gameSession.score} XP`);
  }

  // -----------------------------------------------------------------------
  // 11. KLAVIATURA BOSHQARUVI (1, 2, 3, 4 yoki A, B, C, D)
  // -----------------------------------------------------------------------
  function setupQuizKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (gameSession.isAnsweringLocked || gameSession.isFinished) return;
      if (!gameSession.currentChoices || gameSession.currentChoices.length === 0) return;

      let chosenIndex = -1;
      const key = e.key.toUpperCase();

      if (key === '1' || key === 'A') chosenIndex = 0;
      else if (key === '2' || key === 'B') chosenIndex = 1;
      else if (key === '3' || key === 'C') chosenIndex = 2;
      else if (key === '4' || key === 'D') chosenIndex = 3;

      if (chosenIndex >= 0 && chosenIndex < gameSession.currentChoices.length) {
        e.preventDefault();
        const selectedCat = gameSession.currentChoices[chosenIndex];
        const btn = document.querySelector(`.quiz-choice-btn[data-cat-key="${selectedCat.key}"]`);
        submitChoiceAnswer(selectedCat.key, btn);
      }
    });
  }

})();
