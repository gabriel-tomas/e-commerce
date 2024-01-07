export default class FilterAditional {
    static addListenerClick() {
        const btnFilter = document.querySelector(".button.filter");
        const boxFilter = document.querySelector(".filter-additional-box");

        btnFilter.addEventListener("click", () => {
            if(window.getComputedStyle(boxFilter).visibility === "hidden") {
                boxFilter.style.visibility = "visible";
                btnFilter.style.backgroundColor = "var(--secondary)";
                return;
            }
            btnFilter.removeAttribute("style");
            boxFilter.style.visibility = "hidden";
        });
    }

    static addCategories(products) {
        const parent = document.querySelector(".container-options-category");

        let categoriesAdded = [];

        products.forEach(value => {
            const category = value.category;
            if(categoriesAdded.indexOf(category) !== -1) return;
            categoriesAdded.push(category);

            const div = document.createElement("div");
            const inputCheckbox = document.createElement("input");
            inputCheckbox.setAttribute("type", "checkbox");
            inputCheckbox.setAttribute("value", category);
            inputCheckbox.classList.add("checkbox-category");
            const idValue = `input-${category}`;
            inputCheckbox.setAttribute("id", idValue);
            const label = document.createElement("label");
            label.setAttribute("for", idValue);
            label.innerText = value.category;

            div.appendChild(inputCheckbox);
            div.appendChild(label);

            parent.appendChild(div);
        });
    }
}

FilterAditional.addListenerClick();