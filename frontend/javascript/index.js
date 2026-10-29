import "$styles/index.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"
import "./hero-depth.js"

// Click-to-load embeds: swap the poster for the real player only when asked
document.addEventListener("click", (event) => {
  const poster = event.target.closest(".embed-poster")
  if (!poster || event.metaKey || event.ctrlKey || event.shiftKey) return
  event.preventDefault()
  const embed = poster.parentElement
  embed.replaceChildren(embed.querySelector("template").content)
  if (embed.dataset.embed !== "instagram") return embed.querySelector("iframe")?.focus()
  if (window.instgrm) return window.instgrm.Embeds.process()
  const script = document.createElement("script")
  script.src = "https://www.instagram.com/embed.js"
  document.head.append(script)
})

// /why/ contents and dive line: one tag on the line per chapter, level with its
// heading; the chapter being read (its top past 30% of the viewport) is marked
// in the contents.
const tocLinks = document.querySelectorAll(".essay-toc a")
if (tocLinks.length) {
  const sections = [...document.querySelectorAll(".essay section")]
  const line = document.querySelector(".dive-line")
  const marks = sections.map(() => line.appendChild(document.createElement("span")))
  marks.forEach((m) => (m.className = "dive-line-mark"))
  const place = () => {
    // the rope runs on past the essay to the bottom of the footer…
    const end = document.querySelector("footer").getBoundingClientRect().bottom
    line.style.setProperty("--tail", `${Math.max(0, end - line.getBoundingClientRect().bottom)}px`)
    // …and up from the essay to the top of the page, stopping under the menu
    const surface = document.getElementById("main").getBoundingClientRect().top
    line.style.setProperty("--head", `${line.getBoundingClientRect().top - surface}px`)
    const top = line.getBoundingClientRect().top
    sections.forEach((s, i) => {
      const h = s.querySelector("h2").getBoundingClientRect()
      marks[i].style.top = `${h.top - top + h.height / 2}px`
    })
  }
  const mark = () => {
    const current = sections.filter((s) => s.getBoundingClientRect().top <= innerHeight * 0.3).pop()
    sections.forEach((s, i) => {
      const on = s === current
      on ? tocLinks[i].setAttribute("aria-current", "true") : tocLinks[i].removeAttribute("aria-current")
    })
  }
  addEventListener("scroll", mark, { passive: true })
  addEventListener("resize", place)
  addEventListener("load", place)
  place()
  mark()
}
