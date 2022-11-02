import { CommentGraph } from "./comment_graph";
import { Dispatcher } from "./dispatcher";
import { Engine } from "./engine";
import { Fetcher } from "./fetcher";
import { InterfaceDisplay } from "./interfaceDisplay";


type CafeSettings = {
    updatetime: number // how long to check the queue for updating... should be around 1 or 2 secs
    pingTime: number // how often to ping the server for, e.g., notifications, new comments
    container: HTMLElement // document.body, or some other element to contain the Cafe

}

//CommentCafe Cafe stands for "Comment Anywhere Front End"
export class Cafe {

    // will be the main routing point class that holds refs to other classes

    // composition pattern
    fetcher: Fetcher
    //commentGraph: CommentGraph
    dispatcher: Dispatcher
    engine: Engine
    settings: CafeSettings
    interfaceDisplay: InterfaceDisplay;

    constructor(settings:CafeSettings) {
        this.settings = settings
        this.fetcher = new Fetcher(this)
        this.interfaceDisplay = new InterfaceDisplay(this)
        this.dispatcher = new Dispatcher(this)
        this.engine = new Engine(this)
    }
    run() {
        this.engine.run(this.settings.updatetime)
    }
}