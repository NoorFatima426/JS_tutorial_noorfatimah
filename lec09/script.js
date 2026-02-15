let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("new-btn");
let msg = document.getElementById("msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true; // x , o
let count=0;
//2Darrays to store wining patterns (boxes 0 yo 8)
const winPatterns = [ 
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5],[6,7,8]
];

boxes.forEach( (box) => {
    box.addEventListener("click",()=> {
        if(turnO){
            box.innerText = "O";
            turnO=false;
            box.style.color="#b0413E"
            count++;
        }
        else{
            box.innerText = "X";
            turnO=true;
            box.style.color="rgb(52, 67, 94)"
            count++;
        }
        box.disabled=true; //so that if box has some text no one can override it
        checkWinner();
        console.log(count)
    })
} );

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () => {
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const showWinner = (winner) => {
    msg.innerText=`Congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count=0;
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]); to get positions of winning Patterns
       // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]); to get boxes
      //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText); to get Text X,O
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
       if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
        if(count===9){
             msg.innerText=`Game Draw`;
            msgContainer.classList.remove("hide");
        count=0;
        }
       }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);