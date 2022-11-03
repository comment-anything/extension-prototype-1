import { CommentEventUITests } from "./commentEvents"
import { TestNav } from "./nav"

// The entry file for the UI test page.

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM CONTENT LOADED")
    const nav = new TestNav()
    const comEvTests = new CommentEventUITests()

    document.body.append(nav.el, comEvTests.el)
    nav.addNav("Comment Events", comEvTests.el)
})   