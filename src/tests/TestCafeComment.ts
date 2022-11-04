import { Cafe } from "../cafe";
import { CafeComment } from "../CafeComment";
import { CafeEventHandle } from "../Events";
import { Server } from "../SERVER_DATA";
import { dom } from "../utility/dom";
import { TestDomLogs } from "./domlogs";
import { DRTestWindow } from "./DRTestWindow";
import { rando } from "./rando";

export class TestCafeComment extends DRTestWindow<Server.Comment>{
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

        this.bindRandomizer(()=> {
            return {
                id: rando.posInt(),
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
        }, CafeComment)
        
    }
}