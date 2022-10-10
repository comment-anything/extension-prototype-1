import { CommentGraph } from "./comment_graph"

let tlog = function(...s:string[]) {
    console.log("TESTER SAYS: ", ...s)
}

class Tester {

    // secondary entry point for webpack
    constructor() {

    }

    testFetcher() {

    }
    testQueue() {

    }
    testComments() {
        let graph = new CommentGraph(undefined, {
            ComDefault: {
                cssClassComment: "test-comment",
                cssClassText: "test-comment-text",
                cssClassUsername: "test-comment-username",
                cssClassCommentType: "test-comment-type"
            }
        })
        tlog("graph initialized succesfully") 
        graph.attachToDOM(document.body)
        tlog("graph appended to the body of the document")
        graph.populate(TestCommentData)
        tlog("graph populated succesfully")
    }
    testBrowser() {

    }
    testSettings() {

    }
    testBackground() {

    }
    testCache() {

    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const T = new Tester()
    console.log(T)
    T.testComments()
})

const TestCommentData = [
    {
        "id": 0,
        "username": "ramone",
        "text": "hey guys first comment on the site! woohoo",
        "commentType": "none"
    },
    
    {
        "id": 1,
        "parent": 0,
        "username": "ramone",
        "text": "first comment on my own comment!",
        "commentType": "none"
    },
    
    {
        "id": 2,
        "parent": 1,
        "username": "ramone",
        "text": "second comment on my own comment!",
        "commentType": "angry"
    },
    
    {
        "id": 3,
        "parent": 2,
        "username": "ramone",
        "text": "fourth comment on my own comment!",
        "commentType": "none"
    },
    
    {
        "id": 77,
        "parent": 1,
        "username": "thelma",
        "text": "Ramone, why do you keep commenting on your own comments?",
        "commentType": "question"
    }
]