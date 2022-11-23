
/**
 * The Server type is based the Server-Client Communication Entity Classes described in the Specifications document.
 * 
 * Some refactoring has occurred. Those and further change should be logged in docs/changes from specs.md
 */

export namespace Server {
    type Comment = {
        commentId: number,
        parent: number
        userId: number
        username: string
        timePosted: number
        content: string 
        hidden: boolean
        removed: boolean
        funny: CommentVoteDimension
        factual: CommentVoteDimension
        agree: CommentVoteDimension
    }
    type CommentVoteDimension = {
        ups: number
        downs: number
        alreadyVoted: -1 | 0 | 1
    }

    type CommentReport = {
        reportId: number
        reportingUserId: number
        reportingUsername: string
        timeReported: number
        reasonReported: string
        actionTaken: string
        commentData: Server.Comment
    }

    type ModerationRecord = {
        moderationRecordId: number
        moderatorUserId: number
        moderatorUsername: string
        timeModerated: number
        reason: string
        setHiddenTo: boolean
        setRemovedTo: boolean
        associatedReport: Server.CommentReport
    }

    type UserProfile = {
        userId: number
        username: string
        profileBlurb: string
        createdOn: number
        isAdmin: boolean
        isGlobalModerator: boolean
        isDomainModerator: boolean
        domainsModerating: string[]
    }

    type AdminUsersReport = {
        userCount: number
        loggedInUserCount: number
        newestUserId: number
        newestUsername: string
    }
    type AdminAccessLog = {
        logId: number
        ip: string
        url: string
        userId: number
        username: string
    }
    type FeedbackRecord = {
        id: number
        submittedAt: number
        feedbackType: string
        userId: number
        username: string
        content: string
        hide: boolean
    }
    type GlobalModeratorRecord = {
        recordId: number
        grantedBy: number
        grantedByUsername: string
        grantedTo: number
        grantedToUsername: string
        grantedAt: number 
    }

    type AdminDomainReport = {
        domain: string
        commentCount: number
    }

    type DomainModeratorRecord = {
        recordId: number
        domain: string
        grantedBy: number
        grantedByUsername: string
        grantedTo: number
        grantedToUsername: string
        grantedAt: number 
    }
    type BanRecord = {
        banRecordId: number
        bannedUserId: number
        bannedByUserID: number
        bannedByUsername: string
        bannedUsername: string
        bannedFrom: string
        bannedAt: number
        reason: string
        setBannedTo: boolean
    }
    type LoginResponse = {
        loggedInAs: UserProfile
    }
}