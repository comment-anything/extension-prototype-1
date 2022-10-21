import { CommentGraph } from "./comment_graph"
import { TServer } from "./SERVER_TYPES"

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
        let testdata = createFakeData()
        graph.populate(testdata, true)
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






function createFakeData() : Array<TServer.CommentData>{
    let ids =     [2,4, 10, 5, 7, 8,9]
    let parents = [0,0, 2,  7, 4, 4, 0]
    let usernames = ["frank", "luke", "bob", "interloper"]
    let text = ["HI!", "HELLO", "Lorem ipsum dolerum solerum and other nonsense", "I like make comments"]

    let results : TServer.CommentData[]= []

    for(let i = 0; i < ids.length; i++) {
        let id = ids[i]
        let d : Partial<TServer.CommentData> = {} 
        d.id = id
        d.parent = parents[i]
        d.username = usernames[Math.floor(Math.random()*4)]
        d.text = text[Math.floor(Math.random() * 4)]
        d.date = Math.random() * 10000
        d.reactions = {
            funny: {
                ups: Math.floor(Math.random() * 20),
                downs: Math.floor(Math.random() * 20),
            },
            troll: {
                ups: Math.floor(Math.random() * 20),
                downs: Math.floor(Math.random() * 20),
            },
            factual: {
                ups: Math.floor(Math.random() * 20),
                downs: Math.floor(Math.random() * 20),
            },
            informative: {
                ups: Math.floor(Math.random() * 20),
                downs: Math.floor(Math.random() * 20),
            },
        }
        results.push(d as TServer.CommentData)
    }
    return results
}

