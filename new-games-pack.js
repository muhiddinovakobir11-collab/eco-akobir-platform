// =======================================================================
// Akosh Eco / EcoAkobir — Yangi 10 ta O'yinlar To'plami (O'yinlar 14 - 23)
// Asoschi: Akobir | 3 Qiyinlik, Boshlash/Natija Ekranlari, XP Fermerlik Himoyasi
// =======================================================================

// 1. Anti-XP Farming Guard (XP Fermerlikdan Himoya)
const EcoAntiFarming = {
  STORAGE_KEY: 'eco_akobir_farming_guard',
  
  getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  },

  getData() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return { date: this.getTodayKey(), games: {} };
      const parsed = JSON.parse(raw);
      if (parsed.date !== this.getTodayKey()) {
        return { date: this.getTodayKey(), games: {} };
      }
      return parsed;
    } catch (e) {
      return { date: this.getTodayKey(), games: {} };
    }
  },

  saveData(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  },

  getGamePlayCount(gameId) {
    const data = this.getData();
    return (data.games[gameId] && data.games[gameId].count) || 0;
  },

  calculateReward(gameId, baseXP, baseCoins, difficulty = 'medium') {
    const count = this.getGamePlayCount(gameId);
    let diffMultiplier = 1.0;
    if (difficulty === 'easy') diffMultiplier = 0.8;
    else if (difficulty === 'hard') diffMultiplier = 1.3;

    let farmingMultiplier = 1.0;
    let status = "To'liq mukofot (100%)";
    let isCapped = false;

    if (count === 0) {
      farmingMultiplier = 1.0;
      status = "1-g'alaba (100% mukofot)";
    } else if (count === 1) {
      farmingMultiplier = 0.6;
      status = "2-g'alaba (60% mukofot)";
    } else if (count === 2) {
      farmingMultiplier = 0.3;
      status = "3-g'alaba (30% mukofot)";
    } else {
      farmingMultiplier = 0.0;
      isCapped = true;
      status = "XP Fermerlik chegarasi (Mashg'ulot rejimi - 0 XP)";
    }

    const finalXP = Math.round(baseXP * diffMultiplier * farmingMultiplier);
    const finalCoins = Math.round(baseCoins * diffMultiplier * farmingMultiplier);

    return {
      xp: finalXP,
      coins: finalCoins,
      farmingMultiplier,
      diffMultiplier,
      status,
      count,
      isCapped
    };
  },

  recordWin(gameId) {
    const data = this.getData();
    if (!data.games[gameId]) {
      data.games[gameId] = { count: 0, lastWon: Date.now() };
    }
    data.games[gameId].count++;
    data.games[gameId].lastWon = Date.now();
    this.saveData(data);
  }
};
window.EcoAntiFarming = EcoAntiFarming;

// Catalog of 10 New Games (14 to 23)
const NEW_GAMES_METADATA = [
  {
    id: 14,
    title: "14. Konveyerda Tezkor Saralash (Arcade Rush)",
    category: "Saralash va Qayta ishlash",
    badge: "Tezkor Saralash • 3 Qiyinlik",
    icon: "fa-bolt-lightning",
    color: "emerald",
    xp: 220,
    desc: "Harakatlanuvchi konveyerdan oqib kelayotgan chiqindilarni to'g'ri rangli qutilarga chaqqonlik bilan ajrating."
  },
  {
    id: 15,
    title: "15. Eko-Kompaktor & Shreder Zavodi",
    category: "Muhandislik",
    badge: "Sanoat Maydalash • 3 Qiyinlik",
    icon: "fa-compress",
    color: "amber",
    xp: 230,
    desc: "Gidravlik press, pichoqli shreder va briketlash bosimini texnologik xavfsiz me'yorlarda boshqaring."
  },
  {
    id: 16,
    title: "16. Filtrat va Oqova Suv Tozalash Stansiyasi",
    category: "Ekologik Audit",
    badge: "Gidro-Kimyo • 3 Qiyinlik",
    icon: "fa-filter",
    color: "cyan",
    xp: 240,
    desc: "Poligondan sizib chiqqan zaharli qora filtratni teskari osmos, aerotenka va koagulyantlar bilan tozalang."
  },
  {
    id: 17,
    title: "17. Tibbiy Chiqindilar & Avtoklav Kvesti",
    category: "Favqulodda vaziyatlar",
    badge: "Biologik Xavfsizlik • 3 Qiyinlik",
    icon: "fa-syringe",
    color: "rose",
    xp: 250,
    desc: "Klinika va shifoxonalardagi A, B, C, D toifali xavfli chiqindilarni 134°C avtoklavda xavfsiz zararsizlantiring."
  },
  {
    id: 18,
    title: "18. Polimer va Plastik Piroliz Laboratoriyasi",
    category: "Saralash va Qayta ishlash",
    badge: "Piroliz Texnologiyasi • 3 Qiyinlik",
    icon: "fa-flask-vial",
    color: "purple",
    xp: 260,
    desc: "Qayta ishlanmaydigan aralash plastiklardan kislorodsiz termik parchalash orqali sintetik yoqilg'i oling."
  },
  {
    id: 19,
    title: "19. Shisha va Rangli Metallarni Qayta Eritish",
    category: "Muhandislik",
    badge: "Metallurgiya • 3 Qiyinlik",
    icon: "fa-fire-burner",
    color: "orange",
    xp: 230,
    desc: "Shisha kullet va alyuminiy qutilarni induksion pechda eritib 95% energiya tejash sirlarini o'rganing."
  },
  {
    id: 20,
    title: "20. Zero Waste Yashil Xonadon Simulyatori",
    category: "Yashil Turmush",
    badge: "Zero Waste • 3 Qiyinlik",
    icon: "fa-house-chimney-window",
    color: "lime",
    xp: 210,
    desc: "Zamonaviy oila xonadonini bir martalik idishlardan xalos etib, 100% chiqindisiz (Zero Waste) yashil maskanga aylantiring."
  },
  {
    id: 21,
    title: "21. Detektiv: Kim Ifloslantirdi? (Ekologik Tergov)",
    category: "Monitoring",
    badge: "Eko-Detektiv • 3 Qiyinlik",
    icon: "fa-magnifying-glass-location",
    color: "indigo",
    xp: 300,
    desc: "Shahar xaritasida ifloslanish o'chog'ini toping, 4 gumondorning axlat qutisini tekshirib dalillar asosida haqiqiy aybdorni fosh eting."
  },
  {
    id: 22,
    title: "22. Kosmik Kema Resurslari & Chiqindi Qayta Ishlash",
    category: "Kosmik Ekologiya",
    badge: "Yopiq Sikl • 3 Qiyinlik",
    icon: "fa-shuttle-space",
    color: "blue",
    xp: 320,
    desc: "Kosmik kemadagi kislorod, energiya va suv zaxiralarini chiqindilarni 4 ta blokda qayta ishlash orqali asrang va yangi sayyoraga yetib boring."
  },
  {
    id: 23,
    title: "23. Chiqindi Bozori & Eko-Biznes Strategiyasi",
    category: "Eko-Iqtisodiyot",
    badge: "Yashil Biznes • 3 Qiyinlik",
    icon: "fa-shop",
    color: "teal",
    xp: 310,
    desc: "Saralangan xomashyoni korxonalarga soting, daromad to'plang va shaharda yirik ekologik loyihalarni amalga oshirib bozoringizni kengaytiring."
  }
];
window.NEW_GAMES_METADATA = NEW_GAMES_METADATA;

let activeNewGameSession = {
  gameId: null,
  difficulty: 'medium',
  state: null
};

function launchNewPackGame(gameId, targetContainer) {
  activeNewGameSession.gameId = gameId;
  activeNewGameSession.difficulty = 'medium';
  renderNewGameStartScreen(gameId, targetContainer);
}
window.launchNewPackGame = launchNewPackGame;

function renderNewGameStartScreen(gameId, container) {
  const meta = NEW_GAMES_METADATA.find(g => g.id === gameId);
  if (!meta) return;

  const playCount = EcoAntiFarming.getGamePlayCount(gameId);
  const rewardPreview = EcoAntiFarming.calculateReward(gameId, meta.xp, Math.floor(meta.xp / 2), activeNewGameSession.difficulty);

  container.innerHTML = `
    <div class="bg-slate-950/90 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl animate-fade-in text-center">
      
      <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl text-emerald-400 shadow-xl shadow-emerald-500/10">
        <i class="fa-solid ${meta.icon}"></i>
      </div>

      <span class="text-xs font-black uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
        ${meta.badge}
      </span>

      <h3 class="text-2xl font-black text-white mt-3 mb-2">${meta.title}</h3>
      <p class="text-xs text-slate-300 leading-relaxed mb-6 max-w-lg mx-auto">${meta.desc}</p>

      <!-- Anti-Farming & Reward Status -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 text-left flex items-center justify-between gap-3">
        <div>
          <span class="text-[11px] font-bold text-slate-400 block">Kunlik Natija va Fermerlikdan Himoya:</span>
          <span class="text-xs font-black ${rewardPreview.isCapped ? 'text-amber-400' : 'text-emerald-400'}">
            ${rewardPreview.status} (Bugun: ${playCount} ta g'alaba)
          </span>
        </div>
        <div class="text-right shrink-0">
          <span class="text-[10px] text-slate-500 uppercase font-bold block">Kutilayotgan Mukofot</span>
          <span class="text-base font-black text-amber-400" id="preview-reward-xp">+${rewardPreview.xp} XP</span>
        </div>
      </div>

      <!-- Difficulty Selector -->
      <div class="mb-6 text-left">
        <label class="block text-xs font-bold text-slate-300 uppercase mb-2">
          <i class="fa-solid fa-gauge-high text-cyan-400 mr-1"></i> Qiyinlik Darajasini Tanlang:
        </label>
        <div class="grid grid-cols-3 gap-2.5">
          <button type="button" onclick="setNewGameDifficulty('easy')" id="diff-btn-easy" class="diff-btn p-3 rounded-xl border text-center transition-all cursor-pointer ${activeNewGameSession.difficulty === 'easy' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-black' : 'bg-slate-900 border-slate-800 text-slate-400 font-semibold hover:border-slate-700'}">
            <span class="block text-xs font-black mb-0.5">🟢 Oson</span>
            <span class="block text-[10px] text-slate-400">Ko'proq vaqt/yordam</span>
          </button>
          <button type="button" onclick="setNewGameDifficulty('medium')" id="diff-btn-medium" class="diff-btn p-3 rounded-xl border text-center transition-all cursor-pointer ${activeNewGameSession.difficulty === 'medium' ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-black' : 'bg-slate-900 border-slate-800 text-slate-400 font-semibold hover:border-slate-700'}">
            <span class="block text-xs font-black mb-0.5">🟡 O'rtacha</span>
            <span class="block text-[10px] text-slate-400">Standart parametrlar</span>
          </button>
          <button type="button" onclick="setNewGameDifficulty('hard')" id="diff-btn-hard" class="diff-btn p-3 rounded-xl border text-center transition-all cursor-pointer ${activeNewGameSession.difficulty === 'hard' ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-black' : 'bg-slate-900 border-slate-800 text-slate-400 font-semibold hover:border-slate-700'}">
            <span class="block text-xs font-black mb-0.5">🔴 Qiyin</span>
            <span class="block text-[10px] text-slate-400">Tez va qat'iy sinov</span>
          </button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button onclick="startSpecificNewGame(${gameId})" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black rounded-xl shadow-lg shadow-emerald-500/25 text-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105">
          <i class="fa-solid fa-play"></i> O'yinni Boshlash
        </button>
        <button onclick="returnToGamesHub()" class="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer">
          <i class="fa-solid fa-arrow-left"></i> Bekor qilish
        </button>
      </div>

    </div>
  `;
}
window.renderNewGameStartScreen = renderNewGameStartScreen;

function setNewGameDifficulty(diff) {
  activeNewGameSession.difficulty = diff;
  ['easy', 'medium', 'hard'].forEach(d => {
    const btn = document.getElementById(`diff-btn-${d}`);
    if (btn) {
      if (d === diff) {
        if (d === 'easy') btn.className = 'diff-btn p-3 rounded-xl border text-center transition-all cursor-pointer bg-emerald-500/20 border-emerald-500 text-emerald-300 font-black';
        if (d === 'medium') btn.className = 'diff-btn p-3 rounded-xl border text-center transition-all cursor-pointer bg-amber-500/20 border-amber-500 text-amber-300 font-black';
        if (d === 'hard') btn.className = 'diff-btn p-3 rounded-xl border text-center transition-all cursor-pointer bg-rose-500/20 border-rose-500 text-rose-300 font-black';
      } else {
        btn.className = 'diff-btn p-3 rounded-xl border text-center transition-all cursor-pointer bg-slate-900 border-slate-800 text-slate-400 font-semibold hover:border-slate-700';
      }
    }
  });

  const meta = NEW_GAMES_METADATA.find(g => g.id === activeNewGameSession.gameId);
  if (meta) {
    const reward = EcoAntiFarming.calculateReward(meta.id, meta.xp, Math.floor(meta.xp / 2), diff);
    const prevXP = document.getElementById('preview-reward-xp');
    if (prevXP) prevXP.textContent = `+${reward.xp} XP`;
  }
  if (window.ecoAudio) window.ecoAudio.playClick();
}
window.setNewGameDifficulty = setNewGameDifficulty;

function startSpecificNewGame(gameId) {
  const container = document.getElementById('game-dynamic-content');
  if (!container) return;

  if (window.ecoAudio) window.ecoAudio.playClick();

  switch (gameId) {
    case 21:
      initDetectiveGame(container, activeNewGameSession.difficulty);
      break;
    case 22:
      initSpaceshipGame(container, activeNewGameSession.difficulty);
      break;
    case 23:
      initWasteMarketGame(container, activeNewGameSession.difficulty);
      break;
    default:
      initStandardNewInteractiveGame(gameId, container, activeNewGameSession.difficulty);
      break;
  }
}
window.startSpecificNewGame = startSpecificNewGame;

function renderNewGameResultScreen(gameId, isWin, stats, container) {
  const meta = NEW_GAMES_METADATA.find(g => g.id === gameId);
  if (!meta) return;

  let reward = { xp: 0, coins: 0, status: "Sinov yakunlandi" };
  if (isWin) {
    reward = EcoAntiFarming.calculateReward(gameId, meta.xp, Math.floor(meta.xp / 2), activeNewGameSession.difficulty);
    if (reward.xp > 0 && typeof addPlayerXP === 'function') {
      addPlayerXP(reward.xp);
    }
    EcoAntiFarming.recordWin(gameId);
    if (window.ecoAudio) window.ecoAudio.playSuccess();
  } else {
    if (window.ecoAudio) window.ecoAudio.playError();
  }

  container.innerHTML = `
    <div class="bg-slate-950/90 border-2 ${isWin ? 'border-emerald-500/50' : 'border-rose-500/50'} rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl animate-fade-in text-center">
      
      <div class="w-20 h-20 mx-auto mb-4 rounded-3xl ${isWin ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'} border flex items-center justify-center text-4xl shadow-xl">
        ${isWin ? '🏆' : '⚠️'}
      </div>

      <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${isWin ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}">
        ${isWin ? "Muvaffaqiyatli Yakunlandi" : "Vazifa Bajarilmadi"}
      </span>

      <h3 class="text-2xl font-black text-white mt-3 mb-1">${meta.title}</h3>
      <p class="text-xs text-slate-400 mb-6">${stats.message || (isWin ? "A'lo natija! Belgilangan vazifalar to'liq bajarildi." : "Qayta urinib ko'ring va bilimlaringizni mustahkamlang.")}</p>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block">Qiyinlik</span>
          <span class="text-xs font-black text-amber-300 capitalize">${activeNewGameSession.difficulty}</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block">Natija</span>
          <span class="text-xs font-black ${isWin ? 'text-emerald-400' : 'text-rose-400'}">${stats.scoreText || (isWin ? "G'alaba" : "Mag'lubiyat")}</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block">Olingan XP</span>
          <span class="text-xs font-black text-amber-400">+${isWin ? reward.xp : 0} XP</span>
        </div>
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block">Eco-Coin</span>
          <span class="text-xs font-black text-teal-400">+${isWin ? reward.coins : 0}</span>
        </div>
      </div>

      <!-- Anti-Farming info note -->
      <div class="p-3 bg-slate-900/80 border border-slate-800 rounded-xl mb-6 text-xs text-slate-400 flex items-center justify-between">
        <span class="flex items-center gap-2">
          <i class="fa-solid fa-shield-halved text-cyan-400"></i> ${reward.status}
        </span>
        <span class="text-[11px] text-slate-500">Bugungi limit nazorati</span>
      </div>

      ${stats.detailsHtml ? `
        <div class="text-left bg-slate-900/50 p-4 rounded-xl border border-slate-800 mb-6 text-xs text-slate-300 space-y-1.5 max-h-48 overflow-y-auto">
          ${stats.detailsHtml}
        </div>
      ` : ''}

      <div class="flex flex-wrap items-center justify-center gap-3">
        <button onclick="renderNewGameStartScreen(${gameId}, document.getElementById('game-dynamic-content'))" class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20">
          <i class="fa-solid fa-rotate-left"></i> Qayta O'ynash
        </button>
        <button onclick="returnToGamesHub()" class="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-arrow-left"></i> Barcha O'yinlarga Qaytish
        </button>
      </div>

    </div>
  `;
}
window.renderNewGameResultScreen = renderNewGameResultScreen;

// =======================================================================
// O'YIN 8 (ID 21): DETEKTIV: KIM IFLOSLANTIRDI?
// Sxema: Hodisa -> Axlat qutilarini tekshir -> Dalillar daftari -> Aybdorni ayt -> Ish yopiladi
// =======================================================================

const DETECTIVE_CASES = [
  {
    id: "case-1",
    title: "Chirchiq Qirg'og'idagi Zaharli Kislota Oqishi",
    desc: "Chirchiq daryosi qirg'og'ida 500 litr zaharli akkumulyator kislotasi (Pb/H2SO4) to'kib ketilgan. Suvda baliqlar zaharlangan. Daryo yaqinidagi 4 ta korxona tekshirilmog'i darkor.",
    crimeLocation: "Chirchiq Daryosi Qirg'og'i, 4-hudud",
    crimeClue: "Akkumulyator kislotasi (H2SO4), qo'rg'oshin sulfat qoldiqlari va seriya raqami 'UZ-BAT-88' bo'lgan bo'sh kanistr qopqog'i.",
    suspects: [
      {
        id: "sus-1",
        name: "Shavkat Usta (Avtoservis & Akkumulyator)",
        role: "Kichik avtoservis rahbari",
        binItems: [
          { name: "Seriya raqami 'UZ-BAT-88' kislotali kanistr yorlig'i", isClue: true, desc: "Aynan voqea joyidagi qopqoqqa mos seriya raqami!" },
          { name: "Kislotadan kuygan rezina qo'lqop", isClue: true, desc: "H2SO4 kislotasi tekkan maxsus himoya qo'lqopi." },
          { name: "Moyli latta va eski tormoz kolodkasi", isClue: false, desc: "Oddiy avtomobil ehtiyot qismlari." }
        ],
        isGuilty: true,
        confession: "Ha, men aybdorman! Akkumulyator elektrolitlarini utilizatsiyaga topshirish qimmat bo'lgani sababli tunda daryo chetiga to'kib kelgandim. Qilmishimdan pushaymonman."
      },
      {
        id: "sus-2",
        name: "Murod Aka (Mebel ishlab chiqarish sexi)",
        role: "DSP va faner kesish ustasi",
        binItems: [
          { name: "Yog'och qipig'i va PVA yelimi", isClue: false, desc: "Mebel ishlab chiqarish organik chiqindilari." },
          { name: "Lenta va karton qutilar", isClue: false, desc: "Oddiy qadoqlar." }
        ],
        isGuilty: false
      },
      {
        id: "sus-3",
        name: "Dilnoza Opa (Tibbiy Diagnostika Markazi)",
        role: "Bosh hamshira",
        binItems: [
          { name: "Zararsizlantirilgan paxta va bintlar", isClue: false, desc: "Avtoklavdan o'tgan A-toifa chiqindilar." },
          { name: "Shprits qutisi (bo'sh karton)", isClue: false, desc: "Zararsiz qadoq." }
        ],
        isGuilty: false
      },
      {
        id: "sus-4",
        name: "Mansur (Fast-food va Restoran)",
        role: "Oshxona boshqaruvchisi",
        binItems: [
          { name: "Ishlatilgan o'simlik yog'i bochkasi", isClue: false, desc: "Yog'-moy chiqindisi, kislota emas." },
          { name: "Oziq-ovqat va salfetkalar", isClue: false, desc: "Oddiy maishiy chiqindi." }
        ],
        isGuilty: false
      }
    ]
  },
  {
    id: "case-2",
    title: "Yunusoboddagi Noqonuniy Tibbiy Chiqindi Uyumi",
    desc: "Aholi yashash massividagi chiqindixonaga B toifadagi xavfli qonli tomizgichlar va ishlatilgan shpritslar noqonuniy tashlab ketilgan. 4 gumondor tekshiriladi.",
    crimeLocation: "Yunusobod 12-mavze, Ochiq poligon",
    crimeClue: "Sariq rangli xavfli chiqindi qopchalari parchalari va 'Med-Lab Express' logotipli tahlil probirkasi qoldiqlari.",
    suspects: [
      {
        id: "sus-1",
        name: "Zokir (Dorixona mudiri)",
        role: "Dorixona tarmog'i egasi",
        binItems: [
          { name: "Muddati o'tgan aspirin va paratsetamol", isClue: false, desc: "Qattiq dori tabletkalari, tomizgich yoki qonli probirka emas." },
          { name: "Kassir cheklari va qog'ozlar", isClue: false, desc: "Ofis makulaturasi." }
        ],
        isGuilty: false
      },
      {
        id: "sus-2",
        name: "Dr. Alisher (Xususiy 'Med-Lab Express' laboratoriyasi)",
        role: "Klinik laboratoriya rahbari",
        binItems: [
          { name: "'Med-Lab Express' shtrix-kodli sariq qop bo'lagi", isClue: true, desc: "Voqea joyidagi qoplarga 100% mos keladi!" },
          { name: "B-toifali qon tahlili probirkalari qutisi", isClue: true, desc: "Utilizatsiya shartnomasisiz tashlab yuborilgan." },
          { name: "Spirtli paxta qoldiqlari", isClue: true, desc: "Zararsizlantirilmagan tibbiy chiqindi." }
        ],
        isGuilty: true,
        confession: "Laboratoriyamizda utilizatsiya pechi buzilib qolgani sababli sanitarga tunda chiqindixonaga tashlab kelishni buyurgan edim. Qonun oldida javob berishga tayyorman!"
      },
      {
        id: "sus-3",
        name: "Bahodir (Tish davolash stomatologiyasi)",
        role: "Stomatolog vrach",
        binItems: [
          { name: "Gips qoliplari va tish cho'tkalari", isClue: false, desc: "Xavfsiz gips chiqindilari." }
        ],
        isGuilty: false
      },
      {
        id: "sus-4",
        name: "Anvar (Veterinariya dorixonasi)",
        role: "Vet-klinika sotuvchisi",
        binItems: [
          { name: "Hayvonlar uchun vitamin qutilari", isClue: false, desc: "Zararsiz karton va plastik." }
        ],
        isGuilty: false
      }
    ]
  }
];

let activeDetective = {
  currentCase: null,
  inspectedBins: {},
  notebookClues: [],
  selectedSuspect: null,
  container: null,
  difficulty: 'medium'
};

function initDetectiveGame(container, difficulty = 'medium') {
  activeDetective.difficulty = difficulty;
  activeDetective.container = container;
  activeDetective.inspectedBins = {};
  activeDetective.notebookClues = [];
  activeDetective.selectedSuspect = null;

  // Pick random case
  const randomCase = DETECTIVE_CASES[Math.floor(Math.random() * DETECTIVE_CASES.length)];
  activeDetective.currentCase = JSON.parse(JSON.stringify(randomCase));

  renderDetectiveUI();
}

function renderDetectiveUI() {
  const c = activeDetective.container;
  const currentCase = activeDetective.currentCase;
  if (!c || !currentCase) return;

  c.innerHTML = `
    <div class="space-y-6 max-w-4xl mx-auto animate-fade-in">
      
      <!-- 1. HODISA JOVI VA XARITA (Map & Crime Scene) -->
      <div class="bg-slate-900 border-2 border-indigo-500/40 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span class="text-xs font-black uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30">
            <i class="fa-solid fa-shield-virus mr-1"></i> Bosqich 1: Tergov Hodisasi
          </span>
          <span class="text-xs font-bold text-slate-400">
            <i class="fa-solid fa-location-dot text-rose-400 mr-1"></i> ${currentCase.crimeLocation}
          </span>
        </div>

        <h3 class="text-xl sm:text-2xl font-black text-white mb-2">${currentCase.title}</h3>
        <p class="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">${currentCase.desc}</p>

        <!-- Crime Scene Clue Box -->
        <div class="bg-slate-950 p-4 rounded-2xl border border-rose-500/30 flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-lg shrink-0">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div>
            <span class="text-[11px] font-bold text-rose-400 uppercase block">Hodisa Joyidagi Asosiy Dalil Izlari:</span>
            <span class="text-xs text-white font-medium">${currentCase.crimeClue}</span>
          </div>
        </div>
      </div>

      <!-- 2. AXLAT QUTILARINI TEKSHIRISH (4 Suspects) -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-trash-can text-amber-400"></i> Bosqich 2: 4 Gumondorning Axlat Qutilarini Tekshiring
          </h4>
          <span class="text-xs text-slate-400">Tekshirildi: ${Object.keys(activeDetective.inspectedBins).length} / 4</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          ${currentCase.suspects.map(sus => {
            const isOpened = activeDetective.inspectedBins[sus.id];
            return `
              <div onclick="inspectSuspectBin('${sus.id}')" class="p-4 rounded-2xl border transition-all cursor-pointer ${isOpened ? 'bg-slate-900 border-indigo-500/60 shadow-lg' : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:scale-[1.01]'}">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl ${isOpened ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'} flex items-center justify-center text-sm font-bold">
                      <i class="fa-solid ${isOpened ? 'fa-box-open' : 'fa-box'}"></i>
                    </div>
                    <div>
                      <h5 class="text-xs font-black text-white">${sus.name}</h5>
                      <span class="text-[10px] text-slate-400">${sus.role}</span>
                    </div>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${isOpened ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'}">
                    ${isOpened ? "Tekshirildi" : "Qutini Ochish"}
                  </span>
                </div>

                ${isOpened ? `
                  <div class="mt-3 pt-3 border-t border-slate-800 space-y-1.5 text-xs animate-fade-in">
                    <span class="text-[10px] uppercase font-bold text-slate-500 block">Qutidagi buyumlar:</span>
                    ${sus.binItems.map(item => `
                      <div class="p-2 rounded-lg ${item.isClue ? 'bg-amber-500/10 border border-amber-500/30 text-amber-200' : 'bg-slate-800/50 text-slate-300'} flex items-start gap-2">
                        <i class="fa-solid ${item.isClue ? 'fa-magnifying-glass text-amber-400' : 'fa-circle-dot text-slate-500'} text-[10px] mt-0.5 shrink-0"></i>
                        <div>
                          <strong class="block text-[11px] font-bold">${item.name}</strong>
                          <span class="text-[10px] opacity-80">${item.desc}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <p class="text-[11px] text-slate-500 italic mt-1">Axlat qutisini ko'rish uchun bosing...</p>
                `}
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3. DALILLAR DAFTARI & 4. AYBDORNI AYT (Notebook & Verdict) -->
      <div class="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl">
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-book-bookmark text-cyan-400"></i> Bosqich 3: Dalillar Daftari va Ayblov
          </h4>
          <span class="text-xs font-bold text-cyan-400">Topilgan dalillar: ${activeDetective.notebookClues.length} ta</span>
        </div>

        <!-- Notebook items -->
        <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-5 min-h-[70px]">
          ${activeDetective.notebookClues.length === 0 ? `
            <p class="text-xs text-slate-500 italic text-center py-2">Hali dalillar yig'ilmadi. Gumondorlarning qutilarini tekshiring.</p>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              ${activeDetective.notebookClues.map(c => `
                <div class="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 flex items-center gap-2">
                  <i class="fa-solid fa-file-shield text-cyan-400"></i>
                  <span class="font-bold text-[11px]">${c}</span>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Accusation Buttons -->
        <div class="space-y-3">
          <span class="text-xs font-black uppercase text-slate-300 block">Bosqich 4: Rasmiy Aybdorni E'lon Qiling:</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${currentCase.suspects.map(sus => `
              <button onclick="accuseSuspect('${sus.id}')" class="p-3.5 rounded-xl border border-slate-700 bg-slate-950 hover:bg-indigo-600 hover:border-indigo-400 text-white font-bold text-xs transition-all text-left flex items-center justify-between cursor-pointer group">
                <span class="group-hover:translate-x-1 transition-transform">${sus.name}</span>
                <i class="fa-solid fa-gavel text-slate-500 group-hover:text-white"></i>
              </button>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}

function inspectSuspectBin(susId) {
  if (activeDetective.inspectedBins[susId]) return;
  activeDetective.inspectedBins[susId] = true;

  const sus = activeDetective.currentCase.suspects.find(s => s.id === susId);
  if (sus) {
    sus.binItems.forEach(item => {
      if (item.isClue && !activeDetective.notebookClues.includes(item.name)) {
        activeDetective.notebookClues.push(item.name);
      }
    });
  }

  if (window.ecoAudio) window.ecoAudio.playClick();
  renderDetectiveUI();
}
window.inspectSuspectBin = inspectSuspectBin;

function accuseSuspect(susId) {
  const currentCase = activeDetective.currentCase;
  const sus = currentCase.suspects.find(s => s.id === susId);
  if (!sus) return;

  const isCorrect = sus.isGuilty;

  let detailsHtml = '';
  if (isCorrect) {
    detailsHtml = `
      <p class="text-emerald-400 font-bold mb-1"><i class="fa-solid fa-check-double mr-1"></i> Tergov Xulosasi: Ayblov 100% to'g'ri isbotlandi!</p>
      <p class="text-slate-300 mb-2"><strong>Aybdorning iqrori:</strong> "${sus.confession}"</p>
      <p class="text-slate-400"><strong>Asosiy isbot:</strong> Hodisa joyidagi dalillar aynan ${sus.name} ning axlat qutisidagi seriya raqamlari bilan mos tushdi.</p>
    `;
  } else {
    const realCulprit = currentCase.suspects.find(s => s.isGuilty);
    detailsHtml = `
      <p class="text-rose-400 font-bold mb-1"><i class="fa-solid fa-xmark mr-1"></i> Xato Ayblov: ${sus.name} begunoh bo'lib chiqdi!</p>
      <p class="text-slate-300 mb-2">Uning axlat qutisida faqat korxonaga xos zararsiz qoldiqlar bor edi.</p>
      <p class="text-slate-400"><strong>Haqiqiy aybdor:</strong> ${realCulprit.name}. Uning qutisida jinoyat izlari bor edi.</p>
    `;
  }

  renderNewGameResultScreen(21, isCorrect, {
    scoreText: isCorrect ? "Ish Muvaffaqiyatli Yopildi" : "Tergov Qaytarildi",
    message: isCorrect ? "Siz ekologik tergovni namunali olib bordingiz va jinoyatni fosh etdingiz!" : "Noto'g'ri odam ayblandi. Dalillar daftarini diqqat bilan o'rganing.",
    detailsHtml: detailsHtml
  }, activeDetective.container);
}
window.accuseSuspect = accuseSuspect;

// =======================================================================
// O'YIN 9 (ID 22): KOSMIK KEMA RESURSLARI
// Sxema: Chiqindi to'planadi -> Blok tanla -> Resurs qaytadi -> Kema tirik -> Sayyoraga yetish
// =======================================================================

const SPACESHIP_WASTES = [
  {
    name: "Gidroponika ildizlari va oziq-ovqat qoldiqlari",
    amount: "15 kg",
    correctBlock: 1, // Algae
    resourceGain: { o2: 20, energy: 5, water: 5 },
    explain: "Biologik Algae reaktori organikadan toza Kislorod (O2) va biomassa ishlab chiqaradi."
  },
  {
    name: "Ekipaj dush suvi va nam havo kondensati",
    amount: "40 litr",
    correctBlock: 2, // Hydro-Membrane
    resourceGain: { o2: 5, energy: 0, water: 30 },
    explain: "Gidroliz va membrana filtrlari oqova suvdan 100% toza ichimlik Suvini qaytaradi."
  },
  {
    name: "Eski sintetik qadoqlar va polimer plenka",
    amount: "25 kg",
    correctBlock: 3, // Plasma Gasifier
    resourceGain: { o2: -5, energy: 25, water: 0 },
    explain: "Plazma gazifikatori polimerlarni yuqori haroratda parchalab sof Elektr Energiyasi beradi."
  },
  {
    name: "Buzilgan datchik platalari va mis kabellar",
    amount: "10 kg",
    correctBlock: 4, // 3D Metal Synthesizer
    resourceGain: { o2: 0, energy: 15, water: 0 },
    explain: "Metall va chiplar molekulyar shrederda maydalanib ehtiyot qismlarga aylanadi va energiya tejaydi."
  },
  {
    name: "Laboratoriya biomassasi va quruq sellyuloza",
    amount: "18 kg",
    correctBlock: 1, // Algae
    resourceGain: { o2: 25, energy: 5, water: 0 },
    explain: "Sellyuloza va o'simlik qoldiqlari xlorella fotosintezini jadallashtirib O2 beradi."
  },
  {
    name: "Texnik sovutish suyuqligi va bug' qoldiqlari",
    amount: "30 litr",
    correctBlock: 2, // Hydro-Membrane
    resourceGain: { o2: 0, energy: 5, water: 25 },
    explain: "Teskari osmos membranalari texnik bug'larni toza suv zaxirasiga aylantiradi."
  },
  {
    name: "Kiyilgan kosmik kostyum va kompozit rezina",
    amount: "12 kg",
    correctBlock: 3, // Plasma Gasifier
    resourceGain: { o2: 0, energy: 30, water: 0 },
    explain: "Kompozit va rezinalar plazma reaktorida sintez gaziga aylanib reaktorga quvvat beradi."
  },
  {
    name: "Kuygan quyosh paneli ramkasi va titan boltlar",
    amount: "8 kg",
    correctBlock: 4, // 3D Metal Synthesizer
    resourceGain: { o2: 0, energy: 20, water: 0 },
    explain: "Titan va alyuminiy qayta eritilib kosmik kema korpusini ta'mirlashga yo'naltiriladi."
  }
];

let activeSpaceship = {
  oxygen: 80,
  energy: 80,
  water: 80,
  distanceAU: 8, // Target: reaches 0 to win
  currentWasteIdx: 0,
  container: null,
  difficulty: 'medium',
  history: []
};

function initSpaceshipGame(container, difficulty = 'medium') {
  activeSpaceship.difficulty = difficulty;
  activeSpaceship.container = container;
  activeSpaceship.currentWasteIdx = 0;
  activeSpaceship.distanceAU = 8;
  activeSpaceship.history = [];

  if (difficulty === 'easy') {
    activeSpaceship.oxygen = 100;
    activeSpaceship.energy = 100;
    activeSpaceship.water = 100;
  } else if (difficulty === 'medium') {
    activeSpaceship.oxygen = 80;
    activeSpaceship.energy = 80;
    activeSpaceship.water = 80;
  } else {
    activeSpaceship.oxygen = 65;
    activeSpaceship.energy = 65;
    activeSpaceship.water = 65;
  }

  renderSpaceshipUI();
}

function renderSpaceshipUI() {
  const c = activeSpaceship.container;
  if (!c) return;

  const waste = SPACESHIP_WASTES[activeSpaceship.currentWasteIdx];

  c.innerHTML = `
    <div class="space-y-6 max-w-4xl mx-auto animate-fade-in">
      
      <!-- HUD / Life Support Meters -->
      <div class="bg-slate-900 border-2 border-blue-500/40 rounded-3xl p-5 sm:p-6 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs font-black uppercase text-white tracking-wider">Kema Nazorat Paneli: 'Akosh-Explorer 1'</span>
          </div>
          <span class="text-xs font-bold text-cyan-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
            Sayyoragacha masofa: ${activeSpaceship.distanceAU} AU (Bosqich ${activeSpaceship.currentWasteIdx + 1} / 8)
          </span>
        </div>

        <!-- 3 Meters -->
        <div class="grid grid-cols-3 gap-3 text-center">
          <!-- Oxygen -->
          <div class="bg-slate-950 p-3 rounded-2xl border ${activeSpaceship.oxygen < 30 ? 'border-rose-500 animate-pulse' : 'border-slate-800'}">
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="text-slate-400 font-bold"><i class="fa-solid fa-lungs text-cyan-400 mr-1"></i> Kislorod (O2)</span>
              <span class="font-black text-cyan-300">${activeSpaceship.oxygen}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-cyan-400 h-full transition-all duration-300" style="width: ${Math.min(100, Math.max(0, activeSpaceship.oxygen))}%"></div>
            </div>
          </div>

          <!-- Energy -->
          <div class="bg-slate-950 p-3 rounded-2xl border ${activeSpaceship.energy < 30 ? 'border-rose-500 animate-pulse' : 'border-slate-800'}">
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="text-slate-400 font-bold"><i class="fa-solid fa-bolt text-amber-400 mr-1"></i> Energiya</span>
              <span class="font-black text-amber-300">${activeSpaceship.energy}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-amber-400 h-full transition-all duration-300" style="width: ${Math.min(100, Math.max(0, activeSpaceship.energy))}%"></div>
            </div>
          </div>

          <!-- Water -->
          <div class="bg-slate-950 p-3 rounded-2xl border ${activeSpaceship.water < 30 ? 'border-rose-500 animate-pulse' : 'border-slate-800'}">
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="text-slate-400 font-bold"><i class="fa-solid fa-droplet text-blue-400 mr-1"></i> Toza Suv</span>
              <span class="font-black text-blue-300">${activeSpaceship.water}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-blue-400 h-full transition-all duration-300" style="width: ${Math.min(100, Math.max(0, activeSpaceship.water))}%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Current Generated Waste Card -->
      <div class="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl text-center">
        <span class="text-xs font-black uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
          <i class="fa-solid fa-box-archive mr-1"></i> Yangi Hosil Bo'lgan Kosmik Chiqindi
        </span>
        <h3 class="text-xl sm:text-2xl font-black text-white mt-3 mb-1">${waste.name}</h3>
        <p class="text-xs text-slate-400 mb-6">Hajmi: <strong class="text-white">${waste.amount}</strong>. Ushbu chiqindini qayta ishlash uchun to'g'ri reaktor blokini tanlang:</p>

        <!-- 4 Processing Blocks -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          
          <button onclick="processSpaceshipWaste(1)" class="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-950/20 transition-all cursor-pointer group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                🌱
              </div>
              <div>
                <h5 class="text-xs font-black text-white group-hover:text-emerald-400 transition-colors">1. Biologik Algae-Reaktor</h5>
                <span class="text-[10px] text-slate-400">Organika va oziq-ovqat -> O2 Kislorod & Biomassa</span>
              </div>
            </div>
          </button>

          <button onclick="processSpaceshipWaste(2)" class="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-950/20 transition-all cursor-pointer group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                💧
              </div>
              <div>
                <h5 class="text-xs font-black text-white group-hover:text-blue-400 transition-colors">2. Gidroliz & Membrana Filtrlash</h5>
                <span class="text-[10px] text-slate-400">Oqova suv va kondensat -> 100% Ichimlik Suvi</span>
              </div>
            </div>
          </button>

          <button onclick="processSpaceshipWaste(3)" class="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500 hover:bg-amber-950/20 transition-all cursor-pointer group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <div>
                <h5 class="text-xs font-black text-white group-hover:text-amber-400 transition-colors">3. Plazma Gazifikatori</h5>
                <span class="text-[10px] text-slate-400">Plastik va polimerlar -> Sof Elektr Energiyasi</span>
              </div>
            </div>
          </button>

          <button onclick="processSpaceshipWaste(4)" class="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500 hover:bg-purple-950/20 transition-all cursor-pointer group">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <div>
                <h5 class="text-xs font-black text-white group-hover:text-purple-400 transition-colors">4. Metall 3D-Sintezator</h5>
                <span class="text-[10px] text-slate-400">E-waste va metallar -> Kema ehtiyot qismlari & Tejamkorlik</span>
              </div>
            </div>
          </button>

        </div>
      </div>

    </div>
  `;
}

function processSpaceshipWaste(blockNumber) {
  const waste = SPACESHIP_WASTES[activeSpaceship.currentWasteIdx];
  const isCorrect = (blockNumber === waste.correctBlock);

  if (isCorrect) {
    activeSpaceship.oxygen = Math.min(100, activeSpaceship.oxygen + (waste.resourceGain.o2 || 0));
    activeSpaceship.energy = Math.min(100, activeSpaceship.energy + (waste.resourceGain.energy || 0));
    activeSpaceship.water = Math.min(100, activeSpaceship.water + (waste.resourceGain.water || 0));
    activeSpaceship.distanceAU--;
    activeSpaceship.history.push({ name: waste.name, ok: true, note: waste.explain });
    if (window.ecoAudio) window.ecoAudio.playClick();
  } else {
    const penalty = activeSpaceship.difficulty === 'hard' ? 25 : 18;
    activeSpaceship.oxygen = Math.max(0, activeSpaceship.oxygen - penalty);
    activeSpaceship.energy = Math.max(0, activeSpaceship.energy - penalty);
    activeSpaceship.water = Math.max(0, activeSpaceship.water - penalty);
    activeSpaceship.history.push({ name: waste.name, ok: false, note: "Noto'g'ri blok! Filtr tiqildi va resurslar yo'qotildi." });
    if (window.ecoAudio) window.ecoAudio.playError();
  }

  // Check Game Over
  if (activeSpaceship.oxygen <= 0 || activeSpaceship.energy <= 0 || activeSpaceship.water <= 0) {
    renderNewGameResultScreen(22, false, {
      scoreText: "Kema Resurslari Tugadi",
      message: "Kosmik kemaning hayotni ta'minlash tizimi to'xtadi. Chiqindilarni to'g'ri qayta ishlash bloklariga yo'naltiring.",
      detailsHtml: activeSpaceship.history.map((h, i) => `<p class="${h.ok ? 'text-emerald-400' : 'text-rose-400'}">${i + 1}. ${h.name}: ${h.note}</p>`).join('')
    }, activeSpaceship.container);
    return;
  }

  activeSpaceship.currentWasteIdx++;

  // Check Victory
  if (activeSpaceship.currentWasteIdx >= SPACESHIP_WASTES.length || activeSpaceship.distanceAU <= 0) {
    renderNewGameResultScreen(22, true, {
      scoreText: "Yangi Sayyoraga Yetib Borildi!",
      message: "Tabriklaymiz! Siz kemadagi yopiq ekologik siklni 100% muvaffaqiyatli boshqarib 'Terra Nova' yangi yashil sayyorasiga yetib keldingiz!",
      detailsHtml: activeSpaceship.history.map((h, i) => `<p class="${h.ok ? 'text-emerald-400' : 'text-rose-400'}">${i + 1}. ${h.name}: ${h.note}</p>`).join('')
    }, activeSpaceship.container);
    return;
  }

  renderSpaceshipUI();
}
window.processSpaceshipWaste = processSpaceshipWaste;

// =======================================================================
// O'YIN 10 (ID 23): CHIQINDI BOZORI & EKO-BIZNES
// Sxema: Yig'ish -> Saralash -> Sotish -> Daromad -> Loyiha sotib olish
// =======================================================================

const MARKET_BUYERS = [
  {
    id: "buyer-1",
    name: "Toshkent Qog'oz Fabrikasi",
    demands: "Karton va Makulatura (100% quruq)",
    price: 60,
    acceptedType: "paper",
    icon: "fa-newspaper"
  },
  {
    id: "buyer-2",
    name: "Eko-Plast Granula Zavodi",
    demands: "PET Shaffof Butilkalar (qopqoqsiz)",
    price: 80,
    acceptedType: "plastic",
    icon: "fa-bottle-water"
  },
  {
    id: "buyer-3",
    name: "Rangli Metallurgiya Klasteri",
    demands: "Alyuminiy Ichimlik Qutilari",
    price: 100,
    acceptedType: "metal",
    icon: "fa-can-food"
  },
  {
    id: "buyer-4",
    name: "Shisha Ikkilamchi Zavodi",
    demands: "Rangli va Oq Shisha Kullet",
    price: 70,
    acceptedType: "glass",
    icon: "fa-wine-bottle"
  }
];

const GREEN_PROJECTS = [
  {
    id: "proj-1",
    name: "Shahar Markaziy Bog'iga 100 Tup Chinor Ekish",
    cost: 120,
    icon: "fa-tree",
    desc: "Shaharda har yili 2.5 tonna CO2 yutiladi va havoni tozalaydi."
  },
  {
    id: "proj-2",
    name: "Quyosh Quvvatli Avtomat Saralash Konveyeri",
    cost: 200,
    icon: "fa-solar-panel",
    desc: "Eko-bozoringiz quvvatini oshirib, chiqindi saralashni 2 barobar tezlashtiradi."
  },
  {
    id: "proj-3",
    name: "Chirchiq Daryosiga Chiqindi Ushlovchi Aqlli To'r",
    cost: 320,
    icon: "fa-water",
    desc: "Daryoga oqib tushayotgan 95% suzuvchi plastiklarni to'xtatib qoladi."
  }
];

let activeMarket = {
  coins: 80, // Balanced starting capital
  inventory: [
    { id: 1, type: "paper", name: "Toza Karton Qutilar", isClean: true },
    { id: 2, type: "plastic", name: "PET Shaffof Butilkalar", isClean: true },
    { id: 3, type: "metal", name: "Alyuminiy Ichimlik Qutilari", isClean: true },
    { id: 4, type: "plastic", name: "Moyli Iflos Plastik Idish", isClean: false },
    { id: 5, type: "glass", name: "Toza Shisha Butilkalar", isClean: true }
  ],
  purchasedProjects: [],
  container: null,
  difficulty: 'medium',
  dealsCount: 0
};

function initWasteMarketGame(container, difficulty = 'medium') {
  activeMarket.difficulty = difficulty;
  activeMarket.container = container;
  activeMarket.purchasedProjects = [];
  activeMarket.dealsCount = 0;

  if (difficulty === 'easy') {
    activeMarket.coins = 120;
  } else if (difficulty === 'medium') {
    activeMarket.coins = 80;
  } else {
    activeMarket.coins = 40;
  }

  activeMarket.inventory = [
    { id: 1, type: "paper", name: "Toza Karton Qutilar", isClean: true },
    { id: 2, type: "plastic", name: "PET Shaffof Butilkalar", isClean: true },
    { id: 3, type: "metal", name: "Alyuminiy Ichimlik Qutilari", isClean: true },
    { id: 4, type: "plastic", name: "Moyli Iflos Plastik Idish (Yuvish kerak)", isClean: false },
    { id: 5, type: "glass", name: "Toza Shisha Butilkalar", isClean: true },
    { id: 6, type: "paper", name: "Pechka uchun Yog'li Qog'oz", isClean: false }
  ];

  renderWasteMarketUI();
}

function renderWasteMarketUI() {
  const c = activeMarket.container;
  if (!c) return;

  c.innerHTML = `
    <div class="space-y-6 max-w-4xl mx-auto animate-fade-in">
      
      <!-- Market Balance & Status -->
      <div class="bg-slate-900 border-2 border-teal-500/40 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-black uppercase text-teal-400 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30">
            Eko-Bozor Boshqaruvi
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-white mt-2">Yashil Chiqindi Birjasi</h3>
          <p class="text-xs text-slate-400">Saralang, xaridorlarga soting va daromadga shahar ekologik loyihalarini sotib oling.</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="bg-slate-950 px-4 py-2.5 rounded-2xl border border-slate-800 text-right">
            <span class="text-[10px] text-slate-400 uppercase font-bold block">Bozor Mablag'i:</span>
            <span class="text-xl font-black text-teal-400 flex items-center justify-end gap-1">
              <i class="fa-solid fa-coins text-amber-400"></i> ${activeMarket.coins} Eco-Coin
            </span>
          </div>
        </div>
      </div>

      <!-- 1. OM BOR: Saralash va Yuvish -->
      <div class="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-boxes-stacked text-amber-400"></i> Omboringizdagi Xomashyo Partiyalari
          </h4>
          <span class="text-xs text-slate-400">Partiyalar: ${activeMarket.inventory.length} ta</span>
        </div>

        ${activeMarket.inventory.length === 0 ? `
          <div class="text-center py-6">
            <p class="text-xs text-slate-400 mb-3">Omborda chiqindi qolmadi! Yangi partiyalarni qabul qilish mumkin.</p>
            <button onclick="restockMarketWaste()" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs transition-all cursor-pointer">
              + Yangi Chiqindi Partiyalarini Yig'ish (15 Eco-Coin)
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            ${activeMarket.inventory.map(item => `
              <div class="p-3.5 rounded-2xl border ${item.isClean ? 'bg-slate-900 border-slate-800' : 'bg-rose-950/20 border-rose-500/30'} flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${item.isClean ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">
                      ${item.isClean ? "Toza (1-nav)" : "Ifloslangan (2-nav)"}
                    </span>
                    <span class="text-[10px] text-slate-500 uppercase font-semibold">${item.type}</span>
                  </div>
                  <h5 class="text-xs font-bold text-white mb-2">${item.name}</h5>
                </div>

                <div class="flex items-center gap-2 pt-2 border-t border-slate-800">
                  ${!item.isClean ? `
                    <button onclick="cleanMarketItem(${item.id})" class="flex-1 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-[10px] font-bold transition-all cursor-pointer">
                      Yuvish & Tozalash (5 tanga)
                    </button>
                  ` : `
                    <span class="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <i class="fa-solid fa-circle-check"></i> Sotishga tayyor
                    </span>
                  `}
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- 2. B2B XARIDORLAR BUYURTMALARI -->
      <div class="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl">
        <h4 class="text-sm font-black text-white uppercase tracking-wider mb-3 flex items-center gap-2">
          <i class="fa-solid fa-handshake text-cyan-400"></i> Korxona Xaridorlari va B2B Shartnomalar
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${MARKET_BUYERS.map(b => `
            <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h5 class="text-xs font-bold text-white flex items-center gap-1.5">
                    <i class="fa-solid ${b.icon} text-teal-400"></i> ${b.name}
                  </h5>
                  <span class="text-xs font-black text-amber-400">+${b.price} Eco-Coin</span>
                </div>
                <p class="text-[11px] text-slate-400 mb-3">Talab: <strong class="text-slate-300">${b.demands}</strong></p>
              </div>

              <button onclick="sellToBuyer('${b.id}')" class="w-full py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-teal-500/10">
                Ushbu Korxonaga Xomashyo Sotish
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. EKOLOGIK LOYIHALAR DOKONI -->
      <div class="bg-slate-900 border-2 border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-city text-emerald-400"></i> Shahar Ekologik Loyihalari Do'koni
          </h4>
          <span class="text-xs font-bold text-emerald-400">Amalga oshirildi: ${activeMarket.purchasedProjects.length} / 3</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${GREEN_PROJECTS.map(p => {
            const isBought = activeMarket.purchasedProjects.includes(p.id);
            return `
              <div class="p-4 rounded-2xl border ${isBought ? 'bg-emerald-950/20 border-emerald-500/60' : 'bg-slate-950 border-slate-800'} flex flex-col justify-between text-center">
                <div>
                  <div class="w-12 h-12 mx-auto rounded-2xl ${isBought ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'} flex items-center justify-center text-xl mb-2">
                    <i class="fa-solid ${p.icon}"></i>
                  </div>
                  <h5 class="text-xs font-bold text-white mb-1">${p.name}</h5>
                  <p class="text-[10px] text-slate-400 mb-3">${p.desc}</p>
                </div>

                ${isBought ? `
                  <span class="py-2 bg-emerald-500/20 text-emerald-400 rounded-xl text-xs font-black border border-emerald-500/40">
                    <i class="fa-solid fa-check mr-1"></i> Sotib Olingan
                  </span>
                ` : `
                  <button onclick="buyGreenProject('${p.id}', ${p.cost})" class="py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black transition-all cursor-pointer shadow-md">
                    Sotib Olish (${p.cost} Eco-Coin)
                  </button>
                `}
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;
}

function cleanMarketItem(itemId) {
  if (activeMarket.coins < 5) {
    if (typeof showToast === 'function') showToast("Yuvish uchun 5 Eco-Coin yetarli emas!");
    return;
  }
  const item = activeMarket.inventory.find(i => i.id === itemId);
  if (item && !item.isClean) {
    activeMarket.coins -= 5;
    item.isClean = true;
    item.name = item.name.replace(" (Yuvish kerak)", "").replace(" (Moyli)", "") + " (Yuvilgan, toza)";
    if (window.ecoAudio) window.ecoAudio.playClick();
    renderWasteMarketUI();
  }
}
window.cleanMarketItem = cleanMarketItem;

function restockMarketWaste() {
  if (activeMarket.coins < 15) {
    if (typeof showToast === 'function') showToast("Yangi partiyalar sotib olishga 15 Eco-Coin yetarli emas!");
    return;
  }
  activeMarket.coins -= 15;
  activeMarket.inventory.push(
    { id: Date.now() + 1, type: "paper", name: "Makulatura Kitoblar", isClean: true },
    { id: Date.now() + 2, type: "plastic", name: "HDPE Plastik Kanistrlar", isClean: true },
    { id: Date.now() + 3, type: "metal", name: "Alyuminiy Profil Sinig'i", isClean: true }
  );
  if (window.ecoAudio) window.ecoAudio.playClick();
  renderWasteMarketUI();
}
window.restockMarketWaste = restockMarketWaste;

function sellToBuyer(buyerId) {
  const buyer = MARKET_BUYERS.find(b => b.id === buyerId);
  if (!buyer) return;

  // Find matching item in inventory
  const matchIdx = activeMarket.inventory.findIndex(item => item.type === buyer.acceptedType);

  if (matchIdx === -1) {
    if (typeof showToast === 'function') showToast(`${buyer.name} faqat ${buyer.acceptedType} qabul qiladi! Omborda topilmadi.`);
    if (window.ecoAudio) window.ecoAudio.playError();
    return;
  }

  const item = activeMarket.inventory[matchIdx];

  if (!item.isClean) {
    // Rejected! Fine applied!
    activeMarket.coins = Math.max(0, activeMarket.coins - 20);
    if (typeof showToast === 'function') showToast(`Xaridor rad etdi! "${item.name}" ifloslangan. 20 tanga jarima solindi.`);
    if (window.ecoAudio) window.ecoAudio.playError();
    renderWasteMarketUI();
    return;
  }

  // Successful Sale!
  activeMarket.inventory.splice(matchIdx, 1);
  activeMarket.coins += buyer.price;
  activeMarket.dealsCount++;
  if (typeof showToast === 'function') showToast(`Muvaffaqiyatli sotildi! +${buyer.price} Eco-Coin tushdi.`);
  if (window.ecoAudio) window.ecoAudio.playSuccess();

  renderWasteMarketUI();
}
window.sellToBuyer = sellToBuyer;

function buyGreenProject(projId, cost) {
  if (activeMarket.coins < cost) {
    if (typeof showToast === 'function') showToast(`Ushbu loyiha uchun ${cost} Eco-Coin kerak! Sizda: ${activeMarket.coins} tanga.`);
    if (window.ecoAudio) window.ecoAudio.playError();
    return;
  }

  activeMarket.coins -= cost;
  activeMarket.purchasedProjects.push(projId);
  if (window.ecoAudio) window.ecoAudio.playLevelUp();

  if (activeMarket.purchasedProjects.length >= GREEN_PROJECTS.length) {
    // Victory!
    renderNewGameResultScreen(23, true, {
      scoreText: "Eko-Bozor Giganti!",
      message: "Tabriklaymiz! Siz barcha 3 ta yirik ekologik loyihani muvaffaqiyatli moliyalashtirib shaharni toza va yashil qildingiz!",
      detailsHtml: `
        <p class="text-emerald-400 font-bold mb-1">Amalga oshirilgan loyihalar:</p>
        <p class="text-slate-300">1. Shahar markaziy bog'iga 100 tup chinor ekildi.</p>
        <p class="text-slate-300">2. Quyosh quvvatli avtomat saralash zavodi ishga tushirildi.</p>
        <p class="text-slate-300">3. Chirchiq daryosiga aqlli to'rlar o'rnatildi.</p>
      `
    }, activeMarket.container);
    return;
  }

  renderWasteMarketUI();
}
window.buyGreenProject = buyGreenProject;

// =======================================================================
// STANDARD INTERACTIVE SIMULATORS (GAMES 14 TO 20)
// Complete 3-difficulty questions and multi-step interactive engines
// =======================================================================

const STANDARD_NEW_GAMES_DATA = {
  14: {
    scenarios: [
      {
        title: "Konveyerda Plastik va Shisha Saralash",
        param: "Tezlik: 1.2 m/s | Chiqindi: PET Butilka",
        question: "Konveyerdan o'tayotgan shaffof PET idish qaysi rangli qutiga tashlanishi kerak?",
        options: ["Sariq quti (Plastik va polimerlar)", "Ko'k quti (Qog'oz)", "Qizil quti (Xavfli batareyalar)"],
        correct: 0,
        hint: "Sariq rangli quti barcha toza plastik idishlar uchun xalqaro standart hisoblanadi."
      },
      {
        title: "Konveyerda Alyuminiy Banka",
        param: "Tezlik: 1.5 m/s | Chiqindi: Gazlangan ichimlik qutisi",
        question: "Alyuminiy metall qutisini qaysi konteynerga ajratasiz?",
        options: ["Yashil yoki sariq quti (Qayta ishlanuvchi metall/qadoq)", "Jigarrang quti (Organika)", "Maxsus tibbiy qop"],
        correct: 0,
        hint: "Metall qutilar magnit va uyurma tokli separatorlar bilan ajratiladi."
      }
    ]
  },
  15: {
    scenarios: [
      {
        title: "Gidravlik Press Boshqaruvi",
        param: "Bosim: 180 Bar | Namlik: 10%",
        question: "Karton qutilarni briketlashda eng optimal gidravlik bosim qanday bo'lishi kerak?",
        options: ["160 - 200 bar oralig'ida siqish (1:5 zichlik)", "500 bar dan yuqori (mashina motorini qizdirish)", "Bosimsiz oddiy qoplash"],
        correct: 0,
        hint: "160-200 bar bosim transport xarajatini 4 barobar qisqartiradigan zich briket beradi."
      },
      {
        title: "Pichoqli Shrederda Plastik Maydalash",
        param: "Fraktsiya: 10-12 mm | Harorat: 40°C",
        question: "Qattiq polietilen quvurlarni shrederdan o'tkazishda pichoqlar qizib ketmasligi uchun nima zarur?",
        options: ["Suv bilan sovutish va siklli yuklama berish", "Mashinani to'xtatmasdan 24 soat to'liq kuchda ishlatish", "Plastik ustiga benzin quyish"],
        correct: 0,
        hint: "Suv sovutgichli pichoqlar polimer erib pichoqqa yopishib qolishini oldini oladi."
      }
    ]
  },
  16: {
    scenarios: [
      {
        title: "Teskari Osmos (Reverse Osmosis) Filtrlari",
        param: "TDS: 14000 mg/l | pH: 6.2",
        question: "Poligon filtratidagi og'ir tuzlarni tozalashda necha bosqichli membrana qo'llaniladi?",
        options: ["2 bosqichli yuqori bosimli (65-80 bar) diskli teskari osmos", "Faqat oddiy qum filtri", "Xlor quyib to'g'ridan-to'g'ri daryoga oqizish"],
        correct: 0,
        hint: "DTRO (Disc Tube Reverse Osmosis) og'ir tuzlarni 98.5% gacha tozalaydi."
      },
      {
        title: "Aerotenka va Faol Loy (Active Sludge)",
        param: "Kislorod: 2.5 mg/l | XPK: 3500 mg/l",
        question: "Organik moddalarni parchalovchi mikroorganizmlar uchun aeratenkaga nima uzluksiz berilishi shart?",
        options: ["Kompressor orqali siqilgan havo (Kislorod)", "Muzdek xom neft", "Antibiotik preparatlari"],
        correct: 0,
        hint: "Aerob bakteriyalar ifloslikni parchalashi uchun erigan kislorod 2 mg/l dan past bo'lmasligi lozim."
      }
    ]
  },
  17: {
    scenarios: [
      {
        title: "B-Toifali Yuqumli Tibbiy Chiqindilar",
        param: "Harorat: 134°C | Bosim: 3.2 Bar",
        question: "Shifoxonadagi ishlatilgan shprits va qonli bintlarni utilizatsiya qilishdan oldin qaysi apparatda zararsizlantirish shart?",
        options: ["134°C haroratli bug'li avtoklavda 45 daqiqa", "Oddiy maishiy axlat qutisiga tashlash", "Suvda yuvib qayta ishlatish"],
        correct: 0,
        hint: "Avtoklavlash barcha virus va bakteriya sporalarini to'liq yo'q qiladi."
      },
      {
        title: "Tibbiyot Chiqindilari Rangli Kodlanishi",
        param: "A, B, C, D toifalar",
        question: "O'zbekiston SanQvaM me'yorlariga ko'ra o'ta xavfli yuqumli chiqindilar qaysi rangdagi maxsus qoplarga solinadi?",
        options: ["Sariq rangli qop va konteynerlarga", "Oq rangli sellofan paketga", "Oddiy qog'oz gazetaga"],
        correct: 0,
        hint: "Sariq rang — xavfli tibbiyot chiqindilarining xalqaro ogohlantiruvchi belgisidir."
      }
    ]
  },
  18: {
    scenarios: [
      {
        title: "Kislorodsiz Termik Piroliz Reaktori",
        param: "Harorat: 450°C | Bosim: 1.2 atm",
        question: "Qayta ishlanmaydigan polimerlardan sintetik neft olish jarayonida nima sababdan reaktorda kislorod bo'lmasligi shart?",
        options: ["Portlash va yonishni oldini olish, uglevodorodlarni gaz holiga keltirish uchun", "Kislorod bo'lsa arzonroq bo'lishi uchun", "Plastik rangi o'zgarmasligi uchun"],
        correct: 0,
        hint: "Kislorod ishtirokida plastmassa yonib kul bo'ladi, kislorodsiz esa suyuq yoqilg'iga parchalanadi."
      },
      {
        title: "Piroliz Gazlarini Tozalash Skrubberi",
        param: "Reagent: Ishqoriy eritma (NaOH)",
        question: "Plastik tarkibidagi xlor (PVX) parchalanganda ajraladigan HCl kislotasini zararsizlantirish uchun nima qo'shiladi?",
        options: ["Ishqoriy neytrallovchi skrubber (NaOH)", "Distillangan toza spirt", "Ko'mir kuli"],
        correct: 0,
        hint: "Ishqor kislotali gazlarni neytrallab zararsiz tuz hosil qiladi."
      }
    ]
  },
  19: {
    scenarios: [
      {
        title: "Shisha Kullet (Glass Cullet) Eritish",
        param: "Harorat: 1400°C | Tejamkorlik: 30%",
        question: "Shisha zavodida xom qum o'rniga singan shisha (kullet) qo'shilganda nima yutug'i bor?",
        options: ["Eritish harorati pasayadi va energiya sarfi 30% tejladi", "Shisha sifati yomonlashadi", "Pech tezroq sinadi"],
        correct: 0,
        hint: "Kullet qumga qaraganda pastroq haroratda eriydi va CO2 chiqishini kamaytiradi."
      },
      {
        title: "Alyuminiy Qayta Eritish (Secondary Smelting)",
        param: "Harorat: 660°C | Tejamkorlik: 95%",
        question: "Boksit ma'danidan yangi alyuminiy olishga qaraganda chiqindi bankalarni qayta eritish necha foiz elektrni tejaydi?",
        options: ["95% elektr energiyasi tejaladi", "Atigi 5% tejaladi", "Hech qanday farqi yo'q"],
        correct: 0,
        hint: "Alyuminiyni ikkilamchi eritish dunyodagi eng energiya tejamkor metallurgiya jarayonidir."
      }
    ]
  },
  20: {
    scenarios: [
      {
        title: "Bokashi Kompostlash Usuli",
        param: "Xonadon oshxonasi | Ferment: Bokashi kepagi",
        question: "Kvartira sharoitida oziq-ovqat chiqindilaridan hid chiqarmasdan bio-gumus tayyorlash uchun nima qo'llaniladi?",
        options: ["EM (Effektiv mikroorganizmlar) li Bokashi chelagi", "Oshxona o'rtasiga ochiq uyum qilib to'kish", "Chiqindini xona haroratida qaynatish"],
        correct: 0,
        hint: "Bokashi fermentatsiyasi anaerob tarzda hid chiqarmay ovqat qoldiqlarini 14 kunda ozuqaga aylantiradi."
      },
      {
        title: "Bir Martalik Buyumlardan Voz Kechish",
        param: "Zero Waste qoidasi: Refuse (Rad etish)",
        question: "Do'kondan xarid qilishda ekologik toza tanlov qaysi?",
        options: ["Ko'p martalik matoli sumka (shoper) va shisha idish", "Har safar 5 tadan polietilen paket sotib olish", "Bir marta ishlatiladigan plastik stakanlar"],
        correct: 0,
        hint: "Bitta matoli shoper yiliga 500 dan ortiq plastik paketlarni poligonlarga tushishdan saqlab qoladi."
      }
    ]
  }
};

let activeStandardSession = {
  gameId: null,
  difficulty: 'medium',
  currentIndex: 0,
  score: 0,
  container: null
};

function initStandardNewInteractiveGame(gameId, container, difficulty = 'medium') {
  activeStandardSession.gameId = gameId;
  activeStandardSession.difficulty = difficulty;
  activeStandardSession.currentIndex = 0;
  activeStandardSession.score = 0;
  activeStandardSession.container = container;

  const gameData = STANDARD_NEW_GAMES_DATA[gameId];
  if (gameData && gameData.scenarios) {
    if (!gameData._rawScenarios) {
      gameData._rawScenarios = [...gameData.scenarios];
    }
    const shuffled = [...gameData._rawScenarios];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    shuffled.forEach(s => { delete s._shuffledOptions; });
    gameData.scenarios = shuffled;
  }

  renderStandardGameStep();
}

function renderStandardGameStep() {
  const c = activeStandardSession.container;
  const gameData = STANDARD_NEW_GAMES_DATA[activeStandardSession.gameId];
  if (!c || !gameData) return;

  const scenarios = gameData.scenarios;
  const idx = activeStandardSession.currentIndex;

  if (idx >= scenarios.length) {
    const isWin = activeStandardSession.score >= scenarios.length;
    renderNewGameResultScreen(activeStandardSession.gameId, isWin, {
      scoreText: `${activeStandardSession.score} / ${scenarios.length} To'g'ri`,
      message: isWin ? "Barcha amaliy keyslar a'lo darajada yechildi!" : "Ba'zi xatoliklarga yo'l qo'yildi. Qayta o'ynab ko'ring."
    }, c);
    return;
  }

  const item = scenarios[idx];

  // Variantlarni har safar random aralashtirish (Fisher-Yates)
  if (!item._shuffledOptions) {
    const list = item.options.map((optText, origIdx) => ({
      text: optText,
      originalIndex: origIdx,
      isCorrect: origIdx === item.correct
    }));
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    item._shuffledOptions = list;
  }
  const options = item._shuffledOptions;

  c.innerHTML = `
    <div class="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl animate-fade-in text-center">
      
      <div class="flex items-center justify-between gap-2 mb-4">
        <span class="text-xs font-black uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
          Bosqich ${idx + 1} / ${scenarios.length}
        </span>
        <span class="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
          ${item.param}
        </span>
      </div>

      <h3 class="text-xl font-black text-white mb-2">${item.title}</h3>
      <p class="text-sm text-slate-300 font-bold mb-6 text-left leading-relaxed">${item.question}</p>

      <div class="space-y-3 mb-6 text-left">
        ${options.map((optObj, oIdx) => `
          <button onclick="handleStandardOptionClick(${oIdx})" class="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-slate-850 text-white text-xs font-bold transition-all flex items-start gap-3 cursor-pointer">
            <span class="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-xs shrink-0">${String.fromCharCode(65 + oIdx)}</span>
            <span class="mt-0.5">${optObj.text}</span>
          </button>
        `).join('')}
      </div>

      <div class="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-left text-[11px] text-slate-400 flex items-center gap-2">
        <i class="fa-solid fa-lightbulb text-amber-400"></i>
        <span><strong>Tavsiya:</strong> ${item.hint}</span>
      </div>

    </div>
  `;
}

function handleStandardOptionClick(selectedIdx) {
  const gameData = STANDARD_NEW_GAMES_DATA[activeStandardSession.gameId];
  if (!gameData) return;

  const item = gameData.scenarios[activeStandardSession.currentIndex];
  const options = item._shuffledOptions;
  const isCorrect = options ? options[selectedIdx].isCorrect : (selectedIdx === item.correct);

  if (isCorrect) {
    activeStandardSession.score++;
    if (window.ecoAudio) window.ecoAudio.playSuccess();
    if (window.EcoFxEngine) {
      window.EcoFxEngine.triggerPaqldoq(window.innerWidth / 2, window.innerHeight / 2, 25);
    }
  } else {
    if (window.ecoAudio) window.ecoAudio.playError();
    if (window.EcoFxEngine) {
      window.EcoFxEngine.triggerWrongFx(null);
    }
  }

  activeStandardSession.currentIndex++;
  setTimeout(() => {
    renderStandardGameStep();
  }, 400);
}
window.handleStandardOptionClick = handleStandardOptionClick;

console.log("new-games-pack.js muvaffaqiyatli yuklandi. 10 ta yangi o'yin (14-23) tayyor.");
