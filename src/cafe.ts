import { Fetcher } from "./fetcher";
import { CafeNavbar } from "./Navbar";
import { CafeState } from "./State";
import {Server} from "./SERVER"

/**
 * Cafe stands for "Comment Anywhere Front End".
 */
export class Cafe {
    fetcher: Fetcher
    state: CafeState
    navbar: CafeNavbar
    constructor() {
        this.fetcher = new Fetcher()
        this.state = new CafeState()
        this.navbar = new CafeNavbar()
    }

    userChange(data?:Server.UserProfile | {}) {
        this.state.loadProfile(data)
        this.navbar.setAvailableFromState(this.state)
    }
}