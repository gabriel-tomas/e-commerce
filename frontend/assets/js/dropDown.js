(() => {
    const triggers = document.querySelectorAll(".dropdown-trigger");
    const triggersClick = document.querySelectorAll(".dropdown-trigger-click");
    const dropdowns = document.querySelectorAll(".dropdown");
    const dropdownsClick = document.querySelectorAll(".dropdown-click");

    triggers.forEach((trigger, i) => {
        trigger.addEventListener("mouseover", () => {
            if(!dropdowns[i]) return;
            dropdowns[i].classList.add("active");
        });
        trigger.addEventListener("mouseleave", () => {
            if(!dropdowns[i]) return;
            dropdowns[i].classList.remove("active");
        });
    });
    triggersClick.forEach((trigger, i) => {
        trigger.addEventListener("click", () => {
            if(!dropdownsClick[i]) return;
            trigger.classList.toggle("active");
            dropdownsClick[i].classList.toggle("active");
        });
    });
})();