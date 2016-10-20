// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const {ipcRenderer} = require('electron');

const tagDom = document.getElementById('TagInfo')

const userMap = {
    "cb:09:46:33": "Bob Bobbesen",
    "08:ff:12:01": "Admin Jensen"
}

ipcRenderer.on('find-id', (_, id) => {
    if (!userMap[id]) {
        tagDom.innerHTML = 'Sorry, we don\'t know you... yet..'
        return
    }
    tagDom.innerHTML = `Welcome ${userMap[id]}`
});


// optionally the start function may include the deviceID (e.g., 'pn53x_usb:160:012')