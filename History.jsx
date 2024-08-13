import { Carousel } from "bootstrap";
import React from "react";
import history from "./history.jpg"


function History() {
    return (
        <div className="history">
            <h2>History of Independence Day </h2>
            <div>
               <img src={history} alt="history.jpg"/>
            </div>
            <div >
                <p>In 1947, on 15th August, India became independent. We won freedom from British Raj after a hard struggle.
                    On this day at the stroke of midnight, Pandit Jawaharlal Nehru, our first Prime Minister, unfurled the National
                    Flag at the Red Fort for the first time. It marked the end of the 200 years old British reign in India. We now breathe
                    air in a free and sovereign nation.
                    The British have governed India for about 200 years. Under British colonisation, the life of every Indian was
                    depressing and full of struggle. Indians were treated as slaves and had no freedom of speech. Indian rulers were
                    puppets in the possession of British officers. Indian fighters were dealt with cruelty in British camps, and farmers
                    were starving as they couldn't grow crops and needed to pay substantial land taxes.
                    On this special occasion, the people of India remember the selfless sacrifices and unparalleled contributions
                    of great men and women to achieve the independence of India. Leaders like Mahatma Gandhi, Jawaharlal Nehru,
                    Subhas Chandra Bose, Maulana Abdul Kalam Azad, Sardar Patel, and Gopalbandhu Das are paid reverent homage by one and
                    all in the country.
                    
                    Indian Independence Day 2024 is a national occasion and celebrated as a national holiday on which all shops, workplaces,
                    schools and universities remain closed. This day is a token to the freedom fighters and patriots who sacrificed their lives
                    so we could experience and live in a free land. The tricolour is hoisted in schools and other institutions on this day.
                    A wind of patriotism and national integration blows across the country on this day. The country is celebrating its 78th
                    Independence Day as it completes 78 years of independence to remind the citizens of the sacrifices made by our forefathers.
                    India will commemorate its past this Independence Day and will also lay plans for the future. It is now in the hands of
                    India youth to shape and form the future of our country.</p>
            </div>
        </div>
    )
}

export default History;