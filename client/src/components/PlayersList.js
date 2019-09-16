import React from 'react';
import PlayerCard from './PlayerCard';

import { makeStyles, Box } from '@material-ui/core';


const PlayersList = ( { players } ) => {

    if(players.length) {
        return (
            <Box display='flex' flexDirection='column' alignItems='center'>
                {players.map(player => {
                return <PlayerCard player={player} key={player.id} />
                })}
            </Box>
        );
    } else {
       return(
            <div>Getting Players...</div>
       )
    }
}

export default PlayersList;