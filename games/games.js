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
        window.location = ('/' + 'games' + '/' + 'gamepages' + '/' + name + '/' + 'index.html')
    })
    newGame.style.width = '8%'
    newGame.style.height = '25%'
    newGame.style.position = 'absolute'
    newGame.style.left = (5 + ((rowId * 10) - 10)).toString() + '%'

    //gameDiv.append(newGame)
    //rowArr[rowN - 1].append(newGame)
    gameArr.push(newGame)
}
newGame('./gameFiles/Retro B0wl.png', 'RetroB0wl')
newGame('./gameFiles/slope.png', 'Slope')
newGame('./gameFiles/Core ball.png', 'Coreball')
newGame('./gameFiles/Drive Mad.jpg', 'drive mad')
newGame('./gameFiles/basketball stars.png', 'basketball stars')
newGame('./gameFiles/Bitlife.png', 'Bitlife')
newGame('./gameFiles/Vex 6.jpeg', 'Vex6')
newGame('./gameFiles/Subway Surfers.jpg', 'subway surfers')
newGame('./gameFiles/Cluster Rush.jpg', 'cluster rush')
newGame('./gameFiles/Drift Boss.jpg', 'drift boss')
newGame('./gameFiles/BASKET RANDOM.png', 'basket random')
newGame('./gameFiles/Run 3.png', 'Run3')
newGame('./gameFiles/PaperIO 2.png', 'paperio 2')
newGame('./gameFiles/Drift hunters.png', 'Drift Hunters')
newGame('./gameFiles/rocket league.png.png', 'Rocket League')
newGame('./gameFiles/slopecity.jpg', 'Slope City')
newGame('./gameFiles/crossy road.png', 'Crossy Road')
newGame('./gameFiles/pool.jpg', 'Billiards')
newGame('./gameFiles/super auto pets.png', 'Super Auto Pets')








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
