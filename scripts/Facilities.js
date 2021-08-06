import { getFacilities, getTransientState, setFacility } from "./database.js"
import { FacilityMinerals } from "./FacilityMinerals.js"

const facilities = getFacilities()

document.addEventListener(
    "click",
    evt => {
        if (evt.target.id.startsWith("facility--")) {
            const [, facilityId] = evt.target.id.split("--")
            setFacility(parseInt(facilityId))
        }
    }
)

export const Facilities = () => {
    const state = getTransientState()

    return facilities.map(facility => `
        <section class="facility">
            <button ${state.chosenGovernor > 0 ? "" : "disabled"}
                class="facility__selector"
                id="facility--${facility.id}">
                ${facility.name}
            </button>
            ${
                state.selectedFacility === facility.id
                    ? FacilityMinerals(facility.id)
                    : ""
            }
        </section>
    `).join("")
}
