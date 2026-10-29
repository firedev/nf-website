// Home hero: the wreck render plus its depth map, shifted per pixel so the
// scene turns a little toward the cursor (or drifts on its own on touch).
// Falls back to the plain <img> when WebGL or motion is unavailable.
const canvas = document.querySelector(".home-hero-depth")
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

const VERT = `attribute vec2 p; varying vec2 uv;
void main(){ uv = p * 0.5 + 0.5; uv.y = 1.0 - uv.y; gl_Position = vec4(p, 0.0, 1.0); }`
const FRAG = `precision mediump float; varying vec2 uv;
uniform sampler2D img, depth; uniform vec2 shift, scale, offset;
void main(){
  vec2 c = uv * scale + offset;                 // object-fit: cover
  float d = texture2D(depth, c).r;
  vec2 q = c - shift * (d - 0.35);               // near pixels move, far stay
  gl_FragColor = texture2D(img, clamp(q, 0.001, 0.999));
}`

const load = (src) => new Promise((ok, fail) => {
  const i = new Image(); i.onload = () => ok(i); i.onerror = fail; i.src = src
})

async function start() {
  const gl = canvas.getContext("webgl", { alpha: false, antialias: false })
  if (!gl) return
  const [img, dep] = await Promise.all([load(canvas.dataset.image), load(canvas.dataset.depth)])
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s }
  const prog = gl.createProgram()
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG))
  gl.linkProgram(prog); gl.useProgram(prog)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
  ;[img, dep].forEach((im, n) => {
    gl.activeTexture(gl.TEXTURE0 + n); gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  })
  const u = (n) => gl.getUniformLocation(prog, n)
  gl.uniform1i(u("img"), 0); gl.uniform1i(u("depth"), 1)

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = canvas.clientWidth * dpr; canvas.height = canvas.clientHeight * dpr
    gl.viewport(0, 0, canvas.width, canvas.height)
    const ca = canvas.width / canvas.height, ia = img.width / img.height
    const sx = ca > ia ? 1 : ca / ia, sy = ca > ia ? ia / ca : 1
    // on narrow screens keep the wreck in view, like object-position 62%
    const fx = ca < 1 ? 0.62 : 0.5
    gl.uniform2f(u("scale"), sx * 0.96, sy * 0.96)   // 4% bleed for the shift
    gl.uniform2f(u("offset"), (1 - sx * 0.96) * fx, (1 - sy * 0.96) * 0.5)
  }
  resize(); window.addEventListener("resize", resize)

  let tx = 0, ty = 0, x = 0, y = 0, pointer = false
  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return
    pointer = true
    tx = e.clientX / window.innerWidth - 0.5; ty = e.clientY / window.innerHeight - 0.5
  }, { passive: true })
  const frame = (t) => {
    if (!pointer) { tx = Math.sin(t / 4200) * 0.35; ty = Math.sin(t / 5300) * 0.15 }
    x += (tx - x) * 0.06; y += (ty - y) * 0.06
    gl.uniform2f(u("shift"), x * 0.035, y * 0.02)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    if (canvas.getBoundingClientRect().bottom > 0) canvas.classList.add("is-live")
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

if (canvas && !reduce) start().catch(() => {})
