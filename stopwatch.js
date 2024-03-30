let stopwatchInterval;
let startTime;
let elapsedTime = 0;
let running = false;

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(updateDisplay, 10);
        running = true;
        document.getElementById('startBtn').innerText = 'Resume';
        document.getElementById('pauseBtn').disabled = false;
    } else {
        clearInterval(stopwatchInterval);
        running = false;
        document.getElementById('startBtn').innerText = 'Start';
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    running = false;
    document.getElementById('startBtn').innerText = 'Resume';
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    running = false;
    elapsedTime = 0;
    updateDisplay();
    document.getElementById('startBtn').innerText = 'Start';
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('lapTimes').innerHTML = '';
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    let formattedTime = formatTime(elapsedTime);
    document.querySelector('.display').innerText = formattedTime;
}

function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let centiseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}:${centiseconds}`;
}
