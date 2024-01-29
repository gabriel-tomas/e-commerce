import productsMethods from "../productApi";
import Product from "./product";
import ModelLoad from "../modelLoad";

(() => {
    const productId = new URLSearchParams(window.location.search).get("id");
    if(!productId) return;
    if(typeof productId !== "string") return;

    /* productsMethods.getComments("30", res => {
        console.log(res);
    }); */
    
    productsMethods.getSingleProduct(productId, res => {
        const product = new Product(res);
        product.create();
        ModelLoad.productDisable();
    });
})();