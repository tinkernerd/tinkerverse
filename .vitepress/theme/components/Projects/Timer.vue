<template>
  <div class="timer-container">
    <h1>Timer</h1>
    <div class="timer-display">
      <input
        id="minutesBox"
        type="number"
        value="1"
        min="0"
        max="59"
        step="1"
        aria-label="Minutes"
      />
      <span class="separator">:</span>
      <input
        id="secondsBox"
        type="number"
        value="15"
        min="0"
        max="59"
        step="1"
        aria-label="Seconds"
      />
    </div>
    <div class="labels">
      <span>Minutes</span>
      <span>Seconds</span>
    </div>
    <button id="runPauseButton" class="control-button">
      Start / Pause
    </button>
  </div>
</template>

<script>
class Timer {
  constructor(min, sec) {
    this.minutes = parseInt(min, 10);
    this.seconds = parseInt(sec, 10);
    this.intervalID = null;
  }

  runPause(minBox, secBox) {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    } else {
      this.intervalID = setInterval(() => {
        this.countdown(minBox, secBox);
      }, 1000);
    }
  }

  countdown(minBox, secBox) {
    if (this.seconds > 0) {
      this.seconds -= 1;
    } else if (this.minutes > 0) {
      this.minutes -= 1;
      this.seconds = 59;
    } else {
      clearInterval(this.intervalID);
      this.intervalID = null;
      alert("Time's up!");
    }

    minBox.value = this.minutes.toString().padStart(2, "0");
    secBox.value = this.seconds.toString().padStart(2, "0");
  }
}

export default {
  mounted() {
    const minBox = document.getElementById("minutesBox");
    const secBox = document.getElementById("secondsBox");
    const runPauseButton = document.getElementById("runPauseButton");

    const myTimer = new Timer(minBox.value, secBox.value);

    minBox.addEventListener("change", () => {
      myTimer.minutes = parseInt(minBox.value, 10) || 0;
    });

    secBox.addEventListener("change", () => {
      myTimer.seconds = parseInt(secBox.value, 10) || 0;
    });

    runPauseButton.addEventListener("click", () => {
      myTimer.runPause(minBox, secBox);
    });
  },
};
</script>

<style scoped>
/* Global Styles */
.timer-container {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Timer Display */
.timer-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

input[type="number"] {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

input[type="number"]:focus {
  border-color: #387c3b;
}

.separator {
  font-size: 2rem;
}

/* Labels */
.labels {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 10px;
  font-size: 0.9rem;
}

/* Control Button */
.control-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background: #387c3b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.control-button:hover {
  background: #2d5d2b;
}

.control-button:active {
  background: #1e401e;
}
</style>
