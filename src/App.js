import { useState } from 'react'
import './App.scss';
import Board from './components/Board';
import PieceSelection from './components/PieceSelection';
import ToggleSwitch from './components/lib/ToggleSwitch/ToggleSwitch'
// import Toggle from './components/Toggle';

function App() {
  const [selected_piece, set_piece] = useState("")

  const initial_board_values = Array(64).fill(" ");
  const [board_state, set_board_state] = useState(initial_board_values)

  const handleChange = (e) => {
    set_piece(e.target.value)
  }
  
  const add_piece = (square_id) => {
    const piece_char = selected_piece === "_" ? " " : selected_piece;
    var temp_state = board_state.slice()
    temp_state[square_id] = piece_char
    set_board_state(temp_state)
  }

  const [checked, setChecked] = useState(true);

  return (
    <div className="App">
      <div className="main-container">
        <Board
          board_state={board_state}
          add_piece={add_piece}
        />
        <PieceSelection 
          selected_piece={selected_piece}
          handleChange={handleChange}
        />
      </div>
      <div className="options-container">
        <div>
          <ToggleSwitch id="starting-color" checked={checked} onChange={checked => setChecked(checked)} />
          <label htmlFor="starting-color">White to start</label>
        </div>
        <div className="castling-rights-container">
          <h1>White Castling Rights</h1>
          <div>
            <ToggleSwitch id="white-king-castle-rights" checked={checked} onChange={checked => setChecked(checked)} />
            <label htmlFor="white-king-castle-rights">King side</label>
          </div>
          <div>
            <ToggleSwitch id="white-queen-castle-rights" checked={checked} onChange={checked => setChecked(checked)} />
            <label htmlFor="white-queen-castle-rights">Queen side</label>
          </div>
        </div>
        <div className="castling-rights-container">
          <h1>Black Castling Rights</h1>
          <div>
            <ToggleSwitch id="black-king-castle-rights" checked={checked} onChange={checked => setChecked(checked)} />
            <label htmlFor="black-king-castle-rights">King side</label>
          </div>
          <div>
            <ToggleSwitch id="white-queen-castle-rights" checked={checked} onChange={checked => setChecked(checked)} />
            <label htmlFor="white-king-queen-rights">Queen side</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
