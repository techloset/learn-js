// example for loop with dom
var output = ""
for (let index = 1; index <= 10; index++) {
 output = output + `<tr><td>2</td><td>*</td><td>${index}</td><td>=</td><td>${index * 2}</td></tr>`
}
var tableId = document.getElementById("printTable");
tableId.innerHTML = output;

// loop on arrays
var cities = ["lhr", "fsd","khi", "isb", "mul"];
// console.log("city", cities[0]);
// console.log("city", cities[1]);
// console.log("city", cities[2]);
// console.log("city", cities[3]);
// console.log("city", cities[4]);
// alternative 


// way to find array total length
var totalLengthOfCitiesArr = cities.length;
for (let index = 0; index < cities.length; index++) {
    // console.log("index",index);
    // console.log("city", cities[index]);
}

// while loop
var index = 7;
while (index < cities.length) {
    console.log("index",index);
    console.log("city", cities[index]);
    index = index + 1;
}

var i = 1;
// do while loop excute at least once even if the condition not met
do {
// console.log("i", i);
i++;
}while(i < 5)

// for each loop - arrays
cities.forEach(city => {
    console.log("city in foreach loop", city);
});

cities.forEach(function (city){
    console.log("city in foreach loop", city);
});

// arrow function
// var addTwoNum = (a,b) => {
// return a + b;
// }
var addTwoNum = (a,b) => a + b;
var out = addTwoNum(3,5);
console.log("out",out);

function addTwoNum2(a,b) {
return a + b;
}

var res = addTwoNum2(2,3);
console.log("res",res);


// write a js program loop on cities array and find khi, if it is found than you should alert fsd exists in array

var flag = false;
for (let index = 0; index < cities.length; index++) {
    console.log("city", cities[index]);
    if(cities[index].toLocaleLowerCase() === 'khi'){
   flag = true;
   break;
  }
}

if (flag) {
    // alert("Success! Khi exist in cities array")
}

// nested loop, 
// loop in a loop is called nested loop

for (let i = 0; i < 5; i++) {
    // console.log("i = ", i);

    for (let j = 0; j < 5; j++) {
        // console.log("j = ", j);

        for (let k = 0; k < 10; k++) {
            // console.log("k = ", k);     
       }
    }
}


// when we take input from user, 
// var userName = prompt("enter your username");
// console.log(userName.toLocaleLowerCase());

var stringSample = "AbSDFsadf";
stringSample.toLocaleLowerCase()
console.log(stringSample.toLocaleLowerCase())
stringSample.toUpperCase()
console.log(stringSample.toUpperCase())

// strings manipulations
var city = "Faisalabad";
var firstCharOfCity = city.slice(0,1);
console.log(firstCharOfCity);

function onSubmitHandler() {

var userName = document.getElementById("username").value;
    // email validation
    var email = document.getElementById("email").value;
// validation
var flag = true
var output = ""
for (let index = 0; index < userName.length; index++) {
    console.log("char ", userName.slice(index, index +1));
    if(userName.slice(index,index + 1) == " ")
    {
       output = output + "<li>user name should not contain any space<li>"        
    }
 if (email.slice(index, index + 1) === "@") {
     flag = false;
 }
}
if (flag) {

  output = output + "<li>please add valid email<li>"        

}
document.getElementById("errorList").innerHTML = output;


}




// string indexOf

var someString = "saylani web and mobile"
console.log("index of", someString.indexOf("e"));

console.log("last index of", someString.lastIndexOf("e"))
// validation without loop
function onSubmitHandler2() {

    var userName = document.getElementById("username").value;
        // email validation
        var email = document.getElementById("email").value;
    // validation
    var output = ""

        if(userName.indexOf(" ") != -1)
        {
           output = output + "<li>user name should not contain any space<li>"        
        }
     if (email.indexOf("@") != -1) {
        output = output + "<li>please add valid email<li>"  
     }

    document.getElementById("errorList").innerHTML = output;
    
    
    }

// finding a char at location
var someStringData = "saylani web and mobile by Naveed sarwar mobile";
var chartAt = someStringData.slice(0,1);
console.log("chartAt with slice", chartAt);
chartAt = someStringData.charAt(0);
console.log("chartAt with chartat()", chartAt);
// var newString = someStringData.replace("mobile","mobile 2")

var newString = someStringData.replace(/mobile/g,"mobile 2")
console.log("newString", newString);



