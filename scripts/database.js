const database = {
    transientState: {
        chosenGovernor: 0,
        selectedFacility: 0,
        selectedMinerals: new Map()
    },
    facilities: [
        {
            id: 1,
            name: "Ganymede",
            active: true
        },
        {
            id: 2,
            name: "Io",
            active: true
        },
        {
            id: 3,
            name: "Titan",
            active: true
        }
    ],
    colonies: [
        {
            id: 1,
            name: "Earth"
        },
        {
            id: 2,
            name: "Europa"
        },
        {
            id: 3,
            name: "Mars"
        }
    ],
    governors: [
        {
            id: 1,
            name: "Patricia Purdy",
            colonyId: 3
        },
        {
            id: 2,
            name: "Katrina Bahringer",
            colonyId: 2
        },
        {
            id: 3,
            name: "Lola Wolff",
            colonyId: 1
        },
        {
            id: 4,
            name: "Damon Hartmann",
            colonyId: 3
        }
    ],
    minerals: [
        {
            id: 1,
            name: "Sodium"
        },
        {
            id: 2,
            name: "Molybdenum"
        },
        {
            id: 3,
            name: "Chromium"
        },
        {
            id: 4,
            name: "Uranium"
        },
        {
            id: 5,
            name: "Iron"
        }
    ],
    facilityMinerals: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 5,
            quantity: 18
        },
        {
            id: 2,
            facilityId: 1,
            mineralId: 3,
            quantity: 4
        },
        {
            id: 3,
            facilityId: 3,
            mineralId: 1,
            quantity: 47
        },
        {
            id: 4,
            facilityId: 2,
            mineralId: 2,
            quantity: 92
        }
    ],
    colonyMinerals: [
        {
            id: 1,
            colonyId: 1,
            mineralId: 5,
            quantity: 7
        },
        {
            id: 2,
            colonyId: 1,
            mineralId: 3,
            quantity: 2
        }
    ]
}

export const updateSelectedMinerals = (facilityMineral) => {
    database.transientState.selectedMinerals.set(facilityMineral.facilityId, facilityMineral.id)
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getMinerals = () => {
    return database.minerals.map(f => ({...f}))
}

export const getGovernors = () => {
    return database.governors.map(f => ({...f}))
}

export const getColonies = () => {
    return database.colonies.map(f => ({...f}))
}

export const setGovernor = (id) => {
    database.transientState.chosenGovernor = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(f => ({...f}))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(f => ({...f}))
}

export const getTransientState = () => {
    return database.transientState
}

export const addCustomOrder = () => {
    const governor = database.governors.find(g => g.id === database.transientState.chosenGovernor)

    if (governor) {
        // Get the current stockpile for the chosen governor's colony
        const colony = database.colonies.find(c => c.id === governor.colonyId)
        const colonyStockpile = database.colonyMinerals.filter(cm => cm.colonyId === colony.id)

        // Get the Map() of selected minerals
        const chosenMinerals = database.transientState.selectedMinerals

        // Swap the mineral(s) from mining facility to colont
        for (const [facilityId, facilityMineralId] of chosenMinerals.entries()) {
            const facilityMineral = database.facilityMinerals.find(fm => fm.id === facilityMineralId)
            const colonyMineral = colonyStockpile.find(cm => cm.mineralId === facilityMineral.mineralId)

            // If the colony has the mineral already, increase the quantity by one
            if (colonyMineral) {
                colonyMineral.quantity++
            }
            // If this is a new miineral for the colony, add a new object for the new relationship
            else {
                database.colonyMinerals.push({
                    id: database.colonyMinerals[database.colonyMinerals.length - 1].id++,
                    mineralId: facilityMineral.mineralId,
                    colonyId: colony.id,
                    quantity: 1
                })
            }

            // Decrease the quantity in the mining facility
            facilityMineral.quantity--
        }

        // Clear out chosen minerals to make space for a new order
        database.transientState.selectedMinerals = new Map()


        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}

