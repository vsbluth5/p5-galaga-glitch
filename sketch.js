let ship;
let projectiles;
let aliens;

function setup() {
  createCanvas(300, windowHeight - 20);
  ship = { x: width / 2, y: height - 50 };
  projectiles = [];
  aliens = [];
  for (let i = 0; i < 10; i++) {
    aliens.push(new Alien(random(width), random(100, 200)));
  }
}

function draw() {
  background(220);

  // draw ship suing triangle(x1, y1, x2, y2, x3, y3)
  triangle(ship.x, ship.y, ship.x - 35, ship.y + 30, ship.x + 35, ship.y + 30);

  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].move();
    projectiles[i].display();
    if (projectiles[i].y < -10) {
      projectiles.splice(i, 1);
    }

    aliens.forEach(alien => {
      alien.move();
      alien.display();
    });
  }
}

function fire() {
  projectiles.push(new Projectile(ship.x, ship.y));
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    ship.x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    ship.x += 10;
  } else if (key === " ") {
    fire();
    console.log("FIRE!");
  }
}

class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.y -= 5;
  }

  display() {
    rect(this.x, this.y, 4, 10);
  }
  
  checkHit() }
}

class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.status = "alive";
  }
  move() {
    this.x += random(-3, 3);
    if (this.x < 30) {
      this.x += 3;
    }
    if (this.x > width - 50) {
      this.x -= 3;
    }
  }
  display() {
    if (this.status === "alive") {
      rect(this.x, this.y, 20, 20);
    }
  }
}
