/*! For license information please see products.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const r=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,"mainRoute",{enumerable:!0,writable:!1,configurable:!1,value:"https://dummyjson.com"}),Object.defineProperty(this,"allProductsRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products")});var e=null;Object.defineProperty(this,"setSearchRoute",{get:function(){return e},set:function(t){"string"==typeof t&&t&&(e="".concat(this.mainRoute,"/products/search?q=").concat(t))}});var r=null;Object.defineProperty(this,"setSingleRoute",{enumerable:!0,configurable:!1,get:function(){return r},set:function(t){"string"==typeof t&&t&&(r="".concat(this.mainRoute,"/products/").concat(t))}}),Object.defineProperty(this,"allCategoriesRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products/categories")});var n=null;Object.defineProperty(this,"setCategoryRoute",{get:function(){return n},set:function(t){"string"==typeof t&&t&&(n="".concat(this.mainRoute,"/products/category/").concat(t))}});var o=null;Object.defineProperty(this,"setCommentsRoute",{get:function(){return o},set:function(t){"string"==typeof t&&t&&(o="".concat(this.mainRoute,"/comments?limit=").concat(t))}})}var r,n,o;return r=t,n=[{key:"getAllProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2?arguments[2]:void 0;t.fetchRoute("".concat(this.allProductsRoute,"?skip=").concat(e,"&limit=").concat(r),n)}},{key:"setSearchProducts",value:function(e,r){this.setSearchRoute=e,t.fetchRoute(this.setSearchRoute,r)}},{key:"getAllCategories",value:function(e){t.fetchRoute(this.allCategoriesRoute,e)}},{key:"setCategoryProducts",value:function(e,r){this.setCategoryRoute=e,t.fetchRoute(this.setCategoryRoute,r)}},{key:"getSingleProduct",value:function(e,r){this.setSingleRoute=e,t.fetchRoute(this.setSingleRoute,r)}},{key:"getComments",value:function(e,r){this.setCommentsRoute=e,t.fetchRoute(this.setCommentsRoute,r)}}],o=[{key:"fetchRoute",value:function(t,e){try{fetch(t).then((function(t){t.json().then((function(t){e&&e(t)}))}))}catch(t){throw new Error(t)}}}],n&&e(r.prototype,n),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}());function n(t,e){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";e=JSON.stringify(e),localStorage.setItem(t,e)}function o(t){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";var e=localStorage.getItem(t);return JSON.parse(e)}var i=document.querySelector(".message"),u=document.querySelector(".message > p"),c=document.querySelector(".message > .counter-added"),a=1;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.thumbnail=e.thumbnail,this.title=e.title,this.price=e.price,this.discountPercentage=e.discountPercentage,this.id=e.id}var e,r,s;return e=t,s=[{key:"addCartItemLclStrg",value:function(){var t;null!==(t=o("cart-items"))?n("cart-items","".concat(t,", ").concat(this.id)):n("cart-items",String(this.id))}},{key:"deleteCartItemLclStrg",value:function(){var t,e,r=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t=o("cart-items"),null!==(t=String(t))&&(t=(t=t.split(",")).map((function(t){return t.trim()})),i?t=t.filter((function(t,e){if(Number(t)!==r.id)return!0})):t.splice(t.indexOf(String(this.id)),1),(t=t.join(", "))?n("cart-items","".concat(t)):(e="cart-items",localStorage.removeItem(e)))}}],(r=[{key:"create",value:function(){var t=this.divParent,e=this.addToCartButton,r=this.containerAndThumb,n=this.bottomInfos;return t.appendChild(e),t.querySelector(".product-link").appendChild(r),t.querySelector(".product-link").appendChild(n),t}},{key:"divParent",get:function(){var t=document.createElement("div");t.setAttribute("product-id",this.id),t.classList.add("container-product");var e=document.createElement("a");return e.classList.add("product-link"),e.setAttribute("href","product?id=".concat(this.id)),t.append(e),t}},{key:"addToCartButton",get:function(){var e=this,r=document.createElement("button");r.classList.add("btn-add-to-cart");var n=document.createElement("span");return n.classList.add("material-symbols-outlined","font-size-md"),n.innerText="add_shopping_cart",r.appendChild(n),r.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)(),i.addEventListener("animationend",(function(){i.classList.remove("active")})),i.classList.contains("active")?(a++,c.style.display="block",c.innerText=a):(c.style.display="none",i.classList.add("active"),setTimeout((function(){a=1}),4e3)),u.innerText="Product successfully added to cart",i.classList.add("success")})),r}},{key:"containerAndThumb",get:function(){var t=document.createElement("div");t.classList.add("container-thumbnail");var e=document.createElement("img");return e.setAttribute("src",this.thumbnail),t.appendChild(e),t}},{key:"bottomInfos",get:function(){var t=document.createElement("div");t.classList.add("container-bottom-infos");var e=document.createElement("div");e.classList.add("container-title");var r=document.createElement("span");r.classList.add("normal-font","font-size-base"),r.innerText=this.title,e.appendChild(r);var n=document.createElement("div");n.classList.add("container-price-and-others");var o=document.createElement("span");o.classList.add("span-price","normal-font","font-size-md"),o.innerText="$ ".concat(this.price);var i=document.createElement("span");return i.classList.add("discount","normal-font"),i.innerText="".concat(this.discountPercentage,"% OFF"),n.appendChild(o),n.appendChild(i),t.appendChild(e),t.appendChild(n),t}}])&&l(e.prototype,r),s&&l(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.products=e,this.queryItem=null,this.filter=null,this.productsDelivery=null}var e,r;return e=t,(r=[{key:"addToParent",value:function(t,e){var r=this;"string"!=typeof t&&console.warn("parent must be a string css selector"),t=document.querySelector(t);var n,o=document.querySelector(".load-products");if(e.length<=10)return e.forEach((function(e){t.appendChild(new f(e).create())})),void(o&&(o.style.display="none"));o.style.display="block",this.productsDelivery=function(t){if(Array.isArray(t))return y(t)}(n=e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this.addFirst10Products(t),o.addEventListener("click",(function(){return r.deliveryProducts(t)}))}},{key:"removeItemsOfParent",value:function(t){(t=document.querySelector(t)).innerHTML=""}},{key:"addFirst10Products",value:function(t){var e=this.productsDelivery.slice(0,10);this.productsDelivery.splice(0,10),e.forEach((function(e){t.appendChild(new f(e).create())}))}},{key:"setSearchInfos",value:function(){var t=document.querySelector(".results-search > .results-p > .search-word"),e=document.querySelector(".results-search > .results-p > .quantity-products");t.innerHTML=this.queryItem,e.innerHTML=this.products.length}},{key:"deliveryProducts",value:function(t){this.addFirst10Products(t),this.productsDelivery.length<=0&&(document.querySelector(".load-products").style.display="none")}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var P,O={select:null,filter:null},E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this)).products=t,e.outputProducts=null,e.parentProducts=".products-layout",e}return e=u,r=[{key:"init",value:function(){this.getSelectValue(),this.getPriceRangeAndCategories()}},{key:"getSelectValue",value:function(){var t=this;document.querySelector(".button.order").addEventListener("change",(function(e){"first"===O.filter?O.select="second":O.select="first";var r=e.target.value;P=r,"lower"===r?t.OrderByLower():"bigger"===r&&t.OrderByBigger(),t.removeItemsOfParent(t.parentProducts),setTimeout((function(){return t.addToParent(t.parentProducts,t.outputProducts)}),100)}))}},{key:"setSearchInfos",value:function(){document.querySelector(".results-search > .results-p > .quantity-products").innerHTML=this.outputProducts.length}},{key:"OrderByLower",value:function(){var t=this.products;this.outputProducts&&(t=this.outputProducts),this.outputProducts=t.sort((function(t,e){return t.price-e.price}))}},{key:"OrderByBigger",value:function(){var t=this.products;this.outputProducts&&(t=this.outputProducts),this.outputProducts=t.sort((function(t,e){return e.price-t.price}))}},{key:"getPriceRangeAndCategories",value:function(){var t=this,e=document.querySelector(".apply-filters"),r=document.querySelector("#min-price"),n=document.querySelector("#max-price"),o=document.querySelector(".filter-additional-box"),i=document.querySelector(".button.filter"),u=document.querySelector(".button.order");e.addEventListener("click",(function(){var e,c,a=function(){var t=Number(r.value),e=Number(n.value);if("number"==typeof t||"number"==typeof e){if(!t&&!e)return[t=0,e=0];if(t?e||(e=0):t=0,0!==t&&0!==e&&t>e){var o=t,i=e;t=i,e=o,r.value=i,n.value=o}return[t,e]}}(),s=(c=2,function(t){if(Array.isArray(t))return t}(e=a)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){s=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return c}}(e,c)||v(e,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=s[0],f=s[1],d=t.getProductsPriceRange(l,f);if(d)y=t.getCategoriesSelected();else var y=t.getCategoriesSelected(!1);l||f||y||(t.outputProducts=function(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.products)),"first"===O.select?O.filter="second":O.filter="first","first"===O.filter&&"second"===O.select&&(u.value="disabled"),d&&y?t.outputProducts=t.getProductsRangeAndCategories(d,y):d?t.outputProducts=d:y&&(t.outputProducts=y),"second"===O.filter&&"first"===O.select&&("lower"===P?(u.value="lower",t.OrderByLower()):"bigger"===P&&(u.value="bigger",t.OrderByBigger())),null!==t.outputProducts&&(t.removeItemsOfParent(t.parentProducts),setTimeout((function(){return t.addToParent(t.parentProducts,t.outputProducts)}),100),o.style.visibility="hidden",i.removeAttribute("style"))}))}},{key:"getProductsRangeAndCategories",value:function(t,e){var r=[];return e.forEach((function(e){t.forEach((function(t){t.category===e&&r.push(t)}))})),r}},{key:"getProductsPriceRange",value:function(t,e){var r=[];if(t||e)return t&&e?this.products.forEach((function(n){n.price>=t&&n.price<=e&&r.push(n)})):t?this.products.forEach((function(e){e.price>=t&&r.push(e)})):e&&this.products.forEach((function(t){t.price<=e&&r.push(t)})),0!==r.length&&r}},{key:"getCategoriesSelected",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=document.querySelectorAll(".checkbox-category"),n=[],o=[];return r.forEach((function(t){t.checked&&n.push(t.value)})),e?0!==n.length&&n:(n.forEach((function(e){t.products.forEach((function(t){t.category===e&&o.push(t)}))})),0!==o.length&&o)}},{key:"getAllCategories",value:function(){var t=[];return this.products.forEach((function(e){var r=e.category;-1===categoriesAdded.indexOf(r)&&t.push(r)})),t}}],r&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var L=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"addListenerClick",value:function(){var t=document.querySelector(".button.filter"),e=document.querySelector(".filter-additional-box");t&&e&&t.addEventListener("click",(function(){if("hidden"===window.getComputedStyle(e).visibility)return e.style.visibility="visible",void(t.style.backgroundColor="var(--secondary)");t.removeAttribute("style"),e.style.visibility="hidden"}))}},{key:"addCategories",value:function(t){var e=document.querySelector(".container-options-category"),r=[];t.forEach((function(t){var n=t.category;if(-1===r.indexOf(n)){r.push(n);var o=document.createElement("div");o.classList.add("gap-top-0-65");var i=document.createElement("input");i.setAttribute("type","checkbox"),i.setAttribute("value",n),i.classList.add("checkbox-category");var u="input-".concat(n);i.setAttribute("id",u);var c=document.createElement("label");c.classList.add("font-size-base"),c.setAttribute("for",u),c.innerText=t.category,o.appendChild(i),o.appendChild(c),e.appendChild(o)}}))}}],null&&k(e.prototype,null),r&&k(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}L.addListenerClick();var R=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.models={productCard:'<div product-id="4" class="container-product '.concat(e,'-product-model-load product-model-load model-load"><a class="product-link" href="#"><div class="container-thumbnail"></div><div class="container-bottom-infos"><div class="container-title"><span class="normal-font font-size-base"></span></div><div class="container-price-and-others"><span class="span-price normal-font font-size-md"></span><span class="discount normal-font"></span></div></div></a></div>')}}var e,r,n;return e=t,n=[{key:"disable",value:function(t){document.querySelectorAll(t).forEach((function(t){t.style.display="none"}))}}],(r=[{key:"createModel",value:function(t,e,r){t=document.querySelector(t);for(var n=0;n<e;n++)t.innerHTML+=this.models[r]}}])&&x(e.prototype,r),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(){q=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,u=Object.create(i.prototype),c=new R(n||[]);return o(u,"_invoke",{value:k(t,r,c)}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var d="suspendedStart",y="suspendedYield",p="executing",h="completed",m={};function v(){}function b(){}function g(){}var w={};s(w,u,(function(){return this}));var S=Object.getPrototypeOf,P=S&&S(S(A([])));P&&P!==r&&n.call(P,u)&&(w=P);var O=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,u,c){var a=f(t[o],t,i);if("throw"!==a.type){var s=a.arg,l=s.value;return l&&"object"==T(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(a.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=d;return function(i,u){if(o===p)throw new Error("Generator is already running");if(o===h){if("throw"===i)throw u;return{value:t,done:!0}}for(n.method=i,n.arg=u;;){var c=n.delegate;if(c){var a=L(c,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?h:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=h,n.method="throw",n.arg=s.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var u=i.arg;return u?u.done?(r[e.resultName]=u.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):u:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(T(e)+" is not iterable")}return b.prototype=g,o(O,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,a,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,a,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},E(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var u=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},E(O),s(O,a,"Generator"),s(O,u,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],c=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var a=n.call(u,"catchLoc"),s=n.call(u,"finallyLoc");if(a&&s){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function A(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}(new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(s,t);var e,n,o,i,u,c,a=(u=s,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(u);if(c){var r=B(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this)).errors=[],t.query=null,t}return e=s,n=[{key:"create",value:(o=q().mark((function t(){var e;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.getQueryItem(),!(this.errors.length>0)){t.next=4;break}return console.log(this.errors),t.abrupt("return");case 4:return t.next=7,this.getItems();case 7:if(e=t.sent,this.productNotFound(e)){t.next=10;break}return t.abrupt("return");case 10:this.products=e.products,this.addToParent(".search-items",this.products),R.disable(".product-product-model-load"),this.filter=new E(this.products),this.filter.init(),L.addCategories(this.filter.products),this.setSearchInfos();case 17:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=o.apply(t,e);function u(t){A(i,r,n,u,c,"next",t)}function c(t){A(i,r,n,u,c,"throw",t)}u(void 0)}))},function(){return i.apply(this,arguments)})},{key:"productNotFound",value:function(t){return 0!==t.products.length||(document.querySelector("section.not-found").style.display="block",document.querySelector("section.products-layout").style.display="none",document.querySelector("div.results-search").style.display="none",document.querySelector("div.filter-options").style.display="none",!1)}},{key:"getQueryItem",value:function(){"/search"===window.location.pathname?(this.queryItem=new URLSearchParams(window.location.search).get("q"),this.query="search"):"/category"===window.location.pathname&&(this.queryItem=new URLSearchParams(window.location.search).get("q"),this.query="category"),this.queryItem||this.errors.push("Item must be submited"),"string"!=typeof this.queryItem&&this.errors.push("Item must be a String")}},{key:"getItems",value:function(){var t=this;return"search"===this.query?new Promise((function(e){r.setSearchProducts(t.queryItem,(function(t){e(t)}))})):"category"===this.query?new Promise((function(e){r.setCategoryProducts(t.queryItem,(function(t){e(t)}))})):void 0}}],n&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(h))).create(),new R("product").createModel(".products-layout",10,"productCard")})();
//# sourceMappingURL=products.js.map