# SYLLABUS

## OVERVIEW

This course is an introduction to creative coding with the [p5.js](http://p5js.org) JavaScript Library. It will cover the basics of programming through: drawing and animating in the browser, designing and building interactivity, manipulating and animating the page structure, audio synthesis on the web, and music visualization.

### CLASS 1: Introduction

* Software, creative coding, and the web
	* What is coding?
		* Thinking like a computer
			* [Precise instructions](https://www.youtube.com/watch?v=xngWoocXYCo)
			* [Recipe](https://www.youtube.com/watch?v=UScm9avQM1Y)
			* **IN-CLASS**: [Marbles program](https://github.com/futuremarc/p5-camp/blob/master/week1/icm-marbles.png?raw=true)
		* Examples
	* [What is creative coding?](http://reddit.com/r/creativecoding)
		* Examples
			* [Jazz Computer](http://jazz.computer)
			* [Cabbibo](http://cabbi.bo/)
			* [Void](http://void.hi-res.net/)
			* [Three.JS](http://threejs.org)
			* [Super Sync Sports](https://chrome.com/supersyncsports/)
			* [Processing Exhibition](https://processing.org/exhibition/)
			* [Shiffman's List](https://github.com/ITPNYU/ICM-2014/wiki/Projects)
			* Arduino Examples
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

* [p5 Reference](http://p5js.org/reference/)
* Debugging
	* [Chrome Tools](https://developer.chrome.com/devtools/docs/console) (OPTION COMMAND J)
	* `console.log()`
* Drawing 
	* `ellipse(), line(), curve(), point(), quad(), rect(), triangle() – background(), colorMode(), fill(), noFill(), noStroke(), stroke()`
* **IN-CLASS**: Draw anything onto the screen using basic shapes: A creature, beetle, self-portrait, robot, abstract image
* Examples

### CLASS 3: Animating on the Canvas

* Code Blocks {}
	* `setup(){}`
	* `draw(){}`
* [Variables](http://www.w3schools.com/js/js_variables.asp)
	* Declare
	* Initialize
	* Use
* Variation
	* `mouseX, mouseY`
	* `random()`
	* `noise()`
* `map()`
* **IN-CLASS**: Bouncing ball
* Examples

### CLASS 4: Interaction in the Browser

* Events
	* [`mouseClicked()`](http://p5js.org/reference/#/p5/mouseClicked)
* DOM
* **IN-CLASS**: Workshop
* Examples

### CLASS 5: Conditionals and Loops
* [Conditionals](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp05_conditionals)
	* If, else if, else
	* && || == != 
	* Boolean variables
* [Loops](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp06_loops)
	* while
	* for

### CLASS 6: [Arrays](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp09_arrays), [Functions()](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp07_functions) and Classes


### CLASS 7: [Music Viz w/Jason Sigal](https://github.com/therewasaguy/p5-music-viz)

### CLASS 8: DOM and Media

* [Beyond the Canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
* Examples

### CLASS 9: Workshop Day && Final Projects

* Ideate
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
