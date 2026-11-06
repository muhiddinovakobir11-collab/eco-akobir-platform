/**
 * ============================================================================
 * ECO-BATL REJIMI: IFLOSLANTIRUVCHINI TOP (SPOT THE POLLUTER DETECTIVE)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Mexanika:
 * - Sanoat xaritasi qorong'i tuman bilan qoplangan.
 * - Fonar nuri (Flashlight) sichqoncha yoki sensor orqali hududni yoritadi.
 * - Xaritada 5 ta yashirin ekologik buzilish (quvur, filtrsiz tutun, neft, chiqindixona) bor.
 * - To'g'ri buzilish bosilganda +150 ball va radar belgisi ochiladi.
 * - XATO JOY BOSILSA: 3 soniyaga fonar o'chadi va o'yinchi QOTADI (3s Stun)!
 * - Birinchi 5 ta buzilishni topgan jamoa mutlaq g'alaba qozonadi!
 * - 60 FPS: Faqat transform va opacity orqali silliq animatsiyalar.
 */

(function () {
  'use strict';

  // Fonar nuri va detektiv stillari
  (function injectSpotStyles() {
    if (document.getElementById('eco-spot-polluter-styles')) return;
    const style = document.createElement('style');
    style.id = 'eco-spot-polluter-styles';
    style.textContent = `
      .flashlight-container {
        cursor: crosshair;
        box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.9);
      }
      .flashlight-lens {
        position: absolute;
        inset: 0;
        pointer-events: none;
        transition: background 0.05s linear;
        mix-blend-mode: multiply;
      }
      @keyframes radarPing {
        0% { transform: scale(0.6); opacity: 1; }
        100% { transform: scale(2.2); opacity: 0; }
      }
      .violation-marker {
        animation: radarPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
      .hud-crosshair {
        pointer-events: none;
        position: absolute;
        width: 32px;
        height: 32px;
        border: 1px dashed rgba(250, 204, 21, 0.5);
        border-radius: 9999px;
        transform: translate(-50%, -50%);
        transition: left 0.06s ease-out, top 0.06s ease-out;
      }
    `;
    style.textContent = `
      .flashlight-lens {
        position: absolute;
        inset: 0;
        pointer-events: none;
        will-change: background;
        transition: background 0.05s ease-out;
      }
      .flashlight-container {
        cursor: crosshair;
        touch-action: none;
      }
      .violation-marker {
        animation: markerPulse 1.2s ease-in-out infinite;
      }
      @keyframes markerPulse {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px #f43f5e); }
        50% { transform: scale(1.22); filter: drop-shadow(0 0 12px #f43f5e); }
      }
      .stun-overlay-dark {
        animation: stunFadeIn 0.25s ease-out forwards;
      }
      @keyframes stunFadeIn {
        from { opacity: 0; transform: scale(0.96); }
        to { opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  })();

  const SpotPolluterMode = {
    active: false,
    paused: false,
    config: {
      t1Name: "1-Jamoa (Zumrad)",
      t2Name: "2-Jamoa (Yoqut)",
      t1Avatar: "🛡️",
      t2Avatar: "⚡",
      matchTime: 90
    },

    state: {
      timeRemaining: 90,
      timerInterval: null,
      scenes: [],
      currentScene: null,
      t1: {
        score: 0,
        foundIds: [],
        wrongClicks: 0,
        isStunned: false,
        stunTimer: null,
        stunSecondsLeft: 0,
        stunCountdownInterval: null,
        lightX: 50,
        lightY: 50
      },
      t2: {
        score: 0,
        foundIds: [],
        wrongClicks: 0,
        isStunned: false,
        stunTimer: null,
        stunSecondsLeft: 0,
        stunCountdownInterval: null,
        lightX: 50,
        lightY: 50
      }
    },

    // 1. Rejimni boshlash
    async start(customConfig = {}) {
      this.config = Object.assign({}, this.config, customConfig);
      this.active = true;
      this.paused = false;

      this.state.timeRemaining = this.config.matchTime || 90;

      if (window.EcoBattleCoreQuestions) {
        const fetched = await window.EcoBattleCoreQuestions.getQuestionsForMode('spot_polluter', 30);
        if (Array.isArray(fetched) && fetched.length > 0 && fetched[0].violations) {
          this.state.scenes = fetched;
        }
      }

      if (!this.state.scenes || this.state.scenes.length === 0 || !this.state.scenes[0].violations) {
        this.state.scenes = this.getFallbackScenes();
      }

      // Tasodifiy bitta qiziqarli sanoat sahnasini tanlash
      const randIdx = Math.floor(Math.random() * this.state.scenes.length);
      this.state.currentScene = this.state.scenes[randIdx];

      this.state.t1 = {
        score: 0,
        foundIds: [],
        wrongClicks: 0,
        isStunned: false,
        stunTimer: null,
        stunSecondsLeft: 0,
        stunCountdownInterval: null,
        lightX: 30,
        lightY: 60
      };

      this.state.t2 = {
        score: 0,
        foundIds: [],
        wrongClicks: 0,
        isStunned: false,
        stunTimer: null,
        stunSecondsLeft: 0,
        stunCountdownInterval: null,
        lightX: 70,
        lightY: 40
      };

      this.renderArena();
      this.bindFlashlight();
      this.startTimer();

      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.playCountdown();
      }
    },

    getFallbackScenes() {
      return [
        {
          id: "sp1",
          name: "Daryo Bo'yidagi Sanoat Zonasi",
          violations: [
            { id: "v1", name: "Tozalanmagan oqova quvuri", x: 28, y: 72, radius: 9, desc: "Sanoat oqovasi daryoga filtrsiz quyilmoqda." },
            { id: "v2", name: "Qora tutunli filtrsiz mo'ri", x: 65, y: 24, radius: 9, desc: "Atmosferaga SO2 va qora qurum tashlanmoqda." },
            { id: "v3", name: "Sohildagi eskirgan akkumulyatorlar", x: 42, y: 85, radius: 9, desc: "Qo'rg'oshin va kislota daryo bo'yiga sizmoqda." },
            { id: "v4", name: "Kamalakrang neft dog'i", x: 52, y: 68, radius: 9, desc: "Suv yuzasida kislorod almashinuvini to'suvchi neft pardasi." },
            { id: "v5", name: "To'qaydagi noqonuniy plastik poligon", x: 82, y: 55, radius: 9, desc: "Aholining chiqindilari to'planib qolgan." }
          ]
        }
      ];
    },

    // 2. Maydonni render qilish
    renderArena() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const sc = this.state.currentScene;
      const t1 = this.state.t1;
      const t2 = this.state.t2;

      container.innerHTML = `
        <div id="spot-polluter-view" class="bg-slate-900 border border-yellow-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl relative select-none overflow-hidden">
          
          <!-- Yuqori Header -->
          <div class="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border border-yellow-500/40 text-xs font-black uppercase flex items-center gap-1.5 shadow-sm">
                🔦 Ifloslantiruvchini Top (Detektiv)
              </span>
              <span class="text-xs text-white font-black bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                ${sc.name}
              </span>
            </div>

            <!-- Taymer -->
            <div class="flex items-center gap-2">
              <div class="bg-slate-950 border border-slate-700/80 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-inner">
                <i class="fa-solid fa-stopwatch text-amber-400 text-sm"></i>
                <span id="spot-timer-display" class="font-mono text-lg font-black text-white">
                  ${this.state.timeRemaining}s
                </span>
              </div>
            </div>

            <!-- Boshqaruv tugmalari -->
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="EcoBattleSpotPolluterMode.togglePause()" 
                id="spot-pause-btn" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-pause text-amber-400"></i>
                <span id="spot-pause-text">Pauza (Space)</span>
              </button>

              <button 
                type="button" 
                onclick="EcoBattleSpotPolluterMode.exitToSetup()" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-door-open text-rose-400"></i>
                <span>Chiqish (Esc)</span>
              </button>
            </div>
          </div>

          <!-- Qoida va Stun ogohlantirishi -->
          <div class="mb-4 py-2 px-4 rounded-2xl bg-yellow-950/40 border border-yellow-500/30 text-xs text-yellow-200 text-center flex items-center justify-between gap-3 flex-wrap">
            <span class="font-bold flex items-center gap-1.5">
              💡 <strong>Detektiv Ko'rsatmasi:</strong> Fonar nurini xarita bo'ylab yurgizing va 5 ta yashirin ekologik buzilishni toping!
            </span>
            <span class="text-[11px] font-black text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/30">
              ⚠️ DIQQAT: Xato joyni bossangiz, fonar o'chadi va 3 SONIYA QOTASIZ!
            </span>
          </div>

          <!-- IKKI DETEKTIV MAYDONI (SPLIT SCREEN) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <!-- CHAP: 1-Jamoa (Zumrad) Fonar Xaritasi -->
            ${this.renderDetectiveScene(1, t1, sc)}

            <!-- O'NG: 2-Jamoa (Yoqut) Fonar Xaritasi -->
            ${this.renderDetectiveScene(2, t2, sc)}

          </div>

        </div>
      `;
    },

    renderDetectiveScene(teamId, teamState, scene) {
      const isT1 = (teamId === 1);
      const teamName = isT1 ? this.config.t1Name : this.config.t2Name;
      const accentBorder = isT1 ? 'border-emerald-500/40' : 'border-rose-500/40';
      const accentText = isT1 ? 'text-emerald-400' : 'text-rose-400';
      const lensId = `flashlight-lens-${teamId}`;
      const containerId = `scene-container-${teamId}`;

      return `
        <div class="relative p-4 rounded-2xl bg-slate-950/90 border-2 ${accentBorder} shadow-xl flex flex-col justify-between">
          
          <!-- Team Header -->
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <span class="text-xs font-black uppercase ${accentText} flex items-center gap-1.5">
              <i class="fa-solid fa-flashlight"></i> ${teamName}
            </span>
            <div class="flex items-center gap-3">
              <span class="text-xs font-black text-amber-400">
                Topildi: ${teamState.foundIds.length} / 5
              </span>
              <span class="text-xs font-black text-emerald-400">
                ${teamState.score} XP
              </span>
            </div>
          </div>

          <!-- XARITA HUDUDI VA FONAR LENSASI -->
          <div 
            id="${containerId}" 
            class="flashlight-container relative w-full aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 select-none"
            onclick="EcoBattleSpotPolluterMode.handleSceneClick(${teamId}, event)"
            onmousemove="EcoBattleSpotPolluterMode.handleMouseMove(${teamId}, event)"
          >
            <!-- 1. DETALLASHTIRILGAN EKOLOGIK SAHNA (SVG ILUSTRATSIYA) -->
            ${this.renderSceneSVG(scene, teamState.foundIds)}

            <!-- 2. YORQIN FONAR NUR TUMANI (Bright Spotlight Mask) -->
            <div 
              id="${lensId}" 
              class="flashlight-lens"
              style="background: radial-gradient(circle 120px at ${teamState.lightX}% ${teamState.lightY}%, rgba(255,255,255,0.08) 0%, rgba(234,179,8,0.15) 30%, rgba(15,23,42,0.45) 65%, rgba(10,15,30,0.92) 100%);"
            ></div>

            <!-- 3. TOPILGAN BUZILISHLAR RADAR BELGILARI (Faqat topilganlari nurlanadi) -->
            ${scene.violations.filter(v => teamState.foundIds.includes(v.id)).map(v => `
              <div 
                class="violation-marker absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-rose-500/30 border-2 border-rose-400 flex items-center justify-center text-xs text-white font-black z-20 pointer-events-none"
                style="left: ${v.x}%; top: ${v.y}%;"
                title="${v.name}"
              >
                🚨
              </div>
            `).join('')}

            <!-- 4. 3 SONIYA QOTISH (STUN) EKRANI -->
            ${teamState.isStunned ? `
              <div class="stun-overlay-dark absolute inset-0 bg-slate-950/90 backdrop-blur-xs z-30 flex flex-col items-center justify-center text-center p-4">
                <div class="text-4xl mb-2 animate-bounce">⚡⚠️</div>
                <h4 class="text-base font-black text-rose-400 uppercase tracking-wide">
                  XATO JOY! FONAR O'CHDI!
                </h4>
                <p class="text-xs text-slate-300 mt-1 max-w-xs leading-relaxed">
                  Bu yerda hech qanday ekologik qonunbuzarlik yo'q. Detektiv qotib qoldi!
                </p>
                <div class="mt-3 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-mono text-xs font-black">
                  Kutish: ${teamState.stunSecondsLeft} soniya...
                </div>
              </div>
            ` : ''}

          </div>

          <!-- TOPILGAN RO'YXAT VA PROGRESS -->
          <div class="mt-3 pt-2 border-t border-slate-800">
            <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
              Aniqlangan Eko-Buzilishlar:
            </span>
            
            <div class="space-y-1">
              ${scene.violations.map((v, vIdx) => {
                const isFound = teamState.foundIds.includes(v.id);
                return `
                  <div class="flex items-center justify-between text-[11px] p-1.5 rounded-lg ${isFound ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-slate-900/60 text-slate-500 border border-slate-800'}">
                    <span class="flex items-center gap-1.5">
                      <i class="fa-solid ${isFound ? 'fa-circle-check text-emerald-400' : 'fa-circle-dot text-slate-600'}"></i>
                      <strong class="${isFound ? 'text-white' : ''}">${vIdx + 1}. ${isFound ? v.name : 'Noma\'lum buzilish...'}</strong>
                    </span>
                    <span class="font-bold text-[10px]">${isFound ? '+150 XP' : 'Yashirin'}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

        </div>
      `;
    },

    // Boyitilgan sanoat xaritasi SVG chizmasi
    renderSceneSVG(scene, foundIds) {
      return `
        <svg viewBox="0 0 500 310" class="w-full h-full object-cover">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0f172a" />
              <stop offset="100%" stop-color="#1e293b" />
            </linearGradient>
            <linearGradient id="riverGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#0284c7" />
              <stop offset="50%" stop-color="#0369a1" />
              <stop offset="100%" stop-color="#075985" />
            </linearGradient>
          </defs>

          <!-- Osmon -->
          <rect width="500" height="310" fill="url(#skyGrad)" />

          <!-- Tog'lar / Tepaliklar -->
          <polygon points="0,180 80,120 180,175 260,110 370,170 500,130 500,220 0,220" fill="#1e293b" opacity="0.6" />

          <!-- Daryo / Suv oqimi -->
          <path d="M 0,210 Q 150,190 280,225 T 500,230 L 500,310 L 0,310 Z" fill="url(#riverGrad)" />

          <!-- Qirg'oq sohili (Tuproq va toshlar) -->
          <path d="M 0,205 Q 160,185 270,220 T 500,225" stroke="#78350f" stroke-width="8" fill="none" opacity="0.8" />

          <!-- Sanoat binosi siluetlari -->
          <rect x="180" y="90" width="110" height="110" fill="#0f172a" stroke="#334155" stroke-width="2" />
          <rect x="230" y="60" width="30" height="40" fill="#0f172a" stroke="#334155" stroke-width="2" />
          
          <!-- Mo'rilar (Chimneys) -->
          <rect x="310" y="45" width="22" height="135" fill="#334155" />
          <rect x="340" y="30" width="25" height="150" fill="#334155" />

          <!-- Qora tutun buluti (Violation 2: Smoke) -->
          <g opacity="0.85">
            <circle cx="355" cy="25" r="22" fill="#475569" />
            <circle cx="380" cy="18" r="28" fill="#334155" />
            <circle cx="420" cy="15" r="35" fill="#1e293b" />
          </g>

          <!-- Oqova quvuri (Violation 1: Pipe spilling to river) -->
          <rect x="125" y="210" width="35" height="18" fill="#475569" rx="4" />
          <path d="M 145,228 Q 148,255 152,280" stroke="#a3e635" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.9" />
          <circle cx="155" cy="285" r="14" fill="#84cc16" opacity="0.6" />

          <!-- Neft dog'i suv yuzida (Violation 4: Oil slick) -->
          <ellipse cx="260" cy="250" rx="40" ry="16" fill="#1e1b4b" opacity="0.8" stroke="#a855f7" stroke-width="1.5" />

          <!-- Eskirgan akkumulyatorlar qirg'oqda (Violation 3: Batteries) -->
          <rect x="205" y="225" width="16" height="22" fill="#dc2626" rx="2" stroke="#7f1d1d" />
          <rect x="224" y="228" width="14" height="20" fill="#ea580c" rx="2" stroke="#7c2d12" />

          <!-- To'qaydagi plastik poligon (Violation 5: Plastic dump) -->
          <path d="M 390,195 Q 430,180 470,205 L 460,230 L 380,225 Z" fill="#64748b" opacity="0.7" />
          <circle cx="410" cy="205" r="6" fill="#38bdf8" />
          <circle cx="425" cy="215" r="7" fill="#f43f5e" />
          <circle cx="445" cy="200" r="5" fill="#facc15" />
          <rect x="430" y="202" width="12" height="15" fill="#fb923c" rx="2" />

          <!-- Daraxtlar va butalar -->
          <circle cx="60" cy="185" r="18" fill="#065f46" />
          <circle cx="85" cy="175" r="24" fill="#047857" />
          <circle cx="110" cy="190" r="16" fill="#065f46" />
        </svg>
      `;
    },

    // 3. Fonar harakati
    handleMouseMove(teamId, event) {
      if (!this.active || this.paused) return;

      const container = document.getElementById(`scene-container-${teamId}`);
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));

      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      team.lightX = Math.round(x);
      team.lightY = Math.round(y);

      const lens = document.getElementById(`flashlight-lens-${teamId}`);
      if (lens) {
        lens.style.background = `radial-gradient(circle 85px at ${team.lightX}% ${team.lightY}%, transparent 0%, rgba(10, 15, 30, 0.94) 100%)`;
      }
    },

    // 4. Xaritani bosish (Click detection)
    handleSceneClick(teamId, event) {
      if (!this.active || this.paused) return;

      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      if (team.isStunned) return;

      const container = document.getElementById(`scene-container-${teamId}`);
      if (!container) return;

      const rect = container ? container.getBoundingClientRect() : null;
      const width = (rect && rect.width > 0) ? rect.width : 100;
      const height = (rect && rect.height > 0) ? rect.height : 100;
      const left = (rect && rect.width > 0) ? rect.left : 0;
      const top = (rect && rect.height > 0) ? rect.top : 0;

      const clickX = event.percentX !== undefined ? event.percentX : (((event.clientX - left) / width) * 100);
      const clickY = event.percentY !== undefined ? event.percentY : (((event.clientY - top) / height) * 100);

      const scene = this.state.currentScene;
      let matchedViolation = null;

      // 5 ta buzilish nuqtasi tekshiruvi
      for (let v of scene.violations) {
        const dx = clickX - v.x;
        const dy = clickY - v.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= v.radius) {
          matchedViolation = v;
          break;
        }
      }

      const fx = window.EcoBattleCoreFx;

      if (matchedViolation) {
        // To'g'ri buzilish topildi!
        if (!team.foundIds.includes(matchedViolation.id)) {
          team.foundIds.push(matchedViolation.id);
          team.score += 150;

          if (fx) {
            fx.playCorrect();
            fx.flashBorder(teamId);
          }

          this.renderArena();

          // Agar barcha 5 ta buzilish topilgan bo'lsa -> G'alaba!
          if (team.foundIds.length >= 5) {
            this.finishMatch(teamId);
          }
        } else {
          // Allaqachon topilgan joyni bosdi
          if (fx) fx.playClick();
        }
      } else {
        // XATO JOY BOSILDI! -> 3 SONIYA QOTISH (STUN)
        team.wrongClicks++;

        if (fx) {
          fx.playError();
          fx.shakeScreen(350);
        }

        this.triggerStun(teamId, 3);
      }
    },

    // 3 soniyalik qotish (Stun)
    triggerStun(teamId, seconds = 3) {
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      team.isStunned = true;
      team.stunSecondsLeft = seconds;

      this.renderArena();

      if (team.stunCountdownInterval) clearInterval(team.stunCountdownInterval);
      if (team.stunTimer) clearTimeout(team.stunTimer);

      team.stunCountdownInterval = setInterval(() => {
        team.stunSecondsLeft--;
        this.renderArena();
        if (team.stunSecondsLeft <= 0) {
          clearInterval(team.stunCountdownInterval);
        }
      }, 1000);

      team.stunTimer = setTimeout(() => {
        team.isStunned = false;
        clearInterval(team.stunCountdownInterval);
        if (this.active) this.renderArena();
      }, seconds * 1000);
    },

    // 5. Taymer va boshqaruv
    startTimer() {
      this.clearTimers();
      this.state.timerInterval = setInterval(() => {
        if (!this.active || this.paused) return;

        this.state.timeRemaining--;

        const display = document.getElementById('spot-timer-display');
        if (display) {
          display.textContent = `${this.state.timeRemaining}s`;
        }

        if (this.state.timeRemaining <= 10 && window.EcoBattleCoreFx) {
          window.EcoBattleCoreFx.triggerTimerWarning(display);
        }

        if (this.state.timeRemaining <= 0) {
          this.clearTimers();
          this.finishMatch();
        }
      }, 1000);
    },

    clearTimers() {
      if (this.state.timerInterval) {
        clearInterval(this.state.timerInterval);
        this.state.timerInterval = null;
      }
      if (this.state.t1.stunTimer) clearTimeout(this.state.t1.stunTimer);
      if (this.state.t1.stunCountdownInterval) clearInterval(this.state.t1.stunCountdownInterval);
      if (this.state.t2.stunTimer) clearTimeout(this.state.t2.stunTimer);
      if (this.state.t2.stunCountdownInterval) clearInterval(this.state.t2.stunCountdownInterval);
    },

    bindFlashlight() {
      if (window.EcoBattleCoreInput) {
        window.EcoBattleCoreInput.onAction((teamId, action) => {
          if (!this.active) return;
          if (action === 'toggle_pause') {
            this.togglePause();
          } else if (action === 'escape') {
            this.exitToSetup();
          }
        });
      }
    },

    togglePause() {
      this.paused = !this.paused;
      const btnText = document.getElementById('spot-pause-text');
      if (btnText) {
        btnText.textContent = this.paused ? "Davom ettirish" : "Pauza (Space)";
      }
      if (window.ecoAudio) window.ecoAudio.playClick();
    },

    exitToSetup() {
      this.clearTimers();
      this.active = false;
      if (window.EcoBattleArena && typeof window.EcoBattleArena.init === 'function') {
        window.EcoBattleArena.init();
      }
    },

    // 6. G'alaba va Yakunlash
    finishMatch(declaredWinnerId = null) {
      this.clearTimers();
      this.active = false;

      const t1 = this.state.t1;
      const t2 = this.state.t2;

      let winnerId = declaredWinnerId;
      if (!winnerId) {
        if (t1.foundIds.length > t2.foundIds.length) winnerId = 1;
        else if (t2.foundIds.length > t1.foundIds.length) winnerId = 2;
        else {
          if (t1.score > t2.score) winnerId = 1;
          else if (t2.score > t1.score) winnerId = 2;
          else winnerId = 0;
        }
      }

      const fx = window.EcoBattleCoreFx;
      if (fx) {
        fx.playVictory();
        fx.triggerVictoryLeaves(60);
      }

      const winnerName = winnerId === 1 ? this.config.t1Name : (winnerId === 2 ? this.config.t2Name : "Durang!");
      const winnerAvatar = winnerId === 1 ? this.config.t1Avatar : (winnerId === 2 ? this.config.t2Avatar : "🤝");
      const winnerColor = winnerId === 1 ? 'text-emerald-400' : (winnerId === 2 ? 'text-rose-400' : 'text-amber-400');

      const isAllFound = (winnerId === 1 && t1.foundIds.length >= 5) || (winnerId === 2 && t2.foundIds.length >= 5);

      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      container.innerHTML = `
        <div class="bg-slate-900 border-2 border-yellow-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-2xl mx-auto text-center relative select-none animate-bounce-in">
          
          <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-yellow-500 to-amber-500 text-slate-950 flex items-center justify-center text-4xl shadow-xl shadow-yellow-500/30 mb-4">
            🔦
          </div>

          <span class="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-xs font-black uppercase tracking-wider">
            ${isAllFound ? '🏆 DETEKTIV MUTLAQ G\'ALABASI (5/5 BUZILISH TOPIB BO\'LINDI!)' : '⏱️ VAQT BO\'YICHA DETEKTIV G\'ALABASI'}
          </span>

          <h2 class="text-2xl sm:text-3xl font-black text-white mt-3">
            <span class="${winnerColor}">${winnerAvatar} ${winnerName}</span> G'alaba Qozondi!
          </h2>

          <p class="text-xs text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
            Qorong'i sanoat xaritasida barcha yashirin ekologik qonunbuzarliklar fonar nuri ostida fosh etildi!
          </p>

          <!-- Natijalar -->
          <div class="grid grid-cols-2 gap-4 my-6 text-left">
            <div class="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30">
              <span class="text-xs font-black text-emerald-400 uppercase block mb-1">
                ${this.config.t1Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>Topilgan buzilishlar: <strong class="text-emerald-400">${t1.foundIds.length} / 5 ta</strong></div>
                <div>Xato bosishlar: <strong class="text-rose-400">${t1.wrongClicks} ta</strong></div>
                <div>Yakuniy ball: <strong class="text-emerald-400">${t1.score} XP</strong></div>
              </div>
            </div>

            <div class="bg-slate-950 p-4 rounded-2xl border border-rose-500/30">
              <span class="text-xs font-black text-rose-400 uppercase block mb-1">
                ${this.config.t2Name}
              </span>
              <div class="text-xs text-slate-300 space-y-1">
                <div>Topilgan buzilishlar: <strong class="text-rose-400">${t2.foundIds.length} / 5 ta</strong></div>
                <div>Xato bosishlar: <strong class="text-rose-400">${t2.wrongClicks} ta</strong></div>
                <div>Yakuniy ball: <strong class="text-rose-400">${t2.score} XP</strong></div>
              </div>
            </div>
          </div>

          <!-- Tugmalar -->
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <button 
              type="button" 
              onclick="EcoBattleSpotPolluterMode.start()" 
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-yellow-500/20 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-rotate-right"></i> Qayta O'ynash
            </button>

            <button 
              type="button" 
              onclick="EcoBattleSpotPolluterMode.exitToSetup()" 
              class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 cursor-pointer flex items-center gap-2"
            >
              <i class="fa-solid fa-list"></i> Boshqa Rejimni Tanlash
            </button>
          </div>

        </div>
      `;
    }
  };

  window.EcoBattleSpotPolluterMode = SpotPolluterMode;
  if (window.EcoBattleCoreEngine) {
    window.EcoBattleCoreEngine.registerMode('spot_polluter', SpotPolluterMode);
  }
})();
