import React from 'react'
import PieceButton from './PieceButton'

const PieceSelection = () => {
    return (
        <div class="piece-selector">
            <PieceButton piece_char="♟️️" />
            <PieceButton piece_char="♜" />
            <PieceButton piece_char="♞" />
            <PieceButton piece_char="♝" />
            <PieceButton piece_char="♛" />
            <PieceButton piece_char="♚" />
        </div>
    )
}

export default PieceSelection