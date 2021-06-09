let ship;


function setup() {
  createCanvas(300, windowHeight-20)
  ship = {x: width / 2, y: height - 50};
  
}

function draw() {
  background(220)
  triangle(ship.x, ship.y, ship.x - 35, ship.y + 30, ship.x + 35, ship.y + 30)
}
