import productsMethods from '../productApi';
import SectionTopic from '../createrSectionTopic';

(() => {
    class ItemSearch extends SectionTopic {
        constructor() {
            super();
            this.errors = [];
            this.searchItem = null;
        }

        async create() {
            this.getSearchItem();
            if(this.errors.length > 0) return;

            const products = await this.getItems();
            this.addToParent(".search-items", products.products);
        }

        getSearchItem() {
            this.searchItem = new URLSearchParams(window.location.search).get("q");
            if(!this.searchItem) this.errors.push("Item must be submited");
            if(typeof this.searchItem !== "string") this.errors.push("Item must be a String");
        }

        getItems() {
            return new Promise((resolve) => {
                productsMethods.setSearchProducts(this.searchItem, products => {
                    resolve(products);
                });
            });
        }
    }

    new ItemSearch().create();
})();