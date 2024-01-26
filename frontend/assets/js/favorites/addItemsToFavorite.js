import ModelLoad from "../modelLoad";

(async () => {
    const elFavoritesItemsAttribute = document.querySelector(".favorites-items-span").getAttribute("items");
    const items = elFavoritesItemsAttribute.split(",");

    if(!elFavoritesItemsAttribute) {
        ModelLoad.disable(".model-load-product-favorite");
        return;
    }

    const products = [];
    for(let item of items) {
        const requestItem = await fetch(`https://dummyjson.com/products/${item}`);
        const product = await requestItem.json();
        products.push(product);
    }

    for(let product of products) {
        document.querySelector(".container-products-favorites").innerHTML += `
        <div class="container-product-favorite">
            <div class="container-img">
                <img src=${product.thumbnail} alt=${product.title}>
            </div>
            <div class="container-product-info">
                <div class="title">
                    <h1 class="font-size-base"> ${product.title} </h1>
                </div>
                <div class="description">
                    <p class="font-size-base">${product.description}</p>
                </div>
                <div class="brand">
                    <p class="font-size-sm">${product.brand}</p>
                </div>
            </div>
            <div class="container-price-info">
                <div class="price">
                    <p class="last-price font-size-base"><s>$ ${(((product.discountPercentage / 100) * product.price) + product.price).toFixed(2)}</s></p>
                    <p class="newer-price font-size-base">$ ${product.price} <span class="font-size-sm">${product.discountPercentage}% OFF</span></p>
                </div>
                <div class="container-add-remove-cart-favorite">
                    <a class="btn-remove-favorite" href="/favorites/remove/${product.id}" removeid="${product.id}">
                        <span class="material-symbols-outlined font-size-md fill-icon">favorite</span>
                    </a>
                    <button class="btn-add-to-cart favorites">
                        <span class="material-symbols-outlined font-size-md">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>`
    }
    document.querySelector(".favorites-items-span").remove();
    ModelLoad.disable(".model-load-product-favorite");
})();