import React from 'react';
import { useSelector } from 'react-redux';

import {Button} from './Button'

const GameContainer = () => {
    // const direction = useSelector(store => store.game.direction);
    // console.log(direction)
    return (
        <>
        <div>Play the game</div>
        <Button />
    </>
    )

if(direction.actions) {
    return (
        <>
            <div>My Direction: {direction.description}</div>
            <Button />
        </>
    ); } else {
        return 
    }
};

export default GameContainer;