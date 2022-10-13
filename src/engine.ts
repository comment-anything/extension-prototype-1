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
        // timeReceived is the unix time
        function updater(cafe:Cafe, timeReceived:number, delta:number) {
            /** explanation for inner function: updater is passed as a callback function to setTimeout, a kind of old-school function; see MDN. */
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