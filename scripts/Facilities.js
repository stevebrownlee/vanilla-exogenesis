import { getFacilities, getTransientState, setFacility } from "./database.js"

const facilities = getFacilities()

document.addEventListener(
    "change",
    evt => {
        if (evt.target.id === "facilityChoice") {
            setFacility(parseInt(evt.target.value))
        }
    }
)

export const Facilities = () => {
    const state = getTransientState()

    return `
        <label>Choose a facility</label>
        <select id="facilityChoice">
            <option value="0">Choose a facility...</option>
            ${
                facilities.map(facility => `
                    <option ${state.selectedFacility === facility.id ? "selected" : ""}
                        value="${facility.id}">
                        ${facility.name}
                    </option>
                `).join("")
            }
        }
        </select>
    `
}
