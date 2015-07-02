//INITIALIZE VARIABLES HERE

var x = 0;



function setup(){
	//THIS HAPPENS ONCE
	createCanvas(640,360);
}

function draw(){
	//AFTER SETUP, THIS HAPPENS OVER AND OVER AGAIN
	background(255);

	ellipse(x, height/2,50,50);
	x = x + 1;
}