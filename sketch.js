
/* VELOCITY
let x;
let xVelocity;

function setup() {
  createCanvas(400, 400);
  x = 200;
  xVelocity = 5;
}

function draw() {
  ellipse(x, 50, 25, 25);
  x = x + xVelocity; // Change the position based on current velocity
}

// END OF VELOCITY 
*/

let y;
let yVelocity;
let gravity;

function setup() {
  createCanvas(400, 400);
  y = 0;
  yVelocity = 0;
  gravity = 0.5;
}

function draw() {
  ellipse(200, 50, 25, 25);
  y += yVelocity; // Change the position based on current velocity
  yVelocity += gravity; // Change the velocity based on gravity
  bounce(); 
}

function bounce() {
  if (y >= height) { // if the ball hits the bottom of the screen...
    yVelocity = -1 * yVelocity; // ...reverse its velocity.
  }
}

