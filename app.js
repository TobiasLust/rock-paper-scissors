const HANDS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return HANDS[Math.floor(Math.random() * HANDS.length)];
}

function getPlayerSelection() {
  let select;
  do {
    select = prompt("Choice rock,paper,scissors").trim().toLowerCase();
  } while (!HANDS.includes(select));
  return select;
}

function displayRoundResult(result, playerSelection, computerSelection) {
  if (result === "win") {
    console.log(`¡Win! ${playerSelection} beats ${computerSelection}`);
  } else if (result === "lose") {
    console.log(`¡Lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log("Tie");
  }
}

function playRound() {
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();

  if (
    (playerSelection === HANDS[0] && computerSelection === HANDS[2]) ||
    (playerSelection === HANDS[1] && computerSelection === HANDS[0]) ||
    (playerSelection === HANDS[2] && computerSelection === HANDS[1])
  ) {
    displayRoundResult("win", playerSelection, computerSelection);
    return "win";
  } else if (playerSelection === computerSelection) {
    displayRoundResult("tie");
    return "tie";
  } else {
    displayRoundResult("lose", playerSelection, computerSelection);
    return "lose";
  }
}

function game() {
  let playerScore = 0;
  let cpuScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`ROUND: ${round}`);
    const result = playRound();

    if (result === "win") {
      playerScore++;
    } else if (result === "lose") {
      cpuScore++;
    } else {
      round--;
    }

    console.log(`PLAYER: ${playerScore} CPU: ${cpuScore} `);
  }

  console.log("Finish game! Result:");
  console.log(`PLAYER: ${playerScore} CPU: ${cpuScore}`);
}

game();
