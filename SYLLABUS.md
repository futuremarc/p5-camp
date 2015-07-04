# SYLLABUS

## OVERVIEW

This course is an introduction to creative coding with the [p5.js](http://p5js.org) JavaScript Library. It will cover the basics of programming through: drawing and animating in the browser, designing and building interactivity, manipulating and animating page structure, audio synthesis on the web, and music visualization. We will be using the textbook and examples from [Learning Processing](https://github.com/shiffman/LearningProcessing-p5.js) by Daniel Shiffman.

### CLASS 1: Introduction

* Software, creative coding, and the web
	* [What is creative coding?](http://reddit.com/r/creativecoding)
		* Programming as a creative discipline. 
		* Examples
			* [Processing Exhibition](https://processing.org/exhibition/)
			* [Shiffman's List](https://github.com/ITPNYU/ICM-2014/wiki/Projects)
			* [Arduino Examples](http://www.instructables.com/id/20-Unbelievable-Arduino-Projects/)
		* Creative coding with the web
			* [Jazz Computer](http://jazz.computer)
			* [Cabbibo](http://cabbi.bo/)
			* [Void](http://void.hi-res.net/)
			* [Three.JS](http://threejs.org)
			* [Super Sync Sports](https://chrome.com/supersyncsports/)
			* [p5 Gallery](http://p5js.org/gallery/)
		* [Net Art Grants](http://rhizome.org/commissions/grant/internet-art-microgrants-2015/)
	* [What is p5?](http://hello.p5js.org)
		* [Processing](http://processing.org)
	* What is coding?
		* Modern world is built on it
		* [Made With Code](https://www.madewithcode.com/)
		* Thinking like a computer
			* [A series of precise instructions](https://www.youtube.com/watch?v=xngWoocXYCo)
				* Robot waiter delivering food to guests
			* [Recipe](https://www.youtube.com/watch?v=UScm9avQM1Y)
				* List of ingredients and instructions
			* **IN-CLASS**: Create a list of instructions for each other to do in class. Try to be very specific.
	* Ideate
		* **IN-CLASS**: Split up into pairs and come up with some ideas of things to make with code.
* [Course overview](https://github.com/futuremarc/p5-creative-coding-course/blob/master/SYLLABUS.md#overview)

### CLASS 2: Drawing on the Canvas

* Course setup
	* [Download Boilerplate](https://github.com/futuremarc/p5-creative-coding-course/tree/master/boiler-plate) 
	* [Setting up p5.js](http://p5js.org/get-started/)
	* FTP Client: [Cyberduck](https://cyberduck.io/?l=en)
	* Text Editor: [Sublime Text](http://www.sublimetext.com/)
	* [Local Server Tutorial](https://github.com/processing/p5.js/wiki/Local-server)
		* PC: [WAMP](http://www.wampserver.com/en/)
		* Mac: Do a Spotlight Search for 'Terminal' and open up the program. Type 'cd', hit the spacebar and drag your folder containing index.html from your finder onto Terminal. Press enter. Now type 'python -m SimpleHTTPServer'. Then goto your browser and goto the address [http://localhost:8000](http://localhost:8000)
* [p5 Reference](http://p5js.org/reference/)
* Be comfortable not knowing everything all at once.
* Drawing 
	* `createCanvas()`
		* Where is (0,0)?
	* `ellipse(), line(), curve(), point(), quad(), rect(), triangle()`
	* `background(), fill(), noFill(), noStroke(), stroke()`
		* Color 
			* `background(255)` (white) 
			* `background(0)` (black)
			* `background(255, 0, 0)` (bright red)
			* `fill(25, 50, 75, 255)` (100% opacity)
* **IN-CLASS**: Draw onto the screen using the shapes and colors learned. Paint anything your heart desires: a creature, beetle, self-portrait, the sky, flowers, a robot, an abstract image.
* `ellipseMode()`
* `rectMode()`

### CLASS 3: Animating on the Canvas

* [`colorMode()`](http://p5js.org/reference/#/p5/colorMode)
	* HSB: Hue, Saturation, Brightness
	* RGB: Red, Green, Blue
* Other ways to write `fill()`
	* transparency
* Code Blocks { }
	* `setup(){}` runs once in the beggining.
	* `draw(){}` when setup is finished it runs over and over again.
* [Variables](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp04_variables)
	* Declare
	* Initialize
	* Use
	* 'Built-in' variables
		* `width, height, windowWidth, windowHeight`
* [Drawing with the mouse](https://github.com/futuremarc/p5-creative-coding-course/tree/master/exercises/drawing-with-the-mouse)
* Variation
	* `mouseX, mouseY`
	* `pmouseX, pmouseY`
		* `line(pmouseX, pmouseY, mouseX, mouseY)`
	* [`random()`](http://p5js.org/reference/#/p5/random)
	* `x = x + 1` shorthand: `x+=1`
	* [`map()`](http://p5js.org/reference/#/p5/map)
	* Debugging
		* [Chrome Tools](https://developer.chrome.com/devtools/docs/console) (OPTION COMMAND J)
		* `console.log()`
	* **IN-CLASS**: Create a sketch using variables in your code. You can start something new or pick up where you've left off.

### CLASS 4: Conditionals

* Review
	* `Variables`
		* Declare, Initialize, Use
		* Built-in variables
	* Types
		* `Boolean`
		* `String`
		* `Number`
	* How to make something in the center of screen?
* [Conditionals](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp05_conditionals)
	* Boolean expressions
		* I am hungry (true)
		* I am afraid of computer programming (false)
		* I am funny (false)
		* 15 is greater than 20 (false)
		* 5 equals 5 (true)
		* 32 is less than or equal to 33 (true)
	* Using a variable to take different paths in our program depending on the current value stored in the variable
		* x > 20 (depends on value of x)
		* y == 5 (depends on value of y)
		* z <= 33 (depends on value of z)
	* Operators
		* `< > >= <= == !=`
	* `If, else if, else`
		* Operate as questions
			* Allows us to execute certain instructions based on if the answer is `true` or `false`
			* If I am hungry then eat some food, otherwise if I am thirsty drink some water, otherwise take a nap
			* Pseudo Code
				* If the mouse is on the left side of the screen, draw a rectangle on the left side of the screen
					* `if (mouseX < width/2){
						fill(255);
						rect(0,0,width/2,height);
					}`
			* Can also be expanded by `else`
				* `if (mouseX < width/2){
					background(255);
				} else {
					background(0);
				}`
			* Can be further expanded by `else if`
				* `if (mouseX < width/3){
					background(255);
				} else if (mouseX < 2 * width/3){
					background(127);
				} else {
					background(0);
				}
			* Grading system excercise
				* `var grade = random(0,100);
					if (___) {
						console.log('Assign letter grade A');
					} else if (___) {
						console.log('___');
					} else if (___) {
						console.log('___');
					} else if (___) {
						console.log('___');
					} else {
						console.log('___');
					}`
	* Logical Operators
		* `&& ||`
		* If my temperature is greater than 98.6 OR I have a rash on my arm, take me to see a doctor
		* If I am stung by a bee AND I am allergic to bees, take me to see the doctor
		* If the mouse is on the right side of the screen AND the mouse is on the bottom of the screen, draw a rectangle in the bottom right corner.
		* We could use a nested if statement, but it can be simpler with using the logical AND (`&&`)
		* If my temperature is NOT greater than 98.6, I won't call in sick to CoLab
		* If I am stung by a bee AND I am NOT allergic to bees, don't worry!
		* `if (mousePressed){
			ellipse(width/2, height/2, 100, 100);
		} else {
			rect(width/2, height/2, 100, 100);
		}`
	* `Boolean` variables
* **IN-CLASS**: Bouncing ball

### CLASS 5: Workshop 

* Review and discussion
* Workshopping
* [Singing Viz](https://github.com/futuremarc/p5-creative-coding-course/tree/master/exercises/singing-viz)

### CLASS 6: Loops, [Functions()](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp07_functions) and [Arrays](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp09_arrays)
* Review
* Global and local variables
* [`noise()`](http://p5js.org/reference/#/p5/noise)
* [Loops](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp06_loops)
	* while
	* for
* Events
* [Face painting](https://github.com/futuremarc/p5-creative-coding-course/tree/master/exercises/face-paint)


### CLASS 7: [Music Viz w/Jason Sigal](https://github.com/therewasaguy/p5-music-viz)

### CLASS 8: [DOM](http://p5js.org/reference/#/libraries/p5.dom) and Media

* HTML
* CSS
* [Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
* Video and Audio elements
* Load and display and image
* Fonts
* Sound files

### CLASS 9: Workshop Day && Final Projects

* Ideate
* Create or Improve

### CLASS 10: Final Projects

* Debug
* Presentations

### KEYWORDS

* Variable `var x = 0;`
* Function `function moveBall(){}`
* Object `{ key : value }`
* Array `[25,26,27,28]`
* Boolean `true`
* Number `30.5`
* String `'words in a sentence.'`
* Loops `for (var i = 0; i < 5; i++){}`
* Conditional `if (x > 4){ doThis() }`
* HTML `<html></html>`
* DOM `.class #id tag`
* CSS `.my-class { background : 'blue' }`
* JavaScript Events `onchange`


### OTHER LINKS

* Learn Web
	* [Javascript Basics](https://github.com/processing/p5.js/wiki/JavaScript-basics)
	* [HTML and CSS Basics](https://github.com/processing/p5.js/wiki/Intro-to-HTML-and-CSS)
	* [Intro to DOM manipulation and events](https://github.com/processing/p5.js/wiki/Intro-to-DOM-manipulation-and-events)
	* [W3Schools](http://www.w3schools.com/)
	* [Codecademy](http://www.codecademy.com/learn)
* Learn p5.js
	* [Tutorials](http://p5js.org/tutorials/)
	* [p5 Reference](http://p5js.org/reference/)
	* [p5 Examples](http://p5js.org/examples/)
	* [p5 DOM Reference](http://p5js.org/reference/#/libraries/p5.dom)
