var timerEl = document.getElementById("timer"); //for timer countdown
var msgDiv = document.querySelector("#msg"); //for 'correct' or 'incorrect' message after answer chosen


//NEEDS MORE WORK
// Timer that counts down from 70

function timer() {
  var timeLeft = 70;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeLeft--;
    } else if (timeLeft === 1) {
      timeLeft--;
    } else {
      timerEl.textContent = 'boom';
      clearInterval(timeInterval);
    }
  }, 1000);
}
timer();




//Questions
//Commonly used data types DO NOT include:
//1. strings
//2. booleans
//3. alerts
//4. numbers
//The condition in an if/else statement is enclosed with _____.
//1. quotes
//2. curly brackets
//3. parantheses
//4. square brackets
//Arrays in JavaScript can be used to store _____.
//1. numbers and strings
//2. other arrays
//3. booleans
//4. all of the above
//String values must be enclosed within _______ when being assigned to variables.
//1. commas
//2. curly brackets
//3. quotes
//4. parentheses
//A very useful tool used during development and debugging for printing content to the debugger is:
//1. JavaScript
//2. terminal/bash
//3. for loops
//4. console.log



//building the 'correct' or 'incorrect message after an answer is chosen
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

  chosenAnswer.addEventListener("click", function(event) {
    event.preventDefault();
  
    var correct = document.querySelector("#CorrectAns").value;
    var incorrect = document.querySelector("#incorrectAns").value;
  
    if (chosenAnswer == true) {
      displayMessage("error", "Incorrect Answer");
    } else {
      displayMessage("success", "Correct Answer");
  
      localStorage.setItem("correct", correct);
      localStorage.setItem("incorrect", incorrect);
    }
  });