(() => {
    const triggers = document.querySelectorAll(".dropdown-trigger");
    const dropdowns = document.querySelectorAll(".dropdown");

    triggers.forEach((trigger, i) => {
        trigger.addEventListener("mouseover", () => {
            dropdowns[i].classList.add("active");
        });
        trigger.addEventListener("mouseleave", () => {
            dropdowns[i].classList.remove("active");
        });
    });
})();