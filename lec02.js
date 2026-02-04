//this is single line comment => comments never executed
/* this is multi
 line comment*/
 // ========= Operators =======
//Arthematic Operator => +,-,*,/
let a=7;
let b=3;
console.log("a = " ,a , "& b = ", b);
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
//Additional Operators in programming
//Modulus => % (prints remainder)
//Exponent => means power => **
//(Unary operators)
//Increment => ++ (Unary operators)
//Decrement => --
console.log("a%b = ",a%b);
a++;
console.log("a++ = ",a);
b--;
console.log("b-- = ",b);
// ++a => pre increment
//a++ => post increment
// --a => pre decrement
//a-- =>post decrement
console.log("a++ ",a++); //8
console.log("++a ",++a); //10
console.log("a-- ",a--); //10
console.log("--a ",--a); //8
//Assignment opeartor = (right value assigned to left value )
let c=9;
c+=6; //compound operator 
console.log("c: ",c); //15
c-=2;
console.log("c: ",c); //13
c*=2;
console.log("c: ",c); //26
c**=2;
console.log("c: ",c);//676
c/=6;
console.log("c: ",c); //112.667
//Comparison Operator =>returns boolean value
//Equal to ==
//Equal to and type ===
//Not Equal to !=
//Not Equal to and type !==
let num1=8;
let num2=7;
console.log("num1: ",num1," & num2: ",num2); 
console.log("num1==num2",num1==num2); //false
console.log("num1!=num2",num1!=num2); //true
//Strict check
let str1="8";
console.log("num1: ",num1," & str1: ",str1);
console.log("num1===str1",num1===str1); //false
console.log("num1!==str1",num1!==str1); //true
//Logical Opeartors (Evaluates Multiple EXpressions and returns true and false)
//Logical AND &&
//Logical OR !!
//Logical NOT !
a=9;
b=8;
let cond1 = a > b;
let cond2 = a == 8;
console.log("cond1 && cond2 ", cond1 && cond2); //false
console.log("cond1 || cond2 ", cond1 || cond2); //true
console.log("(!cond1)", !cond1); //false
//Conditional Statements
// //IF
let age=23;
if(age>18){
    console.log("you can vote");
}
//if else
let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
else{
    color:"white";
}
console.log("mode: ",mode);
//even / odd
let num=80;
if(num%2==0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}
//if else if else
    if(mode==="dark"){
        color="black";
    }else if(mode==="pink"){
        color="pink";
    }
    else if(mode==="blue"){
        color="blue";
    }else{
        color="white";
    }
    console.log("color: ",color); //black
    //Ternary Opeartors => takes three opeartors
    // condition ? true consition : false output
    //a ?b : c 
    let myage=22;
    age >=18 ? console.log("Adult") : console.log("Underage") //Adult
    //Switch statement
    let myChar="U"
    switch(myChar)
        {
    case "A":
        console.log("Vowels");
        break;
     case "E":
        console.log("Vowels");
        break;
    case "I":
        console.log("Vowels");
        break;
     case "O":
        console.log("Vowels");
        break;
     case "U":
        console.log("Vowels");
        break;
    default:
        console.log("Consonants");
}
//practice ques 1
//get user to input a number using prompt and check whether the number is multiple of 5 or not
// alert("We are going to take an input from you");//one time popup
// let user_input = prompt("Enter a number please");
// console.log(user_input);
// if(user_input%5===0){
//     console.log("number is multiple of 05");
// }
// else{
//     console.log("number is not a multiple of 05");
// }
//Practice Question 2
let grade;
let marks=85;
if(marks >=  90 && marks <= 100) {
    grade='A'
}
else if(marks >=70  && marks <= 89){
    grade='B';
}
else if(marks>=60 && marks<=69){
    grade='C';
}
else if(marks>=50 && marks<= 59){
    grade='D';
}
else if(marks>=0 && marks<=49){
    grade='F';
}
console.log(grade);