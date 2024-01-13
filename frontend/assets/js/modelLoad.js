export default class ModelLoad {
    static disable(el) {
        const modelEls = document.querySelectorAll(el);

        modelEls.forEach(item => {
            item.style.display = "none";
        });
    }
}
