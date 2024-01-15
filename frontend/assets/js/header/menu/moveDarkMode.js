(() => {
    const menuBox = document.querySelector(".menu-box");
    const containerRight = document.querySelector("header > .container-right");
    const darkModeBtn = document.querySelector(".change-page-theme");

    window.matchMedia("(max-width: 744px)").addEventListener("change", (e) => {
        if(e.matches) {
            menuBox.appendChild(darkModeBtn);
        } else {
            containerRight.insertAdjacentElement("afterbegin", darkModeBtn);
        }
    });
})();