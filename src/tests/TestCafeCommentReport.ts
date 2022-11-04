import { TestDomLogs } from "./domlogs";
import { DRTestWindow } from "./DRTestWindow";


import { Server } from "../SERVER_DATA";
import { CafeCommentReport } from "../CafeCommentReport";
import { CafeEventHandle } from "../Events";

export class TestCafeCommentReport extends DRTestWindow<Server.CommentReport>{
    constructor() {
        super()
        this.bindStamper({
            Id: 100,
            ReportingUserId: 6,
            ReportingUsername: "LBytes",
            TimeReported: Date.now(),
            Reason: "This comment stank.",
            CommentData: {
                id: 45,
                parent: 0,
                username: "booger",
                time: Date.now()-1000*60*30,
                content: "Sonic stinks.",
                hidden: false,
                removed: false,
                funny: { ups:0, downs:0, alreadyVoted: 0 },
                factual: { ups:0, downs:0, alreadyVoted: 0 },
                troll: { ups:0, downs:0, alreadyVoted: 0 },
                agree: { ups:0, downs:0, alreadyVoted: 0 }
            }
        }, CafeCommentReport)
        document.addEventListener(CafeEventHandle, (e:any)=> {
            this.logs.log("Received an event of type " + CafeEventHandle)
            this.logs.log(" It has data: "+ JSON.stringify(e.detail))
        })
    }
    
}