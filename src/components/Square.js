// rafce to create the skeleton

import React from 'react'

const Square = ({ color, square_id, piece_value, add_piece }) => {
    return (
        <div
            style={{ backgroundColor: color }}
            key={ square_id }
            className='square'
            onClick={() => add_piece(square_id)}
        >
            {piece_value}
        </div>
    )
}


export default Square
