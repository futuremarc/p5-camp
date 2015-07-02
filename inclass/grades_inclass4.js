//CREATE A GRADING SYSTEM


function setup(){


var grade = random(0,100);

	if (grade >= 90) {
		console.log('Assign letter grade A'); 
	} else if (grade >= 80) {
		console.log('Assign letter grade B'); 
	} else if (grade >= 70) {
	 	console.log('Assign letter grade C');
	} else if (grade >= 60) {
	 	console.log('Assign letter grade D'); 
	} else {
	 	console.log('YOU FAILED, MAN!');
	}

}