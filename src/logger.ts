

export function GetLogger(name:string) {
    return function(...s:any[]) {
        console.log("~", name, "~",...s)
    }
}
