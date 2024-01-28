(() => {
    const inputs = document.querySelectorAll(".container-input > .input");
    const containerSaveChanges = document.querySelector(".container-save-changes");
    const btnEditForm = document.querySelector(".button-my-data.edit-form");
    const btnCancelEdit = document.querySelector(".button-my-data.cancel-form");

    btnEditForm.addEventListener("click", () => {
        btnEditForm.classList.add("desactive");
        containerSaveChanges.classList.add("active");
        inputs.forEach(input => {
            input.removeAttribute("readonly");
            input.classList.remove("block-input");
        });
    });

    btnCancelEdit.addEventListener("click", () => {
        btnEditForm.classList.remove("desactive");
        containerSaveChanges.classList.remove("active");
        inputs.forEach(input => {
            input.setAttribute("readonly", "");
            input.classList.add("block-input");
        });
    });
})();