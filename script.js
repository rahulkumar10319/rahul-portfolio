// Animated starfield: small stars drift slowly and softly twinkle.
(() => {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let width = 0, height = 0, stars = [], raf = 0;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rand = (min, max) => Math.random() * (max - min) + min;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(190, Math.floor((width * height) / 6500));
    stars = Array.from({ length: count }, () => ({
      x: rand(0, width), y: rand(0, height),
      radius: rand(.35, 1.45), alpha: rand(.25, .9),
      speed: rand(.08, .34), drift: rand(-.12, .12),
      phase: rand(0, Math.PI * 2), twinkle: rand(.004, .016),
      violet: Math.random() > .55
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const s of stars) {
      if (!reducedMotion) {
        s.y -= s.speed;
        s.x += s.drift;
        s.phase += s.twinkle;
        if (s.y < -4) { s.y = height + 4; s.x = rand(0, width); }
        if (s.x < -4) s.x = width + 4;
        if (s.x > width + 4) s.x = -4;
      }
      const pulse = reducedMotion ? 0 : Math.sin(s.phase) * .22;
      const alpha = Math.max(.12, Math.min(1, s.alpha + pulse));
      ctx.beginPath();
      ctx.fillStyle = s.violet ? `rgba(190, 165, 255, ${alpha})` : `rgba(224, 220, 255, ${alpha})`;
      ctx.shadowBlur = s.radius > 1.1 ? 10 : 4;
      ctx.shadowColor = s.violet ? "rgba(151, 105, 255, .8)" : "rgba(203, 193, 255, .7)";
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    if (!reducedMotion) raf = requestAnimationFrame(draw);
  }
  window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); draw(); });
  resize(); draw();
})();

// Small rotating role text in the hero.
(() => {
  const target = document.getElementById("roleText");
  if (!target) return;
  const roles = ["Software Engineering Student", "Developer", "Problem Solver", "Tech Enthusiast"];
  let roleIndex = 0, charIndex = roles[0].length, deleting = true;
  function type() {
    const current = roles[roleIndex];
    if (deleting) {
      charIndex--;
      target.textContent = current.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 350);
        return;
      }
    } else {
      const next = roles[roleIndex];
      charIndex++;
      target.textContent = next.slice(0, charIndex);
      if (charIndex >= next.length) {
        deleting = true;
        setTimeout(type, 1500);
        return;
      }
    }
    setTimeout(type, deleting ? 38 : 65);
  }
  setTimeout(type, 1800);
})();

// Mobile navigation and expandable "currently working on" status card.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
const statusCard = document.getElementById("statusCard");
if (statusCard) statusCard.addEventListener("click", () => {
  statusCard.setAttribute("aria-expanded", String(statusCard.getAttribute("aria-expanded") !== "true"));
});


// Home page: highlight "About" in the nav while that section is on screen
(() => {
  const about = document.getElementById("about");
  const link = document.querySelector('.nav-links a[href$="#about"]');
  if (!about || !link || !("IntersectionObserver" in window)) return;
  const set = on => { link.classList.toggle("active", on); on ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current"); };
  new IntersectionObserver(([e]) => set(e.isIntersecting), { rootMargin: "-35% 0px -45% 0px" }).observe(about);
  link.addEventListener("click", () => set(true));
})();
