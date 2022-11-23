
/**
 * The Server type is based the Server-Client Communication Entity Classes described in the Specifications document.
 * 
 * Some refactoring has occurred. Those and further change should be logged in docs/changes from specs.md
 */

export namespace Server {
    type Comment = { // e
        CommentId: number,
        Parent: number
        UserId: number
        Username: string
        TimePosted: number
        Content: string 
        Hidden: boolean
        Removed: boolean
        Funny: CommentVoteDimension
        Factual: CommentVoteDimension
        Agree: CommentVoteDimension
    }
    
    type CommentVoteDimension = { // e
        Ups: number
        Downs: number
        AlreadyVoted: -1 | 0 | 1
    }

    type CommentReport = {
        ReportId: number
        ReportingUserId: number
        ReportingUsername: string
        TimeReported: number
        ReasonReported: string
        ActionTaken: string
        CommentData: Server.Comment
    }

    type ModerationRecord = {
        ModerationRecordId: number
        ModeratorUserId: number
        ModeratorUsername: string
        TimeModerated: number
        Reason: string
        SetHiddenTo: boolean
        SetRemovedTo: boolean
        AssociatedReport: Server.CommentReport
    }

    type UserProfile = {
        UserId: number
        Username: string
        ProfileBlurb: string
        CreatedOn: number
        IsAdmin: boolean
        IsGlobalModerator: boolean
        IsDomainModerator: boolean
        DomainsModerating: string[]
    }

    type AdminUsersReport = {
        UserCount: number
        LoggedInUserCount: number
        NewestUserId: number
        NewestUsername: string
    }
    
    type AdminAccessLog = {
        LogId: number
        Ip: string
        Url: string
        UserId: number
        Username: string
    }
    
    type FeedbackRecord = {
        Id: number
        SubmittedAt: number
        FeedbackType: string
        UserId: number
        Username: string
        Content: string
        Hide: boolean
    }
    
    type GlobalModeratorRecord = {
        RecordId: number
        GrantedBy: number
        GrantedByUsername: string
        GrantedTo: number
        GrantedToUsername: string
        GrantedAt: number 
    }

    type AdminDomainReport = {
        Domain: string
        CommentCount: number
    }

    type DomainModeratorRecord = {
        RecordId: number
        Domain: string
        GrantedBy: number
        GrantedByUsername: string
        GrantedTo: number
        GrantedToUsername: string
        GrantedAt: number 
    }
    
    type BanRecord = { // e
        BanRecordId: number
        BannedUserId: number
        BannedByUserID: number
        BannedByUsername: string
        BannedUsername: string
        BannedFrom: string
        BannedAt: number
        Reason: string
        SetBannedTo: boolean
    }
    
    type LoginResponse = {
        LoggedInAs: UserProfile
    }
    
    type LogoutResponse = {}
}