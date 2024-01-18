(() => {
    const inputs = document.querySelectorAll(".input");
    const labelsPlaceholder = document.querySelectorAll(".label-placeholder");

    inputs.forEach((input, i) => {
        input.addEventListener("focus", () => {
            if(input.value) return;
            labelsPlaceholder[i].classList.add("active");
        });
        input.addEventListener("focusout", () => {
            if(input.value) return;
            labelsPlaceholder[i].classList.remove("active");
        });
    });
})();