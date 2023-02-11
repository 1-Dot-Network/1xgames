const settingsContainer = document.getElementById('row1')

function newSetting(name, options) {
    var setting = document.createElement('div')
    var optionId = 0
    var optionLength = options.length
    setting.setAttribute('class', 'setting')
    setting.innerText = name + ' : ' + options[0]
    setting.addEventListener('click', () => {
        optionId++
        if (optionId === optionLength) { optionId = 0 }
        localStorage.setItem(name, options[optionId])
        setting.innerText = name + ' : ' + localStorage.getItem(name)
    })
    setInterval(() => { setting.innerText = name + ' : ' + localStorage.getItem(name) }, 5)

    settingsContainer.append(setting)
}

newSetting('background', ["on", "off"])