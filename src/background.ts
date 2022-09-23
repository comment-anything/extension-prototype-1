console.log("background script running")


browser.runtime.onMessage.addListener((message)=>{
    console.log("message received", message)
})

browser.runtime.sendMessage("hello")