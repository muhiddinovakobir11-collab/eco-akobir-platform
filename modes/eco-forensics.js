/**
 * ============================================================================
 * ECO-BATL REJIMI: SUD-EKOLOGIK TERGOVI (ECO-FORENSICS & CRIME PINBOARD)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Noodatiy va Murakkab Mexanika:
 * - Haqiqiy Sud-Ekologik Tergov Doskasi (Kriminalistik Pinboard & Qizil Iplar).
 * - Har bir keysda yirik ekologik jinoyat yuz bergan (Zaharli sizish, daryo ifloslanishi).
 * - Tergovchi 4 ta asosiy sabab-oqibat dalillar zanjirini tergov doskasiga bog'laydi:
 *   1. [Laboratoriya Spektroskopiyasi & Toksik Dalil]
 *   2. [Buzilgan Qonun & SanQvaM Moddasi]
 *   3. [Haqiqiy Aybdor & Maxfiy Jinoyat Usuli]
 *   4. [Sud Hukmi, Jarima va Zararni Undirish]
 * - Soxta dalillar (Korrupsiya va soxta akt tuzoqlari) mavjud:
 *   Agar tergovchi soxta dalilni tanlasa — "Advokat Apellyatsiyasi" tufayli 2s qotadi!
 * - Birinchi bo'lib tergov xulosasini tuzgan detektiv sud zalida g'olib bo'ladi!
 */

(function () {
  'use strict';

  // Sud-ekologik tergov stillari
  (function injectForensicsStyles() {
    if (document.getElementById('eco-forensics-styles')) return;
    const style = document.createElement('style');
    style.id = 'eco-forensics-styles';
    style.textContent = `
      .forensic-pin-card {
        transition: all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
        cursor: pointer;
        border-bottom-width: 4px !important;
      }
      .forensic-pin-card:hover {
        transform: translateY(-3px) scale(1.02);
      }
      .forensic-pin-card:active {
        transform: translateY(2px) scale(0.97);
        border-bottom-width: 1px !important;
      }
      .forensic-pin-card.selected {
        border-color: #facc15 !important;
        background: linear-gradient(135deg, rgba(234, 179, 8, 0.25) 0%, rgba(113, 63, 18, 0.5) 100%) !important;
        box-shadow: 0 0 16px rgba(250, 204, 21, 0.6) !important;
        transform: scale(1.04) translateY(-2px);
      }
      .forensic-slot {
        transition: all 0.2s ease;
      }
      .forensic-slot.filled {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 78, 59, 0.6) 100%) !important;
        border-color: #10b981 !important;
        box-shadow: 0 0 14px rgba(16, 185, 129, 0.4);
      }
      @keyframes pinThreadGlow {
        0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 2px #ef4444); }
        50% { opacity: 1; filter: drop-shadow(0 0 8px #f43f5e); }
      }
      .pin-thread-laser {
        animation: pinThreadGlow 1.5s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  })();

  const FORENSIC_CASES = [
    {
      id: "fc_case_1",
      title: "Zarafshon Daryosi: Sianid va Og'ir Metallar Qotilligi",
      incidentBrief: "Daryoda 15 tonna zog'ora va xumbosh baliqlar qirilib ketdi. Aholi ichimlik suvi ta'minoti favqulodda to'xtatildi!",
      targetTugunlar: [
        { slot: 1, type: "lab", name: "Sianid (CN⁻) 42 Baravar & Simob (Hg) 0.08 mg/l", desc: "Spektroskopik tahlilda o'limga olib keluvchi erkin sianid ionlari tasdiqlandi.", icon: "🧪" },
        { slot: 2, type: "law", name: "Suv Kodeksi 99-moddasi & JK 196-moddasi", desc: "Suv havzalarini zaharlash va xavfli moddalarni ruxsatsiz oqizish jinoyati.", icon: "⚖️" },
        { slot: 3, type: "culprit", name: "Oltin Ajratish Sexi: Yopiq Aylanma Quvurni Tunda Ochgan", desc: "Filtrlash shlam hovuzi to'lib ketgach, aylanma drenaj tunda daryoga ochilgan.", icon: "🕵️" },
        { slot: 4, type: "verdict", name: "3.2 Mlrd So'm Zarar Undirish & Rahbariyat Qamog'i", desc: "Tabiatga yetkazilgan zararni to'liq qoplash, litsenziyani bekor qilish va jinoiy jazo.", icon: "🔨" }
      ],
      fakeTraps: [
        { name: "Qalbaki SanQvaM Akti: 'Baliqlar kislorod yetishmasligidan o'lgan'", desc: "TUZOOQ! Korxona pora bilan yopishga uringan soxta dalolatnoma.", icon: "🚫" },
        { name: "Guvohning Soxta Ko'rsatmasi: 'Daryoga hech narsa quyilmadi'", desc: "TUZOOQ! Sex qorovulining yolg'on ko'rsatmasi.", icon: "🚫" },
        { name: "Oddiy Maishiy Chiqindi Xaltasi", desc: "TUZOOQ! Bu o'lim sababi emas.", icon: "⚠️" }
      ]
    },
    {
      id: "fc_case_2",
      title: "Toshkent Viloyati: Dioksin va Akkumulyator O'ti Avariyasi",
      incidentBrief: "Eski avtomobil akkumulyatorlari va rezina shinalar poligoni tunda o't oldi. Qalin qora kanserogen tutun turar-joylarni qopladi!",
      targetTugunlar: [
        { slot: 1, type: "lab", name: "Dioksin, Furan va Qo'rg'oshin (Pb) 2800 mg/m³", desc: "Xromato-mass-spektrometriyada 1-darajali mutagen dioksinlar aniqlandi.", icon: "🔬" },
        { slot: 2, type: "law", name: "Chiqindilar To'g'risidagi Qonun 22-moddasi & SanQvaM 0350", desc: "1-toifali xavfli toksik chiqindilarni noqonuniy ochiq yoqish jinoyati.", icon: "⚖️" },
        { slot: 3, type: "culprit", name: "Litsenziyasiz Metallolom Sindikati (Qo'rg'oshin Eritish)", desc: "Qo'rg'oshinni noqonuniy eritib olish uchun xavfli chiqindilar ataylab yoqilgan.", icon: "🕵️" },
        { slot: 4, type: "verdict", name: "Poligonni Tugatish, 1.8 Mlrd So'm Jazo & Rekultivatsiya", desc: "Zaharli tuproqni to'liq ko'chirish, zararni qoplash va aybdorlarni qamoqqa olish.", icon: "🔨" }
      ],
      fakeTraps: [
        { name: "Soxta Dalil: 'Yozgi quyosh nuri o'z-o'zidan o't oldirgan'", desc: "TUZOOQ! Kechasi 02:30 da quyosh bo'lmaydi!", icon: "🚫" },
        { name: "Tozalangan Yog'och Kulining Sertifikati", desc: "TUZOOQ! Voqeaga aloqador bo'lmagan soxta hujjat.", icon: "⚠️" }
      ]
    },
    {
      id: "fc_case_3",
      title: "Chirchiq Sanoat Zonasi: Xlor va Ammiak Gaz Klapan Portlashi",
      incidentBrief: "Kimyo zavodi rezervuarida klapan yorildi. 800 metr radiusdagi aholi evakuatsiya qilindi!",
      targetTugunlar: [
        { slot: 1, type: "lab", name: "Erkin Xlor (Cl₂) 95 ppm & NH₃ Bug'i", desc: "Gaz analizatorlari nafas yo'llarini kuydiruvchi kritik xlor bug'ini qayd etdi.", icon: "☣️" },
        { slot: 2, type: "law", name: "Sanoat Xavfsizligi Qonuni 14-moddasi & Sanitar Himoya SHZ", desc: "Amortizatsiyasi tugagan uskunani ekspluatatsiya qilish va SanQvaM me'yorini buzish.", icon: "⚖️" },
        { slot: 3, type: "culprit", name: "Audit Aktini Qalbaki Rasmiylashtirgan Bosh Muhandis", desc: "Klapan 2018 yilda yaroqsiz deb topilgan, lekin pul tejash uchun almashtirilmagan.", icon: "🕵️" },
        { slot: 4, type: "verdict", name: "Zavod Faoliyatini To'xtatish & 2.6 Mlrd So'm Avariya Jarimasi", desc: "Jabrlangan aholiga kompensatsiya to'lash va korxona bosh muhandisini sud qilish.", icon: "🔨" }
      ],
      fakeTraps: [
        { name: "Eski Sovutgich Freoni Hujjati", desc: "TUZOOQ! Xlor falokatiga freonning daxli yo'q.", icon: "🚫" },
        { name: "Qalbaki Komissiya Xulosasi: 'Klapan yangi edi'", desc: "TUZOOQ! Pora evaziga berilgan soxta sertifikat.", icon: "🚫" }
      ]
    }
  ];

  const EcoBattleForensicsMode = {
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
      currentCaseIndex: 0,
      t1: {
        score: 0,
        solvedCases: 0,
        selectedCard: null,
        placedSlots: [null, null, null, null], // 4 slots
        availableCards: [],
        isStunned: false,
        stunTimer: null
      },
      t2: {
        score: 0,
        solvedCases: 0,
        selectedCard: null,
        placedSlots: [null, null, null, null],
        availableCards: [],
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
      this.state.currentCaseIndex = 0;

      this.loadCase(0);
      this.bindControls();
      this.startTimer();

      if (window.EcoBattleCoreFx) {
        window.EcoBattleCoreFx.playCountdown();
      }
    },

    // 2. Tergov keysini yuklash
    loadCase(caseIdx) {
      this.state.currentCaseIndex = caseIdx;
      const c = FORENSIC_CASES[caseIdx % FORENSIC_CASES.length];

      // Ikkala jamoaga aralash dalillar kartalarini tayyorlash
      const cards = [];
      c.targetTugunlar.forEach((tg, idx) => {
        cards.push({
          id: `true_${idx}`,
          slotTarget: tg.slot,
          type: tg.type,
          name: tg.name,
          desc: tg.desc,
          icon: tg.icon,
          isFake: false
        });
      });

      c.fakeTraps.forEach((fk, idx) => {
        cards.push({
          id: `fake_${idx}`,
          slotTarget: -1,
          type: "trap",
          name: fk.name,
          desc: fk.desc,
          icon: fk.icon,
          isFake: true
        });
      });

      this.state.t1.placedSlots = [null, null, null, null];
      this.state.t1.selectedCard = null;
      this.state.t1.availableCards = this.shuffle([...cards]);

      this.state.t2.placedSlots = [null, null, null, null];
      this.state.t2.selectedCard = null;
      this.state.t2.availableCards = this.shuffle([...cards]);

      this.renderArena();
    },

    shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },

    // 3. Maydonni render qilish
    renderArena() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const c = FORENSIC_CASES[this.state.currentCaseIndex % FORENSIC_CASES.length];
      const t1 = this.state.t1;
      const t2 = this.state.t2;

      container.innerHTML = `
        <div id="forensics-mode-view" class="bg-slate-900 border border-yellow-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl relative select-none overflow-hidden">
          
          <!-- Yuqori Header -->
          <div class="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border border-yellow-500/40 text-xs font-black uppercase flex items-center gap-2 shadow-sm">
                <i class="fa-solid fa-magnifying-glass-chart text-yellow-400 animate-pulse"></i>
                🔍 Sud-Ekologik Tergov Doskasi (Eco-Forensics)
              </span>
              <span class="text-xs text-white font-black bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                Keys #${this.state.currentCaseIndex + 1}: ${c.title}
              </span>
            </div>

            <!-- Taymer -->
            <div class="flex items-center gap-2">
              <div class="bg-slate-950 border border-slate-700/80 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-inner">
                <i class="fa-solid fa-stopwatch text-amber-400 text-sm"></i>
                <span id="forensics-timer-display" class="font-mono text-lg font-black text-white">
                  ${this.state.timeRemaining}s
                </span>
              </div>
            </div>

            <!-- Boshqaruv tugmalari -->
            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="EcoBattleForensicsMode.togglePause()" 
                id="forensics-pause-btn" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-pause text-amber-400"></i>
                <span id="forensics-pause-text">Pauza (Space)</span>
              </button>

              <button 
                type="button" 
                onclick="EcoBattleForensicsMode.exitToSetup()" 
                class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer"
              >
                <i class="fa-solid fa-door-open text-rose-400"></i>
                <span>Chiqish (Esc)</span>
              </button>
            </div>
          </div>

          <!-- JINOYAT QISQACHA BRİFİNGI (CASE BRIEF) -->
          <div class="mb-5 bg-gradient-to-r from-slate-950 via-yellow-950/30 to-slate-950 border-2 border-yellow-500/40 rounded-2xl p-3.5 shadow-md flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="text-3xl">📂</span>
              <div class="text-left">
                <span class="text-[10px] font-black text-yellow-400 uppercase tracking-wider block">Maxfiy Ekologik Tergov Fayli:</span>
                <p class="text-xs text-white font-bold">${c.incidentBrief}</p>
              </div>
            </div>
            <div class="text-[10.5px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3 py-1 rounded-xl">
              ⚠️ DIQQAT: Soxta/Pora bilan qilingan hujjatlar bor! Xato qilsangiz 2s tergov to'xtaydi!
            </div>
          </div>

          <!-- IKKI TERGOVCHI MAYDONI (SPLIT PINBOARD) -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${this.renderTeamPinboard(1, t1, c)}
            ${this.renderTeamPinboard(2, t2, c)}
          </div>

        </div>
      `;
    },

    renderTeamPinboard(teamId, teamState, currentCase) {
      const isT1 = (teamId === 1);
      const teamName = isT1 ? this.config.t1Name : this.config.t2Name;
      const accentBorder = isT1 ? 'border-emerald-500/50' : 'border-rose-500/50';
      const accentText = isT1 ? 'text-emerald-400' : 'text-rose-400';
      const keyGuide = isT1 ? 'A • S • D • F • G • Z' : 'J • K • L • ; • H • N';

      const slotLabels = [
        "1. Toksik Lab Dalili",
        "2. Buzilgan Qonun & Modda",
        "3. Haqiqiy Aybdor Korxona",
        "4. Sud Zarari & Hukm"
      ];

      return `
        <div id="forensic-team-${teamId}" class="relative p-4 sm:p-5 rounded-3xl bg-slate-950/95 border-2 ${accentBorder} shadow-2xl flex flex-col justify-between ${teamState.isStunned ? 'ring-4 ring-rose-500/60' : ''}">
          
          <!-- Stun Overlay -->
          ${teamState.isStunned ? `
            <div class="absolute inset-0 bg-slate-950/90 backdrop-blur-xs rounded-3xl z-30 flex flex-col items-center justify-center text-center p-4">
              <div class="text-4xl mb-2 animate-bounce">🚫⚖️</div>
              <h4 class="text-base font-black text-rose-400 uppercase tracking-wide">ADVOKAT PROTESTI: SOXTA DALIL!</h4>
              <p class="text-xs text-slate-300 mt-1 max-w-xs leading-relaxed">Siz pora evaziga tuzilgan yoki chalg'ituvchi soxta dalolatnomani tanladingiz. Sud tergovni to'xtatdi! (2s)</p>
            </div>
          ` : ''}

          <div>
            <!-- Team Top Bar -->
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
              <span class="text-xs font-black uppercase ${accentText} flex items-center gap-2">
                <i class="fa-solid fa-stamp"></i> Bosh Detektiv: ${teamName}
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

            <!-- TERGOV DOSKASI: 4 TA DALIL TUGUNI (PINBOARD SLOTS) -->
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10.5px] font-black text-yellow-300 uppercase tracking-wider flex items-center gap-1.5">
                  <i class="fa-solid fa-thumbtack text-rose-400"></i> Sud-Ayblov Doskasi (Ketma-ket to'ldiring):
                </span>
                <span class="text-[10px] text-slate-400 font-bold">
                  Bog'langan: ${teamState.placedSlots.filter(Boolean).length} / 4
                </span>
              </div>

              <!-- 4 Connected Slots Grid with Red Laser Thread -->
              <div class="grid grid-cols-2 gap-2 relative">
                ${slotLabels.map((label, sIdx) => {
                  const placed = teamState.placedSlots[sIdx];
                  const isFilled = !!placed;

                  return `
                    <div 
                      onclick="EcoBattleForensicsMode.handleSlotClick(${teamId}, ${sIdx})"
                      class="forensic-slot ${isFilled ? 'filled' : 'border-2 border-dashed border-slate-800 bg-slate-900/70 hover:border-yellow-400'} rounded-2xl p-2.5 min-h-[82px] flex flex-col justify-between cursor-pointer shadow-md transition-all relative overflow-hidden"
                    >
                      <div class="flex items-center justify-between text-[9px] font-black">
                        <span class="${isFilled ? 'text-emerald-300' : 'text-slate-400'}">${label}</span>
                        <span>${isFilled ? '✅ BOG\'LANDI' : '⏳ BO\'SH'}</span>
                      </div>

                      ${isFilled ? `
                        <div class="flex items-start gap-1.5 mt-1">
                          <span class="text-base">${placed.icon}</span>
                          <div class="flex flex-col text-left overflow-hidden">
                            <span class="text-[10.5px] font-black text-white line-clamp-1 leading-tight">${placed.name}</span>
                            <span class="text-[8px] text-emerald-300/80 line-clamp-1 leading-none mt-0.5">${placed.desc}</span>
                          </div>
                        </div>
                      ` : `
                        <div class="text-center py-2 text-slate-600 font-bold text-[9px]">
                          Pastdagi hujjatni tanlab, shu yerga bosing
                        </div>
                      `}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- ARALASH TERGOV HUJJATLARI TRAY (EVIDENCE CARDS TRAY) -->
            <div>
              <span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                Mavjud Dalillar va Hujjatlar (Haqiqiysini toping):
              </span>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${teamState.availableCards.map((card, cIdx) => {
                  const isSelected = (teamState.selectedCard && teamState.selectedCard.id === card.id);
                  const keys = isT1 ? ['A', 'S', 'D', 'F', 'G', 'Z'] : ['J', 'K', 'L', ';', 'H', 'N'];
                  const keyChar = keys[cIdx] || (cIdx + 1);

                  return `
                    <div 
                      onclick="EcoBattleForensicsMode.handleCardClick(${teamId}, '${card.id}')"
                      class="forensic-pin-card ${isSelected ? 'selected' : 'border-2 border-slate-800 bg-slate-900/80 hover:border-yellow-400/80'} rounded-xl p-2 flex items-center justify-between gap-2 shadow-md group"
                    >
                      <div class="flex items-start gap-2 overflow-hidden text-left">
                        <span class="text-lg shrink-0 group-hover:scale-110 transition-transform">${card.icon}</span>
                        <div class="flex flex-col overflow-hidden">
                          <span class="text-[11px] font-black text-white group-hover:text-yellow-300 transition-colors line-clamp-1 leading-tight">
                            ${card.name}
                          </span>
                          <span class="text-[8.5px] text-slate-400 line-clamp-1 leading-none mt-1">
                            ${card.desc}
                          </span>
                        </div>
                      </div>
                      <span class="w-5 h-5 rounded bg-black/50 border border-slate-700 text-[9.5px] font-mono font-black text-amber-400 flex items-center justify-center shrink-0">
                        ${keyChar}
                      </span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

          </div>

          <!-- Bottom Status -->
          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Fosh Qilingan Jinoyatlar: <strong class="text-emerald-400 font-black">${teamState.solvedCases} ta</strong></span>
            <span>Jarima Undirildi: <strong class="text-amber-400 font-mono">+${teamState.score} XP</strong></span>
          </div>

        </div>
      `;
    },

    // 4. Dalillar kartasini tanlash
    handleCardClick(teamId, cardId) {
      if (!this.active || this.paused) return;
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      if (team.isStunned) return;

      const card = team.availableCards.find(c => c.id === cardId);
      if (!card) return;

      team.selectedCard = card;
      this.renderArena();

      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    },

    // 5. Tergov doskasi slotiga bog'lash (Animatsiyalar bilan)
    handleSlotClick(teamId, slotIndex) {
      if (!this.active || this.paused) return;
      const team = teamId === 1 ? this.state.t1 : this.state.t2;
      if (team.isStunned || team.isEvaluating) return;

      const fb = document.getElementById(`forensics-feedback-${teamId}`);

      if (!team.selectedCard) {
        if (fb) {
          fb.innerHTML = `
            <div class="forensics-shake-anim p-2.5 rounded-xl bg-amber-950/70 border border-amber-500/50 text-amber-300 text-xs text-center font-bold mb-2.5">
              ⚠️ Avval quyidagi kartochkalar ichidan dalilni tanlang!
            </div>
          `;
          setTimeout(() => { if (fb) fb.innerHTML = ''; }, 1600);
        }
        return;
      }

      const card = team.selectedCard;

      // 1. Agar soxta dalil (tuzoq) tanlangan bo'lsa
      if (card.isFake) {
        team.isStunned = true;
        team.selectedCard = null;

        if (window.ecoAudio && typeof window.ecoAudio.playWrong === 'function') {
          window.ecoAudio.playWrong();
        }

        if (fb) {
          fb.innerHTML = `
            <div class="forensics-shake-anim p-3 rounded-2xl bg-gradient-to-r from-rose-950/95 via-slate-900 to-red-950/95 border-2 border-rose-500 text-rose-200 shadow-[0_0_30px_rgba(244,63,94,0.6)] flex items-center gap-3 mb-3">
              <span class="text-3xl animate-bounce">🚨</span>
              <div>
                <div class="text-xs font-black text-rose-300 flex items-center gap-2">
                  <span>SOXTA HUJJAT / KORRUPSIYA QOPQONI!</span>
                  <span class="bg-rose-500 text-white px-2 py-0.2 rounded-full text-[9px] font-black">2s QOTISH</span>
                </div>
                <div class="text-[10px] text-slate-300 mt-0.5">
                  Advokat e'tiroz bildirdi! Ushbu soxta dalil tergovdan chetlatildi.
                </div>
              </div>
            </div>
          `;
        }

        this.renderArena();

        team.stunTimer = setTimeout(() => {
          team.isStunned = false;
          this.renderArena();
        }, 2000);
        return;
      }

      // 2. Haqiqiy dalil: slot mosligini tekshirish
      const requiredTarget = slotIndex + 1;
      if (card.slotTarget === requiredTarget) {
        team.isEvaluating = true;
        // To'g'ri dalil bog'landi!
        team.placedSlots[slotIndex] = card;
        team.availableCards = team.availableCards.filter(c => c.id !== card.id);
        team.selectedCard = null;
        team.score += 200;

        if (window.ecoAudio && typeof window.ecoAudio.playCorrect === 'function') {
          window.ecoAudio.playCorrect();
        }

        if (fb) {
          fb.innerHTML = `
            <div class="forensics-pop-anim p-3 rounded-2xl bg-gradient-to-r from-emerald-950/95 via-slate-900 to-teal-950/95 border-2 border-emerald-400 text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <span class="text-2xl animate-spin-slow">📌</span>
                <div>
                  <div class="text-xs font-black text-white flex items-center gap-2">
                    <span class="text-emerald-300">✅ DALIL DOSKAGA BOG'LANDI!</span>
                    <span class="bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-full text-[9px] font-black">+200 XP</span>
                  </div>
                  <div class="text-[10px] text-slate-200 mt-0.5">
                    <b>${card.name}</b> tergov zanjiriga qizil rishta bilan ulandi!
                  </div>
                </div>
              </div>
              <span class="text-xs font-black text-amber-400 font-mono">SLOT ${slotIndex + 1} ✓</span>
            </div>
          `;
        }

        // Agar barcha 4 ta dalil to'liq bog'langan bo'lsa — Keys hal qilindi!
        if (team.placedSlots.every(Boolean)) {
          team.solvedCases += 1;
          team.score += 400;

          if (team.solvedCases >= 2) {
            setTimeout(() => {
              team.isEvaluating = false;
              this.finishMatch(teamId, "Barcha ekologik jinoyatlar to'liq fosh etildi va sud hukmi chiqarildi!");
            }, 900);
            return;
          }

          setTimeout(() => {
            team.isEvaluating = false;
            this.loadCase(this.state.currentCaseIndex + 1);
          }, 950);
        } else {
          setTimeout(() => {
            team.isEvaluating = false;
            this.renderArena();
          }, 650);
        }
      } else {
        // Noto'g'ri slotga qo'yishga urinish
        if (window.ecoAudio && typeof window.ecoAudio.playWrong === 'function') {
          window.ecoAudio.playWrong();
        }
        if (fb) {
          fb.innerHTML = `
            <div class="forensics-shake-anim p-2.5 rounded-xl bg-rose-950/80 border border-rose-500/60 text-rose-300 text-xs text-center font-bold mb-2.5">
              ⚠️ Noto'g'ri slot! <b>${card.name}</b> boshqa toifadagi dalil hisoblanadi.
            </div>
          `;
          setTimeout(() => { if (fb) fb.innerHTML = ''; }, 1600);
        }
      }
    },

    // 6. Klaviaturani ulash
    bindControls() {
      const handler = (e) => {
        if (!this.active || this.paused) return;
        const key = e.key.toUpperCase();

        const t1Keys = ['A', 'S', 'D', 'F', 'G', 'Z'];
        const t2Keys = ['J', 'K', 'L', ';', 'H', 'N'];

        // 1-Jamoa kartalari
        const t1Idx = t1Keys.indexOf(key);
        if (t1Idx !== -1 && this.state.t1.availableCards[t1Idx]) {
          this.handleCardClick(1, this.state.t1.availableCards[t1Idx].id);
        }

        // 2-Jamoa kartalari
        const t2Idx = t2Keys.indexOf(key);
        if (t2Idx !== -1 && this.state.t2.availableCards[t2Idx]) {
          this.handleCardClick(2, this.state.t2.availableCards[t2Idx].id);
        }

        // Slotlarga avtomatik bog'lash (1, 2, 3, 4 tugmalari)
        if (key === '1') { this.handleSlotClick(1, 0); }
        else if (key === '2') { this.handleSlotClick(1, 1); }
        else if (key === '3') { this.handleSlotClick(1, 2); }
        else if (key === '4') { this.handleSlotClick(1, 3); }

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

        const el = document.getElementById('forensics-timer-display');
        if (el) el.textContent = `${this.state.timeRemaining}s`;

        if (this.state.timeRemaining <= 0) {
          this.finishMatchByScore();
        }
      }, 1000);
    },

    togglePause() {
      this.paused = !this.paused;
      const btnText = document.getElementById('forensics-pause-text');
      if (btnText) btnText.textContent = this.paused ? "Davom ettirish (Space)" : "Pauza (Space)";
    },

    finishMatch(winnerId, reason) {
      this.active = false;
      if (this.state.timerInterval) clearInterval(this.state.timerInterval);
      this.unbindControls();

      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const winnerName = winnerId === 1 ? this.config.t1Name : this.config.t2Name;
      const winnerScore = winnerId === 1 ? this.state.t1.score : this.state.t2.score;

      container.innerHTML = `
        <div class="bg-slate-900 border border-yellow-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-center select-none max-w-2xl mx-auto">
          <div class="text-6xl mb-3 animate-bounce">⚖️🏆</div>
          <span class="px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 text-xs font-black uppercase tracking-wider mb-3 inline-block">
            SUD EKOLOGIK TERGOVI G'OLIBI!
          </span>
          <h2 class="text-3xl sm:text-5xl font-black text-white mt-1 mb-2">
            ${winnerName}
          </h2>
          <p class="text-sm text-slate-300 mb-4 font-medium">
            ${reason}
          </p>
          <div class="inline-block bg-slate-950 border border-slate-800 px-6 py-2.5 rounded-2xl mb-6">
            <span class="text-xs text-slate-400">Undirilgan Ekologik Zarar Balli:</span>
            <span class="text-xl font-black text-amber-400 ml-2">+${winnerScore} XP</span>
          </div>

          <div class="flex items-center justify-center gap-3">
            <button onclick="EcoBattleForensicsMode.start()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black text-xs hover:scale-105 transition-all cursor-pointer">
              🔄 Qayta O'ynash
            </button>
            <button onclick="EcoBattleForensicsMode.exitToSetup()" class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 cursor-pointer">
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
      const s1 = this.state.t1.score;
      const s2 = this.state.t2.score;
      let winnerId = 1;
      if (s2 > s1) winnerId = 2;
      this.finishMatch(winnerId, "Vaqt tugadi! Undirilgan ekologik jarimalar va fosh etilgan dalillar bo'yicha g'olib aniqlandi.");
    },

    exitToSetup() {
      this.active = false;
      if (this.state.timerInterval) clearInterval(this.state.timerInterval);
      this.unbindControls();

      if (window.EcoBattleArena && typeof window.EcoBattleArena.init === 'function') {
        window.EcoBattleArena.init();
      }
    }
  };

  window.EcoBattleForensicsMode = EcoBattleForensicsMode;
  // Aliases for compatibility
  window.EcoBattleSpotPolluterMode = EcoBattleForensicsMode;
})();
