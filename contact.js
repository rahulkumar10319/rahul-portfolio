// Contact form: opens the visitor's email app with the message filled in.
(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");
  const TO = "rahulkella661@gmail.com";
  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("input, textarea").forEach(f => {
      const bad = !f.value.trim() || (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
      f.parentElement.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    status.className = "form-status";
    if (!ok) { status.textContent = "Please fill in all fields with a valid email."; status.classList.add("err"); return; }
    const d = new FormData(form);
    const body = `${d.get("message").trim()}\n\n— ${d.get("name").trim()} (${d.get("email").trim()})`;
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(d.get("subject").trim())}&body=${encodeURIComponent(body)}`;
    status.textContent = "Opening your email app… if nothing opens, write to " + TO;
    status.classList.add("ok");
  });
  form.addEventListener("input", e => e.target.parentElement.classList.remove("invalid"));
})();
