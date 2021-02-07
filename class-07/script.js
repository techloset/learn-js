// math round method
var num = 23.675323;
var roundNumber = Math.round(num);
console.log("roundNumber", roundNumber);
// math ceil method
console.log("ceil Number", Math.ceil(num));
// Math floor, 
console.log("floor Number", Math.floor(num));

// Math Random to get a random number
var randomNumber = Math.random();
console.log("randomNumber", randomNumber);

// random number between 1- 10
var randomNum = Math.random();
console.log("randomNum", randomNum);
randomNum = (randomNum * 100);
console.log("randomNum * 10", randomNum);
randomNum = Math.ceil(randomNum) 
console.log("randomNum ceil", randomNum);

// data types
// 0.23 float, double
// 234, 232, 324, int
// pakistan string > "double q", "single"

// if we want to convert string data type to int
// "25"
// parseInt("25") => 25
// parseFloat
// toString

var stringNum = "25"
var numType = parseInt(stringNum);
console.log("numType int",numType);
console.log("numType float",parseFloat(stringNum));
console.log("Number Method", Number(stringNum))
var numberData = 25;
var toNumToString = numberData.toString()
console.log("toNumToString",toNumToString);


// control the len of numb
var longNumber = 2.2364234;
console.log("longNumber tofixed", longNumber.toFixed(2) );

// Date in js
var currentDate = new Date()
console.log("currentDate", currentDate);
// getDay - return day index from 0 to 6
var theDay = currentDate.getDay();
console.log("current day", theDay);

// write a js program, to print the current user day, in the Format of Mon, Tue, Sat
var days = ["Sunday", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"]
console.log("Current Day Custom Format: ", days[theDay]);

// get Month
var now = new Date("July 21, 1983 13:25:00");
console.log("current Month", now.getMonth());

// get Date
console.log("current date", now.getDate());

// get full year
console.log("current year", now.getFullYear());

// get hours
console.log("current hour", now.getHours());

// get Min
console.log("current Min", now.getMinutes());

// get Sec
console.log("current Sec", now.getSeconds());

// get MilliSec
console.log("current Milli Sec", now.getMilliseconds());

/*
var currentDate = new Date()
currentDate.setFullYear(2015)
*/


function showFullTime(a,b) {
    // cal
    return 0
}
//
showFullTime(2,3);

console.log("current date", new Date());
var todayDate = new Date();
todayDate.setFullYear = 2018

function submitHandler() {
    alert()
}