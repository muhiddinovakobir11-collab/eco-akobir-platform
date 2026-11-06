/**
 * ============================================================================
 * ECO-BATL REJIMI: NEYTRALLASH REAKTORI (ECO-REACTOR THERMODYNAMICS)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Noodatiy va Murakkab Mexanika:
 * - Real vaqtda o'zgaruvchi Sanoat Reaktori parametrlari:
 *   1. Harorat T (°C) — Xavfsiz zona: 450°C - 650°C (Piroliz/Kreking me'yori).
 *   2. Kislotalilik pH (0-14) — Xavfsiz neytral zona: 6.5 - 8.5 pH.
 *   3. Gaz Bosimi P (Bar) — Xavfsiz zona: 1.5 - 3.5 Bar.
 * - Reaktor har soniyada beqarorlashib, qizil avariya zonasiga qarab og'adi!
 * - O'yinchi kiber-pultdan to'g'ri kimyoviy reagent va muhandislik klapanini 
 *   (Ca(OH)2, Suyuq N2, Faollashgan Ugol, Shamollatish ejektori) tanlaydi.
 * - To'g'ri chora reaktorni Yashil Xavfsiz Zonaga qaytaradi (+Barqarorlik),
 *   noto'g'ri chora esa bosimni sakratib, reaktorni kritik qizishga olib keladi!
 * - Hujum klapani: To'g'ri reaksiyalar raqib reaktoriga zaharli bosim haydaydi!
 * - 100% barqarorlikka erishgan birinchi jamoa g'alaba qozonadi!
 */

(function () {
  'use strict';

  // Sanoat reaktori maxsus stillari
  (function injectReactorStyles() {
    if (document.getElementById('eco-reactor-styles')) return;
    const style = document.createElement('style');
    style.id = 'eco-reactor-styles';
    style.textContent = `
      @keyframes reactorCorePulse {
        0%, 100% { filter: drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 24px #ef4444); transform: scale(1); }
        50% { filter: drop-shadow(0 0 22px #eab308) drop-shadow(0 0 35px #f97316); transform: scale(1.03); }
      }
      .reactor-core-glow {
        animation: reactorCorePulse 1.8s ease-in-out infinite;
      }
      @keyframes gaugeHazardBlink {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; filter: brightness(1.3); }
      }
      .gauge-hazard-flash {
        animation: gaugeHazardBlink 0.8s ease-in-out infinite;
      }
      .reactor-control-btn {
        transition: all 0.16s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-bottom-width: 4px !important;
      }
      .reactor-control-btn:hover {
        transform: translateY(-2px) scale(1.02);
      }
      .reactor-control-btn:active {
        transform: translateY(2px) scale(0.97);
        border-bottom-width: 1px !important;
      }
    `;
    document.head.appendChild(style);
  })();

  const INCIDENTS_DATABASE = [
    {
      id: "rc1",
      title: "Sulfat Kislotasi va SO₂ Avariyaviy Sizishi",
      desc: "Reaktorda kislotali gazlar konsentratsiyasi keskin oshib, pH = 2.4 ga tushdi, harorat 780°C ga ko'tarildi!",
      target: "Kislotani zudlik bilan neytrallash va haroratni pasaytirish",
      options: [
        { name: "Ca(OH)₂ Ohak Suti Dozalash", formula: "Ca(OH)₂ + H₂SO₄ → CaSO₄↓", isCorrect: true, effect: { pH: +4.5, temp: -120, pressure: -1.2 }, exp: "Ohak suti kislotali muhitni neytrallab, gips cho'kmasi beradi!" },
        { name: "Konsentrlangan Xlorid Kislota (HCl)", formula: "HCl (Kislota)", isCorrect: false, effect: { pH: -1.5, temp: +150, pressure: +2.5 }, exp: "XATO! Kislota ustiga kislota quyish portlash xavfini keltirib chiqaradi!" },
        { name: "Suyuq Ammiak Gazini Haydash", formula: "NH₃ (Zaharli)", isCorrect: false, effect: { pH: +6.0, temp: +80, pressure: +2.0 }, exp: "XATO! Ammiak gazining o'zi kuchli zaharli va bosimni haddan tashqari oshiradi!" },
        { name: "Faollashmagan Qum To'kish", formula: "SiO₂", isCorrect: false, effect: { pH: 0, temp: -20, pressure: +1.0 }, exp: "Samarasiz! Qum erigan kislotani kimyoviy neytrallay olmaydi." }
      ]
    },
    {
      id: "rc2",
      title: "Piroliz Pechining Kritik Qizib Ketishi",
      desc: "Termik reaktor harorati 1150°C ga yetdi, qora qurum va gaz bosimi 7.8 Barga sakradi!",
      target: "Kislorodsiz termik barqarorlikni tiklash va portlashning oldini olish",
      options: [
        { name: "Suyuq Azot (N₂) Sovutgichi & Inert Muhit", formula: "N₂ (-196°C)", isCorrect: true, effect: { pH: +0.2, temp: -380, pressure: -2.8 }, exp: "Inert azot kislorodni haydab, harorat va bosimni zudlik bilan tushiradi!" },
        { name: "Toza Kislorod (O₂) Puflash", formula: "O₂ (Oksidlovchi)", isCorrect: false, effect: { pH: -0.5, temp: +400, pressure: +4.0 }, exp: "FOJIA! Piroliz pechiga kislorod puflash bir zumda halokatli portlash beradi!" },
        { name: "Oddiy Muzli Suv Sepish", formula: "H₂O", isCorrect: false, effect: { pH: 0, temp: -50, pressure: +3.5 }, exp: "XATO! 1150°C da suv bir zumda qizigan bug'ga aylanib, reaktorni yorib yuboradi!" },
        { name: "Mo'ri Klapanini Butunlay Yopish", formula: "Klapan Stop", isCorrect: false, effect: { pH: 0, temp: +100, pressure: +3.0 }, exp: "XATO! Klapanni yopish reaktordagi bosimni kritik darajaga chiqaradi!" }
      ]
    },
    {
      id: "rc3",
      title: "Galvanika Sexi: Zaharli Xrom (VI) Toksik Oqimi",
      desc: "Sexda yuqori darajada zaharli va kanserogen Cr⁶⁺ ioni 85 mg/l ga yetdi (Me'yor: 0.1 mg/l)!",
      target: "Cr⁶⁺ ionini kam zaharli Cr³⁺ ga qaytarish va ishqor bilan cho'ktirish",
      options: [
        { name: "Temir Kuporosi (FeSO₄) & Ohak bilan Cho'ktirish", formula: "Fe²⁺ → Cr³⁺ + Fe³⁺ + Cr(OH)₃↓", isCorrect: true, effect: { pH: +3.2, temp: -80, pressure: -1.5 }, exp: "To'g'ri! FeSO4 xromni 3 valentli xavfsiz holatga qaytaradi va ohak bilan cho'kadi." },
        { name: "Osh Tuzi (NaCl) Eritmasi", formula: "NaCl", isCorrect: false, effect: { pH: 0, temp: 0, pressure: +0.5 }, exp: "XATO! Osh tuzi og'ir metall xromni qaytara olmaydi va zaharli xlor hosil qilishi mumkin." },
        { name: "Atseton Erituvchisi Quyish", formula: "C₃H₆O", isCorrect: false, effect: { pH: -1.0, temp: +180, pressure: +2.0 }, exp: "XATO! Atseton organik erituvchi bo'lib, o'ta yonuvchan xavf tug'diradi!" },
        { name: "Faollashtirilgan Litiy Tuzi", formula: "LiCl", isCorrect: false, effect: { pH: +0.5, temp: +40, pressure: +1.0 }, exp: "Noto'g'ri reagent. Og'ir metallarni qaytarishda ishlatilmaydi." }
      ]
    },
    {
      id: "rc4",
      title: "Ko'mir IES: Uchar Kul va Qora Qurum Falokati",
      desc: "Elektrofiltr elektrodlari kuyib ketdi, chang konsentratsiyasi 4200 mg/m³ ga yetdi, aspiratsiya tiqildi!",
      target: "Favqulodda yengli filtr va multitsiklonni ishga tushirish",
      options: [
        { name: "Venturi Skrubberi & Multitsiklon Rejimiga O'tish", formula: "Gidro-aspiratsiya (99.8%)", isCorrect: true, effect: { pH: +1.0, temp: -150, pressure: -2.0 }, exp: "A'lo! Ho'l Venturi skrubberi 99.8% mayda zarrachalarni ushlab, havoni tozalaydi." },
        { name: "Aspiratsiya Dvigatelini 2x Kuchaytirish", formula: "Turbina 100Hz", isCorrect: false, effect: { pH: 0, temp: +120, pressure: +3.0 }, exp: "XATO! Filtrsiz dvigatelni kuchaytirish butun shaharga zaharli kulni sochadi!" },
        { name: "Havoga Spirt Bug'i Purkash", formula: "C₂H₅OH", isCorrect: false, effect: { pH: 0, temp: +200, pressure: +2.5 }, exp: "O'ta xavfli! Changli muhitda spirt bug'i uchqundan bir zumda yonib ketadi." },
        { name: "Quruq Qum Sepish", formula: "SiO₂", isCorrect: false, effect: { pH: 0, temp: -10, pressure: +1.5 }, exp: "Samarasiz! Havodagi uchuvchi kulga quruq qum sepib bo'lmaydi." }
      ]
    },
    {
      id: "rc5",
      title: "Neftni Qayta Ishlash: H₂S Vodorod Sulfid Klapan Sizishi",
      desc: "Nordon zaharli H₂S gazi 180 ppm ga yetdi (O'lim darajasi: 100 ppm), havo zaharlandi!",
      target: "Klaus usulida oltingugurtni qattiq holatda bog'lash",
      options: [
        { name: "Klaus Katalizatori & Temir Oksidi (Fe₂O₃) Adsorberi", formula: "Fe₂O₃ + 3H₂S → Fe₂S₃ + 3H₂O", isCorrect: true, effect: { pH: +2.5, temp: -110, pressure: -2.2 }, exp: "To'g'ri! Klaus reaksiyasi zaharli H2S gazini zararsiz qattiq oltingugurtga aylantiradi." },
        { name: "Mash'ala Fakelini O'chirib Qo'yish", formula: "Fakel Stop", isCorrect: false, effect: { pH: -1.0, temp: -50, pressure: +3.8 }, exp: "O'LIM XAVFI! Fakel o'chirilsa, zaharli gaz yerga cho'kib, butun ishchilarni zaharlaydi!" },
        { name: "Reaktorga Oltingugurt Kislotasi Quyish", formula: "H₂SO₄", isCorrect: false, effect: { pH: -2.0, temp: +90, pressure: +2.0 }, exp: "XATO! Nordon gazga kislota qo'shish ajralishni yanada kuchaytiradi." },
        { name: "Atir va Xushbo'ylantiruvchi Purkash", formula: "Aerosol", isCorrect: false, effect: { pH: 0, temp: 0, pressure: +0.5 }, exp: "Absurd! H2S zaharli gazini xushbo'ylantiruvchi bilan yo'qotib bo'lmaydi." }
      ]
    }
  ];

  const EcoBattleReactorMode = {
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
      dynamicsInterval: null,
      t1: {
        score: 0,
        stability: 45, // 0 to 100% (100% = Victory)
        temp: 720,     // Target: 450 - 650°C
        pH: 3.5,       // Target: 6.5 - 8.5
        pressure: 5.8, // Target: 1.5 - 3.5 Bar
        streak: 0,
        incidentIndex: 0,
        isOverheated: false,
        isStunned: false,
        stunTimer: null
      },
      t2: {
        score: 0,
        stability: 45,
        temp: 720,
        pH: 3.5,
        pressure: 5.8,
        streak: 0,
        incidentIndex: 0,
        isOverheated: false,
        isStunned: false,
        stunTimer: null
      }
    },

    // 1. Rejimni boshlash
    start(customConfig = {}) {
      this.config = Object.assign({}, this.config, customConfig);
      this.active = true;
      this.paused = false;

      this.state.timeRemaining = this.config.matchTime || 90;

      this.state.t1 = {
        score: 0,
        stability: 45,
        temp: 720,
        pH: 3.5,
        pressure: 5.8,
        streak: 0,
        incidentIndex: 0,
        isOverheated: false,
        isStunned: false,
        stunTimer: null
      };

      this.state.t2 = {
        score: 0,
        stability: 45,
        temp: 720,
        pH: 3.5,
        pressure: 5.8,
        streak: 0,
        incidentIndex: 0,
        isOverheated: false,
        isStunned: false,
        stunTimer: null
      };

      this.renderArena();
      this.bindControls();
      this.startTimer();
      this.startReactorDynamics();

      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.playCountdown();
      }
    },

    // 2. Real vaqtda reaktor beqarorlashuvi (Harorat va bosim tabiiy oshadi)
    startReactorDynamics() {
      if (this.state.dynamicsInterval) clearInterval(this.state.dynamicsInterval);

      this.state.dynamicsInterval = setInterval(() => {
        if (!this.active || this.paused) return;

        // Har 1.5 soniyada reaktor tabiiy og'adi
        [1, 2].forEach(teamId => {
          const t = teamId === 1 ? this.state.t1 : this.state.t2;
          if (t.isStunned) return;

          // Harorat asta o'sadi (+8°C), Bosim (+0.12 Bar), pH kislotaga og'adi (-0.05)
          t.temp = Math.min(1250, t.temp + 9);
          t.pressure = Math.min(10.0, Number((t.pressure + 0.12).toFixed(2)));
          t.pH = Math.max(0.5, Number((t.pH - 0.05).toFixed(2)));

          // Barqarorlikni tekshirish
          this.recalculateStability(t);
        });

        this.updateHUD();
      }, 1400);
    },

    recalculateStability(teamState) {
      let penalty = 0;
      // Harorat me'yori: 450 - 650
      if (teamState.temp < 450 || teamState.temp > 650) {
        penalty += Math.min(35, Math.abs(teamState.temp - 550) / 18);
      }
      // pH me'yori: 6.5 - 8.5
      if (teamState.pH < 6.5 || teamState.pH > 8.5) {
        penalty += Math.min(35, Math.abs(teamState.pH - 7.5) * 8);
      }
      // Bosim me'yori: 1.5 - 3.5
      if (teamState.pressure < 1.5 || teamState.pressure > 3.5) {
        penalty += Math.min(30, Math.abs(teamState.pressure - 2.5) * 8);
      }

      teamState.stability = Math.max(0, Math.min(100, Math.round(100 - penalty)));
      teamState.isOverheated = (teamState.pressure >= 8.5 || teamState.temp >= 1050);

      // G'alaba sharti: Barqarorlik 95% dan oshsa va 5 ta to'g'ri javob berilsa
      if (teamState.stability >= 95 && teamState.score >= 750) {
        this.finishMatch(teamState === this.state.t1 ? 1 : 2, "Reaktor 100% Barqarorlashtirildi!");
      }
    },

    // 3. Maydonni render qilish
    renderArena() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const t1 = this.state.t1;
      const t2 = this.state.t2;

      container.innerHTML = `
        <div id="reactor-mode-view" class="bg-slate-900 border border-amber-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl relative select-none overflow-hidden">
          
          <!-- Yuqori Header -->
          <div class="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase flex items-center gap-2 shadow-sm">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                ⚡ Sanoat Reaktori Balansi (Kiber-Lab)
              </span>
              <span class="text-xs text-white font-black bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                Avariyaviy Termik & Kimyoviy Neytrallash
              </span>
            </div>

            <!-- Taymer -->
            <div class="flex items-center gap-2">
              <div class="bg-slate-950 border border-slate-700/80 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-inner">
                <i class="fa-solid fa-stopwatch text-amber-400 text-sm"></i>
                <span id="reactor-timer-display" class="font-mono text-lg font-black text-white">
                  ${this.state.timeRemaining}s
                </span>
              </div>
            </div>

            <!-- Boshqaruv tugmalari -->
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="EcoBattleReactorMode.togglePause()" 
                id="reactor-pause-btn" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-pause text-amber-400"></i>
                <span id="reactor-pause-text">Pauza (Space)</span>
              </button>

              <button 
                type="button" 
                onclick="EcoBattleReactorMode.exitToSetup()" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-door-open text-rose-400"></i>
                <span>Chiqish (Esc)</span>
              </button>
            </div>
          </div>

          <!-- REAKTOR MAYDONI (SPLIT SCREEN: Zumrad vs Yoqut) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${this.renderTeamReactor(1, t1)}
            ${this.renderTeamReactor(2, t2)}
          </div>

        </div>
      `;
    },

    renderTeamReactor(teamId, teamState) {
      const isT1 = (teamId === 1);
      const teamName = isT1 ? this.config.t1Name : this.config.t2Name;
      const accentBorder = isT1 ? 'border-emerald-500/50' : 'border-rose-500/50';
      const accentText = isT1 ? 'text-emerald-400' : 'text-rose-400';
      const keyGuide = isT1 ? 'A • S • D • F' : 'J • K • L • ;';
      const inc = INCIDENTS_DATABASE[teamState.incidentIndex % INCIDENTS_DATABASE.length];

      const tempColor = (teamState.temp >= 450 && teamState.temp <= 650) ? 'text-emerald-400' : 'text-rose-400';
      const phColor = (teamState.pH >= 6.5 && teamState.pH <= 8.5) ? 'text-emerald-400' : 'text-amber-400';
      const presColor = (teamState.pressure >= 1.5 && teamState.pressure <= 3.5) ? 'text-emerald-400' : 'text-rose-400';

      return `
        <div id="reactor-team-${teamId}" class="relative p-4 sm:p-5 rounded-3xl bg-slate-950/95 border-2 ${accentBorder} shadow-2xl flex flex-col justify-between ${teamState.isOverheated ? 'ring-4 ring-rose-500/60' : ''}">
          
          <!-- Stun / Overheat Overlay -->
          ${teamState.isStunned ? `
            <div class="absolute inset-0 bg-slate-950/90 backdrop-blur-xs rounded-3xl z-30 flex flex-col items-center justify-center text-center p-4">
              <div class="text-4xl mb-2 animate-bounce">🚨⚠️</div>
              <h4 class="text-base font-black text-rose-400 uppercase tracking-wide">NOTOG'RI REAGENT! REAKTOR PORTLASH XAVFI!</h4>
              <p class="text-xs text-slate-300 mt-1 max-w-xs leading-relaxed">Bosim keskin sakradi! Favqulodda bug' chiqarish klapani ishlamoqda... (1.5s)</p>
            </div>
          ` : ''}

          <div>
            <!-- Team Top Bar -->
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <span class="text-xs font-black uppercase ${accentText} flex items-center gap-2">
                <i class="fa-solid fa-atom"></i> ${teamName}
              </span>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold bg-slate-900 text-slate-300 px-2 py-0.5 rounded-lg border border-slate-800">
                  ${keyGuide}
                </span>
                <span class="text-xs font-black text-amber-400">
                  ${teamState.score} XP
                </span>
              </div>
            </div>

            <!-- JONLI DATCHIKLAR PANELI (GAUGE HUD) -->
            <div class="grid grid-cols-3 gap-2 mb-4">
              <!-- Datchik 1: Harorat -->
              <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-2 text-center shadow-inner relative overflow-hidden">
                <span class="text-[9px] font-extrabold text-slate-400 uppercase block mb-0.5">Harorat T</span>
                <div class="font-mono text-base font-black ${tempColor}">
                  ${teamState.temp}°C
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-rose-500 transition-all duration-300" style="width: ${Math.min(100, (teamState.temp / 1200) * 100)}%;"></div>
                </div>
                <span class="text-[7.5px] text-slate-500 font-bold">Me'yor: 450-650°C</span>
              </div>

              <!-- Datchik 2: pH Kislotalilik -->
              <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-2 text-center shadow-inner relative overflow-hidden">
                <span class="text-[9px] font-extrabold text-slate-400 uppercase block mb-0.5">Kislotalilik pH</span>
                <div class="font-mono text-base font-black ${phColor}">
                  ${teamState.pH} pH
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-rose-500 via-emerald-400 to-blue-500 transition-all duration-300" style="width: ${(teamState.pH / 14) * 100}%;"></div>
                </div>
                <span class="text-[7.5px] text-slate-500 font-bold">Neytral: 6.5-8.5</span>
              </div>

              <!-- Datchik 3: Gaz Bosimi -->
              <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-2 text-center shadow-inner relative overflow-hidden">
                <span class="text-[9px] font-extrabold text-slate-400 uppercase block mb-0.5">Bosim P</span>
                <div class="font-mono text-base font-black ${presColor}">
                  ${teamState.pressure} Bar
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-600 transition-all duration-300" style="width: ${(teamState.pressure / 10) * 100}%;"></div>
                </div>
                <span class="text-[7.5px] text-slate-500 font-bold">Me'yor: 1.5-3.5 Bar</span>
              </div>
            </div>

            <!-- REAKTOR BARQARORLIK HOLATI (STABILITY BAR) -->
            <div class="mb-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-3 shadow-inner">
              <div class="flex items-center justify-between text-xs font-black mb-1.5">
                <span class="text-slate-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-shield-halved text-amber-400"></i> Reaktor Barqarorligi:
                </span>
                <span class="${teamState.stability >= 75 ? 'text-emerald-400' : (teamState.stability >= 40 ? 'text-amber-400' : 'text-rose-400 font-black animate-pulse')}">
                  ${teamState.stability}% / 100%
                </span>
              </div>
              <div class="w-full h-3 rounded-full bg-slate-950 overflow-hidden border border-slate-800 p-0.5">
                <div class="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 transition-all duration-500" style="width: ${teamState.stability}%;"></div>
              </div>
            </div>

            <!-- AVARIYAVIY KEYS VA SAVOL (EMERGENCY INCIDENT) -->
            <div class="mb-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-3.5 shadow-md">
              <div class="flex items-center justify-between text-[10px] font-black text-amber-300 mb-1">
                <span class="flex items-center gap-1 uppercase tracking-wide">
                  ⚠️ ${inc.title}
                </span>
                <span class="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                  Bosqich: ${teamState.incidentIndex + 1} / 5
                </span>
              </div>
              <p class="text-xs text-white font-medium mb-2 leading-relaxed">
                ${inc.desc}
              </p>
              <div class="text-[10.5px] font-black text-emerald-300 bg-emerald-950/40 p-1.5 rounded-lg border border-emerald-500/30 flex items-center gap-1.5">
                <span>🎯 Vazifa:</span>
                <span>${inc.target}</span>
              </div>
            </div>

            <!-- KIBER-PULT REAGENT VA KLAPAN TUGMALARI -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${inc.options.map((opt, optIdx) => {
                const keys = isT1 ? ['A', 'S', 'D', 'F'] : ['J', 'K', 'L', ';'];
                const keyChar = keys[optIdx] || (optIdx + 1);

                return `
                  <button 
                    type="button" 
                    onclick="EcoBattleReactorMode.handleChoice(${teamId}, ${optIdx})"
                    class="reactor-control-btn w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800/90 border-2 border-slate-700/80 hover:border-amber-400 text-left cursor-pointer shadow-md group flex items-center justify-between gap-2"
                  >
                    <div class="flex flex-col overflow-hidden">
                      <span class="text-xs font-black text-white group-hover:text-amber-300 transition-colors leading-tight truncate">
                        ${opt.name}
                      </span>
                      <span class="text-[9px] font-mono text-slate-400 group-hover:text-amber-200/80 leading-none mt-1 truncate">
                        ${opt.formula}
                      </span>
                    </div>
                    <span class="w-6 h-6 rounded-lg bg-slate-950 border border-slate-700 text-xs font-mono font-black text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                      ${keyChar}
                    </span>
                  </button>
                `;
              }).join('')}
            </div>

          </div>

          <!-- Bottom Status -->
          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Muvaffaqiyatli Neytrallash: <strong class="text-white">${teamState.score / 150} ta</strong></span>
            <span>Combo Zarba: <strong class="text-amber-400">x${teamState.streak}</strong></span>
          </div>

        </div>
      `;
    },

    // 4. Variant tanlash
    handleChoice(teamId, optionIndex) {
      if (!this.active || this.paused) return;
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      const opponent = teamId === 1 ? this.state.t2 : this.state.t1;
      if (team.isStunned) return;

      const inc = INCIDENTS_DATABASE[team.incidentIndex % INCIDENTS_DATABASE.length];
      const selected = inc.options[optionIndex];
      if (!selected) return;

      if (selected.isCorrect) {
        // To'g'ri chora: Reaktor parametrlari yashil zonaga yaqinlashadi
        team.score += 150;
        team.streak += 1;
        team.temp = Math.max(480, Math.min(650, team.temp + selected.effect.temp));
        team.pH = Math.max(6.8, Math.min(8.0, Number((team.pH + selected.effect.pH).toFixed(2))));
        team.pressure = Math.max(1.8, Math.min(3.2, Number((team.pressure + selected.effect.pressure).toFixed(2))));

        // Hujum klapani: Raqib reaktoriga bosim yuklamasi beriladi!
        opponent.pressure = Math.min(9.5, Number((opponent.pressure + 0.6).toFixed(2)));
        opponent.temp = Math.min(1100, opponent.temp + 45);

        if (window.ecoAudio && typeof window.ecoAudio.playCorrect === 'function') {
          window.ecoAudio.playCorrect();
        }

        // Keyingi avariyaviy keysga o'tish
        team.incidentIndex += 1;
        this.recalculateStability(team);
        this.renderArena();
      } else {
        // Noto'g'ri chora: Reaktor bosimi sakraydi, 1.5s stun!
        team.streak = 0;
        team.temp = Math.min(1200, team.temp + selected.effect.temp);
        team.pH = Math.max(1.0, Math.min(13.5, Number((team.pH + selected.effect.pH).toFixed(2))));
        team.pressure = Math.min(9.8, Number((team.pressure + selected.effect.pressure).toFixed(2)));
        team.isStunned = true;

        if (window.ecoAudio && typeof window.ecoAudio.playWrong === 'function') {
          window.ecoAudio.playWrong();
        }

        this.recalculateStability(team);
        this.renderArena();

        team.stunTimer = setTimeout(() => {
          team.isStunned = false;
          this.renderArena();
        }, 1500);
      }
    },

    // 5. HUD ko'rsatkichlarini yangilash
    updateHUD() {
      if (!this.active) return;
      // Datchiklar real vaqtda yangilanadi
      [1, 2].forEach(teamId => {
        const team = teamId === 1 ? this.state.t1 : this.state.t2;
        const panel = document.getElementById(`reactor-team-${teamId}`);
        if (!panel) return;

        // Agar reaktor bosimi 9.8 dan oshsa — portlash!
        if (team.pressure >= 9.8 || team.temp >= 1200) {
          const winnerId = teamId === 1 ? 2 : 1;
          this.finishMatch(winnerId, `${teamId}-Jamoa reaktori kritik portlashga uchradi!`);
        }
      });
    },

    // 6. Klaviaturani ulash
    bindControls() {
      const handler = (e) => {
        if (!this.active || this.paused) return;
        const key = e.key.toUpperCase();

        // 1-Jamoa (A, S, D, F)
        if (key === 'A') this.handleChoice(1, 0);
        else if (key === 'S') this.handleChoice(1, 1);
        else if (key === 'D') this.handleChoice(1, 2);
        else if (key === 'F') this.handleChoice(1, 3);

        // 2-Jamoa (J, K, L, ;)
        else if (key === 'J') this.handleChoice(2, 0);
        else if (key === 'K') this.handleChoice(2, 1);
        else if (key === 'L') this.handleChoice(2, 2);
        else if (key === ';' || key === ':') this.handleChoice(2, 3);

        // Pauza
        else if (e.code === 'Space') {
          e.preventDefault();
          this.togglePause();
        } else if (e.key === 'Escape') {
          this.exitToSetup();
        }
      };

      window.addEventListener('keydown', handler);
      this.keyHandler = handler;
    },

    unbindControls() {
      if (this.keyHandler) {
        window.removeEventListener('keydown', this.keyHandler);
        this.keyHandler = null;
      }
    },

    // 7. Taymer
    startTimer() {
      if (this.state.timerInterval) clearInterval(this.state.timerInterval);
      this.state.timerInterval = setInterval(() => {
        if (!this.active || this.paused) return;
        this.state.timeRemaining -= 1;

        const el = document.getElementById('reactor-timer-display');
        if (el) el.textContent = `${this.state.timeRemaining}s`;

        if (this.state.timeRemaining <= 0) {
          this.finishMatchByScore();
        }
      }, 1000);
    },

    togglePause() {
      this.paused = !this.paused;
      const btnText = document.getElementById('reactor-pause-text');
      if (btnText) btnText.textContent = this.paused ? "Davom ettirish (Space)" : "Pauza (Space)";
    },

    finishMatch(winnerId, reason) {
      this.active = false;
      if (this.state.timerInterval) clearInterval(this.state.timerInterval);
      if (this.state.dynamicsInterval) clearInterval(this.state.dynamicsInterval);
      this.unbindControls();

      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const winnerName = winnerId === 1 ? this.config.t1Name : this.config.t2Name;
      const winnerScore = winnerId === 1 ? this.state.t1.score : this.state.t2.score;

      container.innerHTML = `
        <div class="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-center select-none max-w-2xl mx-auto">
          <div class="text-6xl mb-3 animate-bounce">🏆⚡</div>
          <span class="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black uppercase tracking-wider mb-3 inline-block">
            REAKTOR NEYTRALLASH G'OLIBI!
          </span>
          <h2 class="text-3xl sm:text-5xl font-black text-white mt-1 mb-2">
            ${winnerName}
          </h2>
          <p class="text-sm text-slate-300 mb-4 font-medium">
            ${reason}
          </p>
          <div class="inline-block bg-slate-950 border border-slate-800 px-6 py-2.5 rounded-2xl mb-6">
            <span class="text-xs text-slate-400">To'plangan Ball:</span>
            <span class="text-xl font-black text-amber-400 ml-2">+${winnerScore} XP</span>
          </div>

          <div class="flex items-center justify-center gap-3">
            <button onclick="EcoBattleReactorMode.start()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs hover:scale-105 transition-all cursor-pointer">
              🔄 Qayta O'ynash
            </button>
            <button onclick="EcoBattleReactorMode.exitToSetup()" class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 cursor-pointer">
              🔙 Boshqa Rejimni Tanlash
            </button>
          </div>
        </div>
      `;

      if (window.ecoAudio && typeof window.ecoAudio.playFanfare === 'function') {
        window.ecoAudio.playFanfare();
      }
    },

    finishMatchByScore() {
      const s1 = this.state.t1.stability;
      const s2 = this.state.t2.stability;
      let winnerId = 1;
      if (s2 > s1) winnerId = 2;
      else if (s1 === s2) winnerId = (this.state.t1.score >= this.state.t2.score) ? 1 : 2;
      this.finishMatch(winnerId, "Vaqt tugadi! Reaktor barqarorligi bo'yicha g'olib aniqlandi.");
    },

    exitToSetup() {
      this.active = false;
      if (this.state.timerInterval) clearInterval(this.state.timerInterval);
      if (this.state.dynamicsInterval) clearInterval(this.state.dynamicsInterval);
      this.unbindControls();

      if (window.EcoBattleArena && typeof window.EcoBattleArena.init === 'function') {
        window.EcoBattleArena.init();
      }
    }
  };

  window.EcoBattleReactorMode = EcoBattleReactorMode;
  // Aliases for compatibility
  window.EcoBattleFoodChainMode = EcoBattleReactorMode;
})();
