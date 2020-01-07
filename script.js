console.log("Scissors-Paper-Stone: Game starts now");

// STEP 1 - SET UP SCORES IN GLOBAL VARIABLES
var playerScore = 0; //Player score starts at 0
var computerScore = 0; //Computer score starts at 0


function random_bg_color() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var alpha = Math.random(0.1);
    var bgColor = "rgba(" +red +", " +green +"," +blue +"," +alpha +")";

    document.body.style.background = bgColor;
    }

random_bg_color();



//STEP 2 -- SOUND EFFECTS ON ICONS
// SCISSORS SOUND EFFECT ON SCISSORS ICON
var scissorsSound = document.getElementById("scissors-sound");
var scissorsIcon = document.getElementById("scissors");
scissorsIcon.addEventListener("click", function(){ scissorsSound.play(); });


// PAPER SOUND EFFECT ON PAPER ICON
var paperSound = document.getElementById("paper-sound");
var paperIcon = document.getElementById("paper");
paperIcon.addEventListener("click", function(){ paperSound.play(); });


// STONE SOUND EFFECT ON STONE ICON
var stoneSound = document.getElementById("stone-sound");
var stoneIcon = document.getElementById("stone");
stoneIcon.addEventListener("click", function(){ stoneSound.play(); });


// STEP 3 -- GET COMPUTER CHOICES USING RANDOM NUMBERS (MATH.RANDOM) AND MATH.FLOOR FOR WHOLE NUMBERS
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


// STEP 4 -- DEFINE FUNCTION WHERE PLAYER WINS
// PLAYER WINS
function winGame(playerChoice, computerChoice) { // Player wins
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
    document.querySelector(".outcome").innerHTML = "You Won! 🤓"; // Message that says player won game
    document.querySelector(".outcome").style.color = "green"; // Message colour switched to green
/*    document.body.style.backgroundColor = "#a9ff63";*/
    random_bg_color();
    // console.log(`you clicked ${playerChoice}`);
}


// STEP 5 -- DEFINE FUNCTION WHERE PLAYER LOSES
// PLAYER LOSES
function loseGame(playerChoice, computerChoice) {
    computerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
    document.querySelector(".outcome").innerHTML = "You Lost! 👿"; // Message that says player lost game
    document.querySelector(".outcome").style.color = "red"; // Message colour switched to red
/*    document.body.style.backgroundColor = "yellow";*/
random_bg_color();
    // console.log(`you clicked ${playerChoice}`);
}


// STEP 6 -- DEFINE FUNCTION WHERE THERE IS A TIE
// WHEN THERE IS A TIE
function tie(playerChoice, computerChoice) {
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
     document.querySelector(".outcome").innerHTML = "It is a TIE! 🧐"; // Message that says it is a tie
     document.querySelector(".outcome").style.color = "#ffc000"; // Message colour switched to grey
/*     document.body.style.backgroundColor = "#4ffefe";*/
random_bg_color();
}


// STEP 7 -- IF AND ELSE STATEMENT OF PLAYER AND COMPUTER CHOICES
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



// STEP 8 -- DEFINE START GAME FUNCTION
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


// STEP 9 -- DEFINE PLAY AGAIN FUNCTION TO RESET SCORES
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

   document.body.style.backgroundColor = "#fffcfc";

    })
}

playAgain();



// TO DOs

// Create random colour generator


// Slow down the effects on icons when they flip

// Comments on code

// Update README

// A link to my hosted working game in the URL section of your Github repo. [DONE]

// Scissors paper stone heading animation

// append. CSS animation keyframes

// Change the audio of the stone icon [DONE]
// A link to my hosted working game in the URL section of your Github repo. [DONE]
// Background changes colour when win, lose or tie [DONE]
// Audio for click on paper icon [DONE]
// Audio for click on stone icon [DONE]
// Audio for click on scissors icon [DONE]
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