import { getFacilities, getFacilityMinerals, getMinerals, getTransientState, updateSelectedMineral } from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "facilityMineral") {
            updateSelectedMineral(parseInt(changeEvent.target.value))
        }
    }
)

export const FacilityMinerals = () => {
    const state = getTransientState()

    if (state.selectedFacility === 0) {
        return "<h3>Facility Minerals</h3>"
    }
    else {
        const facMin = getFacilityMinerals()
        const state = getTransientState()

        const thisFacilityMinerals = facMin.filter(fm => fm.facilityId === state.selectedFacility)
        const facility = facilities.find(f => f.id === state.selectedFacility)

        return `
            <div class="facility__minerals">
                <h3>Facility Minerals for ${facility.name}</h3>
                ${
                    thisFacilityMinerals.map(fm => {
                        const mineral = minerals.find(m => m.id === fm.mineralId)
                        return `<div>
                            <input type="radio" ${fm.id === state.selectedMineral ? "checked": ""} name="facilityMineral" value="${fm.id}" />
                            ${fm.quantity} tons of ${mineral.name}
                        </div>`
                    }).join("")
                }
            </div>
        `
    }
}
