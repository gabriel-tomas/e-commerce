(() => {
    const items = document.querySelector(".favorites-items-span").getAttribute("items").split(",");
    value = JSON.stringify(items);
    localStorage.setItem("favorites", value);
    document.querySelector(".favorites-items-span").remove();
})();