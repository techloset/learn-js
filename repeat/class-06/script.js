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

var myTextVar = 'Naveed';

//new element
var emptyDiv = document.getElementById(`emptyDiv`);
emptyDiv.innerHTML = `<p>${myTextVar}</p>`

var pTag = 

emptyDiv.appendChild(pTag);




// Object



