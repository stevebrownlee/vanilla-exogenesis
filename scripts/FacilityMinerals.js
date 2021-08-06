import { getFacilityMinerals, getMinerals, getTransientState, updateSelectedMinerals } from "./database.js"

const minerals = getMinerals()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "facilityMineral") {
            const facMin = getFacilityMinerals()
            const chosenFacilityMineral = parseInt(event.target.value)
            const facilityMineralToChange = facMin.find(fm => fm.id === chosenFacilityMineral)
            updateSelectedMinerals(facilityMineralToChange)
        }
    }
)

export const FacilityMinerals = (facilityId) => {
    const facMin = getFacilityMinerals()
    const state = getTransientState()
    const thisFacilityMinerals = facMin.filter(fm => fm.facilityId === facilityId)

    return `
    <div class="facility__minerals">
        <h2>Facility Minerals for #${facilityId}</h2>
        ${
            thisFacilityMinerals.map(fm => {
                const alreadyChosen = [...state.selectedMinerals.values()].includes(fm.id)
                const mineral = minerals.find(m => m.id === fm.mineralId)
                return `<div>
                    <input type="radio" ${alreadyChosen ? "checked": ""} name="facilityMineral" value="${fm.id}" />
                    ${fm.quantity} tons of ${mineral.name}
                </div>`
            }).join("")
        }
    </div>
    `
}
