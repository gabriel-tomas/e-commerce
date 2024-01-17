(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuBox = document.querySelector(".menu-box");
    const menuHeader = document.querySelector(".menu-box > .menu-header");
    const containerLeft = document.querySelector(".container-left");
    const backBlocker = document.querySelector(".back-blocker");

    const menu = {
        open() {
            menuHeader.appendChild(menuBtn);
            document.body.classList.add("body-disabled");
            menuBtn.querySelector("span").innerText = "close";
            menuBtn.querySelector("span").classList.add("font-size-xl");
        },

        exit(removeActiveClass) {
            if(removeActiveClass) {
                menuBox.classList.remove("active");
                backBlocker.classList.remove("active");
            }
            
            containerLeft.appendChild(menuBtn);
            document.body.classList.remove("body-disabled");
            menuBtn.querySelector("span").innerText = "menu";
            menuBtn.querySelector("span").classList.remove("font-size-xl");
        }
    }

    window.matchMedia("(max-width: 744px)").addEventListener("change", (e) => {
        if(!e.matches && menuBox.classList.contains("active")) {   
            menu.exit(true);
        }
    });

    menuBtn.addEventListener("click", () => {
        menuBox.classList.toggle("active");
        backBlocker.classList.toggle("active");

        function backBlockerFunc() {
            menu.exit(true);
            backBlocker.removeEventListener("click", backBlockerFunc);
        }

        if(menuBtn.parentElement.classList.contains("container-left")) {
            backBlocker.addEventListener("click", backBlockerFunc);
            menu.open();
        } else {
            
            menu.exit();
        }
    });

    
})();