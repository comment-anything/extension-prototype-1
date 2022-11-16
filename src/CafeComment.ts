import { Server } from "./SERVER"
import { dom } from "./utility/dom"
import { UIInput } from "./UIInput"
import { CafeEvent, CafeEventHandle, CommentVoteTypes } from "./Events"


const CafeCommentCSS = "cafeComment"
const VoterCSS = "cafeCommentVoter"


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
    agree: CafeCommentVoter
    constructor(data: Server.Comment) {
        super()
        this.el.classList.add(CafeCommentCSS)
        this.commentId = data.commentId
        this.username = dom.div(data.username)
        this.text = dom.div(data.content)
        this.replyButton = dom.button("reply")
        let replyContainer = dom.div(undefined, "", {"display":"none"})
        this.replyBox = dom.el("textarea")
        this.submitButton = dom.button("submit")
        replyContainer.append(this.replyBox, this.submitButton)
        this.childrenContainer = dom.div()
        this.el.append(this.username, this.text, this.replyButton, replyContainer, this.childrenContainer)

        this.funny = new CafeCommentVoter("funny", data.funny)
        this.factual = new CafeCommentVoter("factual", data.factual)
        this.agree = new CafeCommentVoter("agree", data.agree)

        this.el.append(this.funny.el, this.factual.el, this.agree.el)

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
            this.disable()
        }
        this.clickListen(this.submitButton, submitReply)
    }

    destroy(): void {
        this.funny.destroy()
        this.factual.destroy()
        this.agree.destroy()
        super.destroy()
    }
}

/**
 * Todo: Fix CafeCommentVoter
 * 
 * How does it get the commentId? It needs to be constructed with it or set.
 * 
 * Factory pattern? 
 */

class CafeCommentVoter extends UIInput{
    commentId: number
    name: CommentVoteTypes
    data: Server.CommentVoteDimension
    nameLabel: HTMLLabelElement
    up: HTMLButtonElement
    total: HTMLSpanElement
    down: HTMLButtonElement
    constructor(name:CommentVoteTypes, votes:Server.CommentVoteDimension) {
        super()
        this.el.classList.add(VoterCSS)
        this.el.style.display = "inline-block"
        let innerel = dom.div("","",{"display":"grid"})
        this.name = name 
        this.data = votes
        this.nameLabel = dom.textEl("label", name, "", {"gridRow":"1"})
        this.up = dom.button("+", "", {"gridRow":"2"})
        this.total = dom.span( (votes.ups - votes.downs).toString(), "", {"gridRow":"3"})
        this.down = dom.button("-", "", {"gridRow":"4"})
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
