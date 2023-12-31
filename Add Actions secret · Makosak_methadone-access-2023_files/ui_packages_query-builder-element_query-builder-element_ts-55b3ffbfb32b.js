"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_query-builder-element_query-builder-element_ts"],{89359:(t,e,i)=>{function s(t){let e=document.querySelectorAll(t);if(e.length>0)return e[e.length-1]}function a(){let t=s("meta[name=analytics-location]");return t?t.content:window.location.pathname}function n(){let t=s("meta[name=analytics-location-query-strip]"),e="";t||(e=window.location.search);let i=s("meta[name=analytics-location-params]");for(let t of(i&&(e+=(e?"&":"?")+i.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let i=t.content.split(":",2);e=e.replace(RegExp(`(^|[?&])${i[0]}($|=)`,"g"),`$1${i[1]}$2`)}return e}function r(){return`${window.location.protocol}//${window.location.host}${a()+n()}`}i.d(e,{S:()=>r})},24601:(t,e,i)=>{i.d(e,{aJ:()=>E,cI:()=>L,eK:()=>g});var s=i(82918),a=i(49237),n=i(28382),r=i(89359),l=i(68202),o=i(53729),u=i(86283),c=i(46426);let h=!1,d=0,p=Date.now(),y=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(t){return t instanceof Error||"object"==typeof t&&null!==t&&"name"in t&&"string"==typeof t.name&&"message"in t&&"string"==typeof t.message}function f(t){try{return JSON.stringify(t)}catch{return"Unserializable"}}function v(t){return!!("AbortError"===t.name||"TypeError"===t.name&&y.has(t.message)||t.name.startsWith("ApiError")&&y.has(t.message))}function g(t,e={}){if((0,c.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!m(t)){if(T(t))return;let i=Error(),s=f(t),a={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof t}, with value ${s}`,stacktrace:L(i)};b($(a,e));return}v(t)||b($(w(t),e))}else v(t)||b($(w(t),e))}async function b(t){if(!C())return;let e=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(e){if(A(t.error.stacktrace)){h=!0;return}d++;try{await fetch(e,{method:"post",body:JSON.stringify(t)})}catch{}}}function w(t){return{type:t.name,value:t.message,stacktrace:L(t)}}function $(t,e={}){return Object.assign({error:t,sanitizedUrl:(0,r.S)()||window.location.href,readyState:document.readyState,referrer:(0,l.wP)(),timeSinceLoad:Math.round(Date.now()-p),user:E()||void 0,bundler:o.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},e)}function L(t){return(0,n.Q)(t.stack||"").map(t=>({filename:t.file||"",function:String(t.methodName),lineno:(t.lineNumber||0).toString(),colno:(t.column||0).toString()}))}let I=/(chrome|moz|safari)-extension:\/\//;function A(t){return t.some(t=>I.test(t.filename)||I.test(t.function))}function E(){let t=document.head?.querySelector('meta[name="user-login"]')?.content;if(t)return t;let e=(0,s.b)();return`anonymous-${e}`}let S=!1;function C(){return!S&&!h&&d<10&&(0,a.Gb)()}if(u.iG?.addEventListener("pageshow",()=>S=!1),u.iG?.addEventListener("pagehide",()=>S=!0),"function"==typeof BroadcastChannel){let t=new BroadcastChannel("shared-worker-error");t.addEventListener("message",t=>{g(t.data.error)})}let k=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"];function T(t){if(!t||"boolean"==typeof t||"number"==typeof t)return!0;if("string"==typeof t){if(k.some(e=>t.includes(e)))return!0}else if("object"==typeof t&&"string"==typeof t.message&&"number"==typeof t.code)return!0;return!1}},45974:(t,e,i)=>{i.d(e,{dy:()=>l.dy,sY:()=>l.sY,Au:()=>l.Au});var s=i(22490),a=i(7180);let n="jtml-no-op",r=s.Z.createPolicy(n,{createHTML:t=>a.O.apply({policy:()=>t,policyName:n,fallback:t,fallbackOnError:!0})});var l=i(20845);l.js.setCSPTrustedTypesPolicy(r)},3399:(t,e,i)=>{var s,a,n,r;i.d(e,{Fi:()=>s,Ju:()=>o,L2:()=>FilterItem,T2:()=>SearchItem,UK:()=>QueryEvent,Z:()=>FetchDataEvent,gC:()=>n,i:()=>l,tj:()=>r,zi:()=>a}),function(t){t.DIRECTORY="Search in this directory",t.ORG="Search in this organization",t.OWNER="Search in this owner",t.REPO="Search in this repository",t.GITHUB="Search all of GitHub",t.GENERAL="Submit search",t.COMMAND="Run command",t.DEFAULT="Jump to"}(s||(s={}));let l="Autocomplete";let FilterItem=class FilterItem extends Event{constructor({filter:t,value:e,name:i="",description:s="",inlineDescription:a=!1,priority:n=1/0,icon:r,avatar:l,action:o}){super("filter-item"),this.inlineDescription=!1,this.filter=t,this.value=e,this.name=i,this.description=s,this.inlineDescription=a,this.priority=n,this.icon=r,this.avatar=l,this.action=o}};function o(t){return t instanceof Object}!function(t){t.Apps="apps",t.Archived="archived",t.Bookmark="bookmark",t.Branch="branch",t.Calendar="calendar",t.Circle="circle",t.Code="code",t.Comment="comment",t.Default="default",t.Discussion="discussion",t.Draft="draft",t.FileIcon="file-icon",t.FileCode="file-code",t.Filter="filter",t.Forbidden="forbidden",t.History="history",t.Issue="issue",t.IssueClosed="issueClosed",t.Iterations="iterations",t.Mention="mention",t.Merged="merged",t.No="no",t.Not="not",t.Milestone="milestone",t.Organization="organization",t.Pencil="pencil",t.Person="person",t.PlusCircle="plus-circle",t.Project="project",t.PullRequest="pullRequest",t.Reaction="reaction",t.Repo="repo",t.Search="search",t.SingleSelect="single-select",t.Sort="sort",t.Tag="tag",t.Team="team",t.Trash="trash",t.Question="question"}(a||(a={})),function(t){t.Entity="--color-prettylights-syntax-entity",t.Constant="--color-prettylights-syntax-constant",t.Keyword="--color-prettylights-syntax-keyword",t.Variable="--color-prettylights-syntax-variable",t.String="--color-prettylights-syntax-string"}(n||(n={}));let SearchItem=class SearchItem extends Event{constructor({priority:t,value:e,action:i,description:s="",icon:a,scope:n="DEFAULT",prefixText:r,prefixColor:l,isFallbackSuggestion:o}){super("search-item"),this.priority=t,this.value=e,this.prefixText=r,this.prefixColor=l,this.action=i,this.description=s,this.icon=a,this.scope=n,this.isFallbackSuggestion=o||!1}};!function(t){t.Normal="normal",t.Entity="entity",t.Constant="constant",t.FilterValue="filter-value"}(r||(r={}));let FetchDataEvent=class FetchDataEvent extends Event{constructor(t){super("fetch-data"),this.fetchPromise=t}};let QueryEvent=class QueryEvent extends Event{toString(){return this.rawQuery}constructor(t,e,i){super("query"),this.parsedQuery=t,this.rawQuery=e,this.parsedMetadata=i}};Event},90113:(t,e,i)=>{i.r(e),i.d(e,{AutocompleteText:()=>z.i,FetchDataEvent:()=>z.Z,FilterItem:()=>z.L2,Octicon:()=>z.zi,PrefixColor:()=>z.gC,QueryBuilderElement:()=>ti,QueryEvent:()=>z.UK,SearchItem:()=>z.T2,SearchScopeText:()=>z.Fi,TextElementStyle:()=>z.tj,isCustomIcon:()=>z.Ju});var s,a,n,r,l,o,u,c,h,d,p,y,m,f,v,g,b,w,$,L,I,A,E,S,C,k,T,P,x,F,W,q,M,R,O,B,D,Q=i(76006),N=i(10160),j=i(45974),z=i(3399);function _(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function V(t,e){return e.get?e.get.call(t):e.value}function U(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}function K(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function Y(t,e){var i=K(t,e,"get");return V(t,i)}function H(t,e,i){_(t,e),e.set(t,i)}function J(t,e,i){var s=K(t,e,"set");return U(t,s,i),i}function G(t,e,i){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return i}function Z(t,e){_(t,e),e.add(t)}var X=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let tt=class FeedbackEvent extends Event{constructor(t,e,i){super("query-builder-feedback",{bubbles:!0,cancelable:!0}),this.key=t,this.text=e,this.data=i,this.key=t,this.text=e,this.data=i}},te=(t,e)=>t.priority-e.priority,ti=(s=new WeakMap,a=new WeakMap,n=new WeakMap,r=new WeakMap,l=new WeakMap,o=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,y=new WeakMap,m=new WeakMap,f=new WeakMap,v=new WeakMap,g=new WeakMap,b=new WeakMap,w=new WeakMap,$=new WeakMap,L=new WeakMap,I=new WeakMap,A=new WeakMap,E=new WeakMap,S=new WeakSet,C=new WeakSet,k=new WeakSet,T=new WeakSet,P=new WeakSet,x=new WeakSet,F=new WeakSet,W=new WeakSet,q=new WeakSet,M=new WeakSet,R=new WeakSet,O=new WeakSet,B=new WeakSet,D=class QueryBuilderElement extends HTMLElement{get input(){return(0,Q.P4)(this,"input")}get styledInputContent(){return(0,Q.P4)(this,"styledInputContent")}get styledInputContainer(){return(0,Q.P4)(this,"styledInputContainer")}get styledInput(){return(0,Q.P4)(this,"styledInput")}get overlay(){return(0,Q.P4)(this,"overlay")}get sizer(){return(0,Q.P4)(this,"sizer")}get clearButton(){return(0,Q.P4)(this,"clearButton")}get resultsList(){return(0,Q.P4)(this,"resultsList")}get screenReaderFeedback(){return(0,Q.P4)(this,"screenReaderFeedback")}get query(){return this.input.value}get i18n(){return{suggestion:"suggestion",suggestions:"suggestions",clear_search:"Input cleared."}}navigate(t){let e=t?.target?.closest("a")?.getAttribute("href");e&&this.dispatchEvent(new CustomEvent("query-builder:navigate",{bubbles:!0,detail:{url:e}}))}get closed(){return this.overlay&&this.overlay.hasAttribute("hidden")}set closed(t){if(t)this.closed||(this.overlay&&(this.overlay.hidden=!0),this.input.setAttribute("aria-expanded","false"),Y(this,s)?.clearSelection());else{if(!this.closed)return;this.overlay&&(this.overlay.hidden=!1),this.input.setAttribute("aria-expanded","true")}}show(){this.closed=!1,this.overlay?.scrollIntoView?.({behavior:"smooth",block:"nearest"})}hide(){"false"===this.resultsList.getAttribute("data-persist-list")&&(this.closed=!0)}initialize(t,e){for(let i of(this.parser=t,J(this,I,!0),J(this,$,!0),e))this.attachProvider(i);J(this,$,!1),J(this,r,e.reduce((t,e)=>({...t,[e.value]:e}),{}))}detachElementDefinitionReadyForProviders(){this.removeEventListener("query-builder:ready-to-request-provider",this.elementDefinitionReadyForProviders)}connectedCallback(){Y(this,o)?.abort();let{signal:t}=J(this,o,new AbortController);t.addEventListener("abort",()=>{J(this,r,{})}),J(this,m,this.input.getAttribute("id")),this.hasAttribute("defer-request-providers")||(document.addEventListener("query-builder:ready-to-request-provider",this.elementDefinitionReadyForProviders,!0),this.readyForRequestProviders())}readyForRequestProviders(){G(this,B,tm).call(this)>0&&Y(this,L)||(J(this,s,Y(this,s)||new N.Z(this.input,this.resultsList,{tabInsertsSuggestions:!1})),this.requestProviders())}async requestProviders(){J(this,L,!0),await Promise.resolve(),J(this,$,!0),this.dispatchEvent(new Event("query-builder:request-provider",{bubbles:!0})),J(this,$,!1),J(this,v,new Map);let t=this.parseInputValue();this.styleInputText(t),this.toggleClearButtonVisibility()}parseInputValue(){return this.parsedMetadata=this.parser.parse(this.input.value,this.input.selectionStart||0),this.parser.flatten(this.parsedMetadata)}attachProvider(t){if(!Y(this,o))return;let{signal:e}=Y(this,o);if(!Y(this,$))throw Error("Can't attach providers after the query builder has been connected");Y(this,r)[t.value]||(Y(this,r)[t.value]=t,"filter"===t.type?(Y(this,l).add(t.value),t.addEventListener("filter-item",e=>{Y(this,A).call(this,Y(this,y),t),Y(this,y).get(t)?.push(e),G(this,S,ts).call(this)},{signal:e}),t.addEventListener("show",()=>{Y(this,p).add(t),G(this,S,ts).call(this)},{signal:e}),t.addEventListener("fetch-data",async t=>{let e=new Promise(t=>setTimeout(t,Y(this,b)));J(this,w,Promise.race([Promise.all([Y(this,w),t.fetchPromise]),e]));let i=Y(this,w);try{await i}catch(t){if("AbortError"!==t.name)throw J(this,w,!1),t}i===Y(this,w)&&(J(this,w,!1),G(this,S,ts).call(this),this.updateVisibility())},{signal:e})):(t.addEventListener("fetch-data",async e=>{Y(this,d).delete(t),await e.fetchPromise,Y(this,c).set(t,Y(this,h).get(t)||[]),Y(this,h).delete(t),G(this,S,ts).call(this)}),t.addEventListener("search-item",e=>{Y(this,A).call(this,Y(this,c),t),Y(this,h).has(t)?Y(this,h).get(t)?.push(e):(Y(this,d).has(t)&&(Y(this,c).set(t,[]),Y(this,d).delete(t)),Y(this,c).get(t)?.push(e),G(this,S,ts).call(this))},{signal:e})))}disconnectedCallback(){Y(this,o)?.abort()}comboboxCommit(t){let e=t.target,i=e?.getAttribute("data-type"),s=e?.getAttribute("data-value")||"",a=e?.getAttribute("data-replace-query-with")||"",n=parseInt(e?.getAttribute("data-move-caret-to")||"0")||0,r=this.parseInputValue();if("url-result"===i);else if("filter-result"===i)r.pop(),r.push({type:"filter",filter:s,value:""});else if("command-result"===i){let t=e.getAttribute("data-command-name")||"",i=JSON.parse(e.getAttribute("data-command-payload")||"{}");this.dispatchEvent(new CustomEvent(t,{detail:i}))}else if("query-result"===i){if(a)this.input.value=a,this.input.focus(),r=void 0;else{let t=this.parser.flatten(this.parser.parse(s,0));r.push(...t),r.push({type:"text",value:""})}}else"filter-item"===i&&(a?(this.input.value=a,this.input.focus(),r=void 0):this.addSelectedItemToFilter(s,r));if(this.parseQuery(r),a){let t=-1===n?this.input.value.length:n;this.input.setSelectionRange(t,t)}this.input.removeAttribute("aria-activedescendant")}addSelectedItemToFilter(t,e){let i=/\s/.test(t),s=e.pop();if(s?.type==="filter"){let a=s.value.split(",");a.pop(),a.push(i?`"${t}"`:t),e.push({type:"filter",filter:s?.filter,value:a.join(",")}),e.push({type:"text",value:""})}else s&&e.push(s)}async inputChange(){await this.parseQuery()}inputBlur(){if(Y(this,a)){J(this,a,!1);return}this.styledInput.classList.remove(Y(this,f)),this.input.removeAttribute("aria-activedescendant"),this.hide()}resultsMousedown(){J(this,a,!0)}async inputFocus(){this.styledInput.classList.add(Y(this,f)),this.readyForRequestProviders(),Y(this,s).start();let t=this.input.value;this.lastParsedQuery&&this.lastParsedQuery===this.input.value||await this.parseQuery(),this.closed&&this.input.value===t&&this.input.setSelectionRange(0,this.input.value.length),this.input.focus()}moveCaretToEndOfInput(){this.input.setSelectionRange(this.input.value.length,this.input.value.length)}hasFocus(){return this.styledInput.classList.contains(Y(this,f))}inputKeydown(t){let e=t.key;if("Escape"===e)this.hide();else if("Enter"===e){let e=this.resultsList.querySelector('[aria-selected="true"], [data-combobox-option-default="true"]');if(!e||"true"===e.getAttribute("aria-disabled"))return;let i=e.querySelector("a");if(i){let e=t.ctrlKey||t.metaKey;e?window.open(i.getAttribute("href")||"","_blank"):i.click()}}}inputSubmit(){this.hide()}clearButtonFocus(t){let e=t.relatedTarget;e&&e===this.input&&this.show()}clearButtonBlur(){this.hide()}toggleClearButtonVisibility(){this.clearButton&&(""!==this.input.value?!1!==this.clearButton.hidden&&(this.clearButton.hidden=!1):this.clearButton.hidden=!0)}updateVisibility(){this.hasFocus()&&(Y(this,y).size>0||Y(this,c).size>0||Y(this,p).size>0?this.show():Y(this,w)||this.hide())}getLeadingVisual(t,e){if(e){let t="org"===e.type?"avatar avatar-1 avatar-small":"avatar avatar-1 avatar-small circle";return j.dy`<img src="${e.url}" alt="" role="presentation" class="${t}" />`}if(t&&(0,z.Ju)(t))return(0,j.dy)([t.html]);let i=document.getElementById(`${t}-icon`);return(0,j.dy)([i?.innerHTML])}updateScreenReaderFeedback(t){let e=new tt("NEW_RESULTS",t,{});this.dispatchEvent(e),this.screenReaderFeedback.textContent=e.text}async clear(){await this.parseQuery([]),J(this,n,!0)}async parseQuery(t,e=!0){Y(this,u)?.abort();let{signal:i}=J(this,u,new AbortController);if(t){let e=t.map(t=>"filter"===t.type?`${t.filter}:${t.value}`:t.value).join(Y(this,I)?"":" "),i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.input),"value")?.set;i?i?.call(this.input,e):this.input.value=e,this.input.dispatchEvent(new Event("change",{bubbles:!0}))}else t=this.parseInputValue();if(this.lastParsedQuery=this.input.value,await new Promise(t=>requestAnimationFrame(t)),i.aborted||(this.styleInputText(t),e&&this.input.focus(),await new Promise(t=>setTimeout(t,100)),i.aborted))return;for(let t of Y(this,c).keys())Y(this,d).add(t);Y(this,y).clear(),Y(this,p).clear();let s=new z.UK(t,this.input.value,this.parsedMetadata);this.dispatchEvent(s);let a=!1;for(let t of Y(this,d).keys())Y(this,c).delete(t),Y(this,d).delete(t),a=!0;a&&G(this,S,ts).call(this),this.updateVisibility()}styleInputText(t){G(this,R,tp).call(this,this.input.value);let e=document.createDocumentFragment();for(let i of t){let t=document.createElement("span"),s=document.createElement("span");s.textContent=" ";let a=!Y(this,I);if("filter"===i.type){let{filter:e,value:n}=i,r=document.createElement("span");t.setAttribute("data-type","filter-expression"),r.setAttribute("data-type","filter"),r.textContent=e;let l=document.createElement("span");l.textContent=this.filterKey;let o=document.createElement("span");o.setAttribute("data-type","filter-value"),o.textContent=n,t.appendChild(r),t.appendChild(l),t.appendChild(o),a&&t.appendChild(s)}else a?t.textContent=`${i.value} `:t.textContent=i.value,i.style===z.tj.Constant?t.classList.add("qb-constant"):i.style===z.tj.Entity?t.classList.add("qb-entity"):i.style===z.tj.FilterValue&&t.classList.add("qb-filter-value");e.append(t),G(this,O,ty).call(this)}this.styledInputContent.replaceChildren(e)}constructor(...t){super(...t),Z(this,S),Z(this,C),Z(this,k),Z(this,T),Z(this,P),Z(this,x),Z(this,F),Z(this,W),Z(this,q),Z(this,M),Z(this,R),Z(this,O),Z(this,B),H(this,s,{writable:!0,value:void 0}),H(this,a,{writable:!0,value:!1}),H(this,n,{writable:!0,value:!1}),H(this,r,{writable:!0,value:{}}),H(this,l,{writable:!0,value:new Set}),H(this,o,{writable:!0,value:null}),H(this,u,{writable:!0,value:null}),H(this,c,{writable:!0,value:new Map}),H(this,h,{writable:!0,value:new Map}),H(this,d,{writable:!0,value:new Set}),H(this,p,{writable:!0,value:new Set}),H(this,y,{writable:!0,value:new Map}),H(this,m,{writable:!0,value:void 0}),H(this,f,{writable:!0,value:"QueryBuilder-focus"}),H(this,v,{writable:!0,value:new Map}),H(this,g,{writable:!0,value:150}),H(this,b,{writable:!0,value:3e3}),H(this,w,{writable:!0,value:!1}),H(this,$,{writable:!0,value:!1}),H(this,L,{writable:!0,value:!1}),this.parser={parse:G(this,M,td).bind(this),flatten:t=>t},this.parsedMetadata=void 0,this.renderSingularItemNames=!1,H(this,I,{writable:!0,value:!1}),this.lastParsedQuery=void 0,this.elementDefinitionReadyForProviders=t=>{t.detail.id===Y(this,m)&&(this.readyForRequestProviders(),t.stopImmediatePropagation())},H(this,A,{writable:!0,value:(t,e)=>{t.has(e)||t.set(e,[])}}),H(this,E,{writable:!0,value:!1})}});function ts(){Y(this,E)||(J(this,E,!0),this.toggleClearButtonVisibility(),J(this,E,!1),G(this,T,tr).call(this))}function ta(){if(0!==Y(this,p).size)return j.dy`<li role="presentation" class="ActionList-sectionDivider">
      <h3 role="presentation" class="ActionList-sectionDivider-title p-2 text-left" aria-hidden="true">
        Suggested filters
      </h3>
      <ul role="presentation">
        ${[...Y(this,p)].sort(te).map(t=>G(this,W,tc).call(this,t))}
      </ul>
    </li>`}function tn(t,e=!1){let i=[],s=this.parseInputValue().at(-1);if("filter"===t.type)t.manuallyDetermineFilterEligibility?i=Y(this,y).get(t)?.sort(te).map(t=>G(this,q,th).call(this,t))||[]:s?.type==="filter"&&(i=Y(this,y).get(t)?.filter(t=>t.filter===s.filter).sort(te).map(t=>G(this,q,th).call(this,t))||[]);else{let s=Y(this,c).get(t)||[];i=[...s].filter(t=>t.isFallbackSuggestion===e).sort(te).map(t=>G(this,x,to).call(this,t))}if(i.length)return""===t.name?j.dy`<li role="presentation" class="ActionList-sectionDivider">
        <ul role="presentation">
          ${i}
        </ul>
      </li>`:j.dy`<li role="presentation" class="ActionList-sectionDivider">
        <h3
          role="presentation"
          class="ActionList-sectionDivider-title QueryBuilder-sectionTitle p-2 text-left"
          aria-hidden="true"
        >
          ${t.name}
        </h3>
        <ul role="presentation">
          ${i}
        </ul>
      </li>`}function tr(){let t,e=Object.values(Y(this,r)).sort((t,e)=>t.priority-e.priority).map(t=>G(this,k,tn).call(this,t)).filter(t=>void 0!==t);Y(this,w)||0!==e.length||(e=Object.values(Y(this,r)).sort((t,e)=>t.priority-e.priority).map(t=>G(this,k,tn).call(this,t,!0)).filter(t=>void 0!==t));let i=G(this,C,ta).call(this);i&&e.push(i),0===e.length?Y(this,w)||(this.resultsList.textContent="",(0,j.sY)(j.dy``,this.resultsList)):(0,j.sY)(j.dy`${e.map((t,i)=>i===e.length-1?t:j.dy`${t}
                <li aria-hidden="true" class="ActionList-sectionDivider"></li>`)}`,this.resultsList);let s=this.resultsList.querySelectorAll('[role="option"]').length,a=1===s?this.i18n.suggestion:this.i18n.suggestions;t=`${s} ${a}.`,Y(this,n)&&(t=`${this.i18n.clear_search} ${t}`,J(this,n,!1)),this.screenReaderFeedback.textContent===t&&(t+="\xa0"),setTimeout(()=>this.updateScreenReaderFeedback(t),Y(this,g))}function tl(t){if(t)return t.replace(/\s/g,"-").toLowerCase()}function to({value:t,prefixText:e,prefixColor:i,target:s,action:a,description:n,icon:r,scope:l}){if("url"in a){let o="GENERAL"===l?`${z.Fi[l]}`:`jump to this ${s.singularItemName}`,u=n?`, ${n}`:"",c=`${e?`${e} `:""}${t}${u}, ${o}`,h=null;return e&&(h=j.dy`
          <span>
            <div class="d-inline-flex position-relative">
              <div
                class="position-absolute rounded-1 flex-items-stretch height-full width-full"
                style="opacity: 0.1; background-color: var(${i})"
              ></div>
              <div class="px-1" style="color: var(${i})">${e}</div>
            </div>
            ${G(this,F,tu).call(this,t)}
          </span>
        `),j.dy`<li
        role="option"
        class="ActionListItem"
        data-type="url-result"
        id="${Y(this,m)||"search-item"}-result-${G(this,P,tl).call(this,t)}"
        data-value="${t}"
        aria-label="${c}"
      >
        <a
          href="${a.url}"
          data-action="click:query-builder#navigate"
          tabindex="-1"
          class="QueryBuilder-ListItem-link ActionListContent ActionListContent--visual16 QueryBuilder-ListItem"
        >
          ${r?j.dy`<span
                id="${Y(this,m)||"search-item"}-result-${G(this,P,tl).call(this,t)}--leading"
                class="ActionListItem-visual ActionListItem-visual--leading"
              >
                ${this.getLeadingVisual(r)}
              </span>`:null}
          <span class="ActionListItem-descriptionWrap">
            <span class="ActionListItem-label text-normal"> ${h||G(this,F,tu).call(this,t)} </span>
            ${n?j.dy`<span class="ActionListItem-description">${n}</span>`:null}
          </span>

          <span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
            >${z.Fi[l]}</span
          >
        </a>
      </li>`}if("commandName"in a){let e=z.Fi[l]||z.Fi.COMMAND,i=n?`, ${n}`:"",s=`${t}${i}, ${e}`;return j.dy`<li
        role="option"
        class="ActionListItem"
        data-type="command-result"
        id="${Y(this,m)||"search-item"}-result-${G(this,P,tl).call(this,t)}"
        data-value="${t}"
        data-command-name="${a.commandName}"
        data-command-payload="${JSON.stringify(a.data)}"
        aria-label="${s}"
      >
        <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
          ${r?j.dy`<span
                id="${Y(this,m)||"search-item"}-result-${G(this,P,tl).call(this,t)}--leading"
                class="ActionListItem-visual ActionListItem-visual--leading"
              >
                ${this.getLeadingVisual(r)}
              </span>`:null}
          <span class="ActionListItem-descriptionWrap">
            <span class="ActionListItem-label text-normal"> ${G(this,F,tu).call(this,t)} </span>
            ${n?j.dy`<span class="ActionListItem-description">${n}</span>`:null}
          </span>

          <span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
            >${e}</span
          >
        </span>
      </li>`}{let e="",i=0;"replaceQueryWith"in a&&(e=a.replaceQueryWith,i=a.moveCaretTo);let s="query"in a?z.Fi[l]:z.i;return j.dy` <li
        role="option"
        class="ActionListItem"
        data-type="query-result"
        data-value="${t}"
        aria-label="${t}${n?`, ${n}`:""}"
        data-replace-query-with="${e}"
        data-move-caret-to="${i}"
        id="${Y(this,m)||"search-item"}-result-${G(this,P,tl).call(this,t)}"
      >
        <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
          ${r?j.dy`<span
                id="${Y(this,m)||"search-item"}-result-${G(this,P,tl).call(this,t)}--leading"
                class="ActionListItem-visual ActionListItem-visual--leading"
              >
                ${this.getLeadingVisual(r)}
              </span>`:null}
          <span class="ActionListItem-descriptionWrap">
            <span class="ActionListItem-label text-normal">${G(this,F,tu).call(this,t)}</span>
            ${n?j.dy`<span class="ActionListItem-description">${n}</span>`:null}
          </span>

          ${Y(this,c).size>0?j.dy`<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
                >${s}</span
              >`:j.dy``}
        </span>
      </li>`}}function tu(t){let e=this.parser.flatten(this.parser.parse(t,0)),i=!Y(this,I),s=[];for(let t of e)if("filter"===t.type)s.push(j.dy`<span>${t.filter}:</span
            ><span data-type="filter-value">${t.value}${i?" ":""}</span>`);else{let e="";t.style===z.tj.Constant?e="qb-constant":t.style===z.tj.Entity?e="qb-entity":t.style===z.tj.FilterValue&&(e="qb-filter-value"),s.push(j.dy`<span class="${e}">${t.value}${i?" ":""}</span>`)}return s}function tc({singularItemName:t,icon:e,description:i,value:s}){let a=i?`, ${i}`:"",n=`${this.renderSingularItemNames?t:s}${a}`;return j.dy` <li
      role="option"
      class="ActionListItem"
      data-type="filter-result"
      data-value="${s}"
      id="${Y(this,m)||"filter"}-result-${G(this,P,tl).call(this,s)}"
      aria-label="${n}, filter"
    >
      <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
        ${e?j.dy`<span
              id="${Y(this,m)||"filter"}-result-${G(this,P,tl).call(this,s)}--leading"
              class="ActionListItem-visual ActionListItem-visual--leading"
            >
              ${this.getLeadingVisual(e)}
            </span>`:null}
        <span class="ActionListItem-descriptionWrap">
          <span class="ActionListItem-label text-normal">
            ${this.renderSingularItemNames?t:`${s}:`}
          </span>
          ${i?j.dy`<span class="ActionListItem-description">${i}</span>`:null}
        </span>

        ${Y(this,c).size>0?j.dy`<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
              >${z.i}</span
            >`:j.dy``}
      </span>
    </li>`}function th({name:t,value:e,target:i,icon:s,avatar:a,description:n,inlineDescription:r,action:l}){let o=t&&t.length>0?t:e,u=n?`, ${n}`:"",h=i.singularItemName?`${o}${u}, autocomplete this ${i.singularItemName}`:`${o}${u}, ${i.name}`,d="",p=0;return l&&"replaceQueryWith"in l&&(d=l.replaceQueryWith,p=l.moveCaretTo),j.dy` <li
      role="option"
      class="ActionListItem"
      data-type="filter-item"
      data-replace-query-with="${d}"
      data-move-caret-to="${p}"
      data-value="${e}"
      id="${Y(this,m)||"filter-item"}-result-${G(this,P,tl).call(this,e)}"
      aria-label="${h}"
    >
      <span class="ActionListContent ActionListContent--visual16 QueryBuilder-ListItem">
        ${s?j.dy`<span
              id="${Y(this,m)||"filter-item"}-result-${G(this,P,tl).call(this,e)}--leading"
              class="ActionListItem-visual ActionListItem-visual--leading"
            >
              ${this.getLeadingVisual(s,a)}
            </span>`:null}
        <span class="${r?"ActionListItem-descriptionWrap-inline":"ActionListItem-descriptionWrap"}">
          <span class="ActionListItem-label text-normal">${o}</span>
          ${n?j.dy`<span class="ActionListItem-description">${n}</span>`:null}
        </span>

        ${Y(this,c).size>0?j.dy`<span aria-hidden="true" class="ActionListItem-description QueryBuilder-ListItem-trailing"
              >${z.i}</span
            >`:j.dy``}
      </span>
    </li>`}function td(t){let e=Y(this,v).get(t);if(e)return e.slice();{let e=[],i=t.split(/\s(?=(?:[^"]*"[^"]*")*[^"]*$)/g);for(let t of i){let i=t.indexOf(this.filterKey);if(i>0){let s=t.substring(0,i),a=t.substring(i+1);e.push(Y(this,l).has(s)?{type:"filter",filter:s,value:a}:{type:"text",value:t})}else e.push({type:"text",value:t})}return Y(this,v).set(t,[...e]),e}}function tp(t){if(this.sizer.textContent="",null!==this.input.selectionStart&&this.input.selectionStart===this.input.selectionEnd){let e=this.input.selectionStart,i=document.createElement("span");this.sizer.append(t.substring(0,e),i,t.substring(e))}else this.sizer.textContent=t}function ty(){requestAnimationFrame(()=>{let t=this.sizer.querySelector("span");t&&(t.offsetLeft<this.styledInputContainer.scrollLeft?this.styledInputContainer.scrollLeft=t.offsetLeft-300:t.offsetLeft>this.styledInputContainer.scrollLeft+this.styledInputContainer.clientWidth&&(this.styledInputContainer.scrollLeft=t.offsetLeft-this.styledInputContainer.clientWidth+300));let e=this.sizer.scrollWidth,i=Math.max(e+2,""===this.input.value?2:0,300);this.input.style.width=`${i}px`})}function tm(){return Object.keys(Y(this,r)).length}X([Q.Lj],ti.prototype,"filterKey",void 0),ti=X([Q.Ih],ti)},7180:(t,e,i)=>{i.d(e,{O:()=>c,d:()=>TrustedTypesPolicyError});var s=i(46426),a=i(71643),n=i(24601),r=i(27856),l=i.n(r),o=i(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function u({policy:t,policyName:e,fallback:i,fallbackOnError:r=!1,sanitize:u,silenceErrorReporting:c=!1}){try{if((0,s.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return i;(0,a.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:e},!1,.1);let n=t();return u&&new Promise(t=>{let i=window.performance.now(),s=l().sanitize(n,{FORBID_ATTR:[]}),a=window.performance.now();if(n.length!==s.length){let r=Error("Trusted Types policy output sanitized"),l=r.stack?.slice(0,1e3),u=n.slice(0,250);(0,o.q)("trusted_types_policy.sanitize",{policyName:e,output:u,stack:l,outputLength:n.length,sanitizedLength:s.length,executionTime:a-i}),t(n)}}),n}catch(t){if(t instanceof TrustedTypesPolicyError||(c||(0,n.eK)(t),(0,a.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:e}),!r))throw t}return i}let c={apply:u}},22490:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(86283);function a(t){return()=>{throw TypeError(`The policy does not implement the function ${t}`)}}let n={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},r={createPolicy:(t,e)=>({name:t,...n,...e})},l=globalThis.trustedTypes??r,o=!1;s.n4?.addEventListener("securitypolicyviolation",t=>{"require-trusted-types-for"!==t.violatedDirective||o||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),o=!0)})}}]);
//# sourceMappingURL=ui_packages_query-builder-element_query-builder-element_ts-22cc3bee8451.js.map