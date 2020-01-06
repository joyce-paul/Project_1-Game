console.log("Scissors-Paper-Stone: Game starts now");
var playerScore = 0; //Player score starts at 0
var computerScore = 0; //Computer score starts at 0


// GET COMPUTER CHOICES USING RANDOM NUMBERS (MATH.RANDOM) AND MATH.FLOOR FOR WHOLE NUMBERS
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



// PLAYER WINS
function winGame(playerChoice, computerChoice) { // Player wins
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
    document.querySelector(".outcome").innerHTML = "You Won!"; // Message that says player won game
    document.querySelector(".outcome").style.color = "green"; // Message colour switched to green
// append. CSS animation keyframes
    console.log(`you clicked ${playerChoice}`);
}




// PLAYER LOSES
function loseGame(playerChoice, computerChoice) {
    computerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
    document.querySelector(".outcome").innerHTML = "You Lost!"; // Message that says player lost game
    document.querySelector(".outcome").style.color = "red"; // Message colour switched to red
    console.log(`you clicked ${playerChoice}`);
}


// WHEN THERE IS A TIE
function tie(playerChoice, computerChoice) {
    document.querySelector(".result > h3").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`;
     document.querySelector(".outcome").innerHTML = "It is a tie!"; // Message that says it is a tie
     document.querySelector(".outcome").style.color = "grey"; // Message colour switched to grey
}




function choices(playerChoice, computerChoice) {
    var computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        tie(playerChoice, computerChoice);
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "stone") {
            loseGame(playerChoice, computerChoice);
        } else {
            winGame(playerChoice, computerChoice);
        }
}
    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            loseGame(playerChoice, computerChoice);
        } else {
            winGame(playerChoice, computerChoice);
        }
    }
    if (playerChoice === "stone") {
        if (computerChoice === "paper") {
            loseGame(playerChoice, computerChoice);
        } else {
            winGame(playerChoice, computerChoice);
        }
    }
}

getComputerChoice();



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
// Use emojis to replace text [DONE]
// append. CSS animation keyframes
// Error in the TIE function
//   Update README file
// A link to my hosted working game in the URL section of your Github repo.




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