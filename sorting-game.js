// 100 ta Chiqindilarni Tafakkur Qilib Saralash O'yini
// Asoschi: Akobir | Akosh Eco

const ALL_100_WASTES = [
  // 1. Aralash qadoqlar
  { id: 1, name: "Tetra Pak (sut, sharbat paketi)", cat: "U", icon: "🧃", hint: "Maxsus qabul punkti bo'lmasa, aralash material bo'lgani uchun 'U' (Utilizatsiya)ga tashlanadi." },
  { id: 2, name: "Yog'li pitsa qutisi", cat: "U", icon: "🍕", hint: "Yog' tekkan qog'ozni qayta ishlab bo'lmaydi, shuning uchun 'U' (Utilizatsiya)." },
  { id: 3, name: "Chips paketi (metalllashgan plyonka)", cat: "U", icon: "🥔", hint: "Ko'p qatlamli folga va plastmassa birikmasi qayta ishlanmaydi ('U')." },
  { id: 4, name: "Qahva kapsulasi", cat: "U", icon: "☕", hint: "Maxsus qabul bo'lmasa, qahva quyqasi va plastik aralashmasi 'U'ga ketadi." },
  { id: 5, name: "Bir martalik qahva stakani (ichi plyonkali)", cat: "U", icon: "🥤", hint: "Ichidagi polietilen qoplama sababli oddiy qog'oz kabi erimaydi ('U')." },
  { id: 6, name: "Kassa cheki (termo qog'oz)", cat: "U", icon: "🧾", hint: "Termo-qog'oz tarkibida zaharli Bisfenol-A bo'lgani uchun makulaturaga qo'shilmaydi ('U')." },
  { id: 7, name: "Skotch lenta", cat: "U", icon: "🩹", hint: "Yelimli sintetik lenta qayta ishlanmaydi ('U')." },
  { id: 8, name: "Pufakchali o'ram plyonkasi", cat: "plastik", icon: "🫧", hint: "Polietilen (LDPE) plyonka toifasiga kiradi va plastik sifatida qayta ishlanadi." },
  { id: 9, name: "Penoplast (ko'pik) qadoq", cat: "U", icon: "📦", hint: "Ko'pirtirilgan polistirol maxsus punkt bo'lmasa 'U' hisoblanadi." },
  { id: 10, name: "Konfet qog'ozi", cat: "U", icon: "🍬", hint: "Metallangan plyonka qayta ishlanmaydi ('U')." },
  { id: 11, name: "Yuvilgan konserva bankasi", cat: "metall", icon: "🥫", hint: "Tozalangan tunuka bankalar metallga topshiriladi." },
  { id: 12, name: "Bo'sh aerozol balon", cat: "metall", icon: "🧴", hint: "To'liq bo'shatilgan va teshilmagan holatda metall hisoblanadi." },

  // 2. Xavfli chiqindilar
  { id: 13, name: "Batareyka (barmoq batareya)", cat: "xavfli", icon: "🔋", hint: "Og'ir metallar va ishqor tutuvchi xavfli chiqindi." },
  { id: 14, name: "Avtomobil akkumulyatori", cat: "xavfli", icon: "🪫", hint: "Qo'rg'oshin va sulfat kislotali II sinf xavfli chiqindi." },
  { id: 15, name: "Lyuminessent lampa (uzun truba)", cat: "xavfli", icon: "💡", hint: "Tarkibida simob bug'i borligi sababli I sinf xavfli chiqindi." },
  { id: 16, name: "Energiya tejovchi spiral lampa", cat: "xavfli", icon: "🏮", hint: "Simob tutadi, alohida maxsus xavfli qutiga topshiriladi." },
  { id: 17, name: "Simobli tibbiy termometr", cat: "xavfli", icon: "🌡️", hint: "Simob o'ta zaharli metall bo'lib, eng yuqori xavfli toifaga kiradi." },
  { id: 18, name: "Muddati o'tgan dori vositalari", cat: "xavfli", icon: "💊", hint: "Toksik dori qoldiqlari suv va tuproqni zaharlaydi (Xavfli/G-sinf)." },
  { id: 19, name: "Bo'yoq qoldig'i va bankasi", cat: "xavfli", icon: "🎨", hint: "Kimyoviy erituvchilar va pigmentlar xavfli chiqindi." },
  { id: 20, name: "Erituvchi (Rastvoritel / Aseton)", cat: "xavfli", icon: "🧪", hint: "Oson yonuvchi va uchuvchi toksik suyuqlik (Xavfli)." },
  { id: 21, name: "Mashina motor moyi", cat: "xavfli", icon: "🛢️", hint: "Og'ir uglevodorodlar tabiatda 10 yillab parchalanmaydi (Xavfli)." },
  { id: 22, name: "Pestitsid va zaharli ximikat idishi", cat: "xavfli", icon: "☠️", hint: "Qishloq xo'jaligi pestitsidlari o'ta xavfli kimyoviy moddadir." },
  { id: 23, name: "Tirnoq lak va suyuqligi", cat: "xavfli", icon: "💅", hint: "Kimyoviy zaharli polimerlar (Xavfli)." },
  { id: 24, name: "Bir martalik gaz balloncha", cat: "xavfli", icon: "🔥", hint: "Portlash va yong'in xavfi yuqori bo'lgan xavfli chiqindi." },
  { id: 25, name: "Sintetik yelim (Kley) qoldig'i", cat: "xavfli", icon: "🧲", hint: "Sintetik kimyoviy polimerlar xavfli chiqindilar sarasiga kiradi." },
  { id: 26, name: "Avtomobil antifrizi (Tosol)", cat: "xavfli", icon: "🚗", hint: "Etilenglikol o'ta zaharli kimyoviy moddadir (Xavfli)." },
  { id: 27, name: "Xlorli dezinfeksiya vositasi", cat: "xavfli", icon: "🧼", hint: "Konsentrlangan agressiv xlor birikmalari (Xavfli)." },

  // 3. Elektronika (E-waste)
  { id: 28, name: "Eski smartfon / telefon", cat: "elektronika", icon: "📱", hint: "Elektron platalar va chiplar (E-waste)." },
  { id: 29, name: "Zaryadlovchi kabel (USB / Type-C)", cat: "elektronika", icon: "🔌", hint: "Mis simlar va elektron ulagichlar (Elektronika)." },
  { id: 30, name: "Quloqchin (Naushnik)", cat: "elektronika", icon: "🎧", hint: "Kichik dinamiklar va mikrosxemalar (Elektronika)." },
  { id: 31, name: "Powerbank (Portativ litiy batareya)", cat: "elektronika", icon: "🔋", hint: "Litiy-ion batareya va boshqaruv platasi (Elektronika/Xavfli)." },
  { id: 32, name: "Printer kartridji", cat: "elektronika", icon: "🖨️", hint: "Toner kukuni va chip tutuvchi elektron qism." },
  { id: 33, name: "Kompyuter klaviaturasi", cat: "elektronika", icon: "⌨️", hint: "Klaviatura membranasi va kontrolleri (Elektronika)." },
  { id: 34, name: "Kompyuter sichqonchasi", cat: "elektronika", icon: "🖱️", hint: "Optik datchik va plata (Elektronika)." },
  { id: 35, name: "Flesh-xotira (USB fleshka)", cat: "elektronika", icon: "💾", hint: "NAND flesh chipi (Elektronika)." },
  { id: 36, name: "Mikroto'lqinli pech", cat: "elektronika", icon: "📻", hint: "Magnetron va transformator tutgan maishiy elektronika." },
  { id: 37, name: "Elektr choynak", cat: "elektronika", icon: "🫖", hint: "Elektr isitgich (TEN) va avtomatika (Elektronika)." },
  { id: 38, name: "Soch quritgich (Fen)", cat: "elektronika", icon: "💨", hint: "Elektr motor va spiral (Elektronika)." },
  { id: 39, name: "LED bayram garlandasi", cat: "elektronika", icon: "✨", hint: "Yorug'lik diodlari va simlar (Elektronika)." },
  { id: 40, name: "Noutbuk litiy batareyasi", cat: "elektronika", icon: "💻", hint: "Qayta ishlanadigan litiy batareya bloki (Elektronika)." },

  // 4. Shisha va keramika
  { id: 41, name: "Shisha banka (qopqoqsiz)", cat: "shisha", icon: "🫙", hint: "Cheksiz marta eritib qayta ishlanadigan toza shisha." },
  { id: 42, name: "Sinuq deraza oynasi", cat: "U", icon: "🪟", hint: "Deraza oynasida maxsus plyonka va qo'shimchalar bor, oddiy shisha pechida erimaydi ('U')." },
  { id: 43, name: "Chinni likopcha / piyola", cat: "U", icon: "🍽️", hint: "Chinni va keramika shisha emas, erish harorati juda yuqori ('U')." },
  { id: 44, name: "Sopol ko'za / idish", cat: "U", icon: "🏺", hint: "Kuygan loy (keramika) qayta erimaydi ('U')." },
  { id: 45, name: "Pyrex o'tga chidamli shisha idish", cat: "U", icon: "🍲", hint: "Issiqlikka chidamli borosilikat shisha oddiy idishlar bilan birga erimaydi ('U')." },
  { id: 46, name: "Cho'g'lanma lampochka (Ilich chirog'i)", cat: "U", icon: "💡", hint: "Yupqa shisha va volfram simi aralashgan, qayta ishlanmaydi ('U')." },
  { id: 47, name: "Dori shishachasi (yuvilgan)", cat: "shisha", icon: "🧴", hint: "Yuvib tozalangan dorivor shisha idishlar shishaga topshiriladi." },
  { id: 48, name: "Atir flakoni (purkagichi ajratilgan)", cat: "shisha", icon: "🌸", hint: "Purkagich mexanizmi olingan shisha idish (Shisha)." },
  { id: 49, name: "Akvarium shishasi", cat: "U", icon: "🐠", hint: "Chidamli armaturalangan shisha va germetik silikon aralashmasi ('U')." },
  { id: 50, name: "Ko'zoynak oynasi (linza)", cat: "U", icon: "👓", hint: "Optik qoplamali linzalar qayta ishlanmaydi ('U')." },

  // 5. Qog'oz va karton
  { id: 51, name: "Gazeta", cat: "qogoz", icon: "📰", hint: "Ikkilamchi xomashyo sifatidagi toza makulatura (Qog'oz)." },
  { id: 52, name: "Yog'li salfetka", cat: "U", icon: "🧻", hint: "Yog' va namlik bilan ifloslangan qog'oz qayta ishlanmaydi ('U')." },
  { id: 53, name: "Toza karton quti", cat: "qogoz", icon: "📦", hint: "Qimmatli qadoqlash xomashyosi (Qog'oz/Karton)." },
  { id: 54, name: "Ho'l yoki ifloslangan qog'oz", cat: "U", icon: "📄", hint: "Parchalangan va mog'orlagan qog'oz tolasi yaroqsiz ('U')." },
  { id: 55, name: "Laminatsiyalangan yaltiroq qog'oz", cat: "U", icon: "📑", hint: "Ustidagi yupqa plastik plyonka sababli erimaydi ('U')." },
  { id: 56, name: "Kalka qog'oz", cat: "U", icon: "📋", hint: "Maxsus kimyoviy ishlov berilgan qog'oz ('U')." },
  { id: 57, name: "Yelimli stiker qog'ozi", cat: "U", icon: "🏷️", hint: "Yelimi ko'p bo'lgani uchun qog'oz ishlab chiqarish uskunalarini buzadi ('U')." },
  { id: 58, name: "Tuxum katagi (qolip karton)", cat: "qogoz", icon: "🥚", hint: "Pulpa karton toifasidagi qog'oz xomashyosi." },
  { id: 59, name: "Gigiyenik (hojatxona) qog'ozi", cat: "U", icon: "🧻", hint: "Sanitariya qoidalariga ko'ra poligon utilizatsiyasiga ketadi ('U')." },
  { id: 60, name: "Kitob yoki daftar (temir simi olingan)", cat: "qogoz", icon: "📚", hint: "Toza sellyuloza qog'oz xomashyosi." },

  // 6. Plastik
  { id: 61, name: "PET ichimlik shishasi", cat: "plastik", icon: "🍾", hint: "Eng ko'p qayta ishlanadigan 1-toifali plastik (PET)." },
  { id: 62, name: "Shampun idishi (HDPE)", cat: "plastik", icon: "🧴", hint: "Yuqori zichlikdagi 2-raqamli qayta ishlanadigan plastik (HDPE)." },
  { id: 63, name: "Plastik paket (yupqa xalta)", cat: "plastik", icon: "🛍️", hint: "LDPE polimer plyonkasi (Plastik)." },
  { id: 64, name: "Bir martalik toza idish (PP/PS)", cat: "plastik", icon: "🍽️", hint: "Yuvilgan toza plastik idishlar plastik fraksiyasiga ketadi." },
  { id: 65, name: "Soch cho'tkasi", cat: "U", icon: "🪮", hint: "Aralash qattiq polimerlar va cho'tkalar qayta ishlanmaydi ('U')." },
  { id: 66, name: "Ruchka va qalam qobig'i", cat: "U", icon: "🖊️", hint: "Siyoh qoldiqlari va metall prujinali aralash plastik ('U')." },
  { id: 67, name: "Plastik bolalar o'yinchog'i", cat: "U", icon: "🧸", hint: "Tarkibida har xil noma'lum plastmassa birikmalari bor ('U')." },
  { id: 68, name: "Plastik quvur bo'lagi (PVC)", cat: "plastik", icon: "🪠", hint: "Sanoat polimerlari qayta ishlanadi (Plastik)." },
  { id: 69, name: "Tish cho'tkasi", cat: "U", icon: "🪥", hint: "Rezina va neylon tolalari ajralmaydigan aralash buyum ('U')." },
  { id: 70, name: "Maishiy kimyo kanistri (yuvilgan)", cat: "plastik", icon: "🛢️", hint: "Zich HDPE plastmassa idishi." },
  { id: 71, name: "Bir martalik tibbiy niqob", cat: "U", icon: "😷", hint: "Spunbond sintetik tolasi qayta ishlanmaydi ('U')." },
  { id: 72, name: "Plastik butilka qopqog'i (HDPE)", cat: "plastik", icon: "🔘", hint: "Qimmatbaho polietilen qopqoq (Plastik)." },

  // 7. Metall
  { id: 73, name: "Alyuminiy ichimlik bankasi", cat: "metall", icon: "🥤", hint: "Eng qimmatbaho qayta ishlanuvchi rangli metall (alyuminiy)." },
  { id: 74, name: "Toza oshxona folgasi", cat: "metall", icon: "✨", hint: "Toza yupqa alyuminiy qatlam (Metall)." },
  { id: 75, name: "Yog' va ovqat tekkan iflos folga", cat: "U", icon: "🥟", hint: "Qattiq ifloslangan folga metall pechida yonib ketadi ('U')." },
  { id: 76, name: "Mix, vint va gayka", cat: "metall", icon: "🔩", hint: "Temir qora metall parchasi." },
  { id: 77, name: "Eski alyuminiy kastryulka", cat: "metall", icon: "🍲", hint: "Qayta eritish uchun ikkilamchi metall." },
  { id: 78, name: "Eski eshik kaliti", cat: "metall", icon: "🗝️", hint: "Latun yoki po'lat qotishmasi (Metall)." },
  { id: 79, name: "Po'lat yoki mis sim", cat: "metall", icon: "➰", hint: "Qimmatli rangli yoki qora metall (Metall)." },
  { id: 80, name: "Bo'sh metall sprey idishi", cat: "metall", icon: "💨", hint: "To'liq bosimi chiqarilgan quruq metall korpus." },

  // 8. Organik
  { id: 81, name: "Meva-sabzavot po'sti (kartoshka, sabzi)", cat: "organik", icon: "🥕", hint: "Biogaz va kompost uchun a'lo organik xomashyo." },
  { id: 82, name: "Sintetik to'rli choy paketi", cat: "U", icon: "🫖", hint: "Choy to'rida polimer plastmassa bo'lgani sababli kompostda chirimaydi ('U')." },
  { id: 83, name: "Tuxum po'chog'i", cat: "organik", icon: "🥚", hint: "Kalsiyga boy tabiiy organik modda." },
  { id: 84, name: "Qahva quyqasi (kofe qoldig'i)", cat: "organik", icon: "☕", hint: "O'simliklar uchun ajoyib bio-o'g'it (Organik)." },
  { id: 85, name: "Pishgan go'sht va suyak qoldiqlari", cat: "organik", icon: "🍗", hint: "Biogaz stansiyalari uchun yuqori metan beruvchi organik chiqindi." },
  { id: 86, name: "Pishgan ovqat sarqiti", cat: "organik", icon: "🍛", hint: "Anaerob parchalanish uchun organik chiqindi." },
  { id: 87, name: "Xazon va qirqilgan maysazor o'ti", cat: "organik", icon: "🍂", hint: "Kompostlash uchun qimmatli yashil va jigarrang biooksid." },
  { id: 88, name: "So'ligan gul va xona o'simliklari", cat: "organik", icon: "🥀", hint: "Tabiiy o'simlik qoldig'i (Organik)." },
  { id: 89, name: "Banan yoki olmadagi kichik stiker", cat: "U", icon: "🏷️", hint: "Stiker sintetik yelim va plastmassadan tayyorlanadi ('U')." },
  { id: 90, name: "Uy hayvonlari axlati", cat: "U", icon: "🐾", hint: "Patogen parazitlar bo'lgani uchun umumiy kompostga tashlanmaydi ('U')." },

  // 9. Tekstil va hajmli chiqindilar
  { id: 91, name: "Yaroqli eski kiyim (toza ko'ylak)", cat: "tekstil", icon: "👕", hint: "Kiyishga yaroqli kiyimlar xayriya yoki ikkilamchi kiyim punktiga topshiriladi." },
  { id: 92, name: "Yirtilgan latta kiyim", cat: "tekstil", icon: "🩳", hint: "Ip va tola olish uchun qayta ishlanadigan tekstil." },
  { id: 93, name: "Eski poyabzal / krossovka", cat: "tekstil", icon: "👟", hint: "Rezina va charm tolalari kombinatsiyasi (Tekstil/Maxsus)." },
  { id: 94, name: "Yirtiq paypoq", cat: "tekstil", icon: "🧦", hint: "Paxta va sintetika tolasi (Tekstil)." },
  { id: 95, name: "Eski prujinali matras", cat: "tekstil", icon: "🛏️", hint: "Hajmli matras maxsus tekstil va metall yechish punktiga ketadi." },
  { id: 96, name: "Eski pol gilami", cat: "tekstil", icon: "🧶", hint: "Hajmli tekstil chiqindisi." },
  { id: 97, name: "Patli eski yostiq", cat: "tekstil", icon: "🪶", hint: "To'qimachilik tolasi (Tekstil)." },
  { id: 98, name: "Qurilish g'ishti va suvoq qoldiqlari", cat: "U", icon: "🧱", hint: "Maishiy qutilarga tashlanmaydi, faqat maxsus qurilish konteyneriga ('U')." },
  { id: 99, name: "Bolalar bir martalik tagligi (Pampers)", cat: "U", icon: "👶", hint: "Gelmeyuvchi polimer va gigiyenik ifloslanish sababli poligon chiqindisi ('U')." },
  { id: 100, name: "Sigaret qoldig'i (Bekob)", cat: "U", icon: "🚬", hint: "Filtrida plastmassa (atsetilsellyuloza) va zaharli smola bo'lgan poligon chiqindisi ('U')." }
];

// O'yin toifalari
const CATEGORIES_MAP = [
  { key: "plastik", name: "Plastik", color: "amber", icon: "🧴", btnClass: "border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/25 text-amber-300" },
  { key: "qogoz", name: "Qog'oz & Karton", color: "blue", icon: "📦", btnClass: "border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/25 text-blue-300" },
  { key: "shisha", name: "Shisha idish", color: "emerald", icon: "🍾", btnClass: "border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/25 text-emerald-300" },
  { key: "metall", name: "Metall", color: "cyan", icon: "🥫", btnClass: "border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300" },
  { key: "organik", name: "Organik", color: "yellow", icon: "🍌", btnClass: "border-yellow-700/50 bg-yellow-900/20 hover:bg-yellow-900/35 text-amber-200" },
  { key: "xavfli", name: "Xavfli chiqindi", color: "rose", icon: "🔋", btnClass: "border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/25 text-rose-300" },
  { key: "elektronika", name: "Elektronika (E-waste)", color: "purple", icon: "📱", btnClass: "border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/25 text-purple-300" },
  { key: "tekstil", name: "Tekstil / Kiyim", color: "pink", icon: "👕", btnClass: "border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/25 text-pink-300" },
  { key: "U", name: "U (Utilizatsiya / Chiqit)", color: "slate", icon: "🗑️", btnClass: "border-slate-500/50 bg-slate-800/80 hover:bg-slate-700 text-slate-200" }
];

// O'yin holati (25 ta savollik raund va 10s taymer)
let currentSortingContainer = null;
let gameSession = {
  activeBatch: [],
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  results: [],
  isFinished: false,
  questionTimer: 10,
  timerInterval: null,
  isAnsweringLocked: false
};

function stopSortingGameTimer() {
  if (gameSession.timerInterval) {
    clearInterval(gameSession.timerInterval);
    gameSession.timerInterval = null;
  }
  if (window.ecoAudio && typeof window.ecoAudio.stopCountdownSound === 'function') {
    window.ecoAudio.stopCountdownSound();
  }
}
window.stopSortingGameTimer = stopSortingGameTimer;
window.gameSession = gameSession;

function initSortingGame() {
  const container = document.getElementById('sorting-game-container');
  if (!container) return;
  currentSortingContainer = container;
  renderSortingGameUI(container);
}

function getActiveSortingContainer() {
  const dynamic = document.getElementById('game-dynamic-content');
  if (dynamic && dynamic.offsetParent !== null && dynamic.querySelector('#session-playfield')) {
    return dynamic;
  }
  const sortingCont = document.getElementById('sorting-game-container');
  if (sortingCont && sortingCont.offsetParent !== null && sortingCont.querySelector('#session-playfield')) {
    return sortingCont;
  }
  return currentSortingContainer || dynamic || sortingCont || document;
}

function getSortingScopeEl(id) {
  const active = getActiveSortingContainer();
  if (active && active.querySelector) {
    const el = active.querySelector('#' + id);
    if (el) return el;
  }
  if (currentSortingContainer && currentSortingContainer.querySelector) {
    const el = currentSortingContainer.querySelector('#' + id);
    if (el) return el;
  }
  return document.getElementById(id);
}

function updateSessionProgressUI() {
  const total = (gameSession.activeBatch && gameSession.activeBatch.length) ? gameSession.activeBatch.length : 25;
  const curr = Math.min(gameSession.currentIndex + 1, total);
  document.querySelectorAll('#session-progress').forEach(el => el.textContent = `${curr} / ${total}`);
  document.querySelectorAll('#session-score').forEach(el => el.textContent = `${gameSession.score} XP`);
}

function renderSortingGameUI(container) {
  if (container) currentSortingContainer = container;
  const target = currentSortingContainer || document.getElementById('sorting-game-container') || document.getElementById('game-dynamic-content');
  if (!target) return;

  target.innerHTML = `
    <div class="bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      <!-- Top Session Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/30">
            <i class="fa-solid fa-recycle animate-spin-slow"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-black text-white">Chiqindilarni Tafakkur Qilib Saralash</h3>
              <span class="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                100 ta Chiqindi Bazasi
              </span>
            </div>
            <p class="text-xs text-slate-400">Har bir savol uchun <strong>${(window.ECO_CONFIG && window.ECO_CONFIG.sortingTimer) || 10} soniya vaqt</strong> beriladi! Qaysi qutiga tashlanishini tanlang.</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Jarayon</span>
            <span id="session-progress" class="text-lg font-black text-emerald-400">0 / 25</span>
          </div>
          <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">To'plangan Ball</span>
            <span id="session-score" class="text-lg font-black text-amber-400">0 XP</span>
          </div>
        </div>
      </div>

      <!-- Main Playfield -->
      <div id="session-playfield">
        <!-- Start screen -->
        <div id="session-start-screen" class="text-center py-10 max-w-lg mx-auto">
          <div class="w-20 h-20 mx-auto mb-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl shadow-xl shadow-emerald-500/10">
            ♻️
          </div>
          <h4 class="text-2xl font-black text-white mb-2">${(window.ECO_CONFIG && window.ECO_CONFIG.sortingBatchSize) || 25} ta Tasodifiy Chiqindi Raundi</h4>
          <p class="text-xs text-slate-300 leading-relaxed mb-6">
            100 xil real hayotiy chiqindilar ichidan <strong>25 tasi random</strong> tarzda beriladi.<br/>
            Har bir savolga <strong>10 soniya vaqt</strong> ajratiladi. Javob tanlashingiz bilan to'g'ri/xato ekanligi ko'rsatilib, avtomatik keyingi savolga o'tiladi!
          </p>

          <button onclick="startNew25Session()" class="px-8 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black rounded-2xl shadow-xl shadow-emerald-500/20 text-sm transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5 mx-auto cursor-pointer">
            <i class="fa-solid fa-play"></i>
            <span>Raundni Boshlash (${(window.ECO_CONFIG && window.ECO_CONFIG.sortingTimer) || 10}s Taymer bilan)</span>
          </button>
        </div>

        <!-- Question Card (Hidden initially) -->
        <div id="session-question-card" class="hidden">
          
          <!-- Question Timer & Counter Header -->
          <div class="max-w-xl mx-auto mb-4">
            <div class="flex items-center justify-between mb-2 px-1">
              <span id="card-item-counter" class="text-xs uppercase font-extrabold text-emerald-400 tracking-wider">
                Chiqindi 1 / 25
              </span>
              <div class="flex items-center gap-2">
                <button onclick="EcoPauseEngine.togglePause()" type="button" class="eco-pause-btn flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-amber-300 border border-amber-500/40 transition-all active:scale-95 cursor-pointer shadow-sm">
                  <i class="fa-solid fa-pause text-[10px]"></i>
                  <span>Pauza</span>
                </button>
                <div id="card-timer-badge" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <i class="fa-solid fa-stopwatch animate-pulse"></i>
                  <span>Vaqt: <strong id="card-timer-seconds">10</strong>s</span>
                </div>
              </div>
            </div>
            <!-- Dynamic 10s progress bar -->
            <div class="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800 p-0.5 shadow-inner">
              <div id="card-timer-bar" class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-100 ease-linear" style="width: 100%;"></div>
            </div>
          </div>

          <!-- Central Waste Item Card -->
          <div class="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-center max-w-xl mx-auto mb-6 shadow-inner relative">
            <div id="sorting-card-anim" class="mb-3"></div>
            <div id="card-item-icon" class="text-6xl mb-3 filter drop-shadow-md transition-transform duration-200">📦</div>
            <h4 id="card-item-name" class="text-2xl font-black text-white mt-1 mb-2">Chiqindi nomi</h4>
            <div id="card-feedback" class="text-xs text-slate-400 italic min-h-[24px] flex items-center justify-center">
              Ushbu chiqindi qaysi toifaga kiradi? Tegishli qutini tanlang:
            </div>
          </div>

          <!-- 9 Sorting Category Buttons -->
          <div id="categories-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            ${CATEGORIES_MAP.map(cat => `
              <button onclick="submitCategoryAnswer('${cat.key}', this)" data-cat-key="${cat.key}" class="category-choice-btn eco-smooth-float p-4 rounded-xl border ${cat.btnClass} transition-all duration-200 flex items-center gap-3 text-left group cursor-pointer active:scale-95 shadow-lg hover:-translate-y-1.5 hover:shadow-xl">
                <span class="text-2xl eco-icon-levitate group-hover:scale-125 transition-transform shrink-0">${cat.icon}</span>
                <div>
                  <div class="font-bold text-xs group-hover:underline">${cat.name}</div>
                  <span class="text-[10px] opacity-75">${cat.key === 'U' ? 'Qayta ishlanmaydi' : 'Qayta ishlanadi'}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Final Summary Screen (Hidden initially) -->
        <div id="session-summary-screen" class="hidden"></div>
      </div>

    </div>
  `;
}

// 25 ta tasodifiy chiqindili yangi raundni boshlash
function startNew25Session() {
  stopSortingGameTimer();
  if (window.EcoPauseEngine) window.EcoPauseEngine.resetTimeouts();

  // Tasodifiy 100 tadan 25 tasini saralab olish (Fisher-Yates shuffle)
  const batchSize = (window.ECO_CONFIG && window.ECO_CONFIG.sortingBatchSize) ? window.ECO_CONFIG.sortingBatchSize : 25;
  const shuffled = [...ALL_100_WASTES].sort(() => 0.5 - Math.random());
  gameSession.activeBatch = shuffled.slice(0, batchSize);
  gameSession.currentIndex = 0;
  gameSession.score = 0;
  gameSession.correctCount = 0;
  gameSession.wrongCount = 0;
  gameSession.results = [];
  gameSession.isFinished = false;
  gameSession.isAnsweringLocked = false;

  document.querySelectorAll('#session-start-screen').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('#session-summary-screen').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('#session-question-card').forEach(el => el.classList.remove('hidden'));

  updateSessionProgressUI();
  displayCurrentItem();

  if (window.ecoAudio) window.ecoAudio.playClick();
}

function displayCurrentItem() {
  const item = gameSession.activeBatch[gameSession.currentIndex];
  if (!item) return;

  gameSession.isAnsweringLocked = false;

  const counterText = `Chiqindi ${gameSession.currentIndex + 1} / ${(gameSession.activeBatch ? gameSession.activeBatch.length : 25)}`;
  document.querySelectorAll('#card-item-icon').forEach(el => el.textContent = item.icon);
  document.querySelectorAll('#card-item-name').forEach(el => el.textContent = item.name);
  document.querySelectorAll('#card-item-counter').forEach(el => el.textContent = counterText);
  document.querySelectorAll('#card-feedback').forEach(el => {
    el.className = "text-xs text-slate-400 italic min-h-[24px] flex items-center justify-center";
    el.textContent = "Ushbu chiqindi qaysi toifaga kiradi? Tanlang:";
  });

  const animContainers = document.querySelectorAll('#sorting-card-anim');
  if (animContainers.length && window.Eco2DAnimator && typeof window.Eco2DAnimator.getSortingConveyorHtml === 'function') {
    const animHtml = window.Eco2DAnimator.getSortingConveyorHtml(item);
    animContainers.forEach(el => el.innerHTML = animHtml);
  }

  // Barcha tugmalarni asl holatiga qaytarish
  resetCategoryButtonsUI();

  // 20 soniyalik taymerni ishga tushirish!
  startQuestionTimer();
}

function resetCategoryButtonsUI() {
  const root = getActiveSortingContainer() || document;
  const buttons = root.querySelectorAll('.category-choice-btn');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove(
      'ring-4', 'ring-2', 'ring-emerald-400', 'ring-rose-500', 
      'bg-emerald-600/40', 'bg-rose-600/40', 'opacity-30', 
      'scale-105', 'scale-[1.02]'
    );
  });
}

function highlightCategoryButtons(correctCatKey, chosenCatKey) {
  const root = getActiveSortingContainer() || document;
  const buttons = root.querySelectorAll('.category-choice-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    const key = btn.getAttribute('data-cat-key');
    if (key === correctCatKey) {
      // To'g'ri toifa - yashil belgilash
      btn.classList.add('ring-4', 'ring-emerald-400', 'bg-emerald-600/40', 'scale-[1.02]');
    } else if (key === chosenCatKey) {
      // Foydalanuvchi noto'g'ri tanlagan toifa - qizil belgilash
      btn.classList.add('ring-4', 'ring-rose-500', 'bg-rose-600/40');
    } else {
      btn.classList.add('opacity-30');
    }
  });
}

// 10 soniyalik taymer mexanizmi
function startQuestionTimer(customRemaining) {
  stopSortingGameTimer();
  
  const totalSeconds = (window.ECO_CONFIG && window.ECO_CONFIG.sortingTimer) ? window.ECO_CONFIG.sortingTimer : 10;
  const initialRemaining = (typeof customRemaining === 'number' && customRemaining > 0) ? customRemaining : totalSeconds;
  gameSession.remainingSeconds = initialRemaining;
  const startTime = Date.now();
  updateTimerUI(Math.ceil(initialRemaining), (initialRemaining / totalSeconds) * 100);

  if (window.EcoPauseEngine) {
    window.EcoPauseEngine.registerGame({
      type: 'sorting',
      pause: () => { stopSortingGameTimer(); },
      resume: () => { startQuestionTimer(gameSession.remainingSeconds); },
      restart: () => { startNew25Session(); },
      getCurrentStats: () => ({
        counter: `Chiqindi ${gameSession.currentIndex + 1} / ${(gameSession.activeBatch ? gameSession.activeBatch.length : 25)}`,
        score: `${gameSession.score} XP`
      })
    });
  }

  gameSession.timerInterval = setInterval(() => {
    if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;

    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const remainingTime = Math.max(0, initialRemaining - elapsedSeconds);
    gameSession.remainingSeconds = remainingTime;
    const remainingDisplay = Math.ceil(remainingTime);
    const percent = Math.max(0, (remainingTime / totalSeconds) * 100);

    updateTimerUI(remainingDisplay, percent);
    if (window.ecoAudio && typeof window.ecoAudio.updateCountdownSound === 'function') {
      window.ecoAudio.updateCountdownSound(remainingTime, totalSeconds);
    }

    if (remainingTime <= 0) {
      stopSortingGameTimer();
      handleQuestionTimeout();
    }
  }, 80);
}

function updateTimerUI(seconds, percent) {
  document.querySelectorAll('#card-timer-seconds').forEach(el => el.textContent = seconds);
  document.querySelectorAll('#card-timer-bar').forEach(timerBar => {
    timerBar.style.width = `${percent}%`;
    if (seconds <= 3) {
      timerBar.className = "h-full bg-rose-500 transition-all duration-100 ease-linear rounded-full";
    } else if (seconds <= 6) {
      timerBar.className = "h-full bg-amber-500 transition-all duration-100 ease-linear rounded-full";
    } else {
      timerBar.className = "h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-100 ease-linear rounded-full";
    }
  });
  document.querySelectorAll('#card-timer-badge').forEach(timerBadge => {
    if (seconds <= 3) {
      timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse";
    } else if (seconds <= 6) {
      timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/40";
    } else {
      timerBadge.className = "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
    }
  });
}

// Vaqt tugaganda avtomatik xato deb hisoblab keyingisiga o'tish
function handleQuestionTimeout() {
  if (gameSession.isAnsweringLocked || gameSession.isFinished) return;
  gameSession.isAnsweringLocked = true;
  if (window.ecoAudio && typeof window.ecoAudio.playTimeoutBuzzer === 'function') {
    window.ecoAudio.playTimeoutBuzzer();
  }

  const currentItem = gameSession.activeBatch[gameSession.currentIndex];
  if (!currentItem) return;

  const correctCatObj = CATEGORIES_MAP.find(c => c.key === currentItem.cat);
  const correctName = correctCatObj ? correctCatObj.name : currentItem.cat;

  gameSession.wrongCount++;
  if (window.ecoAudio) window.ecoAudio.playError();

  // To'g'ri toifani ko'rsatib qo'yish
  highlightCategoryButtons(currentItem.cat, null);

  const feedbackEl = getSortingScopeEl('card-feedback');
  if (feedbackEl) {
    feedbackEl.className = "text-xs text-rose-400 font-bold min-h-[24px] flex items-center justify-center animate-pulse";
    feedbackEl.innerHTML = `<i class="fa-solid fa-clock mr-1.5"></i> Vaqt tugadi (10s)! To'g'ri toifa: «${correctName}». ${currentItem.hint}`;
  }

  gameSession.results.push({
    item: currentItem,
    userChoice: "timeout",
    isCorrect: false,
    correctName: correctName,
    isTimeout: true
  });

  updateSessionProgressUI();

  // AVTO-PAUZA: 2 ta savol belgilanmasa o'yin avtomatik to'xtatiladi
  if (window.EcoPauseEngine && window.EcoPauseEngine.recordTimeout()) {
    window.EcoPauseEngine.triggerAutoPause({
      onContinue: () => {
        gameSession.currentIndex++;
        if (gameSession.currentIndex >= gameSession.activeBatch.length) {
          finish25Session();
        } else {
          displayCurrentItem();
        }
      }
    });
    return;
  }

  // Keyingi savolga tezkor o'tish (380ms)
  setTimeout(() => {
    gameSession.currentIndex++;
    if (gameSession.currentIndex >= gameSession.activeBatch.length) {
      finish25Session();
    } else {
      displayCurrentItem();
    }
  }, 380);
}

// Foydalanuvchi javob belgilaganda: xato bo'lsa xato, to'g'ri bo'lsa to'g'ri ko'rsatish va keyingisiga o'tqazish
function submitCategoryAnswer(selectedCategory, clickedBtnElement) {
  if (gameSession.isAnsweringLocked || gameSession.isFinished) return;
  if (window.EcoPauseEngine && window.EcoPauseEngine.isGamePaused()) return;
  if (window.EcoPauseEngine) window.EcoPauseEngine.recordUserAnswer();
  gameSession.isAnsweringLocked = true;

  // Taymerni zudlik bilan to'xtatish!
  stopSortingGameTimer();

  const currentItem = gameSession.activeBatch[gameSession.currentIndex];
  if (!currentItem) return;

  const isCorrect = selectedCategory === currentItem.cat;

  const correctCatObj = CATEGORIES_MAP.find(c => c.key === currentItem.cat);
  const correctName = correctCatObj ? correctCatObj.name : currentItem.cat;

  // Tugmalarni topish (clickedBtnElement mavjud bo'lsa darhol o'zi olinadi)
  const root = getActiveSortingContainer() || document;
  const clickedBtn = clickedBtnElement || root.querySelector(`.category-choice-btn[data-cat-key="${selectedCategory}"]`) || document.querySelector(`.category-choice-btn[data-cat-key="${selectedCategory}"]`);
  const correctBtn = root.querySelector(`.category-choice-btn[data-cat-key="${currentItem.cat}"]`) || document.querySelector(`.category-choice-btn[data-cat-key="${currentItem.cat}"]`);

  // Tugmalarda vizual yashil/qizil belgilash
  highlightCategoryButtons(currentItem.cat, selectedCategory);

  if (isCorrect) {
    gameSession.correctCount++;
    const itemXP = 10;
    gameSession.score += itemXP;

    if (window.ecoAudio) window.ecoAudio.playSuccess();
    if (window.addPlayerXP) window.addPlayerXP(itemXP);

    // PAQLDOQ (FIREWORKS & CONFETTI) PORTLASHI
    if (window.EcoFxEngine) {
      const rect = clickedBtn ? clickedBtn.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
      window.EcoFxEngine.triggerPaqldoq(rect.left + rect.width / 2, rect.top + rect.height / 2, itemXP);
    }

    document.querySelectorAll('#card-feedback').forEach(feedbackEl => {
      feedbackEl.className = "text-xs text-emerald-400 font-bold min-h-[24px] flex items-center justify-center animate-bounce";
      feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check mr-1.5 text-sm"></i> To'g'ri! ${currentItem.hint} (+${itemXP} XP)`;
    });

    gameSession.results.push({
      item: currentItem,
      userChoice: selectedCategory,
      isCorrect: true
    });
  } else {
    gameSession.wrongCount++;
    if (window.ecoAudio) window.ecoAudio.playError();

    // XATO JAVOBDA: SEYSMIK SILKINISH, QIZIL VINETKA
    if (window.EcoFxEngine) {
      window.EcoFxEngine.triggerWrongFeedback(clickedBtn, correctBtn, root.querySelector('#session-playfield') || document.getElementById('session-playfield'));
    }

    document.querySelectorAll('#card-feedback').forEach(feedbackEl => {
      feedbackEl.className = "text-xs text-rose-400 font-bold min-h-[24px] flex items-center justify-center";
      feedbackEl.innerHTML = `<i class="fa-solid fa-circle-xmark mr-1.5 text-sm"></i> Noto'g'ri! To'g'ri toifa: «${correctName}». ${currentItem.hint}`;
    });

    gameSession.results.push({
      item: currentItem,
      userChoice: selectedCategory,
      isCorrect: false,
      correctName: correctName
    });
  }

  updateSessionProgressUI();

  // Chaqqon, tezkor va silliq avtomatik keyingisiga o'tish (380ms) - qotib qolish yo'q!
  setTimeout(() => {
    gameSession.currentIndex++;
    if (gameSession.currentIndex >= gameSession.activeBatch.length) {
      finish25Session();
    } else {
      displayCurrentItem();
    }
  }, 380);
}

function finish25Session() {
  stopSortingGameTimer();
  gameSession.isFinished = true;
  if (window.ecoAudio) window.ecoAudio.playLevelUp();

  // Bonus for high score
  let bonusXP = 0;
  if (gameSession.correctCount >= 20) {
    bonusXP = 50;
    if (window.addPlayerXP) window.addPlayerXP(bonusXP);
  }

  document.querySelectorAll('#session-question-card').forEach(el => el.classList.add('hidden'));
  const summary = getSortingScopeEl('session-summary-screen');
  document.querySelectorAll('#session-summary-screen').forEach(el => el.classList.remove('hidden'));
  if (summary) {
    summary.classList.remove('hidden');

    const accuracy = Math.round((gameSession.correctCount / 25) * 100);

    summary.innerHTML = `
      <div class="text-center py-6 animate-fade-in max-w-2xl mx-auto">
        <div class="w-20 h-20 mx-auto mb-4 rounded-3xl ${accuracy >= 80 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'} flex items-center justify-center text-4xl shadow-xl">
          ${accuracy >= 80 ? '🏆' : '📊'}
        </div>

        <h3 class="text-3xl font-black text-white mb-1">Raund Yakunlandi!</h3>
        <p class="text-xs text-slate-400 mb-6">25 ta tasodifiy chiqindini saralash bo'yicha to'liq hisobotingiz:</p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">To'g'ri javoblar</span>
            <span class="text-2xl font-black text-emerald-400">${gameSession.correctCount} / 25</span>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">Aniqlik darajasi</span>
            <span class="text-2xl font-black ${accuracy >= 80 ? 'text-emerald-400' : 'text-amber-400'}">${accuracy}%</span>
          </div>

          <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <span class="text-[10px] text-slate-500 uppercase font-bold block">Jami Ball / XP</span>
            <span class="text-2xl font-black text-amber-400">+${gameSession.score + bonusXP} XP</span>
          </div>
        </div>

        ${bonusXP > 0 ? `
          <div class="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl text-xs font-bold text-amber-300 mb-6 flex items-center justify-center gap-2">
            <i class="fa-solid fa-star"></i> A'lo natija uchun +50 XP bonus qo'shildi! Liderlar reytingida yuqoriladingiz!
          </div>
        ` : ''}

        <!-- Mistakes Breakdown (Xatolar Tahlili) -->
        <div class="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left mb-6">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-cyan-400"></i>
            Xatolar tahlili va o'rganilgan darslar:
          </h4>

          ${gameSession.wrongCount === 0 
            ? '<p class="text-xs text-emerald-400 font-bold">🎉 Qoyilmaqom! Birorta ham xatoga yo\'l qo\'ymadingiz. 100% toza ekologik tafakkur!</p>'
            : `
              <div class="space-y-2.5 max-h-56 overflow-y-auto custom-scrollbar pr-2 text-xs">
                ${gameSession.results.filter(r => !r.isCorrect).map(w => `
                  <div class="p-2.5 bg-slate-900 border border-rose-500/20 rounded-xl">
                    <div class="flex items-center justify-between text-white font-bold mb-1">
                      <span>${w.item.icon} ${w.item.name}</span>
                      <span class="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        To'g'ri: ${w.correctName}
                      </span>
                    </div>
                    <p class="text-[11px] text-slate-400">${w.item.hint}</p>
                  </div>
                `).join('')}
              </div>
            `
          }
        </div>

        <!-- Action buttons -->
        <div class="flex flex-wrap justify-center gap-3">
          <button onclick="startNew25Session()" class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-rotate-right"></i>
            <span>Keyingi 25 ta Tasodifiy Chiqindini Saralash</span>
          </button>

          <button onclick="switchMainTab('teacher-tab')" class="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer">
            <i class="fa-solid fa-trophy"></i>
            <span>Liderlar Jadvalini Ko'rish</span>
          </button>
        </div>

      </div>
    `;
  }
}
