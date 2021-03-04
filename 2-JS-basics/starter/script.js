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
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah can start driving lessons ${age}`);
// } else {
//   console.log(`Sarah cannot start driving lessons ${age}`);
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, Wait another ${yearsLeft} years:)`);
// }

// // this will contain the century the person was born
// const birthYear = 1995;
// let century = 0;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

/**
 * Use the BMI example from Challenge #1, and the code
 * you already wrote, and improve it:
 *
 * 1. Print a nice output to the console, saying who has
 * the higher BMI. The message can be either "Mark's BMI
 * is higher than John's!" or "John's BMI is higher than
 * Mark's!"
 * 2. Use a template string to include the BMI values in
 * the outputs. Example: "Mark's BMI (28.3) is higher
 * than John's (23.9)!"
 *
 * HINT: Use and if/else statement
 */

// let massJohn, massMark, heightJohn, heightMark;
// massJohn = 92;
// heightJohn = 1.95;
// massMark = 95;
// heightMark = 1.69;

// const bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log(`this is bmiJohn: ${bmiJohn}`);
// const bmiMark = massMark / (heightMark * heightMark);
// console.log(`this is bmiMark: ${bmiMark}`);

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI: ${bmiMark} is higher than John's BMI ${bmiJohn}`);
// } else {
//   console.log(`John's BMI: ${bmiJohn} is lower than Mark's BMI: ${bmiMark}`);
// }

/**
 * TYPE CONVERSION & COERCION
 */
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number('John'));
// //NaN is an invalid number, but its still a number
// console.log(String(23));

// //type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' / '18');

// // the string concatenated the 1 and made 11, 11-1=10
// let n = '1' + 1;
// n = n - 1;
// console.log('this is the value of n:', n);

// const money = 0;
// if (money) {
//   console.log('Dont spend it all');
// } else {
//   console.log('You should get a job!');
// }

// let height;
// if (height) {
//   console.log('YAY Height is defined');
// } else {
//   console.log('Height is undefined');
// }

/**
 * EQUALiTY OPERATORS
 * 
 * const age = 18;
// the person becomes an adult, only if the age is exactly 18
if (age === 18) console.log('You just became an adult');
 */

/**
 * BOOLEAN LOGIC
 */

/*
 * LOGICAL OPERATORS

 const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && !hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive');
// } else {
//   console.log('Someone else should drive');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}
 */

/**
 * CODING CHALLENGE #3
 *
 * There are two gymnastics teams, Dolphins and Koalas.
 * The compete against each other 3 times. The winner
 * with the highest average score wins the trophy!
 *
 * [x] 1. Calculate the average score for each team, using
 * the test data below
 * [x] 2. Compare the team's average scores to determine the
 * winner of the competition, and print it to the
 * console. Don't forget that there can be a draw, so
 * test for that as well (draw means they have the same
 * average score).
 *
 * 3. BONUS 1: include a requirement for a minimum score
 * of 100. With this rule, a team only wins if it has a
 * higher score that the other team, and the same time a
 * score of at least 100 points. HINT: Use a logical
 * operator to test for minimum score, as well as
 * multiple else-if blocks.
 * 4. BONUS 2: Minimum score also applies to a draw! So
 * a draw only happens when both teams have the same
 * score and both have a score greater or equal to 100
 * points. Otherwise, no team wins the trophy.
 *
 * TEST DATA: Dolphins score 96, 108, and 87. Koalas
 * score 88, 91 and 110.
 * TEST DATA BONUS 1: Dolphins score 97, 112 and 101.
 * Koalas score 109, 95 and 123
 * TEST DATA BONUS 2: Dolphin score 97, 112, and 101.
 * Koalas score 109, 95, and 106
 */

// average of score variables
console.log('***** BASE MODE *****');
let koalaScoreAverage = (88 + 91 + 110) / 3;
console.log('this is the koala average', koalaScoreAverage);
let dolphinScoreAverage = (96 + 108 + 87) / 3;
console.log('this is the dolphin average', dolphinScoreAverage);
const minimumScore = 100;

if (koalaScoreAverage > dolphinScoreAverage) {
  console.log('koalas have the better scoring average');
} else if (dolphinScoreAverage > koalaScoreAverage) {
  console.log('dolphins have the better scoring average');
} else {
  console.log('This ends in a draw');
}
console.log('*****BASE MODE IS COMPLETE *****');

console.log('========== BONUS 1 ==========');
koalaScoreAverage = (109 + 95 + 123) / 3;
console.log('BONUS 1: koala average', koalaScoreAverage);
dolphinScoreAverage = (97 + 112 + 101) / 3;
console.log('BONUS 1: dolphin average', dolphinScoreAverage);

if (
  koalaScoreAverage > dolphinScoreAverage &&
  koalaScoreAverage > minimumScore
) {
  console.log('BONUS 1: koalas have the better scoring average');
} else if (
  dolphinScoreAverage > koalaScoreAverage &&
  dolphinScoreAverage > minimumScore
) {
  console.log('BONUS 1: dolphins have the better scoring average');
} else if (koalaScoreAverage === dolphinScoreAverage) {
  console.log('BONUS 1: This ends in a draw');
}
console.log('========== BONUS 1 IS COMPLETE==========');

console.log('========== BONUS 2 ==========');
koalaScoreAverage = (109 + 95 + 106) / 3;
console.log('BONUS 2: koala average', koalaScoreAverage);
dolphinScoreAverage = (97 + 112 + 101) / 3;
console.log('BONUS 2: dolphin average', dolphinScoreAverage);

if (
  koalaScoreAverage > dolphinScoreAverage &&
  koalaScoreAverage >= minimumScore
) {
  console.log('BONUS 2: koalas have the better scoring average');
} else if (
  dolphinScoreAverage > koalaScoreAverage &&
  dolphinScoreAverage >= minimumScore
) {
  console.log('BONUS 2: dolphins have the better scoring average');
} else if (
  koalaScoreAverage === dolphinScoreAverage &&
  koalaScoreAverage >= minimumScore &&
  dolphinScoreAverage >= minimumScore
) {
  console.log('BONUS 2: This ends in a draw');
}
console.log('========== BONUS 2 is COMPLETE==========');
