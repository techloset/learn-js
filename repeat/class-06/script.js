// DOM



function changeColor() {
 var pTags = document.getElementsByTagName('p');
console.log("pTags", pTags);
pTags[0].style.backgroundColor = 'red'
for (let index = 0; index < pTags.length; index++) {
    var element = pTags[index];
    // if (index % 2 == 0) {
        element.style.backgroundColor = 'red'

    // }

}
}

var myDiv = document.getElementById('myDiv');
console.log("myDIv child", myDiv.childNodes);
var myClassPTags = myDiv.getElementsByClassName('myClass');
console.log("myClassPTags", myClassPTags);

// console.log(" document.childNodes",  document.childNodes[1].childNodes[2].childNodes[3]);
var pTagMyClass = document.childNodes[1].childNodes[2]
console.log("pTagMyClass", pTagMyClass);

// attributes
let checkAtt = pTagMyClass.hasAttribute('class');
let getAttributes = pTagMyClass.attributes
pTagMyClass.setAttribute('','')

{/* <h1> </h1>
var myTextVar = 'Naveed'; */}

// //new element
// var emptyDiv = document.getElementById(`emptyDiv`).innerHTML;
// emptyDiv.innerHTML = `<p>${myTextVar}</p>`

// var pTag = 

// emptyDiv.appendChild(pTag);




// Object
// background 
// var brandName = 'honda'
// 0 mean brandname
var cars = [{
    brandName: 'honda',
    color:'white',
    model: '2010',

}, {
    brandName: 'honda',
    color:'white',
    model: [],

},{
    brandName: 'honda',
    color:{

    },
    model: '2010',

}]

var car = {
    brandName: 'honda',
    color:'white',
    model: '2010',

}

var car1 = {
    brandName: 'honda',
    color:'white',
    model: '2010',

}
var car3 = {
    brandName: 'honda',
    color:'white',
    model: '2010',

}
\

cars[0].brandName