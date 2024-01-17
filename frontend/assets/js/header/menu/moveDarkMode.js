(() => {
    const menuHelpAndConfiguration = document.querySelector(".menu-box > .help-configs > .options");
    const containerRight = document.querySelector("header > .container-right");
    const darkModeBtn = document.querySelector(".change-page-theme");

    window.matchMedia("(max-width: 744px)").addEventListener("change", (e) => {
        if(e.matches) {
            menuHelpAndConfiguration.insertAdjacentElement("afterbegin", darkModeBtn);
        } else {
            containerRight.insertAdjacentElement("afterbegin", darkModeBtn);
        }
    });
})();