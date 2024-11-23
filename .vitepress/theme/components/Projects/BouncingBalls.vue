<template>
  <div class="balls">
    <h1>Bouncing Balls</h1>
    <div id="box"></div>
    <button id="addBall">Add Ball</button>
  </div>
</template>

<script>
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

// Ball class
class Ball {
  constructor(size) {
    this.radius = size;
    this.xPos = null;
    this.yPos = null;
    this.xVelocity = null;
    this.yVelocity = null;
  }

  moveWithin(container) {
    let ballTop = this.yPos;
    let ballLeft = this.xPos;
    let ballBottom = this.yPos + this.radius;
    let ballRight = this.xPos + this.radius;

    if (ballTop <= 0 || ballBottom >= container.height) {
      this.yVelocity = -this.yVelocity;
    }

    if (ballLeft <= 0 || ballRight >= container.width) {
      this.xVelocity = -this.xVelocity;
    }

    this.xPos += this.xVelocity;
    this.yPos += this.yVelocity;
  }
}

// Helper function for random values
function rand(minVal, maxVal) {
  return Math.random() * (maxVal - minVal) + minVal;
}

export default {
  mounted() {
    const boxElement = document.getElementById("box");
    const addBallButton = document.getElementById("addBall");

    // Initialize container styles
    boxElement.style.width = `${BOX_WIDTH}px`;
    boxElement.style.height = `${BOX_HEIGHT}px`;
    boxElement.style.position = "relative";
    boxElement.style.overflow = "hidden";
    boxElement.style.border = "2px solid black";

    // Add ball functionality
    addBallButton.addEventListener("click", () => {
      const ballElement = document.createElement("div");
      ballElement.className = "ball";
      ballElement.style.width = `${BALL_RADIUS}px`;
      ballElement.style.height = `${BALL_RADIUS}px`;
      ballElement.style.borderRadius = "50%";
      ballElement.style.position = "absolute";
      ballElement.style.backgroundColor = `hsl(${rand(0, 360)}, 70%, 50%)`;

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
  },
};
</script>

<style scoped>
.balls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#box {
  margin-top: 20px;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #387c3b; /* Your preferred green */
    color: white;
    transition: background-color 0.3s;
}
   


.ball {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
