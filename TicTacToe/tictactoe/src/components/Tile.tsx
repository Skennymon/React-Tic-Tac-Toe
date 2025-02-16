function Tile({ value, index, setTiles, tiles, player, setPlayer, setHasWin }) {

    return (
        <button className='flex p-7 border-2 rounded-2xl bg-gray-100 w-10 h-10 justify-center items-center' onClick={() => {
            const updatedTiles = [...tiles];

            if(player === "player1" && updatedTiles[index] === "") {
                updatedTiles[index] = 'X'
                setPlayer("player2")
                
            }
            else if(player === "player2" && updatedTiles[index] === "") {
                updatedTiles[index] = 'O'
                setPlayer("player1")
            }

            setTiles(updatedTiles)

        }}>{value}</button>
    )


}



export default Tile