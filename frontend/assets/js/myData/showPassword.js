(() => {
    const passwordInput = document.querySelector(".container-input.password > .input");
    const btnSeePassword = document.querySelector(".btn-see-password");

    btnSeePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            btnSeePassword.querySelector("span").innerText = "visibility";
        } else {
            passwordInput.type = "password";
            btnSeePassword.querySelector("span").innerText = "visibility_off";
        }
    });
})();