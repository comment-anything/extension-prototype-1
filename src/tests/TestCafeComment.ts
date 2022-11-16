import { Cafe } from "../cafe";
import { CafeComment } from "../CafeComment";
import { CafeEventHandle } from "../Events";
import { Server } from "../SERVER";
import { dom } from "../utility/dom";
import { TestDomLogs } from "./domlogs";
import { DRTestWindow } from "./DRTestWindow";
import { rando } from "./rando";

export class TestCafeComment extends DRTestWindow<Server.Comment>{
    constructor() {
        super()
        this.bindStamper({
            userId: 10,
            commentId: 1,
            timePosted: Date.now(),
            parent: 0,
            username: "Sven",
            content: "I've written a comment.",
            hidden: false,
            removed: false,
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
        } as Server.Comment, CafeComment)
        document.addEventListener(CafeEventHandle, (e:any)=> {
            this.logs.log("Received an event of type " + CafeEventHandle)
            this.logs.log(" It has data: "+ JSON.stringify(e.detail))
        })

        this.bindRandomizer(()=> {
            return {
                userId: rando.posInt(),
                commentId: rando.posInt(),
                timePosted: Date.now(),
                parent: 0,
                username: rando.username(),
                content: rando.numSentences(1,5),
                hidden: false,
                removed: false,
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
            } as Server.Comment
        }, CafeComment)
        
    }
}