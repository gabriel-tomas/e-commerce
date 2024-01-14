import SectionTopic from '../createrSectionTopic';
import ModelLoad from "../modelLoad";

(() => {
    class SectionTopRate extends SectionTopic {
        constructor() {
            super();
        }
        
        async create(limit, quantityProducts) {
            this.products = await SectionTopRate.getAllProducts(limit, quantityProducts, this.filterItems);

            this.addToParent(".container-top-rated-products", this.products);
            ModelLoad.disable(".top-rated-product-model-load");
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
    
    new SectionTopRate().create(20, 9);
})();