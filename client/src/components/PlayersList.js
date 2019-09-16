import React from 'react';
import PlayerCard from './PlayerCard';



const PlayersList = ( { players } ) => {

    if(players.length) {
        return (
            <div>
                {players.map(player => {
                return <PlayerCard player={player} key={player.id} />
                })}
            </div>
        );
    } else {
       return(
            <div>Getting Players...</div>
       )
    }
}

export default PlayersList;