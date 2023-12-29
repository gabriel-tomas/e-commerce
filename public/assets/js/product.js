(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,o){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}const o=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Object.defineProperty(this,"mainRoute",{enumerable:!0,writable:!1,configurable:!1,value:"https://dummyjson.com"}),Object.defineProperty(this,"allProductsRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products")});var e=null;Object.defineProperty(this,"setSearchRoute",{get:function(){return e},set:function(t){"string"==typeof t&&(e="".concat(this.mainRoute,"/products/search?q=").concat(t))}});var o=null;Object.defineProperty(this,"setSingleRoute",{enumerable:!0,configurable:!1,get:function(){return o},set:function(t){o="".concat(this.mainRoute,"/products/").concat(t)}}),Object.defineProperty(this,"allCategoriesRoute",{enumerable:!0,writable:!1,configurable:!1,value:"".concat(this.mainRoute,"/products/categories")});var n=null;Object.defineProperty(this,"setCategoryRoute",{get:function(){return n},set:function(t){"string"==typeof t&&(n="".concat(this.mainRoute,"/products/category/").concat(t))}});var r=null;Object.defineProperty(this,"setCommentsRoute",{get:function(){return r},set:function(t){"string"==typeof t&&(r="".concat(this.mainRoute,"/comments?limit=").concat(t))}})}var o,n,r;return o=t,n=[{key:"getAllProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2?arguments[2]:void 0;t.fetchRoute("".concat(this.allProductsRoute,"?skip=").concat(e,"&limit=").concat(o),n)}},{key:"setSearchProducts",value:function(e,o){this.setSearchRoute=e,t.fetchRoute(this.setSearchRoute,o)}},{key:"getAllCategories",value:function(e){t.fetchRoute(this.allCategoriesRoute,e)}},{key:"setCategoryProducts",value:function(e,o){this.setCategoryRoute=e,t.fetchRoute(this.setCategoryRoute,o)}},{key:"getSingleProduct",value:function(e,o){this.setSingleRoute=e,t.fetchRoute(this.setSingleRoute,o)}},{key:"getComments",value:function(e,o){this.setCommentsRoute=e,t.fetchRoute(this.setCommentsRoute,o)}}],r=[{key:"fetchRoute",value:function(t,e){fetch(t).then((function(t){t.json().then((function(t){e&&e(t)}))}))}}],n&&e(o.prototype,n),r&&e(o,r),Object.defineProperty(o,"prototype",{writable:!1}),t}());function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===n(i)?i:String(i)),r)}var i}var i,c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.product=e}var e,o,n;return e=t,n=[{key:"addCartItemLclStrg",value:function(){var t,e,o;e="cart-items",o=localStorage.getItem(e),t=JSON.parse(o);var n=new URLSearchParams(window.location.search).get("id");n&&"string"==typeof n&&function(t,e){if("string"!=typeof t)throw"Key must be string";if(t.length<3)throw"Key must be greater than 2";e=JSON.stringify(e),localStorage.setItem(t,e)}("cart-items",null!==t?"".concat(t,", ").concat(n):n)}}],(o=[{key:"create",value:function(){document.querySelector(".product-item"),this.categoryBrand(),this.productImgs(),this.productInfoBuy()}},{key:"categoryBrand",value:function(){var t=document.querySelector(".category-brand > .category > .path-item"),e=document.querySelector(".category-brand > .brand > .path-item");t.innerText=this.product.category,e.innerText=this.product.brand}},{key:"productImgs",value:function(){var t=document.querySelector(".product-imgs > .main-img > img"),e=document.querySelector(".product-imgs > .gallery-imgs");t.setAttribute("src",this.product.thumbnail),t.setAttribute("alt",this.product.title),this.product.images.forEach((function(o,n){var r=document.createElement("button");r.classList.add("gallery-item"),r.addEventListener("mouseover",(function(){t.setAttribute("src",o),document.querySelectorAll(".gallery-item").forEach((function(t){t.style.opacity="1"})),r.style.opacity=".5"}));var i=document.createElement("img");i.setAttribute("src",o),i.setAttribute("alt","Gallery image ".concat(n)),r.appendChild(i),e.appendChild(r)}))}},{key:"productInfoBuy",value:function(){var e=this,o=document.querySelector(".product-info-buy > .container-title > h1"),n=document.querySelector(".product-info-buy > .container-description > p"),r=document.querySelector(".product-info-buy > .container-rating > span"),i=document.querySelector(".product-info-buy > .container-price > .price > .value"),c=document.querySelector(".product-info-buy > .container-price > .discount > .value"),u=document.querySelector(".product-info-buy > .container-stock .value"),a=document.querySelector(".product-info-buy > .container-buy .btn-buy"),l=document.querySelector(".product-info-buy > .container-buy .btn-add-cart");o.innerText=this.product.title,n.innerText=this.product.description,r.innerText=this.product.rating,i.innerText=this.product.price,c.innerText=this.product.discountPercentage,u.innerText=this.product.stock,a.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)()})),l.addEventListener("click",(function(){t.addCartItemLclStrg.bind(e)()}))}}])&&r(e.prototype,o),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();(i=new URLSearchParams(window.location.search).get("id"))&&"string"==typeof i&&o.getSingleProduct(i,(function(t){new c(t).create()}))})();
//# sourceMappingURL=product.js.map