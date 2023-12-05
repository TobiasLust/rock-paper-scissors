// Selección de elementos del DOM
const btnPlayer = document.querySelectorAll("#playerSelection button");
const btnCpu = document.querySelector("#cpuBtn");
const round = document.querySelector("#round span");
const divScore = document.querySelector("#score");
const detailRound = document.querySelector("#detailRound");
const playerScore = document.querySelector("#playerScore span");
const cpuScore = document.querySelector("#cpuScore span");

// Asignación de eventos a los botones del jugador
btnPlayer.forEach((btn) => btn.addEventListener("click", startGame));

// Función para comenzar el juego
function startGame(e) {
  const playerChoice = e.target.textContent;
  const computerChoice = getComputerSelection();
  btnCpu.textContent = computerChoice;
  playRound(playerChoice, computerChoice);
}

// Función para obtener la selección aleatoria de la computadora
function getComputerSelection() {
  const HANDS = ["rock", "paper", "scissors"];
  return HANDS[Math.floor(Math.random() * HANDS.length)];
}

// Función principal para jugar una ronda
function playRound(playerChoice, computerChoice) {
  if (isWin(playerChoice, computerChoice)) {
    displayRoundResult("win", playerChoice, computerChoice);
    playerScore.textContent++;
  } else if (playerChoice === computerChoice) {
    displayRoundResult("tie");
  } else {
    displayRoundResult("lose", playerChoice, computerChoice);
    cpuScore.textContent++;
  }
  round.textContent++;
  endGame(playerScore, cpuScore);
}

// Función para verificar si el jugador gana la ronda
function isWin(playerChoice, computerChoice) {
  return (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  );
}

// Función para mostrar el resultado de la ronda
function displayRoundResult(result, playerSelection, computerSelection) {
  switch (result) {
    case "win":
      detailRound.textContent = `¡Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case "lose":
      detailRound.textContent = `¡Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      detailRound.textContent = "Tie";
  }
}

// Función para manejar el final del juego
function endGame(playerScore, cpuScore) {
  if (playerScore.textContent == 5 || cpuScore.textContent == 5) {
    const resultMessage =
      playerScore.textContent == 5 ? "You win the game!" : "You lose the game!";
    detailRound.textContent = resultMessage;
    btnPlayer.forEach((btn) => (btn.disabled = true));
    restartBtn();
  }
}

// Función para reiniciar el juego
function restartGame() {
  playerScore.textContent = "0";
  cpuScore.textContent = "0";
  round.textContent = "0";
  detailRound.textContent = "";
  btnCpu.textContent = "?";
  btnPlayer.forEach((btn) => (btn.disabled = false));
  const btnRestart = document.querySelector("#restartBtn");
  if (btnRestart) {
    btnRestart.remove();
  }
}

// Función para agregar el botón de reinicio
function restartBtn() {
  const btnRestart = document.createElement("button");
  btnRestart.id = "restartBtn";
  btnRestart.textContent = "Restart";
  btnRestart.addEventListener("click", () => restartGame());
  divScore.appendChild(btnRestart);
}
