import productsMethods from '../productApi';
import ProductCard from '../productCard';

(() => {
    const searchItem = new URLSearchParams(window.location.search).get("q");
    if(!searchItem) return;
    if(typeof searchItem !== "string") return;
    
    productsMethods.setSearchProducts(searchItem, res => {
        res.products.forEach(product => {
            addToPage(new ProductCard(product).create());
        });
    })

    function addToPage(item) {
        const searchItemsContainer = document.querySelector(".search-items");

        searchItemsContainer.appendChild(item);
    }
})();