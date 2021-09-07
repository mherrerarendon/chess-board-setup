import React from 'react'

const PieceButton = ({ piece_id, handleChange, selected_id }) => {
    return (
        <>
            <input
                type="radio" 
                id={piece_id}
                name="piece" 
                onChange={handleChange} 
                value={piece_id}
                checked={selected_id === piece_id}
            />
            <label htmlFor={piece_id}>{piece_id}</label>
            <br />
        </>
    )
}

export default PieceButton