import { ClientMap, Fetcher, ServerMap } from "./fetcher";
import { CafeNavbar } from "./Navbar";
import { State, state_key } from "./State";
import {Server} from "./SERVER"
import { Settings } from "./Settings";
import { Dispatcher } from "./dispatcher";

/**
 * Cafe stands for "Comment Anywhere Front End". Cafe is the base class that is composed of all other classes used in the Front end. It is responsible for updating the State and listening for user input events on the DOM, and transmitting them to the fetcher when appropriate.
 */
export class Cafe {
    fetcher: Fetcher
    state: State
    navbar: CafeNavbar
    settings: Settings;
    dispatcher: Dispatcher;
    current_url: string
    constructor() {
        this.fetcher = new Fetcher()
        this.dispatcher = new Dispatcher()
        this.state = new State()
        this.navbar = new CafeNavbar()
        this.settings = new Settings()
        this.current_url = ""
        this.checkForResponses = this.checkForResponses.bind(this)
        this.fetcher.fetch("amILoggedIn",{}, this.checkForResponses)
    }

    // userChange is called on a log in, a log out, and at all other times when user data changes (such as updating their profile blurb). It calls loadProfile on the State object and passes that state to other objects that may need to change what is visible if the users access level has changed. 
    userChange(data?:Server.UserProfile | {}) {
        this.state.loadProfile(data)
        this.navbar.setFromState(this.state)
    }

    // pageChange is called when a user navigates to a new page. It tells the fetcher to fetch comments.
    pageChange(newUrl: string) {
        this.current_url = newUrl
        if(this.state.viewing == "comments_display") {
            this.fetcher.fetch("comments", {
                Url: newUrl,
                SortedBy: this.settings.sortBy,
                SortAscending: this.settings.sortAscending
            }, this.checkForResponses)
        }
    }

    // changeState updates the viewing field in the state object and passes the state to the navbar so that it may render the new state.
    changeState(newState: state_key) {
        this.state.viewing = newState
        this.navbar.setFromState(this.state)
    }

    // checkForResponses is called as a callback after every fetch. The server responses array is retrieved from the fetcher and passed to the dispatcher, along with a reference to cafe so the dispatcher can call the correct methods to realize the information retrieved from the server.
    checkForResponses() {
        let responses = this.fetcher.getAndClearResponses()
        this.dispatcher.dispatch(responses, this)
    }

    // stateChangeEventReceived listener is called when a user performs an actions that causes a state change. It parses the event and calls changeState to realize the change.
    stateChangeEventReceived() {

    }

    // clientEventReceived is called when an event is picked up that reflects an action performed by the user that requires server communication. It calls fetcher.fetch with the the data from that event. 
    clientEventReceived(name:keyof ClientMap, data:any) {
        this.fetcher.fetch(name, data, this.checkForResponses)
    }

    // settingsEventReceived is called when a user changes their settings, such as when they they change whether comments are sorted by ascending or descending. It updates the settings object with the new data and tells the appropriate objects to update their displayed data based on the new settings.
    settingsEventReceived(settings:Settings) {
        this.settings.sortAscending = settings.sortAscending
        this.settings.sortBy = settings.sortBy
        this.settings.viewHidden = settings.viewHidden
        this.navbar.settingsWindow.updateFromSettings(this.settings)
        this.navbar.commentsWindow.updateFromSettings(this.settings)
    }
}