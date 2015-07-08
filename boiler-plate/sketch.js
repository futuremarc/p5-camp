var mic;
var amp;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);

	mic = new p5.AudioIn();
	amp = new p5.Amplitude();

	amp.setInput(mic);
	mic.start();
}

function draw(){
	background(0);

	var level = amp.getLevel();

	console.log(level);
}

