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
        "Plastic is made from petroleum oil, which is not sustainable.",
        "It takes approximately 22 gallons of water to produce a pound of plastic.",  
        "Plastic takes at least 450 years to decompose which is not safe to begin with.",
        "Air pollution badly damages the ozone layer. increases the chances of having skin cancer.",
        "Sea turtles breathe in oil once covered or near oil when they go up to the surface.",
        "A single tree can absorb more than 10 pounds of co2 each year.",
        "Paper can be recycled up to 7 times."
    ];

    const tips = [
        "Try some straw alternatives instead of plastic straws.",
        "Use refillable water bottles to decrease the amount of single-use plastic.",
        "Bike or carpool to reduce the amount of gas and carbon emission.",
        "Clean up after yourselves! the wildlife will thank you!",
        "Do not feed the wildlife (this will cause the animals to be more dependent)",
        "Use totes or picnic baskets over plastic bags to do your part",
        "Do not litter cigarettes.",
        "Stay away from cutting trees for campfires",
        "Parents/guardians can use their imaginations to create games for their child/children to clean up",
        "Try to conserve water (there is less than 1% of fresh water on planet earth)",
        "Avoid using charcoal. other alternatives could be wood, newspaper, etc."
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