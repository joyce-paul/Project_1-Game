# Project_1-Game
Project Name: "Scissors Paper Stone"


How the Game Flows:
1) Page Layout:
    - Three images of "scissors", "paper" and "stone" set in inline-block
    - Player's score
    - Computer's score
    - Play again button to reset scores

2) Text for Game Instructions:
- Play against the computer.
- Click on an image to start.

3) Messages will show on screen when player wins, loses or when there is a tie.

Notes:
When we select one of the icons, it will be compared against the computer's choice which is selected via Math.floor(Math.random() * 3).

4) Technologies Used:
- I used vanilla javascript and css. I started with Bootstrap to design the layout but I reverted to vanilla css as it was easier to use.

5) Approach Taken:
- I started by researching on how this particular game is played and how others have made it. I read up on the method of getting the computer to make its selection which is via Math.random().

- I began the project by creating a basic structure on HTML and CSS using Bootstrap. This was followed by creating an alert message on the javascript file to see if it works. I then created the game logic to see if it works.

A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

6) Unsolved Problems:
- A bug with the TIE message
- The scores seem to be added multiple times sometimes.
- A link to my hosted working game in the URL section of your Github repo.
- Media query
- Set timeout message of You WIN, You LOSE, IT IS A TIE.
