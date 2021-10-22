let GAMESTATE = false;

let resultArray = [
    'It\'s a tie!', 
    'You lose! Paper beats rock!', 
    'You win! Rock beats scissors',
    'You win! Paper beats rock',
    'You lose! Scissors beat paper',
    'You lose! Rock beats scissors',
    'You win! Scissors beats paper'
];

let PLAYERSCORE = 0;
let COMPUTERSCORE = 0;

const start = document.querySelector('.start-btn');
const reset = document.querySelector('.reset-btn');
const next = document.querySelector('.next-btn');

start.addEventListener('click', showYourTurn);
next.addEventListener('click', nextRoundOption);
reset.addEventListener('click', resetEverything);

const playerChoice = document.querySelectorAll('.choices')

playerChoice.forEach((e) => {
    e.addEventListener('click', function(e){
        playRound(e);
    })
});

function showYourTurn(){
    const turnIndicator = document.querySelector('.turn-indicator');
    const checkContent = turnIndicator.textContent;
    if (checkContent == '' && GAMESTATE === false){
        turnIndicator.textContent = 'Pick One';
        GAMESTATE = true;
    }
    else alert('Game in progress!'); 
}

function playRound(e){
    const turnIndicator = document.querySelector('.turn-indicator');
    const checkResult = document.querySelector('.result');
    if (turnIndicator.textContent == 'Pick One'){
        turnIndicator.textContent = '';
        displayComputerResult(computerPlay());
        let result = getComputerAnswer();
        let winner = returnWinner(e.target.id, result);
        showWinner(winner);
        updateScore(winner);
    }
    else if (checkResult != '' && GAMESTATE === true){
        alert('Game in progress!');
    } 
    else alert('Hey, You forgot to click start!');

}

function nextRoundOption(){
    if (GAMESTATE === true){
        const result = document.querySelector('.result');
        const results = document.querySelector('.results');
        result.textContent = '';
        results.textContent = '';
        const turn = document.querySelector('.turn-indicator');
        turn.textContent = 'Pick One';
    }
    else alert('Game not started')
}

function resetEverything(){
    GAMESTATE = false;
    PLAYERSCORE = 0;
    COMPUTERSCORE = 0;
    const turnInd = document.querySelector('.turn-indicator');
    const playerScore = document.getElementById('player-scor');
    const computerScore = document.getElementById('comp-scor');
    const result = document.querySelector('.result');
    const results = document.querySelector('.results');
    turnInd.textContent = '';
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    result.textContent = '';
    results.textContent = '';
}

function displayComputerResult(result){
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = result;
    return result;
}

function getComputerAnswer(){
    const getAnswer = document.querySelector('.result')
    return getAnswer.textContent;
}

function updateScore(roundWinner){
    if (roundWinner[0] === 'p'){
        const playerScore = document.getElementById('player-scor');
        PLAYERSCORE += 1;
        playerScore.textContent = PLAYERSCORE;
    } 
    else if (roundWinner[0] === 'c'){
        const computerScore = document.getElementById('comp-scor');
        COMPUTERSCORE += 1;
        computerScore.textContent = COMPUTERSCORE;
    }
    else console.log('tie');
}

function showWinner(winString){
    const results = document.querySelector('.results');
    results.textContent = resultArray[parseInt(winString[1], 10)];
}

function clearResults(){
    const results = document.querySelector('.results');
    results.textContent = '';
}

function returnWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice) return 'e0';  //0
    switch (playerChoice){
        case 'Rock':
            if (computerChoice == 'Paper'){
                return 'c1';  //1
            }
            else return 'p2'; //2
            break;
        case 'Paper':
            if (computerChoice == 'Rock'){
                return 'p3'; //3
            }
            else return 'c4'; //4
            break;
        case 'Scissors':
            if (computerChoice == 'Rock'){
                return 'c5'; //5
            }
            else return 'p6'; //6
            break;
    }
} 


function choosePlay(num){
    if (num == 1) return 'Rock';
    else if (num == 2) return 'Paper';
    else return 'Scissors';
}

function computerPlay(){
    let rand = Math.floor(Math.random() * 3) + 1;
    return choosePlay(rand);
}