export default (type, text) => {
    const message = document.querySelector(".message");
    message.style.visibility = "visible";
    message.innerText = text;
    if(type === "danger") {
        message.classList.add("danger");
    } else if(type === "success") {
        message.classList.add("success");
    }
    const visibleTime = 4000;
    const opacityTime = visibleTime - 230;
    setTimeout(() => message.style.opacity = "1", 1);
    setTimeout(() => message.style.opacity = "0", opacityTime);
    setTimeout(() => message.style.visibility = "hidden", visibleTime);
}