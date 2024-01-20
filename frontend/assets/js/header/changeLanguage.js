import {localStorageSave} from "../localStorageSaverAndGet";

(() => {
    const changeLanguageBtns = document.querySelectorAll(".change-language-btn-pt-en");

    changeLanguageBtns.forEach(input => {
        input.addEventListener("click", (e) => {
            const el = e.target;
            const language = el.getAttribute("language");
            localStorageSave("language", language);
            window.location.href = `/language?q=${language}`;
        });
    });
})();