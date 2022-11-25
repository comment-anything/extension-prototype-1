import { CafeMessageDisplay, CafeUserDisplay } from "./Boundaries";
import { Server } from "./SERVER";
import { CafeState } from "./State";
import { CafeAdminWindow, CafeCommentsWindow, CafeLoginWindow, CafeModerationWindow, CafePWResetWindow, CafeRegisterWindow, CafeSettingsWindow } from "./Windows";

export class CafeNavbar {

    commentsWindow: CafeCommentsWindow
    settingsWindow: CafeSettingsWindow
    modWindow: CafeModerationWindow
    adminWindow: CafeAdminWindow
    loginWindow: CafeLoginWindow
    registerWindow: CafeRegisterWindow

    pwResetWindow: CafePWResetWindow

    globalMessage: CafeMessageDisplay
    userHoverDisplay: CafeUserDisplay

    constructor() {
    }

    setAvailableFromState(state:CafeState) {

    }
    displayMessage(data:Server.Message) {
        this.globalMessage.updateMessage(data)
    }

    showPWResetWindow() {

    }
}