import productsMethods from '../productApi';
import SectionTopic from '../createrSectionTopic';

(() => {
    class Products extends SectionTopic {
        constructor() {
            super();
            this.errors = [];
            this.queryItem = null;
            this.query = null;
        }

        async create() {
            this.getQueryItem();
            if(this.errors.length > 0) return;

            const products = await this.getItems();
            if(products.products.length === 0) {
                document.querySelector("section.not-found").style.display = "block";
                document.querySelector("section.products-layout").style.display = "none";
                return;
            }
            this.addToParent(".search-items", products.products);
        }

        getQueryItem() {
            if(window.location.pathname === "/search") {
                this.queryItem = new URLSearchParams(window.location.search).get("q");
                this.query  = "search";
            } else if(window.location.pathname === "/category") {
                this.queryItem = new URLSearchParams(window.location.search).get("q");
                this.query  = "category";
            }
            if(!this.queryItem) this.errors.push("Item must be submited");
            if(typeof this.queryItem !== "string") this.errors.push("Item must be a String");
        }

        getItems() {
            if(this.query === "search") {
                return new Promise((resolve) => {
                    productsMethods.setSearchProducts(this.queryItem, products => {
                        resolve(products);
                    });
                });
            } else if(this.query === "category") {
                return new Promise((resolve) => {
                    productsMethods.setCategoryProducts(this.queryItem, products => {
                        resolve(products);
                    });
                });
            }
        }
    }

    new Products().create();
})();