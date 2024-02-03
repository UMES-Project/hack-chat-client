(async () => {
    await import(chrome.extension.getURL('web-ext-library/content.js'))

    var UMES = new UMES_ContentScript()

    console.log(UMES)

    UMES.setMessageContainer("#messages", ".text", (message) => {
        var content = message.textContent
        
        if (UMES.isUMESMessage(content)) {
            UMES.decryptMessage(content, (decrypted) => {
                message.textContent = decrypted
            })
        }
    })

    UMES.injectScript("src/script.js")
})()