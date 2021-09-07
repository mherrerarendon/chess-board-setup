import { useState } from 'react'
import './App.css';
import Board from './components/Board';
import PieceSelection from './components/PieceSelection';

function App() {
  const [selected_piece, set_piece] = useState("")

  const handleChange = (e) => {
    console.log('selected ', e.target.value)
    set_piece(e.target.value)
  }

  return (
    <div className="App">
      <Board />
      <PieceSelection 
        selected_piece={selected_piece}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
