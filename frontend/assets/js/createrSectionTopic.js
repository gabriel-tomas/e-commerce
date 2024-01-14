/* import productsMethods from "./productApi"; */
import productsMethods from "./productApi";
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

        const loadProducts = document.querySelector(".load-products");
        
        if(productsToAdd.length <= 10) {
            productsToAdd.forEach(product => {
                parent.appendChild(new ProductCard(product).create());
            });

            if(loadProducts) {
                loadProducts.style.display = "none";
            }
            
            return;
        }

        if(!loadProducts && productsToAdd.length > 10) {
            productsToAdd.forEach(product => {
                parent.appendChild(new ProductCard(product).create());
            });
            console.warn("please add the load-products button to make product delivery more efficient or reduce the quantity of products to 10");
            return;
        }

        loadProducts.style.display = "block";
        this.productsDelivery = [...productsToAdd];
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

    // About getAllProducts
    // get all items, randomizes them and filter(you create the filter) them
    // and return all products filtered and randomized.

    // Parameters
    // limit = limit of products for filtered search  |  quantityProducts = expected quantity of products 
    // filter = will be created in class inherited from SectionTopic - filter products by rating, stock... 

    // When will these parameters be sent?
    // these parameters will be sent in the create function that will be created in the class inherited from SectionTopic
    

    static getAllProducts(limit, quantityProducts, filter) {
        if(typeof limit !== "number") {
            console.warn("limit must be number");
            return;
        }

        return new Promise((resolve) => { 
            productsMethods.getAllProducts(0, limit, products => {
                products = products.products;
                
                const itemsRandomized = SectionTopic.randomizeProducts([...products]);

                const itemFiltered = filter(itemsRandomized, quantityProducts);

                resolve(itemFiltered);
            });
        });
    }

    static randomizeProducts(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}
