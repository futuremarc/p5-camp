function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	if (mouseIsPressed) {
		fill(random(255), 255, 255);
		var diameter = map(mouseY, 0, height, 1, 150);
		ellipse(mouseX, mouseY, diameter, diameter);
	}
}