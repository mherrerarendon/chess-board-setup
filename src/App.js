import { useState } from 'react'
import './App.scss';
import Board from './components/Board';
import PieceSelection from './components/PieceSelection';
import ToggleSwitch from './components/lib/ToggleSwitch/ToggleSwitch'

function App() {
  import('fen').then(module => {
    console.log(module)
  })
  const [selected_piece, set_piece] = useState("")

  const initial_board_values = Array(64).fill(" ");
  const [board_state, set_board_state] = useState(initial_board_values)

  const [white_to_start, set_white_to_start] = useState(true)
  const [castling_rights, set_castling_rights] = useState(Array(4).fill(true))

  const handleChange = (e) => {
    set_piece(e.target.value)
  }
  
  const add_piece = (square_id) => {
    const piece_char = selected_piece === "_" ? " " : selected_piece;
    var temp_state = board_state.slice()
    temp_state[square_id] = piece_char
    set_board_state(temp_state)
  }

  // const [checked, setChecked] = useState(true);
  const on_toggle_castle_rights = (castle_id, checked) => {
    var temp_state = castling_rights.slice()
    temp_state[castle_id] = checked
    set_castling_rights(temp_state)
  }

  async function load_fen() {
    return import('fen')
  }

  const on_get_fen = () => {
    const editor = {
      white_to_start: true,
      white_king_side_castle: true,
      white_queen_side_castle: true,
      black_king_side_castle: true,
      black_queen_side_castle: true,
      squares: Array(64).fill(' ')
    }
    import('fen').then(fen => {
      let fen_str = fen.get_fen_wasm(JSON.stringify(editor))
      console.log(fen_str)
    })
  }

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
          <ToggleSwitch id="starting-color" checked={white_to_start} onChange={checked => set_white_to_start(checked)} />
          <label htmlFor="starting-color">White to start</label>
        </div>
        <div className="castling-rights-container">
          <h2>White Castling Rights</h2>
          <div>
            <ToggleSwitch id="white-king-castle-rights" checked={white_to_start} onChange={checked => set_white_to_start(checked)} />
            <label htmlFor="white-king-castle-rights">King side</label>
          </div>
          <br />
          <div>
            <ToggleSwitch id="white-queen-castle-rights" checked={white_to_start} onChange={checked => set_white_to_start(checked)} />
            <label htmlFor="white-queen-castle-rights">Queen side</label>
          </div>
        </div>
        <div className="castling-rights-container">
          <h2>Black Castling Rights</h2>
          <div>
            <ToggleSwitch id="black-king-castle-rights" checked={white_to_start} onChange={checked => set_white_to_start(checked)} />
            <label htmlFor="black-king-castle-rights">King side</label>
          </div>
          <br />
          <div>
            <ToggleSwitch id="white-queen-castle-rights" checked={white_to_start} onChange={checked => set_white_to_start(checked)} />
            <label htmlFor="white-king-queen-rights">Queen side</label>
          </div>
        </div>
        <button onClick={on_get_fen}>test</button>
      </div>
      <div className="fen-container">

      </div>
    </div>
  );
}

export default App;
