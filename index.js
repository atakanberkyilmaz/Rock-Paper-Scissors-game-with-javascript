const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelector(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener());

choiceBtns.forEach(button => button.addEventListener("click",() => {
    
    player = button.textContent;
    computerTurn();
    playerText.textContent =`Player:${player}`;
    computerText.textContext = `Computer: ${computer}`;
    resultText.textContent = checkWinner()

}));

function computerTurn(){
    
    const randNum = Math.floor(Math.random() * 3) + 1;
    
    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return(player =="PAPER") ? "You win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ? "You Win!" : "You Lose!"
    }

}