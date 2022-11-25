import { Server } from "./SERVER"

type state_key = 
    "comments_display" |
    "register_form" |
    "login_form" |
    "req_pw_reset_form" |
    "input_pw_reset_code_form" |
    "input_new_pw_form" |
    "settings_display" |
    "moderation_display" |
    "reports_display"


export class CafeState {
    viewing: state_key
    own_profile?: Server.UserProfile
    constructor() {
        this.viewing = "comments_display"
    }
    loadProfile(d?: Server.UserProfile | {}) {
        if(d !== undefined) {
            if( (d as any).CreatedOn != undefined) {
                this.own_profile = d as Server.UserProfile
            }
            else {
                this.own_profile = undefined
            }
        } else {
            this.own_profile = undefined
        }
    }
}