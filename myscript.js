const Game = () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];

  playCounter = 1;

  const checkWinner = () => {
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
        document
          .getElementById("cell" + possibleWin[0])
          .classList.add("winner");
        document
          .getElementById("cell" + possibleWin[1])
          .classList.add("winner");
        document
          .getElementById("cell" + possibleWin[2])
          .classList.add("winner");
        announceWinner();
      }
    }
  };

  const drawTable1 = () => {
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

      cellListener.addEventListener("mouseenter", function () {
        document.getElementById("cell" + i).classList.add("hovered");
      });
      cellListener.addEventListener("mouseout", function () {
        document.getElementById("cell" + i).classList.remove("hovered");
      });

      cellListener.addEventListener("click", function () {
        if (gameBoard[i] === "") {
          gameBoard[i] = "x";
          playCounter++;
          function generator() {
            randomGenerator = Math.floor(Math.random() * Math.floor(8));
            return randomGenerator;
          }

          do {
            generator();
          } while (gameBoard[randomGenerator] !== "" && playCounter < 6);
          gameBoard[randomGenerator] = "o";
          drawTable1();
          checkWinner();
        }
      });
    }
  };

  const drawTable2 = () => {
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

      cellListener.addEventListener("mouseenter", function () {
        document.getElementById("cell" + i).classList.add("hovered");
      });
      cellListener.addEventListener("mouseout", function () {
        document.getElementById("cell" + i).classList.remove("hovered");
      });

      cellListener.addEventListener("click", function () {
        if (playCounter % 2 !== 0 && gameBoard[i] === "") {
          gameBoard[i] = "x";
          playCounter++;
          drawTable2();
          checkWinner();
        } else if ((playCounter % 2 === 0) & (gameBoard[i] === "")) {
          gameBoard[i] = "o";
          playCounter++;
          drawTable2();
          checkWinner();
        }
      });
    }
  };

  const announceWinner = () => {
    winnerSelector = document.body.querySelector("#winner");
    winner = document.createElement("h1");
    if (playCounter % 2 === 0) {
      winner.innerHTML = "X Won!";
    } else {
      winner.innerHTML = "O Won!";
    }
    winnerSelector.appendChild(winner);
  };

  document.getElementById("btn").addEventListener("click", function () {
    window.location.reload();
  });

  return { drawTable1, drawTable2 };
};

document.getElementById("btn1").addEventListener("click", function () {
  newGame = Game();
  newGame.drawTable1();
});

document.getElementById("btn2").addEventListener("click", function () {
  newGame = Game();
  newGame.drawTable2();
});
