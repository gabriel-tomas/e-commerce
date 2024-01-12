import SectionTopic from '../createrSectionTopic';

const firstToSet = {
    select: null,
    filter: null,
};
let selectValue;

export default class Filter extends SectionTopic {
    constructor(products) {
        super();
        this.products = products;
        this.outputProducts = null;
        this.parentProducts = ".products-layout";
    }
    
    init() {
        this.getSelectValue();
        this.getPriceRangeAndCategories();
    }

    getSelectValue() {
        const select = document.querySelector(".button.order");

        select.addEventListener("change", (e) => {
            if(firstToSet.filter === "first") {
                firstToSet.select = "second";
            } else {
                firstToSet.select = "first";
            }

            const value = e.target.value;
            selectValue = value;

            if(value === "lower") {
                this.OrderByLower();
            } else if(value === "bigger") {
                this.OrderByBigger();
            }
            this.removeItemsOfParent(this.parentProducts);
            setTimeout(() => this.addToParent(this.parentProducts, this.outputProducts), 100);
        });
    }

    setSearchInfos() {
        const quantityProducts = document.querySelector(".results-search > .results-p > .quantity-products");

        quantityProducts.innerHTML = this.outputProducts.length;
    }

    OrderByLower() {
        let products = this.products;

        if(this.outputProducts) {
            products = this.outputProducts;
        }

        this.outputProducts = products.sort(function(a, b) {
            return a.price - b.price;
        });
    }

    OrderByBigger() {
        let products = this.products;
        
        if(this.outputProducts) {
            products = this.outputProducts;
        }

        this.outputProducts = products.sort(function(a, b) {
            return b.price - a.price;
        });
    }

    getPriceRangeAndCategories() {
        const applyBtn = document.querySelector(".apply-filters");
        const minPriceInput = document.querySelector("#min-price");
        const maxPriceInput = document.querySelector("#max-price");
        const boxFilter = document.querySelector(".filter-additional-box");
        const btnFilter = document.querySelector(".button.filter");
        const select = document.querySelector(".button.order");

        applyBtn.addEventListener("click", () => {
            const [minPrice, maxPrice] = orderPrice();

            const productsMinMaxPrice = this.getProductsPriceRange(minPrice, maxPrice);
            if(!productsMinMaxPrice) {
                var categoriesItems = this.getCategoriesSelected(false);
            } else {
                var categoriesItems = this.getCategoriesSelected();
            }

            if(!minPrice && !maxPrice && !categoriesItems) return;

            if(firstToSet.select === "first") {
                firstToSet.filter = "second";
            } else {
                firstToSet.filter = "first";
            }

            if(firstToSet.filter === "first" && firstToSet.select === "second") {
                select.value = "disabled";
            }

            if(productsMinMaxPrice && categoriesItems) {
                this.outputProducts = this.getProductsRangeAndCategories(productsMinMaxPrice, categoriesItems);
            } else if(productsMinMaxPrice) {
                this.outputProducts = productsMinMaxPrice;
            } else if(categoriesItems) {
                this.outputProducts = categoriesItems;
            }

            // reorder products to what the user selected
            if(firstToSet.filter === "second" && firstToSet.select === "first") {
                if(selectValue === "lower") {
                    select.value = "lower";
                    this.OrderByLower();
                } else if(selectValue === "bigger") {
                    select.value = "bigger";
                    this.OrderByBigger();
                }
            }

            if(this.outputProducts === null) return;

            this.removeItemsOfParent(this.parentProducts);
            setTimeout(() => this.addToParent(this.parentProducts, this.outputProducts), 100);
            boxFilter.style.visibility = "hidden";
            btnFilter.removeAttribute("style");
        });

        function orderPrice() {
            let minPrice = Number(minPriceInput.value);
            let maxPrice = Number(maxPriceInput.value);
            if(typeof minPrice !== "number" && typeof maxPrice !== "number") return;
            if(!minPrice && !maxPrice) {
                minPrice = 0;
                maxPrice = 0;
                return [minPrice, maxPrice];
            }
            else if(!minPrice) minPrice = 0;
            else if(!maxPrice) maxPrice = 0;
            if(minPrice !== 0 && maxPrice !== 0 && minPrice > maxPrice) {
                const [minPriceTemp, maxPriceTemp] = [minPrice, maxPrice];
                minPrice = maxPriceTemp;
                maxPrice = minPriceTemp;
                minPriceInput.value = maxPriceTemp;
                maxPriceInput.value = minPriceTemp;
            }

            return [minPrice, maxPrice];
        }
    }

    getProductsRangeAndCategories(products, categories) {
        const finalArray = [];
        categories.forEach(category => {
            products.forEach(product => {
                if(product.category === category) finalArray.push(product);
            });
        });
        return finalArray;
    }

    getProductsPriceRange(min, max) {
        const products = [];

        if(!min && !max) return;
        if(min && max) {
            this.products.forEach(product => {
                if(product.price >= min && product.price <= max) {
                    products.push(product);
                }
            });
        } else if(min) {
            this.products.forEach(product => {
                if(product.price >= min) {
                    products.push(product);
                }
            });
        } else if(max) {
            this.products.forEach(product => {
                if(product.price <= max) {
                    products.push(product);
                }
            });
        }

        return products.length === 0? false : products;
    }

    getCategoriesSelected(categories=true) {
        const checkboxCategories = document.querySelectorAll(".checkbox-category");
        const categoriesItems = [];
        const categoriesProducts = [];

        checkboxCategories.forEach(checkboxCategory => {
            if(checkboxCategory.checked) {
                categoriesItems.push(checkboxCategory.value);
            }
        });

        if(!categories) {
            categoriesItems.forEach(category => {
                this.products.forEach(product => {
                    if(product.category === category) {
                        categoriesProducts.push(product);
                    }
                });
            });
            return categoriesProducts.length === 0? false : categoriesProducts;
        }

        return categoriesItems.length === 0? false : categoriesItems;
    }

    getAllCategories() {
        let array = [];
        this.products.forEach(value => {
            const category = value.category;
            if(categoriesAdded.indexOf(category) !== -1) return;
            array.push(category);
        });
        return array;
    }
}