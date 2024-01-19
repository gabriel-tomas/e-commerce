(() => {
    const menuHelpAndConfiguration = document.querySelector(".menu-box > .help-configs > .options");
    const optionsHelpSettings = document.querySelector("header > .container-right > .help-settings > .options");
    const darkModeBtn = document.querySelector(".change-page-theme");

    window.matchMedia("(max-width: 744px)").addEventListener("change", (e) => {
        if(e.matches) {
            menuHelpAndConfiguration.insertAdjacentElement("afterbegin", darkModeBtn);
            darkModeBtn.querySelector("span").classList.remove("font-size-md");
            darkModeBtn.querySelector("span").classList.add("font-size-lg");
        } else {
            optionsHelpSettings.insertAdjacentElement("afterbegin", darkModeBtn);
            darkModeBtn.querySelector("span").classList.add("font-size-md");
            darkModeBtn.querySelector("span").classList.remove("font-size-lg");
        }
    });
})();