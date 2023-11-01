let weather;
let country;

function preload() {
  weather = loadJSON('https://api.weatherapi.com/v1/forecast.json?key=89ea8c60f93041799fd194624230111&q=London&days=1&aqi=no&alerts=no');
}

function setup() {
  createCanvas(500, 500);
  // put setup code here
  country = weather.location.name;
}

function draw() {
  background(210);
  // put drawing code here
  text(country, 250, 250);
}
