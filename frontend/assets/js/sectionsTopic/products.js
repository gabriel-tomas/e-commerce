import productsMethods from '../productApi';
import SectionTopic from '../createrSectionTopic';
import Filter from '../filter/filter';
import FilterAditional from '../filter/filterAditional';
import ModelLoad from "../modelLoad";

(() => {
    class Products extends SectionTopic {
        constructor() {
            super();
            this.errors = [];
            this.query = null;
        }

        async create() {
            this.getQueryItem();
            if(this.errors.length > 0) {
                console.log(this.errors);
                return;
            };

            const products = await this.getItems();
            
            if(!this.productNotFound(products)) return;

            this.products = products.products;

            this.addToParent(".search-items", this.products);
            ModelLoad.disable(".product-product-model-load");

            // filter
            this.filter = new Filter(this.products);
            this.filter.init();
            FilterAditional.addCategories(this.filter.products);
            this.setSearchInfos();
        }

        productNotFound(products) {
            if(products.products.length === 0) {
                document.querySelector("section.not-found").style.display = "block";
                document.querySelector("section.products-layout").style.display = "none";
                document.querySelector("div.results-search").style.display = "none";
                document.querySelector("div.filter-options").style.display = "none";
                return false;
            }
            return true;
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