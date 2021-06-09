let ship;
let projectiles;


function setup() {
  createCanvas(300, windowHeight-20)
  ship = {x: width / 2, y: height - 50};
  projectiles = [];
  
}

function draw() {
  background(220);
  projectile1.display();
  
  // draw ship suing triangle(x1, y1, x2, y2, x3, y3)
  triangle(ship.x, ship.y, ship.x - 35, ship.y + 30, ship.x + 35, ship.y + 30)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    ship.x -= 10
  } else if (keyCode === RIGHT_ARROW) {
    ship.x += 10
  } else if (key === ' '){
    fire();
  }
}

class Projectile {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  
  move() {
    this.y -= 5
  }
  
  display() {
    rect(this.x, this.y, 4, 10)
  }
}

function fire() {
  projectiles.push(new Projectile(ship.x, ship.y))
}


