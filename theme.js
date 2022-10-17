const colorSwitch = document.getElementById("input-color-switch")
const pandaOptions = localStorage.getItem("pandaColorMode")

let pandaColor = {}

if (pandaOptions != null) {
    // found no options.
    pandaColor = JSON.parse(pandaOptions)

    if (pandaColor.darkModeActive) {
        colorSwitch.checked = true
        checkMode()
    } else {
        colorSwitch.checked = false
    }
} else {
    pandaColor.darkModeActive = false
    // write default options
    saveOptions()
}

function saveOptions() {
    localStorage.setItem("pandaColorMode", JSON.stringify(pandaColor))
    pandaColor = {}
    panda = JSON.parse(localStorage.getItem("pandaColorMode"))
}

function checkMode() {
    if (colorSwitch.checked) {
        darkModeOn()
    } else {
        darkModeOff()
    }
    if (colorSwitch.checked) {
        pandaColor.darkModeActive = true
        saveOptions()
    } else {
        pandaColor.darkModeActive = false
        saveOptions()
    }
    //saveOptions()
}

function darkModeOn() {
    document.body.classList.toggle("dark-mode")
}

function darkModeOff() {
    document.body.classList.toggle("dark-mode")
}

colorSwitch.addEventListener("click", checkMode)