import React from "react";
import './Card.css'
import { Carditem } from "./Carditem";

export function Cards() {
    return(
<div className="cards">
<h1> Our Selection of Dishes</h1>

<div className="cards__container">
    <div className="cards__warpper">
        <ul className="cards__items">
            <Carditem
                src='images/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg'
                text='O10000000000000000000'
                label='Figma'
                path='/sign-up'/>
            <Carditem
                src='images/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg'
                text='O10000000000000000000'
                label='Figma'
                path='/sign-up' />
            <Carditem
                src='images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg'
                text='O10000000000000000000'
                label='Figma'
                path='/sign-up' />

        </ul>
        <ul className="cards__items">
        <Carditem
                src='images/871655af5e4849aa43a6d293284825002e7aeb50.jpg'
                text='O10000000000000000000'
                label='igma'
                path='/sign-up' />
            <Carditem
                src='images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg'
                text='O10000000000000000000'
                label='Figma'
                path='/sign-up' />

        </ul>
    </div>
</div>
</div>

    )
}