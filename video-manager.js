// =======================================================================
// Akosh Eco / EcoAkobir — Video Darslar & Media Markazi Boshqaruvi
// Asoschi: Akobir | Talabalar uchun Video Darslar & Admin Boshqaruv Tizimi
// =======================================================================

const DEFAULT_ECO_VIDEOS = [
  {
    id: "vid-1",
    title: "Chiqindilarni Xalqaro Standartlar Bo'yicha Saralash",
    category: "Saralash va Qayta ishlash",
    duration: "08:45",
    xp: 60,
    videoUrl: "https://www.youtube.com/embed/OasbYWF4_S8",
    thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80",
    desc: "Chiqindilarni manbasida 5 ta rangli qutiga ajratish, qayta ishlash zanjiri va ekologik madaniyat asoslari.",
    views: 1420
  },
  {
    id: "vid-2",
    title: "Sanoat Korxonasida Ekologik Audit (ISO 14001)",
    category: "Ekologik Audit",
    duration: "14:20",
    xp: 80,
    videoUrl: "https://www.youtube.com/embed/videoseries?list=PLecoakobir_audit",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    desc: "Zavod sexlari, filtrlash tizimlari, oqova suv va me'yoriy ruxsatnomalar auditi bo'yicha amaliy qo'llanma.",
    views: 980
  },
  {
    id: "vid-3",
    title: "Plastik Chiqindilardan Piroliz Usulida Sintetik Neft Olish",
    category: "Qayta ishlash",
    duration: "11:15",
    xp: 75,
    videoUrl: "https://www.youtube.com/embed/pyrolysis_demo",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    desc: "Kislorodsiz 450°C haroratli piroliz reaktori, kondensatlash va sintetik dizel yoqilg'isi olish texnologiyasi.",
    views: 1650
  },
  {
    id: "vid-4",
    title: "Biogaz Qurilmasi va Metan Bijg'itish Reaktori",
    category: "Biotexnologiya",
    duration: "09:30",
    xp: 70,
    videoUrl: "https://www.youtube.com/embed/biogas_demo",
    thumbnail: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    desc: "Anaerob reaktor harorati (37°C), pH ko'rsatkichi va organik chiqindilardan elektr energiyasi ishlab chiqarish.",
    views: 1120
  },
  {
    id: "vid-5",
    title: "Tibbiyot Chiqindilarini 134°C Avtoklavda Zararsizlantirish",
    category: "Biologik Xavfsizlik",
    duration: "10:50",
    xp: 70,
    videoUrl: "https://www.youtube.com/embed/medical_waste_demo",
    thumbnail: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    desc: "SanQvaM qoidalari bo'yicha A, B, C toifali shifoxona chiqindilarini sterilizatsiya qilish va utilizatsiyasi.",
    views: 890
  },
  {
    id: "vid-6",
    title: "Sanitar Poligonlar Qurilishi: Geomembrana va Filtrat Boshqaruvi",
    category: "Muhandislik",
    duration: "13:40",
    xp: 85,
    videoUrl: "https://www.youtube.com/embed/landfill_demo",
    thumbnail: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80",
    desc: "HDPE geomembrana yotqizish, drenaj quvurlari orqali zaharli filtratni ushlash va metan quduqlari muhandisligi.",
    views: 1340
  }
];

const EcoVideoManager = {
  STORAGE_KEY: 'eco_akobir_videos',
  WATCHED_KEY: 'eco_akobir_watched_videos',

  getVideos() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return [...DEFAULT_ECO_VIDEOS];
  },

  saveVideos(videos) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(videos));
    } catch (e) {}
    this.renderCatalog();
  },

  getWatchedList() {
    try {
      const saved = localStorage.getItem(this.WATCHED_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  },

  markAsWatched(videoId) {
    const list = this.getWatchedList();
    if (!list.includes(videoId)) {
      list.push(videoId);
      localStorage.setItem(this.WATCHED_KEY, JSON.stringify(list));
    }
  },

  isWatched(videoId) {
    return this.getWatchedList().includes(videoId);
  },

  addVideo(newVideo) {
    const list = this.getVideos();
    const id = "vid-" + Date.now();
    const videoObj = {
      id: id,
      title: newVideo.title || "Yangi Ekologik Video Dars",
      category: newVideo.category || "Saralash va Qayta ishlash",
      duration: newVideo.duration || "10:00",
      xp: parseInt(newVideo.xp, 10) || 50,
      videoUrl: newVideo.videoUrl || "https://www.youtube.com/embed/OasbYWF4_S8",
      thumbnail: newVideo.thumbnail || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80",
      desc: newVideo.desc || "Ushbu video dars platforma administratori tomonidan yuklandi.",
      views: 0
    };
    list.unshift(videoObj);
    this.saveVideos(list);
    return videoObj;
  },

  deleteVideo(videoId) {
    let list = this.getVideos();
    list = list.filter(v => v.id !== videoId);
    this.saveVideos(list);
  },

  updateVideo(videoId, updatedData) {
    const list = this.getVideos();
    const idx = list.findIndex(v => v.id === videoId);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedData };
      this.saveVideos(list);
    }
  },

  renderCatalog(filterCategory = 'all', searchQuery = '') {
    const container = document.getElementById('videos-grid-container');
    if (!container) return;

    let list = this.getVideos();

    if (filterCategory !== 'all') {
      list = list.filter(v => v.category === filterCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(v => v.title.toLowerCase().includes(q) || v.desc.toLowerCase().includes(q));
    }

    const watchedCount = this.getWatchedList().length;
    const statsEl = document.getElementById('videos-stats-count');
    if (statsEl) {
      statsEl.textContent = `${list.length} ta dars (Ko'rilgan: ${watchedCount} ta)`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center bg-slate-900/50 rounded-3xl border border-slate-800 p-8">
          <i class="fa-solid fa-video-slash text-4xl text-slate-600 mb-3"></i>
          <h4 class="text-base font-bold text-white mb-1">Mos video darslar topilmadi</h4>
          <p class="text-xs text-slate-400">Qidiruv so'zini o'zgartiring yoki filtrlarni tozalang.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(video => {
      const watched = this.isWatched(video.id);

      return `
        <div class="bg-slate-900/90 border ${watched ? 'border-emerald-500/40' : 'border-slate-800'} hover:border-emerald-500/70 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
          
          <!-- Thumbnail & Play Button -->
          <div onclick="EcoVideoManager.openPlayerModal('${video.id}')" class="relative h-44 sm:h-48 overflow-hidden cursor-pointer bg-slate-950">
            <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80';">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
            
            <!-- Category Badge -->
            <span class="absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow-md">
              ${video.category}
            </span>

            <!-- Duration Badge -->
            <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950/90 text-white border border-slate-700 shadow-md flex items-center gap-1">
              <i class="fa-regular fa-clock text-[9px] text-amber-400"></i> ${video.duration}
            </span>

            <!-- Center Play Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 rounded-2xl bg-emerald-500/90 text-slate-950 flex items-center justify-center text-lg shadow-xl shadow-emerald-500/30 group-hover:scale-115 group-hover:bg-emerald-400 transition-all duration-300">
                <i class="fa-solid fa-play ml-0.5"></i>
              </div>
            </div>

            ${watched ? `
              <span class="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 shadow-md flex items-center gap-1">
                <i class="fa-solid fa-check"></i> Ko'rilgan
              </span>
            ` : ''}
          </div>

          <!-- Video Info -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h4 onclick="EcoVideoManager.openPlayerModal('${video.id}')" class="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 cursor-pointer leading-snug">
                ${video.title}
              </h4>
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                ${video.desc}
              </p>
            </div>

            <!-- Bottom action row -->
            <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span class="text-xs font-black text-amber-400 flex items-center gap-1">
                <i class="fa-solid fa-bolt"></i> +${video.xp} XP
              </span>

              <button onclick="EcoVideoManager.openPlayerModal('${video.id}')" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                <span>Tomosha qilish</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          </div>

        </div>
      `;
    }).join('');
  },

  openPlayerModal(videoId) {
    const list = this.getVideos();
    const video = list.find(v => v.id === videoId);
    if (!video) return;

    let modal = document.getElementById('video-player-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'video-player-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-fade-in';
      document.body.appendChild(modal);
    }

    const isAlreadyWatched = this.isWatched(video.id);

    // Format embed URL if YouTube
    let finalEmbedUrl = video.videoUrl;
    if (finalEmbedUrl.includes('watch?v=')) {
      finalEmbedUrl = finalEmbedUrl.replace('watch?v=', 'embed/');
    } else if (finalEmbedUrl.includes('youtu.be/')) {
      finalEmbedUrl = finalEmbedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div>
            <span class="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              ${video.category}
            </span>
            <h3 class="text-base sm:text-lg font-black text-white mt-1 line-clamp-1">${video.title}</h3>
          </div>
          <button onclick="EcoVideoManager.closePlayerModal()" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all cursor-pointer border border-slate-700">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Video Player Frame -->
        <div class="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner border border-slate-800 mb-4">
          ${finalEmbedUrl.startsWith('http') ? `
            <iframe src="${finalEmbedUrl}?autoplay=1&rel=0" title="${video.title}" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ` : `
            <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-950 to-emerald-950/40">
              <i class="fa-solid fa-circle-play text-5xl text-emerald-400 mb-3 animate-pulse"></i>
              <h4 class="text-base font-bold text-white mb-1">${video.title}</h4>
              <p class="text-xs text-slate-400 max-w-md">${video.desc}</p>
            </div>
          `}
        </div>

        <!-- Description & Action Row -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div class="flex items-center gap-3">
            <span class="text-xs text-slate-400">
              <i class="fa-regular fa-clock text-amber-400 mr-1"></i> Davomiyligi: <strong class="text-white">${video.duration}</strong>
            </span>
            <span class="text-xs text-amber-400 font-black">
              <i class="fa-solid fa-bolt mr-1"></i> Mukofot: +${video.xp} XP
            </span>
          </div>

          <div class="flex items-center gap-2">
            ${!isAlreadyWatched ? `
              <button onclick="EcoVideoManager.claimVideoXP('${video.id}', ${video.xp})" class="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95">
                <i class="fa-solid fa-circle-check"></i> Videoni Ko'rdim (+${video.xp} XP olish)
              </button>
            ` : `
              <span class="px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-xl flex items-center gap-1.5">
                <i class="fa-solid fa-check-double"></i> Ushbu darsdan XP olingan
              </span>
            `}
            <button onclick="EcoVideoManager.closePlayerModal()" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer">
              Yopish
            </button>
          </div>
        </div>

      </div>
    `;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (window.ecoAudio) window.ecoAudio.playClick();
  },

  closePlayerModal() {
    const modal = document.getElementById('video-player-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.innerHTML = '';
    }
    document.body.classList.remove('overflow-hidden');
  },

  claimVideoXP(videoId, xpAmount) {
    if (this.isWatched(videoId)) return;

    this.markAsWatched(videoId);
    if (typeof addPlayerXP === 'function') {
      addPlayerXP(xpAmount);
    }
    if (typeof showToast === 'function') {
      showToast(`Ajoyib! Video dars uchun +${xpAmount} XP qo'shildi!`);
    }
    if (window.ecoAudio) window.ecoAudio.playSuccess();

    this.closePlayerModal();
    this.renderCatalog();
  }
};

window.EcoVideoManager = EcoVideoManager;

let currentVideoCatFilter = 'all';
let currentVideoSearchQuery = '';

window.filterVideosByCategory = function(category, btnElement) {
  currentVideoCatFilter = category;
  document.querySelectorAll('.video-filter-btn').forEach(btn => {
    btn.classList.remove('active-filter', 'bg-emerald-500', 'text-white', 'border-emerald-500');
    btn.classList.add('bg-slate-800/80', 'text-slate-300', 'border-slate-700/80');
  });
  if (btnElement) {
    btnElement.classList.add('active-filter', 'bg-emerald-500', 'text-white', 'border-emerald-500');
    btnElement.classList.remove('bg-slate-800/80', 'text-slate-300', 'border-slate-700/80');
  }
  if (window.EcoVideoManager) {
    window.EcoVideoManager.renderCatalog(currentVideoCatFilter, currentVideoSearchQuery);
  }
  if (window.ecoAudio) window.ecoAudio.playClick();
};

window.handleVideoSearch = function(query) {
  currentVideoSearchQuery = query;
  if (window.EcoVideoManager) {
    window.EcoVideoManager.renderCatalog(currentVideoCatFilter, currentVideoSearchQuery);
  }
};

window.openVideoPlayerModal = function(id) {
  if (window.EcoVideoManager) window.EcoVideoManager.openPlayerModal(id);
};
window.closeVideoPlayerModal = function() {
  if (window.EcoVideoManager) window.EcoVideoManager.closePlayerModal();
};
window.claimVideoXP = function(id, xp) {
  if (window.EcoVideoManager) window.EcoVideoManager.claimVideoXP(id, xp);
};
