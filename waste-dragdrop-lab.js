/**
 * ============================================================================
 * 24-O'YIN: CHIQINDI LABORATORIYASI (10 QUTI & DRAG-AND-DROP SANDBOX)
 * ============================================================================
 * Asoschi: Akobir | EcoAkobir Platformasi
 * 
 * 7 TA ASOSIY TALAB TO'LIQ DASTURLANGAN:
 * 1. 10 ta muvozanatli chiqindi maxsus lagonda (Dock/Tray) chiqadi.
 * 2. 9 ta rangli qutiga qo'l/sichqoncha bilan erkin sudrash (Pointer Events).
 * 3. Qutiga solingan buyumni qaytarib olish yoki boshqasiga o'tkazish mumkin.
 * 4. Natija faqat oxirida: 10 tasi to'lgach "Tekshirish" tugmasi ochiladi.
 * 5. Fisher-Yates aralashtirish, Recency Penalty va Moslashuvchan Ta'lim (Weak Categories).
 * 6. "Qopqon" chiqindilar (Tetra Pak, Kassa cheki, Powerbank, Choy paketi, Pyrex) va 90s taymer.
 * 7. Imtihon vs Mashq rejimlari va 10/10 "Eko-ustoz" ta'limiy hisoboti.
 */

(function () {
  'use strict';

  // Injected CSS for drag ghost and bin magnetic glow
  (function injectStyles() {
    if (document.getElementById('waste-drag-lab-styles')) return;
    const s = document.createElement('style');
    s.id = 'waste-drag-lab-styles';
    s.textContent = `
      .drag-ghost-active {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%) scale(1.12) rotate(3deg);
        filter: drop-shadow(0 20px 25px rgba(0,0,0,0.6));
        transition: transform 0.05s ease-out;
      }
      .bin-magnetic-hover {
        transform: scale(1.04);
        box-shadow: 0 0 25px 5px rgba(16, 185, 129, 0.45) !important;
        border-color: #34d399 !important;
      }
      .tray-card-touch {
        touch-action: none;
        user-select: none;
      }
    `;
    document.head.appendChild(s);
  })();

  const BINS = [
    { key: "plastik", name: "Plastik", color: "#f59e0b", border: "border-amber-500", bg: "bg-amber-500/10", icon: "🧴", num: 1 },
    { key: "qogoz", name: "Qog'oz & Karton", color: "#3b82f6", border: "border-blue-500", bg: "bg-blue-500/10", icon: "📦", num: 2 },
    { key: "shisha", name: "Shisha idish", color: "#10b981", border: "border-emerald-500", bg: "bg-emerald-500/10", icon: "🍾", num: 3 },
    { key: "organik", name: "Organik chiqindi", color: "#d97706", border: "border-yellow-600", bg: "bg-yellow-600/10", icon: "🍌", num: 4 },
    { key: "metall", name: "Metall quti", color: "#06b6d4", border: "border-cyan-500", bg: "bg-cyan-500/10", icon: "🥫", num: 5 },
    { key: "xavfli", name: "Xavfli chiqindi", color: "#f43f5e", border: "border-rose-500", bg: "bg-rose-500/10", icon: "🔋", num: 6 },
    { key: "elektronika", name: "Elektronika (E-waste)", color: "#a855f7", border: "border-purple-500", bg: "bg-purple-500/10", icon: "📱", num: 7 },
    { key: "tekstil", name: "Tekstil / Kiyim", color: "#ec4899", border: "border-pink-500", bg: "bg-pink-500/10", icon: "👕", num: 8 },
    { key: "utilizatsiya", name: "Utilizatsiya (Qayta ishlanmaydi)", color: "#64748b", border: "border-slate-500", bg: "bg-slate-500/10", icon: "🗑️", num: 9 }
  ];

  const EcoWasteDragLab = {
    // Holat ma'lumotlari
    mode: 'exam', // 'exam' (faqat oxirida tekshirish) yoki 'practice' (darhol izoh)
    timerEnabled: false,
    timerSeconds: 90,
    timerRemaining: 90,
    timerInterval: null,
    
    activeItems: [], // 10 ta chiqindi
    placements: {},  // { [itemId]: binKey }
    selectedItemId: null, // Click-to-place va 1-9 klaviaturasi uchun
    startTime: 0,
    endTime: 0,
    isFinished: false,

    // Pointer Drag holati
    isDragging: false,
    dragItemId: null,
    ghostEl: null,
    currentHoveredBinKey: null,

    // 1. Initsializatsiya va Interfeysni chizish
    renderUI(container) {
      const target = container || document.getElementById('game-dynamic-content');
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
                  <span class="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full">
                    24-O'yin • 10 Quti Sandbox
                  </span>
                  <span id="lab-mode-tag" class="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                    ${this.mode === 'exam' ? '🏆 Imtihon Rejimi' : '🎓 Mashq Rejimi'}
                  </span>
                </div>
                <p class="text-xs text-slate-400 mt-0.5">
                  10 ta chiqindini 9 ta qutiga sudrab joylang yoki bosing. "Tekshirish" bosilguncha javoblarni erkin o'zgartira olasiz!
                </p>
              </div>
            </div>

            <!-- Header Quick Controls -->
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="EcoWasteDragLab.openSettingsModal()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5">
                <i class="fa-solid fa-sliders text-amber-400"></i>
                <span>Rejim / Taymer</span>
              </button>

              <button onclick="EcoWasteDragLab.startNewRound()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5">
                <i class="fa-solid fa-arrows-rotate text-emerald-400"></i>
                <span>Qayta aralashtirish</span>
              </button>

              <div class="bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-center min-w-[70px]">
                <span class="text-[9px] text-slate-500 uppercase font-black block">Joylandi</span>
                <span id="lab-placed-count" class="text-xs font-black text-amber-400">0 / 10</span>
              </div>

              <div id="lab-timer-badge" class="${this.timerEnabled ? 'flex' : 'hidden'} items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-rose-500/40 font-mono text-xs text-rose-400">
                <i class="fa-solid fa-stopwatch animate-pulse"></i>
                <span id="lab-timer-num">90s</span>
              </div>
            </div>
          </div>

          <!-- ASOSIY MAYDON: 9 TA RANG-BARANG KONTEYNERLAR GORIZONTAL TO'RI -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-trash-can text-emerald-400"></i> 9 Ta Rangli Konteyner (Drop Hududi):
              </span>
              <span class="text-[11px] text-slate-500 hidden sm:inline font-medium">
                * Klaviatura orqali tezkor joylash uchun <b>1 – 9</b> raqamlarini bosing
              </span>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2.5" id="lab-bins-grid">
              <!-- Rendered by renderBins() -->
            </div>
          </div>

          <!-- PASTKI MAYDON: 10 TA MUVOZANATLI CHIQINDILAR LAGONI (DOCK / TRAY) -->
          <div class="bg-slate-950/90 border-2 border-slate-800 rounded-2xl p-4 relative">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-black text-emerald-400 uppercase tracking-wider">
                  📦 Saralash Kutayotgan Chiqindilar (Dock / Tray):
                </span>
                <span class="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800 font-bold" id="lab-dock-remaining-badge">
                  10 ta qoldi
                </span>
              </div>

              <!-- Click-to-place Yo'riqnoma -->
              <span class="text-[11px] text-slate-400 font-medium hidden md:inline">
                💡 Maslahat: Chiqindini sudrang yoki <b>ustiga bosing</b>, keyin qutini bosing!
              </span>
            </div>

            <!-- 10 ta chiqindi kartochkalari qatori -->
            <div id="lab-dock-tray" class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 min-h-[145px] items-stretch">
              <!-- Rendered by renderDock() -->
            </div>
          </div>

          <!-- YAKUNIY TEKSHIRISH TUGMASI (Dastlab xira, 10 tasi to'lgach chaqnab ochiladi) -->
          <div class="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div class="text-xs text-slate-400">
              <span id="lab-hint-text">Barcha 10 ta chiqindini qutilarga joylang, so'ngra tekshirish tugmasi faollashadi.</span>
            </div>

            <button id="lab-verify-btn" onclick="EcoWasteDragLab.verifyRound()" disabled class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-800 text-slate-500 font-black text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-not-allowed">
              <i class="fa-solid fa-circle-check"></i>
              <span>Natijani Tekshirish</span>
            </button>
          </div>

        </div>

        <!-- REJIM VA SOZLAMA MODALI -->
        <div id="lab-settings-modal" class="hidden fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div class="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl animate-scale-in">
            <h4 class="text-lg font-black text-white mb-2 flex items-center gap-2">
              <i class="fa-solid fa-sliders text-amber-400"></i> Laboratoriya Sozlamalari
            </h4>
            <p class="text-xs text-slate-400 mb-5">
              O'zingizga qulay rejim va vaqt chegarasini tanlang:
            </p>

            <div class="space-y-3 mb-5">
              <label onclick="EcoWasteDragLab.setMode('exam')" class="flex items-center justify-between p-3.5 rounded-2xl border ${this.mode === 'exam' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-800 bg-slate-950'} cursor-pointer transition-all">
                <div>
                  <div class="font-bold text-xs text-white flex items-center gap-2">
                    <span>🏆 Imtihon Rejimi</span>
                    <span class="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-black">Asosiy (+100 XP)</span>
                  </div>
                  <div class="text-[11px] text-slate-400 mt-0.5">10 ta rasm to'liq joylangach, faqat yakunda tekshiriladi.</div>
                </div>
                <input type="radio" name="lab-mode" value="exam" ${this.mode === 'exam' ? 'checked' : ''} class="accent-emerald-500">
              </label>

              <label onclick="EcoWasteDragLab.setMode('practice')" class="flex items-center justify-between p-3.5 rounded-2xl border ${this.mode === 'practice' ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-800 bg-slate-950'} cursor-pointer transition-all">
                <div>
                  <div class="font-bold text-xs text-white flex items-center gap-2">
                    <span>🎓 Mashq Rejimi</span>
                    <span class="text-[9px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-black">Ta'limiy (+50 XP)</span>
                  </div>
                  <div class="text-[11px] text-slate-400 mt-0.5">Har bir qutiga tashlanganda o'sha zahotiyoq to'g'ri/xato izohi chiqadi.</div>
                </div>
                <input type="radio" name="lab-mode" value="practice" ${this.mode === 'practice' ? 'checked' : ''} class="accent-cyan-500">
              </label>
            </div>

            <!-- 90s Taymer -->
            <div class="p-3.5 rounded-2xl border border-slate-800 bg-slate-950 mb-6 flex items-center justify-between">
              <div>
                <span class="text-xs font-bold text-white block">⏱️ 90 Soniyalik Vaqt Chegarasi</span>
                <span class="text-[11px] text-slate-400">Vaqt kamayganda audio tezlashadi</span>
              </div>
              <input type="checkbox" id="lab-timer-check" onchange="EcoWasteDragLab.toggleTimer(this.checked)" ${this.timerEnabled ? 'checked' : ''} class="w-5 h-5 accent-emerald-500 cursor-pointer">
            </div>

            <div class="flex justify-end gap-2">
              <button onclick="EcoWasteDragLab.closeSettingsModal()" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-all cursor-pointer">
                Tayyor
              </button>
            </div>
          </div>
        </div>

        <!-- YAKUNIY CHUQUR TAHLIL MODALI -->
        <div id="lab-results-modal" class="hidden fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <!-- Rendered by renderResultsModal() -->
        </div>
      `;

      this.renderBins();
      this.startNewRound();
      this.bindKeyboard();
    },

    // 2. 9 ta Qutini chizish
    renderBins() {
      const grid = document.getElementById('lab-bins-grid');
      if (!grid) return;

      grid.innerHTML = BINS.map(b => {
        const placedInThisBin = this.activeItems.filter(item => this.placements[item.id] === b.key);

        return `
          <div 
            id="lab-bin-${b.key}"
            data-bin-key="${b.key}"
            onclick="EcoWasteDragLab.handleBinClick('${b.key}')"
            class="lab-drop-bin relative rounded-2xl ${b.bg} border-2 ${b.border} p-3 flex flex-col justify-between min-h-[140px] sm:min-h-[155px] transition-all duration-200 cursor-pointer hover:border-white/80 group">
            
            <!-- Yuqori qator: Raqam nishoni va Ikonka -->
            <div class="flex items-center justify-between">
              <span class="w-5 h-5 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-black text-slate-300 group-hover:text-white">
                ${b.num}
              </span>
              <span class="text-xl group-hover:scale-110 transition-transform">${b.icon}</span>
            </div>

            <!-- Quti nomi -->
            <div class="my-1.5">
              <h5 class="text-[11px] font-black text-white leading-tight line-clamp-2">${b.name}</h5>
            </div>

            <!-- Qutiga tushgan chiqindilar ko'rinishi (Badges) -->
            <div class="min-h-[46px] bg-slate-950/80 rounded-xl p-1.5 border border-slate-800/80 flex flex-wrap gap-1 content-start overflow-hidden" id="lab-bin-items-${b.key}">
              ${placedInThisBin.length === 0 ? `
                <span class="text-[9px] text-slate-500 font-medium italic block p-0.5">Bo'sh</span>
              ` : placedInThisBin.map(it => `
                <span 
                  onclick="event.stopPropagation(); EcoWasteDragLab.removeFromBin(${it.id})"
                  title="${it.name} (Qaytarib olish uchun bosing)"
                  class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-rose-400 text-[10px] font-bold text-slate-200 hover:text-rose-300 cursor-pointer shadow-sm group/pill transition-all">
                  <span>${it.emoji || '♻️'}</span>
                  <span class="max-w-[50px] truncate text-[9px]">${it.name}</span>
                  <i class="fa-solid fa-xmark text-[8px] text-slate-400 group-hover/pill:text-rose-400"></i>
                </span>
              `).join('')}
            </div>

            <!-- Joylanganlar sanagichi -->
            <div class="text-right mt-1">
              <span class="text-[9px] font-mono font-bold text-slate-400">${placedInThisBin.length} ta buyum</span>
            </div>
          </div>
        `;
      }).join('');
    },

    // 3. Pastki Lagonni (Dock/Tray) chizish
    renderDock() {
      const dock = document.getElementById('lab-dock-tray');
      if (!dock) return;

      const unplacedItems = this.activeItems.filter(item => !this.placements[item.id]);

      // Sanagichni yangilash
      const remainingBadge = document.getElementById('lab-dock-remaining-badge');
      if (remainingBadge) {
        remainingBadge.textContent = `${unplacedItems.length} ta qoldi`;
      }

      if (unplacedItems.length === 0) {
        dock.innerHTML = `
          <div class="col-span-full py-8 text-center">
            <div class="text-3xl animate-bounce mb-2">🎉</div>
            <h5 class="text-sm font-black text-emerald-400">Barcha 10 ta chiqindi qutilarga joylandi!</h5>
            <p class="text-xs text-slate-400 mt-1">
              Endi quyidagi <b>"Natijani Tekshirish"</b> tugmasini bosing yoki xohlasangiz qutilardagi buyumlarni bosib qaytarib oling.
            </p>
          </div>
        `;
        return;
      }

      dock.innerHTML = unplacedItems.map(item => {
        const isSelected = this.selectedItemId === item.id;
        const isTrap = !!item.isTrap;

        return `
          <div 
            id="lab-item-${item.id}"
            data-item-id="${item.id}"
            onpointerdown="EcoWasteDragLab.handlePointerDown(event, ${item.id})"
            onclick="EcoWasteDragLab.handleCardClick(${item.id})"
            class="tray-card-touch relative rounded-2xl bg-slate-900 border-2 ${isSelected ? 'border-emerald-400 ring-2 ring-emerald-400/40 scale-105' : 'border-slate-800 hover:border-emerald-500/50'} p-2.5 flex flex-col items-center justify-between text-center cursor-grab active:cursor-grabbing transition-all duration-200 shadow-md hover:shadow-xl group">
            
            <!-- Trap nishoni (Agar qopqon bo'lsa) -->
            ${isTrap ? `
              <span class="absolute -top-2 -right-1 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow-sm animate-pulse">
                Qopqon!
              </span>
            ` : ''}

            <!-- Chiqindi Vektorli SVG yoki Emoji -->
            <div class="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-1.5 mb-1.5 shadow-inner">
              ${item.svg ? `
                <div class="w-full h-full flex items-center justify-center overflow-hidden">
                  ${item.svg}
                </div>
              ` : `
                <span class="text-2xl">${item.emoji || '♻️'}</span>
              `}
            </div>

            <!-- Chiqindi Nomi -->
            <h6 class="text-[11px] font-black text-white leading-tight line-clamp-2 group-hover:text-emerald-300 transition-colors">
              ${item.name}
            </h6>

            <!-- Qiyinlik nishoni -->
            <span class="text-[8px] font-mono font-bold mt-1 px-1.5 py-0.5 rounded bg-slate-950 text-slate-400">
              ${item.difficulty === 'hard' ? '🔴 Qiyin' : (item.difficulty === 'medium' ? '🟡 O\'rta' : '🟢 Oson')}
            </span>
          </div>
        `;
      }).join('');
    },

    // 4. Yangi Raund Boshlash (Fisher-Yates, Recency Penalty, Category Balance & Adaptive Weighting)
    startNewRound(mistakesOnly = false) {
      this.isFinished = false;
      this.placements = {};
      this.selectedItemId = null;
      this.startTime = Date.now();
      this.stopTimer();

      if (mistakesOnly && Array.isArray(this._lastMistakes) && this._lastMistakes.length > 0) {
        this.activeItems = [...this._lastMistakes];
      } else {
        this.activeItems = this.selectBalanced10Items();
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

    // 5. Muvozanatli 10 ta chiqindini tanlash algoritmi
    selectBalanced10Items() {
      const db = window.ECO_WASTE_DATABASE || [];
      if (!Array.isArray(db) || db.length === 0) {
        return this.getFallbackItems();
      }

      // LocalStorage'dan o'tgan o'yinlarda chiqqan ID'lar va zaif toifalarni olish
      let recentIds = [];
      let weakCategories = [];
      try {
        recentIds = JSON.parse(localStorage.getItem('ECO_RECENT_SORT_IDS') || '[]');
        weakCategories = JSON.parse(localStorage.getItem('ECO_WEAK_CATEGORIES') || '[]');
      } catch (e) {
        recentIds = [];
        weakCategories = [];
      }

      // Toifalar bo'yicha guruhlash
      const byCategory = {};
      db.forEach(item => {
        const cat = item.categoryKey || item.category || 'utilizatsiya';
        if (!byCategory[cat]) byCategory[cat] = [];
        byCategory[cat].push(item);
      });

      const categories = Object.keys(byCategory);
      // Fisher-Yates aralashtirish
      const shuffledCategories = this.fisherYates(categories);

      const chosen = [];
      const usedIds = new Set();
      const categoryCounts = {};

      // 1-Qadam: Agar talabada zaif toifalar bo'lsa, ularga 1-2 ta o'rin ajratamiz (Moslashuvchan Ta'lim)
      if (weakCategories.length > 0) {
        weakCategories.slice(0, 2).forEach(wCat => {
          if (byCategory[wCat] && byCategory[wCat].length > 0) {
            const pool = byCategory[wCat].filter(i => !recentIds.includes(i.id));
            const pickFrom = pool.length > 0 ? pool : byCategory[wCat];
            const candidate = pickFrom[Math.floor(Math.random() * pickFrom.length)];
            if (candidate && !usedIds.has(candidate.id)) {
              chosen.push(candidate);
              usedIds.add(candidate.id);
              categoryCounts[wCat] = (categoryCounts[wCat] || 0) + 1;
            }
          }
        });
      }

      // 2-Qadam: Kamida 5-6 xil toifadan chiqishi va bitta toifadan ko'pi bilan 3 ta bo'lishini ta'minlash
      for (const cat of shuffledCategories) {
        if (chosen.length >= 10) break;
        if (!categoryCounts[cat]) {
          const pool = byCategory[cat].filter(i => !recentIds.includes(i.id) && !usedIds.has(i.id));
          const pickFrom = pool.length > 0 ? pool : byCategory[cat].filter(i => !usedIds.has(i.id));
          if (pickFrom.length > 0) {
            const candidate = pickFrom[Math.floor(Math.random() * pickFrom.length)];
            chosen.push(candidate);
            usedIds.add(candidate.id);
            categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
          }
        }
      }

      // 3-Qadam: Qolgan o'rinlarni 10 tagacha to'ldirish (bitta toifadan max 3 ta)
      const allRemaining = db.filter(i => !usedIds.has(i.id));
      const shuffledRemaining = this.fisherYates(allRemaining);

      for (const item of shuffledRemaining) {
        if (chosen.length >= 10) break;
        const cat = item.categoryKey || item.category || 'utilizatsiya';
        if ((categoryCounts[cat] || 0) < 3) {
          chosen.push(item);
          usedIds.add(item.id);
          categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
        }
      }

      // Fisher-Yates bilan tartibni to'liq tasodifiy qilish (toifalar guruhlanib kelmasligi uchun)
      const finalItems = this.fisherYates(chosen);

      // Recency penalty: yangi chiqqan ID'larni saqlab qo'yish
      try {
        const updatedRecent = [...finalItems.map(i => i.id), ...recentIds].slice(0, 30);
        localStorage.setItem('ECO_RECENT_SORT_IDS', JSON.stringify(updatedRecent));
      } catch (e) {}

      return finalItems;
    },

    // Beg'ubor Fisher-Yates algoritmi
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
        { id: 101, name: "PET Plastik Butilka", categoryKey: "plastik", difficulty: "oson", emoji: "🧴", explanation: "Oddiy PET shishalar tozalab plastik konteyneriga topshiriladi." },
        { id: 102, name: "Eski Gazeta & Jurnal", categoryKey: "qogoz", difficulty: "oson", emoji: "📰", explanation: "Toza qog'oz va gazetalar ikkilamchi karton ishlab chiqarish uchun ketadi." },
        { id: 103, name: "Banan Po'stlog'i", categoryKey: "organik", difficulty: "oson", emoji: "🍌", explanation: "Organik qoldiqlar kompost qilinadi." },
        { id: 104, name: "Tetra Pak Sharbat Qutisi", categoryKey: "utilizatsiya", difficulty: "qiyin", isTrap: true, emoji: "🧃", explanation: "Tetra Pak ichida polietilen va alyuminiy qatlam bor, shuning uchun oddiy qog'ozga tashlanmaydi!" },
        { id: 105, name: "Kassa Cheki (Termo)", categoryKey: "utilizatsiya", difficulty: "qiyin", isTrap: true, emoji: "🧾", explanation: "Termo-chekda zaharli Bisfenol-A bor, qog'oz bilan qayta ishlanmaydi!" },
        { id: 106, name: "Powerbank (Litiy)", categoryKey: "elektronika", difficulty: "qiyin", isTrap: true, emoji: "🔋", explanation: "Oddiy batareya emas, elektron plata va litiy bor, E-waste ga topshiriladi!" },
        { id: 107, name: "Alyuminiy Ichimlik Bankasi", categoryKey: "metall", difficulty: "oson", emoji: "🥫", explanation: "Alyuminiy cheksiz marta 95% energiya tejalgan holda qayta ishlanadi." },
        { id: 108, name: "Shisha Dori Flakoni", categoryKey: "shisha", difficulty: "orta", emoji: "🍾", explanation: "Shisha xomashyosi alohida eritiladi." },
        { id: 109, name: "Paxtali Eski Futbolka", categoryKey: "tekstil", difficulty: "orta", emoji: "👕", explanation: "Tekstil chiqindilari tola sifatida qayta ishlanadi." },
        { id: 110, name: "Ishlatilgan Batareyka", categoryKey: "xavfli", difficulty: "oson", emoji: "🔋", explanation: "Batareyadagi og'ir metallar tuproqni zaharlaydi, xavfli chiqindiga topshiriladi." }
      ];
    },

    // 6. Universal Pointer Drag mexanikasi (Sichqoncha, Barmoq, Stilus)
    handlePointerDown(e, itemId) {
      if (this.isFinished) return;
      // Faqat asosiy tugma yoki teginish
      if (e.button !== undefined && e.button !== 0) return;

      const cardEl = document.getElementById(`lab-item-${itemId}`);
      if (!cardEl) return;

      this.isDragging = true;
      this.dragItemId = itemId;
      this.selectedItemId = itemId;

      const item = this.activeItems.find(i => i.id === itemId);

      // Ghost element yaratish
      this.ghostEl = document.createElement('div');
      this.ghostEl.className = 'drag-ghost-active rounded-2xl bg-slate-900 border-2 border-emerald-400 p-3 flex items-center gap-2 shadow-2xl';
      this.ghostEl.innerHTML = `
        <span class="text-2xl">${item ? (item.emoji || '♻️') : '♻️'}</span>
        <span class="text-xs font-black text-white">${item ? item.name : ''}</span>
      `;
      document.body.appendChild(this.ghostEl);
      this.updateGhostPos(e.clientX, e.clientY);

      const moveHandler = (moveEvent) => {
        if (!this.isDragging || !this.ghostEl) return;
        this.updateGhostPos(moveEvent.clientX, moveEvent.clientY);
        this.checkHoveredBin(moveEvent.clientX, moveEvent.clientY);
      };

      const upHandler = (upEvent) => {
        window.removeEventListener('pointermove', moveHandler);
        window.removeEventListener('pointerup', upHandler);
        window.removeEventListener('pointercancel', upHandler);

        if (this.ghostEl) {
          this.ghostEl.remove();
          this.ghostEl = null;
        }

        if (this.currentHoveredBinKey) {
          // Konteyner ustiga tushdi!
          this.placeItemIntoBin(this.dragItemId, this.currentHoveredBinKey);
        }

        this.clearBinHoverEffects();
        this.isDragging = false;
        this.dragItemId = null;
        this.currentHoveredBinKey = null;
      };

      window.addEventListener('pointermove', moveHandler);
      window.addEventListener('pointerup', upHandler);
      window.addEventListener('pointercancel', upHandler);
    },

    updateGhostPos(x, y) {
      if (this.ghostEl) {
        this.ghostEl.style.left = `${x}px`;
        this.ghostEl.style.top = `${y}px`;
      }
    },

    checkHoveredBin(x, y) {
      const bins = document.querySelectorAll('.lab-drop-bin');
      let foundKey = null;

      bins.forEach(bin => {
        const rect = bin.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          foundKey = bin.getAttribute('data-bin-key');
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

    // 7. Click-to-Place (Telefonda kartani bosib, so'ng qutini bosish)
    handleCardClick(itemId) {
      if (this.isFinished || this.isDragging) return;

      if (this.selectedItemId === itemId) {
        this.selectedItemId = null; // Bekor qilish
      } else {
        this.selectedItemId = itemId;
      }

      this.renderDock();
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') {
        window.ecoAudio.playClick();
      }
    },

    handleBinClick(binKey) {
      if (this.isFinished) return;

      if (this.selectedItemId) {
        this.placeItemIntoBin(this.selectedItemId, binKey);
        this.selectedItemId = null;
      }
    },

    // 8. Qutiga joylash va erkin qaytarib olish
    placeItemIntoBin(itemId, binKey) {
      const item = this.activeItems.find(i => i.id === itemId);
      if (!item) return;

      this.placements[itemId] = binKey;

      // Mashq rejimida darhol tekshirish va tovush berish
      if (this.mode === 'practice') {
        const isCorrect = binKey === (item.categoryKey || item.category || 'utilizatsiya');
        if (isCorrect) {
          if (window.ecoAudio && typeof window.ecoAudio.playCorrect === 'function') window.ecoAudio.playCorrect();
        } else {
          if (window.ecoAudio && typeof window.ecoAudio.playWrong === 'function') window.ecoAudio.playWrong();
          alert(`⚠️ Mashq Rejimi Maslahati:\n"${item.name}" bu qutiga kirmaydi!\nSababi: ${item.explanation}`);
        }
      } else {
        if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') window.ecoAudio.playClick();
      }

      this.renderBins();
      this.renderDock();
      this.updatePlacedCountUI();
    },

    removeFromBin(itemId) {
      if (this.isFinished) return;
      delete this.placements[itemId];
      this.renderBins();
      this.renderDock();
      this.updatePlacedCountUI();
      if (window.ecoAudio && typeof window.ecoAudio.playClick === 'function') window.ecoAudio.playClick();
    },

    updatePlacedCountUI() {
      const placedCount = Object.keys(this.placements).length;
      const countEl = document.getElementById('lab-placed-count');
      const verifyBtn = document.getElementById('lab-verify-btn');
      const hintText = document.getElementById('lab-hint-text');

      if (countEl) countEl.textContent = `${placedCount} / 10`;

      if (verifyBtn) {
        if (placedCount === 10) {
          verifyBtn.disabled = false;
          verifyBtn.className = "w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black text-sm tracking-wide shadow-2xl shadow-emerald-500/30 animate-pulse hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer";
          if (hintText) hintText.innerHTML = "🎉 <b>Barcha chiqindilar joylandi!</b> Natijani ko'rish uchun tekshirish tugmasini bosing.";
        } else {
          verifyBtn.disabled = true;
          verifyBtn.className = "w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-800 text-slate-500 font-black text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-not-allowed";
          if (hintText) hintText.textContent = `Yana ${10 - placedCount} ta chiqindini qutilarga joylang.`;
        }
      }
    },

    // 9. Klaviatura orqali 1-9 boshqaruvi
    bindKeyboard() {
      if (this._keyBound) return;
      this._handleKeyDown = (e) => {
        if (this.isFinished) return;
        const num = parseInt(e.key);
        if (num >= 1 && num <= 9 && this.selectedItemId) {
          const bin = BINS.find(b => b.num === num);
          if (bin) {
            this.placeItemIntoBin(this.selectedItemId, bin.key);
            this.selectedItemId = null;
          }
        }
      };
      window.addEventListener('keydown', this._handleKeyDown);
      this._keyBound = true;
    },

    // 10. Taymer boshqaruvi
    startTimer() {
      this.timerRemaining = this.timerSeconds;
      const numEl = document.getElementById('lab-timer-num');
      if (numEl) numEl.textContent = `${this.timerRemaining}s`;

      this.timerInterval = setInterval(() => {
        this.timerRemaining--;
        if (numEl) numEl.textContent = `${this.timerRemaining}s`;

        // Vaqt kamayganda audio tezlashuvi
        if (window.ecoAudio && typeof window.ecoAudio.playCountdownTick === 'function') {
          window.ecoAudio.playCountdownTick(this.timerRemaining);
        }

        if (this.timerRemaining <= 0) {
          this.stopTimer();
          alert("⏱️ 90 Soniyalik vaqt yakunlandi! Natijalar avtomatik hisoblanadi.");
          this.verifyRound();
        }
      }, 1000);
    },

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
        window.ecoAudio.stopCountdownSound();
      }
    },

    // 11. YAKUNIY NATIJANI TEKSHIRISH VA HISOBOT (Results Evaluation)
    verifyRound() {
      this.stopTimer();
      this.isFinished = true;
      this.endTime = Date.now();

      let correctCount = 0;
      const mistakes = [];
      const categoryStats = {};

      this.activeItems.forEach(item => {
        const correctKey = item.categoryKey || item.category || 'utilizatsiya';
        const userKey = this.placements[item.id] || 'joylanmagan';
        const isCorrect = userKey === correctKey;

        if (!categoryStats[correctKey]) {
          categoryStats[correctKey] = { total: 0, correct: 0 };
        }
        categoryStats[correctKey].total++;

        if (isCorrect) {
          correctCount++;
          categoryStats[correctKey].correct++;
        } else {
          mistakes.push(item);
        }
      });

      this._lastMistakes = mistakes;

      // Zaif toifalarni saqlab qo'yish (keyingi safar o'rgatish maqsadida ko'proq chiqishi uchun)
      const weakList = [];
      Object.keys(categoryStats).forEach(cKey => {
        if (categoryStats[cKey].correct < categoryStats[cKey].total) {
          weakList.push(cKey);
        }
      });
      try {
        localStorage.setItem('ECO_WEAK_CATEGORIES', JSON.stringify(weakList));
      } catch (e) {}

      // Ball va mukofot hisoblash
      const earnedXP = correctCount * 10 + (correctCount === 10 ? 50 : 0);
      const earnedCoins = correctCount * 2 + (correctCount === 10 ? 10 : 0);

      if (typeof window.addPlayerXP === 'function' && earnedXP > 0) {
        window.addPlayerXP(earnedXP);
      }

      // 10/10 bo'lsa Paqldoq mushaklari
      if (correctCount === 10) {
        if (window.EcoFxEngine && typeof window.EcoFxEngine.triggerPaqldoq === 'function') {
          window.EcoFxEngine.triggerPaqldoq();
          setTimeout(() => window.EcoFxEngine.triggerPaqldoq(), 600);
        }
        if (window.ecoAudio && typeof window.ecoAudio.playCelebration === 'function') {
          window.ecoAudio.playCelebration();
        }
      } else {
        if (window.ecoAudio && typeof window.ecoAudio.playSuccess === 'function') {
          window.ecoAudio.playSuccess();
        }
      }

      this.renderResultsModal(correctCount, earnedXP, earnedCoins, categoryStats);
    },

    // 12. Yakuniy Natija Modali
    renderResultsModal(correctCount, earnedXP, earnedCoins, categoryStats) {
      const modal = document.getElementById('lab-results-modal');
      if (!modal) return;

      const totalItems = this.activeItems.length;
      const accuracy = Math.round((correctCount / totalItems) * 100);
      const timeSpentSec = Math.round((this.endTime - this.startTime) / 1000);

      // Unvonlar tizimi
      let titleBadge = "";
      let titleColor = "";
      let trophyIcon = "";

      if (correctCount === 10) {
        titleBadge = "👑 Eko-ustoz (Mutlaq Chempion!)";
        titleColor = "text-amber-300 border-amber-500 bg-amber-500/20";
        trophyIcon = "🏆";
      } else if (correctCount >= 7) {
        titleBadge = "🥈 Saralash ustasi";
        titleColor = "text-emerald-300 border-emerald-500 bg-emerald-500/20";
        trophyIcon = "🥇";
      } else if (correctCount >= 4) {
        titleBadge = "🥉 O'rganuvchi";
        titleColor = "text-cyan-300 border-cyan-500 bg-cyan-500/20";
        trophyIcon = "🥈";
      } else {
        titleBadge = "🌱 Yangi boshlovchi";
        titleColor = "text-slate-300 border-slate-600 bg-slate-800";
        trophyIcon = "🌱";
      }

      modal.classList.remove('hidden');
      modal.innerHTML = `
        <div class="relative w-full max-w-2xl bg-slate-900 border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 animate-scale-in">
          
          <!-- Podium Header -->
          <div class="text-center mb-6">
            <div class="text-6xl mb-2 animate-bounce">${trophyIcon}</div>
            <span class="inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border ${titleColor} mb-2">
              ${titleBadge}
            </span>
            <h3 class="text-2xl sm:text-3xl font-black text-white">Laboratoriya Sinovi Natijasi</h3>
            <p class="text-xs text-slate-400 mt-1">Har bir chiqindining to'g'ri utilizatsiyasi tahlili</p>
          </div>

          <!-- Katta Ko'rsatkichlar Kartochkalari -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-center">
            <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase font-black block">To'g'ri / Umumiy</span>
              <span class="text-xl font-black text-emerald-400">${correctCount} / ${totalItems}</span>
            </div>
            <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase font-black block">Aniqlik</span>
              <span class="text-xl font-black text-cyan-400">${accuracy}%</span>
            </div>
            <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase font-black block">Sarflangan Vaqt</span>
              <span class="text-xl font-black text-amber-400">${timeSpentSec}s</span>
            </div>
            <div class="p-3 bg-slate-950 rounded-2xl border border-slate-800">
              <span class="text-[10px] text-slate-500 uppercase font-black block">Mukofot XP</span>
              <span class="text-xl font-black text-emerald-300">+${earnedXP} XP</span>
            </div>
          </div>

          <!-- Har bir chiqindi bo'yicha ilmiy xatolar tahlili -->
          <div class="mb-6 max-h-[260px] overflow-y-auto pr-1 custom-scrollbar space-y-2">
            <h5 class="text-xs font-black text-slate-300 uppercase tracking-wider sticky top-0 bg-slate-900 py-1">
              📋 Har Bir Chiqindi Bo'yicha Tahlil:
            </h5>
            ${this.activeItems.map(item => {
              const correctKey = item.categoryKey || item.category || 'utilizatsiya';
              const userKey = this.placements[item.id];
              const isCorrect = userKey === correctKey;
              const correctBin = BINS.find(b => b.key === correctKey);
              const userBin = BINS.find(b => b.key === userKey);

              return `
                <div class="p-3 rounded-xl ${isCorrect ? 'bg-slate-950/70 border border-emerald-500/30' : 'bg-rose-950/40 border border-rose-500/40'} flex items-start gap-3">
                  <div class="text-2xl shrink-0 mt-0.5">${item.emoji || '♻️'}</div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-2">
                      <h6 class="text-xs font-black text-white truncate">${item.name}</h6>
                      <span class="text-xs">${isCorrect ? '✅ To\'g\'ri' : '❌ Xato'}</span>
                    </div>
                    <div class="text-[11px] text-slate-400 mt-1 flex flex-wrap gap-2">
                      <span>Siz tanladingiz: <b>${userBin ? userBin.name : 'Bo\'sh'}</b></span>
                      ${!isCorrect ? `<span class="text-emerald-400">To'g'ri quti: <b>${correctBin ? correctBin.name : ''}</b></span>` : ''}
                    </div>
                    <p class="text-[10px] text-slate-400 mt-1 leading-normal italic">
                      💡 ${item.explanation || ''}
                    </p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Harakat Tugmalari -->
          <div class="flex flex-wrap items-center justify-center gap-3">
            ${this._lastMistakes && this._lastMistakes.length > 0 ? `
              <button onclick="EcoWasteDragLab.retryMistakes()" class="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/20">
                <i class="fa-solid fa-graduation-cap"></i> Faqat Xatolarni Qayta Mashq Qilish (${this._lastMistakes.length})
              </button>
            ` : ''}

            <button onclick="EcoWasteDragLab.closeResultsAndNew()" class="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/20">
              <i class="fa-solid fa-arrows-rotate"></i> Yangi 10 Talik O'yin
            </button>

            <button onclick="EcoWasteDragLab.closeResultsModal(); if (typeof window.returnToGamesHub === 'function') window.returnToGamesHub();" class="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700">
              <i class="fa-solid fa-gamepad"></i> Barcha O'yinlar
            </button>
          </div>

        </div>
      `;
    },

    retryMistakes() {
      this.closeResultsModal();
      this.startNewRound(true);
    },

    closeResultsAndNew() {
      this.closeResultsModal();
      this.startNewRound(false);
    },

    closeResultsModal() {
      const modal = document.getElementById('lab-results-modal');
      if (modal) modal.classList.add('hidden');
    },

    openSettingsModal() {
      const modal = document.getElementById('lab-settings-modal');
      if (modal) modal.classList.remove('hidden');
    },

    closeSettingsModal() {
      const modal = document.getElementById('lab-settings-modal');
      if (modal) modal.classList.add('hidden');
    },

    setMode(newMode) {
      this.mode = newMode;
      const tag = document.getElementById('lab-mode-tag');
      if (tag) {
        tag.textContent = newMode === 'exam' ? '🏆 Imtihon Rejimi' : '🎓 Mashq Rejimi';
      }
      this.openSettingsModal(); // Modal ranglarini yangilash
    },

    toggleTimer(enabled) {
      this.timerEnabled = enabled;
      const badge = document.getElementById('lab-timer-badge');
      if (badge) {
        if (enabled) {
          badge.classList.remove('hidden');
          badge.classList.add('flex');
        } else {
          badge.classList.add('hidden');
          badge.classList.remove('flex');
        }
      }
    }
  };

  // Global eksport
  window.EcoWasteDragLab = EcoWasteDragLab;
  window.renderWasteSandboxLabUI = function(container) {
    EcoWasteDragLab.renderUI(container);
  };

})();
