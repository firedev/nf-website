import "$styles/index.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

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
