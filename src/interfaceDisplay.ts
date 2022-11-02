import { Cafe } from "./cafe";
import { CommentGraph } from "./comment_graph";
import { NavBar } from "./navbar";
import { STATE } from "./STATES";

export class InterfaceDisplay {
    el: HTMLElement
    //commentsDisplay: CommentGraph
    cafe: Cafe
    navbar: NavBar

    constructor(parent: Cafe) {
        this.cafe = parent
        this.el = document.createElement("div")
        this.navbar = new NavBar(this)
        this.el.append(this.navbar.el)
    }

    setStateTo(state: STATE) {
        this.navbar.setFromState(state)
    }
}