// =======================================================================
// Akosh Eco / EcoAkobir — Video Darslar & Media Markazi Boshqaruvi
// Asoschi: Akobir | Talabalar uchun Video Darslar & Admin Boshqaruv Tizimi
// Barcha videolar rasmiy YouTube havolalari orqali to'liq ishlaydi
// =======================================================================

const DEFAULT_ECO_VIDEOS = [
  {
    id: "vid-1",
    title: "Chiqindini qayta ishlash bo'yicha ilmiy izlanishlar va amaliy tajribalar",
    category: "Saralash va Qayta ishlash",
    categoryKey: "saralash",
    tags: ["chiqindi", "saralash", "qayta ishlash", "ekologiya", "utilizatsiya"],
    duration: "16:45",
    xp: 75,
    videoUrl: "https://www.youtube.com/embed/M1ayYA0JPAo",
    youtubeId: "M1ayYA0JPAo",
    thumbnail: "https://img.youtube.com/vi/M1ayYA0JPAo/hqdefault.jpg",
    channel: "O'zbekiston 24 Telekanali",
    desc: "O'zbekiston 24 telekanali maxsus reportaji: mamlakatimizda maishiy chiqindilarni saralash, ikkilamchi xomashyoni qayta ishlash klasterlari va zamonaviy utilizatsiya texnologiyalari.",
    views: 3420
  },
  {
    id: "vid-2",
    title: "Sanoat Korxonasida Ekologik Audit (ISO 14001:2015 Xalqaro Standarti)",
    category: "Ekologik Audit",
    categoryKey: "audit",
    tags: ["audit", "ekologik audit", "iso 14001", "standart", "sanoat", "nazorat"],
    duration: "22:15",
    xp: 85,
    videoUrl: "https://www.youtube.com/embed/1fQdXbinIOk",
    youtubeId: "1fQdXbinIOk",
    thumbnail: "https://img.youtube.com/vi/1fQdXbinIOk/hqdefault.jpg",
    channel: "CDG Training Private Limited",
    desc: "Sanoat korxonalarida ISO 14001 atrof-muhit menejmenti tizimi bo'yicha ekologik audit o'tkazish, nomuvofiqliklarni aniqlash va me'yoriy nazorat tekshiruvlari.",
    views: 2850
  },
  {
    id: "vid-3",
    title: "Plastik Chiqindilardan Piroliz Usulida Sintetik Neft va Yoqilg'i Olish",
    category: "Qayta ishlash",
    categoryKey: "piroliz",
    tags: ["piroliz", "neft", "plastik", "yoqilgi", "sintetik", "reaktor"],
    duration: "12:30",
    xp: 80,
    videoUrl: "https://www.youtube.com/embed/RIT3UyoDE9Q",
    youtubeId: "RIT3UyoDE9Q",
    thumbnail: "https://img.youtube.com/vi/RIT3UyoDE9Q/hqdefault.jpg",
    channel: "Plast2Recycle",
    desc: "Kislorodsiz 450°C haroratli piroliz reaktori orqali ikkilamchi polimerlarni sintetik neft, mazut va gaz yoqilg'isiga aylantirishning to'liq ilmiy-amaliy jarayoni.",
    views: 4120
  },
  {
    id: "vid-4",
    title: "O'zbekistonda Biogaz Qurilmasi Ishlab Chiqarishi va Metan Reaktori",
    category: "Biotexnologiya",
    categoryKey: "biogaz",
    tags: ["biogaz", "biotexnologiya", "metan", "organik", "reaktor", "samarqand"],
    duration: "09:40",
    xp: 75,
    videoUrl: "https://www.youtube.com/embed/mOWCiFZ4Eck",
    youtubeId: "mOWCiFZ4Eck",
    thumbnail: "https://img.youtube.com/vi/mOWCiFZ4Eck/hqdefault.jpg",
    channel: "O‘zbekiston Respublikasi Energetika vazirligi",
    desc: "Samarqand viloyatida chorvachilik va organik chiqindilarni anaerob bijg'itish orqali biogaz va ekologik toza biogumus olish bo'yicha amaliy tajriba.",
    views: 3180
  },
  {
    id: "vid-5",
    title: "Tibbiyot Chiqindilarini 134°C Avtoklavda Zararsizlantirish va Sterilizatsiya",
    category: "Biologik Xavfsizlik",
    categoryKey: "tibbiyot",
    tags: ["tibbiyot", "xavfli", "avtoklav", "sterilizatsiya", "dezinfeksiya", "biologik"],
    duration: "11:20",
    xp: 75,
    videoUrl: "https://www.youtube.com/embed/yZ7Lmbjsx18",
    youtubeId: "yZ7Lmbjsx18",
    thumbnail: "https://img.youtube.com/vi/yZ7Lmbjsx18/hqdefault.jpg",
    channel: "Gient Medical Waste",
    desc: "SanQvaM me'yorlari bo'yicha yuqumli tibbiyot chiqindilarini yuqori bosimli bug' avtoklavida xavfsiz utilizatsiya qilish va ekologik zararsizlantirish markazi.",
    views: 2240
  },
  {
    id: "vid-6",
    title: "Zamonaviy Sanitar Chiqindi Poligonlari Qurilishi: Geomembrana va Filtrat Boshqaruvi",
    category: "Muhandislik",
    categoryKey: "poligon",
    tags: ["poligon", "geomembrana", "filtrat", "muhandislik", "sanitar", "metan"],
    duration: "14:10",
    xp: 85,
    videoUrl: "https://www.youtube.com/embed/pC1u6rJkyzA",
    youtubeId: "pC1u6rJkyzA",
    thumbnail: "https://img.youtube.com/vi/pC1u6rJkyzA/hqdefault.jpg",
    channel: "Evospect Engineering",
    desc: "Qattiq maishiy chiqindi poligonlarida HDPE geomembrana yotqizish, drenaj quvurlari orqali zaharli filtratni ushlash va metan quduqlari muhandisligi.",
    views: 3790
  },
  {
    id: "vid-7",
    title: "Chiqindilarni Qayta Ishlash: Sirkulyar Iqtisodiyot Tamoyillari",
    category: "Saralash va Qayta ishlash",
    categoryKey: "saralash",
    tags: ["sirkulyar", "iqtisodiyot", "saralash", "qayta ishlash", "ekologiya"],
    duration: "10:50",
    xp: 70,
    videoUrl: "https://www.youtube.com/embed/UudZ0G-4abo",
    youtubeId: "UudZ0G-4abo",
    thumbnail: "https://img.youtube.com/vi/UudZ0G-4abo/hqdefault.jpg",
    channel: "UZREPORT TV",
    desc: "UzReport TV tahliliy darsi: shahar xo'jaligida yashil standartlar, xomashyoni ikkilamchi aylantirish va tabiatni asrash.",
    views: 1980
  },
  {
    id: "vid-8",
    title: "Payariqlik fuqaro o'z xonadonida biogaz ishlab chiqarmoqda",
    category: "Biotexnologiya",
    categoryKey: "biogaz",
    tags: ["biogaz", "xonadon", "metan", "payariq", "samarqand", "tajriba"],
    duration: "08:15",
    xp: 70,
    videoUrl: "https://www.youtube.com/embed/EEtH5RaTKvA",
    youtubeId: "EEtH5RaTKvA",
    thumbnail: "https://img.youtube.com/vi/EEtH5RaTKvA/hqdefault.jpg",
    channel: "STV Samarkand",
    desc: "Oddiy sharoitda go'ng va organik chiqindilardan tekin gaz hamda elektr quvvati olish qurilmasining tuzilishi va afzalliklari.",
    views: 2650
  },
  {
    id: "vid-9",
    title: "Dozimetrik asboblar yordamida atrof muhitni radiatsiya ta'sirini aniqlash",
    category: "Radiatsiya & Nazorat",
    categoryKey: "radiatsiya",
    tags: ["radiatsiya", "radiatsya", "dozimetr", "dozimetriya", "dozimetrik", "geyger", "geiger", "rentgen", "nurlanish", "fon", "atrof muhit", "asboblar", "radiascan", "fnirsi"],
    duration: "11:45",
    xp: 85,
    videoUrl: "https://www.youtube.com/embed/VfH12AM2fD8",
    youtubeId: "VfH12AM2fD8",
    thumbnail: "https://img.youtube.com/vi/VfH12AM2fD8/hqdefault.jpg",
    channel: "Ekologik Nazorat va Dozimetriya",
    desc: "Dozimetr va radiometrlar (Geyger-Myuller hisoblagichi, RadiaScan) yordamida atrof-muhit, tuproq, qurilish materiallari va ochiq hududlarda tabiiy radiatsiya fonini (mZv/soat, mkR/soat) to'g'ri o'lchash, xavfsizlik me'yorlarini aniqlash bo'yicha to'liq amaliy videodars.",
    views: 4210
  },
  {
    id: "vid-10",
    title: "Dozimetr (Geiger counter) yordamida radiatsiyani o'lchash amaliyoti (FNIRSI GC-01)",
    category: "Radiatsiya & Nazorat",
    categoryKey: "radiatsiya",
    tags: ["radiatsiya", "radiatsya", "dozimetr", "dozimetriya", "fnirsi", "geiger", "geyger", "radioaktiv", "rentgen", "nurlanish", "o'lchash"],
    duration: "14:20",
    xp: 90,
    videoUrl: "https://www.youtube.com/embed/4GTz3UWipXo",
    youtubeId: "4GTz3UWipXo",
    thumbnail: "https://img.youtube.com/vi/4GTz3UWipXo/hqdefault.jpg",
    channel: "Radiatsion Xavfsizlik & Monitoring",
    desc: "Zamonaviy raqamli portativ dozimetr va Geyger hisoblagichi yordamida turli buyumlar, toshlar va atrof-muhitning radioaktiv nurlanish darajasini tekshirish hamda radiatsiyaviy xavfsizlikni baholash bo'yicha vizual amaliyot.",
    views: 3890
  }
];

const EcoVideoManager = {
  STORAGE_KEY: 'eco_akobir_videos_v6',
  WATCHED_KEY: 'eco_akobir_watched_videos',

  // YouTube havolasini tozalab to'g'ri embed URL ga aylantirish
  formatEmbedUrl(url) {
    if (!url) return '';
    let clean = url.trim();

    // YouTube ID ajratib olish
    let videoId = '';
    const matchWatch = clean.match(/(?:watch\?v=|embed\/|youtu\.be\/|v\/|shorts\/)([a-zA-Z0-9_-]{11})/);
    if (matchWatch && matchWatch[1]) {
      videoId = matchWatch[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return clean;
  },

  getYoutubeWatchUrl(url) {
    const match = (url || '').match(/(?:watch\?v=|embed\/|youtu\.be\/|v\/|shorts\/)([a-zA-Z0-9_-]{11})/);
    if (match && match[1]) {
      return `https://www.youtube.com/watch?v=${match[1]}`;
    }
    return url;
  },

  getVideos() {
    try {
      // Eski buzilgan kesh versiyalarini tozalash
      ['eco_akobir_videos', 'eco_akobir_videos_v2', 'eco_akobir_videos_v3', 'eco_akobir_videos_v4', 'eco_akobir_videos_v5'].forEach(k => {
        try { localStorage.removeItem(k); } catch(e){}
      });

      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          let updated = false;
          // Barcha standart videolar keshda ham bo'lishini 100% kafolatlash
          DEFAULT_ECO_VIDEOS.forEach(defVid => {
            const exists = parsed.some(v => v.id === defVid.id || v.youtubeId === defVid.youtubeId || (v.title && v.title.toLowerCase() === defVid.title.toLowerCase()));
            if (!exists) {
              parsed.push(defVid);
              updated = true;
            }
          });
          if (updated) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(parsed));
          }
          return parsed;
        }
      }
    } catch (e) {}

    // Agar kesh bo'lmasa, standart ro'yxatni saqlab qaytarish
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(DEFAULT_ECO_VIDEOS));
    } catch (e) {}
    return [...DEFAULT_ECO_VIDEOS];
  },

  saveVideos(videos) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(videos));
    } catch (e) {}
    this.renderCatalog(currentVideoCatFilter, currentVideoSearchQuery);
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
    const embedUrl = this.formatEmbedUrl(newVideo.videoUrl);

    // YouTube thumbnail avtomatik olish
    let thumb = newVideo.thumbnail;
    const matchId = (newVideo.videoUrl || '').match(/(?:watch\?v=|embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (matchId && matchId[1] && (!thumb || thumb.includes('unsplash'))) {
      thumb = `https://img.youtube.com/vi/${matchId[1]}/hqdefault.jpg`;
    }

    const videoObj = {
      id: id,
      title: newVideo.title || "Yangi Ekologik Video Dars",
      category: newVideo.category || "Saralash va Qayta ishlash",
      duration: newVideo.duration || "10:00",
      xp: parseInt(newVideo.xp, 10) || 50,
      videoUrl: embedUrl || "https://www.youtube.com/embed/M1ayYA0JPAo",
      thumbnail: thumb || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80",
      desc: newVideo.desc || "Ushbu video dars platforma administratori tomonidan yuklandi.",
      channel: newVideo.channel || "Akosh Eco Platform",
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

  renderCatalog(filterCategory = 'all', searchQuery = '') {
    const container = document.getElementById('videos-grid-container');
    if (!container) return;

    const allVideos = this.getVideos();
    let list = [...allVideos];

    // 1. Kategoriya bo'yicha saralash
    if (filterCategory && filterCategory !== 'all') {
      const fLower = filterCategory.toLowerCase();
      list = list.filter(v => {
        const cat = (v.category || '').toLowerCase();
        const catKey = (v.categoryKey || '').toLowerCase();
        const tags = (v.tags || []).map(t => t.toLowerCase());
        return cat.includes(fLower) || catKey.includes(fLower) || tags.includes(fLower);
      });
    }

    // 2. Kuchli va qulay qidiruv (Search) — tinish belgilarisiz, har bir so'z bo'yicha moslashuvchan
    if (searchQuery && searchQuery.trim() !== '') {
      // Tinish belgilari (&, +, -, /, vergul, nuqta)ni bo'sh joyga aylantirish
      const rawQ = searchQuery.toLowerCase().trim();
      const cleanQ = rawQ.replace(/[&,+\-_:;!?*()\[\]\/\\#@]/g, ' ').replace(/\s+/g, ' ').trim();
      const tokens = cleanQ.split(' ').filter(t => t.length > 1);

      list = list.filter(v => {
        const fullContent = `${v.title || ''} ${v.desc || ''} ${v.category || ''} ${v.channel || ''} ${(v.tags || []).join(' ')}`.toLowerCase();
        
        // Agar to'liq qidiruv matni to'g'ridan-to'g'ri mavjud bo'lsa
        if (fullContent.includes(rawQ) || fullContent.includes(cleanQ)) return true;

        // So'zlar bo'yicha moslik (kamida 1 ta kalit so'z yoki ildiz mos kelsa)
        if (tokens.length > 0) {
          const matchesAny = tokens.some(tok => {
            const stem = tok.length > 5 ? tok.slice(0, -2) : tok;
            return fullContent.includes(tok) || fullContent.includes(stem);
          });
          return matchesAny;
        }
        return false;
      });
    }

    // Statistika paneli
    const watchedCount = this.getWatchedList().length;
    const statsEl = document.getElementById('videos-stats-count');
    if (statsEl) {
      if (list.length === allVideos.length) {
        statsEl.textContent = `${list.length} ta dars (Ko'rilgan: ${watchedCount} ta)`;
      } else {
        statsEl.textContent = `${list.length} ta dars (${allVideos.length} tadan, Ko'rilgan: ${watchedCount} ta)`;
      }
    }

    // Qidiruvni tozalash tugmasini ko'rsatish/yashirish
    const clearBtn = document.getElementById('clear-video-search-btn');
    if (clearBtn) {
      if (searchQuery && searchQuery.trim() !== '') {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }

    // Bo'sh holat (Mos video topilmaganda)
    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center bg-slate-900/50 rounded-3xl border border-slate-800 p-8 shadow-inner animate-fade-in">
          <i class="fa-solid fa-video-slash text-5xl text-slate-600 mb-3 block"></i>
          <h4 class="text-base font-bold text-white mb-1">Mos video darslar topilmadi</h4>
          <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">
            "<span class="text-amber-400 font-bold">${searchQuery || filterCategory}</span>" so'zi bo'yicha hech qanday dars chiqmadi. Filtrlarni tozalab, barcha mavjud videolarni ko'rishingiz mumkin.
          </p>
          <button onclick="resetVideoFilters()" class="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95">
            <i class="fa-solid fa-rotate-left"></i> Filtrlarni tozalash (Barcha ${allVideos.length} ta darsni ko'rish)
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(video => {
      const watched = this.isWatched(video.id);
      const isRadiation = (video.category || '').toLowerCase().includes('radiat');

      return `
        <div class="bg-slate-900/90 border ${isRadiation ? 'border-amber-500/40 hover:border-amber-400' : (watched ? 'border-emerald-500/40' : 'border-slate-800')} hover:border-emerald-500/70 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
          
          <!-- Thumbnail & Play Button -->
          <div onclick="EcoVideoManager.openPlayerModal('${video.id}')" class="relative h-44 sm:h-48 overflow-hidden cursor-pointer bg-slate-950">
            <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80';">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            <!-- Category Badge -->
            <span class="absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${isRadiation ? 'bg-amber-950/90 text-amber-300 border border-amber-500/40' : 'bg-slate-950/85 text-emerald-400 border border-emerald-500/30'} backdrop-blur-md shadow-md flex items-center gap-1">
              ${isRadiation ? '<i class="fa-solid fa-radiation text-amber-400"></i>' : ''} ${video.category}
            </span>

            <!-- Duration Badge -->
            <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950/90 text-white border border-slate-700 shadow-md flex items-center gap-1">
              <i class="fa-regular fa-clock text-[9px] text-amber-400"></i> ${video.duration}
            </span>

            <!-- Center Play Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 rounded-2xl ${isRadiation ? 'bg-amber-500 text-slate-950 shadow-amber-500/40' : 'bg-red-600/90 text-white shadow-red-600/40'} hover:scale-115 flex items-center justify-center text-lg shadow-xl transition-all duration-300">
                <i class="fa-solid fa-play ml-0.5 text-lg"></i>
              </div>
            </div>

            ${watched ? `
              <span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 shadow-md flex items-center gap-1 font-black">
                <i class="fa-solid fa-check"></i> Ko'rilgan
              </span>
            ` : ''}
          </div>

          <!-- Video Info -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
                <i class="fa-brands fa-youtube text-red-500"></i>
                <span class="font-semibold text-slate-300">${video.channel || "YouTube"}</span>
              </div>
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

              <button onclick="EcoVideoManager.openPlayerModal('${video.id}')" class="px-3.5 py-1.5 rounded-xl ${isRadiation ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-400 hover:text-slate-950 border border-amber-500/30' : 'bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white'} text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-play text-[10px]"></i>
                <span>Tomosha qilish</span>
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
    const finalEmbedUrl = this.formatEmbedUrl(video.videoUrl);
    const directYoutubeUrl = this.getYoutubeWatchUrl(video.videoUrl);

    modal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-slate-900 border-2 border-emerald-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div class="min-w-0 pr-3">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full shrink-0">
                ${video.category}
              </span>
              <span class="text-[11px] text-slate-400 truncate">
                <i class="fa-brands fa-youtube text-red-500 mr-1"></i> ${video.channel || "YouTube"}
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-black text-white mt-1 line-clamp-1">${video.title}</h3>
          </div>
          <button onclick="EcoVideoManager.closePlayerModal()" class="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all cursor-pointer border border-slate-700 shrink-0">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Video Player Frame -->
        <div class="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner border border-slate-800 mb-3">
          <iframe 
            src="${finalEmbedUrl}?autoplay=1&rel=0&modestbranding=1" 
            title="${video.title}" 
            class="w-full h-full" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          ></iframe>
        </div>

        <!-- Description & Action Row -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div class="flex items-center gap-3">
            <span class="text-xs text-slate-400">
              <i class="fa-regular fa-clock text-amber-400 mr-1"></i> <strong class="text-white">${video.duration}</strong>
            </span>
            <span class="text-xs text-amber-400 font-black">
              <i class="fa-solid fa-bolt mr-1"></i> +${video.xp} XP
            </span>
            <a href="${directYoutubeUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors underline">
              <i class="fa-brands fa-youtube text-sm"></i>
              <span>YouTube'da ochish</span>
            </a>
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
    this.renderCatalog(currentVideoCatFilter, currentVideoSearchQuery);
  }
};

window.EcoVideoManager = EcoVideoManager;

let currentVideoCatFilter = 'all';
let currentVideoSearchQuery = '';

window.filterVideosByCategory = function(category, btnElement) {
  currentVideoCatFilter = category;
  document.querySelectorAll('.video-filter-btn').forEach(btn => {
    btn.classList.remove('active-filter', 'bg-emerald-500', 'text-white', 'border-emerald-500', 'bg-amber-500', 'text-slate-950');
    btn.classList.add('bg-slate-800/80', 'text-slate-300', 'border-slate-700/80');
  });
  if (btnElement) {
    if (category === 'Radiatsiya') {
      btnElement.classList.add('active-filter', 'bg-amber-500', 'text-slate-950', 'border-amber-400');
    } else {
      btnElement.classList.add('active-filter', 'bg-emerald-500', 'text-white', 'border-emerald-500');
    }
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

window.clearVideoSearch = function() {
  const inp = document.getElementById('videos-search-input');
  if (inp) inp.value = '';
  const clearBtn = document.getElementById('clear-video-search-btn');
  if (clearBtn) clearBtn.classList.add('hidden');
  currentVideoSearchQuery = '';
  if (window.EcoVideoManager) {
    window.EcoVideoManager.renderCatalog(currentVideoCatFilter, '');
  }
};

window.resetVideoFilters = function() {
  window.clearVideoSearch();
  const allBtn = document.querySelector('.video-filter-btn');
  window.filterVideosByCategory('all', allBtn);
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
