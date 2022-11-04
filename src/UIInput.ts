
export class UIInput{
    el: HTMLElement
    listeners: Array<[HTMLElement, (e:any)=>any, string]>
    dispatchCafeEvent: ()=> void
    constructor() {
        this.el = document.createElement("div")
        this.listeners = []
    }
    clickListen(el:HTMLElement | HTMLElement[], fun: ((e:MouseEvent)=>any) | Array<(e:MouseEvent)=>any>, bind?: boolean) {
        if(bind) {
            if(Array.isArray(fun)) {
                let boundArr : Array<(e:MouseEvent)=>any> = []
                for(let f of fun) {
                    boundArr.push(f.bind(this))
                }
                fun = boundArr
            } else {
                fun = fun.bind(this)
            }

        }
        if(Array.isArray(el)) {
            if(Array.isArray(fun)) {
                for(let elinst of el) {
                    for(let cb of fun) {
                        elinst.addEventListener("click", cb)
                        this.listeners.push([elinst, cb, "click"])
                    }
                }
            } else {
                for(let elinst of el) {
                    elinst.addEventListener("click", fun)
                    this.listeners.push([elinst, fun, "click"])
                }
            }
        } else {
            if(Array.isArray(fun)) {
                for(let cb of fun) {
                    el.addEventListener("click", cb)
                    this.listeners.push([el, cb, "click"])
                }
            } else {
                el.addEventListener("click", fun)
                this.listeners.push([el, fun, "click"])
            }
        }
    }
    destroy() {
        for(let triplet of this.listeners) {
            let [el, listnr, evname] = triplet
            el.removeEventListener(evname, listnr)
        }
        this.el.remove()
    }
}