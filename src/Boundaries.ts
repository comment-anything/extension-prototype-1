import { Server } from "./SERVER";
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

export class ModRecordsDisplay extends UIInput<Server.ModerationRecord> {

}

export class GlobalModDisplay extends UIInput<Server.GlobalModeratorRecord> {

}

export class DomainModDisplay extends UIInput<Server.DomainModeratorRecord> {

}

export class DomainReportDisplay extends UIInput<Server.AdminDomainReport> {

}

export class UsersReportDisplay extends UIInput<Server.AdminUsersReport> {

}
