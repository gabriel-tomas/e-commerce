const message = document.querySelector(".message");
const messageP = document.querySelector(".message > p");
const counterAdded = document.querySelector(".message > .counter-added");
let counter = 1;

export default (type, text) => {
    message.addEventListener("animationend", () => {
        message.classList.remove("active");
    });
    if(message.classList.contains("active")) {
        counter++;
        counterAdded.style.display = "block";
        counterAdded.innerText = counter;
    } else {
        counterAdded.style.display = "none";
        message.classList.add("active");
        setTimeout(() => {
            counter = 1;
        }, 4000);
    }
    messageP.innerText = text;
    if(type === "danger") {
        message.classList.add("danger");
    } else if(type === "success") {
        message.classList.add("success");
    }
}