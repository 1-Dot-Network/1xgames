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
        window.location = './servers/' + 'server1.html'
    })
    serverDiv.append(newServer)
    serverArr.push(newServer)
}

newServer('I Understand')

setInterval(() => {
    for (let i = 0; i < serverArr.length; i++) {
        if (i !== 0) {
            serverArr[i].style.top = (i * 15 + 20).toString() + "%"
        } else serverArr[i].style.top = "40%"
    }
}, 100)