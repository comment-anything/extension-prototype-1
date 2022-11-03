

export namespace Server {
    type Comment = {
        id: number,
        parent: number
        username: string
        time: number
        content: string 
        hidden: boolean
        removed: boolean
        funny: CommentVotes
        troll: CommentVotes
        factual: CommentVotes
        agree: CommentVotes
    }
    type CommentVotes = {
        ups: number
        downs: number
        alreadyVoted: -1 | 0 | 1

    }

    type CommentReport = {
        Id: number
        ReportingUserId: number
        ReportingUsername: string
        TimeReported: number
        Reason: string
        CommentPosterId: number
        CommentPosterUsername: string
        CommentContent: string
        CommentTime: number
        Funny: number
        Troll: number
        Factual: number
        Agree: number
    }
}