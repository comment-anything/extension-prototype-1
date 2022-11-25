import { CafeFeedbackDisplay, CafeDomainReportDisplay, CafeUsersReportDisplay, CafeCommentSortDisplay, CafeDomainModDisplay, CafeGlobalModDisplay, CafeModRecordDisplay, CafeCommentReportDisplay, CafeLogDisplay } from "./Boundaries";
import { CafeBanRecord } from "./CafeBanRecord";
import { CafeComment } from "./CafeComment";
import { Server } from "./SERVER";
import { Settings } from "./Settings";
import { UIInput } from "./UIInput";



export class CafeWindow {

}

// CafeCommentsWindow displays all comments for the current page. It is responsible for repopulating with new comments when comments for a new page are retrieved and updating comments as new ones are added and voted on.
export class CafeCommentsWindow extends CafeWindow {

    el: HTMLDivElement

    data: Server.Comment[]

    lastSettings?: Settings
    displayedComments: Map<number, CafeComment>
    commentSortSettings: CafeCommentSortDisplay

    // populateNewComments clears all CafeComments that are being displayed creates new instances of CafeComment for every Comment in the parameter array. 
    populateNewComments(d: Server.Comment[]) {

    }

    // updateComment looks for a comment in the displayedComment map and updates its data with the parameter if it exists. If it does not exist, it creates a new CafeComment
    updateComment(d: Server.Comment) {

    }

    // resortComments is called when a user changes their comment viewing settings. It removes all CafeComments from the page but doesn't clear the data. Then it recreates the comments graph.
    resortComments() {

    }

    // updateFromSettings updates the lastSettings field in CommentsWindow and calls resortComments.
    updateFromSettings(settings:Settings) {
        this.lastSettings = settings
        this.commentSortSettings.updateFromSettings(settings)
        this.resortComments()
    }
}
// CafeSettingsWindow displays user settings and provides options for the user to reset their password or verify their email.
export class CafeSettingsWindow extends CafeWindow {

    commentSortSettings: CafeCommentSortDisplay

    passwordResetButton: HTMLButtonElement

    requestEmailValidationButton: HTMLButtonElement
    verifyEmailButton: HTMLButtonElement
    verifyCodeInput: HTMLInputElement
    verifyCodeSubmit: HTMLInputElement

    // updateFromSettings is called when the settings object is updated. updateFromSettings is called on the commentSortSettings UIInput member of CafeSettingsWindow.
    updateFromSettings(settings:Settings) {
        this.commentSortSettings.updateFromSettings(settings)
    }

    // verifyEmailClicked is called when a user clicks on validateEmailButton. It causes validationCodeInput to become visible.
    verifyEmailClicked() {

    }

    // verifyCodeSubmitClicked is called when a user clicks on the validationCodeSubmit button. It causes a Verify object to be dispatched to the server to cause verification.
    verifyCodeSubmitClicked() {

    }

    // passwordResetClicked is called when a user clicks the passwordResetButton. It will result in a password reset request being dispatched to the server, the user being logged out, and the password change state transition process to begin.
    passwordResetClicked() {

    }

}

// CafeModerationWindow allows moderator interactions with Comment Anywhere. It is shown when a user clicks the moderation button on the Navbar, transitioning them to that state.
export class CafeModerationWindow extends CafeWindow {
    moderators: ModeratorsReportSection
    modActions: ModActionsReportSection
    banRecords: BanRecordsSection
    reports: CommentReportsSection
}

// CafeModerationWindow allows admin interactions with Comment Anywhere. It is shown when a user clicks the admin button on the Navbar, transitioning them to that state.
export class CafeAdminWindow extends CafeWindow {

    feedbackReport: FeedbackReportSection
    logs: LogsSection
    domainReports: CafeDomainReportDisplay[]
    userReport: CafeUsersReportDisplay
    domainInput: HTMLInputElement
    domainRequestButton: HTMLButtonElement
    usersReportButton: HTMLButtonElement


    // domainRequestButtonClicked is called when a user clicks on domainRequestButton. It dispatches a ViewDomainReport entity to the server with a value retrieved from the domainInput element.
    domainRequestButtonClicked() {

    }

    // showDomainReport is called when Cafe receives an AdminDomainReport response from the server. It instantiates a new CafeDomainReportDisplay. 
    showDomainReport(d: Server.AdminDomainReport) {

    }

    // usersReportRequestButtonClicked is called when a suer clicks on the usersReportButton. It causes a ViewUsersReport entity to dispatch to the server.
    usersReportRequestButtonClicked() {}

    // showUsersReport is called when Cafe receives an AdminUsersReport response from the server. It updates the users report with the data by calling userReport.update
    showUsersReport(d: Server.AdminUsersReport) {
        
    }
}

// CafeLoginWindow is displayed when the user clicks the "Login" button in the navbar and transitions to the login state.
export class CafeLoginWindow extends CafeWindow {

    username: HTMLInputElement
    password: HTMLInputElement
    submitLoginButton: HTMLButtonElement
    forgotPasswordButton: HTMLButtonElement

    // submitLoginButtonClicked is called when the user clicks the "submit" button on the login page. It causes a Login entity to be dispatched to the server, populated with data from the username and password forms.
    submitLoginButtonClicked() {

    }

    // forgotPasswordButtonClicked is called when the user clicks the "forgot my password" button on the login page. It causes a PasswordResetRequest to be dispatched to the server and the state to transition to the request password reset form.
    forgotPasswordButtonClicked() {

    }
}

// CafeRegisterWindow is displayed when the user clicks the "Register" button in the navbar and transitions to the register state.
export class CafeRegisterWindow extends CafeWindow {
    username: HTMLInputElement
    password: HTMLInputElement
    retypePassword: HTMLInputElement
    email: HTMLInputElement
    agreedToTerms: HTMLInputElement
    submitRegister: HTMLButtonElement

    // submitRegisterClicked is called when the user clicks the "submit" button on the register page. It causes a Register entity to be dispatched to the server, populated with data from the registration form represented by CafeRegisterWindow.
    submitRegisterClicked() {

    }
}

// CafePWResetRequestWindow is displayed when the user transitions to the request password reset form state.
export class CafePwResetRequestWindow extends CafeWindow {
    email: HTMLInputElement
    submitPWResetRequestButton: HTMLButtonElement

    // submitButtonClicked is called when the user clicks "submit" after entering their email. It causes a PasswordResetRequest to be dispatched to the server.
    submitButtonClicked() {

    }
}

// CafePWResetCodeWindow is displayed when the user transitions to the input password reset code state. 
export class CafePWResetCodeWindow extends CafeWindow {
    code: HTMLInputElement
    submitCodeButton: HTMLButtonElement

    // submitButtonClicked is called when the user clicks "submit" after entering the password reset code. It causes a PasswordResetCode to be dispatched to the server.
    submitButtonClicked() {}

}

// CafeNewPasswordWindow is displayed when the user transitions to the input new password state. 
export class CafeNewPasswordWindow extends CafeWindow {
    password: HTMLInputElement
    newPassword: HTMLInputElement
    submitButton: HTMLButtonElement

    // submitButtonClicked is called when the user clicks "submit" after entering their new password. It causes a SetNewPass to be sent to the server.
    submitButtonClicked() {}
}



// CafeWindowSection represents an area of a window that performs some particular task or shows some collection of a data. CafeWindows may be composed of several CafeWindowSections.
export class CafeWindowSection {
    el: HTMLElement

}


// FeedbackReportSection is part of the CafeAdminWindow and displays information about user-submitted feedback.
export class FeedbackReportSection extends CafeWindowSection {

    feedbacks: Map<number, CafeFeedbackDisplay>

    from: HTMLInputElement
    to: HTMLInputElement
    feedbackType: HTMLSelectElement
    requestFeedbackButton: HTMLButtonElement

    // updateFeedback is called when data regarding a feedback is changed on the server and should be changed client-side.
    updateFeedback(d: Server.FeedbackRecord) {
        // create or update a feedback record
    }

    // requestFeedbackClicked is called when the requestFeedbackButton is clicked. It causes a ViewFeedback to be sent to the server, populated with data from the input controls.
    requestFeedbackClicked() {}

    // populateFeedback is called when a Feedbacks message is received from the server, containing data for feedback to display. It causes the section to instantiate CafeFeedback objects for each feedback item after clearing the extant ones.
    populateFeedback(d: Server.FeedbackRecord[]) {
        this.clearFeedback()
        // create a feedback record for each item in the array
    }

    // clearFeedback destroys all CafeFeedbackDisplays dispalyed in this window section.
    clearFeedback() {}
}

// ModeratorsReportSection is part of the CafeModerationWindow and allows viewing of moderator assignment records.
export class ModeratorsReportSection extends CafeWindowSection {

    forDomainInput: HTMLInputElement
    requestDomainModeratorsButton: HTMLButtonElement
    requestGlobalModeratorsButton: HTMLButtonElement

    domainModRecords: Map<number, CafeDomainModDisplay>
    globalModRecords: Map<number, CafeGlobalModDisplay>

    clearModRecordsButton: HTMLButtonElement
    
    // requestDomainModsClicked is called when the user clicks the requestDomainModerators button. It dispatches a ViewMods object to the server.
    requestDomainModsClicked(){}

    // requestGlobalModsClicked is called when the user clicks the requestGlobalModerators button. It dispatched a ViewMods object to the server.
    requestGlobalModsClicked(){}

    // populateDomainModerators is called when a DomainModeratorRecord is received. It instantiates CafeDomainModDisplays for each entry.
    populateDomainModerators(d: Server.DomainModeratorRecord[]) {}

    // populateGlobalModerators is called when a GlobalModeratorrecord is received. It instantiates CafeGlobalModDisplays for each entry.
    populateGlobalModerators(d: Server.GlobalModeratorRecord[]) {}

    // clearModsClicked is called when clearModRecordsButton is clicked by the user. It destroys all CafeDomainModDisplays and CafeGlobalModDisplays.
    clearModsClicked(){}
}

// ModActionsReportSection is part of CafeModerationWindow and provides functionality for viewing moderation actions taken on comments.
export class ModActionsReportSection extends CafeWindowSection {

    modRecords: Map<number, CafeModRecordDisplay>
    requestModRecordsButton: HTMLButtonElement
    clearModActionsButton: HTMLButtonElement

    // requestModRecordsButtonClicked is called when a user clicks the requestModRecordsButton. It causes a ViewModRecords object to dispatch to the server.
    requestModRecordsButtonClicked() {}
    // populateModActions is called when ModerationRecords are received from the server. It instantiates CafeModRecordDisplays for each ModerationRecord.
    populateModActions(d: Server.ModerationRecord[]) {

    }
    // updateModAction is called when a ModerationRecord is updated on the server. It updates that record with new data. 
    updateModAction(d: Server.ModerationRecord) {}

    // clearModActions is called when a user clicks the clearModActionsButton. It destroys all CafeModRecordDisplays currently visible.
    clearModActionsClicked() {}
}

// BanRecordsSection is part of CafeModerationWindow. It is used to display records of bannings to other moderators.
export class BanRecordsSection extends CafeWindowSection {

    banRecords: Map<number, CafeBanRecord>

    requestGlobalBansButton: HTMLButtonElement
    forDomain: HTMLInputElement
    requestDomainBansButton: HTMLButtonElement

    // populateBanRecords is called when BanRecords are received from the server. It clears the currently displayed ban records and instantiates a new CafeBanRecord for each BanRecord.
    populateBanRecords(d: Server.BanRecord[]) {

    }

    // requestGlobalBansClicked is called when a user clicks the requestGlobalBansButton. It causes a ViewBans request to be dispatched to the server.
    requestGlobalBansClicked() {

    }

    // requestDomainBansClicked is called when a suer clicks the requestDomainBansButton. It causes a ViewBans request to be dispatched to the server, populated with data in the forDomain field.
    requestDomainBansClicked() {}

    // clearBanRecords destroys all CafeBanRecords.
    clearBanRecords(){}
}

// CommentReportsSection is part of CafeModerationWindow. It is responsible for displaying comment reports to moderators.
export class CommentReportsSection extends CafeWindowSection {

    reports: Map<number, CafeCommentReportDisplay>

    viewReportsButton: HTMLButtonElement

    // populateCommentReports is called when CommentReports are received from the server. It instantiates a CafeCommentReportDisplay for each CommentReport after destroying the ones currently visible.
    populateCommentReports(d: Server.CommentReport[]) {

    }

    // viewReportsClicked is called when a user clicks the viewReportsButton. It causes a ViewCommentReports object to be dispatched to the server. 
    viewReportsClicked() {

    }

    // updateCommentReports is called when a comment report changes server-side. It updates that CafeCommentReportDisplay with the new data.
    updateCommentReport(d: Server.CommentReport) {}

    // clearCommentReports destroy all CafeCommentReportDisplays.
    clearCommentReports(){}
}

// LogsSection is part of CafeAdminWindow. It is responsible for populating log entries. 
export class LogsSection extends CafeWindowSection {

    forUser: HTMLInputElement
    forIP: HTMLInputElement
    forDomain: HTMLInputElement
    startingAt: HTMLInputElement
    endingAt: HTMLInputElement
    submitLogsRequestButton: HTMLButtonElement

    logs: Map<number, CafeLogDisplay>

    // submitLogsRequestClicked is called when a user clicks the submitLogsRequestButton. It causes a ViewLogs to be dispatched to the server, populated with information from the HTMLInputElements.
    submitLogsRequestClicked() {}

    // populateLogs is called when AdminAccessLogs are received. It clears current logs and instantiates a new CafeLogDisplay for each AdminAccessLog.
    populateLogs(d: Server.AdminAccessLog[]) {

    }
    // clearLogs destroys all CafeLogDisplays currently visible.
    clearLogs(){}
}



