import { CafeComment } from "../CafeComment";
import { CafeEventHandle } from "../Events";
import { Server } from "../SERVER_DATA";
import { dom } from "../utility/dom";
import { TestDomLogs } from "./domlogs";
import { DRTestWindow } from "./DRTestWindow";

export class CommentEventUITests extends DRTestWindow<Server.Comment>{
    constructor() {
        super()
        this.bindStamper({
            id: 1,
            time: Date.now(),
            parent: 0,
            username: "Sven",
            content: "I've written a comment.",
            hidden: false,
            removed: false,
            troll: {
                ups: 1,
                downs: 0,
                alreadyVoted: 0
            },
            funny: {
                ups: 0,
                downs: 0,
                alreadyVoted: 0
            },
            factual: {
                ups: 3,
                downs: 0,
                alreadyVoted: 0
            },
            agree: {
                ups: 0,
                downs: 3,
                alreadyVoted: 1
            }
        }, CafeComment)
        document.addEventListener(CafeEventHandle, (e:any)=> {
            this.logs.log("Received an event of type " + CafeEventHandle)
            this.logs.log(" It has data: "+ JSON.stringify(e.detail))
        })
        
    }
}