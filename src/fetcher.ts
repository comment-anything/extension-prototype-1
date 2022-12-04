import { Client } from "./CLIENT";
import {Server} from "./SERVER";


export type ClientMap = {
    "ban" :                 Client.Ban,
    "changeEmail" :         Client.ChangeEmail,
    "changeFeedback" :      Client.ChangeFeedback,
    "changeProfile" :       Client.ChangeProfileBlurb,
    "newComment" :          Client.CommentReply,
    "voteComment" :         Client.CommentVote,
    "newFeedback" :         Client.Feedback,
    "comments" :            Client.GetComments,
    "user" :                Client.GetUserProfile,
    "login" :               Client.Login,
    "logout":               Client.Logout
    "moderate" :            Client.Moderate,
    "pwResetCode" :         Client.PasswordResetCode,
    "pwResetReq" :          Client.PasswordResetRequest,
    "newReport" :           Client.PostCommentReport,
    "register" :            Client.Register,
    "reqVerification" :     Client.RequestVerification,
    "newPassword" :         Client.SetNewPass,
    "verify" :              Client.Verify,
    "viewBans" :            Client.ViewBans,
    "viewCommentReports" :  Client.ViewCommentReports,
    "viewDomainReport":     Client.ViewDomainReport,
    "viewUsersReport" :     Client.ViewUsersReport,
    "viewFeedback" :        Client.ViewFeedback,
    "viewLogs" :            Client.ViewLogs,
    "viewModRecords" :      Client.ViewModRecords,
    "viewMods" :            Client.ViewMods
    "amILoggedIn":          {}
}

export type ServerMap = {
    "Message": Server.Message,
    "UserUpdate": Server.UserProfile
    "FeedbackUpdate": Server.FeedbackRecord
    "CommentUpdate": Server.Comment
    "Comments": Server.Comment[]
    "UserProfile": Server.UserProfile
    "LoginResponse": Server.UserProfile
    "LogoutResponse": Server.LogoutResponse
    "PwResetCodeResponse": {}
    "PwResetReqResponse": {}
    "ReqVerificationResponse": {}
    "NewPassResponse": {}
    "VerifyResponse": {}
    "BanRecords": Server.BanRecord[]
    "CommentReports": Server.CommentReport[]
    "CommentReportUpdate": Server.CommentReport
    "Feedbacks": Server.FeedbackRecord[]
    "Logs": Server.AdminAccessLog[]
    "ModRecords": Server.ModerationRecord[]
    "GlobalMods": Server.GlobalModeratorRecord[]
    "DomainMods": Server.DomainModeratorRecord[]
    "DomainReport": Server.AdminDomainReport
    "UsersReport": Server.AdminUsersReport
}



export type ServerResponse<T extends keyof ServerMap> = {
    // t represents the response type from the server
    t: T
    // d represents the data from the server
    d: ServerMap[T]
}


// Fetcher is responsible for dispatching requests to the server at the appropriate API endpoints and populating its responses object with the server responses.
export class Fetcher {
    responses: ServerResponse<keyof ServerMap>[];
    constructor() {
        this.responses = []         
    }
    fetch<T extends keyof ClientMap>(eventAndApiEndpoint: T, data: ClientMap[T], callback:()=>void) {
        //
    }

    getAndClearResponses(): ServerResponse<keyof ServerMap>[] {
        let r = this.responses
        this.responses = []
        return this.responses
    }


}