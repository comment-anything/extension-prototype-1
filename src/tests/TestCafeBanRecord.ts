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
            banRecordId: 1,
            bannedUserId: 10,
            bannedByUserID: 2,
            bannedByUsername: "Lbytes32",
            bannedUsername: "Douchenozzle32",
            bannedFrom: null,
            setBannedTo: true,
            bannedAt: 100000,
            reason: "I don't like him!"
        } as Server.BanRecord, CafeBanRecord)
        document.addEventListener(CafeEventHandle, (e:any)=> {
            this.logs.log("Received an event of type " + CafeEventHandle)
            this.logs.log(" It has data: "+ JSON.stringify(e.detail))
        })

        this.bindRandomizer(()=> {
            return {
                banRecordId: rando.num(1000),
                bannedUserId: rando.num(1000),
                bannedByUserID: rando.num(1000),
                bannedByUsername: rando.username(),
                bannedUsername: rando.username(),
                bannedAt: rando.num(10000000),
                reason: rando.sentence(),
                bannedFrom: null, // need to create rando.domain, rando.nullDomain 
                setBannedTo: true // need to create rando.bool              
            } as Server.BanRecord
        }, CafeBanRecord)
        
    }
}