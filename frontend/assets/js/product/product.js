import {localStorageSave, localStorageGet} from "../localStorageSaverAndGet";

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

                buttonEl.addEventListener("mouseover", () => {
                    mainImgEl.setAttribute("src", value);
                    document.querySelectorAll(".gallery-item").forEach(item => {
                        item.style.opacity = "1";
                    });
                    buttonEl.style.opacity = ".5";
                });
                
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
        const btnBuy = document.querySelector(".product-info-buy > .container-buy .btn-buy");
        const btnAddCart = document.querySelector(".product-info-buy > .container-buy .btn-add-cart");

        title.innerText = this.product.title;
        description.innerText = this.product.description;
        ratingStars(this.product.rating).forEach(star => {
            rating.appendChild(star);
        });
        rating.innerHTML += this.product.rating;
        price.innerText = this.product.price;
        discount.innerText = this.product.discountPercentage;
        stock.innerText = this.product.stock;

        function ratingStars(rating) {
            let stars = [];
            const ratingInt = Number(String(rating).slice(0, String(rating).indexOf(".")));
            const ratingDec = Number(String(rating).slice(String(rating).indexOf(".")));

            for(let i = 0; i < ratingInt; i++) {
                stars.push(spanStar());
            }

            console.log(ratingDec);

            if(ratingDec < .5) {
                stars.push(spanStar(true));
            } else {
                stars.push(spanStar());
            }

            function spanStar(half) {
                const span = document.createElement("span");
                span.classList.add("rating-star", "material-symbols-outlined", "fill-icon");
                if(half) {
                    span.innerText = "star_half";
                    return span;
                }
                span.innerText = "star";
                return span;
            }

            return stars;
        }

        btnBuy.addEventListener("click", () => {
            const addCartItemLclStrg = Product.addCartItemLclStrg.bind(this);
            addCartItemLclStrg();
        });
        btnAddCart.addEventListener("click", () => {
            const addCartItemLclStrg = Product.addCartItemLclStrg.bind(this);
            addCartItemLclStrg();
        });
    }

    static addCartItemLclStrg() {
        let oldValue;
        oldValue = localStorageGet("cart-items");
        const itemId = new URLSearchParams(window.location.search).get("id");
        if(!itemId) return;
        if(typeof itemId !== "string") return;

         if(oldValue === null) {
            localStorageSave("cart-items", itemId);
            return;
        };

        localStorageSave("cart-items", `${oldValue}, ${itemId}`);
    }
}
