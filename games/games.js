var gameArr = []
var gameDiv = document.getElementById('games')

function newGame(icon, name) {
    var newGame = document.createElement('div')
    newGame.setAttribute('id', name)
    newGame.setAttribute('class', 'game')
    newGame.icon = document.createElement('img')
    newGame.icon.src = icon
    newGame.name = document.createElement('div')
    newGame.name.innerText = name
    newGame.append(newGame.name)
    newGame.append(newGame.icon)
    newGame.addEventListener('click', () => {
        window.location = ('/' + 'gamepage' + '/' + name + '.html')
    })
    newGame.style.width = '8%'
    newGame.style.height = '20%'
    newGame.style.position = 'absolute'
    gameDiv.append(newGame)
    gameArr.push(newGame)
}

newGame('./gameFiles/coreball.png', 'Coreball')

for (let i = 0; i < gameArr.length; i++) {
    var int
    var splitName = gameArr[i].name.innerText.split('')
    if (splitName.length > 5) int = 0.01; else int = 0.9
    gameArr[i].name.style.fontSize = (splitName.length / (splitName.length * (splitName.length * 0.075)) - int).toString() + "vmax"
    gameArr[i].name.style.left = ""
}

var rowsTop = {
    1: '2%',
    2: '24%',
    3: '46%',
    4: '68%',
    5: '90%',
    6: '112%'
}
for (let i = 0; i < gameArr.length; i++) {
    // y pos
    if (i <= 8) {
        gameArr[i].style.top = rowsTop[1]
    }
    if (i > 8) {
        gameArr[i].style.top = rowsTop[2]
    }
    if (i > 17) {
        gameArr[i].style.top = rowsTop[3]
    }
    if (i > 26) {
        gameArr[i].style.top = rowsTop[4]
    }
    if (i > 35) {
        gameArr[i].style.top = rowsTop[5]
    }
    if (i >= 45) {
        gameArr[i].style.top = rowsTop[6]
    }
    // x pos
    if (i <= 8) {
        gameArr[i].style.left = (i * 10 + 5).toString() + '%'
    }
    if (i > 8) {
        gameArr[i].style.left = (i * 10 + 5 - 90).toString() + '%'
    }
    if (i >= 18) {
        gameArr[i].style.left = (i * 10 + 5 - 180).toString() + '%'
    }
    if (i >= 27) {
        gameArr[i].style.left = (i * 10 + 5 - 270).toString() + '%'
    }
    if (i >= 36) {
        gameArr[i].style.left = (i * 10 + 5 - 360).toString() + '%'
    }
    if (i >= 45) {
        gameArr[i].style.left = (i * 10 + 5 - 450).toString() + '%'
    }
}
