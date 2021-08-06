import React, {useState } from 'react'
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
     {
         name:"Ronaldo",
         url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F637963103457428252%2F&psig=AOvVaw2a5hO_YoxGc_XAnqSPAQ2L&ust=1628339123973000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiuyIyynPICFQAAAAAdAAAAABAD"
         
     }
]);

return (
    <div className='tinderCards'>
        {people.map((person) => {
            <h1>{person.name}</h1>
        })}
    </div>
)
}

export default TinderCards
