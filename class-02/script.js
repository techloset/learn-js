// typed languages!
// string num = "2";
// int num = 2;
// float num = 2.0;

// js - flexible
// var num = 5;
// lot of code
// var result = num * 2;

// legal names of variable
var user = 'naveed';
var userName = "Naveed";
var userFullName= "Naveed Sarwar";
var user$ = "2$";
var user_id = "223";
var user12 = "some number"

// illegal
// 23num
// %num

// for today lecture!
var a = 2;
var b = 5;
var output = a + b;
console.log("add sum is = ", a+b);
console.log("log from output variable", output);

// what is string?
var stringVar = "any text here!";

// plus sign meaning in int;
var num1 = 2;
var num2 = 4;
var numOutput = num1 + num2;
console.log("numOutput", numOutput);
// output will be 6


// if the var is string type than + meaning be concat;
var firstName = "Naveed";
var lastName = "Sarwar";
var concatOutput = firstName + lastName;
console.log("concatOutput => ", concatOutput);
// output > NaveedSarwar

// another demo for concat;
var firstNumber = "2";
var secondNumber = "4";
var outputNum = firstNumber + secondNumber;
console.log("outputNum is here", outputNum);
// output > 

// example of space between two string concat;
var sectionA = "time5";
var sectionB = "time7";
var extraSpace = " ";
var sectionConcat = sectionA + extraSpace + sectionB; 
console.log("sectionConcat", sectionConcat);
// output > time5 time7

// No data types in js - example
var testDataType = 2;
console.log("check the type of var testDataType", typeof(testDataType));
testDataType = "4";
console.log("check the type of var testDataType", typeof(testDataType));
// change string to int

var intResult = parseInt(testDataType);

console.log("check the type of var testDataType", typeof(intResult));

// getting the data from user two ways
// input tag in html
// prompts

// var promptResult = prompt();
// console.log('promptResult',promptResult);

// message pass to user in prompt
// var rollNumber = prompt("Enter your Roll Number!");
// console.log("user rollNumber", rollNumber);

// noted : prompt always return a string value

// Write a program in js, get a number from the user than sum that number into 5, and console the output

// please parseInt change string Naveed to number ? NaN
// please parseInt change string 5 to number ?  yes

// var userNumber = prompt("Please enter a number!");
// console.log("type of userNumber", typeof(userNumber));
// var numberOutput = parseInt(userNumber) + 5;
// console.log("numberOutput is = ", numberOutput);


// Next if statement
// demo first
if(0 > 1){
console.log("line number 100");
console.log("line number 101");
console.log("line number 102");
console.log("line number 103");
console.log("line number 104");
}
console.log("line number 105");
console.log("line number 106");
console.log("line number 107");
console.log("line number 108");
console.log("line number 109");

// example program of if condition
// write a js program, take a number from user, if the number is 5 than add that into 10 and print the result into console?

var userAddedNumber = parseInt( prompt("enter a number") );
console.log("userAddedNumber type", typeof(userAddedNumber));
// double == will not check the type of variable
// triple === equal sign will check type as well
if ( userAddedNumber === 5 ){
    var output = userAddedNumber + 10;
    console.log("total number is = ", output);
}
// equal to operation in math is 
// 5 = 5;
// == equal to operation in programming
// 5 == 5;
// = meaning in programming  assignment operator
// var assignmentOp = 5;


// 5 is greater than 2
// 5 > 2 

// 2 is less than 10;
// 2 < 10

// 1 is equal or greater than 2;
// 1 >= 2

// is less than or equal to 0;
// 1 <= 0

if ( 5 > 2){
    console.log("5 is great than 2 is correct");
}

if ( 5 < 2){
    console.log("5 is great than 2 is incorrect");
}

if ( 5 > 5){
    console.log("5 is great than 5 is incorrect");
}

if ( 5 >= 5){
    console.log("5 is great than or equal to 5 is correct");
}

if (5 == 10) {
    console.log("statement is wrong! ");
}

if (5 != 10) {
    console.log("statement is correct! ");
}


// if else
// demo
// write a program take a number from user if the number is 5 than add the value 10 and print into screen if the number not equal to 5 than add value of 5 into it;

var getNumber = parseInt ( prompt("enter a  number! ") );
if ( getNumber === 5){
    console.log("result is here for if 5 > = " , getNumber + 10);
}

if (getNumber !== 5) {
    console.log("result is here for if not 5 > = " , getNumber + 5);
}

// else
if (getNumber === 5) {

    console.log("result is here for if 5 > = " , getNumber + 10);

} else {
    
    console.log("result is here for if not 5 > = " , getNumber + 5);

}