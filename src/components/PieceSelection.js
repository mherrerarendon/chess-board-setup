import React from 'react'
import PieceButton from './PieceButton'

const PieceSelection = ({ selected_piece, set_piece }) => {
    const pieces = [..."_♙♖♘♗♕♔♟♜♞♝♛♚"]
    const piece_components = pieces.map(piece_char => {
        return <PieceButton 
                    piece_id={piece_char}
                    set_piece={set_piece}
                    selected_id={selected_piece}
                    key={piece_char}
                />
    })
    return (
        <div className="piece-selection-container">
            {piece_components}
        </div>
    )
}

export default PieceSelection