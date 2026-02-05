//Loops in js => execute piece of code again and again
//for loop
console.log("for loop");
for(let i=0;i<=5;i++){
    console.log("value of i: ",i);
}
//Calculate sum of 1 to 5
let sum=0;
for(let i=0;i<5;i++){
    sum=sum+i;
}
console.log("value of sum is: ",sum);
//Infinite loops => loops that never ends =>stopping condition never returns false
//Avoid using infinite loops => it can leads to memory leakage etc 
/* for(int i=1 ;i>=0; i++){ //infinite loop => condition never returns false
    console.log("i: ",i);
}*/
//While Loop
console.log("While loop");
let i=1;
let n=10;
let res=0;
while(i<=n){ //condition checks in start
    res=res+i;
    i++;
}
console.log("res: ",res);
//Do while loop
console.log("Do while loop"); //loop runs once and then condition is check
let count=9;
do{
    console.log("count: ",count);
}while(count>10);
//For of lOOp //Helps to iterate on strings and arrays
console.log("For Of Loop");
//Syntax => for (loop-var of string-var)
let namee = "NoorFatimah";
let size=0;
for(let val of namee)//val initialize automatically and increment automatically and we dont need to check condition
    {
        console.log("val: ",val);
        size++;
}
console.log("string size: ",size); //11
//For in Loop => arrays/Objects
//for(let key in Objvar) =>key contains object keys 
console.log("For in Loop");
const student={
    stu_name:"NoorFatimah",
    age:23,
    cpga:3.8,
    isPass:true
};
for(let key in student){
    console.log("key: ",key," value: ",student[key]);//Reason that we donot write key in js is that key is a variable (of loop) not the actual key in object
}
//Practice Question
console.log("Practice question 1");
for(let i=1;i<=100;i++){
    if(i%2===0){
        console.log("value of i is ",i," and it is an even number");
    }
}
//Practice Question 2
console.log("Practice question 2");
let gameNum =25;
let userNum= prompt("Guess the number");
console.log("User has entered: ",userNum);
while(userNum!=gameNum){
    userNum=prompt("You have gussed the wrong number :( guess again: "); //prompt always return string datatype

}
console.log("Congratulations! you've entered the right number");


//Strings
//Sequence of characters used to represent the text
let str= "Afifa"; //Create strings => strings can be created using double and single quotations
console.log("length of string: ",str.length);
//We can access the position of charcaters str[0] to str[n]
console.log("Acessing index 3 of str: ",str[3]);
//Template Literals
let strLiteral = `My name is noor`;
console.log(strLiteral);
console.log(typeof strLiteral);
//Use case
const obj={
    item:"pen",
    price:12
}
console.log("The cost of ",obj.item," is ",obj.price); //old way
console.log(`the price of ${obj.item} is ${obj.price} rupees`); //new => string interpolation
//Escape Charcters => count as a single characters
// /n => new line
// /t => tab space
console.log("noor\nFatimah");
console.log("noor\tFatimah"); 
//String Methods =>built in functions to manipulate the strings
let objName="Basket";
console.log(objName.toUpperCase()); //toLowerCase => basket
console.log(objName);
let strTrim="     Noor Fatimah   ";
console.log("string to Trim: ",strTrim.trim()); //remove white spcaces from start or end
//Strings are mutable =>never change in original =>for changes craete another string
//str.slice(start,end?) =>Return the part of string
//str1.concat(str2) =>join str2 to str1
//str1.replace(searchVal,newVal) 
//str.charAt(indx);
let nums= "012345678";
let nums2="Noor";
console.log(nums.slice(0,4)); //0123
console.log(nums.replace(2,22)); //0122345678
console.log(nums.concat(nums2)); //012345678Noor + opeartor are also used to concatenate the strings
console.log(nums.charAt(2)); //2
//Practice question 1
console.log("String Practice question");
let userInput = prompt("Enter your full name (no spaces allows");
let userName = "@"+userInput+userInput.length;
console.log("userInput: ",userInput);
console.log("userName: ",userName);
