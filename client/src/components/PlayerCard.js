import React from 'react';



const PlayerCard = ( { player } ) => {

    return (
        <>
        <div>Name:{player.name}</div>
        <div>Country:{player.country}</div>
        <div>Searches:{player.searches}</div>
        </>
    );
}

export default PlayerCard;