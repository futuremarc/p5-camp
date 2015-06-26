# SYLLABUS

## OVERVIEW

This course is an introduction to creative coding with the [p5.js](http://p5js.org) JavaScript Library. It will cover the basics of programming through: drawing and animating in the browser, designing and building interactivity, manipulating and animating the page structure, audio synthesis on the web, and music visualization. We will be using the textbook and examples form [Learning Processing](https://github.com/shiffman/LearningProcessing-p5.js) adapted to p5.js by Daniel Shiffman.

### CLASS 1: Introduction

* Software, creative coding, and the web
	* What is coding?
		* Thinking like a computer
			* [Precise instructions](https://www.youtube.com/watch?v=xngWoocXYCo)
			* [Recipe](https://www.youtube.com/watch?v=UScm9avQM1Y)
			* **IN-CLASS**: [Marbles program](https://github.com/futuremarc/p5-camp/blob/master/week1/icm-marbles.png?raw=true)
			* [JavaScript](https://www.facebook.com/heyllowlab/videos/vb.546681475406388/865218866885979/?type=2&theater)
		* Examples
	* [What is creative coding?](http://reddit.com/r/creativecoding)
		* Examples
			* [Processing Exhibition](https://processing.org/exhibition/)
			* [Shiffman's List](https://github.com/ITPNYU/ICM-2014/wiki/Projects)
			* Arduino Examples
			* [Jazz Computer](http://jazz.computer)
			* [Cabbibo](http://cabbi.bo/)
			* [Void](http://void.hi-res.net/)
			* [Three.JS](http://threejs.org)
			* [Super Sync Sports](https://chrome.com/supersyncsports/)
			* [p5 Gallery](http://p5js.org/gallery/)
		* [Net Art Grants](http://rhizome.org/commissions/grant/internet-art-microgrants-2015/)
	* [What is p5?](http://hello.p5js.org)
		* [Processing](http://processing.org)
		* Walkthrough examples
			* [Drawing with the mouse](https://github.com/futuremarc/p5-creative-coding-course/tree/master/week1/drawing-with-the-mouse)
			* [Singing visualization](https://github.com/futuremarc/p5-creative-coding-course/tree/master/week1/singing-viz)
			* [Face painting](https://github.com/futuremarc/p5-creative-coding-course/tree/master/week1/face-paint)
* [Course overview](https://github.com/futuremarc/p5-creative-coding-course/blob/master/SYLLABUS.md#overview)
* Ideate
* Course setup
	* [Setting up p5.js](http://p5js.org/get-started/)
	* FTP Client: [Cyberduck](https://cyberduck.io/?l=en)
	* Text Editor: [Sublime Text](http://www.sublimetext.com/)
	* [Local Server Tutorial](https://github.com/processing/p5.js/wiki/Local-server)
		* PC: [WAMP](http://www.wampserver.com/en/)
		* Mac: Do a Spotlight Search for 'Terminal' and open up the program. Type 'cd', hit the spacebar and drag your folder containing index.html from your finder onto Terminal. Press enter. Now type 'python -m SimpleHTTPServer'. Then goto your browser and goto the address [http://localhost:8000](http://localhost:8000)

### CLASS 2: Drawing on the Canvas

* Be comfortable not knowing everything all at once.
* [p5 Reference](http://p5js.org/reference/)
* Debugging
	* [Chrome Tools](https://developer.chrome.com/devtools/docs/console) (OPTION COMMAND J)
	* `console.log()`
* Drawing 
	* `createCanvas()`
		* Where is (0,0)?
	* `ellipse(), line(), curve(), point(), quad(), rect(), triangle()`
	* `ellipseMode()`
	* `rectMode()`
	* `background(), fill(), noFill(), noStroke(), stroke()`
	* Color
		* `background(255)` (white) 
		* `background(0)` (black)
		* `background(255, 0, 0)` (bright red)
		* `fill(25, 50, 75, 255)` (100% opacity)
* **IN-CLASS**: Draw anything onto the screen using basic shapes: A creature, beetle, self-portrait, the sky, flowers, a robot, an abstract image
* Examples

### CLASS 3: Animating on the Canvas

* [`colorMode()`](http://p5js.org/reference/#/p5/colorMode)
			* HSB: Hue, Saturation, Brightness
			* RGB: Red, Green, Blue
* Code Blocks { }
	* `setup(){}` runs once in the beggining.
	* `draw(){}` when setup is finished it runs over and over again.
* [Variables](http://www.w3schools.com/js/js_variables.asp)
	* Declare
	* Initialize
	* Use
* Variation
	* `mouseX, mouseY`
	* `pmouseX, pmouseY`
	* [`random()`](http://p5js.org/reference/#/p5/random)
	* [`noise()`](http://p5js.org/reference/#/p5/noise)
	* `x = x + 1` shorthand: `x+=1`
* [`map()`](http://p5js.org/reference/#/p5/map)
* Examples

### CLASS 4: Interaction in the Browser

* Events
	* `[mouseClicked()](http://p5js.org/reference/#/p5/mouseClicked),[accelerationY](http://p5js.org/reference/#/p5/accelerationY), mouseDragged(), touchStarted(), touchX, touchY, keyPressed(), keyCode`
* [Conditionals](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp05_conditionals)
	* `If, else if, else`
	* `&& || == != `
	* `Boolean` variables
* **IN-CLASS**: Bouncing ball
* Examples

### CLASS 5: Loops and Arrays

* [Loops](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp06_loops)
	* while
	* for
* [Arrays](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp09_arrays) []

### CLASS 6: [Functions()](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp07_functions) and Classes

### CLASS 7: [Music Viz w/Jason Sigal](https://github.com/therewasaguy/p5-music-viz)

### CLASS 8: * [DOM](http://p5js.org/reference/#/libraries/p5.dom) and Media

* HTML
* CSS
* [Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
* Examples

### CLASS 9: Workshop Day && Final Projects

* Ideate or Improve
* Create

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
