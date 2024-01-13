import productsMethods from "./productApi";
import ModelLoad from "./modelLoad";

(() => {
    function createCategory(text) {
        (function create() {
            const containerCategories = document.querySelector(".container-categories");
            const tree = createTreeEl();
    
            containerCategories.appendChild(tree);
            ModelLoad.disable(".category-category-model-load");
        })();
    
        function createTreeEl() {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("container-category");
            const link = document.createElement("a");
            link.classList.add("link-category", "font-size-base", "font-wght-400");
            link.innerText = text;
            link.setAttribute("href", `/category?q=${text}`);
            parentDiv.appendChild(link);
            return parentDiv;
        }
    }
    
    productsMethods.getAllCategories((e) => {
        e.forEach(value => {
            createCategory(value);
        });
    })
})()