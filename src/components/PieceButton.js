import React from 'react'

const PieceButton = ({ piece_id, white }) => {
    const pieces = "♙♖♘♗♕♔♟♜♞♝♛♚";
    const color_offset = white ? 0 : 6;
    const piece_char = pieces[piece_id + color_offset];
    return (
        <>
            <input id="piece_button" type="radio" name="piece" value={piece_id} />
            <label class="piece_button_class" for="piece_button">{piece_char}</label>
        </>
    )
}

export default PieceButton