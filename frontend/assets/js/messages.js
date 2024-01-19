const message = document.querySelector(".message");
const messageP = document.querySelector(".message > p");
const counterAdded = document.querySelector(".message > .counter-added");
const closeMessage = document.querySelector(".message > .close-message");
let counter = 1;


message.addEventListener("animationend", () => {
    message.classList.remove("active");
    message.classList.remove("success");
    message.classList.remove("error");
});

if(closeMessage) {
    closeMessage.addEventListener("click", () => {
        message.classList.remove("active");
        message.classList.remove("success");
        message.classList.remove("error");
    });
}

export default (type, text) => {
    if(message.classList.contains("important")) {
        message.classList.remove("important");
    }
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
    if(type === "error") {
        message.classList.add("error");
    } else if(type === "success") {
        message.classList.add("success");
    }
}
