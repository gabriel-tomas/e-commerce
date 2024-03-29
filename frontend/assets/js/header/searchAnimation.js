(() => {
    const searchBtn = document.querySelector("header .search-btn");
    const searchBox = document.querySelector("header #search-box");
    const arrowRight = document.querySelector("header .right-arrow");

    window.matchMedia("(max-width: 744px)").addEventListener("change", e => {
        if(e.matches) {
            searchBox.style.width = "100%";
            searchBox.style.opacity = "1";
            searchBox.style.visibility = "visible";
        } else {
            searchBox.style.width = "0%";
            searchBox.style.opacity = "0";
            searchBox.style.visibility = "hidden";
        }
    });
    
    searchBtn.addEventListener("click", () => {
        if(!window.matchMedia("(max-width: 744px)").matches) {
            if(getComputedStyle(searchBox).visibility === "hidden") {
                searchBoxVisibility(true);
                changeOpacity(true, searchBox);
                changeOpacity(true, arrowRight);
                setTimeout(() => {changeOpacity(false, arrowRight)}, 150);
                searchBoxChangeWidth(true);
                arrowToRight();
            } else {
                searchBoxVisibility(false);
                changeOpacity(false, searchBox);
                changeOpacity(false, arrowRight);
                searchBoxChangeWidth(false);
                arrowToOriginal();
            }
        }
    });

    function searchBoxChangeWidth(change) {
       /*  if () {
            console.log(searchBox);
            window.getComputedStyle(searchBox).width;
            searchBox.style.width = "100%";
            return;
        } */
        change? searchBox.style.width = "70%" : searchBox.style.width = "0%";
    }

    function changeOpacity(opacity, el) {
        opacity? el.style.opacity = "1" : el.style.opacity = "0";
    }

    function searchBoxVisibility(visi) {
        visi? searchBox.style.visibility = "visible" : setTimeout(() => {searchBox.style.visibility = "hidden"}, 130);
    }

    function arrowToRight() {
        arrowRight.style.left = "130%";
    }

    function arrowToOriginal() {
        arrowRight.style.left = "0%";
    }
})();