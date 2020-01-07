# Project_1-Game
Project Name: "Scissors Paper Stone"
Link to Game: https://joyce-paul.github.io/Project_1-Game/


How the Game Flows:
1) Page Layout:
    - Three images of "scissors", "paper" and "stone" set in inline-block
    - Player's score
    - Computer's score
    - Play again button to reset scores

2) Text for Game Instructions:
- Play against the computer.
- Information on what makes a winning or a losing game.
- Click on an image to start.

3) Messages will show on screen when player wins, loses or when there is a tie.

Notes:
When we select one of the icons, it will be compared against the computer's choice which is selected via Math.floor(Math.random() * 3).

4) Motivations for Selecting this Game:
- To better understand javascript, to be more comfortable with it and to improve my javascript coding skills.
- To improve CSS skills.

5) Technologies Used:
- I used vanilla javascript and css. I started with Bootstrap to design the layout but I reverted to vanilla css as it was easier to use and the bootstrap code on the index.html page was too messy.

6) Approach Taken:
- I started by researching on how this particular game is played and examples of similar games. I read up on the method of getting the computer to make its selection which is via Math.random().

- I came up with an action list of features I wanted to have in the game.

- I began the project by creating a basic structure on HTML and CSS using Bootstrap. This was followed by creating an alert message on the javascript file to see if it works. I then created the game logic to see if it works.

- What I've learned through this process: I've learned that it's important to break tasks down into smaller sizes. Doing this made the project less overwhelming, made the tasks more achievable and helped me to complete them. I've also learned to google more and not to compare myself with others. I'm also starting to appreciate error messages in Google Chrome's developer console. Error messages are useful and help in debugging one's code.

7) Unsolved Problems:
// Slow down effects (set timeout) on WIN LOSE TIE messages
// Slow down the effects on icons when they flip
