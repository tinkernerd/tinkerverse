---
title: Bouncing Balls
outline: deep
---
<script setup>
import BouncingBalls from '@theme/components/Projects/BouncingBalls.vue'
</script>

# Bouncing Balls

## Project Summary:

The "Bouncing Balls" project is a fun and interactive example that showcases how to create moving elements within a defined container using JavaScript. The project dynamically generates balls that bounce within the boundaries of a container, with velocity and direction changing upon collision with the walls. This project is a great way to understand concepts like object-oriented programming, DOM manipulation, and basic animation.

## Working Example:

<BouncingBalls/>

## Explanation:

This project is built using HTML, JavaScript, and CSS to create a responsive and visually appealing animation of bouncing balls. Here's a detailed explanation of each component:

### HTML Structure

The HTML structure defines the container for the bouncing balls and a button to add new balls dynamically.

```html
<div class="balls">
  <h1>Bouncing Balls</h1>
  <div id="box"></div>
  <button id="addBall">Add Ball</button>
</div>
```

- **`<div class="balls">`**: Acts as the wrapper for the project layout.
- **`<div id="box">`**: The container where the balls will bounce.
- **`<button id="addBall">`**: A button to add new balls to the container.

### JavaScript Code Explanation

The JavaScript code is responsible for creating, styling, and animating the balls within the container. Here's a breakdown:

#### Constants

```javascript
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels
```

- Define the size of the balls and container dimensions.

#### Ball Class

```javascript
class Ball {
  constructor(size) {
    this.radius = size;
    this.xPos = null;
    this.yPos = null;
    this.xVelocity = null;
    this.yVelocity = null;
  }

  moveWithin(container) {
    // Check for collisions with the container walls
    if (this.yPos <= 0 || this.yPos + this.radius >= container.height) {
      this.yVelocity = -this.yVelocity;
    }
    if (this.xPos <= 0 || this.xPos + this.radius >= container.width) {
      this.xVelocity = -this.xVelocity;
    }

    // Update position
    this.xPos += this.xVelocity;
    this.yPos += this.yVelocity;
  }
}
```

- **Constructor**: Initializes ball properties like radius, position, and velocity.
- **`moveWithin` Method**: Handles collision detection and updates the ball's position based on its velocity.

#### Adding Balls Dynamically

```javascript
addBallButton.addEventListener("click", () => {
  const ballElement = document.createElement("div");
  ballElement.className = "ball";
  ballElement.style.width = `${BALL_RADIUS}px`;
  ballElement.style.height = `${BALL_RADIUS}px`;

  const newBall = new Ball(BALL_RADIUS);
  newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
  newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
  newBall.xVelocity = rand(-5, 5);
  newBall.yVelocity = rand(-5, 5);

  ballElement.style.left = `${newBall.xPos}px`;
  ballElement.style.top = `${newBall.yPos}px`;

  boxElement.appendChild(ballElement);

  setInterval(() => {
    newBall.moveWithin({ width: BOX_WIDTH, height: BOX_HEIGHT });
    ballElement.style.left = `${newBall.xPos}px`;
    ballElement.style.top = `${newBall.yPos}px`;
  }, 25);
});
```

- A button click creates a new `Ball` object, assigns it random velocity, and appends it to the container.
- The ball's position is updated at regular intervals using `setInterval`.

#### Random Velocity Function

```javascript
function rand(minVal, maxVal) {
  return Math.random() * (maxVal - minVal) + minVal;
}
```

- Generates a random value for the ball's velocity within a specified range.

### CSS Styling

```css
.balls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#box {
  width: 800px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border: 2px solid black;
}

.ball {
  position: absolute;
  border-radius: 50%;
  background-color: red;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

- **`.balls`**: Centers the layout.
- **`#box`**: Defines the container's dimensions and appearance.
- **`.ball`**: Styles the balls with a circular shape and shadow.

---

This project demonstrates how to combine dynamic DOM manipulation, object-oriented programming, and styling to create an engaging interactive experience.