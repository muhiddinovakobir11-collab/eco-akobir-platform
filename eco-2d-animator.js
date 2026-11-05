// =======================================================================
// EcoAkobir — 2D Professional Sanoat & Ekologik Animatsiyalar Dvigateli
// 13 ta o'yindagi har bir savol va keys mazmuniga mos dinamik 2D animatsiyalar
// Asoschi: Akobir | Akosh Eco & EcoAkobir Platformasi
// =======================================================================

const Eco2DAnimator = {

  // Universal CSS animatsiyalari SVG ichida inline tarzda yuklanadi
  getCommonStyles() {
    return `
      @keyframes eco2dBubble {
        0% { transform: translateY(0) scale(0.6); opacity: 0.2; }
        50% { opacity: 0.95; }
        100% { transform: translateY(-42px) scale(1.15); opacity: 0; }
      }
      @keyframes eco2dSteam {
        0% { transform: translate(0, 0) scale(0.8); opacity: 0.25; }
        50% { opacity: 0.75; }
        100% { transform: translate(-12px, -36px) scale(1.4); opacity: 0; }
      }
      @keyframes eco2dGauge {
        0%, 100% { transform: rotate(-28deg); }
        50% { transform: rotate(32deg); }
      }
      @keyframes eco2dHazardPulse {
        0%, 100% { opacity: 0.35; filter: drop-shadow(0 0 2px #ef4444); }
        50% { opacity: 1; filter: drop-shadow(0 0 10px #ef4444); }
      }
      @keyframes eco2dFlow {
        0% { stroke-dashoffset: 40; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes eco2dFlame {
        0%, 100% { transform: scaleY(0.9) scaleX(1.05); fill: #f59e0b; }
        50% { transform: scaleY(1.2) scaleX(0.92); fill: #ef4444; }
      }
      @keyframes eco2dLaserSweep {
        0%, 100% { transform: translateX(0); opacity: 0.4; }
        50% { transform: translateX(110px); opacity: 1; }
      }
      @keyframes eco2dSpinWheel {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes eco2dRadarWave {
        0% { r: 5; opacity: 1; }
        100% { r: 38; opacity: 0; }
      }
      @keyframes eco2dScaleTilt {
        0%, 100% { transform: rotate(-6deg); }
        50% { transform: rotate(6deg); }
      }
      @keyframes eco2dSparkFlash {
        0%, 100% { opacity: 0; transform: scale(0.5); }
        20%, 60% { opacity: 1; transform: scale(1.2); }
      }
      @keyframes eco2dFloatItem {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-7px); }
      }
      @keyframes eco2dConveyorScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(24px); }
      }
      @keyframes eco2dWaveMotion {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
      .eco-b1 { animation: eco2dBubble 2s infinite ease-in; }
      .eco-b2 { animation: eco2dBubble 2.4s infinite ease-in 0.5s; }
      .eco-b3 { animation: eco2dBubble 1.8s infinite ease-in 1s; }
      .eco-b4 { animation: eco2dBubble 2.2s infinite ease-in 0.3s; }
      .eco-st1 { animation: eco2dSteam 3s infinite linear; }
      .eco-st2 { animation: eco2dSteam 3.4s infinite linear 1.2s; }
      .eco-st3 { animation: eco2dSteam 2.8s infinite linear 0.6s; }
      .eco-gauge-needle { animation: eco2dGauge 2.2s infinite ease-in-out; }
      .eco-hazard { animation: eco2dHazardPulse 1.2s infinite ease-in-out; }
      .eco-pipe-flow { stroke-dasharray: 8, 4; animation: eco2dFlow 1s infinite linear; }
      .eco-flame1 { transform-origin: bottom center; animation: eco2dFlame 0.4s infinite ease-in-out; }
      .eco-flame2 { transform-origin: bottom center; animation: eco2dFlame 0.35s infinite ease-in-out 0.1s; }
      .eco-laser { animation: eco2dLaserSweep 1.8s infinite ease-in-out; }
      .eco-spin { animation: eco2dSpinWheel 2.5s infinite linear; }
      .eco-spin-slow { animation: eco2dSpinWheel 6s infinite linear; }
      .eco-radar-circle { animation: eco2dRadarWave 2s infinite ease-out; }
      .eco-radar-circle2 { animation: eco2dRadarWave 2s infinite ease-out 1s; }
      .eco-scale-beam { transform-origin: 260px 45px; animation: eco2dScaleTilt 4s infinite ease-in-out; }
      .eco-spark { animation: eco2dSparkFlash 0.8s infinite ease-in-out; }
      .eco-float { animation: eco2dFloatItem 2.5s infinite ease-in-out; }
      .eco-wave { animation: eco2dWaveMotion 2s infinite ease-in-out; }
      @keyframes eco2dHydraulicPress {
        0%, 100% { transform: translateY(0); }
        40% { transform: translateY(48px); }
        60% { transform: translateY(48px); }
        80% { transform: translateY(0); }
      }
      @keyframes eco2dCoinSpin {
        0% { transform: rotateY(0deg) scale(1); }
        50% { transform: rotateY(180deg) scale(1.1); }
        100% { transform: rotateY(360deg) scale(1); }
      }
      @keyframes eco2dPulseScan {
        0%, 100% { opacity: 0.3; transform: scaleX(0.9); }
        50% { opacity: 1; transform: scaleX(1.1); }
      }
      .eco-hydraulic-piston { animation: eco2dHydraulicPress 3.5s infinite ease-in-out; }
      .eco-coin-spin { transform-origin: center; animation: eco2dCoinSpin 4s infinite linear; }
      .eco-scan-pulse { animation: eco2dPulseScan 1.6s infinite ease-in-out; }

    `;
  },

  // 1. Kimyo va Simobli Elektroliz Animatsiyasi
  renderChemicalElectrolysis(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-amber-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-amber-400">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Kimyo & Elektroliz Reaktori</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-emerald-400 font-mono">Hg &lt; 0.0003 mg/m³</span>
            <span class="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">ISO 14001</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <defs>
            <linearGradient id="chemGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#065f46" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#022c22" stop-opacity="0.95"/>
            </linearGradient>
            <linearGradient id="toxicGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stop-color="#10b981"/>
              <stop offset="50%" stop-color="#06b6d4"/>
              <stop offset="100%" stop-color="#a855f7"/>
            </linearGradient>
          </defs>
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <path d="M 0 35 L 520 35 M 0 70 L 520 70 M 0 105 L 520 105" stroke="#1e293b" stroke-width="0.5" stroke-dasharray="4,4"/>
          <!-- Reaktor -->
          <rect x="25" y="22" width="115" height="92" rx="14" fill="url(#chemGrad)" stroke="#10b981" stroke-width="2"/>
          <rect x="35" y="60" width="95" height="46" rx="8" fill="url(#toxicGrad)" opacity="0.45"/>
          <circle cx="50" cy="90" r="4" fill="#34d399" class="eco-b1"/>
          <circle cx="75" cy="96" r="3" fill="#67e8f9" class="eco-b2"/>
          <circle cx="95" cy="88" r="4.5" fill="#a7f3d0" class="eco-b3"/>
          <circle cx="112" cy="98" r="3.5" fill="#c084fc" class="eco-b4"/>
          <!-- Quvurlar -->
          <path d="M 140 45 L 230 45 L 230 70 L 320 70" fill="none" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
          <path d="M 140 45 L 230 45 L 230 70 L 320 70" fill="none" stroke="#10b981" stroke-width="3" class="eco-pipe-flow"/>
          <!-- Elektroliz Vanna -->
          <rect x="220" y="25" width="130" height="85" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <rect x="235" y="38" width="12" height="58" rx="3" fill="#ef4444" opacity="0.85"/>
          <text x="241" y="70" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">+</text>
          <rect x="323" y="38" width="12" height="58" rx="3" fill="#3b82f6" opacity="0.85"/>
          <text x="329" y="70" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">-</text>
          <rect x="250" y="78" width="70" height="24" rx="5" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="285" y="94" fill="#0f172a" font-size="8.5" font-weight="black" text-anchor="middle">Hg KATOD</text>
          <circle cx="270" cy="40" r="8" fill="#a855f7" class="eco-st1" opacity="0.5"/>
          <circle cx="295" cy="35" r="11" fill="#06b6d4" class="eco-st2" opacity="0.4"/>
          <!-- Manometr & Signal -->
          <circle cx="440" cy="62" r="30" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
          <circle cx="440" cy="62" r="26" fill="#020617"/>
          <line x1="440" y1="38" x2="440" y2="43" stroke="#f59e0b" stroke-width="2"/>
          <line x1="440" y1="62" x2="440" y2="42" stroke="#ef4444" stroke-width="2" stroke-linecap="round" class="eco-gauge-needle" style="transform-origin: 440px 62px;"/>
          <circle cx="440" cy="62" r="3" fill="#f87171"/>
          <text x="440" y="80" fill="#94a3b8" font-size="8" text-anchor="middle">3.2 bar</text>
          <circle cx="440" cy="18" r="7" fill="#dc2626" class="eco-hazard"/>
          <!-- Pastki izoh -->
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#f59e0b" font-size="8.5" font-weight="bold">AUDIT MONITORING:</text>
          <text x="135" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Kaustik soda sexida simobli elektroliz shlami").substring(0, 68)}</text>
        </svg>
      </div>
    `;
  },

  // 2. Piroliz Reaktori & Termik Utilizatsiya Animatsiyasi
  renderPyrolysisReactor(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-orange-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-orange-400">
            <span class="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Yuqori Haroratli Piroliz Reaktori</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-amber-400 font-mono">T = 850°C - 1000°C</span>
            <span class="bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/30">Kislorodsiz</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Reaktor korpusi -->
          <rect x="40" y="25" width="120" height="75" rx="12" fill="#1e293b" stroke="#f97316" stroke-width="2"/>
          <rect x="55" y="40" width="90" height="30" rx="6" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
          <text x="100" y="58" fill="#fbbf24" font-size="11" font-weight="black" text-anchor="middle">1000°C KREKING</text>
          <!-- Olovlar -->
          <path d="M 60 98 Q 70 82 80 98 Z" class="eco-flame1" fill="#f59e0b"/>
          <path d="M 80 98 Q 90 78 100 98 Z" class="eco-flame2" fill="#ef4444"/>
          <path d="M 100 98 Q 110 80 120 98 Z" class="eco-flame1" fill="#f59e0b"/>
          <path d="M 120 98 Q 130 84 140 98 Z" class="eco-flame2" fill="#ef4444"/>
          <!-- Gaz chiqish quvuri va Kondensator -->
          <path d="M 160 45 L 260 45 L 260 90 L 360 90" fill="none" stroke="#475569" stroke-width="7" stroke-linecap="round"/>
          <path d="M 160 45 L 260 45 L 260 90 L 360 90" fill="none" stroke="#f97316" stroke-width="3" class="eco-pipe-flow"/>
          <!-- Kondensatsiya kolonnasi -->
          <rect x="250" y="25" width="80" height="85" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <text x="290" y="42" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Sovutgich</text>
          <!-- Tomchilar -->
          <circle cx="280" cy="60" r="3.5" fill="#38bdf8" class="eco-b1"/>
          <circle cx="300" cy="70" r="4" fill="#67e8f9" class="eco-b2"/>
          <!-- Sintetik moy baki -->
          <rect x="360" y="45" width="120" height="65" rx="8" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
          <rect x="370" y="70" width="100" height="32" rx="4" fill="#4338ca" opacity="0.6"/>
          <text x="420" y="88" fill="#e0e7ff" font-size="10" font-weight="black" text-anchor="middle">Sintetik Neft</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#f97316" font-size="8.5" font-weight="bold">JARAYON:</text>
          <text x="90" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Polimer chiqindilardan uglevodorod olish").substring(0, 72)}</text>
        </svg>
      </div>
    `;
  },

  // 3. Chiqindi Poligoni & Metan Degazatsiyasi Animatsiyasi
  renderLandfillDegas(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Poligon Metan Degazatsiyasi & Mash'ala</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-emerald-400 font-mono">CH4: 62% • CO2: 38%</span>
            <span class="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Vakuum Nasos</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Poligon qatlamlari -->
          <polygon points="20,110 90,45 220,45 270,110" fill="#1e293b" stroke="#334155" stroke-width="2"/>
          <line x1="45" y1="90" x2="245" y2="90" stroke="#0f172a" stroke-width="3" stroke-dasharray="6,3"/>
          <line x1="70" y1="70" x2="230" y2="70" stroke="#0f172a" stroke-width="3" stroke-dasharray="6,3"/>
          <!-- Vertikal gaz qudug'i -->
          <rect x="150" y="30" width="14" height="75" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="157" cy="95" r="3" fill="#34d399" class="eco-b1"/>
          <circle cx="157" cy="75" r="3.5" fill="#34d399" class="eco-b2"/>
          <circle cx="157" cy="55" r="4" fill="#34d399" class="eco-b3"/>
          <!-- Gorizontal gaz liniyasi -->
          <path d="M 157 30 L 157 20 L 320 20 L 320 60" fill="none" stroke="#10b981" stroke-width="3" class="eco-pipe-flow"/>
          <!-- Gaz kompressori / Vakuum stansiyasi -->
          <rect x="300" y="55" width="70" height="50" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="335" cy="80" r="14" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <path d="M 335 68 L 335 92 M 323 80 L 347 80" stroke="#38bdf8" stroke-width="2" class="eco-spin" style="transform-origin: 335px 80px;"/>
          <!-- Metan fMash'alasi (Flare) -->
          <rect x="420" y="45" width="22" height="65" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
          <path d="M 420 45 L 431 15 L 442 45 Z" class="eco-flame1" fill="#38bdf8"/>
          <path d="M 424 45 L 431 22 L 438 45 Z" class="eco-flame2" fill="#a855f7"/>
          <text x="431" y="10" fill="#38bdf8" font-size="8.5" font-weight="bold" text-anchor="middle">FLARE 1200°C</text>
          <!-- Pastki izoh -->
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#10b981" font-size="8.5" font-weight="bold">DEGATSATSIYA:</text>
          <text x="125" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Poligon qatlamlaridan biogazni xavfsiz yoqish").substring(0, 70)}</text>
        </svg>
      </div>
    `;
  },

  // 4. Oqava Suvlarni Tozalash & Aerotenk Animatsiyasi
  renderWastewaterTreatment(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-cyan-400">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Oqava Suv Aerotenki & Biologik Tozalash</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-cyan-400 font-mono">BOD5 &lt; 15 mg/L • pH 7.4</span>
            <span class="bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">Aeratsiya</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Birlamchi tindirgich -->
          <rect x="30" y="35" width="95" height="75" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
          <rect x="35" y="65" width="85" height="40" fill="#0284c7" opacity="0.6"/>
          <text x="77" y="55" fill="#7dd3fc" font-size="9" font-weight="bold" text-anchor="middle">Tindirgich</text>
          <!-- Aerotenk (Markaziy havza) -->
          <rect x="155" y="30" width="165" height="80" rx="10" fill="#082f49" stroke="#06b6d4" stroke-width="2"/>
          <!-- To'lqinlar & Kislorod diffuzorlari -->
          <line x1="165" y1="102" x2="310" y2="102" stroke="#06b6d4" stroke-width="4" stroke-dasharray="8,6"/>
          <circle cx="180" cy="95" r="3.5" fill="#67e8f9" class="eco-b1"/>
          <circle cx="210" cy="90" r="4.5" fill="#a5f3fc" class="eco-b2"/>
          <circle cx="240" cy="95" r="3" fill="#67e8f9" class="eco-b3"/>
          <circle cx="270" cy="92" r="5" fill="#a5f3fc" class="eco-b4"/>
          <circle cx="295" cy="95" r="3.5" fill="#67e8f9" class="eco-b1"/>
          <text x="237" y="48" fill="#22d3ee" font-size="10" font-weight="black" text-anchor="middle">AEROTENK (O2 PUFKALARI)</text>
          <!-- UV Dezinfeksiya kanali -->
          <rect x="350" y="35" width="135" height="75" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
          <rect x="360" y="60" width="115" height="42" fill="#7e22ce" opacity="0.5"/>
          <line x1="370" y1="75" x2="465" y2="75" stroke="#c084fc" stroke-width="3" stroke-dasharray="4,4" class="eco-pipe-flow"/>
          <text x="417" y="52" fill="#d8b4fe" font-size="9" font-weight="bold" text-anchor="middle">UV ZARARSIZLANTIRISH</text>
          <!-- Suv oqimi yo'nalishi -->
          <path d="M 125 70 L 155 70 M 320 70 L 350 70" stroke="#06b6d4" stroke-width="3" class="eco-pipe-flow"/>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#06b6d4" font-size="8.5" font-weight="bold">SUV AUDITI:</text>
          <text x="105" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Sanoat oqava suvlarini standartgacha tozalash").substring(0, 72)}</text>
        </svg>
      </div>
    `;
  },

  // 5. Xavfli Tibbiy Chiqindilar & Avtoklav Animatsiyasi
  renderMedicalAutoclave(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-rose-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-rose-400">
            <span class="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Tibbiy Avtoklav & Sterilizatsiya</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-rose-400 font-mono">134°C • 3.5 Bar</span>
            <span class="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">Klass B/V</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Avtoklav kamerali korpus -->
          <rect x="40" y="25" width="180" height="85" rx="16" fill="#1e293b" stroke="#f43f5e" stroke-width="2.5"/>
          <rect x="55" y="38" width="150" height="60" rx="10" fill="#0f172a" stroke="#fda4af" stroke-width="1.5"/>
          <!-- Bug' naychalari & Issiq bug' -->
          <circle cx="90" cy="70" r="7" fill="#fda4af" class="eco-st1" opacity="0.6"/>
          <circle cx="130" cy="65" r="9" fill="#fda4af" class="eco-st2" opacity="0.5"/>
          <circle cx="170" cy="70" r="8" fill="#fda4af" class="eco-st3" opacity="0.6"/>
          <!-- Biohazard belgisi -->
          <circle cx="130" cy="50" r="14" fill="#881337" stroke="#f43f5e" stroke-width="1.5"/>
          <text x="130" y="55" fill="#ffffff" font-size="12" text-anchor="middle">☣</text>
          <!-- Shreder & Maydalash mexanizmi -->
          <rect x="250" y="30" width="110" height="80" rx="10" fill="#0f172a" stroke="#fb7185" stroke-width="2"/>
          <circle cx="285" cy="70" r="15" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
          <path d="M 285 57 L 285 83 M 272 70 L 298 70" stroke="#fb7185" stroke-width="2.5" class="eco-spin" style="transform-origin: 285px 70px;"/>
          <circle cx="325" cy="70" r="15" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
          <path d="M 325 57 L 325 83 M 312 70 L 338 70" stroke="#fb7185" stroke-width="2.5" class="eco-spin" style="transform-origin: 325px 70px;"/>
          <!-- Xavfsiz utilizatsiya konteyneri -->
          <rect x="390" y="35" width="95" height="75" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
          <text x="437" y="65" fill="#34d399" font-size="10" font-weight="black" text-anchor="middle">Zararsiz</text>
          <text x="437" y="80" fill="#a7f3d0" font-size="8.5" text-anchor="middle">Maishiy Chiqit</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#f43f5e" font-size="8.5" font-weight="bold">STERILIZATSIYA:</text>
          <text x="135" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Kasalxona chiqindilarini yuqori haroratda zararsizlantirish").substring(0, 68)}</text>
        </svg>
      </div>
    `;
  },

  // 6. Biogaz Reaktori & Anaerob Fermentatsiya Animatsiyasi
  renderBiogasReactor(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Biogaz Reaktori & Metan Generator</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-emerald-400 font-mono">38°C Mezofil • 65% CH4</span>
            <span class="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Biomassa</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Biogaz gumbazi -->
          <ellipse cx="160" cy="65" rx="85" ry="48" fill="#14532d" stroke="#22c55e" stroke-width="2.5"/>
          <rect x="75" y="65" width="170" height="45" fill="#052e16"/>
          <!-- Mikser / Parrak -->
          <line x1="160" y1="20" x2="160" y2="95" stroke="#86efac" stroke-width="3"/>
          <line x1="135" y1="75" x2="185" y2="75" stroke="#4ade80" stroke-width="3" class="eco-spin" style="transform-origin: 160px 75px;"/>
          <!-- Metan pufakchalari -->
          <circle cx="120" cy="85" r="4" fill="#86efac" class="eco-b1"/>
          <circle cx="150" cy="80" r="5" fill="#bbf7d0" class="eco-b2"/>
          <circle cx="190" cy="85" r="4.5" fill="#86efac" class="eco-b3"/>
          <!-- Gaz yig'ish trubasi -->
          <path d="M 160 20 L 160 10 L 320 10 L 320 40" fill="none" stroke="#22c55e" stroke-width="3" class="eco-pipe-flow"/>
          <!-- Gazometer & Mash'ala -->
          <rect x="290" y="40" width="85" height="70" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <text x="332" y="65" fill="#38bdf8" font-size="9.5" font-weight="black" text-anchor="middle">GAZOMETR</text>
          <text x="332" y="80" fill="#86efac" font-size="11" font-weight="bold" text-anchor="middle">500 m³</text>
          <!-- Bio-Elektr generator -->
          <rect x="405" y="40" width="90" height="70" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
          <text x="450" y="65" fill="#facc15" font-size="10" font-weight="black" text-anchor="middle">⚡ GENERATOR</text>
          <text x="450" y="82" fill="#fde047" font-size="9" text-anchor="middle">150 kVt/soat</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#22c55e" font-size="8.5" font-weight="bold">BIOGAZ BOSHQARUVI:</text>
          <text x="155" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Organik chiqindilardan elektr va issiqlik energiyasi olish").substring(0, 65)}</text>
        </svg>
      </div>
    `;
  },

  // 7. E-Waste & Batareyalar Demontaji Animatsiyasi
  renderEWasteBattery(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-purple-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-purple-400">
            <span class="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Elektron Chiqindi & Li-ion Batareya</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-purple-400 font-mono">Li • Co • Ni • Au</span>
            <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">Demontaj</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Lenta konveyer -->
          <rect x="30" y="75" width="220" height="18" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
          <!-- Batareya bloklari -->
          <rect x="50" y="55" width="28" height="18" rx="3" fill="#0f766e" stroke="#2dd4bf" stroke-width="1.5" class="eco-float"/>
          <rect x="110" y="55" width="28" height="18" rx="3" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5" class="eco-float"/>
          <rect x="170" y="55" width="28" height="18" rx="3" fill="#b91c1c" stroke="#f87171" stroke-width="1.5" class="eco-float"/>
          <!-- Robotik qisqich (Gripper) -->
          <path d="M 124 20 L 124 45 M 115 45 L 133 45 M 115 45 L 110 54 M 133 45 L 138 54" stroke="#c084fc" stroke-width="2.5" fill="none"/>
          <circle cx="124" cy="50" r="3" fill="#ec4899" class="eco-spark"/>
          <!-- Maydalash va Magnit separator -->
          <rect x="270" y="30" width="110" height="80" rx="10" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
          <circle cx="325" cy="70" r="18" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
          <text x="325" y="74" fill="#facc15" font-size="10" font-weight="black" text-anchor="middle">MAGNIT</text>
          <!-- Chiqish qutilari -->
          <rect x="405" y="35" width="90" height="35" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
          <text x="450" y="56" fill="#86efac" font-size="9" font-weight="bold" text-anchor="middle">Qimmatbaho (Au/Cu)</text>
          <rect x="405" y="75" width="90" height="35" rx="6" fill="#4c0519" stroke="#f43f5e" stroke-width="1.5"/>
          <text x="450" y="96" fill="#fda4af" font-size="9" font-weight="bold" text-anchor="middle">Litiy Shlam</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#a855f7" font-size="8.5" font-weight="bold">E-WASTE BOSHQARUVI:</text>
          <text x="165" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Elektronika chiqindilaridan nodir metallarni ajratish").substring(0, 65)}</text>
        </svg>
      </div>
    `;
  },

  // 8. Kompostlash & Organik O'g'it Zavodi Animatsiyasi
  renderCompostPlant(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-lime-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-lime-400">
            <span class="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Aerob Kompostlash & Bio-Gumus Zavodi</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-lime-400 font-mono">T = 65°C • C:N = 30:1</span>
            <span class="bg-lime-500/20 text-lime-300 px-2 py-0.5 rounded border border-lime-500/30">Organika</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Kompost uyumi (Windrow) -->
          <polygon points="30,110 90,45 220,45 280,110" fill="#365314" stroke="#84cc16" stroke-width="2"/>
          <!-- Bio-issiq bug'lari -->
          <circle cx="120" cy="38" r="8" fill="#bef264" class="eco-st1" opacity="0.5"/>
          <circle cx="160" cy="32" r="11" fill="#bef264" class="eco-st2" opacity="0.6"/>
          <circle cx="200" cy="36" r="9" fill="#bef264" class="eco-st3" opacity="0.5"/>
          <!-- Termozond (Termometr) -->
          <rect x="180" y="25" width="8" height="60" rx="3" fill="#f87171"/>
          <circle cx="184" cy="85" r="7" fill="#dc2626"/>
          <text x="184" y="20" fill="#f87171" font-size="9" font-weight="black" text-anchor="middle">65°C</text>
          <!-- Kompost ag'dargich mashina (Turner) -->
          <rect x="310" y="45" width="90" height="60" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
          <circle cx="355" cy="75" r="16" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
          <path d="M 355 62 L 355 88 M 342 75 L 368 75" stroke="#facc15" stroke-width="2.5" class="eco-spin" style="transform-origin: 355px 75px;"/>
          <text x="355" y="40" fill="#fde047" font-size="8.5" font-weight="bold" text-anchor="middle">AG'DARGICH</text>
          <!-- Tayyor bio-o'g'it va nihol -->
          <rect x="425" y="55" width="75" height="50" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
          <path d="M 462 85 Q 462 65 470 65 Q 478 65 462 85 Z" fill="#4ade80"/>
          <text x="462" y="100" fill="#86efac" font-size="8.5" font-weight="bold" text-anchor="middle">BIO-GUMUS</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#84cc16" font-size="8.5" font-weight="bold">KOMPOST TIZIMI:</text>
          <text x="140" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Oziq-ovqat va yashil chiqindilarni tabiiy o'g'itga aylantirish").substring(0, 68)}</text>
        </svg>
      </div>
    `;
  },

  // 9. Sanoat Havosi & Siklon Skrubber Animatsiyasi
  renderAirCyclone(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-teal-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-teal-400">
            <span class="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Sanoat Siklon Chang Tutqich & Skrubber</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-teal-400 font-mono">Samaradorlik: 98.7%</span>
            <span class="bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">PM10 / PM2.5</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Changli kirish trubasi -->
          <rect x="25" y="45" width="85" height="25" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
          <text x="65" y="60" fill="#f87171" font-size="8.5" font-weight="bold" text-anchor="middle">Changli Havo</text>
          <!-- Konusli Siklon Korpusi -->
          <polygon points="110,30 210,30 180,95 140,95" fill="#0f172a" stroke="#14b8a6" stroke-width="2"/>
          <rect x="135" y="95" width="50" height="20" rx="3" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="160" y="108" fill="#fbbf24" font-size="8" font-weight="black" text-anchor="middle">Bunker (Chang)</text>
          <!-- Siklon girdobi (Vortex) -->
          <ellipse cx="160" cy="55" rx="35" ry="12" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="6,4" class="eco-spin" style="transform-origin: 160px 55px;"/>
          <ellipse cx="160" cy="72" rx="20" ry="8" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4,4" class="eco-spin" style="transform-origin: 160px 72px;"/>
          <!-- Tozalangan havo trubasi -->
          <rect x="150" y="10" width="20" height="22" fill="#0d9488"/>
          <!-- Venturi Skrubber (Suvli yuvish) -->
          <rect x="250" y="25" width="115" height="85" rx="10" fill="#082f49" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="280" cy="65" r="4" fill="#38bdf8" class="eco-b1"/>
          <circle cx="310" cy="70" r="3.5" fill="#67e8f9" class="eco-b2"/>
          <circle cx="335" cy="62" r="5" fill="#7dd3fc" class="eco-b3"/>
          <text x="307" y="45" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Suvli Skrubber</text>
          <!-- Mo'ri va toza havo -->
          <polygon points="410,110 425,25 455,25 470,110" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
          <circle cx="440" cy="18" r="7" fill="#6ee7b7" class="eco-st1" opacity="0.6"/>
          <circle cx="440" cy="12" r="10" fill="#a7f3d0" class="eco-st2" opacity="0.5"/>
          <text x="440" y="12" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">TOZA HAVO</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#14b8a6" font-size="8.5" font-weight="bold">HAVO FILTRI:</text>
          <text x="120" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Sanoat havosi chang va aerozollardan tozalash").substring(0, 72)}</text>
        </svg>
      </div>
    `;
  },

  // 10. Plastik Optik Saralash & NIR Spektroskopiya Animatsiyasi
  renderOpticalSorter(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-yellow-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-yellow-400">
            <span class="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Plastik Optik NIR Spektrometr & Havo Ejektori</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-yellow-400 font-mono">λ = 900 - 1700 nm</span>
            <span class="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded border border-yellow-500/30">4.5 m/s Konveyer</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Yuqori tezlikdagi konveyer -->
          <rect x="30" y="70" width="260" height="18" rx="4" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
          <!-- Polimer bo'laklari (PET/HDPE/PP) -->
          <rect x="50" y="56" width="16" height="12" rx="2" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
          <text x="58" y="65" fill="#ffffff" font-size="7" font-weight="black" text-anchor="middle">PET</text>
          <rect x="100" y="56" width="16" height="12" rx="2" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
          <text x="108" y="65" fill="#ffffff" font-size="7" font-weight="black" text-anchor="middle">PE</text>
          <rect x="150" y="56" width="16" height="12" rx="2" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
          <text x="158" y="65" fill="#ffffff" font-size="7" font-weight="black" text-anchor="middle">PVC</text>
          <rect x="200" y="56" width="16" height="12" rx="2" fill="#10b981" stroke="#047857" stroke-width="1"/>
          <text x="208" y="65" fill="#ffffff" font-size="7" font-weight="black" text-anchor="middle">PP</text>
          <!-- NIR Optik Sensor Boshchasi -->
          <rect x="110" y="18" width="80" height="24" rx="5" fill="#0f172a" stroke="#facc15" stroke-width="2"/>
          <text x="150" y="34" fill="#fde047" font-size="9" font-weight="black" text-anchor="middle">NIR SENSOR</text>
          <!-- Lazerli infraqizil skaner nurlari -->
          <polygon points="125,42 175,42 220,68 80,68" fill="#facc15" opacity="0.25"/>
          <line x1="150" y1="42" x2="150" y2="68" stroke="#ef4444" stroke-width="2" class="eco-laser"/>
          <!-- Havo purkagich (Ejektor klapanlari) -->
          <rect x="290" y="60" width="30" height="35" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
          <path d="M 320 75 L 360 60 M 320 75 L 360 90" stroke="#67e8f9" stroke-width="2.5" stroke-dasharray="4,3" class="eco-pipe-flow"/>
          <!-- Saralangan fraksiya bunkerlari -->
          <rect x="365" y="45" width="65" height="65" rx="6" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
          <text x="397" y="75" fill="#e0f2fe" font-size="9.5" font-weight="black" text-anchor="middle">PET (Toza)</text>
          <rect x="440" y="45" width="65" height="65" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
          <text x="472" y="75" fill="#fee2e2" font-size="9.5" font-weight="black" text-anchor="middle">Qolgan</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#eab308" font-size="8.5" font-weight="bold">OPTIK SARALASH:</text>
          <text x="145" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Optik sensor orqali polimer turlarini millisekundda saralash").substring(0, 68)}</text>
        </svg>
      </div>
    `;
  },

  // 11. Shahar Chiqindi Logistikasi & Smart Marshrutlash Animatsiyasi
  renderLogisticsTruck(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Shahar Logistikasi & Smart Marshrutlash</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-emerald-400 font-mono">IoT Sensorlar: 95%</span>
            <span class="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">GPS Radar</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Shahar ko'cha chiziqlari -->
          <line x1="20" y1="90" x2="500" y2="90" stroke="#334155" stroke-width="4"/>
          <line x1="20" y1="90" x2="500" y2="90" stroke="#facc15" stroke-width="2" stroke-dasharray="14,10"/>
          <!-- Chiqindi tashuvchi smart fura/mashina -->
          <rect x="180" y="55" width="85" height="32" rx="4" fill="#065f46" stroke="#10b981" stroke-width="2"/>
          <rect x="265" y="63" width="30" height="24" rx="4" fill="#0f766e" stroke="#10b981" stroke-width="2"/>
          <circle cx="205" cy="90" r="8" fill="#0f172a" stroke="#cbd5e1" stroke-width="3"/>
          <circle cx="280" cy="90" r="8" fill="#0f172a" stroke="#cbd5e1" stroke-width="3"/>
          <circle cx="290" cy="58" r="4" fill="#38bdf8" class="eco-hazard"/>
          <!-- GPS Sun'iy yo'ldosh Radari -->
          <circle cx="90" cy="35" r="16" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="90" cy="35" r="5" fill="#38bdf8" class="eco-radar-circle"/>
          <circle cx="90" cy="35" r="5" fill="#38bdf8" class="eco-radar-circle2"/>
          <text x="90" y="25" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">GPS IoT</text>
          <!-- Smart Qutilar (Statuslar) -->
          <rect x="360" y="50" width="35" height="38" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
          <text x="377" y="70" fill="#f87171" font-size="11" font-weight="black" text-anchor="middle">95%</text>
          <text x="377" y="82" fill="#94a3b8" font-size="7" text-anchor="middle">Kritik</text>
          <rect x="420" y="55" width="35" height="33" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
          <text x="437" y="72" fill="#34d399" font-size="11" font-weight="black" text-anchor="middle">30%</text>
          <text x="437" y="82" fill="#94a3b8" font-size="7" text-anchor="middle">Norma</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#10b981" font-size="8.5" font-weight="bold">LOGISTIKA:</text>
          <text x="110" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "IoT sensorlar asosida eng kam CO2 emissiyali optimal marshrut").substring(0, 70)}</text>
        </svg>
      </div>
    `;
  },

  // 12. Davlat Ekologik Ekspertizasi & Qonunchilik Tarozisi Animatsiyasi
  renderLegalScale(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-purple-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-purple-400">
            <span class="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Davlat Ekologik Ekspertizasi & ZVOS / AMTB</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-purple-400 font-mono">Qonun Me'yori</span>
            <span class="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">SanQvaM</span>
          </div>
        </div>
        <svg viewBox="0 0 520 135" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="135" fill="#020617"/>
          <!-- Davlat Qonunchilik Tarozisi (Scales of Justice) -->
          <rect x="256" y="25" width="8" height="75" fill="#a855f7"/>
          <polygon points="245,100 275,100 260,90" fill="#7e22ce"/>
          <g class="eco-scale-beam">
            <line x1="160" y1="45" x2="360" y2="45" stroke="#c084fc" stroke-width="4" stroke-linecap="round"/>
            <circle cx="260" cy="45" r="6" fill="#e9d5ff"/>
            <!-- Chap tarozi pallasi (Sanoat loyihasi) -->
            <line x1="170" y1="45" x2="150" y2="75" stroke="#c084fc" stroke-width="1.5"/>
            <line x1="170" y1="45" x2="190" y2="75" stroke="#c084fc" stroke-width="1.5"/>
            <path d="M 140 75 Q 170 90 200 75 Z" fill="#4c1d95" stroke="#a855f7" stroke-width="1.5"/>
            <text x="170" y="70" fill="#f43f5e" font-size="12" text-anchor="middle">🏭</text>
            <!-- O'ng tarozi pallasi (Tabiat va Aholi salomatligi) -->
            <line x1="350" y1="45" x2="330" y2="75" stroke="#c084fc" stroke-width="1.5"/>
            <line x1="350" y1="45" x2="370" y2="75" stroke="#c084fc" stroke-width="1.5"/>
            <path d="M 320 75 Q 350 90 380 75 Z" fill="#065f46" stroke="#10b981" stroke-width="1.5"/>
            <text x="350" y="70" fill="#34d399" font-size="12" text-anchor="middle">🌳</text>
          </g>
          <!-- Ekspertiza Hujjati & Skaner Nuri -->
          <rect x="40" y="30" width="70" height="75" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
          <line x1="50" y1="45" x2="100" y2="45" stroke="#64748b" stroke-width="2"/>
          <line x1="50" y1="58" x2="90" y2="58" stroke="#64748b" stroke-width="2"/>
          <line x1="50" y1="71" x2="95" y2="71" stroke="#64748b" stroke-width="2"/>
          <line x1="40" y1="55" x2="110" y2="55" stroke="#38bdf8" stroke-width="2" class="eco-laser"/>
          <!-- Davlat Ekologik Xulosasi Rasmiy Muhri -->
          <rect x="415" y="35" width="85" height="68" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
          <circle cx="457" cy="65" r="18" fill="#047857" stroke="#6ee7b7" stroke-width="1.5"/>
          <text x="457" y="69" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">TASDIQ</text>
          <rect x="25" y="118" width="470" height="15" rx="3" fill="#090d16" stroke="#1e293b"/>
          <text x="35" y="129" fill="#c084fc" font-size="8.5" font-weight="bold">EKSPERTIZA:</text>
          <text x="120" y="129" fill="#e2e8f0" font-size="8.5">${(title || subtitle || "Obyektning ekologik qonunchilik va sanitar me'yorlarga muvofiqligi").substring(0, 68)}</text>
        </svg>
      </div>
    `;
  },

  // 13. Chiqindi Saralash Konveyeri (1-O'yin uchun 2D Maxsus Animatsiya)
  renderSortingConveyor(wasteItem) {
    const itemName = (wasteItem && wasteItem.name) || "Chiqindi";
    const itemIcon = (wasteItem && wasteItem.icon) || "📦";
    const itemCat = (wasteItem && wasteItem.cat) || "plastik";

    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none mb-4">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Avtomatlashtirilgan Saralash Konveyeri</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-slate-900 px-2 py-0.5 rounded text-emerald-400 font-mono">200 ta Chiqindi Bazasi</span>
            <span class="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Smart Saralash</span>
          </div>
        </div>
        <svg viewBox="0 0 520 120" class="w-full h-auto">
          <style>${this.getCommonStyles()}</style>
          <rect width="520" height="120" fill="#020617"/>
          <!-- Konveyer tasmasi va roliklari -->
          <rect x="40" y="65" width="440" height="22" rx="6" fill="#1e293b" stroke="#334155" stroke-width="2"/>
          <line x1="40" y1="76" x2="480" y2="76" stroke="#10b981" stroke-width="2" stroke-dasharray="8,6" class="eco-pipe-flow"/>
          <circle cx="55" cy="76" r="9" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
          <circle cx="465" cy="76" r="9" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
          <!-- Markaziy saralanuvchi buyum -->
          <g class="eco-float">
            <circle cx="260" cy="48" r="24" fill="#0f172a" stroke="#10b981" stroke-width="2.5" filter="drop-shadow(0 0 8px rgba(16,185,129,0.3))"/>
            <text x="260" y="56" font-size="24" text-anchor="middle">${itemIcon}</text>
          </g>
          <!-- Optik skaner ramkasi va nuri -->
          <rect x="225" y="10" width="70" height="14" rx="3" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="260" y="20" fill="#a7f3d0" font-size="7.5" font-weight="black" text-anchor="middle">SKANER</text>
          <polygon points="230,24 290,24 305,65 215,65" fill="#34d399" opacity="0.2"/>
          <line x1="225" y1="38" x2="295" y2="38" stroke="#10b981" stroke-width="1.5" class="eco-laser"/>
          <!-- Chap va o'ng saralash qutilari ko'rsatkichi -->
          <rect x="40" y="20" width="75" height="35" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="77" y="35" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">Ikkilamchi Xomashyo</text>
          <text x="77" y="47" fill="#94a3b8" font-size="7" text-anchor="middle">Plastik / Shisha / Qog'oz</text>
          <rect x="405" y="20" width="75" height="35" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
          <text x="442" y="35" fill="#f43f5e" font-size="8" font-weight="bold" text-anchor="middle">Maxsus / Qayta Ishlanmas</text>
          <text x="442" y="47" fill="#94a3b8" font-size="7" text-anchor="middle">Utilizatsiya ('U')</text>
          <!-- Pastki faol buyum nomi -->
          <rect x="40" y="98" width="440" height="16" rx="4" fill="#090d16" stroke="#1e293b"/>
          <text x="50" y="110" fill="#10b981" font-size="9" font-weight="bold">SARALANUVCHI BUYUM:</text>
          <text x="180" y="110" fill="#ffffff" font-size="9" font-weight="black">${itemName}</text>
        </svg>
      </div>
    `;
  },

  // Savol matni va kalit so'zlari bo'yicha eng mos 2D animatsiya turini aniqlash
  detectScene(item, gameId) {
    if (gameId === 1) return 'sorting';
    if (gameId === 14) return 'optical';
    if (gameId === 15) return 'compactor_shredder';
    if (gameId === 16) return 'wastewater';
    if (gameId === 17) return 'pyrolysis';
    if (gameId === 18) return 'medical';
    if (gameId === 19) return 'smelting_furnace';
    if (gameId === 20) return 'zerowaste_home';
    if (gameId === 21) return 'detective_investigation';
    if (gameId === 22) return 'space_ecosystem';
    if (gameId === 23) return 'waste_market_exchange';

    // Barcha savol va keys parametrlari bo'yicha chuqur semantik tahlil
    const fullText = [
      item.sector || '',
      item.title || '',
      item.question || '',
      item.visualTitle || '',
      item.visualInfo || '',
      item.category || '',
      item.description || '',
      item.param || ''
    ].join(' ').toLowerCase();

    // 1. Maxsus 2D shovqin, trassa va akustik ekran animatsiyasi
    if (fullText.includes('shovqin') || fullText.includes('akustik') || fullText.includes('magistral') || fullText.includes('trassa') || fullText.includes('drobika') || fullText.includes('dba')) {
      return 'highway_noise';
    }
    // 2. Maxsus 2D deraza va sanitariya masofasi animatsiyasi (20m - 100m)
    if (fullText.includes('sanqvam') || fullText.includes('deraza') || fullText.includes('maydoncha') || (fullText.includes('masofa') && (fullText.includes('turar-joy') || fullText.includes('bino') || fullText.includes('aholi') || fullText.includes('uy')))) {
      return 'distance_sanitary';
    }

    if (fullText.includes('simob') || fullText.includes('kaustik') || fullText.includes('xlor') || fullText.includes('kislota') || fullText.includes('kimyo') || fullText.includes('galvanik') || fullText.includes('toksik') || fullText.includes('reagent')) {
      return 'chemical';
    }
    if (fullText.includes('piroliz') || fullText.includes('neft') || fullText.includes('gaz') || fullText.includes('kreking') || fullText.includes('yoqilgi') || fullText.includes('mazut') || fullText.includes('uglevodorod')) {
      return 'pyrolysis';
    }
    if (fullText.includes('poligon') || fullText.includes('metan') || fullText.includes('degazatsiya') || fullText.includes('chiqindixona') || fullText.includes('filtrat')) {
      return 'landfill';
    }
    if (fullText.includes('suv') || fullText.includes('oqava') || fullText.includes('aerotenk') || fullText.includes('daryo') || fullText.includes('tindirgich') || fullText.includes('kanalizatsiya')) {
      return 'wastewater';
    }
    if (fullText.includes('tibbiy') || fullText.includes('kasalxona') || fullText.includes('avtoklav') || fullText.includes('shprits') || fullText.includes('infeksion') || fullText.includes('sterilizatsiya')) {
      return 'medical';
    }
    if (fullText.includes('biogaz') || fullText.includes('fermentatsiya') || fullText.includes('gong') || fullText.includes('biomassa')) {
      return 'biogas';
    }
    if (fullText.includes('elektron') || fullText.includes('batareya') || fullText.includes('akkumulyator') || fullText.includes('plata') || fullText.includes('litiy')) {
      return 'ewaste';
    }
    if (fullText.includes('kompost') || fullText.includes('organik') || fullText.includes('gumus') || fullText.includes('tuproq')) {
      return 'compost';
    }
    if (fullText.includes('havo') || fullText.includes('tutun') || fullText.includes('siklon') || fullText.includes('chang') || fullText.includes('skrubber') || fullText.includes('emissiya') || fullText.includes('pdk')) {
      return 'air';
    }
    if (fullText.includes('plastik') || fullText.includes('optik') || fullText.includes('spektr') || fullText.includes('pet') || fullText.includes('polimer')) {
      return 'optical';
    }
    if (fullText.includes('logistika') || fullText.includes('mashrut') || fullText.includes('tirbandlik') || fullText.includes('mashina') || fullText.includes('iot')) {
      return 'logistics';
    }

    // Fallback o'yin turi bo'yicha
    if (gameId === 4) return 'logistics';
    if (gameId === 5) return 'wastewater';
    if (gameId === 6) return 'biogas';
    if (gameId === 7) return 'ewaste';
    if (gameId === 8) return 'landfill';
    if (gameId === 9) return 'air';
    if (gameId === 10) return 'legal';
    if (gameId === 11) return 'highway_noise';
    if (gameId === 12) return 'logistics';
    if (gameId === 13) return 'optical';
    if (gameId === 3) return 'legal';
    return 'chemical';
  },

  // 13. Magistral Trassa Shovqini & Maktab Akustik To'sig'i 2D Animatsiyasi
  renderHighwayNoiseBarrier(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D Magistral Akustik Ekran & Yashil To'siq</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-rose-950/60 text-rose-400 px-2 py-0.5 rounded border border-rose-500/30 font-mono">Trassa: 85 dBA</span>
            <span class="text-slate-500">➜</span>
            <span class="bg-emerald-950/60 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 font-mono">Maktab: 55 dBA (-30dB)</span>
          </div>
        </div>
        <svg viewBox="0 0 520 140" class="w-full h-auto">
          <defs>
            <style>
              ${this.getCommonStyles()}
              @keyframes ecoCarMove1 { 0% { transform: translateX(-40px); } 100% { transform: translateX(160px); } }
              @keyframes ecoCarMove2 { 0% { transform: translateX(160px); } 100% { transform: translateX(-40px); } }
              @keyframes ecoSoundWaveRing { 0% { r: 6; opacity: 0.9; } 100% { r: 42; opacity: 0; } }
              @keyframes ecoTreeSwayMotion { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(3deg); } }
              .eco-car-1 { animation: ecoCarMove1 3.5s infinite linear; }
              .eco-car-2 { animation: ecoCarMove2 4.2s infinite linear; }
              .eco-sound-ring1 { animation: ecoSoundWaveRing 1.6s infinite ease-out; }
              .eco-sound-ring2 { animation: ecoSoundWaveRing 1.6s infinite ease-out 0.8s; }
              .eco-tree-sway { transform-origin: bottom center; animation: ecoTreeSwayMotion 3s infinite ease-in-out; }
            </style>
            <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="acousticGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
              <stop offset="50%" stop-color="#0284c7" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#0369a1" stop-opacity="0.9"/>
            </linearGradient>
            <linearGradient id="schoolGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
          </defs>

          <!-- Sky & Ground -->
          <rect width="520" height="140" fill="#090d16" rx="10"/>

          <!-- 1. HIGHWAY ZONE (Left: 0 to 140) -->
          <rect x="10" y="55" width="125" height="70" rx="6" fill="url(#roadGrad)" stroke="#334155" stroke-width="1.5"/>
          <line x1="15" y1="90" x2="130" y2="90" stroke="#facc15" stroke-width="2" stroke-dasharray="8,6"/>
          <!-- Moving Car 1 -->
          <g class="eco-car-1">
            <rect x="0" y="65" width="32" height="14" rx="3" fill="#ef4444"/>
            <rect x="6" y="62" width="18" height="6" rx="2" fill="#93c5fd" opacity="0.8"/>
            <circle cx="7" cy="80" r="3.5" fill="#0f172a" stroke="#64748b"/>
            <circle cx="25" cy="80" r="3.5" fill="#0f172a" stroke="#64748b"/>
            <polygon points="32,70 52,62 52,78" fill="#fef08a" opacity="0.35"/>
          </g>
          <!-- Moving Car 2 -->
          <g class="eco-car-2">
            <rect x="0" y="100" width="34" height="15" rx="3" fill="#3b82f6"/>
            <rect x="8" y="97" width="18" height="6" rx="2" fill="#93c5fd" opacity="0.8"/>
            <circle cx="8" cy="116" r="3.5" fill="#0f172a" stroke="#64748b"/>
            <circle cx="26" cy="116" r="3.5" fill="#0f172a" stroke="#64748b"/>
          </g>
          <!-- Sound waves from highway -->
          <circle cx="115" cy="85" r="10" fill="none" stroke="#f43f5e" stroke-width="2" class="eco-sound-ring1"/>
          <circle cx="115" cy="85" r="10" fill="none" stroke="#f43f5e" stroke-width="1.5" class="eco-sound-ring2"/>
          <text x="70" y="45" fill="#f87171" font-size="10" font-weight="black" text-anchor="middle">🚗 Magistral (85 dBA)</text>

          <!-- 2. ACOUSTIC SHIELD (X=145 to 165) -->
          <rect x="145" y="32" width="12" height="95" rx="3" fill="url(#acousticGlass)" stroke="#38bdf8" stroke-width="2"/>
          <line x1="151" y1="35" x2="151" y2="125" stroke="#bae6fd" stroke-width="1.5" stroke-dasharray="4,4"/>
          <text x="151" y="24" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Ekran</text>
          <text x="151" y="136" fill="#38bdf8" font-size="8" font-weight="extrabold" text-anchor="middle">-18dB</text>

          <!-- 3. MULTI-LAYER GREEN BUFFER BELT (X=165 to 330) -->
          <rect x="165" y="105" width="170" height="25" fill="#14532d" opacity="0.5" rx="4"/>
          <!-- Tree 1 -->
          <g class="eco-tree-sway">
            <line x1="195" y1="125" x2="195" y2="70" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
            <circle cx="195" cy="65" r="20" fill="#16a34a"/>
            <circle cx="195" cy="50" r="15" fill="#22c55e"/>
            <circle cx="188" cy="60" r="10" fill="#4ade80" opacity="0.6"/>
          </g>
          <!-- Tree 2 (Pine) -->
          <g class="eco-tree-sway" style="animation-delay: 0.5s;">
            <line x1="245" y1="125" x2="245" y2="60" stroke="#78350f" stroke-width="6" stroke-linecap="round"/>
            <polygon points="245,30 225,65 265,65" fill="#15803d"/>
            <polygon points="245,55 220,90 270,90" fill="#166534"/>
            <polygon points="245,80 215,115 275,115" fill="#14532d"/>
          </g>
          <!-- Tree 3 -->
          <g class="eco-tree-sway" style="animation-delay: 1.1s;">
            <line x1="295" y1="125" x2="295" y2="72" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
            <circle cx="295" cy="68" r="18" fill="#16a34a"/>
            <circle cx="295" cy="52" r="14" fill="#22c55e"/>
          </g>
          <!-- Shrubs -->
          <ellipse cx="178" cy="115" rx="12" ry="8" fill="#15803d"/>
          <ellipse cx="220" cy="116" rx="14" ry="9" fill="#16a34a"/>
          <ellipse cx="270" cy="115" rx="15" ry="9" fill="#22c55e"/>
          <ellipse cx="320" cy="116" rx="12" ry="8" fill="#15803d"/>
          <text x="250" y="24" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">🌲 3 Qatorli Yashil Belbog' (Daraxtlar)</text>

          <!-- Attenuated Sound Waves -->
          <path d="M 325 65 Q 335 75 325 85" stroke="#4ade80" stroke-width="2" fill="none" opacity="0.6"/>
          <path d="M 335 60 Q 348 75 335 90" stroke="#4ade80" stroke-width="1.5" fill="none" opacity="0.4"/>

          <!-- 4. PROTECTED SCHOOL ZONE (X=355 to 505) -->
          <rect x="355" y="42" width="150" height="85" rx="8" fill="url(#schoolGrad)" stroke="#38bdf8" stroke-width="1.5"/>
          <polygon points="350,42 430,22 510,42" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
          <!-- Windows -->
          <rect x="370" y="55" width="22" height="20" rx="3" fill="#fef08a" opacity="0.8"/>
          <line x1="381" y1="55" x2="381" y2="75" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="405" y="55" width="22" height="20" rx="3" fill="#fef08a" opacity="0.8"/>
          <line x1="416" y1="55" x2="416" y2="75" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="440" y="55" width="22" height="20" rx="3" fill="#fef08a" opacity="0.8"/>
          <line x1="451" y1="55" x2="451" y2="75" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="475" y="55" width="20" height="20" rx="3" fill="#fef08a" opacity="0.8"/>

          <!-- Entrance Door -->
          <rect x="420" y="90" width="24" height="37" rx="3" fill="#0f172a"/>
          <circle cx="438" cy="110" r="2" fill="#facc15"/>

          <text x="430" y="36" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">🏫 MAKTAB BINOSI</text>
          <rect x="365" y="98" width="45" height="22" rx="4" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
          <text x="387" y="112" fill="#4ade80" font-size="9" font-weight="black" text-anchor="middle">55 dBA</text>
          <text x="387" y="122" fill="#86efac" font-size="7" font-weight="bold" text-anchor="middle">XAVFSIZ</text>
        </svg>
      </div>
    `;
  },

  // 14. Uy Derazasi & Chiqindi Maydonchasi Masofasi (SanQvaM) 2D Animatsiyasi
  renderSanitaryDistanceMeter(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-cyan-400">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span class="uppercase tracking-wider">2D SanQvaM Sanitariya Masofasi Metri</span>
          </div>
          <div class="flex items-center gap-2 text-slate-400">
            <span class="bg-cyan-950/60 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30 font-mono">20m ≤ Masofa ≤ 100m</span>
            <span class="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-mono">SanQvaM 0300-14</span>
          </div>
        </div>
        <svg viewBox="0 0 520 140" class="w-full h-auto">
          <defs>
            <style>
              ${this.getCommonStyles()}
              @keyframes ecoCurtainFlutter { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.85) skewY(2deg); } }
              @keyframes ecoLaserTravel { 0% { stroke-dashoffset: 40; } 100% { stroke-dashoffset: 0; } }
              @keyframes ecoLidMotion { 0%, 100% { transform: rotate(0deg); } 40%, 60% { transform: rotate(-25deg); } }
              @keyframes ecoRfidRing { 0% { r: 4; opacity: 1; } 100% { r: 28; opacity: 0; } }
              .eco-curtain { transform-origin: top left; animation: ecoCurtainFlutter 3s infinite ease-in-out; }
              .eco-laser-line { stroke-dasharray: 8, 4; animation: ecoLaserTravel 1.2s infinite linear; }
              .eco-container-lid { transform-origin: 360px 58px; animation: ecoLidMotion 4s infinite ease-in-out; }
              .eco-rfid-pulse { animation: ecoRfidRing 2s infinite ease-out; }
            </style>
            <linearGradient id="bldgGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="100%" stop-color="#1e293b"/>
            </linearGradient>
            <linearGradient id="binGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#059669"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
            <linearGradient id="laserGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#06b6d4"/>
              <stop offset="50%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
          </defs>

          <!-- Background -->
          <rect width="520" height="140" fill="#090d16" rx="10"/>

          <!-- 1. RESIDENTIAL BUILDING (Left: X=15 to 135) -->
          <rect x="15" y="20" width="120" height="110" rx="8" fill="url(#bldgGrad)" stroke="#475569" stroke-width="1.5"/>
          <text x="75" y="35" fill="#cbd5e1" font-size="9" font-weight="black" text-anchor="middle">KO'P QAVATLI UY</text>

          <!-- Upper Windows -->
          <rect x="28" y="45" width="22" height="22" rx="3" fill="#1e293b" stroke="#64748b"/>
          <rect x="28" y="78" width="22" height="22" rx="3" fill="#1e293b" stroke="#64748b"/>
          <rect x="90" y="78" width="22" height="22" rx="3" fill="#1e293b" stroke="#64748b"/>

          <!-- Target Highlighted Window (Right 2nd floor, X=75 to 125) -->
          <rect x="75" y="42" width="45" height="28" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <rect x="77" y="44" width="41" height="24" rx="2" fill="#fef08a" opacity="0.85"/>
          <path d="M 77 44 Q 85 55 80 68 L 77 68 Z" fill="#f43f5e" opacity="0.9" class="eco-curtain"/>
          <line x1="97" y1="44" x2="97" y2="68" stroke="#0f172a" stroke-width="1.5"/>
          <line x1="77" y1="56" x2="118" y2="56" stroke="#0f172a" stroke-width="1.5"/>
          <text x="97" y="38" fill="#38bdf8" font-size="8" font-weight="extrabold" text-anchor="middle">🪟 Uy Derazasi</text>

          <!-- Ground Line -->
          <line x1="10" y1="130" x2="510" y2="130" stroke="#334155" stroke-width="2"/>

          <!-- 2. LASER DISTANCE RULER (Middle: X=135 to 350) -->
          <line x1="125" y1="56" x2="355" y2="56" stroke="url(#laserGrad)" stroke-width="3" class="eco-laser-line"/>
          <polygon points="128,52 120,56 128,60" fill="#06b6d4"/>
          <polygon points="350,52 358,56 350,60" fill="#f59e0b"/>

          <!-- Range Measurement Floating Card -->
          <rect x="180" y="38" width="140" height="36" rx="8" fill="#022c22" stroke="#10b981" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"/>
          <text x="250" y="52" fill="#34d399" font-size="10" font-weight="black" text-anchor="middle">20m ≤ Masofa ≤ 100m</text>
          <text x="250" y="66" fill="#a7f3d0" font-size="8" font-weight="bold" text-anchor="middle">✔ Qonuniy SanQvaM Me'yori</text>

          <!-- Ground ruler ticks -->
          <line x1="145" y1="124" x2="350" y2="124" stroke="#64748b" stroke-width="1.5"/>
          <line x1="145" y1="120" x2="145" y2="128" stroke="#64748b" stroke-width="2"/>
          <line x1="195" y1="122" x2="195" y2="126" stroke="#64748b" stroke-width="1"/>
          <line x1="245" y1="120" x2="245" y2="128" stroke="#64748b" stroke-width="2"/>
          <line x1="295" y1="122" x2="295" y2="126" stroke="#64748b" stroke-width="1"/>
          <line x1="345" y1="120" x2="345" y2="128" stroke="#64748b" stroke-width="2"/>
          <text x="145" y="116" fill="#94a3b8" font-size="8" text-anchor="middle">0m</text>
          <text x="245" y="116" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">25 metr</text>
          <text x="345" y="116" fill="#94a3b8" font-size="8" text-anchor="middle">50m</text>

          <!-- Paved Walkway Path -->
          <rect x="145" y="86" width="195" height="16" fill="#1e293b" stroke="#334155" stroke-dasharray="8,4" rx="3"/>
          <text x="242" y="98" fill="#94a3b8" font-size="8" text-anchor="middle">🚶 Aholi piyoda yo'lagi (Toza & Asfaltsiz hid)</text>

          <!-- 3. SMART WASTE CONTAINER STATION (Right: X=355 to 500) -->
          <polygon points="350,30 435,22 515,30" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <line x1="355" y1="30" x2="355" y2="125" stroke="#475569" stroke-width="2"/>
          <line x1="505" y1="30" x2="505" y2="125" stroke="#475569" stroke-width="2"/>

          <!-- Smart Container 1 (Green Organics) -->
          <g>
            <rect x="365" y="60" width="42" height="65" rx="5" fill="url(#binGrad)" stroke="#10b981" stroke-width="1.5"/>
            <rect x="363" y="55" width="46" height="7" rx="2" fill="#047857" stroke="#34d399" stroke-width="1" class="eco-container-lid"/>
            <text x="386" y="85" fill="#ffffff" font-size="9" font-weight="black" text-anchor="middle">♻</text>
            <text x="386" y="100" fill="#a7f3d0" font-size="7" font-weight="bold" text-anchor="middle">Qayta</text>
            <circle cx="373" cy="125" r="4" fill="#1e293b" stroke="#64748b"/>
            <circle cx="399" cy="125" r="4" fill="#1e293b" stroke="#64748b"/>
          </g>

          <!-- Smart Container 2 (Yellow Plastic) -->
          <g>
            <rect x="415" y="60" width="42" height="65" rx="5" fill="#b45309" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="413" y="55" width="46" height="7" rx="2" fill="#d97706" stroke="#fbbf24" stroke-width="1"/>
            <text x="436" y="85" fill="#ffffff" font-size="9" font-weight="black" text-anchor="middle">PL</text>
            <text x="436" y="100" fill="#fde68a" font-size="7" font-weight="bold" text-anchor="middle">Plastik</text>
            <circle cx="423" cy="125" r="4" fill="#1e293b" stroke="#64748b"/>
            <circle cx="449" cy="125" r="4" fill="#1e293b" stroke="#64748b"/>
          </g>

          <!-- Smart Container 3 (Blue Glass/Metal) -->
          <g>
            <rect x="465" y="60" width="38" height="65" rx="5" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
            <rect x="463" y="55" width="42" height="7" rx="2" fill="#2563eb" stroke="#60a5fa" stroke-width="1"/>
            <text x="484" y="85" fill="#ffffff" font-size="9" font-weight="black" text-anchor="middle">GL</text>
            <text x="484" y="100" fill="#bfdbfe" font-size="7" font-weight="bold" text-anchor="middle">Shisha</text>
            <circle cx="472" cy="125" r="4" fill="#1e293b" stroke="#64748b"/>
            <circle cx="496" cy="125" r="4" fill="#1e293b" stroke="#64748b"/>
          </g>

          <!-- RFID / IoT Sensor -->
          <rect x="425" y="15" width="20" height="10" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
          <line x1="435" y1="15" x2="435" y2="8" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="435" cy="8" r="2.5" fill="#38bdf8"/>
          <circle cx="435" cy="8" r="6" fill="none" stroke="#38bdf8" stroke-width="1" class="eco-rfid-pulse"/>
          <text x="435" y="4" fill="#38bdf8" font-size="7" font-weight="bold" text-anchor="middle">IoT</text>
        </svg>
      </div>
    `;
  },

  // 16. Sanoat Eko-Kompaktor va Pichoqli Shreder (Game 15)
  renderCompactorShredder(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>SANOAT PRESSI & SHREDDER: ${title}</span>
          </div>
          <span class="text-slate-400 font-mono text-[9px]">${subtitle || "Bosim: 180 Bar | Briketlash"}</span>
        </div>

        <svg viewBox="0 0 520 150" class="w-full h-auto overflow-hidden">
          <defs>
            <linearGradient id="pressGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="50%" stop-color="#64748b"/>
              <stop offset="100%" stop-color="#1e293b"/>
            </linearGradient>
            <linearGradient id="baleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#d97706"/>
              <stop offset="100%" stop-color="#92400e"/>
            </linearGradient>
          </defs>

          <!-- 1. HYDRAULIC BALING CHAMBER (Left: X=20 to 180) -->
          <rect x="20" y="20" width="160" height="120" rx="8" fill="#090d16" stroke="#334155" stroke-width="2"/>
          <rect x="30" y="30" width="140" height="100" fill="#0f172a" stroke="#1e293b"/>
          
          <!-- Moving Hydraulic Piston -->
          <g class="eco-hydraulic-piston">
            <rect x="85" y="0" width="30" height="50" fill="url(#pressGrad)" stroke="#475569" stroke-width="1.5"/>
            <rect x="40" y="45" width="120" height="18" rx="3" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="100" y="58" fill="#ffffff" font-size="8" font-weight="black" text-anchor="middle">PRESS 180 BAR</text>
          </g>

          <!-- Compressed Cardboard / Waste Bale -->
          <rect x="40" y="98" width="120" height="30" rx="4" fill="url(#baleGrad)" stroke="#f59e0b" stroke-width="1.5"/>
          <line x1="70" y1="98" x2="70" y2="128" stroke="#fef3c7" stroke-dasharray="2,2"/>
          <line x1="100" y1="98" x2="100" y2="128" stroke="#fef3c7" stroke-dasharray="2,2"/>
          <line x1="130" y1="98" x2="130" y2="128" stroke="#fef3c7" stroke-dasharray="2,2"/>
          <text x="100" y="116" fill="#ffffff" font-size="9" font-weight="black" text-anchor="middle">Zich Briket (1:5)</text>

          <!-- 2. DUAL-SHAFT ROTARY SHREDDER (Center: X=200 to 360) -->
          <rect x="200" y="20" width="160" height="120" rx="8" fill="#090d16" stroke="#0ea5e9" stroke-width="1.5"/>
          <text x="280" y="36" fill="#38bdf8" font-size="9" font-weight="black" text-anchor="middle">2-VALLLI AYLANUVCHI SHREDDER</text>
          
          <!-- Left Gear Blade -->
          <g transform="translate(245, 75)">
            <circle cx="0" cy="0" r="26" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
            <g class="eco-spin">
              <path d="M0 -28 L6 -15 L-6 -15 Z M28 0 L15 6 L15 -6 Z M0 28 L-6 15 L6 15 Z M-28 0 L-15 -6 L-15 6 Z" fill="#38bdf8"/>
              <circle cx="0" cy="0" r="10" fill="#0f172a" stroke="#0284c7"/>
            </g>
          </g>

          <!-- Right Gear Blade (Counter-rotating) -->
          <g transform="translate(295, 75)">
            <circle cx="0" cy="0" r="26" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
            <g class="eco-spin" style="animation-direction: reverse;">
              <path d="M0 -28 L6 -15 L-6 -15 Z M28 0 L15 6 L15 -6 Z M0 28 L-6 15 L6 15 Z M-28 0 L-15 -6 L-15 6 Z" fill="#38bdf8"/>
              <circle cx="0" cy="0" r="10" fill="#0f172a" stroke="#0284c7"/>
            </g>
          </g>

          <!-- Shredded output particles -->
          <g class="eco-spark">
            <circle cx="270" cy="75" r="3" fill="#facc15"/>
            <circle cx="265" cy="82" r="2" fill="#fb923c"/>
            <circle cx="275" cy="85" r="2.5" fill="#facc15"/>
          </g>
          <text x="280" y="125" fill="#94a3b8" font-size="8" text-anchor="middle">Fraktsiya: 10-12 mm toza chindiq</text>

          <!-- 3. DIGITAL MONITOR & MANOMETER (Right: X=380 to 500) -->
          <rect x="380" y="20" width="125" height="120" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
          <text x="442" y="38" fill="#34d399" font-size="9" font-weight="black" text-anchor="middle">BOSIM VA XAVFSIZLIK</text>
          
          <!-- Round Manometer -->
          <circle cx="442" cy="75" r="25" fill="#022c22" stroke="#10b981" stroke-width="2"/>
          <circle cx="442" cy="75" r="21" fill="#064e3b"/>
          <line x1="442" y1="75" x2="456" y2="65" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" class="eco-gauge-needle"/>
          <circle cx="442" cy="75" r="4" fill="#ffffff"/>
          <text x="442" y="93" fill="#6ee7b7" font-size="7" font-weight="bold" text-anchor="middle">180 BAR</text>

          <!-- Safety Status -->
          <rect x="395" y="110" width="95" height="18" rx="4" fill="#022c22" stroke="#059669"/>
          <circle cx="406" cy="119" r="3.5" fill="#10b981" class="eco-hazard"/>
          <text x="448" y="122" fill="#a7f3d0" font-size="8" font-weight="black" text-anchor="middle">NORMAL SIKL ✅</text>
        </svg>
      </div>
    `;
  },

  // 17. Shisha va Rangli Metallarni Qayta Eritish Pechi (Game 19)
  renderSmeltingFurnace(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-amber-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-amber-400">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>INDUKSION ERITISH PECHI (660°C - 1400°C): ${title}</span>
          </div>
          <span class="text-slate-400 font-mono text-[9px]">${subtitle || "Shisha Kullet & Alyuminiy"}</span>
        </div>

        <svg viewBox="0 0 520 150" class="w-full h-auto overflow-hidden">
          <defs>
            <radialGradient id="moltenGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="40%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#dc2626"/>
            </radialGradient>
          </defs>

          <!-- 1. INDUCTION CRUCIBLE (Left: X=30 to 190) -->
          <rect x="40" y="30" width="140" height="105" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
          <rect x="55" y="45" width="110" height="80" rx="6" fill="#0f172a" stroke="#b45309" stroke-width="1.5"/>
          
          <!-- Induction Copper Coils -->
          <line x1="33" y1="50" x2="33" y2="120" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
          <line x1="187" y1="50" x2="187" y2="120" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
          <circle cx="33" cy="65" r="4" fill="#ef4444" class="eco-hazard"/>
          <circle cx="187" cy="65" r="4" fill="#ef4444" class="eco-hazard"/>

          <!-- Molten Pool (Lava glow) -->
          <rect x="62" y="75" width="96" height="45" rx="4" fill="url(#moltenGrad)" class="eco-flame1"/>
          <!-- Rising Heat Waves -->
          <path d="M75,70 Q80,50 85,70" stroke="#fef08a" stroke-width="1.5" fill="none" class="eco-st1"/>
          <path d="M105,70 Q110,48 115,70" stroke="#f59e0b" stroke-width="1.5" fill="none" class="eco-st2"/>
          <path d="M135,70 Q140,52 145,70" stroke="#f87171" stroke-width="1.5" fill="none" class="eco-st3"/>
          <text x="110" y="105" fill="#ffffff" font-size="9" font-weight="black" text-anchor="middle">SUYUQ ALYUMINIY (660°C)</text>

          <!-- 2. MOLTEN STREAM & SLAG SEPARATOR (Center: X=200 to 330) -->
          <path d="M180,95 L260,95 L270,115" stroke="url(#moltenGrad)" stroke-width="6" fill="none" stroke-linecap="round"/>
          <rect x="230" y="40" width="80" height="40" rx="6" fill="#0f172a" stroke="#475569"/>
          <text x="270" y="55" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">SHLAK / IFLOSLIK</text>
          <text x="270" y="70" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">Ajratgich Filtr</text>

          <!-- 3. INGOT CASTING MOLDS (Right: X=340 to 500) -->
          <rect x="340" y="25" width="160" height="110" rx="8" fill="#090d16" stroke="#334155" stroke-width="1.5"/>
          <text x="420" y="42" fill="#f59e0b" font-size="9" font-weight="black" text-anchor="middle">SOVUTISH & QUYMA QOLIPLARI</text>
          
          <!-- Moving Ingots -->
          <g>
            <rect x="355" y="65" width="40" height="22" rx="3" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/>
            <text x="375" y="79" fill="#0f172a" font-size="7" font-weight="black" text-anchor="middle">INGOT #1</text>

            <rect x="405" y="65" width="40" height="22" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
            <text x="425" y="79" fill="#0f172a" font-size="7" font-weight="black" text-anchor="middle">INGOT #2</text>

            <rect x="455" y="65" width="40" height="22" rx="3" fill="#94a3b8" stroke="#64748b" stroke-width="1"/>
            <text x="475" y="79" fill="#ffffff" font-size="7" font-weight="black" text-anchor="middle">INGOT #3</text>
          </g>

          <rect x="360" y="105" width="120" height="18" rx="4" fill="#022c22" stroke="#10b981"/>
          <text x="420" y="117" fill="#6ee7b7" font-size="8" font-weight="bold" text-anchor="middle">⚡ 95% ENERGIYA TEJALDI</text>
        </svg>
      </div>
    `;
  },

  // 18. Zero Waste Yashil Xonadon Master (Game 20)
  renderZeroWasteHome(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>ZERO WASTE YASHIL XONADON SIKLI: ${title}</span>
          </div>
          <span class="text-slate-400 font-mono text-[9px]">${subtitle || "100% Chiqindisiz Oila"}</span>
        </div>

        <svg viewBox="0 0 520 150" class="w-full h-auto overflow-hidden">
          <!-- 1. ROOFTOP SOLAR ENERGY (Left: X=20 to 160) -->
          <polygon points="20,60 90,20 160,60" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
          <g>
            <rect x="45" y="35" width="30" height="16" fill="#1e3a8a" stroke="#38bdf8"/>
            <rect x="85" y="35" width="30" height="16" fill="#1e3a8a" stroke="#38bdf8"/>
            <rect x="125" y="35" width="20" height="16" fill="#1e3a8a" stroke="#38bdf8"/>
          </g>
          <text x="90" y="75" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">QUYOSH PANELI ☀️</text>
          
          <!-- Home Walls -->
          <rect x="35" y="80" width="110" height="55" fill="#0f172a" stroke="#334155"/>
          <rect x="75" y="95" width="30" height="40" fill="#1e293b" stroke="#64748b"/>
          <circle cx="100" cy="115" r="2" fill="#facc15"/>

          <!-- 2. KITCHEN VERMICOMPOST & BIO-GUMUS (Center: X=180 to 330) -->
          <rect x="180" y="25" width="150" height="110" rx="8" fill="#090d16" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="255" y="42" fill="#fbbf24" font-size="9" font-weight="black" text-anchor="middle">OSHXONA BOKASHI & KOMPOST</text>
          
          <!-- Compost Tank Layers -->
          <rect x="200" y="55" width="110" height="50" rx="5" fill="#451a03" stroke="#78350f"/>
          <line x1="200" y1="72" x2="310" y2="72" stroke="#92400e" stroke-dasharray="3,3"/>
          <line x1="200" y1="88" x2="310" y2="88" stroke="#78350f" stroke-dasharray="3,3"/>
          <text x="255" y="68" fill="#fef08a" font-size="7" font-weight="bold" text-anchor="middle">🌱 Organik qoldiqlar (Sabzavot po'sti)</text>
          <text x="255" y="84" fill="#a7f3d0" font-size="7" font-weight="bold" text-anchor="middle">🪱 Bio-gumus & Kaliforniya chuvalchangi</text>
          <text x="255" y="100" fill="#fed7aa" font-size="7" font-weight="bold" text-anchor="middle">🌿 Toza ozuqaviy kompost</text>

          <text x="255" y="125" fill="#86efac" font-size="8" text-anchor="middle">Chiqindi miqdori: 0 kg (To'liq yopiq)</text>

          <!-- 3. ZERO-PACKAGING PANTRY & CLOTH BAGS (Right: X=350 to 500) -->
          <rect x="350" y="25" width="150" height="110" rx="8" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
          <text x="425" y="42" fill="#22d3ee" font-size="9" font-weight="black" text-anchor="middle">QADOQSIZ XARID (ZERO WASTE)</text>
          
          <!-- Jars -->
          <g>
            <rect x="365" y="60" width="22" height="35" rx="3" fill="#1e293b" stroke="#38bdf8"/>
            <text x="376" y="80" fill="#f8fafc" font-size="7" text-anchor="middle">Don</text>

            <rect x="395" y="55" width="22" height="40" rx="3" fill="#1e293b" stroke="#38bdf8"/>
            <text x="406" y="80" fill="#f8fafc" font-size="7" text-anchor="middle">Mosh</text>

            <rect x="425" y="60" width="22" height="35" rx="3" fill="#1e293b" stroke="#38bdf8"/>
            <text x="436" y="80" fill="#f8fafc" font-size="7" text-anchor="middle">Guruch</text>

            <!-- Cloth Bag -->
            <path d="M460,65 Q475,55 490,65 L490,95 L460,95 Z" fill="#b45309" stroke="#f59e0b"/>
            <path d="M470,65 Q475,52 480,65" stroke="#fef3c7" fill="none" stroke-width="1.5"/>
            <text x="475" y="85" fill="#fef08a" font-size="6" font-weight="bold" text-anchor="middle">Eko-sumka</text>
          </g>

          <rect x="365" y="110" width="120" height="16" rx="4" fill="#042f2e" stroke="#0d9488"/>
          <text x="425" y="122" fill="#5eead4" font-size="7" font-weight="black" text-anchor="middle">Plastik paketlar: 0 dona ✅</text>
        </svg>
      </div>
    `;
  },

  // 19. Eko-Detektiv: Kriminalistik Tergov Laboratoriyasi (Game 21)
  renderDetectiveInvestigation(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-indigo-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-indigo-400">
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
            <span>KRIMINALISTIK EKO-TERGOV: ${title}</span>
          </div>
          <span class="text-slate-400 font-mono text-[9px]">${subtitle || "Shahar Xaritasi & Daryo Tahlili"}</span>
        </div>

        <svg viewBox="0 0 520 150" class="w-full h-auto overflow-hidden">
          <!-- 1. POLLUTED RIVER CANAL MAP (Left: X=20 to 220) -->
          <rect x="20" y="25" width="200" height="110" rx="8" fill="#090d16" stroke="#4f46e5" stroke-width="1.5"/>
          <!-- River Flow -->
          <path d="M20,60 Q70,40 120,80 T220,70" stroke="#0284c7" stroke-width="20" fill="none" class="eco-pipe-flow"/>
          <path d="M110,65 Q140,85 180,75" stroke="#7e22ce" stroke-width="8" fill="none" opacity="0.8" class="eco-b1"/>
          
          <!-- Illegal Discharge Pipe -->
          <rect x="90" y="25" width="16" height="30" fill="#475569" stroke="#94a3b8"/>
          <circle cx="98" cy="55" r="5" fill="#f43f5e" class="eco-hazard"/>
          <text x="98" y="20" fill="#f43f5e" font-size="8" font-weight="black" text-anchor="middle">NOQONUNIY QUYILMA!</text>

          <!-- Radar Scan Circle over the pipe -->
          <circle cx="98" cy="55" r="14" fill="none" stroke="#f43f5e" stroke-width="1" class="eco-radar-circle"/>
          <circle cx="98" cy="55" r="28" fill="none" stroke="#f43f5e" stroke-width="0.8" class="eco-radar-circle2"/>

          <!-- 2. FORENSIC CLUE ANALYZER (Center: X=235 to 370) -->
          <rect x="235" y="25" width="140" height="110" rx="8" fill="#0f172a" stroke="#818cf8" stroke-width="1.5"/>
          <text x="305" y="42" fill="#c7d2fe" font-size="9" font-weight="black" text-anchor="middle">SPEKTRAL KIMYO TAHLILI</text>
          
          <!-- Spectral Graph Bars -->
          <g transform="translate(250, 55)">
            <rect x="0" y="25" width="12" height="35" fill="#f43f5e"/>
            <text x="6" y="20" fill="#f43f5e" font-size="6" text-anchor="middle">Pb</text>

            <rect x="18" y="10" width="12" height="50" fill="#f59e0b"/>
            <text x="24" y="5" fill="#f59e0b" font-size="6" text-anchor="middle">Cd</text>

            <rect x="36" y="35" width="12" height="25" fill="#10b981"/>
            <text x="42" y="30" fill="#10b981" font-size="6" text-anchor="middle">pH</text>

            <rect x="54" y="5" width="12" height="55" fill="#a855f7"/>
            <text x="60" y="0" fill="#a855f7" font-size="6" text-anchor="middle">Hg</text>

            <rect x="72" y="40" width="12" height="20" fill="#38bdf8"/>
            <text x="78" y="35" fill="#38bdf8" font-size="6" text-anchor="middle">BOD</text>
          </g>
          <text x="305" y="125" fill="#fb7185" font-size="7" font-weight="bold" text-anchor="middle">Og'ir metallar konsentratsiyasi yuqori!</text>

          <!-- 3. DETECTIVE MAGNIFYING LENS (Right: X=385 to 500) -->
          <rect x="385" y="25" width="115" height="110" rx="8" fill="#090d16" stroke="#6366f1" stroke-width="1.5"/>
          <text x="442" y="42" fill="#a5b4fc" font-size="8" font-weight="black" text-anchor="middle">DALILLAR DOSYESI</text>

          <!-- Fingerprint & Clue Icon -->
          <g transform="translate(442, 75)">
            <circle cx="0" cy="0" r="22" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
            <circle cx="0" cy="0" r="15" fill="none" stroke="#a5b4fc" stroke-dasharray="3,2"/>
            <circle cx="0" cy="0" r="8" fill="none" stroke="#c7d2fe"/>
            <circle cx="0" cy="0" r="3" fill="#f43f5e"/>
            <!-- Magnifier handle -->
            <line x1="16" y1="16" x2="28" y2="28" stroke="#818cf8" stroke-width="3" stroke-linecap="round"/>
          </g>

          <text x="442" y="118" fill="#e0e7ff" font-size="8" font-weight="bold" text-anchor="middle">Dastlabki dalil: 100%</text>
        </svg>
      </div>
    `;
  },

  // 20. Kosmik Kema Resurslari & Yopiq Sikl (ECLSS) (Game 22)
  renderSpaceEcosystem(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-cyan-400">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>KOSMIK KEMA ECLSS HAYOT TAMINOTI: ${title}</span>
          </div>
          <span class="text-slate-400 font-mono text-[9px]">${subtitle || "O2 / H2O / Biomassa Yopiq Sikli"}</span>
        </div>

        <svg viewBox="0 0 520 150" class="w-full h-auto overflow-hidden">
          <!-- Space Stars -->
          <circle cx="45" cy="20" r="1" fill="#ffffff"/>
          <circle cx="120" cy="35" r="1.5" fill="#38bdf8"/>
          <circle cx="210" cy="18" r="1" fill="#ffffff"/>
          <circle cx="340" cy="22" r="1.5" fill="#fef08a"/>
          <circle cx="480" cy="30" r="1" fill="#ffffff"/>

          <!-- 1. SABATIER CO2 -> O2 REGENERATOR (Left: X=25 to 175) -->
          <rect x="25" y="25" width="150" height="110" rx="8" fill="#031525" stroke="#0ea5e9" stroke-width="1.5"/>
          <text x="100" y="42" fill="#38bdf8" font-size="9" font-weight="black" text-anchor="middle">SABATIER CO2 -> OXYGEN LOOP</text>
          
          <!-- Circulating Gas loop -->
          <circle cx="100" cy="78" r="26" fill="#082f49" stroke="#0284c7" stroke-width="2"/>
          <circle cx="100" cy="78" r="22" fill="#0c4a6e"/>
          <text x="100" y="74" fill="#67e8f9" font-size="10" font-weight="black" text-anchor="middle">O2</text>
          <text x="100" y="87" fill="#bae6fd" font-size="7" font-weight="bold" text-anchor="middle">Regeneratsiya</text>
          
          <!-- Pipes -->
          <path d="M50,78 L74,78" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" class="eco-pipe-flow"/>
          <path d="M126,78 L150,78" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" class="eco-pipe-flow"/>
          <text x="100" y="122" fill="#a5f3fc" font-size="8" text-anchor="middle">Kislorod balansi: 98% barqaror</text>

          <!-- 2. SPIRULINA ALGAE PHOTOBIOREACTOR (Center: X=190 to 330) -->
          <rect x="190" y="25" width="140" height="110" rx="8" fill="#022c22" stroke="#10b981" stroke-width="1.5"/>
          <text x="260" y="42" fill="#34d399" font-size="9" font-weight="black" text-anchor="middle">SPIRULINA BIO-REAKTOR</text>
          
          <!-- Algae Cylinder -->
          <rect x="225" y="52" width="70" height="55" rx="10" fill="#064e3b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="240" cy="68" r="3" fill="#86efac" class="eco-b1"/>
          <circle cx="260" cy="85" r="4" fill="#a7f3d0" class="eco-b2"/>
          <circle cx="275" cy="65" r="3" fill="#86efac" class="eco-b3"/>
          <text x="260" y="78" fill="#ffffff" font-size="8" font-weight="black" text-anchor="middle">BIOMASSA</text>
          <text x="260" y="90" fill="#6ee7b7" font-size="7" text-anchor="middle">Fotosintez</text>

          <text x="260" y="122" fill="#6ee7b7" font-size="8" text-anchor="middle">CO2 yutish + Oziq-ovqat</text>

          <!-- 3. WATER VACUUM DISTILLATION (Right: X=345 to 495) -->
          <rect x="345" y="25" width="150" height="110" rx="8" fill="#082f49" stroke="#06b6d4" stroke-width="1.5"/>
          <text x="420" y="42" fill="#22d3ee" font-size="9" font-weight="black" text-anchor="middle">VAKUUMLI SUV DISTILLYATORI</text>

          <!-- Distiller tank -->
          <rect x="375" y="55" width="90" height="48" rx="6" fill="#0e7490" stroke="#0891b2"/>
          <path d="M380,85 Q420,70 460,85" fill="#38bdf8" opacity="0.7" class="eco-wave"/>
          <text x="420" y="75" fill="#ffffff" font-size="8" font-weight="black" text-anchor="middle">ICHIMLIK SUVI</text>
          <text x="420" y="88" fill="#cffafe" font-size="7" text-anchor="middle">Qayta tiklash: 93%</text>

          <text x="420" y="122" fill="#67e8f9" font-size="8" text-anchor="middle">Nol isrof (Closed Cycle)</text>
        </svg>
      </div>
    `;
  },

  // 21. Chiqindi Bozori & Eko-Investitsiya Birjasi (Game 23)
  renderWasteMarketExchange(title, subtitle) {
    return `
      <div class="relative w-full rounded-2xl overflow-hidden border border-teal-500/40 bg-slate-950 shadow-2xl p-2 select-none">
        <div class="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold">
          <div class="flex items-center gap-1.5 text-teal-400">
            <span class="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span>XOMASHYO BIRJASI & EKO-INVESTITSIYA: ${title}</span>
          </div>
          <span class="text-slate-400 font-mono text-[9px]">${subtitle || "PET / Alyuminiy / Karton Kotirovkasi"}</span>
        </div>

        <svg viewBox="0 0 520 150" class="w-full h-auto overflow-hidden">
          <!-- 1. DYNAMIC STOCK MARKET GRAPH (Left: X=20 to 220) -->
          <rect x="20" y="25" width="200" height="110" rx="8" fill="#090d16" stroke="#0d9488" stroke-width="1.5"/>
          <text x="120" y="42" fill="#2dd4bf" font-size="9" font-weight="black" text-anchor="middle">IKKILAMCHI XOMASHYO INDEKSI</text>

          <!-- Grid Lines -->
          <line x1="35" y1="55" x2="205" y2="55" stroke="#1e293b" stroke-dasharray="2,2"/>
          <line x1="35" y1="80" x2="205" y2="80" stroke="#1e293b" stroke-dasharray="2,2"/>
          <line x1="35" y1="105" x2="205" y2="105" stroke="#1e293b" stroke-dasharray="2,2"/>

          <!-- Dynamic Rising Green Trend Line -->
          <polyline points="35,100 65,85 95,92 125,70 155,75 185,50 205,58" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="185" cy="50" r="4" fill="#34d399" class="eco-hazard"/>
          <text x="185" y="42" fill="#34d399" font-size="7" font-weight="black" text-anchor="middle">+14% 📈</text>

          <text x="75" y="122" fill="#99f6e4" font-size="7">PET: 4500 so'm/kg</text>
          <text x="160" y="122" fill="#fde047" font-size="7">Al: 18000 so'm/kg</text>

          <!-- 2. AUTOMATED LOGISTICS TRUCK (Center: X=235 to 370) -->
          <rect x="235" y="25" width="140" height="110" rx="8" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5"/>
          <text x="305" y="42" fill="#5eead4" font-size="9" font-weight="black" text-anchor="middle">ZAVODGA YUKLASH LOGISTIKASI</text>

          <!-- Delivery Truck -->
          <g transform="translate(255, 60)">
            <rect x="0" y="10" width="55" height="32" rx="3" fill="#0f766e" stroke="#14b8a6" stroke-width="1.5"/>
            <rect x="55" y="18" width="22" height="24" rx="2" fill="#115e59" stroke="#14b8a6"/>
            <rect x="62" y="21" width="12" height="10" rx="1" fill="#99f6e4"/>
            <!-- Wheels -->
            <circle cx="16" cy="45" r="6" fill="#1e293b" stroke="#042f2e" stroke-width="2" class="eco-spin"/>
            <circle cx="44" cy="45" r="6" fill="#1e293b" stroke="#042f2e" stroke-width="2" class="eco-spin"/>
            <circle cx="68" cy="45" r="6" fill="#1e293b" stroke="#042f2e" stroke-width="2" class="eco-spin"/>
          </g>
          <text x="305" y="125" fill="#a7f3d0" font-size="7" font-weight="bold" text-anchor="middle">To'g'ridan-to'g'ri qayta ishlash</text>

          <!-- 3. ECO-COIN MINT (Right: X=385 to 500) -->
          <rect x="385" y="25" width="115" height="110" rx="8" fill="#090d16" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="442" y="42" fill="#fcd34d" font-size="8" font-weight="black" text-anchor="middle">DAROMAD & INVESTITSIYA</text>

          <!-- Big Rotating Gold Coin -->
          <g transform="translate(442, 75)">
            <circle cx="0" cy="0" r="22" fill="#78350f" stroke="#f59e0b" stroke-width="3"/>
            <circle cx="0" cy="0" r="17" fill="#b45309" stroke="#fbbf24" stroke-width="1.5"/>
            <text x="0" y="6" fill="#fef08a" font-size="14" font-weight="black" text-anchor="middle" class="eco-coin-spin">ECO</text>
          </g>

          <text x="442" y="120" fill="#fef08a" font-size="8" font-weight="bold" text-anchor="middle">Yashil Foyda: +24%</text>
        </svg>
      </div>
    `;
  },


  // Asosiy chaqiruvchi metod
  getSceneHtml(item, gameId) {
    if (!item) return '';

    const scene = this.detectScene(item, gameId);
    const title = item.sector || item.title || item.visualTitle || "Sanoat Auditi Keysi";
    const subtitle = item.visualInfo || item.description || item.param || "";

    switch (scene) {
      case 'highway_noise':
        return this.renderHighwayNoiseBarrier(title, subtitle);
      case 'distance_sanitary':
        return this.renderSanitaryDistanceMeter(title, subtitle);
      case 'chemical':
        return this.renderChemicalElectrolysis(title, subtitle);
      case 'pyrolysis':
        return this.renderPyrolysisReactor(title, subtitle);
      case 'landfill':
        return this.renderLandfillDegas(title, subtitle);
      case 'wastewater':
        return this.renderWastewaterTreatment(title, subtitle);
      case 'medical':
        return this.renderMedicalAutoclave(title, subtitle);
      case 'biogas':
        return this.renderBiogasReactor(title, subtitle);
      case 'ewaste':
        return this.renderEWasteBattery(title, subtitle);
      case 'compost':
        return this.renderCompostPlant(title, subtitle);
      case 'air':
        return this.renderAirCyclone(title, subtitle);
      case 'optical':
        return this.renderOpticalSorter(title, subtitle);
      case 'logistics':
        return this.renderLogisticsTruck(title, subtitle);
      case 'legal':
        return this.renderLegalScale(title, subtitle);
      case 'compactor_shredder':
        return this.renderCompactorShredder(title, subtitle);
      case 'smelting_furnace':
        return this.renderSmeltingFurnace(title, subtitle);
      case 'zerowaste_home':
        return this.renderZeroWasteHome(title, subtitle);
      case 'detective_investigation':
        return this.renderDetectiveInvestigation(title, subtitle);
      case 'space_ecosystem':
        return this.renderSpaceEcosystem(title, subtitle);
      case 'waste_market_exchange':
        return this.renderWasteMarketExchange(title, subtitle);
      default:
        return this.renderChemicalElectrolysis(title, subtitle);
    }
  },

  getSortingConveyorHtml(wasteItem) {
    return this.renderSortingConveyor(wasteItem);
  }
};

window.Eco2DAnimator = Eco2DAnimator;
