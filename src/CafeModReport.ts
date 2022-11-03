import { Server } from "./SERVER_DATA";
import { UIInput } from "./UIInput";



export class CafeModReport extends UIInput {
    data: Server.CommentReport
    
    static setCSS(el:HTMLElement) {
        el.style.display = "flex"
        el.style.flexDirection = "row"
        el.classList.add("cafeModReport")
    }
    
    constructor(data: Server.CommentReport) {
        super()
        this.data = data
    }
}