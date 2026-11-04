(() => {
  // frontend/javascript/hero-orbit.js
  var canvas = document.querySelector(".home-hero-orbit");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function startOrbit() {
    const first = Number(canvas.dataset.first || 0);
    const n = Number(canvas.dataset.frames) - first;
    const mid = Number(canvas.dataset.center ?? (n - 1) / 2 + first) - first;
    const ctx = canvas.getContext("2d");
    const frames = Array.from({ length: n }, (_, i) => {
      const img = new Image();
      img.src = `${canvas.dataset.path}${String(i + first).padStart(2, "0")}.webp?v=${canvas.dataset.version || 1}`;
      return img;
    });
    let mouse = 0, touched = false, pos = 0, t0 = performance.now();
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(canvas.clientWidth * dpr), h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    window.addEventListener("pointermove", (e) => {
      if (e.pointerType === "mouse") mouse = e.clientX / window.innerWidth * 2 - 1;
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      mouse = e.touches[0].clientX / window.innerWidth * 2 - 1;
      touched = true;
    }, { passive: true });
    const draw = (img, alpha) => {
      if (!img.complete || !img.naturalWidth) return false;
      const cw = canvas.width, ch = canvas.height;
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight) * 1.15;
      const w = img.naturalWidth * s, h = img.naturalHeight * s;
      const fx = cw < ch ? 0.72 : 0.6;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, (cw - w) * fx, (ch - h) * 0.1, w, h);
      return true;
    };
    const frame = (t) => {
      const steer = touched || matchMedia("(hover: hover)").matches;
      const sway = reduce ? 0 : Math.sin((t - t0) / 3e3) * 0.3;
      const scroll = Math.min(1, window.scrollY / canvas.clientHeight);
      let target = (steer ? mouse : sway) + scroll * 1.6;
      target = Math.max(-1, Math.min(1, target));
      pos += (target - pos) * 0.08;
      resize();
      const f = pos < 0 ? mid + pos * mid : mid + pos * (n - 1 - mid);
      const a = Math.max(0, Math.min(n - 1, Math.floor(f))), b = Math.min(n - 1, a + 1);
      if (draw(frames[a], 1)) {
        draw(frames[b], f - a);
        canvas.classList.add("is-live");
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
  if (canvas) startOrbit();

  // frontend/javascript/index.js
  document.addEventListener("click", (event) => {
    const poster = event.target.closest(".embed-poster");
    if (!poster || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    const embed = poster.parentElement;
    embed.replaceChildren(embed.querySelector("template").content);
    if (embed.dataset.embed !== "instagram") return embed.querySelector("iframe")?.focus();
    if (window.instgrm) return window.instgrm.Embeds.process();
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    document.head.append(script);
  });
  var tocLinks = document.querySelectorAll(".essay-toc a");
  if (tocLinks.length) {
    const sections = [...document.querySelectorAll(".essay section")];
    const line = document.querySelector(".dive-line");
    const marks = sections.map(() => line.appendChild(document.createElement("span")));
    marks.forEach((m) => m.className = "dive-line-mark");
    const place = () => {
      const end = document.querySelector("footer").getBoundingClientRect().bottom;
      line.style.setProperty("--tail", `${Math.max(0, end - line.getBoundingClientRect().bottom)}px`);
      const surface = document.getElementById("main").getBoundingClientRect().top;
      line.style.setProperty("--head", `${line.getBoundingClientRect().top - surface}px`);
      const top = line.getBoundingClientRect().top;
      sections.forEach((s, i) => {
        const h = s.querySelector("h2").getBoundingClientRect();
        marks[i].style.top = `${h.top - top + h.height / 2}px`;
      });
    };
    const mark = () => {
      const current = sections.filter((s) => s.getBoundingClientRect().top <= innerHeight * 0.3).pop();
      sections.forEach((s, i) => {
        const on = s === current;
        on ? tocLinks[i].setAttribute("aria-current", "true") : tocLinks[i].removeAttribute("aria-current");
      });
    };
    addEventListener("scroll", mark, { passive: true });
    addEventListener("resize", place);
    addEventListener("load", place);
    place();
    mark();
  }
})();
//# sourceMappingURL=/_bridgetown/static/index.QU4KENEN.js.map
