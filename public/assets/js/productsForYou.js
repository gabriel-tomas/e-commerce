/*! For license information please see productsForYou.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}const n=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,"mainRoute",{enumerable:!0,writable:!1,configurable:!1,value:"https://dummyjson.com"}),Object.defineProperty(this,"allProductsRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products")});var e=null;Object.defineProperty(this,"setSearchRoute",{get:function(){return e},set:function(t){"string"==typeof t&&t&&(e="".concat(this.mainRoute,"/products/search?q=").concat(t))}});var r=null;Object.defineProperty(this,"setSingleRoute",{enumerable:!0,configurable:!1,get:function(){return r},set:function(t){"string"==typeof t&&t&&(r="".concat(this.mainRoute,"/products/").concat(t))}}),Object.defineProperty(this,"allCategoriesRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products/categories")});var n=null;Object.defineProperty(this,"setCategoryRoute",{get:function(){return n},set:function(t){"string"==typeof t&&t&&(n="".concat(this.mainRoute,"/products/category/").concat(t))}});var o=null;Object.defineProperty(this,"setCommentsRoute",{get:function(){return o},set:function(t){"string"==typeof t&&t&&(o="".concat(this.mainRoute,"/comments?limit=").concat(t))}})}var r,n,o;return r=t,n=[{key:"getAllProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2?arguments[2]:void 0;t.fetchRoute("".concat(this.allProductsRoute,"?skip=").concat(e,"&limit=").concat(r),n)}},{key:"setSearchProducts",value:function(e,r){this.setSearchRoute=e,t.fetchRoute(this.setSearchRoute,r)}},{key:"getAllCategories",value:function(e){t.fetchRoute(this.allCategoriesRoute,e)}},{key:"setCategoryProducts",value:function(e,r){this.setCategoryRoute=e,t.fetchRoute(this.setCategoryRoute,r)}},{key:"getSingleProduct",value:function(e,r){this.setSingleRoute=e,t.fetchRoute(this.setSingleRoute,r)}},{key:"getComments",value:function(e,r){this.setCommentsRoute=e,t.fetchRoute(this.setCommentsRoute,r)}}],o=[{key:"fetchRoute",value:function(t,e){try{fetch(t).then((function(t){t.json().then((function(t){e&&e(t)}))}))}catch(t){throw new Error(t)}}}],n&&e(r.prototype,n),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}());function o(t,e){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";e=JSON.stringify(e),localStorage.setItem(t,e)}function i(t){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";var e=localStorage.getItem(t);return JSON.parse(e)}var a=document.querySelector(".message"),u=document.querySelector(".message > p"),c=document.querySelector(".message > .counter-added"),s=document.querySelector(".message > .close-message"),l=1;function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function p(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:String(e)}a.addEventListener("animationend",(function(){a.classList.remove("active"),a.classList.remove("success"),a.classList.remove("error")})),s&&s.addEventListener("click",(function(){a.classList.remove("active"),a.classList.remove("success"),a.classList.remove("error")}));var y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.thumbnail=e.thumbnail,this.title=e.title,this.price=e.price,this.discountPercentage=e.discountPercentage,this.id=e.id}var e,r,n;return e=t,n=[{key:"addCartItemLclStrg",value:function(t){var e;null!==(e=i(t))?o(t,"".concat(e,", ").concat(this.id)):o(t,String(this.id))}},{key:"deleteCartItemLclStrg",value:function(t){var e,r=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=i(t),null!==(e=String(e))&&(e=(e=e.split(",")).map((function(t){return t.trim()})),n?e=e.filter((function(t,e){if(Number(t)!==r.id)return!0})):e.splice(e.indexOf(String(this.id)),1),(e=e.join(", "))?o(t,"".concat(e)):function(t){if("string"!=typeof t)throw"Key must be string";localStorage.removeItem(t)}(t))}}],(r=[{key:"create",value:function(){var t=this.divParent,e=this.containerAddToCartOrFavorite,r=this.containerAndThumb,n=this.bottomInfos;return t.appendChild(e),t.querySelector(".product-link").appendChild(r),t.querySelector(".product-link").appendChild(n),t}},{key:"divParent",get:function(){var t=document.createElement("div");t.setAttribute("product-id",this.id),t.classList.add("container-product");var e=document.createElement("a");return e.classList.add("product-link"),e.setAttribute("href","product?id=".concat(this.id)),t.append(e),t}},{key:"containerAddToCartOrFavorite",get:function(){var e=this,r=document.createElement("div");r.classList.add("container-cart-favorite");var n=i("favorites"),o=document.createElement("a");o.classList.add("btn-add-to-favorite");var s=document.createElement("span");if(s.classList.add("material-symbols-outlined","font-size-md"),s.innerText="favorite",o.appendChild(s),n){var f=n.split(",");console.log(f),-1!==n.indexOf(String(this.id))?(s.classList.add("fill-icon"),o.addEventListener("click",(function(){t.deleteCartItemLclStrg.bind(e)("favorites"),o.setAttribute("href","/favorites/remove/".concat(e.id))}))):o.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)("favorites"),s.classList.add("fill-icon"),o.setAttribute("href","/favorites/".concat(e.id))}))}else o.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)("favorites"),s.classList.add("fill-icon"),o.setAttribute("href","/favorites/".concat(e.id))}));var d=document.createElement("button");d.classList.add("btn-add-to-cart");var p=document.createElement("span");return p.classList.add("material-symbols-outlined","font-size-md"),p.innerText="add_shopping_cart",d.appendChild(p),d.addEventListener("click",(function(){var r;t.addCartItemLclStrg.bind(e)("cart-items"),r="ptBr"===i("language")?"Produto adicionado com sucesso ao carrinho":"Product successfully added to cart",a.classList.contains("important")&&a.classList.remove("important"),a.classList.contains("active")?(l++,c.style.display="block",c.innerText=l):(c.style.display="none",a.classList.add("active"),setTimeout((function(){l=1}),4e3)),u.innerText=r,a.classList.add("success")})),r.appendChild(o),r.appendChild(d),r}},{key:"containerAndThumb",get:function(){var t=document.createElement("div");t.classList.add("container-thumbnail");var e=document.createElement("img");return e.setAttribute("src",this.thumbnail),t.appendChild(e),t}},{key:"bottomInfos",get:function(){var t=document.createElement("div");t.classList.add("container-bottom-infos");var e=document.createElement("div");e.classList.add("container-title");var r=document.createElement("span");r.classList.add("normal-font","font-size-base"),r.innerText=this.title,e.appendChild(r);var n=document.createElement("div");n.classList.add("container-price-and-others");var o=document.createElement("span");o.classList.add("span-price","normal-font","font-size-md"),o.innerText="$ ".concat(this.price);var i=document.createElement("span");return i.classList.add("discount","normal-font"),i.innerText="".concat(this.discountPercentage,"% OFF"),n.appendChild(o),n.appendChild(i),t.appendChild(e),t.appendChild(n),t}}])&&d(e.prototype,r),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function g(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:String(e)}var w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.products=e,this.queryItem=null,this.filter=null,this.productsDelivery=null}var e,r,o;return e=t,o=[{key:"getAllProducts",value:function(e,r,o){if("number"==typeof e)return new Promise((function(i){n.getAllProducts(0,e,(function(e){e=e.products;var n=t.randomizeProducts(v(e)),a=o(n,r);i(a)}))}));console.warn("limit must be number")}},{key:"randomizeProducts",value:function(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[r],t[r]=n}return t}}],(r=[{key:"addToParent",value:function(t,e){var r=this;"string"!=typeof t&&console.warn("parent must be a string css selector"),t=document.querySelector(t);var n=document.querySelector(".load-products");return e.length<=10?(e.forEach((function(e){t.appendChild(new y(e).create())})),void(n&&(n.style.display="none"))):!n&&e.length>10?(e.forEach((function(e){t.appendChild(new y(e).create())})),void console.warn("please add the load-products button to make product delivery more efficient or reduce the quantity of products to 10")):(n.style.display="block",this.productsDelivery=v(e),this.addFirst10Products(t),void n.addEventListener("click",(function(){return r.deliveryProducts(t)})))}},{key:"removeItemsOfParent",value:function(t){(t=document.querySelector(t)).innerHTML=""}},{key:"addFirst10Products",value:function(t){var e=this.productsDelivery.slice(0,10);this.productsDelivery.splice(0,10),e.forEach((function(e){t.appendChild(new y(e).create())}))}},{key:"setSearchInfos",value:function(){var t=document.querySelector(".results-search > .results-p > .search-word"),e=document.querySelector(".results-search > .results-p > .quantity-products");t.innerHTML=this.queryItem,e.innerHTML=this.products.length}},{key:"deliveryProducts",value:function(t){this.addFirst10Products(t),this.productsDelivery.length<=0&&(document.querySelector(".load-products").style.display="none")}}])&&b(e.prototype,r),o&&b(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function P(t,e){if(t){if("string"==typeof t)return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(t,e):void 0}}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,L(n.key),n)}}function L(t){var e=function(t,e){if("object"!=S(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==S(e)?e:String(e)}function j(t,e,r){return e=C(e),function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,k()?Reflect.construct(e,r||[],C(t).constructor):e.apply(t,r))}function k(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(k=function(){return!!t})()}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}var A,T={select:null,filter:null},I=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=j(this,e)).products=t,r.outputProducts=null,r.parentProducts=".products-layout",r}var r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(e,t),r=e,n=[{key:"init",value:function(){this.getSelectValue(),this.getPriceRangeAndCategories()}},{key:"getSelectValue",value:function(){var t=this;document.querySelector(".button.order").addEventListener("change",(function(e){"first"===T.filter?T.select="second":T.select="first";var r=e.target.value;A=r,"lower"===r?t.OrderByLower():"bigger"===r&&t.OrderByBigger(),t.removeItemsOfParent(t.parentProducts),setTimeout((function(){return t.addToParent(t.parentProducts,t.outputProducts)}),100)}))}},{key:"setSearchInfos",value:function(){document.querySelector(".results-search > .results-p > .quantity-products").innerHTML=this.outputProducts.length}},{key:"OrderByLower",value:function(){var t=this.products;this.outputProducts&&(t=this.outputProducts),this.outputProducts=t.sort((function(t,e){return t.price-e.price}))}},{key:"OrderByBigger",value:function(){var t=this.products;this.outputProducts&&(t=this.outputProducts),this.outputProducts=t.sort((function(t,e){return e.price-t.price}))}},{key:"getPriceRangeAndCategories",value:function(){var t=this,e=document.querySelector(".apply-filters"),r=document.querySelector("#min-price"),n=document.querySelector("#max-price"),o=document.querySelector(".filter-additional-box"),i=document.querySelector(".button.filter"),a=document.querySelector(".button.order");e.addEventListener("click",(function(){var e,u,c=function(){var t=Number(r.value),e=Number(n.value);if("number"==typeof t||"number"==typeof e){if(!t&&!e)return[t=0,e=0];if(t?e||(e=0):t=0,0!==t&&0!==e&&t>e){var o=t,i=e;t=i,e=o,r.value=i,n.value=o}return[t,e]}}(),s=(u=2,function(t){if(Array.isArray(t))return t}(e=c)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(e,u)||P(e,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=s[0],f=s[1],d=t.getProductsPriceRange(l,f);if(d)p=t.getCategoriesSelected();else var p=t.getCategoriesSelected(!1);l||f||p||(t.outputProducts=function(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||P(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.products)),"first"===T.select?T.filter="second":T.filter="first","first"===T.filter&&"second"===T.select&&(a.value="disabled"),d&&p?t.outputProducts=t.getProductsRangeAndCategories(d,p):d?t.outputProducts=d:p&&(t.outputProducts=p),"second"===T.filter&&"first"===T.select&&("lower"===A?(a.value="lower",t.OrderByLower()):"bigger"===A&&(a.value="bigger",t.OrderByBigger())),null!==t.outputProducts&&(t.removeItemsOfParent(t.parentProducts),setTimeout((function(){return t.addToParent(t.parentProducts,t.outputProducts)}),100),o.style.visibility="hidden",i.removeAttribute("style"))}))}},{key:"getProductsRangeAndCategories",value:function(t,e){var r=[];return e.forEach((function(e){t.forEach((function(t){t.category===e&&r.push(t)}))})),r}},{key:"getProductsPriceRange",value:function(t,e){var r=[];if(t||e)return t&&e?this.products.forEach((function(n){n.price>=t&&n.price<=e&&r.push(n)})):t?this.products.forEach((function(e){e.price>=t&&r.push(e)})):e&&this.products.forEach((function(t){t.price<=e&&r.push(t)})),0!==r.length&&r}},{key:"getCategoriesSelected",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=document.querySelectorAll(".checkbox-category"),n=[],o=[];return r.forEach((function(t){t.checked&&n.push(t.value)})),e?0!==n.length&&n:(n.forEach((function(e){t.products.forEach((function(t){t.category===e&&o.push(t)}))})),0!==o.length&&o)}},{key:"getAllCategories",value:function(){var t=[];return this.products.forEach((function(e){var r=e.category;-1===categoriesAdded.indexOf(r)&&t.push(r)})),t}}],n&&O(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(w);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,q(n.key),n)}}function q(t){var e=function(t,e){if("object"!=R(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==R(e)?e:String(e)}var N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"addListenerClick",value:function(){var t=document.querySelector(".button.filter"),e=document.querySelector(".filter-additional-box");t&&e&&t.addEventListener("click",(function(){if("hidden"===window.getComputedStyle(e).visibility)return e.style.visibility="visible",void(t.style.backgroundColor="var(--secondary)");t.removeAttribute("style"),e.style.visibility="hidden"}))}},{key:"addCategories",value:function(t){var e=document.querySelector(".container-options-category"),r=[];t.forEach((function(t){var n=t.category;if(-1===r.indexOf(n)){r.push(n);var o=document.createElement("div");o.classList.add("gap-top-0-65");var i=document.createElement("input");i.setAttribute("type","checkbox"),i.setAttribute("value",n),i.classList.add("checkbox-category");var a="input-".concat(n);i.setAttribute("id",a);var u=document.createElement("label");u.classList.add("font-size-base"),u.setAttribute("for",a),u.innerText=t.category,o.appendChild(i),o.appendChild(u),e.appendChild(o)}}))}}],null&&_(e.prototype,null),r&&_(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,M(n.key),n)}}function M(t){var e=function(t,e){if("object"!=B(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==B(e)?e:String(e)}N.addListenerClick();var G=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"disable",value:function(t){document.querySelectorAll(t).forEach((function(t){t.remove()}))}}],null&&F(e.prototype,null),r&&F(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function D(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=K(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function K(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function $(){$=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),u=new A(n||[]);return o(a,"_invoke",{value:j(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var d="suspendedStart",p="suspendedYield",y="executing",h="completed",v={};function m(){}function b(){}function g(){}var w={};s(w,a,(function(){return this}));var S=Object.getPrototypeOf,P=S&&S(S(T([])));P&&P!==r&&n.call(P,a)&&(w=P);var E=g.prototype=m.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==z(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===h){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?h:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=h,n.method="throw",n.arg=s.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(z(e)+" is not iterable")}return b.prototype=g,o(E,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},O(L.prototype),s(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function U(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function Y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){U(i,n,o,a,u,"next",t)}function u(t){U(i,n,o,a,u,"throw",t)}a(void 0)}))}}function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,V(n.key),n)}}function V(t){var e=function(t,e){if("object"!=z(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==z(e)?e:String(e)}function Q(t,e,r){return e=X(e),function(t,e){if(e&&("object"===z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Z(t)}(t,W()?Reflect.construct(e,r||[],X(t).constructor):e.apply(t,r))}function W(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(W=function(){return!!t})()}function X(t){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},X(t)}function Z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tt(t,e){return tt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},tt(t,e)}(new(function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=Q(this,e,[[]]),Object.defineProperty(Z(t),"interests",{enumerable:!0,configurable:!1,get:function(){return i("interestedItems")}}),t}var r,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&tt(t,e)}(e,t),r=e,o=[{key:"create",value:(a=Y($().mark((function t(){var e,r,n,o;return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=null,r="for-you","/foryou"===window.location.pathname?(this.queryItem="For You",n=".search-items",e=!0):n=".for-you-products",!this.interests){t.next=9;break}return t.next=6,this.separateInterestItems(this.interests,e);case 6:this.products=t.sent,t.next=15;break;case 9:return t.next=11,this.randomCategories();case 11:return o=t.sent,t.next=14,this.separateInterestItems(o,e);case 14:this.products=t.sent;case 15:"/foryou"===window.location.pathname&&(this.filter=new I(this.products),this.filter.init(),N.addCategories(this.filter.products),this.setSearchInfos(),r="product"),this.addToParent(n,this.products),G.disable(".".concat(r,"-product-model-load"));case 18:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"randomCategories",value:function(){return new Promise((function(t,e){var r=[];n.getAllCategories((function(e){for(var n=0;n<4;n++){var o=(i=e.length,Math.round(Math.random()*(i-0)+0));e[o]&&r.push(e[o])}var i;t(r)}))}))}},{key:"separateInterestItems",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[c(),c(),c(),c(),c()],o=5,i=0;function a(t){var a=[];return new Promise((function(u){n.setCategoryProducts(t,(function(t){if(e)for(var n in t.products)a.push(t.products[Number(n)]);else for(var c in t.products)if(Number(c)===r[i]&&(a.push(t.products[Number(c)]),++i===o))break;u(a)}))}))}function u(){return u=Y($().mark((function t(e){var r,n,o,i,u;return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],n=D(e),t.prev=2,n.s();case 4:if((o=n.n()).done){t.next=12;break}return i=o.value,t.next=8,a(i);case 8:u=t.sent,r.push.apply(r,function(t){if(Array.isArray(t))return H(t)}(c=u)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||K(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());case 10:t.next=4;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),n.e(t.t0);case 17:return t.prev=17,n.f(),t.finish(17);case 20:return t.abrupt("return",r);case 21:case"end":return t.stop()}var c}),t,null,[[2,14,17,20]])}))),u.apply(this,arguments)}function c(){return Math.round(4*Math.random()+0)}return function(t){return u.apply(this,arguments)}(t)}}],o&&J(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}(w))).create()})();
//# sourceMappingURL=productsForYou.js.map