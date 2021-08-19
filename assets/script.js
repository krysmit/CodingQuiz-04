var timerEl = document.getElementById("timer"); //for timer countdown
var msgDiv = document.querySelector("#msg"); //for 'correct' or 'incorrect' message after answer chosen
var chosenAnswer //var to collect which answer was chosen by user
var rootEl = $('#root'); //the quiz box where intro, Qs and As will appear
var quesEl = $('<h2>');
var ansEl = $('<p>');
var currentQuest = 0
var questions = [
  {
    Q: "Commonly used data types DO NOT include:",
    ch1: "strings",
    ch2: "booleans",
    ch3: "alerts",
    ch4: "numbers",
    ans: 3
  },
  {
    Q: "The condition in an if/else statement is enclosed with _____.",
    ch1: "quotes",
    ch2: "curly brackets",
    ch3: "parantheses",
    ch4: "square brackets",
    ans: 3
  }
]
var quizbox = document.getElementById("quizbox");
var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var mainbutton = document.querySelector(".mainbutton")
quizbox.style.display = "none";
mainbutton.addEventListener('click', function (event) {
  event.preventDefault()
  quizbox.style.display = "block";
  mainbutton.style.display = "none";
  dispQuest()
})

function dispQuest() {
  question.innerText = questions[currentQuest].Q
  choice1.textContent = questions[currentQuest].ch1
  choice2.innerHTML = questions[currentQuest].ch2
  choice3.innerText = questions[currentQuest].ch3
  choice4.innerText = questions[currentQuest].ch4
}

//NEEDS MORE WORK - countdown working, but not showing
// Timer that counts down from 60
function timer() {
  var timeLeft = 5;
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



//Quiz title page
//how to compile this title page and each question as it's own chunk to hide/display when needed?
quesEl.text('Coding Quiz Challenge');
quesEl.addClass('titleques');
ansEl.text('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
ansEl.addClass('bodyansw');
quesEl.append(ansEl);
rootEl.append(quesEl);

//when button is clicked, next question appears and title page disappears



$("#hide").click(function () {
  $("p").hide();
});

$("#show").click(function () {
  $("p").show();
});





// Q3
// Arrays in JavaScript can be used to store _____.
// 1. numbers and strings
// 2. other arrays
// 3. booleans
// 4. all of the above

// Q4
// String values must be enclosed within _______ when being assigned to variables.
// 1. commas
// 2. curly brackets
// 3. quotes
// 4. parentheses

// Q5
// A very useful tool used during development and debugging for printing content to the debugger is:
// 1. JavaScript
// 2. terminal/bash
// 3. for loops
// 4. console.log




//building the 'correct' or 'incorrect message after an answer is chosen
/*function displayMessage(type, message) {
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
      localStorage.setItem("correct" && "incorect", JSON);
    }
  }); */