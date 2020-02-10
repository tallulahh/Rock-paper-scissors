var options = ["rock", "paper", "scissors"];
var results = "";

function play() {
  clear();
  var show = document.getElementById("gameSection");
  show.style.visibility = "visible";
  var playerOneRandom = Math.floor(Math.random() * 3);
  var playerTwoRandom = Math.floor(Math.random() * 3);
  var playerOneResult = options[playerOneRandom];
  var playerTwoResult = options[playerTwoRandom];
  var image1 = playerOneResult + ".jpg";
  var imageSource1 = "images/" + image1;
  var image2 = playerTwoResult + ".jpg";
  var imageSource2 = "images/" + image2;
  para1 = document.createElement("p");
  para1.innerHTML = playerOneResult;
  document.getElementById("playerOne").appendChild(para1);
  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", imageSource1);
  para2 = document.createElement("p");
  para2.innerHTML = playerTwoResult;
  document.getElementById("playerTwo").appendChild(para2);
  var img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", imageSource2);
  var compare = function(playerOneResult, playerTwoResult) {
    if (playerOneResult === playerTwoResult) {
      return "It's a tie!";
    }
    if (playerOneResult === "rock") {
      if (playerTwoResult === "scissors") {
        // rock wins
        return "Player 1 wins!";
      } else {
        // paper wins
        return "Player 2 wins!";
      }
    }
    if (playerOneResult === "paper") {
      if (playerTwoResult === "rock") {
        // paper wins
        return "Player 1 wins!";
      } else {
        // scissors wins
        return "Player 2 wins!";
      }
    }
    if (playerOneResult === "scissors") {
      if (playerTwoResult === "rock") {
        // rock wins
        return "Player 2 wins!";
      } else {
        // scissors wins
        return "Player 1 wins!";
      }
    }
  };
  results = compare(playerOneResult, playerTwoResult);
  resultText = document.createElement("p");
  resultText.innerHTML = results;
  document.getElementById("result").appendChild(resultText);
};

function clear() {
  var element = document.getElementById("playerOne");
  element.innerHTML = "";
  var element2 = document.getElementById("playerTwo");
  element2.innerHTML = "";
  var element3 = document.getElementById("result");
  element3.innerHTML = "";
};
