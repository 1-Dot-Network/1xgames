const settingsContainer = document.getElementById('row1')

function newSetting(name, options) {
    var setting = document.createElement('div')
    var optionId = 0
    var optionLength = options.length
    setting.setAttribute('class', 'setting')
    setInterval(() => {
        var currentOption = options[optionId]
        setting.innerText = name + ' : ' + currentOption
        localStorage.setItem(name, currentOption)
    })
    setting.addEventListener('click', () => {
        optionId++
        if (optionId === optionLength) { optionId = 0 }
    })
    setting.addEventListener('onload', () => { currentOption = localStorage.getItem(name) })

    settingsContainer.append(setting)
}

newSetting('background', ["on", "off"])