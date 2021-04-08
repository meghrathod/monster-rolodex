import React from 'react'
import './card.styles.css'

export const Card = (props) =>{
    return (
        <div className="card-container">
            <img
                src={`https://robohash.org/${props.monster.id}?set=set3&size=300x300`}
                alt={`Robot ${props.monster.id}`}
            />
            <h2>{props.monster.name}</h2>
            <h2>{props.monster.email}</h2>
        </div>
    );
}