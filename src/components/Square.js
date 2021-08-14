// rafce to create the skeleton

import React from 'react'

const Square = ({ color, square }) => {
    return (
        <div
            style={{ backgroundColor: color }}
            square-id={{ square }}
            className='square' />
    )
}


export default Square
