---
title: Timer
outline: deep
---
<script setup>
import Timer from '@theme/components/Projects/Timer.vue'
</script>

# Timer

## Project Summary:

This timer project demonstrates a simple countdown timer where the user can set minutes and seconds, start or pause the timer, and receive a notification when the countdown reaches zero. It highlights the use of JavaScript for dynamic time calculations, DOM manipulation, and modern styling to create an interactive and user-friendly interface.

## Working Example:
<Timer/>

## Explanation:

This project is structured using a combination of HTML for the layout, JavaScript for the logic, and CSS for styling. The Timer object encapsulates the timer logic, allowing for clean and reusable code. Here's a breakdown:

### HTML Structure

```html
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
```

#### Explanation:
1. **Timer Container**: The outermost `<div>` groups all elements for better layout and styling.
2. **Timer Display**: The timer inputs (`minutesBox` and `secondsBox`) allow users to set the desired countdown time.
3. **Separator**: The `:` separator visually divides the minute and second input fields.
4. **Labels**: Provide context for the inputs to improve accessibility and clarity.
5. **Run/Pause Button**: Toggles between starting and pausing the timer.

---

### JavaScript Code Explanation

The logic of the timer is implemented in a class called `Timer`, which encapsulates all behavior, ensuring the code is modular and reusable.

#### Timer Class

```javascript
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
```

#### Explanation:
1. **Constructor**:
   - Initializes the timer's minutes and seconds, and sets the interval ID to `null` (indicating the timer is paused initially).

2. **`runPause` Method**:
   - Starts or pauses the timer by toggling the `intervalID`. If the timer is running, it pauses by clearing the interval. If paused, it starts the countdown.

3. **`countdown` Method**:
   - Decreases the time by one second. If seconds reach zero and there are remaining minutes, it decrements the minutes and resets seconds to 59. If the timer hits `0:0`, it stops and alerts the user.

#### Event Listeners

```javascript
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
}
```

#### Explanation:
1. **`mounted` Hook**:
   - Initializes the DOM elements and sets up event listeners for user interaction.
2. **Input Change Listeners**:
   - Updates the timer's internal values whenever the user modifies the minute or second input.
3. **Run/Pause Button Listener**:
   - Toggles the timer's state between running and paused by invoking the `runPause` method.

---

### Styling Explanation

```css
.timer-container {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

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

.separator {
  font-size: 2rem;
  color: #555;
}

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
```

#### Explanation:
1. **Container**:
   - Centers the timer visually with a clean, modern box layout and shadow for depth.
2. **Input Fields**:
   - Styled for readability and usability, with smooth focus transitions.
3. **Button**:
   - Highlights user interactivity with hover effects and a bold color scheme.

---

This Timer project is a perfect example of combining modern JavaScript, CSS, and HTML to build an interactive and stylish web component.