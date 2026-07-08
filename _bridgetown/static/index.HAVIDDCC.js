(()=>{var Jl=Object.create;var Vo=Object.defineProperty;var Hl=Object.getOwnPropertyDescriptor;var _l=Object.getOwnPropertyNames;var Pl=Object.getPrototypeOf,Kl=Object.prototype.hasOwnProperty;var $l=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ql=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of _l(e))!Kl.call(t,l)&&l!==o&&Vo(t,l,{get:()=>e[l],enumerable:!(i=Hl(e,l))||i.enumerable});return t};var tr=(t,e,o)=>(o=t!=null?Jl(Pl(t)):{},ql(e||!t||!t.__esModule?Vo(o,"default",{value:t,enumerable:!0}):o,t));var Ti=$l((Sc,_e)=>{var ye=class{constructor(){this.currentTheme=this.getInitialTheme(),this.init()}getInitialTheme(){let e=localStorage.getItem("theme");return e&&(e==="light"||e==="dark")?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}init(){this.applyTheme(this.currentTheme,!1),this.createToggleButton(),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addListener(o=>{if(!localStorage.getItem("theme")){let i=o.matches?"dark":"light";this.currentTheme=i,this.applyTheme(i,!0),this.updateButtonState()}}),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!localStorage.getItem("theme")){let e=this.getSystemTheme();e!==this.currentTheme&&(this.currentTheme=e,this.applyTheme(e,!0),this.updateButtonState())}})}getSystemTheme(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}createToggleButton(){let e=document.getElementById("theme-switcher");if(!e)return;let o=document.createElement("button");o.id="wha",o.setAttribute("aria-label","Toggle dark mode"),o.setAttribute("title","Toggle dark mode"),o.className="theme-toggle-btn";let i=this.createIcon("sun"),l=this.createIcon("moon");o.appendChild(i),o.appendChild(l),this.addToggleStyles(),o.style.cssText=`
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
    `,o.addEventListener("click",r=>{r.preventDefault(),this.toggle()}),e.appendChild(o),this.toggleButton=o,this.updateButtonState()}createIcon(e){let o=document.createElement("div");return o.className=`theme-icon theme-icon-${e}`,e==="sun"?o.innerHTML=`
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
    `,document.head.appendChild(e)}applyTheme(e,o=!0){let i=document.documentElement;o&&(i.style.transition="color 0.3s ease, background-color 0.3s ease",setTimeout(()=>{i.style.transition=""},300)),e==="dark"?i.classList.add("theme-dark"):i.classList.remove("theme-dark"),this.updateMetaThemeColor(e),window.dispatchEvent(new CustomEvent("themechange",{detail:{theme:e,previousTheme:this.currentTheme}}))}updateMetaThemeColor(e){let o=document.querySelector('meta[name="theme-color"]');o||(o=document.createElement("meta"),o.name="theme-color",document.head.appendChild(o)),o.content=e==="dark"?"#0f0f0f":"#ffffff"}updateButtonState(){if(this.toggleButton){let e=this.currentTheme==="dark";this.toggleButton.setAttribute("aria-label",e?"Switch to light mode":"Switch to dark mode"),this.toggleButton.setAttribute("title",e?"Switch to light mode":"Switch to dark mode")}}toggle(){let e=this.currentTheme==="light"?"dark":"light";this.currentTheme=e,localStorage.setItem("theme",e),this.applyTheme(e,!0),this.updateButtonState(),typeof gtag<"u"&&gtag("event","theme_toggle",{custom_parameter:e})}getCurrentTheme(){return this.currentTheme}setTheme(e){(e==="light"||e==="dark")&&(this.currentTheme=e,localStorage.setItem("theme",e),this.applyTheme(e,!0),this.updateButtonState())}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.themeSwitcher=new ye}):window.themeSwitcher=new ye;typeof _e<"u"&&_e.exports&&(_e.exports=ye)});var fe=globalThis,Me=fe.ShadowRoot&&(fe.ShadyCSS===void 0||fe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bo=Symbol(),Eo=new WeakMap,se=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==bo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(Me&&e===void 0){let i=o!==void 0&&o.length===1;i&&(e=Eo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Eo.set(o,e))}return e}toString(){return this.cssText}},Yo=t=>new se(typeof t=="string"?t:t+"",void 0,bo),L=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((i,l,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+t[r+1],t[0]);return new se(o,t,bo)},Jo=(t,e)=>{if(Me)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of e){let i=document.createElement("style"),l=fe.litNonce;l!==void 0&&i.setAttribute("nonce",l),i.textContent=o.cssText,t.appendChild(i)}},uo=Me?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let i of e.cssRules)o+=i.cssText;return Yo(o)})(t):t;var{is:er,defineProperty:or,getOwnPropertyDescriptor:ir,getOwnPropertyNames:lr,getOwnPropertySymbols:rr,getPrototypeOf:sr}=Object,xt=globalThis,Ho=xt.trustedTypes,ar=Ho?Ho.emptyScript:"",nr=xt.reactiveElementPolyfillSupport,ae=(t,e)=>t,Ft={toAttribute(t,e){switch(e){case Boolean:t=t?ar:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},De=(t,e)=>!er(t,e),_o={attribute:!0,type:String,converter:Ft,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),xt.litPropertyMetadata??(xt.litPropertyMetadata=new WeakMap);var Ct=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=_o){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){let i=Symbol(),l=this.getPropertyDescriptor(e,i,o);l!==void 0&&or(this.prototype,e,l)}}static getPropertyDescriptor(e,o,i){let{get:l,set:r}=ir(this.prototype,e)??{get(){return this[o]},set(s){this[o]=s}};return{get:l,set(s){let n=l?.call(this);r?.call(this,s),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_o}static _$Ei(){if(this.hasOwnProperty(ae("elementProperties")))return;let e=sr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ae("properties"))){let o=this.properties,i=[...lr(o),...rr(o)];for(let l of i)this.createProperty(l,o[l])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[i,l]of o)this.elementProperties.set(i,l)}this._$Eh=new Map;for(let[o,i]of this.elementProperties){let l=this._$Eu(o,i);l!==void 0&&this._$Eh.set(l,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let l of i)o.unshift(uo(l))}else e!==void 0&&o.push(uo(e));return o}static _$Eu(e,o){let i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,o=this.constructor.elementProperties;for(let i of o.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$ET(e,o){let i=this.constructor.elementProperties.get(e),l=this.constructor._$Eu(e,i);if(l!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:Ft).toAttribute(o,i.type);this._$Em=e,r==null?this.removeAttribute(l):this.setAttribute(l,r),this._$Em=null}}_$AK(e,o){let i=this.constructor,l=i._$Eh.get(e);if(l!==void 0&&this._$Em!==l){let r=i.getPropertyOptions(l),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ft;this._$Em=l;let n=s.fromAttribute(o,r.type);this[l]=n??this._$Ej?.get(l)??n,this._$Em=null}}requestUpdate(e,o,i,l=!1,r){if(e!==void 0){let s=this.constructor;if(l===!1&&(r=this[e]),i??(i=s.getPropertyOptions(e)),!((i.hasChanged??De)(r,o)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:i,reflect:l,wrapped:r},s){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??o??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(o=void 0),this._$AL.set(e,o)),l===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[l,r]of this._$Ep)this[l]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[l,r]of i){let{wrapped:s}=r,n=this[l];s!==!0||this._$AL.has(l)||n===void 0||this.C(l,void 0,r,n)}}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(o)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(e){}firstUpdated(e){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[ae("elementProperties")]=new Map,Ct[ae("finalized")]=new Map,nr?.({ReactiveElement:Ct}),(xt.reactiveElementVersions??(xt.reactiveElementVersions=[])).push("2.1.2");var ce=globalThis,Po=t=>t,Ge=ce.trustedTypes,Ko=Ge?Ge.createPolicy("lit-html",{createHTML:t=>t}):void 0,po="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,mo="?"+Qt,cr=`<${mo}>`,Ot=document,ge=()=>Ot.createComment(""),be=t=>t===null||typeof t!="object"&&typeof t!="function",Io=Array.isArray,ii=t=>Io(t)||typeof t?.[Symbol.iterator]=="function",ho=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$o=/-->/g,qo=/>/g,Xt=RegExp(`>|${ho}(?:([^\\s"'>=/]+)(${ho}*=${ho}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ti=/'/g,ei=/"/g,li=/^(?:script|style|textarea|title)$/i,Co=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),I=Co(1),ri=Co(2),si=Co(3),E=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),oi=new WeakMap,Wt=Ot.createTreeWalker(Ot,129);function ai(t,e){if(!Io(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ko!==void 0?Ko.createHTML(e):e}var ni=(t,e)=>{let o=t.length-1,i=[],l,r=e===2?"<svg>":e===3?"<math>":"",s=ne;for(let n=0;n<o;n++){let c=t[n],b,d,u=-1,p=0;for(;p<c.length&&(s.lastIndex=p,d=s.exec(c),d!==null);)p=s.lastIndex,s===ne?d[1]==="!--"?s=$o:d[1]!==void 0?s=qo:d[2]!==void 0?(li.test(d[2])&&(l=RegExp("</"+d[2],"g")),s=Xt):d[3]!==void 0&&(s=Xt):s===Xt?d[0]===">"?(s=l??ne,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,b=d[1],s=d[3]===void 0?Xt:d[3]==='"'?ei:ti):s===ei||s===ti?s=Xt:s===$o||s===qo?s=ne:(s=Xt,l=void 0);let h=s===Xt&&t[n+1].startsWith("/>")?" ":"";r+=s===ne?c+cr:u>=0?(i.push(b),c.slice(0,u)+po+c.slice(u)+Qt+h):c+Qt+(u===-2?n:h)}return[ai(t,r+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},de=class t{constructor({strings:e,_$litType$:o},i){let l;this.parts=[];let r=0,s=0,n=e.length-1,c=this.parts,[b,d]=ni(e,o);if(this.el=t.createElement(b,i),Wt.currentNode=this.el.content,o===2||o===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(l=Wt.nextNode())!==null&&c.length<n;){if(l.nodeType===1){if(l.hasAttributes())for(let u of l.getAttributeNames())if(u.endsWith(po)){let p=d[s++],h=l.getAttribute(u).split(Qt),m=/([.?@])?(.*)/.exec(p);c.push({type:1,index:r,name:m[2],strings:h,ctor:m[1]==="."?We:m[1]==="?"?Oe:m[1]==="@"?Te:St}),l.removeAttribute(u)}else u.startsWith(Qt)&&(c.push({type:6,index:r}),l.removeAttribute(u));if(li.test(l.tagName)){let u=l.textContent.split(Qt),p=u.length-1;if(p>0){l.textContent=Ge?Ge.emptyScript:"";for(let h=0;h<p;h++)l.append(u[h],ge()),Wt.nextNode(),c.push({type:2,index:++r});l.append(u[p],ge())}}}else if(l.nodeType===8)if(l.data===mo)c.push({type:2,index:r});else{let u=-1;for(;(u=l.data.indexOf(Qt,u+1))!==-1;)c.push({type:7,index:r}),u+=Qt.length-1}r++}}static createElement(e,o){let i=Ot.createElement("template");return i.innerHTML=e,i}};function Tt(t,e,o=t,i){if(e===E)return e;let l=i!==void 0?o._$Co?.[i]:o._$Cl,r=be(e)?void 0:e._$litDirective$;return l?.constructor!==r&&(l?._$AO?.(!1),r===void 0?l=void 0:(l=new r(t),l._$AT(t,o,i)),i!==void 0?(o._$Co??(o._$Co=[]))[i]=l:o._$Cl=l),l!==void 0&&(e=Tt(t,l._$AS(t,e.values),l,i)),e}var Xe=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:i}=this._$AD,l=(e?.creationScope??Ot).importNode(o,!0);Wt.currentNode=l;let r=Wt.nextNode(),s=0,n=0,c=i[0];for(;c!==void 0;){if(s===c.index){let b;c.type===2?b=new $t(r,r.nextSibling,this,e):c.type===1?b=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(b=new Se(r,this,e)),this._$AV.push(b),c=i[++n]}s!==c?.index&&(r=Wt.nextNode(),s++)}return Wt.currentNode=Ot,l}p(e){let o=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}},$t=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,i,l){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=l,this._$Cv=l?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Tt(this,e,o),be(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ii(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ot.createTextNode(e)),this._$AH=e}$(e){let{values:o,_$litType$:i}=e,l=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=de.createElement(ai(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===l)this._$AH.p(o);else{let r=new Xe(l,this),s=r.u(this.options);r.p(o),this.T(s),this._$AH=r}}_$AC(e){let o=oi.get(e.strings);return o===void 0&&oi.set(e.strings,o=new de(e)),o}k(e){Io(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,i,l=0;for(let r of e)l===o.length?o.push(i=new t(this.O(ge()),this.O(ge()),this,this.options)):i=o[l],i._$AI(r),l++;l<o.length&&(this._$AR(i&&i._$AB.nextSibling,l),o.length=l)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){let i=Po(e).nextSibling;Po(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},St=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,i,l,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=o,this._$AM=l,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,o=this,i,l){let r=this.strings,s=!1;if(r===void 0)e=Tt(this,e,o,0),s=!be(e)||e!==this._$AH&&e!==E,s&&(this._$AH=e);else{let n=e,c,b;for(e=r[0],c=0;c<r.length-1;c++)b=Tt(this,n[i+c],o,c),b===E&&(b=this._$AH[c]),s||(s=!be(b)||b!==this._$AH[c]),b===G?e=G:e!==G&&(e+=(b??"")+r[c+1]),this._$AH[c]=b}s&&!l&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},We=class extends St{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}},Oe=class extends St{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}},Te=class extends St{constructor(e,o,i,l,r){super(e,o,i,l,r),this.type=5}_$AI(e,o=this){if((e=Tt(this,e,o,0)??G)===E)return;let i=this._$AH,l=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==G&&(i===G||l);l&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Se=class{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Tt(this,e)}},ci={M:po,P:Qt,A:mo,C:1,L:ni,R:Xe,D:ii,V:Tt,I:$t,H:St,N:Oe,U:Te,B:We,F:Se},gr=ce.litHtmlPolyfillSupport;gr?.(de,$t),(ce.litHtmlVersions??(ce.litHtmlVersions=[])).push("3.3.3");var gi=(t,e,o)=>{let i=o?.renderBefore??e,l=i._$litPart$;if(l===void 0){let r=o?.renderBefore??null;i._$litPart$=l=new $t(e.insertBefore(ge(),r),r,void 0,o??{})}return l._$AI(t),l};var ue=globalThis,Nt=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;let e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gi(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};Nt._$litElement$=!0,Nt.finalized=!0,ue.litElementHydrateSupport?.({LitElement:Nt});var br=ue.litElementPolyfillSupport;br?.({LitElement:Nt});(ue.litElementVersions??(ue.litElementVersions=[])).push("4.2.2");var bi=L`
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
`;var Qo=new Set,qt=new Map,kt,yo="ltr",Lo="en",di=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(di){let t=new MutationObserver(ui);yo=document.documentElement.dir||"ltr",Lo=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function he(...t){t.map(e=>{let o=e.$code.toLowerCase();qt.has(o)?qt.set(o,Object.assign(Object.assign({},qt.get(o)),e)):qt.set(o,e),kt||(kt=e)}),ui()}function ui(){di&&(yo=document.documentElement.dir||"ltr",Lo=document.documentElement.lang||navigator.language),[...Qo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var ke=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Qo.add(this.host)}hostDisconnected(){Qo.delete(this.host)}dir(){return`${this.host.dir||yo}`.toLowerCase()}lang(){return`${this.host.lang||Lo}`.toLowerCase()}getTranslationData(e){var o,i;let l;try{l=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let r=l.language.toLowerCase(),s=(i=(o=l.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",n=qt.get(`${r}-${s}`),c=qt.get(r);return{locale:l,language:r,region:s,primary:n,secondary:c}}exists(e,o){var i;let{primary:l,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(l&&l[e]||r&&r[e]||o.includeFallback&&kt&&kt[e])}term(e,...o){let{primary:i,secondary:l}=this.getTranslationData(this.lang()),r;if(i&&i[e])r=i[e];else if(l&&l[e])r=l[e];else if(kt&&kt[e])r=kt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var hi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};he(hi);var pi=hi;var O=class extends ke{};he(pi);var A=L`
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
`;var Ci=Object.defineProperty,dr=Object.defineProperties,ur=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyDescriptors,mi=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable,vo=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Bo=t=>{throw TypeError(t)},Ii=(t,e,o)=>e in t?Ci(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))pr.call(e,o)&&Ii(t,o,e[o]);if(mi)for(var o of mi(e))mr.call(e,o)&&Ii(t,o,e[o]);return t},ft=(t,e)=>dr(t,hr(e)),a=(t,e,o,i)=>{for(var l=i>1?void 0:i?ur(e,o):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(l=(i?s(e,o,l):s(l))||l);return i&&l&&Ci(e,o,l),l},Qi=(t,e,o)=>e.has(t)||Bo("Cannot "+o),yi=(t,e,o)=>(Qi(t,e,"read from private field"),o?o.call(t):e.get(t)),Li=(t,e,o)=>e.has(t)?Bo("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),vi=(t,e,o,i)=>(Qi(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),Ir=function(t,e){this[0]=t,this[1]=e},Bi=t=>{var e=t[vo("asyncIterator")],o=!1,i,l={};return e==null?(e=t[vo("iterator")](),i=r=>l[r]=s=>e[r](s)):(e=e.call(t),i=r=>l[r]=s=>{if(o){if(o=!1,r==="throw")throw s;return s}return o=!0,{done:!1,value:new Ir(new Promise(n=>{var c=e[r](s);c instanceof Object||Bo("Object expected"),n(c)}),1)}}),l[vo("iterator")]=()=>l,i("next"),"throw"in e?i("throw"):l.throw=r=>{throw r},"return"in e&&i("return"),l};var Cr={attribute:!0,type:String,converter:Ft,reflect:!1,hasChanged:De},Qr=(t=Cr,e,o)=>{let{kind:i,metadata:l}=o,r=globalThis.litPropertyMetadata.get(l);if(r===void 0&&globalThis.litPropertyMetadata.set(l,r=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),i==="accessor"){let{name:s}=o;return{set(n){let c=e.get.call(this);e.set.call(this,n),this.requestUpdate(s,c,t,!0,n)},init(n){return n!==void 0&&this.C(s,void 0,t,n),n}}}if(i==="setter"){let{name:s}=o;return function(n){let c=this[s];e.call(this,n),this.requestUpdate(s,c,t,!0,n)}}throw Error("Unsupported decorator location: "+i)};function g(t){return(e,o)=>typeof o=="object"?Qr(t,e,o):((i,l,r)=>{let s=l.hasOwnProperty(r);return l.constructor.createProperty(r,i),s?Object.getOwnPropertyDescriptor(l,r):void 0})(t,e,o)}function R(t){return g({...t,state:!0,attribute:!1})}var zt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);function w(t,e){return(o,i,l)=>{let r=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:n}=typeof i=="object"?o:l??(()=>{let c=Symbol();return{get(){return this[c]},set(b){this[c]=b}}})();return zt(o,i,{get(){let c=s.call(this);return c===void 0&&(c=r(this),(c!==null||this.hasUpdated)&&n.call(this,c)),c}})}return zt(o,i,{get(){return r(this)}})}}var ze,v=class extends Nt{constructor(){super(),Li(this,ze,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let o=new CustomEvent(t,_({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){let i=customElements.get(t);if(!i){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let l=" (unknown version)",r=l;"version"in e&&e.version&&(l=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(l&&r&&l===r)&&console.warn(`Attempted to register <${t}>${l}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,o){yi(this,ze)||(this.constructor.elementProperties.forEach((i,l)=>{i.reflect&&this[l]!=null&&this.initialReflectedProperties.set(l,this[l])}),vi(this,ze,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};ze=new WeakMap;v.version="2.20.1";v.dependencies={};a([g()],v.prototype,"dir",2);a([g()],v.prototype,"lang",2);var Zt=class extends v{constructor(){super(...arguments),this.localize=new O(this)}render(){return I`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Zt.styles=[A,bi];var pe=new WeakMap,me=new WeakMap,Ie=new WeakMap,Ao=new WeakSet,Ze=new WeakMap,je=class{constructor(t,e){this.handleFormData=o=>{let i=this.options.disabled(this.host),l=this.options.name(this.host),r=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof l=="string"&&l.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(n=>{o.formData.append(l,n.toString())}):o.formData.append(l,r.toString()))},this.handleFormSubmit=o=>{var i;let l=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=pe.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!l&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ze.set(this.host,[])},this.handleInteraction=o=>{let i=Ze.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=_({form:o=>{let i=o.form;if(i){let r=o.getRootNode().querySelector(`#${i}`);if(r)return r}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),Ze.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ze.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,pe.has(this.form)?pe.get(this.form).add(this.host):pe.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),me.has(this.form)||(me.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ie.has(this.form)||(Ie.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=pe.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),me.has(this.form)&&(this.form.reportValidity=me.get(this.form),me.delete(this.form)),Ie.has(this.form)&&(this.form.checkValidity=Ie.get(this.form),Ie.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Ao.add(t):Ao.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,o=!!Ao.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Re=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),xa=Object.freeze(ft(_({},Re),{valid:!1,valueMissing:!0})),Fa=Object.freeze(ft(_({},Re),{valid:!1,customError:!0}));var Ai=L`
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
`;var Y=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Ui(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var Uo="";function Ce(t){Uo=t}function wo(t=""){if(!Uo){let e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)Ce(o.getAttribute("data-shoelace"));else{let i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src)),l="";i&&(l=i.getAttribute("src")),Ce(l.split("/").slice(0,-1).join("/"))}}return Uo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var yr={name:"default",resolver:t=>wo(`assets/icons/${t}.svg`)},wi=yr;var xi={caret:`
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
  `},Lr={name:"system",resolver:t=>t in xi?`data:image/svg+xml,${encodeURIComponent(xi[t])}`:""},Fi=Lr;var Ve=[wi,Fi],Ee=[];function Ni(t){Ee.push(t)}function fi(t){Ee=Ee.filter(e=>e!==t)}function xo(t){return Ve.find(e=>e.name===t)}function Ye(t,e){Mi(t),Ve.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Ee.forEach(o=>{o.library===t&&o.setIcon()})}function Mi(t){Ve=Ve.filter(e=>e.name!==t)}var Di=L`
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
`;function D(t,e){let o=_({waitUntilFirstUpdate:!1},e);return(i,l)=>{let{update:r}=i,s=Array.isArray(t)?t:[t];i.update=function(n){s.forEach(c=>{let b=c;if(n.has(b)){let d=n.get(b),u=this[b];d!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[l](d,u)}}),r.call(this,n)}}}var{I:Ja}=ci;var Gi=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Je=t=>t.strings===void 0;var vr={},Xi=(t,e=vr)=>t._$AH=e;var Qe=Symbol(),He=Symbol(),Fo,No=new Map,W=class extends v{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e?.spriteSheet)return this.svg=I`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Qe:He}catch{return He}try{let l=document.createElement("div");l.innerHTML=await i.text();let r=l.firstElementChild;if(((o=r?.tagName)==null?void 0:o.toLowerCase())!=="svg")return Qe;Fo||(Fo=new DOMParser);let n=Fo.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):Qe}catch{return Qe}}connectedCallback(){super.connectedCallback(),Ni(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),fi(this)}getIconSource(){let t=xo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:o}=this.getIconSource(),i=o?xo(this.library):void 0;if(!e){this.svg=null;return}let l=No.get(e);if(l||(l=this.resolveIcon(e,i),No.set(e,l)),!this.initialRender)return;let r=await l;if(r===He&&No.delete(e),e===this.getIconSource().url){if(Gi(r)){if(this.svg=r,i){await this.updateComplete;let s=this.shadowRoot.querySelector("[part='svg']");typeof i.mutator=="function"&&s&&i.mutator(s)}return}switch(r){case He:case Qe:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};W.styles=[A,Di];a([R()],W.prototype,"svg",2);a([g({reflect:!0})],W.prototype,"name",2);a([g()],W.prototype,"src",2);a([g()],W.prototype,"label",2);a([g({reflect:!0})],W.prototype,"library",2);a([D("label")],W.prototype,"handleLabelChange",1);a([D(["name","src","library"])],W.prototype,"setIcon",1);var rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},jt=t=>(...e)=>({_$litDirective$:t,values:e}),Mt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};var M=jt(class extends Mt{constructor(t){if(super(t),t.type!==rt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let o=t.element.classList;for(let i of this.st)i in e||(o.remove(i),this.st.delete(i));for(let i in e){let l=!!e[i];l===this.st.has(i)||this.nt?.has(i)||(l?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return E}});var Oi=Symbol.for(""),Br=t=>{if(t?.r===Oi)return t?._$litStatic$};var te=(t,...e)=>({_$litStatic$:e.reduce((o,i,l)=>o+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[l+1],t[0]),r:Oi}),Wi=new Map,fo=t=>(e,...o)=>{let i=o.length,l,r,s=[],n=[],c,b=0,d=!1;for(;b<i;){for(c=e[b];b<i&&(r=o[b],(l=Br(r))!==void 0);)c+=l+e[++b],d=!0;b!==i&&n.push(r),s.push(c),b++}if(b===i&&s.push(e[i]),d){let u=s.join("$$lit$$");(e=Wi.get(u))===void 0&&(s.raw=s,Wi.set(u,e=s)),o=n}return t(e,...o)},ee=fo(I),In=fo(ri),Cn=fo(si);var C=t=>t??G;var x=class extends v{constructor(){super(...arguments),this.formControlController=new je(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Y(this,"[default]","prefix","suffix"),this.localize=new O(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Re}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?te`a`:te`button`;return ee`
      <${e}
        part="base"
        class=${M({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${C(t?void 0:this.disabled)}
        type=${C(t?void 0:this.type)}
        title=${this.title}
        name=${C(t?void 0:this.name)}
        value=${C(t?void 0:this.value)}
        href=${C(t&&!this.disabled?this.href:void 0)}
        target=${C(t?this.target:void 0)}
        download=${C(t?this.download:void 0)}
        rel=${C(t?this.rel:void 0)}
        role=${C(t?void 0:"button")}
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
        ${this.caret?ee` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ee`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};x.styles=[A,Ai];x.dependencies={"sl-icon":W,"sl-spinner":Zt};a([w(".button")],x.prototype,"button",2);a([R()],x.prototype,"hasFocus",2);a([R()],x.prototype,"invalid",2);a([g()],x.prototype,"title",2);a([g({reflect:!0})],x.prototype,"variant",2);a([g({reflect:!0})],x.prototype,"size",2);a([g({type:Boolean,reflect:!0})],x.prototype,"caret",2);a([g({type:Boolean,reflect:!0})],x.prototype,"disabled",2);a([g({type:Boolean,reflect:!0})],x.prototype,"loading",2);a([g({type:Boolean,reflect:!0})],x.prototype,"outline",2);a([g({type:Boolean,reflect:!0})],x.prototype,"pill",2);a([g({type:Boolean,reflect:!0})],x.prototype,"circle",2);a([g()],x.prototype,"type",2);a([g()],x.prototype,"name",2);a([g()],x.prototype,"value",2);a([g()],x.prototype,"href",2);a([g()],x.prototype,"target",2);a([g()],x.prototype,"rel",2);a([g()],x.prototype,"download",2);a([g()],x.prototype,"form",2);a([g({attribute:"formaction"})],x.prototype,"formAction",2);a([g({attribute:"formenctype"})],x.prototype,"formEnctype",2);a([g({attribute:"formmethod"})],x.prototype,"formMethod",2);a([g({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);a([g({attribute:"formtarget"})],x.prototype,"formTarget",2);a([D("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);x.define("sl-button");W.define("sl-icon");Zt.define("sl-spinner");var eC=tr(Ti());var Pe=t=>{var e;let{activeElement:o}=document;o&&t.contains(o)&&((e=document.activeElement)==null||e.blur())};var Si=L`
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
`;var S=class extends v{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?te`a`:te`button`;return ee`
      <${e}
        part="base"
        class=${M({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${C(t?void 0:this.disabled)}
        type=${C(t?void 0:"button")}
        href=${C(t?this.href:void 0)}
        target=${C(t?this.target:void 0)}
        download=${C(t?this.download:void 0)}
        rel=${C(t&&this.target?"noreferrer noopener":void 0)}
        role=${C(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${C(this.name)}
          library=${C(this.library)}
          src=${C(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};S.styles=[A,Si];S.dependencies={"sl-icon":W};a([w(".icon-button")],S.prototype,"button",2);a([R()],S.prototype,"hasFocus",2);a([g()],S.prototype,"name",2);a([g()],S.prototype,"library",2);a([g()],S.prototype,"src",2);a([g()],S.prototype,"href",2);a([g()],S.prototype,"target",2);a([g()],S.prototype,"download",2);a([g()],S.prototype,"label",2);a([g({type:Boolean,reflect:!0})],S.prototype,"disabled",2);var zi=new Map,Ar=new WeakMap;function Ur(t){return t??{keyframes:[],options:{duration:0}}}function ki(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function $(t,e){zi.set(t,Ur(e))}function q(t,e,o){let i=Ar.get(t);if(i?.[e])return ki(i[e],o.dir);let l=zi.get(e);return l?ki(l,o.dir):{keyframes:[],options:{duration:0}}}function yt(t,e){return new Promise(o=>{function i(l){l.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function tt(t,e,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");let l=t.animate(e,ft(_({},o),{duration:wr()?0:o.duration}));l.addEventListener("cancel",i,{once:!0}),l.addEventListener("finish",i,{once:!0})})}function wr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function st(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var Zi=L`
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
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
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
`;var P=class Rt extends v{constructor(){super(...arguments),this.hasSlotController=new Y(this,"icon","suffix"),this.localize=new O(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this,o="100%",i="0";this.countdownAnimation=e.animate([{width:o},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await st(this.base),this.base.hidden=!1;let{keyframes:e,options:o}=q(this,"alert.show",{dir:this.localize.dir()});await tt(this.base,e,o),this.emit("sl-after-show")}else{Pe(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await st(this.base);let{keyframes:e,options:o}=q(this,"alert.hide",{dir:this.localize.dir()});await tt(this.base,e,o),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,yt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,yt(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Rt.toastStack.parentElement===null&&document.body.append(Rt.toastStack),Rt.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Rt.toastStack.removeChild(this),e(),Rt.toastStack.querySelector("sl-alert")===null&&Rt.toastStack.remove()},{once:!0})})}render(){return I`
      <div
        part="base"
        class=${M({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?I`
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

        ${this.countdown?I`
              <div
                class=${M({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};P.styles=[A,Zi];P.dependencies={"sl-icon-button":S};a([w('[part~="base"]')],P.prototype,"base",2);a([w(".alert__countdown-elapsed")],P.prototype,"countdownElement",2);a([g({type:Boolean,reflect:!0})],P.prototype,"open",2);a([g({type:Boolean,reflect:!0})],P.prototype,"closable",2);a([g({reflect:!0})],P.prototype,"variant",2);a([g({type:Number})],P.prototype,"duration",2);a([g({type:String,reflect:!0})],P.prototype,"countdown",2);a([R()],P.prototype,"remainingTime",2);a([D("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);a([D("duration")],P.prototype,"handleDurationChange",1);var ji=P;$("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ji.define("sl-alert");var Ri=L`
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
`;var at=class extends v{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=I`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,e=I``;return this.initials?e=I`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=I`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,I`
      <div
        part="base"
        class=${M({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};at.styles=[A,Ri];at.dependencies={"sl-icon":W};a([R()],at.prototype,"hasError",2);a([g()],at.prototype,"image",2);a([g()],at.prototype,"label",2);a([g()],at.prototype,"initials",2);a([g()],at.prototype,"loading",2);a([g({reflect:!0})],at.prototype,"shape",2);a([D("image")],at.prototype,"handleImageChange",1);at.define("sl-avatar");var Vi=L`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var Vt=class extends v{constructor(){super(...arguments),this.localize=new O(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,o)=>{let i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),I`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Vt.styles=[A,Vi];Vt.dependencies={"sl-icon":W};a([w("slot")],Vt.prototype,"defaultSlot",2);a([w('slot[name="separator"]')],Vt.prototype,"separatorSlot",2);a([g()],Vt.prototype,"label",2);Vt.define("sl-breadcrumb");var Ei=L`
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
`;var Lt=class extends v{constructor(){super(...arguments),this.hasSlotController=new Y(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return I`
      <div
        part="base"
        class=${M({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?I`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${C(this.target?this.target:void 0)}"
                rel=${C(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?I`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?I`
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
    `}};Lt.styles=[A,Ei];a([w("slot:not([name])")],Lt.prototype,"defaultSlot",2);a([R()],Lt.prototype,"renderType",2);a([g()],Lt.prototype,"href",2);a([g()],Lt.prototype,"target",2);a([g()],Lt.prototype,"rel",2);a([D("href",{waitUntilFirstUpdate:!0})],Lt.prototype,"hrefChanged",1);Lt.define("sl-breadcrumb-item");var Yi=L`
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
`;var Mo=class extends v{constructor(){super(...arguments),this.hasSlotController=new Y(this,"footer","header","image")}render(){return I`
      <div
        part="base"
        class=${M({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Mo.styles=[A,Yi];Mo.define("sl-card");function*Ke(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Bi(Ke(t.shadowRoot.activeElement))))}function $e(){return[...Ke()].pop()}var Ji=new WeakMap;function Hi(t){let e=Ji.get(t);return e||(e=window.getComputedStyle(t,null),Ji.set(t,e)),e}function xr(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=Hi(t);return e.visibility!=="hidden"&&e.display!=="none"}function Fr(t){let e=Hi(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function Nr(t){let e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){let r=t.getRootNode(),s=`input[type='radio'][name="${t.getAttribute("name")}"]`,n=r.querySelector(`${s}:checked`);return n?n===t:r.querySelector(s)===t}return xr(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Fr(t):!1}function _i(t){var e,o;let i=qe(t),l=(e=i[0])!=null?e:null,r=(o=i[i.length-1])!=null?o:null;return{start:l,end:r}}function fr(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function qe(t){let e=new WeakMap,o=[];function i(l){if(l instanceof Element){if(l.hasAttribute("inert")||l.closest("[inert]")||e.has(l))return;e.set(l,!0),!o.includes(l)&&Nr(l)&&o.push(l),l instanceof HTMLSlotElement&&fr(l,t)&&l.assignedElements({flatten:!0}).forEach(r=>{i(r)}),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&i(l.shadowRoot)}for(let r of l.children)i(r)}return i(t),o.sort((l,r)=>{let s=Number(l.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-s})}var Le=[],Pi=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let i=$e();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let l=qe(this.element),r=l.findIndex(n=>n===i);this.previousFocus=this.currentFocus;let s=this.tabDirection==="forward"?1:-1;for(;;){r+s>=l.length?r=0:r+s<0?r=l.length-1:r+=s,this.previousFocus=this.currentFocus;let n=l[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(o=this.currentFocus)==null||o.focus({preventScroll:!1});let c=[...Ke()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Le.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Le=Le.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Le[Le.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=qe(this.element);if(!this.element.matches(":focus-within")){let e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var Do=new Set;function Mr(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Dr(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Go(t){if(Do.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let e=Mr()+Dr(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Xo(t){Do.delete(t),Do.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var Ki=L`
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
`;var nt=class extends v{constructor(){super(...arguments),this.hasSlotController=new Y(this,"footer"),this.localize=new O(this),this.modal=new Pi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Go(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Xo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let o=q(this,"dialog.denyClose",{dir:this.localize.dir()});tt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Go(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([st(this.dialog),st(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=q(this,"dialog.show",{dir:this.localize.dir()}),o=q(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([tt(this.panel,e.keyframes,e.options),tt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{Pe(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([st(this.dialog),st(this.overlay)]);let t=q(this,"dialog.hide",{dir:this.localize.dir()}),e=q(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([tt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),tt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Xo(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,yt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,yt(this,"sl-after-hide")}render(){return I`
      <div
        part="base"
        class=${M({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${C(this.noHeader?this.label:void 0)}
          aria-labelledby=${C(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":I`
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
    `}};nt.styles=[A,Ki];nt.dependencies={"sl-icon-button":S};a([w(".dialog")],nt.prototype,"dialog",2);a([w(".dialog__panel")],nt.prototype,"panel",2);a([w(".dialog__overlay")],nt.prototype,"overlay",2);a([g({type:Boolean,reflect:!0})],nt.prototype,"open",2);a([g({reflect:!0})],nt.prototype,"label",2);a([g({attribute:"no-header",type:Boolean,reflect:!0})],nt.prototype,"noHeader",2);a([D("open",{waitUntilFirstUpdate:!0})],nt.prototype,"handleOpenChange",1);$("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});$("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});$("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});$("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});nt.define("sl-dialog");var $i=L`
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
`;var ve=class extends v{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ve.styles=[A,$i];a([g({type:Boolean,reflect:!0})],ve.prototype,"vertical",2);a([D("vertical")],ve.prototype,"handleVerticalChange",1);ve.define("sl-divider");var qi=L`
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
`;var tl=L`
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
`;var ut=Math.min,V=Math.max,Ae=Math.round,Ue=Math.floor,ct=t=>({x:t,y:t}),Gr={left:"right",right:"left",bottom:"top",top:"bottom"};function eo(t,e,o){return V(t,ut(e,o))}function Et(t,e){return typeof t=="function"?t(e):t}function vt(t){return t.split("-")[0]}function Yt(t){return t.split("-")[1]}function Wo(t){return t==="x"?"y":"x"}function oo(t){return t==="y"?"height":"width"}function ht(t){let e=t[0];return e==="t"||e==="b"?"y":"x"}function io(t){return Wo(ht(t))}function il(t,e,o){o===void 0&&(o=!1);let i=Yt(t),l=io(t),r=oo(l),s=l==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Be(s)),[s,Be(s)]}function ll(t){let e=Be(t);return[to(t),e,to(e)]}function to(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}var el=["left","right"],ol=["right","left"],Xr=["top","bottom"],Wr=["bottom","top"];function Or(t,e,o){switch(t){case"top":case"bottom":return o?e?ol:el:e?el:ol;case"left":case"right":return e?Xr:Wr;default:return[]}}function rl(t,e,o,i){let l=Yt(t),r=Or(vt(t),o==="start",i);return l&&(r=r.map(s=>s+"-"+l),e&&(r=r.concat(r.map(to)))),r}function Be(t){let e=vt(t);return Gr[e]+t.slice(e.length)}function Tr(t){return{top:0,right:0,bottom:0,left:0,...t}}function Oo(t){return typeof t!="number"?Tr(t):{top:t,right:t,bottom:t,left:t}}function Jt(t){let{x:e,y:o,width:i,height:l}=t;return{width:i,height:l,top:o,left:e,right:e+i,bottom:o+l,x:e,y:o}}function sl(t,e,o){let{reference:i,floating:l}=t,r=ht(e),s=io(e),n=oo(s),c=vt(e),b=r==="y",d=i.x+i.width/2-l.width/2,u=i.y+i.height/2-l.height/2,p=i[n]/2-l[n]/2,h;switch(c){case"top":h={x:d,y:i.y-l.height};break;case"bottom":h={x:d,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:u};break;case"left":h={x:i.x-l.width,y:u};break;default:h={x:i.x,y:i.y}}switch(Yt(e)){case"start":h[s]-=p*(o&&b?-1:1);break;case"end":h[s]+=p*(o&&b?-1:1);break}return h}async function al(t,e){var o;e===void 0&&(e={});let{x:i,y:l,platform:r,rects:s,elements:n,strategy:c}=t,{boundary:b="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:h=0}=Et(e,t),m=Oo(h),U=n[p?u==="floating"?"reference":"floating":u],B=Jt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(U)))==null||o?U:U.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:b,rootBoundary:d,strategy:c})),F=u==="floating"?{x:i,y:l,width:s.floating.width,height:s.floating.height}:s.reference,f=await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),X=await(r.isElement==null?void 0:r.isElement(f))?await(r.getScale==null?void 0:r.getScale(f))||{x:1,y:1}:{x:1,y:1},z=Jt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:F,offsetParent:f,strategy:c}):F);return{top:(B.top-z.top+m.top)/X.y,bottom:(z.bottom-B.bottom+m.bottom)/X.y,left:(B.left-z.left+m.left)/X.x,right:(z.right-B.right+m.right)/X.x}}var Sr=50,nl=async(t,e,o)=>{let{placement:i="bottom",strategy:l="absolute",middleware:r=[],platform:s}=o,n=s.detectOverflow?s:{...s,detectOverflow:al},c=await(s.isRTL==null?void 0:s.isRTL(e)),b=await s.getElementRects({reference:t,floating:e,strategy:l}),{x:d,y:u}=sl(b,i,c),p=i,h=0,m={};for(let y=0;y<r.length;y++){let U=r[y];if(!U)continue;let{name:B,fn:F}=U,{x:f,y:X,data:z,reset:T}=await F({x:d,y:u,initialPlacement:i,placement:p,strategy:l,middlewareData:m,rects:b,platform:n,elements:{reference:t,floating:e}});d=f??d,u=X??u,m[B]={...m[B],...z},T&&h<Sr&&(h++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(b=T.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:l}):T.rects),{x:d,y:u}=sl(b,p,c)),y=-1)}return{x:d,y:u,placement:p,strategy:l,middlewareData:m}},cl=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:i,placement:l,rects:r,platform:s,elements:n,middlewareData:c}=e,{element:b,padding:d=0}=Et(t,e)||{};if(b==null)return{};let u=Oo(d),p={x:o,y:i},h=io(l),m=oo(h),y=await s.getDimensions(b),U=h==="y",B=U?"top":"left",F=U?"bottom":"right",f=U?"clientHeight":"clientWidth",X=r.reference[m]+r.reference[h]-p[h]-r.floating[m],z=p[h]-r.reference[h],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(b)),Z=T?T[f]:0;(!Z||!await(s.isElement==null?void 0:s.isElement(T)))&&(Z=n.floating[f]||r.floating[m]);let mt=X/2-z/2,bt=Z/2-y[m]/2-1,K=ut(u[B],bt),At=ut(u[F],bt),dt=K,Ut=Z-y[m]-At,j=Z/2-y[m]/2+mt,Gt=eo(dt,j,Ut),It=!c.arrow&&Yt(l)!=null&&j!==Gt&&r.reference[m]/2-(j<dt?K:At)-y[m]/2<0,it=It?j<dt?j-dt:j-Ut:0;return{[h]:p[h]+it,data:{[h]:Gt,centerOffset:j-Gt-it,...It&&{alignmentOffset:it}},reset:It}}});var gl=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;let{placement:l,middlewareData:r,rects:s,initialPlacement:n,platform:c,elements:b}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0,...U}=Et(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};let B=vt(l),F=ht(n),f=vt(n)===n,X=await(c.isRTL==null?void 0:c.isRTL(b.floating)),z=p||(f||!y?[Be(n)]:ll(n)),T=m!=="none";!p&&T&&z.push(...rl(n,y,m,X));let Z=[n,...z],mt=await c.detectOverflow(e,U),bt=[],K=((i=r.flip)==null?void 0:i.overflows)||[];if(d&&bt.push(mt[B]),u){let j=il(l,s,X);bt.push(mt[j[0]],mt[j[1]])}if(K=[...K,{placement:l,overflows:bt}],!bt.every(j=>j<=0)){var At,dt;let j=(((At=r.flip)==null?void 0:At.index)||0)+1,Gt=Z[j];if(Gt&&(!(u==="alignment"?F!==ht(Gt):!1)||K.every(lt=>ht(lt.placement)===F?lt.overflows[0]>0:!0)))return{data:{index:j,overflows:K},reset:{placement:Gt}};let It=(dt=K.filter(it=>it.overflows[0]<=0).sort((it,lt)=>it.overflows[1]-lt.overflows[1])[0])==null?void 0:dt.placement;if(!It)switch(h){case"bestFit":{var Ut;let it=(Ut=K.filter(lt=>{if(T){let wt=ht(lt.placement);return wt===F||wt==="y"}return!0}).map(lt=>[lt.placement,lt.overflows.filter(wt=>wt>0).reduce((wt,Yl)=>wt+Yl,0)]).sort((lt,wt)=>lt[1]-wt[1])[0])==null?void 0:Ut[0];it&&(It=it);break}case"initialPlacement":It=n;break}if(l!==It)return{reset:{placement:It}}}return{}}}};var kr=new Set(["left","top"]);async function zr(t,e){let{placement:o,platform:i,elements:l}=t,r=await(i.isRTL==null?void 0:i.isRTL(l.floating)),s=vt(o),n=Yt(o),c=ht(o)==="y",b=kr.has(s)?-1:1,d=r&&c?-1:1,u=Et(e,t),{mainAxis:p,crossAxis:h,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return n&&typeof m=="number"&&(h=n==="end"?m*-1:m),c?{x:h*d,y:p*b}:{x:p*b,y:h*d}}var bl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;let{x:l,y:r,placement:s,middlewareData:n}=e,c=await zr(e,t);return s===((o=n.offset)==null?void 0:o.placement)&&(i=n.arrow)!=null&&i.alignmentOffset?{}:{x:l+c.x,y:r+c.y,data:{...c,placement:s}}}}},dl=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:l,platform:r}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:c={fn:B=>{let{x:F,y:f}=B;return{x:F,y:f}}},...b}=Et(t,e),d={x:o,y:i},u=await r.detectOverflow(e,b),p=ht(vt(l)),h=Wo(p),m=d[h],y=d[p];if(s){let B=h==="y"?"top":"left",F=h==="y"?"bottom":"right",f=m+u[B],X=m-u[F];m=eo(f,m,X)}if(n){let B=p==="y"?"top":"left",F=p==="y"?"bottom":"right",f=y+u[B],X=y-u[F];y=eo(f,y,X)}let U=c.fn({...e,[h]:m,[p]:y});return{...U,data:{x:U.x-o,y:U.y-i,enabled:{[h]:s,[p]:n}}}}}};var ul=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,i;let{placement:l,rects:r,platform:s,elements:n}=e,{apply:c=()=>{},...b}=Et(t,e),d=await s.detectOverflow(e,b),u=vt(l),p=Yt(l),h=ht(l)==="y",{width:m,height:y}=r.floating,U,B;u==="top"||u==="bottom"?(U=u,B=p===(await(s.isRTL==null?void 0:s.isRTL(n.floating))?"start":"end")?"left":"right"):(B=u,U=p==="end"?"top":"bottom");let F=y-d.top-d.bottom,f=m-d.left-d.right,X=ut(y-d[U],F),z=ut(m-d[B],f),T=!e.middlewareData.shift,Z=X,mt=z;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(mt=f),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(Z=F),T&&!p){let K=V(d.left,0),At=V(d.right,0),dt=V(d.top,0),Ut=V(d.bottom,0);h?mt=m-2*(K!==0||At!==0?K+At:V(d.left,d.right)):Z=y-2*(dt!==0||Ut!==0?dt+Ut:V(d.top,d.bottom))}await c({...e,availableWidth:mt,availableHeight:Z});let bt=await s.getDimensions(n.floating);return m!==bt.width||y!==bt.height?{reset:{rects:!0}}:{}}}};function lo(){return typeof window<"u"}function _t(t){return pl(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function gt(t){var e;return(e=(pl(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pl(t){return lo()?t instanceof Node||t instanceof J(t).Node:!1}function et(t){return lo()?t instanceof Element||t instanceof J(t).Element:!1}function pt(t){return lo()?t instanceof HTMLElement||t instanceof J(t).HTMLElement:!1}function hl(t){return!lo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}function ie(t){let{overflow:e,overflowX:o,overflowY:i,display:l}=ot(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&l!=="inline"&&l!=="contents"}function ml(t){return/^(table|td|th)$/.test(_t(t))}function we(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}var Zr=/transform|translate|scale|rotate|perspective|filter/,jr=/paint|layout|strict|content/,Ht=t=>!!t&&t!=="none",To;function le(t){let e=et(t)?ot(t):t;return Ht(e.transform)||Ht(e.translate)||Ht(e.scale)||Ht(e.rotate)||Ht(e.perspective)||!ro()&&(Ht(e.backdropFilter)||Ht(e.filter))||Zr.test(e.willChange||"")||jr.test(e.contain||"")}function Il(t){let e=Bt(t);for(;pt(e)&&!Pt(e);){if(le(e))return e;if(we(e))return null;e=Bt(e)}return null}function ro(){return To==null&&(To=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),To}function Pt(t){return/^(html|body|#document)$/.test(_t(t))}function ot(t){return J(t).getComputedStyle(t)}function xe(t){return et(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Bt(t){if(_t(t)==="html")return t;let e=t.assignedSlot||t.parentNode||hl(t)&&t.host||gt(t);return hl(e)?e.host:e}function Cl(t){let e=Bt(t);return Pt(e)?t.ownerDocument?t.ownerDocument.body:t.body:pt(e)&&ie(e)?e:Cl(e)}function oe(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);let l=Cl(t),r=l===((i=t.ownerDocument)==null?void 0:i.body),s=J(l);if(r){let n=so(s);return e.concat(s,s.visualViewport||[],ie(l)?l:[],n&&o?oe(n):[])}else return e.concat(l,oe(l,[],o))}function so(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function vl(t){let e=ot(t),o=parseFloat(e.width)||0,i=parseFloat(e.height)||0,l=pt(t),r=l?t.offsetWidth:o,s=l?t.offsetHeight:i,n=Ae(o)!==r||Ae(i)!==s;return n&&(o=r,i=s),{width:o,height:i,$:n}}function ko(t){return et(t)?t:t.contextElement}function re(t){let e=ko(t);if(!pt(e))return ct(1);let o=e.getBoundingClientRect(),{width:i,height:l,$:r}=vl(e),s=(r?Ae(o.width):o.width)/i,n=(r?Ae(o.height):o.height)/l;return(!s||!Number.isFinite(s))&&(s=1),(!n||!Number.isFinite(n))&&(n=1),{x:s,y:n}}var Rr=ct(0);function Bl(t){let e=J(t);return!ro()||!e.visualViewport?Rr:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Vr(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==J(t)?!1:e}function Kt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);let l=t.getBoundingClientRect(),r=ko(t),s=ct(1);e&&(i?et(i)&&(s=re(i)):s=re(t));let n=Vr(r,o,i)?Bl(r):ct(0),c=(l.left+n.x)/s.x,b=(l.top+n.y)/s.y,d=l.width/s.x,u=l.height/s.y;if(r){let p=J(r),h=i&&et(i)?J(i):i,m=p,y=so(m);for(;y&&i&&h!==m;){let U=re(y),B=y.getBoundingClientRect(),F=ot(y),f=B.left+(y.clientLeft+parseFloat(F.paddingLeft))*U.x,X=B.top+(y.clientTop+parseFloat(F.paddingTop))*U.y;c*=U.x,b*=U.y,d*=U.x,u*=U.y,c+=f,b+=X,m=J(y),y=so(m)}}return Jt({width:d,height:u,x:c,y:b})}function ao(t,e){let o=xe(t).scrollLeft;return e?e.left+o:Kt(gt(t)).left+o}function Al(t,e){let o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-ao(t,o),l=o.top+e.scrollTop;return{x:i,y:l}}function Er(t){let{elements:e,rect:o,offsetParent:i,strategy:l}=t,r=l==="fixed",s=gt(i),n=e?we(e.floating):!1;if(i===s||n&&r)return o;let c={scrollLeft:0,scrollTop:0},b=ct(1),d=ct(0),u=pt(i);if((u||!u&&!r)&&((_t(i)!=="body"||ie(s))&&(c=xe(i)),u)){let h=Kt(i);b=re(i),d.x=h.x+i.clientLeft,d.y=h.y+i.clientTop}let p=s&&!u&&!r?Al(s,c):ct(0);return{width:o.width*b.x,height:o.height*b.y,x:o.x*b.x-c.scrollLeft*b.x+d.x+p.x,y:o.y*b.y-c.scrollTop*b.y+d.y+p.y}}function Yr(t){return Array.from(t.getClientRects())}function Jr(t){let e=gt(t),o=xe(t),i=t.ownerDocument.body,l=V(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=V(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),s=-o.scrollLeft+ao(t),n=-o.scrollTop;return ot(i).direction==="rtl"&&(s+=V(e.clientWidth,i.clientWidth)-l),{width:l,height:r,x:s,y:n}}var Ql=25;function Hr(t,e){let o=J(t),i=gt(t),l=o.visualViewport,r=i.clientWidth,s=i.clientHeight,n=0,c=0;if(l){r=l.width,s=l.height;let d=ro();(!d||d&&e==="fixed")&&(n=l.offsetLeft,c=l.offsetTop)}let b=ao(i);if(b<=0){let d=i.ownerDocument,u=d.body,p=getComputedStyle(u),h=d.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,m=Math.abs(i.clientWidth-u.clientWidth-h);m<=Ql&&(r-=m)}else b<=Ql&&(r+=b);return{width:r,height:s,x:n,y:c}}function _r(t,e){let o=Kt(t,!0,e==="fixed"),i=o.top+t.clientTop,l=o.left+t.clientLeft,r=pt(t)?re(t):ct(1),s=t.clientWidth*r.x,n=t.clientHeight*r.y,c=l*r.x,b=i*r.y;return{width:s,height:n,x:c,y:b}}function yl(t,e,o){let i;if(e==="viewport")i=Hr(t,o);else if(e==="document")i=Jr(gt(t));else if(et(e))i=_r(e,o);else{let l=Bl(t);i={x:e.x-l.x,y:e.y-l.y,width:e.width,height:e.height}}return Jt(i)}function Ul(t,e){let o=Bt(t);return o===e||!et(o)||Pt(o)?!1:ot(o).position==="fixed"||Ul(o,e)}function Pr(t,e){let o=e.get(t);if(o)return o;let i=oe(t,[],!1).filter(n=>et(n)&&_t(n)!=="body"),l=null,r=ot(t).position==="fixed",s=r?Bt(t):t;for(;et(s)&&!Pt(s);){let n=ot(s),c=le(s);!c&&n.position==="fixed"&&(l=null),(r?!c&&!l:!c&&n.position==="static"&&!!l&&(l.position==="absolute"||l.position==="fixed")||ie(s)&&!c&&Ul(t,s))?i=i.filter(d=>d!==s):l=n,s=Bt(s)}return e.set(t,i),i}function Kr(t){let{element:e,boundary:o,rootBoundary:i,strategy:l}=t,s=[...o==="clippingAncestors"?we(e)?[]:Pr(e,this._c):[].concat(o),i],n=yl(e,s[0],l),c=n.top,b=n.right,d=n.bottom,u=n.left;for(let p=1;p<s.length;p++){let h=yl(e,s[p],l);c=V(h.top,c),b=ut(h.right,b),d=ut(h.bottom,d),u=V(h.left,u)}return{width:b-u,height:d-c,x:u,y:c}}function $r(t){let{width:e,height:o}=vl(t);return{width:e,height:o}}function qr(t,e,o){let i=pt(e),l=gt(e),r=o==="fixed",s=Kt(t,!0,r,e),n={scrollLeft:0,scrollTop:0},c=ct(0);function b(){c.x=ao(l)}if(i||!i&&!r)if((_t(e)!=="body"||ie(l))&&(n=xe(e)),i){let h=Kt(e,!0,r,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else l&&b();r&&!i&&l&&b();let d=l&&!i&&!r?Al(l,n):ct(0),u=s.left+n.scrollLeft-c.x-d.x,p=s.top+n.scrollTop-c.y-d.y;return{x:u,y:p,width:s.width,height:s.height}}function So(t){return ot(t).position==="static"}function Ll(t,e){if(!pt(t)||ot(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return gt(t)===o&&(o=o.ownerDocument.body),o}function wl(t,e){let o=J(t);if(we(t))return o;if(!pt(t)){let l=Bt(t);for(;l&&!Pt(l);){if(et(l)&&!So(l))return l;l=Bt(l)}return o}let i=Ll(t,e);for(;i&&ml(i)&&So(i);)i=Ll(i,e);return i&&Pt(i)&&So(i)&&!le(i)?o:i||Il(t)||o}var ts=async function(t){let e=this.getOffsetParent||wl,o=this.getDimensions,i=await o(t.floating);return{reference:qr(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function es(t){return ot(t).direction==="rtl"}var Fe={convertOffsetParentRelativeRectToViewportRelativeRect:Er,getDocumentElement:gt,getClippingRect:Kr,getOffsetParent:wl,getElementRects:ts,getClientRects:Yr,getDimensions:$r,getScale:re,isElement:et,isRTL:es};function xl(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function os(t,e){let o=null,i,l=gt(t);function r(){var n;clearTimeout(i),(n=o)==null||n.disconnect(),o=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),r();let b=t.getBoundingClientRect(),{left:d,top:u,width:p,height:h}=b;if(n||e(),!p||!h)return;let m=Ue(u),y=Ue(l.clientWidth-(d+p)),U=Ue(l.clientHeight-(u+h)),B=Ue(d),f={rootMargin:-m+"px "+-y+"px "+-U+"px "+-B+"px",threshold:V(0,ut(1,c))||1},X=!0;function z(T){let Z=T[0].intersectionRatio;if(Z!==c){if(!X)return s();Z?s(!1,Z):i=setTimeout(()=>{s(!1,1e-7)},1e3)}Z===1&&!xl(b,t.getBoundingClientRect())&&s(),X=!1}try{o=new IntersectionObserver(z,{...f,root:l.ownerDocument})}catch{o=new IntersectionObserver(z,f)}o.observe(t)}return s(!0),r}function Fl(t,e,o,i){i===void 0&&(i={});let{ancestorScroll:l=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,b=ko(t),d=l||r?[...b?oe(b):[],...e?oe(e):[]]:[];d.forEach(B=>{l&&B.addEventListener("scroll",o,{passive:!0}),r&&B.addEventListener("resize",o)});let u=b&&n?os(b,o):null,p=-1,h=null;s&&(h=new ResizeObserver(B=>{let[F]=B;F&&F.target===b&&h&&e&&(h.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var f;(f=h)==null||f.observe(e)})),o()}),b&&!c&&h.observe(b),e&&h.observe(e));let m,y=c?Kt(t):null;c&&U();function U(){let B=Kt(t);y&&!xl(y,B)&&o(),y=B,m=requestAnimationFrame(U)}return o(),()=>{var B;d.forEach(F=>{l&&F.removeEventListener("scroll",o),r&&F.removeEventListener("resize",o)}),u?.(),(B=h)==null||B.disconnect(),h=null,c&&cancelAnimationFrame(m)}}var Nl=bl;var fl=dl,Ml=gl,zo=ul;var Dl=cl;var Gl=(t,e,o)=>{let i=new Map,l={platform:Fe,...o},r={...l.platform,_c:i};return nl(t,e,{...l,platform:r})};function Xl(t){return is(t)}function Zo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function is(t){for(let e=t;e;e=Zo(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Zo(t);e;e=Zo(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||le(o)||e.tagName==="BODY"))return e}return null}function ls(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var N=class extends v{constructor(){super(...arguments),this.localize=new O(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),i=0,l=0,r=0,s=0,n=0,c=0,b=0,d=0;o?t.top<e.top?(i=t.left,l=t.bottom,r=t.right,s=t.bottom,n=e.left,c=e.top,b=e.right,d=e.top):(i=e.left,l=e.bottom,r=e.right,s=e.bottom,n=t.left,c=t.top,b=t.right,d=t.top):t.left<e.left?(i=t.right,l=t.top,r=e.left,s=e.top,n=t.right,c=t.bottom,b=e.left,d=e.bottom):(i=e.right,l=e.top,r=t.left,s=t.top,n=e.right,c=e.bottom,b=t.left,d=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${l}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||ls(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Fl(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[Nl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(zo({apply:({rects:o})=>{let i=this.sync==="width"||this.sync==="both",l=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=l?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Ml({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(fl({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(zo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Dl({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?o=>Fe.getOffsetParent(o,Xl):Fe.getOffsetParent;Gl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ft(_({},Fe),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:l,placement:r})=>{let s=this.localize.dir()==="rtl",n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){let c=l.arrow.x,b=l.arrow.y,d="",u="",p="",h="";if(this.arrowPlacement==="start"){let m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?m:"",h=s?"":m}else if(this.arrowPlacement==="end"){let m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":m,h=s?m:"",p=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof c=="number"?`${c}px`:"",d=typeof b=="number"?`${b}px`:"");Object.assign(this.arrowEl.style,{top:d,right:u,bottom:p,left:h,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return I`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${M({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${M({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?I`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};N.styles=[A,tl];a([w(".popup")],N.prototype,"popup",2);a([w(".popup__arrow")],N.prototype,"arrowEl",2);a([g()],N.prototype,"anchor",2);a([g({type:Boolean,reflect:!0})],N.prototype,"active",2);a([g({reflect:!0})],N.prototype,"placement",2);a([g({reflect:!0})],N.prototype,"strategy",2);a([g({type:Number})],N.prototype,"distance",2);a([g({type:Number})],N.prototype,"skidding",2);a([g({type:Boolean})],N.prototype,"arrow",2);a([g({attribute:"arrow-placement"})],N.prototype,"arrowPlacement",2);a([g({attribute:"arrow-padding",type:Number})],N.prototype,"arrowPadding",2);a([g({type:Boolean})],N.prototype,"flip",2);a([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],N.prototype,"flipFallbackPlacements",2);a([g({attribute:"flip-fallback-strategy"})],N.prototype,"flipFallbackStrategy",2);a([g({type:Object})],N.prototype,"flipBoundary",2);a([g({attribute:"flip-padding",type:Number})],N.prototype,"flipPadding",2);a([g({type:Boolean})],N.prototype,"shift",2);a([g({type:Object})],N.prototype,"shiftBoundary",2);a([g({attribute:"shift-padding",type:Number})],N.prototype,"shiftPadding",2);a([g({attribute:"auto-size"})],N.prototype,"autoSize",2);a([g()],N.prototype,"sync",2);a([g({type:Object})],N.prototype,"autoSizeBoundary",2);a([g({attribute:"auto-size-padding",type:Number})],N.prototype,"autoSizePadding",2);a([g({attribute:"hover-bridge",type:Boolean})],N.prototype,"hoverBridge",2);var k=class extends v{constructor(){super(...arguments),this.localize=new O(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}let o=(i,l)=>{if(!i)return null;let r=i.closest(l);if(r)return r;let s=i.getRootNode();return s instanceof ShadowRoot?o(s.host,l):null};setTimeout(()=>{var i;let l=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?$e():document.activeElement;(!this.containingElement||o(l,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let o=e.getAllItems(),i=o[0],l=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(l),l.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>_i(i).start),o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,yt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,yt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await st(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=q(this,"dropdown.show",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await st(this);let{keyframes:t,options:e}=q(this,"dropdown.hide",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return I`
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
        sync=${C(this.sync?this.sync:void 0)}
        class=${M({dropdown:!0,"dropdown--open":this.open})}
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
    `}};k.styles=[A,qi];k.dependencies={"sl-popup":N};a([w(".dropdown")],k.prototype,"popup",2);a([w(".dropdown__trigger")],k.prototype,"trigger",2);a([w(".dropdown__panel")],k.prototype,"panel",2);a([g({type:Boolean,reflect:!0})],k.prototype,"open",2);a([g({reflect:!0})],k.prototype,"placement",2);a([g({type:Boolean,reflect:!0})],k.prototype,"disabled",2);a([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],k.prototype,"stayOpenOnSelect",2);a([g({attribute:!1})],k.prototype,"containingElement",2);a([g({type:Number})],k.prototype,"distance",2);a([g({type:Number})],k.prototype,"skidding",2);a([g({type:Boolean})],k.prototype,"hoist",2);a([g({reflect:!0})],k.prototype,"sync",2);a([D("open",{waitUntilFirstUpdate:!0})],k.prototype,"handleOpenChange",1);$("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});$("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});k.define("sl-dropdown");var Wl=L`
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
`;var Ol=(t="value")=>(e,o)=>{let i=e.constructor,l=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,s,n){var c;let b=i.getPropertyOptions(t),d=typeof b.attribute=="string"?b.attribute:t;if(r===d){let u=b.converter||Ft,h=(typeof u=="function"?u:(c=u?.fromAttribute)!=null?c:Ft.fromAttribute)(n,b.type);this[t]!==h&&(this[o]=h)}l.call(this,r,s,n)}};var Tl=L`
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
`;var Sl=jt(class extends Mt{constructor(t){if(super(t),t.type!==rt.PROPERTY&&t.type!==rt.ATTRIBUTE&&t.type!==rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Je(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===E||e===G)return e;let o=t.element,i=t.name;if(t.type===rt.PROPERTY){if(e===o[i])return E}else if(t.type===rt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return E}else if(t.type===rt.ATTRIBUTE&&o.getAttribute(i)===e+"")return E;return Xi(t),e}});var Q=class extends v{constructor(){super(...arguments),this.formControlController=new je(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Y(this,"help-text","label"),this.localize=new O(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){let l=e??this.input.selectionStart,r=o??this.input.selectionEnd;this.input.setRangeText(t,l,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return I`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${M({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${C(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${C(this.placeholder)}
              minlength=${C(this.minlength)}
              maxlength=${C(this.maxlength)}
              min=${C(this.min)}
              max=${C(this.max)}
              step=${C(this.step)}
              .value=${Sl(this.value)}
              autocapitalize=${C(this.autocapitalize)}
              autocomplete=${C(this.autocomplete)}
              autocorrect=${C(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${C(this.pattern)}
              enterkeyhint=${C(this.enterkeyhint)}
              inputmode=${C(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?I`
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
            ${this.passwordToggle&&!this.disabled?I`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?I`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:I`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q.styles=[A,Tl,Wl];Q.dependencies={"sl-icon":W};a([w(".input__control")],Q.prototype,"input",2);a([R()],Q.prototype,"hasFocus",2);a([g()],Q.prototype,"title",2);a([g({reflect:!0})],Q.prototype,"type",2);a([g()],Q.prototype,"name",2);a([g()],Q.prototype,"value",2);a([Ol()],Q.prototype,"defaultValue",2);a([g({reflect:!0})],Q.prototype,"size",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"filled",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"pill",2);a([g()],Q.prototype,"label",2);a([g({attribute:"help-text"})],Q.prototype,"helpText",2);a([g({type:Boolean})],Q.prototype,"clearable",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);a([g()],Q.prototype,"placeholder",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"readonly",2);a([g({attribute:"password-toggle",type:Boolean})],Q.prototype,"passwordToggle",2);a([g({attribute:"password-visible",type:Boolean})],Q.prototype,"passwordVisible",2);a([g({attribute:"no-spin-buttons",type:Boolean})],Q.prototype,"noSpinButtons",2);a([g({reflect:!0})],Q.prototype,"form",2);a([g({type:Boolean,reflect:!0})],Q.prototype,"required",2);a([g()],Q.prototype,"pattern",2);a([g({type:Number})],Q.prototype,"minlength",2);a([g({type:Number})],Q.prototype,"maxlength",2);a([g()],Q.prototype,"min",2);a([g()],Q.prototype,"max",2);a([g()],Q.prototype,"step",2);a([g()],Q.prototype,"autocapitalize",2);a([g()],Q.prototype,"autocorrect",2);a([g()],Q.prototype,"autocomplete",2);a([g({type:Boolean})],Q.prototype,"autofocus",2);a([g()],Q.prototype,"enterkeyhint",2);a([g({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],Q.prototype,"spellcheck",2);a([g()],Q.prototype,"inputmode",2);a([D("disabled",{waitUntilFirstUpdate:!0})],Q.prototype,"handleDisabledChange",1);a([D("step",{waitUntilFirstUpdate:!0})],Q.prototype,"handleStepChange",1);a([D("value",{waitUntilFirstUpdate:!0})],Q.prototype,"handleValueChange",1);Q.define("sl-input");var kl=L`
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
`;var no=class extends v{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find(n=>{var c;return e.includes(((c=n?.getAttribute)==null?void 0:c.call(n,"role"))||"")});if(!i||o.find(n=>{var c;return((c=n?.getAttribute)==null?void 0:c.call(n,"role"))==="menu"})!==this)return;let s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),o=this.getCurrentItem(),i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return I`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};no.styles=[A,kl];a([w("slot")],no.prototype,"defaultSlot",2);no.define("sl-menu");var zl=L`
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
`;var Ne=(t,e)=>{let o=t._$AN;if(o===void 0)return!1;for(let i of o)i._$AO?.(e,!1),Ne(i,e);return!0},co=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Zl=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),as(e)}};function rs(t){this._$AN!==void 0?(co(this),this._$AM=t,Zl(this)):this._$AM=t}function ss(t,e=!1,o=0){let i=this._$AH,l=this._$AN;if(l!==void 0&&l.size!==0)if(e)if(Array.isArray(i))for(let r=o;r<i.length;r++)Ne(i[r],!1),co(i[r]);else i!=null&&(Ne(i,!1),co(i));else Ne(this,t)}var as=t=>{t.type==rt.CHILD&&(t._$AP??(t._$AP=ss),t._$AQ??(t._$AQ=rs))},go=class extends Mt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,i){super._$AT(e,o,i),Zl(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(Ne(this,e),co(this))}setValue(e){if(Je(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};var jl=()=>new Ro,Ro=class{},jo=new WeakMap,Rl=jt(class extends go{render(t){return G}update(t,[e]){let o=e!==this.G;return o&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),G}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,o=jo.get(e);o===void 0&&(o=new WeakMap,jo.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?jo.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Vl=class{constructor(t,e){this.popupRef=jl(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=o=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${o.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${o.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=o=>{switch(o.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":o.target!==this.host&&(o.preventDefault(),o.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(o);break;default:break}},this.handleClick=o=>{var i;o.target===this.host?(o.preventDefault(),o.stopPropagation()):o.target instanceof Element&&(o.target.tagName==="sl-menu-item"||(i=o.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=o=>{o.relatedTarget&&o.relatedTarget instanceof Element&&this.host.contains(o.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=o=>{o.stopPropagation()},this.handlePopupReposition=()=>{let o=this.host.renderRoot.querySelector("slot[name='submenu']"),i=o?.assignedElements({flatten:!0}).filter(b=>b.localName==="sl-menu")[0],l=getComputedStyle(this.host).direction==="rtl";if(!i)return;let{left:r,top:s,width:n,height:c}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${l?r+n:r}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${l?r+n:r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(let i of e.assignedElements())if(o=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let i=1;i!==o.length;++i)o[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((l,r)=>{var s;let n=(s=e.get(r))!=null?s:new CSSUnitValue(0,"px"),b=(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px");return l-b.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?I`
      <sl-popup
        ${Rl(this.popupRef)}
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
    `:I` <slot name="submenu" hidden></slot> `}};var H=class extends v{constructor(){super(...arguments),this.localize=new O(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Y(this,"submenu"),this.submenuController=new Vl(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Ui(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return I`
      <div
        id="anchor"
        part="base"
        class=${M({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?I` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};H.styles=[A,zl];H.dependencies={"sl-icon":W,"sl-popup":N,"sl-spinner":Zt};a([w("slot:not([name])")],H.prototype,"defaultSlot",2);a([w(".menu-item")],H.prototype,"menuItem",2);a([g()],H.prototype,"type",2);a([g({type:Boolean,reflect:!0})],H.prototype,"checked",2);a([g()],H.prototype,"value",2);a([g({type:Boolean,reflect:!0})],H.prototype,"loading",2);a([g({type:Boolean,reflect:!0})],H.prototype,"disabled",2);a([D("checked")],H.prototype,"handleCheckedChange",1);a([D("disabled")],H.prototype,"handleDisabledChange",1);a([D("type")],H.prototype,"handleTypeChange",1);H.define("sl-menu-item");var El=L`
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
`;var Dt=class extends v{constructor(){super(...arguments),this.localize=new O(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return I`
      <span
        part="base"
        class=${M({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?I`
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
    `}};Dt.styles=[A,El];Dt.dependencies={"sl-icon-button":S};a([g({reflect:!0})],Dt.prototype,"variant",2);a([g({reflect:!0})],Dt.prototype,"size",2);a([g({type:Boolean,reflect:!0})],Dt.prototype,"pill",2);a([g({type:Boolean})],Dt.prototype,"removable",2);Dt.define("sl-tag");Ye("remixicon",{resolver(t){let e=t.match(/^(.*?)\/(.*?)(-(fill)?)?$/m);return e[1]=e[1].charAt(0).toUpperCase()+e[1].slice(1),`https://cdn.jsdelivr.net/npm/remixicon@3.3.0/icons/${e[1]}/${e[2]}${e[3]=="-"?"":e[3]||"-line"}.svg`},mutator(t){return t.setAttribute("fill","currentColor")}});Ye("heroicons",{resolver:t=>`https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/solid/${t}.svg`});Ce("/images");console.info("Bridgetown is loaded!");})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/async-directive.js:
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

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/static.js:
lit-html/directives/live.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/_bridgetown/static/index.HAVIDDCC.js.map
