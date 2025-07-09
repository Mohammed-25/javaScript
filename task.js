// variable declaration and initialization
/*
let name = 'mohammed';
let age = 20 ;
let isStudent = true;
let result =  5+ 5;

console.log("welcome " +name);
console.log("your age is " +age);
console.log("are you a student? " +isStudent);
console.log("the result is " +result);
-------------------------------------------------------------

// if statement
let a = 10;

if (a >5 ) {

    console.log("a is greater than 5");
}
let b = 8;


 if (b % 2 == 0) {
    console.log("b is an even numper")
}
else {

    console.log("b is an odd numper")
}

let grade = 50;

if (grade >= 95){
    console.log("your garde is A+")
}
else if (grade>= 90 && grade < 95){
    console.log("your garde is A")
}
else if (grade >= 85 && grade < 90){

    console.log("your grade is B+")
}
else if(grade >= 80 && grade < 85){

    console.log("yuor grade is B")
}
else if (grade >= 75 && grade < 80){
    
    console.log("your grade isC+")
}
else if (grade >= 70 && grade < 75){

    console.log("your grade is C")
}
else if (grade >= 65 && grade < 70){
    console.log("your grade is D+")
}
else if (grade >= 60 && grade < 65){
    console.log("your grade is D")
}
else if (grade >= 50 && grade < 60){
    console.log("your failed")
}
// switch statement
let day = "Wednesday";

switch (day.toLocaleLowerCase()) {
case "saturday":
console.log("today is Saturday")
break;
case "sunday":
console.log("today is Sunday");
break;
case "monday":
               console.log("today is Monday");
               break;
               case "tuesday":
                console.log("today is Tuesday");
                break;
                case "wednesday":
                    console.log("today is Wednesday");
                    break;
                    case "thursday":
                        console.log("today is Thursday");
                        break;
                        case "friday":
                            console.log("today is Friday");
                            break;
                            default:
                                console.log("not a valid day"); 
}

// Input: age of the person
let age = 17;

// Ternary operator to check voting eligibility
let eligibility = (age >= 18) ? "Eligible to vote." : "Not eligible to vote.";

console.log(eligibility);


------------------------------------------------------------------
// Looping structures
for (let i =0; i <=4; i++) {
    console.log("the value of i is " +i)
}
let y =2;
while (y<=10) {
    console.log("y is alowes even "+y);
    y +=2;
}

let number;
do {
    number = parseFloat(prompt("Enter a number (negative number to exit):"));
    console.log("You entered:", number);
} while (number >= 0);

console.log("You entered a negative number. Exiting...");   
-----------------------------------------------------------------
// Array declaration and manipulation
let color = ['red', 'green', 'blue', 'yellow', 'purple'];

console.log("the second color is " +color[1]);

color.push('orange');
console.log("the new color is " +color[5]);
color.shift();
console.log("the new color is " +color[0]);
color[1] = 'pink';
console.log("the new color is " +color[1]); 
------------------------------------------------------ 
Functions */

// Function to add two numbers
function add (a ,b){

    return console.log("the sum is " + (a+b));
}

add(5, 10);
// Function to check if a number is even
function isEven(ev){

    if (ev % 2 ==0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("is the number even? " + isEven(4));

// Function to greet a user
function greet (name){
return console.log(" wolcme " + name);
}
greet("mohammed");

//function to calculate the area of a circle
function calculateArea(radius) {
    const pi = 3.14;
    return console.log("the area of the circle is " + (pi * radius * radius));
}
calculateArea(5);

//reverse a string
function reverseString(str) {
    return console.log("the reversed string is " + str.split('').reverse().join(''));
}
reverseString("hello");
