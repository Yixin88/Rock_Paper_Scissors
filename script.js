function computerPlay() {
    let computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 1) {
        return 'Rock';
    } else if (computer === 2) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    let choice = playerSelection.toLowerCase();
    let pcChoice = computerSelection.toLowerCase();
    if (choice === pcChoice) {
        return `It's a DRAW, you picked ${playerSelection} and computer picked ${computerSelection}`;
    } else if (choice === 'rock' && pcChoice === 'paper') {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (choice === 'rock' && pcChoice === 'scissors') {
        score += 1;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    } else if (choice === 'paper' && pcChoice === 'rock') {
        score += 1;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    } else if (choice === 'paper' && pcChoice === 'scissors') {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (choice === 'scissors' && pcChoice === 'paper') {
        score += 1;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    } else if (choice === 'scissors' && pcChoice === 'rock') {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else return `error has occured`
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter rock, paper or scissors");
        const computerSelection = computerPlay();
        console.log (`${playRound(playerSelection, computerSelection)} Score is now You: ${score} and Computer: ${computerScore}`)
    }
    if (score > computerScore) {
        console.log (`You win the best out of 5, score is ${score} vs ${computerScore}`);
    } else {
        console.log (`You lose the best out of 5, score is ${score} vs ${computerScore}`);
    }
}

let score = 0;
let computerScore = 0;
console.log(game());

