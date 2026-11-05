// =======================================================================
// Akosh Eco / EcoAkobir — Asoschi Akobir uchun Maxsus Admin Boshqaruv Paneli
// Ushbu modul faqat platforma asoschisi Akobir uchun mo'ljallangan bo'lib,
// barcha o'yin vaqtlari, savollar soni, o'tish kechikishi va ma'lumotlarni
// to'liq o'zgartirish va boshqarish imkonini beradi.
// =======================================================================

const DEFAULT_ECO_CONFIG = {
  adminPassword: "akobir2026", // Standart admin paroli
  founderName: "Akobir",
  founderTelegram: "@akoshprod",
  founderTelegramUrl: "https://t.me/akoshprod",
  founderPhone: "(93) 688-48-49",
  founderPhoneRaw: "+998936884849",
  platformSlogan: "Chiqindilarni tafakkur qilib boshqarish",
  
  // O'yin taymerlari (soniyalarda)
  sortingTimer: 10,       // 1-Saralash o'yini
  auditTimer: 10,         // 2-Audit Simulyatori
  expertiseTimer: 10,     // 3-Ekspertiza Kvesti
  extraGameTimer: 10,     // 4-13 Mini o'yinlar
  
  // Har bir raunddagi tasodifiy savollar soni
  sortingBatchSize: 25,
  auditBatchSize: 25,
  expertiseBatchSize: 25,
  
  // Javob tanlangandan so'ng keyingisiga o'tish kechikishi (ms)
  autoAdvanceDelay: 450,
  
  // Ovoz effektlari
  soundEffects: true,
  
  // Qo'shilgan maxsus chiqindilar
  customWasteItems: []
};

// Global config obyektini yuklash
function loadEcoConfig() {
  try {
    const saved = localStorage.getItem('ECO_ADMIN_CONFIG');
    if (saved) {
      window.ECO_CONFIG = Object.assign({}, DEFAULT_ECO_CONFIG, JSON.parse(saved));
    } else {
      window.ECO_CONFIG = Object.assign({}, DEFAULT_ECO_CONFIG);
    }
  } catch (e) {
    console.error("Config yuklashda xatolik:", e);
    window.ECO_CONFIG = Object.assign({}, DEFAULT_ECO_CONFIG);
  }
  applyEcoConfigToDOM();
}

// Barcha sahifalardagi matn va havolalarni yangilash
function applyEcoConfigToDOM() {
  if (!window.ECO_CONFIG) return;
  const cfg = window.ECO_CONFIG;

  // 1. Shiorlarni yangilash
  document.querySelectorAll('.slogan-shimmer-text').forEach(el => {
    el.textContent = cfg.platformSlogan;
  });

  // 2. Asoschi ismi
  document.querySelectorAll('.founder-name-text').forEach(el => {
    el.textContent = cfg.founderName;
  });

  // 3. Telegram havolalari
  document.querySelectorAll('.founder-tg-link').forEach(el => {
    el.textContent = cfg.founderTelegram;
    if (el.tagName === 'A') el.setAttribute('href', cfg.founderTelegramUrl);
  });
  document.querySelectorAll('.founder-tg-anchor').forEach(el => {
    el.setAttribute('href', cfg.founderTelegramUrl);
  });

  // 4. Telefon raqamlari
  document.querySelectorAll('.founder-phone-text').forEach(el => {
    el.textContent = cfg.founderPhone;
  });
  document.querySelectorAll('.founder-phone-link').forEach(el => {
    el.setAttribute('href', `tel:${cfg.founderPhoneRaw}`);
  });
}

// Sozlamalarni saqlash
function saveEcoConfig(newCfg, showNotice = true) {
  try {
    window.ECO_CONFIG = Object.assign({}, window.ECO_CONFIG, newCfg);
    localStorage.setItem('ECO_ADMIN_CONFIG', JSON.stringify(window.ECO_CONFIG));
    applyEcoConfigToDOM();
    if (showNotice && typeof showToast === 'function') {
      showToast("Sozlamalar muvaffaqiyatli saqlandi! Barcha o'yinlarga qo'llanildi.", "success");
    }
    return true;
  } catch (e) {
    console.error("Sozlamalarni saqlashda xato:", e);
    if (showNotice && typeof showToast === 'function') {
      showToast("Xatolik: Sozlamalar saqlanmadi!", "error");
    }
    return false;
  }
}

// Boshlang'ich (standart) holatga qaytarish
function resetEcoConfig() {
  if (confirm("Haqiqatan ham barcha o'yin vaqtlari va sozlamalarni standart (10s / 25 savol) holatga qaytarmoqchimisiz?")) {
    const currentPass = (window.ECO_CONFIG && window.ECO_CONFIG.adminPassword) || DEFAULT_ECO_CONFIG.adminPassword;
    window.ECO_CONFIG = Object.assign({}, DEFAULT_ECO_CONFIG, { adminPassword: currentPass });
    localStorage.setItem('ECO_ADMIN_CONFIG', JSON.stringify(window.ECO_CONFIG));
    applyEcoConfigToDOM();
    renderAdminDashboardContent();
    if (typeof showToast === 'function') {
      showToast("Barcha sozlamalar standart holatga qaytarildi!", "info");
    }
  }
}

// Admin avtorizatsiyasini tekshirish
function isAdminAuthenticated() {
  return sessionStorage.getItem('ECO_ADMIN_AUTH') === 'true';
}

function checkAdminAccess() {
  const urlParams = new URLSearchParams(window.location.search);
  const isAdminParam = urlParams.get('admin') === '1' || urlParams.get('admin') === 'true' || window.location.hash === '#admin';
  const isAuth = sessionStorage.getItem('ECO_ADMIN_AUTH') === 'true';

  const headerBtn = document.getElementById('header-admin-btn');
  const navTab = document.getElementById('nav-admin-tab');

  if (isAdminParam || isAuth) {
    if (headerBtn) headerBtn.classList.remove('hidden');
    if (navTab) navTab.classList.remove('hidden');
  } else {
    if (headerBtn) headerBtn.classList.add('hidden');
    if (navTab) navTab.classList.add('hidden');
  }
}
window.checkAdminAccess = checkAdminAccess;

// Maxfiy kombinatsiya: Ctrl + Shift + A (yoki Cmd + Shift + A) admin panelni ochadi
window.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
    e.preventDefault();
    openAdminPanelModal();
  }
});

function authenticateAdmin(pass) {
  const currentPass = (window.ECO_CONFIG && window.ECO_CONFIG.adminPassword) || DEFAULT_ECO_CONFIG.adminPassword;
  if (pass.trim() === currentPass.trim()) {
    sessionStorage.setItem('ECO_ADMIN_AUTH', 'true');
    checkAdminAccess();
    return true;
  }
  return false;
}

function logoutAdmin() {
  sessionStorage.removeItem('ECO_ADMIN_AUTH');
  checkAdminAccess();
  renderAdminPanelModal();
  if (typeof showToast === 'function') {
    showToast("Admin paneli qulflandi.", "info");
  }
}

// Admin Modal Oynasini ochish / yopish
function openAdminPanelModal() {
  const modal = document.getElementById('admin-panel-modal');
  if (!modal) return;
  renderAdminPanelModal();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.ecoAudio) window.ecoAudio.playClick();
}

function closeAdminPanelModal() {
  const modal = document.getElementById('admin-panel-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Modal ichini render qilish (Login yoki Dashboard)
function renderAdminPanelModal() {
  const container = document.getElementById('admin-modal-body');
  if (!container) return;

  if (!isAdminAuthenticated()) {
    // Parol so'rash ekrani
    container.innerHTML = `
      <div class="py-6 px-4 text-center max-w-sm mx-auto">
        <div class="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/10">
          <i class="fa-solid fa-lock animate-pulse"></i>
        </div>
        <h3 class="text-xl font-black text-white mb-1">Asoschi Xavfsizlik Tizimi</h3>
        <p class="text-xs text-slate-400 mb-6">Ushbu boshqaruv paneli faqat platforma asoschisi <strong>Akobir</strong> uchun himoyalangan.</p>

        <form onsubmit="handleAdminLoginSubmit(event)" class="space-y-4">
          <div>
            <label class="block text-left text-xs font-bold text-slate-300 mb-1.5">Maxsus Admin Paroli:</label>
            <div class="relative">
              <input type="password" id="admin-login-pass" placeholder="Parolni kiriting..." required
                class="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition-all outline-none">
              <button type="button" onclick="toggleAdminPassVisibility('admin-login-pass')" class="absolute right-3 top-3.5 text-slate-400 hover:text-slate-200 text-xs">
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
            <p id="admin-login-error" class="hidden text-rose-400 text-xs font-semibold mt-2 text-left">
              <i class="fa-solid fa-circle-exclamation mr-1"></i> Parol noto'g'ri! Iltimos qaytadan tekshirib ko'ring.
            </p>
          </div>

          <div class="pt-2 flex items-center gap-3">
            <button type="button" onclick="closeAdminPanelModal()" class="w-1/2 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-bold transition-all">
              Bekor qilish
            </button>
            <button type="submit" class="w-1/2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black shadow-lg shadow-amber-500/20 transition-all">
              Kirish <i class="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        </form>
      </div>
    `;
    setTimeout(() => {
      const inp = document.getElementById('admin-login-pass');
      if (inp) inp.focus();
    }, 100);
  } else {
    // To'liq Dashboard
    renderAdminDashboardContent();
  }
}

// Parol ko'rsatish/yashirish
function toggleAdminPassVisibility(inputId) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

// Loginni tasdiqlash
function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const passInp = document.getElementById('admin-login-pass');
  const errText = document.getElementById('admin-login-error');
  if (!passInp) return;

  if (authenticateAdmin(passInp.value)) {
    if (errText) errText.classList.add('hidden');
    renderAdminDashboardContent();
    if (typeof showToast === 'function') {
      showToast("Xush kelibsiz, Akobir! Admin paneli faollashtirildi.", "success");
    }
  } else {
    if (errText) errText.classList.remove('hidden');
    passInp.classList.add('border-rose-500');
    passInp.select();
  }
}

let activeAdminTab = 'timers';

// Admin Boshqaruv Dashboardini chizish
function renderAdminDashboardContent() {
  const container = document.getElementById('admin-modal-body');
  if (!container) return;

  const cfg = window.ECO_CONFIG || DEFAULT_ECO_CONFIG;

  container.innerHTML = `
    <div class="flex flex-col h-full max-h-[82vh]">
      <!-- Header Bar inside Modal -->
      <div class="flex items-center justify-between pb-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center text-xl">
            <i class="fa-solid fa-crown"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-lg font-black text-white">Asoschi Boshqaruv Markazi</h3>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Faol (Akobir)
              </span>
            </div>
            <p class="text-xs text-slate-400">Barcha o'yin vaqtlari, savollar soni va platforma sozlamalarini boshqarish</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="resetEcoConfig()" title="Standart holatga qaytarish" class="px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5">
            <i class="fa-solid fa-rotate-left"></i> <span class="hidden sm:inline">Standart</span>
          </button>
          <button onclick="logoutAdmin()" title="Qulflash" class="px-3 py-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-bold transition-all flex items-center gap-1.5">
            <i class="fa-solid fa-lock"></i> <span class="hidden sm:inline">Qulflash</span>
          </button>
        </div>
      </div>

      <!-- Admin Tabs Navigation -->
      <div class="flex items-center gap-2 overflow-x-auto py-3 border-b border-slate-800 custom-scrollbar text-xs">
        <button onclick="switchAdminSubTab('timers')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'timers' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-stopwatch mr-1"></i> O'yin Vaqtlari (Taymerlar)
        </button>

        <button onclick="switchAdminSubTab('questions')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'questions' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-list-check mr-1"></i> Savollar Soni (Raund)
        </button>

        <button onclick="switchAdminSubTab('speed')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'speed' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-bolt mr-1"></i> Tezlik & Rejim
        </button>

        <button onclick="switchAdminSubTab('profile')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'profile' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-address-card mr-1"></i> Asoschi & Shior
        </button>

        <button onclick="switchAdminSubTab('waste_manager')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'waste_manager' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-boxes-stacked mr-1"></i> Baza Statistikasi
        </button>

        <button onclick="switchAdminSubTab('users')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'users' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-users mr-1"></i> 👥 Foydalanuvchilar (<span id="admin-users-tab-count">${(typeof window.loadUsersRegistry === 'function' ? window.loadUsersRegistry().length : 1)}</span>)
        </button>
        <button onclick="switchAdminSubTab('videos')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'videos' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-video mr-1"></i> 🎥 Video Darslar
        </button>

        <button onclick="switchAdminSubTab('security')" class="admin-tab-btn px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${activeAdminTab === 'security' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-900'}">
          <i class="fa-solid fa-key mr-1"></i> Parol O'zgartirish
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="flex-1 overflow-y-auto py-4 custom-scrollbar">
        ${renderCurrentAdminTab(cfg)}
      </div>

      <!-- Footer Action Bar -->
      <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
        <span class="text-xs text-slate-500">
          O'zgarishlar darhol brauzer xotirasiga (localStorage) yoziladi.
        </span>
        <div class="flex items-center gap-3">
          <button onclick="closeAdminPanelModal()" class="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-bold transition-all">
            Yopish
          </button>
          <button onclick="applyAllAdminSettings()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 text-xs font-black shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-floppy-disk"></i> Sozlamalarni Saqlash
          </button>
        </div>
      </div>
    </div>
  `;
}

function switchAdminSubTab(tabName) {
  activeAdminTab = tabName;
  renderAdminDashboardContent();
}

function renderCurrentAdminTab(cfg) {
  switch (activeAdminTab) {
    case 'timers':
      return `
        <div class="space-y-6">
          
          <!-- Tezkor tugmalar barcha o'yinlarga bir xil vaqt berish uchun -->
          <div class="bg-slate-950/70 p-4 rounded-2xl border border-amber-500/30">
            <h4 class="text-xs font-black uppercase text-amber-400 tracking-wider mb-2 flex items-center gap-2">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Tezkor Ommaviy Taymer: Barcha O'yinlarga Bir Xil Vaqt Belgilash
            </h4>
            <p class="text-xs text-slate-400 mb-3">Tugmani bosishingiz bilan hamma o'yinlarning (1-Saralash, 2-Audit, 3-Ekspertiza va 4-13 mini o'yinlar) vaqti bir xil bo'ladi:</p>
            <div class="flex flex-wrap gap-2">
              <button onclick="setAllTimers(5)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">⚡ 5 soniya (Super Tez)</button>
              <button onclick="setAllTimers(10)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">⏱️ 10 soniya (Standart)</button>
              <button onclick="setAllTimers(15)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">⏱️ 15 soniya (O'rtacha)</button>
              <button onclick="setAllTimers(20)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">⏱️ 20 soniya (Batafsil)</button>
              <button onclick="setAllTimers(30)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">⏱️ 30 soniya (Keng)</button>
              <button onclick="setAllTimers(60)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">⏱️ 60 soniya (Cheksizdek)</button>
            </div>
          </div>

          <!-- Alohida o'yinlar taymerlari -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- 1-O'yin: Saralash -->
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-recycle"></i> 1-Saralash O'yini Taymeri
                </span>
                <span id="label-sorting-timer" class="text-xs font-black text-white px-2 py-0.5 rounded bg-amber-500/20">${cfg.sortingTimer} soniya</span>
              </div>
              <input type="range" id="input-sorting-timer" min="3" max="60" value="${cfg.sortingTimer}"
                oninput="document.getElementById('label-sorting-timer').textContent = this.value + ' soniya'"
                class="w-full accent-amber-500 cursor-pointer">
              <p class="text-[11px] text-slate-400 mt-1.5">Har bir chiqindi qutisiga tashlash uchun ajratiladigan vaqt.</p>
            </div>

            <!-- 2-O'yin: Audit Simulyatori -->
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-industry"></i> 2-Audit Simulyatori Taymeri
                </span>
                <span id="label-audit-timer" class="text-xs font-black text-white px-2 py-0.5 rounded bg-blue-500/20">${cfg.auditTimer} soniya</span>
              </div>
              <input type="range" id="input-audit-timer" min="3" max="60" value="${cfg.auditTimer}"
                oninput="document.getElementById('label-audit-timer').textContent = this.value + ' soniya'"
                class="w-full accent-blue-500 cursor-pointer">
              <p class="text-[11px] text-slate-400 mt-1.5">Sanoat auditi keysiga xulosa berish vaqti.</p>
            </div>

            <!-- 3-O'yin: Ekspertiza Kvesti -->
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-scale-balanced"></i> 3-Ekspertiza Kvesti Taymeri
                </span>
                <span id="label-expertise-timer" class="text-xs font-black text-white px-2 py-0.5 rounded bg-purple-500/20">${cfg.expertiseTimer} soniya</span>
              </div>
              <input type="range" id="input-expertise-timer" min="3" max="60" value="${cfg.expertiseTimer}"
                oninput="document.getElementById('label-expertise-timer').textContent = this.value + ' soniya'"
                class="w-full accent-purple-500 cursor-pointer">
              <p class="text-[11px] text-slate-400 mt-1.5">Davlat ekologik ekspertizasi keysi bo'yicha qaror vaqti.</p>
            </div>

            <!-- 4-13 Mini O'yinlar -->
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-gamepad"></i> 4-13 Qo'shimcha O'yinlar Taymeri
                </span>
                <span id="label-extra-timer" class="text-xs font-black text-white px-2 py-0.5 rounded bg-cyan-500/20">${cfg.extraGameTimer} soniya</span>
              </div>
              <input type="range" id="input-extra-timer" min="3" max="60" value="${cfg.extraGameTimer}"
                oninput="document.getElementById('label-extra-timer').textContent = this.value + ' soniya'"
                class="w-full accent-cyan-500 cursor-pointer">
              <p class="text-[11px] text-slate-400 mt-1.5">Logistika, poligon, biogaz va neft simulyatorlari vaqti.</p>
            </div>

          </div>
        </div>
      `;

    case 'questions':
      return `
        <div class="space-y-6">
          <div class="bg-slate-950/70 p-4 rounded-2xl border border-emerald-500/30">
            <h4 class="text-xs font-black uppercase text-emerald-400 tracking-wider mb-2 flex items-center gap-2">
              <i class="fa-solid fa-layer-group"></i> Har Bir Raundda Nechtadan Savol Berilishi
            </h4>
            <p class="text-xs text-slate-400 mb-3">Har gal o'yin boshlanganda bazadan qancha savol tasodifiy tanlab olinishini o'rnatish:</p>
            <div class="flex flex-wrap gap-2">
              <button onclick="setAllBatchSizes(10)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">10 tadan raund</button>
              <button onclick="setAllBatchSizes(15)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">15 tadan raund</button>
              <button onclick="setAllBatchSizes(25)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">25 tadan raund (Standart)</button>
              <button onclick="setAllBatchSizes(50)" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 border border-slate-700 text-xs font-bold transition-all">50 tadan raund (Katta)</button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 1-Saralash hajmi -->
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center">
              <span class="text-xs font-bold text-amber-400 block mb-2">1-Saralash O'yini</span>
              <div class="text-2xl font-black text-white mb-2" id="val-sorting-batch">${cfg.sortingBatchSize} ta</div>
              <input type="range" id="input-sorting-batch" min="5" max="100" step="5" value="${cfg.sortingBatchSize}"
                oninput="document.getElementById('val-sorting-batch').textContent = this.value + ' ta'"
                class="w-full accent-amber-500 cursor-pointer">
              <span class="text-[10px] text-slate-500 block mt-2">Jami baza: 150 ta chiqindi</span>
            </div>

            <!-- 2-Audit hajmi -->
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center">
              <span class="text-xs font-bold text-blue-400 block mb-2">2-Audit Simulyatori</span>
              <div class="text-2xl font-black text-white mb-2" id="val-audit-batch">${cfg.auditBatchSize} ta</div>
              <input type="range" id="input-audit-batch" min="5" max="100" step="5" value="${cfg.auditBatchSize}"
                oninput="document.getElementById('val-audit-batch').textContent = this.value + ' ta'"
                class="w-full accent-blue-500 cursor-pointer">
              <span class="text-[10px] text-slate-500 block mt-2">Jami baza: 100 ta professional keys</span>
            </div>

            <!-- 3-Ekspertiza hajmi -->
            <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center">
              <span class="text-xs font-bold text-purple-400 block mb-2">3-Ekspertiza Kvesti</span>
              <div class="text-2xl font-black text-white mb-2" id="val-expertise-batch">${cfg.expertiseBatchSize} ta</div>
              <input type="range" id="input-expertise-batch" min="5" max="100" step="5" value="${cfg.expertiseBatchSize}"
                oninput="document.getElementById('val-expertise-batch').textContent = this.value + ' ta'"
                class="w-full accent-purple-500 cursor-pointer">
              <span class="text-[10px] text-slate-500 block mt-2">Jami baza: 100 ta davlat ekspertizasi</span>
            </div>
          </div>
        </div>
      `;

    case 'speed':
      return `
        <div class="space-y-6 max-w-xl">
          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <h4 class="text-xs font-black text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <i class="fa-solid fa-forward-step text-emerald-400"></i> Avtomatik Keyingi Savolga O'tish Kechikishi (ms)
            </h4>
            <p class="text-xs text-slate-400 mb-4">
              Javob to'g'ri yoki noto'g'ri deb bosilgandan keyin qancha vaqt yashil/qizil rangda turib keyingi savolga o'tishi:
            </p>
            <div class="space-y-3">
              <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-emerald-500/50">
                <input type="radio" name="auto-advance-delay" value="250" ${cfg.autoAdvanceDelay === 250 ? 'checked' : ''} class="accent-emerald-500">
                <div>
                  <span class="text-xs font-bold text-white block">250 ms — Chaqmoqdek Tez</span>
                  <span class="text-[11px] text-slate-400">Javob tanlanishi bilan bir zumda keyingisiga o'tadi</span>
                </div>
              </label>

              <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-emerald-500/50">
                <input type="radio" name="auto-advance-delay" value="450" ${cfg.autoAdvanceDelay === 450 ? 'checked' : ''} class="accent-emerald-500">
                <div>
                  <span class="text-xs font-bold text-white block">450 ms — Tavsiya Etilgan Dinamik Rejim</span>
                  <span class="text-[11px] text-slate-400">To'g'ri/xato ekanligini ko'rish uchun yetarli va silliq</span>
                </div>
              </label>

              <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-emerald-500/50">
                <input type="radio" name="auto-advance-delay" value="800" ${cfg.autoAdvanceDelay === 800 ? 'checked' : ''} class="accent-emerald-500">
                <div>
                  <span class="text-xs font-bold text-white block">800 ms — O'rtacha Xotirjam Rejim</span>
                  <span class="text-[11px] text-slate-400">Javob tahliliga sal ko'proq vaqt ajratiladi</span>
                </div>
              </label>

              <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-emerald-500/50">
                <input type="radio" name="auto-advance-delay" value="1200" ${cfg.autoAdvanceDelay === 1200 ? 'checked' : ''} class="accent-emerald-500">
                <div>
                  <span class="text-xs font-bold text-white block">1200 ms (1.2 soniya) — Batafsil Kuzatish</span>
                  <span class="text-[11px] text-slate-400">Izohlarni yaxshiroq ko'rish imkoni</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      `;

    case 'profile':
      return `
        <div class="space-y-4 max-w-xl">
          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 class="text-xs font-black text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i class="fa-solid fa-id-card"></i> Asoschi va Platforma Rekvizitlari
            </h4>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Asoschi Ismi:</label>
              <input type="text" id="cfg-founder-name" value="${cfg.founderName}"
                class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Telegram Foydalanuvchi:</label>
                <input type="text" id="cfg-founder-tg" value="${cfg.founderTelegram}"
                  class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Telefon Raqami:</label>
                <input type="text" id="cfg-founder-phone" value="${cfg.founderPhone}"
                  class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Platforma Bosh Shiori (Header va Splashda):</label>
              <input type="text" id="cfg-platform-slogan" value="${cfg.platformSlogan}"
                class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500">
            </div>
          </div>
        </div>
      `;

    case 'waste_manager':
      return `
        <div class="space-y-5">
          <!-- Umumiy Baza Statistikasi -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <span class="text-xs text-slate-400 block mb-1">1-Saralash Chiqindilari</span>
              <span class="text-2xl font-black text-amber-400">150 ta</span>
              <span class="text-[10px] text-slate-500 block mt-1">100 ta asosiy + 50 ta qiyin</span>
            </div>

            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <span class="text-xs text-slate-400 block mb-1">2-Sanoat Auditi Keyslari</span>
              <span class="text-2xl font-black text-blue-400">100 ta</span>
              <span class="text-[10px] text-slate-500 block mt-1">Chuqur tafakkurli texnik keys</span>
            </div>

            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <span class="text-xs text-slate-400 block mb-1">3-Ekspertiza Kvesti Keyslari</span>
              <span class="text-2xl font-black text-purple-400">100 ta</span>
              <span class="text-[10px] text-slate-500 block mt-1">Davlat ekologik ekspertizasi</span>
            </div>
          </div>

          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <h4 class="text-xs font-black text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i class="fa-solid fa-circle-info"></i> Baza Ma'lumotlarini Eksport / Tahlil Qilish
            </h4>
            <p class="text-xs text-slate-400 mb-4">
              Platforma bazasida jami <strong>350 ta</strong> professional savol va chiqindi ma'lumotlari mavjud bo'lib, har bir o'yinda belgilangan vaqt va random tartibda o'quvchilarga taqdim etiladi.
            </p>
            <div class="flex items-center gap-3">
              <button onclick="downloadPlatformFullReport()" class="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white transition-all flex items-center gap-2">
                <i class="fa-solid fa-file-arrow-down text-emerald-400"></i> Baza Hisobotini Yuklab Olish (JSON)
              </button>
            </div>
          </div>
        </div>
      `;

    case 'users':
      return renderAdminUsersTabContent();

    case 'videos':
      return renderAdminVideosTabContent();

    case 'security':
      return `
        <div class="space-y-4 max-w-md">
          <div class="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 class="text-xs font-black text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved"></i> Admin Parolini Yangilash
            </h4>
            <p class="text-xs text-slate-400">
              Admin panelingizga faqat o'zingiz kirishingiz uchun yangi parol o'rnating:
            </p>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Yangi Parol:</label>
              <div class="relative">
                <input type="password" id="cfg-new-pass" placeholder="Yangi parolni kiriting..."
                  class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500">
                <button type="button" onclick="toggleAdminPassVisibility('cfg-new-pass')" class="absolute right-3 top-3 text-slate-400 text-xs">
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1">Parolni Tasdiqlash:</label>
              <input type="password" id="cfg-new-pass-confirm" placeholder="Qaytadan kiriting..."
                class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500">
            </div>

            <button onclick="changeAdminPasswordDirectly()" class="w-full py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-white text-xs font-black shadow-lg shadow-rose-500/20 transition-all">
              Parolni Yangilash
            </button>
          </div>
        </div>
      `;

    default:
      return '';
  }
}

// Barcha taymerlarni bir xil qilib sozlash
function setAllTimers(seconds) {
  const cfg = {
    sortingTimer: seconds,
    auditTimer: seconds,
    expertiseTimer: seconds,
    extraGameTimer: seconds
  };
  saveEcoConfig(cfg, false);
  renderAdminDashboardContent();
  if (typeof showToast === 'function') {
    showToast(`Barcha o'yin vaqtlari ${seconds} soniyaga sozlandi!`, "success");
  }
}

// Barcha raundlardagi savollar sonini birdan sozlash
function setAllBatchSizes(count) {
  const cfg = {
    sortingBatchSize: count,
    auditBatchSize: count,
    expertiseBatchSize: count
  };
  saveEcoConfig(cfg, false);
  renderAdminDashboardContent();
  if (typeof showToast === 'function') {
    showToast(`Barcha raundlar ${count} tadan savolga sozlandi!`, "success");
  }
}

// Barcha sozlamalarni formadan o'qib saqlash
function applyAllAdminSettings() {
  const updated = {};

  // Timers
  const inpSortTimer = document.getElementById('input-sorting-timer');
  if (inpSortTimer) updated.sortingTimer = parseInt(inpSortTimer.value) || 10;

  const inpAuditTimer = document.getElementById('input-audit-timer');
  if (inpAuditTimer) updated.auditTimer = parseInt(inpAuditTimer.value) || 10;

  const inpExpTimer = document.getElementById('input-expertise-timer');
  if (inpExpTimer) updated.expertiseTimer = parseInt(inpExpTimer.value) || 10;

  const inpExtraTimer = document.getElementById('input-extra-timer');
  if (inpExtraTimer) updated.extraGameTimer = parseInt(inpExtraTimer.value) || 10;

  // Batch sizes
  const inpSortBatch = document.getElementById('input-sorting-batch');
  if (inpSortBatch) updated.sortingBatchSize = parseInt(inpSortBatch.value) || 25;

  const inpAuditBatch = document.getElementById('input-audit-batch');
  if (inpAuditBatch) updated.auditBatchSize = parseInt(inpAuditBatch.value) || 25;

  const inpExpBatch = document.getElementById('input-expertise-batch');
  if (inpExpBatch) updated.expertiseBatchSize = parseInt(inpExpBatch.value) || 25;

  // Delay
  const selectedDelay = document.querySelector('input[name="auto-advance-delay"]:checked');
  if (selectedDelay) updated.autoAdvanceDelay = parseInt(selectedDelay.value) || 450;

  // Profile
  const inpName = document.getElementById('cfg-founder-name');
  if (inpName && inpName.value.trim()) updated.founderName = inpName.value.trim();

  const inpTg = document.getElementById('cfg-founder-tg');
  if (inpTg && inpTg.value.trim()) {
    let tg = inpTg.value.trim();
    if (!tg.startsWith('@') && !tg.startsWith('http')) tg = '@' + tg;
    updated.founderTelegram = tg;
    updated.founderTelegramUrl = tg.startsWith('http') ? tg : `https://t.me/${tg.replace('@', '')}`;
  }

  const inpPhone = document.getElementById('cfg-founder-phone');
  if (inpPhone && inpPhone.value.trim()) {
    updated.founderPhone = inpPhone.value.trim();
    updated.founderPhoneRaw = inpPhone.value.trim().replace(/[^0-9+]/g, '');
  }

  const inpSlogan = document.getElementById('cfg-platform-slogan');
  if (inpSlogan && inpSlogan.value.trim()) updated.platformSlogan = inpSlogan.value.trim();

  saveEcoConfig(updated, true);
  closeAdminPanelModal();
}

// Parolni to'g'ridan-to'g'ri o'zgartirish
function changeAdminPasswordDirectly() {
  const p1 = document.getElementById('cfg-new-pass');
  const p2 = document.getElementById('cfg-new-pass-confirm');
  if (!p1 || !p2) return;

  if (p1.value.length < 4) {
    alert("Yangi parol kamida 4 ta belgidan iborat bo'lishi kerak!");
    return;
  }
  if (p1.value !== p2.value) {
    alert("Kiritilgan yangi parollar bir-biriga mos kelmadi!");
    return;
  }

  saveEcoConfig({ adminPassword: p1.value.trim() }, false);
  alert("Admin paroli muvaffaqiyatli yangilandi! Ushbu yangi parolni eslab qoling.");
  p1.value = '';
  p2.value = '';
}

// Platforma umumiy hisobotini JSON qilib yuklab olish
function downloadPlatformFullReport() {
  const data = {
    platform: "Akosh Eco / EcoAkobir",
    founder: window.ECO_CONFIG.founderName,
    exportDate: new Date().toISOString(),
    config: window.ECO_CONFIG,
    totalSortingItems: (typeof ALL_150_SORTING_ITEMS !== 'undefined') ? ALL_150_SORTING_ITEMS.length : 150,
    totalAuditQuestions: (typeof ALL_100_AUDIT_QUESTIONS !== 'undefined') ? ALL_100_AUDIT_QUESTIONS.length : 100,
    totalExpertiseQuestions: (typeof ALL_100_EXPERTISE_QUESTIONS !== 'undefined') ? ALL_100_EXPERTISE_QUESTIONS.length : 100
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `AkoshEco_Admin_Report_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Klaviatura tezkor tugmasi: Ctrl + Alt + A bosilganda Admin Panel ochiladi
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A' || e.key === 'ф' || e.key === 'Ф')) {
    e.preventDefault();
    openAdminPanelModal();
  }
});

// Boshlang'ich yuklash
loadEcoConfig();
window.loadEcoConfig = loadEcoConfig;
window.saveEcoConfig = saveEcoConfig;
window.openAdminPanelModal = openAdminPanelModal;
window.closeAdminPanelModal = closeAdminPanelModal;


// =======================================================================
// ADMIN VIDEO DARSLAR BOSHQARUVI (Admin Video Management)
// =======================================================================
function renderAdminVideosTabContent() {
  const videos = (window.EcoVideoManager && window.EcoVideoManager.getVideos()) || [];

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Video Yaratish Formasi -->
      <div class="bg-slate-950 p-5 rounded-2xl border border-amber-500/40 shadow-xl">
        <h4 class="text-xs font-black text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <i class="fa-solid fa-plus-circle"></i> Yangi Video Dars Yaratish / Qo'shish
        </h4>
        <p class="text-xs text-slate-400 mb-4">Ushbu dars platforma talabalari uchun "Video Darslar" bo'limida avtomatik paydo bo'ladi.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
          <div>
            <label class="block text-slate-300 font-bold mb-1">Video Nomi / Sarlavhasi:</label>
            <input type="text" id="admin-new-vid-title" placeholder="Masalan: Plastik Piroliz Zavodi Amaliyoti" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-amber-500 focus:outline-none">
          </div>

          <div>
            <label class="block text-slate-300 font-bold mb-1">Kategoriya:</label>
            <select id="admin-new-vid-cat" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-amber-500 focus:outline-none">
              <option value="Saralash va Qayta ishlash">Saralash va Qayta ishlash</option>
              <option value="Ekologik Audit">Ekologik Audit</option>
              <option value="Qayta ishlash">Qayta ishlash</option>
              <option value="Biotexnologiya">Biotexnologiya</option>
              <option value="Biologik Xavfsizlik">Biologik Xavfsizlik</option>
              <option value="Muhandislik">Muhandislik</option>
            </select>
          </div>

          <div>
            <label class="block text-slate-300 font-bold mb-1">Video Havolasi (YouTube Embed yoki URL):</label>
            <input type="text" id="admin-new-vid-url" placeholder="https://www.youtube.com/watch?v=..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-amber-500 focus:outline-none">
          </div>

          <div>
            <label class="block text-slate-300 font-bold mb-1">Muqova / Rasm Havolasi (Thumbnail URL):</label>
            <input type="text" id="admin-new-vid-thumb" placeholder="https://images.unsplash.com/..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-amber-500 focus:outline-none">
          </div>

          <div>
            <label class="block text-slate-300 font-bold mb-1">Davomiyligi (Vaqti):</label>
            <input type="text" id="admin-new-vid-duration" placeholder="Masalan: 12:45" value="10:00" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-amber-500 focus:outline-none">
          </div>

          <div>
            <label class="block text-slate-300 font-bold mb-1">Ko'rganlik uchun Mukofot XP:</label>
            <input type="number" id="admin-new-vid-xp" placeholder="60" value="60" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-amber-500 focus:outline-none">
          </div>
        </div>

        <div class="mb-4 text-xs">
          <label class="block text-slate-300 font-bold mb-1">Video Dars Tavsifi:</label>
          <textarea id="admin-new-vid-desc" rows="2" placeholder="Ushbu darsda o'rganiladigan asosiy bilimlar..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-amber-500 focus:outline-none text-xs"></textarea>
        </div>

        <button onclick="adminSaveNewVideo()" class="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20">
          <i class="fa-solid fa-cloud-arrow-up"></i> Videoni Saqlash va Saytga Joylash
        </button>
      </div>

      <!-- Mavjud Videolar Ro'yxati -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
            <i class="fa-solid fa-list-ul text-cyan-400"></i> Barcha Faol Video Darslar (${videos.length} ta)
          </h4>
          <span class="text-[11px] text-slate-500">Istalgan videoni o'chirish yoki yangilash mumkin</span>
        </div>

        <div class="space-y-2.5 max-h-72 overflow-y-auto custom-scrollbar pr-1">
          ${videos.map((vid, idx) => `
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-3">
                <span class="w-6 h-6 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-[11px] shrink-0">
                  ${idx + 1}
                </span>
                <div class="w-12 h-9 rounded-lg bg-slate-900 overflow-hidden shrink-0 border border-slate-800">
                  <img src="${vid.thumbnail}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=100';">
                </div>
                <div>
                  <h5 class="font-bold text-white line-clamp-1">${vid.title}</h5>
                  <div class="flex items-center gap-2 text-[10px] text-slate-400">
                    <span class="text-emerald-400">${vid.category}</span> •
                    <span>${vid.duration}</span> •
                    <span class="text-amber-400">+${vid.xp} XP</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                <button onclick="adminDeleteVideoById('${vid.id}')" title="Videoni o'chirish" class="px-2.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/30 text-rose-400 rounded-lg text-xs font-bold transition-all cursor-pointer">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function adminSaveNewVideo() {
  const title = document.getElementById('admin-new-vid-title').value.trim();
  const category = document.getElementById('admin-new-vid-cat').value;
  const url = document.getElementById('admin-new-vid-url').value.trim();
  const thumb = document.getElementById('admin-new-vid-thumb').value.trim();
  const duration = document.getElementById('admin-new-vid-duration').value.trim();
  const xp = document.getElementById('admin-new-vid-xp').value;
  const desc = document.getElementById('admin-new-vid-desc').value.trim();

  if (!title) {
    alert("Iltimos, video nomini kiriting!");
    return;
  }

  if (window.EcoVideoManager) {
    window.EcoVideoManager.addVideo({
      title: title,
      category: category,
      videoUrl: url || "https://www.youtube.com/embed/OasbYWF4_S8",
      thumbnail: thumb || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80",
      duration: duration || "10:00",
      xp: xp || 60,
      desc: desc || "Ushbu video dars platforma administratori tomonidan qo'shildi."
    });

    renderAdminDashboardContent();
    if (typeof showToast === 'function') {
      showToast("Yangi video dars muvaffaqiyatli yaratildi va e'lon qilindi!", "success");
    }
  }
}
window.adminSaveNewVideo = adminSaveNewVideo;

function adminDeleteVideoById(videoId) {
  if (confirm("Haqiqatan ham ushbu video darsni o'chirmoqchimisiz?")) {
    if (window.EcoVideoManager) {
      window.EcoVideoManager.deleteVideo(videoId);
      renderAdminDashboardContent();
      if (typeof showToast === 'function') {
        showToast("Video dars muvaffaqiyatli o'chirildi.");
      }
    }
  }
}
window.adminDeleteVideoById = adminDeleteVideoById;


// =======================================================================
// ADMIN FOYDALANUVCHILARNI BOSHQARISH (Admin Users Management System)
// =======================================================================
let adminUsersSearchFilter = '';

function renderAdminUsersTabContent() {
  const users = (typeof window.loadUsersRegistry === 'function') ? window.loadUsersRegistry() : [];
  const totalXP = users.reduce((acc, u) => acc + (u.xp || 0), 0);
  const activeCount = users.filter(u => u.tg).length;

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Stats & Quick Actions Banner -->
      <div class="bg-slate-950 p-5 rounded-2xl border border-amber-500/40 shadow-xl">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs uppercase font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-0.5 rounded-full">
                Foydalanuvchilar Markazi
              </span>
              <span class="text-xs text-slate-400 font-bold">
                Jami: <strong class="text-white">${users.length}</strong> nafar
              </span>
            </div>
            <h3 class="text-lg font-black text-white mt-1 flex items-center gap-2">
              <i class="fa-solid fa-users-gear text-amber-400"></i> Foydalanuvchilar va Telegram Profillari
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">
              Platformadan foydalanuvchi barcha talabalar, ularning Telegram profillari (@username), to'plangan XP ballari va darajalari.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="toggleAdminAddUserForm()" class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-user-plus"></i> + Yangi Foydalanuvchi Qo'shish
            </button>
            <button onclick="adminCleanLeaderboard()" title="Liderlar jadvalini sinxronlash va yangilash" class="px-3.5 py-2 bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer">
              <i class="fa-solid fa-rotate text-amber-400"></i> Sinxronlash
            </button>
          </div>
        </div>

        <!-- Metric Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
          <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase font-bold block">Foydalanuvchilar</span>
            <span class="text-base font-black text-white">${users.length} nafar</span>
          </div>
          <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase font-bold block">Jami To'plangan XP</span>
            <span class="text-base font-black text-emerald-400">${totalXP.toLocaleString()} XP</span>
          </div>
          <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase font-bold block">Telegram Profillar</span>
            <span class="text-base font-black text-sky-400">${activeCount} ta ulangan</span>
          </div>
          <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span class="text-[10px] text-slate-400 uppercase font-bold block">Liderlar Bazasi</span>
            <span class="text-base font-black text-amber-400">Haqiqiy Talabalar</span>
          </div>
        </div>
      </div>

      <!-- Add User Form (Collapsible) -->
      <div id="admin-add-user-card" class="hidden bg-slate-950 p-5 rounded-2xl border border-emerald-500/40 shadow-xl transition-all">
        <h4 class="text-xs font-black text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <i class="fa-solid fa-user-plus"></i> Yangi Foydalanuvchi / Talaba Qo'shish
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
          <div>
            <label class="block text-slate-300 font-bold mb-1">Ism va Familiya:</label>
            <input type="text" id="admin-new-user-name" placeholder="Masalan: Sardor Aliyev" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-slate-300 font-bold mb-1">Telegram Foydalanuvchi Nomi (@username):</label>
            <div class="relative">
              <span class="absolute left-3 top-2 text-slate-500">@</span>
              <input type="text" id="admin-new-user-tg" placeholder="sardor_eco" class="w-full bg-slate-900 border border-slate-700 rounded-xl pl-7 pr-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
            </div>
          </div>
          <div>
            <label class="block text-slate-300 font-bold mb-1">Universitet / Ta'lim Muassasasi:</label>
            <input type="text" id="admin-new-user-uni" placeholder="Masalan: ToshDTU" value="O'zbekiston Milliy Universiteti" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-slate-300 font-bold mb-1">Guruh / Yo'nalish:</label>
            <input type="text" id="admin-new-user-group" placeholder="Masalan: 301-guruh" value="Ekologiya 2-kurs" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-slate-300 font-bold mb-1">Boshlang'ich XP balli:</label>
            <input type="number" id="admin-new-user-xp" placeholder="200" value="200" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-slate-300 font-bold mb-1">Rol / Status:</label>
            <select id="admin-new-user-role" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
              <option value="Talaba">Talaba</option>
              <option value="Auditor">Auditor</option>
              <option value="Inspektor">Inspektor</option>
              <option value="Ekspert">Ekspert</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
          <button onclick="toggleAdminAddUserForm()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-all">Bekor qilish</button>
          <button onclick="adminSaveManualUser()" class="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-check"></i> Saqlash va Liderlarga Qo'shish
          </button>
        </div>
      </div>

      <!-- Search & Filters -->
      <div class="flex items-center gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <i class="fa-solid fa-magnifying-glass text-slate-500 ml-2"></i>
        <input type="text" id="admin-users-search-input" oninput="adminFilterUsersList(this.value)" placeholder="Foydalanuvchi ismi yoki Telegram (@username) bo'yicha tezkor qidirish..." class="w-full bg-transparent text-xs text-white placeholder-slate-500 outline-none">
        <span id="admin-users-filter-stats" class="text-[11px] text-slate-400 whitespace-nowrap font-semibold mr-2">${users.length} nafar</span>
      </div>

      <!-- Users Table / Card List -->
      <div id="admin-users-list-container" class="space-y-3">
        ${renderAdminUserCardsHtml(users)}
      </div>

    </div>
  `;
}

function renderAdminUserCardsHtml(users) {
  if (!users || users.length === 0) {
    return `
      <div class="py-12 text-center bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
        <i class="fa-solid fa-user-slash text-3xl text-slate-600 mb-2"></i>
        <h5 class="text-sm font-bold text-white">Hech qanday foydalanuvchi topilmadi</h5>
        <p class="text-xs text-slate-400">Qidiruv so'zini o'zgartiring yoki yangi foydalanuvchi qo'shing.</p>
      </div>
    `;
  }

  return users.map((u, idx) => {
    const cleanTg = (u.tg || '').replace(/^@/, '');
    const avPrimary = cleanTg ? `https://t.me/i/userpic/320/${cleanTg}.jpg` : `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=059669&color=ffffff&bold=true`;
    const avFallback = cleanTg ? `https://unavatar.io/telegram/${cleanTg}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=059669&color=ffffff&bold=true`;
    const isFounder = cleanTg.toLowerCase() === 'akoshprod' || (u.name || '').includes('Asoschi');

    return `
      <div class="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-4 rounded-2xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <!-- Left: Avatar, Name, Telegram -->
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border border-slate-700 bg-slate-950 relative shadow-md flex items-center justify-center">
            <img src="${avPrimary}" alt="${u.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='${avFallback}';" />
          </div>

          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="text-sm font-black text-white flex items-center gap-1.5">
                <span>${u.name}</span>
                ${isFounder ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-slate-950 shadow-sm">ASOSCHI</span>' : ''}
              </h4>
              
              <!-- Telegram Link Pill -->
              ${cleanTg ? `
                <a href="https://t.me/${cleanTg}" target="_blank" class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400 hover:text-sky-300 hover:bg-sky-500/25 text-xs font-bold transition-all shadow-sm">
                  <i class="fa-brands fa-telegram text-sm"></i> @${cleanTg}
                  <i class="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-80"></i>
                </a>
              ` : `
                <span class="text-[11px] text-slate-500 italic">Telegram ulanmagan</span>
              `}
            </div>

            <div class="text-xs text-slate-400 mt-1 flex items-center gap-2 flex-wrap">
              <span><i class="fa-solid fa-graduation-cap text-emerald-400 mr-1"></i>${u.uni || "O'zMU"}</span>
              <span>•</span>
              <span><i class="fa-solid fa-user-group text-slate-500 mr-1"></i>${u.group || "Guruh"}</span>
              <span>•</span>
              <span class="text-[11px] text-slate-500">Ro'yxatdan: ${u.registeredAt || "Yaqinda"}</span>
            </div>
          </div>
        </div>

        <!-- Right: Stats & Actions -->
        <div class="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
          <div class="flex items-center gap-3">
            <div class="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-center">
              <span class="text-[9px] uppercase font-bold text-slate-400 block">XP Balli</span>
              <span class="text-xs font-black text-emerald-400">${u.xp || 0} XP</span>
            </div>
            <div class="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-center">
              <span class="text-[9px] uppercase font-bold text-slate-400 block">Daraja</span>
              <span class="text-xs font-black text-amber-400">${u.level || Math.floor((u.xp || 0)/300) + 1}-daraja</span>
            </div>
            <div class="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-center">
              <span class="text-[9px] uppercase font-bold text-slate-400 block">Eco-Coin</span>
              <span class="text-xs font-black text-cyan-400">${u.ecoCoins || Math.floor((u.xp || 0)/2)}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-1.5">
            <button onclick="adminPromptEditUserXP('${u.id}')" title="XP ballini o'zgartirish" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs transition-all flex items-center justify-center cursor-pointer border border-slate-700">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            ${!isFounder ? `
              <button onclick="adminDeleteUser('${u.id}')" title="Foydalanuvchini o'chirish" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-400 text-xs transition-all flex items-center justify-center cursor-pointer border border-slate-700">
                <i class="fa-solid fa-trash"></i>
              </button>
            ` : ''}
          </div>
        </div>

      </div>
    `;
  }).join('');
}

function toggleAdminAddUserForm() {
  const card = document.getElementById('admin-add-user-card');
  if (card) {
    card.classList.toggle('hidden');
    if (!card.classList.contains('hidden')) {
      const nameInput = document.getElementById('admin-new-user-name');
      if (nameInput) setTimeout(() => nameInput.focus(), 150);
    }
  }
}
window.toggleAdminAddUserForm = toggleAdminAddUserForm;

function adminSaveManualUser() {
  const nameInput = document.getElementById('admin-new-user-name');
  const tgInput = document.getElementById('admin-new-user-tg');
  const uniInput = document.getElementById('admin-new-user-uni');
  const groupInput = document.getElementById('admin-new-user-group');
  const xpInput = document.getElementById('admin-new-user-xp');
  const roleInput = document.getElementById('admin-new-user-role');

  const name = nameInput ? nameInput.value.trim() : '';
  const tg = tgInput ? tgInput.value.replace(/^@/, '').trim() : '';
  const uni = uniInput ? uniInput.value.trim() : "O'zMU";
  const group = groupInput ? groupInput.value.trim() : "Ekologiya 1-bosqich";
  const xp = xpInput ? (parseInt(xpInput.value, 10) || 0) : 0;
  const role = roleInput ? roleInput.value : "Talaba";

  if (!name) {
    alert("Iltimos, foydalanuvchi ism va familiyasini kiriting!");
    return;
  }

  const users = (typeof window.loadUsersRegistry === 'function') ? window.loadUsersRegistry() : [];
  const newUser = {
    id: "user-" + (tg || Date.now()),
    name: name,
    tg: tg,
    uni: uni,
    group: group,
    role: role,
    xp: xp,
    level: Math.floor(xp / 300) + 1,
    ecoCoins: Math.floor(xp / 2),
    registeredAt: new Date().toLocaleDateString('uz-UZ'),
    lastActive: "Hozir faol"
  };

  users.push(newUser);
  if (typeof window.saveUsersRegistry === 'function') {
    window.saveUsersRegistry(users);
  }

  if (typeof syncLeaderboardWithPlayer === 'function') {
    syncLeaderboardWithPlayer();
  }

  renderAdminDashboardContent();
  if (typeof showToast === 'function') {
    showToast(`Yangi foydalanuvchi ${name} (@${tg || "yo'q"}) muvaffaqiyatli qo'shildi!`, "success");
  }
}
window.adminSaveManualUser = adminSaveManualUser;

function adminPromptEditUserXP(userId) {
  const users = (typeof window.loadUsersRegistry === 'function') ? window.loadUsersRegistry() : [];
  const target = users.find(u => u.id === userId);
  if (!target) return;

  const currentXP = target.xp || 0;
  const newXPStr = prompt(`"${target.name}" (@${target.tg || 'tg_yoq'}) uchun yangi XP miqdorini kiriting:`, currentXP);
  if (newXPStr === null) return;

  const newXP = parseInt(newXPStr, 10);
  if (isNaN(newXP) || newXP < 0) {
    alert("Noto'g'ri XP miqdori kiritildi!");
    return;
  }

  target.xp = newXP;
  target.level = Math.floor(newXP / 300) + 1;
  target.ecoCoins = Math.floor(newXP / 2);
  target.lastActive = "Hozir faol";

  if (typeof window.saveUsersRegistry === 'function') {
    window.saveUsersRegistry(users);
  }

  // Agar joriy o'yinchi bo'lsa, playerProfile ni ham yangilash
  if (typeof playerProfile !== 'undefined' && (playerProfile.name === target.name || playerProfile.telegramUsername === target.tg)) {
    playerProfile.xp = newXP;
    playerProfile.level = target.level;
    playerProfile.ecoCoins = target.ecoCoins;
    if (typeof saveProfile === 'function') saveProfile();
  }

  if (typeof syncLeaderboardWithPlayer === 'function') {
    syncLeaderboardWithPlayer();
  }

  renderAdminDashboardContent();
  if (typeof showToast === 'function') {
    showToast(`"${target.name}" ning XP balli ${newXP} ga o'zgartirildi!`, "success");
  }
}
window.adminPromptEditUserXP = adminPromptEditUserXP;

function adminDeleteUser(userId) {
  let users = (typeof window.loadUsersRegistry === 'function') ? window.loadUsersRegistry() : [];
  const target = users.find(u => u.id === userId);
  if (!target) return;

  if (confirm(`Haqiqatan ham "${target.name}" (@${target.tg || 'yoq'}) ni platformadan o'chirmoqchimisiz?`)) {
    users = users.filter(u => u.id !== userId);
    if (typeof window.saveUsersRegistry === 'function') {
      window.saveUsersRegistry(users);
    }
    if (typeof syncLeaderboardWithPlayer === 'function') {
      syncLeaderboardWithPlayer();
    }
    renderAdminDashboardContent();
    if (typeof showToast === 'function') {
      showToast(`Foydalanuvchi "${target.name}" o'chirildi.`);
    }
  }
}
window.adminDeleteUser = adminDeleteUser;

function adminCleanLeaderboard() {
  if (typeof syncLeaderboardWithPlayer === 'function') {
    syncLeaderboardWithPlayer();
  }
  renderAdminDashboardContent();
  if (typeof showToast === 'function') {
    showToast("Liderlar jadvali va haqiqiy foydalanuvchilar bazasi sinxronlandi!", "success");
  }
}
window.adminCleanLeaderboard = adminCleanLeaderboard;

function adminFilterUsersList(query) {
  adminUsersSearchFilter = (query || '').toLowerCase().trim();
  const allUsers = (typeof window.loadUsersRegistry === 'function') ? window.loadUsersRegistry() : [];
  let filtered = allUsers;

  if (adminUsersSearchFilter) {
    filtered = allUsers.filter(u => 
      (u.name && u.name.toLowerCase().includes(adminUsersSearchFilter)) ||
      (u.tg && u.tg.toLowerCase().includes(adminUsersSearchFilter)) ||
      (u.uni && u.uni.toLowerCase().includes(adminUsersSearchFilter))
    );
  }

  const container = document.getElementById('admin-users-list-container');
  if (container) {
    container.innerHTML = renderAdminUserCardsHtml(filtered);
  }

  const stats = document.getElementById('admin-users-filter-stats');
  if (stats) {
    stats.textContent = `${filtered.length} / ${allUsers.length} nafar`;
  }
}
window.adminFilterUsersList = adminFilterUsersList;
