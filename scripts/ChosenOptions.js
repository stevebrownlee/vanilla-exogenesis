import { addCustomOrder, getFacilities, getFacilityMinerals, getMinerals, getTransientState } from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const ChosenOptions = () => {
    const state = getTransientState()

    let html = `<h3>Space Cart</h3>`

    if (state.selectedMineral !== 0) {
        const facilityMineral = facilityMinerals.find(fm => fm.id === state.selectedMineral)
        const mineral = minerals.find(m => m.id === facilityMineral.mineralId)
        const facility = facilities.find(f => f.id === facilityMineral.facilityId)

        html += `<div>1 ton of ${mineral.name} from ${facility.name}</div>`
    }
    html += `<button id="orderButton">Purchase Mineral</button>`

    return html
}