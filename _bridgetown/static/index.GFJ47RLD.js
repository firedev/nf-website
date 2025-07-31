(()=>{var Yi=Object.create;var So=Object.defineProperty;var Ji=Object.getOwnPropertyDescriptor;var Hi=Object.getOwnPropertyNames;var _i=Object.getPrototypeOf,Pi=Object.prototype.hasOwnProperty;var Vo=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Ki=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Hi(e))!Pi.call(t,i)&&i!==o&&So(t,i,{get:()=>e[i],enumerable:!(r=Ji(e,i))||r.enumerable});return t};var jo=(t,e,o)=>(o=t!=null?Yi(_i(t)):{},Ki(e||!t||!t.__esModule?So(o,"default",{value:t,enumerable:!0}):o,t));var Zr=Vo((zc,_e)=>{var Qe=class{constructor(){this.currentTheme=this.getInitialTheme(),this.init()}getInitialTheme(){let e=localStorage.getItem("theme");return e&&(e==="light"||e==="dark")?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}init(){this.applyTheme(this.currentTheme,!1),this.createToggleButton(),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addListener(o=>{if(!localStorage.getItem("theme")){let r=o.matches?"dark":"light";this.currentTheme=r,this.applyTheme(r,!0),this.updateButtonState()}}),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!localStorage.getItem("theme")){let e=this.getSystemTheme();e!==this.currentTheme&&(this.currentTheme=e,this.applyTheme(e,!0),this.updateButtonState())}})}getSystemTheme(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}createToggleButton(){let e=document.createElement("button");e.id="wha",e.setAttribute("aria-label","Toggle dark mode"),e.setAttribute("title","Toggle dark mode"),e.className="theme-toggle-btn";let o=this.createIcon("sun"),r=this.createIcon("moon");e.appendChild(o),e.appendChild(r),this.addToggleStyles(),e.style.cssText=`
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
    `,e.addEventListener("click",i=>{i.preventDefault(),this.toggle()}),document.getElementById("theme-switcher").appendChild(e),this.toggleButton=e,this.updateButtonState()}createIcon(e){let o=document.createElement("div");return o.className=`theme-icon theme-icon-${e}`,e==="sun"?o.innerHTML=`
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
      `:o.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      `,o}addToggleStyles(){if(document.getElementById("theme-toggle-styles"))return;let e=document.createElement("style");e.id="theme-toggle-styles",e.textContent=`
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
        background: var(--dark-surface-1);
        color: #f5f5f5;
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
    `,document.head.appendChild(e)}applyTheme(e,o=!0){let r=document.documentElement;o&&(r.style.transition="color 0.3s ease, background-color 0.3s ease",setTimeout(()=>{r.style.transition=""},300)),e==="dark"?r.classList.add("theme-dark"):r.classList.remove("theme-dark"),this.updateMetaThemeColor(e),window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:e,previousTheme:this.currentTheme}}))}updateMetaThemeColor(e){let o=document.querySelector('meta[name="theme-color"]');o||(o=document.createElement("meta"),o.name="theme-color",document.head.appendChild(o)),o.content=e==="dark"?"#0f0f0f":"#ffffff"}updateButtonState(){if(this.toggleButton){let e=this.currentTheme==="dark";this.toggleButton.setAttribute("aria-label",e?"Switch to light mode":"Switch to dark mode"),this.toggleButton.setAttribute("title",e?"Switch to light mode":"Switch to dark mode")}}toggle(){let e=this.currentTheme==="light"?"dark":"light";this.currentTheme=e,localStorage.setItem("theme",e),this.applyTheme(e,!0),this.updateButtonState(),typeof gtag<"u"&&gtag("event","theme_toggle",{custom_parameter:e})}getCurrentTheme(){return this.currentTheme}setTheme(e){(e==="light"||e==="dark")&&(this.currentTheme=e,localStorage.setItem("theme",e),this.applyTheme(e,!0),this.updateButtonState())}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.themeSwitcher=new Qe}):window.themeSwitcher=new Qe;typeof _e<"u"&&_e.exports&&(_e.exports=Qe)});var ji=Vo(()=>{function ll(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!0);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.add("fade-in-always");return t.querySelector("sl-icon").name="system/close"}function Vi(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!1);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.remove("fade-in-always");return t.querySelector("sl-icon").name="system/menu"}function Le(t,e){let o=t.querySelector(`a[href="${e}"]`);return new URL(o.href).pathname===location.pathname?o.setAttribute("aria-current","page"):o.setAttribute("aria-current","true")}document.addEventListener("turbo:load",()=>{let t=document.querySelector("bridgetown-search-results");t.showResults=!1,t.results=[];let e=document.querySelector("body > nav");Vi(e.querySelector("sl-button[menutoggle]"));for(let o of e.querySelectorAll("a"))o.removeAttribute("aria-current");if(location.pathname==="/")return Le(e,"/");if(location.pathname.startsWith("/docs"))return Le(e,"/docs");if(location.pathname.startsWith("/plugins"))return Le(e,"/plugins");if(location.pathname.startsWith("/community"))return Le(e,"/community");if(location.pathname.startsWith("/blog")||document.body.classList.contains("post"))return Le(e,"/blog")});window.menuHide=Vi;window.menuShow=ll});var xe=globalThis,Ae=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,co=Symbol(),Eo=new WeakMap,ie=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==co)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(Ae&&e===void 0){let r=o!==void 0&&o.length===1;r&&(e=Eo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Eo.set(o,e))}return e}toString(){return this.cssText}},Yo=t=>new ie(typeof t=="string"?t:t+"",void 0,co),U=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((r,i,s)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ie(o,t,co)},bo=(t,e)=>{if(Ae)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of e){let r=document.createElement("style"),i=xe.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,t.appendChild(r)}},Ne=Ae?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let r of e.cssRules)o+=r.cssText;return Yo(o)})(t):t;var{is:$i,defineProperty:qi,getOwnPropertyDescriptor:ts,getOwnPropertyNames:es,getOwnPropertySymbols:os,getPrototypeOf:rs}=Object,wt=globalThis,Jo=wt.trustedTypes,is=Jo?Jo.emptyScript:"",ss=wt.reactiveElementPolyfillSupport,se=(t,e)=>t,Lt={toAttribute(t,e){switch(e){case Boolean:t=t?is:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},We=(t,e)=>!$i(t,e),Ho={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:We};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),wt.litPropertyMetadata??(wt.litPropertyMetadata=new WeakMap);var mt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=Ho){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(e,o),!o.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,o);i!==void 0&&qi(this.prototype,e,i)}}static getPropertyDescriptor(e,o,r){let{get:i,set:s}=ts(this.prototype,e)??{get(){return this[o]},set(l){this[o]=l}};return{get(){return i?.call(this)},set(l){let c=i?.call(this);s.call(this,l),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ho}static _$Ei(){if(this.hasOwnProperty(se("elementProperties")))return;let e=rs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se("properties"))){let o=this.properties,r=[...es(o),...os(o)];for(let i of r)this.createProperty(i,o[i])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[r,i]of o)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[o,r]of this.elementProperties){let i=this._$Eu(o,r);i!==void 0&&this._$Eh.set(i,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)o.unshift(Ne(i))}else e!==void 0&&o.push(Ne(e));return o}static _$Eu(e,o){let r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,o=this.constructor.elementProperties;for(let r of o.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,r){this._$AK(e,r)}_$EC(e,o){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:Lt).toAttribute(o,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,o){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Lt;this._$Em=i,this[i]=l.fromAttribute(o,s.type),this._$Em=null}}requestUpdate(e,o,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??We)(this[e],o))return;this.P(e,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,o,r){this._$AL.has(e)||this._$AL.set(e,o),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(o)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(e){}firstUpdated(e){}};mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[se("elementProperties")]=new Map,mt[se("finalized")]=new Map,ss?.({ReactiveElement:mt}),(wt.reactiveElementVersions??(wt.reactiveElementVersions=[])).push("2.0.4");var ae=globalThis,Oe=ae.trustedTypes,_o=Oe?Oe.createPolicy("lit-html",{createHTML:t=>t}):void 0,ho="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,go="?"+Qt,ls=`<${go}>`,kt=document,ne=()=>kt.createComment(""),ce=t=>t===null||typeof t!="object"&&typeof t!="function",po=Array.isArray,er=t=>po(t)||typeof t?.[Symbol.iterator]=="function",uo=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Po=/-->/g,Ko=/>/g,Dt=RegExp(`>|${uo}(?:([^\\s"'>=/]+)(${uo}*=${uo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$o=/'/g,qo=/"/g,or=/^(?:script|style|textarea|title)$/i,mo=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),Q=mo(1),rr=mo(2),ir=mo(3),V=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),tr=new WeakMap,Mt=kt.createTreeWalker(kt,129);function sr(t,e){if(!po(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return _o!==void 0?_o.createHTML(e):e}var lr=(t,e)=>{let o=t.length-1,r=[],i,s=e===2?"<svg>":e===3?"<math>":"",l=le;for(let c=0;c<o;c++){let n=t[c],b,h,u=-1,p=0;for(;p<n.length&&(l.lastIndex=p,h=l.exec(n),h!==null);)p=l.lastIndex,l===le?h[1]==="!--"?l=Po:h[1]!==void 0?l=Ko:h[2]!==void 0?(or.test(h[2])&&(i=RegExp("</"+h[2],"g")),l=Dt):h[3]!==void 0&&(l=Dt):l===Dt?h[0]===">"?(l=i??le,u=-1):h[1]===void 0?u=-2:(u=l.lastIndex-h[2].length,b=h[1],l=h[3]===void 0?Dt:h[3]==='"'?qo:$o):l===qo||l===$o?l=Dt:l===Po||l===Ko?l=le:(l=Dt,i=void 0);let g=l===Dt&&t[c+1].startsWith("/>")?" ":"";s+=l===le?n+ls:u>=0?(r.push(b),n.slice(0,u)+ho+n.slice(u)+Qt+g):n+Qt+(u===-2?c:g)}return[sr(t,s+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},de=class t{constructor({strings:e,_$litType$:o},r){let i;this.parts=[];let s=0,l=0,c=e.length-1,n=this.parts,[b,h]=lr(e,o);if(this.el=t.createElement(b,r),Mt.currentNode=this.el.content,o===2||o===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Mt.nextNode())!==null&&n.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(ho)){let p=h[l++],g=i.getAttribute(u).split(Qt),m=/([.?@])?(.*)/.exec(p);n.push({type:1,index:s,name:m[2],strings:g,ctor:m[1]==="."?Me:m[1]==="?"?ke:m[1]==="@"?Ge:Tt}),i.removeAttribute(u)}else u.startsWith(Qt)&&(n.push({type:6,index:s}),i.removeAttribute(u));if(or.test(i.tagName)){let u=i.textContent.split(Qt),p=u.length-1;if(p>0){i.textContent=Oe?Oe.emptyScript:"";for(let g=0;g<p;g++)i.append(u[g],ne()),Mt.nextNode(),n.push({type:2,index:++s});i.append(u[p],ne())}}}else if(i.nodeType===8)if(i.data===go)n.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(Qt,u+1))!==-1;)n.push({type:7,index:s}),u+=Qt.length-1}s++}}static createElement(e,o){let r=kt.createElement("template");return r.innerHTML=e,r}};function Gt(t,e,o=t,r){if(e===V)return e;let i=r!==void 0?o._$Co?.[r]:o._$Cl,s=ce(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=i:o._$Cl=i),i!==void 0&&(e=Gt(t,i._$AS(t,e.values),i,r)),e}var De=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:r}=this._$AD,i=(e?.creationScope??kt).importNode(o,!0);Mt.currentNode=i;let s=Mt.nextNode(),l=0,c=0,n=r[0];for(;n!==void 0;){if(l===n.index){let b;n.type===2?b=new Pt(s,s.nextSibling,this,e):n.type===1?b=new n.ctor(s,n.name,n.strings,this,e):n.type===6&&(b=new Te(s,this,e)),this._$AV.push(b),n=r[++c]}l!==n?.index&&(s=Mt.nextNode(),l++)}return Mt.currentNode=kt,i}p(e){let o=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,o),o+=r.strings.length-2):r._$AI(e[o])),o++}},Pt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,r,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Gt(this,e,o),ce(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):er(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==D&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(kt.createTextNode(e)),this._$AH=e}$(e){let{values:o,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=de.createElement(sr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(o);else{let s=new De(i,this),l=s.u(this.options);s.p(o),this.T(l),this._$AH=s}}_$AC(e){let o=tr.get(e.strings);return o===void 0&&tr.set(e.strings,o=new de(e)),o}k(e){po(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,r,i=0;for(let s of e)i===o.length?o.push(r=new t(this.O(ne()),this.O(ne()),this,this.options)):r=o[i],r._$AI(s),i++;i<o.length&&(this._$AR(r&&r._$AB.nextSibling,i),o.length=i)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,r,i,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=o,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=D}_$AI(e,o=this,r,i){let s=this.strings,l=!1;if(s===void 0)e=Gt(this,e,o,0),l=!ce(e)||e!==this._$AH&&e!==V,l&&(this._$AH=e);else{let c=e,n,b;for(e=s[0],n=0;n<s.length-1;n++)b=Gt(this,c[r+n],o,n),b===V&&(b=this._$AH[n]),l||(l=!ce(b)||b!==this._$AH[n]),b===D?e=D:e!==D&&(e+=(b??"")+s[n+1]),this._$AH[n]=b}l&&!i&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Me=class extends Tt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}},ke=class extends Tt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==D)}},Ge=class extends Tt{constructor(e,o,r,i,s){super(e,o,r,i,s),this.type=5}_$AI(e,o=this){if((e=Gt(this,e,o,0)??D)===V)return;let r=this._$AH,i=e===D&&r!==D||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==D&&(r===D||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,o,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Gt(this,e)}},ar={M:ho,P:Qt,A:go,C:1,L:lr,R:De,D:er,V:Gt,I:Pt,H:Tt,N:ke,U:Ge,B:Me,F:Te},as=ae.litHtmlPolyfillSupport;as?.(de,Pt),(ae.litHtmlVersions??(ae.litHtmlVersions=[])).push("3.2.1");var nr=(t,e,o)=>{let r=o?.renderBefore??e,i=r._$litPart$;if(i===void 0){let s=o?.renderBefore??null;r._$litPart$=i=new Pt(e.insertBefore(ne(),s),s,void 0,o??{})}return i._$AI(t),i};var xt=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;let e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nr(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};xt._$litElement$=!0,xt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:xt});var ns=globalThis.litElementPolyfillSupport;ns?.({LitElement:xt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var cr=U`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;var Qo=new Set,Kt=new Map,Xt,Bo="ltr",Fo="en",dr=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(dr){let t=new MutationObserver(br);Bo=document.documentElement.dir||"ltr",Fo=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function be(...t){t.map(e=>{let o=e.$code.toLowerCase();Kt.has(o)?Kt.set(o,Object.assign(Object.assign({},Kt.get(o)),e)):Kt.set(o,e),Xt||(Xt=e)}),br()}function br(){dr&&(Bo=document.documentElement.dir||"ltr",Fo=document.documentElement.lang||navigator.language),[...Qo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Xe=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Qo.add(this.host)}hostDisconnected(){Qo.delete(this.host)}dir(){return`${this.host.dir||Bo}`.toLowerCase()}lang(){return`${this.host.lang||Fo}`.toLowerCase()}getTranslationData(e){var o,r;let i=new Intl.Locale(e.replace(/_/g,"-")),s=i?.language.toLowerCase(),l=(r=(o=i?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",c=Kt.get(`${s}-${l}`),n=Kt.get(s);return{locale:i,language:s,region:l,primary:c,secondary:n}}exists(e,o){var r;let{primary:i,secondary:s}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(i&&i[e]||s&&s[e]||o.includeFallback&&Xt&&Xt[e])}term(e,...o){let{primary:r,secondary:i}=this.getTranslationData(this.lang()),s;if(r&&r[e])s=r[e];else if(i&&i[e])s=i[e];else if(Xt&&Xt[e])s=Xt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...o):s}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,o)}};var ur={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};be(ur);var hr=ur;var G=class extends Xe{};be(hr);var v=U`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var mr=Object.defineProperty,cs=Object.defineProperties,ds=Object.getOwnPropertyDescriptor,bs=Object.getOwnPropertyDescriptors,gr=Object.getOwnPropertySymbols,us=Object.prototype.hasOwnProperty,hs=Object.prototype.propertyIsEnumerable,Co=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),pr=(t,e,o)=>e in t?mr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,H=(t,e)=>{for(var o in e||(e={}))us.call(e,o)&&pr(t,o,e[o]);if(gr)for(var o of gr(e))hs.call(e,o)&&pr(t,o,e[o]);return t},At=(t,e)=>cs(t,bs(e)),a=(t,e,o,r)=>{for(var i=r>1?void 0:r?ds(e,o):e,s=t.length-1,l;s>=0;s--)(l=t[s])&&(i=(r?l(e,o,i):l(i))||i);return r&&i&&mr(e,o,i),i},Qr=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},Br=(t,e,o)=>(Qr(t,e,"read from private field"),o?o.call(t):e.get(t)),Fr=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},Cr=(t,e,o,r)=>(Qr(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o),gs=function(t,e){this[0]=t,this[1]=e},Ur=t=>{var e=t[Co("asyncIterator")],o=!1,r,i={};return e==null?(e=t[Co("iterator")](),r=s=>i[s]=l=>e[s](l)):(e=e.call(t),r=s=>i[s]=l=>{if(o){if(o=!1,s==="throw")throw l;return l}return o=!0,{done:!1,value:new gs(new Promise(c=>{var n=e[s](l);if(!(n instanceof Object))throw TypeError("Object expected");c(n)}),1)}}),i[Co("iterator")]=()=>i,r("next"),"throw"in e?r("throw"):i.throw=s=>{throw s},"return"in e&&r("return"),i};var ps={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:We},ms=(t=ps,e,o)=>{let{kind:r,metadata:i}=o,s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(o.name,t),r==="accessor"){let{name:l}=o;return{set(c){let n=e.get.call(this);e.set.call(this,c),this.requestUpdate(l,n,t)},init(c){return c!==void 0&&this.P(l,void 0,t),c}}}if(r==="setter"){let{name:l}=o;return function(c){let n=this[l];e.call(this,c),this.requestUpdate(l,n,t)}}throw Error("Unsupported decorator location: "+r)};function d(t){return(e,o)=>typeof o=="object"?ms(t,e,o):((r,i,s)=>{let l=i.hasOwnProperty(s);return i.constructor.createProperty(s,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,o)}function R(t){return d({...t,state:!0,attribute:!1})}var zt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);function L(t,e){return(o,r,i)=>{let s=l=>l.renderRoot?.querySelector(t)??null;if(e){let{get:l,set:c}=typeof r=="object"?o:i??(()=>{let n=Symbol();return{get(){return this[n]},set(b){this[n]=b}}})();return zt(o,r,{get(){let n=l.call(this);return n===void 0&&(n=s(this),(n!==null||this.hasUpdated)&&c.call(this,n)),n}})}return zt(o,r,{get(){return s(this)}})}}var ze,I=class extends xt{constructor(){super(),Fr(this,ze,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let o=new CustomEvent(t,H({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){let r=customElements.get(t);if(!r){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let i=" (unknown version)",s=i;"version"in e&&e.version&&(i=" v"+e.version),"version"in r&&r.version&&(s=" v"+r.version),!(i&&s&&i===s)&&console.warn(`Attempted to register <${t}>${i}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,o){Br(this,ze)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Cr(this,ze,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};ze=new WeakMap;I.version="2.18.0";I.dependencies={};a([d()],I.prototype,"dir",2);a([d()],I.prototype,"lang",2);var Zt=class extends I{constructor(){super(...arguments),this.localize=new G(this)}render(){return Q`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zt.styles=[v,cr];var ue=new WeakMap,he=new WeakMap,ge=new WeakMap,Uo=new WeakSet,Ze=new WeakMap,Re=class{constructor(t,e){this.handleFormData=o=>{let r=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!l&&typeof i=="string"&&i.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(c=>{o.formData.append(i,c.toString())}):o.formData.append(i,s.toString()))},this.handleFormSubmit=o=>{var r;let i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=ue.get(this.form))==null||r.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!i&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ze.set(this.host,[])},this.handleInteraction=o=>{let r=Ze.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=H({form:o=>{let r=o.form;if(r){let s=o.getRootNode().querySelector(`#${r}`);if(s)return s}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),Ze.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ze.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ue.has(this.form)?ue.get(this.form).add(this.host):ue.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),he.has(this.form)||(he.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ge.has(this.form)||(ge.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=ue.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),he.has(this.form)&&(this.form.reportValidity=he.get(this.form),he.delete(this.form)),ge.has(this.form)&&(this.form.checkValidity=ge.get(this.form),ge.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Uo.add(t):Uo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,o=!!Uo.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Se=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),xa=Object.freeze(At(H({},Se),{valid:!1,valueMissing:!0})),Aa=Object.freeze(At(H({},Se),{valid:!1,customError:!0}));var yr=U`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;var j=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Ir(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),o="";return[...e].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(o+=r.textContent)}),o}var yo="";function pe(t){yo=t}function Io(t=""){if(!yo){let e=[...document.getElementsByTagName("script")],o=e.find(r=>r.hasAttribute("data-shoelace"));if(o)pe(o.getAttribute("data-shoelace"));else{let r=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src)),i="";r&&(i=r.getAttribute("src")),pe(i.split("/").slice(0,-1).join("/"))}}return yo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Qs={name:"default",resolver:t=>Io(`assets/icons/${t}.svg`)},fr=Qs;var vr={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Bs={name:"system",resolver:t=>t in vr?`data:image/svg+xml,${encodeURIComponent(vr[t])}`:""},wr=Bs;var Ve=[fr,wr],je=[];function Lr(t){je.push(t)}function xr(t){je=je.filter(e=>e!==t)}function fo(t){return Ve.find(e=>e.name===t)}function Ee(t,e){Ar(t),Ve.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),je.forEach(o=>{o.library===t&&o.setIcon()})}function Ar(t){Ve=Ve.filter(e=>e.name!==t)}var Nr=U`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function O(t,e){let o=H({waitUntilFirstUpdate:!1},e);return(r,i)=>{let{update:s}=r,l=Array.isArray(t)?t:[t];r.update=function(c){l.forEach(n=>{let b=n;if(c.has(b)){let h=c.get(b),u=this[b];h!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,u)}}),s.call(this,c)}}}var{I:Ha}=ar;var Wr=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Ye=t=>t.strings===void 0;var Fs={},Or=(t,e=Fs)=>t._$AH=e;var me=Symbol(),Je=Symbol(),vo,wo=new Map,k=class extends I{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let r;if(e?.spriteSheet)return this.svg=Q`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?me:Je}catch{return Je}try{let i=document.createElement("div");i.innerHTML=await r.text();let s=i.firstElementChild;if(((o=s?.tagName)==null?void 0:o.toLowerCase())!=="svg")return me;vo||(vo=new DOMParser);let c=vo.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):me}catch{return me}}connectedCallback(){super.connectedCallback(),Lr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),xr(this)}getIconSource(){let t=fo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:o}=this.getIconSource(),r=o?fo(this.library):void 0;if(!e){this.svg=null;return}let i=wo.get(e);if(i||(i=this.resolveIcon(e,r),wo.set(e,i)),!this.initialRender)return;let s=await i;if(s===Je&&wo.delete(e),e===this.getIconSource().url){if(Wr(s)){if(this.svg=s,r){await this.updateComplete;let l=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&l&&r.mutator(l)}return}switch(s){case Je:case me:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(t=r?.mutator)==null||t.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};k.styles=[v,Nr];a([R()],k.prototype,"svg",2);a([d({reflect:!0})],k.prototype,"name",2);a([d()],k.prototype,"src",2);a([d()],k.prototype,"label",2);a([d({reflect:!0})],k.prototype,"library",2);a([O("label")],k.prototype,"handleLabelChange",1);a([O(["name","src","library"])],k.prototype,"setIcon",1);var rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=t=>(...e)=>({_$litDirective$:t,values:e}),Nt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};var N=Rt(class extends Nt{constructor(t){if(super(t),t.type!==rt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let o=t.element.classList;for(let r of this.st)r in e||(o.remove(r),this.st.delete(r));for(let r in e){let i=!!e[r];i===this.st.has(r)||this.nt?.has(r)||(i?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return V}});var Mr=Symbol.for(""),Cs=t=>{if(t?.r===Mr)return t?._$litStatic$};var $t=(t,...e)=>({_$litStatic$:e.reduce((o,r,i)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:Mr}),Dr=new Map,Lo=t=>(e,...o)=>{let r=o.length,i,s,l=[],c=[],n,b=0,h=!1;for(;b<r;){for(n=e[b];b<r&&(s=o[b],(i=Cs(s))!==void 0);)n+=i+e[++b],h=!0;b!==r&&c.push(s),l.push(n),b++}if(b===r&&l.push(e[r]),h){let u=l.join("$$lit$$");(e=Dr.get(u))===void 0&&(l.raw=l,Dr.set(u,e=l)),o=c}return t(e,...o)},qt=Lo(Q),Bn=Lo(rr),Fn=Lo(ir);var B=t=>t??D;var x=class extends I{constructor(){super(...arguments),this.formControlController=new Re(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new j(this,"[default]","prefix","suffix"),this.localize=new G(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Se}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?$t`a`:$t`button`;return qt`
      <${e}
        part="base"
        class=${N({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:this.type)}
        title=${this.title}
        name=${B(t?void 0:this.name)}
        value=${B(t?void 0:this.value)}
        href=${B(t&&!this.disabled?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t?this.rel:void 0)}
        role=${B(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?qt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?qt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};x.styles=[v,yr];x.dependencies={"sl-icon":k,"sl-spinner":Zt};a([L(".button")],x.prototype,"button",2);a([R()],x.prototype,"hasFocus",2);a([R()],x.prototype,"invalid",2);a([d()],x.prototype,"title",2);a([d({reflect:!0})],x.prototype,"variant",2);a([d({reflect:!0})],x.prototype,"size",2);a([d({type:Boolean,reflect:!0})],x.prototype,"caret",2);a([d({type:Boolean,reflect:!0})],x.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],x.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],x.prototype,"outline",2);a([d({type:Boolean,reflect:!0})],x.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],x.prototype,"circle",2);a([d()],x.prototype,"type",2);a([d()],x.prototype,"name",2);a([d()],x.prototype,"value",2);a([d()],x.prototype,"href",2);a([d()],x.prototype,"target",2);a([d()],x.prototype,"rel",2);a([d()],x.prototype,"download",2);a([d()],x.prototype,"form",2);a([d({attribute:"formaction"})],x.prototype,"formAction",2);a([d({attribute:"formenctype"})],x.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],x.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],x.prototype,"formTarget",2);a([O("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);x.define("sl-button");k.define("sl-icon");Zt.define("sl-spinner");var kr=["\u042F \u0432 \u0442\u043E\u043C \u0433\u043E\u0434\u0443 \u043D\u0430\u0447\u0438\u0442\u0430\u043B\u0441\u044F \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u0432\u0441\u0435 \u0447\u0442\u043E \u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u0447\u0438\u0442\u0430\u0435\u0448\u044C. \u042F \u0442\u0430\u043A \u0438 \u043D\u0435 \u0440\u0435\u0448\u0438\u043B\u0441\u044F \u043E\u0434\u0438\u043D.","\u0411\u043B\u0438\u043D, \u041A\u043E\u043B\u044C, \u0442\u044B \u0443\u0436\u0435 \u043F\u0440\u043E\u0437\u0440\u0435\u043B:) \u043D\u043E \u0434\u043E\u0441\u0442\u0443\u0447\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u043E\u0436\u043D\u043E, \u043D\u0430\u0434\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u0443\u0442\u0435\u043C \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u043F\u044B\u0442. \u0418 \u043E\u0441\u043E\u0437\u043D\u0430\u0442\u044C. \u0410 \u043F\u0443\u0442\u044C \u0432\u0441\u0435 \u0442\u0430\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0435\u043D. \u041C\u0435\u043D\u044F \u043F\u043E\u0434\u0432\u044B\u0442\u0430\u0449\u0438\u043B \u0442\u043E\u0447\u043D\u043E","\u0423\u0442\u0440\u043E \u0434\u043E\u0431\u0440\u043E\u0435! \u041A\u043E\u043B\u044C, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E \u0443\u0442\u0440\u043E\u043C \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0438 \u0431\u0435\u0433\u0443 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0447\u0442\u043E \u0442\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B. \u0421\u043F\u0430\u0441\u0438\u0431\u043E","\u0420\u0435\u0431\u0435\u043D\u043E\u043A \u0441\u0442\u0430\u043B \u0431\u043E\u043B\u0435\u0435 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439. \u041E\u043D \u0432\u0440\u043E\u0434\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u043E\u0432\u043D\u0435\u0435. \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u{1F44D}","\u0427\u0442\u043E \u0442\u043E \u044F \u0447\u0430\u0441\u0442\u043E \u0441\u0442\u0430\u043B \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F","\u041C\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0441\u0442\u0430\u043B\u043E \u0434\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043E \u0447\u0435\u043C \u043A\u043D\u0438\u0436\u043A\u0438","\u042F \u043D\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B \u0431\u044B \u0441\u0430\u043C \u0435\u0441\u043B\u0438 \u0431\u044B \u043D\u0435 \u0442\u044B, \u043D\u043E \u044F \u043D\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043B\u0441\u044F \u0438 \u043D\u0435 \u0447\u0438\u0442\u0430\u043B \u043D\u0438\u0447\u0435\u0433\u043E \u0434\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430.","\u0415\u0441\u043B\u0438 \u0431\u044B \u043C\u043D\u0435 \u0442\u0432\u043E\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043F\u043E\u043F\u0430\u043B\u0430\u0441\u044C \u043B\u0435\u0442 7-8 \u043D\u0430\u0437\u0430\u0434, \u044F \u0431\u044B \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u043F\u0440\u044B\u0433\u043D\u0443\u043B \u0432 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 \u0438 \u043F\u0440\u0438\u043B\u0435\u0442\u0435\u043B.","\u042F \u043A\u0430\u043A \u044D\u0442\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0434\u0430\u0432\u043D\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u044E \u0441\u0435\u0431\u044F \u0432 \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u0438.","\u0422\u0430\u043A \u0438 \u0432 \u0431\u043E\u0433\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0448\u044C...","\u0412\u0441\u0435 \u043A\u0430\u043A \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0447\u0442\u043E \u043B\u0438?","\u0427\u0442\u043E-\u0442\u043E \u0443 \u043C\u0435\u043D\u044F \u043E\u0442 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430 \u0443\u0436\u0435, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0431\u043E\u043E\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442","Last year, I probably read everything you're reading now. I never dared to do it alone.","Man, you've already seen the light :) But it's hard to get through, one has to go through the journey and gain experience himself. And understand. The path is still individual. It certainly pulled me out.","Good morning! I open the notebook in the morning and rush to see what you've written. Thank you.","The child has become calmer. He's the same, but just more even-tempered. Thanks \u{1F44D}.","I've been finding myself returning to childhood quite often.","It was only afterwards that I started to grasp what the books were really about.","I wouldn't have tried it myself if it weren't for you, but I wasn't interested and hadn't read anything until that moment.","If I had come across your program like 7-8 years ago, I probably would have jumped on a plane and flown over.","Since this story started, I hardly remember feeling depressed.","This makes you believe in God...","Is everything as it should be, perhaps?","Seems like I'm already feeling a huuuge effect from just one conversation.","\u041F\u0440\u0438\u0432\u0435\u0442, \u041A\u043E\u043B\u044F! \u041E\u0448\u0435\u043B\u043E\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u044B\u0442","\u042D\u0442\u043E \u043B\u0443\u0447\u0448\u0435\u0435 \u0447\u0442\u043E \u0431\u044B\u043B\u043E \u0432 \u043C\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438) \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u2665\uFE0F","\u041D\u0430\u0434\u0435\u044E\u0441\u044C \u043D\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435, \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C.","\u041E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C - \u0434\u0430\u0436\u0435 \u043D\u0435 \u0442\u0435 \u0441\u043B\u043E\u0432\u0430. \u041D\u0435 \u0441 \u0447\u0435\u043C \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C - \u0431\u044B\u043B\u043E \u0431\u044B \u0442\u043E\u0447\u043D\u0435\u0435.","\u041E\u0447\u0435\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C \u043C\u044B\u0441\u043B\u0438, \u043A\u0430\u043A \u043C\u044B\u0441\u043B\u044C \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043F\u043E\u043B\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0441\u0435\u0431\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0441 \u0411\u043E\u0433\u043E\u043C.","\u041B\u044E\u0431\u043E\u0432\u044C - \u043D\u0430 \u0432\u0441\u0451 \u043E\u0442\u0432\u0435\u0442 \u0432 \u0438\u0442\u043E\u0433\u0435. \u0422\u0430 \u0441\u0430\u043C\u0430\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0442\u0432\u043E\u0440\u0438\u0442 \u043C\u0438\u0440\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u0438 \u0441\u043D\u0430\u0440\u0443\u0436\u0438.","\u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u044D\u0442\u043E\u0442 \u043D\u0435\u0437\u0430\u0431\u044B\u0432\u0430\u0435\u043C\u044B\u0439 \u0438 \u0437\u043D\u0430\u0447\u0438\u043C\u044B\u0439 \u043E\u043F\u044B\u0442! \u042D\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043D\u043D\u043E!","\u041F\u043E\u043B\u044C\u0437\u0430 \u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438: \u043F\u043E\u044F\u0432\u0438\u043B\u043E\u0441\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043C\u0438\u0440\u0430. \u0418\u043D\u043E\u0433\u0434\u0430 \u043E\u043D\u043E \u0437\u0430\u0431\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043D\u043E \u043E\u043D\u043E \u0435\u0441\u0442\u044C \u0432\u043E \u043C\u043D\u0435.","\u0412\u0441\u0451 \u044D\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u043B\u043E \u043C\u0435\u043D\u044F \u0432 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438\u043C\u0435\u0435\u0442 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0435\u0449\u0451 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F, \u043F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F.","\u041A\u043E\u043B\u044F, \u043F\u0440\u0438\u0432\u0435\u0442, \u0443 \u043C\u0435\u043D\u044F \u0442\u0443\u0442 \u0432\u0441\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0432\u043E\u0438 \u043C\u0435\u0441\u0442\u0430 \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u0438 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0435\u0442\u0441\u044F, \u043A\u0430\u043A \u043D\u0430\u0434\u043E! \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0438\u0434\u0435\u0442! \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C, \u0432\u044B \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u{1F600}","\u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0443\u0434\u0443 \u0432\u044B\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u043E\u0432\u043A\u0443 \u0441\u044E\u0434\u0430 \u{1F600}","\u0422\u0430\u043A\u0430\u044F \u043F\u0440\u0438\u044F\u0442\u043D\u0430\u044F \u0433\u0440\u0443\u0441\u0442\u044C, \u044F \u0440\u0430\u0434\u0430, \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A \u043A\u043B\u0430\u0441\u0441\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C !","\u0420\u0430\u043D\u044C\u0448\u0435 \u0441\u043B\u044B\u0448\u0430\u043B\u0430 \u043C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0431\u0440\u0435\u0434","\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u043E \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0443\u0436\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u2026 \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A, \u043A\u0430\u043A \u0435\u0441\u0442\u044C, \u0438 \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0435\u0442","\u042F \u0432\u0438\u0436\u0443 \u0447\u0442\u043E \u0435\u0449\u0435 \u0435\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u044C \u0432\u043F\u0435\u0440\u0435\u0434\u0438 \u0438 \u043A\u0430\u043A\u043E\u0439 \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442, \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442 \u043C\u0435\u043D\u044F","\u041C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u043E\u0432\u043E\u0433\u043E \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0443\u0436\u0435 \u043E\u0441\u043E\u0431\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442","\u0421\u0435\u0439\u0447\u0430\u0441 \u0442\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0441\u0442\u0438. \u041D\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u043F\u043B\u0435\u0441\u043A\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u0430\u044F \u0436\u0438\u0437\u043D\u044C \u0432\u043D\u0435 \u041F\u0445\u0443\u043A\u0435\u0442\u0430 \u{1F600}","\u042F \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0441\u0438\u0445\u0443\u044E \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0438 \u043E\u0442 \u0447\u0435\u0433\u043E, \u0445\u043E\u0442\u044F \u0435\u0449\u0435 \u043D\u0435\u0434\u0435\u043B\u044E \u043D\u0430\u0437\u0430\u0434 \u043F\u0441\u0438\u0445\u043E\u0432\u0430\u043B\u0430 \u0431\u044B","\u0421\u043C\u044B\u0441\u043B \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u044F \u043D\u0435 \u043D\u0435 \u043D\u0430 \u0442\u043E \u0442\u0440\u0430\u0442\u0438\u043B\u0430 \u0441\u0432\u043E\u044E \u0441\u0438\u043B\u0443 \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044E","\u0423 \u043C\u0435\u043D\u044F \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u0441\u043C\u044B\u0441\u043B \u{1F600}","\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C! \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u043D\u0438 \u0441 \u0447\u0435\u043C \u043D\u0435\u0441\u0440\u0430\u0432\u043D\u0438\u043C\u043E !!!","Hi, Nick! An astounding experience.","This is the best thing that happened in my life) Thank you \u2665\uFE0F.","Hoping for a continuation, as I really liked it.","Liked it a lot - even that's an understatement. 'Nothing to compare it with' would be more accurate.","The obviousness of thought, how thought shapes the field of self-perception from outside, meeting with God.","Love - ultimately, the answer to everything. The very one that creates worlds inside and outside.","Immense gratitude for this unforgettable and significant experience! It's very valuable!","Life benefit: a sense of world safety emerged. Sometimes it's forgotten, but it's there in me.","All of this together moved me into a completely new space, which has the potential to unfold into an even newer experience and a qualitatively different way of living and expressing myself.","Hello, Kolya, everything's falling into place in my head and settling as it should! The process is ongoing! Thank you both, you can't even imagine what you've done \u{1F600}.","Now I'll be vying for another trip here \u{1F600}.","Such pleasant sadness, I'm glad that everything turned out so great!","I used to hear and think it was such a beautifully crazy nonsense.","I had a feeling that nothing could be undone anymore\u2026 that things are as they are, with no way out.","I see now that there's still life ahead and how it will be is up to me.","I thought nothing new or interesting would happen again.","Currently, I'm in a state of fulfillment. Don't want to spill it when regular life starts outside Phuket \u{1F600}.","I'm not freaking out about anything right now, even though I would have a week ago.","The point is that I wasn't spending my strength and energy on the right things.","A sense of purpose has emerged in my mind \u{1F600}.","Thank you both so much! It was incomparable !!!","\u0412\u0441\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u0435\u0442\u0441\u044F \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E, \u043F\u043E\u0434 \u043D\u0430\u0448\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0434\u0430?","\u0412\u043E\u043E\u0431\u0449\u0435\u043C \u0443 \u043C\u0435\u043D\u044F \u0442\u0430\u043A\u043E\u0435: \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u043B\u043E\u0434\u043E, \u043D\u0435 \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044F \u0441\u0435\u0431\u044F, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C \u0432 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043D\u0438\u0438 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F.","\u0412\u0435\u0440\u043D\u0443\u043B\u043E\u0441\u044C \u044F - \u044D\u0442\u043E \u044F, \u0430 \u043D\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B, \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0434\u043E\u043C\u0443, \u043E\u0442\u0434\u0430\u043D\u0438\u044F \u0434\u043E\u043B\u0433\u0430 \u043F\u0440\u0435\u0434\u043A\u0430\u043C.","\u041F\u0440\u043E\u0441\u0442\u043E \u043E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044F \u0442\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440 \u0438 \u0434\u0438\u0440\u0438\u0436\u0435\u0440, \u0438 \u043C\u0443\u0437\u044B\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u044F. \u041F\u0440\u043E\u0441\u0442\u043E \u0436\u0438\u0432\u0443.","\u0410 \u0441\u0435\u0439\u0447\u0430\u0441 \u043E\u0442\u043F\u0443\u0441\u0442\u0438\u043B\u043E. \u0412\u0441\u0435 \u0436\u0435 \u0445\u043E\u0440\u043E\u0448\u043E. \u042F \u0442\u0430\u043A \u0436\u0435 \u0438\u0445 \u043B\u044E\u0431\u043B\u044E \u0438 \u0437\u0430\u0431\u043E\u0447\u0443\u0441\u044C, \u043D\u043E \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u044B\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0431\u044F \u043D\u0430 \u043A\u0443\u0441\u043A\u0438","\u041F\u0440\u0430\u0432 \u0442\u044B \u0431\u044B\u043B, \u043A\u043E\u0433\u0434\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u043B \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u043E \u043A \u0447\u0435\u043C\u0443 \u043B\u044E\u0434\u0438 \u0433\u043E\u0434\u0430\u043C\u0438 \u0438\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0438\u044E \u0438 \u043F\u0440.","\u0422\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u043B \u043C\u043E\u0438 true colors \u0432 \u043C\u043E\u0435\u043C \u0441\u0438\u044F\u044E\u0449\u0435\u043C \u043D\u0435\u0431\u0435","\u0411\u044B\u043B \u043C\u043E\u043C\u0435\u043D\u0442 \u043A\u043E\u0433\u0434\u0430 \u044F \u0438\u0441\u043F\u0443\u0433\u0430\u043B\u0430\u0441\u044C \u0447\u0442\u043E \u044F \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0432 \xAB\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0436\u0438\u0437\u043D\u044C \u0441 \u043F\u044F\u0442\u0435\u0440\u043E\u0447\u043A\u043E\u0439\xBB","\u042F \u0432\u0441\u0435 \u043F\u043E\u043C\u043D\u044E!","\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0430 \u043D\u0430 \u0442\u0435\u0431\u044F \u043F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E!","\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u043F\u043E\u0434\u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435.","\u0418 \u0437\u043D\u0430\u0435\u0448\u044C, \u0432\u043E\u0442 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u0432\u0441\u0435 \u0445\u043E\u0440\u043E\u0448\u043E","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0443 \u043C\u0435\u043D\u044F \u0432 \u0446\u0435\u043B\u043E\u043C \u043C\u043E\u0437\u0433 \u0441\u0442\u0430\u043B \u0436\u0438\u0432\u044B\u043C \u0432 \u043F\u043B\u0430\u043D\u0435 \u0443\u043B\u0435\u0442\u043E\u0432 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438","Everything shapes up harmoniously, to our tuning, right?","So here's my thing: I feel young, without judging myself, not needing to justify my existence.","I returned to being me - not just an app for work, housework, or repaying ancestral debts.","Turns out, I'm the composer and conductor here, and the music is for me. Just living.","And now it's let go. Everything is fine. I still love and care for them, but without tearing myself apart.","You were right when you said that this is what people take years of psychotherapy to reach.","You revealed my true colors in my shining sky.","There was a moment when I was scared that I wouldn't return to a 'normal life with grades'.","I remember everything!","I'm subscribed to you for life!","A journey into the subconscious.","And you know, I have this feeling that everything is alright.","I think my brain in general has become alive in terms of flights of fantasy.","\u0412\u0441\u0435 \u0445\u0435\u0440\u043D\u044F, \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0431\u044B\u043B \u043F\u0440\u0430\u0432, \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0441\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0435\u0433\u043E \u0437\u0430\u0432\u0435\u0442\u0430\u043C","\u0415\u0449\u0435 \u0440\u0430\u0437, \u0432\u0441\u0435 \u0447\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u0438\u0441\u0442\u0438\u043D\u0430","\u042F \u043D\u0435 \u0432\u0435\u0440\u0438\u043B \u0432 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u041D\u0438\u043A\u043E\u043B\u0430\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0433\u043E\u0434\u0430-\u0434\u0432\u0443\u0445","\u0412\u043E\u0431\u0449\u0435\u043C \u0432\u0441\u0435 \u0447\u0442\u043E \u043C\u043D\u0435 \u0432\u0435\u0449\u0430\u043B \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u043F\u0440\u0430\u0432\u0434\u0430. \u0425\u043E\u0447\u0435\u0448\u044C \u0431\u044B\u0442\u044C \u043F\u0441\u0438-\u043C\u0443\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0441\u043E\u0431\u0430\u043A\u043E\u0439, \u0434\u0435\u043B\u0430\u0439 \u043A\u0430\u043A \u043E\u043D","\u042F \u043F\u043E \u0442\u0432\u043E\u0438\u043C \u0437\u0430\u0432\u0435\u0442\u0430\u043C \u0441\u0442\u0430\u043B \u0436\u0438\u0442\u044C","\u041B\u0443\u0447\u0448\u0435\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u0436\u0438\u0437\u043D\u0438","Everything else is nonsense, Nick is right, I strictly adhere to his teachings.","Again, everything Nick writes is the truth.","I didn't believe in Nick's stories for about a year or two.","In short, everything Nick told me is true. If you want to be a psi-mutated dog, do as he does.","I started living by your teachings.","The best decision in life.","\u041D\u0435\u0442, \u043D\u0435 \u0441\u0430\u043C\u043E\u0432\u043D\u0443\u0448\u0435\u043D\u0438\u0435. \u042F \u0442\u043E\u0436\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043B \u0432\u043E\u0441\u0442\u043E\u0440\u0433 \u043E\u0442 \u0442\u043E\u0433\u043E \u043A\u0430\u043A\u043E\u0439 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043C\u0438\u0440 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C.","\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u043B\u0430\u0441\u044C \u043D\u0430 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0435\u0435.","\u0414\u043E \u044D\u0442\u043E\u0433\u043E \u044D\u0442\u043E \u0431\u044B\u043B\u0430 \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0440\u0430\u044F \u043F\u043B\u043E\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430.","C\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0438 \u0432\u043D\u043E\u0441\u0438\u0442 \u0432 \u0436\u0435\u043B\u0430\u0435\u043C\u0443\u044E \u043C\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u0443 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043A\u0440\u0430\u0441\u043A\u0438.","\u0418 \u044F \u0431\u044B \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u043D\u044F\u043B \u0438 \u043D\u0435 \u043E\u0441\u043E\u0437\u043D\u0430\u043B \u0441\u0435\u0439\u0447\u0430\u0441 \u0435\u0441\u043B\u0438 \u0431\u044B \u0442\u044B \u043D\u0435 \u043F\u043E\u0434\u0435\u043B\u0438\u043B\u0441\u044F \u044D\u0442\u0438\u043C","\u0417\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043A\u0440\u0430\u0441\u043E\u043A, \u043C\u0435\u043B\u043A\u0438\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u043C\u043E\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u041C\u0438\u0440\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u2014 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438)","No, it's not self-delusion. I too was thrilled by how cool the world can actually be.","After that, my worldview split into many factors that shape it.","Before, it was a monolithic, grey, flat picture of the world.","I try to recognize and improve each element that gets out of control and brings inappropriate colors into the picture of the world I desire.","And I wouldn't have understood or realized this now if you hadn't shared it.","I'm working on correcting the colors, the small details of my World picture. Each of us is the artist of our life)","Bro if you have the secret powers to sort people out, do it as much as possible I say \u{1F601}","I wish I\u2019d started sooner as well \u{1F62C} This is amazing man!","Doing amazing. Quit smoking a month ago.","Am managing to keep the alcohol at bay without much trouble.","My back spasm released itself...5 kms later I was like - whoa, this was impossible just yesterday.","hahahah I will see you in January for my second trip!","I remember the rocks and trees as bodhisatvas from that trip and now I see them everywhere, gently smiling and looking out for me.","I keep remembering you standing in the door, glowing because the trip had kicked in and saying to me - enjoy your life.","I\u2019m just focused on the homework and getting healthy.","Please write it man. There are so many books and they all find the readers they need to.","Don't remember much else about BKK than the crazy Russian \u{1F60B}","Fuck yes. Do it. Seems this is your calling.","The struggles of daily life have certainly returned but I\u2019m grateful for the perspective","I want to explore more!","Came home with such a renewed appreciation for my family and my wife","Also really interesting introspection on the stimulus I let into my life daily. Lots of meta perspective about life."].sort(()=>Math.random()-.5),Gr=document.getElementById("testimonials");function Us(t){let e=document.createElement("div");e.classList.add("testimonial-box","bg-sky-100"),e.style.left=`${Math.round(Math.random()*(window.innerWidth-316))}px`,e.textContent=t,Gr.appendChild(e),setTimeout(()=>{e.remove()},5900)}var He=0;function ys(){if(He<kr.length){let t=kr[He];Us(t),He++}else He=0}Gr&&setTimeout(()=>{setInterval(ys,6e3)},6e3);var Tr=["IN CONTROL","IN LINE","IN ORDER","IN YOUR HANDS","IN ALIGNMENT","IN BALANCE","IN BLOOM","IN CONTROL","IN FOCUS","IN GEAR","IN HARMONY","IN MOTION","IN ORDER","IN PERSPECTIVE","IN RHYTHM","IN SHAPE","IN SYNC","IN THE GROOVE","IN THE MIX","IN THE RING","IN THE SADDLE","IN TOUCH","IN TUNE"],Xr,zr=function(){(Xr=document.getElementById("lifeline"))&&(Xr.innerText=Tr[Math.floor(Math.random()*Tr.length)],setTimeout(zr,3e3))};setTimeout(zr,3e3);var l1=jo(Zr());var Rr=U`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var X=class extends I{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?$t`a`:$t`button`;return qt`
      <${e}
        part="base"
        class=${N({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:"button")}
        href=${B(t?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t&&this.target?"noreferrer noopener":void 0)}
        role=${B(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};X.styles=[v,Rr];X.dependencies={"sl-icon":k};a([L(".icon-button")],X.prototype,"button",2);a([R()],X.prototype,"hasFocus",2);a([d()],X.prototype,"name",2);a([d()],X.prototype,"library",2);a([d()],X.prototype,"src",2);a([d()],X.prototype,"href",2);a([d()],X.prototype,"target",2);a([d()],X.prototype,"download",2);a([d()],X.prototype,"label",2);a([d({type:Boolean,reflect:!0})],X.prototype,"disabled",2);var Vr=new Map,Is=new WeakMap;function fs(t){return t??{keyframes:[],options:{duration:0}}}function Sr(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function P(t,e){Vr.set(t,fs(e))}function K(t,e,o){let r=Is.get(t);if(r?.[e])return Sr(r[e],o.dir);let i=Vr.get(e);return i?Sr(i,o.dir):{keyframes:[],options:{duration:0}}}function Bt(t,e){return new Promise(o=>{function r(i){i.target===t&&(t.removeEventListener(e,r),o())}t.addEventListener(e,r)})}function $(t,e,o){return new Promise(r=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");let i=t.animate(e,At(H({},o),{duration:vs()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function vs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function it(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var jr=U`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;var te=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),E=class extends I{constructor(){super(...arguments),this.hasSlotController=new j(this,"icon","suffix"),this.localize=new G(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this,e="100%",o="0";this.countdownAnimation=t.animate([{width:e},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await it(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=K(this,"alert.show",{dir:this.localize.dir()});await $(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await it(this.base);let{keyframes:t,options:e}=K(this,"alert.hide",{dir:this.localize.dir()});await $(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),te.parentElement===null&&document.body.append(te),te.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{te.removeChild(this),t(),te.querySelector("sl-alert")===null&&te.remove()},{once:!0})})}render(){return Q`
      <div
        part="base"
        class=${N({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?Q`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?Q`
              <div
                class=${N({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};E.styles=[v,jr];E.dependencies={"sl-icon-button":X};a([L('[part~="base"]')],E.prototype,"base",2);a([L(".alert__countdown-elapsed")],E.prototype,"countdownElement",2);a([d({type:Boolean,reflect:!0})],E.prototype,"open",2);a([d({type:Boolean,reflect:!0})],E.prototype,"closable",2);a([d({reflect:!0})],E.prototype,"variant",2);a([d({type:Number})],E.prototype,"duration",2);a([d({type:String,reflect:!0})],E.prototype,"countdown",2);a([R()],E.prototype,"remainingTime",2);a([O("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);a([O("duration")],E.prototype,"handleDurationChange",1);P("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});P("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});E.define("sl-alert");var Er=U`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;var st=class extends I{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=Q`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,e=Q``;return this.initials?e=Q`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=Q`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,Q`
      <div
        part="base"
        class=${N({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};st.styles=[v,Er];st.dependencies={"sl-icon":k};a([R()],st.prototype,"hasError",2);a([d()],st.prototype,"image",2);a([d()],st.prototype,"label",2);a([d()],st.prototype,"initials",2);a([d()],st.prototype,"loading",2);a([d({reflect:!0})],st.prototype,"shape",2);a([O("image")],st.prototype,"handleImageChange",1);st.define("sl-avatar");var Yr=U`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var St=class extends I{constructor(){super(...arguments),this.localize=new G(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,o)=>{let r=e.querySelector('[slot="separator"]');r===null?e.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),Q`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};St.styles=[v,Yr];St.dependencies={"sl-icon":k};a([L("slot")],St.prototype,"defaultSlot",2);a([L('slot[name="separator"]')],St.prototype,"separatorSlot",2);a([d()],St.prototype,"label",2);St.define("sl-breadcrumb");var Jr=U`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;var Ft=class extends I{constructor(){super(...arguments),this.hasSlotController=new j(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return Q`
      <div
        part="base"
        class=${N({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?Q`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${B(this.target?this.target:void 0)}"
                rel=${B(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?Q`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?Q`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Ft.styles=[v,Jr];a([L("slot:not([name])")],Ft.prototype,"defaultSlot",2);a([R()],Ft.prototype,"renderType",2);a([d()],Ft.prototype,"href",2);a([d()],Ft.prototype,"target",2);a([d()],Ft.prototype,"rel",2);a([O("href",{waitUntilFirstUpdate:!0})],Ft.prototype,"hrefChanged",1);Ft.define("sl-breadcrumb-item");var Hr=U`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var xo=class extends I{constructor(){super(...arguments),this.hasSlotController=new j(this,"footer","header","image")}render(){return Q`
      <div
        part="base"
        class=${N({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};xo.styles=[v,Hr];xo.define("sl-card");var _r=new WeakMap;function Pr(t){let e=_r.get(t);return e||(e=window.getComputedStyle(t,null),_r.set(t,e)),e}function ws(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=Pr(t);return e.visibility!=="hidden"&&e.display!=="none"}function Ls(t){let e=Pr(t),{overflowY:o,overflowX:r}=e;return o==="scroll"||r==="scroll"?!0:o!=="auto"||r!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&r==="auto"}function xs(t){let e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!ws(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Ls(t)}function Kr(t){var e,o;let r=Pe(t),i=(e=r[0])!=null?e:null,s=(o=r[r.length-1])!=null?o:null;return{start:i,end:s}}function As(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function Pe(t){let e=new WeakMap,o=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||e.has(i))return;e.set(i,!0),!o.includes(i)&&xs(i)&&o.push(i),i instanceof HTMLSlotElement&&As(i,t)&&i.assignedElements({flatten:!0}).forEach(s=>{r(s)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}for(let s of i.children)r(s)}return r(t),o.sort((i,s)=>{let l=Number(i.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-l})}function*Ao(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Ur(Ao(t.shadowRoot.activeElement))))}function Ns(){return[...Ao()].pop()}var Be=[],$r=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let r=Ns();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let i=Pe(this.element),s=i.findIndex(c=>c===r);this.previousFocus=this.currentFocus;let l=this.tabDirection==="forward"?1:-1;for(;;){s+l>=i.length?s=0:s+l<0?s=i.length-1:s+=l,this.previousFocus=this.currentFocus;let c=i[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||c&&this.possiblyHasTabbableChildren(c))return;e.preventDefault(),this.currentFocus=c,(o=this.currentFocus)==null||o.focus({preventScroll:!1});let n=[...Ao()];if(n.includes(this.currentFocus)||!n.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Be.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Be=Be.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Be[Be.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=Pe(this.element);if(!this.element.matches(":focus-within")){let e=t[0],o=t[t.length-1],r=this.tabDirection==="forward"?e:o;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var No=new Set;function Ws(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Os(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Wo(t){if(No.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let e=Ws()+Os(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Oo(t){No.delete(t),No.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var qr=U`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var lt=class extends I{constructor(){super(...arguments),this.hasSlotController=new j(this,"footer"),this.localize=new G(this),this.modal=new $r(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Wo(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.modal.deactivate(),Oo(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let o=K(this,"dialog.denyClose",{dir:this.localize.dir()});$(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Wo(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([it(this.dialog),it(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=K(this,"dialog.show",{dir:this.localize.dir()}),o=K(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([$(this.panel,e.keyframes,e.options),$(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([it(this.dialog),it(this.overlay)]);let t=K(this,"dialog.hide",{dir:this.localize.dir()}),e=K(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([$(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),$(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Oo(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bt(this,"sl-after-hide")}render(){return Q`
      <div
        part="base"
        class=${N({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":Q`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};lt.styles=[v,qr];lt.dependencies={"sl-icon-button":X};a([L(".dialog")],lt.prototype,"dialog",2);a([L(".dialog__panel")],lt.prototype,"panel",2);a([L(".dialog__overlay")],lt.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],lt.prototype,"open",2);a([d({reflect:!0})],lt.prototype,"label",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],lt.prototype,"noHeader",2);a([O("open",{waitUntilFirstUpdate:!0})],lt.prototype,"handleOpenChange",1);P("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});P("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});P("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});P("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});P("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});lt.define("sl-dialog");var ti=U`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var Fe=class extends I{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Fe.styles=[v,ti];a([d({type:Boolean,reflect:!0})],Fe.prototype,"vertical",2);a([O("vertical")],Fe.prototype,"handleVerticalChange",1);Fe.define("sl-divider");var ei=U`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var oi=U`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;var ht=Math.min,S=Math.max,Ue=Math.round,ye=Math.floor,at=t=>({x:t,y:t}),Ds={left:"right",right:"left",bottom:"top",top:"bottom"},Ms={start:"end",end:"start"};function $e(t,e,o){return S(t,ht(e,o))}function Vt(t,e){return typeof t=="function"?t(e):t}function Ct(t){return t.split("-")[0]}function jt(t){return t.split("-")[1]}function Do(t){return t==="x"?"y":"x"}function qe(t){return t==="y"?"height":"width"}function Wt(t){return["top","bottom"].includes(Ct(t))?"y":"x"}function to(t){return Do(Wt(t))}function ri(t,e,o){o===void 0&&(o=!1);let r=jt(t),i=to(t),s=qe(i),l=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(l=Ce(l)),[l,Ce(l)]}function ii(t){let e=Ce(t);return[Ke(t),e,Ke(e)]}function Ke(t){return t.replace(/start|end/g,e=>Ms[e])}function ks(t,e,o){let r=["left","right"],i=["right","left"],s=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:r:e?r:i;case"left":case"right":return e?s:l;default:return[]}}function si(t,e,o,r){let i=jt(t),s=ks(Ct(t),o==="start",r);return i&&(s=s.map(l=>l+"-"+i),e&&(s=s.concat(s.map(Ke)))),s}function Ce(t){return t.replace(/left|right|bottom|top/g,e=>Ds[e])}function Gs(t){return{top:0,right:0,bottom:0,left:0,...t}}function Mo(t){return typeof t!="number"?Gs(t):{top:t,right:t,bottom:t,left:t}}function Et(t){let{x:e,y:o,width:r,height:i}=t;return{width:r,height:i,top:o,left:e,right:e+r,bottom:o+i,x:e,y:o}}function li(t,e,o){let{reference:r,floating:i}=t,s=Wt(e),l=to(e),c=qe(l),n=Ct(e),b=s==="y",h=r.x+r.width/2-i.width/2,u=r.y+r.height/2-i.height/2,p=r[c]/2-i[c]/2,g;switch(n){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:u};break;case"left":g={x:r.x-i.width,y:u};break;default:g={x:r.x,y:r.y}}switch(jt(e)){case"start":g[l]-=p*(o&&b?-1:1);break;case"end":g[l]+=p*(o&&b?-1:1);break}return g}var ai=async(t,e,o)=>{let{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:l}=o,c=s.filter(Boolean),n=await(l.isRTL==null?void 0:l.isRTL(e)),b=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:u}=li(b,r,n),p=r,g={},m=0;for(let C=0;C<c.length;C++){let{name:f,fn:y}=c[C],{x:w,y:W,data:T,reset:M}=await y({x:h,y:u,initialPlacement:r,placement:p,strategy:i,middlewareData:g,rects:b,platform:l,elements:{reference:t,floating:e}});h=w??h,u=W??u,g={...g,[f]:{...g[f],...T}},M&&m<=50&&(m++,typeof M=="object"&&(M.placement&&(p=M.placement),M.rects&&(b=M.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:i}):M.rects),{x:h,y:u}=li(b,p,n)),C=-1)}return{x:h,y:u,placement:p,strategy:i,middlewareData:g}};async function eo(t,e){var o;e===void 0&&(e={});let{x:r,y:i,platform:s,rects:l,elements:c,strategy:n}=t,{boundary:b="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=Vt(e,t),m=Mo(g),f=c[p?u==="floating"?"reference":"floating":u],y=Et(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(f)))==null||o?f:f.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:b,rootBoundary:h,strategy:n})),w=u==="floating"?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,W=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),T=await(s.isElement==null?void 0:s.isElement(W))?await(s.getScale==null?void 0:s.getScale(W))||{x:1,y:1}:{x:1,y:1},M=Et(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:W,strategy:n}):w);return{top:(y.top-M.top+m.top)/T.y,bottom:(M.bottom-y.bottom+m.bottom)/T.y,left:(y.left-M.left+m.left)/T.x,right:(M.right-y.right+m.right)/T.x}}var ni=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:r,placement:i,rects:s,platform:l,elements:c,middlewareData:n}=e,{element:b,padding:h=0}=Vt(t,e)||{};if(b==null)return{};let u=Mo(h),p={x:o,y:r},g=to(i),m=qe(g),C=await l.getDimensions(b),f=g==="y",y=f?"top":"left",w=f?"bottom":"right",W=f?"clientHeight":"clientWidth",T=s.reference[m]+s.reference[g]-p[g]-s.floating[m],M=p[g]-s.reference[g],_=await(l.getOffsetParent==null?void 0:l.getOffsetParent(b)),et=_?_[W]:0;(!et||!await(l.isElement==null?void 0:l.isElement(_)))&&(et=c.floating[W]||s.floating[m]);let gt=T/2-M/2,dt=et/2-C[m]/2-1,ot=ht(u[y],dt),yt=ht(u[w],dt),bt=ot,It=et-C[m]-yt,Z=et/2-C[m]/2+gt,_t=$e(bt,Z,It),pt=!n.arrow&&jt(i)!=null&&Z!==_t&&s.reference[m]/2-(Z<bt?ot:yt)-C[m]/2<0,ut=pt?Z<bt?Z-bt:Z-It:0;return{[g]:p[g]+ut,data:{[g]:_t,centerOffset:Z-_t-ut,...pt&&{alignmentOffset:ut}},reset:pt}}});var ci=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,r;let{placement:i,middlewareData:s,rects:l,initialPlacement:c,platform:n,elements:b}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:C=!0,...f}=Vt(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};let y=Ct(i),w=Wt(c),W=Ct(c)===c,T=await(n.isRTL==null?void 0:n.isRTL(b.floating)),M=p||(W||!C?[Ce(c)]:ii(c)),_=m!=="none";!p&&_&&M.push(...si(c,C,m,T));let et=[c,...M],gt=await eo(e,f),dt=[],ot=((r=s.flip)==null?void 0:r.overflows)||[];if(h&&dt.push(gt[y]),u){let Z=ri(i,l,T);dt.push(gt[Z[0]],gt[Z[1]])}if(ot=[...ot,{placement:i,overflows:dt}],!dt.every(Z=>Z<=0)){var yt,bt;let Z=(((yt=s.flip)==null?void 0:yt.index)||0)+1,_t=et[Z];if(_t)return{data:{index:Z,overflows:ot},reset:{placement:_t}};let pt=(bt=ot.filter(ut=>ut.overflows[0]<=0).sort((ut,ft)=>ut.overflows[1]-ft.overflows[1])[0])==null?void 0:bt.placement;if(!pt)switch(g){case"bestFit":{var It;let ut=(It=ot.filter(ft=>{if(_){let vt=Wt(ft.placement);return vt===w||vt==="y"}return!0}).map(ft=>[ft.placement,ft.overflows.filter(vt=>vt>0).reduce((vt,Ei)=>vt+Ei,0)]).sort((ft,vt)=>ft[1]-vt[1])[0])==null?void 0:It[0];ut&&(pt=ut);break}case"initialPlacement":pt=c;break}if(i!==pt)return{reset:{placement:pt}}}return{}}}};async function Ts(t,e){let{placement:o,platform:r,elements:i}=t,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),l=Ct(o),c=jt(o),n=Wt(o)==="y",b=["left","top"].includes(l)?-1:1,h=s&&n?-1:1,u=Vt(e,t),{mainAxis:p,crossAxis:g,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof m=="number"&&(g=c==="end"?m*-1:m),n?{x:g*h,y:p*b}:{x:p*b,y:g*h}}var di=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,r;let{x:i,y:s,placement:l,middlewareData:c}=e,n=await Ts(e,t);return l===((o=c.offset)==null?void 0:o.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+n.x,y:s+n.y,data:{...n,placement:l}}}}},bi=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:r,placement:i}=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:c={fn:f=>{let{x:y,y:w}=f;return{x:y,y:w}}},...n}=Vt(t,e),b={x:o,y:r},h=await eo(e,n),u=Wt(Ct(i)),p=Do(u),g=b[p],m=b[u];if(s){let f=p==="y"?"top":"left",y=p==="y"?"bottom":"right",w=g+h[f],W=g-h[y];g=$e(w,g,W)}if(l){let f=u==="y"?"top":"left",y=u==="y"?"bottom":"right",w=m+h[f],W=m-h[y];m=$e(w,m,W)}let C=c.fn({...e,[p]:g,[u]:m});return{...C,data:{x:C.x-o,y:C.y-r,enabled:{[p]:s,[u]:l}}}}}};var ui=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,r;let{placement:i,rects:s,platform:l,elements:c}=e,{apply:n=()=>{},...b}=Vt(t,e),h=await eo(e,b),u=Ct(i),p=jt(i),g=Wt(i)==="y",{width:m,height:C}=s.floating,f,y;u==="top"||u==="bottom"?(f=u,y=p===(await(l.isRTL==null?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(y=u,f=p==="end"?"top":"bottom");let w=C-h.top-h.bottom,W=m-h.left-h.right,T=ht(C-h[f],w),M=ht(m-h[y],W),_=!e.middlewareData.shift,et=T,gt=M;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(gt=W),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(et=w),_&&!p){let ot=S(h.left,0),yt=S(h.right,0),bt=S(h.top,0),It=S(h.bottom,0);g?gt=m-2*(ot!==0||yt!==0?ot+yt:S(h.left,h.right)):et=C-2*(bt!==0||It!==0?bt+It:S(h.top,h.bottom))}await n({...e,availableWidth:gt,availableHeight:et});let dt=await l.getDimensions(c.floating);return m!==dt.width||C!==dt.height?{reset:{rects:!0}}:{}}}};function oo(){return typeof window<"u"}function Yt(t){return gi(t)?(t.nodeName||"").toLowerCase():"#document"}function Y(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function nt(t){var e;return(e=(gi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function gi(t){return oo()?t instanceof Node||t instanceof Y(t).Node:!1}function q(t){return oo()?t instanceof Element||t instanceof Y(t).Element:!1}function ct(t){return oo()?t instanceof HTMLElement||t instanceof Y(t).HTMLElement:!1}function hi(t){return!oo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Y(t).ShadowRoot}function oe(t){let{overflow:e,overflowX:o,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(i)}function pi(t){return["table","td","th"].includes(Yt(t))}function Ie(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ro(t){let e=io(),o=q(t)?tt(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function mi(t){let e=Ut(t);for(;ct(e)&&!Jt(e);){if(ro(e))return e;if(Ie(e))return null;e=Ut(e)}return null}function io(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Jt(t){return["html","body","#document"].includes(Yt(t))}function tt(t){return Y(t).getComputedStyle(t)}function fe(t){return q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ut(t){if(Yt(t)==="html")return t;let e=t.assignedSlot||t.parentNode||hi(t)&&t.host||nt(t);return hi(e)?e.host:e}function Qi(t){let e=Ut(t);return Jt(e)?t.ownerDocument?t.ownerDocument.body:t.body:ct(e)&&oe(e)?e:Qi(e)}function ee(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);let i=Qi(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),l=Y(i);if(s){let c=so(l);return e.concat(l,l.visualViewport||[],oe(i)?i:[],c&&o?ee(c):[])}return e.concat(i,ee(i,[],o))}function so(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ci(t){let e=tt(t),o=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=ct(t),s=i?t.offsetWidth:o,l=i?t.offsetHeight:r,c=Ue(o)!==s||Ue(r)!==l;return c&&(o=s,r=l),{width:o,height:r,$:c}}function Go(t){return q(t)?t:t.contextElement}function re(t){let e=Go(t);if(!ct(e))return at(1);let o=e.getBoundingClientRect(),{width:r,height:i,$:s}=Ci(e),l=(s?Ue(o.width):o.width)/r,c=(s?Ue(o.height):o.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!c||!Number.isFinite(c))&&(c=1),{x:l,y:c}}var Xs=at(0);function Ui(t){let e=Y(t);return!io()||!e.visualViewport?Xs:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function zs(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==Y(t)?!1:e}function Ht(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);let i=t.getBoundingClientRect(),s=Go(t),l=at(1);e&&(r?q(r)&&(l=re(r)):l=re(t));let c=zs(s,o,r)?Ui(s):at(0),n=(i.left+c.x)/l.x,b=(i.top+c.y)/l.y,h=i.width/l.x,u=i.height/l.y;if(s){let p=Y(s),g=r&&q(r)?Y(r):r,m=p,C=so(m);for(;C&&r&&g!==m;){let f=re(C),y=C.getBoundingClientRect(),w=tt(C),W=y.left+(C.clientLeft+parseFloat(w.paddingLeft))*f.x,T=y.top+(C.clientTop+parseFloat(w.paddingTop))*f.y;n*=f.x,b*=f.y,h*=f.x,u*=f.y,n+=W,b+=T,m=Y(C),C=so(m)}}return Et({width:h,height:u,x:n,y:b})}function To(t,e){let o=fe(t).scrollLeft;return e?e.left+o:Ht(nt(t)).left+o}function yi(t,e,o){o===void 0&&(o=!1);let r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(o?0:To(t,r)),s=r.top+e.scrollTop;return{x:i,y:s}}function Zs(t){let{elements:e,rect:o,offsetParent:r,strategy:i}=t,s=i==="fixed",l=nt(r),c=e?Ie(e.floating):!1;if(r===l||c&&s)return o;let n={scrollLeft:0,scrollTop:0},b=at(1),h=at(0),u=ct(r);if((u||!u&&!s)&&((Yt(r)!=="body"||oe(l))&&(n=fe(r)),ct(r))){let g=Ht(r);b=re(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}let p=l&&!u&&!s?yi(l,n,!0):at(0);return{width:o.width*b.x,height:o.height*b.y,x:o.x*b.x-n.scrollLeft*b.x+h.x+p.x,y:o.y*b.y-n.scrollTop*b.y+h.y+p.y}}function Rs(t){return Array.from(t.getClientRects())}function Ss(t){let e=nt(t),o=fe(t),r=t.ownerDocument.body,i=S(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=S(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),l=-o.scrollLeft+To(t),c=-o.scrollTop;return tt(r).direction==="rtl"&&(l+=S(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:l,y:c}}function Vs(t,e){let o=Y(t),r=nt(t),i=o.visualViewport,s=r.clientWidth,l=r.clientHeight,c=0,n=0;if(i){s=i.width,l=i.height;let b=io();(!b||b&&e==="fixed")&&(c=i.offsetLeft,n=i.offsetTop)}return{width:s,height:l,x:c,y:n}}function js(t,e){let o=Ht(t,!0,e==="fixed"),r=o.top+t.clientTop,i=o.left+t.clientLeft,s=ct(t)?re(t):at(1),l=t.clientWidth*s.x,c=t.clientHeight*s.y,n=i*s.x,b=r*s.y;return{width:l,height:c,x:n,y:b}}function Bi(t,e,o){let r;if(e==="viewport")r=Vs(t,o);else if(e==="document")r=Ss(nt(t));else if(q(e))r=js(e,o);else{let i=Ui(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Et(r)}function Ii(t,e){let o=Ut(t);return o===e||!q(o)||Jt(o)?!1:tt(o).position==="fixed"||Ii(o,e)}function Es(t,e){let o=e.get(t);if(o)return o;let r=ee(t,[],!1).filter(c=>q(c)&&Yt(c)!=="body"),i=null,s=tt(t).position==="fixed",l=s?Ut(t):t;for(;q(l)&&!Jt(l);){let c=tt(l),n=ro(l);!n&&c.position==="fixed"&&(i=null),(s?!n&&!i:!n&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||oe(l)&&!n&&Ii(t,l))?r=r.filter(h=>h!==l):i=c,l=Ut(l)}return e.set(t,r),r}function Ys(t){let{element:e,boundary:o,rootBoundary:r,strategy:i}=t,l=[...o==="clippingAncestors"?Ie(e)?[]:Es(e,this._c):[].concat(o),r],c=l[0],n=l.reduce((b,h)=>{let u=Bi(e,h,i);return b.top=S(u.top,b.top),b.right=ht(u.right,b.right),b.bottom=ht(u.bottom,b.bottom),b.left=S(u.left,b.left),b},Bi(e,c,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}}function Js(t){let{width:e,height:o}=Ci(t);return{width:e,height:o}}function Hs(t,e,o){let r=ct(e),i=nt(e),s=o==="fixed",l=Ht(t,!0,s,e),c={scrollLeft:0,scrollTop:0},n=at(0);if(r||!r&&!s)if((Yt(e)!=="body"||oe(i))&&(c=fe(e)),r){let p=Ht(e,!0,s,e);n.x=p.x+e.clientLeft,n.y=p.y+e.clientTop}else i&&(n.x=To(i));let b=i&&!r&&!s?yi(i,c):at(0),h=l.left+c.scrollLeft-n.x-b.x,u=l.top+c.scrollTop-n.y-b.y;return{x:h,y:u,width:l.width,height:l.height}}function ko(t){return tt(t).position==="static"}function Fi(t,e){if(!ct(t)||tt(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return nt(t)===o&&(o=o.ownerDocument.body),o}function fi(t,e){let o=Y(t);if(Ie(t))return o;if(!ct(t)){let i=Ut(t);for(;i&&!Jt(i);){if(q(i)&&!ko(i))return i;i=Ut(i)}return o}let r=Fi(t,e);for(;r&&pi(r)&&ko(r);)r=Fi(r,e);return r&&Jt(r)&&ko(r)&&!ro(r)?o:r||mi(t)||o}var _s=async function(t){let e=this.getOffsetParent||fi,o=this.getDimensions,r=await o(t.floating);return{reference:Hs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ps(t){return tt(t).direction==="rtl"}var ve={convertOffsetParentRelativeRectToViewportRelativeRect:Zs,getDocumentElement:nt,getClippingRect:Ys,getOffsetParent:fi,getElementRects:_s,getClientRects:Rs,getDimensions:Js,getScale:re,isElement:q,isRTL:Ps};function Ks(t,e){let o=null,r,i=nt(t);function s(){var c;clearTimeout(r),(c=o)==null||c.disconnect(),o=null}function l(c,n){c===void 0&&(c=!1),n===void 0&&(n=1),s();let{left:b,top:h,width:u,height:p}=t.getBoundingClientRect();if(c||e(),!u||!p)return;let g=ye(h),m=ye(i.clientWidth-(b+u)),C=ye(i.clientHeight-(h+p)),f=ye(b),w={rootMargin:-g+"px "+-m+"px "+-C+"px "+-f+"px",threshold:S(0,ht(1,n))||1},W=!0;function T(M){let _=M[0].intersectionRatio;if(_!==n){if(!W)return l();_?l(!1,_):r=setTimeout(()=>{l(!1,1e-7)},1e3)}W=!1}try{o=new IntersectionObserver(T,{...w,root:i.ownerDocument})}catch{o=new IntersectionObserver(T,w)}o.observe(t)}return l(!0),s}function vi(t,e,o,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:n=!1}=r,b=Go(t),h=i||s?[...b?ee(b):[],...ee(e)]:[];h.forEach(y=>{i&&y.addEventListener("scroll",o,{passive:!0}),s&&y.addEventListener("resize",o)});let u=b&&c?Ks(b,o):null,p=-1,g=null;l&&(g=new ResizeObserver(y=>{let[w]=y;w&&w.target===b&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var W;(W=g)==null||W.observe(e)})),o()}),b&&!n&&g.observe(b),g.observe(e));let m,C=n?Ht(t):null;n&&f();function f(){let y=Ht(t);C&&(y.x!==C.x||y.y!==C.y||y.width!==C.width||y.height!==C.height)&&o(),C=y,m=requestAnimationFrame(f)}return o(),()=>{var y;h.forEach(w=>{i&&w.removeEventListener("scroll",o),s&&w.removeEventListener("resize",o)}),u?.(),(y=g)==null||y.disconnect(),g=null,n&&cancelAnimationFrame(m)}}var wi=di;var Li=bi,xi=ci,Xo=ui;var Ai=ni;var Ni=(t,e,o)=>{let r=new Map,i={platform:ve,...o},s={...i.platform,_c:r};return ai(t,e,{...i,platform:s})};function Wi(t){return $s(t)}function zo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function $s(t){for(let e=t;e;e=zo(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=zo(t);e;e=zo(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function qs(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var A=class extends I{constructor(){super(...arguments),this.localize=new G(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,i=0,s=0,l=0,c=0,n=0,b=0,h=0;o?t.top<e.top?(r=t.left,i=t.bottom,s=t.right,l=t.bottom,c=e.left,n=e.top,b=e.right,h=e.top):(r=e.left,i=e.bottom,s=e.right,l=e.bottom,c=t.left,n=t.top,b=t.right,h=t.top):t.left<e.left?(r=t.right,i=t.top,s=e.left,l=e.top,c=t.right,n=t.bottom,b=e.left,h=e.bottom):(r=e.right,i=e.top,s=t.left,l=t.top,c=e.right,n=e.bottom,b=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||qs(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=vi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[wi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Xo({apply:({rects:o})=>{let r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(xi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Li({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Xo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ai({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?o=>ve.getOffsetParent(o,Wi):ve.getOffsetParent;Ni(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:At(H({},ve),{getOffsetParent:e})}).then(({x:o,y:r,middlewareData:i,placement:s})=>{let l=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){let n=i.arrow.x,b=i.arrow.y,h="",u="",p="",g="";if(this.arrowPlacement==="start"){let m=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=l?m:"",g=l?"":m}else if(this.arrowPlacement==="end"){let m=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=l?"":m,g=l?m:"",p=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof n=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof n=="number"?`${n}px`:"",h=typeof b=="number"?`${b}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:p,left:g,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return Q`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${N({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${N({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Q`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};A.styles=[v,oi];a([L(".popup")],A.prototype,"popup",2);a([L(".popup__arrow")],A.prototype,"arrowEl",2);a([d()],A.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],A.prototype,"active",2);a([d({reflect:!0})],A.prototype,"placement",2);a([d({reflect:!0})],A.prototype,"strategy",2);a([d({type:Number})],A.prototype,"distance",2);a([d({type:Number})],A.prototype,"skidding",2);a([d({type:Boolean})],A.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],A.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],A.prototype,"arrowPadding",2);a([d({type:Boolean})],A.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],A.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],A.prototype,"flipFallbackStrategy",2);a([d({type:Object})],A.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],A.prototype,"flipPadding",2);a([d({type:Boolean})],A.prototype,"shift",2);a([d({type:Object})],A.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],A.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],A.prototype,"autoSize",2);a([d()],A.prototype,"sync",2);a([d({type:Object})],A.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],A.prototype,"autoSizePadding",2);a([d({attribute:"hover-bridge",type:Boolean})],A.prototype,"hoverBridge",2);var z=class extends I{constructor(){super(...arguments),this.localize=new G(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,r,i;let s=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(i=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||s?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let o=e.getAllItems(),r=o[0],i=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(r),r.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(r=>Kr(r).start),o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Bt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await it(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=K(this,"dropdown.show",{dir:this.localize.dir()});await $(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await it(this);let{keyframes:t,options:e}=K(this,"dropdown.hide",{dir:this.localize.dir()});await $(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Q`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${B(this.sync?this.sync:void 0)}
        class=${N({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};z.styles=[v,ei];z.dependencies={"sl-popup":A};a([L(".dropdown")],z.prototype,"popup",2);a([L(".dropdown__trigger")],z.prototype,"trigger",2);a([L(".dropdown__panel")],z.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],z.prototype,"open",2);a([d({reflect:!0})],z.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],z.prototype,"disabled",2);a([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],z.prototype,"stayOpenOnSelect",2);a([d({attribute:!1})],z.prototype,"containingElement",2);a([d({type:Number})],z.prototype,"distance",2);a([d({type:Number})],z.prototype,"skidding",2);a([d({type:Boolean})],z.prototype,"hoist",2);a([d({reflect:!0})],z.prototype,"sync",2);a([O("open",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpenChange",1);P("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});P("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});z.define("sl-dropdown");var Oi=U`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var Di=(t="value")=>(e,o)=>{let r=e.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,l,c){var n;let b=r.getPropertyOptions(t),h=typeof b.attribute=="string"?b.attribute:t;if(s===h){let u=b.converter||Lt,g=(typeof u=="function"?u:(n=u?.fromAttribute)!=null?n:Lt.fromAttribute)(c,b.type);this[t]!==g&&(this[o]=g)}i.call(this,s,l,c)}};var Mi=U`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var ki=Rt(class extends Nt{constructor(t){if(super(t),t.type!==rt.PROPERTY&&t.type!==rt.ATTRIBUTE&&t.type!==rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ye(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===V||e===D)return e;let o=t.element,r=t.name;if(t.type===rt.PROPERTY){if(e===o[r])return V}else if(t.type===rt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return V}else if(t.type===rt.ATTRIBUTE&&o.getAttribute(r)===e+"")return V;return Or(t),e}});var F=class extends I{constructor(){super(...arguments),this.formControlController=new Re(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new j(this,"help-text","label"),this.localize=new G(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){let i=e??this.input.selectionStart,s=o??this.input.selectionEnd;this.input.setRangeText(t,i,s,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return Q`
      <div
        part="form-control"
        class=${N({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${N({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${ki(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?Q`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?Q`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?Q`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:Q`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[v,Mi,Oi];F.dependencies={"sl-icon":k};a([L(".input__control")],F.prototype,"input",2);a([R()],F.prototype,"hasFocus",2);a([d()],F.prototype,"title",2);a([d({reflect:!0})],F.prototype,"type",2);a([d()],F.prototype,"name",2);a([d()],F.prototype,"value",2);a([Di()],F.prototype,"defaultValue",2);a([d({reflect:!0})],F.prototype,"size",2);a([d({type:Boolean,reflect:!0})],F.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],F.prototype,"pill",2);a([d()],F.prototype,"label",2);a([d({attribute:"help-text"})],F.prototype,"helpText",2);a([d({type:Boolean})],F.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],F.prototype,"disabled",2);a([d()],F.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],F.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],F.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],F.prototype,"passwordVisible",2);a([d({attribute:"no-spin-buttons",type:Boolean})],F.prototype,"noSpinButtons",2);a([d({reflect:!0})],F.prototype,"form",2);a([d({type:Boolean,reflect:!0})],F.prototype,"required",2);a([d()],F.prototype,"pattern",2);a([d({type:Number})],F.prototype,"minlength",2);a([d({type:Number})],F.prototype,"maxlength",2);a([d()],F.prototype,"min",2);a([d()],F.prototype,"max",2);a([d()],F.prototype,"step",2);a([d()],F.prototype,"autocapitalize",2);a([d()],F.prototype,"autocorrect",2);a([d()],F.prototype,"autocomplete",2);a([d({type:Boolean})],F.prototype,"autofocus",2);a([d()],F.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],F.prototype,"spellcheck",2);a([d()],F.prototype,"inputmode",2);a([O("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);a([O("step",{waitUntilFirstUpdate:!0})],F.prototype,"handleStepChange",1);a([O("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);F.define("sl-input");var Gi=U`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var lo=class extends I{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],o=t.composedPath(),r=o.find(c=>{var n;return e.includes(((n=c?.getAttribute)==null?void 0:n.call(c,"role"))||"")});if(!r||o.find(c=>{var n;return((n=c?.getAttribute)==null?void 0:n.call(c,"role"))==="menu"})!==this)return;let l=r;l.type==="checkbox"&&(l.checked=!l.checked),this.emit("sl-select",{detail:{item:l}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),o=this.getCurrentItem(),r=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?r++:t.key==="ArrowUp"?r--:t.key==="Home"?r=0:t.key==="End"&&(r=e.length-1),r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.setCurrentItem(e[r]),e[r].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return Q`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};lo.styles=[v,Gi];a([L("slot")],lo.prototype,"defaultSlot",2);lo.define("sl-menu");var Ti=U`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var we=(t,e)=>{let o=t._$AN;if(o===void 0)return!1;for(let r of o)r._$AO?.(e,!1),we(r,e);return!0},ao=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Xi=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),ol(e)}};function tl(t){this._$AN!==void 0?(ao(this),this._$AM=t,Xi(this)):this._$AM=t}function el(t,e=!1,o=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let s=o;s<r.length;s++)we(r[s],!1),ao(r[s]);else r!=null&&(we(r,!1),ao(r));else we(this,t)}var ol=t=>{t.type==rt.CHILD&&(t._$AP??(t._$AP=el),t._$AQ??(t._$AQ=tl))},no=class extends Nt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,r){super._$AT(e,o,r),Xi(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(we(this,e),ao(this))}setValue(e){if(Ye(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};var zi=()=>new Ro,Ro=class{},Zo=new WeakMap,Zi=Rt(class extends no{render(t){return D}update(t,[e]){let o=e!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),D}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){let e=this.ht??globalThis,o=Zo.get(e);o===void 0&&(o=new WeakMap,Zo.set(e,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?Zo.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ri=class{constructor(t,e){this.popupRef=zi(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=o=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${o.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${o.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=o=>{switch(o.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":o.target!==this.host&&(o.preventDefault(),o.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(o);break;default:break}},this.handleClick=o=>{var r;o.target===this.host?(o.preventDefault(),o.stopPropagation()):o.target instanceof Element&&(o.target.tagName==="sl-menu-item"||(r=o.target.role)!=null&&r.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=o=>{o.relatedTarget&&o.relatedTarget instanceof Element&&this.host.contains(o.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=o=>{o.stopPropagation()},this.handlePopupReposition=()=>{let o=this.host.renderRoot.querySelector("slot[name='submenu']"),r=o?.assignedElements({flatten:!0}).filter(b=>b.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!r)return;let{left:s,top:l,width:c,height:n}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?s+c:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?s+c:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+n}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(let r of e.assignedElements())if(o=r.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let r=1;r!==o.length;++r)o[r].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((i,s)=>{var l;let c=(l=e.get(s))!=null?l:new CSSUnitValue(0,"px"),b=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return i-b.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?Q`
      <sl-popup
        ${Zi(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:Q` <slot name="submenu" hidden></slot> `}};var J=class extends I{constructor(){super(...arguments),this.localize=new G(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new j(this,"submenu"),this.submenuController=new Ri(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Ir(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return Q`
      <div
        id="anchor"
        part="base"
        class=${N({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?Q` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};J.styles=[v,Ti];J.dependencies={"sl-icon":k,"sl-popup":A,"sl-spinner":Zt};a([L("slot:not([name])")],J.prototype,"defaultSlot",2);a([L(".menu-item")],J.prototype,"menuItem",2);a([d()],J.prototype,"type",2);a([d({type:Boolean,reflect:!0})],J.prototype,"checked",2);a([d()],J.prototype,"value",2);a([d({type:Boolean,reflect:!0})],J.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],J.prototype,"disabled",2);a([O("checked")],J.prototype,"handleCheckedChange",1);a([O("disabled")],J.prototype,"handleDisabledChange",1);a([O("type")],J.prototype,"handleTypeChange",1);J.define("sl-menu-item");var Si=U`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;var Ot=class extends I{constructor(){super(...arguments),this.localize=new G(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return Q`
      <span
        part="base"
        class=${N({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?Q`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Ot.styles=[v,Si];Ot.dependencies={"sl-icon-button":X};a([d({reflect:!0})],Ot.prototype,"variant",2);a([d({reflect:!0})],Ot.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Ot.prototype,"pill",2);a([d({type:Boolean})],Ot.prototype,"removable",2);Ot.define("sl-tag");var KQ=jo(ji());Ee("remixicon",{resolver(t){let e=t.match(/^(.*?)\/(.*?)(-(fill)?)?$/m);return e[1]=e[1].charAt(0).toUpperCase()+e[1].slice(1),`https://cdn.jsdelivr.net/npm/remixicon@3.3.0/icons/${e[1]}/${e[2]}${e[3]=="-"?"":e[3]||"-line"}.svg`},mutator(t){return t.setAttribute("fill","currentColor")}});Ee("heroicons",{resolver:t=>`https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/solid/${t}.svg`});pe("/images");console.info("Bridgetown is loaded!");})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/_bridgetown/static/index.GFJ47RLD.js.map
