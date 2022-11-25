import { ClientMap, ServerMap } from "./fetcher"


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



type ClientEvents = {
    [K in keyof ClientMap]: CustomEvent<ClientMap[K]>
}

// ref: typing custom events on the DOM https://stackoverflow.com/questions/43001679/how-do-you-create-custom-event-in-typescript

