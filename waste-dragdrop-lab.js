/**
 * ============================================================================
 * 24-O'YIN: CHIQINDI LABORATORIYASI (MUKAMMAL 10-20 QUTI DRAG-AND-DROP SANDBOX)
 * ============================================================================
 * Asoschi: Akobir | EcoAkobir Platformasi
 * 200 TA TO'LIQ CHIQINDI BAZASI & HAR BIR CHIQINDI UCHUN LOKAL VEKTORLI SVG
 * 
 * Imkoniyatlar:
 * 1. 200 ta boy chiqindi bazasi (waste-database.js) bilan 100% integratsiya.
 * 2. Har bir chiqindiga o'zining individual SVG rasmi yoki maxsus boy emojisi (hech qanday generic ♻️ emas!).
 * 3. 3 xil hajm: 10 talik (Standart), 15 talik (Kengaytirilgan), 20 talik (Katta Imtihon).
 * 4. Qulay ergonomik dizayn: Chiqindilar lagoni (Dock) TEPADA, 9 ta quti PASTDAGI keng 3x3 to'rda!
 * 5. Universal boshqaruv: HTML5 Native Drag & Drop + Pointer Events + Click-to-Place + 1-9 Klaviaturasi.
 * 6. "Qopqon" chiqindilar (Tetra Pak, Kassa cheki, Powerbank, Choy paketi, Pyrex va b.) tahlili.
 * 7. Chuqur ilmiy natija ekrani (Eko-ustoz unvoni, zaif toifalar va qayta mashq qilish).
 */

(function () {
  'use strict';

  // Drag ghost va magnit hover stillari
  (function injectStyles() {
    if (document.getElementById('waste-drag-lab-styles')) return;
    const s = document.createElement('style');
    s.id = 'waste-drag-lab-styles';
    s.textContent = `
      .drag-ghost-active {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%) scale(1.1);
        filter: drop-shadow(0 20px 25px rgba(0,0,0,0.6));
        transition: transform 0.05s ease-out;
      }
      .bin-magnetic-hover {
        transform: scale(1.03) !important;
        box-shadow: 0 0 25px 5px rgba(16, 185, 129, 0.45) !important;
        border-color: #34d399 !important;
      }
      .tray-card-touch {
        touch-action: none;
        user-select: none;
      }
      @keyframes labPulseGlow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
        50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
      }
      .lab-card-selected {
        animation: labPulseGlow 1.5s infinite;
      }
    `;
    document.head.appendChild(s);
  })();

  const BINS = [
    { key: "plastik", name: "Plastik", color: "#f59e0b", border: "border-amber-500/50", bg: "bg-amber-950/30", icon: "🧴", desc: "Qayta ishlanadi" },
    { key: "qogoz", name: "Qog'oz & Karton", color: "#3b82f6", border: "border-blue-500/50", bg: "bg-blue-950/30", icon: "📦", desc: "Qayta ishlanadi" },
    { key: "shisha", name: "Shisha idish", color: "#10b981", border: "border-emerald-500/50", bg: "bg-emerald-950/30", icon: "🍾", desc: "Qayta ishlanadi" },
    { key: "metall", name: "Metall quti", color: "#06b6d4", border: "border-cyan-500/50", bg: "bg-cyan-950/30", icon: "🥫", desc: "Qayta ishlanadi" },
    { key: "organik", name: "Organik chiqindi", color: "#d97706", border: "border-yellow-600/50", bg: "bg-yellow-950/30", icon: "🍌", desc: "Kompost qilinadi" },
    { key: "xavfli", name: "Xavfli chiqindi", color: "#f43f5e", border: "border-rose-500/50", bg: "bg-rose-950/30", icon: "🔋", desc: "Zararsizlantiriladi" },
    { key: "elektronika", name: "Elektronika (E-waste)", color: "#a855f7", border: "border-purple-500/50", bg: "bg-purple-950/30", icon: "📱", desc: "Maxsus utilizatsiya" },
    { key: "tekstil", name: "Tekstil / Kiyim", color: "#ec4899", border: "border-pink-500/50", bg: "bg-pink-950/30", icon: "👕", desc: "Ikkilamchi ip" },
    { key: "utilizatsiya", name: "Utilizatsiya (Qayta ishlanmaydi)", color: "#64748b", border: "border-slate-600/50", bg: "bg-slate-900/80", icon: "🗑️", desc: "Maxsus poligon" }
  ];

  const EcoWasteDragLab = {
    mode: 'exam', // 'exam' yoki 'practice'
    roundSize: 9, // 10, 15 yoki 20
    timerEnabled: false,
    timerSeconds: 90,
    timerRemaining: 90,
    timerInterval: null,

    activeItems: [],
    placements: {},
    selectedItemId: null,
    startTime: 0,
    endTime: 0,
    isFinished: false,

    isDragging: false,
    dragItemId: null,
    ghostEl: null,
    currentHoveredBinKey: null,

    // Toifani to'g'ri normallashtirish (200 ta bazaga to'liq mos keladi)
    getItemCategory(item) {
      if (!item) return 'utilizatsiya';
      const raw = (item.cat || item.categoryKey || item.category || '').toLowerCase().trim();
      if (raw === 'u' || raw.includes('utiliz') || raw.includes('qayta ishlanmaydi')) return 'utilizatsiya';
      if (raw.includes('plast')) return 'plastik';
      if (raw.includes('qog') || raw.includes('kart')) return 'qogoz';
      if (raw.includes('shish')) return 'shisha';
      if (raw.includes('met')) return 'metall';
      if (raw.includes('organ')) return 'organik';
      if (raw.includes('xavf')) return 'xavfli';
      if (raw.includes('elektron')) return 'elektronika';
      if (raw.includes('tekst') || raw.includes('kiyim')) return 'tekstil';
      return 'utilizatsiya';
    },

    isItemMatchBin(item, binKey) {
      const itemCat = this.getItemCategory(item);
      const bKey = (binKey || '').toLowerCase().trim();
      if ((itemCat === 'utilizatsiya' || itemCat === 'u') && (bKey === 'utilizatsiya' || bKey === 'u')) return true;
      return itemCat === bKey;
    },

    // 1. Initsializatsiya va Asosiy Interfeysni chizish
    renderUI(container) {
      const target = container || document.getElementById('game-dynamic-content') || document.getElementById('sorting-game-container');
      if (!target) return;

      this.stopTimer();

      target.innerHTML = `
        <div id="waste-drag-lab-app" class="bg-slate-900 border border-emerald-500/30 rounded-3xl p-4 sm:p-7 shadow-2xl relative select-none">
          
          <!-- Header Banner -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-800">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/40 shadow-lg shadow-emerald-500/10 shrink-0">
                🖐️
              </div>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <h3 class="text-xl font-black text-white tracking-wide">Chiqindi Laboratoriyasi (Drag & Drop)</h3>
                  <span class="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded-full">
                    9 QUTI & 9 XIL CHIQINDI (200 TA BAZA)
                  </span>
                  <span id="lab-mode-tag" class="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                    ${this.mode === 'exam' ? '🏆 Imtihon Rejimi' : '🎓 Mashq Rejimi'}
                  </span>
                </div>
                <p class="text-xs text-slate-400 mt-0.5">
                  9 ta rangli qutining har biriga mos 9 xil chiqindini sudrab joylang yoki bosing. "Tekshirish" bosilguncha javoblarni erkin o'zgartirish mumkin!
                </p>
              </div>
            </div>

            <!-- Header Quick Controls -->
            <div class="flex items-center gap-2 flex-wrap">
              <!-- Hajm tanlash (9 ta, 18 ta) -->
              <div class="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-[11px] font-bold">
                <button onclick="EcoWasteDragLab.setRoundSize(9)" class="px-3 py-1 rounded-lg ${this.roundSize === 9 ? 'bg-emerald-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'} transition-all cursor-pointer">9 ta (1 tadan)</button>
                <button onclick="EcoWasteDragLab.setRoundSize(18)" class="px-3 py-1 rounded-lg ${this.roundSize === 18 ? 'bg-emerald-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'} transition-all cursor-pointer">18 ta (2 tadan)</button>
              </div>
            </div>
          </div>

          <!-- 1. TEPADA: SARALANISHI KERAK BO'LGAN CHIQINDILAR (DOCK / TRAY) -->
          <div class="bg-slate-950/95 border-2 border-emerald-500/30 rounded-2xl p-3 sm:p-4 mb-5 shadow-xl">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <i class="fa-solid fa-hand-pointer text-emerald-400 animate-bounce"></i>
                  Saralanishi kerak bo'lgan chiqindilar (${this.roundSize} ta):
                </span>
                <span id="lab-dock-remaining-badge" class="text-[10px] text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40 font-black">
                  ${this.roundSize} ta qoldi
                </span>
              </div>

              <span class="text-[11px] text-slate-400 font-medium hidden md:inline">
                💡 Maslahat: Chiqindini sudrang yoki <b>ustiga bosing</b>, keyin qutini tanlang!
              </span>
            </div>

            <!-- Chiqindi kartochkalari (Dock) -->
            <div id="lab-dock-tray" class="flex flex-wrap gap-2.5 min-h-[130px] items-center justify-center p-2 rounded-xl border border-dashed border-slate-700/80 bg-slate-900/60">
              <!-- Rendered by renderDock() -->
            </div>
          </div>

          <!-- 2. PASTDA: 9 TA RANGLI KONTEYNER (KENG 3x3 TO'R) -->
          <div class="mb-5">
            <div class="flex items-center justify-between mb-2 px-1">
              <span class="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-boxes-stacked text-emerald-400"></i>
                Saralash Konteynerlari (9 ta rangli quti):
              </span>
              <span class="text-[11px] text-slate-500 hidden sm:inline font-medium">
                * Klaviatura orqali tezkor joylash uchun <b>1 – 9</b> raqamlarini bosing
              </span>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-3" id="lab-bins-grid">
              <!-- Rendered by renderBins() -->
            </div>
          </div>

          <!-- 3. YAKUNIY TEKSHIRISH TUGMASI -->
          <div class="mt-4 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div class="text-xs text-slate-400">
              <span id="lab-hint-text">Barcha chiqindilarni qutilarga joylang, so'ngra tekshirish tugmasi faollashadi.</span>
            </div>

            <button id="lab-verify-btn" onclick="EcoWasteDragLab.verifyRound()" disabled class="w-full sm:w-auto px-7 py-3 rounded-xl bg-slate-800 text-slate-500 font-black text-sm flex items-center justify-center gap-2 transition-all cursor-not-allowed opacity-50">
              <i class="fa-solid fa-circle-check"></i>
              <span>Natijani Tekshirish</span>
            </button>
          </div>

        </div>

        <!-- REJIM VA SOZLAMA MODALI -->
        <div id="lab-settings-modal" class="hidden fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div class="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl animate-fade-in">
            <h4 class="text-lg font-black text-white mb-2 flex items-center gap-2">
              <i class="fa-solid fa-sliders text-amber-400"></i> Laboratoriya Sozlamalari
            </h4>
            <p class="text-xs text-slate-400 mb-5">
              O'zingizga qulay rejim va vaqt chegarasini tanlang:
            </p>

            <div class="space-y-3 mb-5">
              <label onclick="EcoWasteDragLab.setMode('exam')" class="flex items-center justify-between p-3 rounded-xl border border-slate-700 bg-slate-950/60 hover:border-emerald-500/60 cursor-pointer transition-all">
                <div>
                  <div class="font-bold text-sm text-white flex items-center gap-2">
                    <span>🏆 Imtihon Rejimi</span>
                    <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-black">Asosiy (+100 XP)</span>
                  </div>
                  <div class="text-xs text-slate-400 mt-0.5">Natija faqat oxirida tekshiriladi.</div>
                </div>
                <input type="radio" name="lab-mode-input" value="exam" ${this.mode === 'exam' ? 'checked' : ''} class="w-4 h-4 accent-emerald-500">
              </label>

              <label onclick="EcoWasteDragLab.setMode('practice')" class="flex items-center justify-between p-3 rounded-xl border border-slate-700 bg-slate-950/60 hover:border-cyan-500/60 cursor-pointer transition-all">
                <div>
                  <div class="font-bold text-sm text-white flex items-center gap-2">
                    <span>🎓 Mashq Rejimi</span>
                    <span class="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-black">Ta'limiy (+50 XP)</span>
                  </div>
                  <div class="text-xs text-slate-400 mt-0.5">Har bir tashlanganda darhol to'g'ri/xato izohi ko'rsatiladi.</div>
                </div>
                <input type="radio" name="lab-mode-input" value="practice" ${this.mode === 'practice' ? 'checked' : ''} class="w-4 h-4 accent-cyan-500">
              </label>
            </div>

            <!-- Taymer tanlash -->
            <div class="p-3.5 rounded-xl border border-slate-700 bg-slate-950/60 mb-6 flex items-center justify-between">
              <div>
                <span class="text-sm font-bold text-white block">⏱️ 90 Soniyalik Taymer</span>
                <span class="text-xs text-slate-400">Vaqt poygasi sifatida o'ynash</span>
              </div>
              <input type="checkbox" id="lab-timer-check" onchange="EcoWasteDragLab.toggleTimerOption(this.checked)" ${this.timerEnabled ? 'checked' : ''} class="w-5 h-5 accent-emerald-500 cursor-pointer">
            </div>

            <div class="flex gap-2 justify-end">
              <button onclick="EcoWasteDragLab.closeSettingsModal()" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all cursor-pointer">
                Yopish
              </button>
              <button onclick="EcoWasteDragLab.closeSettingsModal(); EcoWasteDragLab.startNewRound();" class="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/20 cursor-pointer">
                O'yinni Boshlash
              </button>
            </div>
          </div>
        </div>

        <!-- NATIJA MODALI -->
        <div id="lab-results-modal" class="hidden fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div id="lab-results-content" class="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative animate-fade-in my-auto max-h-[92vh] overflow-y-auto custom-scrollbar">
            <!-- Rendered by renderResultModal() -->
          </div>
        </div>
      `;

      this.setupKeyboard();
      this.startNewRound();
    },

    setRoundSize(size) {
      this.roundSize = size;
      this.renderUI();
    },

    // 2. 9 ta Rangli Konteynerni chizish
    renderBins() {
      const grid = document.getElementById('lab-bins-grid');
      if (!grid) return;

      grid.innerHTML = BINS.map((b, idx) => {
        const shortcut = idx + 1;
        const placedInThisBin = this.activeItems.filter(item => this.placements[item.id] === b.key);

        return `
          <div 
            id="lab-bin-${b.key}"
            data-bin-key="${b.key}"
            onclick="EcoWasteDragLab.handleBinClick('${b.key}')"
            ondragover="EcoWasteDragLab.handleNativeDragOver(event, '${b.key}')"
            ondragleave="EcoWasteDragLab.handleNativeDragLeave(event, '${b.key}')"
            ondrop="EcoWasteDragLab.handleNativeDrop(event, '${b.key}')"
            class="lab-drop-bin relative rounded-2xl ${b.bg} border-2 ${b.border} p-2.5 sm:p-3 transition-all duration-200 flex flex-col justify-between min-h-[100px] sm:min-h-[115px] cursor-pointer hover:shadow-xl hover:-translate-y-0.5 select-none group"
          >
            <!-- Top Bin Header -->
            <div class="flex items-center justify-between gap-1 mb-1">
              <div class="flex items-center gap-1.5 min-w-0">
                <span class="text-xl sm:text-2xl shrink-0 transition-transform group-hover:scale-110">${b.icon}</span>
                <div class="truncate">
                  <h5 class="text-xs sm:text-sm font-black text-white leading-tight truncate">${b.name}</h5>
                  <span class="text-[9px] text-slate-400 block">${b.desc}</span>
                </div>
              </div>
              <span class="w-5 h-5 rounded-md bg-slate-950/80 border border-slate-700/80 text-slate-300 text-[10px] font-black flex items-center justify-center shrink-0">
                ${shortcut}
              </span>
            </div>

            <!-- Qutiga tushgan chiqindilar ko'rinishi -->
            <div class="min-h-[28px] bg-slate-950/80 rounded-xl p-1 border border-slate-800/80 flex flex-wrap gap-1 items-center">
              ${placedInThisBin.length === 0 ? `
                <span class="text-[10px] text-slate-500 font-medium italic px-1">Bo'sh</span>
              ` : placedInThisBin.map(it => `
                <span
                  onclick="event.stopPropagation(); EcoWasteDragLab.removeFromBin(${it.id})"
                  title="${it.name} (Qaytarib olish uchun bosing)"
                  class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-white text-[10px] font-bold group/pill hover:bg-rose-950 hover:text-rose-300 hover:border-rose-500/60 transition-all cursor-pointer shadow-sm"
                >
                  <span>${it.icon || it.emoji || '📦'}</span>
                  <span class="max-w-[65px] truncate text-[9px]">${it.name}</span>
                  <i class="fa-solid fa-xmark text-[8px] text-slate-400 group-hover/pill:text-rose-400"></i>
                </span>
              `).join('')}
            </div>

            <!-- Joylanganlar sanagichi & Drop hint -->
            <div class="flex items-center justify-between text-[10px] font-bold text-slate-400 mt-1 pt-1 border-t border-slate-800/60">
              <span class="font-mono">${placedInThisBin.length} ta chiqindi</span>
              <span class="text-emerald-400 text-[10px] font-extrabold flex items-center gap-0.5">
                <span>📥 Tashlash</span>
              </span>
            </div>
          </div>
        `;
      }).join('');
    },

    // 3. Tepada Lagonni (Dock/Tray) chizish — HAR BIR CHIQINDI UCHUN INDIVIDUAL RASM!
    renderDock() {
      const dock = document.getElementById('lab-dock-tray');
      if (!dock) return;

      const unplacedItems = this.activeItems.filter(item => !this.placements[item.id]);

      const remainingBadge = document.getElementById('lab-dock-remaining-badge');
      if (remainingBadge) {
        remainingBadge.textContent = `${unplacedItems.length} ta qoldi`;
      }

      if (unplacedItems.length === 0) {
        dock.innerHTML = `
          <div class="py-5 text-center animate-fade-in text-emerald-400 font-bold text-xs flex flex-col items-center gap-2 w-full">
            <div class="text-3xl animate-bounce">🎉</div>
            <h5 class="text-sm font-black text-emerald-400">Barcha ${this.roundSize} ta chiqindi qutilarga joylandi!</h5>
            <p class="text-xs text-slate-300">
              Endi quyidagi <b>"Natijani Tekshirish"</b> tugmasini bosing yoki xohlasangiz qutilardagi buyumlarni qayta almashtiring.
            </p>
          </div>
        `;
        return;
      }

      dock.innerHTML = unplacedItems.map(item => {
        const isSelected = this.selectedItemId === item.id;
        const isTrap = !!item.isTrap;
        const imgSrc = item.svg ? null : (item.image || `images/waste/${item.slug}.svg`);

        return `
          <div 
            id="lab-item-${item.id}"
            data-item-id="${item.id}"
            draggable="true"
            ondragstart="EcoWasteDragLab.handleNativeDragStart(event, ${item.id})"
            ondragend="EcoWasteDragLab.handleNativeDragEnd(event)"
            onpointerdown="EcoWasteDragLab.handlePointerDown(event, ${item.id})"
            onclick="EcoWasteDragLab.handleCardClick(${item.id})"
            class="tray-card-touch relative rounded-2xl bg-slate-900 border-2 ${isSelected ? 'border-emerald-400 ring-4 ring-emerald-400 bg-emerald-950/60 lab-card-selected scale-105' : 'border-slate-700 hover:border-emerald-400'} p-2.5 w-[130px] sm:w-[145px] flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer hover:shadow-2xl hover:-translate-y-1 group select-none shadow-md"
          >
            <!-- Trap / Difficulty badge -->
            <div class="w-full flex items-center justify-between gap-1 mb-1 relative z-10">
              <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                ${(item.difficulty || 'orta').toUpperCase()}
              </span>
              ${isTrap ? `
                <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse">
                  ⚠️ QOPQON
                </span>
              ` : `
                <span class="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  +10 XP
                </span>
              `}
            </div>

            <!-- Haqiqiy individual Vektorli Rasm (SVG) -->
            <div class="w-14 h-14 my-1 flex items-center justify-center relative z-10 pointer-events-none select-none">
              ${item.svg ? `
                <div class="w-full h-full flex items-center justify-center transition-transform group-hover:scale-110 drop-shadow-md">
                  ${item.svg}
                </div>
              ` : `
                <img 
                  src="${imgSrc}" 
                  alt="${item.name}" 
                  draggable="false"
                  class="w-14 h-14 object-contain transition-transform group-hover:scale-110 drop-shadow-md select-none pointer-events-none"
                  onerror="this.onerror=null; this.parentElement.innerHTML='<span class=\\'text-3xl animate-bounce\\'>${item.icon || item.emoji || '📦'}</span>';"
                />
              `}
            </div>

            <!-- Chiqindi Nomi -->
            <h6 class="text-xs font-black text-white leading-tight min-h-[30px] flex items-center justify-center line-clamp-2 group-hover:text-emerald-300 transition-colors z-10">
              ${item.name}
            </h6>

            <!-- Action hint -->
            <div class="mt-1 text-[9px] font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-400'} group-hover:text-emerald-300 transition-colors flex items-center gap-1 z-10">
              <i class="fa-solid ${isSelected ? 'fa-arrow-down' : 'fa-hand-pointer'} text-[9px]"></i>
              <span>${isSelected ? "Qutini bosing!" : "Bosing / Sudrang"}</span>
            </div>
          </div>
        `;
      }).join('');
    },

    // 4. Yangi partiya boshlash
    startNewRound() {
      this.placements = {};
      this.selectedItemId = null;
      this.isFinished = false;
      this.startTime = Date.now();

      if (this._lastMistakes && this._lastMistakes.length > 0) {
        this.activeItems = [...this._lastMistakes];
        this._lastMistakes = null;
      } else {
        this.activeItems = this.selectBalancedItems(this.roundSize);
      }

      this.updatePlacedCountUI();
      this.renderBins();
      this.renderDock();

      if (this.timerEnabled) {
        this.startTimer();
      }

      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    },
    // 5. Muvozanatli Chiqindilarni tanlash (9 ta qutiga 9 xil chiqindi!)
    selectBalancedItems(count = 9) {
      const db = window.ECO_WASTE_DATABASE || [];
      if (!Array.isArray(db) || db.length === 0) {
        return this.getFallbackItems().slice(0, count);
      }

      let recentIds = [];
      try {
        recentIds = JSON.parse(localStorage.getItem('ECO_RECENT_SORT_IDS') || '[]');
      } catch (e) {
        recentIds = [];
      }

      // Toifalar bo'yicha guruhlash (9 ta toifaga to'liq ajratiladi)
      const byCategory = {};
      BINS.forEach(b => { byCategory[b.key] = []; });

      db.forEach(item => {
        const cat = this.getItemCategory(item);
        if (byCategory[cat]) {
          byCategory[cat].push(item);
        }
      });

      const chosen = [];
      const usedIds = new Set();
      const perCategoryCount = Math.max(1, Math.floor(count / BINS.length));

      // Har bir 9 ta qutidan AYNAN 1 TADAN chiqindi tanlash (9 qutiga 9 xil chiqindi)
      BINS.forEach(bin => {
        const pool = byCategory[bin.key] || [];
        if (pool.length === 0) return;

        for (let k = 0; k < perCategoryCount; k++) {
          const fresh = pool.filter(i => !recentIds.includes(i.id) && !usedIds.has(i.id));
          const candidates = fresh.length > 0 ? fresh : pool.filter(i => !usedIds.has(i.id));
          const pickList = candidates.length > 0 ? candidates : pool;
          const pick = pickList[Math.floor(Math.random() * pickList.length)];
          if (pick && !usedIds.has(pick.id)) {
            chosen.push(pick);
            usedIds.add(pick.id);
          }
        }
      });

      // Agar qo'shimcha o'rinlar kerak bo'lsa
      if (chosen.length < count) {
        const remainingPool = db.filter(i => !usedIds.has(i.id));
        const shuffled = this.fisherYates(remainingPool);
        for (const item of shuffled) {
          if (chosen.length >= count) break;
          chosen.push(item);
          usedIds.add(item.id);
        }
      }

      // 9 ta chiqindini Fisher-Yates orqali aralashtirib berish
      const finalItems = this.fisherYates(chosen);

      try {
        const updatedRecent = [...finalItems.map(i => i.id), ...recentIds].slice(0, 30);
        localStorage.setItem('ECO_RECENT_SORT_IDS', JSON.stringify(updatedRecent));
      } catch (e) {}

      return finalItems;
    },

    fisherYates(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },

        getFallbackItems() {
      return [
        { id: 101, slug: "pet-bottle", name: "PET Plastik Butilka", cat: "plastik", difficulty: "oson", icon: "🧴", explanation: "Oddiy PET shishalar plastik konteyneriga topshiriladi." },
        { id: 102, slug: "old-newspaper", name: "Eski Gazeta & Jurnal", cat: "qogoz", difficulty: "oson", icon: "📦", explanation: "Toza qog'oz ikkilamchi karton ishlab chiqarish uchun ketadi." },
        { id: 103, slug: "glass-bottle", name: "Shisha Dori Flakoni", cat: "shisha", difficulty: "orta", icon: "🍾", explanation: "Shisha idishlar yuvilib shisha konteyneriga topshiriladi." },
        { id: 104, slug: "banana-peel", name: "Banan Po'stlog'i", cat: "organik", difficulty: "oson", icon: "🍌", explanation: "Organik qoldiqlar kompost qilinadi." },
        { id: 105, slug: "aluminum-can", name: "Alyuminiy Ichimlik Bankasi", cat: "metall", difficulty: "oson", icon: "🥫", explanation: "Alyuminiy cheksiz marta 95% energiya tejalgan holda qayta ishlanadi." },
        { id: 106, slug: "used-battery", name: "Ishlatilgan Batareyka", cat: "xavfli", difficulty: "oson", icon: "🔋", explanation: "Zaharli og'ir metallar bor, faqat xavfli chiqindi qutisiga tashlanadi." },
        { id: 107, slug: "powerbank", name: "Powerbank (Litiy)", cat: "elektronika", difficulty: "qiyin", isTrap: true, icon: "📱", explanation: "Elektron plata va litiy akkumulyator bor, E-waste ga topshiriladi!" },
        { id: 108, slug: "old-tshirt", name: "Paxtali Eski Futbolka", cat: "tekstil", difficulty: "orta", icon: "👕", explanation: "Toza kiyim-kechaklar tekstil konteyneriga topshiriladi." },
        { id: 109, slug: "tetra-pak", name: "Tetra Pak Sharbat Qutisi", cat: "U", difficulty: "qiyin", isTrap: true, icon: "🗑️", explanation: "Tetra Pak ichida polietilen va alyuminiy qatlam bor, shuning uchun Utilizatsiya!" }
      ];
    },

    // 6. Native HTML5 Drag & Drop (Desktop kompyuterlar uchun)
    handleNativeDragStart(e, itemId) {
      if (this.isFinished) return;
      this.isDragging = true;
      this.dragItemId = itemId;
      this.selectedItemId = itemId;
      if (e.dataTransfer) {
        e.dataTransfer.setData('text/plain', String(itemId));
        e.dataTransfer.effectAllowed = 'move';
      }
      const card = document.getElementById(`lab-item-${itemId}`);
      if (card) card.style.opacity = '0.35';
    },

    handleNativeDragOver(e, binKey) {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
      const bin = document.getElementById(`lab-bin-${binKey}`);
      if (bin) bin.classList.add('bin-magnetic-hover');
    },

    handleNativeDragLeave(e, binKey) {
      const bin = document.getElementById(`lab-bin-${binKey}`);
      if (bin) bin.classList.remove('bin-magnetic-hover');
    },

    handleNativeDrop(e, binKey) {
      e.preventDefault();
      this.clearBinHoverEffects();
      let itemId = this.dragItemId;
      if (!itemId && e.dataTransfer) {
        const raw = e.dataTransfer.getData('text/plain');
        if (raw) itemId = parseInt(raw, 10);
      }
      if (itemId) {
        this.placeItemIntoBin(itemId, binKey);
      }
      this.isDragging = false;
      this.dragItemId = null;
    },

    handleNativeDragEnd(e) {
      this.isDragging = false;
      this.dragItemId = null;
      this.clearBinHoverEffects();
      document.querySelectorAll('.tray-card-touch').forEach(c => {
        c.style.opacity = '1';
      });
    },

    // 7. Pointer Events Drag (Touch va barmoq uchun)
    handlePointerDown(e, itemId) {
      if (this.isFinished) return;
      if (e.button !== undefined && e.button !== 0) return;

      const cardEl = document.getElementById(`lab-item-${itemId}`);
      if (!cardEl) return;

      try { cardEl.setPointerCapture(e.pointerId); } catch (err) {}

      let startX = e.clientX;
      let startY = e.clientY;
      let hasMoved = false;

      const item = this.activeItems.find(i => i.id === itemId);

      const moveHandler = (moveEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;

        if (!hasMoved && Math.hypot(dx, dy) > 6) {
          hasMoved = true;
          this.isDragging = true;
          this.dragItemId = itemId;
          this.selectedItemId = itemId;

          this.ghostEl = document.createElement('div');
          this.ghostEl.className = 'drag-ghost-active rounded-2xl bg-slate-900 border-2 border-emerald-400 p-2.5 flex items-center gap-2 shadow-2xl';
          this.ghostEl.innerHTML = `
            <span class="text-2xl">${item ? (item.icon || item.emoji || '📦') : '📦'}</span>
            <span class="text-xs font-black text-white">${item ? item.name : ''}</span>
          `;
          document.body.appendChild(this.ghostEl);
          cardEl.style.opacity = '0.35';
        }

        if (hasMoved && this.ghostEl) {
          this.ghostEl.style.left = `${moveEvent.clientX}px`;
          this.ghostEl.style.top = `${moveEvent.clientY}px`;
          this.checkHoveredBin(moveEvent.clientX, moveEvent.clientY);
        }
      };

      const upHandler = (upEvent) => {
        try { cardEl.releasePointerCapture(upEvent.pointerId); } catch (err) {}

        window.removeEventListener('pointermove', moveHandler);
        window.removeEventListener('pointerup', upHandler);
        window.removeEventListener('pointercancel', upHandler);

        if (this.ghostEl) {
          this.ghostEl.remove();
          this.ghostEl = null;
        }
        cardEl.style.opacity = '1';

        if (hasMoved) {
          this.isDragging = false;
          let candidate = this.currentHoveredBinKey;
          if (!candidate && upEvent.clientX !== undefined) {
            candidate = this.getBinUnderPoint(upEvent.clientX, upEvent.clientY);
          }
          if (candidate) {
            this.placeItemIntoBin(itemId, candidate);
          } else {
            cardEl.classList.add('animate-shake');
            setTimeout(() => cardEl.classList.remove('animate-shake'), 400);
          }
        } else {
          this.isDragging = false;
          this.handleCardClick(itemId);
        }

        this.clearBinHoverEffects();
        this.dragItemId = null;
        this.currentHoveredBinKey = null;
      };

      window.addEventListener('pointermove', moveHandler);
      window.addEventListener('pointerup', upHandler);
      window.addEventListener('pointercancel', upHandler);
    },

    getBinUnderPoint(x, y) {
      let foundKey = null;
      document.querySelectorAll('.lab-drop-bin').forEach(bin => {
        const rect = bin.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          foundKey = bin.getAttribute('data-bin-key');
        }
      });
      return foundKey;
    },

    checkHoveredBin(x, y) {
      const foundKey = this.getBinUnderPoint(x, y);
      document.querySelectorAll('.lab-drop-bin').forEach(bin => {
        if (bin.getAttribute('data-bin-key') === foundKey) {
          bin.classList.add('bin-magnetic-hover');
        } else {
          bin.classList.remove('bin-magnetic-hover');
        }
      });
      this.currentHoveredBinKey = foundKey;
    },

    clearBinHoverEffects() {
      document.querySelectorAll('.lab-drop-bin').forEach(bin => {
        bin.classList.remove('bin-magnetic-hover');
      });
    },

    // 8. Click-to-Place (Tanlab qutini bosish)
    handleCardClick(itemId) {
      if (this.isFinished) return;

      if (this.selectedItemId === itemId) {
        this.selectedItemId = null;
      } else {
        this.selectedItemId = itemId;
      }

      this.renderDock();
      this.updateBinsHighlightForSelection();

      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    },

    updateBinsHighlightForSelection() {
      const hasSelection = !!this.selectedItemId;
      document.querySelectorAll('.lab-drop-bin').forEach(bin => {
        if (hasSelection) {
          bin.classList.add('ring-2', 'ring-emerald-400', 'animate-pulse');
        } else {
          bin.classList.remove('ring-2', 'ring-emerald-400', 'animate-pulse');
        }
      });
    },

    handleBinClick(binKey) {
      if (!this.selectedItemId) {
        if (window.showToast) window.showToast("Avval yuqoridagi chiqindilardan birini bosing, so'ng qutini tanlang!");
        return;
      }
      this.placeItemIntoBin(this.selectedItemId, binKey);
    },

    // 9. Chiqindini Qutiga Joylash
    placeItemIntoBin(itemId, binKey) {
      const item = this.activeItems.find(i => i.id === itemId);
      if (!item) return;

      this.placements[itemId] = binKey;
      this.selectedItemId = null;

      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }

      // Mashq rejimida darhol tekshirib aytish
      if (this.mode === 'practice') {
        const isMatch = this.isItemMatchBin(item, binKey);
        if (isMatch) {
          if (window.ecoAudio && typeof window.ecoAudio.playSuccess === 'function') window.ecoAudio.playSuccess();
          if (window.showToast) window.showToast(`✅ To'g'ri! ${item.name} to'g'ri joylandi.`);
        } else {
          if (window.ecoAudio && typeof window.ecoAudio.playError === 'function') window.ecoAudio.playError();
          if (window.showToast) window.showToast(`❌ Xato! ${item.explanation || "Bu qutiga tushmaydi"}`);
        }
      }

      this.renderDock();
      this.renderBins();
      this.updatePlacedCountUI();
      this.updateBinsHighlightForSelection();
    },

    removeFromBin(itemId) {
      delete this.placements[itemId];
      this.selectedItemId = null;
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
      this.renderDock();
      this.renderBins();
      this.updatePlacedCountUI();
      this.updateBinsHighlightForSelection();
    },

    updatePlacedCountUI() {
      const placedCount = Object.keys(this.placements).length;
      const total = this.activeItems.length;

      const counterEl = document.getElementById('lab-placed-count');
      if (counterEl) {
        counterEl.textContent = `${placedCount} / ${total}`;
      }

      const verifyBtn = document.getElementById('lab-verify-btn');
      const hintText = document.getElementById('lab-hint-text');

      if (placedCount >= total && total > 0) {
        if (verifyBtn) {
          verifyBtn.disabled = false;
          verifyBtn.className = "w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 animate-pulse";
        }
        if (hintText) {
          hintText.innerHTML = `<span class="text-emerald-400 font-bold"><i class="fa-solid fa-circle-check mr-1"></i> Barcha chiqindilar joylandi! Natijani tekshirishga tayyor.</span>`;
        }
      } else {
        if (verifyBtn) {
          verifyBtn.disabled = true;
          verifyBtn.className = "w-full sm:w-auto px-7 py-3 rounded-xl bg-slate-800 text-slate-500 font-black text-sm flex items-center justify-center gap-2 transition-all cursor-not-allowed opacity-50";
        }
        if (hintText) {
          hintText.textContent = `Yana ${total - placedCount} ta chiqindini qutilarga joylang.`;
        }
      }
    },

    setupKeyboard() {
      window.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
        if (!this.selectedItemId) return;

        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= 9) {
          e.preventDefault();
          const targetBin = BINS[num - 1];
          if (targetBin) {
            this.placeItemIntoBin(this.selectedItemId, targetBin.key);
          }
        }
      });
    },

    // 10. Taymer mexanikasi
    startTimer() {
      this.stopTimer();
      this.timerRemaining = this.timerSeconds;
      const timerBadge = document.getElementById('lab-timer-badge');
      const timerNum = document.getElementById('lab-timer-num');
      if (timerBadge) timerBadge.classList.remove('hidden');
      if (timerNum) timerNum.textContent = `${this.timerRemaining}s`;

      this.timerInterval = setInterval(() => {
        this.timerRemaining--;
        if (timerNum) timerNum.textContent = `${this.timerRemaining}s`;
        if (this.timerRemaining <= 0) {
          this.stopTimer();
          this.verifyRound(true);
        }
      }, 1000);
    },

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },

    toggleTimerOption(enabled) {
      this.timerEnabled = enabled;
      const badge = document.getElementById('lab-timer-badge');
      if (badge) {
        if (enabled) badge.classList.remove('hidden');
        else badge.classList.add('hidden');
      }
    },

    setMode(newMode) {
      this.mode = newMode;
      const tag = document.getElementById('lab-mode-tag');
      if (tag) {
        tag.textContent = newMode === 'exam' ? '🏆 Imtihon Rejimi' : '🎓 Mashq Rejimi';
      }
    },

    openSettingsModal() {
      const m = document.getElementById('lab-settings-modal');
      if (m) m.classList.remove('hidden');
    },

    closeSettingsModal() {
      const m = document.getElementById('lab-settings-modal');
      if (m) m.classList.add('hidden');
    },

    // 11. Yakuniy Natijani Tekshirish (Hisobot Ekrani)
    verifyRound(isTimeout = false) {
      this.stopTimer();
      this.isFinished = true;
      this.endTime = Date.now();
      const elapsedSeconds = Math.round((this.endTime - this.startTime) / 1000);

      let correctCount = 0;
      const detailedList = [];
      const catStats = {};

      let storedWeak = {};
      try {
        storedWeak = JSON.parse(localStorage.getItem('ECO_WEAK_CATEGORIES') || '{}');
      } catch (e) {}

      this.activeItems.forEach(item => {
        const chosenKey = this.placements[item.id] || 'unplaced';
        const isMatch = this.isItemMatchBin(item, chosenKey);
        const correctKey = this.getItemCategory(item);

        if (!catStats[correctKey]) {
          catStats[correctKey] = { total: 0, correct: 0 };
        }
        catStats[correctKey].total++;

        if (isMatch) {
          correctCount++;
          catStats[correctKey].correct++;
        } else {
          storedWeak[correctKey] = (storedWeak[correctKey] || 0) + 1;
        }

        const chosenBin = BINS.find(b => b.key === chosenKey);
        const correctBin = BINS.find(b => b.key === correctKey);

        detailedList.push({
          item: item,
          chosenName: chosenBin ? chosenBin.name : 'Joylashtirilmadi',
          correctName: correctBin ? correctBin.name : correctKey,
          isCorrect: isMatch
        });
      });

      try {
        localStorage.setItem('ECO_WEAK_CATEGORIES', JSON.stringify(storedWeak));
      } catch (e) {}

      const total = this.activeItems.length;
      const accuracy = Math.round((correctCount / total) * 100);

      let earnedXP = correctCount * 10;
      if (correctCount === total) earnedXP += 50; // Bonus
      let earnedCoins = Math.floor(earnedXP / 2);

      if (typeof addPlayerXP === 'function') addPlayerXP(earnedXP);
      if (typeof addEcoCoins === 'function') addEcoCoins(earnedCoins);

      let badgeTitle = "🌱 Yangi boshlovchi";
      let badgeColor = "text-slate-400";
      if (correctCount === total) {
        badgeTitle = "👑 Eko-ustoz (Mukammal!)";
        badgeColor = "text-amber-400";
      } else if (correctCount >= Math.floor(total * 0.7)) {
        badgeTitle = "🥈 Saralash ustasi";
        badgeColor = "text-emerald-400";
      } else if (correctCount >= Math.floor(total * 0.4)) {
        badgeTitle = "🥉 O'rganuvchi";
        badgeColor = "text-cyan-400";
      }

      if (correctCount >= Math.floor(total * 0.7)) {
        if (window.ecoAudio) window.ecoAudio.playLevelUp();
        if (window.EcoFxEngine) {
          window.EcoFxEngine.triggerPaqldoq(window.innerWidth / 2, window.innerHeight / 3, earnedXP);
        }
      } else {
        if (window.ecoAudio) window.ecoAudio.playError();
      }

      this.renderResultModal({
        total,
        correctCount,
        accuracy,
        elapsedSeconds,
        earnedXP,
        earnedCoins,
        badgeTitle,
        badgeColor,
        detailedList,
        isTimeout
      });
    },

    renderResultModal(stats) {
      const modal = document.getElementById('lab-results-modal');
      const content = document.getElementById('lab-results-content');
      if (!modal || !content) return;

      modal.classList.remove('hidden');

      content.innerHTML = `
        <div class="text-center pb-4 mb-4 border-b border-slate-800">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-3 text-xs font-black ${stats.badgeColor}">
            <span>${stats.badgeTitle}</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-black text-white">
            ${stats.isTimeout ? '⏱️ Vaqt Tugadi! Natija' : '🎉 Saralash Yakunlandi!'}
          </h3>
          <p class="text-xs text-slate-400 mt-1">Laboratoriya sinovida to'plangan natijalar tahlili:</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5 text-center">
          <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-black block">To'g'ri / Jami</span>
            <span class="text-2xl font-black text-emerald-400">${stats.correctCount} / ${stats.total}</span>
          </div>

          <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-black block">Aniqlik</span>
            <span class="text-2xl font-black ${stats.accuracy >= 70 ? 'text-emerald-400' : 'text-amber-400'}">${stats.accuracy}%</span>
          </div>

          <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-black block">Sarflangan Vaqt</span>
            <span class="text-2xl font-black text-cyan-400">${stats.elapsedSeconds}s</span>
          </div>

          <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-black block">Mukofot</span>
            <span class="text-xl font-black text-amber-400">+${stats.earnedXP} XP</span>
          </div>
        </div>

        <div class="mb-5">
          <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-emerald-400"></i>
            Har bir chiqindi bo'yicha tahliliy qoidalar:
          </h4>
          <div class="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
            ${stats.detailedList.map(row => `
              <div class="p-3 rounded-xl border ${row.isCorrect ? 'border-emerald-500/30 bg-emerald-950/20' : 'border-rose-500/30 bg-rose-950/20'} text-xs">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="font-black text-white flex items-center gap-2">
                    <span>${row.item.icon || row.item.emoji || '📦'}</span>
                    <span>${row.item.name}</span>
                  </span>
                  <span class="${row.isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-bold">
                    ${row.isCorrect ? '✅ To&#39;g&#39;ri' : '❌ Xato'}
                  </span>
                </div>
                <div class="text-[11px] text-slate-400 mb-1">
                  Siz tanlagan quti: <strong class="text-slate-200">${row.chosenName}</strong> | 
                  To'g'ri quti: <strong class="text-emerald-300">${row.correctName}</strong>
                </div>
                <p class="text-[11px] text-slate-300 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                  💡 <strong>Qoida:</strong> ${row.item.explanation}
                </p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2.5 pt-3 border-t border-slate-800">
          ${stats.correctCount < stats.total ? `
            <button onclick="EcoWasteDragLab.retryMistakes()" class="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>Faqat Xatolarni Qayta Mashq Qilish (${stats.total - stats.correctCount} ta)</span>
            </button>
          ` : ''}

          <button onclick="EcoWasteDragLab.closeResultModal(); EcoWasteDragLab.startNewRound();" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer">
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>Yangi Partiya (${stats.total} ta)</span>
          </button>

          <button onclick="EcoWasteDragLab.closeResultModal();" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all cursor-pointer">
            Yopish
          </button>
        </div>
      `;
    },

    retryMistakes() {
      const mistakes = this.activeItems.filter(item => !this.isItemMatchBin(item, this.placements[item.id]));
      this.closeResultModal();
      if (mistakes.length === 0) {
        this.startNewRound();
        return;
      }
      this._lastMistakes = mistakes;
      this.startNewRound();
      if (window.showToast) {
        window.showToast(`🎯 Faqat xato qilingan ${mistakes.length} ta chiqindi qayta yuklandi!`);
      }
    },

    closeResultModal() {
      const m = document.getElementById('lab-results-modal');
      if (m) m.classList.add('hidden');
    }
  };

  window.EcoWasteDragLab = EcoWasteDragLab;
  window.renderWasteSandboxLabUI = function(container) { EcoWasteDragLab.renderUI(container); };

})();
