// class Parent{
//     constructor(name, dob){
//    this.name = name;
//    this.dob = dob;
//     }

//     getDOB (){
//       console.log("dob here");
//     }


// }

// class Child extends Parent {
//     constructor(name, age){
//         super('s', '1')
//         this.name = name;
//         this.age = age;
//     }
//     getAge(){
//         console.log("child age method");
//     }
// }

// var childObj = new Child('A', '18')
// console.log("child ob", childObj.name);

// var parentObj = new Parent('sarwar', '10');

// parentObj.getDOB()

// var parentObj2 = new Parent('s', '11')
// console.log("parentObj2", parentObj2.name);
// console.log("parentObj",);


// var result = '';
// for (let index = 0; index < 10; index++) {
//     result = result  + `<li> ${index} </li>`
// }

// document.getElementById('list').innerHTML = result

// var car = {
//     color: 'red',

// }

// car.newP = 'test'

// delete car.color

// var newObj = {
//     ...car,
//     item1: 'test',

//     item2: 2

// }

// 'item1' in newObj


// console.log("car", car);

// window

// console.log("window", window.location.hostname);

var url = 'http://www.google.com';
let data = url.match('www');


console.log("data",data[0]);

// if (data === 'www'){
//     console.log('true');
// }
// console.log(url.indexIf('www'));

// window.location.href = 'https://google.com'
