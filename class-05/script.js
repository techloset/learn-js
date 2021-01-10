// array concept

var student0 = "Ali";
var student1 = "Umar";
var student2 = "manan";
var student3 = "asif";
var student4 = 'abu bakar'; 

var students = [1.3,"Umar" , "manan", "asif", 'abu bakar'];

// alert(students[1])
// console.log("array here", students)
// students[1] = "Naveed"
// console.log("array here", students)

// we can save any type of value in array
var sampleArray = [1, 1.2, "String is here", true]
// console.log("sample arr", sampleArray);
// access any index
// console.log("access values", sampleArray[2]);

var emptyArr = [];
console.log("emptyArr", emptyArr);

emptyArr[0] = "1";
emptyArr[1] = 2;
emptyArr[2] = 1.1;
emptyArr[10] = false;

// console.log("emptyArr", emptyArr);

// properity for checking array len,
var totalLenOfArr = students.length;
// console.log("totalLenOfArr", totalLenOfArr)

// push and pop method in arrays
var numArray = [1,2,3,4,5]
// var numArrayLen = numArray.length;
// console.log("numArray", numArrayLen);
// numArray[numArrayLen] = 6;
// console.log("numArray", numArray);
// alternative
// numArray.push(6,7,8,"sf")
// console.log("numArray", numArray);
// numArray.pop();
// console.log("numArray", numArray);

// if we want add values in start of array
// numArray.unshift(6,7,8);
// console.log("numArray", numArray);
// numArray.shift();
// console.log("numArray", numArray);


// four arrays method
// shift - start delete - 0 delete
// unshift - start values add
// push - last values add
// pop - last values delete

// values add in array center or spcefic index


var sampleNumbers = [1,2,3,4,7,8,9,10];
// console.log("sampleNumbers", sampleNumbers);
// sampleNumbers.splice(4, 2, 5,6)
sampleNumbers.splice(0,0,"somethng","a") 
// equal to sampleNumbers.unshift("somethng","a")
sampleNumbers.splice(0,1) 
// is equal to sampleNumbers.shift()

// 
// console.log("sampleNumbers", sampleNumbers);


var cities = ["fsd","lhr", "khi", "hyd"]
// if i want to delete isb from array? 
// cities.splice(1,1);
console.log("cities", cities)
// if we want to add multan at end
// cities.push("multan")
cities.splice(4,0,"multan")
console.log("cities", cities)

// slice

var punjabCities = cities.slice(0,2);
console.log("subCities", punjabCities);
var sindhCities = cities.slice(2,4)
console.log("sindhCities", sindhCities);

// push
// pop
// shift
// unshift
// splice
// slice

// loop concept

// want to show alert Welcome to user for 5 times
// alert("Welcome");
// alert("Welcome");
// alert("welcome");
// alert("Welcome");
// alert("welcome");
// alert("before alert");
// types of loop

// for
// while
// do while 
// foreach loop
// for in loop

for (var index = 0; index <= 5 ; index++) {
    // console.log("index", index);
// alert("welcome" + index);
//   alert()
}
// alert("after alert");
// example - write a js program to create a table for 2
// var index = 1;
// var result = index * 2;
// console.log("2 * " + index + " = " + result );

// var index1 = 2;
// var result1 = index1 * 2;
// console.log("2 * " + index1 + " = " + result1 );

// infinite loop
// for (let index = 1; index > 0; index++) {
// var result = index * 2;
// console.log("2 * " + index + " = " + result );
// }

// 