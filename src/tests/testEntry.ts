// the entry point for tester.js. Files in this folder are used for visual tests of various User Interface parts.

import { CafeComment } from "../CafeComment";
import { CafeEventHandle } from "../Events";
import { TestDomLogs } from "./domlogs";
import { dom } from "../utility/dom";



var testContainer = dom.div()
var testControls = dom.div()
var testTemp = dom.div() 
var dlogs = new TestDomLogs()

function createTestButtons() {
    let testEventsButton = dom.button("test comment events")
    testEventsButton.addEventListener("click", testEvents)
    testControls.append(testEventsButton)
}

function testEvents() {
    let com = new CafeComment({
        id: 1,
        parent: 0,
        username: "Sven",
        content: "I've written a comment.",
        hidden: false,
        removed: false,
        troll: {
            ups: 1,
            downs: 0,
            alreadyVoted: 0
        },
        funny: {
            ups: 0,
            downs: 0,
            alreadyVoted: 0
        },
        factual: {
            ups: 3,
            downs: 0,
            alreadyVoted: 0
        },
        agree: {
            ups: 0,
            downs: 3,
            alreadyVoted: 1
        }
    })
    testTemp.append(com.el)
    document.addEventListener(CafeEventHandle, (e:any)=> {
        dlogs.log("Received an event of type " + CafeEventHandle)
        dlogs.log(" It has data: "+ JSON.stringify(e.detail))
    })
}


document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM CONTENT LOADED")
    testContainer.append(testControls, testTemp, dlogs.el)
    document.body.append(testContainer)
    createTestButtons()  
})   