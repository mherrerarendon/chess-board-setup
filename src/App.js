import { useState } from 'react'
import './App.scss';
import Board from './components/Board';
import PieceSelection from './components/PieceSelection';
import ToggleSwitch from './components/lib/ToggleSwitch/ToggleSwitch'

function App() {
  const [selected_piece, set_piece] = useState("")

  const initial_board_values = Array(64).fill(" ");
  const [board_state, set_board_state] = useState(initial_board_values)

  const [white_to_start, set_white_to_start] = useState(true)
  const [white_king_castle, set_white_king_castle] = useState(true)
  const [white_queen_castle, set_white_queen_castle] = useState(true)
  const [black_king_castle, set_black_king_castle] = useState(true)
  const [black_queen_castle, set_black_queen_castle] = useState(true)
  const [fen, set_fen] = useState("")

  const add_piece = (square_id) => {
    const piece_char = selected_piece === "_" ? " " : selected_piece;
    var temp_state = board_state.slice()
    temp_state[square_id] = piece_char
    set_board_state(temp_state)
  }

  const on_get_fen = () => {
    const editor = {
      white_to_start: white_to_start,
      white_king_side_castle: white_king_castle,
      white_queen_side_castle: white_queen_castle,
      black_king_side_castle: black_king_castle,
      black_queen_side_castle: black_queen_castle,
      squares: board_state
    }
    import('fen').then(fen => {
      let fen_str = fen.get_fen_wasm(JSON.stringify(editor))
      set_fen(fen_str)
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
          set_piece={set_piece}
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
            <ToggleSwitch id="white-king-castle-rights" checked={white_king_castle} onChange={checked => set_white_king_castle(checked)} />
            <label htmlFor="white-king-castle-rights">King side</label>
          </div>
          <br />
          <div>
            <ToggleSwitch id="white-queen-castle-rights" checked={white_queen_castle} onChange={checked => set_white_queen_castle(checked)} />
            <label htmlFor="white-queen-castle-rights">Queen side</label>
          </div>
        </div>
        <div className="castling-rights-container">
          <h2>Black Castling Rights</h2>
          <div>
            <ToggleSwitch id="black-king-castle-rights" checked={black_king_castle} onChange={checked => set_black_king_castle(checked)} />
            <label htmlFor="black-king-castle-rights">King side</label>
          </div>
          <br />
          <div>
            <ToggleSwitch id="black-queen-castle-rights" checked={black_queen_castle} onChange={checked => set_black_queen_castle(checked)} />
            <label htmlFor="black-queen-castle-rights">Queen side</label>
          </div>
        </div>
        <button onClick={on_get_fen}>Get FEN</button>
      </div>
      <div className="fen-container">
        <p>{fen}</p>
      </div>
    </div>
  );
}

export default App;
