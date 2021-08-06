import { ChosenOptions } from "./ChosenOptions.js"
import { ColonyMinerals } from "./ColonyMinerals.js"
import { addCustomOrder } from "./database.js"
import { Facilities } from "./Facilities.js"
import { Governors } from "./Governors.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const SolarMine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <article class="facilities">
            ${ Facilities() }
        </article>

        <article class="choices">
            ${ ChosenOptions() }
            <article class="order">
                <button id="orderButton">Create Custom Order</button>
            </article>
        </article>



        <article class="colony">
            <section class="governors">${ Governors() }</section>
            <section class="stockpile">${ ColonyMinerals() }</section>
        </article>
    `
}
