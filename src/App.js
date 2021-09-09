import { useState } from 'react'
import './App.css';
import Board from './components/Board';
import PieceSelection from './components/PieceSelection';

function App() {
  const [selected_piece, set_piece] = useState("")

  const initial_board_values = Array(64).fill(" ");
  const [board_state, set_board_state] = useState(initial_board_values)

  const handleChange = (e) => {
    console.log('selected ', e.target.value)
    set_piece(e.target.value)
  }
  
  const add_piece = (square_id) => {
    console.log('Adding {piece} to {square_id}')
    var temp_state = board_state.slice()
    temp_state[square_id] = selected_piece
    set_board_state(temp_state)
    // set_board_state([board_state, board_state[square_id] = selected_piece])
  }

  return (
    <div className="App">
      <Board
        board_state={board_state}
        add_piece={add_piece}
      />
      <PieceSelection 
        selected_piece={selected_piece}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
