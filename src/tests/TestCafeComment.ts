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
            UserId: 10,
            CommentId: 1,
            TimePosted: Date.now(),
            Parent: 0,
            Username: "Sven",
            Content: "I've written a comment.",
            Hidden: false,
            Removed: false,
            Funny: {
                Ups: 0,
                Downs: 0,
                AlreadyVoted: 0
            },
            Factual: {
                Ups: 3,
                Downs: 0,
                AlreadyVoted: 0
            },
            Agree: {
                Ups: 0,
                Downs: 3,
                AlreadyVoted: 1
            }
        } as Server.Comment, CafeComment)
        document.addEventListener(CafeEventHandle, (e:any)=> {
            this.logs.log("Received an event of type " + CafeEventHandle)
            this.logs.log(" It has data: "+ JSON.stringify(e.detail))
        })

        this.bindRandomizer(()=> {
            return {
                UserId: rando.posInt(),
                CommentId: rando.posInt(),
                TimePosted: Date.now(),
                Parent: 0,
                Username: rando.username(),
                Content: rando.numSentences(1,5),
                Hidden: false,
                Removed: false,
                Funny: {
                    Ups: rando.num(10),
                    Downs: rando.num(10),
                    AlreadyVoted: rando.nearZero()
                },
                Factual: {
                    Ups: rando.num(10),
                    Downs: rando.num(10),
                    AlreadyVoted: rando.nearZero()
                },
                Agree: {
                    Ups: rando.num(10),
                    Downs: rando.num(10),
                    AlreadyVoted: rando.nearZero()
                }
            } as Server.Comment
        }, CafeComment)
        
    }
}