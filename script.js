// rock paper scissor game in console
// man vs computer game
// computer randomizer
// man input prompt
// game rounds 
// result !


// ComputerChoice
function getComputerChoice() {
let value = Math.floor(Math.random() * 3);
let computer = "";
if (value === 0) {
    alert('I choose Rock');
    computer = "Rock";    
    } else if (value === 1) {
        alert('I choose Paper');
        computer = "Paper";
        } else {
            alert('I choose Scissor');
            computer = "Scissor";
            }
    return computer;        
} 

// Use string method charAt and slice to make the
// case sensivity hide and always first letter capital
// after break

// PlayerChoice
function getPlayerChoice() {
   let rawinput = prompt("Write your weapon : Rock, Paper or Scissor.");
    let player = rawinput.charAt(0).toUpperCase() + rawinput.slice(1).toLowerCase();
      if (player === "Rock") {
        alert("Player chooses Rock");
    } else if (player === "Paper") {
        alert("Player chooses Paper");
    } else if (player === "Scissor") {
        alert("Player chooses Scissor");
    }
}

// Single round of game
// -1 = lose 0 = tie 1 = win
// Values with respect to player

function round() {
 let playerChoice = getPlayerChoice();
  let computerChoice  =  getComputerChoice();

    if (computerChoice === "Rock") {
        if (playerChoice === "Rock") {
            return 0;
        } else if (playerChoice === "Paper") {
            return 1;
        } else if (playerChoice === "Scissor") {
            return -1;
        }
    } else if (computerChoice === "Paper") {
        if (playerChoice === "Rock") {
            return -1;
        } else if (playerChoice === "Paper") {
            return 0;
        } else if (playerChoice === "Scissor") {
            return 1;
        }
    } else if (computerChoice === "Scissor") {
        if (playerChoice === "Rock") {
            return 1;
        } else if (playerChoice === "Paper") {
            return -1;
        } else if (playerChoice === "Scissor") {
            return 0;
        }
    }
}

// game starts here
function play() {
let result = round();

    if (result == 0 ) {
        alert('sadly noone wins');
    } else if (result == 1) {
        alert('winner winner');
    } else if (result == -1) {
        alert('game over');
    }
}













