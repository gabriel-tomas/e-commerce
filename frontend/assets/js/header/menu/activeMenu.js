(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuBox = document.querySelector(".menu-box");
    const backBlocker = document.querySelector(".back-blocker");
    const containerLeft = document.querySelector(".container-left");

    menuBtn.addEventListener("click", () => {
        menuBox.classList.toggle("active");
        backBlocker.classList.toggle("active");
        if(menuBtn.parentElement.classList.contains("container-left")) {
            menuBox.appendChild(menuBtn);
            document.body.classList.toggle("body-disabled");
        } else {
            containerLeft.appendChild(menuBtn);
            document.body.classList.toggle("body-disabled");
        }
    });
})();