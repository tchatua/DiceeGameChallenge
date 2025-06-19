//Create a Random Number
function randomNumber() { 
    return Math.floor(Math.random() * 6) + 1;
}

// Change the left <img> to a random Dice based on a given number (randomNumber())
function changeImageToRandomDiceeLeft(number1) {
    var imagePath = "./Assests/Images/dice" + number1 + ".png";
    document.querySelector(".img1").setAttribute("src", imagePath);
}

// Change the right <img> to a random Dice based on a given number (randomNumber())
function changeImageToRandomDiceeRight(number2) {
    var imagePath = "./Assests/Images/dice" + number2 + ".png";
    document.querySelector(".img2").setAttribute("src", imagePath);
}

//place this image inside the left <img> element (Player 1)
function placeImageOnBothElements() {
    var number1 = randomNumber();
    var number2 = randomNumber();
    
    changeImageToRandomDiceeLeft(number1);
    changeImageToRandomDiceeRight(number2);

    if (number1 > number2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (number2 > number1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

placeImageOnBothElements();

