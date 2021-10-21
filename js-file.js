






function choosePlay(num){
    if (num == 1) return 'rock';
    else if (num == 2) return 'paper';
    else return 'scissors';
}

function computerPlay(){
    let rand = Math.floor(Math.random() * 3) + 1;
    return choosePlay(rand);
}

function getPlayerChoice(){
    let choice;
    while (true){
        choice = prompt('rock, paper, or scissors?')
        choice.toLowerCase();
        if (choice == 'rock' || choice == 'paper' || choice == 'scissors'){
            return choice;
            break;
        } 
        else alert('Invalid Input');
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice) return 'It\'s a tie!';
    switch (playerChoice){
        case 'rock':
            if (computerChoice == 'paper'){
                return 'You lose! Paper beats rock!';
            }
            else return 'You win! Rock beats scissors';
            break;
        case 'paper':
            if (computerChoice == 'rock'){
                return 'You win! Paper beats rock';
            }
            else return 'You lose! Scissors beat paper';
            break;
        case 'scissors':
            if (computerChoice == 'rock'){
                return 'You lose! Rock beats scissors';
            }
            else return 'You win! Scissors beats paper';
            break;
    } 
}



