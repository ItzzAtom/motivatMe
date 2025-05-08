document.addEventListener("DOMContentLoaded", () => {
    const timerValue = document.getElementById("timer-value");
    const customMinutesInput = document.getElementById("custom-minutes");
    const setCustomTimeButton = document.getElementById("set-custom-time");
    const timerButtons = document.querySelectorAll(".timer-btn");
    const startPauseButton = document.getElementById("start-pause-btn");
    const bgButtons = document.querySelectorAll(".bg-btn");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    let timerSeconds = 300; // Default timer value (5:00)
    let timerInterval;
    let isRunning = false;

    // Update the timer display
    const updateTimerDisplay = () => {
        const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
        const seconds = (timerSeconds % 60).toString().padStart(2, "0");
        timerValue.textContent = `${minutes}:${seconds}`;
    };

    // Set custom time from user input
    setCustomTimeButton.addEventListener("click", () => {
        const customMinutes = parseInt(customMinutesInput.value);
        if (!isNaN(customMinutes) && customMinutes >= 0) {
            timerSeconds = customMinutes * 60;
            updateTimerDisplay();
        } else {
            alert("Please enter a valid number of minutes.");
        }
    });

    // Add time to the timer
    timerButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const additionalSeconds = parseInt(button.getAttribute("data-time"));
            timerSeconds += additionalSeconds;
            updateTimerDisplay();
        });
    });

    // Start or pause the timer
    startPauseButton.addEventListener("click", () => {
        if (isRunning) {
            clearInterval(timerInterval);
            startPauseButton.textContent = "▶"; // Change to play icon
        } else {
            timerInterval = setInterval(() => {
                if (timerSeconds > 0) {
                    timerSeconds--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval);
                    alert("Time's up!");
                }
            }, 1000);
            startPauseButton.textContent = "⏸"; // Change to pause icon
        }
        isRunning = !isRunning;
    });

    // Change background video
    bgButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const videoSrc = button.getAttribute("data-video");
            const bgVideo = document.getElementById("bg-video");
            bgVideo.querySelector("source").src = videoSrc;
            bgVideo.load();
            bgVideo.play();
        });
    });

    // Add tasks
    addTaskButton.addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task) {
            const li = document.createElement("li");
            li.textContent = task;
            taskList.appendChild(li);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });

    // Initialize timer display
    updateTimerDisplay();
});