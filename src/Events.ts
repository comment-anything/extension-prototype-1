

export const CafeEventHandle = "CafeEvent"
export type CafeEventTargets = "Comment"
export type CommentVoteTypes = "funny" | "factual" | "troll" | "agree"
export type CommentOtherInteractions = "reply"

export type CafeEvent = {
    target: CafeEventTargets
    id?: number
    type: CommentVoteTypes | CommentOtherInteractions
    value: any 
}
