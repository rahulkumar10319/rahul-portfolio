// Education page photo gallery. Edit PHOTOS to add / reorder photos.
// `shape`: "l" = landscape thumbnail, "p" = portrait thumbnail (full photo shows when opened).
const E = "";
const PHOTOS = [
  { img: E + "hackathon-runner-up.webp", shape: "l", title: "ZAB E-FEST 2025", sub: "Debugging Competition — Runner-Up", color: "#fbbf24" },
  { img: E + "szabist-building.webp", shape: "p", title: "SZABIST University", sub: "Karachi campus", color: "#38bdf8" },
  { img: E + "szabist-library.webp", shape: "p", title: "SZABIST Library", sub: "Study time on campus", color: "#a78bfa" },
  { img: E + "library-laptops.webp", shape: "p", title: "Library Sessions", sub: "Coding and studying side by side", color: "#22d3ee" },
  { img: E + "szabist-cafe.webp", shape: "p", title: "SZABIST Café", sub: "An evening on campus", color: "#4ade80" },
  { img: E + "campus-cricket.webp", shape: "p", title: "Campus Cricket", sub: "Break time between classes", color: "#fb923c" },
  { img: E + "library-study.webp", shape: "p", title: "Library Study Hall", sub: "Focused study hours", color: "#f472b6" },
  { img: E + "wall-portraits.webp", shape: "p", title: "Campus Corners", sub: "Around the university", color: "#e879f9" }
];

(() => {
  const grid = document.getElementById("eduGallery");
  const box = document.getElementById("lightbox");
  if (!grid || !box) return;
  const el = id => document.getElementById(id);
  const img = el("lbImg"), title = el("lbTitle"), sub = el("lbSub"), dots = el("lbDots");
  const prev = el("lbPrev"), next = el("lbNext"), panel = el("lbPanel");
  let index = 0, opener = null;

  PHOTOS.forEach((p, i) => {
    const li = document.createElement("li");
    li.className = "gal-" + p.shape;
    const b = document.createElement("button");
    b.type = "button"; b.className = "gal-item"; b.style.setProperty("--c", p.color);
    b.setAttribute("aria-label", `${p.title}. Open photo`);
    b.innerHTML = `<img src="${p.img}" alt="${p.title}" loading="lazy" /><span class="gal-cap"><strong></strong><small></small></span>`;
    b.querySelector("strong").textContent = p.title;
    b.querySelector("small").textContent = p.sub;
    b.addEventListener("click", () => open(i, b));
    li.appendChild(b); grid.appendChild(li);
  });

  function show(i) {
    index = (i + PHOTOS.length) % PHOTOS.length;
    const p = PHOTOS[index];
    panel.style.setProperty("--c", p.color);
    img.classList.remove("in"); img.src = p.img; img.alt = p.title;
    title.textContent = p.title; sub.textContent = p.sub;
    dots.innerHTML = PHOTOS.map((_, k) => `<i class="${k === index ? "on" : ""}"></i>`).join("") + `<span>${index + 1} / ${PHOTOS.length}</span>`;
    requestAnimationFrame(() => img.classList.add("in"));
    [index - 1, index + 1].forEach(k => { const n = new Image(); n.src = PHOTOS[(k + PHOTOS.length) % PHOTOS.length].img; });
  }
  function open(i, from) {
    opener = from; show(i); box.hidden = false;
    document.body.classList.add("lb-open");
    requestAnimationFrame(() => box.classList.add("show"));
    panel.querySelector(".lb-close").focus();
  }
  function close() {
    box.classList.remove("show"); document.body.classList.remove("lb-open");
    setTimeout(() => { box.hidden = true; img.removeAttribute("src"); }, 220);
    if (opener) opener.focus();
  }
  box.addEventListener("click", e => { if (e.target.closest("[data-close]")) close(); });
  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(index - 1);
    else if (e.key === "ArrowRight") show(index + 1);
    else if (e.key === "Tab") {
      const f = [...panel.querySelectorAll("button:not([hidden])")];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  let sx = null;
  panel.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
  panel.addEventListener("touchend", e => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
  });
})();
