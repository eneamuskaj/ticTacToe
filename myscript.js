gameBoard = ["", "", "", "", "", "", "", "", ""];

playCounter = 1;

function checkWinner() {
  possibleWinnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < 8; i++) {
    possibleWin = possibleWinnings[i];
    let a = gameBoard[possibleWin[0]];
    let b = gameBoard[possibleWin[1]];
    let c = gameBoard[possibleWin[2]];
    if (a !== "" && a === b && b === c) {
      announcWinner();
    }
  }
}

function drawTable() {
  deleteBoard = document.getElementById("board");
  deleteBoard.remove();
  var documentSelector = document.body.querySelector("#document");
  board = document.createElement("div");
  board.id = "board";
  documentSelector.appendChild(board);
  var boardSelector = document.body.querySelector("#board");
  for (let i = 0; i < 9; i++) {
    cell = document.createElement("div");
    cell.className = "cell";
    cell.id = "cell" + i;
    cell.innerHTML = gameBoard[i];
    boardSelector.appendChild(cell);
    cellListener = document.getElementById("cell" + i);
    cellListener.addEventListener("click", function () {
      if (playCounter % 2 !== 0 && gameBoard[i] === "") {
        gameBoard[i] = "x";
        playCounter++;
        drawTable();
        checkWinner();
      } else if ((playCounter % 2 === 0) & (gameBoard[i] === "")) {
        gameBoard[i] = "o";
        playCounter++;
        drawTable();
        checkWinner();
      }
    });
  }
}

function announcWinner() {
  winnerSelector = document.body.querySelector("#winner");
  winner = document.createElement("h1");
  if (playCounter % 2 === 0) {
    winner.innerHTML = "X Won!";
  } else {
    winner.innerHTML = "O Won!";
  }
  winnerSelector.appendChild(winner);
}

document.getElementById("btn").addEventListener("click", function () {
  window.location.reload();
});

drawTable();
