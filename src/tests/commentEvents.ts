import { CafeComment } from "../CafeComment";
import { CafeEventHandle } from "../Events";
import { dom } from "../utility/dom";
import { TestDomLogs } from "./domlogs";

export class CommentEventUITests {
    logs: TestDomLogs
    el: HTMLDivElement;
    nav: HTMLDivElement
    toDestroy: {destroy():void}[]
    comContainer: HTMLDivElement;
    constructor() {
        this.el = dom.div()
        this.nav = dom.div()
        let rlContainer = dom.div(undefined, undefined, {"display":"flex"})
        this.logs = new TestDomLogs()
        this.el.append(this.nav, rlContainer)
        this.comContainer = dom.div()
        rlContainer.append(this.comContainer, this.logs.el)

        this.toDestroy = []
        let basicCommentTestButton = dom.button("comment")
        this.nav.append(basicCommentTestButton)

        let testSingleCommentCb = this.testAComment.bind(this)
        basicCommentTestButton.addEventListener("click", testSingleCommentCb)

        function deleteComs() {
            for(let x of this.toDestroy) {
                x.destroy()
            }
            this.toDestroy = []
        }

        let delCommentsButton = dom.button("delete all comments")
        this.nav.append(delCommentsButton)
        delCommentsButton.addEventListener("click", deleteComs.bind(this))
    }

    testAComment() {
        let com = new CafeComment({
            id: 1,
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
        })
        this.comContainer.append(com.el)
        this.toDestroy.push(com)
        document.addEventListener(CafeEventHandle, (e:any)=> {
            this.logs.log("Received an event of type " + CafeEventHandle)
            this.logs.log(" It has data: "+ JSON.stringify(e.detail))
        })
    }
}