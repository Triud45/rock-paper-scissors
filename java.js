function getComputerChoice() 
{
    return Math.floor(Math.random() * 3);
}

let computerChoice = getComputerChoice()
alert(computerChoice);