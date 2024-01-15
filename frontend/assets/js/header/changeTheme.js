import {localStorageSave} from "../localStorageSaverAndGet";
import changeThemeBtnStatus from "./changeThemeBtnStatus";
import darkMode from "../darkMode";

(() => {
    const changePageThemeBtn = document.querySelector(".change-page-theme");

    changePageThemeBtn.addEventListener("click", () => {
        changePageThemeBtn.classList.toggle("active");

        if(changePageThemeBtn.classList.contains("active")) {
            darkMode.on;
            localStorageSave("darkMode", true);
            changeThemeBtnStatus(true);
            return;
        }
        darkMode.off;
        localStorageSave("darkMode", false);
        changeThemeBtnStatus(false);
    });
})();