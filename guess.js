var questions = [["Do cars run on dragon tears?", "no"],
                 ["Is the best flavor of green tea the raspberry flavor?", "yes"],
                 ["Do dogs enjoy human pain like cats do?", "no"],
                 ["Is coming questions for the game harder and more time consuming than coding the game itself?", "yes"]];

window.onload = function() {
  for (var i = 0;i < questions.length;i++)
    document.getElementById("questionDisp").innerHTML += questions[i][0]+"<br>";
}

function guessingGame() {
  var username = prompt("What is your name?");

  alert("Welcome to the game "+username+"!");
  alert("You will now be asked a series of questions to respond yes or no to.");

  for (var i = 0;i < questions.length;) {
    var response = prompt(questions[i][0]).toLowerCase();

    if (response === questions[i][1]) {
      alert("Congratulations "+username+"! That is correct.");
      questions[i][2] = "correct";
      i++;
    } else if (response === "no" || response == "yes") {
      alert("Sorry "+username+". That is incorrect.");
      questions[i][2] = "incorrect";
      i++;
    } else {
      alert("Please enter either yes/no.");
      continue;
    }
  }
}
