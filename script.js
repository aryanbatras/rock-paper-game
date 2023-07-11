// rock paper scissor game in console
// man vs computer game
// computer randomizer
// man input prompt
// game rounds 
// result !


// ComputerChoice
function getComputerChoice() {
let value = Math.floor(Math.random() * 3);
if (value === 0) {
    alert('I choose Rock');
    return "Rock";    
    } else if (value === 1) {
        alert('I choose Paper');
        return "Paper";
        } else {
            alert('I choose Scissor');
            return "Scissor";
            }
} 

// Use string method charAt and slice to make the
// case sensivity hide and always first letter capital
// after break

// PlayerChoice
function getPlayerChoice() {
   let rawinput = prompt("Write your weapon : Rock, Paper or Scissor.");
    let input = rawinput.charAt(0).toUpperCase() + rawinput.slice(1).toLowerCase();
    if (input === "Rock") {
        alert("Player chooses Rock");
    } else if (input === "Paper") {
        alert("Player chooses Paper");
    } else if (input === "Scissor") {
        alert("Player chooses Scissor");
    }
    return input;
}

// Single round of game
// -1 = lose 0 = tie 1 = win
// Values with respect to player

function round() {
   getPlayerChoice();
   // Stop unless input given
   getComputerChoice();
    if (getComputerChoice === "Rock") {
        if (getPlayerChoice === "Rock") {
            return 0;
        } else if (getPlayerChoice === "Paper") {
            return 1;
        } else if (getPlayerChoice === "Scissor") {
            return -1;
        }
    } else if (getComputerChoice === "Paper") {
        if (getPlayerChoice === "Rock") {
            return -1;
        } else if (getPlayerChoice === "Paper") {
            return 0;
        } else if (getPlayerChoice === "Scissor") {
            return 1;
        }
    } else if (getComputerChoice === "Scissor") {
        if (getPlayerChoice === "Rock") {
            return 1;
        } else if (getPlayerChoice === "Paper") {
            return -1;
        } else if (getPlayerChoice === "Scissor") {
            return 0;
        }
    }
}

// game starts here
function play() {
    round();
    if (round == 0 ) {
        alert('lose');
        return "sadly noone wins";
    } else if (round == 1) {
        alert('win');
        return "winner winner chicken dinner";
    } else if (round == -1) {
        alert('tie');
        return "computer is smater than you because you lose"; 
    }
}

play();















