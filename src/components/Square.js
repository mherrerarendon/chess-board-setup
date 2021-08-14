// rafce to create the skeleton

import React from 'react'

const Square = ({ color, id }) => {
    return (
        <div
            style={{ backgroundColor: color }}
            id={{ id }}
            className='square' />
    )
}


export default Square
