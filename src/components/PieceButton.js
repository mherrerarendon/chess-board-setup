import React from 'react'

const PieceButton = ({ piece_id, white, onPieceSelected, selected_piece }) => {
    const pieces = "♙♖♘♗♕♔♟♜♞♝♛♚";
    const color_offset = white ? 0 : 6;
    const piece_char = pieces[piece_id + color_offset];
    return (
        <>
            <input
                id="piece_button"
                type="radio" 
                name="piece" 
                value={piece_id.toString()}
                checked={selected_piece === piece_id}
                onClick={() => onPieceSelected(piece_id)} />
            <label className="piece_button_class" htmlFor="piece_button">{piece_char}</label>
        </>
    )
}

export default PieceButton