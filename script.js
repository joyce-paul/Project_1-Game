console.log("Scissors-Paper-Stone: Game starts now");

// STEP 1 - SET UP SCORES IN GLOBAL VARIABLES
var playerScore = 0; //Player score starts at 0
var computerScore = 0; //Computer score starts at 0

// SCISSORS SOUND EFFECT ON SCISSORS ICON
var mySound = document.getElementById("scissors-sound");
var correctButton = document.getElementById("scissors");
correctButton.addEventListener("click", function(){ mySound.play(); });





// STEP 2 -- GET COMPUTER CHOICES USING RANDOM NUMBERS (MATH.RANDOM) AND MATH.FLOOR FOR WHOLE NUMBERS
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "scissors";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "stone";
    }
}






// STEP 3 -- DEFINE FUNCTION WHERE PLAYER WINS
// PLAYER WINS
function winGame(playerChoice, computerChoice) { // Player wins
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
    document.querySelector(".outcome").innerHTML = "You Won! 🤓"; // Message that says player won game
    document.querySelector(".outcome").style.color = "green"; // Message colour switched to green

    console.log(`you clicked ${playerChoice}`);
}


// STEP 4 -- DEFINE FUNCTION WHERE PLAYER LOSES
// PLAYER LOSES
function loseGame(playerChoice, computerChoice) {
    computerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
    document.querySelector(".outcome").innerHTML = "You Lost! 🙁"; // Message that says player lost game
    document.querySelector(".outcome").style.color = "red"; // Message colour switched to red
    console.log(`you clicked ${playerChoice}`);
}


// STEP 5 -- DEFINE FUNCTION WHERE THERE IS A TIE
// WHEN THERE IS A TIE
function tie(playerChoice, computerChoice) {
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
     document.querySelector(".outcome").innerHTML = "It is a TIE! 🙃"; // Message that says it is a tie
     document.querySelector(".outcome").style.color = "#ffc000"; // Message colour switched to grey
}



// STEP 6 -- IF AND ELSE STATEMENT OF PLAYER AND COMPUTER CHOICES
function choices(playerChoice, computerChoice) {
    var computerChoice = getComputerChoice();
        if (playerChoice === computerChoice) {
            tie(playerChoice, computerChoice);
        } else if (playerChoice === "scissors" && computerChoice === "stone") {
        loseGame(playerChoice, computerChoice);
        } else if (playerChoice === "paper" && computerChoice === "stone") {
            winGame(playerChoice, computerChoice);
        } else if (playerChoice === "stone" && computerChoice === "scissors") {
            winGame(playerChoice, computerChoice);
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            winGame(playerChoice, computerChoice);
        } else if (playerChoice === "stone" && computerChoice === "paper") {
            loseGame(playerChoice, computerChoice);
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            loseGame(playerChoice, computerChoice);
        } else {
            console.log("Play again");
        }
        }

getComputerChoice();



// STEP 7 -- DEFINE START GAME FUNCTION
// EVENT LISTENERS ON ALL THREE ICONS TO SHOW THAT PLAYER CLICKED ON THEM
function startGame() {
    document.getElementById("scissors").addEventListener("click", function() {
    // console.log("you clicked scissors");
    choices("scissors");
    })

    // Event listener added to paper icon
    document.getElementById("paper").addEventListener("click", function() {
    // console.log("you clicked paper");
    choices("paper");
    })

    // Event listener added to stone icon
    document.getElementById("stone").addEventListener("click", function() {
    // console.log("you clicked stone");
    choices("stone");
    })
}
startGame();


// STEP 8 -- DEFINE PLAY AGAIN FUNCTION TO RESET SCORES
// PLAY AGAIN
function playAgain() {
    document.getElementById("play-again").addEventListener("click", function() {
    console.log("Play again button clicked and scoreboard cleared");
    document.getElementById("player-score").innerHTML = 0;
    // console.log("player score cleared");
    document.getElementById("computer-score").innerHTML = 0;
    // console.log("computer score cleared");

    playerScore = 0; // Reset playerScore to 0
    computerScore = 0; // Reset computerScore to 0

   document.querySelector(".result > h3").innerHTML = "Select ✌🏽, ✋🏽 or ✊🏽."; // Message appears once playAgain button clicked
   document.querySelector(".outcome").innerHTML = ""; //removes text once button is clicked.
    })
}

playAgain();


// TO DOs

// Slow down the effects on icons when they flip

// Audio for click on scissors icon

// Audio

// Background changes colour when win

// Comments on code

// Update README

// A link to my hosted working game in the URL section of your Github repo.

// Scissors paper stone heading animation
// append. CSS animation keyframes

// Add emojis to win lose tie messages [DONE]
// Change colour on icons to bright green or yellow when pressed [DONE]
// Change the colour of TIE message [DONE]









// Error in the TIE function [DONE]
// Revise if and else statements [DONE]
// Use emojis to replace text [DONE]
// The scores seem to be added multiple times sometimes. [DONE]
// Instructions on how to play the game [DONE]
// Increase font size of win, lose and tie messages. [DONE]
//   Change colors on icons when mouse pressed [DONE]
// playAgain button to have an effect upon pressing [DONE]
// Attach playAgain button to new start playing game message [DONE]
// Change the cursor to pointer [DONE]
//   If/else game logic [DONE]
//   playAgain()  [DONE]


// Step 1: Set up playerScore & computerScore. Both start at 0
// Step 2:  Check if event listeners on icons work
/*var iconChoices = document.querySelectorAll(".icons");
// Event listeners attached to all buttons using for loop
for (var i = 0; i < iconChoices.length; i++) {
    iconChoices[i].addEventListener("click", startGame);
     console.log("Click works");
};
*/
// Step 3: Add event listener on each of the icons
// document.getElementById("scissors").addEventListener("click", function() {
//     console.log("you clicked scissors");
// })
// document.getElementById("paper").addEventListener("click", function() {
//     console.log("you clicked paper");
// })
// document.getElementById("stone").addEventListener("click", function() {
//     console.log("you clicked stone");
// })

// Step 4: Game Logic as follows:
// (a) Get playerInput --> (onclick)
// (b) Get computerInput --> (Math.random(Math.floor))
// (c) If player or Computer wins, loses or a tie, message alert
// (d)Click Play Again button to restart game


//NOTES
/*    var choices =["Scissors", "Paper", "Stone"]; */