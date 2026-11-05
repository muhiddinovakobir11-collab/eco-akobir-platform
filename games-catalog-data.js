// =======================================================================
// Akosh Eco / EcoAkobir — 4-13 Interaktiv O'yinlar Kengaytirilgan Bazasi
// Har bir o'yin uchun 10 tadan chuqur tafakkurli, texnik va vizual keyslar
// =======================================================================

const ALL_EXTENDED_GAMES_DATA = {
  "4": {
    "id": 4,
    "title": "4. Shahar Chiqindi Logistikasi",
    "badge": "Smart Logistika",
    "icon": "fa-truck-fast",
    "color": "emerald",
    "category": "Saralash va Qayta ishlash",
    "xp": 180,
    "desc": "Cheklangan yoqilg'i, IoT sensorlar va tirbandlikni hisobga olib eng kam CO2 emissiyali optimal chiqindi marshrutini tanlang.",
    "scenarios": [
      {
        "id": "log-1",
        "title": "Tirbandlik va Yoqilg'i Optimizatsiyasi",
        "param": "Yoqilg'i: 20L | Masofa: 18 km | Chiqindi: 4.5t",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 50 65 L 180 30 L 320 30 L 450 65\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"4\" stroke-dasharray=\"6,4\"/><path d=\"M 50 65 L 250 100 L 450 65\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\"/><circle cx=\"50\" cy=\"65\" r=\"14\" fill=\"#059669\"/><text x=\"50\" y=\"70\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Baza</text><circle cx=\"180\" cy=\"30\" r=\"12\" fill=\"#10b981\"/><text x=\"180\" y=\"34\" fill=\"#022c22\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"bold\">Q1</text><circle cx=\"320\" cy=\"30\" r=\"12\" fill=\"#10b981\"/><text x=\"320\" y=\"34\" fill=\"#022c22\" font-size=\"9\" text-anchor=\"middle\" font-weight=\"bold\">Q2</text><circle cx=\"450\" cy=\"65\" r=\"14\" fill=\"#3b82f6\"/><text x=\"450\" y=\"70\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Poligon</text><text x=\"250\" y=\"20\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">A-Smart: Aylanma halqa (12 km, 10L yoqilgi, 18 kg CO2)</text><text x=\"250\" y=\"118\" fill=\"#f87171\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">B-Tirband: Markaziy svetoforlar (18 km, 22L yoqilgi - Yetmaydi!)</text></svg>",
        "question": "Ertalabki soat 08:30 da markaziy ko'chalarda tirbandlik. Bakda 20L dizel bor. Eng kam CO2 va xavfsiz marshrut qaysi?",
        "options": [
          "Aylanma halqa yo'l (Smart): 12 km, barqaror tezlik, 10L yoqilg'i, 18 kg CO2 sarfi",
          "To'g'ridan-to'g'ri markaziy ko'cha: 18 km, 1.5 soat tirbandlikda dvigatelni o't oldirib turish (22L yoqilg'i)",
          "Chiqindilarni tashishni bekor qilib kechki 23:00 ga qoldirish"
        ],
        "correct": 0,
        "hint": "Tirbandlikda dvigatelning bo'sh ishlashi yoqilg'i sarfini va zaharli uglerod oksidini 3 barobargacha oshiradi."
      },
      {
        "id": "log-2",
        "title": "IoT Ultratovush Sensorlari Tahlili",
        "param": "Sensorlar: A (95%), B (30%), C (100%), D (40%) to'lgan",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"40\" y=\"30\" width=\"70\" height=\"70\" rx=\"8\" fill=\"#0f172a\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"75\" y=\"65\" fill=\"#f87171\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">95%</text><text x=\"75\" y=\"85\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">A-Quti</text><rect x=\"160\" y=\"30\" width=\"70\" height=\"70\" rx=\"8\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"195\" y=\"65\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">30%</text><text x=\"195\" y=\"85\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">B-Quti</text><rect x=\"280\" y=\"30\" width=\"70\" height=\"70\" rx=\"8\" fill=\"#0f172a\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"315\" y=\"65\" fill=\"#f87171\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">100%</text><text x=\"315\" y=\"85\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">C-Quti</text><rect x=\"400\" y=\"30\" width=\"70\" height=\"70\" rx=\"8\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"435\" y=\"65\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">40%</text><text x=\"435\" y=\"85\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">D-Quti</text></svg>",
        "question": "Sensorlar ko'rsatkichi bo'yicha mashina faqat kritik to'lgan nuqtalarga borishi kerak. Qaysi harakat eng to'g'ri?",
        "options": [
          "Faqat 95% va 100% to'lgan A va C nuqtalarga borish, chala to'lgan B va D ni keyingi smenaga qoldirish",
          "To'lishidan qat'i nazar barcha 4 ta nuqtaga ketma-ket kirib chiqish",
          "Faqat 30% to'lgan B konteynerga borib, qolganlarini kutish"
        ],
        "correct": 0,
        "hint": "Dinamik marshrutlash faqat 80% dan yuqori to'lgan qutilarni tanlash orqali logistika xarajatini 40% tejaydi."
      },
      {
        "id": "log-3",
        "title": "Chiqindini Qayta Yuklash Stansiyasi (Peregruzka)",
        "param": "Poligongacha: 45 km | Qayta yuklash stansiyasigacha: 7 km",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"60\" cy=\"65\" r=\"25\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"60\" y=\"70\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Kichik Mashina</text><line x1=\"90\" y1=\"65\" x2=\"220\" y2=\"65\" stroke=\"#10b981\" stroke-width=\"3\"/><rect x=\"220\" y=\"35\" width=\"90\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"265\" y=\"62\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Peregruzka</text><text x=\"265\" y=\"78\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">K=1:6 Siqish</text><line x1=\"315\" y1=\"65\" x2=\"420\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"4\"/><circle cx=\"445\" cy=\"65\" r=\"25\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"445\" y=\"70\" fill=\"#f59e0b\" font-size=\"10\" text-anchor=\"middle\">Katta Fura (40t)</text></svg>",
        "question": "Kichik 5 tonnalik mashinalar har safar 45 km uzoqdagi poligonga qatnashi texnikani toliqtirmoqda. Qaysi yechim optimal?",
        "options": [
          "Shaharda 7 km masofada oraliq stansiya qurib, chiqindini 1:6 siqib 40 tonnalik yirik tirkamalarda tashish",
          "Kichik mashinalarga qo'shimcha bak o'rnatib 45 km masofaga kuniga 8 martadan qatnash",
          "Chiqindilarni tunda shahar chetiga vaqtincha to'kib qo'yish"
        ],
        "correct": 0,
        "hint": "Oraliq qayta yuklash stansiyalari shahar ichidagi kichik texnikalar yurish masofasini 70% ga qisqartiradi."
      },
      {
        "id": "log-4",
        "title": "Elektr Maxsus Texnika (EV Truck) Quvvati",
        "param": "Batareya: 280 kVt*soat | Qolgan zaryad: 22% (60 kVt*soat)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"45\" width=\"300\" height=\"40\" rx=\"10\" fill=\"#020617\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"65\" y=\"50\" width=\"60\" height=\"30\" rx=\"6\" fill=\"#f59e0b\"/><text x=\"210\" y=\"70\" fill=\"white\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">22% Zaryad Qoldi</text><circle cx=\"430\" cy=\"65\" r=\"30\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"430\" y=\"62\" fill=\"#10b981\" font-size=\"18\" text-anchor=\"middle\">⚡</text><text x=\"430\" y=\"78\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Tezkor Quvvat</text></svg>",
        "question": "Gidravlik press har bir qutini ko'tarishda 3.5 kVt*soat sarflaydi. Mashinada 60 kVt*soat quvvat qoldi. To'g'ri qaror:",
        "options": [
          "Keyingi 4 ta nuqtani yig'ib, 5 km masofadagi 150 kVt tezkor zaryadlash stansiyasiga yo'l olish",
          "Zaryad nolga tushguncha qolgan barcha 18 ta qutini majburiy yig'ish",
          "Gidravlik pressni o'chirib, chiqindilarni qo'lda qutiga bosish"
        ],
        "correct": 0,
        "hint": "Gidravlik presslash jarayoni elektr transport batareyasini harakatlanishdan 2 barobar tezroq sarflaydi."
      },
      {
        "id": "log-5",
        "title": "Ikki Seksiyali Chiqindi Mashinasi Balansi",
        "param": "Seksiya A: Ho'l organik (4t) | Seksiya B: Quruq saralangan (2t)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"35\" width=\"160\" height=\"60\" rx=\"6\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"160\" y=\"70\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Ho'l Organik (4t)</text><rect x=\"250\" y=\"35\" width=\"160\" height=\"60\" rx=\"6\" fill=\"#1e3a8a\" stroke=\"#3b82f6\" stroke-width=\"2\"/><text x=\"330\" y=\"70\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Quruq Qog'oz/Plastik (2t)</text></svg>",
        "question": "Aholi saralagan chiqindilarni bitta mashinada aralashtirmasdan olib ketish uchun qanday logistika texnologiyasi qo'llaniladi?",
        "options": [
          "Ichki germetik to'siqli ikki kamerali (Dual-compartment) alohida gidravlik pressli mashina",
          "Ikkala turdagi chiqindini bitta umumiy bunkerga tashlab, poligon ustida saralash",
          "Avval qog'ozni yig'ib, keyin yana shu ko'chaga ikkinchi marta organikaga qaytib kelish"
        ],
        "correct": 0,
        "hint": "Ikki kamerali maxsus avtomobillar alohida yig'ish sifatini saqlagan holda logistika reyslarini 50% ga qisqartiradi."
      },
      {
        "id": "log-6",
        "title": "Tibbiyot Chiqindilari Logistikasi (ADR Xavfsizligi)",
        "param": "Kategoriya: B va V sinf (Biologik xavfli buyumlar)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"70\" y=\"35\" width=\"90\" height=\"60\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"115\" y=\"65\" fill=\"#fca5a5\" font-size=\"20\" text-anchor=\"middle\">☣️</text><text x=\"115\" y=\"82\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">B Sinf</text><line x1=\"170\" y1=\"65\" x2=\"310\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><rect x=\"320\" y=\"30\" width=\"120\" height=\"70\" rx=\"10\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"380\" y=\"65\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Avtoklav / Insinerator</text><text x=\"380\" y=\"82\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Termik Utilizatsiya</text></svg>",
        "question": "Shifoxonalardan chiqqan patogen tibbiy chiqindilarni maishiy chiqindi poligoniga tashish mumkinmi?",
        "options": [
          "Mutlaqo yo'q! Faqat maxsus sovutgichli, dezinfeksiyali furgonda insinerator yoki avtoklav zavodiga tashiladi",
          "Ha, agar qalin qora paketlarga yaxshilab o'ralgan bo'lsa umumiy poligon chetiga ko'mish mumkin",
          "Faqat tunda boshqa chiqindilarga aralashtirib olib ketishga ruxsat beriladi"
        ],
        "correct": 0,
        "hint": "SanQvaM 0317-15 bo'yicha tibbiy xavfli chiqindilar qat'iy ravishda termik zararsizlantirishga yo'naltirilishi shart."
      },
      {
        "id": "log-7",
        "title": "Shovqin Darajasi va Tungi Logistika",
        "param": "SanQvaM me'yori: Tunda 40 dBA | Mashina shovqini: 78 dBA",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 50 80 Q 150 20 250 80 T 450 80\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\"/><circle cx=\"120\" cy=\"55\" r=\"16\" fill=\"#ef4444\"/><text x=\"120\" y=\"60\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">78 dB</text><rect x=\"220\" y=\"40\" width=\"100\" height=\"50\" rx=\"8\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"270\" y=\"65\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Plastik Quti</text><text x=\"270\" y=\"80\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">&lt;45 dB Akustik</text></svg>",
        "question": "Aholi turar-joy massivlarida soat 23:00 dan keyin metall qutilarni shovqin bilan tushirish taqiqlangan. Tungi reysni qanday tashkil etish kerak?",
        "options": [
          "G'ildirakli plastik yevro-konteynerlar va shovqinsiz elektr ko'targichli mashinalardan foydalanish",
          "Shovqinni kamaytirish uchun chiqindilarni mashinaga balanddan uloqtirib bosish",
          "Tungi yig'uvchilar signal chalg'ituvchi sirena bilan aholini ogohlantirishi lozim"
        ],
        "correct": 0,
        "hint": "Tungi shovqin me'yori oshishi fuqarolar salomatligi va sanitariya qoidalarining jiddiy buzilishi hisoblanadi."
      },
      {
        "id": "log-8",
        "title": "Chiqindini Siqish Koeffitsiyenti (Compaction)",
        "param": "Boshlang'ich: 180 kg/m3 | Siqilgandan keyin: 720 kg/m3",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"35\" width=\"140\" height=\"60\" rx=\"6\" fill=\"#334155\"/><text x=\"130\" y=\"65\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">Siqilmagan (1:1)</text><text x=\"130\" y=\"82\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">180 kg/m³</text><text x=\"250\" y=\"70\" fill=\"#10b981\" font-size=\"24\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"300\" y=\"35\" width=\"140\" height=\"60\" rx=\"6\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"370\" y=\"65\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Siqilgan (1:4)</text><text x=\"370\" y=\"82\" fill=\"#a7f3d0\" font-size=\"10\" text-anchor=\"middle\">720 kg/m³</text></svg>",
        "question": "Chiqindi tashuvchi avtomobilning gidravlik plitasi chiqindini 1:4 nisbatda siqadi. Bu logistikaga qanday ta'sir ko'rsatadi?",
        "options": [
          "Mashina sig'imi 4 barobar oshadi va reyslar soni hamda yoqilg'i xarajati keskin kamayadi",
          "Chiqindi siqilsa og'irligi 4 barobarga ko'payib ketadi va yo'l buziladi",
          "Chiqindini siqish uning qayta ishlanishini butunlay imkonsiz qiladi"
        ],
        "correct": 0,
        "hint": "Yuqori siqish koeffitsiyenti avtopark amortizatsiyasi va transport tannarxini tejaydi."
      },
      {
        "id": "log-9",
        "title": "RFID Belgilash va Avtomatlashgan Tarozilar",
        "param": "Konteyner: RFID Chip #8841 | Tarozilar: Avtomatik brutto/tara",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"80\" cy=\"65\" r=\"25\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"80\" y=\"65\" fill=\"#38bdf8\" font-size=\"18\" text-anchor=\"middle\">📡</text><text x=\"80\" y=\"80\" fill=\"#94a3b8\" font-size=\"8\" text-anchor=\"middle\">RFID</text><line x1=\"110\" y1=\"65\" x2=\"220\" y2=\"65\" stroke=\"#38bdf8\" stroke-width=\"2\"/><rect x=\"220\" y=\"40\" width=\"160\" height=\"50\" rx=\"8\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"300\" y=\"65\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">GPS & Vzveshivaniye</text><text x=\"300\" y=\"80\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">Haqiqiy vazn: 342 kg</text></svg>",
        "question": "Chiqindi yig'ishda soxta hisobotlar (pripiska) va o'g'irliklarni yo'qotish uchun qanday texnologiya eng samarali?",
        "options": [
          "Har bir konteynerga RFID chip va mashinaning ko'tarish manipulyatoriga avtomatik tarozi o'rnatish",
          "Haydovchiga har bir qutini ko'z bilan chamalab daftarga yozib borishni buyurish",
          "Faqat poligon darvozasidagi qo'lda yoziladigan qog'oz jurnalga tayanish"
        ],
        "correct": 0,
        "hint": "RFID va telematika tizimi qaysi mahalladan qancha chiqindi olinganini millisekundlarda markaziy serverga jo'natadi."
      },
      {
        "id": "log-10",
        "title": "Tog'li Hududlarda Qishki Ekologik Logistika",
        "param": "Nishablik: 14% | Muzlama | Yozgi shinalar taqiqlangan",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 50 100 L 250 40 L 450 100\" fill=\"none\" stroke=\"#60a5fa\" stroke-width=\"3\"/><circle cx=\"250\" cy=\"40\" r=\"14\" fill=\"#1e3a8a\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"250\" y=\"44\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">Tog' Qishlog'i</text><rect x=\"180\" y=\"80\" width=\"140\" height=\"35\" rx=\"6\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"250\" y=\"102\" fill=\"#fcd34d\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">4x4 To'liq Privod + Zanjir</text></svg>",
        "question": "Chorvoq yoki Bo'stonliq tog'li hududlarida qishda yo'llar muzlaganda chiqindi tashish qanday tashkil etiladi?",
        "options": [
          "Kichik 4x4 to'liq yetakchi zanjirli mashinalar bilan oraliq xabga tushirilib, keyin yirik texnikaga yuklanadi",
          "Qish tugaguncha tog' qishloqlariga chiqindi mashinasi yuborishni butunlay to'xtatish",
          "20 tonnalik og'ir tirkamalarni muzlagan tog' dovoniga zanjirsiz haydash"
        ],
        "correct": 0,
        "hint": "Tog'li hududlarda xavfsizlik va barqaror sanitar tozalik uchun maxsus kichik gabaritli 4x4 texnikalar qo'llaniladi."
      }
    ]
  },
  "5": {
    "id": 5,
    "title": "5. Daryo Tozalash & Neft To'kilishi",
    "badge": "Favqulodda Vaziyat",
    "icon": "fa-water",
    "color": "cyan",
    "category": "Favqulodda vaziyatlar",
    "xp": 240,
    "desc": "Daryoga to'kilgan neft dog'ini bon to'siqlar, gidravlik skimmerlar va biologik sorbentlar bilan tezkor lokallashtiring.",
    "scenarios": [
      {
        "id": "oil-1",
        "title": "Daryo Oqimi va Bon To'siqlari Burchagi",
        "param": "Oqim tezligi: 0.9 m/s | To'kilgan neft: 12 tonna",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 0 40 Q 250 20 500 40 L 500 110 Q 250 90 0 110 Z\" fill=\"#0f172a\"/><path d=\"M 120 45 L 360 85\" stroke=\"#f59e0b\" stroke-width=\"5\" stroke-dasharray=\"10,4\"/><text x=\"240\" y=\"60\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"bold\">Bon to'sig'i (45° burchak ostida)</text><circle cx=\"200\" cy=\"50\" r=\"10\" fill=\"#ef4444\"/><text x=\"200\" y=\"54\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">Neft</text><text x=\"400\" y=\"95\" fill=\"#38bdf8\" font-size=\"10\">Skimmer tomon oqim</text></svg>",
        "question": "Oqim tezligi 0.9 m/s bo'lgan daryoda bon to'sig'i to'g'ri 90° burchakda o'rnatilsa nima yuz beradi?",
        "options": [
          "Kuchli gidrodinamik bosim tufayli neft bon tagidan o'tib ketadi (entrainment); bon 40-45° qiya o'rnatilishi shart",
          "Neft butunlay to'xtaydi va darhol suv tubiga cho'kadi",
          "Bon to'sig'i erib suvga aralashib ketadi"
        ],
        "correct": 0,
        "hint": "Tez oqimlarda bonlar 40-45° burchak ostida yo'naltiruvchi tarzda qo'yilib, neft qirg'oqdagi tinch cho'ntakka yig'iladi."
      },
      {
        "id": "oil-2",
        "title": "Gidravlik Diskli Skimmer Tanlash",
        "param": "Neft plyonkasi: 4 mm | Qovushqoqlik: O'rtacha",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"215\" cy=\"65\" r=\"20\" fill=\"#0284c7\"/><circle cx=\"285\" cy=\"65\" r=\"20\" fill=\"#0284c7\"/><text x=\"250\" y=\"45\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Oleofil Diskli Skimmer</text><text x=\"250\" y=\"90\" fill=\"#38bdf8\" font-size=\"9\" text-anchor=\"middle\">98% Toza Neft Yig'ish</text></svg>",
        "question": "Suv aralashmasisiz toza neftni so'rib olish uchun qaysi turdagi skimmer apparati tanlanadi?",
        "options": [
          "Oleofil (neftni o'ziga yopishtiruvchi, suvni itaruvchi) diskli yoki barabanli skimmer",
          "Oddiy loyqa so'ruvchi qum nasosi (drakor)",
          "Suv yuzasiga qizdirilgan havo purkagich"
        ],
        "correct": 0,
        "hint": "Oleofil polimer disklar neftni 98% toza holda yig'ib oladi va suvni qaytarib chiqaradi."
      },
      {
        "id": "oil-3",
        "title": "Biologik Torf Sorbentlari (Bio-sorb)",
        "param": "Qoldiq yupqa neft plyonkasi: 0.1 mm sheen",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><ellipse cx=\"250\" cy=\"65\" rx=\"180\" ry=\"35\" fill=\"#0c4a6e\"/><circle cx=\"210\" cy=\"65\" r=\"8\" fill=\"#10b981\"/><circle cx=\"250\" cy=\"60\" r=\"8\" fill=\"#10b981\"/><circle cx=\"290\" cy=\"70\" r=\"8\" fill=\"#10b981\"/><text x=\"250\" y=\"115\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Hidrofob Tabiiy Torf Sorbenti</text></svg>",
        "question": "Skimmer yig'a olmaydigan o'ta yupqa kamalaksimon neft plyonkasini tozalashda qaysi material qo'llaniladi?",
        "options": [
          "Suvni shimib olmaydigan, faqat neftni yutuvchi tabiiy gidrofob torf yoki yog'och tolali sorbent",
          "Qurilish sementi yoki ohak kukuni",
          "Daryoga ko'p miqdorda idish yuvish geli quyish"
        ],
        "correct": 0,
        "hint": "Gidrofob bio-sorbentlar o'z og'irligidan 8-10 barobar ko'p neftni bir necha daqiqada shimib oladi."
      },
      {
        "id": "oil-4",
        "title": "Ichimlik Suvi Vodozaborini Himoyalash",
        "param": "Vodozaborgacha masofa: 3.5 km | Oqim vaqti: 40 daqiqa",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"40\" y=\"45\" width=\"80\" height=\"40\" rx=\"6\" fill=\"#7f1d1d\"/><text x=\"80\" y=\"68\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Avariya Joyi</text><line x1=\"130\" y1=\"65\" x2=\"350\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"8,4\"/><rect x=\"360\" y=\"35\" width=\"110\" height=\"60\" rx=\"8\" fill=\"#1e3a8a\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"415\" y=\"60\" fill=\"white\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Shahar Vodozabor</text><text x=\"415\" y=\"78\" fill=\"#f87171\" font-size=\"9\" text-anchor=\"middle\">Zudlik bilan to'xtatish!</text></svg>",
        "question": "Neft dog'i shahar ichimlik suvi olish inshooti tomon harakatlanmoqda. Zudlik bilan qanday harakat qilinadi?",
        "options": [
          "Vodozabor shlyuzlarini darhol yopish, zaxira yerosti suviga o'tish va suv olish oldiga 3 qator bon o'rnatish",
          "Vodozabor nasoslarini maksimal quvvatda ishlatib neftni shahar quvurlariga tortib yuborish",
          "Neft o'tib ketishini kutib turish"
        ],
        "correct": 0,
        "hint": "Ichimlik suviga neft mahsulotlarining 0.05 mg/l dan ortiq tushishi butun shahar tarmog'ini zaharlaydi."
      },
      {
        "id": "oil-5",
        "title": "Neft Yutuvchi Bakteriyalar (Bioremediatsiya)",
        "param": "Tuproq va daryo qirg'og'i ifloslanishi: 15 g/kg neft",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"40\" width=\"120\" height=\"50\" rx=\"6\" fill=\"#1e293b\"/><text x=\"140\" y=\"65\" fill=\"#fcd34d\" font-size=\"11\" text-anchor=\"middle\">Neft Uglevodorodlari</text><text x=\"250\" y=\"70\" fill=\"#10b981\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"300\" y=\"40\" width=\"140\" height=\"50\" rx=\"6\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"370\" y=\"62\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Pseudomonas Shtammi</text><text x=\"370\" y=\"78\" fill=\"#a7f3d0\" font-size=\"9\" text-anchor=\"middle\">CO2 + H2O ga parchalash</text></svg>",
        "question": "Qirg'oq zonasidagi qoldiq neft dog'larini xavfsiz yo'qotish uchun qaysi zamonaviy biometod ishlatiladi?",
        "options": [
          "Neft uglevodorodlarini yeyuvchi tabiiy mikroorganizmlar biopreparati (Rhodococcus, Pseudomonas) va azotli oziqlantirish",
          "Qirg'oq bo'yini benzin sepib yoqib yuborish",
          "Qirg'oqni xlorli eritma bilan dezinfeksiya qilish"
        ],
        "correct": 0,
        "hint": "Bioremediatsiya bakteriyalari neftni xavfsiz suv va karbonat angidridga aylantirib, ekotizimni tiklaydi."
      },
      {
        "id": "oil-6",
        "title": "Kimyoviy Dispersantlar Xavfi",
        "param": "Daryo ekotizimi: Baliqlar uvildiriqlashi davri",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"150\" cy=\"65\" r=\"24\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"150\" y=\"62\" fill=\"white\" font-size=\"18\">⚠️</text><text x=\"150\" y=\"80\" fill=\"#fca5a5\" font-size=\"8\" text-anchor=\"middle\">Dispersant</text><text x=\"320\" y=\"65\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Chuchuk suv daryolarida dispersant taqiqlanadi!</text></svg>",
        "question": "Nima sababdan chuchuk suv daryolarida neftni maydalovchi kimyoviy dispersantlar qo'llanilishi taqiqlanadi?",
        "options": [
          "Dispersant neftni yo'qotmaydi, balki zaharli mikro-tomchilarga aylantirib suv tubidagi baliq va planktonlarni o'ldiradi",
          "Chunki dispersant suvni qattiq muzlatib qo'yadi",
          "Chunki u daryo rangini o'zgartirib yuboradi"
        ],
        "correct": 0,
        "hint": "Kimyoviy dispersantlar dengizda ishlatilishi mumkin, ammo ichimlik va baliqchilik daryolarida o'ta xavfli toksik hisoblanadi."
      },
      {
        "id": "oil-7",
        "title": "Muz Ostidagi Neft Qatlami",
        "param": "Daryo yuzi muzlagan (muz qalinligi 25 sm)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"50\" y=\"30\" width=\"400\" height=\"25\" fill=\"#93c5fd\"/><text x=\"250\" y=\"47\" fill=\"#1e3a8a\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Muz Qatlami (25 sm)</text><rect x=\"50\" y=\"55\" width=\"280\" height=\"15\" fill=\"#000000\"/><text x=\"190\" y=\"67\" fill=\"#fcd34d\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Muz ostidagi neft oqimi</text><rect x=\"360\" y=\"30\" width=\"60\" height=\"55\" fill=\"#0284c7\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"390\" y=\"65\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">O'yilgan Tirqish</text></svg>",
        "question": "Qishda muz ostida oqayotgan neftni qanday tutib qolish mumkin?",
        "options": [
          "Muzni zanjirli arra bilan o'yib tirqishlar (mayna) ochish va suv tubiga tushuvchi to'siqlar bilan neftni o'yiqqa to'plash",
          "Muz eriguncha bahorgacha hech qanday chora ko'rmaslik",
          "Daryoning butun muzini dinamit bilan portlatish"
        ],
        "correct": 0,
        "hint": "Muz osti neft oqimi muz o'yiqlarida to'planadi va vakuumli nasoslar yordamida so'rib olinadi."
      },
      {
        "id": "oil-8",
        "title": "Daryo Tubiga Cho'kkan Neft Shlami",
        "param": "Og'ir mazut suv tubiga cho'kkan (suv harorati 4°C)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 50 100 L 450 100\" stroke=\"#78350f\" stroke-width=\"8\"/><text x=\"250\" y=\"120\" fill=\"#d97706\" font-size=\"10\" text-anchor=\"middle\">Daryo tubi loyqasi va cho'kkan og'ir mazut</text><rect x=\"200\" y=\"45\" width=\"100\" height=\"45\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"250\" y=\"70\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Gidravlik Ejektor</text></svg>",
        "question": "Daryo tubiga o'tirib qolgan og'ir uglevodorodlarni loyqa ko'tarmasdan qanday yig'ish kerak?",
        "options": [
          "Past turbulentlikka ega g'avvos boshqaruvidagi vakuumli ejektor apparati bilan so'rib olish",
          "Ekskavator cho'michi bilan daryo tubini qazib loyqani suvga yoyish",
          "Daryo tubiga qum to'kib neftni ustidan bostirib qo'yish"
        ],
        "correct": 0,
        "hint": "Noto'g'ri qazish neftni daryo bo'ylab oqizib, o'nlab kilometr pastdagi faunani zaharlaydi."
      },
      {
        "id": "oil-9",
        "title": "Uchuvchan Uglevodorodlar (BTEX) Bug'lanishi",
        "param": "Benzol, toluol va ksilol havoga bug'lanmoqda",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 150 70 Q 180 30 210 70 T 270 70 T 330 70\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><text x=\"250\" y=\"30\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Toksik Uchuvchan Bug'lar (Portlash xavfi!)</text><circle cx=\"250\" cy=\"85\" r=\"25\" fill=\"#7f1d1d\"/><text x=\"250\" y=\"90\" fill=\"white\" font-size=\"16\" text-anchor=\"middle\">🔥</text></svg>",
        "question": "Yengil neft to'kilganda daryo yuzasida kuchli zaharli bug' va portlash xavfi bor. Qutqaruvchilar nima qilishi kerak?",
        "options": [
          "Suv yuzasiga bug'lanishni to'suvchi ko'pik (AFFF) sepish va barcha ochiq olov manbalarini o'chirish",
          "Daryo qirg'og'ida olov yoqib bug'larni tekshirish",
          "Ventilyatorlar bilan bug'ni yaqin qishloq tomonga haydash"
        ],
        "correct": 0,
        "hint": "Ko'pikli qatlam uchuvchan zaharli gazlarning havoga ko'tarilishini to'xtatib, yong'in xavfini bartaraf etadi."
      },
      {
        "id": "oil-10",
        "title": "Baliqchilik Xo'jaligini Muhofaza Qilish",
        "param": "To'kilgan joydan 1.2 km quyida sun'iy baliq hovuzlari",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"340\" y=\"30\" width=\"120\" height=\"70\" rx=\"8\" fill=\"#047857\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"400\" y=\"60\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Baliq Zavodi</text><text x=\"400\" y=\"78\" fill=\"#a7f3d0\" font-size=\"9\" text-anchor=\"middle\">Suv Kirish Shlyuzi</text><line x1=\"280\" y1=\"20\" x2=\"300\" y2=\"110\" stroke=\"#f59e0b\" stroke-width=\"4\"/><text x=\"250\" y=\"65\" fill=\"#fcd34d\" font-size=\"10\" font-weight=\"bold\">Himoya To'sig'i</text></svg>",
        "question": "Baliq chavoqlari yetishtiriladigan havzalarga neftli suv kirmasligi uchun:",
        "options": [
          "Kanal kirish shlyuzini to'liq berkitib, daryo bo'ylab qo'shimcha pnevmatik havo pardasi (Bubble curtain) qo'yish",
          "Baliqlarga ko'proq ozuqa berib neftdan himoya qilish",
          "Hovuzga xlor sepib neftni zararsizlantirish"
        ],
        "correct": 0,
        "hint": "Pnevmatik havo pardalari (Bubble curtain) kemalar qatnoviga xalaqit bermasdan neft plyonkasini to'liq qaytaradi."
      }
    ]
  },
  "6": {
    "id": 6,
    "title": "6. Biogaz Reaktorini Sozlash",
    "badge": "Biotexnologiya",
    "icon": "fa-droplet",
    "color": "emerald",
    "category": "Saralash va Qayta ishlash",
    "xp": 210,
    "desc": "Reaktordagi harorat (37°C), pH (7.2) va organikani rostlab, elektr energiyasi hosil qiling.",
    "scenarios": [
      {
        "id": "bio-1",
        "title": "Mezofil Rejim Haroratini Barqarorlashtirish",
        "param": "Joriy harorat: 31°C (Kritik tushish) | Maqsad: 37°C ± 1°C",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"10\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#f87171\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">31°C</text><text x=\"250\" y=\"75\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Metanogenez susaygan</text><path d=\"M 80 65 L 170 65\" stroke=\"#f59e0b\" stroke-width=\"3\"/><text x=\"125\" y=\"55\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">Issiq Suv Ko'ylagi</text></svg>",
        "question": "Qishda bioreaktorda harorat 31°C ga tushib ketdi. Metan hosil bo'lishi 70% ga pasaydi. Operator qanday chora ko'radi?",
        "options": [
          "Reaktor tashqi isitish ko'ylagiga (rubashka) issiq suv aylanmasini oshirib, haroratni silliq 37°C ga ko'tarish",
          "Reaktor ichiga to'g'ridan-to'g'ri qaynoq suv quyib zudlik bilan 60°C ga chiqarish",
          "Isitishni o'chirib, bakteriyalar sovuqqa moslashishini kutish"
        ],
        "correct": 0,
        "hint": "Mezofil metanogen bakteriyalar haroratning 1-2°C dan keskin sakrashiga o'ta sezgir, asta-sekin isitish zarur."
      },
      {
        "id": "bio-2",
        "title": "Reaktor Kislotaliligi (pH Balansi va Zakisleniye)",
        "param": "Joriy pH: 6.1 (Kislotali xavf) | Norma: 6.8 - 7.4",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"45\" width=\"380\" height=\"35\" rx=\"6\" fill=\"#1e293b\"/><rect x=\"60\" y=\"45\" width=\"120\" height=\"35\" rx=\"6\" fill=\"#ef4444\"/><text x=\"120\" y=\"68\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">pH 6.1 Kislotali</text><rect x=\"230\" y=\"45\" width=\"120\" height=\"35\" rx=\"6\" fill=\"#10b981\"/><text x=\"290\" y=\"68\" fill=\"#022c22\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">pH 7.2 Optimal</text></svg>",
        "question": "Ortiqcha shakar va xamir qoldiqlari solinishi natijasida pH 6.1 ga tushib, 'achish' (zakisleniye) boshlandi. Qanday qutqariladi?",
        "options": [
          "Yangi organik xomashyo yuklashni to'xtatish va bufer sifatida so'ndirilgan ohak yoki soda eritmasi qo'shish",
          "Reaktorga ko'proq nordon sut va sirka quyish",
          "Reaktor qopqog'ini ochib havo kiritish"
        ],
        "correct": 0,
        "hint": "pH 6.5 dan tushganda metanogen bakteriyalar nobud bo'ladi, zudlik bilan ishqoriy bufer (Ca(OH)2) kiritish lozim."
      },
      {
        "id": "bio-3",
        "title": "Biogaz Tarkibidagi Metan (CH4) Foizi",
        "param": "Metan: 65% | Karbonat angidrid: 33% | H2S: 2%",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"150\" cy=\"65\" r=\"40\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"150\" y=\"60\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">65% CH4</text><text x=\"150\" y=\"80\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Yuqori Kaloriya</text><circle cx=\"320\" cy=\"65\" r=\"30\" fill=\"#1e293b\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"320\" y=\"68\" fill=\"#94a3b8\" font-size=\"12\" text-anchor=\"middle\">33% CO2</text></svg>",
        "question": "Biogaz kogeneratsiya generatorida yonishi uchun uning tarkibidagi metan (CH4) miqdori kamida qancha bo'lishi kerak?",
        "options": [
          "Kamida 50-55% metan (optimal 60-65%), aks holda gaz dvigatelida yonish sodir bo'lmaydi",
          "10% metan bo'lsa ham dvigatel to'liq quvvatda ishlayveradi",
          "Biogazda metan bo'lishi shart emas, faqat CO2 yonsa kifoya"
        ],
        "correct": 0,
        "hint": "Metan miqdori 50% dan past bo'lsa, gaz alangalanmaydi va generator avariya holatida o'chadi."
      },
      {
        "id": "bio-4",
        "title": "Vodorod Sulfid (H2S) Gazini Tozalash",
        "param": "H2S darajasi: 2400 ppm (dvigatelni zanglatadi)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Desulfurizatsiya Kolonnasi</text><text x=\"250\" y=\"75\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Fe2O3 Granulalari (&lt;50 ppm)</text></svg>",
        "question": "Biogazdagi oltingugurt (H2S) dvigatel silindrlarini zanglatib ishdan chiqaradi. Uni qanday tozalash kerak?",
        "options": [
          "Biogazni temir oksidi (Fe2O3) granulali filtri yoki biologik skrubber orqali o'tkazib H2S ni 50 ppm dan pastga tushirish",
          "Biogazga xom suv purkash",
          "Gazni tozalash shart emas, to'g'ridan-to'g'ri generatorga berish"
        ],
        "correct": 0,
        "hint": "H2S yonish kamerasida suv bug'i bilan birikib oltingugurt kislotasiga aylanadi va metallni yemirib yuboradi."
      },
      {
        "id": "bio-5",
        "title": "Ko-substrat: Qoramol Go'ngi va Oziq-ovqat",
        "param": "Nisbat: 70% go'ng (bufer) + 30% oshxona organikasi (energiya)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"70\" y=\"40\" width=\"140\" height=\"50\" rx=\"6\" fill=\"#78350f\"/><text x=\"140\" y=\"68\" fill=\"#fcd34d\" font-size=\"11\" text-anchor=\"middle\">Go'ng (Barqaror Mikroflora)</text><text x=\"240\" y=\"70\" fill=\"#10b981\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">+</text><rect x=\"270\" y=\"40\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#047857\"/><text x=\"350\" y=\"68\" fill=\"#a7f3d0\" font-size=\"11\" text-anchor=\"middle\">Oshxona Chiqindisi (Yuqori Gaz)</text></svg>",
        "question": "Nega sof oshxona chiqindisiga nisbatan unga go'ng qo'shib achitish (ko-fermentatsiya) ancha barqaror?",
        "options": [
          "Go'ng reaktorga zarur metanogen bakteriyalar va ammoniy buferini beradi, kislotalilik buzilishini oldini oladi",
          "Chunki go'ng gaz hosil bo'lishini to'xtatadi",
          "Chunki go'ng hidni yo'qotadi"
        ],
        "correct": 0,
        "hint": "Ko-fermentatsiya (Co-digestion) jarayoni biogaz unumdorligini sof substratga nisbatan 2.5 barobar oshiradi."
      },
      {
        "id": "bio-6",
        "title": "Reaktor Aralashtirgichi (Mixer) Rejimi",
        "param": "Qatlamlanish: Ustki qattiq qobiq (korka) va cho'kindi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"250\" cy=\"65\" r=\"40\" fill=\"#0f172a\" stroke=\"#38bdf8\" stroke-width=\"2\"/><path d=\"M 230 65 L 270 65 M 250 45 L 250 85\" stroke=\"#38bdf8\" stroke-width=\"3\"/><text x=\"250\" y=\"120\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Daqiqasiga 15 daqiqa sekin aylantirish</text></svg>",
        "question": "Bioreaktor ichidagi mexanik aralashtirgich uzluksiz 24 soat maksimal tezlikda aylanishi kerakmi?",
        "options": [
          "Yo'q! Uzluksiz tez aylanish bakteriyalar koloniyalarini uzib yuboradi; har soatda 10-15 daqiqa sekin aylantirish kifoya",
          "Ha, aralashtirgich motorini hech qachon to'xtatmaslik kerak",
          "Aralashtirgichni umuman ishlatmaslik kerak"
        ],
        "correct": 0,
        "hint": "Davriy sekin aralashtirish qobiq hosil bo'lishini to'xtatadi va mikroorganizmlar uchun tinch muhit beradi."
      },
      {
        "id": "bio-7",
        "title": "Organik Quruq Modda (ODM) Suyultirish",
        "param": "Quruq modda: 22% (Juda quyuq) | Maqsad: 9-11% ODM",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"100\" y=\"40\" width=\"120\" height=\"50\" rx=\"6\" fill=\"#334155\"/><text x=\"160\" y=\"70\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">22% ODM (Quyuq loy)</text><text x=\"250\" y=\"70\" fill=\"#38bdf8\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">+ H2O</text><rect x=\"290\" y=\"40\" width=\"130\" height=\"50\" rx=\"6\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"355\" y=\"70\" fill=\"#34d399\" font-size=\"11\" text-anchor=\"middle\">10% ODM (Suyuq oquvchan)</text></svg>",
        "question": "Qoramol go'ngi juda quruq bo'lsa, nasoslar tiqilib qoladi. Qanday suyultiriladi?",
        "options": [
          "Reaktordan chiqqan suyuq fraksiya (fugat) yoki texnik suv bilan 1:1 aralashtirib 10% gacha suyultirish",
          "Sho'r dengiz suvi quyish",
          "Hech narsa qo'shmasdan nasosni zo'riqtirib haydash"
        ],
        "correct": 0,
        "hint": "10% quruq modda gidravlik aylanish va bakteriyalarning substrat bilan aloqasi uchun ideal konsistensiya hisoblanadi."
      },
      {
        "id": "bio-8",
        "title": "VFA/TIC Indeksi Tahlili",
        "param": "VFA/TIC nisbati: 0.28 (Barqaror zona)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"120\" y=\"35\" width=\"260\" height=\"60\" rx=\"8\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"60\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">VFA/TIC = 0.28</text><text x=\"250\" y=\"80\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Kislotalar va Buferning Zo'r Balansi</text></svg>",
        "question": "Laboratoriya tahlilida VFA/TIC koeffitsiyenti 0.45 dan oshib ketdi. Bu nimani anglatadi?",
        "options": [
          "Reaktorga me'yordan ortiq oziqa yuklangan va kislotali buzilish xavfi bor; yuklashni zudlik bilan kamaytirish kerak",
          "Reaktorda metan hosil bo'lishi 100% ga yetganini anglatadi",
          "Bakteriyalar och qolganini va zudlik bilan 10 barobar ko'p oziqa solish kerakligini bildiradi"
        ],
        "correct": 0,
        "hint": "VFA/TIC > 0.4 bo'lishi reaktorning 'qorin to'yishi' (overload) va kislotali krizis arafasida ekanligini ko'rsatadi."
      },
      {
        "id": "bio-9",
        "title": "Bio-o'g'it (Digestate) Separatsiyasi",
        "param": "Chiqayotgan massa: Suyuq va qattiq fraksiya",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Shnekli Separator</text><text x=\"250\" y=\"75\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Qattiq (gumus) + Suyuq (N-P-K)</text></svg>",
        "question": "Biogaz chiqqandan keyin qolgan qoldiq (efflyuent) qanday qimmatbaho mahsulotga aylanadi?",
        "options": [
          "Shnekli separator orqali qattiq bio-gumus (organik o'g'it) va suyuq azotli bio-o'g'itga ajratiladi",
          "Zaharli chiqindi sifatida poligon chuquriga ko'miladi",
          "Kanalizatsiyaga to'g'ridan-to'g'ri oqizib yuboriladi"
        ],
        "correct": 0,
        "hint": "Fermentatsiyalangan bio-o'g'it tarkibida begona o't urug'lari va gelmint tuxumlari bo'lmaydi, eng toza organik o'g'itdir."
      },
      {
        "id": "bio-10",
        "title": "Avariya Mash'alasi (Gas Flare) va Bosim",
        "param": "Gazgolder bosimi: 45 mbar (Maksimal ruxsat: 50 mbar)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"120\" y=\"45\" width=\"160\" height=\"40\" rx=\"6\" fill=\"#1e293b\"/><text x=\"200\" y=\"70\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Bosim: 45 mbar ⚠️</text><circle cx=\"380\" cy=\"65\" r=\"25\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"380\" y=\"70\" fill=\"white\" font-size=\"14\" text-anchor=\"middle\">🔥 Flare</text></svg>",
        "question": "Kogenerator to'xtab qolganda gazgolderda metan bosimi kritik darajaga yetdi. Avtomatik tizim nima qiladi?",
        "options": [
          "Gidrozatvor klapanini ochib, ortiqcha biogazni xavfsiz avariya mash'alasi (flare)da yoqib yuboradi",
          "Biogazni to'g'ridan-to'g'ri atmosferaga purkab yuboradi",
          "Reaktor qopqog'ini portlatadi"
        ],
        "correct": 0,
        "hint": "Metanni atmosferaga to'g'ridan-to'g'ri chiqarish CO2 dan 28 barobar kuchli issiqxona effekti beradi, shuning uchun mash'alada yoqiladi."
      }
    ]
  },
  "7": {
    "id": 7,
    "title": "7. E-Waste Demontaj & Qimmatbaho Metallar",
    "badge": "Laboratoriya",
    "icon": "fa-microchip",
    "color": "amber",
    "category": "Saralash va Qayta ishlash",
    "xp": 230,
    "desc": "Plata, batareya va chiplardan oltin, mis va litiyni xavfsiz ajratib, zaharli moddalarni zararsizlantiring.",
    "scenarios": [
      {
        "id": "ew-1",
        "title": "Ona Platalardagi Oltin (Au) Kontaktlarini Ajratish",
        "param": "1 tonna kompyuter platasi tarkibida 200-250 gramm sof oltin bor",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"30\" width=\"160\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"140\" y=\"55\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">PCB Platalar (Au)</text><text x=\"140\" y=\"75\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">250g Au / tonna</text><line x1=\"225\" y1=\"65\" x2=\"310\" y2=\"65\" stroke=\"#f59e0b\" stroke-width=\"3\"/><rect x=\"315\" y=\"30\" width=\"135\" height=\"70\" rx=\"8\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"382\" y=\"55\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Tiomochevina (Ekotoza)</text><text x=\"382\" y=\"75\" fill=\"#a7f3d0\" font-size=\"9\" text-anchor=\"middle\">Tsianidsiz eritmada ajratish</text></svg>",
        "question": "Eski platalardan oltinni ajratishda qaysi zamonaviy ekologik usul zaharli tsianid kislotasi o'rnini bosadi?",
        "options": [
          "Ekologik xavfsiz tiomochevina yoki tiosulfatli gidrometallurgik eritma bilan tanlab eritish",
          "Platalarni ochiq olovda yoqib, kulini daryo suvida yuvish",
          "Kuchli konsentrlangan tsianid kislotasini ochiq idishda qaynatish"
        ],
        "correct": 0,
        "hint": "Tsianidsiz tiomochevina eritmasi zaharli bug'lar hosil qilmaydi va 95% sof oltin ajratib beradi."
      },
      {
        "id": "ew-2",
        "title": "Litiy-ion Batareyalarni Maydalash va Black Mass",
        "param": "NMC batareyalar: Litiy, Nikel, Kobalt, Marganets",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"35\" width=\"120\" height=\"60\" rx=\"8\" fill=\"#1e3a8a\" stroke=\"#3b82f6\" stroke-width=\"2\"/><text x=\"140\" y=\"60\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Li-ion Batareya</text><text x=\"140\" y=\"78\" fill=\"#93c5fd\" font-size=\"9\" text-anchor=\"middle\">Yong'in xavfi!</text><text x=\"240\" y=\"70\" fill=\"#10b981\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"270\" y=\"35\" width=\"150\" height=\"60\" rx=\"8\" fill=\"#020617\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"345\" y=\"60\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Black Mass (Qora kukun)</text><text x=\"345\" y=\"78\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">Inert Azot (N2) Gazida</text></svg>",
        "question": "Telefon va noutbuk batareyalarini oddiy shrederda havoda maydalab bo'lmaydi (portlaydi). Nima qilish kerak?",
        "options": [
          "Inert gaz (Azot N2 yoki Argon) muhitida yoki vakuum ostida maydalab, xavfsiz 'Black Mass' kukunini olish",
          "Batareyalarni suv to'la chelakka tashlab, bolg'a bilan urib sindirish",
          "Batareyalarni qizdirib zaryadini o'chirish"
        ],
        "correct": 0,
        "hint": "Litiy havodagi kislorod va namlik bilan o'z-o'zidan yonib ketadi, shuning uchun inert azot muhiti shart."
      },
      {
        "id": "ew-3",
        "title": "Qo'rg'oshinli Kavsharni (Solder) Xavfsiz Eritish",
        "param": "Kavshar qotishmasi: Qalay-Qo'rg'oshin (Sn-Pb)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Infraqizil Isitgich</text><text x=\"250\" y=\"75\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">210°C Dinamik Qizdirish</text><text x=\"250\" y=\"90\" fill=\"#10b981\" font-size=\"9\" text-anchor=\"middle\">Chiplar buzilmay ajraladi</text></svg>",
        "question": "Elektron chiplarni platadan ajratishda zaharli qo'rg'oshin bug'lari chiqmasligi uchun:",
        "options": [
          "Lokal ventilyatsiyali infraqizil (IR) dinamik qizdirgich orqali 210°C da kavsharni eritib silkitish",
          "Gaz gorelka bilan 1000°C da kuydirish",
          "Platani qo'l arrasi bilan arralash"
        ],
        "correct": 0,
        "hint": "Infraqizil kontaktsiz qizdirish komponentlarni shikastlamaydi va qo'rg'oshin bug'lanishining oldini oladi."
      },
      {
        "id": "ew-4",
        "title": "Nodir-yer Neodim Magnitlari (NdFeB)",
        "param": "Qattiq disklar (HDD) va ovoz karnaylari",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"100\" y=\"40\" width=\"120\" height=\"50\" rx=\"6\" fill=\"#1e293b\"/><text x=\"160\" y=\"68\" fill=\"#60a5fa\" font-size=\"11\" text-anchor=\"middle\">HDD Aktuator</text><text x=\"250\" y=\"70\" fill=\"#f59e0b\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"280\" y=\"40\" width=\"130\" height=\"50\" rx=\"6\" fill=\"#78350f\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"345\" y=\"62\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">NdFeB Magnit</text><text x=\"345\" y=\"78\" fill=\"#fef08a\" font-size=\"9\" text-anchor=\"middle\">Neodim + Disproziy</text></svg>",
        "question": "Eski kompyuter qattiq disklaridagi eng qimmatbaho strategik xomashyo nima?",
        "options": [
          "Magnit boshchalarni boshqaruvchi o'ta kuchli Neodim-Temir-Bor (NdFeB) nodir-yer magniti",
          "Diskning alyuminiy korpusi",
          "Diskning plastik kabeli"
        ],
        "correct": 0,
        "hint": "Neodim magnitlari shamol generatorlari va elektromobil motorlari uchun eng tanqis nodir-yer metalli hisoblanadi."
      },
      {
        "id": "ew-5",
        "title": "Transformator va Relelardan Toza Mis (Cu)",
        "param": "Chiqish: 99.9% sof elektrolitik mis simlari",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"150\" cy=\"65\" r=\"35\" fill=\"#78350f\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"150\" y=\"70\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Mis Cho'lg'ami</text><text x=\"260\" y=\"70\" fill=\"#10b981\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"300\" y=\"40\" width=\"140\" height=\"50\" rx=\"6\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"370\" y=\"68\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Mexanik Ajratgich</text></svg>",
        "question": "Transformatorlardagi mis simlar lak qatlami bilan qoplangan. Ularni qanday tozalab yaroqli qilish mumkin?",
        "options": [
          "Mexanik sim tozalash uskunasi yoki past haroratli kamerasimon pechda lakni qizdirib tushirish (olovsiz)",
          "Ochiq o'choqda rezina va simlarni birga yoqish",
          "Simlarni kislotaga tashlab butunlay eritib yuborish"
        ],
        "correct": 0,
        "hint": "Simlarni ochiq yoqishda zaharli dioksin va furanlar havoga tarqaladi, shuning uchun mexanik tozalash qo'llaniladi."
      },
      {
        "id": "ew-6",
        "title": "Bromlangan Plastiklar (BFR) Xavfi",
        "param": "Korpus plastmassasi: ABS + PBDE (yonmaydigan qo'shimchalar)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fca5a5\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">BFR Plastik ⚠️</text><text x=\"250\" y=\"75\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\">Rentgen-Flyuoressensiya</text><text x=\"250\" y=\"90\" fill=\"#fca5a5\" font-size=\"8\" text-anchor=\"middle\">Oddiy qayta ishlash taqiqlanadi</text></svg>",
        "question": "Eski monitor va televizor orqa qopqoqlaridagi olovga chidamli plastikni oddiy bolalar o'yinchog'iga aylantirish mumkinmi?",
        "options": [
          "Mutlaqo yo'q! Tarkibidagi bromlangan birikmalar (BFR) gormonal zahardir; ularni rentgen (XRF) orqali ajratib xavfsiz yo'qotiladi",
          "Ha, maydalab barcha oziq-ovqat idishlariga qo'shish mumkin",
          "Faqat eritib gul tuvaklari yasash tavsiya etiladi"
        ],
        "correct": 0,
        "hint": "BFR plastmassalari xalqaro Stokgolm konvensiyasi bilan qat'iy cheklangan xavfli chiqindi hisoblanadi."
      },
      {
        "id": "ew-7",
        "title": "Tantal (Ta) Kondensatorlarini Saralash",
        "param": "Mobil telefon platalarida sariq/qora to'rtburchak tantal chiplari",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"190\" y=\"40\" width=\"120\" height=\"50\" rx=\"6\" fill=\"#1e293b\" stroke=\"#eab308\" stroke-width=\"2\"/><text x=\"250\" y=\"62\" fill=\"#fde047\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Tantal (Ta)</text><text x=\"250\" y=\"78\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Yuqori sig'imli kondensator</text></svg>",
        "question": "Smartfon platalaridagi tantal qotishmasi nimasi bilan qadrlanadi?",
        "options": [
          "Tantal o'ta noyob va qimmat metall bo'lib, mikro-elektronikada yuqori elektr sig'imini beradi",
          "Chunki u juda tez eriydi",
          "Chunki u oddiy qumdek arzon metall"
        ],
        "correct": 0,
        "hint": "Tantal dunyo bo'yicha kam uchraydigan strategik 'konflikt metallari' ro'yxatiga kiradi."
      },
      {
        "id": "ew-8",
        "title": "Kineskop (CRT) Qo'rg'oshinli Shishasi",
        "param": "Eski televizor kineskopi konusida 1.5 - 2 kg qo'rg'oshin (Pb) bor",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 120 40 L 220 50 L 220 80 L 120 90 Z\" fill=\"#334155\"/><text x=\"170\" y=\"70\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Old Shisha</text><path d=\"M 225 50 L 360 30 L 360 100 L 225 80 Z\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"290\" y=\"70\" fill=\"#fca5a5\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Qo'rg'oshinli Konus (Pb)</text></svg>",
        "question": "Eski televizor kineskopining old yuzasi oddiy shisha, orqa konusi esa qo'rg'oshinli shishadir. Qanday qayta ishlanadi?",
        "options": [
          "Lazer yoki olmos sim bilan konus va ekran birikmasini kesib, qo'rg'oshinli qismini metallurgiya pechlariga xomashyo qilish",
          "Butun kineskopni bolg'a bilan maydalab beton qorishmasiga qo'shish",
          "Daryo qirg'og'iga tashlab yuborish"
        ],
        "correct": 0,
        "hint": "Qo'rg'oshinli shisha maydalansa yerosti suviga qo'rg'oshin ionlari o'tadi, uni faqat maxsus metallurgik qayta ishlash mumkin."
      },
      {
        "id": "ew-9",
        "title": "Sun'iy Intellektli Optik Saralash (AI Sorter)",
        "param": "Konveyer tezligi: 2.5 m/s | Pnevmatik nozzllar",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><line x1=\"60\" y1=\"80\" x2=\"440\" y2=\"80\" stroke=\"#475569\" stroke-width=\"4\"/><circle cx=\"200\" cy=\"50\" r=\"16\" fill=\"#3b82f6\"/><text x=\"200\" y=\"55\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">AI Kamera</text><path d=\"M 200 66 L 250 80\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"2,2\"/><circle cx=\"340\" cy=\"70\" r=\"8\" fill=\"#10b981\"/><text x=\"340\" y=\"105\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">Havo zarbasi</text></svg>",
        "question": "Maydalangan e-chiqindilardan mikrochiplarni millisekundlarda qanday ajratib olinadi?",
        "options": [
          "Yuqori tezlikdagi neyrotarmoq kameralari komponentni tanib, kerakli bo'lagini siqilgan havo zarbasi bilan savatga uradi",
          "Ishchilar qo'lda pinset bilan terib chiqadi",
          "Suvga oqizib toshlar bilan elanadi"
        ],
        "correct": 0,
        "hint": "Optik AI saralagichlar daqiqasiga 10 000 tagacha chip va metall bo'laklarini 99% aniqlikda saralaydi."
      },
      {
        "id": "ew-10",
        "title": "Gidrometallurgiya Qoldiqlarini Neytrallash",
        "param": "Reaksiyadan keyingi kislotali oqova: pH 1.2",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fca5a5\" font-size=\"11\" text-anchor=\"middle\">pH 1.2 Nordon Shlam</text><text x=\"250\" y=\"75\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">+ Ca(OH)2 Ohak Suti</text><text x=\"250\" y=\"90\" fill=\"#a7f3d0\" font-size=\"9\" text-anchor=\"middle\">pH 7.0 Xavfsiz Cho'kma</text></svg>",
        "question": "Metallar eritib olingach, qolgan kuchli kislotali shlam qanday zararsizlantiriladi?",
        "options": [
          "Ohak suti (kalsiy gidroksid) qo'shib neytrallash va og'ir metallarni erimaydigan gidroksid holatida cho'ktirib press-filtrdan o'tkazish",
          "To'g'ridan-to'g'ri tuproqqa quyib yuborish",
          "Kanalizatsiyaga shoshilinch oqizish"
        ],
        "correct": 0,
        "hint": "Neytrallash jarayoni barcha og'ir metall ionlarini xavfsiz qattiq shlamga aylantiradi."
      }
    ]
  },
  "8": {
    "id": 8,
    "title": "8. Sanitar Poligon Konstruktori",
    "badge": "Muhandislik",
    "icon": "fa-layer-group",
    "color": "teal",
    "category": "Muhandislik",
    "xp": 200,
    "desc": "Geomembrana, filtrlash tizimi va metan quvurlarini qatlam-qatlam to'g'ri muhandislik bilan quring.",
    "scenarios": [
      {
        "id": "lan-1",
        "title": "Poligon Asosi: Bentonit Gil Qatlami",
        "param": "Suv o'tkazuvchanlik koeffitsiyenti: K &le; 10^-9 m/s | Qalinlik: 1 metr",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"50\" y=\"60\" width=\"400\" height=\"40\" fill=\"#78350f\"/><text x=\"250\" y=\"85\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1 metr Zichlangan Bentonit Gil (K &le; 10⁻⁹ m/s)</text><rect x=\"50\" y=\"45\" width=\"400\" height=\"15\" fill=\"#1e293b\"/><text x=\"250\" y=\"56\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Asos tuprog'i</text></svg>",
        "question": "Sanitar poligon tagidan zaharli filtrat yerosti suviga tushmasligi uchun poydevor qanday tayyorlanadi?",
        "options": [
          "Kamida 1 metr qalinlikda suvni mutlaqo o'tkazmaydigan zichlangan tabiiy bentonit gil qatlami yotqiziladi",
          "Oddiy daryo qumi to'kib tekislanadi",
          "Hech qanday qatlam qilinmaydi, to'g'ridan-to'g'ri yerga to'kiladi"
        ],
        "correct": 0,
        "hint": "K <= 10^-9 m/s ko'rsatkichi suvning 1 metr gil qatlamidan o'tishi uchun yuzlab yillar talab etilishini bildiradi."
      },
      {
        "id": "lan-2",
        "title": "2.0 mm HDPE Geomembrana Payvandi",
        "param": "Yuqori zichlikdagi polietilen (HDPE) ekstruzion payvandlash",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><line x1=\"50\" y1=\"65\" x2=\"450\" y2=\"65\" stroke=\"#000000\" stroke-width=\"8\"/><rect x=\"220\" y=\"55\" width=\"60\" height=\"20\" fill=\"#38bdf8\"/><text x=\"250\" y=\"45\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Qo'sh Chokli Havo Sinovi</text><text x=\"250\" y=\"100\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">2.0 mm HDPE Geomembrana</text></svg>",
        "question": "Geomembrana polotnolari o'zaro qanday ulanadi va uning germetikligi qanday tekshiriladi?",
        "options": [
          "Ikki chokli termik payvandlanadi va choklar orasidagi kanalga 2 bar havo haydab bosim tushishi tekshiriladi",
          "Oddiy skotch yoki kantselyariya yelimi bilan yopishtiriladi",
          "Bir-birining ustiga shunchaki taxlab qo'yiladi"
        ],
        "correct": 0,
        "hint": "Qo'sh payvand choki orasidagi bosim testi har bir santimetr chokning 100% teshiksiz ekanligini kafolatlaydi."
      },
      {
        "id": "lan-3",
        "title": "Himoyalovchi Nonto'qima Geotekstil (500 g/m2)",
        "param": "Vazifasi: Geomembranani o'tkir toshlardan yirtilishdan asrash",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"50\" y=\"45\" width=\"400\" height=\"10\" fill=\"#94a3b8\"/><text x=\"250\" y=\"38\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">Igna teshikli Geotekstil (500 g/m²)</text><line x1=\"50\" y1=\"65\" x2=\"450\" y2=\"65\" stroke=\"#000000\" stroke-width=\"6\"/><text x=\"250\" y=\"85\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">HDPE Geomembrana</text></svg>",
        "question": "Geomembrana ustiga shag'al va tosh to'kilganda u yirtilib ketmasligi uchun nima to'shaladi?",
        "options": [
          "Qalinligi 5-6 mm bo'lgan nonto'qima igna teshikli kuchli himoya geotekstili",
          "Eski gazeta qog'ozlari",
          "Yupqa polietilen paketlar"
        ],
        "correct": 0,
        "hint": "Geotekstil amortizator vazifasini o'tab, millionlab tonna chiqindi bosimida geomembranani teshilishdan saqlaydi."
      },
      {
        "id": "lan-4",
        "title": "Filtrat (Leachate) Yig'uvchi Drenaj Quvurlari",
        "param": "HDPE teshikli quvurlar (d=250 mm) | Nishablik: 2%",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"250\" cy=\"65\" r=\"28\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"3\"/><circle cx=\"235\" cy=\"55\" r=\"3\" fill=\"#38bdf8\"/><circle cx=\"265\" cy=\"55\" r=\"3\" fill=\"#38bdf8\"/><circle cx=\"250\" cy=\"75\" r=\"3\" fill=\"#38bdf8\"/><text x=\"250\" y=\"115\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Teshikli Drenaj Quvuri (Nishablik 2%)</text></svg>",
        "question": "Yomg'ir suvi chiqindiga tekkanda hosil bo'ladigan zaharli filtrat qanday chiqariladi?",
        "options": [
          "Shag'al qatlami ichiga yotqizilgan teshikli HDPE drenaj quvurlari orqali o'z oqimi bilan filtrat hovuziga yig'iladi",
          "Filtrat yerga singib yo'q bo'lib ketishi kutiladi",
          "Filtratni daryoga quyuvchi ariq qaziladi"
        ],
        "correct": 0,
        "hint": "Filtrat sathi membranada 30 sm dan oshmasligi kerak, aks holda gidrostatik bosim sizib chiqish xavfini oshiradi."
      },
      {
        "id": "lan-5",
        "title": "Vertikal Poligon Gazi Quduqlari (Degazatsiya)",
        "param": "Poligon gazining 50-55% metan (CH4). Portlash xavfi bor!",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"235\" y=\"20\" width=\"30\" height=\"90\" fill=\"#334155\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"250\" y=\"15\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">Metan So'rgich (Vakuum)</text><circle cx=\"250\" cy=\"65\" r=\"6\" fill=\"#10b981\"/><text x=\"350\" y=\"65\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\">Biogaz Generatori ⚡</text></svg>",
        "question": "Chiqindi poligonida metan to'planib o'z-o'zidan yonib ketmasligi uchun qanday muhandislik chorasi ko'riladi?",
        "options": [
          "Teshikli vertikal gaz quduqlari o'rnatilib, vakuum kompressor bilan gaz tortib olinadi va elektr energiyasiga yoqiladi",
          "Poligonda doimiy ochiq olov yoqib qo'yiladi",
          "Gaz quduqlariga qum tiqib berkitiladi"
        ],
        "correct": 0,
        "hint": "Faol degazatsiya poligon yonishi va havoga metan tarqalishining oldini oladi hamda elektr ishlab chiqaradi."
      },
      {
        "id": "lan-6",
        "title": "Har Kungi Tuproq Yopmasi (Daily Cover)",
        "param": "Qalinlik: 15-20 sm tuproq yoki kompozit plyonka",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"35\" width=\"380\" height=\"20\" fill=\"#78350f\"/><text x=\"250\" y=\"50\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">15-20 sm Kundalik Tuproq Yopmasi</text><rect x=\"60\" y=\"60\" width=\"380\" height=\"40\" fill=\"#334155\"/><text x=\"250\" y=\"85\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Kompaktlangan Yangi Chiqindi Qatlami</text></svg>",
        "question": "Har bir ish smenasi oxirida to'kilgan chiqindilar usti nega zudlik bilan tuproq bilan yopilishi shart?",
        "options": [
          "Hid tarqalishi, chiqindi uchishi, qushlar, kemiruvchilar va o'z-o'zidan yonish xavfini to'xtatish uchun",
          "Chiqindilar ko'rinib xunuk turmasligi uchun faqat chiroy uchun",
          "Poligon hajmini sun'iy kattalashtirish uchun"
        ],
        "correct": 0,
        "hint": "Sanitariya qoidalariga ko'ra ochiq qoldirilgan chiqindi infeksiya o'chog'i va yong'in manbaiga aylanadi."
      },
      {
        "id": "lan-7",
        "title": "Teskari Osmosli Filtratni Qayta Tozalash",
        "param": "TDS: 28 000 mg/l | Ikki bosqichli Disk Tube RO (DTRO)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"160\" y=\"30\" width=\"180\" height=\"70\" rx=\"8\" fill=\"#0f172a\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">DTRO Membrana Zavodi</text><text x=\"250\" y=\"75\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Qora zaharli filtrat → Toza texnik suv</text></svg>",
        "question": "Qop-qora, o'ta zaharli poligon filtratini tozalashda qaysi texnologiya xalqaro standart hisoblanadi?",
        "options": [
          "Yuqori bosimli ikki bosqichli teskari osmos (DTRO - Disc Tube Reverse Osmosis) membranali stansiyasi",
          "Oddiy qum filtri orqali o'tkazish",
          "Filtratni daryoga tunda quyib yuborish"
        ],
        "correct": 0,
        "hint": "DTRO membranalari 120 bar bosim ostida eng og'ir kimyoviy birikmalarni ham 99.5% ushlab qolib toza suv ajratadi."
      },
      {
        "id": "lan-8",
        "title": "Poligon Yon Bag'ri Barqarorligi (Slope 1:3)",
        "param": "Nishablik: 1:3 (18.4°) | Ko'chki xavfini bartaraf etish",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 60 100 L 220 30 L 440 30 L 440 100 Z\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"140\" y=\"80\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\">1:3 Nishablik</text><text x=\"330\" y=\"65\" fill=\"white\" font-size=\"10\">Barqaror Pog'onali Katta Baza</text></svg>",
        "question": "Poligon tog'i 30-40 metr balandlikka yetganda chiqindilar ko'chib tushmasligi uchun nishablik qanday olinadi?",
        "options": [
          "Nishablik 1:3 dan tik bo'lmasligi va har 6-8 metr balandlikda oraliq gorizontal berkalar (terrassa) qilinishi shart",
          "Tik devor sifatida 90° burchakda qadab chiqiladi",
          "Poligon balandligi hech qachon 2 metrdan oshirilmaydi"
        ],
        "correct": 0,
        "hint": "Noto'g'ri qiyalikdagi poligonlar kuchli yomg'irda sirpanib, fojiali o'pirilishlarga olib kelishi mumkin."
      },
      {
        "id": "lan-9",
        "title": "Monitoring Quduqlari Tarmog'i",
        "param": "Yuqori va quyi gidrologik oqim: 50m va 200m masofa",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#334155\"/><text x=\"250\" y=\"65\" fill=\"white\" font-size=\"11\" text-anchor=\"middle\">Poligon</text><circle cx=\"90\" cy=\"65\" r=\"14\" fill=\"#047857\"/><text x=\"90\" y=\"70\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">Q1</text><circle cx=\"410\" cy=\"65\" r=\"14\" fill=\"#047857\"/><text x=\"410\" y=\"70\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">Q2</text><text x=\"250\" y=\"115\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"middle\">Choraklik Yerosti Suvi Laboratoriya Tahlili</text></svg>",
        "question": "Poligon geomembranasi teshilgan yoki teshilmaganini qanday qilib yillar davomida aniqlab boriladi?",
        "options": [
          "Poligon atrofida yerosti suvi oqimi bo'ylab nazorat pyezometrik quduqlari qazilib, suv har chorakda tahlil qilib boriladi",
          "Poligon tagiga odam tushib ko'radi",
          "Quduq qazish shart emas, daryodan suv ichib ko'riladi"
        ],
        "correct": 0,
        "hint": "Monitoring quduqlarida og'ir metall yoki ammiak topilishi geomembrananing sizib chiqayotganidan darak beradi."
      },
      {
        "id": "lan-10",
        "title": "Poligonni Yopish va Rekultivatsiya (Final Cap)",
        "param": "Poligon to'ldi. Ko'p qatlamli himoya ekrani va fitomelioratsiya",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"30\" width=\"380\" height=\"15\" fill=\"#15803d\"/><text x=\"250\" y=\"42\" fill=\"white\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Maysazor va Butalar (Fitomelioratsiya)</text><rect x=\"60\" y=\"48\" width=\"380\" height=\"15\" fill=\"#78350f\"/><text x=\"250\" y=\"59\" fill=\"#fcd34d\" font-size=\"9\" text-anchor=\"middle\">1 m Unumdor Tuproq</text><line x1=\"60\" y1=\"68\" x2=\"440\" y2=\"68\" stroke=\"#000\" stroke-width=\"4\"/><text x=\"250\" y=\"80\" fill=\"#38bdf8\" font-size=\"9\" text-anchor=\"middle\">Geomembrana (Yomg'ir kirmasligi uchun)</text></svg>",
        "question": "Poligon o'z muddatini o'tab to'lgach, uni xavfsiz yashil bog' zonasiga aylantirish uchun nima qilinadi?",
        "options": [
          "Ustidan geomembrana yopilib yomg'ir suvi to'siladi, 1 metr tuproq to'kilib chuqur ildiz otmaydigan maysalar ekiladi",
          "Ustiga ko'p qavatli turar-joy binolari quriladi",
          "Poligon ustini ochiq qoldirib shahar axlatxonasi qilib saqlanadi"
        ],
        "correct": 0,
        "hint": "Yakuniy qoplama yomg'ir suvining chiqindiga kirishini to'xtatadi va yangi filtrat hosil bo'lishini nolga tushiradi."
      }
    ]
  },
  "9": {
    "id": 9,
    "title": "9. Tutun Tozalash Filtrlari Simulyatori",
    "badge": "Sanoat Ekologiyasi",
    "icon": "fa-smog",
    "color": "blue",
    "category": "Ekologik Audit",
    "xp": 220,
    "desc": "Zavod trubasiga siklon, matoli elektrofiltr va skrubber o'rnatib zaharli gazlar va changni 99.8% tozalang.",
    "scenarios": [
      {
        "id": "air-1",
        "title": "Dag'al Chang uchun Birlamchi Siklon Apparati",
        "param": "Chang zarralari o'lchami: >15 mkm | Harorat: 220°C",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 190 30 L 310 30 L 270 100 L 230 100 Z\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Siklon Separator</text><text x=\"250\" y=\"75\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Markazdan qochma kuch</text></svg>",
        "question": "Yirik qattiq chang zarralarini matoli filtrlarga yetib bormasdan oldin tutib qolish uchun qaysi apparat birinchi qo'yiladi?",
        "options": [
          "Markazdan qochma gravitatsion kuch bilan ishlaydigan Siklon chang ushlagichi",
          "Qog'ozli salfetka to'sig'i",
          "Oddiy sovuq suv purkagich"
        ],
        "correct": 0,
        "hint": "Siklonlar arzon, elektr sarflamaydi va 10 mikrondan katta changning 85-90% ini bir zumda cho'ktiradi."
      },
      {
        "id": "air-2",
        "title": "Mayda Chang uchun Matoli Yengli Filtr (Baghouse)",
        "param": "PM2.5 va PM10 changlari | Samaradorlik: 99.9%",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"160\" y=\"25\" width=\"180\" height=\"80\" rx=\"8\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"90\" stroke=\"#10b981\" stroke-width=\"6\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"90\" stroke=\"#10b981\" stroke-width=\"6\"/><line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"90\" stroke=\"#10b981\" stroke-width=\"6\"/><text x=\"250\" y=\"118\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"middle\">PTFE Qoplamali Yengli Filtr (Baghouse)</text></svg>",
        "question": "Eng mayda xavfli changlarni (PM2.5) 99.9% tozalashda qaysi filtr turi tengsiz hisoblanadi?",
        "options": [
          "Teskari impulsli siqilgan havo bilan tozalanadigan PTFE matoli yengli filtrlar (Baghouse)",
          "Oddiy temir to'r",
          "Ventilyator qanoti"
        ],
        "correct": 0,
        "hint": "Baghouse filtrlari sement, metallurgiya va ko'mir stansiyalarida submikron changlarni deyarli to'liq ushlab qoladi."
      },
      {
        "id": "air-3",
        "title": "Yuqori Kuchlanishli Elektrofiltr (60 kV ESP)",
        "param": "Gaz harorati: 350°C | Gaz hajmi: 250 000 m3/soat",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"150\" y=\"30\" width=\"200\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><line x1=\"190\" y1=\"40\" x2=\"190\" y2=\"90\" stroke=\"#ef4444\" stroke-width=\"3\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"4\"/><line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"90\" stroke=\"#ef4444\" stroke-width=\"3\"/><text x=\"250\" y=\"115\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">Ionizatsiya Maydoni: 60 000 Volt (ESP)</text></svg>",
        "question": "Mato kuyib ketadigan o'ta yuqori haroratli (350°C) gaz oqimlarida chang qanday ushlanadi?",
        "options": [
          "Chang zarralariga manfiy zaryad berib, musbat cho'ktiruvchi plastinalarga tortuvchi Elektrofiltr (ESP) orqali",
          "Gazni daryoga haydash orqali",
          "Filtr o'rnatmasdan to'g'ridan-to'g'ri trubadan chiqarish orqali"
        ],
        "correct": 0,
        "hint": "Elektrofiltrlar aerodinamik qarshiligi o'ta past bo'lgan holda ulkan gaz hajmlarini tozalash imkonini beradi."
      },
      {
        "id": "air-4",
        "title": "Oltingugurt Dioksidini (SO2) Tutuvchi Nam Skrubber",
        "param": "SO2 miqdori: 4500 mg/m3 | Reagent: Ohak suti Ca(OH)2",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"25\" width=\"140\" height=\"80\" rx=\"8\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Nam Skrubber</text><text x=\"250\" y=\"75\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">SO2 + Ca(OH)2 → Gips</text><text x=\"250\" y=\"90\" fill=\"#a7f3d0\" font-size=\"9\" text-anchor=\"middle\">98% Tozalash</text></svg>",
        "question": "Kislotali yomg'ir hosil qiluvchi SO2 gazini zararsizlantirish uchun qaysi texnologik yechim zarur?",
        "options": [
          "Ohak suti (Ca(OH)2) eritmasi purkaladigan nam skrubber (FGD) orqali SO2 ni zararsiz sintetik gipsga aylantirish",
          "Gazni muzlatib qo'yish",
          "Trubani balandroq qurish bilan cheklanish"
        ],
        "correct": 0,
        "hint": "Nam skrubberlar oltingugurt dioksidini 98% tutib qoladi va qurilish gipsi (CaSO4) ishlab chiqarishga xomashyo beradi."
      },
      {
        "id": "air-5",
        "title": "Azot Oksidlarini (NOx) Kamaytirish: SCR Texnologiyasi",
        "param": "Katalitik qaytarilish: Ammiak suvi (NH3) injeksiyasi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"160\" y=\"30\" width=\"180\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#818cf8\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#a5b4fc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">SCR Katalizatori (TiO2/V2O5)</text><text x=\"250\" y=\"75\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"middle\">4NO + 4NH3 + O2 → 4N2 + 6H2O</text></svg>",
        "question": "Zaharli qizg'ish tutun (NO va NO2) hosil qiluvchi azot oksidlarini havoga chiqarmaslik uchun:",
        "options": [
          "Selektiv Katalitik Qaytarilish (SCR) reaktorida ammiak purkash orqali NOx ni toza azot (N2) va suvga parchalash",
          "Zavod pechiga suv sepib olovni o'chirish",
          "NOx gazini havo sharlariga yig'ish"
        ],
        "correct": 0,
        "hint": "SCR reaksiyasi azot oksidlarini 95% gacha toza atmosferadagi azot gazi (N2) holatiga qaytaradi."
      },
      {
        "id": "air-6",
        "title": "Faollashtirilgan Ko'mir Inyeksiyasi (Dioksinlar)",
        "param": "Chiqindi yoqish zavodi: Dioksin, furan va simob (Hg)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"170\" y=\"35\" width=\"160\" height=\"60\" rx=\"8\" fill=\"#020617\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"250\" y=\"60\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Ko'mir Kukuni Purkash</text><text x=\"250\" y=\"80\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Og'ir metall va dioksin adsorbsiyasi</text></svg>",
        "question": "Eng xavfli kanserogen dioksinlar va simob bug'larini tutib qolishda nima qo'llaniladi?",
        "options": [
          "Tutun yo'liga mayda faollashtirilgan ko'mir kukuni purkab, keyin uni yengli filtrda tutib qolish",
          "Oddiy qum sepish",
          "Tutunga atir purkash"
        ],
        "correct": 0,
        "hint": "Faollashtirilgan ko'mir ulkan solishtirma yuzasi orqali dioksin va simobni 99% o'ziga yutadi."
      },
      {
        "id": "air-7",
        "title": "Impulsli Tozalash (Pulse-Jet Cleaning)",
        "param": "Bosim farqi: &Delta;P > 1600 Pa (Filtr tiqilib qolgan)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"250\" cy=\"50\" r=\"20\" fill=\"#0284c7\"/><text x=\"250\" y=\"55\" fill=\"white\" font-size=\"14\" text-anchor=\"middle\">💨</text><text x=\"250\" y=\"90\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">6 bar Siqilgan Havo Impulsi (0.1 soniya)</text><text x=\"250\" y=\"110\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Qalin chang qatlami silkinib tushadi</text></svg>",
        "question": "Matoli yengli filtrda chang qalinlashib gaz o'tishi qiyinlashganda avtomatik tizim nima qiladi?",
        "options": [
          "Yengning ichki qismiga 6 bar bosimli siqilgan havoni 0.1 soniyalik impuls bilan urib, tashqi changni bunkerga silkitadi",
          "Filtr matolarini yechib kir mashinada yuvishga olib ketadi",
          "Tutun trubasini berkitib zavodni to'xtatadi"
        ],
        "correct": 0,
        "hint": "Pulse-Jet tozalash zavodni to'xtatmasdan turib filtrlarning uzluksiz o'tkazuvchanligini ta'minlaydi."
      },
      {
        "id": "air-8",
        "title": "Kislotali Shudring Nuqtasi (Acid Dew Point)",
        "param": "Gaz harorati: 110°C | Shudring nuqtasi: 135°C (Kritik xavf)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fca5a5\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Korroziya Xavfi ⚠️</text><text x=\"250\" y=\"75\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\">T_gaz &lt; T_shudring</text><text x=\"250\" y=\"90\" fill=\"#fca5a5\" font-size=\"9\" text-anchor=\"middle\">H2SO4 kondensatsiyasi</text></svg>",
        "question": "Tutun gazi harorati kislotali shudring nuqtasidan pastga tushib ketsa nima bo'ladi?",
        "options": [
          "Gazdagi namlik kislota bug'i bilan birikib metall truba va filtrlarni bir necha haftada teshvoruvchi agressiv kislotaga aylanadi",
          "Filtrlar yanada yaxshiroq ishlay boshlaydi",
          "Gaz muzga aylanib qoladi"
        ],
        "correct": 0,
        "hint": "Gaz harorati doimo kislotali shudring nuqtasidan kamida 20°C yuqori bo'lishi qat'iy nazorat qilinadi."
      },
      {
        "id": "air-9",
        "title": "CEMS Uzluksiz Monitoring Datchiklari",
        "param": "Trubadagi optik lazerli datchiklar (NOx, SO2, CO, PM)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"230\" y=\"10\" width=\"40\" height=\"110\" fill=\"#334155\"/><circle cx=\"230\" cy=\"50\" r=\"10\" fill=\"#10b981\"/><circle cx=\"270\" cy=\"50\" r=\"10\" fill=\"#10b981\"/><line x1=\"230\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"350\" y=\"55\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\">CEMS Lazer Datchigi</text><text x=\"350\" y=\"75\" fill=\"#94a3b8\" font-size=\"9\">Davlat inspeksiyasiga onlayn uzatish</text></svg>",
        "question": "Korxonaning ruxsatsiz zaharli tutun chiqarishini real vaqt rejimida qanday nazorat qilinadi?",
        "options": [
          "Trubaga o'rnatilgan optik CEMS stansiyasi ma'lumotlarni 24/7 rejimida to'g'ridan-to'g'ri Ekologiya vazirligi serveriga uzatadi",
          "Yiliga bir marta kelib trubaga termometr tiqib ko'rish bilan",
          "Zavod direktorining og'zaki so'ziga ishonish bilan"
        ],
        "correct": 0,
        "hint": "CEMS (Continuous Emission Monitoring System) ko'rsatkichlari oshganda avtomatik jarima va ogohlantirish shakllanadi."
      },
      {
        "id": "air-10",
        "title": "Skrubber Oqova Suvini Sirkulyatsiya Qilish",
        "param": "Yopiq suv aylanish sikli (Zero Liquid Discharge)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><ellipse cx=\"250\" cy=\"65\" rx=\"140\" ry=\"35\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\" stroke-dasharray=\"6,4\"/><text x=\"250\" y=\"60\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Yopiq Siklli Aylanma Suv</text><text x=\"250\" y=\"80\" fill=\"#10b981\" font-size=\"10\" text-anchor=\"middle\">Cho'kindi gips chiqarilib, suv qaytadi</text></svg>",
        "question": "Nam skrubberdan chiquvchi nordon yuvish suvi nima qilinadi?",
        "options": [
          "Cho'kindi tindirgichida gips ajratilib, suv neytrallanib yana qayta skrubberga purkash uchun aylanma tizimda ishlatiladi",
          "Shaharning ichimlik suvi tarmog'iga oqiziladi",
          "Zavod hovlisiga to'kib qo'yiladi"
        ],
        "correct": 0,
        "hint": "Yopiq gidravlik sikl (ZLD) suv sarfini 90% ga tejaydi va daryolarga oqova tushishini nolga tenglashtiradi."
      }
    ]
  },
  "10": {
    "id": 10,
    "title": "10. Ekologik Jarima & Matematik Hisob-kitob",
    "badge": "Ekomatematika",
    "icon": "fa-calculator",
    "color": "rose",
    "category": "Ekologik Audit",
    "xp": 250,
    "desc": "Atmosferaga me'yordan ortiq chiqarilgan SO2 va chang uchun oshirilgan jarimani hisoblang.",
    "scenarios": [
      {
        "id": "pen-1",
        "title": "SO2 Bo'yicha Me'yordan Ortiq Tashlama Hisobi",
        "param": "Yillik limit: 50 tonna | Haqiqiy tashlama: 62 tonna | Ortiqcha: 12 tonna",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"45\" width=\"200\" height=\"30\" fill=\"#047857\"/><text x=\"160\" y=\"65\" fill=\"white\" font-size=\"11\" text-anchor=\"middle\">50t Ruxsat Etilgan Limit</text><rect x=\"260\" y=\"45\" width=\"100\" height=\"30\" fill=\"#ef4444\"/><text x=\"310\" y=\"65\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">+12t Ortiqcha!</text><text x=\"250\" y=\"105\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Jarima Formulada 5 barobar oshirilgan koeffitsiyent bilan hisoblanadi</text></svg>",
        "question": "Zavod ruxsat etilgan limitdan 12 tonna ortiq SO2 chiqardi. Kompensatsiya to'lovi qanday hisoblanadi?",
        "options": [
          "12 tonna ortiqcha tashlama uchun qonunchilik bo'yicha 5 barobar oshirilgan stavka qo'llanilib jarima solinadi",
          "Oddiy 1 barobar stavka to'lanadi",
          "Limit oshishi tabiatga zarar bermaydi deb bekor qilinadi"
        ],
        "correct": 0,
        "hint": "O'zR qonunchiligiga ko'ra me'yordan ortiq (sverxlimit) tashlamalar uchun oshirilgan 5x karrali koeffitsiyent qo'llaniladi."
      },
      {
        "id": "pen-2",
        "title": "1-Xavflilik Sinfiga Mansub Zaharli Chiqindilar",
        "param": "Xavflilik sinfi: 1 (O'ta xavfli) | Massa: 500 kg simobli lampalar",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fca5a5\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">1-Sinf Xavfli</text><text x=\"250\" y=\"75\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\">Simob / Polixlorbifenil</text><text x=\"250\" y=\"90\" fill=\"#fcd34d\" font-size=\"9\" text-anchor=\"middle\">K_xavf = 10.0 Maksimal</text></svg>",
        "question": "1-sinf xavfli chiqindilar noqonuniy tashlab ketilganda xavflilik koeffitsiyenti (K_xavf) qanday qabul qilinadi?",
        "options": [
          "Eng yuqori maksimal koeffitsiyent (10.0) qo'llanilib, atrof-muhitga yetkazilgan zarar hisoblanadi",
          "Oddiy maishiy chiqindi kabi 1.0 deb olinadi",
          "Koeffitsiyent nolga tenglashtiriladi"
        ],
        "correct": 0,
        "hint": "1-sinf chiqindilar tabiatni o'nlab yillarga zaharlaydi, shuning uchun jarima multiplikatori eng yuqori bo'ladi."
      },
      {
        "id": "pen-3",
        "title": "Oqova Suvda Neft Mahsulotlari Ko'payishi",
        "param": "PDS me'yori: 0.05 mg/l | Oqovada: 2.5 mg/l (50 barobar oshish!)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"45\" width=\"140\" height=\"35\" rx=\"6\" fill=\"#047857\"/><text x=\"150\" y=\"67\" fill=\"white\" font-size=\"11\" text-anchor=\"middle\">PDS: 0.05 mg/l</text><text x=\"250\" y=\"68\" fill=\"#ef4444\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"280\" y=\"45\" width=\"150\" height=\"35\" rx=\"6\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"355\" y=\"67\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Haqiqiy: 2.5 mg/l (50x)</text></svg>",
        "question": "Avtomobil yuvish shoxobchasi daryoga me'yordan 50 barobar ko'p neftli suv oqizdi. Qanday chora ko'riladi?",
        "options": [
          "Zarar yetkazilgan suv hajmi bo'yicha yirik jarima solinadi va tozalash inshooti qurilmaguncha faoliyati to'xtatiladi",
          "Faqat ogohlantirish xati berilib suv oqizishga ruxsat beriladi",
          "Shoxobchaga mukofot beriladi"
        ],
        "correct": 0,
        "hint": "Suv havzalariga neft oqizish qat'iy javobgarlikka sabab bo'lib, korxona faoliyati to'xtatilishi shart."
      },
      {
        "id": "pen-4",
        "title": "Suv Havzasi Qirg'oq Himoya Zonasidagi Jarima",
        "param": "Hududiy koeffitsiyent: Qirg'oq himoya zonasida K_hudud = 3.0",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e3a8a\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Daryo Himoya Zonasi</text><text x=\"250\" y=\"75\" fill=\"#fcd34d\" font-size=\"11\" text-anchor=\"middle\">K_hudud = 3.0</text><text x=\"250\" y=\"90\" fill=\"#fca5a5\" font-size=\"9\" text-anchor=\"middle\">Jarima 3 barobarga oshadi</text></svg>",
        "question": "Chiqindini daryoning qirg'oq himoya polosasiga noqonuniy to'kish oddiy joyga nisbatan qanday hisoblanadi?",
        "options": [
          "Maxsus himoyalangan hudud bo'lganligi uchun hududiy koeffitsiyent 3 barobar oshiriladi",
          "Hech qanday farqi yo'q, hamma joyga bir xil hisoblanadi",
          "Daryo yaqin bo'lgani uchun jarima kamaytiriladi"
        ],
        "correct": 0,
        "hint": "Suvni muhofaza qilish polosalari ekologik o'ta nozik hudud hisoblanib, qat'iy koeffitsiyentlar qo'llaniladi."
      },
      {
        "id": "pen-5",
        "title": "Filtrni O'chirib Qo'yish (24 Soatlik Avariya)",
        "param": "24 soat x 500 kg/soat tozalanmagan chang = 12 000 kg",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"120\" y=\"35\" width=\"260\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"250\" y=\"60\" fill=\"#fca5a5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Filtr 24 soat o'chiq turgan!</text><text x=\"250\" y=\"80\" fill=\"#ffffff\" font-size=\"11\" text-anchor=\"middle\">12 tonna xom zaharli chang atmosferada</text></svg>",
        "question": "Zavod elektrni tejash uchun filtrni 24 soat o'chirib qo'yganini inspeksiya fosh qildi. To'lov qanday hisoblanadi?",
        "options": [
          "Filtrsiz ishlagan barcha soatlar uchun maksimal quvvat bo'yicha to'liq tashlama hisoblanib, 10 barobar jarima undiriladi",
          "Faqat o'chirilgan paytda ko'rinib qolgan bir necha minut hisoblanadi",
          "Kechirim berilib elektr tejalgani maqtovga sazovor deb topiladi"
        ],
        "correct": 0,
        "hint": "Gaz tozalash uskunalarini qasddan o'chirib qo'yish ekologik qoidabuzarlikning eng og'ir turidir."
      },
      {
        "id": "pen-6",
        "title": "PM2.5 Chang Zarralari Bo'yicha Jarima",
        "param": "PM2.5 konsentratsiyasi: Ruxsat 0.06 mg/m3 | Haqiqiy 0.85 mg/m3",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">PM2.5 Mayda Chang</text><text x=\"250\" y=\"75\" fill=\"#fca5a5\" font-size=\"11\" text-anchor=\"middle\">14 barobar ortiqcha</text><text x=\"250\" y=\"90\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">O'pka va qonga singuvchi</text></svg>",
        "question": "Aholi yashash massivi yaqinida PM2.5 me'yordan 14 barobar oshganda jarima qanday asoslanadi?",
        "options": [
          "Aholi salomatligiga to'g'ridan-to'g'ri xavf tug'diruvchi yuqori zaharli kantselyar omil sifatida eng yuqori toifa bo'yicha",
          "Oddiy chang kabi e'tiborsiz qoldiriladi",
          "Shamolda uchib ketgani uchun jarima yozilmaydi"
        ],
        "correct": 0,
        "hint": "PM2.5 zarralari inson o'pkasining chuqur alveolalariga kirib qonga o'tuvchi eng xavfli chang turidir."
      },
      {
        "id": "pen-7",
        "title": "Aralash Xavfli Chiqindilar Saqlash",
        "param": "Akkumulyator kislotasi va qog'oz chiqindilari aralashtirilgan",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fca5a5\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Aralash Saqlash ⚠️</text><text x=\"250\" y=\"75\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\">Yong'in va Toksik Xavf</text></svg>",
        "question": "Korxona xavfli akkumulyator kislotali qoldiqlarini oddiy maishiy chiqindi bilan aralashtirib saqlagan. Jarima qanday qo'llanadi?",
        "options": [
          "Barcha aralashgan hajm eng yuqori xavfli toifa deb baholanadi va qat'iy moddiy jarima belgilanadi",
          "Faqat kislota qismi alohida hisoblanadi",
          "Chiqindilar aralashsa arzonlashadi deb to'lov olinmaydi"
        ],
        "correct": 0,
        "hint": "Sanitariya qoidalariga ko'ra xavfsiz chiqindi xavfli chiqindiga tekkanda, butun massa xavfli deb tan olinadi."
      },
      {
        "id": "pen-8",
        "title": "Ko'p Yillik Qimmatbaho Daraxtlarni Shikastlash",
        "param": "Diametri 60 sm bo'lgan chinor daraxti noqonuniy kesilgan",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"250\" cy=\"50\" r=\"22\" fill=\"#047857\"/><text x=\"250\" y=\"55\" fill=\"white\" font-size=\"16\" text-anchor=\"middle\">🌳</text><text x=\"250\" y=\"90\" fill=\"#f87171\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">BHM ning 100-300 barobari + 100 ta ko'chat ekish majburiyati</text></svg>",
        "question": "Qurilish kompaniyasi 80 yillik chinor daraxtini noqonuniy kesib tashladi. Qanday ekologik chora qo'llanadi?",
        "options": [
          "Yetkazilgan zarar to'liq undiriladi, eng yuqori jarima solinadi va o'rniga 100 tup 5 yillik ko'chat ekib 3 yil parvarishlash majburiyati yuklanadi",
          "Faqat o'tin puli to'lanadi",
          "Kompaniyaga hech narsa qilinmaydi"
        ],
        "correct": 0,
        "hint": "O'zbekistonda daraxtlarni kesishga moratoriy amal qilmoqda va har bir noqonuniy kesilgan daraxt uchun ulkan jarimalar belgilangan."
      },
      {
        "id": "pen-9",
        "title": "Ixtiyoriy 30 Kunlik To'lov Imtiyozi",
        "param": "Jarima dalolatnomasi topshirildi: 30 kun ichida to'lov",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"150\" y=\"35\" width=\"200\" height=\"60\" rx=\"8\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"60\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">30 Kun Ichida To'lov</text><text x=\"250\" y=\"80\" fill=\"#a7f3d0\" font-size=\"10\" text-anchor=\"middle\">70% to'lansa, 30% chegirma (Rag'bat)</text></svg>",
        "question": "Huquqbuzar jarimani o'z ixtiyori bilan 30 kun ichida to'lasa qanday qonuniy rag'bat bor?",
        "options": [
          "Belgilangan jarima summasining 70% ini 30 kun ichida ixtiyoriy to'lasa, qolgan 30% idan ozod qilinadi",
          "Hech qanday imtiyoz berilmaydi",
          "Jarima summasi ikki barobar oshiriladi"
        ],
        "correct": 0,
        "hint": "Ixtiyoriy to'lov tizimi da'vo jarayonlarini tezlashtiradi va kompensatsiyaning darhol ekologik jamg'armaga tushishini ta'minlaydi."
      },
      {
        "id": "pen-10",
        "title": "Issiqxona Gazlari Metan (CO2-ekvivalent) Balansi",
        "param": "CH4 ning issiqxona salohiyati: GWP = 28 barobar CO2 dan kuchli",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"45\" width=\"140\" height=\"40\" rx=\"6\" fill=\"#1e293b\"/><text x=\"150\" y=\"70\" fill=\"#fcd34d\" font-size=\"12\" text-anchor=\"middle\">1 Tonna CH4 (Metan)</text><text x=\"250\" y=\"70\" fill=\"#38bdf8\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">=</text><rect x=\"280\" y=\"45\" width=\"150\" height=\"40\" rx=\"6\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"355\" y=\"70\" fill=\"#fca5a5\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">28 Tonna CO2-ekv!</text></svg>",
        "question": "1 tonna metan havoga chiqib ketsa, Parij bitimi bo'yicha qancha CO2 ga teng zarar yetkaziladi?",
        "options": [
          "28 tonna CO2 ekvivalentiga teng, chunki metan issiqlikni 28 barobar kuchli ushlab turadi",
          "Aynan 1 tonna CO2 ga teng",
          "Metan issiqxona gazi emas, zararsiz"
        ],
        "correct": 0,
        "hint": "Metan qisqa muddatda atmosferani eng tez isituvchi agressiv gaz bo'lib, uning emissiyasi qat'iy hisoblanadi."
      }
    ]
  },
  "11": {
    "id": 11,
    "title": "11. Yashil Shahar Arxitekturasi",
    "badge": "Shaharsozlik",
    "icon": "fa-city",
    "color": "indigo",
    "category": "Ekspertiza va Qonunchilik",
    "xp": 260,
    "desc": "Shamol atirguli (roza vetrov) va 1000m sanitar zonani hisobga olib shaharni to'g'ri loyihalang.",
    "scenarios": [
      {
        "id": "city-1",
        "title": "Shamol Atirguli (Roza Vetrov) Tahlili",
        "param": "Ustun shamol yo'nalishi: Shimoli-Sharq (NE) → Janubi-G'arb (SW)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"150\" cy=\"65\" r=\"45\" fill=\"#0f172a\" stroke=\"#818cf8\" stroke-width=\"2\"/><line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"110\" stroke=\"#64748b\"/><line x1=\"105\" y1=\"65\" x2=\"195\" y2=\"65\" stroke=\"#64748b\"/><path d=\"M 180 35 L 120 95\" stroke=\"#ef4444\" stroke-width=\"4\"/><text x=\"185\" y=\"30\" fill=\"#f87171\" font-size=\"10\" font-weight=\"bold\">NE Shamol</text><rect x=\"300\" y=\"35\" width=\"140\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"370\" y=\"60\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Sanoat Zonasi:</text><text x=\"370\" y=\"78\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Janubi-G'arbga joylanadi</text></svg>",
        "question": "Shamol yil bo'yi shimoli-sharqdan essachi, kimyo sanoat hududi shahar aholisiga nisbatan qayerda joylashishi kerak?",
        "options": [
          "Shahar aholisi shamolning yuqori (shimoli-sharqiy) qismida, zavodlar esa shamol yo'nalishi bo'yicha pastda (janubi-g'arbda) joylashishi shart",
          "Zavodlarni to'g'ridan-to'g'ri shamol kelayotgan shimoli-sharqqa aholi oldiga qurish",
          "Zavodlarni shahar markaziga joylashtirish"
        ],
        "correct": 0,
        "hint": "Zavodlar doimo shamol osti (podvetrennaya storona) tomonda joylashtirilsa, tutun shaharga emas, dashtga qarab ketadi."
      },
      {
        "id": "city-2",
        "title": "Sanitar-Himoya Zonasi (SPZ = 1000m)",
        "param": "1-sinf metallurgiya kombinati va aholi uylari orasi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"50\" y=\"35\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#7f1d1d\"/><text x=\"100\" y=\"70\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Metallurgiya</text><line x1=\"160\" y1=\"65\" x2=\"340\" y2=\"65\" stroke=\"#10b981\" stroke-width=\"4\" stroke-dasharray=\"6,4\"/><text x=\"250\" y=\"55\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1000 metr Yashil SPZ Zonasi</text><rect x=\"350\" y=\"35\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#047857\"/><text x=\"400\" y=\"70\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Aholi Massivi</text></svg>",
        "question": "1-toifali og'ir sanoat korxonasi va aholi turar-joyi o'rtasidagi minimal Sanitar-himoya zonasi qancha bo'lishi shart?",
        "options": [
          "Kamida 1000 metr yashil daraxtzorlar bilan qoplangan himoya polisasi",
          "50 metr yetarli",
          "Orasida masofa bo'lishi shart emas"
        ],
        "correct": 0,
        "hint": "SanQvaM 0350-17 bo'yicha 1-sinf xavfli obyektlar uchun 1000 metr masofa qat'iy qonuniy talabdir."
      },
      {
        "id": "city-3",
        "title": "Shahar Shamollatish Koridorlari (Aero-Ventilyatsiya)",
        "param": "Ko'p qavatli binolar shamol oqimini to'sib qo'ymasligi lozim",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"30\" width=\"30\" height=\"70\" fill=\"#334155\"/><rect x=\"150\" y=\"30\" width=\"30\" height=\"70\" fill=\"#334155\"/><rect x=\"220\" y=\"30\" width=\"30\" height=\"70\" fill=\"#334155\"/><path d=\"M 50 65 L 450 65\" stroke=\"#38bdf8\" stroke-width=\"4\"/><text x=\"350\" y=\"60\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">Keng Xiyobonli Havo Koridori</text></svg>",
        "question": "Smog va havoning turg'unlashib qolishini oldini olish uchun zamonaviy shaharlar qanday loyihalanadi?",
        "options": [
          "Shamol yo'nalishi bo'ylab keng yashil xiyobonlar va daryo bo'ylari bo'ylab ochiq 'havo koridorlari' qoldiriladi",
          "Shamol yo'liga 30 qavatli uylarni uzluksiz devor qilib quriladi",
          "Shaharni yopiq gumbaz bilan o'rab olinadi"
        ],
        "correct": 0,
        "hint": "Havo koridorlari tog'dan keluvchi toza shabadani shahar markazigacha yetkazib, avtomobil tutunlarini haydab chiqaradi."
      },
      {
        "id": "city-4",
        "title": "Magistral Yo'l Shovqiniga Qarshi Yashil To'siq",
        "param": "Magistral: 85 dBA shovqin | Maktab binosi yaqin",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"50\" y=\"45\" width=\"100\" height=\"40\" fill=\"#334155\"/><text x=\"100\" y=\"70\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Magistral (85 dB)</text><circle cx=\"210\" cy=\"65\" r=\"16\" fill=\"#15803d\"/><circle cx=\"250\" cy=\"65\" r=\"20\" fill=\"#166534\"/><circle cx=\"290\" cy=\"65\" r=\"16\" fill=\"#15803d\"/><text x=\"250\" y=\"110\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"middle\">3 Qator Daraxt + Akustik Ekran (-20 dB)</text><rect x=\"360\" y=\"45\" width=\"90\" height=\"40\" fill=\"#0369a1\"/><text x=\"405\" y=\"70\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Maktab</text></svg>",
        "question": "Katta trassa yonidagi maktab bolalarini shovqin va zaharli gazdan qanday samarali himoya qilinadi?",
        "options": [
          "Akustik shaffof himoya devori va 3 qatorli zich bargli butalar hamda ignabargli daraxtlar belbog'i bilan",
          "Yo'l chetiga reklama bannerlari ilib qo'yish bilan",
          "Maktab derazalarini g'isht bilan terib yopish bilan"
        ],
        "correct": 0,
        "hint": "Ko'p qatlamli yashil to'siq shovqinni 15-20 dBA ga kamaytiradi va og'ir metall changlarini 70% barglarida tutib qoladi."
      },
      {
        "id": "city-5",
        "title": "Shahar Issiqlik Oroli (Urban Heat Island) Effekti",
        "param": "Asfalt va beton harorati: 52°C | Yashil parkda: 31°C",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"35\" width=\"140\" height=\"60\" rx=\"6\" fill=\"#7f1d1d\"/><text x=\"150\" y=\"60\" fill=\"#fca5a5\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Beton Markaz (52°C)</text><text x=\"150\" y=\"80\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Konditsionerlar zo'riqishi</text><text x=\"250\" y=\"70\" fill=\"#10b981\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"280\" y=\"35\" width=\"150\" height=\"60\" rx=\"6\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"355\" y=\"60\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Yashil Tom & Park (31°C)</text><text x=\"355\" y=\"80\" fill=\"#a7f3d0\" font-size=\"10\" text-anchor=\"middle\">Tabiiy sovutish</text></svg>",
        "question": "Yozda shahar ichi jazirama issiq bo'lib ketmasligi uchun shaharsozlar nima qilishi kerak?",
        "options": [
          "Binolarda yashil tomlar (Green roofs), ochiq suv havzalari, favvoralar va soyali xiyobonlar ulushini kamida 40% ga yetkazish",
          "Butun shaharni asfalt bilan qoplash",
          "Ko'chalarga ko'proq yirik konditsionerlar o'rnatish"
        ],
        "correct": 0,
        "hint": "Daraxtlar transpiratsiya (suv bug'latish) hisobiga havo haroratini sun'iy asfaltdan 8-12 darajagacha pasaytiradi."
      },
      {
        "id": "city-6",
        "title": "Bio-Drenaj Ariqlari va Yomg'ir Bog'lari (Rain Gardens)",
        "param": "Yomg'ir suvi kollektorga toshmasdan yer ostiga singishi kerak",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 120 40 L 160 90 L 340 90 L 380 40 Z\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"65\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Yomg'ir Bog'i (Bioswale)</text><text x=\"250\" y=\"82\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">G'ovakli qatlam + Suv o'simliklari</text></svg>",
        "question": "Shahar ko'chalarida yomg'ir yoqqanda suv toshib ketmasligi uchun qanday yashil infratuzilma qo'llaniladi?",
        "options": [
          "G'ovakli shag'al va o'simliklardan iborat yomg'ir bog'lari (Rain gardens) orqali suvni tabiiy tozalab yerosti suviga singdirish",
          "Barcha ariqlarni betonlab yopib tashlash",
          "Yomg'ir suvini chelaklarda tashish"
        ],
        "correct": 0,
        "hint": "Yomg'ir bog'lari shahar drenaj tizimi yuklamasini 60% ga yengillatadi va yerosti suv zaxiralarini to'ldiradi."
      },
      {
        "id": "city-7",
        "title": "Chiqindi Maydonchasi Masofasi (SanQvaM)",
        "param": "Norma: Turar-joy binosidan minimal 20m, maksimal 100m",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"40\" width=\"80\" height=\"50\" fill=\"#334155\"/><text x=\"100\" y=\"70\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Uy Derazasi</text><line x1=\"150\" y1=\"65\" x2=\"330\" y2=\"65\" stroke=\"#10b981\" stroke-width=\"3\"/><text x=\"240\" y=\"55\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">20 m &le; Masofa &le; 100 m</text><rect x=\"340\" y=\"40\" width=\"100\" height=\"50\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"390\" y=\"68\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">Konteyner</text></svg>",
        "question": "Chiqindi yig'ish maydonchasi ko'p qavatli turar-joy derazasidan necha metr uzoqlikda joylashishi kerak?",
        "options": [
          "Kamida 20 metr (hid va hasharot kirmasligi uchun) va ko'pi bilan 100 metr (aholi borishi oson bo'lishi uchun)",
          "To'g'ridan-to'g'ri podyezd eshigi tagiga 1 metr qilib qo'yish",
          "Shahardan 5 km tashqariga qo'yish"
        ],
        "correct": 0,
        "hint": "SanQvaM 0300-14 bo'yicha 20-100 metr oralig'i sanitariya xavfsizligi va qulaylikning oltin qoidasidir."
      },
      {
        "id": "city-8",
        "title": "Sanoat Oqovalarini Daryoga Ulash Taqiqlanishi",
        "param": "Kimyo korxonasi oqovasi: To'g'ridan-to'g'ri daryoga ulash man etiladi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"70\" y=\"35\" width=\"120\" height=\"60\" rx=\"6\" fill=\"#7f1d1d\"/><text x=\"130\" y=\"65\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Zavod Oqovasi</text><line x1=\"200\" y1=\"65\" x2=\"300\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"6\"/><text x=\"250\" y=\"55\" fill=\"#ef4444\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">✕</text><rect x=\"310\" y=\"35\" width=\"130\" height=\"60\" rx=\"6\" fill=\"#0284c7\"/><text x=\"375\" y=\"65\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Tabiiy Daryo</text></svg>",
        "question": "Sanoat zonasini loyihalashda korxona oqova suvlarini to'g'ridan-to'g'ri daryoga ulash mumkinmi?",
        "options": [
          "Mutlaqo yo'q! Zavod o'zining lokal tozalash inshootiga ega bo'lishi va faqat chuqur tozalangach shahar kollektoriga ruxsat etiladi",
          "Ha, daryo oqimi katta bo'lsa darhol suyulib ketadi",
          "Faqat kechasi oqizish sharti bilan ruxsat beriladi"
        ],
        "correct": 0,
        "hint": "Tozalanmagan sanoat oqovalarini ochiq suv havzasiga chiqarish qat'iyan jinoiy javobgarlikka olib keladi."
      },
      {
        "id": "city-9",
        "title": "Yashil Transport va Velosiped Magistrallari",
        "param": "Transport chiqindilari shahar havosi ifloslanishining 60% qismi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"45\" width=\"140\" height=\"40\" rx=\"8\" fill=\"#1e293b\"/><text x=\"150\" y=\"70\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Avtomobil Yo'li</text><rect x=\"230\" y=\"40\" width=\"15\" height=\"50\" fill=\"#047857\"/><text x=\"237\" y=\"30\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">Yashil To'siq</text><rect x=\"255\" y=\"45\" width=\"160\" height=\"40\" rx=\"8\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"335\" y=\"70\" fill=\"#a7f3d0\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Alohida Velo-Magistral 🚲</text></svg>",
        "question": "Shaharda avtomobilsiz sog'lom harakatni rivojlantirish uchun veloyo'laklar qanday quriladi?",
        "options": [
          "Avtomobil harakatidan yashil daraxtzor yoki bort bilan to'liq ajratilgan, xavfsiz va uzluksiz tarmoq sifatida",
          "Mashinalar orasidan chiziq chizib qo'yish bilan",
          "Piyodalar yo'lkasida odamlar orasidan yurgizish bilan"
        ],
        "correct": 0,
        "hint": "Izolyatsiyalangan velomagistrallar xavfsizlikni 90% oshiradi va aholini velosipeddan kundalik foydalanishga undaydi."
      },
      {
        "id": "city-10",
        "title": "Quyosh Panellari va Energo-Samarador Binolar",
        "param": "Orientatsiya: Janubiy tomon (180°) | Nishablik: 32°",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 120 90 L 250 30 L 380 90 Z\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"340\" cy=\"40\" r=\"14\" fill=\"#f59e0b\"/><text x=\"250\" y=\"65\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Janubga Qaragan Quyosh Tomi</text><text x=\"250\" y=\"85\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"middle\">Nishablik 32° (Maksimal insolyatsiya)</text></svg>",
        "question": "O'zbekiston sharoitida quyosh panellari eng ko'p energiya ishlab chiqarishi uchun binolar qaysi tomonga qarashi kerak?",
        "options": [
          "Uylarning asosiy tomlari janubga tomon 30-35° burchak ostida yo'naltirilgan bo'lishi kerak",
          "Shimol tomonga qaratilishi kerak",
          "Quyoshdan panalab daraxtlar soyasiga yashirilishi kerak"
        ],
        "correct": 0,
        "hint": "O'zbekiston shimoliy yarimsharda joylashgani uchun janubiy orientatsiya yil bo'yi maksimal quyosh nuri oladi."
      }
    ]
  },
  "12": {
    "id": 12,
    "title": "12. Ekologik Detektiv: GIS & Sun'iy Yo'ldosh",
    "badge": "Kosmik Monitoring",
    "icon": "fa-satellite",
    "color": "purple",
    "category": "Monitoring",
    "xp": 240,
    "desc": "Sun'iy yo'ldosh xaritasi va spektral datchiklar orqali ko'milgan noqonuniy chiqindilarni toping.",
    "scenarios": [
      {
        "id": "gis-1",
        "title": "Termal Infraqizil (TIR) Issiqlik Anomaliyasi",
        "param": "Sentinel-2 / Landsat-8 termal kanali (B10) | Harorat: +12°C yuqori",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"250\" cy=\"65\" r=\"40\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"3\"/><text x=\"250\" y=\"60\" fill=\"#fca5a5\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Issiqlik Anomaliyasi!</text><text x=\"250\" y=\"78\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">+12°C Atrofga nisbatan</text><text x=\"250\" y=\"115\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">Yer ostida noqonuniy chiriyotgan organik chiqindi</text></svg>",
        "question": "Tunda olingan sun'iy yo'ldosh termal xaritasida adirlik ostida kutilmaganda +12°C issiqlik o'chog'i ko'rindi. Bu nima?",
        "options": [
          "Tuproq ostiga noqonuniy ko'milgan chiqindilar chirishi natijasida metan va biologik issiqlik ajralmoqda",
          "Yer ostida vulqon paydo bo'lgan",
          "Oddiy qum qatlami"
        ],
        "correct": 0,
        "hint": "Chiriyotgan organik massalar termofil bakteriyalar tufayli 50-60°C gacha qiziydi va termal sun'iy yo'ldoshda yaqqol fosh bo'ladi."
      },
      {
        "id": "gis-2",
        "title": "Vegetatsiya Indeksi (NDVI) Keskin Tushishi",
        "param": "NDVI normasi: 0.75 (Sog'lom yashil) | Anomaliya zonasi: 0.18",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"60\" y=\"40\" width=\"120\" height=\"50\" rx=\"6\" fill=\"#047857\"/><text x=\"120\" y=\"65\" fill=\"white\" font-size=\"11\" text-anchor=\"middle\">NDVI = 0.75 (Yashil)</text><text x=\"240\" y=\"70\" fill=\"#ef4444\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"270\" y=\"40\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"350\" y=\"62\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">NDVI = 0.18 (Qurigan)</text><text x=\"350\" y=\"78\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">Zaharli sizib chiqish o'chog'i</text></svg>",
        "question": "Ekin maydoni o'rtasida 200 metrli doira ichida o'simliklar keskin sarg'ayib quriydi (NDVI tushgan). Sababi:",
        "options": [
          "Yerosti suviga yaqin ko'milgan zaharli kimyoviy shlam o'simlik ildiz tizimini zaharlagan",
          "O'simliklar quyoshdan uyalib qolgan",
          "U yerga faqat oq gul ekilgan"
        ],
        "correct": 0,
        "hint": "NDVI spektral indeksi o'simlikdagi xlorofill miqdorini o'lchaydi; zaharli ifloslanishda xlorofill birinchi bo'lib parchalanadi."
      },
      {
        "id": "gis-3",
        "title": "Qisqa To'lqinli Infraqizil (SWIR) Spektroskopiya",
        "param": "Spektral belgi: Polimer va uglevodorodlarning yutilish chizig'i",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 80 80 Q 150 20 220 80 T 360 80\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/><circle cx=\"220\" cy=\"80\" r=\"6\" fill=\"#ef4444\"/><text x=\"220\" y=\"105\" fill=\"#fca5a5\" font-size=\"10\" text-anchor=\"middle\">Plastik Absorbtsiya Pik (2.2 µm)</text><text x=\"250\" y=\"35\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Ko'milgan Plastik Chiqindixona Fosh Etildi</text></svg>",
        "question": "Tuproq bilan yupqa ko'mib yashirilgan plastmassa va polimer chiqindilarini kosmosdan qanday aniqlanadi?",
        "options": [
          "SWIR (Qisqa to'lqinli infraqizil) kanalida polimerlarning o'ziga xos 2.2 mkm spektral yutilish chizig'i orqali",
          "Kosmonavtlar durbin bilan qarab topadi",
          "Tuproqni qazib ko'rmaguncha aniqlashning iloji yo'q"
        ],
        "correct": 0,
        "hint": "Har bir kimyoviy modda o'ziga xos spektral barmoq iziga (spectral signature) ega bo'lib, sun'iy yo'ldoshda aniq ko'rinadi."
      },
      {
        "id": "gis-4",
        "title": "SAR Radari: Poligon Cho'kishi va Deformatsiyasi",
        "param": "Interferometrik SAR (InSAR) | Yillik siljish: -18 mm",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 120 70 L 250 90 L 380 70\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"6,4\"/><text x=\"250\" y=\"55\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">InSAR: Cho'kish -18 mm/yil</text><text x=\"250\" y=\"115\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Geomembrana uzilish va o'pirilish xavfi bor</text></svg>",
        "question": "Sun'iy yo'ldosh radari poligon qiyaliklarida yiliga 18 millimetr siljishni ko'rsatdi. Bu qanday xavf?",
        "options": [
          "Poligon ichki qatlamlarida ko'chki va geomembrana yirtilish xavfi bor; zudlik bilan mustahkamlash talab etiladi",
          "Hech qanday xavf yo'q, yer har doim qimirlab turadi",
          "Poligon o'z-o'zidan tekislanib qolishini kutish kerak"
        ],
        "correct": 0,
        "hint": "Radar interferometriyasi (InSAR) millimetrlik aniqlikda poligon dambalari cho'kishini oldindan ogohlantiradi."
      },
      {
        "id": "gis-5",
        "title": "Daryoga Tunda Oqizilgan Loyqalanish (Turbidity)",
        "param": "Spektral loyqalik izi (Turbidity plume): Zavod trubasidan 8 km ga cho'zilgan",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><path d=\"M 50 65 Q 250 40 450 65\" stroke=\"#0284c7\" stroke-width=\"16\"/><path d=\"M 160 65 Q 280 50 400 65\" stroke=\"#78350f\" stroke-width=\"10\"/><circle cx=\"150\" cy=\"65\" r=\"10\" fill=\"#ef4444\"/><text x=\"150\" y=\"45\" fill=\"#f87171\" font-size=\"10\" font-weight=\"bold\">Noqonuniy Truba</text><text x=\"320\" y=\"95\" fill=\"#fcd34d\" font-size=\"10\" font-weight=\"bold\">8 km ga cho'zilgan loyqa shlam oqimi</text></svg>",
        "question": "Zavod tunda daryoga kirlangan oqova tashladi. Detektiv inspektor buni qanday fosh etadi?",
        "options": [
          "Ertalabki sun'iy yo'ldosh suratida suvning spektral aks etish koeffitsiyenti (loyqalik oqimi) orqali manbani aniq trubasigacha topadi",
          "Buni fosh etishning imkoni yo'q, suv oqib ketgan",
          "Zavod direktoridan kechagi ishlarini so'rab biladi"
        ],
        "correct": 0,
        "hint": "Kosmik multispektral suratlar daryodagi har qanday noqonuniy oqova izini aniq koordinatasi bilan xaritaga muhrlaydi."
      },
      {
        "id": "gis-6",
        "title": "Dron Lazer Spektrometri (CH4 Metan Xaritasi)",
        "param": "Dron parvozi: 50m balandlik | Lazer detektori: TDLAS",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"180\" cy=\"40\" r=\"14\" fill=\"#3b82f6\"/><text x=\"180\" y=\"45\" fill=\"white\" font-size=\"12\" text-anchor=\"middle\">🛸</text><path d=\"M 180 54 L 220 90 L 320 90 L 180 54\" fill=\"#10b981\" opacity=\"0.2\"/><circle cx=\"270\" cy=\"85\" r=\"15\" fill=\"#ef4444\"/><text x=\"270\" y=\"90\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">500 ppm</text><text x=\"380\" y=\"85\" fill=\"#fcd34d\" font-size=\"11\" font-weight=\"bold\">Metan Sizib Chiqish Nuqtasi</text></svg>",
        "question": "Katta poligonda metan gazi qayerdan sizib chiqayotganini aniqlash uchun eng tezkor usul:",
        "options": [
          "Dazgohlangan dron lazerli metan datchigi (TDLAS) orqali uchib, konsentratsiya xaritasini (ppm) tuzish",
          "Poligon bo'ylab gugurt yoqib yurish",
          "Chiqindilarni qo'lda hidlab ko'rish"
        ],
        "correct": 0,
        "hint": "Lazerli datchiklar bir necha santimetr aniqlikda metan sizayotgan yoriqlarni darhol topib beradi."
      },
      {
        "id": "gis-7",
        "title": "Ko'p Yillik Xaritalar Solishtiruvi (Change Detection)",
        "param": "2020-yil sun'iy yo'ldosh xaritasi vs 2026-yil xaritasi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"35\" width=\"120\" height=\"60\" rx=\"8\" fill=\"#1e293b\"/><text x=\"140\" y=\"60\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2020: 4 Gektar</text><text x=\"140\" y=\"78\" fill=\"#94a3b8\" font-size=\"9\" text-anchor=\"middle\">Chegara bo'yicha</text><text x=\"240\" y=\"70\" fill=\"#ef4444\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"270\" y=\"35\" width=\"150\" height=\"60\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"345\" y=\"60\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2026: 11 Gektar!</text><text x=\"345\" y=\"78\" fill=\"white\" font-size=\"9\" text-anchor=\"middle\">+7 Ga Noqonuniy Egallangan</text></svg>",
        "question": "Chiqindixona egasi chegara buzilmagan desa, kosmik arxiv suratlari qanday isbotlaydi?",
        "options": [
          "O'tgan 5 yillik yuqori aniqlikdagi multispektral suratlarni ustma-ust qo'yib (Change Detection) noqonuniy kengaygan gektarlarni isbotlash",
          "Eski qog'oz xaritaga qarab bahslashish",
          "Chiqindixona egasining aytganiga ishonish"
        ],
        "correct": 0,
        "hint": "Sun'iy yo'ldosh arxivi o'chmas raqamli dalildir; yer maydonining yillar davomida qanday o'zgarganini sudga taqdim etadi."
      },
      {
        "id": "gis-8",
        "title": "Tashlab Ketilgan Toksik Asbest Chiqindilari",
        "param": "Tarkibi: Xrizotil asbest tolalari (O'pka saratoni omili)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"180\" y=\"30\" width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Asbest Shiferlar</text><text x=\"250\" y=\"75\" fill=\"#f87171\" font-size=\"10\" text-anchor=\"middle\">Kanserogen Tolalar</text><text x=\"250\" y=\"90\" fill=\"#38bdf8\" font-size=\"9\" text-anchor=\"middle\">Spektral oqlik piki</text></svg>",
        "question": "Eski tashlandiq binolar buzilganda asbest chiqindisi dashtga tashlab ketilgan. Qanday topiladi?",
        "options": [
          "Asbest mineralining quyosh nuri ostidagi o'ziga xos ultra-oq spektral qaytarishi va datchiklar yordamida",
          "U yerni haydab paxta ekib yuborish bilan",
          "Asbestni qo'lda ushlab hidlab ko'rish bilan"
        ],
        "correct": 0,
        "hint": "Asbest tolalari shamolda uchib havoga tarqaladi; kosmik aniqlash zudlik bilan polimer germetik plyonkaga o'rash imkonini beradi."
      },
      {
        "id": "gis-9",
        "title": "GIS Sanitar Qatlamlari va Aholi Maktablari",
        "param": "Qonuniy talab: Chiqindixona maktabdan kamida 1000m uzoq bo'lishi shart",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"200\" cy=\"65\" r=\"35\" fill=\"#7f1d1d\" opacity=\"0.3\"/><circle cx=\"200\" cy=\"65\" r=\"10\" fill=\"#ef4444\"/><circle cx=\"310\" cy=\"65\" r=\"10\" fill=\"#3b82f6\"/><line x1=\"200\" y1=\"65\" x2=\"310\" y2=\"65\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"255\" y=\"55\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Masofa: 420m (Buzilish!)</text><text x=\"200\" y=\"115\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">GIS Bufer Zonasi Tahlili</text></svg>",
        "question": "GIS tizimida noqonuniy poligon maktabdan atigi 420 metr masofadaligi aniqlandi. Huquqiy qaror:",
        "options": [
          "Sanitar qonunchilik qo'pol buzilganligi sababli chiqindixonani zudlik bilan to'xtatish va tozalab ko'chirish talabnomasi",
          "Maktabni boshqa joyga ko'chirish",
          "Hech qanday chora ko'rmaslik"
        ],
        "correct": 0,
        "hint": "GIS bufer zonalari (Buffer Analysis) qonuniy masofalar buzilganini millisekundlarda xaritada qizil rang bilan belgilab beradi."
      },
      {
        "id": "gis-10",
        "title": "Yerosti Yonishi (Smoldering Fire) Xavfi",
        "param": "Poligon chuqurligida havosiz yonish harorati: 140°C",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"150\" y=\"30\" width=\"200\" height=\"70\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#f59e0b\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fcd34d\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Yerosti Yonishi: 140°C 🔥</text><text x=\"250\" y=\"75\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Termal infraqizil dron fosh etdi</text><text x=\"250\" y=\"90\" fill=\"#fca5a5\" font-size=\"9\" text-anchor=\"middle\">O'pirilish va zaharli gaz otilishi arafasida</text></svg>",
        "question": "Ustidan qarab bilinmaydigan, ammo ichkarida 140°C da tutab yonayotgan poligon qanday qutqariladi?",
        "options": [
          "Yonayotgan chuqurlikka azot (N2) gazi yoki suvli bentonit gil suspenziyasi haydab havo kirishini butunlay bo'g'ish",
          "Chuqurlikka benzin quyish",
          "Ustidan olov yoqib ko'rish"
        ],
        "correct": 0,
        "hint": "Yerosti yonishiga oddiy suv quyish bug' portlashiga olib keladi, faqat kislorod kirishini to'suvchi gilli bo'g'ish qo'llaniladi."
      }
    ]
  },
  "13": {
    "id": 13,
    "title": "13. Kompost Master: C/N Balansi",
    "badge": "Biologiya",
    "icon": "fa-seedling",
    "color": "lime",
    "category": "Saralash va Qayta ishlash",
    "xp": 190,
    "desc": "Jigarrang (Uglerod) va Yashil (Azot) chiqindilarni 30:1 nisbatda qorishtirib bio-gumus oling.",
    "scenarios": [
      {
        "id": "cmp-1",
        "title": "Ideal C:N Nisbati (30:1 Balansi)",
        "param": "Jigarrang (Uglerod C): Somon, qipiq | Yashil (Azot N): Oziq-ovqat, go'ng",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"70\" y=\"35\" width=\"160\" height=\"60\" rx=\"6\" fill=\"#78350f\"/><text x=\"150\" y=\"60\" fill=\"#fcd34d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">30 qism Uglerod (C)</text><text x=\"150\" y=\"78\" fill=\"#fef08a\" font-size=\"10\" text-anchor=\"middle\">Quruq xazon / Somon</text><text x=\"250\" y=\"70\" fill=\"#10b981\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\">:</text><rect x=\"270\" y=\"35\" width=\"160\" height=\"60\" rx=\"6\" fill=\"#047857\"/><text x=\"350\" y=\"60\" fill=\"#a7f3d0\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1 qism Azot (N)</text><text x=\"350\" y=\"78\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Oshxona chiqindisi</text></svg>",
        "question": "Mikroorganizmlar tez va hidsiz bio-gumus hosil qilishi uchun C:N (Uglerod/Azot) nisbati qanday bo'lishi kerak?",
        "options": [
          "Taxminan 25:1 dan 30:1 gacha — ya'ni 3 hissa quruq jigarrang materialga 1 hissa yangi yashil massa",
          "1:100 qilib faqat go'sht tashlash kerak",
          "Faqat polietilen paketlar aralashtirish kerak"
        ],
        "correct": 0,
        "hint": "30:1 nisbatida bakteriyalar ugleroddan energiya oladi va azotdan o'z hujayra oqsilini quradi."
      },
      {
        "id": "cmp-2",
        "title": "Termofil Faza Harorati (55°C - 65°C)",
        "param": "Uyum markazidagi harorat: 62°C | Patogenlar nobud bo'lmoqda",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"250\" cy=\"65\" r=\"40\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"60\" fill=\"#fcd34d\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">62°C</text><text x=\"250\" y=\"80\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Termofil Faza</text><text x=\"250\" y=\"115\" fill=\"#34d399\" font-size=\"10\" text-anchor=\"middle\">Begona o't urug'lari va bakteriyalar zararsizlanadi</text></svg>",
        "question": "Kompost uyumi ichidagi harorat nega 55-65°C gacha qizishi o'ta muhim?",
        "options": [
          "Ushbu haroratda begona o't urug'lari, gelmint tuxumlari va kasallik qo'zg'atuvchi bakteriyalar 100% nobud bo'ladi",
          "Chunki u yerda yong'in chiqishi kerak",
          "Harorat oshishi kompostni buzadi"
        ],
        "correct": 0,
        "hint": "Sanitariya talabiga ko'ra kompost uyumi kamida 3 kun 55°C dan yuqori turishi toza o'g'it olishning kafolatidir."
      },
      {
        "id": "cmp-3",
        "title": "O'tkir Ammiak (NH3) Hidi Chiqishi",
        "param": "Muammo: Uyumdan achchiq ammiak hidi kelmoqda | Sabab: Azot ko'p",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"170\" y=\"30\" width=\"160\" height=\"70\" rx=\"8\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#fca5a5\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">NH3 Ammiak Hidi ⚠️</text><text x=\"250\" y=\"75\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\">Azot ortib ketgan (C/N past)</text><text x=\"250\" y=\"90\" fill=\"#fcd34d\" font-size=\"9\" text-anchor=\"middle\">Zudlik bilan quruq somon/qipiq qo'shish!</text></svg>",
        "question": "Kompost uyumidan o'tkir ammiak hidi kela boshladi. Bu nimadan darak beradi va nima qilish kerak?",
        "options": [
          "Azot (yashil go'ng/oziq-ovqat) ko'payib ketgan; zudlik bilan quruq somon, qipiq yoki karton qo'shib aralashtirish kerak",
          "Uyumga ko'proq go'sht va tuxum tashlash kerak",
          "Uyum ustiga xlor sepish kerak"
        ],
        "correct": 0,
        "hint": "Uglerodli materiallar (qipiq, xazon) ortiqcha azotni bog'lab, qimmatbaho o'g'it elementlarini saqlab qoladi."
      },
      {
        "id": "cmp-4",
        "title": "Anaerob Chirindi va Vodorod Sulfid (H2S)",
        "param": "Muammo: Chirigan tuxum hidi | Kislorod yetishmasligi (O2 < 5%)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"160\" y=\"30\" width=\"180\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Aeratsiya Yetishmaydi</text><text x=\"250\" y=\"75\" fill=\"#f87171\" font-size=\"10\" text-anchor=\"middle\">Anaerob sharoit (Kislorodsiz)</text><text x=\"250\" y=\"90\" fill=\"#34d399\" font-size=\"9\" text-anchor=\"middle\">Ushbu uyumni vilkalar bilan ag'darish shart</text></svg>",
        "question": "Kompostdan sasigan tuxum hidi kelsa va ichi qorayib ketsa, bunga nima sabab bo'lgan?",
        "options": [
          "Kislorod yetishmasligi sababli anaerob chirish boshlangan; uyumni zudlik bilan ag'darib havo berish (aeratsiya) kerak",
          "Bakteriyalar juda ko'p kislorod olganidan",
          "Uyumga juda ko'p quruq xazon solinganidan"
        ],
        "correct": 0,
        "hint": "Aerob bakteriyalar kislorod bor joyda hidsiz ishlaydi; havo yetishmasa sassiq anaerob gazlar ajraladi."
      },
      {
        "id": "cmp-5",
        "title": "Optimal Namlik Darajasi (50% - 60% Siqish Testi)",
        "param": "Kaftda siqqanda: Suv tomchilamaydi, lekin nam quyuq sharcha bo'lib qoladi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"250\" cy=\"65\" r=\"35\" fill=\"#0284c7\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"250\" y=\"60\" fill=\"white\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">55%</text><text x=\"250\" y=\"78\" fill=\"#e0f2fe\" font-size=\"9\" text-anchor=\"middle\">Optimal Namlik</text><text x=\"250\" y=\"115\" fill=\"#38bdf8\" font-size=\"10\" text-anchor=\"middle\">Siqqanda suv oqmasligi, ammo kaft nam bo'lishi kerak</text></svg>",
        "question": "Kompostdagi namlik qanday tekshiriladi va ideal namlik qancha bo'lishi kerak?",
        "options": [
          "Namlik 50-60% bo'lishi kerak (kaftda siqqanda suv tommasdan nam sharcha bo'lib turishi - siqilgan gubka kabi)",
          "Quruq chang holatida 5% bo'lishi kerak",
          "Suvda suzib yuradigan darajada 95% bo'lishi kerak"
        ],
        "correct": 0,
        "hint": "Namlik 40% dan tushsa bakteriyalar faoliyati to'xtaydi, 65% dan oshsa havo yo'llari suvga to'lib chirish boshlanadi."
      },
      {
        "id": "cmp-6",
        "title": "Vermikompost: Kaliforniya Qizil Chuvalchangi",
        "param": "Harorat: 20°C - 25°C ga tushdi | Chuvalchanglar bio-gumus yaratmoqda",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"160\" y=\"30\" width=\"180\" height=\"70\" rx=\"8\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Eisenia Fetida Chuvalchangi</text><text x=\"250\" y=\"75\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">Koprolit (Toza Bio-Gumus)</text><text x=\"250\" y=\"90\" fill=\"#ffffff\" font-size=\"9\" text-anchor=\"middle\">O'sish stimulyatori va fermentlar</text></svg>",
        "question": "Kompost uyumi sovigach (25°C) unga qizil chuvalchanglar solinsa nima sodir bo'ladi?",
        "options": [
          "Chuvalchanglar organikani yeb eng yuqori sifatli fermentlarga boy 'Koprolit' (Bio-gumus) o'g'itiga aylantiradi",
          "Chuvalchanglar kompostni zaharli qilib qo'yadi",
          "Ular barcha organikani yo'q qilib tashlaydi"
        ],
        "correct": 0,
        "hint": "Vermikompost oddiy kompostdan 4-8 barobar unumdor bo'lib, o'simlik ildizini barcha kasalliklardan asraydi."
      },
      {
        "id": "cmp-7",
        "title": "Go'sht va Sut Mahsulotlarini Cheklash",
        "param": "Ochiq kompost uyumiga yog'li go'sht va pishloq tashlash mumkinmi?",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><circle cx=\"150\" cy=\"65\" r=\"25\" fill=\"#7f1d1d\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"150\" y=\"65\" fill=\"white\" font-size=\"16\" text-anchor=\"middle\">🥩 ✕</text><text x=\"320\" y=\"60\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Ochiq kompostga go'sht taqiqlanadi!</text><text x=\"320\" y=\"80\" fill=\"#94a3b8\" font-size=\"10\" text-anchor=\"middle\">Kalamush, chivin va zaharli chirishni chaqiradi</text></svg>",
        "question": "Nega ochiq bog' kompostiga yog'li go'sht, baliq va sut qoldiqlari solish tavsiya etilmaydi?",
        "options": [
          "Yog'lar havo kirishini to'sib chirindi hid chiqaradi va kemiruvchilar (kalamushlar) hamda chivinlarni jalb qiladi",
          "Chunki go'sht hech qachon chirimaydi",
          "Chunki u o'g'itni qora rangga bo'yab qo'yadi"
        ],
        "correct": 0,
        "hint": "Hayvon yog'lari va go'sht faqat maxsus yopiq Bokashi fermentatorlarida yoki biogaz reaktorlarida utilizatsiya qilinadi."
      },
      {
        "id": "cmp-8",
        "title": "Kompost Uyumi Minimal O'lchami (1m x 1m x 1m)",
        "param": "Hajm: 1 metr kub (minimal kritik massa)",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"190\" y=\"30\" width=\"120\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">1 m³ Hajm</text><text x=\"250\" y=\"75\" fill=\"#fcd34d\" font-size=\"10\" text-anchor=\"middle\">Issiqlikni saqlovchi massa</text><text x=\"250\" y=\"90\" fill=\"#94a3b8\" font-size=\"8\" text-anchor=\"middle\">Kichik uyumlar tez sovib qoladi</text></svg>",
        "question": "Kompost uyumi nega 1 metr kubdan kichik bo'lmasligi kerak?",
        "options": [
          "Kichik uyumlar hosil bo'lgan biologik issiqlikni saqlay olmaydi va tez sovib, termofil bosqichga chiqa olmaydi",
          "Chunki qonunda kichik uyumlar taqiqlangan",
          "Chunki kichik uyumga chuvalchang sig'maydi"
        ],
        "correct": 0,
        "hint": "1 m x 1 m x 1 m o'lchami tashqi sovuq havoga qaramay markazda 60°C issiqlikni saqlash uchun ideal termal massadir."
      },
      {
        "id": "cmp-9",
        "title": "Yetilgan Bio-Gumus Sifatini Tekshirish (Solvita Testi)",
        "param": "Rangi: Qoramtir-jigarrang | Hidi: Nam o'rmon tuprog'i hidi",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"150\" y=\"30\" width=\"200\" height=\"70\" rx=\"8\" fill=\"#047857\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"250\" y=\"55\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Yetilgan Qora Oltin (Gumus)</text><text x=\"250\" y=\"75\" fill=\"white\" font-size=\"10\" text-anchor=\"middle\">Yomg'irdan keyingi toza o'rmon hidi</text><text x=\"250\" y=\"90\" fill=\"#a7f3d0\" font-size=\"9\" text-anchor=\"middle\">Solvita Index = 8 (Barqaror)</text></svg>",
        "question": "Kompostning to'liq yetilganini va o'simlik ildizini kuydirmasligini qanday bilish mumkin?",
        "options": [
          "Uyum to'liq sovigan, rangi qora-jigarrang bir jinsli bo'lib, xushbo'y yangi o'rmon tuprog'i hidi keladi",
          "Uyumdan kuchli achchiq tutun chiqib tursa",
          "Uyumda hali butun pomidor va kartoshkalar ko'rinib tursa"
        ],
        "correct": 0,
        "hint": "Chala pishgan kompost o'simlik ildizidagi kislorodni tortib oladi, faqat to'liq yetilgan gumus o'simlikni oziqlantiradi."
      },
      {
        "id": "cmp-10",
        "title": "Xomashyoni Maydalashning (Shredding) Samarasi",
        "param": "Fraksiya: 2-5 sm gacha maydalash | Tezlik: 3 barobar tez",
        "svg": "<svg viewBox=\"0 0 500 130\" class=\"w-full h-auto rounded-xl bg-slate-950 border border-slate-800\"><rect x=\"80\" y=\"40\" width=\"130\" height=\"50\" rx=\"6\" fill=\"#334155\"/><text x=\"145\" y=\"65\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Yirik shox-shabba (2 yil)</text><text x=\"245\" y=\"70\" fill=\"#10b981\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">→</text><rect x=\"275\" y=\"40\" width=\"150\" height=\"50\" rx=\"6\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"350\" y=\"62\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">2-5 sm Shreder (2 oy)</text><text x=\"350\" y=\"78\" fill=\"#a7f3d0\" font-size=\"9\" text-anchor=\"middle\">6 barobar tezroq chirish</text></svg>",
        "question": "Qalin daraxt shoxlari va poyalarni maydalab kompostga solish nimasi bilan foydali?",
        "options": [
          "Bakteriyalar uchun aloqa yuzasi yuzlab barobarga oshadi va kompostlash vaqti 2 yildan 2-3 oyga qisqaradi",
          "Chunki maydalanmagan shoxlar kompost idishini teshadi",
          "Faqat tashish oson bo'lishi uchun"
        ],
        "correct": 0,
        "hint": "Shrederdan o'tgan mayda fraksiya namlik va issiqlikni bir tekis taqsimlab, fermentatsiyani maksimal tezlashtiradi."
      }
    ]
  }
};
