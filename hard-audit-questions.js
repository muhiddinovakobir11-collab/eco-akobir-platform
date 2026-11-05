// 100 ta O'ta Murakkab Sanoat Ekologik Auditi va Chiqindilar Boshqaruvi Savollari Bazasi
// Asoschi: Akobir | Akosh Eco Platformasi

const ALL_100_AUDIT_QUESTIONS = [
  {
    "id": 1,
    "sector": "1. Xlorli polimerlar pirolizida dioksin va furanlar emissiyasi",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Yonish kamerasi 850°C, tutash vaqti 0.8 soniya. Dioksin miqdori 3.8 ng TEQ/m³ (Limit: 0.1 ng TEQ/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #1 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Xlorli polimerlar pirolizida dioksin va furanlar</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ikkilamchi yonish kamerasida haroratni kamida 1100°C ga ko'tarish (tutash vaqti 2s) va faol ko'mirli adsorber o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! 1100°C da dioksin halqalari to'liq parchalanadi, 400°C da esa qayta sintezlanadi."
      },
      {
        "text": "Suv purkab tutunni sovitish va haroratni 400°C ga tushirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! 1100°C da dioksin halqalari to'liq parchalanadi, 400°C da esa qayta sintezlanadi."
      }
    ]
  },
  {
    "id": 2,
    "sector": "2. Mineral o'g'itlar zavodida ammiak (NH3) sizishi va skrubber bosimi",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Ammiak sintez minorasida bosim oshishi oqibatida 45 mg/m³ ammiak atmosferaga chiqmoqda (PDK: 0.2 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #2 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Mineral o'g'itlar zavodida ammiak (NH3) sizishi </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Kislotali neytrallovchi skrubberni ishga tushirib ammoniy sulfat o'g'iti holida yutib qolish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Kislotali yuvish ammiakni xavfsiz o'g'itga aylantiradi, shamollatish esa zaharlanishga olib keladi."
      },
      {
        "text": "Shamollatish darchalarini ochib havoga tarqatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Kislotali yuvish ammiakni xavfsiz o'g'itga aylantiradi, shamollatish esa zaharlanishga olib keladi."
      }
    ]
  },
  {
    "id": 3,
    "sector": "3. Fosforli o'g'it sexida fosfogips uyumlari va ftorli gazlar",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Fosfogips omboridan har yili 50,000 tonna chiqindi yig'ilib, yer osti suvlariga fosfatlar sizmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #3 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Fosforli o'g'it sexida fosfogips uyumlari va fto</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Chiqindi poligonini geomembrana bilan izolyatsiya qilish va fosfogipsni sement sanoatiga ikkilamchi xomashyo sifatida berish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Geomembrana sizishni to'xtatadi, sementga qo'shish esa chiqindini yo'qotadi."
      },
      {
        "text": "Fosfogipsni yaqin oradagi jarga surib ko'mib tashlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Geomembrana sizishni to'xtatadi, sementga qo'shish esa chiqindini yo'qotadi."
      }
    ]
  },
  {
    "id": 4,
    "sector": "4. Sulfat kislotasi ishlab chiqarishda SO2 va oltingugurt tumanlari",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Kontakt apparatida SO2 ning SO3 ga konversiya darajasi 96% ga tushib ketgan (Talab: 99.7%).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #4 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sulfat kislotasi ishlab chiqarishda SO2 va oltin</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "V-K-Cs (vanadiyli) katalizatorini almashtirish va ikkilamchi absorbsiya minorasini sozlash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Katalizator almashtirilsa konversiya 99.8% ga yetadi va havoga chiqmaydi."
      },
      {
        "text": "Konversiyani oshirmasdan tutun mo'risini 50 metrga balandlatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Katalizator almashtirilsa konversiya 99.8% ga yetadi va havoga chiqmaydi."
      }
    ]
  },
  {
    "id": 5,
    "sector": "5. Lok-bo'yoq ishlab chiqarishda uchuvchi organik moddalar (VOC)",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Bo'yoq sexida toluol va ksilol konsentratsiyasi ishchi zonada 180 mg/m³ ga yetgan (PDK: 50 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #5 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Lok-bo'yoq ishlab chiqarishda uchuvchi organik m</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Regenerativ termik oksidlovchi (RTO) o'rnatib erituvchi bug'larini 800°C da yoqish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! RTO erituvchilarni CO2 va H2O ga qadar to'liq zararsizlantiradi."
      },
      {
        "text": "Oddiy ventilyator quvvatini oshirib havoga puflash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! RTO erituvchilarni CO2 va H2O ga qadar to'liq zararsizlantiradi."
      }
    ]
  },
  {
    "id": 6,
    "sector": "6. Sintetik yelim sexida formaldegid va fenol ajralishi",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Reaktordan havoga fenol 0.08 mg/m³ va formaldegid 0.12 mg/m³ chiqmoqda (PDK: 0.01 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #6 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sintetik yelim sexida formaldegid va fenol ajral</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Biofiltr yoki ozon-katalitik tozalash uskunasi o'rnatish majburiyatini kiritish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Formaldegid o'ta kanserogen bo'lib, biofiltrda bakteriyalar orqali parchalanadi."
      },
      {
        "text": "Eritmani suv bilan suyultirib umumiy kanalizatsiyaga quyish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Formaldegid o'ta kanserogen bo'lib, biofiltrda bakteriyalar orqali parchalanadi."
      }
    ]
  },
  {
    "id": 7,
    "sector": "7. Kaustik soda sexida simobli elektroliz shlamlari",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Simobli elektroliz shlamlarida simob (Hg) 850 mg/kg bo'lgan I sinf o'ta xavfli chiqindi mavjud.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #7 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Kaustik soda sexida simobli elektroliz shlamlari</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Simobli shlamni pirometallurgik distillash orqali regeneratsiya qilish va maxsus xavfli chiqindi omboriga topshirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Simob I sinf o'ta xavfli modda bo'lib, faqat demerkurizatsiya qilinishi shart."
      },
      {
        "text": "Shlamni oddiy maishiy chiqindi poligoniga tashish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Simob I sinf o'ta xavfli modda bo'lib, faqat demerkurizatsiya qilinishi shart."
      }
    ]
  },
  {
    "id": 8,
    "sector": "8. Pestitsidlar omborida muddati o'tgan xlororganik preparatlar (DDT)",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Omborda 12 tonna muddati o'tgan DDT va geksaxloran zanglagan bochkalarda saqlanmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #8 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Pestitsidlar omborida muddati o'tgan xlororganik</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Zaharlarni xalqaro Bazel konvensiyasiga muvofiq yuqori haroratli xavfsiz yoqish pechiga yo'naltirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Xlororganika tabiatda asrlar davomida parchalanmaydi, faqat maxsus yoqish lozim."
      },
      {
        "text": "Pestitsidlarni betonlab yerga ko'mish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Xlororganika tabiatda asrlar davomida parchalanmaydi, faqat maxsus yoqish lozim."
      }
    ]
  },
  {
    "id": 9,
    "sector": "9. Atsetilen ishlab chiqarishda karbid shlami utilizatsiyasi",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Ohakli karbid shlami 3000 tonna hajmda ochiq maydonda yotibdi, pH = 12.5 (o'ta ishqoriy).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #9 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Atsetilen ishlab chiqarishda karbid shlami utili</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Shlamni neytrallab qurilish gipsi va quruq qurilish qorishmalariga qo'shish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Karbid shlami qimmatbaho ohak xomashyosi bo'lib, qurilishda to'liq ishlatiladi."
      },
      {
        "text": "Shlamni yaqin daryoga oqizib yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Karbid shlami qimmatbaho ohak xomashyosi bo'lib, qurilishda to'liq ishlatiladi."
      }
    ]
  },
  {
    "id": 10,
    "sector": "10. Plastik granulyatsiyasida ftalatlar va plastifikatorlar bug'i",
    "visualTitle": "Audit Obyekti: Kimyo sanoati",
    "visualInfo": "Ekstruder zonasida ftalatlar konsentratsiyasi ruxsat etilgan me'yordan 3.2 barobar yuqori.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #10 • KIMYO SANOATI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Plastik granulyatsiyasida ftalatlar va plastifik</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Lokal aspiratsiya va elektrostatik moyli filtr o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Elektrostatik filtr moyli va polimer aerozollarni 99% samaradorlik bilan tutadi."
      },
      {
        "text": "Sex eshiklarini doimiy ochiq qoldirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Elektrostatik filtr moyli va polimer aerozollarni 99% samaradorlik bilan tutadi."
      }
    ]
  },
  {
    "id": 11,
    "sector": "11. Qora metall eritish elektr pechida ferroqotishma changi",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Eritish pechidan 1500 mg/m³ chang ajralmoqda. Bag-filter (matoli filtr) teshilgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #11 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qora metall eritish elektr pechida ferroqotishma</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Gore-Tex membranali issiqqa chidamli matoli filtr o'rnatish va uzluksiz chang datchigi qo'yish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Matoli filtr changni 5 mg/m³ gacha tozalaydi, bu Evro standartlariga mos."
      },
      {
        "text": "Filtrsiz to'g'ridan-to'g'ri mo'riga ulab qo'yish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Matoli filtr changni 5 mg/m³ gacha tozalaydi, bu Evro standartlariga mos."
      }
    ]
  },
  {
    "id": 12,
    "sector": "12. Galvanika sexida 6 valentli zaharli xrom (Cr+6) oqavasi",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Oqava suvda Cr+6 miqdori 45 mg/l (PDK: 0.1 mg/l). Kanserogen og'ir metall.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #12 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Galvanika sexida 6 valentli zaharli xrom (Cr+6) </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Natriy bisulfit (NaHSO3) bilan Cr+6 ni zararsiz Cr+3 ga qaytarish va ohak bilan cho'ktirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! 6 valentli xrom o'ta zaharli, uni 3 valentli xromga qaytarmasdan cho'ktirib bo'lmaydi."
      },
      {
        "text": "Oqavani xom holida umumiy oqovaga aralashtirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! 6 valentli xrom o'ta zaharli, uni 3 valentli xromga qaytarmasdan cho'ktirib bo'lmaydi."
      }
    ]
  },
  {
    "id": 13,
    "sector": "13. Sianidli oltin yuvish fabrikasida oqava suvlarni zararsizlantirish",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Ruda yuvish oqavasida erkin sianid (CN-) 120 mg/l (PDK: 0.05 mg/l).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #13 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sianidli oltin yuvish fabrikasida oqava suvlarni</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "INCO (SO2/havo) yoki vodorod peroksid usuli bilan sianidni xavfsiz sianatga oksidlash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! INCO usuli sianidni 99.9% ga neytrallaydi va sianid bug'lanishining oldini oladi."
      },
      {
        "text": "Sianidli suvni quyoshda bug'lanishiga qoldirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! INCO usuli sianidni 99.9% ga neytrallaydi va sianid bug'lanishining oldini oladi."
      }
    ]
  },
  {
    "id": 14,
    "sector": "14. Alyuminiy quyish sexida vodorod ftorid (HF) va qatron tutuni",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Elektrolizyorlardan gaz ajralishi: HF miqdori normadan 4.5 marta ko'p.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #14 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Alyuminiy quyish sexida vodorod ftorid (HF) va q</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Aluminiy oksidi (Al2O3) bilan quruq adsorbsiya usulida ftoridni yutib elektrolizga qaytarish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Quruq adsorbsiya xomashyoni pechga qaytaradi va ftoridni to'liq ushlaydi."
      },
      {
        "text": "Faqat suvli dush bilan yuvish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Quruq adsorbsiya xomashyoni pechga qaytaradi va ftoridni to'liq ushlaydi."
      }
    ]
  },
  {
    "id": 15,
    "sector": "15. Rangli metall prokati sexida moyli emulsiya va neft mahsulotlari",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Sovutuvchi moyli oqavada neft mahsulotlari 650 mg/l (PDK: 0.3 mg/l).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #15 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Rangli metall prokati sexida moyli emulsiya va n</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ultrafiltratsiya va elektrokoagulyatsiya orqali moyni ajratib yopiq aylanma suvga qaytarish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Ultrafiltratsiya membranasi moy tomchilarini to'liq ajratadi."
      },
      {
        "text": "Moyli suvni shahar kanalizatsiyasiga oqizish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Ultrafiltratsiya membranasi moy tomchilarini to'liq ajratadi."
      }
    ]
  },
  {
    "id": 16,
    "sector": "16. Po'lat quyishda konverter gazlaridan CO (is gazi) regeneratsiyasi",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Konverterdan 70% konsentratsiyali CO gazi havoga yoqilmasdan chiqarilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #16 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Po'lat quyishda konverter gazlaridan CO (is gazi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Gazgolderga yig'ib energiya manbai sifatida qozonxonada yoqish (GDK texnologiyasi).",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Is gazi kuchli zahar, uni yoqish ham xavfsiz, ham elektr/issiqlik beradi."
      },
      {
        "text": "Atmosferaga tarqatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Is gazi kuchli zahar, uni yoqish ham xavfsiz, ham elektr/issiqlik beradi."
      }
    ]
  },
  {
    "id": 17,
    "sector": "17. Titan-magniy qotishmalari ishlab chiqarishda xlor gazining avariyaviy datchigi",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Xlor omborida avtomatik skrubber va xlor datchiklari tekshirilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #17 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Titan-magniy qotishmalari ishlab chiqarishda xlo</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Xlor bug'larini tezkor neytrallovchi gidroksid natriy (NaOH) skrubber kaskadini sozlash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! NaOH skrubberi xlor sizganda soniyalar ichida uni tuzga aylantiradi."
      },
      {
        "text": "Faqat gazniqoblar tarqatish bilan cheklanish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! NaOH skrubberi xlor sizganda soniyalar ichida uni tuzga aylantiradi."
      }
    ]
  },
  {
    "id": 18,
    "sector": "18. Rux qoplamasi sexida xlorid kislotasi (HCl) tumanlari",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Kislotali tuzlash vannasida HCl kislotasi bug'i ishchi zonada 15 mg/m³ (PDK: 5 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #18 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Rux qoplamasi sexida xlorid kislotasi (HCl) tuma</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Vannalarga polipropilen suzuvchi sharlar va faol tomchi tutgichli aspirator qo'yish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Suzuvchi sharlar kislota bug'lanishini 80% ga kamaytiradi."
      },
      {
        "text": "Vannalarni qopqoqsiz ochiq qoldirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Suzuvchi sharlar kislota bug'lanishini 80% ga kamaytiradi."
      }
    ]
  },
  {
    "id": 19,
    "sector": "19. Volfram va molibden chiqindilarini qayta ishlashda ammiakli kuydirish",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Kuyindi gazlarida volfram oksidi va ammiak aralashmasi aniqlandi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #19 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Volfram va molibden chiqindilarini qayta ishlash</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Katalitik tozalash va ammoniy paravolframat (APT) kristallarini cho'ktirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! APT qimmatbaho qayta tiklanuvchi xomashyo hisoblanadi."
      },
      {
        "text": "Gazlarni to'g'ridan-to'g'ri daryo bo'yiga chiqarish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! APT qimmatbaho qayta tiklanuvchi xomashyo hisoblanadi."
      }
    ]
  },
  {
    "id": 20,
    "sector": "20. Quyuv qoliplarida furan smolalari va qum regeneratsiyasi",
    "visualTitle": "Audit Obyekti: Metallurgiya va quyuv",
    "visualInfo": "Ishlatilgan qolip qumlari poligonga tashlanmoqda (yiliga 12,000 tonna).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #20 • METALLURGIYA VA QUYUV</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Quyuv qoliplarida furan smolalari va qum regener</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Mexanik va termik regeneratsiya pechini o'rnatib qumni 95% qayta quyuvga ishlatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Qum regeneratsiyasi tabiiy kvars resurslarini va poligon joyini tejaydi."
      },
      {
        "text": "Qumni tuproq ustiga yoyib tashlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Qum regeneratsiyasi tabiiy kvars resurslarini va poligon joyini tejaydi."
      }
    ]
  },
  {
    "id": 21,
    "sector": "21. Neft qazib olish qudug'ida yo'ldosh gazni mash'alada yoqish",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Yiliga 15 mln m³ yo'ldosh gaz samarasiz mash'alada yoqilib, qora uglerod chiqmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #21 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Neft qazib olish qudug'ida yo'ldosh gazni mash'a</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Gaz-porshenli mini-elektr stansiyasi (KOGENERATSIYA) qurib elektr energiyasi olish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Gazni havoga chiqarish portlash xavfini tug'diradi, elektr olish esa foyda keltiradi."
      },
      {
        "text": "Mash'alani o'chirib gazni havoga shamollatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Gazni havoga chiqarish portlash xavfini tug'diradi, elektr olish esa foyda keltiradi."
      }
    ]
  },
  {
    "id": 22,
    "sector": "22. Neft shlamlari to'plangan ochiq ambar (Ambar nefti)",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Ochiq neft amborida 40,000 m³ og'ir neft qoldig'i bug'lanib, tuproqqa singmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #22 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Neft shlamlari to'plangan ochiq ambar (Ambar nef</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Uch fazali dekanter sentrifugasi bilan neft, suv va qattiq fazani ajratib neftni neft bazasiga topshirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Dekanter neftni 98% qaytarib oladi va tuproqni tozalanadi."
      },
      {
        "text": "Ustiga qum sepib ko'mib qo'yish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Dekanter neftni 98% qaytarib oladi va tuproqni tozalanadi."
      }
    ]
  },
  {
    "id": 23,
    "sector": "23. Gazni oltingugurtdan tozalashda Klous qurilmasi auditi",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Klous qurilmasida H2S dan elementar oltingugurt olish samaradorligi 92% (Me'yor: 98.5%).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #23 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Gazni oltingugurtdan tozalashda Klous qurilmasi </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Sub-dewpoint yoki Superclaus reaktorini qo'shib samaradorlikni 99% ga yetkazish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! H2S o'ta zaharli, Superclaus uni toza tijoriy oltingugurtga aylantiradi."
      },
      {
        "text": "Ortiqcha zaharli H2S ni tunda havoga chiqarish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! H2S o'ta zaharli, Superclaus uni toza tijoriy oltingugurtga aylantiradi."
      }
    ]
  },
  {
    "id": 24,
    "sector": "24. Neft bazasida rezervuarlardan benzin bug'larining yo'qotilishi",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Ochilib-yopiladigan rezervuarlarda 'katta nafas olish' oqibatida yiliga 120 tonna benzin bug'lanmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #24 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Neft bazasida rezervuarlardan benzin bug'larinin</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Suzuvchi pontonlar va Rekuperatsiya (VRU - Vapor Recovery Unit) qurilmasini o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! VRU bug'langan benzinni yana suyuqlikka aylantirib 99% yoqilg'ini tejaydi."
      },
      {
        "text": "Rezervuar qopqoqlarini doim ochiq saqlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! VRU bug'langan benzinni yana suyuqlikka aylantirib 99% yoqilg'ini tejaydi."
      }
    ]
  },
  {
    "id": 25,
    "sector": "25. Ko'mir IESlarida uchuvchi kul va oltingugurt dioksidi (SO2)",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Ko'mir yoqilganda SO2 konsentratsiyasi 2400 mg/m³ (PDK: 400 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #25 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ko'mir IESlarida uchuvchi kul va oltingugurt dio</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ohaktoshli nam desulfurizatsiya (FGD) tizimi o'rnatib gips xomashyosiga aylantirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! FGD tizimi SO2 ni 98% tutib qimmatbaho sintetik gips beradi."
      },
      {
        "text": "Ko'mirni suv bilan ho'llab yoqish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! FGD tizimi SO2 ni 98% tutib qimmatbaho sintetik gips beradi."
      }
    ]
  },
  {
    "id": 26,
    "sector": "26. Kompressor stansiyalarida magistral gaz sizishi (Metan - CH4)",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Optik gaz detektori (FLIR kamera) orqali klapanlardan soatiga 18 kg metan sizishi aniqlandi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #26 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Kompressor stansiyalarida magistral gaz sizishi </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Dry gas seal (quruq gaz zichlagichlari) o'rnatish va klapanlarni almashtirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Metan CO2 ga qaraganda 28 barobar kuchli issiqxona gazidir."
      },
      {
        "text": "Sizish me'yoriy holat deb e'tiborsiz qoldirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Metan CO2 ga qaraganda 28 barobar kuchli issiqxona gazidir."
      }
    ]
  },
  {
    "id": 27,
    "sector": "27. Kislotali gudron (og'ir neft chiqindisi) hovuzlari",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "1970-yillardan qolgan kislotali gudron hovuzida erkin sulfat kislotasi 40% ni tashkil qiladi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #27 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Kislotali gudron (og'ir neft chiqindisi) hovuzla</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Termik destruksiya orqali sulfat kislotani qayta regeneratsiya qilish yoki bitumga modifikator qilish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Kislotali gudron daraxtlarni quritadi va yer osti suvini butkul zaharlaydi."
      },
      {
        "text": "Hovuzga tuproq tashlab ustiga daraxt ekish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Kislotali gudron daraxtlarni quritadi va yer osti suvini butkul zaharlaydi."
      }
    ]
  },
  {
    "id": 28,
    "sector": "28. Benzin quyish shoxobchalarida (AYoQSh) yer osti rezervuarlari",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "AYoQSh ostidagi metall rezervuar 20 yildan beri almashtirilmagan, katod himoyasi ishlamayapti.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #28 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Benzin quyish shoxobchalarida (AYoQSh) yer osti </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ikki qavatli (double-wall) oraliq datchikli zamonaviy rezervuar o'rnatish va tuproq monitoringi o'tkazish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Yoriqlardan benzin sizib ichimlik suv quduqlariga o'tadi."
      },
      {
        "text": "Korroziyaga e'tibor bermasdan ishlatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Yoriqlardan benzin sizib ichimlik suv quduqlariga o'tadi."
      }
    ]
  },
  {
    "id": 29,
    "sector": "29. Dizel generatorlarida azot oksidlari (NOx) va qorakuya",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Zaxira dizel generatori 800 mg/m³ NOx va qora qorakuya chiqarmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #29 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Dizel generatorlarida azot oksidlari (NOx) va qo</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Selektiv katalitik qaytarish (SCR - AdBlue) va zarrachalar filtri (DPF) o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! AdBlue (karbamid) NOx ni xavfsiz azot (N2) va suv bug'iga aylantiradi."
      },
      {
        "text": "Mo'riga oddiy suv purkash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! AdBlue (karbamid) NOx ni xavfsiz azot (N2) va suv bug'iga aylantiradi."
      }
    ]
  },
  {
    "id": 30,
    "sector": "30. Gaz quvurlarini tozalash shlamlari (Piggig chiqindilari)",
    "visualTitle": "Audit Obyekti: Neft-gaz va yoqilg'i energetikasi",
    "visualInfo": "Quvurlarni porshen bilan tozalashda temir sulfidi va pirofor qoldiqlar ajraldi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #30 • NEFT-GAZ VA YOQILG'I ENERGETIKASI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Gaz quvurlarini tozalash shlamlari (Piggig chiqi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Pirofor moddalarni havo tegmasdan suv ostida inertlash va xavfli chiqindi sifatida utilizatsiya qilish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Pirofor temir sulfidi havoda o'z-o'zidan alanga olib yong'in keltirib chiqaradi."
      },
      {
        "text": "Ochiq havoda quritishga qoldirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Pirofor temir sulfidi havoda o'z-o'zidan alanga olib yong'in keltirib chiqaradi."
      }
    ]
  },
  {
    "id": 31,
    "sector": "31. Poligon tubidagi geomembrana qalinligi va sizish xavfi",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Chiqindi poligonida HDPE geomembrana qalinligi 1.0 mm (Me'yor: kamida 2.0 mm).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #31 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Poligon tubidagi geomembrana qalinligi va sizish</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Poligon qabulini to'xtatib 2.0 mm li HDPE geomembrana va geotekstil himoyasi to'shash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! 1 mm membrana og'ir yuk mashinalari bosimida yorilib ketadi."
      },
      {
        "text": "Ustiga 5 sm qum solib ruxsat berish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! 1 mm membrana og'ir yuk mashinalari bosimida yorilib ketadi."
      }
    ]
  },
  {
    "id": 32,
    "sector": "32. Chiqindi poligoni filtrati (Leachate) tarkibida og'ir metallar",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Filtratda qo'rg'oshin (Pb) 15 mg/l, XPK = 8000 mg/l. To'g'ridan-to'g'ri daryoga sizmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #32 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chiqindi poligoni filtrati (Leachate) tarkibida </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Teskari osmos (RO) membranasi va elektrokoagulyatsiya orqali filtratni tozalash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Suyultirish qat'iyan man etiladi, og'ir metallar to'planib qoladi."
      },
      {
        "text": "Filtratni daryo suvi bilan suyultirib yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Suyultirish qat'iyan man etiladi, og'ir metallar to'planib qoladi."
      }
    ]
  },
  {
    "id": 33,
    "sector": "33. Poligon biogazi (LFG - Landfill Gas) va o'z-o'zidan yonish xavfi",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Poligon ichida metan konsentratsiyasi 55% ga yetib, chuqur qatlamlarda tutamoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #33 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Poligon biogazi (LFG - Landfill Gas) va o'z-o'zi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Vertikal gaz quduqlari burg'ilab metanni so'rish va mini-GES yoki mash'alada xavfsiz yoqish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Metan bosimi to'planib portlash va yer osti yong'iniga olib keladi."
      },
      {
        "text": "Poligon ustini tuproq bilan bosib havoni to'sish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Metan bosimi to'planib portlash va yer osti yong'iniga olib keladi."
      }
    ]
  },
  {
    "id": 34,
    "sector": "34. Simobli lyuminessent lampalarni utilizatsiya qilish texnologiyasi",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Korxona omborida 5000 dona yaroqsiz lyuminessent lampa xodimlar tomonidan sindirilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #34 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Simobli lyuminessent lampalarni utilizatsiya qil</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Maxsus vakuumli termik demerkurizatsiya qurilmasida simobni ajratib metall simob olish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Sindirilgan lampadagi simob bug'i xodimlarning asab tizimini zaharlaydi."
      },
      {
        "text": "Lampa shishasini maydalab oddiy axlatga tashlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Sindirilgan lampadagi simob bug'i xodimlarning asab tizimini zaharlaydi."
      }
    ]
  },
  {
    "id": 35,
    "sector": "35. Avtomobil qo'rg'oshin-kislotali akkumulyatorlari elektroliti",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Akkumulyator sexida sulfat kislotali elektrolit yerga to'kilmoqda (pH = 1.0).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #35 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Avtomobil qo'rg'oshin-kislotali akkumulyatorlari</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Elektrolitni so'rib olib natriy gidroksid (NaOH) bilan neytrallash va qo'rg'oshinni qayta eritish pechiga yuborish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Kislota kanalizatsiya quvurlarini yemiradi va tuproqni og'ir metallga to'ldiradi."
      },
      {
        "text": "Elektrolitni kanalizatsiyaga oqizib yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Kislota kanalizatsiya quvurlarini yemiradi va tuproqni og'ir metallga to'ldiradi."
      }
    ]
  },
  {
    "id": 36,
    "sector": "36. Elektron chiqindilar (E-waste) platalaridan oltin ajratish",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Ustaxonada platalarni zarhal kislotada (tsarskaya vodka) ochiq idishda eritib zaharli NO2 chiqarilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #36 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Elektron chiqindilar (E-waste) platalaridan olti</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Yopiq kimyoviy shkaf va skrubberli gidrometallurgik toza liniyada platalarni qayta ishlash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Platalarni yoqish havoga o'ta zaharli bromli dioksinlarni chiqaradi."
      },
      {
        "text": "Platalarni gulxanda yoqib metallini ajratish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Platalarni yoqish havoga o'ta zaharli bromli dioksinlarni chiqaradi."
      }
    ]
  },
  {
    "id": 37,
    "sector": "37. Asbest chiqindilarini (shifer bo'laklari) xavfsiz saqlash",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Buzilgan bino asbestli shiferlari maydalanib havoga o'pka saratoni keltiruvchi tola tarqatmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #37 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Asbest chiqindilarini (shifer bo'laklari) xavfsi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Asbestni namlab zich polietilen qoplarga qadoqlash va maxsus xavfli poligon katagiga ko'mish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Asbest tolasi nafas yo'llariga tushib davolanmas silikoz va saraton chaqiradi."
      },
      {
        "text": "Asbestni maydalab yo'lga shag'al sifatida to'kish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Asbest tolasi nafas yo'llariga tushib davolanmas silikoz va saraton chaqiradi."
      }
    ]
  },
  {
    "id": 38,
    "sector": "38. Tibbiy chiqindilar: shpritslar, qonli dokalar (B va C toifalar)",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Kasalxona B toifali yuqumli chiqindilarni shahar maishiy axlat qutisiga tashlamoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #38 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tibbiy chiqindilar: shpritslar, qonli dokalar (B</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Chiqindilarni avtoklavda 134°C da dezinfeksiya qilish yoki maxsus tibbiy krematorda yoqish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Yuqumli tibbiy chiqindilar OIV, gepatit va o'lat tarqatuvchi xavfli manbadir."
      },
      {
        "text": "Xlor sepib shahar poligoniga chiqarish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Yuqumli tibbiy chiqindilar OIV, gepatit va o'lat tarqatuvchi xavfli manbadir."
      }
    ]
  },
  {
    "id": 39,
    "sector": "39. Ishlatilgan motor moylarini noqonuniy yoqish",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Issiqxona qishda isitish uchun ishlatilgan motor moyini filtrsiz pechda yoqmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #39 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ishlatilgan motor moylarini noqonuniy yoqish</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Moyni litsenziyali qayta ishlash zavodiga regeneratsiya (bazaviy moy olish) uchun topshirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Moy yonganda tutunda qo'rg'oshin, mishyak va kanserogen qorakuya hosil bo'ladi."
      },
      {
        "text": "Moyni yoqishda davom etish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Moy yonganda tutunda qo'rg'oshin, mishyak va kanserogen qorakuya hosil bo'ladi."
      }
    ]
  },
  {
    "id": 40,
    "sector": "40. Sanoat filtrlari changlarini briketlash va qotirish",
    "visualTitle": "Audit Obyekti: Chiqindi poligonlari va xavfli chiqindilar",
    "visualInfo": "Metallurgiya filtrlari changi shamolda shahar ustiga chang bo'lib uchmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #40 • CHIQINDI POLIGONLARI VA XAVFLI CHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sanoat filtrlari changlarini briketlash va qotir</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Tsement va polimer qo'shib briketlash yoki shisha matrisaga qotirish (solidifikatsiya).",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Briketlash changning shamolda uchib aholi o'pkasiga kirishini to'xtatadi."
      },
      {
        "text": "Ochiq dala chetiga to'kib qo'yish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Briketlash changning shamolda uchib aholi o'pkasiga kirishini to'xtatadi."
      }
    ]
  },
  {
    "id": 41,
    "sector": "41. Tekstil oqavasida BPK5 va XPK nisbatining buzilishi",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Oqavada XPK = 1600 mg/l, BPK5 = 200 mg/l (Nisbat: 8.0). Faol loy chirib nobud bo'lmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #41 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tekstil oqavasida BPK5 va XPK nisbatining buzili</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Avval Fenton reagenti (FeSO4 + H2O2) bilan kimyoviy oksidlab, keyin aerotenkka yuborish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Fenton oksidlanishi murakkab bo'yoqlarni parchalab biologik tozalashga moslashtiradi."
      },
      {
        "text": "Aerotenklarga kislorod berishni to'xtatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Fenton oksidlanishi murakkab bo'yoqlarni parchalab biologik tozalashga moslashtiradi."
      }
    ]
  },
  {
    "id": 42,
    "sector": "42. Shahar tozalash inshootida faol loyning ko'tarilib ketishi (Bulking)",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Aerotenkda ipsimon bakteriyalar (Sphaerotilus) ko'payib loy cho'kmayapti.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #42 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shahar tozalash inshootida faol loyning ko'taril</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Qaytarma loyga xlor dozalash yoki koagulyant (alyuminiy sulfat) qo'shib cho'ktirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Ipsimon loyni nazoratli xlorlash faol loy tuzilishini me'yorga keltiradi."
      },
      {
        "text": "Loyni daryoga oqizib tozalash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Ipsimon loyni nazoratli xlorlash faol loy tuzilishini me'yorga keltiradi."
      }
    ]
  },
  {
    "id": 43,
    "sector": "43. Oqava suvlarda fosfatlar va evtrofikatsiya xavfi",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Tozalangan suvda fosfatlar (PO4) 12 mg/l (PDK: 1.0 mg/l). Daryoda suvo'tlar qoplab baliqlar o'lmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #43 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Oqava suvlarda fosfatlar va evtrofikatsiya xavfi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Temir xlorid (FeCl3) dozalab fosfatlarni erimaydigan FePO4 holida cho'ktirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! FeCl3 fosforni 95% cho'ktiradi va daryo evtrofikatsiyasini to'xtatadi."
      },
      {
        "text": "Fosfatlarni tozalash shart emas deb hisoblash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! FeCl3 fosforni 95% cho'ktiradi va daryo evtrofikatsiyasini to'xtatadi."
      }
    ]
  },
  {
    "id": 44,
    "sector": "44. Galvanika yuvish suvlarida nikel (Ni) va mis (Cu) ionlari",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Oqavada Ni = 8.5 mg/l, Cu = 14 mg/l (PDK: 0.1 mg/l).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #44 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Galvanika yuvish suvlarida nikel (Ni) va mis (Cu</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ion almashinuvchi smolalar (kationit) orqali og'ir metallarni yutib toza suvni qaytarish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Ionitlar qimmatbaho nikel va misni qaytarib, oqovani toza distillatga aylantiradi."
      },
      {
        "text": "Ohak bilan aralashtirib loyini quritish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Ionitlar qimmatbaho nikel va misni qaytarib, oqovani toza distillatga aylantiradi."
      }
    ]
  },
  {
    "id": 45,
    "sector": "45. Qushchilik fabrikasi oqavasida yuqori konsentratsiyali ammiakli azot",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Oqavada ammoniy ioni (NH4+) 240 mg/l (PDK: 1.5 mg/l).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #45 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Qushchilik fabrikasi oqavasida yuqori konsentrat</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Nitrifikatsiya-denitrifikatsiya (Anammox) texnologiyasi bilan azot gaziga (N2) aylantirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Konsentrlangan ammoniy ekinlarni kuydiradi va yer osti suvini nitratga to'ldiradi."
      },
      {
        "text": "To'g'ridan-to'g'ri qishloq xo'jaligi yerlariga oqizish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Konsentrlangan ammoniy ekinlarni kuydiradi va yer osti suvini nitratga to'ldiradi."
      }
    ]
  },
  {
    "id": 46,
    "sector": "46. Yog'-moy kombinatida yog' tutgichlar (Jiroulovitel) samaradorligi",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Oqavada erkin yog'lar 450 mg/l bo'lib, quvurlarni to'sib qo'ymoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #46 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yog'-moy kombinatida yog' tutgichlar (Jiroulovit</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Bosimli flotator (DAF) o'rnatib mikropufakchalar bilan yog' qatlamini yig'ib olish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! DAF flotatori yog'larni 98% ajratib texnik sovun xomashyosiga beradi."
      },
      {
        "text": "Quvurlarga qaynoq suv quyib eritish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! DAF flotatori yog'larni 98% ajratib texnik sovun xomashyosiga beradi."
      }
    ]
  },
  {
    "id": 47,
    "sector": "47. Charm zavodida sulfidli oqavalarning kislota bilan aralashishi",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Sulfidli va kislotali oqavalar bitta kanalda qo'shilib o'ta zaharli H2S gazi ajralmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #47 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Charm zavodida sulfidli oqavalarning kislota bil</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Sulfidli oqavani alohida ajratib temir tuzlari yoki vodorod peroksid bilan xavfsizlantirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Kislota va sulfid qo'shilsa bir necha daqiqada odamni o'ldiruvchi H2S gazi hosil bo'ladi."
      },
      {
        "text": "Kanalizatsiya lyuklarini yopib qo'yish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Kislota va sulfid qo'shilsa bir necha daqiqada odamni o'ldiruvchi H2S gazi hosil bo'ladi."
      }
    ]
  },
  {
    "id": 48,
    "sector": "48. Avtomobil yuvish shoxobchalarida (Moyka) aylanma suv tizimi",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Moykada kuniga 40 m³ ichimlik suvi sarflanib, qum va moyli suv ko'chaga oqmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #48 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Avtomobil yuvish shoxobchalarida (Moyka) aylanma</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Gidrotsiklon, qum-shag'al filtri va koagulyatsiyali yopiq aylanma (Recirculation) tizim o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Aylanma suv tizimi ichimlik suv sarfini 90% ga qisqartiradi."
      },
      {
        "text": "Shahar arig'iga tunda oqizish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Aylanma suv tizimi ichimlik suv sarfini 90% ga qisqartiradi."
      }
    ]
  },
  {
    "id": 49,
    "sector": "49. Farmatsevtika oqavasida antibiotik va gormon qoldiqlari",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Oqavada penitsillin va sefalosporin qoldiqlari oqibatida daryoda chidamli superbakteriyalar paydo bo'lmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #49 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Farmatsevtika oqavasida antibiotik va gormon qol</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Katalitik ozonlash va UV-fotokataliz yordamida antibiotik molekulalarini parchalash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Qum filtri antibiotiklarni ushlay olmaydi, chuqur fotooksidlanish shart."
      },
      {
        "text": "Oddiy qum filtri orqali o'tkazish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Qum filtri antibiotiklarni ushlay olmaydi, chuqur fotooksidlanish shart."
      }
    ]
  },
  {
    "id": 50,
    "sector": "50. Oqava suvlarni zararsizlantirishda xlor o'rniga UV (ultrabinafsha) nurlantirish",
    "visualTitle": "Audit Obyekti: Suv xo'jaligi va tozalash inshootlari",
    "visualInfo": "Tozalash inshootida xlorlash oqibatida kanserogen trixlorometanlar hosil bo'lmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #50 • SUV XO'JALIGI VA TOZALASH INSHOOTLARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Oqava suvlarni zararsizlantirishda xlor o'rniga </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Xlorlash o'rniga ultrabinafsha (UV) dezinfeksiya blokiga o'tish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! UV nurlari kimyoviy qoldiq qoldirmasdan 99.9% patogen bakteriyalarni yo'q qiladi."
      },
      {
        "text": "Dezinfeksiyani butunlay bekor qilish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! UV nurlari kimyoviy qoldiq qoldirmasdan 99.9% patogen bakteriyalarni yo'q qiladi."
      }
    ]
  },
  {
    "id": 51,
    "sector": "51. Sement zavodida aylanma pech changi va elektrofiltr samaradorligi",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Elektrofiltrda kuchlanish pasayib, klinker changi 350 mg/m³ ga yetdi (Limit: 30 mg/m³).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #51 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sement zavodida aylanma pech changi va elektrofi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Elektrofiltr elektrodlarini tozalash, avtomatik boshqaruv blokini sozlash va gibrid filtrga o'tish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Gibrid filtr (elektrofiltr + matoli filtr) changni 5 mg/m³ gacha tozalaydi."
      },
      {
        "text": "Pech quvvatini 10% pasaytirib davom ettirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Gibrid filtr (elektrofiltr + matoli filtr) changni 5 mg/m³ gacha tozalaydi."
      }
    ]
  },
  {
    "id": 52,
    "sector": "52. G'isht zavodida ko'mir yoqishda qora tutun va ftoridlar",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "G'isht kuydirishda o'ta zaharli HF va qora tutun tutgichsiz 8 ta past mo'ridan chiqmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #52 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">G'isht zavodida ko'mir yoqishda qora tutun va ft</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Barcha pechlarni yagona ohakli skrubberli markaziy aspiratsiya tizimiga ulash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Ohakli skrubber ftor va oltingugurtni to'liq neytrallaydi."
      },
      {
        "text": "Faqat kechasi pechlarni yoqish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Ohakli skrubber ftor va oltingugurtni to'liq neytrallaydi."
      }
    ]
  },
  {
    "id": 53,
    "sector": "53. Shisha eritish pechida azot oksidlari (NOx) va Oxy-fuel texnologiyasi",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Pechda harorat 1600°C bo'lgani sababli termik NOx 1800 mg/m³ ga yetdi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #53 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shisha eritish pechida azot oksidlari (NOx) va O</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Havo o'rniga toza kislorod bilan yoqish (Oxy-fuel) va selektiv katalitik qaytarish (SCR) qo'llash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Oxy-fuel texnologiyasi havoning azoti bo'lmagani uchun NOx hosil bo'lishini 85% kamaytiradi."
      },
      {
        "text": "Pech haroratini 1100°C ga tushirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Oxy-fuel texnologiyasi havoning azoti bo'lmagani uchun NOx hosil bo'lishini 85% kamaytiradi."
      }
    ]
  },
  {
    "id": 54,
    "sector": "54. Asfalt-beton zavodida bitum bug'lari va chang aspiratsiyasi",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Asfalt aralashtirgichdan kanserogen benz(a)piren va chang havoga tarqalmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #54 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Asfalt-beton zavodida bitum bug'lari va chang as</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Skrubber va siklon kaskadiga ega zamonaviy matoli chang tutgich o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Benz(a)piren eng xavfli kanserogenlardan bo'lib, zarrachalar bilan birga filtrda tutiladi."
      },
      {
        "text": "Filtrsiz ochiq havoda qorishtirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Benz(a)piren eng xavfli kanserogenlardan bo'lib, zarrachalar bilan birga filtrda tutiladi."
      }
    ]
  },
  {
    "id": 55,
    "sector": "55. Ohak kuydirish pechlarida SO2 va CO2 emissiyalari",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Ohaktosh parchalanib atmosferaga soatiga 4 tonna CO2 va SO2 gazlari chiqarilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #55 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ohak kuydirish pechlarida SO2 va CO2 emissiyalar</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Tutun gazlarini tozalab issiqxonalarga CO2 o'g'iti sifatida yo'naltirish (CCUS).",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! CCUS texnologiyasi chiqindi gazni o'simliklar o'sishi uchun foydali manbaga aylantiradi."
      },
      {
        "text": "Gazlarni yerga purkash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! CCUS texnologiyasi chiqindi gazni o'simliklar o'sishi uchun foydali manbaga aylantiradi."
      }
    ]
  },
  {
    "id": 56,
    "sector": "56. To'qimachilik fabrikasida chang va paxta tolasi aspiratsiyasi",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Yigiruv sexida mayda paxta changi 12 mg/m³ (PDK: 2 mg/l). Xodimlarda bissinoz kasalligi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #56 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">To'qimachilik fabrikasida chang va paxta tolasi </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ko'p bosqichli aylanma barabanli filtr va nam havo yuvish kamerasini o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Barabanli filtr paxta tolasini to'liq tutib sex havosini qayta tozalaydi."
      },
      {
        "text": "Xodimlarga doka niqob taqtirish bilan cheklanish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Barabanli filtr paxta tolasini to'liq tutib sex havosini qayta tozalaydi."
      }
    ]
  },
  {
    "id": 57,
    "sector": "57. Un tegirmonlarida portlash xavfi bo'lgan organik un changi",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Elevatorda un changi 45 g/m³ bo'lib, statik elektrdan portlash xavfi yuzaga kelgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #57 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Un tegirmonlarida portlash xavfi bo'lgan organik</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Portlashdan himoyalangan (ATEX) antistatik filtrlar va havo o'tkazgichlarga yong'in klapanlari o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! ATEX standartidagi uskunalar organik chang portlashining oldini oladi."
      },
      {
        "text": "Changni devorlarga urib tushirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! ATEX standartidagi uskunalar organik chang portlashining oldini oladi."
      }
    ]
  },
  {
    "id": 58,
    "sector": "58. Yog'ochga ishlov berishda qipiq va bo'yoq aerozollari",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Mebel korxonasida laklash va silliqlash bitta xonada filtrisiz bajarilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #58 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yog'ochga ishlov berishda qipiq va bo'yoq aerozo</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Silliqlash uchun siklonli changyutgich, laklash uchun suv pardali bo'yoq kamerasi o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Suv pardali kamera zaharli bo'yoq aerozolini to'liq ushlab qoladi."
      },
      {
        "text": "Sex burchagida qipiqlarni yoqib yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Suv pardali kamera zaharli bo'yoq aerozolini to'liq ushlab qoladi."
      }
    ]
  },
  {
    "id": 59,
    "sector": "59. Metallni lazer va plazmali qirqishda og'ir metall aerozoli",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Plazma qirqishda zaharli marganes va xrom aerozollari ajralmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #59 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Metallni lazer va plazmali qirqishda og'ir metal</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Plazma stoli ostiga avtomatik seksiyali so'rish tizimi va patronli filtr qo'yish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Sektsiyali so'rish tutunni hosil bo'lgan joyidayoq 99% tutadi."
      },
      {
        "text": "Oddiy xona ventilyatsiyasiga tayanish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Sektsiyali so'rish tutunni hosil bo'lgan joyidayoq 99% tutadi."
      }
    ]
  },
  {
    "id": 60,
    "sector": "60. Shahar qozonxonasida ko'mir yoqilganda qorakuya darajasi",
    "visualTitle": "Audit Obyekti: Atmosfera havosi va sanoat emissiyalari",
    "visualInfo": "Ringelman shkalasi bo'yicha tutunning qoraligi 4-ballga yetgan (Me'yor: 1-balldan oshmasligi kerak).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #60 • ATMOSFERA HAVOSI VA SANOAT EMISSIYALARI</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shahar qozonxonasida ko'mir yoqilganda qorakuya </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ko'mir yonish jarayonini avtomatlashtirish, ikkilamchi havo berish va siklon o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! To'g'ri havo taqsimoti ko'mirning to'liq yonishini ta'minlab qorakuyani yo'qotadi."
      },
      {
        "text": "Mo'rini oq rangga bo'yash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! To'g'ri havo taqsimoti ko'mirning to'liq yonishini ta'minlab qorakuyani yo'qotadi."
      }
    ]
  },
  {
    "id": 61,
    "sector": "61. Parrandachilik fabrikasida tovuq go'ngi va ammiak hidi",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Yiliga 20,000 tonna yangi go'ng ochiq dalada to'planib, 3 km masofaga o'tkir hid tarqatmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #61 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Parrandachilik fabrikasida tovuq go'ngi va ammia</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Yopiq biogaz reaktori yoki termofil kompostlash barabanida bio-o'g'itga aylantirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Biogaz texnologiyasi hidni butkul yo'qotadi, metan gazi va sifatli o'g'it beradi."
      },
      {
        "text": "Go'ngni daryo bo'yiga to'kish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Biogaz texnologiyasi hidni butkul yo'qotadi, metan gazi va sifatli o'g'it beradi."
      }
    ]
  },
  {
    "id": 62,
    "sector": "62. Chorvachilik fermasida silos suvlari va organik oqava",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Silos chuquridan oqayotgan nordon suyuqlik (BPK = 45,000 mg/l) ariqqa oqmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #62 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chorvachilik fermasida silos suvlari va organik </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Silos sharbatini yig'ib neytrallash va biogaz stansiyasiga substrat sifatida yo'naltirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Silos sharbati o'ta kuchli ifloslantiruvchi bo'lib, metan hosil qilish uchun a'lo manbadir."
      },
      {
        "text": "Suvni shahar oqovasiga qo'shish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Silos sharbati o'ta kuchli ifloslantiruvchi bo'lib, metan hosil qilish uchun a'lo manbadir."
      }
    ]
  },
  {
    "id": 63,
    "sector": "63. Katta qushxona (Kombinat) oqavasida qon va yog' qoldiqlari",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Kombinat oqavasida BPK = 3500 mg/l, patogen bakteriyalar va qon qoldiqlari mavjud.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #63 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Katta qushxona (Kombinat) oqavasida qon va yog' </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Qonni alohida yig'ib ozuqabop un olish, oqavani fermentativ tozalash va zararsizlantirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Qon alohida ajratilsa oqavaning ifloslanish darajasi 70% ga kamayadi."
      },
      {
        "text": "Oqavani to'g'ridan-to'g'ri ochiq hovuzga tashlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Qon alohida ajratilsa oqavaning ifloslanish darajasi 70% ga kamayadi."
      }
    ]
  },
  {
    "id": 64,
    "sector": "64. Shakar zavodida shakar lavlagi jomi (Jom) utilizatsiyasi",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Kuniga 800 tonna jom chirib kislotali hid va chivinlar manbaiga aylangan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #64 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shakar zavodida shakar lavlagi jomi (Jom) utiliz</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Jomni quritib chorva ozuqasi granulasi qilish yoki anaerob bioreaktorda metan olish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Granulalangan jom qimmatbaho eksportbop chorva ozuqasidir."
      },
      {
        "text": "Ekin maydonlariga 1 metr qalinlikda tashlab qo'yish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Granulalangan jom qimmatbaho eksportbop chorva ozuqasidir."
      }
    ]
  },
  {
    "id": 65,
    "sector": "65. Spirt ishlab chiqarishda barda (distillyat qoldig'i) auditi",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Spirt ishlab chiqarishda 1 litr spirtga 13 litr kislotali barda (BPK = 35,000 mg/l) ajralmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #65 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Spirt ishlab chiqarishda barda (distillyat qoldi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Bardani bug'latib quritish (DDGS) orqali oqsil-vitaminli chorva konsentrati ishlab chiqarish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! DDGS texnologiyasi oqavani butunlay yo'qotib korxonaga qo'shimcha daromad keltiradi."
      },
      {
        "text": "Bardani yaqin ko'lga to'kish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! DDGS texnologiyasi oqavani butunlay yo'qotib korxonaga qo'shimcha daromad keltiradi."
      }
    ]
  },
  {
    "id": 66,
    "sector": "66. Pivo zavodida pivo quyqasi (Drobina) va xamirturush",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Yiliga 4000 tonna pivo drobinasi muddati o'tib mog'orlamoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #66 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Pivo zavodida pivo quyqasi (Drobina) va xamirtur</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Yangi holida chorvachilik xo'jaliklariga tarqatish yoki ozuqa oqsili olish uchun quritish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Drobina toza organik oqsil manbai bo'lib, chiqindi poligoniga tashlanmasligi kerak."
      },
      {
        "text": "Chiqindi poligoniga dafn qilish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Drobina toza organik oqsil manbai bo'lib, chiqindi poligoniga tashlanmasligi kerak."
      }
    ]
  },
  {
    "id": 67,
    "sector": "67. Meva-sabzavot konserva zavodida pomidor va olma po'stloqlari",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Mavsumda kuniga 50 tonna meva chiqindilari poligonni to'ldirmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #67 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Meva-sabzavot konserva zavodida pomidor va olma </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Pektin moddasi ajratib olish va qoldiqdan bio-gumus ishlab chiqarish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Pektin qandolatchilik va farmatsevtika uchun qimmatbaho tabiiy quyultirgichdir."
      },
      {
        "text": "Suvga oqizib yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Pektin qandolatchilik va farmatsevtika uchun qimmatbaho tabiiy quyultirgichdir."
      }
    ]
  },
  {
    "id": 68,
    "sector": "68. Issiqxona xo'jaliklarida ishlatilgan mineral vata (Gidroponika)",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Pomidor yetishtirilgan 300 tonna mineral vata dalalarga sochib tashlangan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #68 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Issiqxona xo'jaliklarida ishlatilgan mineral vat</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Mineral vatani xavfsiz maydalab g'isht va sement ishlab chiqarishda plomba sifatida qayta ishlash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Mineral vata yonmaydi, shamolda uchib tuproq unumdorligini buzadi."
      },
      {
        "text": "Ochiq havoda yoqish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Mineral vata yonmaydi, shamolda uchib tuproq unumdorligini buzadi."
      }
    ]
  },
  {
    "id": 69,
    "sector": "69. Baliqchilik havzalarida dori vositalari va ozuqa cho'kindilari",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Sun'iy hovuz tubida chiriyotgan ozuqa va antibiotiklar daryoga oqizilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #69 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Baliqchilik havzalarida dori vositalari va ozuqa</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Sedimentatsiya tindirgichi va bio-plato (qamishli sun'iy botqoqlik) orqali tozalash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Bio-plato o'simliklari oqava suvdagi ortiqcha organikani tabiiy o'zlashtiradi."
      },
      {
        "text": "Suvni to'g'ridan-to'g'ri kanalga tashlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Bio-plato o'simliklari oqava suvdagi ortiqcha organikani tabiiy o'zlashtiradi."
      }
    ]
  },
  {
    "id": 70,
    "sector": "70. Pillachilik va ipak yigiruvida pilla qobiqlari va seritsin oqavasi",
    "visualTitle": "Audit Obyekti: Agrosanoat, oziq-ovqat va biochiqindilar",
    "visualInfo": "Ipak yechish sexidan chiqadigan oqavada seritsin oqsili chiriydi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #70 • AGROSANOAT, OZIQ-OVQAT VA BIOCHIQINDILAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Pillachilik va ipak yigiruvida pilla qobiqlari v</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ultrafiltratsiya orqali seritsin oqsilini kosmetika sanoati uchun ajratib olish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Seritsin qimmatbaho kosmetik xomashyo bo'lib, ajratilsa suv tozalanadi."
      },
      {
        "text": "Ko'chaga to'kish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Seritsin qimmatbaho kosmetik xomashyo bo'lib, ajratilsa suv tozalanadi."
      }
    ]
  },
  {
    "id": 71,
    "sector": "71. Gips va gipsokarton zavodida mayda dispersli gips changi",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Silliqlash sexida chang 180 mg/m³ bo'lib, filtrlar tiqilib qolgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #71 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Gips va gipsokarton zavodida mayda dispersli gip</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Impulsli siqilgan havo bilan tozalanadigan patronli (kartrijli) filtr o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Patronli filtr mayda gips changini 99.8% ushlab qayta ishlab chiqarishga qaytaradi."
      },
      {
        "text": "Filtr matosini olib tashlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Patronli filtr mayda gips changini 99.8% ushlab qayta ishlab chiqarishga qaytaradi."
      }
    ]
  },
  {
    "id": 72,
    "sector": "72. Ohaktosh karyerida portlatish ishlarida chang buluti",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Ommaviy portlatishda shahar ustiga diametri 2 km bo'lgan chang buluti yopirilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #72 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ohaktosh karyerida portlatish ishlarida chang bu</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Gidro-purkagichli burg'ilash, namlovchi reagentlar va sekinlashtirilgan portlatish usulini qo'llash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Namlovchi reagentlar chang tarqalish radiusini 80% ga qisqartiradi."
      },
      {
        "text": "Shamol aholi tomonga esganda portlatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Namlovchi reagentlar chang tarqalish radiusini 80% ga qisqartiradi."
      }
    ]
  },
  {
    "id": 73,
    "sector": "73. Marmar va granit kesish sexida tosh shlami (Pulpa)",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Tosh kesish oqavasi ariqlarga oqib, sement kabi qotib suv yo'lini to'smoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #73 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Marmar va granit kesish sexida tosh shlami (Pulp</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Filtr-press uskunasi o'rnatib tosh unini briketlash va suvni 100% qayta aylanmaga yuborish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Filtr-press tosh kukunini quruq holda ajratib, toza suvni pechlarga qaytaradi."
      },
      {
        "text": "Shahar kanalizatsiyasiga yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Filtr-press tosh kukunini quruq holda ajratib, toza suvni pechlarga qaytaradi."
      }
    ]
  },
  {
    "id": 74,
    "sector": "74. Beton qorish zavodida (RU) tsement changi va mikser yuvish suvlari",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Beton mikserlari yuvilgan ishqoriy suv (pH = 12) ariqqa quyilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #74 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Beton qorish zavodida (RU) tsement changi va mik</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Beton qayta ishlash retsikling qurilmasida qum-shag'alni ajratib, suvni beton qorishga qayta ishlatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Retsikling tizimi yangi beton tayyorlashda xomashyo va suvni to'liq tejaydi."
      },
      {
        "text": "Ariqqa oqizishda davom etish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Retsikling tizimi yangi beton tayyorlashda xomashyo va suvni to'liq tejaydi."
      }
    ]
  },
  {
    "id": 75,
    "sector": "75. Shag'al saralash (Drobika) majmuasida shovqin va titrash",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Drobika yaqinidagi turar-joylarda shovqin darajasi 78 dB (Me'yor: kunduzi 55 dB).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #75 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Shag'al saralash (Drobika) majmuasida shovqin va</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Akustik himoya devorlari, tebranishni yutuvchi poydevor va rezina qoplamali elaklar o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Akustik ekran aholi yashash zonasidagi shovqinni sanitariya me'yoriga tushiradi."
      },
      {
        "text": "Ishchilarga quloqchin taqish bilan cheklanish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Akustik ekran aholi yashash zonasidagi shovqinni sanitariya me'yoriga tushiradi."
      }
    ]
  },
  {
    "id": 76,
    "sector": "76. Oltin rudasini flotatsiya qilishda ksantogenat reagentlari",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Flotatsiya chiqindilarida zaharli kaliy ksantogenati aniqlandi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #76 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Oltin rudasini flotatsiya qilishda ksantogenat r</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ozon yoki gipoxlorit bilan ksantogenatni zararsiz sulfat va karbonatlarga parchalash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Ksantogenatlar suv jonivorlari uchun o'ta zaharli bo'lib, kimyoviy parchalanishi shart."
      },
      {
        "text": "Qoldiqlar omboriga to'g'ridan-to'g'ri yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Ksantogenatlar suv jonivorlari uchun o'ta zaharli bo'lib, kimyoviy parchalanishi shart."
      }
    ]
  },
  {
    "id": 77,
    "sector": "77. Ko'mir konlarida o'z-o'zidan yonayotgan otvallar (Terrikonlar)",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Ko'mir qoldig'i terrikoni ichida harorat 600°C ga yetib, SO2 va CO tutamoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #77 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ko'mir konlarida o'z-o'zidan yonayotgan otvallar</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Terrikon yuzasini loy qatlam bilan qoplash (glinyaniy zamok) va havoni to'sib so'ndirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Suv sepilsa suv bug'i va portlovchi vodorod gazi hosil bo'lib yong'in kuchayadi."
      },
      {
        "text": "Ustiga suv sepish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Suv sepilsa suv bug'i va portlovchi vodorod gazi hosil bo'lib yong'in kuchayadi."
      }
    ]
  },
  {
    "id": 78,
    "sector": "78. Bazalt tolasi (mineral plita) eritish pechida fenol-formaldegid",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Tolani qotirish kamerasida fenol bug'lari 8 barobar oshib ketgan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #78 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Bazalt tolasi (mineral plita) eritish pechida fe</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Termik dozhigatel (yonishdan keyingi kamera) o'rnatib gazni 750°C da yoqish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Yuqori harorat fenol birikmalarini xavfsiz gazlarga aylantiradi."
      },
      {
        "text": "Oddiy mo'ridan chiqarish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Yuqori harorat fenol birikmalarini xavfsiz gazlarga aylantiradi."
      }
    ]
  },
  {
    "id": 79,
    "sector": "79. Kvars qumini quritish barabanida tabiiy gaz sarfi va emissiya",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Baraban mo'risida chang 450 mg/m³ va issiqlik yo'qotilishi yuqori.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #79 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Kvars qumini quritish barabanida tabiiy gaz sarf</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Retsirkulyatsiyali siklon va issiqlik rekuperatori o'rnatish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Rekuperator chiqindi issiqlikni qaytarib gaz sarfini 25% kamaytiradi."
      },
      {
        "text": "Filtrsiz ishlatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Rekuperator chiqindi issiqlikni qaytarib gaz sarfini 25% kamaytiradi."
      }
    ]
  },
  {
    "id": 80,
    "sector": "80. Sanoat chiqindilaridan tayyorlangan sun'iy toshlar radioaktivligi",
    "visualTitle": "Audit Obyekti: Qurilish materiallari va tog'-kon",
    "visualInfo": "Fosfogips va kuldan yasalgan plitalarda tabiiy radionuklidlar (Ra-226, Th-232) me'yordan yuqori.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #80 • QURILISH MATERIALLARI VA TOG'-KON</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sanoat chiqindilaridan tayyorlangan sun'iy toshl</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Xomashyoning effektiv solishtirma faolligini (Aeff) tekshirib faqat I sinfga ruxsat berish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Radioaktivligi yuqori materiallar uylarda radon gazi to'planishiga olib keladi."
      },
      {
        "text": "Tekshiruvsiz turar-joy qurilishiga sotish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Radioaktivligi yuqori materiallar uylarda radon gazi to'planishiga olib keladi."
      }
    ]
  },
  {
    "id": 81,
    "sector": "81. ISO 14001: Favqulodda vaziyatlarga shaylik (4.4.7-band)",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Korxona neft to'kilishiga qarshi reja tuzgan, ammo 3 yildan beri amaliy o'quv mashg'uloti o'tkazmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #81 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">ISO 14001: Favqulodda vaziyatlarga shaylik (4.4.</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Katta nomuvofiqlik qayd etish va xodimlar bilan favqulodda o'quv mashg'ulotini o'tkazishni talab qilish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Standart talabiga ko'ra favqulodda rejalar amalda muntazam sinovdan o'tishi shart."
      },
      {
        "text": "Reja qog'ozda borligi uchun muvofiq deb topish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Standart talabiga ko'ra favqulodda rejalar amalda muntazam sinovdan o'tishi shart."
      }
    ]
  },
  {
    "id": 82,
    "sector": "82. Ekologik to'lovlar: Me'yordan ortiqcha ifloslantirish (VM 202-son qaror)",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Zavod havoga ruxsat etilgan limitdan 15 tonna ortiqcha chang chiqargan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #82 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Ekologik to'lovlar: Me'yordan ortiqcha ifloslant</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Me'yordan oshgan qismiga 3 dan 10 barobargacha oshirilgan kompensatsiya to'lovi hisoblash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Qonunchilik bo'yicha limitdan oshgan har bir tonna jazo tariqasida karrali to'lanadi."
      },
      {
        "text": "Oddiy 1 barobar tarifda to'lov undirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Qonunchilik bo'yicha limitdan oshgan har bir tonna jazo tariqasida karrali to'lanadi."
      }
    ]
  },
  {
    "id": 83,
    "sector": "83. Davlat ekologik auditi dalolatnomasini rasmiylashtirish muddati",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Auditor tekshiruv tugagach dalolatnomani 1 oy o'tib yozmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #83 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Davlat ekologik auditi dalolatnomasini rasmiylas</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Qonunga muvofiq tekshiruv yakunlangan kuni dalolatnoma tuzilib, rahbar imzosiga taqdim etilishi shart.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Dalolatnoma o'z vaqtida rasmiylashtirilmasa yuridik kuchini yo'qotadi."
      },
      {
        "text": "Istalgan vaqtda yozish mumkin deb hisoblash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Dalolatnoma o'z vaqtida rasmiylashtirilmasa yuridik kuchini yo'qotadi."
      }
    ]
  },
  {
    "id": 84,
    "sector": "84. Atrof-muhit monitoringi postlarining metrologik tekshiruvi (Poverka)",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Zavod gazanalizatori 4 yildan beri 'O'zstandart' tekshiruvidan o'tmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #84 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Atrof-muhit monitoringi postlarining metrologik </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Metrologik sertifikatsiz asbob ko'rsatkichlarini bekor deb topish va davlat tekshiruvidan o'tkazish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Metrologik tekshiruvdan o'tmagan asbob qonuniy dalil bo'la olmaydi."
      },
      {
        "text": "Eski ko'rsatkichlarni qabul qilish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Metrologik tekshiruvdan o'tmagan asbob qonuniy dalil bo'la olmaydi."
      }
    ]
  },
  {
    "id": 85,
    "sector": "85. Korxona hududida yashil maydon (Yashil belbog') normativi",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Zavod umumiy hududining atigi 3% qismida daraxt ekilgan (Me'yor: kamida 10-15%).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #85 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Korxona hududida yashil maydon (Yashil belbog') </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Korxona perimetri bo'ylab chang va gaz yutuvchi daraxtlar ekish majburiyatini kiritish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Yashil belbog' sanoat chiqindilarini aholiga yetib borishini to'suvchi tabiiy filtrdir."
      },
      {
        "text": "Yashil maydon shart emas deb hisoblash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Yashil belbog' sanoat chiqindilarini aholiga yetib borishini to'suvchi tabiiy filtrdir."
      }
    ]
  },
  {
    "id": 86,
    "sector": "86. Chiqindilar pasportini ishlab chiqish va tasdiqlash",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Korxonada hosil bo'ladigan II va III sinf xavfli chiqindilar uchun pasport mavjud emas.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #86 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chiqindilar pasportini ishlab chiqish va tasdiql</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Chiqindilarning xavflilik darajasini laboratoriyada aniqlab rasmiy ekologik pasport tuzish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Xavflilik pasportisiz chiqindilarni saqlash va tashish qat'iyan taqiqlanadi."
      },
      {
        "text": "Pasportsiz maishiy axlat bilan birga chiqarish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Xavflilik pasportisiz chiqindilarni saqlash va tashish qat'iyan taqiqlanadi."
      }
    ]
  },
  {
    "id": 87,
    "sector": "87. Doimiy uzluksiz avtomatik monitoring stansiyasi (CEMS) talabi",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "I toifali yirik zavod mo'risida CEMS avtomatik gaz tahlil datchigi o'rnatilmagan.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #87 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Doimiy uzluksiz avtomatik monitoring stansiyasi </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Vazirlar Mahkamasi qaroriga binoan onlayn davlat tizimiga ulangan CEMS stansiyasi o'rnatishni talab qilish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! I toifali korxonalar onlayn davlat ekologik monitoring bazasiga to'g'ridan-to'g'ri ulanishi shart."
      },
      {
        "text": "Yilda 1 marta laboratoriya chaqirish yetarli deb hisoblash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! I toifali korxonalar onlayn davlat ekologik monitoring bazasiga to'g'ridan-to'g'ri ulanishi shart."
      }
    ]
  },
  {
    "id": 88,
    "sector": "88. Xalqaro ekologik audit: Karbon izi (Carbon Footprint Scope 1, 2, 3)",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Eksportchi korxona Yevropaga mahsulot sotishda CBAM uglerod solig'iga duch keldi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #88 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Xalqaro ekologik audit: Karbon izi (Carbon Footp</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Energiya auditini o'tkazib quyosh panellari o'rnatish va mahsulot karbon izini pasaytirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Uglerod izini qisqartirish mahsulotni jahon bozorida raqobatbardosh qiladi."
      },
      {
        "text": "Uglerod solig'ini to'lab daromadni yo'qotish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Uglerod izini qisqartirish mahsulotni jahon bozorida raqobatbardosh qiladi."
      }
    ]
  },
  {
    "id": 89,
    "sector": "89. Suvdan maxsus foydalanish ruxsatnomasi (Gidrogeologiya)",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Zavod ruxsatnomasiz o'zboshimchalik bilan 3 ta artezian qudug'idan ichimlik suvini sanoatga ishlatmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #89 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Suvdan maxsus foydalanish ruxsatnomasi (Gidrogeo</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Noqonuniy quduqlarni muhrlash, suv hisoblagich o'rnatish va davlat ruxsatnomasini olish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Yer osti chuchuk suvi strategik davlat zaxirasi bo'lib, noqonuniy olish jinoiy javobgarlikdir."
      },
      {
        "text": "Tekshiruvsiz foydalanishga ko'z yumish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Yer osti chuchuk suvi strategik davlat zaxirasi bo'lib, noqonuniy olish jinoiy javobgarlikdir."
      }
    ]
  },
  {
    "id": 90,
    "sector": "90. Atrof-muhitga ta'sir to'g'risidagi bayonot (ZVOS) shartlarini buzish",
    "visualTitle": "Audit Obyekti: Ekologik qonunchilik, standartlar va audit",
    "visualInfo": "Korxona ZVOS loyihasida ko'rsatilgan quvvatdan 2 barobar ko'p ishlab chiqarmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #90 • EKOLOGIK QONUNCHILIK, STANDARTLAR VA AUDIT</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Atrof-muhitga ta'sir to'g'risidagi bayonot (ZVOS</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Qayta davlat ekologik ekspertizasidan o'tish va yangi ZVOS ishlab chiqish talabini qo'yish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Quvvat oshganda emissiyalar va chiqindilar ko'payadi, yangi ekspertiza shart."
      },
      {
        "text": "Eski ZVOS bilan davom ettirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Quvvat oshganda emissiyalar va chiqindilar ko'payadi, yangi ekspertiza shart."
      }
    ]
  },
  {
    "id": 91,
    "sector": "91. Zero Waste to Landfill (Poligonga nol chiqindi) standarti",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Korxona ishlab chiqarish chiqindilarining 98% qismini qayta ishlashga topshirmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #91 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Zero Waste to Landfill (Poligonga nol chiqindi) </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Sirkulyar iqtisodiyot modelini tasdiqlab 'Zero Waste' xalqaro sertifikatiga tavsiya etish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Nol chiqindi konsepsiyasi tabiiy resurslarni asrashning eng ilg'or usulidir."
      },
      {
        "text": "Hammasini poligonga chiqarishni talab qilish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Nol chiqindi konsepsiyasi tabiiy resurslarni asrashning eng ilg'or usulidir."
      }
    ]
  },
  {
    "id": 92,
    "sector": "92. Xavfli chiqindilarni xalqaro tashishda ADR va Bazel talablari",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Zaharli kimyoviy chiqindilar oddiy bortli yuk mashinasida belgilanmasdan tashilmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #92 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Xavfli chiqindilarni xalqaro tashishda ADR va Ba</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "ADR qoidalariga muvofiq to'q sariq belgili xavfli yuk mashinasi va favqulodda karta talab qilish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! ADR qoidalari avariya paytida aholi va atrof-muhit zaharlanishining oldini oladi."
      },
      {
        "text": "Oddiy mashinada tunda tashishga ruxsat berish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! ADR qoidalari avariya paytida aholi va atrof-muhit zaharlanishining oldini oladi."
      }
    ]
  },
  {
    "id": 93,
    "sector": "93. Krematoriy va tibbiy yoqish pechlarida shlak va kul tahlili",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Kulda og'ir metallar yuqori bo'lgani sababli yerga to'kish taqiqlanadi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #93 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Krematoriy va tibbiy yoqish pechlarida shlak va </text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Kullarni germetik bochkalarda xavfli chiqindilar poligonining maxsus xandaqlariga joylash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Uchuvchi kul I-II sinf xavfli modda bo'lib, o'g'it sifatida ishlatib bo'lmaydi."
      },
      {
        "text": "Shlakni ekin maydoniga o'g'it deb sochish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Uchuvchi kul I-II sinf xavfli modda bo'lib, o'g'it sifatida ishlatib bo'lmaydi."
      }
    ]
  },
  {
    "id": 94,
    "sector": "94. Tozalash inshooti loyini quyoshda quritish va bio-gumus olish",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Faol loy hovuzlarda toshib ketmoqda, hidi atrofga tarqalmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #94 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Tozalash inshooti loyini quyoshda quritish va bi</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Quyoshli issiqxona quritgichlari va kompostlash texnologiyasini joriy etish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Quritilgan loy qishloq xo'jaligi va o'rmonchilik uchun qimmatli biooksiddir."
      },
      {
        "text": "Loyni yaqin daryo qirg'og'iga surib tashlash.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Quritilgan loy qishloq xo'jaligi va o'rmonchilik uchun qimmatli biooksiddir."
      }
    ]
  },
  {
    "id": 95,
    "sector": "95. Transformator moylarida polixlorlangan bifenillar (PXB / PCB)",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Eski transformator moyida 80 ppm zaharli PXB aniqlandi (Stokgolm konvensiyasi).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #95 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Transformator moylarida polixlorlangan bifenilla</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Moyni darhol foydalanishdan chiqarib litsenziyali plazmali yoqish stansiyasiga topshirish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! PXB o'ta turg'un zahar bo'lib, irsiy kasalliklar va saraton keltiradi."
      },
      {
        "text": "Moyni traktorlarga quyib ishlatish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! PXB o'ta turg'un zahar bo'lib, irsiy kasalliklar va saraton keltiradi."
      }
    ]
  },
  {
    "id": 96,
    "sector": "96. Yashil xaridlar (Green Procurement) va EPD ekologik deklaratsiyasi",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Zavod xomashyo sotib olishda ekologik sertifikatsiz zaharli ximikatlarni olmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #96 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Yashil xaridlar (Green Procurement) va EPD ekolo</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Barcha yetkazib beruvchilardan ISO 14001 va EPD ekologik pasportini talab qilish siyosatini joriy etish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Yashil xaridlar ishlab chiqarishning ekologik tozaligini boshlang'ich bosqichdayoq ta'minlaydi."
      },
      {
        "text": "Eng arzon iflos xomashyoni olishni davom ettirish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Yashil xaridlar ishlab chiqarishning ekologik tozaligini boshlang'ich bosqichdayoq ta'minlaydi."
      }
    ]
  },
  {
    "id": 97,
    "sector": "97. Sovutish tizimlarida ozon qatlamini yemiruvchi xlorftoruglerodlar (XFU / Freon R-12)",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Eski sovutgich agregatlarida R-12 freoni ishlatilmoqda (Monreal protokoli).",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #97 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sovutish tizimlarida ozon qatlamini yemiruvchi x</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Ozon uchun xavfsiz R-410A yoki tabiiy CO2/ammiakli sovutish gazlariga to'liq o'tish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! R-12 atmosferaning ozon qatlamini teshuvchi global xavfli gazdir."
      },
      {
        "text": "Eski freonni havoga chiqarib yuborish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! R-12 atmosferaning ozon qatlamini teshuvchi global xavfli gazdir."
      }
    ]
  },
  {
    "id": 98,
    "sector": "98. Sanoat hududida avariyaviy to'kilishlarni ushlovchi rezervuar (Avariyniy basseyn)",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Neft bazasida to'kilish bo'lsa to'g'ridan-to'g'ri daryoga oqib ketadigan ochiq novlar bor.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #98 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Sanoat hududida avariyaviy to'kilishlarni ushlov</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Avariyaviy holatda 100% hajmni ushlab qoluvchi beton qoplamali avariya rezervuari qurish.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Avariya rezervuari yirik ekologik fojialarning oldini oluvchi muhim muhandislik inshootidir."
      },
      {
        "text": "Avariya bo'lmaydi deb hisobga olmaslik.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Avariya rezervuari yirik ekologik fojialarning oldini oluvchi muhim muhandislik inshootidir."
      }
    ]
  },
  {
    "id": 99,
    "sector": "99. Atrof-muhit xavflarini oldindan tahlil qilish (HAZOP va FMEA)",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Korxona xavflarni faqat avariya sodir bo'lgandan keyin tekshirmoqda.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #99 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Atrof-muhit xavflarini oldindan tahlil qilish (H</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "Xalqaro HAZOP metodologiyasi bo'yicha profilaktik tahlil o'tkazish majburiyatini yuklash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! HAZOP tahlili falokat sodir bo'lishidan avval uning oldini olishga imkon beradi."
      },
      {
        "text": "Faqat sodir bo'lgan voqealarni yozib borish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! HAZOP tahlili falokat sodir bo'lishidan avval uning oldini olishga imkon beradi."
      }
    ]
  },
  {
    "id": 100,
    "sector": "100. Chiqindi gazlardan vodorod (H2) va metanol sintez qilish loyihasi",
    "visualTitle": "Audit Obyekti: Sirkulyar iqtisodiyot va xavfli moddalar",
    "visualInfo": "Metallurgiya zavodi koks gazidan yiliga 10,000 tonna toza yashil vodorod ajratib olmoqchi.",
    "svg": "<svg viewBox=\"0 0 500 160\" class=\"w-full h-auto rounded-lg bg-slate-950 border border-slate-800\"><rect width=\"500\" height=\"160\" fill=\"#090d16\"/><rect x=\"30\" y=\"25\" width=\"440\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"black\" fill=\"#facc15\" text-anchor=\"middle\">SANOAT AUDIT PROTOKOLI #100 • SIRKULYAR IQTISODIYOT VA XAVFLI MODDALAR</text><text x=\"250\" y=\"80\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">Chiqindi gazlardan vodorod (H2) va metanol sinte</text><text x=\"250\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\" text-anchor=\"middle\">O'zbekiston Ekologik Me'yorlari va ISO 14001</text><text x=\"250\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#ef4444\" text-anchor=\"middle\">Auditor xulosasi qat'iy asoslangan bo'lishi shart</text></svg>",
    "question": "Auditorlik tekshiruvida ushbu holat aniqlandi. Ekologik qonunchilik va texnik xavfsizlikka ko'ra qanday to'g'ri qaror qabul qilinadi?",
    "options": [
      {
        "text": "CO2 emissiyasini 40% ga qisqartiruvchi innovatsion texnologiya deb to'liq qo'llab-quvvatlash.",
        "isCorrect": true,
        "points": 50,
        "explanation": "To'g'ri auditorlik chorasi! Koks gazidan vodorod olish zamonaviy dekarbonizatsiyaning eng samarali yechimidir."
      },
      {
        "text": "Gazni havoga yoqib yuborishni talab qilish.",
        "isCorrect": false,
        "points": -25,
        "explanation": "Qoidabuzarlik! Koks gazidan vodorod olish zamonaviy dekarbonizatsiyaning eng samarali yechimidir."
      }
    ]
  }
];

// Orqaga muvofiqlik uchun
const HARD_50_AUDIT_QUESTIONS = ALL_100_AUDIT_QUESTIONS;
