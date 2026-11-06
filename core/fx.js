/**
 * ============================================================================
 * ECO-BATL CORE: FX ENGINE (VIZUAL VA OVOZ EFFEKTLARI)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 60 FPS: Faqat transform va opacity orqali ishlaydi.
 * prefers-reduced-motion qo'llab-quvvatlanadi.
 */

(function () {
  'use strict';

  // CSS stillarini ineksiya qilish
  (function injectFxStyles() {
    if (document.getElementById('eco-core-fx-styles')) return;
    const style = document.createElement('style');
    style.id = 'eco-core-fx-styles';
    style.textContent = `
      @keyframes battleShake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-8px) rotate(-1deg); }
        40% { transform: translateX(7px) rotate(1deg); }
        60% { transform: translateX(-5px); }
        80% { transform: translateX(4px); }
      }
      .eco-shake {
        animation: battleShake 0.4s cubic-bezier(.36,.07,.19,.97) both;
      }
      @keyframes leafDrift {
        0% {
          transform: translateY(-40px) translateX(0) rotate(0deg);
          opacity: 0;
        }
        15% { opacity: 0.95; }
        50% {
          transform: translateY(50vh) translateX(40px) rotate(180deg);
        }
        85% { opacity: 0.95; }
        100% {
          transform: translateY(105vh) translateX(-30px) rotate(360deg);
          opacity: 0;
        }
      }
      .falling-leaf-particle {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        will-change: transform, opacity;
        animation: leafDrift linear forwards;
      }
      @keyframes timerThumpAnim {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.18); }
      }
      .timer-danger-thump {
        animation: timerThumpAnim 0.7s infinite ease-in-out !important;
        color: #f43f5e !important;
        text-shadow: 0 0 15px rgba(244, 63, 94, 0.6) !important;
      }
      .team1-flash-glow {
        box-shadow: 0 0 35px 8px rgba(16, 185, 129, 0.45) !important;
        border-color: #34d399 !important;
      }
      .team2-flash-glow {
        box-shadow: 0 0 35px 8px rgba(244, 63, 94, 0.45) !important;
        border-color: #fb7185 !important;
      }
      @media (prefers-reduced-motion: reduce) {
        .eco-shake, .falling-leaf-particle, .timer-danger-thump {
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  })();

  const CoreFx = {
    audioCtx: null,

    // Audio kontekstini ishga tushirish (User gesture bilan)
    initAudio() {
      if (!this.audioCtx) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) {
          this.audioCtx = new AudioClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    },

    // To'g'ri javob ohangi (Yoqimli major akkord)
    playCorrect() {
      this.initAudio();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.05);
          gain.gain.setValueAtTime(0.12, now + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.35);
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + i * 0.05);
          osc.stop(now + i * 0.05 + 0.35);
        });
      } catch (e) {}
    },

    // Xato javob ohangi (Past chastotali titrash)
    playError() {
      this.initAudio();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.linearRampToValueAtTime(70, now + 0.28);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.28);
      } catch (e) {}
    },

    // Tugma bosish taktil chertishi
    playClick() {
      this.initAudio();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(420, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } catch (e) {}
    },

    // Boshlanish hisobi (Countdown beep)
    playCountdown() {
      this.initAudio();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } catch (e) {}
    },

    // Ekranni titratish (Wrong feedback)
    shakeScreen(duration = 350) {
      const arena = document.getElementById('eco-battle-arena-view') || document.getElementById('tug-of-war-view') || document.body;
      if (arena) this.shake(arena);
    },

    // G'alaba shukuhi (Fanfara)
    playVictory() {
      this.initAudio();
      if (!this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.18, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.6);
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.6);
        });
      } catch (e) {}
    },

    // Kartani yoki ekranni titratish (Wrong feedback)
    shake(el) {
      if (!el) return;
      el.classList.remove('eco-shake');
      void el.offsetWidth; // Force reflow
      el.classList.add('eco-shake');
      setTimeout(() => el.classList.remove('eco-shake'), 420);
    },

    // Taymer qizil pulsatsiyasi (Danger warning)
    triggerTimerWarning(el) {
      if (!el) return;
      el.classList.add('timer-danger-thump');
    },

    stopTimerWarning(el) {
      if (!el) return;
      el.classList.remove('timer-danger-thump');
    },

    // Jamoa chegarasi porlashi (Border Flash)
    flashBorder(teamId = 1) {
      const el = document.getElementById('eco-battle-arena-view') || document.getElementById('tug-of-war-view');
      if (el) this.flashGlow(el, teamId);
    },

    // To'g'ri javob porlashi (Green/Red glow)
    flashGlow(el, teamId = 1) {
      if (!el) return;
      const cls = teamId === 1 ? 'team1-flash-glow' : 'team2-flash-glow';
      el.classList.add(cls);
      setTimeout(() => el.classList.remove(cls), 600);
    },

    // G'alaba qozonilganda barglar yog'ishi (Leaf Storm Victory)
    triggerVictoryLeaves(count = 45) {
      const leaves = ['🍃', '🍂', '🍁', '🌱', '🌿', '✨'];
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      for (let i = 0; i < count; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'falling-leaf-particle';
        leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
        
        const startX = Math.random() * window.innerWidth;
        const duration = 2.5 + Math.random() * 2.5; // 2.5s - 5s
        const delay = Math.random() * 1.5; // 0s - 1.5s
        const fontSize = 18 + Math.random() * 24; // 18px - 42px
        
        leaf.style.left = `${startX}px`;
        leaf.style.top = `-30px`;
        leaf.style.fontSize = `${fontSize}px`;
        leaf.style.animationDuration = `${duration}s`;
        leaf.style.animationDelay = `${delay}s`;

        document.body.appendChild(leaf);

        setTimeout(() => {
          if (leaf.parentNode) leaf.parentNode.removeChild(leaf);
        }, (duration + delay) * 1000 + 100);
      }

      this.playVictory();
    }
  };

  window.EcoBattleCoreFx = CoreFx;
})();
