import SectionTopic from '../createrSectionTopic';
import ModelLoad from "../modelLoad";

(() => {
    class SectionBestSellers extends SectionTopic {
        constructor() {
            super();
        }

        async create() {
            this.products = await SectionBestSellers.getAllProducts(20, 9, this.filterItems);

            console.log(this.products);

            this.addToParent(".container-best-sellers-products", this.products);
            ModelLoad.disable(".best-seller-product-model-load");
        }

        filterItems(products, quantityProducts) {
            if(typeof quantityProducts !== "number") {
                console.warn("quantityProducts must be number");
                return;
            }

            let rates = 0;
            let valuesRates = 0;

            products.forEach(value => { 
                rates++;
                valuesRates += value.rating;
            });

            const media = valuesRates / rates;

            const allAboveAverage = products.filter((value) => {
                if(quantityProducts === 0) {
                    return;
                }

                if(value.rating >= media) {
                    quantityProducts--;
                    return true;
                }
            });

            return allAboveAverage;
        }
    }
    
    new SectionBestSellers().create();
})();