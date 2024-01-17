(() => {
    const menuHelpAndConfiguration = document.querySelector(".menu-box > .help-configs > .options");
    const optionsHelpSettings = document.querySelector("header > .container-right > .help-settings > .options");
    const darkModeBtn = document.querySelector(".change-page-theme");

    window.matchMedia("(max-width: 744px)").addEventListener("change", (e) => {
        if(e.matches) {
            menuHelpAndConfiguration.insertAdjacentElement("afterbegin", darkModeBtn);
        } else {
            optionsHelpSettings.insertAdjacentElement("afterbegin", darkModeBtn);
        }
    });
})();