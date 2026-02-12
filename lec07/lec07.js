//DOM Manipulation
//Attributes
//getAttribute( ) => get attribute value of the element
//setAttribute ( attr, val) => set value of the attribute

let div = document.querySelector ("div");
console.log(div);
let val =div.getAttribute("class");
console.log(val);
let val2 =div.getAttribute("name");
console.log(val2);
let para = document.querySelector("p");
console.log(para.getAttribute("class"));

let para2 = document.querySelector("p");
console.log(para2.setAttribute("class","newClass"));

//node.style -> get style
let mydiv = document.querySelector(".initialdiv");
console.log(mydiv.style);
mydiv.style.backgroundColor="pink";
mydiv.style.color="dodgerBlue";
mydiv.style.fontSize = "26px";
//mydiv.style.visibility = "hidden";

//Insert Elements => 2 step process 1.create element 2.add
//let el=document.createElements("div");
//node.append(el); //add at the end of the node (inside)
//node.prepend(el); //add at the start of the node (inside)
//node.before(el); //add before the node (outside)
//node.after(el); //add after the node (outside)
//node.remove();
//Create element
let newbtn = document.createElement('button');
newbtn.innerText = "click";
console.log(newbtn);
//Add element on DOM
    //accessing div
    //div.append(newbtn); button will be render on the end of div
//div.prepend(newbtn);
// div.after(newbtn);
//div.before(newbtn);

para.remove();

//appendChild() => mrthod of node interface adds a node to the end of the list of children of a specified parent node.
let divElement = document.querySelector(".div-el");
let newEl = document.createElement("p");
newEl.innerText = "this is the new para render on the body through js";
console.log(newEl);
divElement.appendChild(newEl);

//The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
//parent.removeChild(child);
let newPara = document.createElement("b");
newPara.innerText = "this is a bold text we are rendering on document through js";
divElement.appendChild(newPara);
divElement.removeChild(newPara);
//replace-child
let parentEl = document.getElementById("parent-div");
let oldChild = document.getElementById("red-para");
let newChild = document.createElement("button");
parentEl.append(newChild);
newChild.innerText = "Select";
parentEl.replaceChild(oldChild,newChild);

//Practice Question 1
let ques1 = document.querySelector("#quest1")
let mynewbtn = document.createElement("button");
mynewbtn.innerText = "Click me";
mynewbtn.style.backgroundColor="red";
mynewbtn.style.color= "white";
ques1.prepend(mynewbtn);

//Practice Question 2  => append new class in a tag (dont override it with old one)
//we can do this with classList
//The read-only classList property of the Element interface contains a live DOMTokenList collection representing the class attribute of the element. This can then be used to manipulate the class list.
// use the classList API to remove and add classes
//div.classList.remove("foo");
//div.classList.add("another-class");
let content = document.querySelector(".content");
content.getAttribute("class");
//content.setAttribute("class","newClass"); //overriding old class
content.classList.add("newClass");

