import { getColonies, getColonyMinerals, getGovernors, getMinerals, getTransientState } from "./database.js"

const minerals = getMinerals()
const colonies = getColonies()
const governors = getGovernors()

export const ColonyMinerals = () => {
    const state = getTransientState()

    if (state.chosenGovernor !== 0) {
        const governor = governors.find(g => g.id === state.chosenGovernor)
        const colony = colonies.find(c => c.id === governor.colonyId)
        const colonyMinerals = getColonyMinerals()

        return `
            <h2>${colony.name} Minerals</h2>
            ${
                colonyMinerals
                    .filter(cm => cm.colonyId === colony.id)
                    .map(
                        cm => {
                            const mineral = minerals.find(m => m.id === cm.mineralId)
                            return `<div>${cm.quantity} tons of ${mineral.name}</div>`
                        }
                    )
                    .join("")
            }
        `
    }
    else {
        return "<h2>Colony Minerals</h2>"
    }

}
