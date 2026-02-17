//Classes and Objects
//Prototype in JS => A javaScript object is an entity having state and behaviour(properties and method)
//JS object have a special property called prototype
//we can set prototype using __proto__
//if object and prototype has same method, object method will be used

const student = {
    name:"noor fatimah",
    marks:90,
    printMarks:function () {
        console.log("marks= ",this.marks);
    },
}
console.log(student.name);
console.log(student["marks"]);
console.log(student.printMarks());

//prototype itself is an object, having some methods and properties
//object1
const employee={
    calcTax(){
        console.log("10% Tax from salary");
    },
    timing:8,
}
//object2 -> consider ali is new employee
const ali={
    salary:550,
    designation:'developer',
}
//there is no need to write calcTax() and timing again and again, simple we add object employee to ali and ali can acess all methods and properties of the employee
ali.__proto__=employee;
console.log(ali);
console.log(ali.__proto__);
console.log(ali.calcTax());
//object3
const usman={
    salary:850,
    designation:'QA'
}
usman.__proto__=employee;
console.log(usman);
console.log(usman.__proto__);
//object3
const afifa={
    salary:980,
    designation:"HR",
    calcTax(){
        console.log("tax rate is 20%"); //this method has higher property and this method will be run
    }
}
afifa.__proto__=employee;
console.log(afifa);
console.log(afifa.calcTax());

// Classes
//class is a program code template for creating objects 
//those objects will have some state(variable) , some properties (methods)

class toyotaCar{
    //Constructor -> 1. automatically invoked by new, 2. initialize object
    constructor(brand,milage){
        console.log("creating new object");
        this.brand=brand;
        this.milage=milage;
        console.log(brand,milage);
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
        console.log(brand);
    }
}

//to create an object 
//syntax -> let objName = new className();
let fortuner = new toyotaCar();
console.log("Fortuner");
console.log(fortuner);  //toyotaCar{}
console.log(typeof fortuner); //Object
console.log(fortuner.start()); //start
console.log(fortuner.stop()); //stop
console.log("my brand name is: ");
console.log(fortuner.setBrand('fortuner'));

let lexus = new toyotaCar();
console.log("Lexus");
console.log(lexus);  //toyotaCar{}
console.log(typeof lexus); //Object
console.log(lexus.start()); //start
console.log(lexus.stop()); //stop
console.log("my brand name is: ");
console.log(lexus.setBrand('lexus'));

let cultus = new toyotaCar('cultus',100);

//Inheritance -> inheritance is passing down classes and properties from parent class to child class -> keyword extends is used
//if child and parent has same classes, child method will be used (method overriding)

class Parent{
    hello(){
        console.log('hello');
    }
    printName(){
        console.log("My name is Noor Fatimah");
    }
}
class Child extends Parent{}

let obj = new Child();
console.log(obj);
console.log(obj.printName());

//Inheritance
class Person{
    //constructor()
    constructor(){
        console.log("enter parent constructor");
        this.species="Homo Sapiens";
        console.log("exit parent constructor");
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class Doctor extends Person{
    checkPatient(){
        console.log("Checking Patient");
    }
    breakTime(){
        console.log("Doctor is on break");
    }
    work(){
        console.log("Doctor is working. 10 appointments for today");
    }
}
class Developer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super(); //invoking parent class insrtructor
        this.branch=branch;
        console.log("exit child constructor");
    }
    developProduct(){
        console.log("Developer is developing Product");
    }
    qualityAssurance(){
        console.log("QA is checking product");
    }
    work(){
        super.eat();
        console.log("Developers are working");
    }
}

let p1 = new Person();
let d1 = new Doctor();
let dev1 = new Developer();
console.log(p1.sleep()); //sleep
console.log(d1.checkPatient()); //Checking Patient
console.log(d1.work()); //Doctor is working. 10 appointments for today
console.log(dev1.work()); //Developers are working
console.log(dev1.developProduct()); //Developer is developing Product

//super keyword -> used to call the parent class constructor to acess its properties and methods
let dev2= new Developer('Web Developer');
console.log(dev2);

//Prcatice Question 1
console.log("Practice Question1:");
let data="secret Information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("This is our website data");
        console.log(data);
    }
}

let stu1= new user("noor","abc@gmail.com");
//console.log(stu1.name);
//console.log(stu1.email);
let stu2= new user("ali","ali@gmail.com");
let stu3= new user("afifa","afifa@gmail.com");
let stu4= new user("usman","usman@gmail.com");
let teacher1 = new user("maria","deen@gmail.com");
stu1.viewData();
teacher1.viewData();
console.log(stu2);

//Prcatice ques2
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="Data is edited by Admin";
    }
}

let admin1 = new Admin("amber","admin@gmail.com");
console.log(admin1);

//Error Handling
let a=5;
let b=10;
console.log("a=",a,"b=",b);
try{
    console.log(a+c);
}
catch(er){
    console.log("here is an error: ",er);
}
