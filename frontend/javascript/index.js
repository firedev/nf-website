import "$styles/index.css"

// Example Shoelace components. Mix 'n' match however you like!
import "@shoelace-style/shoelace/dist/components/button/button.js"
import "@shoelace-style/shoelace/dist/components/icon/icon.js"
import "@shoelace-style/shoelace/dist/components/spinner/spinner.js"

// Use the public icons folder:
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js"
// setBasePath("/shoelace-assets")

/////////////////////////////////////////////////////////////////////

import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/themes/dark.css";
import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@shoelace-style/shoelace/dist/components/avatar/avatar.js";
import "@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js";
import "@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/divider/divider.js";
import "@shoelace-style/shoelace/dist/components/dropdown/dropdown.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/menu/menu.js";
import "@shoelace-style/shoelace/dist/components/menu-item/menu-item.js";
import "@shoelace-style/shoelace/dist/components/tag/tag.js";

import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";
registerIconLibrary("remixicon", {
  resolver(name) {
    let match = name.match(/^(.*?)\/(.*?)(-(fill)?)?$/m);
    match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
    return `https://cdn.jsdelivr.net/npm/remixicon@3.3.0/icons/${match[1]}/${match[2]}${match[3] == '-' ? '' : (match[3] || "-line")}.svg`
  },

  mutator(svg) {
    return svg.setAttribute("fill", "currentColor")
  }
});

registerIconLibrary('heroicons', {
  resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/solid/${name}.svg`
});

setBasePath("/images");
// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"
