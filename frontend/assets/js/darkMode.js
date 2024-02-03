export default {
    root: document.querySelector(':root'),

    get on () {
        this.root.style.setProperty('--text', '#e4ddf3');
        this.root.style.setProperty('--back-color', '#101010');
        this.root.style.setProperty('--background', '#251a3d');
        this.root.style.setProperty('--primary', '#8db342');
        this.root.style.setProperty('--secondary', '#2b1c4a');
        this.root.style.setProperty('--secondary-darker', '#1c1231');
        this.root.style.setProperty('--accent', '#a9c86a');

        this.root.style.setProperty('--scrollbar-back', 'rgb(39 39 39 / 69%)');
        this.root.style.setProperty('--products-border-color', 'rgba(131, 131, 131, 0.12)');
        this.root.style.setProperty('--input-back-color', '#c9c9c945');
        this.root.style.setProperty('--black-white', '#fff');

        this.root.style.setProperty('--model-load-back', '#1b1b1b');
        this.root.style.setProperty('--model-load-back-accent', '#5f5f5f');
        
        this.root.style.setProperty('--neutral-0', 'rgb(27 27 27 / 78%)');
        this.root.style.setProperty('--neutral-3', 'rgb(0 0 0 / 73%)');
        this.root.style.setProperty('--neutral-4', 'rgb(24 24 24)');
        this.root.style.setProperty('--neutral-7', 'rgb(3 3 3 / 30%)');
        this.root.style.setProperty('--neutral-9', 'rgb(73 73 73 / 84%)');
        this.root.style.setProperty('--neutral-10', 'rgb(8 8 8 / 84%)');
        this.root.style.setProperty('--neutral-13', 'rgba(255, 255, 255, 0.24)');
    },

    get off () {
        this.root.style.setProperty('--text', '#130c22');
        this.root.style.setProperty('--back-color', '#fff');
        this.root.style.setProperty('--background', '#ede9f7');
        this.root.style.setProperty('--primary', '#97bd4c');
        this.root.style.setProperty('--secondary', '#c4b5e3');
        this.root.style.setProperty('--secondary-darker', '#a598c0');
        this.root.style.setProperty('--accent', '#769537');

        this.root.style.setProperty('--scrollbar-back', '#f1f1f1');
        this.root.style.setProperty('--products-border-color', '#ede9f7');
        this.root.style.setProperty('--input-back-color', '#c4b5e3');
        this.root.style.setProperty('--black-white', '#000');

        this.root.style.setProperty('--model-load-back', '#e4e4e4');
        this.root.style.setProperty('--model-load-back-accent', '#a0a0a0');
        
        this.root.style.setProperty('--neutral-0', 'rgba(228, 228, 228, 0.781)');
        this.root.style.setProperty('--neutral-3', 'rgba(255, 255, 255, 0.733)');
        this.root.style.setProperty('--neutral-4', 'rgb(233, 233, 233)');
        this.root.style.setProperty('--neutral-7', 'rgba(87, 87, 87, 0.4)');
        this.root.style.setProperty('--neutral-9', 'rgba(182, 182, 182, 0.836)');
        this.root.style.setProperty('--neutral-10', 'rgba(247, 247, 247, 0.836)');
        this.root.style.setProperty('--neutral-13', 'rgba(0, 0, 0, 0.25)');
    }
}