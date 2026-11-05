// Davlat Ekologik Ekspertizasi (EIA / ZVOS / AMTB) Kvesti (100 ta Savol Bazasi • 25 ta Random Raund)
// Asoschi: Akobir | EcoAkobir Platformasi

let currentExpertiseContainer = null;
let expertiseTimerInterval = null;
const EXPERTISE_QUESTION_SECONDS = 10;

let expertiseSession = {
  activeBatch: [],
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  results: [],
  isFinished: false,
  isAnsweringLocked: false
};

function stopExpertiseTimer() {
  if (expertiseTimerInterval) {
    clearInterval(expertiseTimerInterval);
    expertiseTimerInterval = null;
  }
  if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
    window.ecoAudio.stopCountdownSound();
  }
}
window.stopExpertiseTimer = stopExpertiseTimer;

function initExpertiseQuest() {
  const container = document.getElementById('expertise-quest-container') || document.getElementById('game-dynamic-content');
  if (!container) return;
  currentExpertiseContainer = container;
  renderExpertiseQuestUI(container);
}

function getExpertiseScopeEl(id) {
  if (currentExpertiseContainer) {
    const el = currentExpertiseContainer.querySelector('#' + id);
    if (el) return el;
  }
  return document.getElementById(id);
}

function renderExpertiseQuestUI(container) {
  if (container) currentExpertiseContainer = container;
  const target = currentExpertiseContainer || document.getElementById('expertise-quest-container') || document.getElementById('game-dynamic-content');
  if (!target) return;

  target.innerHTML = `
    <div class="bg-slate-900 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      <!-- Top Session Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl border border-purple-500/30">
            <i class="fa-solid fa-scale-balanced animate-pulse"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-black text-white">Davlat Ekologik Ekspertizasi Kvesti</h3>
              <span class="text-[10px] uppercase font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full">
                100 ta Qonuniy Keyslar
              </span>
            </div>
            <p class="text-xs text-slate-400">Har bir sessiyada 100 ta ekspertiza keysidan <strong>tasodifiy 25 tasi</strong> taqdim etiladi!</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Jarayon</span>
            <span id="expertise-progress" class="text-lg font-black text-purple-400">0 / 25</span>
          </div>
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">To'plangan Ball</span>
            <span id="expertise-score" class="text-lg font-black text-amber-400">0 XP</span>
          </div>
        </div>
      </div>

      <!-- Main Playfield -->
      <div id="expertise-playfield">
        
        <!-- Start Screen -->
        <div id="expertise-start-screen" class="text-center py-10 max-w-lg mx-auto">
          <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-4xl shadow-xl shadow-purple-500/10">
            ⚖️
          </div>
          <h4 class="text-2xl font-black text-white mb-2">${(window.ECO_CONFIG && window.ECO_CONFIG.expertiseBatchSize) || 25} ta Tasodifiy Davlat Ekspertizasi Kvesti</h4>
          <p class="text-xs text-slate-300 leading-relaxed mb-6">
            100 ta davlat ekologik ekspertizasi va ZVOS bo'yicha chuqur tafakkurli qonuniy keyslar (SanQvaM me'yorlari, Espoo konvensiyasi, chiqindilar va ekotizimlar muhofazasi) ichidan <strong>25 tasi random</strong> tarzda beriladi.<br/>
            Har bir bosqichga <strong>${(window.ECO_CONFIG && window.ECO_CONFIG.expertiseTimer) || 10} soniya vaqt</strong> ajratiladi. Qaror qabul qilishingiz bilan to'g'ri/xato ekanligi ko'rsatilib, avtomatik keyingi bosqichga o'tiladi!
          </p>

          <button onclick="startNew25ExpertiseSession()" class="px-8 py-3.5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-black rounded-2xl shadow-xl shadow-purple-500/20 text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5 mx-auto cursor-pointer">
            <i class="fa-solid fa-play"></i>
            <span>Kvestni Boshlash (${(window.ECO_CONFIG && window.ECO_CONFIG.expertiseTimer) || 10}s Taymer bilan)</span>
          </button>
        </div>

        <!-- Question Card (Hidden initially) -->
        <div id="expertise-question-card" class="hidden">
          
          <!-- 10-Second Timer Bar & Counter -->
          <div class="max-w-2xl mx-auto mb-4">
            <div class="flex items-center justify-between mb-2 px-1">
              <span id="expertise-card-counter" class="text-xs uppercase font-extrabold text-purple-400 tracking-wider">
                Bosqich 1 / 25
              </span>
              <div class="flex items-center gap-2">
                <button onclick="EcoPauseEngine.togglePause()" type="button" class="eco-pause-btn flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-500/40 transition-all active:scale-95 cursor-pointer shadow-sm">
                  <i class="fa-solid fa-pause text-[10px]"></i>
                  <span>Pauza</span>
                </button>
                <div id="expertise-timer-badge" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-purple-500/20 text-purple-400 border border-purple-500/40">
                  <i class="fa-solid fa-stopwatch animate-pulse"></i>
                  <span>Vaqt: <strong id="expertise-timer-seconds">10</strong>s</span>
                </div>
              </div>
            </div>
            <div class="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800 p-0.5 shadow-inner">
              <div id="expertise-timer-bar" class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-100 ease-linear" style="width: 100%;"></div>
            </div>
          </div>

          <!-- Active Question Area -->
          <div class="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 mb-4 shadow-inner max-w-2xl mx-auto">
            
            <!-- Graphic Illustration SVG -->
            <div id="expertise-card-svg" class="mb-4 overflow-hidden rounded-xl border border-slate-700 bg-slate-950"></div>

            <!-- Title & Info -->
            <div class="mb-4 text-left">
              <span id="expertise-card-badge" class="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30 block w-fit mb-1">
                Ekspertiza Kategoriyasi
              </span>
              <h4 id="expertise-card-title" class="font-black text-white text-base sm:text-lg mb-2">Loyiha sarlavhasi</h4>
              <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl text-slate-300 text-xs leading-relaxed">
                <i class="fa-solid fa-file-lines text-purple-400 mr-1.5"></i>
                <strong class="text-white">Loyiha tavsifi & Ekspertiza faktlari:</strong>
                <p id="expertise-card-info" class="mt-1 text-slate-300">Ma'lumotlar...</p>
              </div>
            </div>

            <!-- Question prompt -->
            <div class="text-left mb-3">
              <h5 class="text-xs uppercase font-extrabold text-slate-400 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-gavel text-purple-400"></i> Davlat Ekspertining Rasmiy Xulosasi:
              </h5>
              <p id="expertise-card-question" class="text-xs text-slate-200 font-medium mt-1">Savol matni</p>
            </div>

            <!-- Choices -->
            <div id="expertise-card-options" class="space-y-2.5 text-left"></div>

            <!-- Feedback Banner -->
            <div id="expertise-feedback-box" class="hidden p-3.5 rounded-xl mt-4 text-xs font-semibold text-center"></div>
          </div>

        </div>

        <!-- Summary Screen (Hidden initially) -->
        <div id="expertise-summary-screen" class="hidden"></div>
      </div>

    </div>
  `;
}

// 25 ta tasodifiy savolli yangi ekspertiza kvestini boshlash
function startNew25ExpertiseSession() {
  stopExpertiseTimer();
  if (window.EcoPauseEngine) window.EcoPauseEngine.resetTimeouts();

  const pool = (typeof ALL_100_EXPERTISE_QUESTIONS !== 'undefined' && ALL_100_EXPERTISE_QUESTIONS.length >= 25) 
    ? ALL_100_EXPERTISE_QUESTIONS 
    : [];

  if (pool.length === 0) {
    alert("Davlat ekspertizasi savollari bazasi yuklanmoqda...");
    return;
  }

  // Tozalash va Fisher-Yates shuffle
  pool.forEach(q => { delete q._shuffledAnswers; });
  const batchSize = (window.ECO_CONFIG && window.ECO_CONFIG.expertiseBatchSize) ? window.ECO_CONFIG.expertiseBatchSize : 25;
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  expertiseSession.activeBatch = shuffled.slice(0, batchSize);
  expertiseSession.currentIndex = 0;
  expertiseSession.score = 0;
  expertiseSession.correctCount = 0;
  expertiseSession.wrongCount = 0;
  expertiseSession.results = [];
  expertiseSession.isFinished = false;
  expertiseSession.isAnsweringLocked = false;

  const startScreen = getExpertiseScopeEl('expertise-start-screen');
  const summaryScreen = getExpertiseScopeEl('expertise-summary-screen');
  const questionCard = getExpertiseScopeEl('expertise-question-card');

  if (startScreen) startScreen.classList.add('hidden');
  if (summaryScreen) summaryScreen.classList.add('hidden');
  if (questionCard) questionCard.classList.remove('hidden');

  updateExpertiseProgressUI();
  displayCurrentExpertiseItem();

  if (window.ecoAudio) window.ecoAudio.playClick();
}

function displayCurrentExpertiseItem() {
  const item = expertiseSession.activeBatch[expertiseSession.currentIndex];
  if (!item) return;

  expertiseSession.isAnsweringLocked = false;

  const counterEl = getExpertiseScopeEl('expertise-card-counter');
  const svgEl = getExpertiseScopeEl('expertise-card-svg');
  const badgeEl = getExpertiseScopeEl('expertise-card-badge');
  const titleEl = getExpertiseScopeEl('expertise-card-title');
  const infoEl = getExpertiseScopeEl('expertise-card-info');
  const questionEl = getExpertiseScopeEl('expertise-card-question');
  const optionsEl = getExpertiseScopeEl('expertise-card-options');
  const feedbackEl = getExpertiseScopeEl('expertise-feedback-box');

  if (counterEl) counterEl.textContent = `Bosqich ${expertiseSession.currentIndex + 1} / ${(expertiseSession.activeBatch ? expertiseSession.activeBatch.length : 25)}`;
  if (svgEl) {
    if (window.Eco2DAnimator && typeof window.Eco2DAnimator.getSceneHtml === 'function') {
      svgEl.innerHTML = window.Eco2DAnimator.getSceneHtml(item, 3);
    } else {
      svgEl.innerHTML = item.svg || '';
    }
  }
  if (badgeEl) badgeEl.textContent = item.category || 'Davlat Ekspertizasi';
  if (titleEl) titleEl.textContent = item.title;
  if (infoEl) infoEl.textContent = item.description;
  if (questionEl) questionEl.textContent = item.question;
  if (feedbackEl) feedbackEl.classList.add('hidden');

  // Variantlarni har safar random aralashtirish (Fisher-Yates)
  if (!item._shuffledAnswers) {
    const list = item.answers.map((ans, origIdx) => ({
      ...ans,
      originalIndex: origIdx
    }));
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    item._shuffledAnswers = list;
  }
  const answers = item._shuffledAnswers;

  if (optionsEl) {
    optionsEl.innerHTML = answers.map((opt, idx) => `
      <button onclick="handleExpertiseChoice(${idx}, this)" class="expertise-choice-btn eco-smooth-float w-full text-left p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-purple-500/60 transition-all text-xs text-slate-200 flex items-start gap-3 group cursor-pointer active:scale-98 shadow-md hover:shadow-xl hover:-translate-y-1">
        <span class="w-6 h-6 rounded-full bg-slate-800 group-hover:bg-purple-500 group-hover:text-white font-bold text-xs flex items-center justify-center shrink-0 border border-slate-700 transition-colors">
          ${String.fromCharCode(65 + idx)}
        </span>
        <span class="leading-relaxed">${opt.text}</span>
      </button>
    `).join('');
  }

  // 10 soniyalik taymerni boshlash
  startExpertiseTimer();
}

function startExpertiseTimer(customRemaining) {
  stopExpertiseTimer();
  const totalSeconds = (window.ECO_CONFIG && window.ECO_CONFIG.expertiseTimer) ? window.ECO_CONFIG.expertiseTimer : EXPERTISE_QUESTION_SECONDS;
  const initialRemaining = (typeof customRemaining === 'number' && customRemaining > 0) ? customRemaining : totalSeconds;
  expertiseSession.remainingSeconds = initialRemaining;
  const startTime = Date.now();
  updateExpertiseTimerUI(Math.ceil(initialRemaining), (initialRemaining / totalSeconds) * 100);

  if (window.EcoPauseEngine) {
    window.EcoPauseEngine.registerGame({
      type: 'expertise',
      pause: () => { stopExpertiseTimer(); },
      resume: () => { startExpertiseTimer(expertiseSession.remainingSeconds); },
      restart: () => { startNew25ExpertiseSession(); },
      getCurrentStats: () => ({
        counter: `Bosqich ${expertiseSession.currentIndex + 1} / ${(expertiseSession.activeBatch ? expertiseSession.activeBatch.length : 25)}`,
        score: `${expertiseSession.score} XP`
      })
    });
  }

  expertiseTimerInterval = setInterval(() => {
    if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;

    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const remainingTime = Math.max(0, initialRemaining - elapsedSeconds);
    expertiseSession.remainingSeconds = remainingTime;
    const remainingDisplay = Math.ceil(remainingTime);
    const percent = Math.max(0, (remainingTime / totalSeconds) * 100);

    updateExpertiseTimerUI(remainingDisplay, percent);
    if (window.ecoAudio && typeof window.ecoAudio.updateCountdownSound === 'function') {
      window.ecoAudio.updateCountdownSound(remainingTime, totalSeconds);
    }

    if (remainingTime <= 0) {
      stopExpertiseTimer();
      handleExpertiseTimeout();
    }
  }, 80);
}

function updateExpertiseTimerUI(seconds, percent) {
  const timerSec = getExpertiseScopeEl('expertise-timer-seconds');
  const timerBar = getExpertiseScopeEl('expertise-timer-bar');
  const timerBadge = getExpertiseScopeEl('expertise-timer-badge');

  if (timerSec) timerSec.textContent = seconds;
  if (timerBar) {
    timerBar.style.width = `${percent}%`;
    if (seconds <= 3) {
      timerBar.className = "h-full bg-rose-500 transition-all duration-100 ease-linear rounded-full";
      if (timerBadge) {
        timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse";
      }
    } else if (seconds <= 6) {
      timerBar.className = "h-full bg-amber-500 transition-all duration-100 ease-linear rounded-full";
      if (timerBadge) {
        timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/40";
      }
    } else {
      timerBar.className = "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100 ease-linear rounded-full";
      if (timerBadge) {
        timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-purple-500/20 text-purple-400 border border-purple-500/40";
      }
    }
  }
}

function handleExpertiseChoice(choiceIndex, btnElement) {
  if (expertiseSession.isAnsweringLocked || expertiseSession.isFinished) return;
  if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;
  if (window.EcoPauseEngine) window.EcoPauseEngine.recordUserAnswer();
  expertiseSession.isAnsweringLocked = true;
  stopExpertiseTimer();

  const currentItem = expertiseSession.activeBatch[expertiseSession.currentIndex];
  if (!currentItem) return;

  const answers = currentItem._shuffledAnswers || currentItem.answers;
  const opt = answers[choiceIndex];
  const isCorrect = opt.correct;

  const root = currentExpertiseContainer || document;
  const buttons = root.querySelectorAll('.expertise-choice-btn');
  let correctBtn = null;

  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (answers[idx].correct) {
      correctBtn = b;
      b.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/30', 'text-emerald-300');
    } else if (idx === choiceIndex && !isCorrect) {
      b.classList.add('ring-4', 'ring-rose-500', 'bg-rose-600/30', 'text-rose-300');
    } else {
      b.classList.add('opacity-40');
    }
  });

  const feedbackBox = getExpertiseScopeEl('expertise-feedback-box');

  if (isCorrect) {
    expertiseSession.correctCount++;
    expertiseSession.score += opt.points;
    if (window.ecoAudio) window.ecoAudio.playSuccess();
    if (window.addPlayerXP) window.addPlayerXP(opt.points);

    // 2-SEKUNDLIK PAQLDOQ PORTLASHI
    if (window.EcoFxEngine) {
      const rect = btnElement ? btnElement.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
      window.EcoFxEngine.triggerPaqldoq(rect.left + rect.width / 2, rect.top + rect.height / 2, opt.points);
    }

    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      feedbackBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-center bg-emerald-500/20 border border-emerald-500 text-emerald-300 animate-bounce";
      feedbackBox.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5"></i> To'g'ri! ${opt.explanation} (+${opt.points} XP)`;
    }

    expertiseSession.results.push({
      item: currentItem,
      userChoice: opt.text,
      isCorrect: true
    });
  } else {
    expertiseSession.wrongCount++;
    if (window.ecoAudio) window.ecoAudio.playError();

    // XATO JAVOB REAKSIYASI
    if (window.EcoFxEngine) {
      window.EcoFxEngine.triggerWrongFeedback(btnElement, correctBtn, currentExpertiseContainer);
    }

    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      feedbackBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-center bg-rose-500/20 border border-rose-500 text-rose-300";
      feedbackBox.innerHTML = `<i class="fa-solid fa-circle-xmark mr-1.5"></i> Noto'g'ri! ${opt.explanation}`;
    }

    expertiseSession.results.push({
      item: currentItem,
      userChoice: opt.text,
      isCorrect: false
    });
  }

  updateExpertiseProgressUI();

  // Snappy, chaqqon o'tish (380ms)
  setTimeout(() => {
    expertiseSession.currentIndex++;
    if (expertiseSession.currentIndex >= expertiseSession.activeBatch.length) {
      finish25ExpertiseSession();
    } else {
      displayCurrentExpertiseItem();
    }
  }, 380);
}

function handleExpertiseTimeout() {
  if (expertiseSession.isAnsweringLocked || expertiseSession.isFinished) return;
  expertiseSession.isAnsweringLocked = true;
  if (window.ecoAudio && typeof window.ecoAudio.playTimeoutBuzzer === 'function') {
    window.ecoAudio.playTimeoutBuzzer();
  }

  const currentItem = expertiseSession.activeBatch[expertiseSession.currentIndex];
  if (!currentItem) return;

  expertiseSession.wrongCount++;
  if (window.ecoAudio) window.ecoAudio.playError();

  const root = currentExpertiseContainer || document;
  const buttons = root.querySelectorAll('.expertise-choice-btn');
  const answers = currentItem._shuffledAnswers || currentItem.answers;
  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (answers[idx].correct) {
      b.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/30', 'text-emerald-300');
    } else {
      b.classList.add('opacity-40');
    }
  });

  const feedbackBox = getExpertiseScopeEl('expertise-feedback-box');
  if (feedbackBox) {
    feedbackBox.classList.remove('hidden');
    feedbackBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-center bg-rose-500/20 border border-rose-500 text-rose-300 animate-pulse";
    feedbackBox.innerHTML = `<i class="fa-solid fa-clock mr-1.5"></i> Vaqt tugadi (10s)! Ekspert o'z vaqtida xulosa berishi lozim edi.`;
  }

  expertiseSession.results.push({
    item: currentItem,
    userChoice: "timeout",
    isCorrect: false
  });

  updateExpertiseProgressUI();

  // AVTO-PAUZA: 2 ta savol ketma-ket belgilanmasa o'yin to'xtatiladi
  if (window.EcoPauseEngine && window.EcoPauseEngine.recordTimeout()) {
    window.EcoPauseEngine.triggerAutoPause({
      onContinue: () => {
        expertiseSession.currentIndex++;
        if (expertiseSession.currentIndex >= expertiseSession.activeBatch.length) {
          finish25ExpertiseSession();
        } else {
          displayCurrentExpertiseItem();
        }
      }
    });
    return;
  }

  setTimeout(() => {
    expertiseSession.currentIndex++;
    if (expertiseSession.currentIndex >= expertiseSession.activeBatch.length) {
      finish25ExpertiseSession();
    } else {
      displayCurrentExpertiseItem();
    }
  }, 380);
}

function updateExpertiseProgressUI() {
  const progEl = getExpertiseScopeEl('expertise-progress');
  const scoreEl = getExpertiseScopeEl('expertise-score');

  const totalCount = expertiseSession.activeBatch ? expertiseSession.activeBatch.length : 25;
  if (progEl) progEl.textContent = `${expertiseSession.currentIndex} / ${totalCount}`;
  if (scoreEl) scoreEl.textContent = `${expertiseSession.score} XP`;
}

function finish25ExpertiseSession() {
  stopExpertiseTimer();
  expertiseSession.isFinished = true;
  if (window.ecoAudio) window.ecoAudio.playLevelUp();

  const card = getExpertiseScopeEl('expertise-question-card');
  const summary = getExpertiseScopeEl('expertise-summary-screen');

  if (card) card.classList.add('hidden');
  if (summary) {
    summary.classList.remove('hidden');
    const accuracy = Math.round((expertiseSession.correctCount / 25) * 100);
    const isApproved = accuracy >= 70;

    summary.innerHTML = `
      <div class="text-center py-6 animate-fade-in max-w-2xl mx-auto">
        <div class="w-20 h-20 mx-auto mb-4 rounded-3xl ${isApproved ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'} flex items-center justify-center text-4xl shadow-xl">
          ${isApproved ? '📜' : '⚠️'}
        </div>

        <h3 class="text-3xl font-black text-white mb-1">Ekspertiza Kvesti Yakunlandi!</h3>
        <p class="text-xs text-slate-400 mb-6">25 ta davlat ekologik ekspertizasi keysi bo'yicha yakuniy hisobot:</p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">To'g'ri xulosalar</span>
            <span class="text-2xl font-black text-emerald-400">${expertiseSession.correctCount} / 25</span>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">Ekspertlik darajasi</span>
            <span class="text-2xl font-black ${isApproved ? 'text-purple-400' : 'text-rose-400'}">${accuracy}%</span>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">To'plangan Ball</span>
            <span class="text-2xl font-black text-amber-400">+${expertiseSession.score} XP</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl mb-6 text-left ${isApproved ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-rose-500/10 border border-rose-500/30'}">
          <div class="flex items-center gap-2 mb-1">
            <i class="fa-solid ${isApproved ? 'fa-circle-check text-emerald-400' : 'fa-circle-xmark text-rose-400'} text-lg"></i>
            <h4 class="font-bold text-white text-sm">
              ${isApproved ? 'RASMIY DAVLAT EKOLOGIK EKSPERTIZASI XULOSASI: TASDIQLANDI' : 'RASMIY XULOSA: EKOLOGIK ME\'YORLAR BUZILGANI SABABLI RAD ETILDI'}
            </h4>
          </div>
          <p class="text-xs text-slate-300">
            ${isApproved 
              ? 'Siz davlat ekologik eksperti sifatida qonuniy va xolis qarorlar qabul qildingiz. Obyektlar bo\'yicha barcha xavflar to\'g\'ri baholandi va atrof-muhit muhofazasi ta\'minlandi.' 
              : 'Sizning xulosalaringizda ekologik qonunchilikka zid qarorlar mavjud bo\'lganligi sababli loyihalar rad etildi. Qayta tayyorlanish tavsiya etiladi.'}
          </p>
        </div>

        <!-- Mistakes Breakdown -->
        <div class="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left mb-6">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-purple-400"></i>
            Xatolar tahlili va qonuniy saboqlar:
          </h4>

          ${expertiseSession.wrongCount === 0 
            ? '<p class="text-xs text-emerald-400 font-bold">🎉 Qoyilmaqom! Davlat Bosh Eksperti unvoni! Birorta ham xatoga yo\'l qo\'yilmadi.</p>'
            : `
              <div class="space-y-2.5 max-h-56 overflow-y-auto custom-scrollbar pr-2 text-xs">
                ${expertiseSession.results.filter(r => !r.isCorrect).map(w => `
                  <div class="p-2.5 bg-slate-900 border border-rose-500/20 rounded-xl">
                    <div class="text-white font-bold mb-1">${w.item.title}</div>
                    <p class="text-[11px] text-slate-400">${w.item.answers.find(a => a.correct)?.explanation || ''}</p>
                  </div>
                `).join('')}
              </div>
            `
          }
        </div>

        <!-- Action buttons -->
        <div class="flex flex-wrap justify-center gap-3">
          <button onclick="startNew25ExpertiseSession()" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-black rounded-xl text-xs transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-rotate-right"></i>
            <span>Keyingi 25 ta Kvestni Boshlash</span>
          </button>

          <button onclick="switchMainTab('teacher-tab')" class="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-trophy"></i>
            <span>Reyting Jadvalini Ko'rish</span>
          </button>
        </div>

      </div>
    `;
  }
}
