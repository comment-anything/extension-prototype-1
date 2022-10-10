import { LOGGING } from "./consts"


export function GetLogger(name:string) {
    if (LOGGING) {
        return function(...s:any[]) {
            console.log("~", name, "~",...s)
        }
    } else {
        return function(...s:any[]) {}
    }
}
