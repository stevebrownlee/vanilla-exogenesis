import { getFacilities, getFacilityMinerals, getMinerals, getTransientState } from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()

export const ChosenOptions = () => {
    const state = getTransientState()

    let html = `<h3>You have chosen the following minerals</h3>`

    if (state.selectedMinerals.size !== 0) {
        for (const [facilityId, facilityMineralId] of state.selectedMinerals.entries()) {
            const facilityMineral = facilityMinerals.find(fm => fm.id === facilityMineralId)
            const mineral = minerals.find(m => m.id === facilityMineral.mineralId)
            const facility = facilities.find(f => f.id === facilityMineral.facilityId)

            html += `<div>1 ton of ${mineral.name} from ${facility.name}</div>`
        }
    }

    return html
}