const unitEl = document.querySelector(".controls--integer--input")
const lengthEl = document.querySelector("#description-length")
const volumeEl = document.querySelector("#description-volume")
const massEl = document.querySelector("#description-mass")
const toasts = document.getElementById('toasts')
const lengthContainer = document.querySelector("#length-conversion-group-container")
const volumeContainer = document.querySelector("#volume-conversion-group-container")
const massContainer = document.querySelector("#mass-conversion-group-container")

let applicationInit = false

if (sanityCheck()) {
    applicationInit = true
    unitEl.addEventListener("change", () => {
        preProcessCalc(unitEl.value)
    })

} else {
    console.error("Unable to load applicaiton. This application will be unable to work correctly.")
    createNotification("Error: Unable to load application, try refreshing page.")
}

function preProcessCalc(val) {
    if (parseInt(val)) {
        processCalc(parseInt(val))
    } else {
        console.warn("The value passed was not of integer type. Please check input and try again.")
        createNotification("NOTE: Value must be of integer type.")
    }
}

function processCalc(val) {
    let meterToFeet = 3.281
    let literToGallon = 0.264
    let kiloToPound = 2.204

    const meterString = `${val} meters = ${(val * meterToFeet).toFixed(3)} | ${val} feet = ${(val / meterToFeet).toFixed(3)} meters`
    const literString = `${val} liters = ${((val * literToGallon)).toFixed(3)} | ${val} gallons = ${(val / literToGallon).toFixed(3)} kilos`
    const kiloString = `${val} kilos = ${(val * kiloToPound).toFixed(3)} | ${val} pounds = ${(val / kiloToPound).toFixed(3)} kilos`

    lengthEl.textContent = meterString
    volumeEl.textContent = literString
    massEl.textContent = kiloString
}

function createNotification(val) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = val
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function lengthOnClick() {
    let child = lengthContainer.querySelector("#description-length")
    navigator.clipboard.writeText(child.textContent)
    createNotification("Copied to clipboard.")
}

function volumeOnClick() {
    let child = volumeContainer.querySelector("#description-volume")
    navigator.clipboard.writeText(child.textContent)
    createNotification("Copied to clipboard.")
}

function massOnClick() {
    let child = massContainer.querySelector("#description-mass")
    navigator.clipboard.writeText(child.textContent)
    createNotification("Copied to clipboard.")
}

function sanityCheck() {
    return unitEl && lengthEl && volumeEl && massEl && toasts && lengthContainer && volumeContainer && massContainer
}