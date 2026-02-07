//Functions => provides reusability => Block of code that perform any task and can be invoked whenever needed =>Avoid Redundancy(Repetiton)
function myFunction(){ //Function definition
    console.log("Welcome Everyone!\n we are learning js.");    
}
myFunction(); //function invoked
//Functions with parameter (consider as an input)
function myFun(msg){
    console.log(msg);
}
myFun(); //undefined as we have not given an argument or not sent msg
let msg="Hey there";
myFun(msg); //Hey there
//Function that caluclates sum of two numbers
function sum(a,b){ //a, b parameters act as a local variable
    return a+b; //we ccan return only one value, it can be a string, number, array etc but there will be one variable only 
    //After return no code will be executed,(Unreachable code detected)
}
console.log(sum(3,4));
//Arrow Functions
//A compact way to write a function
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(2,6));
//Practice question
console.log("Print vowels from the string");
function printVowels(userInput){
    let count=0;
    for(let v of userInput){
        if(v==='a' || v==='e' || v==='i' || v==='o' || v==='u'){
            console.log(v);
            count++;
        }
    }
     console.log("number of vowels in given string: ",count);
}
printVowels("afifa"); //a i a
//printVowels("noor"); //o o
//printVowels("usman"); //u a
//Practice question
const countVowels= (userInput) => {
     let count=0;
    for(let v of userInput){
        if(v==='a' || v==='e' || v==='i' || v==='o' || v==='u'){
            console.log(v);
            count++;
        }
    }
     console.log("number of vowels in given string: ",count);
}
countVowels("ali"); //a i 2


//For Each is loop generally use of arrays => ForEach is actually a method 
//forEach(callBack Function) =>callBack is actually a function used to execute for each element in the array
//callBack method is pass as an argument to another method 
//function can pass as a parameters and can use its value
//there is no need to call a callBack function, forEach automatically invoked it
let arr=[1,2,3,4,5,6,5];
console.log("For Each on Array");
arr.forEach(function printArr(val){
    console.log(val);
});
//For Each => arrow call Back
let arrString=["noor","afifa","neha","zoya"];
arrString.forEach((val)=> {
    console.log(val.toUpperCase());
});
//Call Back and 3 paramters (options) 
//1st parameter => value placed at index
//2nd => index/position
//3rd => array itself

arrString.forEach(( val , idx , arrString) => {
    console.log(val , idx ,arrString);
});

//forEach method will only be use of arrays not for strings
//Higher order functions? => forEach method is a higher order method 
//higher order method uses other function as a parameter and return the other function

//Practice question
let squareArray = [1,2,3,4,5,6,7,8,9];
let sqrt;
squareArray.forEach( (val) => {
   sqrt= val*val;
    console.log(sqrt);
} )

//another method of writing callback 
function calcSquare(num){
    sqrt= num*num;
    console.log(sqrt);
}
squareArray.forEach(calcSquare);


//Modern Array Methods 
//Map method is similar to forEach => Perform operation for each element of Array
//Map method returns an array , for Each donot return an array

//Syntax => arr.map(useCallback,index,array)
let num=[2,4,6,8];
num.map(val=>{
    console.log(val);
});
//copy array
let numArr=num.map((val => {
    return val**2}));
    console.log(numArr); //return the new array

//Filter Array =>visit each index of array and filter some values based on some conditions => returns an array
//pass callback
 
let filterArray = [2,4,6,8,10,2,3,5,7,9];
const resFilter=filterArray.filter( (val) => {
     return val%2===0;
} );
console.log(resFilter);


//Reduce => perform operations on all elements of array and then return a single output
//Perform operations and reduce the array to the single value and then return the single output
//pass callback 

let redArr = [2,3,4,5];
const output=redArr.reduce( (res, curr) => { //res=2(1st element) and curr=3(2nd element) (from the redArr)
    return res+curr;
} )
console.log(output);

//return largest
const output2=redArr.reduce( (res, curr) => { //res=2(1st element) and curr=3(2nd element) (from the redArr)
    return res>curr ? res : curr;
} )
console.log(output2);

//Practice Question
//filter out the marks whoes values is > 90
let marksArray = [23,45,97,86,99,90,21,67,92];
let toppers = marksArray.filter( (val) => {
    return val > 90;
});

console.log(toppers);

//Practice Question
//Ask user for a number , create array of that size, use reduce to calcualte sum of all method and product


let n = prompt("Enter the number: ");
let myArr= [];
for(let i=1;i<=n;i++){
    myArr[i-1]=i;
}
console.log(myArr);
let resultSum= myArr.reduce( (res,curr) => {
    return res+curr;
} );
console.log(resultSum);
let factorialResult = myArr.reduce( (res,curr) => {
    return res*curr;
} );
console.log(factorialResult);