var UMES = new UMES_Script()

function load() {
    var oldSend = window.send

    window.send = (data) => {

        if (data.cmd == "chat") {
            UMES.encryptMessage(data.text, (public_id, key) => {
                data.text = `[UMES]${public_id}:${key}`
                oldSend(data)
            })
        } else {
            oldSend(data)
        }
    }
}

load()