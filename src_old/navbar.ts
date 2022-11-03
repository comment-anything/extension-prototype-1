import { InterfaceDisplay } from "./interfaceDisplay"
import { STATE } from "./STATES"


export class NavBar {
    el: HTMLElement
    login: HTMLButtonElement
    register: HTMLButtonElement
    logout: HTMLButtonElement
    settings: HTMLButtonElement
    reports: HTMLButtonElement
    moderation: HTMLButtonElement
    comments: HTMLButtonElement
    allButtons : Array<HTMLButtonElement>
    listeners: Map<HTMLButtonElement, Function>
    ui: InterfaceDisplay
    constructor(parent: InterfaceDisplay) {
        this.ui = parent
        this.el = document.createElement("nav")
        this.login = buttonNamed("Log in", this)
        this.register = buttonNamed("Register", this)
        this.logout = buttonNamed("Log Out", this)
        this.comments = buttonNamed("Comments", this)
        this.settings = buttonNamed("Settings", this)
        this.moderation = buttonNamed("Moderation", this)
        this.reports = buttonNamed("Reports", this)
        this.allButtons = []
        this.allButtons.push(this.login, this.register, this.logout, this.comments, this.settings, this.moderation, this.reports)
        this.el.append(...this.allButtons)
    }
    hideAllButtons() {
        for(let but of this.allButtons) {
            but.style.visibility = "hidden"
            but.disabled = false
        }
    }
    showLoggedOutButtons() {
        this.login.style.visibility = "visible"
        this.register.style.visibility = "visible"
        this.comments.style.visibility = "visible"
    }
    showMemberButtons() {
        this.comments.style.visibility = "visible"
        this.logout.style.visibility = "visible"
        this.settings.style.visibility = "visible"
    }
    showModeratorButtons() {
        this.showMemberButtons()
        this.moderation.style.visibility = "visible"
    }
    showAdminButtons() {
        this.showModeratorButtons()
        this.reports.style.visibility = "visible"
    }
    setFromState(state: STATE) {
        this.hideAllButtons()
        switch(state) {
            case STATE.COMMENTS_ADMIN:
                this.showAdminButtons()
                this.comments.disabled = true
                break;
            case STATE.COMMENTS_LOGGED_OUT:
                this.showLoggedOutButtons()
                this.comments.disabled = true
                break;
            case STATE.COMMENTS_MEMBER:
                this.showMemberButtons()
                this.comments.disabled = true
                break;
            case STATE.COMMENTS_MODERATOR:
                this.showModeratorButtons()
                this.comments.disabled = true 
                break;
            case STATE.EXTENSION_INACTIVE:
                break;
            case STATE.LOGIN:
                this.showLoggedOutButtons()
                this.login.disabled = true 
                break;
            case STATE.MODERATION_ADMIN:
                this.showAdminButtons()
                this.moderation.disabled = true 
                break;
            case STATE.MODERATION_MODERATOR:
                this.showModeratorButtons()
                this.moderation.disabled = true 
                break;
            case STATE.PW_RESET:
                this.showLoggedOutButtons()
                break;
            case STATE.REGISTER:
                this.showLoggedOutButtons()
                this.register.disabled = true 
                break;
            case STATE.REPORTS_ADMIN:
                this.showAdminButtons()
                this.reports.disabled = true 
                break;
            case STATE.SETTINGS_ADMIN:
                this.showAdminButtons()
                this.settings.disabled = true 
                break;
            case STATE.SETTINGS_MEMBER:
                this.showMemberButtons()
                this.settings.disabled=true 
                break;
            case STATE.SETTINGS_MODERATOR:
                this.showModeratorButtons()
                this.settings.disabled = true 
                break;
            default:
                break;
        }
    }
    clickReceived(s:string) {
        this.ui.navbarClick(s)
    }
}




function buttonNamed(s:string, nav:NavBar) :HTMLButtonElement {
    let el = document.createElement("button")
    el.addEventListener("click", ()=> {
        nav.clickReceived(s)
    })
    el.style.visibility = "hidden"
    el.textContent = s
    return el
}