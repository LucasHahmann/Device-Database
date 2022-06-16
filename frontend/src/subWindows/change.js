var ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on("site:change", (e, data) => {
    console.log(data)
})

var testdata;

function load(data){
    console.log(data)
    document.getElementById("content")
    JSON.stringify(data)
    testdata = data
}

module.exports = {
    load
}