// DOM - get element in js
var output = document.getElementById("output");
console.log("output here", output);

// Js Functions!
// why we need to use it?
// var num1 = 2;
// var num2 = 3;
// var result = num1 + num2;
// console.log("result is here", result);
// do something here
// some
// thing
// requirement 2 sum
// var num3 = 4;
// var num4 = 5;
// var result1 = num3 + num4;
// console.log("result1", result1);

// do something here
// some
// thing
// requirement 3 sum
// var num5 = 34;
// var num6 = 5;
// var result2 = num5 + num6;
// console.log("result2", result2);

// tool - reuse
// function define
function sum(num1, num2) {
  // a, b is parameter
  console.log("num1", num1);
  console.log("num2", num2);

  var result2 = num1 + num2;
  console.log("result2", result2);
}
// function calling
sum(3, 1);
// argument 2, 3
// do something
sum(5, 7);
// some
sum(10, 20);

// native functions
// function calling
// alert("example");
console.log("text" + 3);
parseInt("2");
// prompt("Enter your Name");
document.getElementById("output");
// alert define 100 line of code, repeat 100 * 4 > 400 lines code
// if we gonna use function than total lines of code will be 104

// define, default parameters
function multiply(num1 = 1, num2 = 1, num3 = 1) {
  console.log("num1", num1);
  var output = num2 * num1 * num3;
  console.log("multiply output ", output);
}
// arg
multiply();
// define a custom alert, print Naveed if user not provide any argument
function customAlert(error = "Something Went Wrong!") {
  // alert(error);
}
customAlert("Sorry! Your User name and password does not work! ");
customAlert();

// return value in functions
// var output = parseInt("2");
// console.log("output", output);

function sub(a, b) {
  var result = a - b;
  // return a - b;
  return result;
  // if we return a value from the function, rest of code line from same function will never be executed anymore
  var output = a * b;
  console.log("multiply output", output);
}

var output = sub(5, 3);
console.log("output from function return", output);

// function scope
// example
var a = 5;
var b = 15;
// a define as global scope
function test() {
  // b define as local scope
  b = "10";
  var b = 20;
  console.log("b in local scope, ", b);
  console.log("a", a);
}
test();
console.log("b is here > ", b);

// var userNumTag = document.getElementById("userNum");
// var userNum = userNumTag.value;
// is equal to

// function onClickHandler() {
//   var userNum = document.getElementById("userNum").value;
//   var output = document.getElementById("output");
//   output.innerHTML = userNum;
// }

// invoke or call on particular event 

// write a js a program take a input from user using input tag, than multiply that number with 10, and show the output in p tag

function multiplyWithTen() {
  var userNum = parseInt(document.getElementById("userNum").value);
   var output = userNum * 10; 
   document.getElementById("output").innerHTML = `Your num is ${userNum} is multiply by 10 is equal to ${output}`;
  }