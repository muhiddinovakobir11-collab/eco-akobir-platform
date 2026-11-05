// 20 ta To'liq Ekologik Ta'lim va Audit Modullari
// Asoschi: Akobir | EcoAkobir Platformasi

const ECO_MODULES = [
  // I BLOK: Chiqindilar boshqaruvi va turlari
  {
    id: 1,
    category: "Chiqindilar boshqaruvi",
    categoryColor: "emerald",
    title: "1. Qattiq maishiy chiqindilar (QMQ) morfologiyasi",
    icon: "fa-trash-can",
    xp: 150,
    summary: "Aholi punktlarida hosil bo'ladigan QMQ tarkibi, turlari va ularning parchalanish muddatlari.",
    theory: `
      <h4>1. Qattiq maishiy chiqindilar nima?</h4>
      <p>Inson hayot faoliyati davomida iste'mol qilingan mahsulotlarning yaroqsiz holga kelgan qoldiqlari qattiq maishiy chiqindilar (QMQ) hisoblanadi. Shaharlarda aholi jon boshiga kuniga o'rtacha 0.7 - 1.2 kg QMQ hosil bo'ladi.</p>
      
      <h4>2. Morfologik tarkib:</h4>
      <ul>
        <li><strong>Organik chiqindilar:</strong> 35-45% (oziq-ovqat qoldiqlari, o'simliklar).</li>
        <li><strong>Qog'oz va karton:</strong> 15-20% (qayta ishlash uchun eng qimmatli xomashyo).</li>
        <li><strong>Plastik va polimerlar:</strong> 10-15% (eng xavfli qismi, yerda 200-450 yil parchalanmaydi).</li>
        <li><strong>Shisha:</strong> 5-8% (cheksiz marta qayta ishlanishi mumkin bo'lgan inert modda).</li>
        <li><strong>Metall:</strong> 2-4% (alyuminiy, temir idishlar).</li>
      </ul>
      
      <h4>3. Muammoning yechimi:</h4>
      <p>QMQni utilizatsiya qilishning eng samarali yo'li — manbada (xonadonlarda va korxonalarda) alohida yig'ish tizimini joriy etishdir.</p>
    `,
    quiz: [
      {
        question: "Plastik butilka tabiatda to'liq parchalanishi uchun qancha vaqt talab etiladi?",
        options: ["1-2 yil", "10-20 yil", "400-500 yil", "Umuman parchalanmaydi"],
        correct: 2,
        explanation: "Plastik polimerlar sintetik moddalar bo'lib, quyosh va mikroorganizmlar ta'sirida maydalansa-da, to'liq parchalanishiga 400-500 yil kerak bo'ladi."
      },
      {
        question: "QMQ tarkibida qaysi komponent eng katta ulushni (foizni) tashkil qiladi?",
        options: ["Plastik", "Organik chiqindi", "Shisha", "Elektron chiqindi"],
        correct: 1,
        explanation: "O'zbekistonda va ko'plab MDH davlatlarida QMQ tarkibining 35-45 foizini organik oziq-ovqat qoldiqlari tashkil etadi."
      }
    ],
    task: "1-modul amaliyoti: Xonadoningizda hosil bo'ladigan 3 kunlik chiqindini tahlil qiling va uning necha foizi organik modda ekanini hisoblang."
  },
  {
    id: 2,
    category: "Chiqindilar boshqaruvi",
    categoryColor: "emerald",
    title: "2. Xavfli va sanoat chiqindilari toifalari",
    icon: "fa-biohazard",
    xp: 180,
    summary: "Xavflilik sinflari (I-V sinflar), ularni zararsizlantirish va xavfsiz saqlash tartibi.",
    theory: `
      <h4>1. Chiqindilarning xavflilik darajasi bo'yicha tasnifi:</h4>
      <ul>
        <li><strong>I sinf (O'ta xavfli):</strong> Simob (gradusniklar, lyuminestsent lampalar), polixlorlangan bifenillar. Ekologik zarari tiklanmas darajada og'ir.</li>
        <li><strong>II sinf (Yuqori xavfli):</strong> Akkumulyatorlar, qo'rg'oshin, sulfat kislotasi. Tabiat 30 yilda zo'rg'a tiklanadi.</li>
        <li><strong>III sinf (O'rtacha xavfli):</strong> Ishlatilgan motor moylari, bo'yoq qoldiqlari, neft shlamlari. Tiklanish muddati kamida 10 yil.</li>
        <li><strong>IV sinf (Kam xavfli):</strong> Qurilish chiqindilari, bitum, shina va rezinalar. 3 yilda qisman tiklanadi.</li>
        <li><strong>V sinf (Xavfsiz / Amalda xavfsiz):</strong> Yog'och qirindilari, tozalanmagan qog'oz, bo'r.</li>
      </ul>
      <h4>2. Korxona majburiyati:</h4>
      <p>Har bir sanoat korxonasi o'z chiqindilariga 'Chiqindi pasporti' tuzishi va I-II sinf chiqindilarni faqat litsenziyaga ega poligonga topshirishi shart.</p>
    `,
    quiz: [
      {
        question: "Simobli termometr va lyuminestsent lampalar qaysi xavflilik sinfiga kiradi?",
        options: ["IV sinf", "III sinf", "II sinf", "I sinf (O'ta xavfli)"],
        correct: 3,
        explanation: "Simob o'ta zaharli og'ir metall bo'lib, uning birikmalari I sinf xavfli chiqindi hisoblanadi."
      }
    ],
    task: "Korxonada I sinf chiqindisi hosil bo'lsa, qanday hujjat (pasport) yuritilishi shart?"
  },
  {
    id: 3,
    category: "Chiqindilar boshqaruvi",
    categoryColor: "emerald",
    title: "3. Tibbiyot chiqindilarini boshqarish va zararsizlantirish",
    icon: "fa-syringe",
    xp: 200,
    summary: "Kasalxona va klinika chiqindilarining A, B, V, G toifalari va ularni xavfsiz yo'q qilish.",
    theory: `
      <h4>Tibbiy chiqindi toifalari (SanQvaM me'yorlari):</h4>
      <ul>
        <li><strong>A sinf (Epidemiologik xavfsiz):</strong> Qog'ozlar, palata tozalash chiqindilari, ovqat qoldiqlari (yuqumli bo'limlardan tashqari). Oq qopda yig'iladi.</li>
        <li><strong>B sinf (Xavfli / Infeksiyalangan):</strong> Qon tekkan bintlar, shprislar, operatsiya qoldiqlari. Sariq qoplarda yig'iladi va avtoklavda sterilizatsiya qilinadi.</li>
        <li><strong>V sinf (O'ta xavfli):</strong> Ayniqsa xavfli infeksiyalar (sil, kuydirgi) bilan kasallanganlar buyumlari. Qizil idishlarda saqlanadi.</li>
        <li><strong>G sinf (Toksikologik xavfli):</strong> Muddati o'tgan dori vositalari, sitostatiklar, dezinfeksiya moddalari. Qora qopda saqlanadi.</li>
      </ul>
    `,
    quiz: [
      {
        question: "Qon bilan ifloslangan tibbiy shprislar va bintlar qaysi rangdagi qopga yig'iladi?",
        options: ["Oq qop (A sinf)", "Sariq qop (B sinf)", "Yashil qop", "Ko'k qop"],
        correct: 1,
        explanation: "B sinf (infeksiyaviy xavfli) tibbiy chiqindilar sanitariya qoidalariga ko'ra sariq rangli maxsus qoplarga solinadi."
      }
    ],
    task: "Klinikada B sinf chiqindisini poligonga to'g'ridan-to'g'ri tashlash mumkinmi? Nega?"
  },
  {
    id: 4,
    category: "Chiqindilar boshqaruvi",
    categoryColor: "emerald",
    title: "4. Elektron chiqindilar (E-waste) va litiy batareyalar",
    icon: "fa-microchip",
    xp: 170,
    summary: "Eski smartfon, kompyuter va lityum-ion batareyalarni utilizatsiya qilish texnologiyasi.",
    theory: `
      <h4>E-waste muammosi:</h4>
      <p>Dunyo bo'yicha har yili 50 million tonnadan ortiq elektronika tashlab yuboriladi. Elektron platada oltin, kumush, mis kabi qimmatbaho metallar bo'lishi bilan birga qo'rg'oshin, kadmiy va berilliy kabi kanserogen moddalar ham mavjud.</p>
      <h4>Litiy-ion batareyalar:</h4>
      <p>Odatdagi axlat qutisiga tashlangan litiy batareyalar namlik va bosim ta'sirida qizib, poligonlarda o'z-o'zidan yonib ketishga (yong'in keltirib chiqarishga) sabab bo'ladi.</p>
    `,
    quiz: [
      {
        question: "Elektron chiqindilarning odatiy poligonda ko'milishidagi asosiy xavf nimada?",
        options: ["Ular yer osti suvlariga og'ir metallarni sizdiradi", "Ular juda tez chiriydi", "Ularni shamol uchirib ketadi", "Hech qanday xavfi yo'q"],
        correct: 0,
        explanation: "Qo'rg'oshin, simob va kadmiy tuproq orqali sizib, yer osti ichimlik suv qatlamlariga yetib boradi va zaharlaydi."
      }
    ],
    task: "Universitetda 'E-waste yig'ish qutisi' loyihasini ishlab chiqing."
  },
  {
    id: 5,
    category: "Chiqindilar boshqaruvi",
    categoryColor: "emerald",
    title: "5. Aylanma (Circular) iqtisodiyot va Zero Waste konsepsiyasi",
    icon: "fa-arrows-rotate",
    xp: 220,
    summary: "Chiziqli iqtisodiyotdan (olish-ishlab chiqarish-tashlash) yopiq siklli ekotizimga o'tish.",
    theory: `
      <h4>5R Qoidasi (Zero Waste):</h4>
      <ol>
        <li><strong>Refuse (Rad et):</strong> Keraksiz bir martalik buyumlardan voz kechish.</li>
        <li><strong>Reduce (Kamaytir):</strong> Iste'mol hajmini qisqartirish.</li>
        <li><strong>Reuse (Qayta ishlat):</strong> Buyumlarni ikkinchi marta boshqa maqsadda foydalanish.</li>
        <li><strong>Recycle (Qayta ishla):</strong> Xomashyoni yangi mahsulotga aylantirish.</li>
        <li><strong>Rot (Chirit):</strong> Organik chiqindilarni kompostga aylantirish.</li>
      </ol>
    `,
    quiz: [
      {
        question: "Zero Waste falsafasidagi eng birinchi va muhim qadam nima?",
        options: ["Chiqindini yoqish", "Chiqindini chuqur ko'mish", "Keraksiz bir martalik mahsulotdan voz kechish (Refuse)", "Hammasini poligonlarga yuborish"],
        correct: 2,
        explanation: "Eng yaxshi chiqindi — bu hosil bo'lmagan chiqindidir. Birinchi qadam 'Rad etish' (Refuse)."
      }
    ],
    task: "Guruh bilan 1 haftalik 'Zero Waste Challenge' rejasi tuzing."
  },

  // II BLOK: Qayta ishlash texnologiyalari
  {
    id: 6,
    category: "Qayta ishlash texnologiyalari",
    categoryColor: "blue",
    title: "6. Chiqindilarni saralash zavodlari (Sorting Plants)",
    icon: "fa-industry",
    xp: 190,
    summary: "Optik separatorlar, magnit ajratgichlar va fraksiyalarga ajratish konveyerlari.",
    theory: `
      <h4>Saralash jarayonining texnologik zanjiri:</h4>
      <p>1. <strong>Xaltalarni yirtgich (Bag opener):</strong> Paketlar ochilib, konveyerga tekis yoyiladi.<br>
      2. <strong>Barabanli g'alvir (Trommel):</strong> Kichik organik va tuproq fraksiyalari (0-60 mm) elanadi.<br>
      3. <strong>Magnit separator:</strong> Temir va po'lat parchalarini ajratib oladi.<br>
      4. <strong>Vigixrevoy (Eddy current) separator:</strong> Rangli metallarni (alyuminiy bankalar) surib chiqaradi.<br>
      5. <strong>Optik datchiklar (NIR):</strong> Plastik polimerlarini (PET, HDPE, PP) nurlar yordamida farqlab havo purkagich bilan ajratadi.</p>
    `,
    quiz: [
      {
        question: "Alyuminiy kabi rangli metallarni chiqindi oqimidan ajratishda qaysi qurilma ishlatiladi?",
        options: ["Oddiy doimiy magnit", "Eddy Current (Girdobli toklar) separatori", "Suvli basseyn", "Qo'l bilan saralash"],
        correct: 1,
        explanation: "Alyuminiy magnitga tortilmaydi, lekin girdobli o'zgaruvchan toklar yordamida uni itarib ajratish mumkin."
      }
    ],
    task: "O'zbekistondagi saralash zavodlarining texnologik samaradorligini tahlil qiling."
  },
  {
    id: 7,
    category: "Qayta ishlash texnologiyalari",
    categoryColor: "blue",
    title: "7. Organik chiqindilarni kompostlash va biogaz stansiyalari",
    icon: "fa-seedling",
    xp: 210,
    summary: "Anaerob va aerob parchalanish. Metan gazi va sifatli bio-o'g'it ishlab chiqarish.",
    theory: `
      <h4>Aerob kompostlash vs Anaerob fermentatsiya:</h4>
      <p><strong>Kompostlash:</strong> Kislorod ishtirokida 55-65°C haroratda patogen mikroblar yo'qolib, 2-3 oyda unumdor gumus hosil bo'ladi.<br>
      <strong>Biogaz:</strong> Kislorodsiz bioreaktorlarda metanogen bakteriyalar organikani parchalab 60-70% metan ($CH_4$) va 30-40% $CO_2$ gazi ajratadi. Ushbu gaz generator orqali elektr va issiqlik energiyasiga aylanadi.</p>
    `,
    quiz: [
      {
        question: "Biogaz stansiyasida organikadan asosan qaysi yonuvchi gaz hosil qilinadi?",
        options: ["Kislorod", "Metan (CH4)", "Azot", "Argon"],
        correct: 1,
        explanation: "Biogazning asosiy yonuvchi komponenti — metan (CH4) gazi."
      }
    ],
    task: "1 tonna oziq-ovqat chiqindisidan qancha biogaz olinishi mumkinligini hisoblang."
  },
  {
    id: 8,
    category: "Qayta ishlash texnologiyalari",
    categoryColor: "blue",
    title: "8. Chiqindini termik utilizatsiya qilish (Waste-to-Energy)",
    icon: "fa-fire-burner",
    xp: 230,
    summary: "Inseneratorlar, piroliz va plazmali gazlashtirish texnologiyalari.",
    theory: `
      <h4>Inseneratsiya va tutun tozalash:</h4>
      <p>Chiqindini to'g'ridan-to'g'ri ochiq joyda yoqish taqiqlanadi (dioksin va furanlar ajraladi). Zamonaviy <em>Waste-to-Energy</em> zavodlarida chiqindi 1100°C haroratda yondiriladi va 4 bosqichli katalitik filtrlar orqali zaharli gazlar to'liq tozalangach, atmosferaga faqat bug' va tozalangan havo chiqariladi.</p>
    `,
    quiz: [
      {
        question: "Chiqindi yoqilganda eng xavfli kanserogen moddalar qaysilar?",
        options: ["Dioksinlar va furanlar", "Oddiy suv bug'i", "Kislorod", "Argon"],
        correct: 0,
        explanation: "Past haroratda xlor tutgan polimerlar yonganda o'ta xavfli dioksin va furan gazlari ajraladi."
      }
    ],
    task: "Toshkent shahri uchun Waste-to-Energy zavodi qurishning iqtisodiy va ekologik rentabelligini solishtiring."
  },
  {
    id: 9,
    category: "Qayta ishlash texnologiyalari",
    categoryColor: "blue",
    title: "9. Sanitar chiqindi poligonlari va filtrat tozalash tizimi",
    icon: "fa-hill-rockslide",
    xp: 200,
    summary: "Oddiy axlatxona va zamonaviy sanitar poligon o'rtasidagi farq, geomembrana va sizma suvlar.",
    theory: `
      <h4>Sanitar poligon tuzilishi:</h4>
      <ul>
        <li><strong>Geomembrana (HDPE):</strong> Qalinligi kamida 2 mm bo'lgan polimer qatlam zaharli sizma suvlar (filtrat) yer osti suviga tushishini 100% to'sadi.</li>
        <li><strong>Filtrat drenaj tizimi:</strong> Sizib tushgan zaharli suyuqlik nasoslar bilan yig'ilib, teskari osmos filtrlarida tozalanadi.</li>
        <li><strong>Degazatsiya tizimi:</strong> Poligon ichida to'plangan metan gazi vertikal quvurlar orqali so'rib olinib yoqiladi (portlashning oldi olinadi).</li>
      </ul>
    `,
    quiz: [
      {
        question: "Sanitar poligonda yer osti suvlarini zaharli sizmalardan himoya qiluvchi asosiy to'siq nima?",
        options: ["Qum qatlami", "HDPE Geomembrana qatlami", "Yog'och taxtalar", "Oddiy tuproq"],
        correct: 1,
        explanation: "Maxsus yuqori zichlikdagi polietilen (HDPE) geomembrana suv o'tkazmaydigan izolyatsiyani ta'minlaydi."
      }
    ],
    task: "Poligon filtratining kimyoviy tarkibida qaysi moddalar ustunlik qiladi?"
  },
  {
    id: 10,
    category: "Qayta ishlash texnologiyalari",
    categoryColor: "blue",
    title: "10. Chiqindi logistikasi va marshrut optimallashtirish",
    icon: "fa-truck-moving",
    xp: 180,
    summary: "Chiqindi tashuvchi maxsus texnikalar, GPS monitoring va yoqilg'i tejamkorligi.",
    theory: `
      <h4>Aqlli logistika:</h4>
      <p>Chiqindilarni olib ketish shahar xarajatlarining 60-70% qismini tashkil qiladi. Sensorli qutilar (to'lganlik darajasini o'lchovchi datchiklar) va sun'iy intellektga asoslangan GPS marshrutlar transport chiqindilarini (CO2 emissiyasini) 30% ga qisqartiradi.</p>
    `,
    quiz: [
      {
        question: "Chiqindi qutilariga ultratovushli sensorlar o'rnatishdan asosiy maqsad nima?",
        options: ["Chiqindini qizdirish", "Quti qachon to'lganini bilib, faqat to'lganlariga mashina yuborish", "Qutini yo'qotmaslik", "O'g'rilikdan asrash"],
        correct: 1,
        explanation: "Faqat to'lgan konteynerlarni olib ketish orqali bo'sh konteynerlarga behuda mashina yuborilmaydi va yoqilg'i tejaladi."
      }
    ],
    task: "O'z tumaningizdagi chiqindi yig'ish punktlari uchun optimal logistika xaritasini chizing."
  },

  // III BLOK: Ekologik Audit
  {
    id: 11,
    category: "Ekologik Audit",
    categoryColor: "amber",
    title: "11. Ekologik audit asoslari va ISO 14001 standarti",
    icon: "fa-file-shield",
    xp: 250,
    summary: "Xalqaro ekologik menejment tizimi (EMS), auditorning vakolatlari va tekshirish bosqichlari.",
    theory: `
      <h4>Ekologik audit nima?</h4>
      <p>Ekologik audit — bu xo'jalik yurituvchi subyektning faoliyati atrof-muhitni muhofaza qilish to'g'risidagi qonun hujjatlariga va xalqaro standartlarga (masalan, ISO 14001) qanchalik mos kelishini mustaqil tahlil qilish jarayonidir.</p>
      <h4>Audit bosqichlari:</h4>
      <ol>
        <li>Dastlabki o'rganish va hujjatlar auditi (litsenziyalar, ruxsatnomalar, limitlar).</li>
        <li>Joyiga chiqib tekshirish (o'lchovlar o'tkazish, laboratoriya namunalari olish).</li>
        <li>Xulosalar va nomuvofiqliklarni (Non-conformities) qayd etish.</li>
        <li>Tuzatish choralari rejasini tuzish (Corrective Action Plan).</li>
      </ol>
    `,
    quiz: [
      {
        question: "ISO 14001 xalqaro standarti qaysi sohaga tegishli?",
        options: ["Sifatni boshqarish", "Ekologik menejment tizimi", "Mehnat muhofazasi", "Axborot xavfsizligi"],
        correct: 1,
        explanation: "ISO 14001 butun dunyoda tan olingan Ekologik menejment tizimi (EMS) standartidir."
      }
    ],
    task: "Virtual korxona uchun ISO 14001 ekologik siyosat deklaratsiyasini yozing."
  },
  {
    id: 12,
    category: "Ekologik Audit",
    categoryColor: "amber",
    title: "12. Korxona chiqindilari auditi va me'yoriy limitlar",
    icon: "fa-clipboard-check",
    xp: 240,
    summary: "Chiqindi hosil bo'lish normativlari (CHHN), limitdan oshiqcha chiqindi uchun javobgarlik.",
    theory: `
      <h4>Chiqindi limitlari:</h4>
      <p>Har bir ishlab chiqarish korxonasi davlat ekologiya organlari bilan kelishilgan 'Chiqindi hosil bo'lishi va ularni joylashtirish limitlari' normativiga ega bo'lishi kerak. Belgilangan limitdan oshgan har bir tonna chiqindi uchun to'lovlar 3 barobardan 10 barobargacha oshirilgan koeffitsiyent bilan hisoblanadi.</p>
    `,
    quiz: [
      {
        question: "Korxona limitdan ortiqcha chiqindi chiqarganda ekologik to'lov nima bo'ladi?",
        options: ["Bekor qilinadi", "Kamaytiriladi", "Oshirilgan koeffitsiyent bilan jarimaga aylanadi", "O'zgarishsiz qoladi"],
        correct: 2,
        explanation: "Qonunchilikka muvofiq, me'yordan ortiqcha joylashtirilgan chiqindilar uchun kompensatsiya to'lovlari oshirilgan tarifda undiriladi."
      }
    ],
    task: "G'isht zavodi misolida hosil bo'ladigan kul va shlak miqdorini me'yorlashtiring."
  },
  {
    id: 13,
    category: "Ekologik Audit",
    categoryColor: "amber",
    title: "13. Atmosfera havosi va oqova suvlarni audit qilish",
    icon: "fa-smog",
    xp: 260,
    summary: "MPE (Maksimal ruxsat etilgan tashlanma) va MPD (oqova suvlar) me'yorlari tahlili.",
    theory: `
      <h4>Auditor nimalarni tekshiradi?</h4>
      <ul>
        <li>Trubalardagi gaz tozalash qurilmalari (siklonlar, skrubberlar, matoli filtrlar) ning samaradorlik koeffitsiyenti (eng kamida 95-98% bo'lishi kerak).</li>
        <li>Oqova suvlarning pH darajasi, og'ir metallar, neft mahsulotlari va BPK/XPK (biokimyoviy/kimyoviy kislorod sarfi) ko'rsatkichlari.</li>
      </ul>
    `,
    quiz: [
      {
        question: "Sanoat korxonalarida havoni changdan tozalashda ishlatiladigan markazdan qochma qurilma nima deb ataladi?",
        options: ["Siklon", "Kondensator", "Resiver", "Transformator"],
        correct: 0,
        explanation: "Siklonlar chang zarrachalarini markazdan qochma kuch orqali havodan ajratib oluvchi asosiy uskunalardandir."
      }
    ],
    task: "Avtomobillarni yuvish shoxobchasi (moyka) uchun aylanma suv ta'minoti auditi o'tkazing."
  },
  {
    id: 14,
    category: "Ekologik Audit",
    categoryColor: "amber",
    title: "14. Ekologik to'lovlar va kompensatsiyalarni hisoblash",
    icon: "fa-calculator",
    xp: 270,
    summary: "Atrof-muhitni ifloslantirganlik uchun kompensatsiya to'lovlarini hisoblash formulalari.",
    theory: `
      <h4>Hisoblash formulasi (Umumiy ko'rinish):</h4>
      <p>$$T = M \\times B \\times K_i \\times K_z$$</p>
      <ul>
        <li>$M$ — tashlangan ifloslantiruvchi modda miqdori (tonna);</li>
        <li>$B$ — bazaviy hisoblash miqdoriga bog'langan stavka;</li>
        <li>$K_i$ — hududning ekologik holati bo'yicha koeffitsiyent;</li>
        <li>$K_z$ — xavflilik darajasi koeffitsiyenti.</li>
      </ul>
      <p>Agar korxona modernizatsiya qilib filtr o'rnatsa, ushbu to'lovlar 50% gacha kamayishi mumkin.</p>
    `,
    quiz: [
      {
        question: "Agar korxona filtr o'rnatib chiqindini qisqartirsa, ekologik soliq/to'lov qanday o'zgaradi?",
        options: ["Kamayadi va tejaladi", "Ko'payadi", "O'zgarmaydi", "Jazo qo'llaniladi"],
        correct: 0,
        explanation: "Ekologik investitsiyalar korxona to'lovlarini kamaytiradi va iqtisodiy foyda keltiradi."
      }
    ],
    task: "Virtual 10 tonna oltingugurt gazi (SO2) tashlanmasi uchun kompensatsiya to'lovini hisoblang."
  },
  {
    id: 15,
    category: "Ekologik Audit",
    categoryColor: "amber",
    title: "15. Ekologik xavf-xatarlar va avariyaviy vaziyatlar auditi",
    icon: "fa-triangle-exclamation",
    xp: 220,
    summary: "Neft quvurlarining yorilishi, kimyoviy sizib chiqishlar va favqulodda rejalashtirish (ERP).",
    theory: `
      <h4>Favqulodda reja (Emergency Response Plan):</h4>
      <p>Ekologik auditor korxonaning eng yomon ssenariyga tayyorligini tekshiradi. Neft omborida to'kilish bo'lsa, qum to'siqlari va lokalizatsiya vositalari bormi? Kimyoviy moddalar omborida neytrallovchi eritmalar mavjudmi?</p>
    `,
    quiz: [
      {
        question: "Yoqilg'i omborida neft mahsulotlari yerga to'kilishining oldini olish uchun nima quriladi?",
        options: ["Obvalovka (himoya tuproq devori yoki beton to'siq)", "Gullar ekiladi", "Hech narsa qurilmaydi", "Chuqur quduq qaziladi"],
        correct: 0,
        explanation: "Rezervuar atrofida maxsus beton yoki tuproq to'siq (obvalovka) rezervuardagi suyuqlik to'kilsa yoyilib ketmasligini ta'minlaydi."
      }
    ],
    task: "Yoqilg'i quyish shoxobchasi (AYQS) uchun avariyaviy to'kilishga qarshi audit nazorat varaqasi tuzing."
  },

  // IV BLOK: Ekologik Ekspertiza va Atrof-muhitni Boshqarish
  {
    id: 16,
    category: "Ekologik Ekspertiza",
    categoryColor: "purple",
    title: "16. Davlat ekologik ekspertizasi tartibi va bosqichlari",
    icon: "fa-stamp",
    xp: 260,
    summary: "O'zbekiston Respublikasi 'Ekologik ekspertiza to'g'risida'gi Qonuni va xulosa berish tartibi.",
    theory: `
      <h4>Ekspertiza bosqichlari:</h4>
      <ol>
        <li><strong>I bosqich:</strong> Atrof-muhitga ta'sir to'g'risidagi bayonot loyihasi (ZVOS) — loyihalashdan oldin.</li>
        <li><strong>II bosqich:</strong> Atrof-muhitga ta'siri to'g'risidagi bayonot (ZVO) — obyekt qurilish jarayonida.</li>
        <li><strong>III bosqich:</strong> Ekologik oqibatlar to'g'risidagi bayonot (ZEO) — obyekt ishga tushishidan oldin.</li>
      </ol>
      <p>Davlat ekologik ekspertizasining ijobiy xulosasisiz hech qanday zavod yoki inshootni moliyalashtirish va qurishga yo'l qo'yilmaydi.</p>
    `,
    quiz: [
      {
        question: "Zavod qurilishi boshlanishidan oldin birinchi qaysi hujjat ekspertizaga topshiriladi?",
        options: ["ZEO (Ekologik oqibatlar bayonoti)", "ZVOS (Ta'sir to'g'risidagi bayonot loyihasi)", "Soliq deklaratsiyasi", "Statistika hisoboti"],
        correct: 1,
        explanation: "Qurilishdan oldin dastlabki bosqichda ZVOS (PZVOS) ishlab chiqiladi va ekspertizadan o'tkaziladi."
      }
    ],
    task: "Yangi charm zavodi loyihasi uchun ekspertiza arizasi paketini shakllantiring."
  },
  {
    id: 17,
    category: "Ekologik Ekspertiza",
    categoryColor: "purple",
    title: "17. Atrof-muhitga ta'sirni baholash (AMTB / EIA)",
    icon: "fa-scale-balanced",
    xp: 280,
    summary: "Flora, fauna, tuproq, yer osti suvlari va aholi salomatligiga ehtimoliy ta'sirlar matritsasi.",
    theory: `
      <h4>Leopold matritsasi:</h4>
      <p>Ekspertlar loyiha harakatlarini (qurilish, ekspluatatsiya, chiqindi tashlash) atrof-muhit omillariga nisbatan baholaydi. Har bir ta'sir kuchi (1 dan 10 gacha) va ahamiyati bo'yicha baholanadi. Agar umumiy zarar chegaradan oshsa, loyiha texnologiyasi o'zgartiriladi.</p>
    `,
    quiz: [
      {
        question: "AMTB (Atrof-muhitga ta'sirni baholash) ning bosh maqsadi nima?",
        options: ["Loyihani arzonlashtirish", "Bo'lajak ekologik zararni oldindan bashorat qilish va oldini olish", "Faqat jarima undirish", "Qurilishni tezlashtirish"],
        correct: 1,
        explanation: "AMTB ning tub mohiyati loyiha amalga oshirilmasdan oldin tabiatga yetishi mumkin bo'lgan zararlarning oldini olishdir."
      }
    ],
    task: "Gidroelektr stansiyasi (GES) qurilishining baliqlar migratsiyasiga ta'sirini baholang."
  },
  {
    id: 18,
    category: "Atrof-muhitni Boshqarish",
    categoryColor: "purple",
    title: "18. Jamoatchilik eshituvlari va ekologik konsalting",
    icon: "fa-users-viewfinder",
    xp: 210,
    summary: "Mahalliy aholi va nohukumat tashkilotlarning yirik loyihalar bo'yicha fikrini olish mexanizmi.",
    theory: `
      <h4>Oorxus konvensiyasi tamoyillari:</h4>
      <p>Fuqarolar o'z yashash joylarida qurilayotgan obyektlar (masalan, kimyo zavodi, chiqindi yoqish stansiyasi) haqida to'liq ekologik ma'lumot olish, ochiq muhokamalarda qatnashish va sudga murojaat qilish huquqiga ega.</p>
    `,
    quiz: [
      {
        question: "Jamoatchilik eshituvida aholining e'tirozlari qanday ko'rib chiqiladi?",
        options: ["E'tiborga olinmaydi", "Protokolga kiritilib, loyiha muallifiga tuzatish talabi qo'yiladi", "Bekor qilinadi", "Yashirin tutiladi"],
        correct: 1,
        explanation: "Barcha asosli e'tirozlar rasmiy protokolga olinadi va ekspertiza xulosasida hisobga olinishi qonunan shart."
      }
    ],
    task: "Shahar bog'i o'rnida savdo markazi qurilishiga qarshi simulyatsion jamoatchilik eshituvini tashkil qiling."
  },
  {
    id: 19,
    category: "Atrof-muhitni Boshqarish",
    categoryColor: "purple",
    title: "19. Shaharlarni ekologik rejalashtirish (Urban Ecology)",
    icon: "fa-city",
    xp: 220,
    summary: "Sanitar-himoya zonalari (SHZ), shamol atirgulini (roza vetrov) hisobga olish va yashil belbog'lar.",
    theory: `
      <h4>Shamol guli va Sanitar zona:</h4>
      <p>Sanoat zonalari har doim shahar turar-joylariga nisbatan esadigan shamollar yo'nalishi (roza vetrov) hisobga olinib, shamolning teskari tomoniga joylashtiriladi. I sinf xavfli zavodlar atrofida kamida 1000 metrli yashil daraxtzor sanitar-himoya zonasi bo'lishi shart.</p>
    `,
    quiz: [
      {
        question: "Zavod tutuni shaharga kelmasligi uchun shaharsozlikda nima hisobga olinadi?",
        options: ["Daryo oqimi", "Shamol yo'nalishi (Shamol atirguli / Roza vetrov)", "Temir yo'l yo'nalishi", "Tog' balandligi"],
        correct: 1,
        explanation: "Ko'p yillik shamol esish yo'nalishi tahlil qilinib, shahar iflos havodan xoli bo'ladigan tomonga rejalashtiriladi."
      }
    ],
    task: "Kichik shaharcha master-rejasida sanoat va turar-joy zonalarini to'g'ri joylashtiring."
  },
  {
    id: 20,
    category: "Atrof-muhitni Boshqarish",
    categoryColor: "purple",
    title: "20. Ekologik monitoring va Geografik axborot tizimlari (GIS)",
    icon: "fa-satellite",
    xp: 300,
    summary: "Sun'iy yo'ldosh tasvirlari, dronlar va datchiklar orqali noqonuniy chiqindixonalarni aniqlash.",
    theory: `
      <h4>Raqamli ekologiya:</h4>
      <p>Kosmik suratlarni tahlil qilish (Sentiel, Landsat) va multispektral kameralar o'rnatilgan dronlar yordamida qorong'i joylarda noqonuniy tashlangan chiqindilar, o'rmon kesilishi yoki oqova suvlarning daryoga quyilishini real vaqt rejimida aniqlash mumkin. Barcha ma'lumotlar yagona GeoPortal tizimida aks etadi.</p>
    `,
    quiz: [
      {
        question: "Noqonuniy chiqindixonalarni tez va keng miqyosda monitoring qilishning eng zamonaviy vositasi nima?",
        options: ["Qo'lda xat yozish", "Sun'iy yo'ldosh va dronlar (GIS tizimlari)", "Gazeta o'qish", "Kutish"],
        correct: 1,
        explanation: "GIS va masofadan zondlash texnologiyalari katta maydonlardagi noqonuniy chiqindilarni bir zumda xaritada ko'rsatib beradi."
      }
    ],
    task: "Qarshi yoki Nukus shahri atrofidagi poligonlarning sun'iy yo'ldosh xaritasini o'rganing."
  }
];
