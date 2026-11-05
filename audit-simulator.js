// Sanoat Ekologik Auditi Simulyatori (100 ta Savol Bazasi • 25 ta Random Raund)
// Asoschi: Akobir | Akosh Eco & EcoAkobir Platformasi

let currentAuditContainer = null;
let auditTimerInterval = null;
const AUDIT_QUESTION_SECONDS = 10;

let auditSession = {
  activeBatch: [],
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  results: [],
  isFinished: false,
  isAnsweringLocked: false
};

function stopAuditTimer() {
  if (auditTimerInterval) {
    clearInterval(auditTimerInterval);
    auditTimerInterval = null;
  }
  if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
    window.ecoAudio.stopCountdownSound();
  }
}
window.stopAuditTimer = stopAuditTimer;

function initAuditSimulator() {
  const container = document.getElementById('audit-simulator-container') || document.getElementById('game-dynamic-content');
  if (!container) return;
  currentAuditContainer = container;
  renderAuditSimulatorUI(container);
}

function getAuditScopeEl(id) {
  if (currentAuditContainer) {
    const el = currentAuditContainer.querySelector('#' + id);
    if (el) return el;
  }
  return document.getElementById(id);
}

function renderAuditSimulatorUI(container) {
  if (container) currentAuditContainer = container;
  const target = currentAuditContainer || document.getElementById('audit-simulator-container') || document.getElementById('game-dynamic-content');
  if (!target) return;

  target.innerHTML = `
    <div class="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      <!-- Top Session Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl border border-amber-500/30">
            <i class="fa-solid fa-industry animate-pulse"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-black text-white">Sanoat Ekologik Auditi Simulyatori</h3>
              <span class="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
                100 ta Murakkab Keys Bazasi
              </span>
            </div>
            <p class="text-xs text-slate-400">Har bir sessiyada 100 ta professional audit keysidan <strong>tasodifiy 25 tasi</strong> taqdim etiladi!</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Jarayon</span>
            <span id="audit-progress" class="text-lg font-black text-emerald-400">0 / 25</span>
          </div>
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">To'plangan Ball</span>
            <span id="audit-score" class="text-lg font-black text-amber-400">0 XP</span>
          </div>
        </div>
      </div>

      <!-- Main Playfield -->
      <div id="audit-playfield">
        
        <!-- Start Screen -->
        <div id="audit-start-screen" class="text-center py-10 max-w-lg mx-auto">
          <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-4xl shadow-xl shadow-amber-500/10">
            🏭
          </div>
          <h4 class="text-2xl font-black text-white mb-2">${(window.ECO_CONFIG && window.ECO_CONFIG.auditBatchSize) || 25} ta Tasodifiy Sanoat Auditi Raundi</h4>
          <p class="text-xs text-slate-300 leading-relaxed mb-6">
            100 ta professional, o'ta murakkab va chuqur tafakkurli sanoat ekologik auditi keyslari (ISO 14001, O'zR Ekologiya qonunchiligi, PDK, emissiya va oqavalar) ichidan <strong>25 tasi random</strong> tarzda beriladi.<br/>
            Har bir savolga <strong>${(window.ECO_CONFIG && window.ECO_CONFIG.auditTimer) || 10} soniya vaqt</strong> ajratiladi. Javob tanlashingiz bilan to'g'ri/xato ekanligi ko'rsatilib, avtomatik keyingi savolga o'tiladi!
          </p>

          <button onclick="startNew25AuditSession()" class="px-8 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-500/20 text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5 mx-auto cursor-pointer">
            <i class="fa-solid fa-play"></i>
            <span>Raundni Boshlash (${(window.ECO_CONFIG && window.ECO_CONFIG.auditTimer) || 10}s Taymer bilan)</span>
          </button>
        </div>

        <!-- Question Card (Hidden initially) -->
        <div id="audit-question-card" class="hidden">
          
          <!-- 10-Second Timer Bar & Counter -->
          <div class="max-w-2xl mx-auto mb-4">
            <div class="flex items-center justify-between mb-2 px-1">
              <span id="audit-card-counter" class="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                Savol 1 / 25
              </span>
              <div id="audit-timer-badge" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/40">
                <i class="fa-solid fa-stopwatch animate-pulse"></i>
                <span>Vaqt: <strong id="audit-timer-seconds">10</strong>s</span>
              </div>
            </div>
            <div class="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800 p-0.5 shadow-inner">
              <div id="audit-timer-bar" class="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-100 ease-linear" style="width: 100%;"></div>
            </div>
          </div>

          <!-- Active Question Area -->
          <div class="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 mb-4 shadow-inner max-w-2xl mx-auto">
            
            <!-- Graphic Illustration SVG -->
            <div id="audit-card-svg" class="mb-4 overflow-hidden rounded-xl border border-slate-700 bg-slate-950"></div>

            <!-- Title & Info -->
            <div class="mb-4 text-left">
              <span id="audit-card-badge" class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 block w-fit mb-1">
                Auditorlik Keysi
              </span>
              <h4 id="audit-card-title" class="font-black text-white text-base sm:text-lg mb-2">Keys sarlavhasi</h4>
              <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl text-slate-300 text-xs leading-relaxed">
                <i class="fa-solid fa-eye text-amber-400 mr-1.5"></i>
                <strong class="text-white">Joyida ko'zdan kechirish:</strong>
                <p id="audit-card-info" class="mt-1 text-slate-300">Ma'lumotlar...</p>
              </div>
            </div>

            <!-- Question prompt -->
            <div class="text-left mb-3">
              <h5 class="text-xs uppercase font-extrabold text-slate-400 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-gavel text-amber-400"></i> Auditorlik Qarori:
              </h5>
              <p id="audit-card-question" class="text-xs text-slate-200 font-medium mt-1">Savol matni</p>
            </div>

            <!-- Choices -->
            <div id="audit-card-options" class="space-y-2.5 text-left"></div>

            <!-- Feedback Banner -->
            <div id="audit-feedback-box" class="hidden p-3.5 rounded-xl mt-4 text-xs font-semibold text-center"></div>
          </div>

        </div>

        <!-- Summary Screen (Hidden initially) -->
        <div id="audit-summary-screen" class="hidden"></div>
      </div>

    </div>
  `;
}

// 25 ta tasodifiy savolli yangi auditorlik raundini boshlash
function startNew25AuditSession() {
  stopAuditTimer();

  const pool = (typeof ALL_100_AUDIT_QUESTIONS !== 'undefined' && ALL_100_AUDIT_QUESTIONS.length >= 25) 
    ? ALL_100_AUDIT_QUESTIONS 
    : [];

  if (pool.length === 0) {
    alert("Auditorlik savollari bazasi yuklanmoqda...");
    return;
  }

  // Tozalash va Fisher-Yates shuffle
  pool.forEach(q => { delete q._shuffledOptions; });
  const batchSize = (window.ECO_CONFIG && window.ECO_CONFIG.auditBatchSize) ? window.ECO_CONFIG.auditBatchSize : 25;
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  auditSession.activeBatch = shuffled.slice(0, batchSize);
  auditSession.currentIndex = 0;
  auditSession.score = 0;
  auditSession.correctCount = 0;
  auditSession.wrongCount = 0;
  auditSession.results = [];
  auditSession.isFinished = false;
  auditSession.isAnsweringLocked = false;

  const startScreen = getAuditScopeEl('audit-start-screen');
  const summaryScreen = getAuditScopeEl('audit-summary-screen');
  const questionCard = getAuditScopeEl('audit-question-card');

  if (startScreen) startScreen.classList.add('hidden');
  if (summaryScreen) summaryScreen.classList.add('hidden');
  if (questionCard) questionCard.classList.remove('hidden');

  updateAuditProgressUI();
  displayCurrentAuditItem();

  if (window.ecoAudio) window.ecoAudio.playClick();
}

function displayCurrentAuditItem() {
  const item = auditSession.activeBatch[auditSession.currentIndex];
  if (!item) return;

  auditSession.isAnsweringLocked = false;

  const counterEl = getAuditScopeEl('audit-card-counter');
  const svgEl = getAuditScopeEl('audit-card-svg');
  const badgeEl = getAuditScopeEl('audit-card-badge');
  const titleEl = getAuditScopeEl('audit-card-title');
  const infoEl = getAuditScopeEl('audit-card-info');
  const questionEl = getAuditScopeEl('audit-card-question');
  const optionsEl = getAuditScopeEl('audit-card-options');
  const feedbackEl = getAuditScopeEl('audit-feedback-box');

  if (counterEl) counterEl.textContent = `Savol ${auditSession.currentIndex + 1} / 25`;
  if (svgEl) {
    if (window.Eco2DAnimator && typeof window.Eco2DAnimator.getSceneHtml === 'function') {
      svgEl.innerHTML = window.Eco2DAnimator.getSceneHtml(item, 2);
    } else {
      svgEl.innerHTML = item.svg || '';
    }
  }
  if (badgeEl) badgeEl.textContent = item.visualTitle || 'Auditorlik Tekshiruvi';
  if (titleEl) titleEl.textContent = item.sector;
  if (infoEl) infoEl.textContent = item.visualInfo;
  if (questionEl) questionEl.textContent = item.question;
  if (feedbackEl) feedbackEl.classList.add('hidden');

  // Variantlarni har safar random aralashtirish (Fisher-Yates)
  if (!item._shuffledOptions) {
    const list = item.options.map((opt, origIdx) => ({
      ...opt,
      originalIndex: origIdx
    }));
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    item._shuffledOptions = list;
  }
  const options = item._shuffledOptions;

  if (optionsEl) {
    optionsEl.innerHTML = options.map((opt, idx) => `
      <button onclick="handleAuditChoice(${idx}, this)" class="audit-choice-btn eco-smooth-float w-full text-left p-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/60 transition-all text-xs text-slate-200 flex items-start gap-3 group cursor-pointer active:scale-98 shadow-md hover:shadow-xl hover:-translate-y-1">
        <span class="w-6 h-6 rounded-full bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-700 transition-colors">
          ${String.fromCharCode(65 + idx)}
        </span>
        <span class="leading-relaxed">${opt.text}</span>
      </button>
    `).join('');
  }

  // 10 soniyalik taymerni boshlash
  startAuditTimer();
}

function startAuditTimer(customRemaining) {
  stopAuditTimer();
  const totalSeconds = (window.ECO_CONFIG && window.ECO_CONFIG.auditTimer) ? window.ECO_CONFIG.auditTimer : AUDIT_QUESTION_SECONDS;
  const initialRemaining = (typeof customRemaining === 'number' && customRemaining > 0) ? customRemaining : totalSeconds;
  auditSession.remainingSeconds = initialRemaining;
  const startTime = Date.now();
  updateAuditTimerUI(Math.ceil(initialRemaining), (initialRemaining / totalSeconds) * 100);

  if (window.EcoPauseEngine) {
    window.EcoPauseEngine.registerGame({
      type: 'audit',
      pause: () => { stopAuditTimer(); },
      resume: () => { startAuditTimer(auditSession.remainingSeconds); },
      restart: () => { startNew25AuditSession(); },
      getCurrentStats: () => ({
        counter: `Savol ${auditSession.currentIndex + 1} / ${(auditSession.activeBatch ? auditSession.activeBatch.length : 25)}`,
        score: `${auditSession.score} XP`
      })
    });
  }

  auditTimerInterval = setInterval(() => {
    if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;

    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const remainingTime = Math.max(0, initialRemaining - elapsedSeconds);
    auditSession.remainingSeconds = remainingTime;
    const remainingDisplay = Math.ceil(remainingTime);
    const percent = Math.max(0, (remainingTime / totalSeconds) * 100);

    updateAuditTimerUI(remainingDisplay, percent);
    if (window.ecoAudio && typeof window.ecoAudio.updateCountdownSound === 'function') {
      window.ecoAudio.updateCountdownSound(remainingTime, totalSeconds);
    }

    if (remainingTime <= 0) {
      stopAuditTimer();
      handleAuditTimeout();
    }
  }, 80);
}

function updateAuditTimerUI(seconds, percent) {
  const timerSec = getAuditScopeEl('audit-timer-seconds');
  const timerBar = getAuditScopeEl('audit-timer-bar');
  const timerBadge = getAuditScopeEl('audit-timer-badge');

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
      timerBar.className = "h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-100 ease-linear rounded-full";
      if (timerBadge) {
        timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/40";
      }
    }
  }
}

function handleAuditChoice(choiceIndex, btnElement) {
  if (auditSession.isAnsweringLocked || auditSession.isFinished) return;
  if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;
  if (window.EcoPauseEngine) window.EcoPauseEngine.recordUserAnswer();
  auditSession.isAnsweringLocked = true;
  stopAuditTimer();

  const currentItem = auditSession.activeBatch[auditSession.currentIndex];
  if (!currentItem) return;

  const options = currentItem._shuffledOptions || currentItem.options;
  const choice = options[choiceIndex];
  const isCorrect = choice.isCorrect;

  // Tugmalarni bloklash va rang berish
  const root = currentAuditContainer || document;
  const buttons = root.querySelectorAll('.audit-choice-btn');
  let correctBtn = null;

  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (options[idx].isCorrect) {
      correctBtn = b;
      b.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/30', 'text-emerald-300');
    } else if (idx === choiceIndex && !isCorrect) {
      b.classList.add('ring-4', 'ring-rose-500', 'bg-rose-600/30', 'text-rose-300');
    } else {
      b.classList.add('opacity-40');
    }
  });

  const feedbackBox = getAuditScopeEl('audit-feedback-box');

  if (isCorrect) {
    auditSession.correctCount++;
    auditSession.score += choice.points;
    if (window.ecoAudio) window.ecoAudio.playSuccess();
    if (window.addPlayerXP) window.addPlayerXP(choice.points);

    // 2-SEKUNDLIK PAQLDOQ PORTLASHI
    if (window.EcoFxEngine) {
      const rect = btnElement ? btnElement.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
      window.EcoFxEngine.triggerPaqldoq(rect.left + rect.width / 2, rect.top + rect.height / 2, choice.points);
    }

    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      feedbackBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-center bg-emerald-500/20 border border-emerald-500 text-emerald-300 animate-bounce";
      feedbackBox.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5"></i> To'g'ri! ${choice.explanation} (+${choice.points} XP)`;
    }

    auditSession.results.push({
      item: currentItem,
      userChoice: choice.text,
      isCorrect: true
    });
  } else {
    auditSession.wrongCount++;
    if (window.ecoAudio) window.ecoAudio.playError();

    // XATO JAVOB REAKSIYASI
    if (window.EcoFxEngine) {
      window.EcoFxEngine.triggerWrongFeedback(btnElement, correctBtn, currentAuditContainer);
    }

    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      feedbackBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-center bg-rose-500/20 border border-rose-500 text-rose-300";
      feedbackBox.innerHTML = `<i class="fa-solid fa-circle-xmark mr-1.5"></i> Noto'g'ri! ${choice.explanation}`;
    }

    auditSession.results.push({
      item: currentItem,
      userChoice: choice.text,
      isCorrect: false
    });
  }

  updateAuditProgressUI();

  // Snappy, chaqqon o'tish (380ms)
  setTimeout(() => {
    auditSession.currentIndex++;
    if (auditSession.currentIndex >= auditSession.activeBatch.length) {
      finish25AuditSession();
    } else {
      displayCurrentAuditItem();
    }
  }, 380);
}

function handleAuditTimeout() {
  if (auditSession.isAnsweringLocked || auditSession.isFinished) return;
  auditSession.isAnsweringLocked = true;
  if (window.ecoAudio && typeof window.ecoAudio.playTimeoutBuzzer === 'function') {
    window.ecoAudio.playTimeoutBuzzer();
  }

  const currentItem = auditSession.activeBatch[auditSession.currentIndex];
  if (!currentItem) return;

  auditSession.wrongCount++;
  if (window.ecoAudio) window.ecoAudio.playError();

  const root = currentAuditContainer || document;
  const buttons = root.querySelectorAll('.audit-choice-btn');
  const options = currentItem._shuffledOptions || currentItem.options;
  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (options[idx].isCorrect) {
      b.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/30', 'text-emerald-300');
    } else {
      b.classList.add('opacity-40');
    }
  });

  const feedbackBox = getAuditScopeEl('audit-feedback-box');
  if (feedbackBox) {
    feedbackBox.classList.remove('hidden');
    feedbackBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-center bg-rose-500/20 border border-rose-500 text-rose-300 animate-pulse";
    feedbackBox.innerHTML = `<i class="fa-solid fa-clock mr-1.5"></i> Vaqt tugadi (10s)! Auditor o'z vaqtida qaror qabul qilishi lozim.`;
  }

  auditSession.results.push({
    item: currentItem,
    userChoice: "timeout",
    isCorrect: false
  });

  updateAuditProgressUI();

  // AVTO-PAUZA: 2 ta savol ketma-ket belgilanmasa o'yin to'xtatiladi
  if (window.EcoPauseEngine && window.EcoPauseEngine.recordTimeout()) {
    window.EcoPauseEngine.triggerAutoPause({
      onContinue: () => {
        auditSession.currentIndex++;
        if (auditSession.currentIndex >= auditSession.activeBatch.length) {
          finish25AuditSession();
        } else {
          displayCurrentAuditItem();
        }
      }
    });
    return;
  }

  setTimeout(() => {
    auditSession.currentIndex++;
    if (auditSession.currentIndex >= auditSession.activeBatch.length) {
      finish25AuditSession();
    } else {
      displayCurrentAuditItem();
    }
  }, 380);
}

function updateAuditProgressUI() {
  const progEl = getAuditScopeEl('audit-progress');
  const scoreEl = getAuditScopeEl('audit-score');

  const totalCount = auditSession.activeBatch ? auditSession.activeBatch.length : 25;
  if (progEl) progEl.textContent = `${auditSession.currentIndex} / ${totalCount}`;
  if (scoreEl) scoreEl.textContent = `${auditSession.score} XP`;
}

function finish25AuditSession() {
  stopAuditTimer();
  auditSession.isFinished = true;
  if (window.ecoAudio) window.ecoAudio.playLevelUp();

  const card = getAuditScopeEl('audit-question-card');
  const summary = getAuditScopeEl('audit-summary-screen');

  if (card) card.classList.add('hidden');
  if (summary) {
    summary.classList.remove('hidden');
    const accuracy = Math.round((auditSession.correctCount / 25) * 100);

    summary.innerHTML = `
      <div class="text-center py-6 animate-fade-in max-w-2xl mx-auto">
        <div class="w-20 h-20 mx-auto mb-4 rounded-3xl ${accuracy >= 80 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'} flex items-center justify-center text-4xl shadow-xl">
          ${accuracy >= 80 ? '🏆' : '📊'}
        </div>

        <h3 class="text-3xl font-black text-white mb-1">Auditorlik Raundi Yakunlandi!</h3>
        <p class="text-xs text-slate-400 mb-6">25 ta sanoat ekologik auditi bo'yicha rasmiy hisobotingiz:</p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">To'g'ri qarorlar</span>
            <span class="text-2xl font-black text-emerald-400">${auditSession.correctCount} / 25</span>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">Aniqlik darajasi</span>
            <span class="text-2xl font-black ${accuracy >= 80 ? 'text-emerald-400' : 'text-amber-400'}">${accuracy}%</span>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">To'plangan Ball</span>
            <span class="text-2xl font-black text-amber-400">+${auditSession.score} XP</span>
          </div>
        </div>

        <!-- Mistakes Breakdown -->
        <div class="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left mb-6">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-amber-400"></i>
            Xatolar tahlili va auditorlik saboqlari:
          </h4>

          ${auditSession.wrongCount === 0 
            ? '<p class="text-xs text-emerald-400 font-bold">🎉 Mukammal natija! Bosh Ekolog-Auditor darajasi! 100% qonuniy va xatosiz audit.</p>'
            : `
              <div class="space-y-2.5 max-h-56 overflow-y-auto custom-scrollbar pr-2 text-xs">
                ${auditSession.results.filter(r => !r.isCorrect).map(w => `
                  <div class="p-2.5 bg-slate-900 border border-rose-500/20 rounded-xl">
                    <div class="text-white font-bold mb-1">${w.item.sector}</div>
                    <p class="text-[11px] text-slate-400">${w.item.options.find(o => o.isCorrect)?.explanation || ''}</p>
                  </div>
                `).join('')}
              </div>
            `
          }
        </div>

        <!-- Action buttons -->
        <div class="flex flex-wrap justify-center gap-3">
          <button onclick="startNew25AuditSession()" class="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-rotate-right"></i>
            <span>Keyingi 25 ta Tasodifiy Savolni Boshlash</span>
          </button>

          <button onclick="downloadAuditCertificate()" class="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-award"></i>
            <span>Auditorlik Sertifikatini Olish</span>
          </button>
        </div>

      </div>
    `;
  }
}

function downloadAuditCertificate() {
  if (window.openCertificateModal) {
    window.openCertificateModal("Sanoat Ekologik Auditi va ISO 14001 Standartlari Kursi");
  } else {
    alert("Auditorlik sertifikati tayyorlandi!");
  }
}
