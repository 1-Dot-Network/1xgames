const settingsContainer = document.getElementById('row1')

function newSetting(name) {
    var setting = document.createElement('div')
    setting.setAttribute('class', 'setting')
    setting.innerText = name
    settingsContainer.append(setting)
}

newSetting('test')