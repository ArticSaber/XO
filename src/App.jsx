import { useState } from "react";
import "./App.css";

function Tile({ value, onTileClick, winner, index }) {
  return (
    <>
      <button
        className={`${winner?.includes(index) ? "test" : null}`}
        onClick={onTileClick}
      >
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
        return [a, b, c];
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
          index={0}
          value={Tiles[0]}
          onTileClick={() => handleClick(0)}
          {...{ winner }}
        />
        <Tile
          index={1}
          value={Tiles[1]}
          onTileClick={() => handleClick(1)}
          {...{ winner }}
        />
        <Tile
          index={2}
          value={Tiles[2]}
          onTileClick={() => handleClick(2)}
          {...{ winner }}
        />
      </div>
      <div className="box-row">
        <Tile
          index={3}
          value={Tiles[3]}
          onTileClick={() => handleClick(3)}
          {...{ winner }}
        />
        <Tile
          index={4}
          value={Tiles[4]}
          onTileClick={() => handleClick(4)}
          {...{ winner }}
        />
        <Tile
          index={5}
          value={Tiles[5]}
          onTileClick={() => handleClick(5)}
          {...{ winner }}
        />
      </div>
      <div className="box-row">
        <Tile
          index={6}
          value={Tiles[6]}
          onTileClick={() => handleClick(6)}
          {...{ winner }}
        />
        <Tile
          index={7}
          value={Tiles[7]}
          onTileClick={() => handleClick(7)}
          {...{ winner }}
        />
        <Tile
          index={8}
          value={Tiles[8]}
          onTileClick={() => handleClick(8)}
          {...{ winner }}
        />
      </div>
    </div>
  );
}

export default App;
