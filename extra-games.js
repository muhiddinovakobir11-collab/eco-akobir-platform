// =======================================================================
// Akosh Eco / EcoAkobir — 13 ta Interaktiv Ekologik O'yin va Simulyatorlar
// Asoschi: Akobir | Barcha o'yinlar uchun boyitilgan intellektual keyslar
// va 10 soniyalik taymerli universal mexanizm.
// =======================================================================

const ALL_GAMES_CATALOG = [
  {
    id: 1,
    title: "1. Chiqindilarni Tafakkur Qilib Saralash (4 Talik Konveyer)",
    category: "Saralash va Qayta ishlash",
    badge: "200 ta Chiqindi • 4 Talik Variantlar",
    icon: "fa-recycle",
    color: "emerald",
    xp: 250,
    desc: "200 xil real hayotiy va qopqon chiqindilar ichidan 25 tasi 4 ta toifali variant (A, B, C, D) va 10s taymer bilan tushadi."
  },
  {
    id: 2,
    title: "2. Sanoat Ekologik Auditi Simulyatori",
    category: "Ekologik Audit",
    badge: "100 ta Keys • 25 savolli Raund",
    icon: "fa-industry",
    color: "amber",
    xp: 220,
    desc: "Zavod va korxonalarda 100 ta professional ekologik audit keysi va me'yorlar tahlili."
  },
  {
    id: 3,
    title: "3. Davlat Ekologik Ekspertizasi Kvesti",
    category: "Ekspertiza va Qonunchilik",
    badge: "100 ta Keys • 25 savolli Raund",
    icon: "fa-scale-balanced",
    color: "purple",
    xp: 200,
    desc: "Davlat ekologik ekspertizasi, ZVOS va SanQvaM me'yorlari bo'yicha 100 ta chuqur ekspertiza keysi."
  },
  {
    id: 4,
    title: "4. Shahar Chiqindi Logistikasi",
    category: "Saralash va Qayta ishlash",
    badge: "Smart Logistika • 10 ta Keys",
    icon: "fa-truck-fast",
    color: "emerald",
    xp: 180,
    desc: "Cheklangan yoqilg'i, IoT sensorlar va tirbandlikni hisobga olib eng kam CO2 sarflab konteynerlarni olib keting."
  },
  {
    id: 5,
    title: "5. Daryo Tozalash & Neft To'kilishi Kvesti",
    category: "Favqulodda vaziyatlar",
    badge: "Favqulodda • 10 ta Keys",
    icon: "fa-water",
    color: "cyan",
    xp: 240,
    desc: "Daryoga to'kilgan neft dog'ini bon to'siqlar, gidravlik skimmer va bio-sorbentlar bilan tozalang."
  },
  {
    id: 6,
    title: "6. Biogaz Reaktorini Sozlash",
    category: "Saralash va Qayta ishlash",
    badge: "Biotexnologiya • 10 ta Keys",
    icon: "fa-droplet",
    color: "emerald",
    xp: 210,
    desc: "Reaktordagi harorat (37°C), pH (7.2) va organikani rostlab, elektr energiyasi hosil qiling."
  },
  {
    id: 7,
    title: "7. E-Waste Demontaj & Qimmatbaho Metallar",
    category: "Saralash va Qayta ishlash",
    badge: "Laboratoriya • 10 ta Keys",
    icon: "fa-microchip",
    color: "amber",
    xp: 230,
    desc: "Plata, batareya va chiplardan oltin, mis va litiyni xavfsiz ajratib, zaharli qo'rg'oshinni utilizatsiya qiling."
  },
  {
    id: 8,
    title: "8. Sanitar Poligon Konstruktori",
    category: "Muhandislik",
    badge: "Konstruktor • 10 ta Keys",
    icon: "fa-layer-group",
    color: "teal",
    xp: 200,
    desc: "Geomembrana, filtrlash tizimi, geotekstil va metan quvurlarini qatlam-qatlam muhandislik bilan quring."
  },
  {
    id: 9,
    title: "9. Tutun Tozalash Filtrlari Laboratoriyasi",
    category: "Ekologik Audit",
    badge: "Simulyator • 10 ta Keys",
    icon: "fa-smog",
    color: "blue",
    xp: 220,
    desc: "Zavod trubasiga siklon, matoli elektrofiltr va skrubber o'rnatib zaharli gazlar va changni 99.8% tozalang."
  },
  {
    id: 10,
    title: "10. Ekologik Jarima & Matematik Hisob-kitob",
    category: "Ekologik Audit",
    badge: "Ekomatematika • 10 ta Keys",
    icon: "fa-calculator",
    color: "rose",
    xp: 250,
    desc: "Atmosferaga me'yordan ortiq chiqarilgan SO2 va chang uchun oshirilgan jarimani formulada hisoblang."
  },
  {
    id: 11,
    title: "11. Yashil Shahar Arxitektori (Urban Planner)",
    category: "Ekspertiza va Qonunchilik",
    badge: "Shaharsozlik • 10 ta Keys",
    icon: "fa-city",
    color: "indigo",
    xp: 260,
    desc: "Shamol atirguli (roza vetrov) va 1000m sanitar zonani hisobga olib ekologik shahar loyihalang."
  },
  {
    id: 12,
    title: "12. Ekologik Detektiv: GIS & Dron Monitoringi",
    category: "Monitoring",
    badge: "Kosmik Detektiv • 10 ta Keys",
    icon: "fa-satellite",
    color: "purple",
    xp: 240,
    desc: "Sun'iy yo'ldosh xaritasi va spektral datchiklar orqali ko'milgan noqonuniy chiqindilarni fosh eting."
  },
  {
    id: 13,
    title: "13. Kompost Master: C/N Balans Laboratoriyasi",
    category: "Saralash va Qayta ishlash",
    badge: "Biologiya • 10 ta Keys",
    icon: "fa-seedling",
    color: "lime",
    xp: 190,
    desc: "Jigarrang (Uglerod) va Yashil (Azot) chiqindilarni 30:1 nisbatda qorishtirib toza bio-gumus oling."
  },
  {
    id: 24,
    title: "24. Chiqindi Laboratoriyasi (10 Quti & Drag-and-Drop)",
    category: "Saralash va Qayta ishlash",
    badge: "10 Chiqindi • 9 Quti • Erkin Sudrash",
    icon: "fa-hand-pointer",
    color: "emerald",
    xp: 260,
    desc: "10 ta muvozanatli chiqindini maxsus lagondan 9 ta rangli qutiga erkin sudrang, joylang va faqat oxirida tekshiring. Imtihon va Mashq rejimlari!"
  }
];

function getAllCombinedGames() {
  if (window.NEW_GAMES_METADATA && Array.isArray(window.NEW_GAMES_METADATA)) {
    const combined = [...ALL_GAMES_CATALOG];
    window.NEW_GAMES_METADATA.forEach(newG => {
      if (!combined.some(g => g.id === newG.id)) {
        combined.push(newG);
      }
    });
    return combined;
  }
  return ALL_GAMES_CATALOG;
}
window.getAllCombinedGames = getAllCombinedGames;

let currentLoadedGameId = null;

function renderGamesHub() {
  const container = document.getElementById('games-hub-view');
  if (!container) return;

  const catalog = getAllCombinedGames();

  container.innerHTML = `
    <!-- Header -->
    <div class="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 p-6 rounded-3xl mb-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
      <div>
        <span class="text-xs uppercase font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full">
          Gamifikatsiya Maydoni
        </span>
        <h2 class="text-2xl font-black text-white mt-2">${catalog.length} ta Interaktiv Ekologik O'yin va Simulyatorlar</h2>
        <p class="text-xs text-slate-400 mt-1">Har bir o'yin universitet ta'lim dasturidagi amaliy keyslarga va chuqur tafakkurga asoslangan</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs text-slate-400">Jami o'yinlar:</span>
        <span class="text-lg font-black text-emerald-400 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">${catalog.length} ta</span>
      </div>
    </div>

    <!-- 1v1 Eko-Batl Bellashuv Maxsus Banneri -->
    <div onclick="switchMainTab('battle-tab')" class="rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-rose-950/60 border-2 border-amber-500/50 p-5 mb-6 shadow-2xl flex flex-wrap items-center justify-between gap-4 cursor-pointer hover:border-amber-400 hover:scale-[1.01] transition-all group">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-2xl text-slate-950 font-black shadow-lg shadow-amber-500/30 group-hover:rotate-12 transition-transform">
          ⚔️
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black uppercase tracking-wider">
              Yangi Format • 1v1 Jonli Arena
            </span>
            <span class="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Ekran 2 ga bo'linadi</span>
          </div>
          <h3 class="text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition-colors mt-1">
            ⚔️ Eko-Batl: 2 Talaba Bir Vaqtda Bellashuvi
          </h3>
          <p class="text-xs text-slate-300 mt-0.5">
            2 jamoa nomini yozing, ekran ikkiga bo'linadi va butun platforma savollari mustaqil random tarzda beriladi!
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform flex items-center gap-1.5">
          <span>Batlga Kirish</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Games Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${catalog.map(game => `
        <div onclick="launchSpecificGame(${game.id})" class="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-5 hover:-translate-y-1.5 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                ${game.category}
              </span>
              <span class="text-xs font-black text-amber-400 flex items-center gap-1">
                +${game.xp} XP
              </span>
            </div>

            <div class="flex items-start gap-3 mb-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all border border-emerald-500/20">
                <i class="fa-solid ${game.icon}"></i>
              </div>
              <div>
                <h4 class="font-bold text-white text-base group-hover:text-emerald-400 transition-colors line-clamp-1">
                  ${game.title}
                </h4>
                <span class="text-[11px] text-cyan-400 font-semibold">${game.badge}</span>
              </div>
            </div>

            <p class="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
              ${game.desc}
            </p>
          </div>

          <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-500 font-medium">10s Taymerli • Boshlash</span>
            <span class="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
              O'ynash <i class="fa-solid fa-play text-[10px]"></i>
            </span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function launchSpecificGame(gameId) {
  currentLoadedGameId = gameId;
  const hubView = document.getElementById('games-hub-view');
  const arenaView = document.getElementById('active-game-arena');

  if (hubView) hubView.classList.add('hidden');
  if (arenaView) {
    arenaView.classList.remove('hidden');
    renderActiveGame(gameId, arenaView);
  }

  if (window.ecoAudio) window.ecoAudio.playClick();
}

function returnToGamesHub() {
  if (typeof stopSortingGameTimer === 'function') stopSortingGameTimer();
  if (typeof stopAuditTimer === 'function') stopAuditTimer();
  if (typeof stopExpertiseTimer === 'function') stopExpertiseTimer();
  stopExtraGameTimer();

  const hubView = document.getElementById('games-hub-view');
  const arenaView = document.getElementById('active-game-arena');

  if (arenaView) arenaView.classList.add('hidden');
  if (hubView) hubView.classList.remove('hidden');

  if (window.ecoAudio) window.ecoAudio.playClick();
}

function renderActiveGame(gameId, container) {
  stopExtraGameTimer();
  const catalog = getAllCombinedGames();
  const game = catalog.find(g => g.id === gameId);
  if (!game) return;

  container.innerHTML = `
    <!-- Top Back Navigation -->
    <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
      <button onclick="returnToGamesHub()" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer">
        <i class="fa-solid fa-arrow-left"></i> Barcha O'yinlarga Qaytish
      </button>
      <div class="text-right">
        <span class="text-xs text-slate-400">O'yin mukofoti:</span>
        <span class="text-sm font-black text-amber-400 ml-1">+${game.xp} XP</span>
      </div>
    </div>

    <!-- Active game canvas -->
    <div id="game-dynamic-content" class="min-h-[400px]"></div>
  `;

  const target = document.getElementById('game-dynamic-content');

  // Launch appropriate game runner
  switch (gameId) {
    case 1:
      if (typeof window.launchConveyorQuizMode === 'function') {
        window.launchConveyorQuizMode(target);
      } else if (typeof renderSortingGameUI === 'function') {
        renderSortingGameUI(target);
      }
      break;
    case 2:
      if (typeof renderAuditSimulatorUI === 'function') renderAuditSimulatorUI(target);
      break;
    case 3:
      if (typeof renderExpertiseQuestUI === 'function') renderExpertiseQuestUI(target);
      break;
    case 24:
      if (typeof window.renderWasteSandboxLabUI === 'function') {
        window.renderWasteSandboxLabUI(target);
      }
      break;
    default:
      if (gameId >= 14 && gameId <= 23 && typeof window.launchNewPackGame === 'function') {
        window.launchNewPackGame(gameId, target);
      } else {
        renderExtendedInteractiveGame(gameId, target);
      }
      break;
  }
}

// =======================================================================
// EXTENDED INTERACTIVE ENGINE (Games 4 - 13)
// 10 ta chuqur ilmiy keys, SVG sxemalar, 10s taymer va avto-o'tish
// =======================================================================

let extraGameTimerInterval = null;
const EXTRA_GAME_SECONDS = 10;

let extendedGameSession = {
  gameId: null,
  meta: null,
  scenarios: [],
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  results: [],
  isFinished: false,
  isAnsweringLocked: false
};

function stopExtraGameTimer() {
  if (extraGameTimerInterval) {
    clearInterval(extraGameTimerInterval);
    extraGameTimerInterval = null;
  }
  if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
    window.ecoAudio.stopCountdownSound();
  }
}
window.stopExtraGameTimer = stopExtraGameTimer;

function startExtendedTimer(customRemaining) {
  stopExtraGameTimer();
  const totalSeconds = (window.ECO_CONFIG && window.ECO_CONFIG.extraGameTimer) ? window.ECO_CONFIG.extraGameTimer : EXTRA_GAME_SECONDS;
  const initialRemaining = (typeof customRemaining === 'number' && customRemaining > 0) ? customRemaining : totalSeconds;
  extendedGameSession.remainingSeconds = initialRemaining;
  const startTime = Date.now();
  updateExtendedTimerUI(Math.ceil(initialRemaining), (initialRemaining / totalSeconds) * 100);

  if (window.EcoPauseEngine) {
    window.EcoPauseEngine.registerGame({
      type: 'extended',
      pause: () => { stopExtraGameTimer(); },
      resume: () => { startExtendedTimer(extendedGameSession.remainingSeconds); },
      restart: () => { startExtendedGameSession(); },
      getCurrentStats: () => ({
        counter: `Keys ${extendedGameSession.currentIndex + 1} / ${extendedGameSession.scenarios.length}`,
        score: `${extendedGameSession.score} XP`
      })
    });
  }

  extraGameTimerInterval = setInterval(() => {
    if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;

    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const remainingTime = Math.max(0, initialRemaining - elapsedSeconds);
    extendedGameSession.remainingSeconds = remainingTime;
    const remainingDisplay = Math.ceil(remainingTime);
    const percent = Math.max(0, (remainingTime / totalSeconds) * 100);

    updateExtendedTimerUI(remainingDisplay, percent);
    if (window.ecoAudio && typeof window.ecoAudio.updateCountdownSound === 'function') {
      window.ecoAudio.updateCountdownSound(remainingTime, totalSeconds);
    }

    if (remainingTime <= 0) {
      stopExtraGameTimer();
      handleExtendedTimeout();
    }
  }, 80);
}

function updateExtendedTimerUI(seconds, percent) {
  const timerSec = document.getElementById('ext-timer-seconds');
  const timerBar = document.getElementById('ext-timer-bar');
  const timerBadge = document.getElementById('ext-timer-badge');

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
      timerBar.className = "h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-100 ease-linear rounded-full";
      if (timerBadge) {
        timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
      }
    }
  }
}

function renderExtendedInteractiveGame(gameId, target) {
  const meta = ALL_GAMES_CATALOG.find(g => g.id === gameId);
  const data = (typeof ALL_EXTENDED_GAMES_DATA !== 'undefined' && ALL_EXTENDED_GAMES_DATA[gameId])
    ? ALL_EXTENDED_GAMES_DATA[gameId]
    : null;

  if (!meta || !data) {
    target.innerHTML = `<div class="p-8 text-center text-rose-400 font-bold">O'yin ma'lumotlari yuklanmadi.</div>`;
    return;
  }

  extendedGameSession.gameId = gameId;
  extendedGameSession.meta = meta;
  extendedGameSession.rawScenarios = data.scenarios ? [...data.scenarios] : [];
  extendedGameSession.scenarios = [...extendedGameSession.rawScenarios];

  target.innerHTML = `
    <div class="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      <!-- Top Session Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/30">
            <i class="fa-solid ${meta.icon} animate-pulse"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-black text-white">${meta.title}</h3>
              <span class="text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                ${extendedGameSession.scenarios.length} ta Intellektual Keys
              </span>
            </div>
            <p class="text-xs text-slate-400">${meta.desc}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Jarayon</span>
            <span id="ext-progress" class="text-lg font-black text-cyan-400">0 / ${extendedGameSession.scenarios.length}</span>
          </div>
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">To'plangan Ball</span>
            <span id="ext-score" class="text-lg font-black text-amber-400">0 XP</span>
          </div>
        </div>
      </div>

      <!-- Playfield Container -->
      <div id="ext-playfield">
        
        <!-- Start Screen -->
        <div id="ext-start-screen" class="text-center py-10 max-w-lg mx-auto">
          <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-4xl shadow-xl shadow-cyan-500/10">
            <i class="fa-solid ${meta.icon} text-cyan-400"></i>
          </div>
          <h4 class="text-2xl font-black text-white mb-2">${meta.title}</h4>
          <p class="text-xs text-slate-300 leading-relaxed mb-6">
            Ushbu o'yinda universitet darajasidagi <strong>${extendedGameSession.scenarios.length} ta o'ta chuqur, texnik va tafakkurli amaliy keyslar</strong> (SVG sxemalar, texnologik parametrlar va me'yoriy mezonlar) taqdim etiladi.<br/>
            Har bir bosqichga <strong>10 soniya vaqt</strong> ajratiladi. Javob tanlashingiz bilan to'g'ri/xato ekanligi ko'rsatilib, avtomatik keyingi bosqichga o'tiladi!
          </p>

          <button onclick="startExtendedGameSession()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black rounded-2xl shadow-xl shadow-emerald-500/20 text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5 mx-auto cursor-pointer">
            <i class="fa-solid fa-play"></i>
            <span>O'yinni Boshlash (10s Taymer bilan)</span>
          </button>
        </div>

        <!-- Question Card (Hidden initially) -->
        <div id="ext-question-card" class="hidden">
          
          <!-- 10-Second Timer Bar & Counter -->
          <div class="max-w-2xl mx-auto mb-4">
            <div class="flex items-center justify-between mb-2 px-1">
              <span id="ext-card-counter" class="text-xs uppercase font-extrabold text-cyan-400 tracking-wider">
                Keys 1 / 10
              </span>
              <div class="flex items-center gap-2">
                <button onclick="EcoPauseEngine.togglePause()" type="button" class="eco-pause-btn flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-500/40 transition-all active:scale-95 cursor-pointer shadow-sm">
                  <i class="fa-solid fa-pause text-[10px]"></i>
                  <span>Pauza</span>
                </button>
                <div id="ext-timer-badge" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  <i class="fa-solid fa-stopwatch animate-pulse"></i>
                  <span>Vaqt: <strong id="ext-timer-seconds">10</strong>s</span>
                </div>
              </div>
            </div>
            
            <div class="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800 p-0.5 shadow-inner">
              <div id="ext-timer-bar" class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-100 ease-linear" style="width: 100%;"></div>
            </div>
          </div>

          <!-- Scenario Card Content -->
          <div class="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto shadow-xl">
            
            <div class="flex items-center justify-between gap-2 mb-3">
              <span id="ext-card-title" class="text-xs font-black uppercase text-amber-400 tracking-wider">
                Keys Mavzusi
              </span>
              <span id="ext-card-param" class="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                Texnik Parametrlar
              </span>
            </div>

            <!-- SVG Visual Graphic -->
            <div id="ext-card-svg" class="mb-4"></div>

            <!-- Question Prompt -->
            <div class="mb-4 text-left">
              <p id="ext-card-question" class="text-sm text-white font-bold leading-relaxed"></p>
            </div>

            <!-- Options -->
            <div id="ext-card-options" class="space-y-2.5 text-left"></div>

            <!-- Feedback Box -->
            <div id="ext-feedback-box" class="hidden p-3.5 rounded-xl mt-4 text-xs font-semibold text-center"></div>

          </div>
        </div>

        <!-- Summary Screen (Hidden initially) -->
        <div id="ext-summary-screen" class="hidden"></div>

      </div>

    </div>
  `;
}

function startExtendedGameSession() {
  stopExtraGameTimer();
  if (window.EcoPauseEngine) window.EcoPauseEngine.resetTimeouts();

  // Savollarni random tarzda aralashtirish (Fisher-Yates)
  const pool = (extendedGameSession.rawScenarios && extendedGameSession.rawScenarios.length > 0)
    ? extendedGameSession.rawScenarios
    : extendedGameSession.scenarios;
  const shuffledScenarios = [...pool];
  for (let i = shuffledScenarios.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledScenarios[i], shuffledScenarios[j]] = [shuffledScenarios[j], shuffledScenarios[i]];
  }
  shuffledScenarios.forEach(s => { delete s._shuffledOptions; });
  extendedGameSession.scenarios = shuffledScenarios;

  extendedGameSession.currentIndex = 0;
  extendedGameSession.score = 0;
  extendedGameSession.correctCount = 0;
  extendedGameSession.wrongCount = 0;
  extendedGameSession.results = [];
  extendedGameSession.isFinished = false;
  extendedGameSession.isAnsweringLocked = false;

  const startScreen = document.getElementById('ext-start-screen');
  const summaryScreen = document.getElementById('ext-summary-screen');
  const questionCard = document.getElementById('ext-question-card');

  if (startScreen) startScreen.classList.add('hidden');
  if (summaryScreen) summaryScreen.classList.add('hidden');
  if (questionCard) questionCard.classList.remove('hidden');

  displayCurrentExtendedScenario();
}

function displayCurrentExtendedScenario() {
  stopExtraGameTimer();
  extendedGameSession.isAnsweringLocked = false;
  if (window.EcoFxEngine && typeof window.EcoFxEngine.clearAllFeedback === "function") {
    window.EcoFxEngine.clearAllFeedback(document.getElementById("active-game-arena") || document);
  }

  const scenarios = extendedGameSession.scenarios;
  const idx = extendedGameSession.currentIndex;
  if (idx >= scenarios.length) {
    finishExtendedGameSession();
    return;
  }

  const item = scenarios[idx];

  // Counter & badges
  const counterEl = document.getElementById('ext-card-counter');
  if (counterEl) counterEl.textContent = `Keys ${idx + 1} / ${scenarios.length}`;

  const titleEl = document.getElementById('ext-card-title');
  if (titleEl) titleEl.textContent = item.title;

  const paramEl = document.getElementById('ext-card-param');
  if (paramEl) paramEl.textContent = item.param;

  // SVG
  const svgEl = document.getElementById('ext-card-svg');
  if (svgEl) {
    if (window.Eco2DAnimator && typeof window.Eco2DAnimator.getSceneHtml === 'function') {
      svgEl.innerHTML = window.Eco2DAnimator.getSceneHtml(item, currentLoadedGameId);
    } else {
      svgEl.innerHTML = item.svg || '';
    }
  }

  // Question
  const qEl = document.getElementById('ext-card-question');
  if (qEl) qEl.textContent = item.question;

  // Feedback box hide
  const fbBox = document.getElementById('ext-feedback-box');
  if (fbBox) {
    fbBox.className = "hidden p-3.5 rounded-xl mt-4 text-xs font-semibold text-center";
    fbBox.innerHTML = "";
  }

  // Variantlarni har safar tasodifiy random aralashtirish (Fisher-Yates)
  if (!item._shuffledOptions) {
    const opts = (item.options || []).map((optText, origIdx) => ({
      text: optText,
      originalIndex: origIdx,
      isCorrect: origIdx === item.correct
    }));
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    item._shuffledOptions = opts;
  }

  // Render options
  const optContainer = document.getElementById('ext-card-options');
  if (optContainer) {
    optContainer.innerHTML = item._shuffledOptions.map((optObj, optIdx) => `
      <button onclick="handleExtendedOptionClick(${optIdx}, this)" 
        class="ext-opt-btn eco-smooth-float w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:bg-slate-850 text-left text-xs font-semibold text-slate-200 transition-all flex items-start gap-3 cursor-pointer group shadow-md hover:shadow-xl hover:-translate-y-1">
        <span class="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[11px] font-black text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 shrink-0">
          ${String.fromCharCode(65 + optIdx)}
        </span>
        <span class="flex-1 pt-0.5 leading-relaxed">${optObj.text}</span>
      </button>
    `).join('');
  }

  updateExtendedProgressUI();
  startExtendedTimer();
}

function handleExtendedOptionClick(choiceIndex, btnElement) {
  if (extendedGameSession.isAnsweringLocked || extendedGameSession.isFinished) return;
  if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;
  if (window.EcoPauseEngine) window.EcoPauseEngine.recordUserAnswer();
  extendedGameSession.isAnsweringLocked = true;
  stopExtraGameTimer();

  const item = extendedGameSession.scenarios[extendedGameSession.currentIndex];
  if (!item) return;

  const options = item._shuffledOptions || (item.options || []).map((t, i) => ({ text: t, originalIndex: i, isCorrect: i === item.correct }));
  const chosenOpt = options[choiceIndex];
  const isCorrect = chosenOpt ? chosenOpt.isCorrect : false;
  const allBtns = document.querySelectorAll('.ext-opt-btn');
  let correctBtn = null;

  // Highlight choices
  allBtns.forEach((btn, idx) => {
    btn.classList.add('pointer-events-none');
    if (options[idx] && options[idx].isCorrect) {
      correctBtn = btn;
      btn.className = "ext-opt-btn w-full p-3.5 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 text-left text-xs font-bold text-white transition-all flex items-start gap-3";
    } else if (idx === choiceIndex && !isCorrect) {
      btn.className = "ext-opt-btn w-full p-3.5 rounded-xl bg-rose-500/20 border-2 border-rose-500 text-left text-xs font-bold text-rose-200 transition-all flex items-start gap-3 animate-shake";
    } else {
      btn.classList.add('opacity-40');
    }
  });

  const fbBox = document.getElementById('ext-feedback-box');

  if (isCorrect) {
    extendedGameSession.correctCount++;
    const xpGain = Math.round((extendedGameSession.meta.xp || 200) / extendedGameSession.scenarios.length);
    extendedGameSession.score += xpGain;

    if (window.ecoAudio) window.ecoAudio.playSuccess();
    if (window.addPlayerXP) window.addPlayerXP(xpGain);

    // 2-SEKUNDLIK PAQLDOQ PORTLASHI
    if (window.EcoFxEngine) {
      const rect = btnElement ? btnElement.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
      window.EcoFxEngine.triggerPaqldoq(rect.left + rect.width / 2, rect.top + rect.height / 2, xpGain);
    }

    if (fbBox) {
      fbBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 text-center flex items-center justify-center gap-2 animate-bounce";
      fbBox.innerHTML = `<i class="fa-solid fa-circle-check text-base"></i> <span>To'g'ri! ${item.hint} (+${xpGain} XP)</span>`;
    }

    extendedGameSession.results.push({
      item: item,
      userChoice: chosenOpt ? chosenOpt.text : choiceIndex,
      isCorrect: true
    });
  } else {
    extendedGameSession.wrongCount++;
    if (window.ecoAudio) window.ecoAudio.playError();

    // XATO JAVOB REAKSIYASI
    if (window.EcoFxEngine) {
      window.EcoFxEngine.triggerWrongFeedback(btnElement, correctBtn, document.getElementById('active-game-arena'));
    }

    if (fbBox) {
      fbBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/30 text-center flex items-center justify-center gap-2";
      fbBox.innerHTML = `<i class="fa-solid fa-circle-xmark text-base"></i> <span>Noto'g'ri! ${item.hint}</span>`;
    }

    extendedGameSession.results.push({
      item: item,
      userChoice: chosenOpt ? chosenOpt.text : choiceIndex,
      isCorrect: false
    });
  }

  updateExtendedProgressUI();

  // Snappy, chaqqon o'tish (380ms)
  setTimeout(() => {
    extendedGameSession.currentIndex++;
    if (extendedGameSession.currentIndex >= extendedGameSession.scenarios.length) {
      finishExtendedGameSession();
    } else {
      displayCurrentExtendedScenario();
    }
  }, 380);
}

function handleExtendedTimeout() {
  if (extendedGameSession.isAnsweringLocked || extendedGameSession.isFinished) return;
  extendedGameSession.isAnsweringLocked = true;
  if (window.ecoAudio && typeof window.ecoAudio.playTimeoutBuzzer === 'function') {
    window.ecoAudio.playTimeoutBuzzer();
  }

  const item = extendedGameSession.scenarios[extendedGameSession.currentIndex];
  if (!item) return;

  extendedGameSession.wrongCount++;
  if (window.ecoAudio) window.ecoAudio.playError();

  const options = item._shuffledOptions || (item.options || []).map((t, i) => ({ text: t, originalIndex: i, isCorrect: i === item.correct }));
  const allBtns = document.querySelectorAll('.ext-opt-btn');
  allBtns.forEach((btn, idx) => {
    btn.classList.add('pointer-events-none');
    if (options[idx] && options[idx].isCorrect) {
      btn.className = "ext-opt-btn w-full p-3.5 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 text-left text-xs font-bold text-white transition-all flex items-start gap-3";
    } else {
      btn.classList.add('opacity-40');
    }
  });

  const fbBox = document.getElementById('ext-feedback-box');
  if (fbBox) {
    fbBox.className = "p-3.5 rounded-xl mt-4 text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/30 text-center flex items-center justify-center gap-2 animate-pulse";
    fbBox.innerHTML = `<i class="fa-solid fa-clock text-base"></i> <span>Vaqt tugadi (10s)! ${item.hint}</span>`;
  }

  extendedGameSession.results.push({
    item: item,
    userChoice: -1,
    isCorrect: false,
    isTimeout: true
  });

  updateExtendedProgressUI();

  // AVTO-PAUZA: 2 ta savol ketma-ket belgilanmasa o'yin to'xtatiladi
  if (window.EcoPauseEngine && window.EcoPauseEngine.recordTimeout()) {
    window.EcoPauseEngine.triggerAutoPause({
      onContinue: () => {
        extendedGameSession.currentIndex++;
        if (extendedGameSession.currentIndex >= extendedGameSession.scenarios.length) {
          finishExtendedGameSession();
        } else {
          displayCurrentExtendedScenario();
        }
      }
    });
    return;
  }

  setTimeout(() => {
    extendedGameSession.currentIndex++;
    if (extendedGameSession.currentIndex >= extendedGameSession.scenarios.length) {
      finishExtendedGameSession();
    } else {
      displayCurrentExtendedScenario();
    }
  }, 380);
}

function updateExtendedProgressUI() {
  const progEl = document.getElementById('ext-progress');
  const scoreEl = document.getElementById('ext-score');
  const total = extendedGameSession.scenarios.length;

  if (progEl) progEl.textContent = `${extendedGameSession.currentIndex} / ${total}`;
  if (scoreEl) scoreEl.textContent = `${extendedGameSession.score} XP`;
}

function finishExtendedGameSession() {
  stopExtraGameTimer();
  extendedGameSession.isFinished = true;

  const questionCard = document.getElementById('ext-question-card');
  const summaryScreen = document.getElementById('ext-summary-screen');

  if (questionCard) questionCard.classList.add('hidden');
  if (!summaryScreen) return;
  summaryScreen.classList.remove('hidden');

  const total = extendedGameSession.scenarios.length;
  const correct = extendedGameSession.correctCount;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  const meta = extendedGameSession.meta;

  summaryScreen.innerHTML = `
    <div class="bg-slate-950/90 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl text-center">
      
      <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/10">
        🏆
      </div>

      <span class="text-xs font-black uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
        Rasmiy Sinov Yakunlandi
      </span>

      <h4 class="text-2xl font-black text-white mt-3 mb-2">${meta.title}</h4>
      <p class="text-xs text-slate-400 mb-6">Barcha ${total} ta amaliy keys tahlil qilindi va bilim darajangiz baholandi.</p>

      <!-- Stats Grid -->
      <div class="grid grid-cols-3 gap-3 mb-6">
        <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block">To'g'ri</span>
          <span class="text-2xl font-black text-emerald-400">${correct} / ${total}</span>
        </div>
        <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block">Aniqlik</span>
          <span class="text-2xl font-black text-cyan-400">${percent}%</span>
        </div>
        <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block">To'plangan XP</span>
          <span class="text-2xl font-black text-amber-400">+${extendedGameSession.score} XP</span>
        </div>
      </div>

      <!-- Breakdown of mistakes -->
      <div class="text-left mb-6">
        <h5 class="text-xs font-bold text-slate-300 uppercase mb-3 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-cyan-400"></i> Keyslar Tahlili va Natijalari:
        </h5>
        <div class="space-y-2 max-h-60 overflow-y-auto custom-scrollbar pr-1">
          ${extendedGameSession.results.map((res, i) => `
            <div class="p-3 rounded-xl border ${res.isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'} flex items-start gap-2.5">
              <i class="fa-solid ${res.isCorrect ? 'fa-check text-emerald-400' : 'fa-xmark text-rose-400'} text-xs mt-1 shrink-0"></i>
              <div class="text-xs flex-1">
                <span class="font-bold text-white block mb-0.5">${i + 1}. ${res.item.title}</span>
                <span class="text-slate-400 block text-[11px]">${res.item.hint}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button onclick="startExtendedGameSession()" class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black rounded-xl shadow-lg shadow-emerald-500/20 text-xs transition-all flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-rotate-left"></i> Qayta O'ynash
        </button>
        <button onclick="returnToGamesHub()" class="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-arrow-left"></i> Barcha O'yinlarga Qaytish
        </button>
      </div>

    </div>
  `;
}

// Global exports
window.renderGamesHub = renderGamesHub;
window.launchSpecificGame = launchSpecificGame;
window.returnToGamesHub = returnToGamesHub;
window.startExtendedGameSession = startExtendedGameSession;
window.handleExtendedOptionClick = handleExtendedOptionClick;
