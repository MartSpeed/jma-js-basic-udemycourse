/*VARIABLES & DATA TYPES */
/*external javascript*/
/*var firstName = "John ";
var lastName = "M. Anthony";
console.log(firstName + lastName);

/*javascript boolean example
var fullAge = true;
console.log(fullAge);


// variable naming rules
var job;
console.log(job);

job = "Teacher";
console.log(job);
*/

/*VARIABLE MUTATION & TYPE COERCION*/
/*var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// VARIABLE MUTATION
age = 'twenty eight';
job - 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);*/

/*BASIC OPERATORS*/
/*var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2020;
ageJohn = 33;
ageMark = 29;

//MATH OPERATORS
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now/+ 2);

//LOGICAL OPERATORS
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof Operator
console.log(typeof yearJohn);
*/

/* OPERATOR PRECEDENCE*/
/*var now = 2020;
var yearJohn = 1987;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *=2;
console.log(x);
x+=10;
console.log(x);
x++;
console.log(x);
*/

/*
*****************
CODING CHALLENGE 1
*****************
*/

/*var massJohn, massMark, heightJohn, heightMark
massJohn = .5;
heightJohn = 71;
massMark = .15;
heightMark = 85;

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

var isGreater = bmiMark > bmiJohn;
console.log("Is Mark\'s BMI greater than John\'s BMI?" + " " + isGreater);
*/

/* If/else statements */
/*var firstName = "John";
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massJohn, massMark, heightJohn, heightMark
massJohn = .5;
heightJohn = 71;
massMark = .15;
heightMark = 85;

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);
var bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
}else {
    console.log('John\'s BMI is higher than Mark\'s');
}
*/

/* Boolean Logic*/
/*var firstName = 'John';
var age = 20;

if(age < 13) {
    console.log(firstName + ' is a boy.');
}else if (age >= 13 && age < 20) { 
    console.log(firstName + ' is a teenager.');
}else if (age >=20 && age <30) {
    console.log(firstName + ' is a young man');
}else {
    console.log(firstName + ' is a man.');
}
*/

/*TERNARY OPERATORS AND SWITCH STATEMENTS*/
// ternary operators
/*var firstName = 'John';
var age = 18;

age >= 21 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);
 /*
// Switch Statements
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drive an uber in Atlanta.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
    
}
*/

/* TRUTHY AND FALSEY VALUES AND EQUALITY OPERATORS*/
/*var height;

height = 23;

if (height || height === 0) {// === is a strict equalit operator
    console.log('Variable is defined');
}else {
    console.log('Varibale has NOT been defined');
}

// Equality operators == has type coercion
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/****************** 
CODING CHALLENGE 2
*******************/
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start driving lessons ${age}`);
} else {
  console.log(`Sarah cannot start driving lessons ${age}`);
}
