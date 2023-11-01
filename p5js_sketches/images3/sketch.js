let img;

function preload() {
  img = loadImage('/assets/cat.jpg');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(125);
  tint(255, 0, 0);
  image(img, 0, 0, 250, 250);
}
