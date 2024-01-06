import SectionTopic from '../createrSectionTopic';

export default class Filter extends SectionTopic {
    constructor(products) {
        super();
        this.products = products;
        this.outputProducts = null;
    }
    
    init() {
        this.getSelectValue();
    }

    getSelectValue() {
        const select = document.querySelector(".button.order");
        select.addEventListener("change", (e) => {
            const el = e.target;
            const value = el.value;
            if(value === "lower") {
                this.OrderByLower();
            } else if(value === "bigger") {
                this.OrderByBigger();
            }
            this.removeItemsOfParent(".products-layout");
            setTimeout(() => this.addToParent(".products-layout", this.outputProducts), 100);
        });
    }

    OrderByLower() {
        this.outputProducts = this.products.sort(function(a, b) {
            return a.price - b.price;
        });
    }

    OrderByBigger() {
        this.outputProducts = this.products.sort(function(a, b) {
            return b.price - a.price;
        });
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