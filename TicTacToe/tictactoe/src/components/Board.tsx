import Tile from "./Tile"

function Board({ tiles, setTiles, player, setPlayer, setHasWin }) {

    return (
        <div className="grid grid-cols-3 gap-7">
            <Tile value={tiles[0]} index={0} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[1]} index={1} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[2]} index={2} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[3]} index={3} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[4]} index={4} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[5]} index={5} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[6]} index={6} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[7]} index={7} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
            <Tile value={tiles[8]} index={8} setTiles={setTiles} tiles={tiles} player={player} setPlayer={setPlayer} setHasWin={setHasWin}/>
        </div>
    )


}

export default Board