(()=>{var e,t,r,n={143:(e,t,r)=>{var n={"./arrow-down-32-blue.png":524,"./arrow-down-32.png":21,"./arrow-down-64-blue.png":535,"./arrow-down-64.png":308,"./check-mark-24.png":762,"./check-mark-32.png":899,"./check-mark-64.png":230,"./check-rodo-24.png":557,"./email-64.png":708,"./facebook-64.png":32,"./graduation-64.png":416,"./instagram-64.png":88,"./mail-64.png":7,"./next-32.png":388,"./next-64.png":569,"./next-full-32.png":381,"./next-full-64.png":57,"./phone-64.png":240,"./prev-32.png":904,"./prev-64.png":925,"./prev-full-32.png":112,"./prev-full-64.png":693,"./student-boy-64.png":480,"./student-girl-64.png":872};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=143},456:(e,t,r)=>{var n={"./Englify-logo-browm.png":739,"./big-ben-2393098_1920_blur.jpg":897,"./formularz.jpg":183,"./kwestionariusz.jpg":121,"./pierwsze-zajecia.png":114,"./rozmowa.png":792,"./umowa.png":968,"./zajecia-grupowe.png":108,"./zajecia-indywidualne.jpg":733,"./zajecia-w-parach.jpg":52};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=456},420:(e,t,r)=>{"use strict";var n=r(540),a=r(338);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:t+""}var c=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mainNavElements={nav:t,navList:document.querySelector(".nav__list"),navItems:document.querySelectorAll(".nav__item"),navLogo:document.querySelector(".nav__item--logo"),navLinks:document.querySelectorAll(".nav__link"),hamburgerBtn:t.querySelector(".nav__hamburger-btn"),hamburgerBtnItems:t.querySelectorAll(".hamburger-btn__item")}},t=[{key:"toggleNav",value:function(){this.mainNavElements.nav&&(this.mainNavElements.nav.classList.contains("nav--nav-expanded")?this.closeNav():this.openNav())}},{key:"openNav",value:function(){var e=this;requestAnimationFrame((function(){e.mainNavElements.nav.classList.add("nav--nav-expanded"),e.mainNavElements.navList.classList.add("nav__list--nav-expanded"),e.mainNavElements.navItems.forEach((function(e){return e.classList.add("nav__item--nav-expanded")})),e.mainNavElements.navLinks.forEach((function(e){return e.classList.add("nav__link--nav-expanded")})),e.mainNavElements.hamburgerBtnItems.forEach((function(e){return e.classList.add("hamburger-btn__item--nav-expanded")}))}))}},{key:"closeNav",value:function(){var e=this;requestAnimationFrame((function(){e.mainNavElements.nav.classList.remove("nav--nav-expanded"),e.mainNavElements.navList.classList.remove("nav__list--nav-expanded"),e.mainNavElements.navItems.forEach((function(e){return e.classList.remove("nav__item--nav-expanded")})),e.mainNavElements.navLinks.forEach((function(e){return e.classList.remove("nav__link--nav-expanded")})),e.mainNavElements.hamburgerBtnItems.forEach((function(e){return e.classList.remove("hamburger-btn__item--nav-expanded")}))}))}},{key:"isNavLinkClicked",value:function(e){(e.target.matches(".nav__link--nav-expanded")||e.target.matches(".nav__logo"))&&this.closeNav()}},{key:"init",value:function(){var e=this;document.addEventListener("DOMContentLoaded",(function(){e.mainNavElements.hamburgerBtn.addEventListener("click",(function(){return e.toggleNav()})),e.mainNavElements.navList.addEventListener("click",(function(t){return e.isNavLinkClicked(t)}))}))}}],t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==u(t)?t:t+""}var m=function(){return e=function e(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4?arguments[4]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.swiperWrap=t,this.swiperCards=p(r),this.swiperButtonsWrap=n;var o=Math.floor(i);this.cardWidth=o+a,this.initialCardOffset=0},t=[{key:"calcMaxOffset",value:function(){return(this.swiperCards.length-1)*this.cardWidth*-1}},{key:"detectClickedBtn",value:function(e){var t=e.target.closest("[data-direction]");if(t){var r=t.dataset.direction;if(("right"===r||"left"===r)&&this.swiperCards.length>1){var n="right"===r?-1:1,a=this.initialCardOffset+this.cardWidth*n,i=this.calcMaxOffset();a<=0&&a>=i&&(this.initialCardOffset=a,this.swipeCards())}}}},{key:"swipeCards",value:function(){var e=this;this.swiperCards.forEach((function(t){t.style.transform="translateX(".concat(e.initialCardOffset,"px)")}))}},{key:"init",value:function(){var e=this;this.swiperButtonsWrap&&this.swiperButtonsWrap.addEventListener("click",(function(t){return e.detectClickedBtn(t)}))}}],t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t={};return e.keys().map((function(r){t[r.replace("./","")]=e(r)})),t}var w=h(r(456)),x=h(r(143)),O=b(b({},w),x);document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("img").forEach((function(e){var t=e.getAttribute("data-src");O[t]&&(e.src=O[t])}))})),new c(document.querySelector(".nav")).init(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".swiper--offert"),t=e.querySelectorAll(".swiper__card"),r=document.querySelector('[data-info="buttons-offer"]'),n=document.querySelector(".swiper__card").offsetWidth;new m(e,t,r,20,n).init();var a=document.querySelector(".swiper--testimonial"),i=a.querySelectorAll(".swiper__card"),o=document.querySelector('[data-info="buttons-testimonial"]');new m(a,i,o,20,n).init()}));var k=(0,n.lazy)((function(){return Promise.all([r.e(83),r.e(473)]).then(r.bind(r,473))}));document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root");e?(0,a.H)(e).render(n.createElement(n.StrictMode,null,n.createElement(k,null))):console.error("Root element not found")}))},524:(e,t,r)=>{"use strict";e.exports=r.p+"images/21e4cc8438c5f47c249f.png"},21:(e,t,r)=>{"use strict";e.exports=r.p+"images/b3fb5956c3d0d08a72a1.png"},535:(e,t,r)=>{"use strict";e.exports=r.p+"images/9d426176961b80feca57.png"},308:(e,t,r)=>{"use strict";e.exports=r.p+"images/e6670c5d5f7eb72fc6ac.png"},762:(e,t,r)=>{"use strict";e.exports=r.p+"images/37ae0d106b0607361934.png"},899:(e,t,r)=>{"use strict";e.exports=r.p+"images/f6e8fc6864422c353fc8.png"},230:(e,t,r)=>{"use strict";e.exports=r.p+"images/74938b98597bdff931cf.png"},557:(e,t,r)=>{"use strict";e.exports=r.p+"images/1b4ed5737c20d57210ab.png"},708:(e,t,r)=>{"use strict";e.exports=r.p+"images/dd5aa88d5e2c4baec452.png"},32:(e,t,r)=>{"use strict";e.exports=r.p+"images/96662f5b5fd47fe6af25.png"},416:(e,t,r)=>{"use strict";e.exports=r.p+"images/97d7c3a6b7484ee17b89.png"},88:(e,t,r)=>{"use strict";e.exports=r.p+"images/e97fbe442bd522a93ba9.png"},7:(e,t,r)=>{"use strict";e.exports=r.p+"images/7e128878111ea2b2d4ea.png"},388:(e,t,r)=>{"use strict";e.exports=r.p+"images/349b53f94aa529e948c8.png"},569:(e,t,r)=>{"use strict";e.exports=r.p+"images/48e8e010ab7c66dd73e8.png"},381:(e,t,r)=>{"use strict";e.exports=r.p+"images/88698311b23f0bc9f2b8.png"},57:(e,t,r)=>{"use strict";e.exports=r.p+"images/0b6836336b5ffe586a20.png"},240:(e,t,r)=>{"use strict";e.exports=r.p+"images/e60ca95a487467d0a294.png"},904:(e,t,r)=>{"use strict";e.exports=r.p+"images/7cc26cc1e40669296cf5.png"},925:(e,t,r)=>{"use strict";e.exports=r.p+"images/a137bde9c9fee7b7140c.png"},112:(e,t,r)=>{"use strict";e.exports=r.p+"images/af5c807a14149e2b4c74.png"},693:(e,t,r)=>{"use strict";e.exports=r.p+"images/a153e33cd1a0c0801ef2.png"},480:(e,t,r)=>{"use strict";e.exports=r.p+"images/f05000308d58322d4867.png"},872:(e,t,r)=>{"use strict";e.exports=r.p+"images/b6a94114a7f62aa2c09d.png"},739:(e,t,r)=>{"use strict";e.exports=r.p+"images/39faab825e1611ebeb3f.png"},897:(e,t,r)=>{"use strict";e.exports=r.p+"images/c39c72437e8df9432723.jpg"},183:(e,t,r)=>{"use strict";e.exports=r.p+"images/d377c9329934b5b23724.jpg"},121:(e,t,r)=>{"use strict";e.exports=r.p+"images/6724d280f2f5fa5bc1c9.jpg"},114:(e,t,r)=>{"use strict";e.exports=r.p+"images/394d66627f29fe229f47.png"},792:(e,t,r)=>{"use strict";e.exports=r.p+"images/191a45f37a2f2e75149e.png"},968:(e,t,r)=>{"use strict";e.exports=r.p+"images/43f3c6eb0d87cc445b09.png"},108:(e,t,r)=>{"use strict";e.exports=r.p+"images/4eb4861bd41c2a341b8e.png"},733:(e,t,r)=>{"use strict";e.exports=r.p+"images/8d336f12ea0ed153b5c4.jpg"},52:(e,t,r)=>{"use strict";e.exports=r.p+"images/a3ade42e2262c86d8c87.jpg"}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(t,r,n,a)=>{if(!r){var o=1/0;for(p=0;p<e.length;p++){for(var[r,n,a]=e[p],s=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(p--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[r,n,a]},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"js/"+e+".bundle.js",i.miniCssF=e=>{},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="englify:",i.l=(e,n,a,o)=>{if(t[e])t[e].push(n);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var l=u[p];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+a){s=l;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+a),s.src=e),t[e]=[n];var f=(r,n)=>{s.onerror=s.onload=null,clearTimeout(d);var a=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{var e={792:0,620:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(620!=t){var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+t,t)}else e[t]=0},i.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,s,c]=r,u=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)var p=c(i)}for(t&&t(r);u<o.length;u++)a=o[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(p)},r=self.webpackChunkenglify=self.webpackChunkenglify||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=i.O(void 0,[338,620],(()=>i(420)));o=i.O(o)})();