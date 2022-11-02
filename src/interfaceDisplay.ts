import { Cafe } from "./cafe";
import { CommentGraph } from "./comment_graph";
import { NavBar } from "./navbar";
import { STATE, StateChecks } from "./STATES";

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

    navbarClick(s:string) {
        
        switch(s) {
            case "Log in":
                this.setStateTo(STATE.LOGIN)
                break; 
            case "Register":
                this.setStateTo(STATE.REGISTER)
                break; 
            case "Log Out":
                // insert logout call here
                this.setStateTo(STATE.COMMENTS_LOGGED_OUT)
            case "Comments":
                // ..
            case "Settings":
            case "Moderation":
            case "Reports":
            default:
                break;
        }
    }
}