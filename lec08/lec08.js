//Events
//Event is the change in the state of an object (button)
//Events are fired to notify the interesting changes that may affect the code execution
//events can be geenrate from user as well as from environment such as low battery etc

//mouse events -> click , double click etc
//keyboard events -> keypress, keyup, keydown
//form event ->submit
//print event and many more

//syntax : node.event = () => {}

let myBtn = document.getElementById("mybtn");
myBtn.onclick = () => {
    console.log("Button is clickedd")
}

let box = document.getElementById("box");
box.onmouseover = () => {
    console.log("you are inside box");
}

//if we have handle any event in html and also in js , priority will be of js event handler
//it is not allowed to handle same event two times, last written snippet will override thw older one

//Event Object
//It is the special object that has information about the event => event.type , event target, event.clientX , event.clientY
//All event handlers have access to this Event Object and methods
//Syntax : node.event = (e) => { }

    //overriding (For prcatice)
myBtn.onclick = (e) => {
    console.log(e); //Printing event object => type= click , target=button#mybtn , clientX (horizontally khn p lie krha h) , clinetY (vertically)
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
}

box.onmouseover = (e) => {
    console.log(e);
    console.log(e.type); //mouseover
    console.log(e.target); //div
    console.log(e.clientX); //105
}

//Event Listeners
//Syntax : node.addEventListener(event,callback)
//Syntax : node.removeEventListener(event,callback) -> callback reference should be same to remove
//We can create multiple event listeners for a single event

//callback -> a function pass as a argument in the other function
let mybtn2 = document.getElementById("mybtn2");
let box2 = document.getElementById("box2");

mybtn2.addEventListener("click", () => console.log("Event is listened - handler1") //first event
);

mybtn2.addEventListener("click" , (e) => 
    {
        console.log("hey i am the second handler2")
        console.log(e.type);
    }); //we can write multiple event handlers for the same target

let handler3 =  (e) => 
    {
        console.log("hey i am the second handler3")
    }

mybtn2.addEventListener("click" ,handler3); 

mybtn2.addEventListener("click" , (e) => 
    {
        console.log("hey i am the second handler4")
    }); 

//removing the 3rd handler
// mybtn2.removeEventListener("click",
//     (e) => 
//     {
//         console.log("hey i am the second handler3"); //does not remove bcz memory m alag alag jghn p hyn, to remove uska refernce do, usko kisi variable m store krwa lo
//     }
// )

mybtn2.removeEventListener("click",handler3);

box2.addEventListener("mouseover" , () => console.log("event is listened box"));

//Prcatice Question
let toggleBtn = document.getElementById("toggleBtn");
let body = document.querySelector("body");
let currentMode = "light";
toggleBtn.addEventListener("click",()=>{
    // console.log("you are trying to change the mode");
    if(currentMode === "light"){
        currentMode = "dark";
        body.style.backgroundColor = "black";
        //if we are also using CSS class we can simple do this
        // body.classList.add("dark"); => dark is the class that will be define in css file
        //body.classList.remove("light");
        console.log(currentMode);
    }
    else{
        currentMode ="light";
         body.style.backgroundColor = "white";
        color:"black";
        console.log(currentMode);
    }
})

//Practice Question 2
let toggleBox = document.getElementById("toggleBox");
let boxColor = "red";
toggleBox.addEventListener("mouseover", (e) => {
    if(boxColor==="red"){
        toggleBox.style.backgroundColor = "green";
        boxColor="green";
    }
    else{
        toggleBox.style.backgroundColor = "red";
        boxColor="red";
    }
})