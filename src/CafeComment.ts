import { Server } from "./SERVER_DATA"
import { dom } from "./utility/dom"
import { UIInput } from "./UIInput"
import { CafeEvent, CafeEventHandle, CommentVoteTypes } from "./Events"


export class CafeComment extends UIInput{
    commentId: number
    username: HTMLDivElement
    text: HTMLDivElement
    replyButton: HTMLButtonElement
    replyBox: HTMLTextAreaElement
    childrenContainer: HTMLDivElement
    submitButton: HTMLButtonElement
    funny: CafeCommentVoter
    factual: CafeCommentVoter
    troll: CafeCommentVoter
    agree: CafeCommentVoter
    constructor(data: Server.Comment) {
        super()
        this.commentId = data.id
        this.username = dom.div(data.username)
        this.text = dom.div(data.content)
        this.replyButton = dom.button("reply")
        let replyContainer = dom.div("", "", {"display":"none"})
        this.replyBox = dom.el("textarea")
        this.submitButton = dom.button("submit")
        replyContainer.append(this.replyBox, this.submitButton)
        this.childrenContainer = dom.div()
        this.el.append(this.username, this.text, this.replyButton, replyContainer, this.childrenContainer)

        this.funny = new CafeCommentVoter("funny", data.funny)
        this.factual = new CafeCommentVoter("factual", data.factual)
        this.troll = new CafeCommentVoter("troll", data.troll)
        this.agree = new CafeCommentVoter("agree", data.agree)

        this.el.append(this.funny.el, this.factual.el, this.troll.el, this.agree.el)

        // show and hide the reply box
        function replyClicked(e:MouseEvent) {
            if(replyContainer.style.display == "none") {
                replyContainer.style.display = "block"
            } else {
                replyContainer.style.display = "none"
            }
        }
        this.clickListen(this.replyButton, replyClicked)

        // submit reply button callback and event dispatching
        function submitReply(e:MouseEvent) {
            let evData : CafeEvent = {
                target: "Comment",
                id: this.commentId,
                type: "reply",
                value: this.replyBox.value
            }
            let ev = new CustomEvent<CafeEvent>(CafeEventHandle, {
                detail: evData
            })
            document.dispatchEvent(ev)
        }
        this.clickListen(this.submitButton, submitReply.bind(this))
    }

    destroy(): void {
        this.funny.destroy()
        this.factual.destroy()
        this.agree.destroy()
        this.troll.destroy()
        super.destroy()
    }
}


class CafeCommentVoter extends UIInput{
    commentId: number
    name: CommentVoteTypes
    data: Server.CommentVotes
    nameLabel: HTMLSpanElement
    up: HTMLButtonElement
    total: HTMLSpanElement
    down: HTMLButtonElement
    constructor(name:CommentVoteTypes, votes:Server.CommentVotes) {
        super()
        this.el.style.display = "inline-block"
        this.el.style.width = "50px"
        let innerel = dom.div("","",{"display":"grid"})
        this.name = name 
        this.data = votes
        this.nameLabel = dom.span(name, "", {"gridRow":"1"})
        this.up = dom.button("up", "", {"gridRow":"2"})
        this.total = dom.span( (votes.ups - votes.downs).toString(), "", {"gridRow":"3"})
        this.down = dom.button("down", "", {"gridRow":"4"})
        innerel.append(this.nameLabel, this.up, this.total, this.down)
        this.el.append(innerel)

        if(this.data.alreadyVoted >= 0) {
            let cb = this.getDispatcher(false)
            this.clickListen(this.down, cb)
        }
        if(this.data.alreadyVoted <= 0) {
            let cb =this.getDispatcher(true)
            this.clickListen(this.up, cb)
        }
    }

    getDispatcher(up:boolean) {
        let cb = (e:any)=>{
            let evData : CafeEvent = {
                target: "Comment",
                id: this.commentId,
                type: this.name,
                value: up ? 1 : -1
            }
            let ev = new CustomEvent<CafeEvent>(CafeEventHandle, {
                detail: evData
            })
            document.dispatchEvent(ev)
        }
        cb.bind(this)
        return cb
    }
}
