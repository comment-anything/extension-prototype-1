

export const CafeEventHandle = "CafeEvent"
export type CafeEventTargets = "Comment" | "CommentReport"
export type CommentVoteTypes = "funny" | "factual" | "troll" | "agree"
export type CommentOtherInteractions = "reply"
export type CommentReportActions = "hide" | "remove" | "noaction"

export type CafeEvent = {
    target: CafeEventTargets
    id?: number
    type: CommentVoteTypes | CommentOtherInteractions
    value: any 
}
