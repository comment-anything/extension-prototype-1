import { Server } from "./SERVER"
import { UIInput } from "./UIInput"
import { dom } from "./utility/dom"


const CSSClass = "cafeBanRecord"

export class CafeBanRecord extends UIInput<Server.BanRecord>{
    bannedTarget: HTMLDivElement
    bannedBy: HTMLDivElement
    bannedAt: HTMLDivElement
    reason: HTMLDivElement
    constructor(data: Server.BanRecord) {
        super(data)
        this.el.classList.add(CSSClass)
        this.el.style
        let targetLabel = dom.div("Banned")
        this.bannedTarget = dom.div(this.data.BannedUsername, "cafeColumn2")
        let byLabel = dom.div("By")
        this.bannedBy = dom.div(this.data.BannedByUsername, "cafeColumn2")
        let dateLabel = dom.div("At")
        this.bannedAt = dom.div( (new Date(this.data.BannedAt)).toUTCString(), "cafeColumn2")
        let reasonLabel = dom.div("Reason")
        this.reason = dom.div(this.data.Reason, "cafeColumn2")
        this.el.append(targetLabel, this.bannedTarget, byLabel, this.bannedBy, dateLabel, this.bannedAt, reasonLabel, this.reason)
    }

    destroy(): void {
        super.destroy()
    }
}