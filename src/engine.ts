import { Cafe } from "./cafe";

export class Engine {
    cafe: Cafe
    running: boolean
    constructor(parent:Cafe) {
        this.cafe = parent
        this.running = false 
    }
    async run(updatetime:number) {
        if(this.running) this.stop()
        function updater(cafe:Cafe, timeReceived:number, delta:number) {
            if(this.running) {
                cafe.dispatcher

                let now = Date.now()
                delta = now - timeReceived
                setTimeout(updater, updatetime, cafe, Date.now(), delta)
            }
        }
        updater(this.cafe, Date.now(), 0)
    }
    stop() {
        this.running = false 
    }
}