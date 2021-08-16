var timerEl = document.getElementById("timer");

// Timer that counts down from 70
function countdown() {
  var timeLeft = 70;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}






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
