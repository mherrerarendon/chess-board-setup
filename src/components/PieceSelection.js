import React from 'react'
import PieceButton from './PieceButton'

const PieceSelection = ({ selected_piece, handleChange }) => {
    const pieces = [..."♙♖♘♗♕♔♟♜♞♝♛♚"]
    const piece_components = pieces.map(piece_char => {
        return <PieceButton 
                    piece_id={piece_char}
                    handleChange={handleChange}
                    selected_id={selected_piece}
                />
    })
    return (
        <div>
            {piece_components}
        </div>
    )
}

export default PieceSelection