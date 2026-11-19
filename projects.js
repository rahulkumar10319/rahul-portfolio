// ------------------------------------------------------------------
// Projects page. Edit the PROJECTS list to add / change projects.
//  type: "github" -> button says "View on GitHub", "figma" -> "View Prototype",
//        "live"   -> "Visit Live Site"
//  tech: icon file names inside  (without .svg)
// ------------------------------------------------------------------
const PR = "";
const PROJECTS = [
  {
    title: "RemoteWork Solutions",
    desc: "A responsive multi-page website for a remote-work platform, with an autoplay hero video, animated feature cards, a portfolio showcase, flip-card team section and a contact form.",
    img: PR + "remotework.svg", link: "https://github.com/rahulkumar10319/RemoteWork-Solutions", type: "github", color: "#38bdf8",
    tech: [["html5", "HTML"], ["css3", "CSS"], ["javascript", "JavaScript"]]
  },
  {
    title: "Thar Rasoi",
    desc: "A menu-driven restaurant billing system in 8086 Assembly. Pick breakfast, lunch or dinner, enter quantities and get an automatic bill saved to a file.",
    img: PR + "thar-rasoi.webp", link: "https://github.com/rahulkumar10319/COAL-project-Thar-Rasoi-", type: "github", color: "#f87171", fit: "contain", bg: "#800000",
    tech: [["emu8086", "Assembly 8086 / EMU 8086"]]
  },
  {
    title: "Maryam Ke Dastak",
    desc: "A mobile UI/UX design with a clickable prototype, built in Figma to show the screens and the complete user flow.",
    img: PR + "maryam.svg", link: "https://www.figma.com/proto/S2Zdmf5gFbC64B5F3svNg2/Maryam-Ke-Dastak?node-id=73-2&t=JkzKPv2HAL4wVGo4-1", type: "figma", color: "#f472b6",
    tech: [["figma", "Figma"]]
  },
  {
    title: "Batch-wise GPA Calculation",
    desc: "A DBMS project that calculates GPA batch by batch, with full CRUD operations, an Alpine.js front end, an Express.js API and a PostgreSQL database.",
    img: PR + "gpa.svg", link: "https://github.com/rahulkumar10319/batch-wise-gpa-calculation-DBMS-project", type: "github", color: "#2dd4bf",
    tech: [["html5", "HTML"], ["css3", "CSS"], ["javascript", "JavaScript"], ["alpinejs", "Alpine.js"], ["nodejs", "Node.js"], ["express", "Express.js"], ["postgresql", "PostgreSQL"]]
  },
  {
    title: "CPU Scheduling Simulator",
    desc: "An interactive desktop simulator in C with a GTK interface. It compares FCFS, SJF, Round Robin and Priority scheduling and shows the performance metrics.",
    img: PR + "cpu.svg", link: "https://github.com/rahulkumar10319/cpu-scheduling-simulator-Operating-System-course-", type: "github", color: "#fb923c",
    tech: [["c", "C"], ["gtk", "GTK"], ["linux", "Linux"]]
  }
];

(() => {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  const LABEL = { github: "View on GitHub", figma: "View Prototype", live: "Visit Live Site" };
  const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  PROJECTS.forEach(p => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "project-card";
    a.href = p.link; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.style.setProperty("--c", p.color);
    a.setAttribute("aria-label", `${p.title} — ${LABEL[p.type]}`);
    a.innerHTML = `
      <span class="project-thumb" style="${p.bg ? "background:" + p.bg : ""}"><img src="${p.img}" alt="" loading="lazy" style="object-fit:${p.fit || "cover"}" /></span>
      <span class="project-body">
        <strong></strong>
        <span class="project-desc"></span>
      </span>
      <span class="project-foot">
        <span class="project-tech">${p.tech.map(t => `<i title="${t[1]}"><img src="${t[0]}.svg" alt="${t[1]}" /></i>`).join("")}</span>
        <span class="project-link">${LABEL[p.type]} ${ARROW}</span>
      </span>`;
    a.querySelector("strong").textContent = p.title;
    a.querySelector(".project-desc").textContent = p.desc;
    li.appendChild(a); grid.appendChild(li);
  });
})();
