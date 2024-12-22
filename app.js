document.addEventListener("DOMContentLoaded", () => {
    const live = document.getElementById("lives");
    const message = document.getElementById("message");
    const guessInput = document.getElementById("guess");
    const submitBtn = document.getElementById("submit");
    const restartBtn = document.getElementById("restart");

    let lives = 3;
    let randomNumber = generateRandomNumber();
    let gameOver = false;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    // let res = generateRandomNumber()
    // console.log(res);
    

    function handleGuess() {
        const guess = parseInt(guessInput.value);
        console.log(guess)
        if (gameOver || isNaN(guess) || guess < 1 || guess > 10) {
            return;
        }

        if (guess === randomNumber) {
            message.textContent = "You Win!";
            message.style.color = "green";
            message.style.fontSize = "20px"
            gameOver = true;
            restartBtn.classList.remove("hidden");
            submitBtn.classList.add("hidden")
        } else {
            lives--;
            updateLives();
            if (lives == 0) {
                message.textContent = "Game Over! The number was " + randomNumber;
                message.style.color = "red";
                gameOver = true;
                submitBtn.classList.add("hidden")
                restartBtn.classList.remove("hidden");
            } else {
                message.textContent = guess > randomNumber ? "Too high! Try again." : "Too low! Try again.";
                message.style.color = "red";
                message.style.textDecoration = "underline";
                message.style.fontSize = "20px";
                guessInput.value = ""
            }
        }
    }
    // console.log(handleGuess());

    function updateLives() {
        live.textContent = `Lives: ${'❤️'.repeat(lives)}`;
    }
    // console.log(updateLives());

    function restartGame() {
        lives = 3;
        randomNumber = generateRandomNumber();
        gameOver = false;
        updateLives();
        message.textContent = "";
        restartBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden")
        guessInput.value = "";
    }
    // console.log(restartBtn());


    submitBtn.addEventListener("click", handleGuess);
    restartBtn.addEventListener("click", restartGame);
});
