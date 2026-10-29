// Home hero: renders of the wreck from an arc around it. The cursor picks the
// angle and scrolling through the hero turns it further; the two nearest renders
// are cross-faded. Without JS the plain <img> stays.
const canvas = document.querySelector(".home-hero-orbit")
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

function startOrbit() {
  // data-first: the leftmost render used (earlier ones turn the bow too far right)
  // data-center: the bow-towards-you render shown with the cursor mid-screen
  const first = Number(canvas.dataset.first || 0)
  const n = Number(canvas.dataset.frames) - first
  const mid = Number(canvas.dataset.center ?? (n - 1) / 2 + first) - first
  const ctx = canvas.getContext("2d")
  const frames = Array.from({ length: n }, (_, i) => {
    const img = new Image()
    img.src = `${canvas.dataset.path}${String(i + first).padStart(2, "0")}.webp?v=${canvas.dataset.version || 1}`
    return img
  })
  let mouse = 0, pos = 0, t0 = performance.now()

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = canvas.clientWidth * dpr
    canvas.height = canvas.clientHeight * dpr
  }
  resize()
  window.addEventListener("resize", resize)

  window.addEventListener("pointermove", (e) => {
    if (e.pointerType === "mouse") mouse = (e.clientX / window.innerWidth) * 2 - 1
  }, { passive: true })

  const draw = (img, alpha) => {
    if (!img.complete || !img.naturalWidth) return false
    const cw = canvas.width, ch = canvas.height
    // zoom in a little and anchor to the top: less seabed and rocks, more water
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight) * 1.15
    const w = img.naturalWidth * s, h = img.naturalHeight * s
    const fx = cw < ch ? 0.72 : 0.6          // keep the wreck (right side) in view
    ctx.globalAlpha = alpha
    ctx.drawImage(img, (cw - w) * fx, (ch - h) * 0.1, w, h)
    return true
  }

  const frame = (t) => {
    // mouse on desktop, a slow sway on touch screens; scrolling past the hero adds a turn
    const hover = matchMedia("(hover: hover)").matches
    const scroll = Math.min(1, window.scrollY / canvas.clientHeight)
    let target = (hover ? mouse : Math.sin((t - t0) / 3000) * 0.3) + scroll * 1.6
    target = Math.max(-1, Math.min(1, target))
    pos += (target - pos) * 0.08
    const f = pos < 0 ? mid + pos * mid : mid + pos * (n - 1 - mid)
    const a = Math.max(0, Math.min(n - 1, Math.floor(f))), b = Math.min(n - 1, a + 1)
    if (draw(frames[a], 1)) {
      draw(frames[b], f - a)
      canvas.classList.add("is-live")
    }
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

if (canvas && !reduce) startOrbit()
