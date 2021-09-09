// rafce to create the skeleton

import React from 'react'

const Square = ({ color, square_id, piece_value, add_piece }) => {
    return (
        <div
            key={ square_id }
            className={color}
            onClick={() => add_piece(square_id)}
        >
            {piece_value}
        </div>
    )
}


export default Square
