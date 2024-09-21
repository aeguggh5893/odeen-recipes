"use strict"

/*

The game is played in the console against a computer.
The user will pick their choice of rock, paper, or scissors as well as the computer.
Conditions for winning/losing are dependent on the choice made by the user and computer.

Computer will be a function that is called each time a user decides to play a game.
Computer will randomly pick between the three choices.
Computer will return the choice it has made based off of its random choice.


0 - 0.99 = 0
1 - 1.99 = 1
2 - 2.99 = 2

0 - 0.33
0.34 - 0.66
0.67 - 99

*/

function getComputerChoice() {
    let compChoice;
    compChoice = Math.floor(Math.random() * 3) + 1;
    
    if (compChoice === 1) {
        return "Rock";
    } else if (compChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    };
}