const settingsContainer = document.getElementById('row1')

function newSetting(name, options) {
    var setting = document.createElement('div')
    var optionId = 0
    localStorage.setItem(name, options[optionId])
    localStorage.setItem(name + 'OID', optionId)
    var optionLength = options.length
    setting.setAttribute('class', 'setting')
    setting.innerText = name + ' : ' + options[0]
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

newSetting('background', ["on", "off"])