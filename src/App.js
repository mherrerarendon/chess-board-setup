import { useState } from 'react'
import './App.css';
import Board from './components/Board';
import PieceSelection from './components/PieceSelection';

function App() {
  const [white, set_white] = useState(true)

  const toggleColor = () => {
    console.log('toggling color')
    set_white(!white)
  }
  return (
    <div className="App">
      <Board />
      <PieceSelection white={white} onToggleColor={toggleColor} />
    </div>
  );
}

export default App;
