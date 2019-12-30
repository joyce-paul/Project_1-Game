console.log("Scissors-Paper-Stone: Game starts now");
var playerScore = 0; //Player score starts at 0
var computerScore = 0; //Computer score starts at 0
var iconChoices = document.querySelectorAll(".icons"); //All icons into a variable


// GET COMPUTER CHOICES USING RANDOM NUMBERS (MATH.RANDOM) AND MATH.FLOOR FOR WHOLE NUMBERS
function getComputerChoice() {
    var choices =["Scissors", "Paper", "Stone"];
    var randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 2) {
        return "scissors";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "stone";
    }
}


// PLAYER WINS AND COMPUTER LOSES
function winGame(playerChoice, computerChoice) { // Player wins
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h5").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}. You win!`;
}


// PLAYER LOSES TO COMPUTER
function loseGame(playerChoice, computerChoice) {
    computerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.querySelector(".result > h5").innerHTML = `The computer chose ${computerChoice.toUpperCase()}. You chose ${playerChoice.toUpperCase()}. The computer wins!`;
}


// WHEN THERE IS A TIE
function tie(playerChoice, computerChoice) {
    document.querySelector(".result > h5").innerHTML = `You chose ${playerChoice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}. It is a tie!`;
}


// GAME LOGIC
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
    // console.log("you clicked button");
/*    document.getElementById("player-score").innerHTML = 0;
    console.log("hello");
    document.getElementById("computer-score").innerHTML = 0;*/
    })
}




// TO DOs
//   playAgain()
// Change the cursor to pointer
//   Change colors on icons when mouse pressed
// myBicycle.color = "blue";

//   Set timeout message of You WIN, You LOSE, IT IS A TIE. Color coded
//   CSS: reduce screen size.
//   Add player's name
//   Update README file
//   If/else game logic [DONE]



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
// (c) If player or Computer wins or a tie, alert box
// (d)Click Play Again button to restart game