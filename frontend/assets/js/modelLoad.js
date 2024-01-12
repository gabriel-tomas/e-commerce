export default class ModelLoad {
    static createModel(parent, quantity) {
        parent = document.querySelector(parent);
        for(let i = 0; i < quantity; i++) {
            parent.innerHTML += `<div product-id="4" class="container-product for-you-product-model-load"><a class="product-link" href="#"><div class="container-thumbnail"></div><div class="container-bottom-infos"><div class="container-title"><span class="normal-font font-size-base"></span></div><div class="container-price-and-others"><span class="span-price normal-font font-size-md"></span><span class="discount normal-font"></span></div></div></a></div>`
        }
    }

    static disable(el) {
        const modelEls = document.querySelectorAll(el);

        modelEls.forEach(item => {
            item.style.display = "none";
        });
    }
}

// for you
ModelLoad.createModel(".for-you-products", 3);
