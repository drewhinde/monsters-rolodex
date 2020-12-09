import React from 'react';
import '../card/card.styles.css';

const Card = props => {

    let imgurl = 'https://robohash.org/' + props.monster.id + '?set=set2&size=180x180';

    return (
        <div className='card-container'>
            <img src={imgurl} title={props.monster.name} alt={props.monster.name}></img>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
            <p>{props.monster.phone}</p>
        </div>
    )
}

export default Card