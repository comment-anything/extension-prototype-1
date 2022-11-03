/**
 * DRTestWindow stands for Data Render Test Window.
 * 
 * This is a base class for testing "windows" of testing frameworks whose purpose is testing an object which renders a datumn using HTML Elements, and which sends CafeEvents to the document global object. There are several boundary classes that fit this pattern, such as CafeComment, CafeModReport, CafeModActionReport , CafeUserProfile and others. 
 * 
 * These classes should all be capable of unit tests.
 */

import { Server } from "../SERVER_DATA";
import { dom } from "../utility/dom";
import { TestDomLogs } from "./domlogs";


type class_that_takes<T> = {
    new(d:T):instanceMustHave

} 

type instanceMustHave = {
    destroy(): void
    el: HTMLElement
}

export class DRTestWindow<DType> {

    logs: TestDomLogs
    el: HTMLDivElement

    container: HTMLDivElement
    toDestroy: {destroy(): void}[]
    nav: HTMLElement

    constructor() {
        this.toDestroy = []
        this.el = dom.div()
        this.nav = dom.el("div")
        let rlcontainer = dom.el("div", undefined, {"display":"flex"})
        this.logs = new TestDomLogs()
        this.container = dom.div()
        rlcontainer.append(this.container, this.logs.el)
        this.el.append(this.nav, rlcontainer)

    }

    boundButton(n:string, cb:()=>void) {
        let but = dom.button(n)
        but.addEventListener("click", cb.bind(this))
        return but
    }

    bindStamper(data: DType, domInstance:class_that_takes<DType>) {
        let but = this.boundButton("stamp", ()=>{
            // todo: deep copy data
            let boundry = new domInstance(data)
            this.container.append(boundry.el)
            this.toDestroy.push(boundry)
        })
        this.nav.append(but)
    }


}