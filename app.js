"use strict"

/*

The game is played in the console against a computer.
The user will pick their choice of rock, paper, or scissors as well as the computer.
Conditions for winning/losing are dependent on the choice made by the user and computer.

Computer will be a function that is called each time a user decides to play a game.
Computer will randomly pick between the three choices.
Computer will return the choice it has made based off of its random choice.



*/

// Human and computer score declared in the global scope



function getComputerChoice() {
    let compChoice;
    compChoice = Math.floor(Math.random() * 3) + 1;
    
    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    };
}

/*

Function for human choice:

Use a prompt method to have the human enter one of the three choices
Save to a variable and return the value

*/

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice.toLowerCase();
}


/*
Create function for a single round of rock, paper, scissors
parameters are the functions for getting the humanChoice and computerChoice
Make the value entered by the human be case insensitive
Compare the returned values of each parameter to decide the winner
Increment the global score variables of whoever won the round
Possibility of being a tie
*/

function playRound(humanPick, computerPick) {

    let humanChoice = humanPick();
    let computerChoice = computerPick();

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        return "Win";
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "paper" && humanChoice === "rock" || computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        return "Loss"
    } else {
        console.log(`Tie! Both players chose ${humanChoice}!`);
    }
}

// playRound(humanSelection, computerSelection);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let round = playRound(getHumanChoice, getComputerChoice);
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);

    /*
    if (round === "Win") {
        humanScore++;
    } else if (round === "Loss") {
        computerScore++;
    } Basically repeat that for round2 thru round5 but this seems inefficient
    */
}


/*
Create a function that plays multiple rounds
Holds the score variables and calls playRound multiple times
Figure out how to change the humanChoice and computerChoice each round when playRound function is called
The humanChoice and computerChoice are const, is it a matter of invoking them each time the function is called?
Probably have to change humanChoice and computerChoice into let in order to change their variables through each iteration.
*/

/*
Bugs:
Capitalize the first letter of each choice for the players
Increment score properly and show through the console
*/