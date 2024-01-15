'use strict';

const buttons = document.querySelectorAll('.buttons');
const resultEl = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        const result = playRound(button.id , computerPlay());
    //    console.log(result);
    resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock","paper","scissors"];
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

function playRound(playerSelection , computerSelection) {
if (playerSelection === computerSelection) {
    return `It's a tie !`;
}else if(
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
){
    return `You win ${playerSelection} beats ${computerSelection}`;
} else{
    return `You lose ${computerSelection} beats ${playerSelection}`;
}
}

// return "You Win!" + playerSelection + " beats " + computerSelection;

// return "You Lose! " + computerSelection + " beats " + playerSelection;


