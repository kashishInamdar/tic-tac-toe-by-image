
import './App.css';
import X from "./x.png"
import O from "./o.png"
import { useState } from 'react';

// <img src={O} alt="xo-image" className='X-O-img'/>
// <img src={X} alt="xo-image" className='X-O-img' />

function App() {
  const [player, setPlayer] = useState(2);
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  })

  const play = (boxNo) => {
    if(board[boxNo] !== ""){
      return ;
    }
    if(player === 1){
      setBoard({...board, [boxNo]: <img src={X} alt="xo" className='X-O-img' />} )
    }
    else{
      setBoard({...board, [boxNo]: <img src={O} alt="xo" className='X-O-img' />} )
    }
    setPlayer(player === 1 ? 2 : 1)

  }


  return (
    <>
      <div className='t-t-t-container'>

        <p className='current-player'>Current Player {player === 1 ? " 1: x" : "2 : O"}</p>
        <div className='box-row-container'>
          <div className='box-row'>
            <div className='box b-1' onClick={() => { play(1) }}>
              {board[1]}
            </div>
            <div className='box b-2' onClick={() => { play(2) }} >
              {board[2]}
            </div>
            <div className='box b-3' onClick={() => { play(3) }}>
              {board[3]}
            </div>
          </div>

          <div className='box-row'>
            <div className='box b-4' onClick={() => { play(4) }} >
              {board[4]}
            </div>
            <div className='box b-5' onClick={() => { play(5) }}>
              {board[5]}
            </div>
            <div className='box b-6' onClick={() => { play(6) }}>
              {board[6]}
            </div>
          </div>

          <div className='box-row'>
            <div className='box b-7' onClick={() => { play(7) }}>
              {board[7]}
            </div>
            <div className='box b-8' onClick={() => { play(8) }}>
              {board[8]}
            </div>
            <div className='box b-9' onClick={() => { play(9) }}>
              {board[9]}
            </div>
          </div>

        </div>
        <div className='players-container'>
          <p className='player'> <img src={X} alt="xo" className='X-O-player' /> :  Player 1  </p>

          <p className='player'> <img src={O} alt="xo" className='X-O-player' /> : Player 2 </p>
        </div>

      </div>
    </>
  );
}

export default App;
