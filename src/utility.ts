

function url() {
    return window.location.href 
}

function div() {
    return document.createElement('div')
}

function span() {
    return document.createElement('span')
}

export const util = {
    url: url,
    div: div,
    span: span
}
