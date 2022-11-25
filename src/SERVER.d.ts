
/**
 * The Server type describes Server-Client communication entities sent from the server to the front end.
 */
export namespace Server {
    // AdminAccessLog contains data needed by Admins to see an access log.
    type AdminAccessLog = {
        // The IP of anyone accessing the logs.
        Ip : string
        // The ID of the current log.
        LogId : number
        // The full URL that was accessed.
        Url : string
        // The ID of the user this access record is associated with, if the user was logged in. Otherwise, this field will be empty or 0.
        UserId : string
        // The username of the accessor If applicable
        Username : string
    }

    // AdminDomainReport contains data needed by Admins to see information about activity on a particular domain.
    type AdminDomainReport = {
        // number of comments on a domain.
        CommentCount : number
        // the string of the domain.
        Domain : string
    }

    // AdminUsersReport is dispatched when an Admin requests the Users report.
    type AdminUsersReport = {

        // The amount of users that are currently logged in.
        LoggedInUserCount : number

        // The newest user’s ID  to be created.
        NewestUserId : number

        // The username of the newest user.
        NewestUsername : string

        // The amount of users that have been made.
        UserCount : number
    }

    // BanRecord contains data about a banning or unbanning which occurred, which is used by Admins to see information about Moderator actions in certain reports.
    type BanRecord = {

        // used for when a user is banned from a specific domain and not the extension as a whole.
        BannedFrom : string

        // the unique id of the banrecord
        BanRecordId : number

        // the id of a user that is banned.
        BannedUserId : number

        // the username of a user that is banned.
        BannedUsername : string

        // the id of the user that did the banning
        BannedByUserID : number

        // the username of the user that did the banning
        BannedByUsername : string

        // Whether the user was banned (true) or unbanned (false).
        SetBannedTo : boolean

        // When they were banned
        BannedAt : number

        // Why they were banned
        Reason : string
    }

    // Comment provides the data the Front End needs to render a comment.
    type Comment = {

        // a number corresponding to a unique user ID
        UserId : string

        // A number corresponding to the comment’s unique ID.
        CommentId : number

        // The text content of the comment.
        Content : string

        // An instance of CommentVote, reflecting the number of “factual” and “not factual” votes.
        Factual : CommentVoteDimension

        // An instance of CommentVote, reflecting the number of “funny” and “unfunny” votes.
        Funny : CommentVoteDimension

        // An instance of CommentVote, reflecting the number of agree and disagree votes.
        Agree : CommentVoteDimension

        // A booleanean value, true if the comment was moderated to be hidden.
        Hidden : boolean

        // The ID of the comment that is the parent of this comment, or 0 if it is a root-level comment.
        Parent : number

        // A booleanean value, true if the comment was removed.
        Removed : boolean

        // The time the comment was posted.
        TimePosted : number

        // The username of the user who posted the comment.
        Username : string
    }

    // CommentReport contains data the Front End needs to render a CommentReport, which are reports submitted by users and which Moderators can review and take action on.
    type CommentReport = {
        // If the report has been addressed
        ActionTaken : boolean

        // The data of a comment.
        CommentData : Comment

        // The reason for reporting a comment.
        ReasonReported : string

        // The unique ID of the report.
        ReportId : number

        // The unique ID of the user who reported the comment.
        ReportingUserId : number

        // The name of the user that made the comment.
        ReportingUsername : string

        // The time that a comment was reported at.
        TimeReported : number
    }

    // CommentVoteRecord contains data for the number of votes on a comment.
    type CommentVoteDimension = {

        // Whether the user requesting the data has already voted on the comment. It will be -1 if they have already voted down, 0 if they have not voted, and 1 if they have already voted up.
        AlreadyVoted : number

        // The number of downvotes on the comment.
        Downs : number

        // The number of upvotes on the comment.
        Ups : number
    }

    // DomainModeratorRecord contains data needed by Admins to see information about DomainModerator assignments.
    type DomainModeratorRecord = {

        // the domains the moderator is allowed to moderate
        Domain : string[]

        // When the user became aDomainModerator.
        GrantedAt : number

        // The ID of the admin or GlobalModerator that promoted the user to a DomainModera tor.
        GrantedBy : number

        // The username of the admin or GlobalModerator that promoted the user to a DomainModer ator.
        GrantedByUsername : string

        // The ID of the DomainModerator.
        GrantedTo : number

        // The username of the DomainModerator.
        GrantedToUsername : string

        // The ID of the DomainModerators record.
        RecordId : number
    }

    // FeedbackRecord contains data the Front End needs to render a FeedbackRecord, which is a record of a user-submitted feedback, viewed by an Admin, such as a feature request, or bug report.
    type FeedbackRecord = {

        // The text of the feedback, limited to 1000 characters.
        Content : string

        // Whether or not this feedback is hidden, that is to say, the admins do not want to see it again by default.
        Hide : boolean

        // number
        Id : number

        // The time this feedback was submitted.
        SubmittedAt : number

        // Indicates whether this feedback is a feature request, “feature”, bug report “bug”, or
        FeedbackType : string

        // The ID of the user who submitted the feedback.
        Userid : number

        // The username of the user who submitted the feedback.
        Username : string
    }

    // GlobalModerator record contains data needed by Admins to see information about GlobalModerator assignments.
    type GlobalModeratorRecord = {

        // When the user became a GlobalModerator.
        GrantedAt : number

        // The ID of the admin that promoted the user to a GlobalModerator.
        GrantedBy : number

        // The username of the admin that promoted the user to a GlobalModerator.
        GrantedByUsername : string

        // The ID of the GlobalModerator.
        GrantedTo : number

        // The username of the GlobalModerator.
        GrantedToUsername : string

        // The ID of the GlobalModerators record.
        RecordId : number
    }

    // LoginResponse is sent to the client when they successfully log in.
    type LoginResponse = {

        // The profile of a user that logged in.
        LoggedInAs : UserProfile
    }

    type LogoutResponse = {}

    // Message is a general communication entity used to provide feedback to a client that some action has completed (or not completed) on requests where the client has not asked for any particular data.
    type Message = {
        Success : boolean
        Text : string
    }

    // ModerationRecord contains data the Front End needs to render a ModerationRecord, which is a record of a moderator action, such as hiding or removing a comment.
    type ModerationRecord = {

        // contains data the Front End needs to render a CommentReport, which are reports submitted by users and which Moderators can review and take action on.
        AssociatedReport : CommentReport

        // The ID of the moderator's past actions.
        ModerationRecordId : number

        // The id of the moderator.
        ModeratorUserId : number

        // The username of the moderator.
        ModeratorUsername : string

        // the reason the moderator decided to take action on the comment.
        Reason : string

        // What they moderato set the comment's "hidden" field to
        SetHiddenTo : boolean

        // What the moderator set the comment's "removed" field to.
        SetRemovedTo : boolean

        // The current time that the moderator took action on a reported comment.
        TimeModerated : number
    }

    // UserProfile contains data needed by the Front End to display a profile for a user.
    type UserProfile = {

        // The date that the user’s account was created on.
        CreatedOn : number

        // The server will generate a comma separated list of all domains that the user is responsible for moderating, if applicable. Otherwise, this will be an empty string.
        DomainsModerating : string[]

        //  If the user is Admin.
        IsAdmin : boolean

        //  If the user is DomainModerator.
        IsDomainModerator : boolean

        // If the user is GlobalModerator.
        IsGlobalModerator : boolean

        // The profile of the user.
        ProfileBlurb : string

        // The ID of the user.
        UserId : number

        // The name of the user.
        Username : string
    }
}