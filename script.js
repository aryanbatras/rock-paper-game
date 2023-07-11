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
    alert('Computer chooses Rock');
    computer = "Rock";    
    } else if (value === 1) {
        alert('Computer chooses Paper');
        computer = "Paper";
        } else {
            alert('Computer chooses Scissor');
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
    return player;
}

// Single round of game
// -1 = lose 0 = tie 1 = win
// Values with respect to player

function round() {
 let score = 0;
 let wins = score;

 // five rounds of game
 for(i = 1; i < 6; i++) {

 alert(" Round " + i);
 let playerChoice = getPlayerChoice();
 let computerChoice  =  getComputerChoice();

    if (computerChoice === "Rock") {
        if (playerChoice === "Rock") {
            score = 0;
            alert('round ' + i + ' equal');
        } else if (playerChoice === "Paper") {
            score = 1;
            alert('player wins round ' + i);
        } else if (playerChoice === "Scissor") {
            score = -1;
            alert('player loses round ' + i);
        }
    } else if (computerChoice === "Paper") {
        if (playerChoice === "Rock") {
            score = -1;
            alert('player loses round ' + i);
        } else if (playerChoice === "Paper") {
            score = 0;
            alert('round' + i + 'equal');
        } else if (playerChoice === "Scissor") {
            score = 1;
            alert('player wins round ' + i);
        }
    } else if (computerChoice === "Scissor") {
        if (playerChoice === "Rock") {
            score = 1;
            alert('player wins round ' + i);
        } else if (playerChoice === "Paper") {
            score = -1;
            alert('player loses round ' + i);
        } else if (playerChoice === "Scissor") {
            score = 0;
            alert('round ' + i + ' equal');
        }
    }
    wins += score;
   }
   return wins;
}

// game starts here
function game() {
let result = round();
alert("Total Score " + result);
    if (result == 0 ) {
   alert('sadly noone wins');
        } else if (result > 0) {
           alert('winner winner chicken dinner');
         } else if (result < 0) {
            alert('game over cuz he is smarter');
                  }
    }


function play() {
    alert('Rock. Paper & Scissors Game by Aryan')
    game();
}

play();








