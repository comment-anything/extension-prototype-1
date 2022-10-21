import { Cafe } from "./cafe"
import { CafeComment, CafeCommentData, CafeCommentSettings } from "./comment"
import { GetLogger } from "./logger"
import { TServer } from "./SERVER_TYPES"




type CafeCommentGraphSettings = {
    // sets the classes for each comment this graph generates
    ComDefault:CafeCommentSettings
}


export class CommentGraph {

    activeComments : Map<number, CafeComment>
    el: HTMLElement

    settings: CafeCommentGraphSettings
    cafe: Cafe

    constructor(parent?: Cafe, settings?:CafeCommentGraphSettings) {
        this.cafe = parent!
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
        } else {
            this.settings = {
                ComDefault: {}
            }
        }
    }


    
    /*

    Populates the Graph with data

    Otherwise removes the data

    */ 
    populate(data : Array<TServer.CommentData>, clearold: boolean) {
        let log = GetLogger("Comment Graph")
        if(clearold) {
            let extant = Array.from(this.activeComments.values())
            for(let com of extant) {
                com.destroy()
            }
            this.activeComments = new Map()
        }
        let notfound = []
        let rootComments = []
        let noParents : TServer.CommentData[]= []
        for(let datum of data) {
            if(datum.parent == 0 || datum.parent == undefined) {
                let comment = new CafeComment(this.settings.ComDefault, datum)
                comment.attachToDOM(this.el)
                this.activeComments.set(datum.id, comment)
            }
            else {
                let possible_parent = this.activeComments.get(datum.parent)
                if(possible_parent != undefined) {
                    let comment = new CafeComment(this.settings.ComDefault, datum)
                    comment.attachToDOM(possible_parent.childrenContainer)
                    this.activeComments.set(datum.id, comment)
                }
                else {
                    noParents.push(datum)
                }
            }
        }
        log("After initial runthrough, there were", noParents.length, "comments without parents.")

        log("The current map is:", this.activeComments)
        
        let number_of_loops = 5
        for(let i = number_of_loops; i >=0; i--) {
            let stillNoParents = []
            for(let datum of noParents) {
                let possible_parent = this.activeComments.get(datum.parent)
                if(possible_parent != undefined) {
                    let comment = new CafeComment(this.settings.ComDefault, datum)
                    comment.attachToDOM(possible_parent.childrenContainer)
                    this.activeComments.set(datum.id, comment)
                } else {
                    stillNoParents.push(datum)
                }
            }
            noParents = stillNoParents
        }
        log("After subsequent loops, there were ", noParents.length, "comments without parents.") 
        if(noParents.length > 0) {
            log("The remaining are:")
            for(let np of noParents) {
                log(np)
            }
        }

    }
}

