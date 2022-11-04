import { TestCafeCommentReport } from "./TestCafeCommentReport"
import { TestNav } from "./nav"
import { TestCafeComment } from "./TestCafeComment"

// The entry file for the UI test page.

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM CONTENT LOADED")
    const nav = new TestNav()
    const testCC = new TestCafeComment()
    const testCCR = new TestCafeCommentReport()

    document.body.append(nav.el, testCC.el, testCCR.el)
    nav.addNav("Comment Events", testCC.el)
    nav.addNav("Comment Report Events", testCCR.el)
})   