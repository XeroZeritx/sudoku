let timer = document.getElementById("timer-counter");
let seconds = 0;
let minutes = 0;
let timerInterval = null;

// Start the timer
function startTimer() {
    clearInterval(timerInterval);
    timer.textContent = "00:00";
    minutes = 0;
    seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}