import { CafeMessageDisplay, CafeOwnProfileDisplay, CafeUserDisplay, CafeDomainReportDisplay } from "./Boundaries";
import { Cafe } from "./cafe";
import { ServerMap, ServerResponse } from "./fetcher";
import { CafeNavbar } from "./Navbar";
import { Server } from "./SERVER";
import { BanRecordsSection, CafeAdminWindow, CafeCommentsWindow, CafePWResetWindow, CommentReportsSection, FeedbackReportSection, LogsSection, ModActionsReportSection, ModeratorsReportSection } from "./Windows";

// Dispatcher is responsible for parsing an array of server responses and dispatching them to the appropriate objects around the front end for rendering to the user. 
export class Dispatcher {


    constructor() {

    }

    // dispatch takes an array of server responses and an instance of Cafe. It uses the "t" field of the ServerResponse to determine what kind of information is contained in the "d" field. The "t" field determines which Dispatcher method is next called, and the object which will render the data is retrieved using the parameter reference to Cafe. 
    dispatch(serverData: ServerResponse<keyof ServerMap>[], cafe:Cafe) {
        for(let datum of serverData) {
            switch(datum.t) {
                case "Message":
                    this.dispatchMessage(datum.d as Server.Message, cafe.navbar)
                    break;
                case "UserUpdate":
                    this.dispatchUserUpdate(datum.d as Server.UserProfile, cafe)
                    break;
                case "FeedbackUpdate":
                    this.dispatchFeedbackUpdate(datum.d as Server.FeedbackRecord, cafe.navbar.adminWindow.feedbackReport)
                    break;
                case "CommentUpdate":
                    this.dispatchCommentUpdate(datum.d as Server.Comment, cafe.navbar.commentsWindow)
                    break;
                case "Comments":
                    this.dispatchComments(datum.d as Server.Comment[], cafe.navbar.commentsWindow)
                    break;
                case "UserProfile":
                    this.dispatchUserProfile(datum.d as Server.UserProfile, cafe.navbar.userHoverDisplay)
                    break;
                case "LoginResponse":
                    this.dispatchLoginResponse(datum.d as Server.LoginResponse, cafe)
                    break;
                case "LogoutResponse":
                    this.dispatchLogoutResponse(datum.d as Server.LogoutResponse, cafe)
                    break;
                case "PwResetCodeResponse":
                    this.dispatchPwResetCodeResponse(datum.d as {}, cafe.navbar.pwResetWindow)
                    break;
                case "PwResetReqResponse":
                    this.dispatchPwResetReqResponse(datum.d as {}, cafe.navbar)
                    break;
                case "VerifyResponse":
                    this.dispatchVerifyResponse(datum.d as {}, cafe.navbar.globalMessage)
                    break;
                case "NewPassResponse":
                    this.dispatchNewPassResponse(datum.d as {}, cafe.navbar.globalMessage)
                    break;
                case "ReqVerificationResponse":
                    this.dispatchVerifyResponse(datum.d as {}, cafe.navbar.globalMessage)
                    break;
                case "BanRecords":
                    this.dispatchBanRecords(datum.d as Server.BanRecord[], cafe.navbar.modWindow.banRecords)
                    break;
                case "CommentReports":
                    this.dispatchCommentReports(datum.d as Server.CommentReport[], cafe.navbar.modWindow.reports)
                    break;
                case "CommentReportUpdate":
                    this.dispatchCommentReportUpdate(datum.d as Server.CommentReport, cafe.navbar.modWindow.reports)
                    break;
                case "Feedbacks":
                    this.dispatchFeedbacks(datum.d as Server.FeedbackRecord[], cafe.navbar.adminWindow.feedbackReport)
                    break;
                case "Logs":
                    this.dispatchLogs(datum.d as Server.AdminAccessLog[], cafe.navbar.adminWindow.logs)
                    break;
                case "GlobalMods":
                    this.dispatchGlobalMods(datum.d as Server.GlobalModeratorRecord[], cafe.navbar.modWindow.moderators)
                    break;
                case "DomainMods":
                    this.dispatchDomainMods(datum.d as Server.DomainModeratorRecord[], cafe.navbar.modWindow.moderators)
                    break;
                case "DomainReport":
                    this.dispatchDomainReport(datum.d as Server.AdminDomainReport, cafe.navbar.adminWindow)
                    break;
                case "UsersReport":
                    this.dispatchUsersReport(datum.d as Server.AdminUsersReport, cafe.navbar.adminWindow)
            }
        }
    }

    // dispatchMessage calls displayMessage on the CafeNavbar object.
    dispatchMessage(d:Server.Message, targ:CafeNavbar) {
        targ.displayMessage(d)
    }

    // dispatchUserUpdate calls userChange on the Cafe root object to change state reflecting any changes that may have happened to the User and to change what is visible on their profile.
    dispatchUserUpdate(d: Server.UserProfile, targ:Cafe) {
        targ.userChange(d)
    }

    // dispatchFeedbackUpdate calls updateFeedback on a FeedbackReportSection.
    dispatchFeedbackUpdate(d: Server.FeedbackRecord, targ: FeedbackReportSection) {
        targ.updateFeedback(d)
    }

    // dispatchCommentUpdate calls updateComment on a CafeCommentsWindow
    dispatchCommentUpdate(d: Server.Comment, targ: CafeCommentsWindow) {
        targ.updateComment(d)
    }

    // dispatchComments calls populateNewComments on a CafeCommentsWindow
    dispatchComments(d: Server.Comment[], targ:CafeCommentsWindow) {
        targ.populateNewComments(d)
    }

    // dispatchUserProfile calls changeProfile on a CafeUserDisplay to allow the user to view profile information for some other user.
    dispatchUserProfile(d: Server.UserProfile, targ: CafeUserDisplay) {
        targ.changeProfile(d)
    }

    // dispatchLoginResponse calls userChange on the Cafe root object to change state reflecting any changes that may have happened to the User and to change what is visible on their profile. 
    dispatchLoginResponse(d: Server.LoginResponse, targ:Cafe) {
        targ.userChange(d.LoggedInAs)
    }

    // dispatchLogoutResponse calls userChange on the Cafe root object to change state reflecting the logging-out of the user profile.
    dispatchLogoutResponse(d: Server.LogoutResponse, targ:Cafe) {
        targ.userChange(d)
    }

    // dispatchPwResetCodeResponse calls displayResetCodeInput on a CafePWResetWindow.
    dispatchPwResetCodeResponse(d: {}, targ:CafePWResetWindow) {
        targ.displayResetCodeInput()
    }

    // dispatchPwResetReqResponse calls showPWResetWindow on CafeNavbar.
    dispatchPwResetReqResponse(d: {}, targ:CafeNavbar) {
        targ.showPWResetWindow()
    }

    // dispatchReqVerificationResponse calls updateMessage on a CafeMessageDisplay indicating that a verification email has been dispatched.
    dispatchReqVerificationResponse(d: {}, targ:CafeMessageDisplay) {
        targ.updateMessage({
            Success: true,
            Text: "A new verification email has been dispatched; check your email."
        })
    }

    // dispatchNewPassResponse calls updateMessage on a CafeMessageDisplay to indicate to the user that their password has been updated.
    dispatchNewPassResponse(d: {}, targ:CafeMessageDisplay) {
        targ.updateMessage({
            Success: true,
            Text: "Your password has been updated."
        })
    }

    // dispatchVerifyResponse calls updateMessage on a CafeMessageDisplay to indicate to the user their email has been verified.
    dispatchVerifyResponse(d: {}, targ:CafeMessageDisplay) {
        targ.updateMessage({
            Success: true,
            Text: "Your email has been verified."
        })
    }

    // dispatchBanRecords calls populateBanRecords on a BanRecordsSection.
    dispatchBanRecords(d: Server.BanRecord[], targ:BanRecordsSection) {
        targ.populateBanRecords(d)
    }

    // dispatchCommentReports calls populateCommentReports on a CommentReportsSection.
    dispatchCommentReports(d: Server.CommentReport[], targ:CommentReportsSection) {
        targ.populateCommentReports(d)
    }

    // dispatchCommentReportUpdate calls updateCommentReport on a CommentReportsSection.
    dispatchCommentReportUpdate(d: Server.CommentReport, targ:CommentReportsSection) {
        targ.updateCommentReport(d)
    }

    // dispatchFeedbacks calls populateFeedback on a FeedbackReportSeciton.
    dispatchFeedbacks(d: Server.FeedbackRecord[], targ:FeedbackReportSection) {
        targ.populateFeedback(d)
    }

    // dispatchLogs calls populatLogs on a LogsSection.
    dispatchLogs(d: Server.AdminAccessLog[], targ:LogsSection) {
        targ.populateLogs(d)
    }

    // dispatchModRecords calls populateModActions on a ModActionsReportSection.
    dispatchModRecords(d: Server.ModerationRecord[], targ:ModActionsReportSection) {
        targ.populateModActions(d)
    }

    // dispatchGlobalMods calls populateGlobalModerators on a ModeratorsReportSection.
    dispatchGlobalMods(d: Server.GlobalModeratorRecord[], targ:ModeratorsReportSection) {
        targ.populateGlobalModerators(d)
    }
    // dispatchDomainMods calls populateDomainModerators on a ModeratorsReportSection.
    dispatchDomainMods(d: Server.DomainModeratorRecord[], targ:ModeratorsReportSection) {
        targ.populateDomainModerators(d)
    }
    // dispatchDomainReport calls showDomainReport on a CafeAdminWindow.
    dispatchDomainReport(d: Server.AdminDomainReport, targ:CafeAdminWindow) {
        targ.showDomainReport(d)
    }
    // dispatchUsersReport calls showUsersReport on a CafeAdminWindow.
    dispatchUsersReport(d: Server.AdminUsersReport, targ:CafeAdminWindow) {
        targ.showUsersReport(d)
    }
}