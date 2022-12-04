var gameArr = []
var gameDiv = document.getElementById('games')

class row {
    constructor(rowNum) {
        this.rowNum = rowNum
        this.newRow
    }

    make() {
        var newRow = document.createElement('div')
        newRow.style.width = "100%"
        newRow.style.height = "20%"
        newRow.style.display = "flex"
        newRow.style.flexDirection = "row"
        newRow.style.padding = '7%'
        newRow.setAttribute('id', "row" + this.rowNum.toString())

        this.newRow = newRow
        gameDiv.append(newRow)
    }
}

var rowArr = []
var rowId = 0
var rowN = 1
rowArr.push(new row(rowN))
function newGame(icon, name) {
    rowId++
    if (rowId > 9) {
        rowId = 1
        rowN++
        rowArr.push(new row(rowN))
    }

    var newGame = document.createElement('div')
    newGame.setAttribute('id', name)
    newGame.setAttribute('class', 'game')
    newGame.setAttribute('data-id', rowId.toString())
    newGame.icon = document.createElement('img')
    newGame.icon.src = icon
    newGame.name = document.createElement('div')
    newGame.name.innerText = name
    newGame.append(newGame.name)
    newGame.append(newGame.icon)
    newGame.addEventListener('click', () => {
        window.location = ('/' + 'games' + '/' + 'gamepages' + '/' + name + '.html')
    })
    newGame.style.width = '8%'
    newGame.style.height = '25%'
    newGame.style.position = 'absolute'
    newGame.style.left = (5 + ((rowId * 10) - 10)).toString() + '%'

    //gameDiv.append(newGame)
    //rowArr[rowN - 1].append(newGame)
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

for (let h = 0; h < rowArr.length; h++) {
    rowArr[h].make()
}
var rowQueries = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

for (let i = 0; i < gameArr.length; i++) {
    var gameId = parseInt(gameArr[i].getAttribute('data-id'))
    rowQueries[gameId - 1].push(gameArr[i])
}

for (let j = 0; j < rowQueries.length; j++) {
    for (let k = 0; k < rowQueries[j].length; k++) {
        rowArr[k].newRow.append(rowQueries[j][k])
    }
}
