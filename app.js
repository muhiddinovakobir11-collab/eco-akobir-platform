// Asosiy Ilova Logikasi (App Core Engine)
// Asoschi: Akobir | EcoAkobir Platformasi

// 1. Audio Engine (Web Audio API - synthetic chimes)
class EcoSoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio might be blocked until user gesture
    }
  }

  playClick() {
    this.playTone(600, 'sine', 0.05, 0.05);
  }

  playSuccess() {
    this.playTone(523.25, 'triangle', 0.1, 0.1); // C5
    setTimeout(() => this.playTone(659.25, 'triangle', 0.1, 0.1), 80); // E5
    setTimeout(() => this.playTone(783.99, 'triangle', 0.2, 0.1), 160); // G5
  }

  playError() {
    this.playTone(220, 'sawtooth', 0.15, 0.08);
    setTimeout(() => this.playTone(180, 'sawtooth', 0.2, 0.08), 120);
  }

  playLevelUp() {
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.25, 0.12), idx * 100);
    });
  }

  // Vaqt kamaygan sari tezlashuvchi akustik taymer ovozi (Tension Countdown Sound)
  playTickTone(freq = 600, gainVal = 0.05, withSub = false) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq * 0.7), now + 0.04);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);

      if (withSub) {
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(90, now);
        subGain.gain.setValueAtTime(gainVal * 0.7, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        subOsc.connect(subGain);
        subGain.connect(this.ctx.destination);

        subOsc.start(now);
        subOsc.stop(now + 0.085);
      }
    } catch (e) {}
  }

  updateCountdownSound(remainingTime, totalSeconds) {
    if (remainingTime <= 0) {
      this.stopCountdownSound();
      return;
    }

    const now = performance.now();
    let interval = 1000;
    let freq = 480;
    let gain = 0.035;
    let withSub = false;

    // Vaqt kamaygan sari chastota va takrorlanish tezligi oshadi
    if (remainingTime <= 1.5) {
      interval = 120; // Favqulodda tez puls (120ms)
      freq = 980;
      gain = 0.10;
      withSub = true;
    } else if (remainingTime <= 3) {
      interval = 260; // Qizil xavf hududi (260ms - Vaqt: 3s holati)
      freq = 780;
      gain = 0.08;
      withSub = true;
    } else if (remainingTime <= 5) {
      interval = 500; // Ogohlantiruvchi o'rta tezlik (500ms)
      freq = 620;
      gain = 0.06;
      withSub = false;
    } else {
      interval = 1000; // Standart har soniyada sokin chertish
      freq = 480;
      gain = 0.035;
      withSub = false;
    }

    if (!this.lastTickTime || (now - this.lastTickTime >= interval)) {
      this.playTickTone(freq, gain, withSub);
      this.lastTickTime = now;
    }
  }

  stopCountdownSound() {
    this.lastTickTime = 0;
  }

  playTimeoutBuzzer() {
    this.stopCountdownSound();
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.35);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) {}
  }
}

window.ecoAudio = new EcoSoundEngine();

// 2. Player Profile & State
const DEFAULT_PROFILE = {
  name: "Talaba (Ro'yxatdan o'ting)",
  university: "O'quv yurti kiritilmagan",
  group: "Guruh kiritilmagan",
  role: "Talaba",
  telegramUsername: "",
  avatarUrl: "https://ui-avatars.com/api/?name=Talaba&background=059669&color=ffffff&bold=true",
  xp: 0,
  level: 1,
  ecoCoins: 0,
  completedModules: [],
  selectedCategory: "all"
};

function getTelegramAvatarUrl(username, nameFallback = "Foydalanuvchi") {
  const clean = (username || "").replace(/^@/, "").trim();
  if (clean) {
    return {
      primary: `https://t.me/i/userpic/320/${clean}.jpg`,
      fallback: `https://unavatar.io/telegram/${clean}`,
      tertiary: `https://ui-avatars.com/api/?name=${encodeURIComponent(nameFallback || clean)}&background=059669&color=ffffff&bold=true`
    };
  }
  return {
    primary: `https://ui-avatars.com/api/?name=${encodeURIComponent(nameFallback || 'Student')}&background=059669&color=ffffff&bold=true`,
    fallback: `https://ui-avatars.com/api/?name=${encodeURIComponent(nameFallback || 'Student')}&background=059669&color=ffffff&bold=true`,
    tertiary: `https://ui-avatars.com/api/?name=${encodeURIComponent(nameFallback || 'Student')}&background=059669&color=ffffff&bold=true`
  };
}

let playerProfile = loadProfile();

function loadProfile() {
  const saved = localStorage.getItem('eco_akobir_profile');
  if (saved) {
    try {
      const p = JSON.parse(saved);
      return p;
    } catch (e) {}
  }
  return { ...DEFAULT_PROFILE };
}

function saveProfile() {
  localStorage.setItem('eco_akobir_profile', JSON.stringify(playerProfile));
  updateProfileHeaderUI();
  syncLeaderboardWithPlayer();
}

function addPlayerXP(amount) {
  playerProfile.xp += amount;
  playerProfile.ecoCoins += Math.floor(amount / 2);

  const prevLevel = playerProfile.level;
  playerProfile.level = Math.floor(playerProfile.xp / 300) + 1;

  if (playerProfile.level > prevLevel) {
    if (window.ecoAudio) window.ecoAudio.playLevelUp();
    showToast(`Tabriklaymiz! Siz ${playerProfile.level}-darajaga ko'tarildingiz!`);
  }

  saveProfile();
}

// Check & Enforce Authentication on Entry
function checkUserAuth() {
  const isRegistered = localStorage.getItem('eco_akobir_registered');
  if (!isRegistered) {
    openAuthModal();
  }
}

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    const nameInput = document.getElementById('auth-fullname');
    if (nameInput) {
      nameInput.value = (playerProfile.name && !playerProfile.name.includes("Ro'yxatdan")) ? playerProfile.name : "";
      setTimeout(() => nameInput.focus(), 200);
    }

    const tgInput = document.getElementById('auth-telegram');
    if (tgInput) {
      tgInput.value = playerProfile.telegramUsername ? ('@' + playerProfile.telegramUsername.replace(/^@/, '')) : "";
    }

    const uniInput = document.getElementById('auth-university');
    if (uniInput) {
      uniInput.value = (playerProfile.university && !playerProfile.university.includes("kiritilmagan")) ? playerProfile.university : "";
    }

    const groupInput = document.getElementById('auth-group');
    if (groupInput) {
      groupInput.value = (playerProfile.group && !playerProfile.group.includes("kiritilmagan")) ? playerProfile.group : "";
    }
  }
}

function handleUserRegistration(e) {
  if (e) e.preventDefault();

  const fullname = document.getElementById('auth-fullname').value.trim();
  const university = document.getElementById('auth-university').value.trim();
  const group = document.getElementById('auth-group').value.trim();
  const role = document.getElementById('auth-role').value;
  const tgInput = document.getElementById('auth-telegram');
  const tgValue = tgInput ? tgInput.value.replace(/^@/, '').trim() : '';

  if (!fullname) {
    alert("Iltimos, ism va familiyangizni kiriting!");
    return;
  }

  const cleanTg = tgValue.replace(/^@/, '').trim();
  playerProfile.name = fullname;
  playerProfile.university = university || "O'quv yurti kiritilmagan";
  playerProfile.group = group || "Guruh kiritilmagan";
  playerProfile.role = role || "Talaba";
  playerProfile.telegramUsername = cleanTg;
  playerProfile.avatarUrl = cleanTg 
    ? `https://t.me/i/userpic/320/${cleanTg}.jpg`
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(fullname)}&background=059669&color=ffffff&bold=true`;

  localStorage.setItem('eco_akobir_registered', 'true');
  saveProfile();

  if (typeof registerOrUpdateUserInRegistry === 'function') {
    registerOrUpdateUserInRegistry(playerProfile);
  }

  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');

  if (window.ecoAudio) window.ecoAudio.playLevelUp();
  showToast(`Xush kelibsiz, ${fullname}! Profilingiz va Telegram rasmingiz yangilandi.`);
}

function switchStudentAccount() {
  localStorage.removeItem('eco_akobir_registered');
  openAuthModal();
}

function updateProfileHeaderUI() {
  const nameEl = document.getElementById('profile-name');
  const uniEl = document.getElementById('profile-university');
  const levelEl = document.getElementById('profile-level');
  const xpEl = document.getElementById('profile-xp');
  const coinsEl = document.getElementById('profile-coins');
  const progressBar = document.getElementById('profile-xp-bar');
  const completedCount = document.getElementById('profile-completed-count');
  const avatarContainer = document.getElementById('profile-avatar-container');

  if (nameEl) nameEl.textContent = playerProfile.name;
  if (uniEl) uniEl.textContent = `${playerProfile.university} • ${playerProfile.group}`;
  if (levelEl) levelEl.textContent = `Daraja ${playerProfile.level}`;
  if (xpEl) xpEl.textContent = `${playerProfile.xp} XP`;
  if (coinsEl) coinsEl.textContent = playerProfile.ecoCoins;
  if (completedCount) completedCount.textContent = `${playerProfile.completedModules.length}/20`;

  if (progressBar) {
    const levelXP = playerProfile.xp % 300;
    const percent = Math.min(100, Math.round((levelXP / 300) * 100));
    progressBar.style.width = `${percent}%`;
  }

  if (avatarContainer) {
    const tg = (playerProfile.telegramUsername || "").replace(/^@/, '').trim();
    const av = getTelegramAvatarUrl(tg, playerProfile.name || "Talaba");
    if (tg) {
      avatarContainer.innerHTML = `
        <img src="${av.primary}" 
             alt="${playerProfile.name}" 
             class="w-full h-full object-cover rounded-xl"
             onerror="if (this.src !== '${av.fallback}') { this.src = '${av.fallback}'; } else { this.onerror = null; this.src = '${av.tertiary}'; }"
        />
      `;
    } else {
      avatarContainer.innerHTML = `
        <img src="${av.tertiary}" 
             alt="${playerProfile.name}" 
             class="w-full h-full object-cover rounded-xl"
        />
      `;
    }
  }
}

// 3. Modules Catalog Renderer
function renderModulesCatalog(filterCategory = 'all', searchQuery = '') {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;

  let filtered = ECO_MODULES;
  if (filterCategory !== 'all') {
    filtered = filtered.filter(m => m.category === filterCategory);
  }
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(m => m.title.toLowerCase().includes(q) || m.summary.toLowerCase().includes(q));
  }

  grid.innerHTML = filtered.map(mod => {
    const isCompleted = playerProfile.completedModules.includes(mod.id);
    
    let colorBorder = 'border-emerald-500/30 hover:border-emerald-500';
    let badgeBg = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (mod.categoryColor === 'blue') {
      colorBorder = 'border-blue-500/30 hover:border-blue-500';
      badgeBg = 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    } else if (mod.categoryColor === 'amber') {
      colorBorder = 'border-amber-500/30 hover:border-amber-500';
      badgeBg = 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    } else if (mod.categoryColor === 'purple') {
      colorBorder = 'border-purple-500/30 hover:border-purple-500';
      badgeBg = 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    }

    return `
      <div onclick="openModuleModal(${mod.id})" class="bg-slate-900/90 border ${colorBorder} rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeBg}">
              ${mod.category}
            </span>
            ${isCompleted 
              ? '<span class="text-xs text-emerald-400 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> O\'zlashtirilgan</span>' 
              : `<span class="text-xs text-slate-400 font-semibold">+${mod.xp} XP</span>`
            }
          </div>

          <div class="flex items-start gap-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-lg text-white group-hover:scale-110 transition-transform shrink-0 border border-slate-700">
              <i class="fa-solid ${mod.icon}"></i>
            </div>
            <h4 class="font-bold text-white text-base group-hover:text-emerald-400 transition-colors line-clamp-2">
              ${mod.title}
            </h4>
          </div>

          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
            ${mod.summary}
          </p>
        </div>

        <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <span class="text-slate-400 flex items-center gap-1.5">
            <i class="fa-solid fa-graduation-cap text-emerald-400"></i> Nazariya + Test
          </span>
          <span class="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            Darsni ochish <i class="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Module Modal (Theory & Quiz)
let currentActiveModule = null;
let currentQuizAnswers = {};

function openModuleModal(moduleId) {
  const mod = ECO_MODULES.find(m => m.id === moduleId);
  if (!mod) return;
  currentActiveModule = mod;
  currentQuizAnswers = {};

  const modal = document.getElementById('module-modal');
  const title = document.getElementById('modal-module-title');
  const cat = document.getElementById('modal-module-cat');
  const theory = document.getElementById('modal-module-theory');
  const quiz = document.getElementById('modal-module-quiz');
  const task = document.getElementById('modal-module-task');

  if (title) title.textContent = mod.title;
  if (cat) cat.textContent = mod.category;
  if (theory) theory.innerHTML = mod.theory;
  if (task) task.textContent = mod.task;

  // Render Quiz
  if (quiz) {
    quiz.innerHTML = mod.quiz.map((q, qIdx) => `
      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-3">
        <h5 class="text-sm font-bold text-white mb-3 flex items-start gap-2">
          <span class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0">${qIdx + 1}</span>
          ${q.question}
        </h5>
        <div class="space-y-2">
          ${q.options.map((opt, optIdx) => `
            <label class="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 cursor-pointer text-xs text-slate-300">
              <input type="radio" name="quiz_q_${qIdx}" value="${optIdx}" onchange="selectQuizOption(${qIdx}, ${optIdx})" class="text-emerald-500 focus:ring-emerald-400">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
        <div id="quiz-explain-${qIdx}" class="hidden mt-2 p-2.5 rounded-lg text-xs"></div>
      </div>
    `).join('');
  }

  // Update complete button
  const completeBtn = document.getElementById('modal-complete-btn');
  if (completeBtn) {
    const isDone = playerProfile.completedModules.includes(mod.id);
    completeBtn.innerHTML = isDone 
      ? '<i class="fa-solid fa-check"></i> Qayta topshirish' 
      : `<i class="fa-solid fa-award"></i> Testni tekshirish va +${mod.xp} XP olish`;
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (window.ecoAudio) window.ecoAudio.playClick();
}

function closeModuleModal() {
  const modal = document.getElementById('module-modal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function selectQuizOption(questionIdx, optionIdx) {
  currentQuizAnswers[questionIdx] = optionIdx;
}

function submitModuleQuiz() {
  if (!currentActiveModule) return;

  const totalQuestions = currentActiveModule.quiz.length;
  let correctCount = 0;

  currentActiveModule.quiz.forEach((q, qIdx) => {
    const chosen = currentQuizAnswers[qIdx];
    const explainEl = document.getElementById(`quiz-explain-${qIdx}`);

    if (chosen !== undefined && chosen === q.correct) {
      correctCount++;
      if (explainEl) {
        explainEl.classList.remove('hidden');
        explainEl.className = "mt-2 p-2.5 rounded-lg text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300";
        explainEl.innerHTML = `<i class="fa-solid fa-check mr-1"></i> To'g'ri! ${q.explanation}`;
      }
    } else {
      if (explainEl) {
        explainEl.classList.remove('hidden');
        explainEl.className = "mt-2 p-2.5 rounded-lg text-xs bg-rose-500/10 border border-rose-500/30 text-rose-300";
        explainEl.innerHTML = `<i class="fa-solid fa-xmark mr-1"></i> Noto'g'ri. ${q.explanation}`;
      }
    }
  });

  if (correctCount === totalQuestions) {
    if (window.ecoAudio) window.ecoAudio.playSuccess();

    if (!playerProfile.completedModules.includes(currentActiveModule.id)) {
      playerProfile.completedModules.push(currentActiveModule.id);
      addPlayerXP(currentActiveModule.xp);
      showToast(`A'lo natija! +${currentActiveModule.xp} XP qo'shildi!`);
      renderModulesCatalog(playerProfile.selectedCategory);
    } else {
      showToast("Barcha javoblar to'g'ri!");
    }
  } else {
    if (window.ecoAudio) window.ecoAudio.playError();
    showToast(`Siz ${totalQuestions} tadan ${correctCount} tasiga to'g'ri javob berdingiz. Qayta urinib ko'ring.`);
  }
}

// 5. Haqiqiy Foydalanuvchilar Bazasi va Liderlar Jadvali (Real Users & Leaderboard)
const MOCK_FAKE_NAMES = ["jasur rahimov", "madina karimova", "shaxzod aliyev", "nigora umarova"];

function loadUsersRegistry() {
  let users = [];
  try {
    const saved = localStorage.getItem('eco_akobir_users_registry');
    if (saved) {
      users = JSON.parse(saved);
      // Taxminiy/soxta ismlarni butunlay tozalab tashlash
      users = users.filter(u => !MOCK_FAKE_NAMES.includes((u.name || '').toLowerCase().trim()));
    }
  } catch (e) {}

  if (!users || users.length === 0) {
    const currentTg = (playerProfile.telegramUsername || "akoshprod").replace(/^@/, '');
    users = [
      {
        id: "user-" + (currentTg || "akoshprod"),
        name: playerProfile.name || "Akobir (Asoschi)",
        tg: currentTg || "akoshprod",
        uni: playerProfile.university || "O'zbekiston Milliy Universiteti",
        group: playerProfile.group || "302-guruh (Ekologiya)",
        role: playerProfile.role || "Bosh Auditor",
        xp: playerProfile.xp || 450,
        level: playerProfile.level || 2,
        ecoCoins: playerProfile.ecoCoins || 120,
        registeredAt: "2026-11-05 12:00",
        lastActive: "Hozir faol"
      }
    ];
    saveUsersRegistry(users);
  }
  return users;
}
window.loadUsersRegistry = loadUsersRegistry;

function saveUsersRegistry(users) {
  try {
    localStorage.setItem('eco_akobir_users_registry', JSON.stringify(users));
  } catch (e) {}
}
window.saveUsersRegistry = saveUsersRegistry;

function registerOrUpdateUserInRegistry(profile) {
  if (!profile || !profile.name) return;
  const users = loadUsersRegistry();
  const cleanTg = (profile.telegramUsername || "akoshprod").replace(/^@/, '').trim().toLowerCase();
  const profileName = profile.name.trim().toLowerCase();

  const existingIdx = users.findIndex(u => 
    (u.tg && u.tg.toLowerCase() === cleanTg) || 
    (u.name && u.name.toLowerCase() === profileName)
  );

  const userBadge = profile.xp >= 1500 ? "Bosh Auditor" : profile.xp >= 800 ? "Katta Ekolog" : "Yosh Ekolog";

  if (existingIdx !== -1) {
    users[existingIdx].name = profile.name;
    users[existingIdx].tg = cleanTg;
    users[existingIdx].uni = profile.university || users[existingIdx].uni;
    users[existingIdx].group = profile.group || users[existingIdx].group;
    users[existingIdx].role = profile.role || users[existingIdx].role;
    users[existingIdx].xp = profile.xp;
    users[existingIdx].level = profile.level || Math.floor(profile.xp / 300) + 1;
    users[existingIdx].ecoCoins = profile.ecoCoins || Math.floor(profile.xp / 2);
    users[existingIdx].lastActive = "Hozir faol";
  } else {
    users.push({
      id: "user-" + Date.now(),
      name: profile.name,
      tg: cleanTg,
      uni: profile.university || "O'zbekiston Milliy Universiteti",
      group: profile.group || "Ekologiya 1-bosqich",
      role: profile.role || "Talaba",
      xp: profile.xp || 0,
      level: profile.level || 1,
      ecoCoins: profile.ecoCoins || 0,
      registeredAt: new Date().toLocaleDateString('uz-UZ'),
      lastActive: "Hozir faol"
    });
  }

  saveUsersRegistry(users);
}
window.registerOrUpdateUserInRegistry = registerOrUpdateUserInRegistry;

let LEADERBOARD_DATA = loadLeaderboard();

function loadLeaderboard() {
  const users = loadUsersRegistry();
  // Faqat real foydalanuvchilar bo'yicha saralash
  const leaderboard = users.map(u => ({
    id: u.id,
    name: u.name,
    uni: u.uni,
    group: u.group,
    xp: u.xp,
    badge: u.xp >= 1500 ? "Bosh Auditor" : u.xp >= 800 ? "Katta Ekolog" : "Yosh Ekolog",
    tg: u.tg || "akoshprod"
  })).sort((a, b) => b.xp - a.xp);

  try {
    localStorage.setItem('eco_akobir_leaderboard', JSON.stringify(leaderboard));
  } catch (e) {}

  return leaderboard;
}

function saveLeaderboard() {
  try {
    localStorage.setItem('eco_akobir_leaderboard', JSON.stringify(LEADERBOARD_DATA));
  } catch (e) {}
}

function syncLeaderboardWithPlayer() {
  if (!playerProfile.name) return;

  registerOrUpdateUserInRegistry(playerProfile);
  LEADERBOARD_DATA = loadLeaderboard();
  renderLeaderboard();
}

function renderLeaderboard() {
  const container = document.getElementById('leaderboard-list');
  if (!container) return;

  const sorted = [...LEADERBOARD_DATA].sort((a, b) => b.xp - a.xp);

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="py-8 text-center text-slate-500 text-xs">
        <i class="fa-solid fa-users text-2xl mb-2 text-slate-600"></i>
        <p>Hozircha foydalanuvchilar ro'yxati shakllanmoqda...</p>
      </div>
    `;
    return;
  }

  container.innerHTML = sorted.map((user, idx) => {
    const isCurrentPlayer = playerProfile.name && user.name.toLowerCase() === playerProfile.name.toLowerCase();
    const userTg = (user.tg || (isCurrentPlayer ? playerProfile.telegramUsername : "akoshprod")).replace(/^@/, '');
    const av = getTelegramAvatarUrl(userTg, user.name);

    return `
      <div class="flex items-center justify-between p-3.5 rounded-2xl transition-all ${
        isCurrentPlayer 
          ? 'bg-emerald-500/15 border-2 border-emerald-500/80 shadow-lg shadow-emerald-500/10' 
          : idx === 0 
            ? 'bg-amber-500/10 border border-amber-500/30' 
            : 'bg-slate-900 border border-slate-800 hover:bg-slate-850'
      }">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
            idx === 0 ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' :
            idx === 1 ? 'bg-slate-300 text-slate-950' :
            idx === 2 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'
          }">
            ${idx + 1}
          </span>
          <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-700/80 shadow-sm relative bg-slate-950 flex items-center justify-center">
            <img src="${av.primary}" alt="${user.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='${av.fallback}';" />
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h5 class="font-bold text-white text-sm flex items-center gap-1.5">
                <span>${user.name}</span>
                ${idx === 0 ? '<i class="fa-solid fa-crown text-amber-400 text-xs" title="1-o&apos;rin"></i>' : ''}
                ${isCurrentPlayer ? '<span class="bg-emerald-500 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase">Siz</span>' : ''}
              </h5>
              <a href="https://t.me/${userTg}" target="_blank" onclick="event.stopPropagation()" class="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 font-bold bg-sky-500/10 hover:bg-sky-500/20 px-2 py-0.5 rounded-md border border-sky-500/25 transition-colors" title="Telegram profilini ochish">
                <i class="fa-brands fa-telegram text-xs"></i> @${userTg}
                <i class="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-70"></i>
              </a>
            </div>
            <span class="text-xs text-slate-400">${user.uni} • ${user.group}</span>
          </div>
        </div>

        <div class="text-right shrink-0">
          <div class="text-sm font-black text-emerald-400">${user.xp} XP</div>
          <span class="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700 font-semibold">${user.badge}</span>
        </div>
      </div>
    `;
  }).join('') + `
    <div class="mt-3 text-center py-2 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
      <i class="fa-solid fa-shield-halved text-emerald-400 text-xs"></i>
      Faqat platformadan ro'yxatdan o'tgan haqiqiy foydalanuvchilar ko'rsatilmoqda (${sorted.length} nafar faol)
    </div>
  `;
}

// 6. Dynamic Certificate Modal & Canvas Drawing
function openCertificateModal(courseTitle = "20 Modulli Ekologik Audit va Chiqindilar Boshqaruvi") {
  const modal = document.getElementById('certificate-modal');
  if (!modal) return;

  drawCertificate(courseTitle);
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (window.ecoAudio) window.ecoAudio.playLevelUp();
}

function closeCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function drawCertificate(courseTitle) {
  const canvas = document.getElementById('certificate-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = 1200;
  canvas.height = 800;

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
  bgGrad.addColorStop(0, '#0a192f');
  bgGrad.addColorStop(1, '#020c1b');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 800);

  // Luxury Gold & Green Double Border
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 14;
  ctx.strokeRect(30, 30, 1140, 740);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.strokeRect(45, 45, 1110, 710);

  // Decorative corner accents
  drawCornerAccent(ctx, 45, 45);
  drawCornerAccent(ctx, 1155, 45, true);
  drawCornerAccent(ctx, 45, 755, false, true);
  drawCornerAccent(ctx, 1155, 755, true, true);

  // Header Title
  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 24px Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText("ECOAKOBIR XALQARO EKOLOGIK TA'LIM AKADEMIYASI", 600, 110);

  ctx.fillStyle = '#f59e0b';
  ctx.font = '900 48px Georgia, serif';
  ctx.fillText("MALAKA SERTIFIKATI", 600, 180);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '18px Montserrat, sans-serif';
  ctx.fillText("Ushbu maxsus sertifikat bilan tasdiqlanadiki, talaba:", 600, 240);

  // Student Name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px Georgia, serif';
  ctx.fillText(playerProfile.name, 600, 310);

  // Underline
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(350, 330);
  ctx.lineTo(850, 330);
  ctx.stroke();

  // Institution info
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '20px Montserrat, sans-serif';
  ctx.fillText(`${playerProfile.university} • ${playerProfile.group}`, 600, 370);

  // Course completion text
  ctx.fillStyle = '#94a3b8';
  ctx.font = '18px Montserrat, sans-serif';
  ctx.fillText("Oliy ta'lim dasturiga integratsiya qilingan quyidagi ixtisoslashtirilgan kursni", 600, 430);
  ctx.fillText("muvaffaqiyatli tamomladi va amaliy simulyatsion kvestlarni topshirdi:", 600, 460);

  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 26px Georgia, serif';
  ctx.fillText(`« ${courseTitle} »`, 600, 520);

  // Date and Signatures
  const today = new Date().toLocaleDateString('uz-UZ');
  
  // Left: Date
  ctx.fillStyle = '#94a3b8';
  ctx.font = '16px Montserrat, sans-serif';
  ctx.fillText(`Berilgan sana: ${today}`, 250, 640);
  ctx.fillText(`Sertifikat ID: ECO-${Math.floor(100000 + Math.random() * 900000)}`, 250, 670);

  // Right: Founder
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px Georgia, serif';
  ctx.fillText("Akobir", 950, 640);
  ctx.fillStyle = '#f59e0b';
  ctx.font = '15px Montserrat, sans-serif';
  ctx.fillText("Loyiha Asoschisi & Bosh Ekolog", 950, 670);

  // Golden Stamp in center
  drawGoldStamp(ctx, 600, 650);
}

function drawCornerAccent(ctx, x, y, flipX = false, flipY = false) {
  ctx.save();
  ctx.translate(x, y);
  if (flipX) ctx.scale(-1, 1);
  if (flipY) ctx.scale(1, -1);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(30, 0);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 30);
  ctx.stroke();

  ctx.restore();
}

function drawGoldStamp(ctx, x, y) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 45, 0, Math.PI * 2);
  ctx.fillStyle = '#d97706';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#fef08a';
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 12px Montserrat, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText("TASDIQLANGAN", x, y - 5);
  ctx.fillText("VERIFIED", x, y + 15);
  ctx.restore();
}

function downloadCertificateImage() {
  const canvas = document.getElementById('certificate-canvas');
  if (!canvas) return;

  const link = document.createElement('a');
  link.download = `Sertifikat_${playerProfile.name.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// 7. Toast Alerts
function showToast(message) {
  const toast = document.getElementById('global-toast');
  if (!toast) return;

  toast.innerHTML = `<i class="fa-solid fa-bell mr-2 text-emerald-400"></i> ${message}`;
  toast.classList.remove('hidden');
  toast.classList.add('animate-bounce');

  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('animate-bounce');
  }, 3500);
}

// 8. Edit Profile Dialog
function openEditProfileModal() {
  const modal = document.getElementById('profile-edit-modal');
  const nameInput = document.getElementById('input-player-name');
  const uniInput = document.getElementById('input-player-uni');
  const groupInput = document.getElementById('input-player-group');
  const tgInput = document.getElementById('input-player-tg');

  if (nameInput) nameInput.value = playerProfile.name;
  if (uniInput) uniInput.value = playerProfile.university;
  if (groupInput) groupInput.value = playerProfile.group;
  if (tgInput) tgInput.value = playerProfile.telegramUsername ? ('@' + playerProfile.telegramUsername.replace(/^@/, '')) : '@akoshprod';

  if (modal) modal.classList.remove('hidden');
}

function closeEditProfileModal() {
  const modal = document.getElementById('profile-edit-modal');
  if (modal) modal.classList.add('hidden');
}

function saveProfileChanges(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('input-player-name');
  const uniInput = document.getElementById('input-player-uni');
  const groupInput = document.getElementById('input-player-group');
  const tgInput = document.getElementById('input-player-tg');

  if (nameInput && nameInput.value.trim()) playerProfile.name = nameInput.value.trim();
  if (uniInput && uniInput.value.trim()) playerProfile.university = uniInput.value.trim();
  if (groupInput && groupInput.value.trim()) playerProfile.group = groupInput.value.trim();
  if (tgInput && tgInput.value.trim()) {
    const cleanTg = tgInput.value.replace(/^@/, '').trim();
    playerProfile.telegramUsername = cleanTg;
    playerProfile.avatarUrl = `https://t.me/i/userpic/320/${cleanTg}.jpg`;
  }

  saveProfile();
  closeEditProfileModal();
  showToast("Profil va Telegram rasmi muvaffaqiyatli yangilandi!");
}

// 9. Navigation switch & Quick Game Launch
function switchMainTab(tabId) {
  if (typeof stopSortingGameTimer === 'function') stopSortingGameTimer();
  if (typeof stopAuditTimer === 'function') stopAuditTimer();
  if (typeof stopExpertiseTimer === 'function') stopExpertiseTimer();
  if (typeof stopExtraGameTimer === 'function') stopExtraGameTimer();
  const tabs = ['modules-tab', 'games-tab', 'sorting-tab', 'audit-tab', 'expertise-tab', 'teacher-tab', 'videos-tab'];
  tabs.forEach(t => {
    const el = document.getElementById(t);
    const navBtn = document.getElementById(`nav-${t}`);
    if (el) el.classList.add('hidden');
    if (navBtn) {
      navBtn.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500');
      navBtn.classList.add('text-slate-400');
    }
  });

  const activeEl = document.getElementById(tabId);
  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeNav) {
    activeNav.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500');
    activeNav.classList.remove('text-slate-400');
  }

  if (tabId === 'videos-tab' && window.EcoVideoManager) {
    window.EcoVideoManager.renderCatalog();
  }

  if (tabId === 'games-tab' && typeof renderGamesHub === 'function') {
    returnToGamesHub();
    renderGamesHub();
  }

  // Update mobile bottom nav active highlights
  const mModules = document.getElementById('m-nav-modules');
  const mGames = document.getElementById('m-nav-games');
  if (mModules && mGames) {
    mModules.className = `mobile-nav-btn flex flex-col items-center gap-1 transition-colors p-1 ${tabId === 'modules-tab' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-emerald-400'}`;
    mGames.className = `mobile-nav-btn flex flex-col items-center gap-1 transition-colors p-1 ${tabId === 'games-tab' ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-emerald-400'}`;
    const mVideos = document.getElementById('m-nav-videos');
    if (mVideos) {
      mVideos.className = `mobile-nav-btn flex flex-col items-center gap-1 transition-colors p-1 ${tabId === 'videos-tab' ? 'text-rose-400 font-bold' : 'text-slate-400 hover:text-rose-400'}`;
    }
  }

  if (window.ecoAudio) window.ecoAudio.playClick();
}

function quickLaunchGame(gameId) {
  switchMainTab('games-tab');
  if (typeof launchSpecificGame === 'function') {
    launchSpecificGame(gameId);
  }
}

// Apple Motion Style Splash Controller (Qotib qolmaslik kafolatlangan)
let splashTimeout = null;
let splashInterval = null;

function initAppleSplash() {
  const splash = document.getElementById('apple-splash-screen');
  const bar = document.getElementById('splash-progress-bar');
  const countdown = document.getElementById('splash-countdown');

  if (!splash) {
    checkUserAuth();
    return;
  }

  // Smoothly fill bar across 2.5 seconds
  setTimeout(() => {
    if (bar) bar.style.width = '100%';
  }, 50);

  let secondsLeft = 2;
  splashInterval = setInterval(() => {
    secondsLeft--;
    if (countdown && secondsLeft >= 0) countdown.textContent = `${secondsLeft}s`;
    if (secondsLeft <= 0) {
      clearInterval(splashInterval);
      dismissAppleSplash();
    }
  }, 1000);

  splashTimeout = setTimeout(() => {
    dismissAppleSplash();
  }, 2500);
}

function dismissAppleSplash() {
  if (splashTimeout) clearTimeout(splashTimeout);
  if (splashInterval) clearInterval(splashInterval);

  const splash = document.getElementById('apple-splash-screen');
  if (splash) {
    splash.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
      checkUserAuth();
    }, 400);
  } else {
    checkUserAuth();
  }
}
window.initAppleSplash = initAppleSplash;
window.dismissAppleSplash = dismissAppleSplash;

// Global Initialization (DOM tayyorligini darhol tekshirish)
function bootApp() {
  if (window._appBooted) return;
  window._appBooted = true;

  if (typeof loadEcoConfig === 'function') loadEcoConfig();
  if (typeof checkAdminAccess === 'function') checkAdminAccess();
  initAppleSplash();
  updateProfileHeaderUI();
  syncLeaderboardWithPlayer();
  renderModulesCatalog('all');
  renderLeaderboard();
  
  if (typeof renderGamesHub === 'function') renderGamesHub();
  if (typeof initSortingGame === 'function') initSortingGame();
  if (typeof initAuditSimulator === 'function') initAuditSimulator();
  if (typeof initExpertiseQuest === 'function') initExpertiseQuest();

  // Category filter clicks
  const filterBtns = document.querySelectorAll('.cat-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active-filter', 'bg-emerald-500', 'text-white'));
      btn.classList.add('active-filter', 'bg-emerald-500', 'text-white');
      const cat = btn.getAttribute('data-cat');
      playerProfile.selectedCategory = cat;
      renderModulesCatalog(cat);
      if (window.ecoAudio) window.ecoAudio.playClick();
    });
  });

  // Search input
  const searchInput = document.getElementById('modules-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderModulesCatalog(playerProfile.selectedCategory || 'all', e.target.value);
    });
  }
}

window.bootApp = bootApp;

// DOMContentLoaded kutish va readyState tekshirish
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}
window.addEventListener('load', bootApp);

// 10. Asoschi Akobir Aloqa Modali
function openFounderModal() {
  const modal = document.getElementById('founder-modal');
  if (modal) modal.classList.remove('hidden');
  if (window.ecoAudio) window.ecoAudio.playClick();
}
window.openFounderModal = openFounderModal;

function closeFounderModal() {
  const modal = document.getElementById('founder-modal');
  if (modal) modal.classList.add('hidden');
  if (window.ecoAudio) window.ecoAudio.playClick();
}
window.closeFounderModal = closeFounderModal;

function copyFounderPhone() {
  navigator.clipboard.writeText('+998936884849').then(() => {
    const txt = document.getElementById('copy-phone-text');
    if (txt) {
      txt.textContent = 'Olingan!';
      setTimeout(() => { txt.textContent = 'Nusxa olish'; }, 2000);
    }
  }).catch(() => {
    alert("Telefon raqam: +998 (93) 688-48-49");
  });
  if (window.ecoAudio) window.ecoAudio.playSuccess();
}
window.copyFounderPhone = copyFounderPhone;

// 11. Jonli Eko-Odamcha (Eco Mascot) Interaktivligi
const ECO_MASCOT_PHRASES = [
  "🌿 Salom, Akobir! Tabiatni birga asraymiz!",
  "⭐ Zo'r natija! Yangi XP to'plashda davom eting!",
  "♻️ Chiqindilarni saralash — ongli hayot kaliti!",
  "🚀 23 ta o'yinda chempion bo'ling!",
  "💧 Suv va havoni toza saqlash bizning burchimiz!",
  "🌱 Har bir to'g'ri saralangan quti — yangi hayot!",
  "👑 Akosh Eco — O'zbekistonning yashil kelajagi!"
];

let mascotPhraseIdx = 0;
function triggerEcoMascotCheer() {
  const speech = document.getElementById('eco-mascot-speech');
  const svg = document.getElementById('eco-mascot-svg');

  mascotPhraseIdx = (mascotPhraseIdx + 1) % ECO_MASCOT_PHRASES.length;
  if (speech) {
    speech.classList.remove('hidden');
    speech.innerHTML = `<span>${ECO_MASCOT_PHRASES[mascotPhraseIdx]}</span>`;
    speech.classList.add('animate-bounce');
    setTimeout(() => speech.classList.remove('animate-bounce'), 1000);
  }

  if (svg) {
    svg.style.transition = 'transform 0.3s ease';
    svg.style.transform = 'scale(1.25) rotate(12deg)';
    setTimeout(() => {
      svg.style.transform = '';
    }, 350);
  }

  if (window.ecoAudio) window.ecoAudio.playSuccess();
}
window.triggerEcoMascotCheer = triggerEcoMascotCheer;
