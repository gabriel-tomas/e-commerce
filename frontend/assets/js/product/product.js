/* import {localStorageSave, localStorageGet} from "./localStorageSaverAndGet"; */

export default class Product {
    constructor(product) {
        this.product = product;
    }

    create() {
        const parentEl = document.querySelector(".product-item");

        this.categoryBrand();
        this.productImgs();
        this.productInfoBuy();
    }

    categoryBrand() {
        const categoryEl = document.querySelector(".category-brand > .category > .path-item");
        const brandEl = document.querySelector(".category-brand > .brand > .path-item");

        categoryEl.innerText = this.product.category;
        brandEl.innerText = this.product.brand;
    }

    productImgs() {
        const mainImgEl = document.querySelector(".product-imgs > .main-img > img");
        const galleryImgsEl = document.querySelector(".product-imgs > .gallery-imgs");

        mainImgEl.setAttribute("src", this.product.thumbnail);
        mainImgEl.setAttribute("alt", this.product.title);

        const galleryImgsItems = () => {
            this.product.images.forEach((value, id) => {
                const buttonEl = document.createElement("button");
                buttonEl.classList.add("gallery-item");
                
                const img = document.createElement("img");
                img.setAttribute("src", value);
                img.setAttribute("alt", `Gallery image ${id}`);

                buttonEl.appendChild(img);

                galleryImgsEl.appendChild(buttonEl);
            });
        }

        galleryImgsItems();
    }

    productInfoBuy() {
        const title = document.querySelector(".product-info-buy > .container-title > h1");
        const description = document.querySelector(".product-info-buy > .container-description > p");
        const rating = document.querySelector(".product-info-buy > .container-rating > span");
        const price = document.querySelector(".product-info-buy > .container-price > .price > .value");
        const discount = document.querySelector(".product-info-buy > .container-price > .discount > .value");
        const stock = document.querySelector(".product-info-buy > .container-stock .value");

        title.innerText = this.product.title;
        description.innerText = this.product.description;
        rating.innerText = this.product.rating;
        price.innerText = this.product.price;
        discount.innerText = this.product.discountPercentage;
        stock.innerText = this.product.stock;
    }
}
