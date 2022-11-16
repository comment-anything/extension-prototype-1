import { TestNav } from "./nav"
import { TestCafeComment } from "./TestCafeComment"

// The entry file for the UI test page.

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM CONTENT LOADED")
    const nav = new TestNav()
    const testCC = new TestCafeComment()

    document.body.append(nav.el, testCC.el)
    nav.addNav("Comment Events", testCC.el)
})   