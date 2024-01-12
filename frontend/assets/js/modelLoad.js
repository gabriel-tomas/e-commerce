export default class ModelLoad {
    constructor(modelClassName) {
        this.models = {
            productCard: `<div product-id="4" class="container-product ${modelClassName}-product-model-load product-model-load model-load"><a class="product-link" href="#"><div class="container-thumbnail"></div><div class="container-bottom-infos"><div class="container-title"><span class="normal-font font-size-base"></span></div><div class="container-price-and-others"><span class="span-price normal-font font-size-md"></span><span class="discount normal-font"></span></div></div></a></div>`,
        }
    }

    createModel(parent, quantity, model) {
        parent = document.querySelector(parent);
        for(let i = 0; i < quantity; i++) {
            parent.innerHTML += this.models[model];
        }
    }

    static disable(el) {
        const modelEls = document.querySelectorAll(el);

        modelEls.forEach(item => {
            item.style.display = "none";
        });
    }
}
