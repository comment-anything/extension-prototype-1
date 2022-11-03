import { dom } from "../utility/dom"

export class TestDomLogs {
    el: HTMLElement
    constructor() {
        this.el = dom.div("","",{"border":"1px dashed blue", "padding":"5px"})
    }
    log(s:string) {
        let l = new Log(s)
        this.el.append(l.el)
    }
}


class Log {
    el: HTMLElement
    content: HTMLSpanElement
    xBut: HTMLButtonElement
    listener: (e:any)=>void
    constructor(text:string) {
        this.el = dom.div("","",{"color":"darkred"})
        let time = ""+new Date()
        this.content = dom.span(text)
        this.xBut = dom.button("❌")
        function xClicked() {
            this.xBut.removeEventListener("click", this.listener)
            this.el.remove()
        }
        this.el.append(this.xBut, this.content)
        this.listener = xClicked.bind(this)
        this.xBut.addEventListener("click", this.listener)
    }
}