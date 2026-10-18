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
    return prompt("Enter rock, paper or scissors, all lowercase no space: ")
}

console.log(getHumanChoice())