## Rock Paper Scissors/ Project 1

This game is one of three projects in the Web Development course for the PerScholas Boot Camp.
My version of Rock Paper Scissors game is call Pokemon RPS

## More information about the game: https://en.wikipedia.org/wiki/Rock_paper_scissors

## Game Functions:

- Rock Paper and Scissors has been replaced with Fire, Water and Grass for this game.
- After pressing the play button the player can select which type of pokemon to use.
- After pressing play music to indicate the battle has started.
- The computer will randomly choose a pokemon and display it on screen.
- If both the player and the computer chose the same pokemon, then there's tie a point will go in the tie column on the scoreboard.
- Otherwise if either the player wins or loses a point will go into the win or lose column on the scoreboard.

---

## User Stories

I can select the play button to start the game.
I can select which pokemon would most like win the game for me.
I can be alerted when to know if I won lose or had a tie vs the computer.
I am treated to classic pokemon music while the game is playing and after I won.

---

## Built With:

HTML
CSS
Javascript

---

## How I built this game:

First, I created the top menu and submenu using JavaScript code and some of the HTML code from an previous assignment. I changed the text to each different pokemon type (Fire-types, Water-types, Grass-types). Once one of types are clicked, I wanted the player to have 3 different fire, water and grass pokemon to select. Once I got that working I need a background image for my webpage. I found a Pokemon stadium stage from the Galar region and added that to my HTML code. I used CSS to make sure the image would fit with the menus I created earlier, by setting the position to absolute and z-index to -1.

Next, I needed to find images for the pokemon I wanted in this game. I later found a website that was could give me images of the pokemon I wanted. Then I need to add the file path to each image of pokemon in JavaScript. Once that was done I used the submenu EventListener with a for loop to the Pokemon list array with a if statement to display each pokemon once it was clicked by the player. For the computer I created an variable to store Math.floor(Math.random() \* pokemonList.length). Then using variable I called computerPokemon and assigned it pokemonList[pcSelected Pokemon]. Next I wanted to have the pokemon in a pokeball before they were selected. So I downloaded a pokeball image from a website. In HTML I created a playerPokemon and a computerPokemon class in a image tag for the pokeball. I then edited both of those classes to at the center of the stage with a VS text in-between them.

Next I wanted to add a play button to start the game and have two pokeballs to shake. I found an example to make and element shake in CSS. So I created a variable called playerPokemonImg and computerPokemonImg and used document.querySelector() on both variables and set them to .PlayerPokemon and .ComputerPokemon. Then in CSS I created two new classes in CSS called pokemonball and pokemonball1 both with the properties animation: computerShake 0.7s ease infinite animation: playerShake 0.7s ease infinite. I also needed to use @keyframes with the names computerShake and playerShake. Then In JavaScript I use both playerPokemonImg.classList.add("pokemonball1") and computerPokemonImg.classList.add("pokemonball") to make the pokeballs shake after pressing play button.

Next, I created an if statement to decide the winner by checking the types of player pokemon and computer pokemon. Then display and alert message to the screen stating if the player won, lost or tie. I then decided I wanted to add music to my game and have it play when the player press play and when the player wins and loses. To do that I needed to create an array with an object inside of it with the path of the audio files and use the Audio Method. Once that was done I create a function that called playMusic that would take the name of audio into a if statement and select song based off the name. I also added sound to play as pokemon came out the pokeball.

Next, I realized I needed to change the time when the alert would appear on the screen. Before once the player selected a pokemon the computer selected a pokemon the alert message would immediately appear and state the outcome. So I found a function called setTimeOut() and I used this function to display the alert message after a few milliseconds.

Lastly I added a play again button to display after the player won, lost or draw. I created a new eventlistener to refresh the page for the player to play again.

This was a fun and challenging game to make. I learn a lot more about JavaScript, nearly 70% of this project was done just using JavaScript which was pretty surprising to me. It also made me realize I still have a lot to learn.

---

## Acknowledgements

- [Music](KHInsider using website https://downloads.khinsider.com/game-soundtracks/album/pokemon-red-green-blue-yellow and https://mixkit.co/free-sound-effects/lose/z)
- [Background-image](Reddit user WaveofHope34)
- [Pokemon-images](All images came from https://www.pngegg.com/ and Thanks to Arnaldo Pires)
- [Pokeball-images](poke ball icon by Icons8 https://icons8.com/icons/set/poke-ball)
- [How-to-make-element-to-something-shakes](infinite and @keyframes came from By CodingNepal https://www.codingnepalweb.com/rock-paper-scissors-game-javascript/
  )
- Instructor Kasper for helping me discover you can really make anything in JavaScript and with code placement
- [awesome-readme](https://github.com/tishana/tower-of-hanoi/blob/master/README.md)
