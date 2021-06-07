let birdY, fallSpeed, gravity, pipePos

function setup() {
  createCanvas(800, 600)
  birdY = 300
  fallSpeed = -5
  gravity = 0.3
  
  pipePos = width
}

function draw() {
  background(220)
  ellipse(200, birdY, 50, 50)
  birdY += fallSpeed
  fallSpeed += gravity
  
  // let the bird bounce off bottom
  if (birdY + 25 > height) {
  fallSpeed = -fallSpeed * 0.8
}
  
  // draw the moving pipe
  rect(pipePos, 0, 50, 250)
rect(pipePos, 350, 50, height - 350)
  pipePos -= 1
  
  if (pipePos < -50) {
  pipePos = width
}


}

function keyPressed() {
  fallSpeed = -10
}

