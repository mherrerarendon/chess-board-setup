import React from 'react'
import PieceButton from './PieceButton'

const PieceSelection = ({ white, onToggleColor, onPieceSelected }) => {
    return (
        <div class="piece-selector" onChange={onPieceSelected}>
            <button type="button" onClick={onToggleColor}>Toggle Color</button >
            <PieceButton piece_id={0} white={white} />
            <PieceButton piece_id={1} white={white} />
            <PieceButton piece_id={2} white={white} />
            <PieceButton piece_id={3} white={white} />
            <PieceButton piece_id={4} white={white} />
            <PieceButton piece_id={5} white={white} />
        </div>
    )
}

export default PieceSelection