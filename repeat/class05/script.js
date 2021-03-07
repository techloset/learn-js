
// console.log("document", document);
// console.log("inputTag", inputTag);
// var userName =  inputTag.value;
// inputTag.value = ""
// console.log("userName", userName);
// var pTag = document.getElementById('myPTag');
// var tags = document.getElementsByTagName('p');
// console.log("tags", tags[0]);

function clearMe() {
    // inputTag.value = ""
    // var inputTag = document.getElementById('name');
    // var userName = inputTag.value;
    // console.log(inputTag.value);
    // inputTag.value = ""
    // backgroundColor
    // background-color
    // fontSize
    // font-size
    var pTag = document.getElementById("myPTag");
    pTag.style.backgroundColor = 'green'
    pTag.className = 'changeColor'
}

function nextImage() {
    // var myImage = document.getElementById("myImage");
    // myImage.src = "b.png"
var changeTextTag = document.getElementById("changeText");
var previousData = changeTextTag.innerHTML;
changeTextTag.innerHTML = "new value"

}

