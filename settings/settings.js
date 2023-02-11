const settingsContainer = document.getElementById('row1')
var settings = document.getElementsByClassName('setting')

function newSetting(name, options) {
    var setting = document.createElement('div')
    var optionId = 0
    if (localStorage.getItem(name) === null) {
        localStorage.setItem(name, options[optionId])
        localStorage.setItem(name + 'OID', optionId)
    }
    var optionLength = options.length
    setting.setAttribute('class', 'setting')
    setting.innerText = name + ' : ' + options[0]
    setting.reset = () => { localStorage.setItem(name, options[0]) }
    setting.addEventListener('click', () => {
        optionId++
        if (optionId === optionLength) { optionId = 0 }
        localStorage.setItem(name, options[optionId])
        localStorage.setItem(name + 'OID', optionId)
        setting.innerText = name + ' : ' + localStorage.getItem(name)
    })
    setInterval(() => { setting.innerText = name + ' : ' + options[localStorage.getItem(name + 'OID')] }, 5)

    settingsContainer.append(setting)
}

newSetting('Background', ["on", "off"])
newSetting('Tab spoof', ["off", "New tab", "Google drive", "Classlink", "Schoology", "Google", "Google docs", "Sora", "Google classroom", "Youtube", "GoGaurdian", "Kahoot"])

for (let i = 0; i < settings.length; i++) {
    if (settings[i].innerText.split(' ')[2] === undefined) {
        settings[i].reset()
    }
}