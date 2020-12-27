// if else statement
if (2 < 3) {
  // if block
  // code here
  console.log("line 2");
  console.log("line 3");
  console.log("line 4");
  console.log("line 5");
  console.log("line 6");
  // end of if block
} else {
  // else block
  console.log("line 11");
  console.log("line 12");
  console.log("line 13");
  console.log("line 14");
  console.log("line 15");
  // end of else block
}

// program: write a js program, take a input from user name, if it is 'Naveed', than alert congrts, else alert, Name is not naveed;
// var userName = prompt("Enter Your Name");
// if (userName == 'Naveed') {
//     alert("Welcome Naveed!")
// } else {
//     alert("Your Name is not Naveed")
// }

// string
var aString = "Welcome to Pakistan's !";
var bString = 'Welcome to Pakistan"s !';
var cString = `Welcome to pakistan's!`;

// alert print int
// alert(2);

// even and odd! write a js program to check number for even and odd
// var userNumber = parseInt(prompt("Enter a number"));
// if (userNumber % 2 == 0) {
//     alert("Number is even")
// } else {
//     alert("Number Is odd")
// }

// alert with int + string
// var output = 2 + "some string";
// alert(output);

// && table
// X && Y
// T && T => T
// T && F => F
// F && T => F
// F && F => F

if (2 < 3 && 5 > 7 && 10 > 12) {
  alert("condition is true");
} else {
  // alert("Condition is false")
}

// OR || table
// X || Y
// T || T => T
// T || F => T
// F || T => T
// F || F => F

if (2 > 3 || 5 < 7) {
  // alert("condition is true")
} else {
  alert("condition is true");
}

// write a js program take a GPA input from user, if the gpa is above the 50 and equal to 50, 60, 70, 80 student is average, if above the 80 than student is amazing
// var userGpa = parseInt(prompt("Enter your GPA in percentage"));
// if((userGpa == 60 || userGpa == 70 || userGpa == 80) && userGpa>50){
//     console.log("student is average");
// }

// if (userGpa > 80) {
//     console.log("student above than average");
// }

// if statement nested!

if (2 < 3) {
  if (5 < 7) {
    // alert("both conditions true");
  }
}
// is equal to
if (2 < 3 && 5 < 7) {
  //
}

//program, write a js program, alert 'more than average' if userScore is more than 80, and userScore is equal to 100 than alert, 'user got 100% marks'!

// var userScore = parseInt(prompt("Enter your score!"));
// if (userScore > 80) {
//     alert('more than average');
//     if (userScore == 100) {
//         alert('user got 100% marks');
//     }
//     else{
//         alert('user score below the 100%');

//     }
// }
// else{
//     alert("user below the average")
// }

// if else if
// program, write a program take a input from user, and check the grade for the user!
// var userScore = parseInt(prompt("Enter your score!"));

// if (userScore <= 40) {
//   console.log("Grade F");
// } else if (userScore > 40 && userScore <= 60) {
//   console.log("Grade C");
// } else if (userScore > 60 && userScore <= 70) {
//   console.log("Grade B");
// } else if (userScore > 70 && userScore <= 80) {
//   console.log("Grade A");
// } else {
//   console.log("Grade A+");
// }

// switch statement
// program, take a section from student and print class timing
// var userSection = prompt("Enter your section!");
// // userSection == A;
// switch (userSection) {
//   case "A": {
//     console.log("Your class timing is . 11 am to 1PM");
//     break;
//   }

//   case "B": {
//     console.log("Your class timing is . 2 PM to 5PM");
//     break;
//   }

//   case "C": {
//     console.log("Your class timing is . 5 PM to 7PM");
//     break;
//   }

//   case "D": {
//     console.log("Your class timing is . 2PM to 5PM");
//     break;
//   }
//   default: {
//     console.log("You are not enrol in this course");
//     break;
//   }
// }

// control will be here if specfic case true


// user input
// 1- Prompt
// 2- Input tag

// outPut
// 1- Console - developer
// 2- Alert - user
// output in any tag

// DOM
console.log("DOM is here,", document);

var accessPTag = document.getElementById("pera");
accessPTag.innerHTML = "Hell DOM!";
console.log("p tag is here", accessPTag);



// write a js program, calculate the sume of 5 + 2, and show the output in p tag;

var sum = 5 + 2; 
// var stringConcat = "Your result is here: " + sum; 
var stringConcat = `Your result is here: ${sum}`; 
accessPTag.innerHTML = stringConcat;

// write a js program, calculate the sume of 5 + 5, and show the output in h1 tag;
// var accessHTag = document.getElementById("mainHeading");
// console.log("h tag is here,", accessHTag);
// var result = 5 + 5;
// accessHTag.innerHTML =`Result is here, ${result}`;

// get the value from input tag
// let inputTag = document.getElementById("userName");
// console.log("inputTag", inputTag);
// console.log("input value", inputTag.value);
// console.log("input name", inputTag.name);

// var outPutTag = document.getElementById("output");
// outPutTag.innerHTML = inputTag.value;

// wite a js program take a input name through input tag, when user press submit than show the user Name with Welcome string in h3 tag!



function onClickHandler(){
var userName = document.getElementById("userName").value;
var output = `Welcome, ${userName}!`;
document.getElementById("output").innerHTML = output;
} 

var tagName = document.getElementById("mainHeading");