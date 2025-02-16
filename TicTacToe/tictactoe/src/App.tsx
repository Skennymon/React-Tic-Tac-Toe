import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/Board'

function App() {

  const[tiles, setTiles] = useState(['','','','','','','','','']);
  const[player, setPlayer] = useState("player1");
  const[hasWin, setHasWin] = useState(false);
  
  const checkWin = () => { // ugly but it works
        
    if(tiles[0] === tiles[3] && tiles[0] === tiles[6] && (tiles[0] != '' && tiles[3] != '' && tiles[6] != '')) {
        return true;
    }
    else if(tiles[1] === tiles[4] && tiles[1] === tiles[7] && (tiles[1] != '' && tiles[4] != '' && tiles[7] != '')) {
        return true;
    }
    else if(tiles[2] === tiles[5] && tiles[2] === tiles[8] && (tiles[2] != '' && tiles[5] != '' && tiles[8] != '')) {
        return true;
    }
    else if(tiles[0] === tiles[1] && tiles[0] === tiles[2] && (tiles[0] != '' && tiles[1] != '' && tiles[2] != '')) {
        return true;
    }
    else if(tiles[3] === tiles[4] && tiles[3] === tiles[5] && (tiles[3] != '' && tiles[4] != '' && tiles[5] != '')) {
        return true;
    }
    else if(tiles[6] === tiles[7] && tiles[6] === tiles[8] && (tiles[6] != '' && tiles[7] != '' && tiles[8] != '')) {
        return true;
    }
    else if(tiles[0] === tiles[4] && tiles[0] === tiles[8] && (tiles[0] != '' && tiles[4] != '' && tiles[8] != '')) {
        return true;
    }
    else if(tiles[2] === tiles[4] && tiles[2] === tiles[6] && tiles[2] != '' && tiles[4] != '' && tiles[6] != '') {
        return true;
    }
    
    return false;
 }

  useEffect(() => {
    if(checkWin()) {
      setHasWin(true)
      if(player === "player1") {
        setPlayer("player2");
      }
      else {
        setPlayer("player1")
      }
    }
  }, [tiles])

  return (
    <>
      <div className="flex flex-col items-center justify-center align-middle gap-7 h-screen">
        <p>TIC TAC TOE</p>
        {hasWin && <h1>{player} has won</h1>}
        <Board tiles={tiles} setTiles={setTiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
        <button onClick={() => {setTiles(['','','','','','','','','']) 
          setHasWin(false)
          setPlayer("player1")
          }}>Reset</button>
      </div>  
      
    </>
  )
}




export default App
