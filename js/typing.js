const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300

writeText()

function writeText() {
    textEl.innerText = text.slice(o,idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}