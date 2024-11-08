/* 0 = rock  1 = paper  2 = scissors*/

let humanChoice;
let computerChoice

let humanScore = 0;
let computerScore = 0;

const directionText = document.querySelector('.directionText');
const startButton = document.querySelector('#startButton');
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorButton = document.querySelector('scissorButton');

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
    else
    {
        rps = 0;
        alert('You entered an invalid choice, rock is chosen by defualt');
        return rps;
    }
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        alert('Tie! Try again');
    }
    else if(humanChoice === 0 && computerChoice === 1)
    {
        alert('You lose! Paper beats Rock');
        computerScore++;
    }
    else if(humanChoice === 1 && computerChoice === 2)
    {
        alert('You lose! Scissors beats Paper');
        computerScore++;
    }
    else if(humanChoice === 2 && computerChoice === 0)
    {
        alert('You lose! Rock beats Scissors');
        computerScore++;
    }
    else
    {
        alert('You win!');
        humanScore++;
    }
}

function playGame()
{
    let numScore = 0;

    while(numScore < 5)
    {
        numScore++;
        humanChoice = getHumanChoice(prompt('Please choose Rock, Paper, or Scissors and enter it below'));
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(numScore === 5)
    {
        if(humanScore > computerScore)
        {
            alert('Congratulations, you won! ' + humanScore + ":" + computerScore);
        }
        else if(humanScore < computerScore)
        {
            alert('Sorry, you lost. Better luck next time! ' + humanScore + ":" + computerScore);
        }
        else
        {
            alert('How rare, you tied! '  + humanScore + ":" + computerScore);
        }

    }
}






