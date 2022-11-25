import { CafeMessageDisplay, CafeUserDisplay } from "./Boundaries";
import { Server } from "./SERVER";
import { State } from "./State";
import { CafeAdminWindow, CafeCommentsWindow, CafeLoginWindow, CafeModerationWindow, CafeNewPasswordWindow, CafePWResetCodeWindow, CafeRegisterWindow, CafeSettingsWindow, CafeWindow } from "./Windows";

// cafeNavBar displays navigation buttons for the user to move between states.
export class CafeNavbar {

    commentsWindow: CafeCommentsWindow
    settingsWindow: CafeSettingsWindow
    modWindow: CafeModerationWindow
    adminWindow: CafeAdminWindow
    loginWindow: CafeLoginWindow
    registerWindow: CafeRegisterWindow


    pwResetWindow: CafePWResetCodeWindow
    newPwWindow: CafeNewPasswordWindow

    globalMessage: CafeMessageDisplay
    userHoverDisplay: CafeUserDisplay

    currentlyViewing: CafeWindow

    commentsButton: HTMLButtonElement
    settingsButton: HTMLButtonElement
    modButton: HTMLButtonElement
    adminButton: HTMLButtonElement

    loginButton: HTMLButtonElement
    registerButton: HTMLButtonElement
    logoutButton: HTMLButtonElement


    constructor() {
    }

    // commentsButtonClicked is called when commentsButton is clicked. It will cause the state to transition.
    commentsButtonClicked() {}
    // settingsButtonClicked is called when settingsButton is clicked. It will cause the state to transition.
    settingsButtonClicked() {}
    // modButtonClicked is called when modButton is clicked. It will cause the state to transition.
    modButtonClicked() {}
    // adminButtonClicked is called when adminButton is clicked. It will cause the state to transition.
    adminButtonClicked() {}
    // loginButtonClicked is called when loginButton is clicked. It will cause the state to transition.
    loginButtonClicked() {}
    // registerButtonClicked is called when registerButton is clicked. It will cause the state to transition.
    registerButtonClicked() {}
    // logoutButtonClicked is called when logoutButton is clicked. It will cause the state to transition.
    logoutButtonClicked() {}

    // setFromState causes buttons to show and hide depending on whether the user is logged in, what their access level is, and what state they are in. It also changes CurrentlyViewing to the appropriate CafeWindow and hides all other windows.
    setFromState(state:State) {

    }
    // displayMessage updates the globalMessage with information sent from the server.
    displayMessage(data:Server.Message) {
        this.globalMessage.updateMessage(data)
    }

}