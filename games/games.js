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
newGame('./gameFiles/DUCK LIFE 4.jpg', 'Duck Life 4')
newGame('./gameFiles/Duck Life 5.png', 'Duck Life 5')
newGame('./gameFiles/DUCK LIFE TREASURE HUNT.jfif', 'Duck Life TREASURE HUNT')
newGame('./gameFiles/doublewires.png', 'Double Wires')
newGame('./gameFiles/Idle Breakout.png', 'Idle Breakout')
newGame('./gameFiles/Crossy Road.png', 'Crossy Road')
newGame('./gameFiles/Retro B0wl.png', 'Retro B0wl')
newGame('./gameFiles/Super Auto Pets.png', 'Super Auto Pets')
newGame('./gameFiles/Slope.png', 'Slope')
newGame('./gameFiles/Drift Hunters.png', 'Drift Hunters')
newGame('./gameFiles/Riddle School 1.jpg', 'Riddle School 1')
newGame('./gameFiles/Riddle School 2.jpg', 'Riddle School 2')
newGame('./gameFiles/Riddle School 3.jpg', 'Riddle School 3')
newGame('./gameFiles/Riddle School 4.png', 'Riddle School 4')
newGame('./gameFiles/Riddle School 5.jpg', 'Riddle School 5')
newGame('./gameFiles/Matrix.png', 'Matrix Rampage')
newGame('./gameFiles/slope-bike-logo.jpg', 'Slope Bike')
newGame('./gameFiles/Roblox.jpg', 'Roblox')
newGame('./gameFiles/slope2.png', 'Slope 2')
newGame('./gameFiles/RaftIO.png', 'Raft.io')
newGame('./gameFiles/Bad Icecream.png', 'Bad Icecream')
newGame('./gameFiles/Bad Icecream 2.png', 'Bad Icecream 2')
newGame('./gameFiles/Snow Battle.png', 'Snow Battle.io')
newGame('./gameFiles/Doom 1.png', 'Doom 1')
newGame('./gameFiles/Pool.jpg', 'Pool')
newGame('./gameFiles/Kick The Buddy.jpg', 'Kick The Buddy')
newGame('./gameFiles/Evolution.png', 'Evolution')
newGame('./gameFiles/Flippy Fish.png', 'Flippy Fish')
newGame('./gameFiles/Fying Nemo.png', 'Frying Nemo')
newGame('./gameFiles/Happy Wheels.jpg', 'Happy Wheels')
newGame('./gameFiles/Rocket League.png', 'Rocket League')
newGame('./gameFiles/Drift Boss.jpg', 'Drift Boss')
newGame('./gameFiles/Basket Random.png', 'Basket Random')
newGame('./gameFiles/Flippy Fish.png', 'Flippy Fish')
newGame('./gameFiles/Fnaf 1.jpeg', 'Fnaf 1')
newGame('./gameFiles/Fnaf 2.jpeg', 'Fnaf 2')
newGame('./gameFiles/Fnaf 3.jpg', 'Fnaf 3')
newGame('./gameFiles/Fnaf 4.jpg', 'Fnaf 4')
newGame('./gameFiles/Fnaf SL.png', 'Fnaf Sister Location')
newGame('./gameFiles/Basket Random.png', 'Basket Random')
newGame('./gameFiles/Among Us.png', 'Among Us')
newGame('./gameFiles/1v1lol.png', '1v1.lol')
newGame('./gameFiles/Tiny Fishing.jpg', 'Tiny Fishing')
newGame('./gameFiles/Friday Night Funkin.png', 'Friday Night Funkin')
newGame('./gameFiles/Rooftop Snipers.png', 'Rooftop Snipers')
newGame('./gameFiles/Krunker.jpg', 'Krunker')
newGame('./gameFiles/Friday Night Funkin.png', 'Friday Night Funkin')
newGame('./gameFiles/Rooftop Snipers.png', 'Rooftop Snipers')




var rowsTop = {
    1: '10%',
    2: '38%',
    3: '66%',
    4: '94%',
    5: '122%',
    6: '150%'
}
for (let i = 0; i < 100; i++) {
    rowsTop[i] = ((i * 29) - 20).toString() + '%'
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
    if (i > 44) {
        gameArr[i].style.top = rowsTop[6]
    }
    if (i > 53) {
        gameArr[i].style.top = rowsTop[7]
    }
    if (i > 62) {
        gameArr[i].style.top = rowsTop[8]
    }
    if (i > 71) {
        gameArr[i].style.top = rowsTop[9]
    }
    if (i > 80) {
        gameArr[i].style.top = rowsTop[10]
    }
    if (i > 89) {
        gameArr[i].style.top = rowsTop[11]
    }
    if (i > 98) {
        gameArr[i].style.top = rowsTop[12]
    }
    if (i > 107) {
        gameArr[i].style.top = rowsTop[13]
    }
    if (i > 116) {
        gameArr[i].style.top = rowsTop[14]
    }
    if (i > 125) {
        gameArr[i].style.top = rowsTop[15]
    }
    if (i > 134) {
        gameArr[i].style.top = rowsTop[16]
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
    if (i >= 54) {
        gameArr[i].style.left = (i * 10 + 5 - 540).toString() + '%'
    }
    if (i >= 63) {
        gameArr[i].style.left = (i * 10 + 5 - 630).toString() + '%'
    }
    if (i >= 72) {
        gameArr[i].style.left = (i * 10 + 5 - 720).toString() + '%'
    }
    if (i >= 81) {
        gameArr[i].style.left = (i * 10 + 5 - 810).toString() + '%'
    }
    if(i >= 90) {
        gameArr[i].style.left = (i * 10 + 5 - 900).toString() + '%'
    }
}
