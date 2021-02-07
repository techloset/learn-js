// DOM
// console.log('----------- document ---------')
// console.log(document.childNodes[1].childNodes[2]);
let targetNode = document.childNodes[1].childNodes[2];
console.log('targetNode', targetNode);

let counter = 0;
for (let index = 0; index < targetNode.childNodes.length; index++) {
   if (targetNode.childNodes[index].nodeName.toLocaleLowerCase()  === 'P') {
       counter++
   } 
}

console.log("counter", counter);

let pTag = document.getElementById('pTag');

// console.log(pTag.hasAttribute('class'));
// pTag.class = ''
// console.log(pTag.attributes);

// let currentState = 0;
// let  imageData = ['./imag1', 'image2', 'image3']

// for (let index = 0; index < imageData.length; index++) {
// currentState++
// src =  imageData[currentState];
    
// }

// currentState--

// let imageTarget = document.getElementById('slider');

// imageTarget.src = './tes.jpg'
// console.log('----------- end of document ---------')

// console.log('document A',document.childNodes[1].childNodes);
// let target = document

let divTag = document.getElementById("divTag");



let newPTag = document.createElement('p');
let simpleText = document.createTextNode('safdsd')
newPTag.appendChild(simpleText)

divTag.appendChild(newPTag);

// let newPTagByString = `<p id="sadf">mk</p>`

// divTag.innerHTML = newPTagByString;

// let asfd = document.getElementById('sadf')

let arr = ['jkh','black', 'cgj']
let chair = {
    name:'jgh',
    color:'black'
    
}

let car = {
  name :'',
  price:'',
  speed: function name(params) {
      
  }
}

let cars = [ {
    name :'',
    price:'',
  }, {
    name :'',
    price:'',
  },
  {
    name :'',
    price:'',
  }
]


cars[2].price
