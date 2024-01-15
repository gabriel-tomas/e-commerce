import changeThemeAnimation from "./changeThemeAnimation";

(() => {
    const changePageThemeBtn = document.querySelector(".change-page-theme");
    const root = document.querySelector(':root');

    const darkMode = {
        get on () {
            root.style.setProperty('--text', '#e4ddf3');
            root.style.setProperty('--back-color', '#0c0c0c');
            root.style.setProperty('--background', '#251a3d');
            root.style.setProperty('--primary', '#8db342');
            root.style.setProperty('--secondary', '#2b1c4a');
            root.style.setProperty('--secondary-darker', '#1c1231');
            root.style.setProperty('--accent', '#a9c86a');
    
            root.style.setProperty('--scrollbar-back', 'rgb(39 39 39 / 69%)');
            root.style.setProperty('--products-border-color', 'rgba(131, 131, 131, 0.12)');

            root.style.setProperty('--model-load-back', '#1b1b1b');
            root.style.setProperty('--model-load-back-accent', '#5f5f5f');
            
            root.style.setProperty('--neutral-0', 'rgb(27 27 27 / 78%)');
            root.style.setProperty('--neutral-3', 'rgb(0 0 0 / 73%)');
            root.style.setProperty('--neutral-4', 'rgb(24 24 24)');
            root.style.setProperty('--neutral-9', 'rgb(73 73 73 / 84%)');
            root.style.setProperty('--neutral-10', 'rgb(8 8 8 / 84%)');
            return;
        },

        get off () {
            root.style.setProperty('--text', '#130c22');
            root.style.setProperty('--back-color', '#fff');
            root.style.setProperty('--background', '#ede9f7');
            root.style.setProperty('--primary', '#97bd4c');
            root.style.setProperty('--secondary', '#c4b5e3');
            root.style.setProperty('--secondary-darker', '#a598c0');
            root.style.setProperty('--accent', '#769537');
    
            root.style.setProperty('--scrollbar-back', '#f1f1f1');

            root.style.setProperty('--model-load-back', '#e4e4e4');
            root.style.setProperty('--model-load-back-accent', '#a0a0a0');
            
            root.style.setProperty('--neutral-0', 'rgba(228, 228, 228, 0.781)');
            root.style.setProperty('--neutral-3', 'rgba(255, 255, 255, 0.733)');
            root.style.setProperty('--neutral-4', 'rgb(233, 233, 233)');
        }
    }

    changePageThemeBtn.addEventListener("click", () => {
        changeThemeAnimation();
        changePageThemeBtn.classList.contains("active")? darkMode.on : darkMode.off;
    });
})();