var assess1 = 0;
var assess2 = 0;
var assess3 = 0;
var assess4 = 0;
var assess5 = 0;
var assessave = 0;
var summ1 = 0;
var summ2 = 0;
var summ3 = 0;
var summave = 0;
var exam = 0;
var grade = 0;
var gradeave = 0;
for (let i = 1; i <= 6; ++i){
var student = prompt("Enter the name of the student: ");
var assess1 = parseInt(prompt("Enter enabling assessment 1: "));
var assess2 = parseInt(prompt("Enter enabling assessment 2: "));
var assess3 = parseInt(prompt("Enter enabling assessment 3: "));
var assess4 = parseInt(prompt("Enter enabling assessment 4: "));
var assess5 = parseInt(prompt("Enter enabling assessment 5: "));
for(let assesssum=0; assesssum <= 5; assesssum++){
	assesssum = assess1 + assess2 + assess3 + assess4 + assess5;
    assessave = assesssum / 5;
    console.log(assessave);
}
var summ1 = parseInt(prompt("Enter summative assessment 1: "));
var summ2 = parseInt(prompt("Enter summative assessment 2: "));
var summ3 = parseInt(prompt("Enter summative assessment 3: "));
for(let summsum=0; summsum <= 3; summsum++){
	summsum = summ1 + summ2 + summ3;
    summave = summsum / 3;
    console.log(summave);
}
var exam = parseInt(prompt("Enter major exam grade: "));
for(let exam=0; exam <= 1; exam++){
	console.log(exam);
}

var grade = assessave + summave + exam;
var gradeave = grade / 3;
console.log(gradeave);


if (gradeave >= 90 || gradeave == 100){
	console.log(`${student}, The Grade is A.`);
	alert(`The grades of ${student} are ${assessave} for class participation, ${summave} for summative assessment, and ${exam} for major exam. The average grade score is ${gradeave} and the letter grade is A. Congratulations!!`)
} else if (gradeave >= 80 && gradeave <= 89){
	console.log(`${student}, The Grade is B.`);
	alert(`The grades of ${student} are ${assessave} for class participation, ${summave} for summative assessment, and ${exam} for major exam. The average grade score is ${gradeave} and the letter grade is B. Congratulations!!`)
} else if (gradeave >= 70 && gradeave <= 79){
	console.log(`${student}, The Grade is C.`);
	alert(`The grades of ${student} are ${assessave} for class participation, ${summave} for summative assessment, and ${exam} for major exam. The average grade score is ${gradeave} and the letter grade is C.`)
} else if (gradeave >= 60 && gradeave <= 69){
	console.log(`${student}, The Grade is D.`);
	alert(`The grades of ${student} are ${assessave} for class participation, ${summave} for summative assessment, and ${exam} for major exam. The average grade score is ${gradeave} and the letter grade is D.`)
} else {
	   	console.log(`${student}, The Grade is F.`);
		alert(`The grades of ${student} are ${assessave} for class participation, ${summave} for summative assessment, and ${exam} for major exam. The average grade score is ${gradeave} and the letter grade is F.`)
}
}


