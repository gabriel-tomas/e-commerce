import summary from "../summary/Summary.js";
import ProductCard from '../../productCard.js';
import checkCart from '../checkCart.js';
import messages from "../../messages.js";
import checkLanguage from "../../checkLanguage.js";

export default class CartProductCard extends ProductCard {
    constructor(product, quantity = 1) {
        super(product);
        this.brand = product.brand;
        this.quantity = quantity;
        this.totalPrice = this.price * this.quantity;
        this.parentCartProduct = null;
    }

    create() {
        this.parentCartProduct = this.divTableParent;
        const trAndThs = this.trAndThs;
        const trAndTds = this.trAndTds;

        this.parentCartProduct.querySelector("table").appendChild(trAndThs);
        this.parentCartProduct.querySelector("table").appendChild(trAndTds);

        this.addToParent(this.parentCartProduct);
    }

    addToParent(product) {
        const itemsCart = document.querySelector(".items-cart");

        itemsCart.appendChild(product);
    }

    get divTableParent() {
        const div = document.createElement("div");
        div.classList.add("item-cart");
        div.setAttribute("product-id", this.id);

        const table = document.createElement("table");
        table.classList.add("table-product");

        div.appendChild(table);

        return div;
    }

    get trAndThs() {
        const tr = document.createElement("tr");
        tr.classList.add("row-headers");
        const headersTitles = ["Product", "Quantity", "Price"];
        for(let i = 0; i < 3; i++) {
            const th = document.createElement("th");
            th.classList.add("font-size-sm", "font-wght-700");
            th.innerText = headersTitles[i];
            tr.appendChild(th);
        }

        return tr;
    }

    get trAndTds() {
        const tr = document.createElement("tr");
        tr.classList.add("row-datas");

        const product = () => {
            const tdProduct = document.createElement("td");
            tdProduct.classList.add("td-product");

            const divImg = document.createElement("div");
            divImg.classList.add("divImg");
            const img = document.createElement("img");
            img.setAttribute("src", this.thumbnail);
            divImg.appendChild(img);

            const divTitle = document.createElement("div");
            divTitle.classList.add("div-title");
            const h3 = document.createElement("h3");
            h3.classList.add("font-normal", "font-size-base", "font-wght-700");
            h3.innerText = this.title;
            divTitle.appendChild(h3);

            const divBrand = document.createElement("div");
            divBrand.classList.add("div-brand");
            const span = document.createElement("span");
            span.classList.add("font-normal", "font-size-base")
            span.innerText = this.brand;
            divBrand.appendChild(span);

            tdProduct.appendChild(divImg);
            tdProduct.appendChild(divTitle);
            tdProduct.appendChild(divBrand);

            return tdProduct;
        }

        const updatePriceAndSummary = (method, removeAll=false) => {
            if(method === "add") {
                const addCartItemLclStrg = ProductCard.addCartItemLclStrg.bind(this);
                addCartItemLclStrg("cart-items");
                summary.updateTotal("add", this.price);
                summary.updateSummary();
            } else if(method === "remove") {
                const deleteCartItemLclStrg = ProductCard.deleteCartItemLclStrg.bind(this);
                deleteCartItemLclStrg("cart-items", removeAll);
                if(removeAll) {
                    checkCart();
                    var price = this.totalPrice;
                } else {
                    var price = this.price
                }
                summary.updateTotal("remove", price);
                summary.updateSummary();
            }
            
        }
        
        const quantity = () => {
            const updateQuantityElText = function() {
                spanQuantity.innerText = this.quantity;
            }.bind(this);

            const updateTotalPriceElText = function() {
                this.tagPTotal.innerText = `Total: $ ${this.totalPrice}`;
            }.bind(this);

            const updateSpanTimesElText = function() {
                this.spanTimes.innerText = `${this.quantity}x`;
            }.bind(this);
            
            const tdQuantity = document.createElement("td");
            tdQuantity.classList.add("td-quantity");

            const btnMinus = document.createElement("button");
            btnMinus.classList.add("btn-minus-product", "font-size-base");
            btnMinus.innerText = "-";
        
            const spanQuantity = document.createElement("span");
            spanQuantity.classList.add("span-quantity", "font-size-base");
            updateQuantityElText();

            const btnPlus = document.createElement("button");
            btnPlus.classList.add("btn-plus-product", "font-size-base");
            btnPlus.innerText = "+";

            const addRemoveProduct = function(func) {
                if(func === "add") {
                    if(this.quantity > 0) {
                        btnMinus.style.pointerEvents = "all";
                    };
                    this.quantity++;
                    this.totalPrice = this.price * this.quantity;
                    updateTotalPriceElText();
                    updateQuantityElText();
                    updateSpanTimesElText();
                    updatePriceAndSummary("add");

                } else if(func === "remove") {
                    if(this.quantity <= 1) {
                        btnMinus.style.pointerEvents = "none";
                        return;
                    };
                    this.quantity--;
                    this.totalPrice = this.price * this.quantity;
                    updateTotalPriceElText();
                    updateQuantityElText();
                    updateSpanTimesElText();
                    updatePriceAndSummary("remove");
                }
            }.bind(this);

            btnMinus.addEventListener("click", () => {addRemoveProduct("remove")});
            btnPlus.addEventListener("click", () => {addRemoveProduct("add")});

            tdQuantity.appendChild(btnMinus);
            tdQuantity.appendChild(spanQuantity);
            tdQuantity.appendChild(btnPlus);

            return tdQuantity;
        }

        const price = () => {
            const tdPrice = document.createElement("td");
            tdPrice.classList.add("td-price");

            const pValueTimes = document.createElement("p");
            pValueTimes.classList.add("font-size-base")
            this.spanTimes = document.createElement("span");
            this.spanTimes.innerText = `${this.quantity}x`;
            pValueTimes.innerText += ` $ ${this.price}`;
            pValueTimes.insertAdjacentElement('afterbegin', this.spanTimes);

            this.tagPTotal = document.createElement("p");
            this.tagPTotal.classList.add("p-total", "font-size-base");
            this.tagPTotal.innerText = `Total: $ ${this.totalPrice}`;

            tdPrice.appendChild(pValueTimes);
            tdPrice.appendChild(this.tagPTotal);

            return tdPrice;
        }

        const deleteItem = () => {
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-item-btn");

            const spanIconDelete = document.createElement("span");
            spanIconDelete.classList.add("material-symbols-outlined", "font-wght-300");
            spanIconDelete.innerText = "delete_forever";

            deleteBtn.appendChild(spanIconDelete);

            deleteBtn.addEventListener("click", () => {
                this.parentCartProduct.remove();
                updatePriceAndSummary("remove", true);
                messages("success", checkLanguage() === "ptBr"? "Produto removido com sucesso" : "Product removed successfully")
            });

            return deleteBtn;
        }

        tr.appendChild(product());
        tr.appendChild(quantity());
        const tdPrice = price();
        tdPrice.appendChild(deleteItem());
        tr.appendChild(tdPrice);

        return tr;
    }
}


