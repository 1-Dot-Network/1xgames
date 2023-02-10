const settingsContainer = document.getElementById('settingsContainer')

function newSetting(name) {
    var setting = document.createElement('div')
    setting.setAttribute('class', 'setting')
    setting.innerText = name
    settingsContainer.append(setting)
}

newSetting('test')