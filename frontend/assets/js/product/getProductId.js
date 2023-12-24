import productsMethods from "../productApi";
import Product from "./product";

(() => {
    const productId = new URLSearchParams(window.location.search).get("id");
    if(!productId) return;
    if(typeof productId !== "string") return;
    
    productsMethods.getSingleProduct(productId, res => {
        const product = new Product(res);
        product.create();
    });
})();