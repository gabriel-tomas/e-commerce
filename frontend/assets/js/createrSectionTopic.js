/* import productsMethods from "./productApi"; */
import ProductCard from "./productCard";

export default class SectionTopic {
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
}
