import {localStorageSave, localStorageGet} from "./localStorageSaverAndGet";
import darkMode from "./darkMode";
import changeThemeBtnStatus from "./header/changeThemeBtnStatus";

(() => {
    const getUserPreferredLanguage = () => {
        if(localStorageGet("language")) return;
        if(navigator.language === "pt-BR" || navigator.language === "pt") {
            window.location.href = `/language?q=ptBr`;
            localStorageSave("language", "ptBr");
        } else {
            window.location.href = `/language?q=en`;
            localStorageSave("language", "en");
        }
    }
    getUserPreferredLanguage();
    
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

    const checkAddRemoveFavoritePos = () => {
        const containersAddRemoveCartFavorite = document.querySelectorAll(".container-add-remove-cart-favorite");
        const containersProductFavorite = document.querySelectorAll(".container-product-favorite");
        const containersPriceInfo = document.querySelectorAll(".container-product-favorite > .container-price-info");

        if(window.matchMedia("(max-width: 466px)").matches) {
            containersAddRemoveCartFavorite.forEach((el, i) => {
                containersProductFavorite[i].appendChild(el);
            });
        } else {
            containersAddRemoveCartFavorite.forEach((el, i) => {
                containersPriceInfo[i].appendChild(el);
            });
        }
    }
    checkAddRemoveFavoritePos();
})();