(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const n=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,"mainRoute",{enumerable:!0,writable:!1,configurable:!1,value:"https://dummyjson.com"}),Object.defineProperty(this,"allProductsRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products")});var e=null;Object.defineProperty(this,"setSearchRoute",{get:function(){return e},set:function(t){"string"==typeof t&&(e="".concat(this.mainRoute,"/products/search?q=").concat(t))}});var n=null;Object.defineProperty(this,"setSingleRoute",{enumerable:!0,configurable:!1,get:function(){return n},set:function(t){n="".concat(this.mainRoute,"/products/").concat(t)}}),Object.defineProperty(this,"allCategoriesRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products/categories")});var r=null;Object.defineProperty(this,"setCategoryRoute",{get:function(){return r},set:function(t){"string"==typeof t&&(r="".concat(this.mainRoute,"/products/category/").concat(t))}})}var n,r,o;return n=t,r=[{key:"getAllProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,r=arguments.length>2?arguments[2]:void 0;t.fetchRoute("".concat(this.allProductsRoute,"?skip=").concat(e,"&limit=").concat(n),r)}},{key:"setSearchProducts",value:function(e,n){this.setSearchRoute=e,t.fetchRoute(this.setSearchRoute,n)}},{key:"getAllCategories",value:function(e){t.fetchRoute(this.allCategoriesRoute,e)}},{key:"setCategoryProducts",value:function(e,n){this.setCategoryRoute=e,t.fetchRoute(this.setCategoryRoute,n)}},{key:"getSingleProduct",value:function(e,n){this.setSingleRoute=e,t.fetchRoute(this.setSingleRoute,n)}}],o=[{key:"fetchRoute",value:function(t,e){fetch(t).then((function(t){t.json().then((function(t){e&&e(t)}))}))}}],r&&e(n.prototype,r),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}());function r(t,e){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";e=JSON.stringify(e),localStorage.setItem(t,e)}function o(t){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";var e=localStorage.getItem(t);return JSON.parse(e)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c,u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.thumbnail=e.thumbnail,this.title=e.title,this.price=e.price,this.discountPercentage=e.discountPercentage,this.id=e.id}var e,n,i;return e=t,i=[{key:"addCartItemLclStrg",value:function(){var t;null!==(t=o("cart-items"))?r("cart-items","".concat(t,", ").concat(this.id)):r("cart-items",this.id)}},{key:"deleteCartItemLclStrg",value:function(){var t;null!==(t=o("cart-items"))&&((t=(t=t.split(",")).map((function(t){return t.trim()}))).splice(t.indexOf(String(this.id)),1),t=t.join(", "),r("cart-items","".concat(t)))}}],(n=[{key:"create",value:function(){var t=this.divParent,e=this.addToCartButton,n=this.containerAndThumb,r=this.bottomInfos;return t.appendChild(e),t.querySelector(".product-link").appendChild(n),t.querySelector(".product-link").appendChild(r),t}},{key:"divParent",get:function(){var t=document.createElement("div");t.setAttribute("product-id",this.id),t.classList.add("container-product");var e=document.createElement("a");return e.classList.add("product-link"),e.setAttribute("href","product?id=".concat(this.id)),t.append(e),t}},{key:"addToCartButton",get:function(){var e=this,n=document.createElement("button");n.classList.add("btn-add-to-cart");var r=document.createElement("span");return r.classList.add("material-symbols-outlined","font-size-md"),r.innerText="add_shopping_cart",n.appendChild(r),n.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)()})),n}},{key:"containerAndThumb",get:function(){var t=document.createElement("div");t.classList.add("container-thumbnail");var e=document.createElement("img");return e.setAttribute("src",this.thumbnail),t.appendChild(e),t}},{key:"bottomInfos",get:function(){var t=document.createElement("div");t.classList.add("container-bottom-infos");var e=document.createElement("div");e.classList.add("container-title");var n=document.createElement("span");n.classList.add("normal-font","font-size-base"),n.innerText=this.title,e.appendChild(n);var r=document.createElement("div");r.classList.add("container-price-and-others");var o=document.createElement("span");o.classList.add("span-price","normal-font","font-size-md"),o.innerText="$ ".concat(this.price);var i=document.createElement("span");return i.classList.add("discount","normal-font"),i.innerText="".concat(this.discountPercentage,"% OFF"),r.appendChild(o),r.appendChild(i),t.appendChild(e),t.appendChild(r),t}}])&&a(e.prototype,n),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();(c=new URLSearchParams(window.location.search).get("q"))&&"string"==typeof c&&n.setSearchProducts(c,(function(t){t.products.forEach((function(t){var e;e=new u(t).create(),document.querySelector(".search-items").appendChild(e)}))}))})();
//# sourceMappingURL=productsSearch.js.map