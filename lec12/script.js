//Call backs, Promises and Async JS
//async wait >> promise wait >> call back hell
//Synchronous -> code runs in the particular sequence of instructions given in the program
//each instruction waits for the previous instruction to complete its execution

//Asynchronous -> Due to synchronous programming , some important instructions get blocked due to some previous instructions which causes delay in UI
//Asynchronous code execution allow to execute next instructions immediately and does not block the flow 

//setTimeout() -> execute a function, when it will execute , we will decide it

const printHello = () => console.log("hello! after 5sec");  
setTimeout(printHello,5000) ; //2sec = 2000ms
console.log("hello from console");

setTimeout(()=>{ console.log("hello again"),3000});

//callBack is function passed as an argument to another function
function add(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallBack){
    sumCallBack(a,b);
}
calculator(2,3,add); //callBack function name will be passed without paranthesis

//callBack Hell -> Nested call Back stacked below one another forming a pyramid structure(Pyramid of Doom)
//this style of programming become difficult to understand and manage

function getData(id,getNextData){
    setTimeout(
        ()=>
            {console.log("data with data id= ",id);
              if(getNextData){
                getNextData();
              }  
            }
        ,2000);
}
//getData(1234,getData(122));//immediate execyte and there is no delay of 2 secs
//callBack Hell
getData(1234, 
    ()=>{
        getData(123211, 
            ()=>{
                getData(98761);
            }
        );
    }
);

//To overcome CallBack Hell, we have Promises
//Promises is for eventual completion of task it an object of js,(A solution of Call Back Hell)
//Syntax -> let promise=new Promise((accept,reject)=> {}); //function with two handlers
//resolve and reject are callBacks provided by jS

//Generally we dont create promise, we get promises from API etc and we just handle those promises

//Promise State -> Pending ,Fulfilled (Resolve), Reject
//our JS promise object will be 
//Pending -> result undefined
//fullfiled -> result has value
//Rejected -> result has an error

let promise0 = new Promise((resolve,reject)=>{ //Promise has 2 things (Promise State,Promise Result)
    console.log("I am a promise with pending state"); //Pending State
});

let promise1 = new Promise((resolve,reject)=>{ //Promise has 2 things (Promise State,Promise Result)
    console.log("I am a promise with fulfilled state"); //Fulfilled State
    resolve("Sucess"); //Resolve is created by js -> (Promise state= Fulfilled,Promise Result =Success)
});
promise1.catch((res)=>{
    console.log("sucess form promise 1");
})

let promise2 = new Promise((resolve,reject)=>{ //Promise has 2 things (Promise State,Promise Result)
    console.log("I am a promise with rejected state"); //Rejected State
    reject("Error Occured"); //Rejected is created by js -> (Promise state= Rejected,Promise Result =Error Occured)
});
promise2.catch((err)=>{
    console.log("error form promise 2");
});

const getPromiseData = (id,getNextData) => {
   return new Promise((resolve,reject)=>{
        setTimeout(
        ()=>  //statee pending
            {console.log("data with data id= ",id); //as sson as data printed -> state fulfilled
                resolve("Sucessfully printed data"); 
            }
        ,2000);
    });
}
//Promise chaining
getPromiseData(1).then((res)=>{
    console.log(res);
    getPromiseData(2).then((res)=>{
        console.log(res);
    });
});

//To use Promises we have two functions .then(res) is used when the promise is fulfiled , or if we have pending state it will be invoked when the state is changed to fulfilled, 
//.catch(err) is used when our promie is rejected 

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("i am a promise for practice");
        resolve("123");
         reject("some error occured");
    });
}
let promise=getPromise();
promise.then((res)=>{
    console.log("Yayy Fulfilled",res);
});
promise.catch((err)=>{
    console.log("Ops Error occured",err);
});

//Promises Chaining
function async1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("here is data1. /promise chaining");
            resolve("success");
        },2000);
    });
}

function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("here is data2. /promise chaining");
            resolve("success");
        },2000);
    });
}
console.log("Fetching data1");
let p1=async1();
p1.then((res)=>{
    console.log("here is data 1",res);
console.log("Fetching data2");
//method 2
async2().then((res)=>{
    console.log("here is data 2",res);
});
});

//Async Await
//Async await always return a promise
//async keyword is used with a function
//await pause the execution of its surrounding async function until the promise is settled
//await is used with an async function

function API(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000)
    });
}
async function getAPI(){
    await API(); //1st call
    await API(); //2nd call 
}

//getPromiseData
async function getAllData(){
    console.log("Asyn Await");
    await getPromiseData(123);
    await getPromiseData(223);
}
getAllData();

//IIFE -> Immediately invoked function expression
//it is invoked as soon as it is defined
//have no name, and is invoked only once
//syntax-> (func)()

(async function(){
    console.log("Asyn Await");
    await getPromiseData(123);
    await getPromiseData(223);
})();

