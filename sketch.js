let birdY, fallSpeed, gravity, pipePos, pipeSpeed, score, gapSize, gapHeight;

function setup() {
  createCanvas(800, 600);
  // birdY = 300;
  // fallSpeed = -5;
  // gravity = 0.1;
  // score = 0;
  // pipePos = width;
  
  newGame();
}

function draw() {
  background(220);
  // add scoring
  text("score: " + score, 50, 200);

  ellipse(200, birdY, 50, 50);
  birdY += fallSpeed;
  fallSpeed += gravity;

  // let the bird bounce off bottom
  if (birdY + 25 > height) {
    fallSpeed = -fallSpeed * 0.8;
  }

  // draw the moving pipe
  // rect(pipePos, 0, 50, 250);
  // rect(pipePos, 350, 50, height - 350);
  
  rect(pipePos, 0, 50, gapHeight)
  rect(pipePos, gapHeight + gapSize, 50, height - (gapHeight + gapSize))

  pipePos += pipeSpeed;

  if (pipePos < -50) {
    score += 1
    pipePos = width;
    
    // increase difficulty
    pipeSpeed += -0.5
gravity += 0.01
  }
  
  // function takes seven paramters: rectX, rectY, rectWidth, rectHeight, circleX, circleY, circleDiameter
  if (collideRectCircle(pipePos, 0, 50, 250, 200, birdY, 50)) {
  // score = 0
    newGame()
}
  
  if (collideRectCircle(pipePos, 350, 50, height - 350, 200, birdY, 50)) {
  // score = 0
    newGame()
}

}

function keyPressed() {
  fallSpeed = -10;
}

function newGame() {
  birdY = 300
  fallSpeed = -5
  gravity = 0.3
  pipePos = width
  pipeSpeed = -4
  score = 0
  gapSize = 200;
  gapHeight = random(height - gapSize);
}

