// =======================================================================
// EcoAkobir — Maxsus Visual Effektlar & Paqldoq Dvigateli (Eco FX Engine)
// To'g'ri javobda 2-sekundlik Paqldoq (Fireworks & Confetti)
// Xato javobda Seysmik tebranish, Qizil vinetka, Maydalanish & Mayoq
// Tugmalarda esa silliq, uzluksiz suzib turuvchi (smooth float) animatsiya
// Asoschi: Akobir | Akosh Eco & EcoAkobir Platformasi
// =======================================================================

(function() {
  // 1. Maxsus CSS qoidalarini sahifaga bir martalik inyeksiya qilish
  const styleEl = document.createElement('style');
  styleEl.id = 'eco-fx-engine-styles';
  styleEl.textContent = `
    /* Tugmalarning silliq qimirlab suzib turishi (Smooth Idle Floating) */
    @keyframes smoothCardFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes smoothIconLevitate {
      0%, 100% {
        transform: translateY(0) rotate(0deg) scale(1);
      }
      50% {
        transform: translateY(-4px) rotate(4deg) scale(1.1);
      }
    }

    @keyframes smoothBorderAura {
      0%, 100% {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }
      50% {
        box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
      }
    }

    .eco-smooth-float {
      animation: smoothCardFloat 3.6s ease-in-out infinite;
      will-change: transform;
    }
    .eco-smooth-float:nth-child(2) { animation-delay: 0.3s; }
    .eco-smooth-float:nth-child(3) { animation-delay: 0.6s; }
    .eco-smooth-float:nth-child(4) { animation-delay: 0.9s; }
    .eco-smooth-float:nth-child(5) { animation-delay: 1.2s; }
    .eco-smooth-float:nth-child(6) { animation-delay: 1.5s; }
    .eco-smooth-float:nth-child(7) { animation-delay: 1.8s; }
    .eco-smooth-float:nth-child(8) { animation-delay: 2.1s; }
    .eco-smooth-float:nth-child(9) { animation-delay: 2.4s; }

    .eco-icon-levitate {
      display: inline-block;
      animation: smoothIconLevitate 2.8s ease-in-out infinite alternate;
      will-change: transform;
    }

    /* Seysmik tebranish (Xato javob silkinishi) */
    @keyframes seismicRecoil {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      12% { transform: translate(-10px, -4px) rotate(-1.5deg); }
      24% { transform: translate(9px, 5px) rotate(1.2deg); }
      36% { transform: translate(-8px, 3px) rotate(-0.9deg); }
      48% { transform: translate(7px, -3px) rotate(0.7deg); }
      60% { transform: translate(-5px, 2px) rotate(-0.4deg); }
      75% { transform: translate(3px, -1px) rotate(0.2deg); }
      88% { transform: translate(-1px, 1px); }
    }
    .animate-seismic-shake {
      animation: seismicRecoil 0.45s cubic-bezier(.36,.07,.19,.97) both !important;
    }

    /* Xato bosilgan tugma titrashi */
    @keyframes wrongButtonShatter {
      0%, 100% { transform: scale(1); }
      20% { transform: scale(0.96) translateX(-6px); }
      40% { transform: scale(0.96) translateX(6px); }
      60% { transform: scale(0.96) translateX(-4px); }
      80% { transform: scale(0.96) translateX(4px); }
    }
    .animate-wrong-shatter {
      animation: wrongButtonShatter 0.4s ease-in-out both;
      border-color: #ef4444 !important;
      background-color: rgba(239, 68, 68, 0.25) !important;
      box-shadow: 0 0 25px rgba(239, 68, 68, 0.6) !important;
    }

    /* To'g'ri javob mayog'i (Beacon) */
    @keyframes correctBeaconGlow {
      0%, 100% {
        box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 0 35px rgba(16, 185, 129, 0.9), 0 0 15px rgba(52, 211, 153, 0.6);
        transform: scale(1.04);
      }
    }
    .animate-correct-beacon {
      animation: correctBeaconGlow 0.9s ease-in-out infinite !important;
      border-color: #10b981 !important;
      background-color: rgba(16, 185, 129, 0.28) !important;
      z-index: 20;
    }

    /* Qizil vinetka avariya chirog'i */
    .eco-wrong-vignette {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 99999;
      box-shadow: inset 0 0 130px 30px rgba(220, 38, 38, 0.65);
      opacity: 1;
      transition: opacity 1.8s ease-out;
    }

    /* Floating XP / Emojilar */
    @keyframes floatUpFadeOut {
      0% { transform: translate(-50%, 0) scale(0.7); opacity: 0; }
      20% { transform: translate(-50%, -20px) scale(1.2); opacity: 1; }
      80% { transform: translate(-50%, -55px) scale(1); opacity: 0.9; }
      100% { transform: translate(-50%, -80px) scale(0.8); opacity: 0; }
    }
    .eco-floating-xp {
      position: absolute;
      pointer-events: none;
      z-index: 10000;
      animation: floatUpFadeOut 1.8s ease-out forwards;
      font-weight: 900;
      text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    }
  `;
  document.head.appendChild(styleEl);

  // 2. PAQLDOQ CANVAS ENGINE (2-sekundlik haqiqiy pirotexnika & confetti portlashi)
  let fxCanvas = null;
  let fxCtx = null;
  let particles = [];
  let animFrameId = null;

  function initCanvas() {
    if (!fxCanvas) {
      fxCanvas = document.createElement('canvas');
      fxCanvas.id = 'eco-fx-paqldoq-canvas';
      fxCanvas.style.position = 'fixed';
      fxCanvas.style.inset = '0';
      fxCanvas.style.width = '100vw';
      fxCanvas.style.height = '100vh';
      fxCanvas.style.pointerEvents = 'none';
      fxCanvas.style.zIndex = '99998';
      document.body.appendChild(fxCanvas);
      fxCtx = fxCanvas.getContext('2d');

      window.addEventListener('resize', () => {
        if (fxCanvas) {
          fxCanvas.width = window.innerWidth;
          fxCanvas.height = window.innerHeight;
        }
      });
    }
    fxCanvas.width = window.innerWidth;
    fxCanvas.height = window.innerHeight;
  }

  class PaqldoqParticle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 14 + 6; // Yuqori tezlikda portlash
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - Math.random() * 4;
      this.gravity = 0.28;
      this.drag = 0.94;
      this.size = Math.random() * 9 + 4;
      this.rotation = Math.random() * Math.PI * 2;
      this.vRot = (Math.random() - 0.5) * 0.25;
      this.opacity = 1;
      this.life = 0;
      this.maxLife = 110 + Math.random() * 30; // Taxminan 2 sekund (60fps da ~120 kadr)
      this.shape = Math.random() > 0.4 ? 'rect' : 'circle';
    }

    update() {
      this.vx *= this.drag;
      this.vy *= this.drag;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.vRot;
      this.life++;
      this.opacity = Math.max(0, 1 - (this.life / this.maxLife));
    }

    draw(ctx) {
      if (this.opacity <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 8;

      if (this.shape === 'rect') {
        ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function loopPaqldoq() {
    if (!fxCtx || !fxCanvas) return;
    fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw(fxCtx);
      if (particles[i].opacity <= 0 || particles[i].life >= particles[i].maxLife) {
        particles.splice(i, 1);
      }
    }

    if (particles.length > 0) {
      animFrameId = requestAnimationFrame(loopPaqldoq);
    } else {
      fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  // 3. TO'G'RI JAVOB PAQLDOQ OTILISHI (2 Sekundlik Pirotexnika)
  function triggerPaqldoq(originX, originY, xpGain = 10) {
    initCanvas();

    const startX = originX || (window.innerWidth / 2);
    const startY = originY || (window.innerHeight / 2);

    const colors = [
      '#10b981', '#34d399', '#f59e0b', '#fbbf24', 
      '#38bdf8', '#a855f7', '#ec4899', '#f43f5e', '#ffffff'
    ];

    // 120 dan ortiq rang-barang zarralarni 360 darajaga sochish
    for (let i = 0; i < 140; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new PaqldoqParticle(startX, startY, color));
    }

    // Ikkinchi qo'shimcha portlash to'lqini 150ms keyin (Paqldoq effekti)
    setTimeout(() => {
      for (let i = 0; i < 80; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new PaqldoqParticle(startX + (Math.random() - 0.5) * 60, startY - 20, color));
      }
    }, 150);

    if (!animFrameId) {
      loopPaqldoq();
    }

    // Suzib chiquvchi +XP nishoni
    createFloatingXpBadge(startX, startY, `+${xpGain} XP ✨ To'g'ri!`);
  }

  function createFloatingXpBadge(x, y, text) {
    const badge = document.createElement('div');
    badge.className = 'eco-floating-xp text-base sm:text-lg text-emerald-400 bg-slate-950/90 border border-emerald-400/80 px-4 py-1.5 rounded-2xl shadow-2xl flex items-center gap-1.5';
    badge.innerHTML = `<i class="fa-solid fa-crown text-amber-400"></i> <span>${text}</span>`;
    badge.style.left = `${x}px`;
    badge.style.top = `${y}px`;
    document.body.appendChild(badge);

    setTimeout(() => {
      if (badge && badge.parentNode) {
        badge.parentNode.removeChild(badge);
      }
    }, 1900);
  }

  // 4. XATO JAVOB REAKSIYASI (Seysmik Silkinish, Qizil Vinetka, Maydalanish & To'g'ri Mayog')
  function triggerWrongFeedback(clickedElement, correctElementOrSelector, containerEl) {
    // A) Ekranning seysmik silkinishi
    const shakeTarget = containerEl || document.getElementById('session-question-card') || document.getElementById('audit-question-card') || document.getElementById('active-game-arena') || document.body;
    if (shakeTarget) {
      shakeTarget.classList.remove('animate-seismic-shake');
      // Reflow
      void shakeTarget.offsetWidth;
      shakeTarget.classList.add('animate-seismic-shake');
      setTimeout(() => shakeTarget.classList.remove('animate-seismic-shake'), 500);
    }

    // B) Ekranning qizil vinetka avariya chirog'i (Full-screen red vignette)
    const vignette = document.createElement('div');
    vignette.className = 'eco-wrong-vignette';
    document.body.appendChild(vignette);
    setTimeout(() => {
      vignette.style.opacity = '0';
      setTimeout(() => {
        if (vignette && vignette.parentNode) {
          vignette.parentNode.removeChild(vignette);
        }
      }, 1800);
    }, 200);

    // C) Xato bosilgan tugmaning parchalanishi va qizil titrashi
    if (clickedElement) {
      clickedElement.classList.add('animate-wrong-shatter');
      // Qizil tutun / X nishoni
      const rect = clickedElement.getBoundingClientRect();
      createFloatingXpBadge(rect.left + rect.width / 2, rect.top, `❌ Noto'g'ri!`);
    }

    // D) Haqiqiy TO'G'RI javobning yashil mayoq bo'lib porlashi
    let correctTarget = null;
    if (typeof correctElementOrSelector === 'string') {
      correctTarget = document.querySelector(correctElementOrSelector);
    } else if (correctElementOrSelector instanceof HTMLElement) {
      correctTarget = correctElementOrSelector;
    }

    if (correctTarget) {
      correctTarget.classList.add('animate-correct-beacon');
      // "To'g'ri javob bu edi!" ko'rsatkichi
      if (!correctTarget.querySelector('.eco-correct-arrow-hint')) {
        const hint = document.createElement('span');
        hint.className = 'eco-correct-arrow-hint bg-emerald-500 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase ml-2 animate-bounce';
        hint.textContent = "To'g'ri javob!";
        correctTarget.appendChild(hint);
      }
    }
  }

  // 5. Global API orqali eksport qilish
  window.EcoFxEngine = {
    triggerPaqldoq: triggerPaqldoq,
    triggerWrongFeedback: triggerWrongFeedback
  };

})();
