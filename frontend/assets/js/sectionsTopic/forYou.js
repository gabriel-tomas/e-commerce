import productsMethods from "../productApi";
import {localStorageGet} from "../localStorageSaverAndGet";
import SectionTopic from '../createrSectionTopic';
import Filter from '../filter/filter';
import FilterAditional from '../filter/filterAditional';

(() => {
    class ForYou extends SectionTopic {
        constructor() {
            super([]);
            Object.defineProperty(this, "interests", {
                enumerable: true,
                configurable: false,
                get: function() {
                    return localStorageGet("interestedItems");
                }
            });
        }

        async create() {
            let allProducts = null;

            if(window.location.pathname === "/foryou") {
                // this.products = await this.separateInterestItems(this.interests, 300);
                this.queryItem = "For You";
                var parent = ".search-items";
                allProducts = true;
            } else {
                var parent = ".for-you-products";
            }

            if(this.interests) {
                this.products = await this.separateInterestItems(this.interests, allProducts);
            } else {
                const interests = await this.randomCategories();
                this.products = await this.separateInterestItems(interests, allProducts);
            }

            if(window.location.pathname === "/foryou") {
                this.filter = new Filter(this.products);
                this.filter.init();
                FilterAditional.addCategories(this.filter.products);
                this.setSearchInfos();
            }
            
            this.addToParent(parent, this.products);
        }

        randomCategories() {
            function getRandom(max) {
                return Math.round(Math.random() * (max - 0) + 0);
            }

            return new Promise((resolve, reject) => {
                let arrayRandomCategories = [];
                productsMethods.getAllCategories(categories => {
                    for(let i = 0; i < 4; i++) {
                        const randomValue = getRandom(categories.length);
                        if(categories[randomValue]) arrayRandomCategories.push(categories[randomValue]);
                    }
                    resolve(arrayRandomCategories);
                });
            });
        }
        
        separateInterestItems(array, allProducts = false)  {
            const rands = [randNum(), randNum(), randNum(), randNum(), randNum()]
            const maxProductToAdd = 5;
            let numRand = 0;

            function getCategoryProducts(category) {
                let products = [];
                return new Promise((resolve) => {
                    productsMethods.setCategoryProducts(category, e => {
                        if(allProducts) {
                            for(let product in e.products) {
                                products.push(e.products[Number(product)]);
                            }
                        } else {
                            for(let product in e.products) {
                                if(Number(product) === rands[numRand]) {
                                    products.push(e.products[Number(product)]);
                                    numRand++;
                                    if(numRand === maxProductToAdd) break;
                                };
                            }

                        }
                        resolve(products);
                    });
                });
            }

            async function getCategory(categories) {
                let allProducts = [];
                for(let category of categories) {
                    const products = await getCategoryProducts(category);
                    allProducts.push(...products);
                }
                return allProducts;
            }

            function randNum() {
                return Math.round(Math.random() * (4 - 0) + 0);
            }

            return getCategory(array);
        }

        // addProductCard(productObj) {
        //     console.log(productObj);
        //     const forYouProducts = document.querySelector();
        //     const product = new ProductCard(productObj).create();
        //     forYouProducts.appendChild(product);
        // }
    }

    // starter
    new ForYou().create();
})();
