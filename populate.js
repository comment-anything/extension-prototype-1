
/**
 * @returns {string}
 */
function url() {
    return window.location.href;
}

function body() {
    return document.body
}

function div() {
    let div = document.createElement("div")
    div.style.userSelect = "none"
    return div
}


function position(div) {
    // set divs position to a good x and y
}

const pageloaders = []

class Style {
    static fixed(el) {
        el = C.asEl(el)
        el.style.position = "fixed"
        el.style.top = "0px"
        el.style.left = "0px"
        el.style.zIndex = "500"
    
    }
    static nerd(el, size, code) {
        let e = C.asEl(el)
        e.style.fontFamily = "Consolas, Libre Mono, Courier New"
        e.style.fontSize = "" + size + "px"
        code & 0b01 ? (e.style.backgroundColor = "lightgreen") : {}
        code & 0b10 ? (C.asEl(el).style.boxShadow = "5px 5px 1px darkslategray" ) : {}
        code & 0b100 ? (e.style.border = "1px dotted lightgray") : {}
        code & 0b1000 ? (e.style.padding = "10px 5px 5px 5px") : {}
        code & 0b10000 ? (()=>{
            let operand = ( code & 0b111100000 ) >> 5
            console.log(operand)
            switch(operand) {
                case 6: 
                    e.style.backgroundColor = "#3D3C3A"
                    e.style.color = "#368AC1"
                case 5: 
                    e.style.backgroundColor = "#43C6DB"
                    e.style.color = "#493D26"
                case 4: 
                    e.style.backgroundColor = "#C47451"
                    e.style.color = "#6A287E"
                    e.style.textShadow = "1px 1px 1px black"
                default: 
            }
        })() : {}
    }
}

// classes wrap divs
class C {
    constructor(parent) {
        this.el = div()
        this.attach(parent)
    }
    attach(parent) {
        if(parent instanceof C) {
            parent.el.append(this.el)
        } else if(parent instanceof HTMLElement) {
            parent.append(this.el)
        }
    }
    /**
     * @returns {HTMLElement} - an html element
     */
    static asEl(object) {
        if(object instanceof C) return object.el
        else if(object instanceof HTMLElement) return object
        else return div()
    }
}

class Ui extends C{
    constructor(container_element) {
        super(container_element == undefined ? document.body : container_element)
        this.url = new Url(this)
        this.whois = new WhoIs(this)
        Style.fixed(this.el)
        Style.nerd(this.el, 18, (5 << 5) | 0b10000)
    }
}

class Url extends C{
    constructor(parent) {
        super(parent)
        Style.nerd(this, 16, 0b11010101)
        this.update()
    }
    update() {
        this.el.textContent = url()
    }
}

class WhoIs extends C{
    constructor(parent) {
        super(parent)
        Style.nerd(this, 12, (6 << 5) | 0b10010)
        this.label = div()
        Style.nerd(this.label, 12, 0)
        this.label.textContent = "WhoIs"
        fetcher(this.el)
    }
}

class HideButton extends C{
    constructor(parent) {
        super(parent)
    }
}

async function fetcher(el_to_fill) {
    let url2 = url()
    // url2 = url2.replace(/\//, "%2F")
    //     .replace(/\:/, "%3A")
    //     + "&t=ha&va=j&ia=web"
    // let result = await fetch(new Request("http://www.duckduckgo.com/?q="+url2))
    try {
        let result = await fetch('http://www.example.com/')
        console.log(result)
        el_to_fill.textContent = Object.keys(result).join(" | ")
    } catch(e) {
        console.log("couldn't fetch.")
    }
}

function run() {
    let u = new Ui()
}

if(document && document.body) {
    run()
} else {
    window.addEventListener("DOMContentLoaded", run)
}

// :// -> %3A  %2F  %2F 

// &t=ha &va=j &ia=web

