import { Server } from "./SERVER"

export type state_key = 
    "comments_display" |
    "register_form" |
    "login_form" |
    "req_pw_reset_form" |
    "input_pw_reset_code_form" |
    "input_new_pw_form" |
    "settings_display" |
    "moderation_display" |
    "reports_display"


export class State {
    viewing: state_key
    ownProfile?: Server.UserProfile
    constructor() {
        this.viewing = "comments_display"
    }
    loadProfile(d?: Server.UserProfile | {}) {
        if(d !== undefined) {
            if( (d as any).CreatedOn != undefined) {
                this.ownProfile = d as Server.UserProfile
            }
            else {
                this.ownProfile = undefined
            }
        } else {
            this.ownProfile = undefined
        }
    }

    setViewingTo(d: state_key) {
        this.viewing = d
    }
}