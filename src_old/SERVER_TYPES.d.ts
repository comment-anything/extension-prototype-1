
export namespace TServer {
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
    type ResponseData = Array<TServer.ResponseTypes>
    type ResponseTypes = TServer.LoginResponse | TServer.LogoutResponse | TServer.NewComments | TServer.NewPage | TServer.NewAlerts
    
    type LoginResponse = {
        type: "LoginResponse"
        username: string
    }

    type LogoutResponse = {
        type: "LogoutResponse"
    }

    type NewComments = {
        type: "NewComments"
        data: TServer.CommentData[]
    }

    type NewPage = {
        type: "NewPage"
        data: TServer.CommentData[]
    }

    type NewAlerts = {
        type: "NewAlerts"
        data: undefined
    }
}


// type ServerResponseMap = {
//     "LoginResponse": LoginResponse
//     "LogoutResponse": LogoutResponse
//     "NewComments" : NewComments
//     "NewPage": NewPage
//     "NewAlerts": NewAlerts
// }

// export type ResponseType<T extends keyof ServerResponseMap> = ServerResponseMap[T]





type ReactionData = {
    ups: number
    downs: number
}