import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Keanu Reeves",
            url: "https://i.insider.com/5ce5507a594ea504113db106?width=1100&format=jpeg&auto=webp"
        },
        {
            name: "Katy Perry",
            url: "https://i.insider.com/5ec6f9b7988ee302b977f846?width=1100&format=jpeg&auto=webp"
        },
        {
            name: "Dwayne Johnson",
            url: "https://sportsnaut.com/wp-content/uploads/2020/08/dwayne-johnson-the-rock-buy-xfl-15-million-696x547.jpg"
        },
        {
            name: "Priyanka Karki",
            url: "https://i2.wp.com/blogograph.com/wp-content/uploads/2020/02/Priyanka-Karki.jpg"
        }
    ]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
};

const outOfFrame = (name) => {
    console.log(name + " left the screen!");
}

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" 
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"

                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards
