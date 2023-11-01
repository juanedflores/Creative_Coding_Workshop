let img;

function preload() {
  img = loadImage('/assets/cat.jpg');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(125);
  image(img, 0, 0);
}
