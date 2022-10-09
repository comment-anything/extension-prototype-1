import { COM_DEPTH_ATTR } from "./consts"

export type CafeCommentData = {
    username: string
    text: string
    commentType: string
    depth?: number
}

export type CafeCommentSettings = {
    cssClassComment?:string
    cssClassUsername?:string
    cssClassText?:string
    cssClassCommentType?:string
}


// CafeComment is responsible for rendering Comment Data on the DOM and user clicks only
export class CafeComment {
    el: HTMLDivElement;
    username: HTMLDivElement;
    text: HTMLDivElement;
    commentType: HTMLDivElement;

    // this may get set/managed from another object... will develop it later
    emitter:undefined
    childrenContainer: HTMLDivElement

    constructor(settings?:CafeCommentSettings, data?:CafeCommentData) {
        this.el = document.createElement("div")
        this.username = document.createElement("div")
        this.text = document.createElement("div")
        this.commentType = document.createElement("div")
        this.childrenContainer = document.createElement("div")
        this.el.append(this.username,this.text,this.commentType, this.childrenContainer)

        // see consts.ts for where the attribute is defined. For CSS selectors
        let depth_attribute = document.createAttribute(COM_DEPTH_ATTR)
        depth_attribute.value = data.depth ? data.depth.toString() : "0"

        this.el.attributes.setNamedItem(depth_attribute)
        this.applySettings(settings)
        this.populate(data)
    }

    /**
     * Adds or removes CSS Classes to the comment
     */
    applySettings(settings?:CafeCommentSettings, clearold=true) {
        if(clearold)
        {
            for(let el of [this.el, this.username, this.text, this.commentType]) {
                let arr = Array.from(el.classList)
                for(let class_string of arr) {
                    el.classList.remove(class_string)
                }
            }
        }
        if(settings)
        {
            this.el.classList.add(settings.cssClassComment)
            this.username.classList.add(settings.cssClassUsername)
            this.text.classList.add(settings.cssClassText)
            this.commentType.classList.add(settings.cssClassCommentType)
        }
    }
    /*
    
    Passing an HTML element appends this comments DOM to that element. 

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

    /*

    Populates the Comment with data

    Otherwise removes the data

    */ 
    populate(data?:CafeCommentData) {
        if(data != undefined) {
            this.username.textContent = data.username ? data.username : undefined
            this.text.textContent = data.text ? data.text : undefined
            this.commentType.textContent = data.commentType ? data.commentType : undefined
        } else {
            this.populate({
                username: "",
                text:"",
                commentType:""
            })
        }
    }
}