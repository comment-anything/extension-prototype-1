import { Cafe } from "./cafe"
import { CafeComment, CafeCommentData, CafeCommentSettings } from "./comment"
import { GetLogger } from "./logger"


interface CafeCommentGraphData extends CafeCommentData {
    id:number
    parent?:number
}

type CafeCommentGraphSettings = {
    ComDefault:CafeCommentSettings
}


export class CommentGraph {

    activeComments : Map<number, CafeComment>
    el: HTMLElement

    settings: CafeCommentGraphSettings
    cafe: Cafe

    constructor(parent?: Cafe, settings?:CafeCommentGraphSettings) {
        this.cafe = parent!
        // currently unused
        this.activeComments = new Map()
        this.el = document.createElement("div")
        if(settings) {
            this.applySettings(settings)
        } else {
            this.applySettings({
                ComDefault:{}
            })
        }
    }
    /*
    
    Passing an HTML element appends this CommentsGraph DOM to that element. 

    Passing no value removes this comment from the DOM.
    */
    attachToDOM(parent:HTMLElement |  undefined) {
        if (parent != undefined) {
            parent.append(this.el)
        } else {
            if(this.el.parentNode != undefined) {
                this.el.remove()
            }
        }
    }

    /**
     * Adds or removes CSS Classes to the comment
     */
     applySettings(settings?:CafeCommentGraphSettings, clearold=true) {
        if(clearold)
        {
            // for(let el of [this.el, this.username, this.text, this.commentType]) {
            //     let arr = Array.from(el.classList)
            //     for(let class_string of arr) {
            //         el.classList.remove(class_string)
            //     }
            // }
        }
        if(settings)
        {
            this.settings = settings
            // this.el.classList.add(settings.cssClassComment)
            // this.username.classList.add(settings.cssClassUsername)
            // this.text.classList.add(settings.cssClassText)
            // this.commentType.classList.add(settings.cssClassCommentType)
        }
    }


    
    /*

    Populates the Comment with data

    Otherwise removes the data

    */ 
    populate(data? : Array<CafeCommentGraphData>) {
        // make a graph here
        let tlog = GetLogger("CafeGraph.Populate")
        tlog("Received data of this length: ", data.length.toString())
        if(data != undefined) {
            let graphResult = GetCommentGraph(data)
            tlog("got graph result... size of ", graphResult.roots.length.toString(), "with these errors:", ...graphResult.errors)

            for(let root of graphResult.roots.sort( (a,b)=> a.data.id < b.data.id ? 1 : -1)) {
                let rootComment = this.recursivelyBuildComments(root)
                rootComment.attachToDOM(this.el)
            }
        } else {
            tlog("got empty populate request")
            this.populate(undefined)
        }
    }
    recursivelyBuildComments(graphdata: CafeCommentGraphNode, depth=0) : CafeComment {
        graphdata.data.depth = depth
        let root = new CafeComment(this.settings.ComDefault, graphdata.data)
        for(let child of graphdata.children) {
            let comment = this.recursivelyBuildComments(child, depth+1)
            comment.attachToDOM(root.childrenContainer)
        }
        return root
    }
}

// /*
//     Builds comments from a graph and sets their depth accordingly
// */
// function recursivelyBuildComments(graphdata: CafeCommentGraphNode, depth=0) : CafeComment {
//     graphdata.data.depth = depth
//     let root = new CafeComment(undefined, graphdata.data)
//     for(let child of graphdata.children) {
//         let comment = recursivelyBuildComments(child, depth+1)
//         comment.attachToDOM(root.childrenContainer)
//     }
//     return root
// }




interface CafeCommentGraphNode {
    data: CafeCommentGraphData
    parent?: CafeCommentGraphNode
    children?: Array<CafeCommentGraphNode>
}

function GetCommentGraph(data: Array<CafeCommentGraphData>) {

    let tlog = GetLogger("GetCommentGraph")

    let rootComments : Array<CafeCommentGraphNode> = []
    let noded : Map<number, CafeCommentGraphNode> = new Map()
    let noParentYet : Array<CafeCommentGraphNode> = []
    
    let dlog = GetLogger("GetCommentGraph *initial for loop ---- ")
    for(let ccdata of data) {
        dlog("Parsing node with id:", ccdata.id, "wants parent: ", ccdata.parent)
        let node = {
            children: [],
            data: ccdata
        } as CafeCommentGraphNode
        if(ccdata.parent == undefined) {
            dlog("---", ccdata.id, " is a root node!")
            rootComments.push(node)
            noded.set(ccdata.id, node)
            continue 
        }
        if(noded.has(ccdata.parent)) {
            dlog("---", ccdata.id, " has a parent already set up!")
            noded.get(ccdata.parent).children.push(node)
            noded.set(ccdata.id, node)
            continue
        }
        else {
            dlog("---", ccdata.id, " doesnt have a parent yet.")
            noParentYet.push(node)
        }
    }

    tlog("After the initial parse, data length was:", data.length, "number root:", rootComments.length, "number noded:", Array.from(noded.keys()).length, "number no parent", noParentYet.length)

    dlog = GetLogger("GetCommentGraph *SECOND Sort-While loop ---- ")

    let sorts = 10 
    while(sorts > 0 && noParentYet.length > 0) {
        dlog("starting a FOR loop on array noParentYet with length: ", noParentYet.length)
        for(let node of noParentYet) {
            dlog("checking node with id: ", node.data.id, " and parent ", node.data.parent)
            let parent = noded.get(node.data.parent)
            dlog("That parent exists in noded? ", parent !== undefined)
            if(parent != undefined) { 
                parent.children.push(node)
    
                noParentYet = noParentYet.splice(noParentYet.indexOf(node), 1)
                continue
            }
        }
        sorts--
    }

    let errors = []
    if(noParentYet.length > 0) {
        errors.push("Was unable to display all comments!")
    }

    return {
        roots: rootComments,
        errors: errors
    }
}

type GetCommentGraphReturnType = {
    roots: Array<CafeCommentGraphNode>
    errors: string[]

}

