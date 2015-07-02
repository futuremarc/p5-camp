//INITIALIZE VARIABLES HERE

function setup(){
	//THIS HAPPENS ONCE
	createCanvas(640,360);
}

function draw(){
	//AFTER SETUP, THIS HAPPENS OVER AND OVER AGAIN
	background(255);
	stroke(0);
	line(320,0,320,360);
	line(0,180,640,180);

	//fill a black color
	noStroke();
	fill(0);

	//depending on the mouse location, a different rectangle will be displayed
	
	if (mouseX < 320 && mouseY < 180){
		rect(0,0,320,180);
	} else if (mouseX > 320 && mouseY < 180){
		rect(320,0,320,180);
	} else if (mouseX < 320 && mouseY > 180){
		rect(0,180,320,180);
	} else if (mouseX > 320 && mouseY > 180){
		rect(320,180,320,180);
	}
	
}