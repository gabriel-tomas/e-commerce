/*! For license information please see home.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const n=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,"mainRoute",{enumerable:!0,writable:!1,configurable:!1,value:"https://dummyjson.com"}),Object.defineProperty(this,"allProductsRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products")});var e=null;Object.defineProperty(this,"setSearchRoute",{get:function(){return e},set:function(t){"string"==typeof t&&(e="".concat(this.mainRoute,"/products/search?q=").concat(t))}});var n=null;Object.defineProperty(this,"setSingleRoute",{enumerable:!0,configurable:!1,get:function(){return n},set:function(t){n="".concat(this.mainRoute,"/products/").concat(t)}}),Object.defineProperty(this,"allCategoriesRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products/categories")});var r=null;Object.defineProperty(this,"setCategoryRoute",{get:function(){return r},set:function(t){"string"==typeof t&&(r="".concat(this.mainRoute,"/products/category/").concat(t))}})}var n,r,o;return n=t,r=[{key:"getAllProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,r=arguments.length>2?arguments[2]:void 0;t.fetchRoute("".concat(this.allProductsRoute,"?skip=").concat(e,"&limit=").concat(n),r)}},{key:"setSearchProducts",value:function(e,n){this.setSearchRoute=e,t.fetchRoute(this.setSearchRoute,n)}},{key:"getAllCategories",value:function(e){t.fetchRoute(this.allCategoriesRoute,e)}},{key:"setCategoryProducts",value:function(e,n){this.setCategoryRoute=e,t.fetchRoute(this.setCategoryRoute,n)}},{key:"getSingleProduct",value:function(e,n){this.setSingleRoute=e,t.fetchRoute(this.setSingleRoute,n)}}],o=[{key:"fetchRoute",value:function(t,e){fetch(t).then((function(t){t.json().then((function(t){e&&e(t)}))}))}}],r&&e(n.prototype,r),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}());function r(t,e){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";e=JSON.stringify(e),localStorage.setItem(t,e)}function o(t){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";var e=localStorage.getItem(t);return JSON.parse(e)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}n.getAllCategories((function(t){t.forEach((function(t){var e,n,r;e=t,n=document.querySelector(".container-categories"),r=function(){var t=document.createElement("div");t.classList.add("container-category");var n=document.createElement("button");n.classList.add("btn-category");var r=document.createElement("h2");return r.classList.add("font-size-base","font-wght-400"),r.innerText=e,n.appendChild(r),t.appendChild(n),t}(),n.appendChild(r)}))})),c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o;return e=t,(o=[{key:"createContainerChoicer",value:function(){var t,e=function(){var t=document.createElement("div");t.classList.add("container-choicer-for-you");var e=document.createElement("div");e.classList.add("container-top");var n=document.createElement("h1");n.classList.add("font-size-lg"),n.innerText="Choose your interests";var r=document.createElement("button");r.classList.add("btn-close-choicer"),r.addEventListener("click",c);var o=document.createElement("span");o.classList.add("material-symbols-outlined","font-size-xl"),o.innerText="close",r.appendChild(o),e.appendChild(n),e.appendChild(r);var i=document.createElement("button");i.innerText="Confirm",i.classList.add("btn-save-interests","primary-button","radius-total","button"),i.addEventListener("click",a);var u=document.createElement("div");u.classList.add("container-btn-save"),u.appendChild(i);var l=document.createElement("div");return l.classList.add("container-options"),t.appendChild(e),t.appendChild(l),t.appendChild(u),{divContainerChoicer:t,containerOptions:l}}(),o=e.divContainerChoicer,i=e.containerOptions;function a(){var t=document.querySelectorAll(".input-choicer-category"),e=[];t.forEach((function(t){t.checked&&e.push(t.parentElement.querySelector(".category-name").innerText)})),r("interestedItems",e),c()}function c(){document.querySelector(".container-choicer-for-you").remove()}n.getAllCategories((function(t){t.forEach((function(t){var e=function(t){var e=document.createElement("label"),n=document.createElement("span");n.classList.add("category-name","font-size-base","font-wght-400"),n.innerText=t;var r=document.createElement("input");return r.setAttribute("type","checkbox"),r.classList.add("input-choicer-category"),e.appendChild(n),e.appendChild(r),e}(t);i.appendChild(e)}))})),t=o,document.body.appendChild(t)}}])&&a(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()),o("interestedItems")||c.createContainerChoicer();var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.thumbnail=e.thumbnail,this.title=e.title,this.price=e.price,this.discountPercentage=e.discountPercentage,this.id=e.id}var e,n,i;return e=t,i=[{key:"addCartItemLclStrg",value:function(){var t;null!==(t=o("cart-items"))?r("cart-items","".concat(t,", ").concat(this.id)):r("cart-items",this.id)}},{key:"deleteCartItemLclStrg",value:function(){var t;null!==(t=o("cart-items"))&&((t=(t=t.split(",")).map((function(t){return t.trim()}))).splice(t.indexOf(String(this.id)),1),t=t.join(", "),r("cart-items","".concat(t)))}}],(n=[{key:"create",value:function(){var t=this.divParent,e=this.addToCartButton,n=this.containerAndThumb,r=this.bottomInfos;return t.appendChild(e),t.querySelector(".product-link").appendChild(n),t.querySelector(".product-link").appendChild(r),t}},{key:"divParent",get:function(){var t=document.createElement("div");t.setAttribute("product-id",this.id),t.classList.add("container-product");var e=document.createElement("a");return e.classList.add("product-link"),e.setAttribute("href","product.html?product_id=".concat(this.id)),t.append(e),t}},{key:"addToCartButton",get:function(){var e=this,n=document.createElement("button");n.classList.add("btn-add-to-cart");var r=document.createElement("span");return r.classList.add("material-symbols-outlined","font-size-md"),r.innerText="add_shopping_cart",n.appendChild(r),n.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)()})),n}},{key:"containerAndThumb",get:function(){var t=document.createElement("div");t.classList.add("container-thumbnail");var e=document.createElement("img");return e.setAttribute("src",this.thumbnail),t.appendChild(e),t}},{key:"bottomInfos",get:function(){var t=document.createElement("div");t.classList.add("container-bottom-infos");var e=document.createElement("div");e.classList.add("container-title");var n=document.createElement("span");n.classList.add("normal-font","font-size-base"),n.innerText=this.title,e.appendChild(n);var r=document.createElement("div");r.classList.add("container-price-and-others");var o=document.createElement("span");o.classList.add("span-price","normal-font","font-size-md"),o.innerText="$ ".concat(this.price);var i=document.createElement("span");return i.classList.add("discount","normal-font"),i.innerText="".concat(this.discountPercentage,"% OFF"),r.appendChild(o),r.appendChild(i),t.appendChild(e),t.appendChild(r),t}}])&&l(e.prototype,n),i&&l(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){p=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new I(r||[]);return o(a,"_invoke",{value:x(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",y="suspendedYield",m="executing",v="completed",b={};function g(){}function w(){}function S(){}var E={};l(E,a,(function(){return this}));var C=Object.getPrototypeOf,L=C&&C(C(_([])));L&&L!==n&&r.call(L,a)&&(E=L);var P=S.prototype=g.prototype=Object.create(E);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==h(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function x(e,n,r){var o=d;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===b)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?v:y,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function _(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return w.prototype=S,o(P,"constructor",{value:S,configurable:!0}),o(S,"constructor",{value:w,configurable:!0}),w.displayName=l(S,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,l(t,u,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},k(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new j(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(P),l(P,u,"Generator"),l(P,a,(function(){return this})),l(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=_,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:_(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}function y(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,"interests",{enumerable:!0,configurable:!1,get:function(){return o("interestedItems")}})}var e,r;return e=t,(r=[{key:"create",value:function(){var t=this;this.interests?this.separateInterestItems(this.interests):this.randomCategories().then((function(e){t.separateInterestItems(e)}))}},{key:"randomCategories",value:function(){return new Promise((function(t,e){var r=[];n.getAllCategories((function(e){for(var n=0;n<4;n++){var o=(i=e.length,Math.round(Math.random()*(i-0)+0));e[o]&&r.push(e[o])}var i;t(r)}))}))}},{key:"separateInterestItems",value:function(t){var e=this,r=[a(),a(),a(),a(),a()],o=0;for(var i in t)n.setCategoryProducts(t[i],(function(t){for(var n in t.products)if(n==r[o]&&(e.addProductCard(t.products[n]),5==++o))return}));function a(){return Math.round(4*Math.random()+0)}}},{key:"addProductCard",value:function(t){var e=document.querySelector(".for-you-products"),n=new s(t).create();e.appendChild(n)}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())).create(),(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,o,i;return e=t,r=[{key:"topRate",value:(o=p().mark((function t(){var e,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllProducts();case 2:e=t.sent,n=this.check45Rate(e,10),this.addToParent(".container-top-rated-products",n);case 5:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=o.apply(t,e);function a(t){y(i,n,r,a,c,"next",t)}function c(t){y(i,n,r,a,c,"throw",t)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"addToParent",value:function(t,e){"string"!=typeof t&&console.warn("parent must be a string css selector"),t=document.querySelector(t),e.forEach((function(e){t.appendChild(new s(e).create())}))}},{key:"getAllProducts",value:function(){return new Promise((function(t){n.getAllProducts(0,100,(function(e){t(e)}))}))}},{key:"check45Rate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;if("number"==typeof e){t=t.products;var n=0,r=0;t.forEach((function(t){n++,r+=t.rating}));var o=r/n,i=t.filter((function(t){if(t.rating>=o)return!0})),a=Math.round(Math.random()*(i.length-e-0))+0,c=a+e;return i.slice(a,c)}console.warn("numberProducts must be number")}}],r&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())).topRate()})();
//# sourceMappingURL=home.js.map