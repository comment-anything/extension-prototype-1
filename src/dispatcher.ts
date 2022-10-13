import { Cafe } from "./cafe"




export class Dispatcher {
    sends: Array<{}>
    received:Array<{}>
    cafe: Cafe

    constructor(parent:Cafe) {
        this.cafe = parent 
        this.sends = []
        this.received = []
    }

    processReceived() {
        for(let r of this.received) {
            // check what it is, send it to the right thing
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