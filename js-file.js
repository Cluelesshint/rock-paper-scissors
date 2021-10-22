const start = document.querySelector('.start-btn');
const reset = document.querySelector('.reset-btn');

start.addEventListener('click', showYourTurn)

const playerChoice = document.querySelectorAll('.choices')

playerChoice.forEach((e) => {
    e.addEventListener('click', function(e){
        playRound(e);
    })
});

function showYourTurn(){
    const turnIndicator = document.querySelector('.turn-indicator');
    if (turnIndicator.outerText == ''){
        turnIndicator.textContent = 'Pick One';
    } 
}

function playRound(e){
    const turnIndicator = document.querySelector('.turn-indicator');
    const checkResult = document.querySelector('.result');
    if (turnIndicator.textContent == 'Pick One'){
        turnIndicator.textContent = '';
        displayComputerResult('Choosing...');
        setTimeout(function () {displayComputerResult(computerPlay());}, 1000);
    }
    else if (checkResult != '') alert('Game in progress!');
    else alert('Hey, You forgot to click start!');

}

function displayComputerResult(result){
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = result;
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