const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}


function removeColor(square) {
    square.style.background = '#1d1d1d'
}


function setColor(square) {
    const color = getRandomColor()
    square.style.background = color
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*5)]
}