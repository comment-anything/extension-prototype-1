import { util } from "./utility"

const className = "url-display"

/**
 * URLDisplay creates an HTMLElement for displaying the current URL.
 */
export class UrlDisplay {
    el: HTMLDivElement
    constructor() {
        this.el = util.div()
        this.el.classList.add(className)
        this.el.textContent = util.url()
    }
    attach(parent?: HTMLElement) {
        if(parent != undefined) {
            parent.append(this.el)
        } else {
            document.body.append(this.el)
        }
    }
    update() {
        this.el.textContent = util.url()
    }
}