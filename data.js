// Sayt matnlari shu faylda. Xizmat, filial yoki yangilik qo'shish uchun faqat shu faylni tahrirlang.

// Aloqa uchun faqat qisqa raqam va bitta Telegram ko'rsatiladi.
const CONTACT = {
  short: "1832",
  telegram: { name: "@asrbux_21", url: "https://t.me/asrbux_21" },
  hours: "8:00–18:00"
};

// Manzil matnlari kompaniyaning "Bizning manzillar" xabaridan olingan.
// map — xaritadagi aniq nuqta (kenglik,uzunlik). link — "Xaritada ochish" tugmasi ochadigan Google Maps havolasi.
const BRANCHES = [
  { name: "Bosh ofis — Urgut", landmark: "Urgut Davlat xizmatlari markazi (Yagona darcha) ro'parasida", map: "39.4286881,67.2387248", link: "https://maps.app.goo.gl/34iFWc2sx3ciwDHdA" },
  { name: "Samarqand ofisi", landmark: "Samarqand shahar Davlat xizmatlari markazi (Yagona darcha) pastki qismida", map: "39.6472335,66.9342426", link: "https://maps.app.goo.gl/TFsX7PY13gq6Wyv7A" },
  { name: "Pastdarg'om ofisi", landmark: "Pastdarg'om Davlat xizmatlari markazi (Yagona darcha) ro'parasida", map: "39.7112222,66.6693611", link: "https://maps.app.goo.gl/tPgWMcPjtnra76Be6" }
];

// Birinchi ekrandagi doira: o'rtada logo, atrofida shu 8 yo'nalish (tepadan boshlab, soat mili bo'yicha).
// 3-o'rin doiraning o'ng yoni, 7-o'rin chap yoni — u yerda joy tor, shuning uchun qisqa nom qo'ying.
// to — bosilganda ochiladigan sahifa.
const HUB = [
  { label: "Online xizmatlar", icon: "screen", to: "#/s/xizmatlar" },
  { label: "Buxgalteriya", icon: "calc", to: "#/yonalish/buxgalteriya" },
  { label: "Pechat", icon: "stamp", to: "#/yonalish/pechat-kassa" },
  { label: "Kassa apparat", icon: "kassa", to: "#/xizmat/kassa-sotish" },
  { label: "Yagona darcha xizmatlari", icon: "bank", to: "#/yonalish/yagona-darcha" },
  { label: "Auksion", icon: "gavel", to: "#/yonalish/auksion" },
  { label: "Soliq", icon: "doc", to: "#/yonalish/soliq" },
  { label: "Tarjimonlik", icon: "globe", to: "#/yonalish/apostil" }
];

const WHY = [
  { icon: "pin", title: "Davlat xizmatlari markazi yonida", text: "Bosh ofis — Urgut Davlat xizmatlari markazi (Yagona darcha) ro'parasida. Samarqandda — markazning pastki qismida. Pastdarg'omda — markaz ro'parasida." },
  { icon: "bolt", title: "Navbatsiz", text: "Navbatda turmaysiz. Hujjatni topshirasiz, qolganini biz hal qilamiz." },
  { icon: "shield", title: "Qonuniy kafolat", text: "Har bir hujjat amaldagi qonunchilik asosida tayyorlanadi. Jarima va tekshiruvdan xotirjam bo'lasiz." }
];

// Har bir xizmat: id, n — nomi, d — bu nima, k — kimga kerak, h — hujjatlar, q — qidiruv uchun qo'shimcha so'zlar
const DIRECTIONS = [
  {
    id: "buxgalteriya", icon: "calc", title: "Buxgalteriya xizmatlari",
    tags: ["Hisob yuritish", "Hisobni tiklash", "Buxgalteriya dasturi"],
    short: "Korxona va YaTT hisobini yuritamiz, tiklaymiz, buxgalteriya dasturida ishlaymiz.",
    hook: "Hisobotlar va buxgalteriya bosh og'riqlaridan xalos bo'ling.",
    services: [
      { id: "hisob-yuritish", n: "Buxgalteriya hisobini yuritish", d: "Korxonangiz yoki YaTTingizning kirim-chiqimi, oylik va hisobotlarini har oy biz yuritamiz. Sizga alohida buxgalter yollash shart emas.", k: "Korxona egalari va YaTTlar, ayniqsa o'z buxgalteri bo'lmaganlar.", h: ["Rahbarning pasporti yoki ID-kartasi", "Guvohnoma va ustav (korxona uchun)", "Bank ko'chirmalari", "Shartnoma, hisob-faktura va boshqa birlamchi hujjatlar", "Elektron raqamli imzo (ERI)"], q: "buxgalter hisob-kitob korxona yatt oylik balans бухгалтер бухгалтерия" },
      { id: "hisob-tiklash", n: "Buxgalteriya hisobini tiklash", d: "Hisob-kitob chalkashib ketgan yoki bir necha oy yuritilmagan bo'lsa, hammasini boshidan tartibga keltiramiz.", k: "Hisoboti kechikkan, buxgalteri ketib qolgan yoki hujjatlari chalkash korxona va YaTTlar.", h: ["Rahbarning pasporti yoki ID-kartasi", "O'tgan davr bank ko'chirmalari", "Bor bo'lgan shartnoma va hisob-fakturalar", "Oldin topshirilgan hisobotlar (bo'lsa)", "Elektron raqamli imzo (ERI)"], q: "tiklash chalkash eski hisobot qarz восстановление" },
      { id: "buxgalteriya-dasturi", n: "Buxgalteriya dasturi bilan ishlash", d: "Hisobingizni buxgalteriya dasturida yuritamiz: ma'lumot kiritish, sozlash va hisobotlarni chiqarish.", k: "Hisobini dasturda yuritadigan yoki dasturga o'tmoqchi bo'lgan korxonalar.", h: ["Korxona rekvizitlari", "Dastur bazasi (mavjud bo'lsa)", "Birlamchi hujjatlar", "Elektron raqamli imzo (ERI)"], q: "1s 1с 1c dastur baza программа" }
    ]
  },
  {
    id: "soliq", icon: "doc", title: "Soliq xizmatlari",
    tags: ["Hisobot", "Patent", "Ustav"],
    short: "Hisobot topshirish, patent, ustav, tekshiruvdan oldingi tahlil.",
    hook: "Tekshiruv va jarimalardan oldin xatolarni topamiz.",
    services: [
      { id: "soliq-hisobot", n: "Soliq hisobotlarini topshirish", d: "Soliq hisobotlaringizni to'g'ri to'ldirib, muddatida topshiramiz. Kechikish va jarima bo'lmaydi.", k: "Korxonalar, YaTTlar va hisobot topshirishi kerak bo'lgan har bir kishi.", h: ["Pasport yoki ID-karta", "Elektron raqamli imzo (ERI)", "Hisobot davri bo'yicha bank ko'chirmasi", "Kirim-chiqim hujjatlari"], q: "soliq hisobot deklaratsiya otchet налог отчет декларация" },
      { id: "ijara-shartnoma", n: "Ijara shartnomalari", d: "Uy, do'kon yoki bino ijarasi bo'yicha shartnomani tayyorlab, soliq organida hisobga qo'yamiz.", k: "Uy-joy yoki binosini ijaraga beruvchilar va ijaraga oluvchilar.", h: ["Ikkala tomonning pasporti yoki ID-kartasi", "Ko'chmas mulk hujjati (kadastr)", "Elektron raqamli imzo (ERI)"], q: "ijara arenda kvartira dokon аренда договор" },
      { id: "patent", n: "Patent ochish va yopish", d: "Faoliyatingiz uchun patent ochamiz yoki kerak bo'lmay qolgan patentni yopamiz.", k: "Kichik savdo va xizmat ko'rsatish bilan shug'ullanuvchilar.", h: ["Pasport yoki ID-karta", "Elektron raqamli imzo (ERI)", "Faoliyat manzili haqida ma'lumot"], q: "patent ochish yopish патент" },
      { id: "ustav", n: "Ustav hujjatlarini tayyorlash va o'zgartirish", d: "Korxona ustavini tayyorlaymiz yoki unga o'zgartirish kiritamiz: manzil, rahbar, ta'sischi, faoliyat turi.", k: "Yangi korxona ochayotgan yoki korxona ma'lumotlarini o'zgartirayotganlar.", h: ["Ta'sischilarning pasporti yoki ID-kartasi", "Amaldagi ustav va guvohnoma", "Ta'sischilar qarori", "Elektron raqamli imzo (ERI)"], q: "ustav tasischi direktor manzil ozgartirish устав учредитель" },
      { id: "tekshiruv-oldi", n: "Tekshiruvdan oldin xulosa va maslahat", d: "Kameral yoki audit tekshiruvidan oldin hujjatlaringizni ko'rib chiqamiz, xatolarni topib, qanday tuzatishni aytamiz.", k: "Soliqdan xat kelgan yoki tekshiruv kutayotgan korxona va YaTTlar.", h: ["Soliqdan kelgan xabarnoma (bo'lsa)", "Topshirilgan hisobotlar", "Bank ko'chirmalari", "Shartnoma va hisob-fakturalar"], q: "kameral audit tekshiruv jarima xabarnoma камерал аудит проверка штраф" },
      { id: "soliq-maslahat", n: "Soliq maslahatlari", d: "Qaysi soliqni, qancha va qachon to'lash kerakligini sodda tilda tushuntiramiz.", k: "Ish boshlayotgan tadbirkorlar va soliq bo'yicha savoli bor har bir kishi.", h: ["Pasport yoki ID-karta", "Savolingizga tegishli hujjatlar"], q: "maslahat konsultatsiya qqs aylanma soliq консультация ндс" }
    ]
  },
  {
    id: "12-foiz", icon: "refund", title: "Daromad solig'ining 12% ini qaytarish",
    tags: ["Ipoteka", "Kontrakt", "Xususiy maktab"],
    short: "Ipoteka, kontrakt va xususiy maktab to'lovidan pulingizni qaytarib oling.",
    hook: "To'langan pulingizning 12% ini davlatdan rasman qaytarib oling!",
    services: [
      { id: "ipoteka", n: "Ipoteka olganlar uchun soliqni qaytarish", d: "Ipoteka krediti bo'yicha to'lovlaringiz uchun oyligingizdan ushlangan daromad solig'ini qaytarib olishga yordam beramiz.", k: "Ipoteka krediti olgan va rasmiy oylik oladiganlar.", h: ["Pasport yoki ID-karta", "Ipoteka shartnomasi", "Bankdan to'lovlar haqida ma'lumotnoma", "Uy-joy hujjati (kadastr)", "Bank kartasi raqami"], q: "ipoteka kredit subsidiya uy 12 foiz qaytarish ипотека возврат" },
      { id: "kontrakt", n: "Kontrakt to'lovidan soliqni qaytarish", d: "O'qish uchun to'lagan kontrakt pulingizdan 12% ini qaytarib olasiz. O'zingiz, farzandingiz yoki turmush o'rtog'ingiz uchun to'lagan bo'lsangiz ham bo'ladi.", k: "Kontrakt to'laydigan talabalar va ularning ishlaydigan ota-onalari.", h: ["To'lovchining pasporti yoki ID-kartasi", "O'qish shartnomasi (kontrakt)", "To'lov kvitansiyalari", "Talabaning pasporti, qarindoshlikni tasdiqlovchi hujjat", "Bank kartasi raqami"], q: "kontrakt talaba oqish universitet institut 12 foiz контракт студент" },
      { id: "xususiy-maktab", n: "Xususiy maktab to'lovidan soliqni qaytarish", d: "Farzandingizning xususiy maktab yoki bog'chasi uchun to'lagan pulingizdan soliqni qaytarib olasiz.", k: "Farzandi xususiy maktabda o'qiydigan, rasmiy oylik oladigan ota-onalar.", h: ["Ota yoki onaning pasporti yoki ID-kartasi", "Maktab bilan tuzilgan shartnoma", "To'lov kvitansiyalari", "Farzandning tug'ilganlik guvohnomasi", "Bank kartasi raqami"], q: "xususiy maktab bogcha farzand 12 foiz частная школа" }
    ]
  },
  {
    id: "yagona-darcha", icon: "bank", title: "Yagona darcha xizmatlari",
    tags: ["YaTT ochish", "Tonirovka", "Ishonchnoma"],
    short: "YaTT ochish, tonirovka, ishonchnoma va yana 700 dan ortiq xizmat.",
    hook: "Navbatlarsiz, bir joyda tez hal qiling.",
    more: "Bu ro'yxatda faqat eng ko'p so'raladiganlari. Yana 700 dan ortiq xizmat bor — keraklisini 1832 orqali so'rang.",
    services: [
      { id: "yatt-ochish", n: "YaTT va korxona ochish, yopish", d: "YaTT yoki MChJ ni ro'yxatdan o'tkazamiz. Kerak bo'lmay qolsa, qonuniy tartibda yopib beramiz.", k: "Ish boshlayotgan yoki faoliyatini to'xtatayotgan tadbirkorlar.", h: ["Pasport yoki ID-karta", "Elektron raqamli imzo (ERI)", "Korxona nomi va faoliyat turi", "Yuridik manzil"], q: "yatt mchj firma korxona ochish yopish royxat ип ооо открыть закрыть" },
      { id: "ishonchnoma", n: "Ishonchnoma (doverennost)", d: "Mashina haydash, hujjat olish yoki nomingizdan ish yuritish uchun ishonchnoma rasmiylashtiramiz.", k: "O'z ishini boshqa odamga ishonib topshirmoqchi bo'lganlar.", h: ["Ishonch bildiruvchining pasporti yoki ID-kartasi", "Ishonchli shaxsning pasport ma'lumotlari", "Mashina uchun: texpasport"], q: "ishonchnoma doverennost доверенность mashina" },
      { id: "tonirovka", n: "Tonirovka ruxsatnomasi", d: "Mashina oynalarini qoraytirish (tonirovka) uchun ruxsatnoma olib beramiz.", k: "Mashinasiga tonirovka qo'ymoqchi bo'lgan haydovchilar.", h: ["Pasport yoki ID-karta", "Texpasport", "Elektron raqamli imzo (ERI)"], q: "tonirovka toner oyna qoraytirish ruxsatnoma тонировка разрешение" },
      { id: "taksi", n: "Taksi litsenziyasi", d: "Taksi sifatida qonuniy ishlash uchun litsenziya olishga yordam beramiz.", k: "O'z mashinasida taksichilik qilmoqchi bo'lgan haydovchilar.", h: ["Pasport yoki ID-karta", "Haydovchilik guvohnomasi", "Texpasport", "Sug'urta polisi", "Texnik ko'rik ma'lumoti"], q: "taksi litsenziya yandex haydovchi такси лицензия" },
      { id: "oz-ozini-band", n: "O'z-o'zini band qilish", d: "O'zini o'zi band qilgan shaxs sifatida ro'yxatdan o'tkazamiz. Rasmiy ishlaysiz va ish stajingiz hisoblanadi.", k: "Usta, repetitor, tikuvchi, frilanser kabi o'zi uchun ishlaydiganlar.", h: ["Pasport yoki ID-karta", "O'z nomingizdagi telefon raqami"], q: "ozini ozi band self employed staj самозанятый" },
      { id: "sudlanmaganlik", n: "Sudlanmaganlik ma'lumotnomasi", d: "Sudlanmaganligingiz haqida rasmiy ma'lumotnoma olib beramiz.", k: "Ishga kirayotgan, chet elga ketayotgan yoki viza topshirayotganlar.", h: ["Pasport yoki ID-karta", "Elektron raqamli imzo (ERI) yoki telefon raqami"], q: "sudlanmaganlik malumotnoma spravka справка о несудимости" },
      { id: "qayta-jihozlash", n: "Qayta jihozlash ruxsatnomasi", d: "Mashinaga gaz qo'yish yoki tuzilishini o'zgartirish uchun ruxsatnoma rasmiylashtiramiz.", k: "Mashinasini qayta jihozlagan yoki jihozlamoqchi bo'lgan haydovchilar.", h: ["Pasport yoki ID-karta", "Texpasport", "O'rnatilgan jihoz hujjatlari"], q: "qayta jihozlash gaz metan propan pereoborudovanie переоборудование" },
      { id: "kadastr", n: "Kadastr xizmatlariga ariza", d: "Uy, yer yoki bino bo'yicha kadastr xizmatlariga arizani to'g'ri to'ldirib topshiramiz.", k: "Uy-joyini rasmiylashtirayotgan, sotayotgan yoki sotib olayotganlar.", h: ["Pasport yoki ID-karta", "Mulkka egalik hujjati", "Elektron raqamli imzo (ERI)"], q: "kadastr uy yer hujjat кадастр" }
    ]
  },
  {
    id: "auksion", icon: "gavel", title: "Auksion xizmatlari",
    tags: ["Avtoraqam", "Yer", "Ko'chmas mulk"],
    short: "Chiroyli avtoraqam, yer, uy va mashina auksionlarida qatnashamiz.",
    hook: "E-auksionda adashmasdan, to'g'ri qatnashing.",
    services: [
      { id: "avtoraqam", n: "Chiroyli avtoraqamlar", d: "Yoqqan avtoraqamingizni auksionda olishga yordam beramiz: ro'yxatdan o'tish, zakalat va savdoda qatnashish.", k: "Mashinasiga chiroyli raqam olmoqchi bo'lgan haydovchilar.", h: ["Pasport yoki ID-karta", "Elektron raqamli imzo (ERI)", "Texpasport"], q: "avtoraqam nomer chiroyli raqam 777 номер красивый" },
      { id: "auksion-dehqon", n: "E-auksion: dehqon xo'jaligi yerlari", d: "Dehqon xo'jaligi uchun yerni E-auksion orqali olishga yordam beramiz.", k: "Dehqonchilik uchun yer olmoqchi bo'lganlar.", h: ["Pasport yoki ID-karta", "Elektron raqamli imzo (ERI)"], q: "dehqon xojaligi yer auksion e-auksion земля" },
      { id: "auksion-mulk", n: "E-auksion: ko'chmas mulk", d: "Auksionga qo'yilgan uy, do'kon va binolarni sotib olishda hujjat ishlarini qilamiz.", k: "Bino yoki uy sotib olmoqchi bo'lgan fuqarolar va investorlar.", h: ["Pasport yoki ID-karta (korxona uchun guvohnoma)", "Elektron raqamli imzo (ERI)"], q: "kochmas mulk bino uy dokon auksion недвижимость" },
      { id: "auksion-avto", n: "E-auksion: avtotransport", d: "Auksionga qo'yilgan mashinalarni olishda ariza va savdo jarayonini yuritamiz.", k: "Auksiondan mashina olmoqchi bo'lganlar.", h: ["Pasport yoki ID-karta", "Elektron raqamli imzo (ERI)"], q: "avtotransport mashina avto auksion автомобиль" },
      { id: "auksion-yer", n: "E-auksion: yer uchastkalari", d: "Uy qurish yoki biznes uchun yer uchastkasini auksion orqali olishga yordam beramiz.", k: "Uy qurmoqchi yoki biznes uchun yer izlayotganlar.", h: ["Pasport yoki ID-karta (korxona uchun guvohnoma)", "Elektron raqamli imzo (ERI)"], q: "yer uchastka uy qurish auksion участок" }
    ]
  },
  {
    id: "apostil", icon: "globe", title: "Apostil va tarjimonlik",
    tags: ["Apostil", "Notarial tarjima", "Oddiy tarjima"],
    short: "Hujjatlaringizni chet el uchun tayyorlaymiz va tarjima qilamiz.",
    hook: "Chet elga ketyapsizmi? Hujjatlaringiz tayyor bo'lsin.",
    services: [
      { id: "apostil-xizmat", n: "Apostil", d: "Diplom, guvohnoma va ma'lumotnomalaringiz chet elda tan olinishi uchun apostil qo'ydirib beramiz.", k: "Chet elga o'qishga, ishga yoki yashashga ketayotganlar.", h: ["Pasport yoki ID-karta", "Apostil qo'yiladigan hujjatning asl nusxasi"], q: "apostil diplom chet el viza апостиль" },
      { id: "notarial-tarjima", n: "Notarial tarjima", d: "Hujjatni tarjima qilamiz va notarius tasdig'idan o'tkazamiz.", k: "Elchixona, viza yoki rasmiy idoralar uchun tarjima kerak bo'lganlar.", h: ["Tarjima qilinadigan hujjatning asl nusxasi", "Pasport yoki ID-karta"], q: "tarjima notarius notarial perevod нотариальный перевод" },
      { id: "oddiy-tarjima", n: "Oddiy tarjima", d: "Hujjat, shartnoma yoki matnni notarius tasdig'isiz, tez tarjima qilamiz.", k: "Tushunish yoki ichki foydalanish uchun tarjima kerak bo'lganlar.", h: ["Tarjima qilinadigan hujjat yoki matn (surati ham bo'ladi)"], q: "tarjima ingliz rus matn perevod перевод" }
    ]
  },
  {
    id: "pechat-kassa", icon: "stamp", title: "Pechat, shtamp va kassa apparatlari",
    tags: ["Pechat", "Shtamp", "Kassa apparati"],
    short: "Pechat tayyorlaymiz, kassa apparatini sotamiz va xizmat ko'rsatamiz.",
    hook: "Pechat ham, kassa ham bir joyda.",
    services: [
      { id: "pechat-shtamp", n: "Pechat va shtamp tayyorlash", d: "Korxona yoki YaTT uchun pechat va shtamp tayyorlaymiz.", k: "Yangi ochilgan korxonalar va pechati eskirgan yoki yo'qolganlar.", h: ["Rahbarning pasporti yoki ID-kartasi", "Guvohnoma nusxasi", "Pechat namunasi (bo'lsa)"], q: "pechat shtamp muhr печать штамп" },
      { id: "kassa-sotish", n: "Kassa apparatlarini sotish", d: "Onlayn kassa apparatini tanlab beramiz va soliqda ro'yxatdan o'tkazamiz.", k: "Do'kon, oshxona va xizmat ko'rsatish nuqtalari egalari.", h: ["Rahbarning pasporti yoki ID-kartasi", "Guvohnoma", "Savdo nuqtasi manzili", "Elektron raqamli imzo (ERI)"], q: "kassa apparat onlayn kassa chek касса ккм" },
      { id: "kassa-texnik", n: "Kassa apparatlariga texnik xizmat", d: "Kassa apparatingizni sozlaymiz, ta'mirlaymiz va doim ishlab turishini ta'minlaymiz.", k: "Kassa apparati ishlamay qolgan yoki xizmat shartnomasi kerak bo'lganlar.", h: ["Kassa apparati va uning hujjatlari", "Guvohnoma nusxasi"], q: "kassa tamir remont texnik xizmat ремонт кассы" }
    ]
  }
];

// Yangiliklar brandbookdagi formula bo'yicha: Sarlavha (hook) → Tanasi (body) → Chaqiruv (CTA)
const NEWS = [
  { id: "kontrakt-12", tag: "Talabalarga", hook: "Talabamisiz? Kontraktingizdan 12% pulingizni qaytarib olishni bilasizmi?", body: ["Kontrakt uchun to'lagan pulingizning 12% i daromad solig'idan qaytariladi. To'lovni o'zingiz yoki ota-onangiz qilgan bo'lsa ham bo'ladi.", "Asosiy shart: to'lovchi rasmiy ishlaydi va oyligidan soliq ushlanadi."], docs: ["Pasport yoki ID-karta", "O'qish shartnomasi", "To'lov kvitansiyalari"], link: "kontrakt" },
  { id: "navbat", tag: "Yagona darcha", hook: "Navbatda charchadingizmi?", body: ["YaTT ochish, tonirovka, ishonchnoma, sudlanmaganlik ma'lumotnomasi va yana 700 dan ortiq xizmat endi bir joyda.", "Filiallarimiz Davlat xizmatlari markazining yonida. Hujjatni olib keling, qolganini biz qilamiz."], docs: ["Pasport yoki ID-karta", "Xizmatga tegishli hujjatlar"], link: "yatt-ochish" },
  { id: "tekshiruv", tag: "Tadbirkorlarga", hook: "Soliqdan xat keldimi? Jarimadan oldin xatoni toping.", body: ["Kameral yoki audit tekshiruvidan oldin hujjatlaringizni ko'rib chiqamiz va xatolarni ko'rsatamiz.", "Xato oldindan tuzatilsa, jarima va ortiqcha tashvishdan qutulasiz."], docs: ["Soliqdan kelgan xabarnoma", "Topshirilgan hisobotlar", "Bank ko'chirmalari"], link: "tekshiruv-oldi" },
  { id: "pastdargom", tag: "Filial", hook: "Pastdarg'omda ham xizmatdamiz", body: ["Pastdarg'omdagi ofisimiz Davlat xizmatlari markazi (Yagona darcha) ro'parasida joylashgan.", "Barcha 7 yo'nalishdagi xizmatlar shu yerda ham ko'rsatiladi. Ish vaqti: 8:00–18:00."], docs: [], link: null }
];

// Bosh sahifadagi yuguruvchi qator
const TICKER = ["YaTT ochish", "Tonirovka", "Apostil", "12% qaytarish", "Soliq hisoboti", "Buxgalteriya", "Avtoraqam", "Notarial tarjima", "Kassa apparati", "Ishonchnoma", "Taksi litsenziyasi", "E-auksion", "Pechat va shtamp", "Kadastr"];

// "Siz kimsiz?" bo'limi. hook — brandbookdagi auditoriya shiorlari, services — xizmat id lari
const AUDIENCE = [
  { id: "tadbirkor", label: "Tadbirkorman", icon: "brief", hook: "Hisobotlar va buxgalteriya bosh og'riqlaridan xalos bo'ling.", text: "Buxgalteriya, soliq hisoboti va tekshiruvdan oldingi tahlilni bizga topshiring. Vaqtingiz biznesga qolsin.", services: ["hisob-yuritish", "soliq-hisobot", "tekshiruv-oldi", "yatt-ochish", "kassa-sotish"] },
  { id: "talaba", label: "Talabaman", icon: "cap", hook: "Kontraktingizdan 12% pulingizni qaytarib olishni bilasizmi?", text: "Kontrakt to'lovidan soliqni qaytarish hujjatlarini biz tayyorlaymiz. Chet elga o'qishga ketsangiz, apostil va tarjima ham shu yerda.", services: ["kontrakt", "apostil-xizmat", "notarial-tarjima"] },
  { id: "ota-ona", label: "Ota-onaman", icon: "users", hook: "To'langan pulingizning 12% ini davlatdan rasman qaytarib oling!", text: "Farzandingizning kontrakti, xususiy maktabi yoki ipotekangiz uchun to'lagan pulingizdan soliqni qaytarib olasiz.", services: ["xususiy-maktab", "kontrakt", "ipoteka"] },
  { id: "haydovchi", label: "Haydovchiman", icon: "car", hook: "Navbatlarsiz, bir joyda tez hal qiling.", text: "Tonirovka, taksi litsenziyasi, chiroyli raqam yoki ishonchnoma — mashinangizga tegishli hujjatlar bir joyda.", services: ["tonirovka", "taksi", "avtoraqam", "qayta-jihozlash", "ishonchnoma"] },
  { id: "chet-el", label: "Chet elga ketyapman", icon: "passport", hook: "Hujjatlaringiz chet elda ham tan olinsin.", text: "Diplom va ma'lumotnomalarga apostil qo'ydiramiz, tarjima qilamiz va notarius tasdig'idan o'tkazamiz.", services: ["apostil-xizmat", "notarial-tarjima", "sudlanmaganlik"] },
  { id: "investor", label: "Investorman", icon: "trend", hook: "E-auksionda adashmasdan, to'g'ri qatnashing.", text: "Yer, bino yoki avtotransport — auksionda qatnashish uchun ariza va hujjat ishlarini biz yuritamiz.", services: ["auksion-mulk", "auksion-yer", "auksion-dehqon", "auksion-avto"] }
];

// Brend missiyasidagi to'rtta muammo va bizning javobimiz
const PAINS = [
  { icon: "hourglass", pain: "Uzun navbatlar", fix: "Filiallarimizda navbat yo'q. Keldingiz — ishingiz boshlandi." },
  { icon: "alert", pain: "Soliq jarimalari", fix: "Hisobotlarni muddatida topshiramiz, xatolarni tekshiruvdan oldin topamiz." },
  { icon: "tangle", pain: "Chalkash hisob-kitob", fix: "Buxgalteriyangizni tartibga keltiramiz va har oy yuritib boramiz." },
  { icon: "stack", pain: "Murakkab byurokratiya", fix: "Qaysi hujjat qayerga kerakligini biz bilamiz. Sizga sodda tilda tushuntiramiz." }
];

const STEPS = [
  { icon: "phone", title: "Qo'ng'iroq qilish", text: "1832 ga qo'ng'iroq qiling yoki Telegramda yozing. Qaysi xizmat kerakligini ayting." },
  { icon: "doc", title: "Hujjatlarni taqdim etish", text: "Qaysi hujjat kerakligini aytamiz — siz ularni bizga taqdim etasiz." },
  { icon: "check", title: "Tayyor hujjatni olasiz", text: "Qolgan ishni biz qilamiz. Siz navbatda turmaysiz." }
];

const FAQ = [
  { q: "Xizmat narxi qancha?", a: "Narx xizmat turiga qarab har xil. Aniq narx va muddatni 1832 raqamiga qo'ng'iroq qilib bilib oling." },
  { q: "Qayerda joylashgansiz?", a: "Uchta ofisimiz bor. Bosh ofis — Urgut Davlat xizmatlari markazi (Yagona darcha) ro'parasida. Samarqand shahrida — markazning pastki qismida. Pastdarg'omda — markaz ro'parasida." },
  { q: "Ish vaqtingiz qanday?", a: "Filiallarimiz 8:00 dan 18:00 gacha ishlaydi." },
  { q: "Qaysi hujjatlarni olib kelishim kerak?", a: "Har bir xizmat sahifasida hujjatlar ro'yxati yozilgan. Adashmaslik uchun kelishdan oldin 1832 ga qo'ng'iroq qilib aniqlab oling." },
  { q: "Kerakli xizmatni saytdan topa olmadim. Nima qilay?", a: "Saytda eng ko'p so'raladigan xizmatlar yozilgan. Jami 1000 dan ortiq xizmat bor — keragini 1832 orqali so'rang." },
  { q: "Telegram orqali murojaat qilsam bo'ladimi?", a: "Ha. Telegramda @asrbux_21 ga yozing — savolingizga javob beramiz va keyingi qadamni aytamiz." }
];
