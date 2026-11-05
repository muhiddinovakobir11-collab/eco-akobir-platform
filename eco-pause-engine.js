// =======================================================================
// ECO PAUSE & AUTO-PAUSE ENGINE
// Har bitta o'yinda Pauza tugmasi va 2 ta savol belgilanmasa Avto-Pauza
// Asoschi: Akobir | Akosh Eco Platform
// =======================================================================

(function() {
  'use strict';

  let currentRegisteredGame = null;
  let isPaused = false;
  let consecutiveTimeouts = 0;
  let isAutoPaused = false;
  let autoPauseContinueCallback = null;

  // Initialize or get modal overlay
  function getOrCreateOverlay() {
    let overlay = document.getElementById('eco-pause-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'eco-pause-overlay';
      overlay.className = 'hidden fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-all duration-200';
      overlay.innerHTML = `
        <div class="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-500/10 text-center transform transition-all scale-100">
          
          <!-- Glowing Icon Badge -->
          <div id="eco-pause-icon" class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/10">
            ⏸️
          </div>

          <!-- Title & Subtitle -->
          <h3 id="eco-pause-title" class="text-2xl font-black text-white mb-2 tracking-tight">
            O'yin To'xtatildi (Pauza)
          </h3>
          <p id="eco-pause-desc" class="text-xs text-slate-300 leading-relaxed mb-6">
            O'yin va taymer to'xtatildi. Tayyor bo'lganingizda davom ettirishingiz mumkin.
          </p>

          <!-- Snapshot Progress -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-center">
              <span class="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">Jarayon</span>
              <span id="eco-pause-stat-counter" class="text-sm font-black text-emerald-400">-</span>
            </div>
            <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-center">
              <span class="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">To'plangan Ball</span>
              <span id="eco-pause-stat-score" class="text-sm font-black text-amber-400">-</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="space-y-3">
            <button id="eco-pause-resume-btn" onclick="EcoPauseEngine.resume()" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer">
              <i class="fa-solid fa-play"></i>
              <span>Davom ettirish</span>
            </button>
            <button onclick="EcoPauseEngine.restartCurrent()" class="w-full py-3 px-6 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
              <i class="fa-solid fa-rotate-left"></i>
              <span>Qaytadan boshlash</span>
            </button>
            <button onclick="EcoPauseEngine.exitToHub()" class="w-full py-2.5 px-6 rounded-2xl text-slate-400 hover:text-rose-400 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <i class="fa-solid fa-arrow-left"></i>
              <span>O'yinlar markaziga chiqish</span>
            </button>
          </div>

        </div>
      `;
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  const EcoPauseEngine = {
    // Har safar o'yin yoki yangi savol boshlanganda ro'yxatga olish
    registerGame: function(config) {
      currentRegisteredGame = config;
      isPaused = false;
      this.hideOverlay();
    },

    // Foydalanuvchi biror javob variantini belgilaganda (to'g'ri yoki xato bo'lishidan qat'i nazar)
    // Ketma-ket javob berilmagan savollar hisoblagichi darhol 0 ga tushadi
    recordUserAnswer: function() {
      consecutiveTimeouts = 0;
    },

    // Savol vaqti tugaganda (Timeout)
    // Qaytaradi: true (agar 2 ta ketma-ket javobsiz o'tsa va avto-pauza kerak bo'lsa), aks holda false
    recordTimeout: function() {
      consecutiveTimeouts++;
      if (consecutiveTimeouts >= 2) {
        return true;
      }
      return false;
    },

    getConsecutiveTimeouts: function() {
      return consecutiveTimeouts;
    },

    resetTimeouts: function() {
      consecutiveTimeouts = 0;
    },

    // 2 ta savol belgilanmaganda avtomatik pauzani chaqirish
    triggerAutoPause: function(options) {
      isAutoPaused = true;
      isPaused = true;
      autoPauseContinueCallback = options && options.onContinue ? options.onContinue : null;

      if (currentRegisteredGame && typeof currentRegisteredGame.pause === 'function') {
        currentRegisteredGame.pause();
      }
      if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
        window.ecoAudio.stopCountdownSound();
      }

      const overlay = getOrCreateOverlay();
      const icon = document.getElementById('eco-pause-icon');
      const title = document.getElementById('eco-pause-title');
      const desc = document.getElementById('eco-pause-desc');
      const counterEl = document.getElementById('eco-pause-stat-counter');
      const scoreEl = document.getElementById('eco-pause-stat-score');

      if (icon) {
        icon.innerHTML = '💤';
        icon.className = 'w-20 h-20 mx-auto mb-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-4xl shadow-xl shadow-amber-500/10 animate-pulse';
      }
      if (title) {
        title.textContent = "Siz bu yerdamisiz? (Avtomatik Pauza)";
      }
      if (desc) {
        desc.innerHTML = "Ketma-ket <strong>2 ta savolga</strong> javob belgilanmadi. Qimmatli ballaringiz va vaqtingiz behuda ketmasligi uchun o'yin avtomatik to'xtatildi.";
      }

      const stats = currentRegisteredGame && typeof currentRegisteredGame.getCurrentStats === 'function' 
        ? currentRegisteredGame.getCurrentStats() 
        : { counter: '2 ta o\'tkazildi', score: '0 XP' };

      if (counterEl) counterEl.textContent = stats.counter || '-';
      if (scoreEl) scoreEl.textContent = stats.score || '-';

      overlay.classList.remove('hidden');
    },

    // Qo'lda (Pauza tugmasi orqali) to'xtatish yoki qayta davom ettirish
    togglePause: function() {
      if (isPaused) {
        this.resume();
      } else {
        this.pause();
      }
    },

    pause: function() {
      if (!currentRegisteredGame || isPaused) return;
      isPaused = true;
      isAutoPaused = false;

      if (window.ecoAudio) {
        if (typeof window.ecoAudio.playClick === 'function') window.ecoAudio.playClick();
        if (typeof window.ecoAudio.stopCountdownSound === 'function') window.ecoAudio.stopCountdownSound();
      }

      if (typeof currentRegisteredGame.pause === 'function') {
        currentRegisteredGame.pause();
      }

      const overlay = getOrCreateOverlay();
      const icon = document.getElementById('eco-pause-icon');
      const title = document.getElementById('eco-pause-title');
      const desc = document.getElementById('eco-pause-desc');
      const counterEl = document.getElementById('eco-pause-stat-counter');
      const scoreEl = document.getElementById('eco-pause-stat-score');

      if (icon) {
        icon.innerHTML = '⏸️';
        icon.className = 'w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/10';
      }
      if (title) {
        title.textContent = "O'yin To'xtatildi (Pauza)";
      }
      if (desc) {
        desc.textContent = "O'yin va taymer to'xtatildi. Tayyor bo'lganingizda davom ettirishingiz mumkin.";
      }

      const stats = typeof currentRegisteredGame.getCurrentStats === 'function' 
        ? currentRegisteredGame.getCurrentStats() 
        : { counter: '-', score: '-' };

      if (counterEl) counterEl.textContent = stats.counter || '-';
      if (scoreEl) scoreEl.textContent = stats.score || '-';

      overlay.classList.remove('hidden');
    },

    resume: function() {
      if (!isPaused) return;
      isPaused = false;
      this.hideOverlay();

      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }

      // Agar avto-pauza bo'lgan bo'lsa, davom ettirilganda hisoblagich nolga tushadi
      // va keyingi yangi savolga o'tish callback'i ishga tushiriladi
      if (isAutoPaused) {
        isAutoPaused = false;
        consecutiveTimeouts = 0;
        if (typeof autoPauseContinueCallback === 'function') {
          const cb = autoPauseContinueCallback;
          autoPauseContinueCallback = null;
          cb();
          return;
        }
      }

      // Qo'lda pauza qilingan bo'lsa, aynan to'xtagan soniyasidan taymerni qayta boshlaymiz
      if (currentRegisteredGame && typeof currentRegisteredGame.resume === 'function') {
        currentRegisteredGame.resume();
      }
    },

    restartCurrent: function() {
      isPaused = false;
      isAutoPaused = false;
      consecutiveTimeouts = 0;
      autoPauseContinueCallback = null;
      this.hideOverlay();

      if (currentRegisteredGame && typeof currentRegisteredGame.restart === 'function') {
        currentRegisteredGame.restart();
      }
    },

    exitToHub: function() {
      isPaused = false;
      isAutoPaused = false;
      consecutiveTimeouts = 0;
      autoPauseContinueCallback = null;
      this.hideOverlay();

      if (typeof window.stopSortingGameTimer === 'function') window.stopSortingGameTimer();
      if (typeof window.stopAuditTimer === 'function') window.stopAuditTimer();
      if (typeof window.stopExpertiseTimer === 'function') window.stopExpertiseTimer();
      if (typeof window.stopExtraGameTimer === 'function') window.stopExtraGameTimer();
      if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
        window.ecoAudio.stopCountdownSound();
      }

      if (typeof window.switchMainTab === 'function') {
        window.switchMainTab('games-tab');
      }
      if (typeof window.returnToGamesHub === 'function') {
        window.returnToGamesHub();
      }
    },

    hideOverlay: function() {
      const overlay = document.getElementById('eco-pause-overlay');
      if (overlay) overlay.classList.add('hidden');
    },

    isGamePaused: function() {
      return isPaused;
    }
  };

  // Keyboard shortcut: Space or 'P' key to toggle pause during game
  window.addEventListener('keydown', function(e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.key === 'p' || e.key === 'P' || (e.code === 'Space' && EcoPauseEngine.isGamePaused())) {
      const overlay = document.getElementById('eco-pause-overlay');
      const isVisible = overlay && !overlay.classList.contains('hidden');
      if (currentRegisteredGame || isVisible) {
        e.preventDefault();
        EcoPauseEngine.togglePause();
      }
    }
  });

  window.EcoPauseEngine = EcoPauseEngine;
})();
