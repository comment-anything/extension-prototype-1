import { CafeComment } from "./CafeComment";
import { CafeEvent, CafeEventHandle, CommentReportActions } from "./Events";
import { Server } from "./SERVER_DATA";
import { UIInput } from "./UIInput";
import { dom } from "./utility/dom";

const cssClass = "cafeModReport"
export class CafeCommentReport extends UIInput {
    data: Server.CommentReport
    cafeComment: CafeComment;
    noActionButton: HTMLButtonElement;
    hideButton: HTMLButtonElement;
    removeButton: HTMLButtonElement;
    reasonTextArea: HTMLTextAreaElement;
    submitButton: HTMLButtonElement;
    selectedAction?: CommentReportActions
    
    static setCSS(el:HTMLElement) {
        el.style.display = "flex"
        el.style.flexDirection = "row"
        el.classList.add(cssClass)
    }
    
    constructor(data: Server.CommentReport) {
        super()
        CafeCommentReport.setCSS(this.el)
        this.data = data
        this.cafeComment = new CafeComment(data.CommentData)
        let reportContainer = dom.div(undefined, )
        this.el.append(this.cafeComment.el, reportContainer)
        let reportingUser = dom.div(data.ReportingUsername)
        let reportContent = dom.div(data.Reason)
        reportContainer.append(reportingUser, reportContent)
        this.el.append(reportContainer)

        let modActionsLabel = dom.div("Mod actions")
        reportContainer.append(modActionsLabel)

        let buttonsContainer = dom.div()
        let hideButton = dom.button("Hide")
        let removeButton = dom.button("Remove")
        let noActionButton = dom.button("No action")
        let skipButton = dom.button("Skip")
        this.reasonTextArea = dom.el("textarea", undefined, {"display":"none"})
        buttonsContainer.append(hideButton, removeButton, noActionButton, skipButton)
        reportContainer.append(buttonsContainer)
        this.submitButton = dom.button("Submit", undefined, {"display":"none"})
        reportContainer.append(this.reasonTextArea, this.submitButton)

        function displayOnClick() {
            this.submitButton.style.display = "inline"
            this.reasonTextArea.style.display = "block"
        }
        this.clickListen([hideButton, removeButton, noActionButton], displayOnClick)

        function selectModAction(buttontext:string, cafeEventType:CommentReportActions) {
            function setSubmitBtn(e:MouseEvent) {
                this.submitButton.textContent = buttontext
                this.selectedAction = cafeEventType
            }
            setSubmitBtn.bind(this)
            return setSubmitBtn
        }
        this.clickListen(hideButton, selectModAction("Execute Hide", "hide"))
        this.clickListen(removeButton, selectModAction("Execute Remove", "remove"))
        this.clickListen(noActionButton, selectModAction("Execute No Action", "noaction"))

        function submitAction() {
            let evData : CafeEvent = {
                target: "CommentReport",
                id: this.data.Id,
                type: this.selectedAction,
                value: this.reasonTextArea.value
            }
            let ev = new CustomEvent<CafeEvent>(CafeEventHandle, {detail: evData})
            document.dispatchEvent(ev)
            this.disable()
        }

        this.clickListen(this.submitButton, submitAction)

        this.clickListen(skipButton, this.destroy)
        

    }

    destroy(): void {
        this.cafeComment.destroy()
        super.destroy()
    }

    
}

