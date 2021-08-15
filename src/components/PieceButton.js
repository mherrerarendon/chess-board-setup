import React from 'react'

const PieceButton = ({ piece_char }) => {
    return (
        <>
            <input id="piece_button" type="radio" />
            <label class="piece_button_class" for="piece_button">{piece_char}</label>
        </>
    )
}

export default PieceButton
