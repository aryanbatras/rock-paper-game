
// ComputerChoice
function getComputerChoice() {
let value = Math.floor(Math.random() * 3);
let computer = "";
if (value === 0) {
    computer = "Rock";
    iconComputer = '👊';    
    } else if (value === 1) {
        computer = "Paper";
        iconComputer = '🖐️';
        } else if (value === 2) {
            computer = "Scissor";
            iconComputer = '✌️';
            }
    
            return computer;        
 }

let iconPlayer = 0;
let iconComputer = 0;

let playerChoice = 0;
let computerChoice = 0;

// Events
let rock = document.querySelector('.rock');
rock.addEventListener('click', function() {
    iconaudio.play();
    iconaudio.currentTime = 0;

    playerChoice = 'Rock';
    content.textContent = 'Player Chooses Rock';
    
    computerChoice = getComputerChoice();

    result.style.display = 'none';
    icon.style.display = 'none';

    btn.style.display = 'initial';
    btn.addEventListener('click', function() {

        audio.play();
        content.textContent = 'Computer Chooses ' + computerChoice;
        
        iconPlayer = '👊';
        icon.style.display = 'initial';
        result.style.display = 'initial';
        if(computerChoice === 'Rock') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'sadly noone wins';
        } else if (computerChoice === 'Paper') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'you lose';
        } else if (computerChoice === 'Scissor') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'you win';
        }

        btn.style.display = 'none';
     }
 );

}
);



let paper = document.querySelector('.paper');
paper.addEventListener('click', function() {
    iconaudio.play();
    iconaudio.currentTime = 0;

    playerChoice = 'Paper';
    content.textContent = 'Player Chooses Paper';


    computerChoice = getComputerChoice();

    result.style.display = 'none';
    icon.style.display = 'none';

    btn.style.display = 'initial';
    btn.addEventListener('click', function() {

        audio.play();
        content.textContent = 'Computer Chooses ' + computerChoice;
        
        iconPlayer = '🖐️';
        icon.style.display = 'initial';
        result.style.display = 'initial';
        if(computerChoice === 'Paper') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'sadly noone wins';
        } else if (computerChoice === 'Scissor') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'you lose';
        } else if (computerChoice === 'Rock') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'you win';
        }

        btn.style.display = 'none';
     }
 );

});

let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', function() {
    iconaudio.play();
    iconaudio.currentTime = 0;

    playerChoice = 'Scissor';
    content.textContent = 'Player Chooses Scissor';

    computerChoice = getComputerChoice();

    result.style.display = 'none';
    icon.style.display = 'none';

    btn.style.display = 'initial';
    btn.addEventListener('click', function() {

        audio.play();
        content.textContent = 'Computer Chooses ' + computerChoice;
        
        iconPlayer = '✌️';
        result.style.display = 'initial';
        icon.style.display = 'initial';
        if(computerChoice === 'Scissor') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'sadly noone wins';
        } else if (computerChoice === 'Rock') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'you lose';
        } else if (computerChoice === 'Paper') {
            icon.textContent = iconPlayer + ' - ' + iconComputer;
            result.textContent = 'you win';
        }

        btn.style.display = 'none';
     }
 );

    });

let content = document.querySelector('.content');
let result = document.querySelector('.result');
let btn = document.querySelector('.button');
let audio = document.querySelector('.clickaudio');
let icon = document.querySelector('.icon');
let iconaudio = document.querySelector('.selectaudio');

btn.style.display = 'none';





