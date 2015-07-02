//mouseX
//mouseY
//pmouseX
//pmouseY
//width
//height
//windowWidth
//windowHeight
//noise()
//random(min,max)
//map(whatDoYouWantMapped,0,width,0,255)


var colorMap;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	colorMap = map(mouseX,0,width,0,255);
	fill(colorMap);
	ellipse(mouseX,mouseY,random(50,100),random(50,100));
	console.log(mouseX);
}