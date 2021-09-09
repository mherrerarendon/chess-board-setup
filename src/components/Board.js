import React from 'react'
import Square from './Square'

const Board = ({board_state, add_piece}) => {
    const items = []

    for (let i = 0; i < 64; i++) {
        let color = 'white';
        const row = Math.floor(i / 8);
        if (row % 2 === 0) {
            color = i % 2 === 1 ? 'black' : 'white';
        } else {
            color = i % 2 === 1 ? 'white' : 'black';
        }
        items.push(<Square color={color} key={i.toString()} square_id={i} piece_value={board_state[i]} add_piece={add_piece} />)
    }
    return (
        <div className='board'>
            {items}
        </div>
    )
}

export default Board