import { useState } from 'react'
import './App.css';
import Board from './components/Board';
import PieceSelection from './components/PieceSelection';

function App() {
  const [white, set_white] = useState(true)
  const [selected_piece, set_piece] = useState(0)

  const toggleColor = () => {
    console.log('toggling color')
    set_white(!white)
  }

  const onPieceSelected = (piece_id) => {
    console.log('selected ', piece_id)
    set_piece(piece_id)
  }
  return (
    <div className="App">
      <Board />
      <PieceSelection 
        white={white} 
        selected_piece={selected_piece}
        onToggleColor={toggleColor} 
        onPieceSelected={onPieceSelected}
      />
    </div>
  );
}

export default App;
