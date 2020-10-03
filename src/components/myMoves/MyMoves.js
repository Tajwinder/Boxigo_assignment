import React from 'react'
import Move from '../move/Move';
import data from './../../data.json';
function MyMoves() {
    
    return (
        <div>
            <h1>My Moves</h1>
            {
                data['Customer_Estimate_Flow'].map(
                    (obj,index)=>
                    <Move move={obj} objIndex={index}/>
                    )
            }
        </div>
    )
}

export default MyMoves
