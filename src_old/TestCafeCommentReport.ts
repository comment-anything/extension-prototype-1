import { TestDomLogs } from "../src/tests/domlogs";
import { DRTestWindow } from "../src/tests/DRTestWindow";


import { Server } from "../src/SERVER";
import { CafeCommentReport } from "./CafeCommentReport";
import { CafeEventHandle } from "../src/Events";
import { rando } from "../src/tests/rando";

export class TestCafeCommentReport extends DRTestWindow<Server.CommentReport>{
    constructor() {
        super()
        this.bindStamper({
            reportId: 100,
            reportingUserId: 6,
            reportingUsername: "LBytes",
            timeReported: Date.now(),
            reasonReported: "This comment stank.",
            commentData: {
                commentId: 45,
                parent: 0,
                username: "booger",
                timePosted: Date.now()-1000*60*30,
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
                reportId: rando.posInt(),
                reportingUserId: rando.posInt(),
                reportingUsername: rando.username(),
                timeReported: Date.now(),
                reasonReported: rando.numSentences(0, 10),
                commentData: {commentId: rando.posInt(),
                    timePosted: Date.now(),
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