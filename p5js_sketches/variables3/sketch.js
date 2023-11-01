let circle_color = 50;

function setup() {
  createCanvas(500, 500);
}

function mousePressed() {
  circle_color = circle_color + 50;
}

function draw() {
  background(125);
  fill(circle_color);
  ellipse(mouseX, 250, 50);
}
