/**
 * ============================================================================
 * EKO-BATL ARENA (1v1 TALABALAR / JAMOALAR JONLI BELLASHUVI)
 * ============================================================================
 * Muallif: Asoschi Akobir | EcoAkobir Platformasi
 * 
 * Imkoniyatlar:
 * 1. ⚡ 1v1 TEZKOR CHIQINDI KONVEYERI (4 TALIK POYGA):
 *    - 200 ta to'liq chiqindi bazasidan har ikki talabaga bir vaqtda konveyer lentasi oqadi.
 *    - Har bir chiqindi o'zining individual SVG rasmi, nomi va qiyinlik darajasi bilan chiqadi.
 *    - 4 talik toifa variantlari:
 *      1-O'yinchi (Chap): A / S / D / F tugmalari yoki sensor ekranda chap tomon tugmalari.
 *      2-O'yinchi (O'ng): J / K / L / ; tugmalari yoki sensor ekranda o'ng tomon tugmalari.
 * 2. 🧠 1v1 AKADEMIK EKO-TEST DUELI (Modullar & Audit):
 *    - Nazariy testlar va ekologik audit savollari bo'yicha dueli.
 * 3. REAL VAQT REJIMI:
 *    - Ikkala talaba bir-birini kutmaydi, o'z tezligida konveyerni saralaydi!
 *    - O'rtada dinamik Tug-of-War (Arqon tortishuv) energiya bari.
 *    - Combo multiplikatori (x2, x3 🔥, x5 ⚡) va Paqldoq/Mushak effektlari.
 *    - Yakuniy hisobotda g'olib taqdirlanadi va xatolar qoidalari bilan ko'rsatiladi.
 */

(function () {
  'use strict';

  // Konveyer va Batl CSS stillari
  (function injectBattleStyles() {
    if (document.getElementById('eco-battle-arena-styles')) return;
    const s = document.createElement('style');
    s.id = 'eco-battle-arena-styles';
    s.textContent = `
      @keyframes conveyorStripeAnim {
        0% { background-position: 0 0; }
        100% { background-position: 48px 0; }
      }
      .conveyor-belt-track {
        background: repeating-linear-gradient(
          -45deg,
          #0f172a,
          #0f172a 12px,
          #1e293b 12px,
          #1e293b 24px
        );
        background-size: 48px 48px;
        animation: conveyorStripeAnim 1.2s linear infinite;
      }
      @keyframes wasteFloatAnim {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-4px) scale(1.02); }
      }
      .waste-conveyor-float {
        animation: wasteFloatAnim 2s ease-in-out infinite;
      }
      .battle-option-btn:active {
        transform: scale(0.96);
      }
      .battle-glow-team1 {
        box-shadow: 0 0 25px rgba(16, 185, 129, 0.35);
      }
      .battle-glow-team2 {
        box-shadow: 0 0 25px rgba(244, 63, 94, 0.35);
      }

      /* Taktil 1-2 gradus egilgan kartalar uslubi */
      .tilted-card {
        transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.2s ease;
        will-change: transform;
      }
      .tilted-card-1 { transform: rotate(-1.3deg); }
      .tilted-card-2 { transform: rotate(1.2deg); }
      .tilted-card-3 { transform: rotate(-1.5deg); }
      .tilted-card-4 { transform: rotate(1.4deg); }
      .tilted-card-5 { transform: rotate(-1.1deg); }
      .tilted-card-6 { transform: rotate(1.5deg); }

      .tilted-card:hover {
        transform: rotate(0deg) translateY(-8px) scale(1.025) !important;
        box-shadow: 0 22px 35px -8px rgba(0, 0, 0, 0.7), 0 0 20px 2px rgba(16, 185, 129, 0.25) !important;
        z-index: 10;
      }

      /* Jismoniy stiker yorliq */
      .eco-sticker-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 9px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transform: rotate(-5deg);
        box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.45);
        border: 1px dashed rgba(255, 255, 255, 0.3);
      }

      /* Taktil bounce tugma */
      .eco-tactile-btn {
        transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
      }
      .eco-tactile-btn:active {
        transform: scale(0.94) !important;
      }

      /* Orqa fonda asta suzuvchi zarrachalar */
      @keyframes ambientFloat {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0.25; }
        50% { transform: translateY(-25px) translateX(15px); opacity: 0.5; }
      }
      .arena-ambient-particle {
        position: absolute;
        pointer-events: none;
        user-select: none;
        animation: ambientFloat 6s ease-in-out infinite;
        will-change: transform, opacity;
      }

      /* Accessibility: Reduced Motion */
      @media (prefers-reduced-motion: reduce) {
        .tilted-card, .tilted-card:hover, .eco-tactile-btn, .arena-ambient-particle, .waste-conveyor-float, .conveyor-belt-track {
          animation: none !important;
          transform: none !important;
          transition: none !important;
        }
      }
    `;
    document.head.appendChild(s);
  })();

  const CATEGORY_MAP = {
    'plastik': { name: "Plastik", icon: "🧴", color: "amber" },
    'qogoz': { name: "Qog'oz & Karton", icon: "📦", color: "blue" },
    'shisha': { name: "Shisha idish", icon: "🍾", color: "emerald" },
    'metall': { name: "Metall quti", icon: "🥫", color: "cyan" },
    'organik': { name: "Organik chiqindi", icon: "🍌", color: "yellow" },
    'xavfli': { name: "Xavfli chiqindi", icon: "🔋", color: "rose" },
    'elektronika': { name: "Elektronika (E-waste)", icon: "📱", color: "purple" },
    'tekstil': { name: "Tekstil / Kiyim", icon: "👕", color: "pink" },
    'utilizatsiya': { name: "Utilizatsiya", icon: "🗑️", color: "slate" },
    'u': { name: "Utilizatsiya", icon: "🗑️", color: "slate" }
  };

  const EcoBattleArena = {
    config: {
      battleMode: 'conveyor', // 'conveyor' (4 talik Konveyer) yoki 'quiz' (Akademik Test)
      questionCount: 15, // 10, 15, 20, 25
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
    tugOfWarPercent: 50,

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

    keyHandler: null,

    init() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;
      this.renderSetup(container);
    },

    // 1. Sozlamalar va Jamoalar Nomini Tanlash Ekrani
    renderSetup(container) {
      this.unbindKeyboard();
      this.active = false;
      this.paused = false;

      const target = container || document.getElementById('battle-arena-container');
      if (!target) return;

      target.innerHTML = `
        <div class="bg-slate-900 border border-emerald-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl relative select-none overflow-hidden">
          
          <!-- Ambient drifting micro particles -->
          <span class="arena-ambient-particle text-emerald-400/30 text-xl" style="top: 15%; left: 8%;">🍃</span>
          <span class="arena-ambient-particle text-amber-400/25 text-lg" style="top: 45%; right: 10%; animation-delay: 2s;">🍂</span>
          <span class="arena-ambient-particle text-cyan-400/30 text-xl" style="bottom: 20%; left: 14%; animation-delay: 3.5s;">💧</span>
          <span class="arena-ambient-particle text-rose-400/25 text-lg" style="bottom: 30%; right: 18%; animation-delay: 1.2s;">✨</span>
          
          <!-- Banner -->
          <div class="text-center max-w-2xl mx-auto mb-7">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-rose-500/20 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-wider mb-3 shadow-lg">
              <i class="fa-solid fa-swords text-amber-400 animate-pulse"></i> 1v1 Talabalar va Jamoalar Jonli Bellashuvi
            </div>
            <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Eko-Batl Bellashuv Arenasi
            </h2>
            <p class="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Bitta ekranda 2 nafar talaba yoki 2 ta jamoa bir vaqtning o'zida jonli bellashadi! Savollar har ikki tomonga mustaqil va tasodifiy tushadi.
            </p>
          </div>

          <!-- JANG REJIMINI TANLASH (6 TA TAKTIL REJIM!) -->
          <div class="max-w-5xl mx-auto mb-7">
            <div class="flex items-center justify-between mb-3 px-1">
              <span class="text-xs font-black uppercase text-slate-300 tracking-wider flex items-center gap-2">
                <i class="fa-solid fa-gamepad text-emerald-400"></i> Jang Rejimini Tanlang (6 xil bellashuv):
              </span>
              <span class="text-[10px] text-slate-500 font-bold hidden sm:inline">
                * Har bir rejim o'ziga xos mexanika va ranglariga ega
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <!-- 1. Konveyer Poygasi -->
              <div 
                onclick="EcoBattleArena.setBattleMode('conveyor', this)" 
                class="tilted-card tilted-card-1 border-2 ${this.config.battleMode === 'conveyor' ? 'border-amber-400 bg-amber-950/50 ring-4 ring-amber-500/30' : 'border-slate-800 bg-slate-950/70 hover:border-amber-500/60'} rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl border border-amber-500/40 group-hover:scale-110 transition-transform">
                      ⚡
                    </div>
                    <span class="eco-sticker-badge bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950">
                      Tavsiya
                    </span>
                  </div>
                  <h4 class="text-sm font-black text-white group-hover:text-amber-300 transition-colors">1. Chiqindi Konveyeri</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    200 ta SVG chiqindidan doimiy oqim. 4 talik toifalar poygasi (A/S/D/F vs J/K/L/;).
                  </p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold text-amber-400/90">
                  <span>⚡ 4-talik Tezkor Poyga</span>
                  <span class="text-slate-500">200 Ta Baza</span>
                </div>
              </div>

              <!-- 2. Akademik Eko-Duel -->
              <div 
                onclick="EcoBattleArena.setBattleMode('quiz', this)" 
                class="tilted-card tilted-card-2 border-2 ${this.config.battleMode === 'quiz' ? 'border-cyan-400 bg-cyan-950/50 ring-4 ring-cyan-500/30' : 'border-slate-800 bg-slate-950/70 hover:border-cyan-500/60'} rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl border border-cyan-500/40 group-hover:scale-110 transition-transform">
                      🧠
                    </div>
                    <span class="eco-sticker-badge bg-gradient-to-r from-cyan-500 to-sky-400 text-slate-950">
                      Bilim
                    </span>
                  </div>
                  <h4 class="text-sm font-black text-white group-hover:text-cyan-300 transition-colors">2. Akademik Eko-Duel</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    ISO 14001, sanoat auditi va ekologik ekspertiza testlari bo'yicha intellektual bellashuv.
                  </p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold text-cyan-400/90">
                  <span>🎓 Nazariya & Audit</span>
                  <span class="text-slate-500">ISO 14001</span>
                </div>
              </div>

              <!-- 3. Toza Arqon (Tug-of-War) -->
              <div 
                onclick="EcoBattleArena.setBattleMode('tug_of_war', this)" 
                class="tilted-card tilted-card-3 border-2 ${this.config.battleMode === 'tug_of_war' ? 'border-emerald-400 bg-emerald-950/50 ring-4 ring-emerald-500/30' : 'border-slate-800 bg-slate-950/70 hover:border-emerald-500/60'} rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/40 group-hover:scale-110 transition-transform">
                      🪢
                    </div>
                    <span class="eco-sticker-badge bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950">
                      Jang
                    </span>
                  </div>
                  <h4 class="text-sm font-black text-white group-hover:text-emerald-300 transition-colors">3. Toza Arqon</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    To'g'ri javob chegarani raqibga suradi! Oxirgi 10 soniyada zarba kuchi 2x kuchayadi.
                  </p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold text-emerald-400/90">
                  <span>🔥 Chegara Itarish</span>
                  <span class="text-slate-500">2x Super-Kuch</span>
                </div>
              </div>

              <!-- 4. Yashil Xarita (Territory 5x5) -->
              <div 
                onclick="EcoBattleArena.setBattleMode('green_map', this)" 
                class="tilted-card tilted-card-4 border-2 ${this.config.battleMode === 'green_map' ? 'border-lime-400 bg-lime-950/50 ring-4 ring-lime-500/30' : 'border-slate-800 bg-slate-950/70 hover:border-lime-500/60'} rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-11 h-11 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center text-2xl border border-lime-500/40 group-hover:scale-110 transition-transform">
                      🗺️
                    </div>
                    <span class="eco-sticker-badge bg-gradient-to-r from-lime-500 to-emerald-400 text-slate-950">
                      Strategiya
                    </span>
                  </div>
                  <h4 class="text-sm font-black text-white group-hover:text-lime-300 transition-colors">4. Yashil Xarita (5x5)</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    5x5 maydonda Daraxt ekish va Zavod qurish jangi. Qatorlarni to'ldirib combo oling!
                  </p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold text-lime-400/90">
                  <span>🌲 Daraxt vs 🏭 Zavod</span>
                  <span class="text-slate-500">Combo Bonus</span>
                </div>
              </div>

              <!-- 5. Oziq Zanjiri (Food Chain) -->
              <div 
                onclick="EcoBattleArena.setBattleMode('food_chain', this)" 
                class="tilted-card tilted-card-5 border-2 ${this.config.battleMode === 'food_chain' ? 'border-purple-400 bg-purple-950/50 ring-4 ring-purple-500/30' : 'border-slate-800 bg-slate-950/70 hover:border-purple-500/60'} rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl border border-purple-500/40 group-hover:scale-110 transition-transform">
                      🦅
                    </div>
                    <span class="eco-sticker-badge bg-gradient-to-r from-purple-500 to-pink-400 text-slate-950">
                      Ekotizim
                    </span>
                  </div>
                  <h4 class="text-sm font-black text-white group-hover:text-purple-300 transition-colors">5. Oziq Zanjiri</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    Trofik pog'onalarni ulab zanjir hosil qiling. Qopqon plastik va zaharli kartalardan ehtiyot bo'ling!
                  </p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold text-purple-400/90">
                  <span>🔗 Rishta Chiziqlari</span>
                  <span class="text-slate-500">Trofik Pog'ona</span>
                </div>
              </div>

              <!-- 6. Ifloslantiruvchini Top (Spot Polluter) -->
              <div 
                onclick="EcoBattleArena.setBattleMode('spot_polluter', this)" 
                class="tilted-card tilted-card-6 border-2 ${this.config.battleMode === 'spot_polluter' ? 'border-yellow-400 bg-yellow-950/50 ring-4 ring-yellow-500/30' : 'border-slate-800 bg-slate-950/70 hover:border-yellow-500/60'} rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-11 h-11 rounded-xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-2xl border border-yellow-500/40 group-hover:scale-110 transition-transform">
                      🔦
                    </div>
                    <span class="eco-sticker-badge bg-gradient-to-r from-yellow-500 to-amber-400 text-slate-950">
                      Detektiv
                    </span>
                  </div>
                  <h4 class="text-sm font-black text-white group-hover:text-yellow-300 transition-colors">6. Ifloslantiruvchini Top</h4>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    Qorong'i xaritada fonar nuri bilan 5 ta yashirin buzilishni toping. Adashish 3 soniya qotiradi!
                  </p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold text-yellow-400/90">
                  <span>🔦 Fonar Nuri</span>
                  <span class="text-slate-500">3s Freeze</span>
                </div>
              </div>

            </div>
          </div>

          <!-- Jamoalar Sozlamalari (Split Card) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-7">
            
            <!-- 1-Jamoa (Chap / Zumrad) -->
            <div class="p-5 rounded-2xl bg-slate-950/80 border-2 border-emerald-500/40 relative shadow-xl">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-black uppercase text-emerald-400 tracking-wider flex items-center gap-2">
                  <i class="fa-solid fa-shield-halved"></i> 1-Talaba / 1-Jamoa
                </span>
                <span class="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  Chap Tomon
                </span>
              </div>

              <!-- Jamoa Nomi -->
              <div class="mb-4">
                <label class="block text-xs font-bold text-slate-300 mb-1">Talaba / Jamoa Nomi:</label>
                <input 
                  type="text" 
                  id="t1-name-input" 
                  value="${this.config.t1Name}" 
                  placeholder="Masalan: Jasur yoki 1-Jamoa"
                  class="w-full bg-slate-900 border border-slate-700 focus:border-emerald-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              <!-- Avatar Tanlash -->
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">Avatar Tanlang:</label>
                <div class="grid grid-cols-6 gap-2">
                  ${['🛡️', '🦁', '🦅', '⚡', '🐺', '🚀'].map(av => `
                    <button 
                      type="button"
                      onclick="EcoBattleArena.selectAvatar(1, '${av}', this)" 
                      class="t1-av-btn py-2 text-2xl rounded-xl border ${this.config.t1Avatar === av ? 'border-emerald-400 bg-emerald-500/20 scale-105' : 'border-slate-800 bg-slate-950/60 hover:border-emerald-400'} transition-all cursor-pointer"
                    >${av}</button>
                  `).join('')}
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Klaviatura boshqaruvi:</span>
                <span class="font-mono text-emerald-400 font-black bg-slate-900 px-2 py-0.5 rounded border border-emerald-500/40">
                  A • S • D • F
                </span>
              </div>
            </div>

            <!-- 2-Jamoa (O'ng / Yoqut) -->
            <div class="p-5 rounded-2xl bg-slate-950/80 border-2 border-rose-500/40 relative shadow-xl">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-black uppercase text-rose-400 tracking-wider flex items-center gap-2">
                  <i class="fa-solid fa-swords"></i> 2-Talaba / 2-Jamoa
                </span>
                <span class="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-bold">
                  O'ng Tomon
                </span>
              </div>

              <!-- Jamoa Nomi -->
              <div class="mb-4">
                <label class="block text-xs font-bold text-slate-300 mb-1">Talaba / Jamoa Nomi:</label>
                <input 
                  type="text" 
                  id="t2-name-input" 
                  value="${this.config.t2Name}" 
                  placeholder="Masalan: Akobir yoki 2-Jamoa"
                  class="w-full bg-slate-900 border border-slate-700 focus:border-rose-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              <!-- Avatar Tanlash -->
              <div>
                <label class="block text-xs font-bold text-slate-300 mb-1.5">Avatar Tanlang:</label>
                <div class="grid grid-cols-6 gap-2">
                  ${['🔥', '👑', '🐅', '💎', '⚔️', '💥'].map(av => `
                    <button 
                      type="button"
                      onclick="EcoBattleArena.selectAvatar(2, '${av}', this)" 
                      class="t2-av-btn py-2 text-2xl rounded-xl border ${this.config.t2Avatar === av ? 'border-rose-400 bg-rose-500/20 scale-105' : 'border-slate-800 bg-slate-950/60 hover:border-rose-400'} transition-all cursor-pointer"
                    >${av}</button>
                  `).join('')}
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Klaviatura boshqaruvi:</span>
                <span class="font-mono text-rose-400 font-black bg-slate-900 px-2 py-0.5 rounded border border-rose-500/40">
                  J • K • L • ;
                </span>
              </div>
            </div>

          </div>

          <!-- Raqamli Parametrlar: Savollar soni va Vaqt -->
          <div class="max-w-4xl mx-auto p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-wrap items-center justify-around gap-4 mb-7 text-xs">
            <div class="flex items-center gap-3">
              <span class="font-bold text-slate-300">Chiqindilar / Savollar soni:</span>
              <div class="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
                ${[10, 15, 20, 25].map(cnt => `
                  <button 
                    type="button"
                    onclick="EcoBattleArena.setQuestionCount(${cnt}, this)" 
                    class="q-count-btn px-3 py-1.5 rounded-lg font-black transition-all cursor-pointer ${this.config.questionCount === cnt ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}"
                  >${cnt} ta</button>
                `).join('')}
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span class="font-bold text-slate-300">Har biriga vaqt:</span>
              <div class="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
                ${[
                  { val: 8, label: "8s (Tezkor)" },
                  { val: 12, label: "12s (Standart)" },
                  { val: 15, label: "15s (Erkin)" },
                  { val: 0, label: "Cheksiz" }
                ].map(tm => `
                  <button 
                    type="button"
                    onclick="EcoBattleArena.setTimePerQuestion(${tm.val}, this)" 
                    class="q-time-btn px-3 py-1.5 rounded-lg font-black transition-all cursor-pointer ${this.config.timePerQuestion === tm.val ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}"
                  >${tm.label}</button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Boshlash Tugmasi -->
          <div class="text-center pt-2">
            <button 
              type="button"
              onclick="EcoBattleArena.startBattleFromSetup()" 
              class="px-8 sm:px-14 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-rose-600 hover:from-emerald-400 hover:via-teal-400 hover:to-rose-500 text-white font-black text-lg tracking-wide shadow-2xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
            >
              <i class="fa-solid fa-bolt-lightning text-xl animate-pulse"></i>
              <span>BATLNI BOSHLASH!</span>
              <i class="fa-solid fa-swords text-xl"></i>
            </button>
            <p class="text-xs text-slate-500 mt-3 font-medium">
              Ekranda bir vaqtning o'zida ikkala talaba ham mustaqil javob beradi (Sensor yoki A/S/D/F va J/K/L/;)
            </p>
          </div>

        </div>
      `;
    },

    setBattleMode(mode, element) {
      this.config.battleMode = mode;
      document.querySelectorAll('.battle-mode-card').forEach(c => {
        c.className = 'battle-mode-card border-2 border-slate-800 bg-slate-950/60 hover:border-slate-700 rounded-2xl p-4 cursor-pointer transition-all flex items-start gap-3.5 group shadow-lg';
      });
      if (element) {
        if (mode === 'conveyor') {
          element.className = 'battle-mode-card border-2 border-amber-400 bg-amber-950/40 ring-4 ring-amber-500/30 rounded-2xl p-4 cursor-pointer transition-all flex items-start gap-3.5 group shadow-lg';
        } else {
          element.className = 'battle-mode-card border-2 border-cyan-400 bg-cyan-950/40 ring-4 ring-cyan-500/30 rounded-2xl p-4 cursor-pointer transition-all flex items-start gap-3.5 group shadow-lg';
        }
      }
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
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
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    },

    setQuestionCount(cnt, btn) {
      this.config.questionCount = cnt;
      document.querySelectorAll('.q-count-btn').forEach(b => {
        b.className = 'q-count-btn px-3 py-1.5 rounded-lg font-black transition-all cursor-pointer text-slate-400 hover:text-white';
      });
      btn.className = 'q-count-btn px-3 py-1.5 rounded-lg font-black transition-all cursor-pointer bg-amber-500 text-slate-950';
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    },

    setTimePerQuestion(tm, btn) {
      this.config.timePerQuestion = tm;
      document.querySelectorAll('.q-time-btn').forEach(b => {
        b.className = 'q-time-btn px-3 py-1.5 rounded-lg font-black transition-all cursor-pointer text-slate-400 hover:text-white';
      });
      btn.className = 'q-time-btn px-3 py-1.5 rounded-lg font-black transition-all cursor-pointer bg-cyan-500 text-slate-950';
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    },

    // 2. Savollar Hovuzini Yaratish (Konveyer vs Quiz)
    generatePool() {
      if (this.config.battleMode === 'conveyor') {
        return this.generateConveyorPool();
      } else {
        return this.generateQuizPool();
      }
    },

    // 200 ta boy chiqindilar bazasidan Konveyer poygasi savollari
    generateConveyorPool() {
      const db = window.ECO_WASTE_DATABASE || [];
      const pool = [];

      const allCatKeys = ['plastik', 'qogoz', 'shisha', 'metall', 'organik', 'xavfli', 'elektronika', 'tekstil', 'utilizatsiya'];

      const sourceItems = (db.length > 0) ? db : [
        { id: 1, slug: "pet-bottle", name: "PET Plastik Butilka", cat: "plastik", difficulty: "oson", icon: "🧴", explanation: "Oddiy PET shishalar tozalab plastik konteyneriga topshiriladi." },
        { id: 2, slug: "old-newspaper", name: "Eski Gazeta", cat: "qogoz", difficulty: "oson", icon: "📰", explanation: "Toza qog'oz va gazetalar ikkilamchi karton uchun ketadi." },
        { id: 3, slug: "banana-peel", name: "Banan Po'stlog'i", cat: "organik", difficulty: "oson", icon: "🍌", explanation: "Organik qoldiqlar kompost qilinadi." },
        { id: 4, slug: "tetra-pak", name: "Tetra Pak Sharbat Qutisi", cat: "U", difficulty: "qiyin", isTrap: true, icon: "🧃", explanation: "Tetra Pak ichida polietilen va alyuminiy qatlam bor, shuning uchun 'U'!" },
        { id: 5, slug: "broken-mirror", name: "Sinuq ko'zgu oynasi", cat: "U", difficulty: "qiyin", isTrap: true, icon: "🪞", explanation: "Orqasida metall amalgama bor, idish shishasi bilan birga erimaydi — 'U'!" }
      ];

      sourceItems.forEach(w => {
        const rawCat = (w.cat || w.categoryKey || w.category || 'utilizatsiya').toLowerCase().trim();
        const correctKey = (rawCat === 'u' || rawCat.includes('utiliz')) ? 'utilizatsiya' : rawCat;
        const correctObj = CATEGORY_MAP[correctKey] || CATEGORY_MAP['utilizatsiya'];

        // 3 ta noto'g'ri toifa
        const wrongKeys = allCatKeys.filter(k => k !== correctKey && k !== 'u');
        const shuffledWrong = this.shuffleArray(wrongKeys).slice(0, 3);
        const optionsKeys = this.shuffleArray([correctKey, ...shuffledWrong]);

        const options = optionsKeys.map(k => {
          const catInfo = CATEGORY_MAP[k] || { name: k, icon: "📦" };
          return `${catInfo.icon} ${catInfo.name}`;
        });

        const correctIdx = optionsKeys.indexOf(correctKey);

        pool.push({
          isConveyor: true,
          wasteName: w.name,
          slug: w.slug || 'pet-bottle',
          image: w.image || `images/waste/${w.slug}.svg`,
          icon: w.icon || w.emoji || '📦',
          svg: w.svg || null,
          difficulty: w.difficulty || 'orta',
          isTrap: !!w.isTrap,
          source: "Chiqindi Konveyeri",
          category: "Chiqindi Saralash",
          question: `"${w.name}" qaysi konteynerga to'g'ri tashlanadi?`,
          options: options,
          correct: correctIdx,
          explanation: w.explanation || `${w.name} to'g'ri qayta ishlash uchun ${correctObj.name} qutisiga topshiriladi.`
        });
      });

      return pool;
    },

    // Akademik testlar hovuzi
    generateQuizPool() {
      const pool = [];

      // Modullar testlari
      if (Array.isArray(window.ECO_MODULES)) {
        window.ECO_MODULES.forEach(mod => {
          if (Array.isArray(mod.quiz)) {
            mod.quiz.forEach(q => {
              if (q.question && Array.isArray(q.options) && q.options.length >= 4) {
                pool.push({
                  isConveyor: false,
                  source: "Modul: " + mod.title,
                  category: "Ta'lim Moduli",
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

      // Hard audit va ekspertiza
      if (Array.isArray(window.HARD_AUDIT_QUESTIONS)) {
        window.HARD_AUDIT_QUESTIONS.forEach(q => {
          if (q.question && Array.isArray(q.options) && q.options.length >= 4) {
            pool.push({
              isConveyor: false,
              source: "Sanoat Auditi (ISO 14001)",
              category: "Ekologik Audit",
              question: q.question,
              options: q.options.slice(0, 4),
              correct: q.correct,
              explanation: q.explanation || "Sanoat auditi me'yori."
            });
          }
        });
      }

      if (pool.length === 0) {
        return this.generateConveyorPool();
      }
      return pool;
    },

    shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },

    // 3. Batlni Boshlash
    startBattleFromSetup() {
      const t1Input = document.getElementById('t1-name-input');
      const t2Input = document.getElementById('t2-name-input');

      this.config.t1Name = (t1Input && t1Input.value.trim()) || "1-Jamoa (Zumrad)";
      this.config.t2Name = (t2Input && t2Input.value.trim()) || "2-Jamoa (Yoqut)";

      this.startBattle();
    },

    startBattle() {
      // 3. Toza Arqon Rejimi maxsus moduli
      if (this.config.battleMode === 'tug_of_war' && window.EcoBattleTugOfWarMode) {
        window.EcoBattleTugOfWarMode.start({
          t1Name: this.config.t1Name,
          t2Name: this.config.t2Name,
          t1Avatar: this.config.t1Avatar,
          t2Avatar: this.config.t2Avatar,
          matchTime: 60,
          questionCount: this.config.questionCount || 25
        });
        return;
      }

      // 4. Yashil Xarita (5x5) maxsus moduli
      if (this.config.battleMode === 'green_map' && window.EcoBattleGreenMapMode) {
        window.EcoBattleGreenMapMode.start({
          t1Name: this.config.t1Name,
          t2Name: this.config.t2Name,
          t1Avatar: this.config.t1Avatar,
          t2Avatar: this.config.t2Avatar,
          matchTime: 75,
          questionCount: this.config.questionCount || 25
        });
        return;
      }

      // 5. Oziq Zanjiri (Food Chain) maxsus moduli
      if (this.config.battleMode === 'food_chain' && window.EcoBattleFoodChainMode) {
        window.EcoBattleFoodChainMode.start({
          t1Name: this.config.t1Name,
          t2Name: this.config.t2Name,
          t1Avatar: this.config.t1Avatar,
          t2Avatar: this.config.t2Avatar,
          matchTime: 90,
          totalRounds: 5
        });
        return;
      }

      this.active = true;
      this.paused = false;
      this.tugOfWarPercent = 50;

      const masterPool = this.generatePool();

      // Ikkala jamoaga mustaqil va random savollar to'plami
      const t1Questions = this.shuffleArray(masterPool).slice(0, this.config.questionCount);
      const t2Questions = this.shuffleArray(masterPool).slice(0, this.config.questionCount);

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

      this.renderBattleArena();
      this.startQuestionTimer(1);
      this.startQuestionTimer(2);
      this.bindKeyboard();

      if (window.ecoAudio && typeof window.ecoAudio.playCelebration === 'function') {
        window.ecoAudio.playCelebration();
      }
    },

    // 4. Asosiy Jang Maydoni (Split-screen)
    renderBattleArena() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      const isConveyor = this.config.battleMode === 'conveyor';

      container.innerHTML = `
        <div id="eco-battle-arena-view" class="bg-slate-900 border border-emerald-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl relative select-none">
          
          <!-- Yuqori Jang Boshqaruv Bari -->
          <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2 flex-wrap">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-swords"></i> ${isConveyor ? '⚡ 1v1 Konveyer Poygasi' : '🧠 1v1 Eko-Duel'}
              </span>
              <span class="text-xs text-slate-400 font-bold hidden sm:inline">
                ${this.config.questionCount} ta bosqich
              </span>
            </div>

            <div class="flex items-center gap-2">
              <button 
                type="button" 
                onclick="EcoBattleArena.togglePause()" 
                id="battle-pause-btn" 
                class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700"
              >
                <i class="fa-solid fa-pause text-amber-400"></i>
                <span id="battle-pause-text">Pauza</span>
              </button>

              <button 
                type="button" 
                onclick="EcoBattleArena.init()" 
                class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700"
              >
                <i class="fa-solid fa-rotate-left text-cyan-400"></i>
                <span>Sozlamalarga qaytish</span>
              </button>
            </div>
          </div>

          <!-- Score & Tug-of-War Sarlavhasi -->
          <div class="grid grid-cols-2 items-center mb-3 px-2">
            <!-- 1-Jamoa ball -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/20 shrink-0">
                ${this.t1.avatar}
              </div>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white truncate max-w-[120px] sm:max-w-[200px]">${this.t1.name}</h4>
                <div class="flex items-center gap-2">
                  <span id="t1-score-display" class="text-xl sm:text-2xl font-black text-emerald-400 font-mono">0</span>
                  <span id="t1-streak-badge" class="hidden text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 animate-pulse">🔥 Combo x2</span>
                </div>
              </div>
            </div>

            <!-- 2-Jamoa ball -->
            <div class="flex items-center justify-end gap-3 text-right">
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white truncate max-w-[120px] sm:max-w-[200px]">${this.t2.name}</h4>
                <div class="flex items-center justify-end gap-2">
                  <span id="t2-streak-badge" class="hidden text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-500 text-white animate-pulse">🔥 Combo x2</span>
                  <span id="t2-score-display" class="text-xl sm:text-2xl font-black text-rose-400 font-mono">0</span>
                </div>
              </div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-2xl shadow-lg shadow-rose-500/20 shrink-0">
                ${this.t2.avatar}
              </div>
            </div>
          </div>

          <!-- DINAMIK TUG-OF-WAR (Arqon tortishuv) JONLI ENERGIYA BARI -->
          <div class="relative w-full h-3 sm:h-4 bg-slate-950 rounded-full overflow-hidden border border-slate-800 mb-6 shadow-inner">
            <div class="absolute inset-0 flex">
              <div id="battle-tug-t1" class="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 transition-all duration-300" style="width: 50%;"></div>
              <div id="battle-tug-t2" class="h-full bg-gradient-to-l from-rose-600 via-rose-400 to-amber-300 transition-all duration-300" style="width: 50%;"></div>
            </div>
            <!-- Markaziy ajratgich igna -->
            <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white shadow-md z-10"></div>
          </div>

          <!-- ASOSIY SPLIT-SCREEN OYNA (Chap vs O'ng) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
            
            <!-- CHAP TOMON: 1-Jamoa Paneli -->
            <div id="team1-side-panel" class="relative rounded-3xl bg-slate-950/80 border-2 border-emerald-500/40 p-4 sm:p-5 shadow-xl transition-all">
              <div id="t1-card-content"></div>
            </div>

            <!-- O'NG TOMON: 2-Jamoa Paneli -->
            <div id="team2-side-panel" class="relative rounded-3xl bg-slate-950/80 border-2 border-rose-500/40 p-4 sm:p-5 shadow-xl transition-all">
              <div id="t2-card-content"></div>
            </div>

          </div>

          <!-- Pastki klaviatura qo'llanmasi -->
          <div class="mt-5 p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-center flex flex-wrap items-center justify-around gap-3 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-slate-300">1-Jamoa: <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-emerald-500/50 text-emerald-300 font-mono font-bold">A</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-emerald-500/50 text-emerald-300 font-mono font-bold">S</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-emerald-500/50 text-emerald-300 font-mono font-bold">D</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-emerald-500/50 text-emerald-300 font-mono font-bold">F</kbd></span>
            </div>

            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <span class="text-slate-300">2-Jamoa: <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-rose-500/50 text-rose-300 font-mono font-bold">J</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-rose-500/50 text-rose-300 font-mono font-bold">K</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-rose-500/50 text-rose-300 font-mono font-bold">L</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-900 border border-rose-500/50 text-rose-300 font-mono font-bold">;</kbd></span>
            </div>

            <div class="text-[11px] text-slate-500 font-medium">
              * Sensor ekranda yoki telefonda to'g'ridan-to'g'ri variantlarni bosing
            </div>
          </div>

        </div>
      `;

      this.renderPlayerCard(1);
      this.renderPlayerCard(2);
    },

    // 5. Talaba / Jamoaning Kartochkasini chizish (Konveyer vs Quiz)
    renderPlayerCard(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      const targetDiv = document.getElementById(teamId === 1 ? 't1-card-content' : 't2-card-content');
      if (!targetDiv) return;

      if (team.currentIndex >= team.questions.length) {
        team.finished = true;
        targetDiv.innerHTML = `
          <div class="py-12 text-center space-y-4 animate-fade-in">
            <div class="text-5xl animate-bounce">🏁</div>
            <h3 class="text-xl font-black text-white">Barcha chiqindilar saralandi!</h3>
            <p class="text-xs text-slate-400">Raqibingiz marraga yetib kelishini kuting...</p>
            <div class="inline-block px-5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-sm font-bold text-amber-400 shadow-xl">
              To'plangan ball: <span class="text-xl font-black text-white">${team.score}</span> / ${team.questions.length * 10}
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
      const isConveyor = this.config.battleMode === 'conveyor';

      targetDiv.innerHTML = `
        <div class="space-y-4">
          
          <!-- Metrik header: Raqam va Taymer -->
          <div class="flex items-center justify-between text-xs font-bold text-slate-400">
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-lg bg-${themeColor}-500/20 text-${themeColor}-400 flex items-center justify-center font-mono text-[11px] font-black border border-${themeColor}-500/40">
                ${qNum}
              </span>
              <span>/ ${totalQ}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${isConveyor ? 'Konveyer' : q.category})</span>
            </div>

            <!-- Taymer ko'rsatkichi -->
            ${this.config.timePerQuestion > 0 ? `
              <div class="flex items-center gap-1.5 font-mono">
                <i class="fa-solid fa-stopwatch text-${themeColor}-400"></i>
                <span id="t${teamId}-time-text" class="text-white font-black text-sm">${team.timeLeft}s</span>
              </div>
            ` : ''}
          </div>

          <!-- Vaqt chizig'i -->
          ${this.config.timePerQuestion > 0 ? `
            <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div id="t${teamId}-time-bar" class="h-full bg-gradient-to-r from-${themeColor}-500 to-${themeColor}-400 transition-all duration-300" style="width: 100%;"></div>
            </div>
          ` : ''}

          <!-- KONVEYER LENTASI / SAVOL MAYDONI -->
          ${isConveyor ? `
            <div class="relative rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-950 p-4 shadow-inner">
              
              <!-- 2D Harakatlanuvchi konveyer yo'lagi (Conveyor Track) -->
              <div class="conveyor-belt-track absolute inset-x-0 bottom-0 h-10 border-t border-slate-700/80 opacity-80"></div>
              
              <div class="relative z-10 flex flex-col items-center justify-center py-2">
                
                <!-- Qiyinlik & Trap Nishoni -->
                <div class="w-full flex items-center justify-between mb-2 px-1">
                  <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    ${(q.difficulty || 'orta').toUpperCase()}
                  </span>
                  ${q.isTrap ? `
                    <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse">
                      ⚠️ QOPQON CHIQINDI!
                    </span>
                  ` : ''}
                </div>

                <!-- Konveyer ustidagi Chiqindi Vektorli SVG Rasmi -->
                <div class="w-20 h-20 sm:w-24 sm:h-24 waste-conveyor-float flex items-center justify-center p-2 mb-2 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl">
                  ${q.svg ? `
                    <div class="w-full h-full flex items-center justify-center">${q.svg}</div>
                  ` : `
                    <img 
                      src="${q.image || `images/waste/${q.slug}.svg`}" 
                      alt="${q.wasteName}" 
                      class="w-full h-full object-contain drop-shadow-md select-none pointer-events-none" 
                      onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'text-4xl animate-bounce\\'>${q.icon || '📦'}</span>';"
                    />
                  `}
                </div>

                <!-- Chiqindi nomi -->
                <h4 class="text-sm sm:text-base font-black text-white text-center leading-snug tracking-wide">
                  ${q.wasteName}
                </h4>
                <p class="text-[11px] text-slate-400 mt-0.5 text-center">
                  Qaysi rangli konteynerga tashlanadi?
                </p>
              </div>

            </div>
          ` : `
            <!-- Akademik Test Savoli -->
            <div class="min-h-[120px] flex flex-col justify-center bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 shadow-inner">
              <span class="text-[10px] font-mono text-slate-400 uppercase mb-1 block">${q.source || 'Ekologiya'}</span>
              <h4 class="text-sm sm:text-base font-bold text-white text-center leading-snug">
                ${q.question}
              </h4>
            </div>
          `}

          <!-- 4 TA VARIANT TUGMALARI -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            ${q.options.map((opt, idx) => `
              <button 
                type="button"
                id="t${teamId}-opt-${idx}" 
                onclick="EcoBattleArena.submitAnswer(${teamId}, ${idx})" 
                class="battle-option-btn group relative w-full text-left p-3 rounded-2xl bg-slate-900 border-2 border-slate-800 hover:border-${themeColor}-400/80 text-white font-bold text-xs sm:text-sm transition-all duration-150 flex items-center justify-between shadow-md cursor-pointer"
              >
                <div class="flex items-center gap-2.5 min-w-0 pr-2">
                  <span class="w-6 h-6 rounded-lg bg-slate-950 text-slate-300 font-mono font-black text-[11px] flex items-center justify-center border border-slate-700/80 shrink-0 group-hover:border-${themeColor}-400 group-hover:text-white transition-colors">
                    ${keys[idx]}
                  </span>
                  <span class="truncate leading-snug">${opt}</span>
                </div>
                <span id="t${teamId}-check-${idx}" class="text-xs font-black hidden shrink-0"></span>
              </button>
            `).join('')}
          </div>

          <!-- Qisqa javob fikr-mulohazasi -->
          <div id="t${teamId}-feedback-box" class="min-h-[36px] rounded-xl p-2 text-xs text-center font-bold text-slate-400 bg-slate-950/40 border border-slate-800/60 flex items-center justify-center transition-all">
            <span>Klaviaturadan <b>${keys.join(' / ')}</b> ni bosing yoki tugmani teging</span>
          </div>

        </div>
      `;
    },

    // 6. Taymerni Boshqarish
    startQuestionTimer(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      if (this.config.timePerQuestion <= 0) return;

      if (team.timerId) clearInterval(team.timerId);
      team.timeLeft = this.config.timePerQuestion;
      this.updateTimerUI(teamId);

      team.timerId = setInterval(() => {
        if (this.paused || team.isLocked || team.finished) return;
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
        question: q.wasteName || q.question,
        selected: -1,
        correct: q.correct,
        isCorrect: false
      });

      const correctBtn = document.getElementById(`t${teamId}-opt-${q.correct}`);
      if (correctBtn) {
        correctBtn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-white');
      }

      const feedback = document.getElementById(`t${teamId}-feedback-box`);
      if (feedback) {
        feedback.className = "min-h-[36px] rounded-xl p-2 text-xs text-center font-bold bg-rose-950/60 border border-rose-500/60 text-rose-300";
        feedback.innerHTML = `⏰ Vaqt tugadi! To'g'ri javob: <b>${q.options[q.correct]}</b>`;
      }

      this.shiftTugOfWar(teamId === 1 ? -4 : 4);

      setTimeout(() => {
        this.nextQuestion(teamId);
      }, 1100);
    },

    // 7. Javobni Qabul Qilish (Mustaqil va Chaqqon)
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

      const clickedBtn = document.getElementById(`t${teamId}-opt-${optionIndex}`);
      const correctBtn = document.getElementById(`t${teamId}-opt-${q.correct}`);
      const checkSpan = document.getElementById(`t${teamId}-check-${optionIndex}`);

      team.answersHistory.push({
        question: q.wasteName || q.question,
        selected: optionIndex,
        correct: q.correct,
        isCorrect: isCorrect
      });

      if (isCorrect) {
        team.score += 10;
        team.streak += 1;
        if (team.streak > team.maxStreak) team.maxStreak = team.streak;

        // Combo bonus
        let bonus = 0;
        if (team.streak >= 5) bonus = 5;
        else if (team.streak >= 3) bonus = 2;
        team.score += bonus;

        if (clickedBtn) {
          clickedBtn.classList.remove('bg-slate-900', 'border-slate-800');
          clickedBtn.classList.add('bg-emerald-500/30', 'border-emerald-400', 'text-white', 'shadow-lg', 'shadow-emerald-500/20');
        }
        if (checkSpan) {
          checkSpan.innerHTML = '✅';
          checkSpan.classList.remove('hidden');
        }

        const feedback = document.getElementById(`t${teamId}-feedback-box`);
        if (feedback) {
          feedback.className = "min-h-[36px] rounded-xl p-2 text-xs text-center font-bold bg-emerald-950/60 border border-emerald-500/60 text-emerald-300 animate-bounce";
          feedback.innerHTML = `✅ To'g'ri! ${team.streak >= 3 ? `(Combo x${team.streak} +${10 + bonus} ball!)` : '+10 ball'}`;
        }

        if (window.ecoAudio && typeof window.ecoAudio.playSuccess === 'function') {
          window.ecoAudio.playSuccess();
        }

        // Tug of war energiyasini tortish
        let shift = 4;
        if (team.streak >= 5) shift = 8;
        else if (team.streak >= 3) shift = 6;
        this.shiftTugOfWar(teamId === 1 ? shift : -shift);

        if (window.EcoFxEngine && typeof window.EcoFxEngine.triggerPaqldoq === 'function' && clickedBtn) {
          const rect = clickedBtn.getBoundingClientRect();
          window.EcoFxEngine.triggerPaqldoq(rect.left + rect.width / 2, rect.top + rect.height / 2, 10 + bonus);
        }

      } else {
        team.streak = 0;

        if (clickedBtn) {
          clickedBtn.classList.remove('bg-slate-900', 'border-slate-800');
          clickedBtn.classList.add('bg-rose-500/30', 'border-rose-400', 'text-white', 'animate-shake');
        }
        if (checkSpan) {
          checkSpan.innerHTML = '❌';
          checkSpan.classList.remove('hidden');
        }
        if (correctBtn) {
          correctBtn.classList.add('bg-emerald-500/20', 'border-emerald-500/60', 'text-white');
        }

        const feedback = document.getElementById(`t${teamId}-feedback-box`);
        if (feedback) {
          feedback.className = "min-h-[36px] rounded-xl p-2 text-xs text-center font-bold bg-rose-950/60 border border-rose-500/60 text-rose-300";
          feedback.innerHTML = `❌ Noto'g'ri! To'g'ri: <b>${q.options[q.correct]}</b>`;
        }

        if (window.ecoAudio && typeof window.ecoAudio.playError === 'function') {
          window.ecoAudio.playError();
        }

        this.shiftTugOfWar(teamId === 1 ? -4 : 4);
      }

      this.updateScoreUI(teamId);
      this.updateStreakUI(teamId);

      setTimeout(() => {
        this.nextQuestion(teamId);
      }, isCorrect ? 750 : 1200);
    },

    updateScoreUI(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      const el = document.getElementById(`t${teamId}-score-display`);
      if (el) el.textContent = team.score;
    },

    updateStreakUI(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      const badge = document.getElementById(`t${teamId}-streak-badge`);
      if (!badge) return;

      if (team.streak >= 3) {
        badge.textContent = `🔥 Combo x${team.streak}`;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    },

    shiftTugOfWar(delta) {
      this.tugOfWarPercent = Math.max(5, Math.min(95, this.tugOfWarPercent + delta));
      const bar1 = document.getElementById('battle-tug-t1');
      const bar2 = document.getElementById('battle-tug-t2');
      if (bar1 && bar2) {
        bar1.style.width = `${this.tugOfWarPercent}%`;
        bar2.style.width = `${100 - this.tugOfWarPercent}%`;
      }
    },

    nextQuestion(teamId) {
      const team = teamId === 1 ? this.t1 : this.t2;
      team.currentIndex++;
      team.isLocked = false;
      this.renderPlayerCard(teamId);
      if (team.currentIndex < team.questions.length) {
        this.startQuestionTimer(teamId);
      }
    },

    // 8. Klaviatura Boshqaruvi (A/S/D/F vs J/K/L/;)
    bindKeyboard() {
      this.unbindKeyboard();

      this.keyHandler = (e) => {
        if (!this.active || this.paused) return;
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

        const k = e.key.toUpperCase();

        // 1-Jamoa: A, S, D, F yoki 1, 2, 3, 4
        if (k === 'A' || k === '1') { e.preventDefault(); this.submitAnswer(1, 0); }
        else if (k === 'S' || k === '2') { e.preventDefault(); this.submitAnswer(1, 1); }
        else if (k === 'D' || k === '3') { e.preventDefault(); this.submitAnswer(1, 2); }
        else if (k === 'F' || k === '4') { e.preventDefault(); this.submitAnswer(1, 3); }

        // 2-Jamoa: J, K, L, ; yoki 7, 8, 9, 0
        else if (k === 'J' || k === '7') { e.preventDefault(); this.submitAnswer(2, 0); }
        else if (k === 'K' || k === '8') { e.preventDefault(); this.submitAnswer(2, 1); }
        else if (k === 'L' || k === '9') { e.preventDefault(); this.submitAnswer(2, 2); }
        else if (k === ';' || k === '0' || k === 'O') { e.preventDefault(); this.submitAnswer(2, 3); }
      };

      window.addEventListener('keydown', this.keyHandler);
    },

    unbindKeyboard() {
      if (this.keyHandler) {
        window.removeEventListener('keydown', this.keyHandler);
        this.keyHandler = null;
      }
      if (this.t1.timerId) clearInterval(this.t1.timerId);
      if (this.t2.timerId) clearInterval(this.t2.timerId);
    },

    togglePause() {
      this.paused = !this.paused;
      const btnText = document.getElementById('battle-pause-text');
      if (btnText) {
        btnText.textContent = this.paused ? "Davom ettirish" : "Pauza";
      }
    },

    // 9. Jang Tugashi va Mukofotli Yakuniy Natija
    checkMatchFinished() {
      if (this.t1.finished && this.t2.finished) {
        this.active = false;
        this.unbindKeyboard();
        setTimeout(() => {
          this.renderFinalResults();
        }, 800);
      }
    },

    renderFinalResults() {
      const container = document.getElementById('battle-arena-container') || document.getElementById('game-dynamic-content');
      if (!container) return;

      let winner = 0; // 0 = durang, 1 = Team 1, 2 = Team 2
      if (this.t1.score > this.t2.score) winner = 1;
      else if (this.t2.score > this.t1.score) winner = 2;
      else {
        // Ballar teng bo'lsa streak orqali
        if (this.t1.maxStreak > this.t2.maxStreak) winner = 1;
        else if (this.t2.maxStreak > this.t1.maxStreak) winner = 2;
      }

      const winnerTeam = winner === 1 ? this.t1 : (winner === 2 ? this.t2 : null);

      if (window.ecoAudio && typeof window.ecoAudio.playLevelUp === 'function') {
        window.ecoAudio.playLevelUp();
      }
      if (window.EcoFxEngine && typeof window.EcoFxEngine.triggerPaqldoq === 'function') {
        window.EcoFxEngine.triggerPaqldoq(window.innerWidth / 2, window.innerHeight / 3, 50);
      }

      container.innerHTML = `
        <div class="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative select-none animate-fade-in max-w-4xl mx-auto">
          
          <!-- G'olib nishoni -->
          <div class="text-center mb-8">
            <div class="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border-2 border-amber-400 flex items-center justify-center text-5xl shadow-2xl shadow-amber-500/30 animate-bounce">
              ${winner === 0 ? '🤝' : (winner === 1 ? this.t1.avatar : this.t2.avatar)}
            </div>
            
            <span class="text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-block mb-2">
              ${winner === 0 ? "DO'STLIK G'ALABA QOZONDI!" : "G'OLIB TALABA / JAMOA!"}
            </span>

            <h2 class="text-3xl sm:text-5xl font-black text-white">
              ${winner === 0 ? "Jang Durang Yakunlandi!" : `${winnerTeam.name} G'alaba Qozondi! 👑`}
            </h2>
            <p class="text-xs sm:text-sm text-slate-400 mt-2">
              ${this.config.battleMode === 'conveyor' ? '1v1 Chiqindi Konveyeri poygasi natijalari' : '1v1 Akademik Ekologik Duel hisoboti'}:
            </p>
          </div>

          <!-- Taqqoslash Paneli -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            
            <!-- 1-Jamoa statistikasi -->
            <div class="p-5 rounded-2xl bg-slate-950/80 border-2 ${winner === 1 ? 'border-emerald-400 battle-glow-team1' : 'border-slate-800'} relative">
              ${winner === 1 ? `
                <span class="absolute -top-3 right-4 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                  👑 G'olib
                </span>
              ` : ''}
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">${this.t1.avatar}</span>
                <div>
                  <h4 class="font-black text-white text-base">${this.t1.name}</h4>
                  <span class="text-xs text-slate-400">1-Talaba</span>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                <div class="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span class="text-[9px] text-slate-500 uppercase block">Ball</span>
                  <span class="text-lg font-black text-emerald-400">${this.t1.score}</span>
                </div>
                <div class="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span class="text-[9px] text-slate-500 uppercase block">Combo</span>
                  <span class="text-lg font-black text-amber-400">x${this.t1.maxStreak}</span>
                </div>
                <div class="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span class="text-[9px] text-slate-500 uppercase block">To'g'ri</span>
                  <span class="text-lg font-black text-white">${this.t1.answersHistory.filter(a => a.isCorrect).length}/${this.t1.questions.length}</span>
                </div>
              </div>
            </div>

            <!-- 2-Jamoa statistikasi -->
            <div class="p-5 rounded-2xl bg-slate-950/80 border-2 ${winner === 2 ? 'border-rose-400 battle-glow-team2' : 'border-slate-800'} relative">
              ${winner === 2 ? `
                <span class="absolute -top-3 right-4 bg-rose-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                  👑 G'olib
                </span>
              ` : ''}
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">${this.t2.avatar}</span>
                <div>
                  <h4 class="font-black text-white text-base">${this.t2.name}</h4>
                  <span class="text-xs text-slate-400">2-Talaba</span>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                <div class="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span class="text-[9px] text-slate-500 uppercase block">Ball</span>
                  <span class="text-lg font-black text-rose-400">${this.t2.score}</span>
                </div>
                <div class="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span class="text-[9px] text-slate-500 uppercase block">Combo</span>
                  <span class="text-lg font-black text-amber-400">x${this.t2.maxStreak}</span>
                </div>
                <div class="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <span class="text-[9px] text-slate-500 uppercase block">To'g'ri</span>
                  <span class="text-lg font-black text-white">${this.t2.answersHistory.filter(a => a.isCorrect).length}/${this.t2.questions.length}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Tugmalar -->
          <div class="flex flex-wrap items-center justify-center gap-4 pt-3 border-t border-slate-800">
            <button 
              type="button" 
              onclick="EcoBattleArena.startBattle()" 
              class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <i class="fa-solid fa-rotate-right"></i>
              <span>Xuddi Shu Tarkibda Qayta Bellashuv</span>
            </button>

            <button 
              type="button" 
              onclick="EcoBattleArena.init()" 
              class="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <i class="fa-solid fa-sliders"></i>
              <span>Rejim va Tarkibni O'zgartirish</span>
            </button>
          </div>

        </div>
      `;
    }
  };

  window.EcoBattleArena = EcoBattleArena;

})();
