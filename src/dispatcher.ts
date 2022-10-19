import { Cafe } from "./cafe"
import { ServerResponseTypes } from "./SERVER"




export class Dispatcher {
    sends: Array<{}>
    received:Array<ServerResponseTypes>
    cafe: Cafe

    constructor(parent:Cafe) {
        this.cafe = parent 
        this.sends = []
        this.received = []
    }

    processReceived() {
        for(let r of this.received) {
            switch(r.type) {
                case "LoginResponse":
                    break;
                case "LogoutResponse":
                    break;
                case "NewComments":
                    
                    break;
                case "NewPage":
                    // this.cafe.commentGraph.populate(r.data)

                    break;
                case "NewAlerts":
                    break;
                default:
            }
        }
    }

    processSends(time:number, delta:number) {
        if(this.sends.length == 0) {
            return
        }
        let diff = time - this.cafe.fetcher.lastRequestAt
        if(diff > this.cafe.settings.pingTime) {
            this.cafe.fetcher.send(this.sends)
            this.sends = []
        }
    }

}