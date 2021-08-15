import React from 'react'
import PieceButton from './PieceButton'

const PieceSelection = ({ white, onToggleColor }) => {
    return (
        <div class="piece-selector">
            <button type="button" onClick={onToggleColor}>Toggle Color</button >
            <PieceButton piece_char={white ? "♙" : "♟️️"} />
            <PieceButton piece_char={white ? "♖" : "♜"} />
            <PieceButton piece_char={white ? "♘" : "♞"} />
            <PieceButton piece_char={white ? "♗" : "♝"} />
            <PieceButton piece_char={white ? "♕" : "♛"} />
            <PieceButton piece_char={white ? "♔" : "♚"} />
        </div>
    )
}

export default PieceSelection