(()=>{var o=Object.create;var B=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var e=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var U=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);var A=(a,t,g,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let I of C(t))!F.call(a,I)&&I!==g&&B(a,I,{get:()=>t[I],enumerable:!(i=r(t,I))||i.enumerable});return a};var s=(a,t,g)=>(g=a!=null?o(e(a)):{},A(t||!a||!a.__esModule?B(g,"default",{value:a,enumerable:!0}):g,a));var l=U((x,Q)=>{var c=class{constructor(){this.currentTheme=this.getInitialTheme(),this.init()}getInitialTheme(){let t=localStorage.getItem("theme");return t&&(t==="light"||t==="dark")?t:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}init(){this.applyTheme(this.currentTheme,!1),this.createToggleButton(),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addListener(g=>{if(!localStorage.getItem("theme")){let i=g.matches?"dark":"light";this.currentTheme=i,this.applyTheme(i,!0),this.updateButtonState()}}),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!localStorage.getItem("theme")){let t=this.getSystemTheme();t!==this.currentTheme&&(this.currentTheme=t,this.applyTheme(t,!0),this.updateButtonState())}})}getSystemTheme(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}createToggleButton(){let t=document.getElementById("theme-switcher");if(!t)return;let g=document.createElement("button");g.id="wha",g.setAttribute("aria-label","Toggle dark mode"),g.setAttribute("title","Toggle dark mode"),g.className="theme-toggle-btn";let i=this.createIcon("sun"),I=this.createIcon("moon");g.appendChild(i),g.appendChild(I),this.addToggleStyles(),g.style.cssText=`
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `,g.addEventListener("click",b=>{b.preventDefault(),this.toggle()}),t.appendChild(g),this.toggleButton=g,this.updateButtonState()}createIcon(t){let g=document.createElement("div");return g.className=`theme-icon theme-icon-${t}`,t==="sun"?g.innerHTML=`
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
      `:g.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      `,g}addToggleStyles(){if(document.getElementById("theme-toggle-styles"))return;let t=document.createElement("style");t.id="theme-toggle-styles",t.textContent=`
      .theme-toggle-btn {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #1a1a1a;
      }
      
      .theme-toggle-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
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
        color: #f5f5f5;
        box-shadow: none;
      }

      :root.theme-dark .theme-toggle-btn:hover {
        background: rgba(255, 255, 255, 0.5);
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
          top: 16px;
          right: 16px;
          width: 44px;
          height: 44px;
        }
      }
    `,document.head.appendChild(t)}applyTheme(t,g=!0){let i=document.documentElement;g&&(i.style.transition="color 0.3s ease, background-color 0.3s ease",setTimeout(()=>{i.style.transition=""},300)),t==="dark"?i.classList.add("theme-dark"):i.classList.remove("theme-dark"),this.updateMetaThemeColor(t),window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:t,previousTheme:this.currentTheme}}))}updateMetaThemeColor(t){let g=document.querySelector('meta[name="theme-color"]');g||(g=document.createElement("meta"),g.name="theme-color",document.head.appendChild(g)),g.content=t==="dark"?"#0f0f0f":"#ffffff"}updateButtonState(){if(this.toggleButton){let t=this.currentTheme==="dark";this.toggleButton.setAttribute("aria-label",t?"Switch to light mode":"Switch to dark mode"),this.toggleButton.setAttribute("title",t?"Switch to light mode":"Switch to dark mode")}}toggle(){let t=this.currentTheme==="light"?"dark":"light";this.currentTheme=t,localStorage.setItem("theme",t),this.applyTheme(t,!0),this.updateButtonState(),typeof gtag<"u"&&gtag("event","theme_toggle",{custom_parameter:t})}getCurrentTheme(){return this.currentTheme}setTheme(t){(t==="light"||t==="dark")&&(this.currentTheme=t,localStorage.setItem("theme",t),this.applyTheme(t,!0),this.updateButtonState())}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.themeSwitcher=new c}):window.themeSwitcher=new c;typeof Q<"u"&&Q.exports&&(Q.exports=c)});var y=s(l());})();
//# sourceMappingURL=/_bridgetown/static/index.ZTLBN23F.js.map
