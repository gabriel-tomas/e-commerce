/* import productsMethods from "./productApi"; */
import ProductCard from "./productCard";

export default class SectionTopic {
    constructor(products = null) {
        this.products = products;
        this.queryItem = null;
        this.filter = null;
    }

    addToParent(parent, productsToAdd) {
        if(typeof parent !== "string") console.warn("parent must be a string css selector");

        parent = document.querySelector(parent);

        productsToAdd.forEach(product => {
            parent.appendChild(new ProductCard(product).create());
        });
    }

    removeItemsOfParent(parent) {
        parent = document.querySelector(parent);
        
        parent.innerHTML = "";
    }

    setSearchInfos() {
        const searchWord = document.querySelector(".results-search > .results-p > .search-word");
        const quantityProducts = document.querySelector(".results-search > .results-p > .quantity-products");

        searchWord.innerHTML = this.queryItem;
        quantityProducts.innerHTML = this.products.length;
    }
}
