import { UrlDisplay } from "./UrlDisplay";
import { util } from "./utility";




document.addEventListener("DOMContentLoaded", ()=> {
    let url = new UrlDisplay()
    url.attach()
    url.update()
})