const life = ["IN CONTROL", "IN LINE", "IN ORDER", "IN YOUR HANDS", "IN ALIGNMENT", "IN BALANCE", "IN BLOOM", "IN CONTROL", "IN FOCUS", "IN GEAR", "IN HARMONY", "IN MOTION", "IN ORDER", "IN PERSPECTIVE", "IN RHYTHM", "IN SHAPE", "IN SYNC", "IN THE GROOVE", "IN THE MIX", "IN THE RING", "IN THE SADDLE", "IN TOUCH", "IN TUNE",]
let el
const lifeline = function () {
  if (el = document.getElementById("lifeline")) {
    el.innerText =
      life[Math.floor(Math.random() * life.length)]
    setTimeout(lifeline, 3000)
  }
}
setTimeout(lifeline, 3000)
