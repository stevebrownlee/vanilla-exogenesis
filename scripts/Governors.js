import { getGovernors, getTransientState, setGovernor } from "./database.js"

const governors = getGovernors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            const chosenGovernor = parseInt(changeEvent.target.value)
            setGovernor(chosenGovernor)
        }
    }
)

export const Governors = () => {
    const state = getTransientState()

    return `
        <section class="governorSelect">
            <label>Choose a governor</label>
            <select id="governor">
                <option value="0">Choose a governor...</option>
                ${
                    governors.map(governor => `
                        <option value="${governor.id}"
                            ${state.chosenGovernor === governor.id ? "selected": ""}>
                            ${governor.name}
                        </option>
                    `).join("")
                }
            </select>
        </section>
    `
}