export default (type, text) => {
    const message = document.querySelector(".message");
    message.style.display = "block";
    if(type === "danger") {
        message.innerText = text;
    }
}