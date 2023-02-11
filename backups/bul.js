var serverArr = []
var serverDiv = document.getElementById('servers')

function newServer(Title) {
    var newServer = document.createElement('div')
    newServer.setAttribute('class', 'server')
    newServer.Title = document.createElement('div')
    newServer.Title.setAttribute('id', 'Title')
    newServer.Title.innerText = Title
    newServer.append(newServer.Title)
    newServer.addEventListener('click', () => {
        window.location = 'https://' + 'www.'+ newServer.Title.innerText
    })
    serverDiv.append(newServer)
    serverArr.push(newServer)
}

function newServe(Title) {
    var newServer = document.createElement('div')
    newServer.setAttribute('class', 'server')
    newServer.Title = document.createElement('div')
    newServer.Title.setAttribute('id', 'Title')
    newServer.Title.innerText = Title
    newServer.append(newServer.Title)
    newServer.addEventListener('click', () => {
        window.location = 'https://patreon.com/1dotnetwork' 
    })
    serverDiv.append(newServer)
    serverArr.push(newServer)
}

newServe('Get A Private link' , 'Subscribe to are patiron to keep 1xgames alive')
newServer('1xgame.one')
newServer('1xgame.Ink')
newServer('1xgame.Dev')
newServer('1xgame.lol')
newServer('1xgame.xyz')
newServer('1xgame.us')
newServer('1xgame.one')
newServer('Totallymath.xyz')
setInterval(() => {
    for (let i = 0; i < serverArr.length; i++) {
        if (i !== 0) {
            serverArr[i].style.top = (i * 10 + 20).toString() + "%"
        } else serverArr[i].style.top = "20%"
    }
}, 100) 
