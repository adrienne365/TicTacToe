
const winningArray = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const cellElements = document.querySelectorAll(".cell");
const boardElement = document.getElementById("board");
const rematchButtonElement = document.getElementById("rematchButton");
let currentPlayer = "X";

let gameState = [null, null, null, null, null, null, null, null, null];
let gameActive = true;

function startPlay() {   
  cellElements.forEach(cell => cell.addEventListener("click", clickHandler));
      }
      const gameStatus = document.getElementById("gameStatus");
      

  function clickHandler(event) {
    const cell = event.target
    if ((gameActive) && (cell.innerText === "")){
      if (currentPlayer === "X") {
          cell.innerText = "X";
          gameState[cell.id] = "X";
          gameStatus.innerText = "Game Status: Active!";
          winCheck()
          currentPlayer = "O"
      } else if (currentPlayer === "O") {
          cell.innerText = "O";
          gameState[cell.id] = "O";
          winCheck()
          currentPlayer = "X"
      } 
    } 
  }

  function winCheck (){
    let youWin = false; 
    for (let i=0; i < winningArray.length; i++) { 
      const board = winningArray[i];
      const cellA = gameState[board[0]];
      const cellB = gameState[board[1]];
      const cellC = gameState[board[2]];
    if ((cellA === null) || (cellB === null) || (cellC === null)) {  
    } else if((cellA === cellB) && (cellB === cellC)) {
        youWin = true;
    if (youWin) {
      gameStatus.innerText = "Game Status: You Win!!!";
      gameActive = false; 
    } 
    } if (!gameState.includes(null) && (!youWin)){ 
      gameStatus.innerText = "Game Status: Draw"
      gameActive = false;
     } 
    }
    } 

  rematchButtonElement.addEventListener("click", clearBoard);
    
  function clearBoard() {
    cellElements.forEach(cell => cell.innerText = null);
    gameStatus.innerText = "Let's Play!"
    gameActive = true;
    gameState = [null, null, null, null, null, null, null, null, null];
  }

  startPlay()