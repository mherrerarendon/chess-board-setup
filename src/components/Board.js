import React from 'react'
import Square from './Square'

const Board = () => {
    const items = []

    for (let i = 0; i < 64; i++) {
        let color = 'white';
        const row = Math.floor(i / 8);
        if (row % 2 === 0) {
            color = i % 2 === 1 ? 'white' : 'black';
        } else {
            color = i % 2 === 1 ? 'black' : 'white';
        }
        items.push(<Square color={color} id={{ i }} />)
    }
    return (
        <div className='board'>
            {items}
        </div>
    )
}

export default Board