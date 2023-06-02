(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),o=n.n(r),i=n(645),c=n.n(i),a=n(667),d=n.n(a),l=new URL(n(412),n.b),s=c()(o()),u=d()(l);s.push([e.id,"body {\n    height: 100vh;\n    margin: 0px;\n    background-image: url("+u+");\n    background-size: contain;\n}\n\nh1 {\n    font-size: 4vh;\n    margin: 1vh;\n    margin-bottom: 0;\n}\n\n#header p {\n    font-size: 1.5rem;\n}\n\n#content {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n}\n\n#header {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    flex-direction: column;\n    border-bottom: 1px solid black;\n    background-color: rgba(0, 0, 0, 0.750);\n    color: white;\n}\n\n#tabholder {\n    display: flex;\n    justify-content: center;\n\n}\n\n#bodyDiv {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n#mainElementHolder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 70vh;\n    background-color: rgba(0, 0, 0, 0.750);\n    color: white;\n}\n\n#mainElementHolder img {\n    object-fit: cover;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 50%;\n}\n\n#menuDiv {\n    width: 70vh;\n    height: 70vh;\n    background-color: blue;\n}\n\n#contactsDiv {\n    width: 70vh;\n    height: 70vh;\n    background-color: rgb(255, 0, 0);\n}\n\n#tabholder div {\n    padding: 2vh;\n    font-size: 1.5rem;\n    width: 7vh;\n    text-align: center;\n}\n\n.selectedTab {\n    border-top: ;\n    box-shadow: inset 0 -2px white\n}",""]);const m=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],l=r.base?d[0]+r.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var m=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var d=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},412:(e,t,n)=>{e.exports=n.p+"278c9c1ed77bdb3aeb68.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),c=n.n(i),a=n(565),d=n.n(a),l=n(216),s=n.n(l),u=n(589),m=n.n(u),p=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=n.p+"4cffa9535d985cd76152.jpg";function v(){for(document.getElementById("menu").removeAttribute("class","selectedTab"),document.getElementById("contacts").removeAttribute("class","selectedTab");bodyDiv.hasChildNodes();)bodyDiv.removeChild(bodyDiv.firstChild);document.getElementById("home").setAttribute("class","selectedTab");let e=document.createElement("div");e.setAttribute("id","mainElementHolder");let t=document.createElement("h2");t.textContent="Enjoy a taste of Abruzzo";let n=new Image;n.src=f;let r=document.createElement("h3");r.textContent="Come visit us for a bite of italian wilderness",e.appendChild(t),e.appendChild(n),e.appendChild(r),bodyDiv.appendChild(e)}!function(){let e=document.createElement("div");e.setAttribute("id","header");let t=document.createElement("h1");t.textContent="Luigi's Arrosticini";let n=document.createElement("p");n.textContent="The home of the original abbruzzese arrosticini";let r=document.createElement("div");r.setAttribute("id","tabholder");let o=document.createElement("div");o.textContent="Home",o.setAttribute("id","home");let i=document.createElement("div");i.textContent="Menu",i.setAttribute("id","menu");let c=document.createElement("div");c.textContent="Contacts",c.setAttribute("id","contacts");let a=document.createElement("div");a.setAttribute("id","bodyDiv"),e.appendChild(t),e.appendChild(n),e.appendChild(r),r.appendChild(o),r.appendChild(i),r.appendChild(c),document.getElementById("content").appendChild(e),document.getElementById("content").appendChild(a)}(),document.getElementById("home").addEventListener("click",v),document.getElementById("menu").addEventListener("click",(function(){for(document.getElementById("home").removeAttribute("class","selectedTab"),document.getElementById("contacts").removeAttribute("class","selectedTab");bodyDiv.hasChildNodes();)bodyDiv.removeChild(bodyDiv.firstChild);document.getElementById("menu").setAttribute("class","selectedTab");let e=document.createElement("div");e.setAttribute("id","menuDiv"),bodyDiv.appendChild(e)})),document.getElementById("contacts").addEventListener("click",(function(){for(document.getElementById("home").removeAttribute("class","selectedTab"),document.getElementById("menu").removeAttribute("class","selectedTab");bodyDiv.hasChildNodes();)bodyDiv.removeChild(bodyDiv.firstChild);document.getElementById("contacts").setAttribute("class","selectedTab");let e=document.createElement("div");e.setAttribute("id","contactsDiv"),bodyDiv.appendChild(e)})),v()})()})();