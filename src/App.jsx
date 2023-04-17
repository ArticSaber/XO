import { useState } from "react";
import "./App.css";

function Tile({ value, onTileClick, onstyle }) {
  return (
    <>
      <button style={{ onstyle }} onClick={onTileClick}>
        {value}
      </button>
    </>
  );
}

function App() {
  // const [xCount, setxCount] = useState(0);
  // const [oCount, setoCount] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [Tiles, setTiles] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (!winner && !Tiles[i]) {
      const nextTiles = Tiles.slice();
      if (xIsNext) {
        nextTiles[i] = "X";
      } else {
        nextTiles[i] = "O";
      }
      setTiles(nextTiles);
      setXIsNext(!xIsNext);
    }
  }
  function calculateWinner(Tiles) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (Tiles[a] && Tiles[a] === Tiles[b] && Tiles[a] === Tiles[c]) {
        return Tiles[a];
      }
    }
  }
  const winner = calculateWinner(Tiles);

  let status;
  if (winner === "O") {
    status = "Winner: " + winner;
    // setTiles(null);
  } else if (winner === "X") {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function handlestyle() {
    const box = Tiles.slice();
    if (winner) {
      box.Tiles = { backgroundcolor: "red" };
    }
  }

  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <h2>{status}</h2>
      <div className="count-div">
        {/* <h2>X:{xCount}</h2>
        <h2>O:{oCount}</h2> */}
      </div>
      <div className="box-row">
        <Tile
          value={Tiles[0]}
          onTileClick={() => handleClick(0)}
          onstyle={handlestyle}
        />
        <Tile
          value={Tiles[1]}
          onTileClick={() => handleClick(1)}
          onstyle={handlestyle}
        />
        <Tile
          value={Tiles[2]}
          onTileClick={() => handleClick(2)}
          onstyle={handlestyle}
        />
      </div>
      <div className="box-row">
        <Tile
          value={Tiles[3]}
          onTileClick={() => handleClick(3)}
          onstyle={handlestyle}
        />
        <Tile
          value={Tiles[4]}
          onTileClick={() => handleClick(4)}
          onstyle={handlestyle}
        />
        <Tile
          value={Tiles[5]}
          onTileClick={() => handleClick(5)}
          onstyle={handlestyle}
        />
      </div>
      <div className="box-row">
        <Tile
          value={Tiles[6]}
          onTileClick={() => handleClick(6)}
          onstyle={handlestyle}
        />
        <Tile
          value={Tiles[7]}
          onTileClick={() => handleClick(7)}
          onstyle={handlestyle}
        />
        <Tile
          value={Tiles[8]}
          onTileClick={() => handleClick(8)}
          onstyle={handlestyle}
        />
      </div>
    </div>
  );
}

export default App;
