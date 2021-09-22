import React from 'react'

const PieceButton = ({ piece_id, set_piece, selected_id }) => {
    return (
        <div className="piece-radio">
            <input
                type="radio" 
                id={piece_id}
                name="piece" 
                onChange={(e) => set_piece(e.target.value)} 
                value={piece_id}
                checked={selected_id === piece_id}
            />
            <label className="piece-label" htmlFor={piece_id}>{piece_id}</label>
        </div>
    )
}

export default PieceButton