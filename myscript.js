gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

playCounter = 1;

function checkWinner() {
  if (
    gameBoard[0][0] !== "" &&
    gameBoard[0][0] === gameBoard[0][1] &&
    gameBoard[0][1] === gameBoard[0][2]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  } else if (
    gameBoard[0][0] !== "" &&
    gameBoard[0][0] === gameBoard[1][0] &&
    gameBoard[1][0] === gameBoard[2][0]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  } else if (
    gameBoard[2][0] !== "" &&
    gameBoard[2][0] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[2][2]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  } else if (
    gameBoard[0][2] !== "" &&
    gameBoard[0][2] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[2][2]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  } else if (
    gameBoard[0][0] !== "" &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  } else if (
    gameBoard[2][0] !== "" &&
    gameBoard[2][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[0][2]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  } else if (
    gameBoard[0][1] !== "" &&
    gameBoard[0][1] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][1]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  } else if (
    gameBoard[1][0] !== "" &&
    gameBoard[1][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[1][2]
  ) {
    if (playCounter % 2 === 0) {
      announceFirstWinner();
    } else {
      announceSecondWinner();
    }
  }
}

function draw() {
  deleteBoard = document.getElementById("board");
  deleteBoard.remove();
  var documentSelector = document.body.querySelector("#document");
  board = document.createElement("div");
  board.id = "board";
  documentSelector.appendChild(board);
  var boardSelector = document.body.querySelector("#board");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cell = document.createElement("div");
      cell.className = "cell";
      cell.id = "cell" + i + j;
      cell.innerHTML = gameBoard[i][j];
      boardSelector.appendChild(cell);
    }
  }
}

function listener() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cellListener = document.getElementById("cell" + i + j);
      cellListener.addEventListener("click", function () {
        if (playCounter % 2 !== 0 && gameBoard[i][j] === "") {
          gameBoard[i][j] = "x";
          playCounter++;
          draw();
          listener();
          checkWinner();
        } else if ((playCounter % 2 === 0) & (gameBoard[i][j] === "")) {
          gameBoard[i][j] = "o";
          playCounter++;
          draw();
          listener();
          checkWinner();
        }
      });
    }
  }
}

function announceFirstWinner() {
  winnerSelector = document.body.querySelector("#winner");
  winner = document.createElement("h1");
  newGamebutton = document.createElement("button");
  newGamebutton.className = "btn";
  winner.innerHTML = "X Won!";
  winnerSelector.appendChild(winner);
  newGamebutton.innerHTML = "New Game";
  winnerSelector.appendChild(newGamebutton);
  newGamebutton.addEventListener("click", function () {
    window.location.reload();
  });
}

function announceSecondWinner() {
  winnerSelector = document.body.querySelector("#winner");
  winner = document.createElement("h1");
  newGamebutton = document.createElement("button");
  newGamebutton.className = "btn";
  winner.innerHTML = "O Won!";
  winnerSelector.appendChild(winner);
  newGamebutton.innerHTML = "New Game";
  winnerSelector.appendChild(newGamebutton);
  newGamebutton.addEventListener("click", function () {
    window.location.reload();
  });
}

draw();
listener();
