# DiceeGameChallenge

## Select and manipulate random elements

## What the Code Does:

- 🎲 Two dice are rolled (one for each player).
- 🎰 The images of the dice on the webpage are updated to show what each player rolled.
- 🏆 A message is displayed to show who won — Player 1, Player 2, or if it’s a draw.

## Code Breakdown:

- This function generates a random integer from 1 to 6 — like rolling a die.
```javascript
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
```

- This function updates the left-side image (Player 1's dice) based on number1.
```javascript
function changeImageToRandomDiceeLeft(number1) {
    var imagePath = "./Assests/Images/dice" + number1 + ".png";
    document.querySelector(".img1").setAttribute("src", imagePath);
}
```

-  This function updates the right-side image (Player 2's dice) based on number2.
```javascript
function changeImageToRandomDiceeRight(number2) {
    var imagePath = "./Assests/Images/dice" + number2 + ".png";
    document.querySelector(".img2").setAttribute("src", imagePath);
}
```

- This function rolls both dice using getRandomNumber(), stores the values in number1 and number2, and updates the dice images.
```javascript
function rollDiceAndDisplayWinner() {
    var number1 = getRandomNumber();
    var number2 = getRandomNumber();

    changeImageToRandomDiceeLeft(number1);
    changeImageToRandomDiceeRight(number2);
```

- To compares both dice rolls:
    - If Player 1 rolls higher → Player 1 wins
    - If Player 2 rolls higher → Player 2 wins
    - If equal → it's a draw
```javascript
    if (number1 > number2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (number2 > number1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
}
```

- To executed the whole dice game once when the page loads.
```
rollDiceAndDisplayWinner();
```
