const hiddenNum = document.querySelector(".number");
let message = document.querySelector(".message");
let scoreValue = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let totalScore = 0;

// Game Logic
checkBtn.addEventListener('click', () => {
    // Converting the user guess from string to number to compare the value
    const guess = Number(document.querySelector(".guess").value);
    // If guess is empty
    if (!guess) {
        message.textContent = "Please Guess!";
        // If Number and guess are same
    } else if (guess === number) {
        message.textContent = "🎉 Correct Number!";
        body.style.backgroundColor = '#60b347';
        hiddenNum.textContent = number;     // Change the color of body background
        hiddenNum.style.width = '30rem';   // Change the width of hidden number
        if (score > totalScore) {
            highScore.textContent = score;
        }
        // If guess is greater than number
    } else if (guess > number) {
        if (score >= 1) {
            message.textContent = "📈 Too High!";
            score = score - 1;
            scoreValue.textContent = score;
        } else {
            message.textContent = "💥 You Lose The Game!"
        }
    } else if (guess < number) {
        if (score >= 1) {
            message.textContent = "📉 Too Low!";
            score = score - 1;
            scoreValue.textContent = score;
        } else {
            message.textContent = "💥 You Lose The Game!"
        }
    }  
});

// Again Button logic:- Restoring all things
againBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#222';
    score = 20;
    number = Math.floor(Math.random() * 20) + 1;
    scoreValue.textContent = score;
    hiddenNum.textContent = '?';
    hiddenNum.style.width = '15rem';
    document.querySelector(".guess").value = '';
    message.textContent = 'Start guessing...';
});