//DOM => Document Object Model Lec 6 => Access HTML in JS
//3 Heros of Frontend Developers HTML,CSS,JS

//Starter code 
//<style> tag connects html file with css file <link rel="stylesheet" href="filename.css"/> //we can have multiple css/js files
//<script> tag connects html file with js file (generally written before the ending body tag) => <script src="filename.js"></script>
//if we write script tag before body => js code will bw load first 

//benefits of separate js/css file 1-Readabilty enhance 2-Modularity 3-BrowserCache (Loading timing faster)

//window Object => Window Object represents an open window in the browser.Its Browser Object not JS object and is automatically created by browser
//it is a global object with multiple properties
//console.log,alert,prompt is part of window

//DOM => when web page is loaded, browser create a DOM of the page (available inside the window object) window object->document=-> model of our HTML page
//console.dir =>use to print special object  properties and methods

//Accessing html in js
console.log(window);
console.log(document.body);
console.dir(document.body);
console.dir(document.head);
console.log(document.head);
console.dir(document.body.childNodes[1]); 
document.body.childNodes[1].innerText="Hey There";


//DOM Manipulation
//Selecting with ID=>document.getElementByID
//Selecting with class=>document.getElementsByClassName //Return HTMLCollection; somehomw related to Arrays
//Selecting with ID=>document.getElementsByTagName //Returns HTML Collection

let heading = document.getElementById("heading");
console.log(heading);
let classHeading = document.getElementsByClassName("heading-class");
console.dir(classHeading);

//if we are trying to access an id that does not exits , it returns null
//if we are trying to access a class that does not exits , it returns empty  HTML Collection

let btn = document.getElementById("myBtn");
console.log(btn);

//Tag Name
let para=document.getElementsByTagName("p");
console.log(para);

//Query Selector => detects which type of Element we are trying to acess such as ID,Class,Tag
let Element=document.querySelector("p"); //return 1st element p
console.log(Element);
let alElement = document.querySelectorAll("p"); //return all p (Nodelist)
console.log(alElement);
let getID = document.querySelector("#myBtn"); //we can not use querySelectorAll for ID
console.log(getID);
let getClass = document.getElementsByClassName(".heading-class"); //retruns HTML Collection
console.log(getClass);

//DOM Manipulation where elements can be updated, manipulated, changed and deleted
//DOM manipulation properties
// tagName -> return tag for element nodes
// innerText -> return the text content of the elements and all of its children
//innerHTML -> return the plain text or HTML content of the elements
//textContent -> return the textual content even for the hidden elements

console.log(getID.tagName);
//DOM has three types of nodes 1. text 2.comment 3.Elements 
//first node is always text nodes and for development we all work on only elements dnode 
//in DOM tree creation, we focus on elements node
console.log(document.body.firstChild); //text
console.dir(document.querySelector("div").children); //returns HTML Collection
let div= document.querySelector("#div");
console.log(div);
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.textContent);
console.log(div.innerHTML="noor");
//textContent
let div2 = document.querySelector(".div2");
console.dir(div2);
console.dir(div2.innerHTML);
console.dir(div2.textContent);
//Practice Question
let myText = document.getElementById("pID");
myText.innerText = myText.innerText + "I am doing JS";
console.dir(myText);
//Practice question
let boxs=document.querySelectorAll(".box");
console.log(boxs);
let idx=1;
for(let box of boxs){
    console.log(box);
    box.innerText = ` here is box ${idx} `;
    idx++;

}
// console.log(boxs[0]);
// console.log(boxs[1]);
// console.log(boxs[2]);
// boxs[0].innerText="Here is the box 1";
// boxs[1].innerText="Here is the box 2";
// boxs[2].innerText="Here is the box 3";
