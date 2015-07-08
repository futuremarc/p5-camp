var amp;
var soundFile;

var playing = false;

var smoothing = 0;
var threshold = 0.1;
var cutoff = 0;
var addThresh = 0.5;
var decayThresh = 0.8;

function preload() {
	soundFile = loadSound('Broke_For_Free_-_01_-_Night_Owl.mp3');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
	rectMode(CENTER);

	amp = new p5.Amplitude();
	amp.setInput(soundFile);
}

function draw(){
	background(0, 20);
	fill(255, 255, 0);

	amp.smooth(smoothing);
	var level = amp.getLevel();

	var size = map(level, 0, 0.6, 100, 450);

	if (level > threshold + cutoff) {
		var x = random(width);
		var y = random(height);
		rect(x, y, size, size);
		cutoff = addThresh;
	}

	cutoff = cutoff * decayThresh;

}

function keyPressed() {
	if (playing == true) {
		soundFile.pause();
		playing = false;
	} else {
		soundFile.play();
		playing = true;
	}
}

