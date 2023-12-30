import productsMethods from "../productApi";
import SectionTopic from '../createrSectionTopic';

(() => {
    class SectionTopRate extends SectionTopic {
        constructor() {
            super();
        }

        async create() {
            const allProducts = await this.getAllProducts();
            const filteredProducts = this.check45Rate(allProducts, 10);

            this.addToParent(".container-top-rated-products", filteredProducts);
        }

        getAllProducts() {
            return new Promise((resolve) => {
                productsMethods.getAllProducts(0, 100, products => {
                    resolve(products);
                });
            });
        }

        check45Rate(products, numberProducts = 10) {
            if(typeof numberProducts !== "number") {
                console.warn("numberProducts must be number");
                return;
            }

            products = products.products;

            let rates = 0;
            let valuesRates = 0;
            
            products.forEach(value => { 
                rates++;
                valuesRates += value.rating;
            });

            const media = valuesRates / rates;

            const allAboveAverage = products.filter((value) => {
                if(value.rating >= media) {
                    return true;
                }
            })

            const fromItem = Math.round(Math.random() * ((allAboveAverage.length - numberProducts) - 0)) + 0;
            const toItem = fromItem + numberProducts;

            return allAboveAverage.slice(fromItem, toItem);
        }
    }
    
    new SectionTopRate().create();
})();