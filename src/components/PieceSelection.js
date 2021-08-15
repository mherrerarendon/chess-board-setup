import React from 'react'
import PieceButton from './PieceButton'

const PieceSelection = () => {
    return (
        <div class="piece-selector">
            <button type="button">Toggle Color</button >
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