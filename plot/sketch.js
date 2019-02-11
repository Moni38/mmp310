/*
	mmp 310 week 3
	interactive story
	plot sketch, adding functions
*/

// global variables
var story = "Once upon a time, there was an orange and a banana.";
var storyX;
var storyY;

var chapter = "morning"; // day, night

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(40);
	textAlign(CENTER, CENTER);
	storyX = width / 2;
	storyY = height - 50;
}

function draw() {
	background(50);
	
	if (chapter == "morning") {
		orange(100, 200);  // first character
		banana(200, 100); // second character 
	} else if (chapter == "day") {
		orange(300, 150);  
		banana(400, 75);
	} else if (chapter == "night") {
		orange(600, 100);  
		banana(700, 50);
	}
	
	stroke(255);
	text(story, storyX, storyY);
}

function mouseClicked() {
	if (chapter == "morning") chapter = "day";
	else if (chapter == "day") chapter = "night";
	else if (chapter == "night") chapter = "morning";
}

function orange(x, s) {
	var eyeSize = s / 10;
	fill('DARKORANGE');
	noStroke();
	ellipse(x, 200, s);  	// body
	
	stroke(0);
	ellipse(x + eyeSize * 3, 200 - eyeSize, eyeSize);  // left eye
	ellipse(x, 200 - eyeSize, eyeSize); 		// right eye
}

function banana(x, s) {
	fill('yellow');
	noStroke();
	arc(x, 100, s, s, -HALF_PI, HALF_PI); // banana background
	fill(50);
	arc(x, 100, s / 2, s, -HALF_PI, HALF_PI); // banana foreground
	noFill();
	stroke(0);
	arc(x, 100, s * 3/4, s, -HALF_PI, HALF_PI); // banana contour
}







