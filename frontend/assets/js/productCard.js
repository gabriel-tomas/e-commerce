import {localStorageSave, localStorageGet, localStorageRemove} from "./localStorageSaverAndGet";
import messages from '../js/messages';
import checkLanguage from "./checkLanguage";

export default class ProductCard {
    constructor(product) {
        //console.log(product);
        this.thumbnail = product.thumbnail;
        this.title = product.title;
        this.price = product.price;
        this.discountPercentage = product.discountPercentage;
        this.id = product.id;
    }

    create() {
        const divParent = this.divParent;
        const containerAddToCartOrFavorite = this.containerAddToCartOrFavorite;
        const containerAndThumb = this.containerAndThumb;
        const bottomInfo = this.bottomInfos;

        divParent.appendChild(containerAddToCartOrFavorite);
        divParent.querySelector(".product-link").appendChild(containerAndThumb);
        divParent.querySelector(".product-link").appendChild(bottomInfo);

        return divParent;
    }

    get divParent() {
        const div = document.createElement("div");
        div.setAttribute("product-id", this.id);
        div.classList.add("container-product");
        
        const a = document.createElement("a");
        a.classList.add("product-link");
        a.setAttribute("href", `product?id=${this.id}`);

        div.append(a);

        return div;
    }

    get containerAddToCartOrFavorite() {
        const parent = document.createElement("div")
        parent.classList.add("container-cart-favorite");

        const favorites = localStorageGet("favorites");

        const link = document.createElement("a");
        link.classList.add("btn-add-to-favorite");

        const spanLink = document.createElement("span");
        spanLink.classList.add("material-symbols-outlined", "font-size-md");
        spanLink.innerText = "favorite";
        
        link.appendChild(spanLink);

        if(favorites) {
            const arrayFavorites = favorites.split(",")
            console.log(arrayFavorites);
            if(favorites.indexOf(String(this.id)) !== -1) {
                spanLink.classList.add("fill-icon");
                link.addEventListener("click", () => {
                    const deleteCartItemLclStrg = ProductCard.deleteCartItemLclStrg.bind(this);
                    deleteCartItemLclStrg("favorites");
                    link.setAttribute("href", `/favorites/remove/${this.id}`);
                });
            } else {
                link.addEventListener("click", () => {
                    const addCartItemLclStrg = ProductCard.addCartItemLclStrg.bind(this);
                    addCartItemLclStrg("favorites");
                    spanLink.classList.add("fill-icon");
                    link.setAttribute("href", `/favorites/${this.id}`);
                });
            }
        } else {
            link.addEventListener("click", () => {
                const addCartItemLclStrg = ProductCard.addCartItemLclStrg.bind(this);
                addCartItemLclStrg("favorites");
                spanLink.classList.add("fill-icon");
                link.setAttribute("href", `/favorites/${this.id}`);
            });
        }

        const btn = document.createElement("button");
        btn.classList.add("btn-add-to-cart");
        
        const span = document.createElement("span");
        span.classList.add("material-symbols-outlined", "font-size-md");
        span.innerText = "add_shopping_cart";

        btn.appendChild(span);

        btn.addEventListener("click", () => {
            const addCartItemLclStrg = ProductCard.addCartItemLclStrg.bind(this);
            addCartItemLclStrg("cart-items");
            messages("success", checkLanguage() === "ptBr"? "Produto adicionado com sucesso ao carrinho" : "Product successfully added to cart");
        });

        parent.appendChild(link);
        parent.appendChild(btn);

        return parent;
    }

    static addCartItemLclStrg(key) {
        let oldValue;
        oldValue = localStorageGet(key);

        if(oldValue === null) {
            localStorageSave(key, String(this.id));
            return;
        };

        localStorageSave(key, `${oldValue}, ${this.id}`);
    }

    static deleteCartItemLclStrg(key, deleteAll=false) {
        let oldValue;
        oldValue = localStorageGet(key);
        oldValue = String(oldValue);
        if(oldValue === null) return;

        oldValue = oldValue.split(',');
        oldValue = oldValue.map(value => value.trim());

        if(deleteAll) {
            oldValue = oldValue.filter((id, i) => {
                if(Number(id) !== this.id) {
                    return true;
                }
            });
        } else {
            oldValue.splice(oldValue.indexOf(String(this.id)), 1);
        }

        oldValue = oldValue.join(", ");

        if(!oldValue) {
            localStorageRemove(key);
        } else {
            localStorageSave(key, `${oldValue}`);
        }
    }

    get containerAndThumb() {
        const div = document.createElement("div");
        div.classList.add("container-thumbnail");

        const img = document.createElement("img");
        img.setAttribute("src", this.thumbnail);
        div.appendChild(img);

        return div;
    }

    get bottomInfos() {
        const div = document.createElement("div");
        div.classList.add("container-bottom-infos");

        const divTitle = document.createElement("div");
        divTitle.classList.add("container-title");
        const spanTitle = document.createElement("span");
        spanTitle.classList.add("normal-font", "font-size-base");
        spanTitle.innerText = this.title;
        divTitle.appendChild(spanTitle);

        const divPriceAndOthers = document.createElement("div");
        divPriceAndOthers.classList.add("container-price-and-others");
        const spanPrice = document.createElement("span");
        spanPrice.classList.add("span-price", "normal-font", "font-size-md");
        spanPrice.innerText = `$ ${this.price}`;
        const discount = document.createElement("span");
        discount.classList.add("discount", "normal-font");
        discount.innerText = `${this.discountPercentage}% OFF`;
        divPriceAndOthers.appendChild(spanPrice);
        divPriceAndOthers.appendChild(discount);

        div.appendChild(divTitle);
        div.appendChild(divPriceAndOthers);

        return div;
    }
}