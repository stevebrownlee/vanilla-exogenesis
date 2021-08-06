import { SolarMine } from "./SolarMine.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = SolarMine()
}

renderAllHTML()


document.addEventListener("stateChanged", event => {
    renderAllHTML()
})
