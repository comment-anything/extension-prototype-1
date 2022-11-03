import { Cafe } from "./cafe";
import { CABE_ADDRESS, CABE_ROUTE } from "./consts"


const BASE_PATH = CABE_ADDRESS + "/" + CABE_ROUTE + "/"

/*
responsible for assembling messages to the Comment Anywhere Back End

*/ 
export class Fetcher {

    cafe:Cafe

    lastRequestAt:number

    constructor(parent?:Cafe) {
        this.cafe = parent!
        this.lastRequestAt = 0
    }
    login(username: string, password:string) {
        let data = new FormData()
        data.append("Username", username)
        fetch(BASE_PATH + "login", 
            {
                method:"POST", 
                body:data
            }).then(
                response=>response.json()
                ).then(
                    data => console.log(data)
                    );
    }
    send(arr:Array<{}>) {

    }
}