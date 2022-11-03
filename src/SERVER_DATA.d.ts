

export namespace Server {
    type Comment = {
        id: number,
        parent: number
        username: string
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
}