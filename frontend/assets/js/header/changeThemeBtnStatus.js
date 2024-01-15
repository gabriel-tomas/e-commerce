const changePageThemeBtn = document.querySelector(".change-page-theme");
const textStatusDarkmode = document.querySelector(".text-status-darkmode");

export default (on) => {
    if(on) {
        changePageThemeBtn.classList.add("active");
        textStatusDarkmode.innerText = "ON";
        return;
    }
    changePageThemeBtn.classList.remove("active");
    textStatusDarkmode.innerText = "OFF";
};
