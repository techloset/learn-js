
var num1 = 5;
var num2 = 10
var test =  5 <= 5;
console.log("test", test);

// if condition
if( 5 < 3){
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
    console.log("8");
    console.log("9");
}

// if else
 var weather  = true;

 if(weather === true){
console.log("i will be there");
 }

 if (weather === false) {
    console.log("i will not be there");
 }

var num = 5;

 if (num % 2 === 0) {
     console.log("even");
     if (num < 5) {
         console.log(num);
     }
     else{

     }
 }
 else {
    console.log("odd");
 }


//  arrays
// var num1 = 0;
// var num2 = 1;
// var num3 = 2;

// console.log(num2);
// var num;
var a = ["naveed",6,8.8,true,8,false,32,98,435,700]
a[1] = 5;
console.log(a);
// a.push(25)
// a.push(20)

// a.pop()

// a.unshift(1)

// a.shift()

a.splice(2,0,"new value")


console.log(a);