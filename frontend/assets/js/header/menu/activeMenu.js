(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuBox = document.querySelector(".menu-box");
    const menuHeader = document.querySelector(".menu-box > .menu-header");
    const backBlocker = document.querySelector(".back-blocker");
    const containerLeft = document.querySelector(".container-left");

    menuBtn.addEventListener("click", () => {
        menuBox.classList.toggle("active");
        backBlocker.classList.toggle("active");
        if(menuBtn.parentElement.classList.contains("container-left")) {
            menuHeader.insertAdjacentElement("afterbegin", menuBtn);
            document.body.classList.toggle("body-disabled");
            menuBtn.querySelector("span").innerText = "close";
            menuBtn.querySelector("span").classList.add("font-size-xl");
        } else {
            containerLeft.appendChild(menuBtn);
            document.body.classList.toggle("body-disabled");
            menuBtn.querySelector("span").innerText = "menu";
            menuBtn.querySelector("span").classList.remove("font-size-xl");
        }
    });
})();