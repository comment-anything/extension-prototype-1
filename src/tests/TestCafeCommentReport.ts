import { TestDomLogs } from "./domlogs";
import { DRTestWindow } from "./DRTestWindow";


import { Server } from "../SERVER_DATA";
import { CafeCommentReport } from "../CafeCommentReport";
import { CafeEventHandle } from "../Events";
import { rando } from "./rando";

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

        this.bindRandomizer( ()=> {
            return {
                Id: rando.posInt(),
                ReportingUserId: rando.posInt(),
                ReportingUsername: rando.username(),
                TimeReported: Date.now(),
                Reason: rando.numSentences(0, 10),
                CommentData: {id: rando.posInt(),
                    time: Date.now(),
                    parent: 0,
                    username: rando.username(),
                    content: rando.numSentences(1,5),
                    hidden: false,
                    removed: false,
                    troll: {
                        ups: rando.num(10),
                        downs: rando.num(10),
                        alreadyVoted: rando.nearZero()
                    },
                    funny: {
                        ups: rando.num(10),
                        downs: rando.num(10),
                        alreadyVoted: rando.nearZero()
                    },
                    factual: {
                        ups: rando.num(10),
                        downs: rando.num(10),
                        alreadyVoted: rando.nearZero()
                    },
                    agree: {
                        ups: rando.num(10),
                        downs: rando.num(10),
                        alreadyVoted: rando.nearZero()
                    }
                }
            }
        }, CafeCommentReport)
    }
    
}