import { Server } from "./SERVER";
import { Settings } from "./Settings";
import { UIInput } from "./UIInput";


export class CafeMessageDisplay extends UIInput<Server.Message> {

    updateMessage(d:Server.Message) {}

}

export class CafeUserDisplay extends UIInput<Server.UserProfile> {
    changeProfile(d: Server.UserProfile) {}
}

export class CafeFeedbackDisplay extends UIInput<Server.FeedbackRecord> {

}

export class CafeOwnProfileDisplay extends UIInput<Server.UserProfile> {

    updateProfile(d:Server.UserProfile) {

    }
}

export class CafeBanRecordDisplay extends UIInput<Server.BanRecord> {

}

export class CafeCommentReportDisplay extends UIInput<Server.CommentReport> {

}

export class CafeLogDisplay extends UIInput<Server.AdminAccessLog> {

}

export class CafeModRecordsDisplay extends UIInput<Server.ModerationRecord> {

}

export class CafeGlobalModDisplay extends UIInput<Server.GlobalModeratorRecord> {

}

export class CafeDomainModDisplay extends UIInput<Server.DomainModeratorRecord> {

}

export class CafeDomainReportDisplay extends UIInput<Server.AdminDomainReport> {

}

export class CafeUsersReportDisplay extends UIInput<Server.AdminUsersReport> {

}

export class CafeCommentSortDisplay extends UIInput<Settings> {

    updateFromSettings(settings:Settings) {
        
    }
}
