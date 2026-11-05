// 100 ta Davlat Ekologik Ekspertizasi (EIA / ZVOS / AMTB) Savollari Bazasi
// Asoschi: Akobir | EcoAkobir Platformasi

const ALL_100_EXPERTISE_QUESTIONS = [
  {
    "id": 1,
    "title": "1. I toifali sement zavodi aholi yashash punktidan 400 metr masofada loyihalashtirilgan.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Sanitariya me'yorlari bo'yicha I toifali sement zavodi uchun kamida 1000 metr sanitar-himoya zonasi talab etiladi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #1 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">I toifali sement zavodi aholi yashash punktidan </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Loyihani rad etish va obyektni aholi yashash hududidan kamida 1000 metr uzoqlikka ko'chirish talabini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! 1000m sanitar zona aholining chang va shovqindan zararlanishining oldini oladi."
      },
      {
        "text": "350-400 metrga maxsus ruxsat berib tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! 1000m sanitar zona aholining chang va shovqindan zararlanishining oldini oladi."
      }
    ]
  },
  {
    "id": 2,
    "title": "2. II toifali parrandachilik fabrikasi (100 ming bosh tovuq) uchun sanitar zona tahlili.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Loyihada 200 metr ko'rsatilgan, normativ talab bo'yicha kamida 500 metr bo'lishi shart.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #2 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">II toifali parrandachilik fabrikasi (100 ming bo</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Loyiha lokatsiyasini 500 metrlik normaga muvofiqlashtirish sharti bilan qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Parrandachilikdan ajraladigan ammiak va o'tkir hid 500 metrgacha tarqaladi."
      },
      {
        "text": "200 metrni yetarli deb xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Parrandachilikdan ajraladigan ammiak va o'tkir hid 500 metrgacha tarqaladi."
      }
    ]
  },
  {
    "id": 3,
    "title": "3. III toifali mebel va yog'ochga ishlov berish sexi uchun sanitar zona.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Turar-joyga eng yaqin masofa 180 metr qilib loyihalangan (Me'yor: 300 metr).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #3 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">III toifali mebel va yog'ochga ishlov berish sex</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Aholi xavfsizligi uchun sanitar zonani 300 metrgacha kengaytirish yoki shovqin-chang yutuvchi texnologiyalar qo'shish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yog'och changi va lak bug'lari 300 metrli zonada so'riladi."
      },
      {
        "text": "Hech qanday o'zgarishsiz tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yog'och changi va lak bug'lari 300 metrli zonada so'riladi."
      }
    ]
  },
  {
    "id": 4,
    "title": "4. IV toifali avtomobillarga gaz to'ldirish kompressor stansiyasi (AGTKS).",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "AGTKS stansiyasi ko'p qavatli uylardan 60 metr masofada rejalashtirilgan (Me'yor: kamida 100m).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #4 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">IV toifali avtomobillarga gaz to'ldirish kompres</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yong'in va portlash xavfini inobatga olib loyihani aholidan kamida 100 metr masofaga ko'chirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yuqori bosimli metan kompressorlari uchun 100 metrlik xavfsizlik masofasi qat'iy talabdir."
      },
      {
        "text": "60 metr yetarli deb ijobiy xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yuqori bosimli metan kompressorlari uchun 100 metrlik xavfsizlik masofasi qat'iy talabdir."
      }
    ]
  },
  {
    "id": 5,
    "title": "5. Qabriston va dafn etish joylari yaqinida oziq-ovqat ishlab chiqarish korxonasi.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Oziq-ovqat kombinati qabristondan 150 metr masofada qurilmoqda (Me'yor: kamida 500 metr).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #5 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qabriston va dafn etish joylari yaqinida oziq-ov</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Mikrobiologik xavfsizlik talabiga binoan loyihani qat'iyan rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yer osti suvlari orqali patogen mikroblar oziq-ovqatga o'tish xavfi mavjud."
      },
      {
        "text": "Gigiyena qoidalariga zid bo'lsa-da ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yer osti suvlari orqali patogen mikroblar oziq-ovqatga o'tish xavfi mavjud."
      }
    ]
  },
  {
    "id": 6,
    "title": "6. Xavfli kimyoviy xomashyo ombori atrofida yashil himoya belbog'i loyihasi.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Loyihada daraxt ekish ko'zda tutilmagan, faqat beton to'siq ko'rsatilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #6 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Xavfli kimyoviy xomashyo ombori atrofida yashil </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sanitar zona bo'ylab kamida 40% maydonda bargli va ignabargli daraxtlar ekish majburiyatini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yashil o'simliklar zaharli gaz sizganda havoni tozalashga yordam beradi."
      },
      {
        "text": "Beton to'siq yetarli deb hisoblash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yashil o'simliklar zaharli gaz sizganda havoni tozalashga yordam beradi."
      }
    ]
  },
  {
    "id": 7,
    "title": "7. Tog' yonbag'rida sel xavfi bo'lgan hududda dam olish maskani (Sanatoriy) qurilishi.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Hudud Favqulodda vaziyatlar vazirligi xaritasida sel xavfi yuqori 1-toifali zona deb belgilangan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #7 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tog' yonbag'rida sel xavfi bo'lgan hududda dam o</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sel xavfi bartaraf etilmaguncha va himoya dambalari qurilmaguncha loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Tabiiy ofat xavfi mavjud hududda inshootlar qurishga ruxsat berish fojiaga olib keladi."
      },
      {
        "text": "Investor kafolat xatiga asosan ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Tabiiy ofat xavfi mavjud hududda inshootlar qurishga ruxsat berish fojiaga olib keladi."
      }
    ]
  },
  {
    "id": 8,
    "title": "8. Shovqin darajasi yuqori aerodrom yaqinida turar-joy dahasi loyihasi.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Samolyotlar uchish koridori ostida 85 dB shovqin maydonida yangi mahalla rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #8 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shovqin darajasi yuqori aerodrom yaqinida turar-</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sanitariya qoidalariga binoan ushbu zonada turar-joy qurilishini taqiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! 85 dB doimiy shovqin inson eshitish qobiliyati va asab tizimini shikastlaydi."
      },
      {
        "text": "Oynalarni ikki qavatli qilish sharti bilan ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! 85 dB doimiy shovqin inson eshitish qobiliyati va asab tizimini shikastlaydi."
      }
    ]
  },
  {
    "id": 9,
    "title": "9. Chiqindi yoqish zavodi atrofida sanitar-himoya zonasi o'lchami.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Zavod loyihasida SHZ 500 metr qilib olingan (Me'yor: kamida 1000 metr).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #9 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chiqindi yoqish zavodi atrofida sanitar-himoya z</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Zavod I toifali o'ta xavfli obyekt bo'lgani sababli 1000 metrlik zona talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Chiqindi yoqishda dioksin xavfi sababli 1000 metrlik bufer zona shart."
      },
      {
        "text": "500 metrni yetarli deb tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Chiqindi yoqishda dioksin xavfi sababli 1000 metrlik bufer zona shart."
      }
    ]
  },
  {
    "id": 10,
    "title": "10. Kasalxona va tug'ruqxona majmuasi yaqinida metallolom yig'ish punkti.",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Kasalxona devoridan 50 metr narida temir kesish va yuklash maydoni rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #10 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Kasalxona va tug'ruqxona majmuasi yaqinida metal</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Tibbiyot muassasasi tinchligi va sanitariyasi uchun loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Davolash muassasalari atrofida shovqinli va changli obektlar taqiqlanadi."
      },
      {
        "text": "Kasalxona ruxsat bersa tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Davolash muassasalari atrofida shovqinli va changli obektlar taqiqlanadi."
      }
    ]
  },
  {
    "id": 11,
    "title": "11. I toifali sement zavodi aholi yashash punktidan 400 metr masofada loyihalashtirilgan. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Sanitariya me'yorlari bo'yicha I toifali sement zavodi uchun kamida 1000 metr sanitar-himoya zonasi talab etiladi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #11 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">I toifali sement zavodi aholi yashash punktidan </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Loyihani rad etish va obyektni aholi yashash hududidan kamida 1000 metr uzoqlikka ko'chirish talabini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! 1000m sanitar zona aholining chang va shovqindan zararlanishining oldini oladi."
      },
      {
        "text": "350-400 metrga maxsus ruxsat berib tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! 1000m sanitar zona aholining chang va shovqindan zararlanishining oldini oladi."
      }
    ]
  },
  {
    "id": 12,
    "title": "12. II toifali parrandachilik fabrikasi (100 ming bosh tovuq) uchun sanitar zona tahlili. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Loyihada 200 metr ko'rsatilgan, normativ talab bo'yicha kamida 500 metr bo'lishi shart.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #12 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">II toifali parrandachilik fabrikasi (100 ming bo</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Loyiha lokatsiyasini 500 metrlik normaga muvofiqlashtirish sharti bilan qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Parrandachilikdan ajraladigan ammiak va o'tkir hid 500 metrgacha tarqaladi."
      },
      {
        "text": "200 metrni yetarli deb xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Parrandachilikdan ajraladigan ammiak va o'tkir hid 500 metrgacha tarqaladi."
      }
    ]
  },
  {
    "id": 13,
    "title": "13. III toifali mebel va yog'ochga ishlov berish sexi uchun sanitar zona. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Turar-joyga eng yaqin masofa 180 metr qilib loyihalangan (Me'yor: 300 metr).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #13 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">III toifali mebel va yog'ochga ishlov berish sex</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Aholi xavfsizligi uchun sanitar zonani 300 metrgacha kengaytirish yoki shovqin-chang yutuvchi texnologiyalar qo'shish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yog'och changi va lak bug'lari 300 metrli zonada so'riladi."
      },
      {
        "text": "Hech qanday o'zgarishsiz tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yog'och changi va lak bug'lari 300 metrli zonada so'riladi."
      }
    ]
  },
  {
    "id": 14,
    "title": "14. IV toifali avtomobillarga gaz to'ldirish kompressor stansiyasi (AGTKS). (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "AGTKS stansiyasi ko'p qavatli uylardan 60 metr masofada rejalashtirilgan (Me'yor: kamida 100m).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #14 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">IV toifali avtomobillarga gaz to'ldirish kompres</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yong'in va portlash xavfini inobatga olib loyihani aholidan kamida 100 metr masofaga ko'chirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yuqori bosimli metan kompressorlari uchun 100 metrlik xavfsizlik masofasi qat'iy talabdir."
      },
      {
        "text": "60 metr yetarli deb ijobiy xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yuqori bosimli metan kompressorlari uchun 100 metrlik xavfsizlik masofasi qat'iy talabdir."
      }
    ]
  },
  {
    "id": 15,
    "title": "15. Qabriston va dafn etish joylari yaqinida oziq-ovqat ishlab chiqarish korxonasi. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Oziq-ovqat kombinati qabristondan 150 metr masofada qurilmoqda (Me'yor: kamida 500 metr).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #15 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qabriston va dafn etish joylari yaqinida oziq-ov</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Mikrobiologik xavfsizlik talabiga binoan loyihani qat'iyan rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yer osti suvlari orqali patogen mikroblar oziq-ovqatga o'tish xavfi mavjud."
      },
      {
        "text": "Gigiyena qoidalariga zid bo'lsa-da ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yer osti suvlari orqali patogen mikroblar oziq-ovqatga o'tish xavfi mavjud."
      }
    ]
  },
  {
    "id": 16,
    "title": "16. Xavfli kimyoviy xomashyo ombori atrofida yashil himoya belbog'i loyihasi. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Loyihada daraxt ekish ko'zda tutilmagan, faqat beton to'siq ko'rsatilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #16 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Xavfli kimyoviy xomashyo ombori atrofida yashil </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sanitar zona bo'ylab kamida 40% maydonda bargli va ignabargli daraxtlar ekish majburiyatini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yashil o'simliklar zaharli gaz sizganda havoni tozalashga yordam beradi."
      },
      {
        "text": "Beton to'siq yetarli deb hisoblash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yashil o'simliklar zaharli gaz sizganda havoni tozalashga yordam beradi."
      }
    ]
  },
  {
    "id": 17,
    "title": "17. Tog' yonbag'rida sel xavfi bo'lgan hududda dam olish maskani (Sanatoriy) qurilishi. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Hudud Favqulodda vaziyatlar vazirligi xaritasida sel xavfi yuqori 1-toifali zona deb belgilangan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #17 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tog' yonbag'rida sel xavfi bo'lgan hududda dam o</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sel xavfi bartaraf etilmaguncha va himoya dambalari qurilmaguncha loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Tabiiy ofat xavfi mavjud hududda inshootlar qurishga ruxsat berish fojiaga olib keladi."
      },
      {
        "text": "Investor kafolat xatiga asosan ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Tabiiy ofat xavfi mavjud hududda inshootlar qurishga ruxsat berish fojiaga olib keladi."
      }
    ]
  },
  {
    "id": 18,
    "title": "18. Shovqin darajasi yuqori aerodrom yaqinida turar-joy dahasi loyihasi. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Samolyotlar uchish koridori ostida 85 dB shovqin maydonida yangi mahalla rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #18 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shovqin darajasi yuqori aerodrom yaqinida turar-</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sanitariya qoidalariga binoan ushbu zonada turar-joy qurilishini taqiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! 85 dB doimiy shovqin inson eshitish qobiliyati va asab tizimini shikastlaydi."
      },
      {
        "text": "Oynalarni ikki qavatli qilish sharti bilan ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! 85 dB doimiy shovqin inson eshitish qobiliyati va asab tizimini shikastlaydi."
      }
    ]
  },
  {
    "id": 19,
    "title": "19. Chiqindi yoqish zavodi atrofida sanitar-himoya zonasi o'lchami. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Zavod loyihasida SHZ 500 metr qilib olingan (Me'yor: kamida 1000 metr).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #19 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chiqindi yoqish zavodi atrofida sanitar-himoya z</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Zavod I toifali o'ta xavfli obyekt bo'lgani sababli 1000 metrlik zona talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Chiqindi yoqishda dioksin xavfi sababli 1000 metrlik bufer zona shart."
      },
      {
        "text": "500 metrni yetarli deb tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Chiqindi yoqishda dioksin xavfi sababli 1000 metrlik bufer zona shart."
      }
    ]
  },
  {
    "id": 20,
    "title": "20. Kasalxona va tug'ruqxona majmuasi yaqinida metallolom yig'ish punkti. (Amaliy keys #2)",
    "category": "Sanitar-himoya zonalari (SHZ) va SanQvaM",
    "icon": "fa-scale-balanced",
    "description": "Kasalxona devoridan 50 metr narida temir kesish va yuklash maydoni rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #20 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Kasalxona va tug'ruqxona majmuasi yaqinida metal</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Tibbiyot muassasasi tinchligi va sanitariyasi uchun loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Davolash muassasalari atrofida shovqinli va changli obektlar taqiqlanadi."
      },
      {
        "text": "Kasalxona ruxsat bersa tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Davolash muassasalari atrofida shovqinli va changli obektlar taqiqlanadi."
      }
    ]
  },
  {
    "id": 21,
    "title": "21. Issiqlik elektr stansiyasida (IES) gaz turbinasi tashlamalari tahlili.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Loyihada NOx emissiyasi 180 mg/m³ qilib ko'rsatilgan (O'zbekiston PDK: 50 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #21 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Issiqlik elektr stansiyasida (IES) gaz turbinasi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Dry Low NOx (DLN) gorelkalari va katalitik tozalash kiritish sharti bilan loyihani qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! DLN texnologiyasi azot oksidlarini 50 mg/m³ dan past darajaga tushiradi."
      },
      {
        "text": "Loyihani xomligicha tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! DLN texnologiyasi azot oksidlarini 50 mg/m³ dan past darajaga tushiradi."
      }
    ]
  },
  {
    "id": 22,
    "title": "22. Ko'mir briketi ishlab chiqarish korxonasi ZVOS hujjati ekspertizasi.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Ko'mir maydalashda hosil bo'ladigan chang miqdori hisob-kitob qilinmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #22 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ko'mir briketi ishlab chiqarish korxonasi ZVOS h</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Emissiyalarning dispersiya modelini (AERMOD) ishlab chiqish va siklon-filtr talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Dispersiya modeli shamol yo'nalishida chang qayerga tushishini aniq ko'rsatadi."
      },
      {
        "text": "Hisob-kitobsiz qabul qilish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Dispersiya modeli shamol yo'nalishida chang qayerga tushishini aniq ko'rsatadi."
      }
    ]
  },
  {
    "id": 23,
    "title": "23. Biogaz stansiyasida vodorod sulfid (H2S) tozalash tizimi mavjud emasligi.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Biogaz to'g'ridan-to'g'ri tozalanmasdan yoqilishi ko'rsatilgan, bu SO2 hosil qiladi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #23 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Biogaz stansiyasida vodorod sulfid (H2S) tozalas</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Gazni biologik yoki temir gidroksidli desulfurizatsiyadan o'tkazish majburiyatini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! H2S tozalanmasa kislotali yomg'irlar va dvigatel korroziyasi yuzaga keladi."
      },
      {
        "text": "Tozalamasdan yoqishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! H2S tozalanmasa kislotali yomg'irlar va dvigatel korroziyasi yuzaga keladi."
      }
    ]
  },
  {
    "id": 24,
    "title": "24. Ohak zavodida CO2 chiqarilishi va issiqxona gazlari hisoboti.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Yiliga 80 ming tonna CO2 chiqishi prognoz qilingan, ammo kompensatsiya choralari yo'q.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #24 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ohak zavodida CO2 chiqarilishi va issiqxona gazl</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yashil kompensatsiya dasturi va energiya tejamkor texnologiyalar qo'llashni yuklash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Parij kelishuvi bo'yicha har bir yangi korxona karbon izini kamaytirishi lozim."
      },
      {
        "text": "Issiqxona gazlariga e'tibor bermaslik.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Parij kelishuvi bo'yicha har bir yangi korxona karbon izini kamaytirishi lozim."
      }
    ]
  },
  {
    "id": 25,
    "title": "25. Bo'yoq zavodi ZVOSida yozgi maksimal haroratdagi bug'lanish hisobi.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Hisob-kitob faqat 20°C uchun qilingan, Ohangaronda yozda 45°C gacha qiziydi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #25 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Bo'yoq zavodi ZVOSida yozgi maksimal haroratdagi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yozgi 45°C haroratdagi maksimal uchuvchanlik bo'yicha qayta hisoblash talabini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Issiqda organik erituvchilar bug'lanishi 3-4 barobar ortadi."
      },
      {
        "text": "20°C yetarli deb qabul qilish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Issiqda organik erituvchilar bug'lanishi 3-4 barobar ortadi."
      }
    ]
  },
  {
    "id": 26,
    "title": "26. Sement terminallarida vagonlardan quyma tsement tushirish stansiyasi.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Tsementni ochiq lentali konveyerda tushirish rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #26 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sement terminallarida vagonlardan quyma tsement </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yopiq pnevmatik transport va aspiratsiyali yengli filtrlar qo'llashni shart qilib qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ochiq konveyer atrofga qalin tsement changi bulutini hosil qiladi."
      },
      {
        "text": "Ochiq tashishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ochiq konveyer atrofga qalin tsement changi bulutini hosil qiladi."
      }
    ]
  },
  {
    "id": 27,
    "title": "27. Asfalt zavodida dizel yoqilg'isi o'rniga og'ir mazut ishlatilishi.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Mazutda oltingugurt miqdori 3.5% bo'lib, oltingugurt dioksidi me'yordan 6 marta oshadi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #27 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Asfalt zavodida dizel yoqilg'isi o'rniga og'ir m</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Kam oltingugurtli yoqilg'iga o'tish yoki nam desulfurizator o'rnatishni talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yuqori oltingugurtli mazut tutuni o'pka va tabiat uchun o'ta xavflidir."
      },
      {
        "text": "Iflos mazutni yoqishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yuqori oltingugurtli mazut tutuni o'pka va tabiat uchun o'ta xavflidir."
      }
    ]
  },
  {
    "id": 28,
    "title": "28. G'isht zavodida radial ventilyator orqali tutunni past balandlikdan chiqarish.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Mo'ri balandligi 12 metr qilib loyihalangan, shamol shamollatishi hisobga olinmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #28 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">G'isht zavodida radial ventilyator orqali tutunn</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Emissiyalarning yer bag'rida to'planmasligi uchun mo'ri balandligini kamida 35 metrga ko'tarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Past mo'rilar zaharli gazlarni to'g'ridan-to'g'ri odamlar yashaydigan yer yuzasiga tushiradi."
      },
      {
        "text": "12 metr yetarli deb tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Past mo'rilar zaharli gazlarni to'g'ridan-to'g'ri odamlar yashaydigan yer yuzasiga tushiradi."
      }
    ]
  },
  {
    "id": 29,
    "title": "29. Avtomobil bo'yash korxonasida faol ko'mir adsorberlarining resursi.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Ko'mirli filtr yiliga 1 marta almashtirilishi aytilgan, hisob bo'yicha 2 oyda to'yinadi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #29 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Avtomobil bo'yash korxonasida faol ko'mir adsorb</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Filtr to'yinish datchiklari o'rnatish va har chorakda ko'mirni regeneratsiya qilish rejasini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! To'yingan ko'mir filtri zaharli moddalarni tutmaydi, o'tkazib yuboradi."
      },
      {
        "text": "Eski ko'mir bilan yillab ishlatishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! To'yingan ko'mir filtri zaharli moddalarni tutmaydi, o'tkazib yuboradi."
      }
    ]
  },
  {
    "id": 30,
    "title": "30. Parrandachilikda par va patlarni kuydirish pechining emissiyalari.",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Pechda organik moddalar to'liq yonmasdan qora zaharli tutun chiqishi ehtimoli bor.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #30 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Parrandachilikda par va patlarni kuydirish pechi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yuqori haroratli (1000°C) ikkilamchi yonish kamerasi va siklon qo'shishni talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Pat va jun chala yonganda zaharli sianid va merkaptan birikmalari ajraladi."
      },
      {
        "text": "Oddiy pechka sifatida ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Pat va jun chala yonganda zaharli sianid va merkaptan birikmalari ajraladi."
      }
    ]
  },
  {
    "id": 31,
    "title": "31. Issiqlik elektr stansiyasida (IES) gaz turbinasi tashlamalari tahlili. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Loyihada NOx emissiyasi 180 mg/m³ qilib ko'rsatilgan (O'zbekiston PDK: 50 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #31 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Issiqlik elektr stansiyasida (IES) gaz turbinasi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Dry Low NOx (DLN) gorelkalari va katalitik tozalash kiritish sharti bilan loyihani qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! DLN texnologiyasi azot oksidlarini 50 mg/m³ dan past darajaga tushiradi."
      },
      {
        "text": "Loyihani xomligicha tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! DLN texnologiyasi azot oksidlarini 50 mg/m³ dan past darajaga tushiradi."
      }
    ]
  },
  {
    "id": 32,
    "title": "32. Ko'mir briketi ishlab chiqarish korxonasi ZVOS hujjati ekspertizasi. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Ko'mir maydalashda hosil bo'ladigan chang miqdori hisob-kitob qilinmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #32 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ko'mir briketi ishlab chiqarish korxonasi ZVOS h</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Emissiyalarning dispersiya modelini (AERMOD) ishlab chiqish va siklon-filtr talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Dispersiya modeli shamol yo'nalishida chang qayerga tushishini aniq ko'rsatadi."
      },
      {
        "text": "Hisob-kitobsiz qabul qilish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Dispersiya modeli shamol yo'nalishida chang qayerga tushishini aniq ko'rsatadi."
      }
    ]
  },
  {
    "id": 33,
    "title": "33. Biogaz stansiyasida vodorod sulfid (H2S) tozalash tizimi mavjud emasligi. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Biogaz to'g'ridan-to'g'ri tozalanmasdan yoqilishi ko'rsatilgan, bu SO2 hosil qiladi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #33 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Biogaz stansiyasida vodorod sulfid (H2S) tozalas</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Gazni biologik yoki temir gidroksidli desulfurizatsiyadan o'tkazish majburiyatini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! H2S tozalanmasa kislotali yomg'irlar va dvigatel korroziyasi yuzaga keladi."
      },
      {
        "text": "Tozalamasdan yoqishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! H2S tozalanmasa kislotali yomg'irlar va dvigatel korroziyasi yuzaga keladi."
      }
    ]
  },
  {
    "id": 34,
    "title": "34. Ohak zavodida CO2 chiqarilishi va issiqxona gazlari hisoboti. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Yiliga 80 ming tonna CO2 chiqishi prognoz qilingan, ammo kompensatsiya choralari yo'q.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #34 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ohak zavodida CO2 chiqarilishi va issiqxona gazl</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yashil kompensatsiya dasturi va energiya tejamkor texnologiyalar qo'llashni yuklash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Parij kelishuvi bo'yicha har bir yangi korxona karbon izini kamaytirishi lozim."
      },
      {
        "text": "Issiqxona gazlariga e'tibor bermaslik.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Parij kelishuvi bo'yicha har bir yangi korxona karbon izini kamaytirishi lozim."
      }
    ]
  },
  {
    "id": 35,
    "title": "35. Bo'yoq zavodi ZVOSida yozgi maksimal haroratdagi bug'lanish hisobi. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Hisob-kitob faqat 20°C uchun qilingan, Ohangaronda yozda 45°C gacha qiziydi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #35 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Bo'yoq zavodi ZVOSida yozgi maksimal haroratdagi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yozgi 45°C haroratdagi maksimal uchuvchanlik bo'yicha qayta hisoblash talabini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Issiqda organik erituvchilar bug'lanishi 3-4 barobar ortadi."
      },
      {
        "text": "20°C yetarli deb qabul qilish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Issiqda organik erituvchilar bug'lanishi 3-4 barobar ortadi."
      }
    ]
  },
  {
    "id": 36,
    "title": "36. Sement terminallarida vagonlardan quyma tsement tushirish stansiyasi. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Tsementni ochiq lentali konveyerda tushirish rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #36 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sement terminallarida vagonlardan quyma tsement </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yopiq pnevmatik transport va aspiratsiyali yengli filtrlar qo'llashni shart qilib qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ochiq konveyer atrofga qalin tsement changi bulutini hosil qiladi."
      },
      {
        "text": "Ochiq tashishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ochiq konveyer atrofga qalin tsement changi bulutini hosil qiladi."
      }
    ]
  },
  {
    "id": 37,
    "title": "37. Asfalt zavodida dizel yoqilg'isi o'rniga og'ir mazut ishlatilishi. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Mazutda oltingugurt miqdori 3.5% bo'lib, oltingugurt dioksidi me'yordan 6 marta oshadi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #37 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Asfalt zavodida dizel yoqilg'isi o'rniga og'ir m</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Kam oltingugurtli yoqilg'iga o'tish yoki nam desulfurizator o'rnatishni talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yuqori oltingugurtli mazut tutuni o'pka va tabiat uchun o'ta xavflidir."
      },
      {
        "text": "Iflos mazutni yoqishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yuqori oltingugurtli mazut tutuni o'pka va tabiat uchun o'ta xavflidir."
      }
    ]
  },
  {
    "id": 38,
    "title": "38. G'isht zavodida radial ventilyator orqali tutunni past balandlikdan chiqarish. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Mo'ri balandligi 12 metr qilib loyihalangan, shamol shamollatishi hisobga olinmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #38 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">G'isht zavodida radial ventilyator orqali tutunn</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Emissiyalarning yer bag'rida to'planmasligi uchun mo'ri balandligini kamida 35 metrga ko'tarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Past mo'rilar zaharli gazlarni to'g'ridan-to'g'ri odamlar yashaydigan yer yuzasiga tushiradi."
      },
      {
        "text": "12 metr yetarli deb tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Past mo'rilar zaharli gazlarni to'g'ridan-to'g'ri odamlar yashaydigan yer yuzasiga tushiradi."
      }
    ]
  },
  {
    "id": 39,
    "title": "39. Avtomobil bo'yash korxonasida faol ko'mir adsorberlarining resursi. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Ko'mirli filtr yiliga 1 marta almashtirilishi aytilgan, hisob bo'yicha 2 oyda to'yinadi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #39 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Avtomobil bo'yash korxonasida faol ko'mir adsorb</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Filtr to'yinish datchiklari o'rnatish va har chorakda ko'mirni regeneratsiya qilish rejasini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! To'yingan ko'mir filtri zaharli moddalarni tutmaydi, o'tkazib yuboradi."
      },
      {
        "text": "Eski ko'mir bilan yillab ishlatishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! To'yingan ko'mir filtri zaharli moddalarni tutmaydi, o'tkazib yuboradi."
      }
    ]
  },
  {
    "id": 40,
    "title": "40. Parrandachilikda par va patlarni kuydirish pechining emissiyalari. (Amaliy keys #2)",
    "category": "Atmosfera havosi va tashlamalar (ZVOS bosqichi)",
    "icon": "fa-scale-balanced",
    "description": "Pechda organik moddalar to'liq yonmasdan qora zaharli tutun chiqishi ehtimoli bor.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #40 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Parrandachilikda par va patlarni kuydirish pechi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yuqori haroratli (1000°C) ikkilamchi yonish kamerasi va siklon qo'shishni talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Pat va jun chala yonganda zaharli sianid va merkaptan birikmalari ajraladi."
      },
      {
        "text": "Oddiy pechka sifatida ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Pat va jun chala yonganda zaharli sianid va merkaptan birikmalari ajraladi."
      }
    ]
  },
  {
    "id": 41,
    "title": "41. Sanoat zonasidan Chirchiq daryosiga oqiziladigan oqava suv loyihasi.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Loyihada oqova suv faqat tindirgichdan o'tkazilib daryoga tashlanishi ko'rsatilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #41 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sanoat zonasidan Chirchiq daryosiga oqiziladigan</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Biologik va chuqur membranali tozalash inshooti qurish majburiyatini yuklash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Daryoga tozalangan oqava ham me'yoriy sifatda tashlanishi shart."
      },
      {
        "text": "Daryo suvi ko'p, suyulib ketadi deb ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Daryoga tozalangan oqava ham me'yoriy sifatda tashlanishi shart."
      }
    ]
  },
  {
    "id": 42,
    "title": "42. Daryoning suvni muhofaza qilish zonasida (Vodooxrannaya zona) avtoservis.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Obyekt Chirchiq daryosi qirg'og'idan 25 metr masofada joylashgan (Qonun bo'yicha: kamida 100-300m).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #42 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Daryoning suvni muhofaza qilish zonasida (Vodoox</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Suv kodeksiga asosan sohilbo'yi muhofaza zonasida avtoservis qurilishini qat'iyan taqiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Sohil zonasida moy va benzin to'kilishi ichimlik suv havzasini zaharlaydi."
      },
      {
        "text": "Daryo bo'yida qurishga ijobiy xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Sohil zonasida moy va benzin to'kilishi ichimlik suv havzasini zaharlaydi."
      }
    ]
  },
  {
    "id": 43,
    "title": "43. Baliq yetishtirish hovuzlarida artezian suvidan samarasiz foydalanish.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Loyiha yiliga 5 mln m³ chuchuk ichimlik yer osti suvini sarflashni rejalashtirgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #43 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Baliq yetishtirish hovuzlarida artezian suvidan </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Suvni 95% aylanma (UZV) yopiq texnologiyada ishlatish sharti bilan qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yer osti chuchuk suvi avlodlar uchun strategik zaxiradir."
      },
      {
        "text": "Artezian suvini cheklovsiz sarflashga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yer osti chuchuk suvi avlodlar uchun strategik zaxiradir."
      }
    ]
  },
  {
    "id": 44,
    "title": "44. Charm-poyabzal zavodi oqavasida xrom va sulfidlarni birgalikda oqizish.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Zavod xromli va ohakli oqavalarni umumiy quvurga jamlamoqchi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #44 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Charm-poyabzal zavodi oqavasida xrom va sulfidla</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Xromli oqavalarni alohida lokal tozalash stansiyasida cho'ktirish talabini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Alohida tozalanmasa xrom shahar kanalizatsiyasining barcha loyini zaharlaydi."
      },
      {
        "text": "Birlashtirilgan oqovaga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Alohida tozalanmasa xrom shahar kanalizatsiyasining barcha loyini zaharlaydi."
      }
    ]
  },
  {
    "id": 45,
    "title": "45. Qishloq xo'jaligi yerlarida drenaj (zax) suvlarini daryolarga to'kish.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Drenaj suvida pestitsidlar va minerallashuv 4.5 g/l (Norma: 1.0 g/l).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #45 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qishloq xo'jaligi yerlarida drenaj (zax) suvlari</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sho'r drenaj suvlarini daryoga emas, bug'lantirish hovuzlariga yo'naltirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Sho'r suv daryoning quyi oqimidagi ekin maydonlarini sho'rlantiradi."
      },
      {
        "text": "Daryoga oqizishni tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Sho'r suv daryoning quyi oqimidagi ekin maydonlarini sho'rlantiradi."
      }
    ]
  },
  {
    "id": 46,
    "title": "46. Meva sharbati ishlab chiqarishda BPK yuklamasi yuqori oqava suvi.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Meva yuvish suvida shakar va pektin ko'p bo'lib, BPK = 2500 mg/l.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #46 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Meva sharbati ishlab chiqarishda BPK yuklamasi y</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Anaerob metantenk va aerotenkdan iborat ikki bosqichli tozalash inshooti talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Organikaga boy suv chirib yer osti suvlarini vodorod sulfid bilan zaharlaydi."
      },
      {
        "text": "Tozalamasdan dalaga oqizish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Organikaga boy suv chirib yer osti suvlarini vodorod sulfid bilan zaharlaydi."
      }
    ]
  },
  {
    "id": 47,
    "title": "47. Konteynerli kimyoviy o'g'it ombori drenaj tizimi.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Ombor hududidan yomg'ir suvlari to'g'ridan-to'g'ri qishloq arig'iga oqmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #47 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Konteynerli kimyoviy o'g'it ombori drenaj tizimi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yomg'ir suvlarini yig'uvchi yopiq rezervuar va neytrallash hovuzi qurishni shart qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yomg'ir selitri va fosfatlarni yuvib ariqlarni zaharli kimyoviy eritmaga aylantiradi."
      },
      {
        "text": "Yomg'ir suvi toza deb e'tiborsiz qoldirish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yomg'ir selitri va fosfatlarni yuvib ariqlarni zaharli kimyoviy eritmaga aylantiradi."
      }
    ]
  },
  {
    "id": 48,
    "title": "48. Gidroelektr stansiyasi (kichik GES) loyihasida daryo ekologik oqimi (Sanitarniy popusk).",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "GES to'g'oni daryo suvini 100% quvurga burmoqchi, o'zan butkul qurib qoladi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #48 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Gidroelektr stansiyasi (kichik GES) loyihasida d</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Daryo faunasi va baliqlar hayoti uchun kamida 20% ekologik oqimni (popusk) doimiy ochiq qoldirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ekologik oqimsiz daryo o'zani o'lik cho'lga aylanadi va baliqlar qiriladi."
      },
      {
        "text": "Suvni 100% quvurga olishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ekologik oqimsiz daryo o'zani o'lik cho'lga aylanadi va baliqlar qiriladi."
      }
    ]
  },
  {
    "id": 49,
    "title": "49. Suv ombori sohilida qum-shag'al karyeri qazish loyihasi.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Qazish ishlari suv ombori dambasining gidrotexnik barqarorligiga xavf solmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #49 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Suv ombori sohilida qum-shag'al karyeri qazish l</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Damba xavfsizligi va loyqalanishning oldini olish uchun loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Suv ombori yaqinida qazish damba buzilishi va sel xavfini keltirib chiqaradi."
      },
      {
        "text": "Investorga qazishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Suv ombori yaqinida qazish damba buzilishi va sel xavfini keltirib chiqaradi."
      }
    ]
  },
  {
    "id": 50,
    "title": "50. Yer osti termal suvlaridan issiqxona isitishda foydalanish.",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Termal suv tarkibida bor va mishyak yuqori bo'lib, foydalangach yerga oqizilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #50 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yer osti termal suvlaridan issiqxona isitishda f</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sovutilgan termal suvni yer osti qatlamiga qayta haydash (Reinjektsiya) tizimini o'rnatish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Reinjektsiya termal suv havzasini asraydi va zaharli minerallarni yer ustiga chiqarmaydi."
      },
      {
        "text": "Ochiq jarlikka oqizishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Reinjektsiya termal suv havzasini asraydi va zaharli minerallarni yer ustiga chiqarmaydi."
      }
    ]
  },
  {
    "id": 51,
    "title": "51. Sanoat zonasidan Chirchiq daryosiga oqiziladigan oqava suv loyihasi. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Loyihada oqova suv faqat tindirgichdan o'tkazilib daryoga tashlanishi ko'rsatilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #51 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sanoat zonasidan Chirchiq daryosiga oqiziladigan</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Biologik va chuqur membranali tozalash inshooti qurish majburiyatini yuklash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Daryoga tozalangan oqava ham me'yoriy sifatda tashlanishi shart."
      },
      {
        "text": "Daryo suvi ko'p, suyulib ketadi deb ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Daryoga tozalangan oqava ham me'yoriy sifatda tashlanishi shart."
      }
    ]
  },
  {
    "id": 52,
    "title": "52. Daryoning suvni muhofaza qilish zonasida (Vodooxrannaya zona) avtoservis. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Obyekt Chirchiq daryosi qirg'og'idan 25 metr masofada joylashgan (Qonun bo'yicha: kamida 100-300m).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #52 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Daryoning suvni muhofaza qilish zonasida (Vodoox</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Suv kodeksiga asosan sohilbo'yi muhofaza zonasida avtoservis qurilishini qat'iyan taqiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Sohil zonasida moy va benzin to'kilishi ichimlik suv havzasini zaharlaydi."
      },
      {
        "text": "Daryo bo'yida qurishga ijobiy xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Sohil zonasida moy va benzin to'kilishi ichimlik suv havzasini zaharlaydi."
      }
    ]
  },
  {
    "id": 53,
    "title": "53. Baliq yetishtirish hovuzlarida artezian suvidan samarasiz foydalanish. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Loyiha yiliga 5 mln m³ chuchuk ichimlik yer osti suvini sarflashni rejalashtirgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #53 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Baliq yetishtirish hovuzlarida artezian suvidan </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Suvni 95% aylanma (UZV) yopiq texnologiyada ishlatish sharti bilan qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yer osti chuchuk suvi avlodlar uchun strategik zaxiradir."
      },
      {
        "text": "Artezian suvini cheklovsiz sarflashga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yer osti chuchuk suvi avlodlar uchun strategik zaxiradir."
      }
    ]
  },
  {
    "id": 54,
    "title": "54. Charm-poyabzal zavodi oqavasida xrom va sulfidlarni birgalikda oqizish. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Zavod xromli va ohakli oqavalarni umumiy quvurga jamlamoqchi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #54 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Charm-poyabzal zavodi oqavasida xrom va sulfidla</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Xromli oqavalarni alohida lokal tozalash stansiyasida cho'ktirish talabini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Alohida tozalanmasa xrom shahar kanalizatsiyasining barcha loyini zaharlaydi."
      },
      {
        "text": "Birlashtirilgan oqovaga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Alohida tozalanmasa xrom shahar kanalizatsiyasining barcha loyini zaharlaydi."
      }
    ]
  },
  {
    "id": 55,
    "title": "55. Qishloq xo'jaligi yerlarida drenaj (zax) suvlarini daryolarga to'kish. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Drenaj suvida pestitsidlar va minerallashuv 4.5 g/l (Norma: 1.0 g/l).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #55 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qishloq xo'jaligi yerlarida drenaj (zax) suvlari</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sho'r drenaj suvlarini daryoga emas, bug'lantirish hovuzlariga yo'naltirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Sho'r suv daryoning quyi oqimidagi ekin maydonlarini sho'rlantiradi."
      },
      {
        "text": "Daryoga oqizishni tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Sho'r suv daryoning quyi oqimidagi ekin maydonlarini sho'rlantiradi."
      }
    ]
  },
  {
    "id": 56,
    "title": "56. Meva sharbati ishlab chiqarishda BPK yuklamasi yuqori oqava suvi. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Meva yuvish suvida shakar va pektin ko'p bo'lib, BPK = 2500 mg/l.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #56 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Meva sharbati ishlab chiqarishda BPK yuklamasi y</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Anaerob metantenk va aerotenkdan iborat ikki bosqichli tozalash inshooti talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Organikaga boy suv chirib yer osti suvlarini vodorod sulfid bilan zaharlaydi."
      },
      {
        "text": "Tozalamasdan dalaga oqizish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Organikaga boy suv chirib yer osti suvlarini vodorod sulfid bilan zaharlaydi."
      }
    ]
  },
  {
    "id": 57,
    "title": "57. Konteynerli kimyoviy o'g'it ombori drenaj tizimi. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Ombor hududidan yomg'ir suvlari to'g'ridan-to'g'ri qishloq arig'iga oqmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #57 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Konteynerli kimyoviy o'g'it ombori drenaj tizimi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yomg'ir suvlarini yig'uvchi yopiq rezervuar va neytrallash hovuzi qurishni shart qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Yomg'ir selitri va fosfatlarni yuvib ariqlarni zaharli kimyoviy eritmaga aylantiradi."
      },
      {
        "text": "Yomg'ir suvi toza deb e'tiborsiz qoldirish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Yomg'ir selitri va fosfatlarni yuvib ariqlarni zaharli kimyoviy eritmaga aylantiradi."
      }
    ]
  },
  {
    "id": 58,
    "title": "58. Gidroelektr stansiyasi (kichik GES) loyihasida daryo ekologik oqimi (Sanitarniy popusk). (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "GES to'g'oni daryo suvini 100% quvurga burmoqchi, o'zan butkul qurib qoladi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #58 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Gidroelektr stansiyasi (kichik GES) loyihasida d</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Daryo faunasi va baliqlar hayoti uchun kamida 20% ekologik oqimni (popusk) doimiy ochiq qoldirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ekologik oqimsiz daryo o'zani o'lik cho'lga aylanadi va baliqlar qiriladi."
      },
      {
        "text": "Suvni 100% quvurga olishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ekologik oqimsiz daryo o'zani o'lik cho'lga aylanadi va baliqlar qiriladi."
      }
    ]
  },
  {
    "id": 59,
    "title": "59. Suv ombori sohilida qum-shag'al karyeri qazish loyihasi. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Qazish ishlari suv ombori dambasining gidrotexnik barqarorligiga xavf solmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #59 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Suv ombori sohilida qum-shag'al karyeri qazish l</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Damba xavfsizligi va loyqalanishning oldini olish uchun loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Suv ombori yaqinida qazish damba buzilishi va sel xavfini keltirib chiqaradi."
      },
      {
        "text": "Investorga qazishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Suv ombori yaqinida qazish damba buzilishi va sel xavfini keltirib chiqaradi."
      }
    ]
  },
  {
    "id": 60,
    "title": "60. Yer osti termal suvlaridan issiqxona isitishda foydalanish. (Amaliy keys #2)",
    "category": "Suv resurslari va daryolar muhofazasi",
    "icon": "fa-scale-balanced",
    "description": "Termal suv tarkibida bor va mishyak yuqori bo'lib, foydalangach yerga oqizilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #60 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yer osti termal suvlaridan issiqxona isitishda f</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Sovutilgan termal suvni yer osti qatlamiga qayta haydash (Reinjektsiya) tizimini o'rnatish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Reinjektsiya termal suv havzasini asraydi va zaharli minerallarni yer ustiga chiqarmaydi."
      },
      {
        "text": "Ochiq jarlikka oqizishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Reinjektsiya termal suv havzasini asraydi va zaharli minerallarni yer ustiga chiqarmaydi."
      }
    ]
  },
  {
    "id": 61,
    "title": "61. Tibbiy chiqindilarni yondirish insineratori loyihasi ZVOSi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Loyihada dioksin va furanlarni ushlovchi skrubber va faol ko'mir ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #61 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tibbiy chiqindilarni yondirish insineratori loyi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Tutun tozalash tizimiga katalitik dioksin filtri kiritish sharti bilan qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Tibbiy plastmassa yonganda yuqori xavfli kanserogen dioksinlar ajraladi."
      },
      {
        "text": "Oddiy pech sifatida tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Tibbiy plastmassa yonganda yuqori xavfli kanserogen dioksinlar ajraladi."
      }
    ]
  },
  {
    "id": 62,
    "title": "62. Qattiq maishiy chiqindilar saralash zavodi loyihasi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Chiqindilarni saralashda organik fraksiyani kompostlash texnologiyasi kiritilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #62 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qattiq maishiy chiqindilar saralash zavodi loyih</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Organik chiqindilar uchun anaerob kompostlash maydoni qo'shish talabini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Organika poligonlarda chirib metan va zaharli filtrat hosil qiladi."
      },
      {
        "text": "Faqat plastikni ajratib qolganini ko'mishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Organika poligonlarda chirib metan va zaharli filtrat hosil qiladi."
      }
    ]
  },
  {
    "id": 63,
    "title": "63. Eski avtomobil shinalarini piroliz qilish mini-zavodi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Reaktordan chiqadigan gazlarni tozalash va texnik uglerodni qadoqlash ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #63 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Eski avtomobil shinalarini piroliz qilish mini-z</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yopiq pnevmatik changsiz qadoqlash va gazni qayta yoqish tizimini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Texnik uglerod havoga tarqalsa mayda saraton zarrachalari hosil bo'ladi."
      },
      {
        "text": "Changsizlantirishsiz ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Texnik uglerod havoga tarqalsa mayda saraton zarrachalari hosil bo'ladi."
      }
    ]
  },
  {
    "id": 64,
    "title": "64. Qurilish chiqindilarini qayta ishlash majmuasi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Buzilgan beton va g'ishtlarni qayta maydalab ikkilamchi chaqiq tosh (sheben) olish.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #64 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qurilish chiqindilarini qayta ishlash majmuasi.</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Changga qarshi gidro-purkagichlar o'rnatish sharti bilan loyihani ijobiy baholash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Qurilish chiqindisini qayta ishlash yangi karyerlar ochilishini 30% tejaydi."
      },
      {
        "text": "Qurilish chiqindisini shahar chetiga to'kishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Qurilish chiqindisini qayta ishlash yangi karyerlar ochilishini 30% tejaydi."
      }
    ]
  },
  {
    "id": 65,
    "title": "65. Akkumulyatorlarni qayta ishlash zavodi loyihasi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Qo'rg'oshin pechidan chiqadigan gazlar uchun filtr ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #65 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Akkumulyatorlarni qayta ishlash zavodi loyihasi.</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Absolyut yuqori tozalovchi HEPA va matoli filtrlar kaskadini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Qo'rg'oshin aerozollari inson qonida to'planib asab va miyani zararlaydi."
      },
      {
        "text": "Filtrsiz tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Qo'rg'oshin aerozollari inson qonida to'planib asab va miyani zararlaydi."
      }
    ]
  },
  {
    "id": 66,
    "title": "66. Plastik chiqindilarni yuvish va granulalash korxonasi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Plastik yuvilgan iflos suv daryoga filtrisiz tashlanmoqchi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #66 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Plastik chiqindilarni yuvish va granulalash korx</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Suvni tozalovchi koagulyator, flotator va qum filtri qurish shartini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Plastik yuvilgan suvda yelim, kimyoviy qoldiqlar va mikroplastik bo'ladi."
      },
      {
        "text": "Plastik yuvindi suvini daryoga oqizishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Plastik yuvilgan suvda yelim, kimyoviy qoldiqlar va mikroplastik bo'ladi."
      }
    ]
  },
  {
    "id": 67,
    "title": "67. Xavfli kimyoviy chiqindilar poligoni (I sinf) kengaytirilishi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Yangi karta ostida gidroizolyatsiya faqat oddiy loy qatlami qilib belgilangan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #67 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Xavfli kimyoviy chiqindilar poligoni (I sinf) ke</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Ikki qavatli geomembrana, geoto'r va sizish datchiklari tizimini talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! I sinf xavfli chiqindilar faqat ikki qavatli xavfsiz izolyatsiyaga qo'yiladi."
      },
      {
        "text": "Oddiy loy yetarli deb tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! I sinf xavfli chiqindilar faqat ikki qavatli xavfsiz izolyatsiyaga qo'yiladi."
      }
    ]
  },
  {
    "id": 68,
    "title": "68. Yaroqsiz quyosh panellarini utilizatsiya qilish sexi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Panellardagi kremniy, kumush va qo'rg'oshinni ajratish texnologiyasi to'liq yozilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #68 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yaroqsiz quyosh panellarini utilizatsiya qilish </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Qayta ishlashning texnologik xaritasi va qoldiqlarni xavfsiz saqlash rejasini talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Quyosh panellarida zaharli og'ir metallar mavjud bo'lib, maxsus ajratiladi."
      },
      {
        "text": "Noaniq hujjat bilan ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Quyosh panellarida zaharli og'ir metallar mavjud bo'lib, maxsus ajratiladi."
      }
    ]
  },
  {
    "id": 69,
    "title": "69. Shahar chiqindi poligoni hududida biogazdan elektr olish stansiyasi.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Loyiha poligondan chiqayotgan metanni so'rib 2 MVt elektr ishlab chiqarmoqchi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #69 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shahar chiqindi poligoni hududida biogazdan elek</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Poligon degazatsiyasi va global isishni kamaytirgani uchun loyihani to'liq qo'llab-quvvatlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Metanni elektrga aylantirish atmosferaga tashlamalarni 25 barobar kamaytiradi."
      },
      {
        "text": "Biogaz stansiyasini taqiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Metanni elektrga aylantirish atmosferaga tashlamalarni 25 barobar kamaytiradi."
      }
    ]
  },
  {
    "id": 70,
    "title": "70. Radioaktiv manbalar ishlatiladigan rentgen va tomografiya chiqindilari.",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Tibbiy izotoplar qoldiqlarini saqlash uchun qo'rg'oshin konteynerlar ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #70 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Radioaktiv manbalar ishlatiladigan rentgen va to</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Radiatsiyaviy xavfsizlik to'g'risidagi qonun bo'yicha maxsus bunker va ruxsatnoma talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Radioaktiv manbalar faqat sertifikatlangan qo'rg'oshinli konteynerlarda saqlanadi."
      },
      {
        "text": "Oddiy qutiga solib saqlashga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Radioaktiv manbalar faqat sertifikatlangan qo'rg'oshinli konteynerlarda saqlanadi."
      }
    ]
  },
  {
    "id": 71,
    "title": "71. Tibbiy chiqindilarni yondirish insineratori loyihasi ZVOSi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Loyihada dioksin va furanlarni ushlovchi skrubber va faol ko'mir ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #71 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tibbiy chiqindilarni yondirish insineratori loyi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Tutun tozalash tizimiga katalitik dioksin filtri kiritish sharti bilan qaytarish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Tibbiy plastmassa yonganda yuqori xavfli kanserogen dioksinlar ajraladi."
      },
      {
        "text": "Oddiy pech sifatida tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Tibbiy plastmassa yonganda yuqori xavfli kanserogen dioksinlar ajraladi."
      }
    ]
  },
  {
    "id": 72,
    "title": "72. Qattiq maishiy chiqindilar saralash zavodi loyihasi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Chiqindilarni saralashda organik fraksiyani kompostlash texnologiyasi kiritilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #72 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qattiq maishiy chiqindilar saralash zavodi loyih</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Organik chiqindilar uchun anaerob kompostlash maydoni qo'shish talabini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Organika poligonlarda chirib metan va zaharli filtrat hosil qiladi."
      },
      {
        "text": "Faqat plastikni ajratib qolganini ko'mishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Organika poligonlarda chirib metan va zaharli filtrat hosil qiladi."
      }
    ]
  },
  {
    "id": 73,
    "title": "73. Eski avtomobil shinalarini piroliz qilish mini-zavodi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Reaktordan chiqadigan gazlarni tozalash va texnik uglerodni qadoqlash ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #73 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Eski avtomobil shinalarini piroliz qilish mini-z</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yopiq pnevmatik changsiz qadoqlash va gazni qayta yoqish tizimini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Texnik uglerod havoga tarqalsa mayda saraton zarrachalari hosil bo'ladi."
      },
      {
        "text": "Changsizlantirishsiz ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Texnik uglerod havoga tarqalsa mayda saraton zarrachalari hosil bo'ladi."
      }
    ]
  },
  {
    "id": 74,
    "title": "74. Qurilish chiqindilarini qayta ishlash majmuasi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Buzilgan beton va g'ishtlarni qayta maydalab ikkilamchi chaqiq tosh (sheben) olish.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #74 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qurilish chiqindilarini qayta ishlash majmuasi. </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Changga qarshi gidro-purkagichlar o'rnatish sharti bilan loyihani ijobiy baholash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Qurilish chiqindisini qayta ishlash yangi karyerlar ochilishini 30% tejaydi."
      },
      {
        "text": "Qurilish chiqindisini shahar chetiga to'kishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Qurilish chiqindisini qayta ishlash yangi karyerlar ochilishini 30% tejaydi."
      }
    ]
  },
  {
    "id": 75,
    "title": "75. Akkumulyatorlarni qayta ishlash zavodi loyihasi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Qo'rg'oshin pechidan chiqadigan gazlar uchun filtr ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #75 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Akkumulyatorlarni qayta ishlash zavodi loyihasi.</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Absolyut yuqori tozalovchi HEPA va matoli filtrlar kaskadini kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Qo'rg'oshin aerozollari inson qonida to'planib asab va miyani zararlaydi."
      },
      {
        "text": "Filtrsiz tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Qo'rg'oshin aerozollari inson qonida to'planib asab va miyani zararlaydi."
      }
    ]
  },
  {
    "id": 76,
    "title": "76. Plastik chiqindilarni yuvish va granulalash korxonasi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Plastik yuvilgan iflos suv daryoga filtrisiz tashlanmoqchi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #76 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Plastik chiqindilarni yuvish va granulalash korx</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Suvni tozalovchi koagulyator, flotator va qum filtri qurish shartini qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Plastik yuvilgan suvda yelim, kimyoviy qoldiqlar va mikroplastik bo'ladi."
      },
      {
        "text": "Plastik yuvindi suvini daryoga oqizishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Plastik yuvilgan suvda yelim, kimyoviy qoldiqlar va mikroplastik bo'ladi."
      }
    ]
  },
  {
    "id": 77,
    "title": "77. Xavfli kimyoviy chiqindilar poligoni (I sinf) kengaytirilishi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Yangi karta ostida gidroizolyatsiya faqat oddiy loy qatlami qilib belgilangan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #77 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Xavfli kimyoviy chiqindilar poligoni (I sinf) ke</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Ikki qavatli geomembrana, geoto'r va sizish datchiklari tizimini talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! I sinf xavfli chiqindilar faqat ikki qavatli xavfsiz izolyatsiyaga qo'yiladi."
      },
      {
        "text": "Oddiy loy yetarli deb tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! I sinf xavfli chiqindilar faqat ikki qavatli xavfsiz izolyatsiyaga qo'yiladi."
      }
    ]
  },
  {
    "id": 78,
    "title": "78. Yaroqsiz quyosh panellarini utilizatsiya qilish sexi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Panellardagi kremniy, kumush va qo'rg'oshinni ajratish texnologiyasi to'liq yozilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #78 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yaroqsiz quyosh panellarini utilizatsiya qilish </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Qayta ishlashning texnologik xaritasi va qoldiqlarni xavfsiz saqlash rejasini talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Quyosh panellarida zaharli og'ir metallar mavjud bo'lib, maxsus ajratiladi."
      },
      {
        "text": "Noaniq hujjat bilan ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Quyosh panellarida zaharli og'ir metallar mavjud bo'lib, maxsus ajratiladi."
      }
    ]
  },
  {
    "id": 79,
    "title": "79. Shahar chiqindi poligoni hududida biogazdan elektr olish stansiyasi. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Loyiha poligondan chiqayotgan metanni so'rib 2 MVt elektr ishlab chiqarmoqchi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #79 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shahar chiqindi poligoni hududida biogazdan elek</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Poligon degazatsiyasi va global isishni kamaytirgani uchun loyihani to'liq qo'llab-quvvatlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Metanni elektrga aylantirish atmosferaga tashlamalarni 25 barobar kamaytiradi."
      },
      {
        "text": "Biogaz stansiyasini taqiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Metanni elektrga aylantirish atmosferaga tashlamalarni 25 barobar kamaytiradi."
      }
    ]
  },
  {
    "id": 80,
    "title": "80. Radioaktiv manbalar ishlatiladigan rentgen va tomografiya chiqindilari. (Amaliy keys #2)",
    "category": "Chiqindilar boshqaruvi va utilizatsiya ekspertizasi",
    "icon": "fa-scale-balanced",
    "description": "Tibbiy izotoplar qoldiqlarini saqlash uchun qo'rg'oshin konteynerlar ko'rsatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #80 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Radioaktiv manbalar ishlatiladigan rentgen va to</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Radiatsiyaviy xavfsizlik to'g'risidagi qonun bo'yicha maxsus bunker va ruxsatnoma talab qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Radioaktiv manbalar faqat sertifikatlangan qo'rg'oshinli konteynerlarda saqlanadi."
      },
      {
        "text": "Oddiy qutiga solib saqlashga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Radioaktiv manbalar faqat sertifikatlangan qo'rg'oshinli konteynerlarda saqlanadi."
      }
    ]
  },
  {
    "id": 81,
    "title": "81. Qo'riqxona (Davlat biosfera rezervati) bufer zonasida ohaktosh karyeri.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Karyer chegarasi qo'riqxonaning himoya zonasiga 50 metr kirib borgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #81 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qo'riqxona (Davlat biosfera rezervati) bufer zon</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Qo'riqxonalar to'g'risidagi qonunga asosan loyihani qat'iyan rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Qo'riqxonalarning bufer zonalarida har qanday tog'-kon ishlari qat'iyan taqiqlanadi."
      },
      {
        "text": "Qo'riqxona ruxsat bersa tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Qo'riqxonalarning bufer zonalarida har qanday tog'-kon ishlari qat'iyan taqiqlanadi."
      }
    ]
  },
  {
    "id": 82,
    "title": "82. Qizil kitobga kiritilgan qor qoploni (Ilvirs) yashash areali yaqinida yo'l qurilishi.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Magistral yo'l noyob yirtqichlarning mavsumiy migratsiya yo'lagini kesib o'tmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #82 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qizil kitobga kiritilgan qor qoploni (Ilvirs) ya</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Hayvonlar erkin o'tishi uchun ekoduklar (yashil ko'priklar) va yer osti o'tish yo'laklari kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ekoduklar yovvoyi hayvonlarning mashinalar ostida nobud bo'lishini to'xtatadi."
      },
      {
        "text": "Hayvonlar o'zi yo'l topadi deb ko'priksiz qurish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ekoduklar yovvoyi hayvonlarning mashinalar ostida nobud bo'lishini to'xtatadi."
      }
    ]
  },
  {
    "id": 83,
    "title": "83. Transchegaraviy daryo bo'yida kimyoviy majmua qurilishi (Espoo konvensiyasi).",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Zavod qo'shni davlat chegarasidan 15 km masofada daryo bo'yida qurilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #83 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Transchegaraviy daryo bo'yida kimyoviy majmua qu</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Espoo konvensiyasi bo'yicha qo'shni davlatga rasmiy bildirishnoma yuborish va maslahatlashuv o'tkazish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Transchegaraviy ekologik ta'sir xalqaro huquqiy kelishuvlarni talab qiladi."
      },
      {
        "text": "Qo'shni davlatga bildirmasdan qurish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Transchegaraviy ekologik ta'sir xalqaro huquqiy kelishuvlarni talab qiladi."
      }
    ]
  },
  {
    "id": 84,
    "title": "84. Noyob to'qay o'rmonlarini kesish hisobiga baliqchilik hovuzi kengaytirilishi.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyihada 40 gektar tabiiy to'qay o'rmoni va yulg'unzorlarni yo'q qilish ko'rsatilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #84 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Noyob to'qay o'rmonlarini kesish hisobiga baliqc</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "To'qay ekotizimini saqlash maqsadida loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! To'qay o'rmonlari daryo qirg'oqlarini eroziyadan saqlovchi noyob boylikdir."
      },
      {
        "text": "O'rmonni kesishga ijobiy xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! To'qay o'rmonlari daryo qirg'oqlarini eroziyadan saqlovchi noyob boylikdir."
      }
    ]
  },
  {
    "id": 85,
    "title": "85. Ko'chib yuruvchi qushlarning xalqaro Ramsar suv-botqoqlik hududida shamol elektr stansiyasi.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Shamol turbinalari qushlarning ommaviy uchib o'tish yo'lagiga to'g'ri kelmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #85 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ko'chib yuruvchi qushlarning xalqaro Ramsar suv-</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Ornitologik xulosa asosida shamol generatorlarini xavfsiz hududga ko'chirish va qush radarlari qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Shamol parraklari qushlar migratsiyasida ularning ommaviy qirilishiga olib keladi."
      },
      {
        "text": "Qushlarga e'tibor bermaslik.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Shamol parraklari qushlar migratsiyasida ularning ommaviy qirilishiga olib keladi."
      }
    ]
  },
  {
    "id": 86,
    "title": "86. Chirchiq daryosi deltasida noqonuniy qum qazish oqibatida baliqlar uvildiriqlari yo'qolishi.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Qazish litsenziyasi baliqlarning bahorgi ko'payish (Nerest) davriga to'g'ri kelgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #86 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chirchiq daryosi deltasida noqonuniy qum qazish </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Bahorgi ko'payish mavsumida qazish ishlariga moratoriy e'lon qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Nerest davrida daryo tubini qazish baliq zaxiralarini yo'q qiladi."
      },
      {
        "text": "Yil bo'yi to'xtovsiz qazishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Nerest davrida daryo tubini qazish baliq zaxiralarini yo'q qiladi."
      }
    ]
  },
  {
    "id": 87,
    "title": "87. Zarafshon milliy tabiat bog'i hududida Buxoro bug'usi yashash joyida mehmonxona.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyiha noyob bug'ular suv ichadigan tabiiy to'qay maydoniga da'vogarlik qilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #87 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Zarafshon milliy tabiat bog'i hududida Buxoro bu</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Qonunchilikka binoan milliy bog'ning yadro zonasida qurilishni taqiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Buxoro bug'usi Qizil kitobga kiritilgan, uning tinchligi buzilsa ko'paymaydi."
      },
      {
        "text": "Sayyohlar ko'p keladi deb ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Buxoro bug'usi Qizil kitobga kiritilgan, uning tinchligi buzilsa ko'paymaydi."
      }
    ]
  },
  {
    "id": 88,
    "title": "88. Yaylovlarda tuproq eroziyasi va ortiqcha chorva boqish loyihasi.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyihada 1 gektar yaylovga 15 bosh qoramol to'g'ri kelmoqda (Me'yor: 1-2 bosh).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #88 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yaylovlarda tuproq eroziyasi va ortiqcha chorva </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yaylovlarning cho'llanishining oldini olish uchun chorva sonini me'yorga tushirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ortiqcha bosim unumdor tuproq qatlamini yemirib qum cho'liga aylantiradi."
      },
      {
        "text": "Istalgancha boqishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ortiqcha bosim unumdor tuproq qatlamini yemirib qum cho'liga aylantiradi."
      }
    ]
  },
  {
    "id": 89,
    "title": "89. Tog' chang'i kurorti qurilishida archazorlarni kesish.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyiha doirasida 500 yillik Zarafshon archalari kesilishi rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #89 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tog' chang'i kurorti qurilishida archazorlarni k</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Archalarni kesishni taqiqlash va chang'i trassalarini o'rmonsiz qiyaliklardan o'tkazish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Tog' archalari qor ko'chishi va tuproq ko'chishining oldini oluvchi yagona qalqondir."
      },
      {
        "text": "Barcha archalarni kesishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Tog' archalari qor ko'chishi va tuproq ko'chishining oldini oluvchi yagona qalqondir."
      }
    ]
  },
  {
    "id": 90,
    "title": "90. Orolbo'yi mintaqasida saksovulzorlar barpo etish davlat loyihasi.",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Qurigan Orol dengizi tubida 100 ming gektarda saksovul ekish loyihasi ZVOSi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #90 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Orolbo'yi mintaqasida saksovulzorlar barpo etish</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Tuz va qum bo'ronlarini to'xtatuvchi global ekologik ahamiyatga ega deb to'liq tasdiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Saksovul qum ko'chishini to'xtatib mintaqa havosini tuzdan tozalaydi."
      },
      {
        "text": "Saksovul ekish foydasiz deb rad etish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Saksovul qum ko'chishini to'xtatib mintaqa havosini tuzdan tozalaydi."
      }
    ]
  },
  {
    "id": 91,
    "title": "91. Qo'riqxona (Davlat biosfera rezervati) bufer zonasida ohaktosh karyeri. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Karyer chegarasi qo'riqxonaning himoya zonasiga 50 metr kirib borgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #91 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qo'riqxona (Davlat biosfera rezervati) bufer zon</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Qo'riqxonalar to'g'risidagi qonunga asosan loyihani qat'iyan rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Qo'riqxonalarning bufer zonalarida har qanday tog'-kon ishlari qat'iyan taqiqlanadi."
      },
      {
        "text": "Qo'riqxona ruxsat bersa tasdiqlash.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Qo'riqxonalarning bufer zonalarida har qanday tog'-kon ishlari qat'iyan taqiqlanadi."
      }
    ]
  },
  {
    "id": 92,
    "title": "92. Qizil kitobga kiritilgan qor qoploni (Ilvirs) yashash areali yaqinida yo'l qurilishi. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Magistral yo'l noyob yirtqichlarning mavsumiy migratsiya yo'lagini kesib o'tmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #92 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qizil kitobga kiritilgan qor qoploni (Ilvirs) ya</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Hayvonlar erkin o'tishi uchun ekoduklar (yashil ko'priklar) va yer osti o'tish yo'laklari kiritish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ekoduklar yovvoyi hayvonlarning mashinalar ostida nobud bo'lishini to'xtatadi."
      },
      {
        "text": "Hayvonlar o'zi yo'l topadi deb ko'priksiz qurish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ekoduklar yovvoyi hayvonlarning mashinalar ostida nobud bo'lishini to'xtatadi."
      }
    ]
  },
  {
    "id": 93,
    "title": "93. Transchegaraviy daryo bo'yida kimyoviy majmua qurilishi (Espoo konvensiyasi). (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Zavod qo'shni davlat chegarasidan 15 km masofada daryo bo'yida qurilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #93 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Transchegaraviy daryo bo'yida kimyoviy majmua qu</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Espoo konvensiyasi bo'yicha qo'shni davlatga rasmiy bildirishnoma yuborish va maslahatlashuv o'tkazish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Transchegaraviy ekologik ta'sir xalqaro huquqiy kelishuvlarni talab qiladi."
      },
      {
        "text": "Qo'shni davlatga bildirmasdan qurish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Transchegaraviy ekologik ta'sir xalqaro huquqiy kelishuvlarni talab qiladi."
      }
    ]
  },
  {
    "id": 94,
    "title": "94. Noyob to'qay o'rmonlarini kesish hisobiga baliqchilik hovuzi kengaytirilishi. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyihada 40 gektar tabiiy to'qay o'rmoni va yulg'unzorlarni yo'q qilish ko'rsatilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #94 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Noyob to'qay o'rmonlarini kesish hisobiga baliqc</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "To'qay ekotizimini saqlash maqsadida loyihani rad etish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! To'qay o'rmonlari daryo qirg'oqlarini eroziyadan saqlovchi noyob boylikdir."
      },
      {
        "text": "O'rmonni kesishga ijobiy xulosa berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! To'qay o'rmonlari daryo qirg'oqlarini eroziyadan saqlovchi noyob boylikdir."
      }
    ]
  },
  {
    "id": 95,
    "title": "95. Ko'chib yuruvchi qushlarning xalqaro Ramsar suv-botqoqlik hududida shamol elektr stansiyasi. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Shamol turbinalari qushlarning ommaviy uchib o'tish yo'lagiga to'g'ri kelmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #95 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ko'chib yuruvchi qushlarning xalqaro Ramsar suv-</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Ornitologik xulosa asosida shamol generatorlarini xavfsiz hududga ko'chirish va qush radarlari qo'yish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Shamol parraklari qushlar migratsiyasida ularning ommaviy qirilishiga olib keladi."
      },
      {
        "text": "Qushlarga e'tibor bermaslik.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Shamol parraklari qushlar migratsiyasida ularning ommaviy qirilishiga olib keladi."
      }
    ]
  },
  {
    "id": 96,
    "title": "96. Chirchiq daryosi deltasida noqonuniy qum qazish oqibatida baliqlar uvildiriqlari yo'qolishi. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Qazish litsenziyasi baliqlarning bahorgi ko'payish (Nerest) davriga to'g'ri kelgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #96 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chirchiq daryosi deltasida noqonuniy qum qazish </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Bahorgi ko'payish mavsumida qazish ishlariga moratoriy e'lon qilish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Nerest davrida daryo tubini qazish baliq zaxiralarini yo'q qiladi."
      },
      {
        "text": "Yil bo'yi to'xtovsiz qazishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Nerest davrida daryo tubini qazish baliq zaxiralarini yo'q qiladi."
      }
    ]
  },
  {
    "id": 97,
    "title": "97. Zarafshon milliy tabiat bog'i hududida Buxoro bug'usi yashash joyida mehmonxona. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyiha noyob bug'ular suv ichadigan tabiiy to'qay maydoniga da'vogarlik qilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #97 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Zarafshon milliy tabiat bog'i hududida Buxoro bu</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Qonunchilikka binoan milliy bog'ning yadro zonasida qurilishni taqiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Buxoro bug'usi Qizil kitobga kiritilgan, uning tinchligi buzilsa ko'paymaydi."
      },
      {
        "text": "Sayyohlar ko'p keladi deb ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Buxoro bug'usi Qizil kitobga kiritilgan, uning tinchligi buzilsa ko'paymaydi."
      }
    ]
  },
  {
    "id": 98,
    "title": "98. Yaylovlarda tuproq eroziyasi va ortiqcha chorva boqish loyihasi. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyihada 1 gektar yaylovga 15 bosh qoramol to'g'ri kelmoqda (Me'yor: 1-2 bosh).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #98 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yaylovlarda tuproq eroziyasi va ortiqcha chorva </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Yaylovlarning cho'llanishining oldini olish uchun chorva sonini me'yorga tushirish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Ortiqcha bosim unumdor tuproq qatlamini yemirib qum cho'liga aylantiradi."
      },
      {
        "text": "Istalgancha boqishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Ortiqcha bosim unumdor tuproq qatlamini yemirib qum cho'liga aylantiradi."
      }
    ]
  },
  {
    "id": 99,
    "title": "99. Tog' chang'i kurorti qurilishida archazorlarni kesish. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Loyiha doirasida 500 yillik Zarafshon archalari kesilishi rejalashtirilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #99 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tog' chang'i kurorti qurilishida archazorlarni k</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Archalarni kesishni taqiqlash va chang'i trassalarini o'rmonsiz qiyaliklardan o'tkazish.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Tog' archalari qor ko'chishi va tuproq ko'chishining oldini oluvchi yagona qalqondir."
      },
      {
        "text": "Barcha archalarni kesishga ruxsat berish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Tog' archalari qor ko'chishi va tuproq ko'chishining oldini oluvchi yagona qalqondir."
      }
    ]
  },
  {
    "id": 100,
    "title": "100. Orolbo'yi mintaqasida saksovulzorlar barpo etish davlat loyihasi. (Amaliy keys #2)",
    "category": "Transchegaraviy ta'sir, flora, fauna va qo'riqxonalar",
    "icon": "fa-scale-balanced",
    "description": "Qurigan Orol dengizi tubida 100 ming gektarda saksovul ekish loyihasi ZVOSi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#c084fc\" text-anchor=\"middle\">DAVLAT EKOLOGIK EKSPERTIZASI #100 • ZVOS / AMTB</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Orolbo'yi mintaqasida saksovulzorlar barpo etish</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zR Ekologik Ekspertiza Qonuni & SanQvaM Me'yorlari</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#f43f5e\" text-anchor=\"middle\">Davlat Eksperti qarori xolis va qonuniy bo'lishi shart</text></svg>",
    "question": "Davlat ekologik ekspertizasining mas'ul bosh mutaxassisi sifatida qanday xulosa chiqarasiz?",
    "answers": [
      {
        "text": "Tuz va qum bo'ronlarini to'xtatuvchi global ekologik ahamiyatga ega deb to'liq tasdiqlash.",
        "correct": true,
        "points": 50,
        "explanation": "To'g'ri ekspertlik qarori! Saksovul qum ko'chishini to'xtatib mintaqa havosini tuzdan tozalaydi."
      },
      {
        "text": "Saksovul ekish foydasiz deb rad etish.",
        "correct": false,
        "points": -30,
        "explanation": "Qo'pol xato! Saksovul qum ko'chishini to'xtatib mintaqa havosini tuzdan tozalaydi."
      }
    ]
  }
];
