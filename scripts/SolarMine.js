import { ChosenOptions } from "./ChosenOptions.js"
import { ColonyMinerals } from "./ColonyMinerals.js"
import { Facilities } from "./Facilities.js"
import { FacilityMinerals } from "./FacilityMinerals.js"
import { Governors } from "./Governors.js"

export const SolarMine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <section class="governors">
            ${ Governors() }
        </section>

        <article class="facilities">
        ${ Facilities() }
        </article>


        <article class="choices">
            <section class="minerals--forsale">
                ${ FacilityMinerals() }
            </section>
            <section class="minerals--chosen">
                ${ ChosenOptions() }
            </section>
        </article>

        <article class="colony">
            <section class="stockpile">${ ColonyMinerals() }</section>
        </article>
    `
}
