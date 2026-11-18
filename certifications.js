// ------------------------------------------------------------------
// Certifications page.
// Edit the CERTS list below to add / change certificates.
//  - A card with ONE item opens a single certificate.
//  - A card with SEVERAL items opens together; use the arrows to move.
//  - `link` is where "View Certificate" goes (leave it out to hide the button).
// ------------------------------------------------------------------
const P = "assets/certs/";
const CERTS = [
  {
    title: "KPT Internship Certificate", sub: "45-Day Internship at Karachi Port Trust",
    color: "#818cf8", fit: "cover", pos: "top",
    items: [{ title: "KPT Internship Certificate", sub: "45-Day Internship at Karachi Port Trust", img: P + "kpt-internship.webp", link: "https://lnkd.in/p/d3R8SXnw" }]
  },
  {
    title: "Debugging Competition — Runner-Up", sub: "ZAB E-Fest'25 · SZABIST University",
    color: "#fbbf24", fit: "cover", pos: "center",
    items: [{ title: "Debugging Competition — Runner-Up", sub: "Certificate of Achievement · ZAB E-Fest'25, May 2025", img: P + "debugging-runner-up.webp", link: "https://www.linkedin.com/posts/rahul-maheshwari-7375152b0_zababreabrfest-hackerrank-zabefest-ugcPost-7333197440130424833-DrcU/" }]
  },
  {
    title: "Speed Coding Competition", sub: "ZAB E-Fest'25 · SZABIST University",
    color: "#60a5fa", fit: "cover", pos: "center",
    items: [{ title: "Speed Coding Competition", sub: "Certificate of Participation · ZAB E-Fest'25, May 2025", img: P + "speed-coding.webp", link: "https://lnkd.in/p/dqSWbAth" }]
  },
  {
    title: "Query Quest", sub: "ZAB E-Fest'26 · SZABIST University",
    color: "#fb7185", fit: "cover", pos: "center",
    items: [{ title: "Query Quest", sub: "Certificate of Achievement · ZAB E-Fest'26, June 2026", img: P + "query-quest.webp" }]
  },
  {
    title: "SDGs Awareness 2025", sub: "Certificate of Recognition",
    color: "#e879f9", fit: "cover", pos: "center",
    items: [{ title: "SDGs Awareness 2025", sub: "Certificate of Recognition · Karachi, Jan 2025", img: P + "sdgs-awareness.webp" }]
  },
  {
    title: "Introduction to Data Science", sub: "Cisco Networking Academy",
    color: "#a3e635", fit: "cover", pos: "top", cover: P + "ds-certificate.webp",
    items: [
      { title: "Introduction to Data Science — Verified Badge", sub: "Cisco Networking Academy · Credly", img: P + "ds-badge.webp", link: "https://www.credly.com/badges/2d027a1e-438f-440b-947a-792f1c10cd42/linked_in_profile" },
      { title: "Introduction to Data Science — Certificate", sub: "Cisco Networking Academy · Sep 27, 2026", img: P + "ds-certificate.webp", link: "https://www.netacad.com/recognitions/verify/b877fbad-932c-4585-b255-3efac03ba2ba" },
      { title: "Introduction to Data Science — Course Completion", sub: "ITU-DTC Pakistan · Cisco Networking Academy", img: P + "ds-certificate-itu.webp", link: "https://www.netacad.com/recognitions/verify/b877fbad-932c-4585-b255-3efac03ba2ba" }
    ]
  },
  {
    title: "Claude Academy Courses", sub: "4 course completion badges",
    color: "#fb923c", fit: "cover", pos: "center", cover: P + "claude-101.webp",
    items: [
      { title: "Claude 101", sub: "Claude Academy · Sep 25, 2026", img: P + "claude-101.webp", link: "https://academy.claude.com/verify/9f21fe1b6ca4d51b9f4189bd04a8739c" },
      { title: "Introduction to Claude Cowork", sub: "Claude Academy · Sep 25, 2026", img: P + "claude-cowork.webp", link: "https://academy.claude.com/verify/23587805f2631ed8cf0799c0c8d16614" },
      { title: "AI Capabilities and Limitations", sub: "Claude Academy · Sep 25, 2026", img: P + "claude-capabilities.webp", link: "https://academy.claude.com/verify/3516b7bb183dcdaf152aa7c53133655a" },
      { title: "Introduction to Claude Tag", sub: "Claude Academy · Sep 25, 2026", img: P + "claude-tag.webp", link: "https://academy.claude.com/verify/a8d37813382ecfc671739944d98761bf" }
    ]
  },
  {
    title: "MongoDB", sub: "10Pearls University",
    color: "#2dd4bf", fit: "cover", pos: "center",
    items: [{ title: "MongoDB", sub: "10Pearls University · Sep 29, 2026", img: P + "mongodb.webp", link: "https://10pearlsuniversity.org/view-certificate/?cid=10PUC-e5fe067dad2858023577c7e3fe25cde17afba809bf0a3d0d525308404" }]
  },
  {
    title: "Azure Fundamentals", sub: "10Pearls University",
    color: "#22d3ee", fit: "cover", pos: "center",
    items: [{ title: "Azure Fundamentals", sub: "10Pearls University · Oct 1, 2026", img: P + "azure-fundamentals.webp", link: "https://10pearlsuniversity.org/view-certificate/?cid=10PUC-99334c6ab5695d98b3aecf5cf39b5890966962c19229ce73525303606" }]
  },
  {
    title: "Cisco Packet Tracer", sub: "Getting Started with Cisco Packet Tracer",
    color: "#facc15", fit: "cover", pos: "top",
    items: [{ title: "Getting Started with Cisco Packet Tracer", sub: "Cisco Networking Academy · Oct 8, 2026", img: P + "packet-tracer.webp", link: "https://www.netacad.com/recognitions/verify/40cd6ecb-4670-4b30-8ad5-87cefac91a38" }]
  },
  {
    title: "Introduction to AI", sub: "AWS Skills Centers · Becoming an AI Practitioner",
    color: "#c084fc", fit: "cover", pos: "top",
    items: [{ title: "Introduction to AI", sub: "AWS Skills Centers · Becoming an AI Practitioner, Part 1", img: P + "intro-to-ai.webp", link: "https://www.linkedin.com/feed/update/urn:li:activity:7518919330013536256/" }]
  }
];

(() => {
  const grid = document.getElementById("certGrid");
  const box = document.getElementById("lightbox");
  if (!grid || !box) return;
  const el = id => document.getElementById(id);
  const img = el("lbImg"), title = el("lbTitle"), sub = el("lbSub"), dots = el("lbDots");
  const visit = el("lbVisit"), prev = el("lbPrev"), next = el("lbNext"), panel = el("lbPanel");
  let current = null, index = 0, opener = null;

  // ----- build cards -----
  CERTS.forEach((c, i) => {
    const li = document.createElement("li");
    const group = c.items.length > 1;
    const cover = c.cover || c.items[0].img;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cert-card" + (group ? " is-group" : "");
    btn.style.setProperty("--c", c.color);
    btn.setAttribute("aria-label", `${c.title}${group ? ", " + c.items.length + " certificates" : ""}. Open`);
    btn.innerHTML = `
      <span class="cert-thumb" style="${c.bg ? "background:" + c.bg : ""}">
        <img src="${cover}" alt="" loading="lazy" style="object-fit:${c.fit};object-position:${c.pos || "center"}" />
        <span class="cert-view">View</span>
        ${group ? `<span class="cert-count">${c.items.length} certificates</span>` : ""}
      </span>
      <span class="cert-meta"><strong></strong><span></span></span>`;
    btn.querySelector("strong").textContent = c.title;
    btn.querySelector(".cert-meta span").textContent = c.sub;
    btn.addEventListener("click", () => open(i, btn));
    li.appendChild(btn);
    grid.appendChild(li);
  });

  // ----- lightbox -----
  function show(i) {
    const items = current.items;
    index = (i + items.length) % items.length;
    const it = items[index];
    img.classList.remove("in"); 
    img.src = it.img; img.alt = it.title;
    title.textContent = it.title; sub.textContent = it.sub || "";
    if (it.link) { visit.href = it.link; visit.hidden = false; } else { visit.hidden = true; }
    dots.innerHTML = items.length > 1
      ? items.map((_, k) => `<i class="${k === index ? "on" : ""}"></i>`).join("") + `<span>${index + 1} / ${items.length}</span>` : "";
    const multi = items.length > 1;
    prev.hidden = next.hidden = !multi;
    requestAnimationFrame(() => img.classList.add("in"));
    // preload neighbours
    if (multi) [index - 1, index + 1].forEach(k => { const n = new Image(); n.src = items[(k + items.length) % items.length].img; });
  }
  function open(i, from) {
    current = CERTS[i]; opener = from;
    panel.style.setProperty("--c", current.color);
    show(0);
    box.hidden = false;
    document.body.classList.add("lb-open");
    requestAnimationFrame(() => box.classList.add("show"));
    el("lbPanel").querySelector(".lb-close").focus();
  }
  function close() {
    box.classList.remove("show");
    document.body.classList.remove("lb-open");
    setTimeout(() => { box.hidden = true; img.removeAttribute("src"); }, 220);
    if (opener) opener.focus();
  }
  box.addEventListener("click", e => { if (e.target.closest("[data-close]")) close(); });
  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft" && current.items.length > 1) show(index - 1);
    else if (e.key === "ArrowRight" && current.items.length > 1) show(index + 1);
    else if (e.key === "Tab") {
      const f = [...panel.querySelectorAll("button:not([hidden]), a[href]:not([hidden])")];
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // swipe on touch screens
  let sx = null;
  panel.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
  panel.addEventListener("touchend", e => {
    if (sx === null || !current || current.items.length < 2) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  });
})();
