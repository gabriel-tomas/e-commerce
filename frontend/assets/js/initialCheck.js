import {localStorageGet} from "./localStorageSaverAndGet";
import darkMode from "./darkMode";
import changeThemeBtnStatus from "./header/changeThemeBtnStatus";

(() => {
    const checkDarkMode = () => {
        if(localStorageGet("darkMode") === true) {
            darkMode.on;
            changeThemeBtnStatus(true);
            return
        }
        darkMode.off;
        changeThemeBtnStatus(false);
    };
    checkDarkMode();

    const checkMenu = () => {
        const menuHelpAndConfiguration = document.querySelector(".menu-box > .help-configs > .options");
        const darkModeBtn = document.querySelector(".change-page-theme");
        if(window.matchMedia("(max-width: 744px)").matches) {
            menuHelpAndConfiguration.insertAdjacentElement("afterbegin", darkModeBtn);
            darkModeBtn.querySelector("span").classList.remove("font-size-md");
            darkModeBtn.querySelector("span").classList.add("font-size-lg");
        } else {
            darkModeBtn.querySelector("span").classList.add("font-size-md");
            darkModeBtn.querySelector("span").classList.remove("font-size-lg");
        }
    }
    checkMenu();
})();