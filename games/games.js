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

newGame('./gameFiles/Basketball Stars.png', 'Basketball stars')
newGame('./gameFiles/Cookie Clicker.png', 'Cookie Clicker')
newGame('./gameFiles/dogeminer.png', 'Doge Miner')
newGame('./gameFiles/MOTO X3M POOL.jpg', 'Motox3m Pool Party')
newGame('./gameFiles/MOTO X3M SPOOKY.jpeg', 'Motox3m Spooky')
newGame('./gameFiles/Runaway Dog 2.png', 'Runaway Dog 2')
newGame('./gameFiles/Core Ball.png', 'Core Ball')
newGame('./gameFiles/Bloons TD.jpg', 'Bloonstd')
newGame('./gameFiles/PaperIO 2.png', 'Paperio2')
newGame('./gameFiles/Drive Mad.jpg', 'Drive Mad')
newGame('./gameFiles/Bloxor.png', 'Bloxors')
newGame('./gameFiles/Breaking The Bank.png', 'Breaking The Bank')
newGame('./gameFiles/Duck Life 1.png', 'Duck Life')
newGame('./gameFiles/Duck Life 2.png', 'Duck Life 2')
newGame('./gameFiles/DUCK LIFE 3.png', 'Duck Life 3')
newGame('./gameFiles/doublewires.png', 'Double Wires')
newGame('./gameFiles/Idle Breakout.png', 'Idle Breakout')
newGame('./gameFiles/Crossy Road.png', 'Crossy Road')
newGame('./gameFiles/Retro B0wl.png', 'Retro B0wl')
newGame('./gameFiles/Super Auto Pets.png', 'Super Auto Pets')
newGame('./gameFiles/Slope.png', 'Slope')
newGame('./gameFiles/Drift Hunters.png', 'Drift Hunters')
newGame('./gameFiles/Slope bike.png', 'Slope Bike')
newGame('./gameFiles/Riddle School 1.jpg', 'Riddle School 1')
newGame('./gameFiles/Riddle School 2.jpg', 'Riddle School 2')
newGame('./gameFiles/Riddle School 3.jpg', 'Riddle School 3')
newGame('./gameFiles/Riddle School 4.png', 'Riddle School 4')
newGame('./gameFiles/Riddle School 5.jpg', 'Riddle School 5')
newGame('./gameFiles/Riddle School 1.jpg', 'Slope 2')
newGame('./gameFiles/Riddle School 2.jpg', 'Riddle School 2')
newGame('./gameFiles/Riddle School 3.jpg', 'Riddle School 3')
newGame('./gameFiles/Riddle School 4.png', 'Riddle School 4')
newGame('./gameFiles/Riddle School 5.jpg', 'Riddle School 5')








var rowsTop = {
    1: '10%',
    2: '38%',
    3: '66%',
    4: '94%',
    5: '122%',
    6: '150%'
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
