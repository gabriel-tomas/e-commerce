/* import productsMethods from "./productApi"; */
import ProductCard from "./productCard";

export default class SectionTopic {
    constructor(products = null) {
        this.products = products;
        this.queryItem = null;
        this.filter = null;
        this.productsDelivery = null;
    }

    addToParent(parent, productsToAdd) {
        if(typeof parent !== "string") console.warn("parent must be a string css selector");

        parent = document.querySelector(parent);

        const loadProducts = document.querySelector(".load-products")
        
        if(productsToAdd.length <= 10) {
            productsToAdd.forEach(product => {
                parent.appendChild(new ProductCard(product).create());
            });
            loadProducts.style.display = "none";
            return;
        }

        loadProducts.style.display = "block";
        this.productsDelivery = productsToAdd;
        this.addFirst10Products(parent);
        loadProducts.addEventListener("click", () => this.deliveryProducts(parent));
    }

    removeItemsOfParent(parent) {
        parent = document.querySelector(parent);
        
        parent.innerHTML = "";
    }

    addFirst10Products(parent) {
        const first10 = this.productsDelivery.slice(0, 10);
        this.productsDelivery.splice(0, 10);
        first10.forEach(product => {
            parent.appendChild(new ProductCard(product).create());
        });
    }

    setSearchInfos() {
        const searchWord = document.querySelector(".results-search > .results-p > .search-word");
        const quantityProducts = document.querySelector(".results-search > .results-p > .quantity-products");

        searchWord.innerHTML = this.queryItem;
        quantityProducts.innerHTML = this.products.length;
    }

    deliveryProducts(parent) {
        this.addFirst10Products(parent);

        if(this.productsDelivery.length <= 0) {
            document.querySelector(".load-products").style.display = "none";
            return;
        }
    }
}
