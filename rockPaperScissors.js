let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score')
const result = document.querySelector('#result');




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = computerPlay();
        if (playerScore >= 5 || computerScore >= 5) {
            if (playerScore == computerScore) {
                alert("TIED");
                return;
            } else if (playerScore > computerScore) {
                alert("VICTORY")
                return;
            } else {
                alert("DEFEATED")
                return;
            }
        }

        playRound(button.textContent.toLowerCase(), computerSelection);
        if (result.textContent.search("win") != -1) {
            playerScore++;
        } else if (result.textContent.search("lose") != -1) {
            computerScore++;
        }

        player.textContent = `Player score: ${playerScore}`;
        computer.textContent = `Computer score: ${computerScore}`;



    });
});

function addResult(result) {
    const div = document.querySelector('#result');
    div.textContent = result;

}

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelecion, computerSelection) {

    switch (playerSelecion) {
        case "rock":

            if (computerSelection == "rock") {
                addResult("It's a tie");
            } else if (computerSelection = "paper") {
                addResult("You lose! Paper beats Rock");
            } else {
                console.log("You win! Rock beats Scissors");
            }
            break
        case "scissors":

            if (computerSelection == "scissors") {
                addResult("It's a tie");
            } else if (computerSelection = "paper") {
                addResult("You win! Scissors beats Paper");
            } else {
                addrResult("You lose! Rock beats Scissors");
            }
            break;
        case "paper":

            if (computerSelection == "paper") {
                addResult("It's a tie");
            } else if (computerSelection = "rock") {
                addResult("You win! Paper beats Rock");
            } else {
                addResult("You lose! Scissors beats Paper");
            }
            break;

    }

}
