import { Cafe } from "../cafe";
import { CafeBanRecord } from "../CafeBanRecord";
import { CafeComment } from "../CafeComment";
import { CafeEventHandle } from "../Events";
import { Server } from "../SERVER";
import { dom } from "../utility/dom";
import { TestDomLogs } from "./domlogs";
import { DRTestWindow } from "./DRTestWindow";
import { rando } from "./rando";

export class TestCafeBanRecord extends DRTestWindow<Server.BanRecord>{
    constructor() {
        super()
        this.bindStamper({
            BanRecordId: 1,
            BannedUserId: 10,
            BannedByUserID: 2,
            BannedByUsername: "Lbytes32",
            BannedUsername: "Douchenozzle32",
            BannedFrom: null,
            SetBannedTo: true,
            BannedAt: 100000,
            Reason: "I don't like him!"
        } as Server.BanRecord, CafeBanRecord)
        document.addEventListener(CafeEventHandle, (e:any)=> {
            this.logs.log("Received an event of type " + CafeEventHandle)
            this.logs.log(" It has data: "+ JSON.stringify(e.detail))
        })

        this.bindRandomizer(()=> {
            return {
                BanRecordId: rando.num(1000),
                BannedUserId: rando.num(1000),
                BannedByUserID: rando.num(1000),
                BannedByUsername: rando.username(),
                BannedUsername: rando.username(),
                BannedAt: rando.num(10000000),
                Reason: rando.sentence(),
                BannedFrom: null, // need to create rando.domain, rando.nullDomain 
                SetBannedTo: true // need to create rando.bool              
            } as Server.BanRecord
        }, CafeBanRecord)
        
    }
}