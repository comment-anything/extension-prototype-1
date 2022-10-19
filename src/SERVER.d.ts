


type ServerResponseMap = {
    "LoginResponse": LoginResponse
    "LogoutResponse": LogoutResponse
    "NewComments" : NewComments
    "NewPage": NewPage
    "NewAlerts": NewAlerts
}

export type ResponseType<T extends keyof ServerResponseMap> = ServerResponseMap[T]

type ServerResponseTypes = LoginResponse | LogoutResponse | NewComments | NewPage | NewAlerts

export type ServerResponse = Array<ServerResponseTypes>


type LoginResponse = {
    type: "LoginResponse"
    username: string
}

type LogoutResponse = {
    type: "LogoutResponse"
}

type NewComments = {
    type: "NewComments"
    data: CommentData[]
}

type NewPage = {
    type: "NewPage"
    data: CommentData[]
}

type NewAlerts = {
    type: "NewAlerts"
    data: undefined
}


type CommentData = {
    id:number
    parent:number
    username: string
    text: string 
    date: number 
    reactions: {
        funny: ReactionData
        troll: ReactionData
        factual: ReactionData
        informative: ReactionData
    }
}

type ReactionData = {
    ups: number
    downs: number
}