import React from 'react'
import PieceButton from './PieceButton'

const PieceSelection = ({ white, selected_piece, onToggleColor, onPieceSelected }) => {
    return (
        <div className="piece-selector">
            <button type="button" onClick={onToggleColor}>Toggle Color</button >
            <PieceButton piece_id={0} white={white} onPieceSelected={onPieceSelected} selected_piece={selected_piece}/>
            <PieceButton piece_id={1} white={white} onPieceSelected={onPieceSelected} selected_piece={selected_piece}/>
            <PieceButton piece_id={2} white={white} onPieceSelected={onPieceSelected} selected_piece={selected_piece}/>
            <PieceButton piece_id={3} white={white} onPieceSelected={onPieceSelected} selected_piece={selected_piece}/>
            <PieceButton piece_id={4} white={white} onPieceSelected={onPieceSelected} selected_piece={selected_piece}/>
            <PieceButton piece_id={5} white={white} onPieceSelected={onPieceSelected} selected_piece={selected_piece}/>
        </div>
    )
}

export default PieceSelection