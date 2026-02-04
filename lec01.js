
//to print on screen/console/terminal
console.log("Hello! my first js code");
//variables => containers for data
//let => variables cannot be re-declared but updated, blocked scope
//var => variables can be re-declared & updated, global scope
//const => variables cannot be re-declared & updated, blocked scope
let age=34;
let fullName="Noor Fatimah";
const Id="1234";
//dataTypes
//Primitive=>number,string,boolean,undefined,bigint,symbol
//NonPrimitive=>Objects -> arrays,functions
//Practice Qustion 1
const product={
    productName:"Ball pen", 
    price:270,
    rating:4,
    offer:5,
    isOnDeal:true,
};
console.log(product); //{productName: 'Ball pen', price: 270, rating: 4, offer: 5, isOnDeal: true}
console.log(typeof product); //object
console.log(product["productName"]); //Ball pen
console.log(product.price); //270
product["price"]=product["price"]+20; 
console.log(product["price"]); //290
//Practice Qustion 2
const profile={
    username:"noor",
    Followers:270,
    following:120,
    posts:128,
    isFollow:true
};
console.log(profile["username"]); //noor