

export class UIBox {
    el: HTMLElement
    constructor() {
        this.el = document.createElement("div")
        this.el.textContent = "I've been created!"
        this.el.style.backgroundColor = "salmon"
        this.el.style.border = "1px dotted black"
        this.el.style.textShadow = "1px 1px 1px black"
        document.body.append(this.el)
    }
}