import React, { useEffect, useState } from 'react';

import '../Styles/Facts.css'

function Facts ()
{   
    const default_fact = "Plastic is made from petroleum oil, which is not sustainable. Petroleum Oil Can Not Be Renewed or Reused.";
    const [fact, setFact] = useState({text:default_fact, aidx: 0, tidx: 0});
    const DELAY = 5000;
    useEffect(() => {
        let interval = setInterval(() => getRandom(), DELAY);
    }, [])

    const facts = [
    "Plastic is made from petroleum oil, which is not sustainable. Petroleum Oil Can Not Be Renewed or Reused.",
    "It Takes Approximately 22 gallons of water to produce a pound of plastic.",  
    "Plastic Takes At Least 450 Years to Decompose Which is Not Safe to Begin With.",
    "Air Pollution badly damages the ozone layer. Increases the Chances of Having Skin Cancer.",
    "Sea Turtles Breathe in Oil Once Covered or Near Oil When They Go Up to the Surface",
    "A Single Tree can Absorb More than 10 Pounds of CO2 Each Year.",
    "Paper can be Recycled Up to 7 Times."
    ];

    const tips = [
        "Try Some Straw Alternatives Instead of Plastic Straws. Examples include Paper & Metal Straws.",
        "Use Refillable Water Bottles to Decrease the Amount of Single-Use Plastic ",
        "Bike or Carpool to Reduce the Amount of Gas and Carbon Emission",
        "Clean Up After Yourselves! The wildlife will thank you!",
        "Do Not Feed the Wildlife (This Will Cause the Animals to be More Dependent)",
        "Use Totes or Picnic Baskets over Plastic Bags to do your part",
        "Do Not Litter Cigarettes After Using Them (1. Can Pollute the Land/Ocean 2. Higher Chance of Starting a Fire)",
        "Stay Away from Cutting Trees For Campfires (Slowly Deforesting the Forest and Wrecking Habits for Certain Types of Animals)",
        "Parents/Guardians Can Use Their Imaginations to Create Games for their Child/Children to Clean Up",
        "Try to Conserve Water (There is Less than 1% of Fresh Water on Planet Earth)",
        "Avoid Using Charcoal. Other Alternatives Could Be Wood, Newspaper, etc."
    ];

    function getRandomFact(){
        let r;
        do{
            r = Math.floor(Math.random() * facts.length); // [0...n-1]
        }while(r == facts.tidx);
        setFact({text:facts[r], aidx: 0, tidx: r});
    }

    function getRandomTip(){
        let r;
        do{
            r = Math.floor(Math.random() * tips.length); // [0...n-1]
        }while(r == facts.tidx);
        setFact({text:tips[r], aidx: 1, tidx: r});
    }

    function getRandom(){
        let ra = Math.floor(Math.random() * 2); // 0 or 1 (fact or tip)
        console.log('get random')
        if(ra == 0){
            getRandomFact();
        }else{
            getRandomTip();
        }
    }

    return (
        <div className="facts__container">
            <div>
                <h5>{fact.aidx == 0 ? "Did You Know?" : "Sustainability Tip:"}</h5>
                <p>{fact.text}</p>
            </div>
        </div>
    );
}

export default Facts;