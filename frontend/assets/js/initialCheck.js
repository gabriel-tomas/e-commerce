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
            menuHelpAndConfiguration.appendChild(darkModeBtn);
        }
    }
    checkMenu();
})();