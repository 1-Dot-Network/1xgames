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
        window.location = ('/' +  'games' + '/' + 'gamepages' + '/' + name + '.html')
    })
    newGame.style.width = '8%'
    newGame.style.height = '25%'
    newGame.style.position = 'absolute'
    gameDiv.append(newGame)
    gameArr.push(newGame)
}

newGame('./gameFiles/Core Ball.png', 'Coreball')
newGame('./gameFiles/Basketball Stars.png', 'Basketball stars')
newGame('./gameFiles/Bloons TD.jpg', 'Bloonstd')
newGame('./gameFiles/Cookie Clicker.png', 'Cookie Clicker')
newGame('./gameFiles/dogeminer.png', 'Doge Miner')
newGame('./gameFiles/Drive Mad.jpg', 'Drive Mad')
newGame('./gameFiles/MOTO X3M POOL.jpg', 'Motox3m Pool Party')
newGame('./gameFiles/MOTO X3M SPOOKY.jpeg', 'Motox3m Spooky')
newGame('./gameFiles/PaperIO 2.png', 'Paperio2')
newGame('./gameFiles/Runaway Dog 2.png', 'Runaway Dog 2')


var rowsTop = {
    1: '10%',
    2: '38%',
    3: '46%',
    4: '58%',
    5: '100%',
    6: '122%'
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
