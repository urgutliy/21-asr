/* ===== Ikonlar (oq doira ichidagi chiziqli uslub) ===== */
const IC = {
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/><path d="M15 4a5 5 0 0 1 5 5M15 7.5A1.5 1.5 0 0 1 16.5 9"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  screen: '<rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M8.5 20h7M12 16.5V20M10 8.5l2.5 2.5-2.5 2.5"/>',
  arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16.2 9.5"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  bolt: '<path d="M13 3 5 13.5h6L10 21l9-11h-6.5L13 3z"/>',
  shield: '<path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.300-1.2 7.5-4.5 7.5-9V6L12 3z"/><path d="m9 12 2.2 2.2L15.2 10"/>',
  send: '<path d="M21 4 3 11l6 2.5L11.5 20 21 4z"/><path d="m9 13.5 5-4.5"/>',
  insta: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.7" cy="7.300" r=".6"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/>',
  doc: '<path d="M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4M9.5 16.5l5-5M9.8 11.8h.01M14.2 16.2h.01"/>',
  refund: '<path d="M4.5 12a7.5 7.5 0 1 0 2.300-5.4"/><path d="M4 4.5V8h3.5M9.5 14.5l5-5M9.8 9.8h.01M14.2 14.2h.01"/>',
  bank: '<path d="M3.5 9.5 12 4l8.5 5.5M5 9.5h14M6.5 9.5v8M10.2 9.5v8M13.8 9.5v8M17.5 9.5v8M4 20h16M5 17.5h14"/>',
  gavel: '<path d="m13.5 4.5 6 6M11 7l6 6M15.2 6.2l-3 3M9.5 12.5 4 18a1.400 1.400 0 0 0 2 2l5.5-5.5M12 20h8"/><path d="m10.5 8.5 5 5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.300 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  stamp: '<path d="M9.5 4.5a2.5 2.5 0 0 1 5 0c0 2-1.200 3-1.200 5.5h3.2a2.5 2.5 0 0 1 2.5 2.5V15H5v-2.5A2.5 2.5 0 0 1 7.5 10h3.2c0-2.5-1.200-3.5-1.200-5.5zM5 19.5h14"/>',
  brief: '<rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 12.5h17M12 11.5v2"/>',
  cap: '<path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5z"/><path d="M6.5 11.5V16c1.5 1.5 3.300 2.2 5.5 2.2s4-.7 5.5-2.2v-4.5M21.5 9.5V15"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 19.5c0-3.300 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17" cy="9" r="2.300"/><path d="M16 14.2c2.9-.3 5 1.6 5 4.300"/>',
  car: '<path d="M5 11l1.6-4.200a2 2 0 0 1 1.9-1.300h7a2 2 0 0 1 1.9 1.300L19 11"/><rect x="3" y="11" width="18" height="6" rx="2"/><path d="M6 17v2M18 17v2M7 14h.01M17 14h.01"/>',
  passport: '<rect x="5.5" y="3" width="13" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9.5 16.5h5"/>',
  trend: '<path d="M3.5 17 9 11.5l3.5 3.5 8-8"/><path d="M15 7h5.5v5.5"/>',
  hourglass: '<path d="M6.5 3.5h11M6.5 20.5h11M7.5 3.5c0 4.5 4.5 5 4.5 8.5s-4.5 4-4.5 8.5M16.5 3.5c0 4.5-4.5 5-4.5 8.5s4.5 4 4.5 8.5"/>',
  alert: '<path d="M12 4 2.8 19.5h18.400L12 4z"/><path d="M12 10v4.5M12 17.2h.01"/>',
  tangle: '<path d="M3 7h3.5c5 0 6 10 11 10H21M3 17h3.5c1.800 0 3-1.200 4.100-2.7M13.4 9.7C14.5 8.200 15.7 7 17.5 7H21"/><path d="m18.5 4.500 2.5 2.5-2.5 2.5M18.5 14.5 21 17l-2.5 2.5"/>',
  stack: '<path d="M12 3.5 3 8l9 4.5L21 8l-9-4.5z"/><path d="m3 12 9 4.5 9-4.5M3 16l9 4.5 9-4.5"/>'
};
const ic = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
// Logodagi qo'sh strelka belgisi
const MARK = '<svg class="mk" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h12v12h-4V7H9zM3 9h10v10H9.5v-6.5H3z"/></svg>';

// Registon chizmasi: har bir chiziq alohida "chiziladi"
const SKY_MID = ["M10 140H390", "M160 140V22H240V140", "M170 140V34H230V140", "M178 140V86Q178 58 200 44Q222 58 222 86V140", "M192 140V118Q192 108 200 104Q208 108 208 118V140"];
const SKY_SIDE = ["M30 140V34H42V140", "M27 34H45V28H27Z", "M30 28Q30 20 36 16Q42 20 42 28", "M36 16V10", "M42 78H160", "M42 107H160", "M83 78V64H119V78", "M81 64Q76 42 101 30Q126 42 121 64Z", "M101 23V64", "M91 37Q86 50 90 64", "M111 37Q116 50 112 64",
  ...[52, 88, 124].flatMap((x) => [`M${x} 104V92Q${x} 85 ${x + 12} 81Q${x + 24} 85 ${x + 24} 92V104Z`, `M${x} 140V122Q${x} 114 ${x + 12} 110Q${x + 24} 114 ${x + 24} 122V140`])];
const sky = (caption) => {
  let i = 0;
  const p = (d, t = "") => `<path pathLength="1" style="--i:${i++}"${t} d="${d}"/>`;
  return `<figure class="sky" data-r="draw"><svg viewBox="0 0 400 150" aria-hidden="true">${SKY_MID.map((d) => p(d)).join("")}${SKY_SIDE.map((d) => p(d) + p(d, ' transform="translate(400 0) scale(-1 1)"')).join("")}</svg><figcaption>${caption}</figcaption></figure>`;
};

const $ = (id) => document.getElementById(id);
const root = document.documentElement;
const app = $("app"), header = $("top"), nav = $("nav"), burger = $("burger"), progress = $("progress"), themeBtn = $("theme");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pad = (n) => String(n).padStart(2, "0");

/* ===== Qidiruv ===== */
const ALL = DIRECTIONS.flatMap((d) => d.services.map((s) => ({ ...s, dir: d })));
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
// o' / g' ning barcha yozilishlari bir xil qidirilsin: "o'zini", "oʻzini", "ozini"
const norm = (s) => s.toLowerCase().replace(/[ʻʼ’‘`']/g, "").replace(/\s+/g, " ").trim();
ALL.forEach((s) => { s.hay = norm(`${s.n} ${s.dir.title} ${s.q} ${s.d}`); });
const find = (q) => {
  const ws = norm(q).split(" ").filter(Boolean);
  return ws.length ? ALL.filter((s) => ws.every((w) => s.hay.includes(w))) : [];
};

/* ===== Takrorlanadigan qismlar ===== */
const SECTIONS = 9;
const words = (text, from = 0) => text.split(" ").map((w, i) => `<span class="w"><span style="--i:${from + i}">${w}</span></span>`).join(" ");
const callBtn = (cls = "") => `<a class="btn btn--call ${cls}" href="tel:${CONTACT.short}"><span class="ring">${ic("phone")}</span>${CONTACT.short} ga qo'ng'iroq qilish</a>`;
const head = ({ tag, n, title, lead, extra = "" }) => `
  <div class="head">
    <div class="head__top" data-r><span class="tag">${tag}</span><span class="head__idx">${pad(n)}<small> / ${pad(SECTIONS)}</small></span></div>
    <h2 class="h2" data-r>${title}</h2>
    <div class="head__side" data-r>${extra}${lead ? `<p class="lead">${lead}</p>` : ""}</div>
  </div>`;
const itemCard = (s, { dir = false, n = "", r = true } = {}) => `<a class="card item" href="#/xizmat/${s.id}"${r ? " data-r" : ""}>${n ? `<i>${n}</i>` : ""}<span><b>${s.n}</b><small>${dir ? s.dir.title : s.k}</small></span><span>${ic("arrow")}</span></a>`;
const stepsList = () => `<ol class="steps">${STEPS.map((s, i) => `<li class="step" data-r><span class="disc">${ic(s.icon)}</span><span class="step__n">${i + 1}-qadam</span><h3>${s.title}</h3><p>${s.text}</p></li>`).join("")}</ol>`;
const ctaBox = () => `<div class="cta" data-r><div><h2>Narx va muddatni ${CONTACT.short} orqali bilib oling</h2><p>Qo'ng'iroq qiling — hammasini telefonda tushuntiramiz.</p></div>${callBtn("btn--light")}<a class="btn btn--ghost" href="${CONTACT.telegram[0].url}" target="_blank" rel="noopener">${ic("send")}Telegram</a></div>`;

// Doira atrofidagi yo'nalishlar joyi, foizda: [telefon x, y, kompyuter x, y]
const HUB_POS = [[50, 7, 50, 6], [77, 22, 83, 20], [76, 78, 83, 80], [50, 93, 50, 94], [24, 78, 17, 80], [23, 22, 17, 20]];
const hubPos = (i, n) => {
  if (n === HUB_POS.length) return HUB_POS[i];
  const t = (-90 + (i * 360) / n) * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
  return [50 + 30 * c, 50 + 43 * s, 50 + 34 * c, 50 + 44 * s].map((v) => +v.toFixed(1));
};
const hub = () => `
  <div class="hub" id="hub">
    <span class="hub__glow"></span>
    <span class="hub__r hub__r--1"></span><span class="hub__r hub__r--2"></span><span class="hub__r hub__r--3"></span>
    <span class="hub__sat"><i></i><i></i><i></i></span>
    <div class="hub__core"><i></i><img src="assets/logo.png" width="956" height="361" alt="21-ASR — raqamli xizmatlar markazi"></div>
    ${HUB.map((x, i) => { const p = hubPos(i, HUB.length); return `<div class="hub__item" style="--i:${i};--mx:${p[0]}%;--my:${p[1]}%;--dx:${p[2]}%;--dy:${p[3]}%"><a class="hub__pill" href="${x.to}"><span class="disc">${ic(x.icon)}</span>${x.label}</a></div>`; }).join("")}
  </div>`;

const marquee = () => {
  const row = TICKER.map((t) => `<span>${t}${MARK}</span>`).join("");
  return `<div class="marquee" aria-hidden="true"><div class="marquee__track">${row}${row}</div></div>`;
};

const dirCard = (d, i) => `
  <a class="card dir spot" href="#/yonalish/${d.id}" data-r>
    <span class="dir__n" aria-hidden="true">${pad(i + 1)}</span>
    <span class="disc">${ic(d.icon)}</span>
    <h3>${d.title}</h3>
    <p>${d.short}</p>
    <span class="dir__tags">${d.tags.map((t) => `<span>${t}</span>`).join("")}</span>
    <span class="dir__go"><span>${d.more ? "700 dan ortiq xizmat" : d.services.length + " ta xizmat"}</span>${ic("arrow")}</span>
  </a>`;

const whoPanel = (a) => `
  <div class="who__say"><span class="disc disc--lg">${ic(a.icon)}</span><p class="who__hook">«${a.hook}»</p><p class="who__txt">${a.text}</p></div>
  <div class="who__list">${a.services.map((id) => itemCard(ALL.find((s) => s.id === id), { dir: true, r: false })).join("")}</div>`;

const newsCard = (n, i) => `<a class="card news${i ? "" : " news--big"}" href="#/yangilik/${n.id}" data-r><span class="news__t">${n.tag}</span><h3>${n.hook}</h3><p>${n.body[0]}</p><span class="dir__go"><span>O'qish</span>${ic("arrow")}</span></a>`;

/* ===== Bosh sahifa ===== */
function home() {
  const tg = CONTACT.telegram[0].url;
  return `
  <section class="hero" id="hero">
    <i class="plus" style="left:5%;top:4%"></i><i class="plus" style="right:7%;top:38%"></i><i class="plus" style="left:47%;bottom:5%"></i>
    <div class="wrap hero__in">
      <div class="hero__txt">
        <p class="kicker rise"><i class="live"></i>Online xizmatlar markazi</p>
        <h1 class="hero__h1">${words("1000 dan ortiq xizmat")} <em>${words("bir joyda, navbatsiz.", 4)}</em></h1>
        <p class="hero__sub rise" style="--k:6">Soliq, buxgalteriya, Yagona darcha, auksion, tarjima — hujjat ishlaringizni bizga qoldiring. <b>Siz biznes bilan shug'ullaning.</b></p>
        <div class="hero__cta rise" style="--k:7">
          ${callBtn()}
          <a class="btn btn--ghost btn--tg" href="${tg}" target="_blank" rel="noopener" aria-label="Telegramda yozish">${ic("send")}<span>Telegramda yozish</span></a>
        </div>
        <p class="hero__hint rise" style="--k:8">${MARK}Narx va muddatni ${CONTACT.short} orqali bilib oling.</p>
        <div class="finder rise" style="--k:9">
          <label class="search__box">${ic("search")}<input id="q" type="search" placeholder="Masalan: tonirovka" autocomplete="off" aria-label="Xizmat qidirish"><kbd>/</kbd></label>
          <div class="results card" id="results" aria-live="polite"></div>
          <div class="chips"><span>Ko'p so'raladi:</span>${["YaTT ochish", "Tonirovka", "Apostil", "12% qaytarish", "Kassa apparat"].map((c) => `<button class="chip" data-chip="${c}">${c}</button>`).join("")}</div>
        </div>
      </div>
      <div class="hero__vis rise" style="--k:3">${hub()}</div>
    </div>
  </section>

  ${marquee()}

  <section class="sec sec--stats"><div class="wrap">
    <div class="card stats" data-r>
      <div><b data-count="1000" data-suffix="+">1000+</b><span>onlayn xizmat</span></div>
      <div><b data-count="700" data-suffix="+">700+</b><span>Yagona darcha xizmati</span></div>
      <div><b data-count="7">7</b><span>yo'nalish</span></div>
      <div><b data-count="3">3</b><span>filial</span></div>
    </div>
  </div></section>

  <section class="sec" id="xizmatlar" data-nav="xizmatlar"><div class="wrap">
    ${head({ tag: "Xizmatlar", n: 1, title: "Sizga qaysi <em>xizmat</em> kerak?", lead: "7 yo'nalish, 1000 dan ortiq xizmat. Yo'nalishni bosing — ichida barcha xizmatlar va kerakli hujjatlar yozilgan." })}
    <div class="grid grid--4 dirs">
      ${DIRECTIONS.map(dirCard).join("")}
      <div class="card dir dir--cta" data-r>
        <span class="tag">Topa olmadingizmi?</span>
        <h3>Ro'yxatda yo'q xizmat ham bizda bor</h3>
        <p>Jami 1000 dan ortiq xizmat. Keragini ayting — topib beramiz.</p>
        <a class="btn btn--light" href="tel:${CONTACT.short}"><span class="ring">${ic("phone")}</span>${CONTACT.short}</a>
      </div>
    </div>
  </div></section>

  <section class="sec" id="kim" data-nav="xizmatlar"><div class="wrap">
    ${head({ tag: "Siz uchun", n: 2, title: "Siz <em>kimsiz?</em>", lead: "O'zingizni tanlang — sizga kerakli xizmatlarni ko'rsatamiz." })}
    <div class="card who" data-r>
      <div class="who__tabs" role="tablist">${AUDIENCE.map((a, i) => `<button class="who__tab${i ? "" : " on"}" role="tab" aria-selected="${!i}" data-who="${a.id}">${ic(a.icon)}${a.label}</button>`).join("")}</div>
      <div class="who__panel" id="whoPanel">${whoPanel(AUDIENCE[0])}</div>
    </div>
  </div></section>

  <section class="band" id="vazifa" data-nav="nega"><div class="wrap">
    <div data-r><span class="tag">Bizning vazifamiz</span></div>
    <p class="say" data-r="words">${"«Siz biznes bilan shug'ullaning,".split(" ").map((w, i) => `<span style="--i:${i}">${w}</span>`).join(" ")} <em>${"biz esa hujjatlar bilan ishlaymiz!»".split(" ").map((w, i) => `<span style="--i:${i + 5}">${w}</span>`).join(" ")}</em></p>
    <p class="lead" data-r>Navbat, jarima va qog'ozbozlik — bularning hammasini bizga qoldiring.</p>
    <div class="grid grid--4">${PAINS.map((p) => `<div class="pain" data-r><span class="pain__ic">${ic(p.icon)}</span><h3><s>${p.pain}</s></h3><p>${p.fix}</p></div>`).join("")}</div>
  </div></section>

  <section class="sec" id="nega" data-nav="nega"><div class="wrap">
    ${head({ tag: "Nega biz", n: 4, title: "Nega aynan <em>21-ASR?</em>", lead: "Uch sabab: yaqin, tez va qonuniy." })}
    <div class="grid grid--3">${WHY.map((w, i) => `<div class="card why spot" data-r><span class="disc disc--lg">${ic(w.icon)}</span><span class="why__n">${pad(i + 1)}</span><h3>${w.title}</h3><p>${w.text}</p></div>`).join("")}</div>
  </div></section>

  <section class="sec" id="qadam" data-nav="nega"><div class="wrap">
    ${head({ tag: "Qanday ishlaymiz", n: 5, title: "Uch qadamda <em>tayyor</em>", lead: "Murakkab joyi yo'q. Hammasi bitta qo'ng'iroqdan boshlanadi." })}
    ${stepsList()}
  </div></section>

  <section class="sec" id="filiallar" data-nav="filiallar"><div class="wrap">
    ${head({ tag: "Filiallar", n: 6, title: "Sizga eng <em>yaqin filial</em>", extra: sky("Samarqand viloyati · 3 filial"), lead: `Uchala filial ham Davlat xizmatlari markazi (Yagona darcha) yonida. Ish vaqti: ${CONTACT.hours}.` })}
    <div class="grid grid--3">${BRANCHES.map((b, i) => `
      <div class="card branch" data-r>
        <div class="branch__map"><iframe loading="lazy" title="${b.name} xaritada" src="https://www.google.com/maps?q=${encodeURIComponent(b.map)}&z=16&output=embed"></iframe><b>${pad(i + 1)}</b></div>
        <div class="branch__b">
          <h3>${b.name}</h3>
          <div class="row">${ic("pin")}<span><b>Mo'ljal:</b> ${b.landmark}</span></div>
          <div class="row">${ic("clock")}<span><b>Ish vaqti:</b> ${CONTACT.hours}</span></div>
          <div class="branch__a"><a class="btn" href="tel:${CONTACT.short}">${ic("phone")}${CONTACT.short}</a><a class="btn btn--ghost" href="${b.link}" target="_blank" rel="noopener">${ic("pin")}Xaritada ochish</a></div>
        </div>
      </div>`).join("")}
    </div>
  </div></section>

  <section class="sec" id="yangiliklar" data-nav="yangiliklar"><div class="wrap">
    ${head({ tag: "Yangiliklar", n: 7, title: "Yangiliklar va <em>foydali maslahatlar</em>", lead: "Soliqni qaytarish, yangi xizmatlar va filiallar haqida." })}
    <div class="grid newsgrid">${NEWS.map(newsCard).join("")}</div>
  </div></section>

  <section class="sec" id="savollar" data-nav="aloqa"><div class="wrap faqwrap">
    ${head({ tag: "Savollar", n: 8, title: "Ko'p beriladigan <em>savollar</em>", lead: "Javob topilmasa, 1832 ga qo'ng'iroq qiling." })}
    <div class="faq">${FAQ.map((f, i) => `<div class="card faq__i" data-r><button class="faq__q" aria-expanded="false" aria-controls="fq${i}"><span>${f.q}</span><i>${ic("plus")}</i></button><div class="faq__a" id="fq${i}"><div><p>${f.a}</p></div></div></div>`).join("")}</div>
  </div></section>

  <section class="sec" id="aloqa" data-nav="aloqa"><div class="wrap">
    <div class="card contact" data-r>
      <div>
        <div class="head__top"><span class="tag">Aloqa</span><span class="head__idx">${pad(SECTIONS)}<small> / ${pad(SECTIONS)}</small></span></div>
        <h2 class="h2">Savolingiz bormi? <em>Qo'ng'iroq qiling.</em></h2>
        <p class="lead">Qaysi hujjat kerakligini, narx va muddatni telefonda aytamiz.</p>
        <a class="contact__big" href="tel:${CONTACT.short}" aria-label="${CONTACT.short} ga qo'ng'iroq qilish">${CONTACT.short}</a>
        ${callBtn()}
      </div>
      <div class="clist">
        ${CONTACT.phones.map((p) => `<a class="clink" href="tel:${p.replace(/[^+\d]/g, "")}"><span class="disc disc--sm">${ic("phone")}</span><span><small>Telefon</small><b>${p}</b></span>${ic("arrow")}</a>`).join("")}
        ${CONTACT.telegram.map((t) => `<a class="clink" href="${t.url}" target="_blank" rel="noopener"><span class="disc disc--sm">${ic("send")}</span><span><small>Telegram</small><b>${t.name}</b></span>${ic("arrow")}</a>`).join("")}
        <a class="clink" href="${CONTACT.instagram.url}" target="_blank" rel="noopener"><span class="disc disc--sm">${ic("insta")}</span><span><small>Instagram</small><b>${CONTACT.instagram.name}</b></span>${ic("arrow")}</a>
      </div>
    </div>
  </div></section>`;
}

/* ===== Ichki sahifalar ===== */
function dirPage(d) {
  const i = DIRECTIONS.indexOf(d), n = DIRECTIONS.length;
  const prev = DIRECTIONS[(i + n - 1) % n], next = DIRECTIONS[(i + 1) % n];
  return `<section class="page"><div class="wrap">
    <div class="crumbs" data-r><a href="#/s/xizmatlar">${ic("arrow")}Barcha yo'nalishlar</a></div>
    <div class="card phead" data-r>
      <span class="phead__ghost" aria-hidden="true">${pad(i + 1)}</span>
      <span class="disc disc--lg">${ic(d.icon)}</span>
      <div><span class="tag">Yo'nalish ${pad(i + 1)} / ${pad(n)}</span></div>
      <h1>${d.title}</h1>
      <p class="lead">${d.short}</p>
      <p class="hook">${MARK}<span>${d.hook}</span></p>
    </div>
    <h2 class="sub" data-r>Xizmatlar <small>· ${d.more ? "700 dan ortiq" : d.services.length + " ta"}</small></h2>
    <div class="grid grid--2">${d.services.map((s, k) => itemCard({ ...s, dir: d }, { n: pad(k + 1) })).join("")}</div>
    ${d.more ? `<p class="more" data-r>${d.more}</p>` : ""}
    ${ctaBox()}
    <nav class="pn" data-r aria-label="Boshqa yo'nalishlar">
      <a class="card" href="#/yonalish/${prev.id}"><small>← Oldingi</small><b>${prev.title}</b></a>
      <a class="card" href="#/yonalish/${next.id}"><small>Keyingi →</small><b>${next.title}</b></a>
    </nav>
  </div></section>`;
}

function servicePage(s) {
  const d = s.dir, i = DIRECTIONS.indexOf(d);
  const others = d.services.filter((o) => o.id !== s.id);
  return `<section class="page"><div class="wrap">
    <div class="crumbs" data-r><a href="#/yonalish/${d.id}">${ic("arrow")}${d.title}</a></div>
    <div class="card phead" data-r>
      <span class="phead__ghost" aria-hidden="true">${pad(i + 1)}</span>
      <span class="disc disc--lg">${ic(d.icon)}</span>
      <div><span class="tag">${d.title}</span></div>
      <h1>${s.n}</h1>
      <p class="phead__q">Bu nima?</p>
      <p class="lead">${s.d}</p>
    </div>
    <div class="grid grid--2">
      <div class="card block" data-r><h2>Kimga kerak?</h2><p>${s.k}</p></div>
      <div class="card block" data-r>
        <h2>Qaysi hujjatlarni olib kelasiz?</h2>
        <ul class="docs">${s.h.map((h) => `<li>${ic("check")}<span>${h}</span></li>`).join("")}</ul>
        <p class="fine">Holatingizga qarab ro'yxat o'zgarishi mumkin. Kelishdan oldin ${CONTACT.short} ga qo'ng'iroq qilib aniqlab oling.</p>
      </div>
    </div>
    ${ctaBox()}
    <h2 class="sub" data-r>Qanday bo'ladi?</h2>
    ${stepsList()}
    <h2 class="sub" data-r>Shu yo'nalishdagi boshqa xizmatlar</h2>
    <div class="grid grid--2">${others.map((o) => itemCard({ ...o, dir: d })).join("")}</div>
  </div></section>`;
}

function newsPage(n) {
  const s = n.link && ALL.find((x) => x.id === n.link);
  return `<section class="page"><div class="wrap article">
    <div class="crumbs" data-r><a href="#/s/yangiliklar">${ic("arrow")}Yangiliklar</a></div>
    <span class="news__t" data-r>${n.tag}</span>
    <h1 data-r>${n.hook}</h1>
    ${n.body.map((p) => `<p data-r>${p}</p>`).join("")}
    ${n.docs.length ? `<div class="card block" data-r><h2>Kerakli hujjatlar</h2><ul class="docs">${n.docs.map((h) => `<li>${ic("check")}<span>${h}</span></li>`).join("")}</ul></div>` : ""}
    ${s ? `<div style="margin-top:12px">${itemCard(s, { dir: true })}</div>` : ""}
    ${ctaBox()}
  </div></section>`;
}

function notFound() {
  return `<section class="page"><div class="wrap"><div class="card phead"><span class="phead__ghost" aria-hidden="true">404</span><h1>Sahifa topilmadi</h1><p class="lead">Kerakli xizmatni bosh sahifadagi qidiruvdan toping yoki ${CONTACT.short} ga qo'ng'iroq qiling.</p><p style="margin-top:20px"><a class="btn" href="#/">Bosh sahifaga</a></p></div></div></section>`;
}

function footer() {
  $("foot").innerHTML = `<div class="wrap">
    <div class="foot__top"><img class="foot__logo" src="assets/logo.png" alt="21-ASR" width="956" height="361"><p class="foot__say">«Siz biznes bilan shug'ullaning, biz esa hujjatlar bilan ishlaymiz!»</p></div>
    <div class="foot__cols">
      <div><h4>Xizmatlar</h4>${DIRECTIONS.map((d) => `<a href="#/yonalish/${d.id}">${d.title}</a>`).join("")}</div>
      <div><h4>Filiallar</h4><ul>${BRANCHES.map((b) => `<li><b>${b.name}</b>${b.landmark}</li>`).join("")}</ul></div>
      <div><h4>Aloqa</h4><a href="tel:${CONTACT.short}">Qisqa raqam: ${CONTACT.short}</a>${CONTACT.phones.map((p) => `<a href="tel:${p.replace(/[^+\d]/g, "")}">${p}</a>`).join("")}${CONTACT.telegram.map((t) => `<a href="${t.url}" target="_blank" rel="noopener">Telegram: ${t.name}</a>`).join("")}<a href="${CONTACT.instagram.url}" target="_blank" rel="noopener">Instagram: ${CONTACT.instagram.name}</a></div>
    </div>
    <div class="foot__big" aria-hidden="true">${CONTACT.short}</div>
    <div class="foot__bottom"><span>© 2026 21-ASR Online Xizmatlar Markazi</span><span>Samarqand · Urgut · Pastdarg'om · ${CONTACT.hours}</span></div>
  </div>`;
}

/* ===== Animatsiyalar ===== */
let io, heroIO, typer;

// Ko'ringanda paydo bo'lish; bir vaqtda ko'ringanlar navbat bilan chiqadi
function onSee(entries) {
  let k = 0;
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const el = e.target, d = Math.min(k++, 7) * 80;
    io.unobserve(el);
    el.style.setProperty("--d", d + "ms");
    el.classList.add("in");
    el.querySelectorAll("[data-count]").forEach((c) => count(c, d));
    setTimeout(() => { el.removeAttribute("data-r"); el.style.removeProperty("--d"); }, d + 1000);
  }
}
function observe() {
  if (io) io.disconnect();
  const els = app.querySelectorAll("[data-r]");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => { el.classList.add("in"); el.removeAttribute("data-r"); });
    return;
  }
  io = new IntersectionObserver(onSee, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
  els.forEach((el) => io.observe(el));
}

function count(el, delay) {
  const to = +el.dataset.count, suf = el.dataset.suffix || "";
  el.textContent = "0" + suf;
  setTimeout(() => {
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1600, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, delay + 150);
}

// Birinchi ekrandagi qo'ng'iroq tugmasi ko'rinib turganda pastdagi panel takrorlanmaydi
function watchHero() {
  if (heroIO) heroIO.disconnect();
  const cta = app.querySelector(".hero__cta .btn--call");
  const can = cta && "IntersectionObserver" in window;
  document.body.classList.toggle("cta-in-view", !!can);
  if (!can) return;
  heroIO = new IntersectionObserver(([e]) => document.body.classList.toggle("cta-in-view", e.isIntersecting), { rootMargin: "-56px 0px 0px 0px" });
  heroIO.observe(cta);
}

// Qidiruv maydonida namunalar o'zi yozilib turadi
function typewriter() {
  clearInterval(typer);
  const q = $("q");
  if (!q || reduce) return;
  const list = ["tonirovka", "apostil", "YaTT ochish", "12 foiz qaytarish", "kassa apparat", "avtoraqam", "ishonchnoma"];
  let w = 0, n = 0, dir = 1, wait = 12;
  typer = setInterval(() => {
    if (!q.isConnected) return clearInterval(typer);
    if (document.activeElement === q || q.value) return;
    if (wait) return void wait--;
    n += dir;
    q.placeholder = "Masalan: " + list[w].slice(0, n);
    if (n === list[w].length) { dir = -1; wait = 18; }
    else if (n === 0) { dir = 1; w = (w + 1) % list.length; wait = 4; }
  }, 80);
}

function showResults(q) {
  const box = $("results");
  if (!box) return;
  if (!norm(q)) { box.innerHTML = ""; return; }
  const found = find(q).slice(0, 8);
  box.innerHTML = found.length
    ? found.map((s) => `<a class="res" href="#/xizmat/${s.id}"><span><b>${s.n}</b><small>${s.dir.title}</small></span><span>${ic("arrow")}</span></a>`).join("")
    : `<div class="res res--empty">«${esc(q)}» bo'yicha topilmadi. Bizda 1000 dan ortiq xizmat bor — <a href="tel:${CONTACT.short}">${CONTACT.short} ga qo'ng'iroq qilib so'rang</a>.</div>`;
}

/* ===== Sahifa holati: qayerdaligini ko'rsatish ===== */
function setNav(key) {
  nav.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.dataset.nav === key));
}
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const max = root.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
    header.classList.toggle("is-small", scrollY > 24);
    if (app.dataset.view !== "home") return;
    let cur = "";
    app.querySelectorAll("[data-nav]").forEach((s) => { if (s.getBoundingClientRect().top <= innerHeight * 0.4) cur = s.dataset.nav; });
    setNav(cur);
  });
}

function closeNav() {
  nav.classList.remove("open");
  header.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}

function goTo(id, smooth) {
  const el = id && $(id), behavior = smooth && !reduce ? "smooth" : "instant";
  if (el) el.scrollIntoView({ behavior, block: "start" });
  else window.scrollTo({ top: 0, behavior });
}

function route() {
  const [, kind, id] = decodeURIComponent(location.hash).split("/");
  const isHome = !kind || kind === "s";
  closeNav();
  // Bosh sahifa ochiq bo'lsa qayta chizmaymiz, faqat kerakli bo'limga suramiz
  if (isHome && app.dataset.view === "home") return goTo(id, true);

  let html, navKey = "";
  if (isHome) html = home();
  else if (kind === "yonalish") { const d = DIRECTIONS.find((x) => x.id === id); html = d ? dirPage(d) : notFound(); navKey = "xizmatlar"; }
  else if (kind === "xizmat") { const s = ALL.find((x) => x.id === id); html = s ? servicePage(s) : notFound(); navKey = "xizmatlar"; }
  else if (kind === "yangilik") { const n = NEWS.find((x) => x.id === id); html = n ? newsPage(n) : notFound(); navKey = "yangiliklar"; }
  else html = notFound();

  app.dataset.view = isHome ? "home" : kind;
  app.innerHTML = html;
  app.classList.remove("enter");
  void app.offsetWidth;
  app.classList.add("enter");
  setNav(navKey);
  watchHero();
  observe();
  typewriter();
  goTo(isHome ? id : null, false);
  onScroll();
}

/* ===== Hodisalar ===== */
document.querySelectorAll("[data-ic]").forEach((el) => { el.innerHTML = ic(el.dataset.ic); });
footer();

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  header.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
});

// Shu sahifaning o'ziga olib boruvchi havola bosilganda ham ishlasin
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute("href") === (location.hash || "#/")) route();
});

app.addEventListener("input", (e) => { if (e.target.id === "q") showResults(e.target.value); });
app.addEventListener("focusin", (e) => {
  if (e.target.id !== "q") return;
  const top = e.target.getBoundingClientRect().top;
  if (top > innerHeight * 0.3) window.scrollTo({ top: scrollY + top - 96, behavior: reduce ? "instant" : "smooth" });
});
app.addEventListener("click", (e) => {
  const chip = e.target.closest("[data-chip]");
  if (chip) {
    const q = $("q");
    q.value = chip.dataset.chip.replace("12% qaytarish", "12 foiz");
    showResults(q.value);
    return;
  }
  const tab = e.target.closest("[data-who]");
  if (tab) {
    app.querySelectorAll(".who__tab").forEach((t) => { const on = t === tab; t.classList.toggle("on", on); t.setAttribute("aria-selected", on); });
    const panel = $("whoPanel");
    panel.innerHTML = whoPanel(AUDIENCE.find((a) => a.id === tab.dataset.who));
    panel.classList.remove("swap");
    void panel.offsetWidth;
    panel.classList.add("swap");
    tab.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "nearest", inline: "center" });
    return;
  }
  const fq = e.target.closest(".faq__q");
  if (fq) {
    const open = fq.parentElement.classList.toggle("open");
    fq.setAttribute("aria-expanded", open);
  }
});

// Sichqoncha ortidan yuradigan yorug'lik va doiraning yengil siljishi
app.addEventListener("pointermove", (e) => {
  if (e.pointerType !== "mouse") return;
  const c = e.target.closest(".spot");
  if (c) {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  }
  const o = $("hub");
  if (o && e.target.closest(".hero")) {
    const r = o.getBoundingClientRect();
    o.style.setProperty("--px", ((e.clientX - r.left - r.width / 2) / innerWidth).toFixed(3));
    o.style.setProperty("--py", ((e.clientY - r.top - r.height / 2) / innerHeight).toFixed(3));
  }
});

document.addEventListener("keydown", (e) => {
  const q = $("q");
  if (e.key === "/" && q && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); q.focus(); }
  if (e.key === "Escape") { closeNav(); if (q && document.activeElement === q) { q.value = ""; showResults(""); q.blur(); } }
});

// Kun/tun: yangi ko'rinish tugmaning o'zidan doira bo'lib yoyiladi
const isDark = () => root.dataset.theme === "dark";
themeBtn.setAttribute("aria-checked", isDark());
themeBtn.addEventListener("click", () => {
  const dark = !isDark();
  const apply = () => {
    if (dark) root.dataset.theme = "dark";
    else delete root.dataset.theme;
    themeBtn.setAttribute("aria-checked", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  };
  if (!document.startViewTransition || reduce) {
    root.classList.add("theming");
    apply();
    setTimeout(() => root.classList.remove("theming"), 700);
    return;
  }
  const r = themeBtn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  const far = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(apply).ready.then(() => {
    root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${far}px at ${x}px ${y}px)`] }, { duration: 750, easing: "cubic-bezier(.6, 0, .2, 1)", pseudoElement: "::view-transition-new(root)" });
  }).catch(() => {});
});

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
window.addEventListener("hashchange", route);
route();
