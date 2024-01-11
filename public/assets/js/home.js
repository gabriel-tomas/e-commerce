/*! For license information please see home.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const r=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,"mainRoute",{enumerable:!0,writable:!1,configurable:!1,value:"https://dummyjson.com"}),Object.defineProperty(this,"allProductsRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products")});var e=null;Object.defineProperty(this,"setSearchRoute",{get:function(){return e},set:function(t){"string"==typeof t&&t&&(e="".concat(this.mainRoute,"/products/search?q=").concat(t))}});var r=null;Object.defineProperty(this,"setSingleRoute",{enumerable:!0,configurable:!1,get:function(){return r},set:function(t){"string"==typeof t&&t&&(r="".concat(this.mainRoute,"/products/").concat(t))}}),Object.defineProperty(this,"allCategoriesRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products/categories")});var n=null;Object.defineProperty(this,"setCategoryRoute",{get:function(){return n},set:function(t){"string"==typeof t&&t&&(n="".concat(this.mainRoute,"/products/category/").concat(t))}});var o=null;Object.defineProperty(this,"setCommentsRoute",{get:function(){return o},set:function(t){"string"==typeof t&&t&&(o="".concat(this.mainRoute,"/comments?limit=").concat(t))}})}var r,n,o;return r=t,n=[{key:"getAllProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2?arguments[2]:void 0;t.fetchRoute("".concat(this.allProductsRoute,"?skip=").concat(e,"&limit=").concat(r),n)}},{key:"setSearchProducts",value:function(e,r){this.setSearchRoute=e,t.fetchRoute(this.setSearchRoute,r)}},{key:"getAllCategories",value:function(e){t.fetchRoute(this.allCategoriesRoute,e)}},{key:"setCategoryProducts",value:function(e,r){this.setCategoryRoute=e,t.fetchRoute(this.setCategoryRoute,r)}},{key:"getSingleProduct",value:function(e,r){this.setSingleRoute=e,t.fetchRoute(this.setSingleRoute,r)}},{key:"getComments",value:function(e,r){this.setCommentsRoute=e,t.fetchRoute(this.setCommentsRoute,r)}}],o=[{key:"fetchRoute",value:function(t,e){try{fetch(t).then((function(t){t.json().then((function(t){e&&e(t)}))}))}catch(t){throw new Error(t)}}}],n&&e(r.prototype,n),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}());function n(t,e){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";e=JSON.stringify(e),localStorage.setItem(t,e)}function o(t){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";var e=localStorage.getItem(t);return JSON.parse(e)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var c;r.getAllCategories((function(t){t.forEach((function(t){var e,r,n;e=t,r=document.querySelector(".container-categories"),n=function(){var t=document.createElement("div");t.classList.add("container-category");var r=document.createElement("a");return r.classList.add("link-category","font-size-base","font-wght-400"),r.innerText=e,r.setAttribute("href","/category?q=".concat(e)),t.appendChild(r),t}(),r.appendChild(n)}))})),c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o;return e=t,(o=[{key:"createContainerChoicer",value:function(){var t,e=function(){var t=document.createElement("div");t.classList.add("container-choicer-for-you");var e=document.createElement("div");e.classList.add("container-top");var r=document.createElement("h1");r.classList.add("font-size-lg"),r.innerText="Choose your interests";var n=document.createElement("button");n.classList.add("btn-close-choicer"),n.addEventListener("click",c);var o=document.createElement("span");o.classList.add("material-symbols-outlined","font-size-xl"),o.innerText="close",n.appendChild(o),e.appendChild(r),e.appendChild(n);var i=document.createElement("button");i.innerText="Confirm",i.classList.add("btn-save-interests","primary-button","radius-total","button"),i.addEventListener("click",a);var u=document.createElement("div");u.classList.add("container-btn-save"),u.appendChild(i);var s=document.createElement("div");return s.classList.add("container-options"),t.appendChild(e),t.appendChild(s),t.appendChild(u),{divContainerChoicer:t,containerOptions:s}}(),o=e.divContainerChoicer,i=e.containerOptions;function a(){var t=document.querySelectorAll(".input-choicer-category"),e=[];t.forEach((function(t){t.checked&&e.push(t.parentElement.querySelector(".category-name").innerText)})),n("interestedItems",e),c()}function c(){document.querySelector(".container-choicer-for-you").remove()}r.getAllCategories((function(t){t.forEach((function(t){var e=function(t){var e=document.createElement("label"),r=document.createElement("span");r.classList.add("category-name","font-size-base","font-wght-400"),r.innerText=t;var n=document.createElement("input");return n.setAttribute("type","checkbox"),n.classList.add("input-choicer-category"),e.appendChild(r),e.appendChild(n),e}(t);i.appendChild(e)}))})),t=o,document.body.appendChild(t)}}])&&a(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()),o("interestedItems")||c.createContainerChoicer();var u=document.querySelector(".message"),s=document.querySelector(".message > p"),l=document.querySelector(".message > .counter-added"),f=1;function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.thumbnail=e.thumbnail,this.title=e.title,this.price=e.price,this.discountPercentage=e.discountPercentage,this.id=e.id}var e,r,i;return e=t,i=[{key:"addCartItemLclStrg",value:function(){var t;null!==(t=o("cart-items"))?n("cart-items","".concat(t,", ").concat(this.id)):n("cart-items",this.id)}},{key:"deleteCartItemLclStrg",value:function(){var t,e,r=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];null!==(t=o("cart-items"))&&(t=(t=t.split(",")).map((function(t){return t.trim()})),i?t=t.filter((function(t,e){if(Number(t)!==r.id)return!0})):t.splice(t.indexOf(String(this.id)),1),(t=t.join(", "))?n("cart-items","".concat(t)):(e="cart-items",localStorage.removeItem(e)))}}],(r=[{key:"create",value:function(){var t=this.divParent,e=this.addToCartButton,r=this.containerAndThumb,n=this.bottomInfos;return t.appendChild(e),t.querySelector(".product-link").appendChild(r),t.querySelector(".product-link").appendChild(n),t}},{key:"divParent",get:function(){var t=document.createElement("div");t.setAttribute("product-id",this.id),t.classList.add("container-product");var e=document.createElement("a");return e.classList.add("product-link"),e.setAttribute("href","product?id=".concat(this.id)),t.append(e),t}},{key:"addToCartButton",get:function(){var e=this,r=document.createElement("button");r.classList.add("btn-add-to-cart");var n=document.createElement("span");return n.classList.add("material-symbols-outlined","font-size-md"),n.innerText="add_shopping_cart",r.appendChild(n),r.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)(),u.classList.contains("active")?(f++,l.style.display="block",l.innerText=f,u.classList.remove("active")):(l.style.display="none",setTimeout((function(){u.classList.remove("active"),f=1}),4e3)),s.innerText="Product successfully added to cart",u.classList.add("active"),u.classList.add("success")})),r}},{key:"containerAndThumb",get:function(){var t=document.createElement("div");t.classList.add("container-thumbnail");var e=document.createElement("img");return e.setAttribute("src",this.thumbnail),t.appendChild(e),t}},{key:"bottomInfos",get:function(){var t=document.createElement("div");t.classList.add("container-bottom-infos");var e=document.createElement("div");e.classList.add("container-title");var r=document.createElement("span");r.classList.add("normal-font","font-size-base"),r.innerText=this.title,e.appendChild(r);var n=document.createElement("div");n.classList.add("container-price-and-others");var o=document.createElement("span");o.classList.add("span-price","normal-font","font-size-md"),o.innerText="$ ".concat(this.price);var i=document.createElement("span");return i.classList.add("discount","normal-font"),i.innerText="".concat(this.discountPercentage,"% OFF"),n.appendChild(o),n.appendChild(i),t.appendChild(e),t.appendChild(n),t}}])&&p(e.prototype,r),i&&p(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.products=e}var e,r;return e=t,(r=[{key:"addToParent",value:function(t,e){"string"!=typeof t&&console.warn("parent must be a string css selector"),t=document.querySelector(t),e.forEach((function(e){t.appendChild(new d(e).create())}))}},{key:"removeItemsOfParent",value:function(t){(t=document.querySelector(t)).innerHTML=""}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=w(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function w(t,e){if(t){if("string"==typeof t)return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(t,e):void 0}}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function S(){S=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new R(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function w(){}var E={};s(E,a,(function(){return this}));var L=Object.getPrototypeOf,P=L&&L(L(A([])));P&&P!==r&&n.call(P,a)&&(E=P);var j=w.prototype=m.prototype=Object.create(E);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==b(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(b(e)+" is not iterable")}return g.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},x(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function L(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function P(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){L(i,n,o,a,c,"next",t)}function c(t){L(i,n,o,a,c,"throw",t)}a(void 0)}))}}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function T(){T=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new R(n||[]);return o(a,"_invoke",{value:x(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function m(){}function b(){}function g(){}var w={};s(w,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(A([])));S&&S!==r&&n.call(S,a)&&(w=S);var L=g.prototype=m.prototype=Object.create(w);function P(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==C(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(e,r,n){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(C(e)+" is not iterable")}return b.prototype=g,o(L,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},P(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function _(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}(new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(s,t);var e,n,i,a,c,u=(a=s,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(a);if(c){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}(this,t)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),t=u.call(this,[]),Object.defineProperty(O(t),"interests",{enumerable:!0,configurable:!1,get:function(){return o("interestedItems")}}),t}return e=s,n=[{key:"create",value:(i=P(S().mark((function t(){var e;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.interests){t.next=6;break}return t.next=3,this.separateInterestItems(this.interests);case 3:this.products=t.sent,t.next=12;break;case 6:return t.next=8,this.randomCategories();case 8:return e=t.sent,t.next=11,this.separateInterestItems(e);case 11:this.products=t.sent;case 12:this.addToParent(".for-you-products",this.products);case 13:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"randomCategories",value:function(){return new Promise((function(t,e){var n=[];r.getAllCategories((function(e){for(var r=0;r<4;r++){var o=(i=e.length,Math.round(Math.random()*(i-0)+0));e[o]&&n.push(e[o])}var i;t(n)}))}))}},{key:"separateInterestItems",value:function(t){var e=[c(),c(),c(),c(),c()],n=5,o=0;function i(t){var i=[];return new Promise((function(a){r.setCategoryProducts(t,(function(t){for(var r in t.products)if(Number(r)===e[o]&&(i.push(t.products[Number(r)]),++o===n))break;a(i)}))}))}function a(){return(a=P(S().mark((function t(e){var r,n,o,a,c;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],n=g(e),t.prev=2,n.s();case 4:if((o=n.n()).done){t.next=12;break}return a=o.value,t.next=8,i(a);case 8:c=t.sent,r.push.apply(r,function(t){if(Array.isArray(t))return E(t)}(u=c)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(u)||w(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());case 10:t.next=4;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),n.e(t.t0);case 17:return t.prev=17,n.f(),t.finish(17);case 20:return t.abrupt("return",r);case 21:case"end":return t.stop()}var u}),t,null,[[2,14,17,20]])})))).apply(this,arguments)}function c(){return Math.round(4*Math.random()+0)}return function(t){return a.apply(this,arguments)}(t)}}],n&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(m))).create(),(new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(s,t);var e,n,o,i,a,c,u=(a=s,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(a);if(c){var r=I(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),u.call(this)}return e=s,n=[{key:"create",value:(o=T().mark((function t(){var e;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllProducts();case 2:e=t.sent,this.products=this.check45Rate(e,10),this.addToParent(".container-top-rated-products",this.products);case 5:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=o.apply(t,e);function a(t){_(i,r,n,a,c,"next",t)}function c(t){_(i,r,n,a,c,"throw",t)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"getAllProducts",value:function(){return new Promise((function(t){r.getAllProducts(0,100,(function(e){t(e)}))}))}},{key:"check45Rate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if("number"==typeof e){t=t.products;var r=0,n=0;t.forEach((function(t){r++,n+=t.rating}));var o=n/r,i=t.filter((function(t){if(t.rating>=o)return!0})),a=Math.round(Math.random()*(i.length-e-0))+0,c=a+e;return i.slice(a,c)}console.warn("numberProducts must be number")}}],n&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(m))).create()})();
//# sourceMappingURL=home.js.map