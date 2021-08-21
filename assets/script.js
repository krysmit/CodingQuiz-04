var timerEl = document.getElementById("timer"); //for timer countdown
var chosenAnswer //var to collect which answer was chosen by user
var currentQuest = 0
var answer = document.getElementById("answer");
//turning the questions into a variable
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
var initials = document.getElementById("initials");
var quizbox = document.getElementById("quizbox");
var titlebox = document.getElementById("titlebox");
var highscorebox = document.getElementById("highscorebox");
var subinitbox = document.getElementById("subinitbox");
var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var mainbutton = document.querySelector(".mainbutton");
var highscorebutt = document.querySelector(".scorebutt")
var submitbutton = document.getElementById("submitbutton");
var userscore = 0;

//hide the initial and score submittion - hide the highscore box
subinitbox.style.display = "none";
highscorebox.style.display = "none";

//quiz page appears after clicking start
quizbox.style.display = "none";
mainbutton.addEventListener('click', function (event) {
  event.preventDefault();
  quizbox.style.display = "block";
  mainbutton.style.display = "none";
  dispQuest()
});


choice1.addEventListener("click", checkAnswer);
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);
choice4.addEventListener("click", checkAnswer);

//display the questions
function dispQuest() {
  question.innerText = questions[currentQuest].Q
  choice1.textContent = questions[currentQuest].ch1
  choice2.innerHTML = questions[currentQuest].ch2
  choice3.innerText = questions[currentQuest].ch3
  choice4.innerText = questions[currentQuest].ch4
}

//a function to check if the questions were answered correctly
function checkAnswer() {
  var userAnsw = this.getAttribute("data-value");
  console.log(userAnsw);
  if (userAnsw == questions[currentQuest].ans) {
    answer.innerText="correct";
    answer.style.fontStyle = "italic";
    console.log("correct answer");
  } else {
    answer.innerText="incorrect";
    answer.style.fontStyle = "italic";
    console.log("incorrect answer");
    timeLeft-=10;
  }
  console.log(timeLeft);
  if (currentQuest<questions.length-1) {
    currentQuest++;
    dispQuest()
  }else{
    userscore = timeLeft;
    console.log("userscore: ", userscore);
    quizbox.style.display = "none";
    subinitbox.style.display = "block"
  }
}

//function that pulls and creates score from timer
submitbutton.addEventListener("click", function(event) { 
  event.preventDefault();

    var initialscore = {
      score: userscore,
      initial: initials.value.trim()
    };
    
    localStorage.setItem("initialscore", JSON.stringify(initialscore));

    console.log(timeLeft);

    subinitbox.style.display = "none";
    highscorebox.style.display = "block";
    timerEl.style.display = "none";

    });

    highscorebutt.addEventListener("click", function(event) { 
      event.preventDefault();
      highscorebox.style.display = "block";
        });


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
    } else if (questions <= 0) {
    
    }else {
      timerEl.textContent = 'Time Is Up!!!';
      subinitbox.style.display = "block";
      clearInterval(timeInterval);
    }
  }, 1000);
};


