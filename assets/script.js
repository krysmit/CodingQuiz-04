var timerEl = document.getElementById("timer"); //for timer countdown
var chosenAnswer //var to collect which answer was chosen by user
var currentQuest = 0
var answer = document.getElementById("answer");
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
  },
  {
    Q: "Arrays in JavaScript can be used to store _____.",
    ch1: "1. numbers and strings",
    ch2: "2. other arrays",
    ch3: "3. booleans",
    ch4: "4. all of the above",
    ans: 4
  },
  {
    Q: "String values must be enclosed within _______ when being assigned to variables.",
    ch1: "1. commas",
    ch2: "2. curly brackets",
    ch3: "3. quotes",
    ch4: "4. parentheses",
    ans: 3
  },
  {
    Q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    ch1: "1. JavaScript",
    ch2: "2. terminal/bash",
    ch3: "3. for loops",
    ch4: "4. console.log",
    ans: 4
  }
]
var score = 0;
var quizbox = document.getElementById("quizbox");
var titlebox = document.getElementById("titlebox");
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

choice1.addEventListener("click", checkAnswer);
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);
choice4.addEventListener("click", checkAnswer);

function dispQuest() {
  question.innerText = questions[currentQuest].Q
  choice1.textContent = questions[currentQuest].ch1
  choice2.innerHTML = questions[currentQuest].ch2
  choice3.innerText = questions[currentQuest].ch3
  choice4.innerText = questions[currentQuest].ch4
}
function checkAnswer() {
  var userAnsw = this.getAttribute("data-value");
  console.log(userAnsw);
  if (userAnsw == questions[currentQuest].ans) {
    answer.innerText="correct";
    console.log("correct");
  } else {
    answer.innerText="incorrect";
    console.log("incorrect");
    timeLeft-=10;
  }
  console.log(score)
  if (currentQuest<questions.length-1) {
    currentQuest++;
    dispQuest()
  }else{
    console.log("End");
    quizbox.style.display = "none";
  }
}

//after rnning out of Qs... display highsore area



// Timer that counts down from 60
document.getElementById("startTimer").addEventListener("click", timer);
var timeLeft = 60;
function timer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = 'Time Is Up!!!';
      clearInterval(timeInterval);
    }
  }, 1000);
};



