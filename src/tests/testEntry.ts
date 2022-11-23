import { TestNav } from "./nav"
import { TestCafeBanRecord } from "./TestCafeBanRecord"
import { TestCafeComment } from "./TestCafeComment"

// The entry file for the UI test page.

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM CONTENT LOADED")
    const nav = new TestNav()
    const testCC = new TestCafeComment()
    const testBanRecord = new TestCafeBanRecord()

    document.body.append(nav.el, testCC.el, testBanRecord.el)
    nav.addNav("Comment Events", testCC.el)
    nav.addNav("BanRecord Events", testBanRecord.el)
})   