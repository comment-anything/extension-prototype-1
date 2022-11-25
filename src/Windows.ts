import { CafeFeedbackDisplay, CafeDomainReportDisplay, CafeUsersReportDisplay, CafeCommentSortDisplay } from "./Boundaries";
import { CafeComment } from "./CafeComment";
import { Server } from "./SERVER";
import { Settings } from "./Settings";
import { UIInput } from "./UIInput";



export class CafeWindow {

}

export class CafeCommentsWindow extends CafeWindow {

    lastSettings?: Settings
    displayedComments: CafeComment[]
    commentSortSettings: CafeCommentSortDisplay

    populateNewComments(d: Server.Comment[]) {

    }
    updateComment(d: Server.Comment) {

    }
    resortComments() {

    }
    updateFromSettings(settings:Settings) {
        this.lastSettings = settings
        this.commentSortSettings.updateFromSettings(settings)
        this.resortComments()
    }
}

export class CafeSettingsWindow extends CafeWindow {

    commentSortSettings: CafeCommentSortDisplay

    updateFromSettings(settings:Settings) {
        this.commentSortSettings.updateFromSettings(settings)
    }

}

export class CafeModerationWindow extends CafeWindow {
    moderators: ModeratorsReportSection
    modActions: ModActionsReportSection
    banRecords: BanRecordsSection
    reports: CommentReportsSection


}

export class CafeAdminWindow extends CafeWindow {

    feedbackReport: FeedbackReportSection
    logs: LogsSection
    domainReports: CafeDomainReportDisplay[]
    userReport: CafeUsersReportDisplay

    showDomainReport(d: Server.AdminDomainReport) {

    }
    showUsersReport(d: Server.AdminUsersReport) {
        
    }
}

export class CafeLoginWindow extends CafeWindow {

}

export class CafeRegisterWindow extends CafeWindow {

}

export class CafePWResetWindow extends CafeWindow {

    displayResetCodeInput() {}
}







export class CafeWindowSection {

}


export class FeedbackReportSection extends CafeWindowSection {

    feedbacks: CafeFeedbackDisplay[]

    updateFeedback(d: Server.FeedbackRecord) {
        // create or update a feedback record
    }
    populateFeedback(d: Server.FeedbackRecord[]) {
        this.clearFeedback()
        // create a feedback record for each item in the array
    }
    clearFeedback() {}
}

export class ModeratorsReportSection extends CafeWindowSection {

    populateDomainModerators(d: Server.DomainModeratorRecord[]) {}
    populateGlobalModerators(d: Server.GlobalModeratorRecord[]) {}
}

export class ModActionsReportSection extends CafeWindowSection {

    populateModActions(d: Server.ModerationRecord[]) {

    }
    updateModAction(d: Server.ModerationRecord) {}
    clearModActions() {}
}

export class BanRecordsSection extends CafeWindowSection {
    populateBanRecords(d: Server.BanRecord[]) {

    }
    clearBanRecords(){}
}

export class CommentReportsSection extends CafeWindowSection {
    populateCommentReports(d: Server.CommentReport[]) {

    }
    updateCommentReport(d: Server.CommentReport) {}
    clearCommentReports(){}
}

export class LogsSection extends CafeWindowSection {
    populateLogs(d: Server.AdminAccessLog[]) {

    }
    clearLogs(){}
}



