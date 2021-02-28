//for loop

// alert("1");
// alert("1");
// alert("1");
// alert("1");
// alert("1");
// alert("1");
// alert("before loop")
// for (var index = 0; index < 5; index++) {
    
// console.log("outer loop", index);
// alert("test")
// for (let j = 0; j < 5; j++) {
// console.log("inner loop", j);
    
// }

// }
// alert("after loop")
//control

var stringData = "i love pakistan";
console.log("stringData", stringData.toLocaleLowerCase());
console.log("stringData", stringData.toUpperCase());

console.log("slice method", stringData.slice(5, 8));
// let count = 0;
// for (let index = 0; index < array.length; index++) {
//     if(stringData.slice(index, index+1) === 'n'){
//         count
//     }
    
    
// }

console.log("indexof ", stringData.indexOf("l"));
console.log("char at", stringData.charAt(5))

console.log("replace,", stringData.replace("love", "like"));

// var newText = text.replace(/World War II/g, "the Second World War");

var num = 1.31713
console.log("Math round", Math.round(num));
console.log("Math ceil", Math.ceil(num));
console.log("Math floor", Math.floor(num));

console.log("Math tofixed", num.toFixed(2));

console.log("Math random", Math.floor(Math.random() * 1000));

var num2 = 232.23;
console.log(parseInt("hgjk"));
console.log(parseFloat(num2));
console.log(num2.toString());

// var date = new Date()

// let days = ['Sun', 'Mon', 'Tue']

// let month = date.getMonth()
// // document.write(month)
// console.log('date', days[date.getDay()]);
// console.log('date', date.getMonth());
// console.log('date', date.getDate());
// console.log('date', date.getFullYear());

var date = new Date();
date.setFullYear(2035)
// console.log('date', days[date.getDay()]);
console.log('date', date.getMonth());
console.log('date', date.getDate());
console.log('date', date.getFullYear());










