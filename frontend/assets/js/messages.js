const message = document.querySelector(".message");
const messageP = document.querySelector(".message > p");
const counterAdded = document.querySelector(".message > .counter-added");
let counter = 1;

export default (type, text) => {
    if(message.classList.contains("active")) {
        counter++;
        counterAdded.style.display = "block";
        counterAdded.innerText = counter;
        message.classList.remove("active");
    } else {
        counterAdded.style.display = "none";
        setTimeout(() => {
            message.classList.remove("active");
            counter = 1;
        }, 4000);
    }
    messageP.innerText = text;
    message.classList.add("active");
    if(type === "danger") {
        message.classList.add("danger");
    } else if(type === "success") {
        message.classList.add("success");
    }
}