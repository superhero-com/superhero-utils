!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.superheroUtils=r():t.superheroUtils=r()}(self,(function(){return(()=>{var t={757:(t,r,e)=>{t.exports=e(666)},666:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return z()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?d:p,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function g(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(E([])));x&&x!==e&&n.call(x,i)&&(w=x);var M=m.prototype=v.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function N(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:z}}function z(){return{value:r,done:!0}}return g.prototype=M.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(M),t},t.awrap=function(t){return{__await:t}},j(N.prototype),N.prototype[a]=function(){return this},t.AsyncIterator=N,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new N(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(M),u(M,c,"Generator"),M[i]=function(){return this},M.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function t(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function r(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return e}}(t,r)||function(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}e.r(n),e.d(n,{Button:()=>L,createButton:()=>g,createButtonByDiv:()=>v,ensurePaid:()=>N});var u=e(757),s=e.n(u);const l="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjkgMjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZmF2aWNvbjwvdGl0bGU+CiAgICA8ZyBpZD0iUGFnZS01IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBpZD0iZmF2aWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyLjAwMDAwMCwgMS4wMDAwMDApIiBmaWxsPSIjMTE2MUZFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzExNjFGRSIgc3Ryb2tlLXdpZHRoPSIwLjMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzkuNTU0NzAzMSw0LjcwNzM0NTYyZS0xNCBMNTIuOTcxNzkzLDAuMDA0NDUxMDYxNyBMNjAuNTI2NTE5MSw3LjA2NjMzNTgxIEw1NS43MzM2Mjc0LDExLjc2MTM5MjYgTDU1LjY2Mzg0NzYsMTEuODgwNTI1NiBMNTUuNjEyODI0NSwxMS44Nzk5NDQ0IEw0Ni4zMDU3NDE0LDIxIEwzMiw3LjA2MTIzMDI0IEwzOS41NTQ3MDMxLDQuNzA3MzQ1NjJlLTE0IFogTTQwLjQxMTAzNzYsMi4xNjg2Mzk3MyBMMzUuMTQwNTkxNSw3LjA5NDgyMDU2IEw0Ni4zMDA0NzY1LDE3Ljk2ODQzMTcgTDUzLjI5MjgxMDEsMTEuMTE2ODYwOCBMNDQuNTEyNDcxLDIuMTY5OTQ4NzkgTDQwLjQxMTAzNzYsMi4xNjg2Mzk3MyBaIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K";function f(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function p(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){t(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}var h,d=function(t){var r=t.url,e=c(t,["url"]),n=new URL("https://wallet.superhero.com/tip");return n.searchParams.set("url",r),n.searchParams.set("x-success",r),n.searchParams.set("x-cancel",r),Object.entries(e).filter((function(t){var r=a(t,2)[1];return![void 0,null].includes(r)})).forEach((function(t){var r=a(t,2),e=r[0],o=r[1];return n.searchParams.set(e,o)})),n},y=function(){var t=o(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=6;break}return t.next=3,fetch("https://raendom-backend.z52da5wt.xyz/cache/stats");case 3:return t.next=5,t.sent.json();case 5:h=t.sent.by_url;case 6:return t.abrupt("return",(null===(e=h.find((function(t){return t.url===r})))||void 0===e?void 0:e.total_amount_ae)||0);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(t,r){var e=r.size,n=void 0===e?"icon":e,i=r.url,a=void 0===i?window.location.href:i,u=r.account,f=c(r,["size","url","account"]),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return'\n    <a\n      href="'.concat(d(p({url:a},f)),'"\n      ').concat(u?'data-account="'.concat(u,'"'):"",'\n    >\n      <img alt="Superhero Icon" src="').concat(l,'" />\n      ').concat(t&&"<span>".concat(t,"</span>"),"\n    </a>")},v='\n    <div class="tips-amount">\n      <span class="tips">0</span>\n      <span class="ae">AE</span>\n    </div>',g={icon:h(),small:h("Donate")+v,medium:h("Donate Now")+v,large:v+h("Donate Now")};if(!g[n])throw new Error("Unsupported size");return t.innerHTML=g[n],t.className="superhero-utils-button ".concat(n),o(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e=t.querySelector(".tips"))){r.next=5;break}return r.next=4,y(a);case 4:e.innerHTML=r.sent;case 5:case"end":return r.stop()}}),r)})))(),t};const g=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e="string"==typeof t?document.querySelectorAll(t):t,n=function(t){var e=v(document.createElement("div"),r);return t.replaceWith(e),e};return NodeList.prototype.isPrototypeOf(e)?Array.from(e).map(n):n(e)};var m="superhero-paywall-paid-urls",w="superhero-paywall-tip-result",b="success",x=function(t){var r=new URL(t);return r.searchParams.delete(w),r.toString()},M=function(){return localStorage[m]?JSON.parse(localStorage[m]):[]},j=function(t){var r=M();r.includes(t)||(r.push(t),localStorage[m]=JSON.stringify(r))};const N=function(){var t=o(s().mark((function t(){var r,e,n,o,i,a=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.length>0&&void 0!==a[0]?a[0]:{},e=r.url,n=void 0===e?x(window.location.href):e,new URL(window.location).searchParams.get(w)===b&&j(n),!M().includes(n)){t.next=4;break}return t.abrupt("return");case 4:(o=document.createElement("div")).className="superhero-utils-paywall",o.innerHTML='\n    <div class="modal">\n      You need to leave a tip to continue\n      <br />\n      <div class="button" />\n    </div>\n  ',(i=new URL(n)).searchParams.set(w,b),g(o.querySelector(".button"),{size:"small",url:n,"x-success":i}),document.body.style.overflow="hidden",document.body.appendChild(o);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();var L={props:{size:{validator:function(t){return["icon","small","medium","large"].includes(t)},default:void 0},url:{type:String,default:void 0},account:{type:String,default:void 0}},mounted:function(){var t=this;this.$watch((function(t){return{size:t.size,url:t.url,account:t.account}}),(function(r){return v(t.$refs.button,r)}),{immediate:!0})},render:function(t){return t("div",{ref:"button"})}}})(),n})()}));