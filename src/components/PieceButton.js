import React from 'react'

const PieceButton = ({ piece_char }) => {
    return (
        <div>
            <input id="piece_button" type="radio" />
            <label class="piece_button_class" for="piece_button">{piece_char}</label>
        </div>
    )
}

export default PieceButton
