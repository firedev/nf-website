(()=>{var o=Object.create;var e=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty;var C=(g,t)=>()=>(t||g((t={exports:{}}).exports,t),t.exports);var s=(g,t,i,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let Q of U(t))!r.call(g,Q)&&Q!==i&&e(g,Q,{get:()=>t[Q],enumerable:!(a=b(t,Q))||a.enumerable});return g};var n=(g,t,i)=>(i=g!=null?o(F(g)):{},s(t||!g||!g.__esModule?e(i,"default",{value:g,enumerable:!0}):i,g));var l=C((x,c)=>{var I=class{constructor(){this.currentTheme=this.getInitialTheme(),this.init()}getInitialTheme(){let t=localStorage.getItem("theme");return t&&(t==="light"||t==="dark")?t:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}init(){this.applyTheme(this.currentTheme,!1),this.createToggleButton(),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addListener(i=>{if(!localStorage.getItem("theme")){let a=i.matches?"dark":"light";this.currentTheme=a,this.applyTheme(a,!0),this.updateButtonState()}}),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!localStorage.getItem("theme")){let t=this.getSystemTheme();t!==this.currentTheme&&(this.currentTheme=t,this.applyTheme(t,!0),this.updateButtonState())}})}getSystemTheme(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}createToggleButton(){let t=document.getElementById("theme-switcher");if(!t)return;let i=document.createElement("button");i.id="wha",i.setAttribute("aria-label","Toggle dark mode"),i.setAttribute("title","Toggle dark mode"),i.className="theme-toggle-btn";let a=this.createIcon("sun"),Q=this.createIcon("moon");i.appendChild(a),i.appendChild(Q),this.addToggleStyles(),i.style.cssText=`
      position: relative;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `,i.addEventListener("click",B=>{B.preventDefault(),this.toggle()}),t.appendChild(i),this.toggleButton=i,this.updateButtonState()}createIcon(t){let i=document.createElement("div");return i.className=`theme-icon theme-icon-${t}`,t==="sun"?i.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      `:i.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      `,i}addToggleStyles(){if(document.getElementById("theme-toggle-styles"))return;let t=document.createElement("style");t.id="theme-toggle-styles",t.textContent=`
      .theme-toggle-btn {
        width: 40px;
        height: 40px;
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: currentColor;
      }

      .theme-toggle-btn:focus-visible {
        outline: 2px solid #0ea5e9;
        outline-offset: 3px;
      }
      
      .theme-toggle-btn:hover {
        transform: scale(1.05);
        background: rgba(0, 0, 0, 0.05);
      }
      
      .theme-toggle-btn:active {
        transform: scale(0.95);
      }
      
      .theme-icon {
        position: absolute;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .theme-icon-sun {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }
      
      .theme-icon-moon {
        opacity: 0;
        transform: rotate(90deg) scale(0.5);
      }
      
      /* Dark theme styles */
      :root.theme-dark .theme-toggle-btn {
        background: transparent;
        border-color: rgba(255, 255, 255, 0.25);
        color: currentColor;
        box-shadow: none;
      }

      :root.theme-dark .theme-toggle-btn:hover {
        background: rgba(255, 255, 255, 0.12);
      }
      
      :root.theme-dark .theme-icon-sun {
        opacity: 0;
        transform: rotate(-90deg) scale(0.5);
      }
      
      :root.theme-dark .theme-icon-moon {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }
      
      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .theme-toggle-btn,
        .theme-icon {
          transition: none !important;
        }
        
        .theme-toggle-btn:hover {
          transform: none !important;
        }
      }
      
      /* Mobile adjustments */
      @media (max-width: 768px) {
        .theme-toggle-btn {
          width: 34px;
          height: 34px;
        }
      }
    `,document.head.appendChild(t)}applyTheme(t,i=!0){let a=document.documentElement;i&&(a.style.transition="color 0.3s ease, background-color 0.3s ease",setTimeout(()=>{a.style.transition=""},300)),t==="dark"?a.classList.add("theme-dark"):a.classList.remove("theme-dark"),this.updateMetaThemeColor(t),window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:t,previousTheme:this.currentTheme}}))}updateMetaThemeColor(t){let i=document.querySelector('meta[name="theme-color"]');i||(i=document.createElement("meta"),i.name="theme-color",document.head.appendChild(i)),i.content=t==="dark"?"#0f0f0f":"#ffffff"}updateButtonState(){if(this.toggleButton){let t=this.currentTheme==="dark";this.toggleButton.setAttribute("aria-label",t?"Switch to light mode":"Switch to dark mode"),this.toggleButton.setAttribute("title",t?"Switch to light mode":"Switch to dark mode")}}toggle(){let t=this.currentTheme==="light"?"dark":"light";this.currentTheme=t,localStorage.setItem("theme",t),this.applyTheme(t,!0),this.updateButtonState(),typeof gtag<"u"&&gtag("event","theme_toggle",{custom_parameter:t})}getCurrentTheme(){return this.currentTheme}setTheme(t){(t==="light"||t==="dark")&&(this.currentTheme=t,localStorage.setItem("theme",t),this.applyTheme(t,!0),this.updateButtonState())}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.themeSwitcher=new I}):window.themeSwitcher=new I;typeof c<"u"&&c.exports&&(c.exports=I)});var u=n(l());})();
//# sourceMappingURL=/_bridgetown/static/index.RELAWBSY.js.map
