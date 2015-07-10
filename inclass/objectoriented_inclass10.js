var myEl;
var ls = [];

function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	for (var i = 0;i < 300; i++){
		ls.push(new MyEllipse(random(windowWidth),random(windowHeight), random(10,200)));
	}
	
}

function draw(){
	background(0)
	for (var i = 0; i < ls.length; i++){
		ls[i].draw();
		ls[i].move();
	}
}

function MyEllipse(x, y, size){
	this.x = x;
	this.y = y;
	this.size = size;
}

MyEllipse.prototype.draw = function(){
	ellipse(this.x,this.y,this.size,this.size);
}

MyEllipse.prototype.move = function(){
	this.x+= random(-1,1);
	this.y+= random(-1,1)	;
}