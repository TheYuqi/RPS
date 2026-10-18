function getComputerChoice() {
    random = Math.random() * 3;

    if (random <= 1) {
        return "rock";
    }
    else if (random <= 2) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("Enter rock, paper or scissors");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        humanScore += 0.5;
        computerScore += 0.5;
        console.log("Tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log(`You win! Since ${humanChoice} beats ${computerChoice}!`);
    }
    else {
        computerScore += 1;
        console.log(`You lose. Since ${humanChoice} loses to ${computerChoice}.`);
    }

    console.log(`Your score: ${humanScore}
        Their Score: ${computerScore}`)
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === computerScore) {
        console.log("You guys drew!")
    }
    else if (humanScore > computerScore) {
        console.log("You won!")
    }
    else {
        console.log("You Lost...")
    }
}

humanScore = 0;
computerScore = 0;

playGame();