
export class UIInput{
    el: HTMLElement
    listeners: Array<[HTMLElement, (e:any)=>any, string]>
    dispatchCafeEvent: ()=> void
    constructor() {
        this.el = document.createElement("div")
        this.listeners = []
    }
    clickListen(el:HTMLElement, fun:(e:MouseEvent)=>any) {
        el.addEventListener("click", fun)
        this.listeners.push([el, fun, "click"])
    }
    destroy() {
        for(let triplet of this.listeners) {
            let [el, listnr, evname] = triplet
            el.removeEventListener(evname, listnr)
        }
        this.el.remove()
    }
}