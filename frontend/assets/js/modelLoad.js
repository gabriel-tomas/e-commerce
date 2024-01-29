export default class ModelLoad {
    static disable(el) {
        const modelEls = document.querySelectorAll(el);

        modelEls.forEach(item => {
            item.remove();
        });
    }

    static productDisable() {
        function leftContent() {
            const topContentPaths = document.querySelectorAll(".top-content > a.model-load");
            const thumbnail = document.querySelector(".product-item .left-content .main-img.model-load");
            const thumbnailImgInside = document.querySelector(".product-item .left-content .main-img > img");
            const galleryItems = document.querySelectorAll(".product-item .left-content .gallery-imgs > .gallery-item.model-load");
    
            thumbnailImgInside.classList.remove("desactive");
            thumbnail.classList.remove("model-load");
            topContentPaths.forEach(link => {
                link.classList.remove("model-load");
            });
            galleryItems.forEach(button => {
                button.remove();
            });
        }

        function rightContent() {
            const title = document.querySelector(".product-item .right-content .container-title.model-load");
            const description = document.querySelector(".product-item .right-content .container-description.model-load");
            const rating = document.querySelector(".product-item .right-content .container-rating.model-load");
            const price = document.querySelector(".product-item .right-content .container-price .price > .value.model-load");
            const discount = document.querySelector(".product-item .right-content .container-price .discount > .value.model-load");
            const stock = document.querySelector(".product-item .right-content .container-stock > span > .value.model-load");
            
            title.classList.remove("model-load");
            description.classList.remove("model-load");
            rating.classList.remove("model-load");
            price.classList.remove("model-load");
            discount.classList.remove("model-load");
            stock.classList.remove("model-load");
        }

        leftContent();
        rightContent();
    }
}
