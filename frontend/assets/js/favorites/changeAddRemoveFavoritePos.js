(() => {
    const containersAddRemoveCartFavorite = document.querySelectorAll(".container-add-remove-cart-favorite");
    const containersProductFavorite = document.querySelectorAll(".container-product-favorite");
    const containersPriceInfo = document.querySelectorAll(".container-product-favorite > .container-price-info");

    window.matchMedia("(max-width: 466px)").addEventListener("change", (e) => {
        if(e.matches) {
            containersAddRemoveCartFavorite.forEach((el, i) => {
                containersProductFavorite[i].appendChild(el);
            });
        } else {
            containersAddRemoveCartFavorite.forEach((el, i) => {
                containersPriceInfo[i].appendChild(el);
            });
        }
    });
})();