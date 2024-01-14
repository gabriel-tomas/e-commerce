import SectionTopic from '../createrSectionTopic';
import ModelLoad from "../modelLoad";

(() => {
    class SectionBestSellers extends SectionTopic {
        constructor() {
            super();
        }
        
        async create(limit, quantityProducts) {
            this.products = await SectionBestSellers.getAllProducts(limit, quantityProducts, this.filterItems);

            this.addToParent(".container-best-sellers-products", this.products);
            ModelLoad.disable(".best-seller-product-model-load");
        }

        filterItems(products, quantityProducts) {
            if(typeof quantityProducts !== "number") {
                console.warn("quantityProducts must be number");
                return;
            }

            let stocks = 0;
            let valuesStocks = 0;

            products.forEach(value => { 
                stocks++;
                valuesStocks += value.stock;
            });

            const media = valuesStocks / stocks;
            const outOfStockValue = media / 2

            const outOfStockItems = products.filter((value) => {
                if(quantityProducts === 0) {
                    return;
                }

                if(value.stock <= outOfStockValue) {
                    quantityProducts--;
                    return true;
                }
            });

            return outOfStockItems;
        }
    }
    
    new SectionBestSellers().create(45, 9);
})();