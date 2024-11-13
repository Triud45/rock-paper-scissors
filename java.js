/* 0 = rock  1 = paper  2 = scissors*/

let humanChoice;
let computerChoice

let humanScore = 0;
let computerScore = 0;

const rock = 0;
const paper = 1;
const scissors =2;

const directionText = document.querySelector('.directionText');
const startButton = document.querySelector('#startButton');
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorButton = document.querySelector('.scissorButton');
const outcome = document.createElement('div');

startButton.addEventListener ('click', playGame);

function getComputerChoice() 
{
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(choice)
{
    let rps;
    choice = choice.toLowerCase();
    if(choice === 'rock')
    { 
        rps = 0;
        return rps;
    }
    else if(choice === 'paper')
    {
        rps = 1;
        return rps;
    }
    else if (choice === 'scissors' || choice === 'scissor')
    {
        rps = 2;
        return rps;
    }
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        outcome.textContent = 'Tie! Try again';
    }
    else if(humanChoice === rock && computerChoice === paper)
    {
        outcome.textContent = 'You lose! Paper beats Rock';
        computerScore++;
    }
    else if(humanChoice === paper && computerChoice === scissors)
    {
        outcome.textContent = 'You lose! Scissors beats Paper';
        computerScore++;
    }
    else if(humanChoice === scissors && computerChoice === rock)
    {
        outcome.textContent = 'You lose! Rock beats Scissors';
        computerScore++;
    }
    else
    {
        outcome.textContent = 'You win!';
        humanScore++;
    }
}

function playGame()
{
    directionText.textContent = 'Select Rock, Paper, or Scissors';
    let numScore = 0;


        rockButton.addEventListener('click',function(){
            console.log('Clicked Rock');
            humanChoice = rock;
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            numScore++;
        })
        paperButton.addEventListener('click',function(){
            console.log("Clicked Paper");
            humanChoice = paper;
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            numScore++;
        })
        scissorButton.addEventListener('click',function(){
            console.log("Clicked Paper");
            humanChoice = scissors;
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            numScore++;
        })

    if(numScore === 5)
    {
        if(humanScore > computerScore)
        {
            outcome.textContent = 'Congratulations, you won! ' + humanScore + ":" + computerScore;
        }
        else if(humanScore < computerScore)
        {
            outcome.textContent = 'Sorry, you lost. Better luck next time! ' + humanScore + ":" + computerScore;
        }
        else
        {
            outcome.textContent = 'How rare, you tied! '  + humanScore + ":" + computerScore;
        }

    }
}






