// Home hero: 17 renders of the wreck from an 80° arc around it. The cursor
// (or, after "Look around", your head in the webcam) picks the angle; the two
// nearest renders are cross-faded. Without JS the plain <img> stays.
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
    img.src = `${canvas.dataset.path}${String(i + first).padStart(2, "0")}.webp`
    return img
  })
  let mouse = 0, pos = 0, head = null, t0 = performance.now()

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
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
    const w = img.naturalWidth * s, h = img.naturalHeight * s
    const fx = cw < ch ? 0.72 : 0.5          // narrow screens: keep the wreck (right side) in view
    ctx.globalAlpha = alpha
    ctx.drawImage(img, (cw - w) * fx, (ch - h) / 2, w, h)
    return true
  }

  const frame = (t) => {
    // a face seen in the last half second wins; otherwise the mouse; touch screens sway
    let target = mouse
    if (head && t - head.seen < 500) target = head.x
    else if (!matchMedia("(hover: hover)").matches) target = Math.sin((t - t0) / 3000) * 0.8
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
  return (h) => (head = h)
}

// Head tracking: opt-in, the browser asks for the camera; video never leaves the page.
async function trackHead(setHead, button) {
  button.disabled = true
  button.textContent = "Starting camera…"
  try {
    const vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs")
    const fileset = await vision.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm")
    const detector = await vision.FaceDetector.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite" },
      runningMode: "VIDEO",
    })
    const video = document.createElement("video")
    video.playsInline = true
    video.muted = true
    video.srcObject = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240, facingMode: "user" } })
    await video.play()
    const head = { x: 0, seen: 0 }
    setHead(head)
    button.textContent = "Move your head"
    const loop = () => {
      const r = detector.detectForVideo(video, performance.now())
      const box = r.detections[0]?.boundingBox
      if (box) {
        const cx = (box.originX + box.width / 2) / video.videoWidth   // 0..1, camera view
        head.x = Math.max(-1, Math.min(1, (0.5 - cx) * 3.2))          // mirrored, amplified
        head.seen = performance.now()
      }
      requestAnimationFrame(loop)
    }
    loop()
  } catch {
    button.textContent = "Camera unavailable"
  }
}

if (canvas && !reduce) {
  const setHead = startOrbit()
  const button = document.querySelector(".home-hero-look")
  if (button && navigator.mediaDevices?.getUserMedia) {
    button.hidden = false
    button.addEventListener("click", () => trackHead(setHead, button), { once: true })
  }
}
