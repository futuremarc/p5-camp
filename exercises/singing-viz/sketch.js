var mic;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	background(0);
	fill(random(255), 100, 100);
	var diameter = map(mic.getLevel(), 0, 0.5, 1, 150);
	var yPos = map(mic.getLevel(), 0, 0.5, height, 0);
	ellipse(width / 2, yPos, diameter, diameter);
}