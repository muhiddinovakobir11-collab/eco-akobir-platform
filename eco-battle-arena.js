/**
 * ============================================================================
 * EKO-BATL ARENA (1v1 TALABALAR / JAMOALAR JONLI BELLASHUVI)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Imkoniyatlar:
 * - 2 talaba yoki 2 jamoa bitta ekranda real-vaqt rejimida bir vaqtning o'zida bellashadi
 * - Ekran mukammal ikkiga bo'linadi (Chap: 1-Jamoa / O'ng: 2-Jamoa)
 * - Har ikki jamoaga savollar MUSTAQIL va RANDOM tarzda tushadi
 * - Biri javob berganda ikkinchisini kutmaydi — o'z tezligida davom etadi
 * - Boshqaruv: Sensor/Sichqoncha yoki Klaviatura (A/S/D/F vs J/K/L/;)
 * - O'rtada dinamik Tug-of-War (Arqon tortishuv) energiya bari
 * - Paqldoq/Mushak effektlari (EcoFxEngine), ovozli effektlar (ecoAudio)
 * - Yakunda g'oliblik shukuhi, to'liq statistik taqqoslash va qoldiq izlar tozalanishi
 */

(function () {
  'use strict';

  const EcoBattleArena = {
    // Holat ma'lumotlari
    config: {
      questionCount: 10,
      timePerQuestion: 12, // soniya (0 = cheksiz)
      t1Name: "1-Jamoa (Zumrad)",
      t2Name: "2-Jamoa (Yoqut)",
      t1Avatar: "🛡️",
      t2Avatar: "⚡",
      t1Color: "emerald",
      t2Color: "rose"
    },

    active: false,
    paused: false,
    tugOfWarPercent: 50, // 50% = tenglik, >50 = Team 1, <50 = Team 2

    // 1-Jamoa holati
    t1: {
      id: 1,
      name: "",
      avatar: "🛡️",
      score: 0,
      streak: 0,
      maxStreak: 0,
      questions: [],
      currentIndex: 0,
      timeLeft: 12,
      timerId: null,
      isLocked: false,
      finished: false,
      answersHistory: []
    },

    // 2-Jamoa holati
    t2: {
      id: 2,
      name: "",
      avatar: "⚡",
      score: 0,
      streak: 0,
      maxStreak: 0,
      questions: [],
      currentIndex: 0,
      timeLeft: 12,
      timerId: null,
      isLocked: false,
      finished: false,
      answersHistory: []
    },

    // Klaviatura tinglovchisi bog'langanmi
    keyListenerBound: false,

    // Initsializatsiya
    init() {
      const container = document.getElementById('battle-arena-container');
      if (!container) return;
      if (!this.active) {
        this.renderSetup();
      }
    },

    // 1. Sozlash oynasi (Lobby / Setup screen)
    renderSetup() {
      const container = document.getElementById('battle-arena-container');
      if (!container) return;

      this.active = false;
      this.clearTimers();
      this.unbindKeyboard();

      container.innerHTML = `
        <div class="max-w-4xl mx-auto py-4">
          <!-- Bosh sarlavha banneri -->
          <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-rose-950/80 border border-slate-700/80 p-6 sm:p-8 text-center shadow-2xl mb-8">
            <div class="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-20 -right-20 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase mb-3 shadow-lg">
                <i class="fa-solid fa-swords text-amber-400 animate-bounce"></i> 1v1 Jonli Arena
              </div>
              <h2 class="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
                ⚔️ Eko-Batl Bellashuvi
              </h2>
              <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Bir ekranda 2 nafar talaba yoki 2 ta jamoa bir vaqtning o'zida mustaqil ravishda bellashadi!
                Savollar ikkala tomonga ham butun platforma bazasidan random tushadi.
              </p>
            </div>
          </div>

          <!-- Jamoalarni kiritish va sozlash paneli -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- 1-Jamoa (Chap) -->
            <div class="bg-gradient-to-br from-emerald-950/50 to-slate-900 border-2 border-emerald-500/40 rounded-3xl p-6 shadow-xl relative">
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/40">
                  1-Ishtirokchi (Chap tomon)
                </span>
                <span class="text-xs text-slate-400 font-mono">Klaves: <b class="text-emerald-400">A, S, D, F</b></span>
              </div>

              <div class="space-y-4">
                <div>
                  <label class="block text-xs font-bold text-slate-300 mb-1.5">Talaba / Jamoa nomi:</label>
                  <input type="text" id="t1-name-input" value="1-Jamoa (Zumrad)" placeholder="Ism yoki jamoa nomini yozing..." class="w-full bg-slate-950 border border-emerald-500/40 rounded-2xl px-4 py-3 text-sm text-white font-bold placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20">
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-300 mb-1.5">Avatar tanlang:</label>
                  <div class="grid grid-cols-5 gap-2" id="t1-avatar-picker">
                    ${['🛡️', '🌿', '🦅', '🦁', '⚡'].map((av, idx) => `
                      <button type="button" onclick="EcoBattleArena.selectAvatar(1, '${av}', this)" class="t1-av-btn py-2 text-2xl rounded-xl border ${idx === 0 ? 'border-emerald-400 bg-emerald-500/20 scale-105' : 'border-slate-800 bg-slate-950/60'} hover:border-emerald-400 transition-all cursor-pointer">
                        ${av}
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- 2-Jamoa (O'ng) -->
            <div class="bg-gradient-to-br from-rose-950/50 to-slate-900 border-2 border-rose-500/40 rounded-3xl p-6 shadow-xl relative">
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold uppercase tracking-wider border border-rose-500/40">
                  2-Ishtirokchi (O'ng tomon)
                </span>
                <span class="text-xs text-slate-400 font-mono">Klaves: <b class="text-rose-400">J, K, L, ;</b></span>
              </div>

              <div class="space-y-4">
                <div>
                  <label class="block text-xs font-bold text-slate-300 mb-1.5">Talaba / Jamoa nomi:</label>
                  <input type="text" id="t2-name-input" value="2-Jamoa (Yoqut)" placeholder="Ism yoki jamoa nomini yozing..." class="w-full bg-slate-950 border border-rose-500/40 rounded-2xl px-4 py-3 text-sm text-white font-bold placeholder-slate-500 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20">
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-300 mb-1.5">Avatar tanlang:</label>
                  <div class="grid grid-cols-5 gap-2" id="t2-avatar-picker">
                    ${['⚡', '🔥', '🐯', '🌊', '🐺'].map((av, idx) => `
                      <button type="button" onclick="EcoBattleArena.selectAvatar(2, '${av}', this)" class="t2-av-btn py-2 text-2xl rounded-xl border ${idx === 0 ? 'border-rose-400 bg-rose-500/20 scale-105' : 'border-slate-800 bg-slate-950/60'} hover:border-rose-400 transition-all cursor-pointer">
                        ${av}
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Raund qoidalari va Vaqt sozlamasi -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl">
            <h4 class="text-sm font-black text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <i class="fa-solid fa-sliders text-amber-400"></i> Bellashuv Parametrlari
            </h4>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Savollar soni -->
              <div>
                <label class="block text-xs font-bold text-slate-400 mb-2">Har bir jamoaga savollar soni:</label>
                <div class="grid grid-cols-4 gap-2">
                  ${[5, 10, 15, 20].map(cnt => `
                    <button type="button" onclick="EcoBattleArena.setQuestionCount(${cnt}, this)" class="q-count-btn py-2.5 rounded-xl border text-xs font-extrabold ${cnt === 10 ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400'} hover:border-amber-400 transition-all cursor-pointer">
                      ${cnt} ta
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Har bir savolga vaqt -->
              <div>
                <label class="block text-xs font-bold text-slate-400 mb-2">Har bir savolga berilgan vaqt:</label>
                <div class="grid grid-cols-4 gap-2">
                  ${[8, 12, 15, 20].map(sec => `
                    <button type="button" onclick="EcoBattleArena.setTimePerQuestion(${sec}, this)" class="q-time-btn py-2.5 rounded-xl border text-xs font-extrabold ${sec === 12 ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-400'} hover:border-cyan-400 transition-all cursor-pointer">
                      ${sec} soniya
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Katta Boshlash Tugmasi -->
          <div class="text-center">
            <button onclick="EcoBattleArena.startBattleFromSetup()" class="px-8 sm:px-14 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-rose-600 hover:from-emerald-400 hover:via-teal-400 hover:to-rose-500 text-white font-black text-lg tracking-wide shadow-2xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer">
              <i class="fa-solid fa-bolt-lightning text-xl animate-pulse"></i>
              <span>BATLNI BOSHLASH!</span>
              <i class="fa-solid fa-swords text-xl"></i>
            </button>
            <p class="text-xs text-slate-500 mt-3 font-medium">
              Ekranda bir vaqtning o'zida ikkala talaba ham javob bera oladi (Sensor yoki A/S/D/F va J/K/L/;)
            </p>
          </div>
        </div>
      `;
    },

    selectAvatar(team, av, btn) {
      if (team === 1) {
        this.config.t1Avatar = av;
        document.querySelectorAll('.t1-av-btn').forEach(b => {
          b.className = 't1-av-btn py-2 text-2xl rounded-xl border border-slate-800 bg-slate-950/60 hover:border-emerald-400 transition-all cursor-pointer';
        });
        btn.className = 't1-av-btn py-2 text-2xl rounded-xl border border-emerald-400 bg-emerald-500/20 scale-105 transition-all cursor-pointer';
      } else {
        this.config.t2Avatar = av;
        document.querySelectorAll('.t2-av-btn').forEach(b => {
          b.className = 't2-av-btn py-2 text-2xl rounded-xl border border-slate-800 bg-slate-950/60 hover:border-rose-400 transition-all cursor-pointer';
        });
        btn.className = 't2-av-btn py-2 text-2xl rounded-xl border border-rose-400 bg-rose-500/20 scale-105 transition-all cursor-pointer';
      }
      if (window.ecoAudio) window.ecoAudio.playClick();
    },

    setQuestionCount(cnt, btn) {
      this.config.questionCount = cnt;
      document.querySelectorAll('.q-count-btn').forEach(b => {
        b.className = 'q-count-btn py-2.5 rounded-xl border text-xs font-extrabold bg-slate-950 border-slate-800 text-slate-400 hover:border-amber-400 transition-all cursor-pointer';
      });
      btn.className = 'q-count-btn py-2.5 rounded-xl border text-xs font-extrabold bg-amber-500/20 border-amber-500 text-amber-300 transition-all cursor-pointer';
      if (window.ecoAudio) window.ecoAudio.playClick();
    },

    setTimePerQuestion(sec, btn) {
      this.config.timePerQuestion = sec;
      document.querySelectorAll('.q-time-btn').forEach(b => {
        b.className = 'q-time-btn py-2.5 rounded-xl border text-xs font-extrabold bg-slate-950 border-slate-800 text-slate-400 hover:border-cyan-400 transition-all cursor-pointer';
      });
      btn.className = 'q-time-btn py-2.5 rounded-xl border text-xs font-extrabold bg-cyan-500/20 border-cyan-500 text-cyan-300 transition-all cursor-pointer';
      if (window.ecoAudio) window.ecoAudio.playClick();
    },

    // 2. Savollar bazasini to'plash va aralashtirish
    generatePool() {
      const pool = [];

      // A) 20 ta modul testlari
      if (Array.isArray(window.ECO_MODULES)) {
        window.ECO_MODULES.forEach(mod => {
          if (Array.isArray(mod.quiz)) {
            mod.quiz.forEach(q => {
              if (q.question && Array.isArray(q.options) && q.options.length >= 4) {
                pool.push({
                  source: "Modul: " + mod.title,
                  category: "Ta'lim Moduli",
                  icon: "fa-book-bookmark",
                  question: q.question,
                  options: q.options.slice(0, 4),
                  correct: q.correct,
                  explanation: q.explanation || "To'g'ri ekologik ta'lim javobi."
                });
              }
            });
          }
        });
      }

      // B) 200 ta Chiqindilar bazasi (Utilizatsiya savollari)
      if (Array.isArray(window.ECO_WASTE_DATABASE) && window.ECO_WASTE_DATABASE.length > 0) {
        const wasteSamples = [...window.ECO_WASTE_DATABASE].sort(() => Math.random() - 0.5).slice(0, 60);
        wasteSamples.forEach(w => {
          // 4 ta toifadan iborat variant yaratish
          const correctCat = w.category;
          const allCats = ["Plastik", "Qog'oz", "Shisha", "Organik", "Metall", "Xavfli chiqindi", "Elektronika", "To'qimachilik"];
          const wrongCats = allCats.filter(c => c !== correctCat).sort(() => Math.random() - 0.5).slice(0, 3);
          const options = [correctCat, ...wrongCats].sort(() => Math.random() - 0.5);
          const correctIdx = options.indexOf(correctCat);

          pool.push({
            source: "Saralash: " + w.name,
            category: "Chiqindi Saralash",
            icon: "fa-recycle",
            svg: w.svg || null,
            wasteName: w.name,
            question: `"${w.name}" chiqindisi qaysi konteynerga to'g'ri tashlanadi?`,
            options: options,
            correct: correctIdx,
            explanation: w.explanation || `${w.name} to'g'ri utilizatsiya uchun ${correctCat} konteyneriga topshiriladi.`
          });
        });
      }

      // C) Hard Audit & Expertise savollari
      if (Array.isArray(window.HARD_AUDIT_QUESTIONS)) {
        window.HARD_AUDIT_QUESTIONS.slice(0, 40).forEach(q => {
          if (q.question && Array.isArray(q.options) && q.options.length >= 4) {
            pool.push({
              source: "Ekologik Audit (ISO 14001)",
              category: "Sanoat Auditi",
              icon: "fa-industry",
              question: q.question,
              options: q.options.slice(0, 4),
              correct: q.correct,
              explanation: q.explanation || "Sanoat auditi me'yori."
            });
          }
        });
      }

      if (Array.isArray(window.EXPERTISE_QUESTIONS)) {
        window.EXPERTISE_QUESTIONS.slice(0, 40).forEach(q => {
          if (q.question && Array.isArray(q.options) && q.options.length >= 4) {
            pool.push({
              source: "Davlat Ekologik Ekspertizasi",
              category: "Ekspertiza & AMTB",
              icon: "fa-scale-balanced",
              question: q.question,
              options: q.options.slice(0, 4),
              correct: q.correct,
              explanation: q.explanation || "Davlat ekologik ekspertizasi talabi."
            });
          }
        });
      }

      // Agar pool bo'sh bo'lsa, zaxira savollar
      if (pool.length < 20) {
        pool.push(
          {
            source: "Umumiy Ekologiya",
            category: "Atrof-muhit",
            icon: "fa-leaf",
            question: "Plastik butilkaning tabiatda to'liq parchalanishiga o'rtacha necha yil ketadi?",
            options: ["1-2 yil", "10-20 yil", "400-500 yil", "Umuman parchalanmaydi"],
            correct: 2,
            explanation: "Plastik sintetik polimer bo'lib, to'liq parchalanishiga 450 yildan ortiq vaqt kerak."
          },
          {
            source: "Atmosfera",
            category: "Havo sifati",
            icon: "fa-wind",
            question: "Havoning eng xavfli mayda chang zarrachalari indeksi qanday belgilanadi?",
            options: ["PM2.5 va PM10", "CO2 va CH4", "O3 va CFC", "H2O va N2"],
            correct: 0,
            explanation: "PM2.5 va PM10 eng xavfli mikroskopik chang zarrachalaridir."
          }
        );
      }

      return pool;
    },

    // Fisher-Yates to'g'ri aralashtirish algoritmi
    shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },

    // 3. Batlni boshlash
    startBattleFromSetup() {
      const t1Input = document.getElementById('t1-name-input');
      const t2Input = document.getElementById('t2-name-input');

      this.config.t1Name = (t1Input && t1Input.value.trim()) || "1-Jamoa (Zumrad)";
      this.config.t2Name = (t2Input && t2Input.value.trim()) || "2-Jamoa (Yoqut)";

      this.startBattle();
    },

    startBattle() {
      this.active = true;
      this.paused = false;
      this.tugOfWarPercent = 50;

      // Katta umumiy savollar zaxirasini olish
      const masterPool = this.generatePool();

      // Ikkala jamoa uchun BUTUNLAY MUSTAQIL va RANDOM savollar to'plamini shakllantirish
      const t1Questions = this.shuffleArray(masterPool).slice(0, this.config.questionCount);
      const t2Questions = this.shuffleArray(masterPool).slice(0, this.config.questionCount);

      // 1-Jamoa holatini tozalash
      this.t1 = {
        id: 1,
        name: this.config.t1Name,
        avatar: this.config.t1Avatar,
        score: 0,
        streak: 0,
        maxStreak: 0,
        questions: t1Questions,
        currentIndex: 0,
        timeLeft: this.config.timePerQuestion,
        timerId: null,
        isLocked: false,
        finished: false,
        answersHistory: []
      };

      // 2-Jamoa holatini tozalash
      this.t2 = {
        id: 2,
        name: this.config.t2Name,
        avatar: this.config.t2Avatar,
        score: 0,
        streak: 0,
        maxStreak: 0,
        questions: t2Questions,
        currentIndex: 0,
        timeLeft: this.config.timePerQuestion,
        timerId: null,
        isLocked: false,
        finished: false,
        answersHistory: []
      };

      // Interfeysni chizish
      this.renderBattleArena();

      // Har ikki tomonda birinchi savol taymerini yoqish
      this.startQuestionTimer(1);
      this.startQuestionTimer(2);

      // Klaviatura tinglovchisini ulash
      this.bindKeyboard();

      if (window.ecoAudio && typeof window.ecoAudio.playCelebration === 'function') {
        window.ecoAudio.playClick();
      }
    },

    // 4. Split-Screen Arenani chizish
    renderBattleArena() {
      const container = document.getElementById('battle-arena-container');
      if (!container) return;

      container.innerHTML = `
        <div class="w-full select-none">
          
          <!-- Yuqori boshqaruv paneli: Pauza, Hisob va Dinamik Tug-of-War Bar -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-3xl p-3 sm:p-4 mb-4 shadow-xl backdrop-blur-md">
            
            <!-- VS va Hisob markazi -->
            <div class="flex items-center justify-between gap-3 mb-3">
              <!-- 1-Jamoa Header kartochkasi -->
              <div class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-lg shadow-emerald-500/20">
                  ${this.t1.avatar}
                </div>
                <div class="min-w-0 flex-1">
                  <div class="text-xs sm:text-sm font-black text-emerald-400 truncate">${this.t1.name}</div>
                  <div class="flex items-center gap-2">
                    <span id="t1-score-badge" class="text-lg sm:text-2xl font-black text-white font-mono">0</span>
                    <span class="text-[10px] text-slate-400 uppercase font-bold">Ball</span>
                    <span id="t1-streak-badge" class="hidden text-[10px] font-black bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 animate-pulse">🔥 0x</span>
                  </div>
                </div>
              </div>

              <!-- Markaziy Tugma & VS Badji -->
              <div class="flex flex-col items-center shrink-0 px-2 sm:px-4">
                <div class="flex items-center gap-2">
                  <button onclick="EcoBattleArena.togglePause()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs transition-colors cursor-pointer border border-slate-700" title="Pauza / Davom ettirish">
                    <i id="battle-pause-icon" class="fa-solid fa-pause"></i>
                  </button>
                  <div class="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/30 via-amber-500/30 to-rose-500/30 border border-amber-500/40 text-amber-300 font-black text-xs tracking-wider">
                    VS
                  </div>
                  <button onclick="EcoBattleArena.surrenderPrompt()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300 flex items-center justify-center text-xs transition-colors cursor-pointer border border-slate-700" title="Batlni to'xtatish">
                    <i class="fa-solid fa-flag"></i>
                  </button>
                </div>
                <span class="text-[10px] text-slate-500 font-mono mt-1">${this.config.questionCount} ta savol</span>
              </div>

              <!-- 2-Jamoa Header kartochkasi -->
              <div class="flex items-center justify-end gap-2 sm:gap-3 flex-1 min-w-0 text-right">
                <div class="min-w-0 flex-1">
                  <div class="text-xs sm:text-sm font-black text-rose-400 truncate">${this.t2.name}</div>
                  <div class="flex items-center justify-end gap-2">
                    <span id="t2-streak-badge" class="hidden text-[10px] font-black bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/30 animate-pulse">0x 🔥</span>
                    <span class="text-[10px] text-slate-400 uppercase font-bold">Ball</span>
                    <span id="t2-score-badge" class="text-lg sm:text-2xl font-black text-white font-mono">0</span>
                  </div>
                </div>
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-lg shadow-rose-500/20">
                  ${this.t2.avatar}
                </div>
              </div>
            </div>

            <!-- DINAMIK TUG-OF-WAR (Arqon tortishuv) JONLI ENERGIYA BARI -->
            <div class="relative w-full h-3 sm:h-4 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
              <div class="absolute inset-0 flex">
                <div id="battle-tug-t1" class="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 transition-all duration-500 rounded-l-full shadow-lg shadow-emerald-500/50" style="width: 50%;"></div>
                <div id="battle-tug-t2" class="h-full bg-gradient-to-l from-rose-600 via-rose-400 to-amber-300 transition-all duration-500 rounded-r-full shadow-lg shadow-rose-500/50" style="width: 50%;"></div>
              </div>
              <!-- Markaziy ajratgich igna -->
              <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white shadow-md z-10"></div>
            </div>
          </div>

          <!-- ASOSIY SPLIT-SCREEN OYNA (Chap vs O'ng) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
            
            <!-- CHAP TOMON: 1-Jamoa Paneli -->
            <div id="team1-side-panel" class="relative rounded-3xl bg-slate-900/90 border-2 border-emerald-500/40 p-4 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300">
              <div id="t1-card-content">
                <!-- Dinamik savol kartochkasi t1 -->
              </div>
            </div>

            <!-- O'NG TOMON: 2-Jamoa Paneli -->
            <div id="team2-side-panel" class="relative rounded-3xl bg-slate-900/90 border-2 border-rose-500/40 p-4 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300">
              <div id="t2-card-content">
                <!-- Dinamik savol kartochkasi t2 -->
              </div>
            </div>

          </div>

          <!-- Pastki klaviatura qo'llanmasi -->
          <div class="mt-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center flex flex-wrap items-center justify-around gap-2 text-xs text-slate-400">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span>1-Jamoa: <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-emerald-500/50 text-emerald-300 font-mono font-bold">A</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-emerald-500/50 text-emerald-300 font-mono font-bold">S</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-emerald-500/50 text-emerald-300 font-mono font-bold">D</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-emerald-500/50 text-emerald-300 font-mono font-bold">F</kbd></span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <span>2-Jamoa: <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-rose-500/50 text-rose-300 font-mono font-bold">J</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-rose-500/50 text-rose-300 font-mono font-bold">K</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-rose-500/50 text-rose-300 font-mono font-bold">L</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-800 border border-rose-500/50 text-rose-300 font-mono font-bold">;</kbd></span>
            </div>
            <div class="text-[11px] text-slate-500">
              * Telefonda/Planshetda bevosita ekrandagi variantlarni bosing
            </div>
          </div>
        </div>
      `;

      // Har ikki tomon savollarini chizish
      this.renderPlayerCard(1);
      this.renderPlayerCard(2);
    },

    // 5. Talaba / Jamoaning savol kartochkasini chizish
    renderPlayerCard(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      const targetDiv = document.getElementById(teamId === 1 ? 't1-card-content' : 't2-card-content');
      if (!targetDiv) return;

      // Agar barcha savollarni ishlab bo'lgan bo'lsa
      if (team.currentIndex >= team.questions.length) {
        team.finished = true;
        targetDiv.innerHTML = `
          <div class="py-12 text-center space-y-4">
            <div class="text-5xl animate-bounce">🏁</div>
            <h3 class="text-xl font-black text-white">Barcha savollar yakunlandi!</h3>
            <p class="text-xs text-slate-400">Raqibingiz savollarni tugatishini kuting...</p>
            <div class="inline-block px-4 py-2 rounded-2xl bg-slate-950 border border-slate-800 text-sm font-bold text-amber-400">
              To'plangan ball: <span class="text-lg font-black text-white">${team.score}</span> / ${team.questions.length * 10}
            </div>
          </div>
        `;
        this.checkMatchFinished();
        return;
      }

      const q = team.questions[team.currentIndex];
      const qNum = team.currentIndex + 1;
      const totalQ = team.questions.length;
      const keys = teamId === 1 ? ['A', 'S', 'D', 'F'] : ['J', 'K', 'L', ';'];
      const themeColor = teamId === 1 ? 'emerald' : 'rose';

      targetDiv.innerHTML = `
        <div class="space-y-4">
          <!-- Yuqori metrik: Raqam va Taymer bar -->
          <div class="flex items-center justify-between text-xs font-bold text-slate-400">
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-lg bg-${themeColor}-500/20 text-${themeColor}-400 flex items-center justify-center font-mono text-[11px] font-black border border-${themeColor}-500/40">
                ${qNum}
              </span>
              <span>/ ${totalQ}-savol</span>
              <span class="text-[10px] text-slate-500 ml-1 hidden sm:inline">(${q.category || 'Ekologiya'})</span>
            </div>

            <!-- Jonli vaqt -->
            <div class="flex items-center gap-1.5 font-mono">
              <i class="fa-solid fa-stopwatch text-${themeColor}-400"></i>
              <span id="t${teamId}-time-text" class="text-white font-black text-sm">${team.timeLeft}s</span>
            </div>
          </div>

          <!-- Vaqt chizig'i -->
          <div class="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div id="t${teamId}-time-bar" class="h-full bg-gradient-to-r from-${themeColor}-500 to-${themeColor}-400 transition-all duration-300" style="width: 100%;"></div>
          </div>

          <!-- Savol matni va (agar mavjud bo'lsa) chiqindi SVG rasmi -->
          <div class="min-h-[110px] flex flex-col justify-center bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
            ${q.svg ? `
              <div class="w-16 h-16 mx-auto mb-2 flex items-center justify-center bg-slate-900 rounded-xl p-1 border border-slate-700/80 shadow-md">
                ${q.svg}
              </div>
            ` : ''}
            <h4 class="text-sm sm:text-base font-bold text-white text-center leading-snug">
              ${q.question}
            </h4>
          </div>

          <!-- 4 ta Javob Varianti -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            ${q.options.map((opt, oIdx) => `
              <button 
                type="button"
                id="t${teamId}-opt-${oIdx}"
                onclick="EcoBattleArena.submitAnswer(${teamId}, ${oIdx})"
                class="t${teamId}-choice-btn relative w-full text-left p-3 rounded-2xl bg-slate-950/90 hover:bg-slate-800/90 border border-slate-800 hover:border-${themeColor}-500/70 transition-all duration-200 flex items-center gap-2.5 group cursor-pointer active:scale-98">
                
                <span class="w-7 h-7 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-${themeColor}-400 text-slate-300 group-hover:text-white flex items-center justify-center font-mono text-xs font-black shrink-0 transition-colors">
                  ${keys[oIdx]}
                </span>

                <span class="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white flex-1 leading-tight">
                  ${opt}
                </span>

                <span id="t${teamId}-check-${oIdx}" class="text-xs font-black hidden"></span>
              </button>
            `).join('')}
          </div>

          <!-- Izoh / Feedback qutisi (faqat javob berilgandan so'ng 1.2 soniya ko'rinadi) -->
          <div id="t${teamId}-feedback-box" class="hidden min-h-[36px] rounded-xl p-2.5 text-xs text-center font-semibold transition-all"></div>
        </div>
      `;
    },

    // 6. Taymerni boshqarish
    startQuestionTimer(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      if (team.timerId) clearInterval(team.timerId);

      team.timeLeft = this.config.timePerQuestion;
      team.isLocked = false;

      this.updateTimerUI(teamId);

      team.timerId = setInterval(() => {
        if (this.paused) return;

        team.timeLeft--;
        this.updateTimerUI(teamId);

        if (team.timeLeft <= 0) {
          clearInterval(team.timerId);
          team.timerId = null;
          this.handleTimeout(teamId);
        }
      }, 1000);
    },

    updateTimerUI(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      const timeText = document.getElementById(`t${teamId}-time-text`);
      const timeBar = document.getElementById(`t${teamId}-time-bar`);

      if (timeText) {
        timeText.textContent = `${team.timeLeft}s`;
        if (team.timeLeft <= 3) {
          timeText.classList.add('text-rose-400', 'animate-pulse');
        } else {
          timeText.classList.remove('text-rose-400', 'animate-pulse');
        }
      }

      if (timeBar) {
        const pct = Math.max(0, Math.min(100, (team.timeLeft / this.config.timePerQuestion) * 100));
        timeBar.style.width = `${pct}%`;
      }
    },

    handleTimeout(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      if (team.isLocked || team.finished) return;

      team.isLocked = true;
      team.streak = 0;
      this.updateStreakUI(teamId);

      const q = team.questions[team.currentIndex];
      team.answersHistory.push({
        question: q.question,
        selected: -1, // Vaqt tugadi
        correct: q.correct,
        isCorrect: false
      });

      // To'g'ri variantni ko'rsatish
      const correctBtn = document.getElementById(`t${teamId}-opt-${q.correct}`);
      if (correctBtn) {
        correctBtn.classList.remove('bg-slate-950/90', 'border-slate-800');
        correctBtn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-white');
      }

      const feedback = document.getElementById(`t${teamId}-feedback-box`);
      if (feedback) {
        feedback.className = "min-h-[36px] rounded-xl p-2.5 text-xs text-center font-bold bg-rose-950/60 border border-rose-500/40 text-rose-300 block animate-shake";
        feedback.innerHTML = `⏰ Vaqt tugadi! To'g'ri javob: <b>${q.options[q.correct]}</b>`;
      }

      // Tug of war: Raqib tomonga siljiydi
      this.shiftTugOfWar(teamId === 1 ? -3 : 3);

      setTimeout(() => {
        this.nextQuestion(teamId);
      }, 1200);
    },

    // 7. Javobni qabul qilish (Mustaqil)
    submitAnswer(teamId, optionIndex) {
      const team = teamId === 1 ? this.t1 : this.t2;
      if (team.isLocked || team.finished || this.paused) return;

      team.isLocked = true;
      if (team.timerId) {
        clearInterval(team.timerId);
        team.timerId = null;
      }

      const q = team.questions[team.currentIndex];
      const isCorrect = optionIndex === q.correct;

      // Tugmalarni belgilash
      const clickedBtn = document.getElementById(`t${teamId}-opt-${optionIndex}`);
      const correctBtn = document.getElementById(`t${teamId}-opt-${q.correct}`);
      const checkSpan = document.getElementById(`t${teamId}-check-${optionIndex}`);

      team.answersHistory.push({
        question: q.question,
        selected: optionIndex,
        correct: q.correct,
        isCorrect: isCorrect
      });

      const sidePanel = document.getElementById(teamId === 1 ? 'team1-side-panel' : 'team2-side-panel');

      if (isCorrect) {
        // To'g'ri javob!
        team.score += 10;
        team.streak += 1;
        if (team.streak > team.maxStreak) team.maxStreak = team.streak;

        // Bonus ball (Streak 3+ bo'lsa)
        if (team.streak >= 3) {
          team.score += 2;
        }

        if (clickedBtn) {
          clickedBtn.classList.remove('bg-slate-950/90', 'border-slate-800');
          clickedBtn.classList.add('bg-emerald-500/30', 'border-emerald-400', 'text-white', 'shadow-lg', 'shadow-emerald-500/30');
        }
        if (checkSpan) {
          checkSpan.innerHTML = '✅';
          checkSpan.classList.remove('hidden');
        }

        // Mushak / Paqldoq effekti
        if (window.EcoFxEngine && typeof window.EcoFxEngine.triggerPaqldoq === 'function') {
          window.EcoFxEngine.triggerPaqldoq();
        }
        if (window.ecoAudio && typeof window.ecoAudio.playCorrect === 'function') {
          window.ecoAudio.playCorrect();
        }

        // Tug of War: o'z tomoniga 6% tortadi
        this.shiftTugOfWar(teamId === 1 ? 6 : -6);

      } else {
        // Noto'g'ri javob!
        team.streak = 0;

        if (clickedBtn) {
          clickedBtn.classList.remove('bg-slate-950/90', 'border-slate-800');
          clickedBtn.classList.add('bg-rose-500/30', 'border-rose-500', 'text-white');
        }
        if (checkSpan) {
          checkSpan.innerHTML = '❌';
          checkSpan.classList.remove('hidden');
        }

        // To'g'ri javobni ham yashil qilib ko'rsatamiz
        if (correctBtn) {
          correctBtn.classList.add('bg-emerald-500/20', 'border-emerald-500/80');
        }

        // Seysmik silkintirish
        if (sidePanel) {
          sidePanel.classList.add('animate-shake');
          setTimeout(() => sidePanel.classList.remove('animate-shake'), 600);
        }

        if (window.ecoAudio && typeof window.ecoAudio.playWrong === 'function') {
          window.ecoAudio.playWrong();
        }

        // Tug of War: raqibga 4% suriladi
        this.shiftTugOfWar(teamId === 1 ? -4 : 4);
      }

      this.updateScoreUI(teamId);
      this.updateStreakUI(teamId);

      // Izoh chiqarish
      const feedback = document.getElementById(`t${teamId}-feedback-box`);
      if (feedback) {
        feedback.className = `min-h-[36px] rounded-xl p-2.5 text-xs text-center font-bold ${isCorrect ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300' : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'} block`;
        feedback.innerHTML = isCorrect ? `🎉 To'g'ri! ${q.explanation || ''}` : `⚠️ Noto'g'ri! To'g'ri: ${q.options[q.correct]}`;
      }

      // 1.1 soniyadan keyin keyingi savolga o'tish (ikkinchi o'yinchini kutmaydi!)
      setTimeout(() => {
        this.nextQuestion(teamId);
      }, 1100);
    },

    // 8. Keyingi savolga o'tish
    nextQuestion(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      team.currentIndex++;
      this.renderPlayerCard(teamId);

      if (team.currentIndex < team.questions.length) {
        this.startQuestionTimer(teamId);
      }
    },

    // Tug-of-War boshqaruvi
    shiftTugOfWar(delta) {
      this.tugOfWarPercent = Math.max(10, Math.min(90, this.tugOfWarPercent + delta));
      const bar1 = document.getElementById('battle-tug-t1');
      const bar2 = document.getElementById('battle-tug-t2');
      if (bar1 && bar2) {
        bar1.style.width = `${this.tugOfWarPercent}%`;
        bar2.style.width = `${100 - this.tugOfWarPercent}%`;
      }
    },

    updateScoreUI(teamId) {
      const badge = document.getElementById(`t${teamId}-score-badge`);
      const team = teamId === 1 ? this.t1 : this.t2;
      if (badge) {
        badge.textContent = team.score;
        badge.classList.add('scale-125', 'text-amber-400');
        setTimeout(() => badge.classList.remove('scale-125', 'text-amber-400'), 300);
      }
    },

    updateStreakUI(teamId) {
      const badge = document.getElementById(`t${teamId}-streak-badge`);
      const team = teamId === 1 ? this.t1 : this.t2;
      if (badge) {
        if (team.streak >= 2) {
          badge.textContent = `🔥 ${team.streak}x`;
          badge.classList.remove('hidden');
        } else {
          badge.classList.add('hidden');
        }
      }
    },

    // 9. Klaviatura orqali boshqaruv
    bindKeyboard() {
      if (this.keyListenerBound) return;
      this._handleKeyDown = this.handleKeyDown.bind(this);
      window.addEventListener('keydown', this._handleKeyDown);
      this.keyListenerBound = true;
    },

    unbindKeyboard() {
      if (this.keyListenerBound && this._handleKeyDown) {
        window.removeEventListener('keydown', this._handleKeyDown);
        this.keyListenerBound = false;
      }
    },

    handleKeyDown(e) {
      if (!this.active || this.paused) return;
      // Matn yozilayotgan bo'lsa e'tibor bermaymiz
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const k = e.key.toLowerCase();

      // 1-Jamoa klavishlari (A, S, D, F yoki 1, 2, 3, 4)
      if (k === 'a' || k === '1') { this.submitAnswer(1, 0); }
      else if (k === 's' || k === '2') { this.submitAnswer(1, 1); }
      else if (k === 'd' || k === '3') { this.submitAnswer(1, 2); }
      else if (k === 'f' || k === '4') { this.submitAnswer(1, 3); }

      // 2-Jamoa klavishlari (J, K, L, ; yoki 7, 8, 9, 0)
      else if (k === 'j' || k === '7') { this.submitAnswer(2, 0); }
      else if (k === 'k' || k === '8') { this.submitAnswer(2, 1); }
      else if (k === 'l' || k === '9') { this.submitAnswer(2, 2); }
      else if (k === ';' || k === '0' || k === 'p') { this.submitAnswer(2, 3); }
    },

    // 10. Pauza funksiyasi
    togglePause() {
      this.paused = !this.paused;
      const icon = document.getElementById('battle-pause-icon');
      if (icon) {
        icon.className = this.paused ? 'fa-solid fa-play text-emerald-400' : 'fa-solid fa-pause';
      }
      if (window.ecoAudio) window.ecoAudio.playClick();
    },

    surrenderPrompt() {
      if (confirm("Haqiqatan ham batlni to'xtatib, bosh menyuga qaytmoqchimisiz?")) {
        this.clearTimers();
        this.renderSetup();
      }
    },

    clearTimers() {
      if (this.t1.timerId) { clearInterval(this.t1.timerId); this.t1.timerId = null; }
      if (this.t2.timerId) { clearInterval(this.t2.timerId); this.t2.timerId = null; }
    },

    // 11. Ikkala jamoa ham tugatganini tekshirish
    checkMatchFinished() {
      if (this.t1.finished && this.t2.finished) {
        this.clearTimers();
        this.unbindKeyboard();
        setTimeout(() => {
          this.renderVictoryResults();
        }, 1200);
      }
    },

    // 12. G'OLIBLIK VA YAKUNIY NATIJALAR EKRANI (Epic Results Ceremony)
    renderVictoryResults() {
      const container = document.getElementById('battle-arena-container');
      if (!container) return;

      const t1Wins = this.t1.score > this.t2.score;
      const t2Wins = this.t2.score > this.t1.score;
      const isDraw = this.t1.score === this.t2.score;

      let winnerTitle = "";
      let winnerName = "";
      let winnerAvatar = "🏆";

      if (isDraw) {
        winnerTitle = "🤝 DO'STLIK G'ALABA QOZONDI!";
        winnerName = "Ikkala jamoa teng natija ko'rsatdi";
      } else if (t1Wins) {
        winnerTitle = "🏆 G'OLIB: 1-ISHTIROKCHI!";
        winnerName = this.t1.name;
        winnerAvatar = this.t1.avatar;
      } else {
        winnerTitle = "🏆 G'OLIB: 2-ISHTIROKCHI!";
        winnerName = this.t2.name;
        winnerAvatar = this.t2.avatar;
      }

      // Mushak otish
      if (window.EcoFxEngine && typeof window.EcoFxEngine.triggerPaqldoq === 'function') {
        window.EcoFxEngine.triggerPaqldoq();
        setTimeout(() => window.EcoFxEngine.triggerPaqldoq(), 800);
      }

      if (window.ecoAudio && typeof window.ecoAudio.playCelebration === 'function') {
        window.ecoAudio.playCelebration();
      }

      const t1CorrectCount = this.t1.answersHistory.filter(h => h.isCorrect).length;
      const t2CorrectCount = this.t2.answersHistory.filter(h => h.isCorrect).length;

      const t1Accuracy = Math.round((t1CorrectCount / this.config.questionCount) * 100);
      const t2Accuracy = Math.round((t2CorrectCount / this.config.questionCount) * 100);

      container.innerHTML = `
        <div class="max-w-4xl mx-auto py-6 animate-scale-in">
          
          <!-- Victory Podium Banner -->
          <div class="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/80 border-2 border-amber-500/50 p-6 sm:p-10 text-center shadow-2xl mb-8">
            <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10">
              <div class="text-6xl sm:text-7xl mb-3 animate-bounce">
                ${winnerAvatar}
              </div>
              <span class="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-widest inline-block mb-3">
                ${winnerTitle}
              </span>
              <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                ${winnerName}
              </h2>
              <p class="text-sm text-slate-300 max-w-md mx-auto">
                Shiddatli ekologik bilimlar bellashuvi muvaffaqiyatli yakunlandi!
              </p>
            </div>
          </div>

          <!-- Head-to-Head Tafsilotlar Jadvali -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            <!-- 1-Jamoa Natijalari -->
            <div class="rounded-3xl bg-slate-900/90 border-2 ${t1Wins ? 'border-amber-400 bg-amber-950/20 shadow-amber-500/10' : 'border-emerald-500/40'} p-6 shadow-xl relative">
              ${t1Wins ? '<span class="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase shadow-md">👑 Chempion</span>' : ''}
              
              <div class="flex items-center gap-3 mb-6">
                <div class="text-3xl">${this.t1.avatar}</div>
                <div>
                  <h4 class="text-base font-black text-white">${this.t1.name}</h4>
                  <span class="text-xs text-emerald-400 font-bold">1-Ishtirokchi</span>
                </div>
              </div>

              <div class="space-y-3 font-mono">
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">Yakuniy Ball:</span>
                  <span class="text-xl font-black text-emerald-400">${this.t1.score} ball</span>
                </div>
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">To'g'ri / Umumiy:</span>
                  <span class="text-sm font-bold text-white">${t1CorrectCount} / ${this.config.questionCount} (${t1Accuracy}%)</span>
                </div>
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">Eng yaxshi streak (ketma-ket):</span>
                  <span class="text-sm font-bold text-amber-400">🔥 ${this.t1.maxStreak}x</span>
                </div>
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">Olingan XP:</span>
                  <span class="text-sm font-bold text-cyan-400">+${this.t1.score * 5} XP</span>
                </div>
              </div>
            </div>

            <!-- 2-Jamoa Natijalari -->
            <div class="rounded-3xl bg-slate-900/90 border-2 ${t2Wins ? 'border-amber-400 bg-amber-950/20 shadow-amber-500/10' : 'border-rose-500/40'} p-6 shadow-xl relative">
              ${t2Wins ? '<span class="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase shadow-md">👑 Chempion</span>' : ''}

              <div class="flex items-center gap-3 mb-6">
                <div class="text-3xl">${this.t2.avatar}</div>
                <div>
                  <h4 class="text-base font-black text-white">${this.t2.name}</h4>
                  <span class="text-xs text-rose-400 font-bold">2-Ishtirokchi</span>
                </div>
              </div>

              <div class="space-y-3 font-mono">
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">Yakuniy Ball:</span>
                  <span class="text-xl font-black text-rose-400">${this.t2.score} ball</span>
                </div>
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">To'g'ri / Umumiy:</span>
                  <span class="text-sm font-bold text-white">${t2CorrectCount} / ${this.config.questionCount} (${t2Accuracy}%)</span>
                </div>
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">Eng yaxshi streak (ketma-ket):</span>
                  <span class="text-sm font-bold text-amber-400">🔥 ${this.t2.maxStreak}x</span>
                </div>
                <div class="flex justify-between items-center p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <span class="text-xs text-slate-400">Olingan XP:</span>
                  <span class="text-sm font-bold text-cyan-400">+${this.t2.score * 5} XP</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Harakat tugmalari -->
          <div class="flex flex-wrap items-center justify-center gap-4">
            <button onclick="EcoBattleArena.startBattle()" class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-sm tracking-wide shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
              <i class="fa-solid fa-rotate-right"></i> Qayta Bellashuv (Revansh)
            </button>
            <button onclick="EcoBattleArena.renderSetup()" class="px-8 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
              <i class="fa-solid fa-users-gear text-amber-400"></i> Yangi Jamoalar Sozlamasi
            </button>
          </div>

        </div>
      `;
    }
  };

  // Global obyektga eksport qilish
  window.EcoBattleArena = EcoBattleArena;

})();
