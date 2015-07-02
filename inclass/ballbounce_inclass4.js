//DECLARE or DECLARE AND INITIALIZE VARIABLES HERE

var x = 0;
var speed = 3;
 
function setup(){
	//THIS HAPPENS ONCE
	createCanvas(640,360);
}

function draw(){
	//AFTER SETUP, THIS HAPPENS OVER AND OVER AGAIN
	background(200);

	if (x > width || x < 0){
		speed = speed * -1;
	}

	noStroke();
	fill(0,200,0);
	ellipse(x, height/2,50,50);
	x = x + speed;

}