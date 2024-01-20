import {localStorageSave, localStorageGet, localStorageRemove} from "../localStorageSaverAndGet";

(() => {
    const linksRmFavorites = document.querySelectorAll(".btn-remove-favorite");

    function deleteCartItemLclStrg(key, idRm, deleteAll=false) {
        let oldValue;
        oldValue = localStorageGet(key);
        oldValue = String(oldValue);
        if(oldValue === null) return;

        oldValue = oldValue.split(',');
        oldValue = oldValue.map(value => value.trim());

        if(deleteAll) {
            oldValue = oldValue.filter((id, i) => {
                if(Number(id) !== idRm) {
                    return true;
                }
            });
        } else {
            oldValue.splice(oldValue.indexOf(String(idRm)), 1);
        }

        oldValue = oldValue.join(", ");

        if(!oldValue) {
            localStorageRemove(key);
        } else {
            localStorageSave(key, `${oldValue}`);
        }
    }

    linksRmFavorites.forEach(link => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("removeid");
            deleteCartItemLclStrg("favorites", id);
        });
    });
})();