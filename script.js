const rock_button = document.querySelector('#rock');
const paper_button = document.querySelector('#paper');
const scissors_button = document.querySelector('#scissors');
const result = document.querySelector('#result');
const resultChild = document.querySelector('#resultChild');
const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = 'RESET';


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

const p = document.createElement('p');
const currentScore = document.createElement('p');


let score = 0;
let computerScore = 0;
let round = 0;


function playRound(playerSelection, computerSelection) {
    console.log('1', playerSelection, '2', computerSelection);
    let choice = playerSelection.toLowerCase();
    let pcChoice = computerSelection.toLowerCase();
    if (round != 5){
        if (choice === pcChoice) {
            p.textContent = `It's a DRAW, you picked ${playerSelection} and computer picked ${computerSelection}`;
            result.appendChild(p)
            round += 1;
        } else if (choice === 'rock' && pcChoice === 'paper') {
            computerScore += 1;
            p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            result.appendChild(p)
            round += 1;
        } else if (choice === 'rock' && pcChoice === 'scissors') {
            score += 1;
            p.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`;
            result.appendChild(p)
            round += 1;
        } else if (choice === 'paper' && pcChoice === 'rock') {
            score += 1;
            p.textContent =`You WIN! ${playerSelection} beats ${computerSelection}`;
            result.appendChild(p)
            round += 1;
        } else if (choice === 'paper' && pcChoice === 'scissors') {
            computerScore += 1;
            p.textContent =`You Lose! ${computerSelection} beats ${playerSelection}`;
            result.appendChild(p)
            round += 1;
        } else if (choice === 'scissors' && pcChoice === 'paper') {
            score += 1;
            p.textContent = `You WIN! ${playerSelection} beats ${computerSelection}`;
            result.appendChild(p)
            round += 1;
        } else if (choice === 'scissors' && pcChoice === 'rock') {
            computerScore += 1;
            p.textContent =`You Lose! ${computerSelection} beats ${playerSelection}`;
            result.appendChild(p)
            round += 1;
        } else {
            p.textContent = `error has occured`
            result.appendChild(p)
        }
        currentScore.textContent = `Score is now You: ${score} and Computer: ${computerScore}`;
    }

    if (round === 5) {
        // resultChild.removeChild(currentScore);
        if (score > computerScore) {
            currentScore.textContent = `You win the best out of 5, final score is ${score} vs ${computerScore}`;
        } else if (score < computerScore) {
            currentScore.textContent = `You lose the best out of 5, final score is ${score} vs ${computerScore}`;
        } else if (score === computerScore) {
            currentScore.textContent = `It's a DRAW, final score is ${score} vs ${computerScore}`
        }
        resultChild.appendChild(resetButton);

    }  
    resetButton.addEventListener('click', function() {
        round = 0;
        score = 0;
        computerScore = 0;
        p.textContent = '';
        currentScore.textContent = '';
        resetButton.remove();
        
    });
}


function game(){
    resultChild.appendChild(currentScore);

    rock_button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        playRound('rock', computerSelection)
    });
    
    paper_button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        playRound('paper', computerSelection)
    });
    
    scissors_button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        playRound('scissors', computerSelection)
    });
}

game();











