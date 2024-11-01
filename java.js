function getComputerChoice() 
{
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(choice)
{
    choice = choice.toLowerCase();
    alert(choice);
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice(prompt("Please choose Rock, Paper, or Scissors and type it below!"));


