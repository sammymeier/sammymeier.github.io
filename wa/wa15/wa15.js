 // Player name
 var player1 = "Player 1";
 var player2 = "Player 2";

 var diceImages = ["https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png", "https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png"];

 // Function to change player name
 function editNames() {
     player1 = prompt("Change Player1 name");
     player2 = prompt("Change player2 name");

     document.querySelector("p.Player1").innerHTML = player1;
     document.querySelector("p.Player2").innerHTML = player2;
 }

 // Function to roll dice
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        // Select random dice image for each player
        var randomIndex1 = Math.floor(Math.random() * diceImages.length);
        var randomIndex2 = Math.floor(Math.random() * diceImages.length);
        var diceImage1 = diceImages[randomIndex1];
        var diceImage2 = diceImages[randomIndex2];

        document.querySelector(".img1").setAttribute("src", diceImage1);
        document.querySelector(".img2").setAttribute("src", diceImage2);

        // Compare dice rolls and determine winner
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = (player2 + " WINS!");
        } else {
            document.querySelector("h1").innerHTML = (player1 + " WINS!");
        }
    }, 2500);
}
