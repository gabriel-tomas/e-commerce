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
})();