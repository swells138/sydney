import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === null && winner === null) {
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
      setWinner(calculateWinner(newBoard));
    }
  };

  const resetGame = () => {
    window.location.reload();
  };

  const renderCell = (index) => {
    const style = {
      width: "120px",
      height: "120px",
      fontSize: "80px",
      border: "2px solid #333",
      boxSizing: "border-box",
      margin: "5px",
    };

    return (
      <div className="cell" style={style} onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  const calculateWinner = (currentBoard) => {
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
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const renderStatus = () => {
    const isBoardFull = board.every((cell) => cell !== null);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (!winner && isBoardFull) {
      alert("Loser");
    } else {
      return `Current player: ${player}`;
    }
  };

  return (
    <React.Fragment>
      <div className="containerb">
        <div className="status">{renderStatus()}</div>
        <div className="board">
          <div className="row">
            {renderCell(0)}
            {renderCell(1)}
            {renderCell(2)}
          </div>
          <div className="row">
            {renderCell(3)}
            {renderCell(4)}
            {renderCell(5)}
          </div>
          <div className="row">
            {renderCell(6)}
            {renderCell(7)}
            {renderCell(8)}
          </div>
        </div>
        <div className="reset-button-container">
          <button className="reset-button" onClick={() => resetGame()}>
            Reset
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TicTacToe;
