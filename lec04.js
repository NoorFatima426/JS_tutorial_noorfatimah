//Array => Collection of data =>Linear way to store collections =>array itself an object
let marks=[23,34,54,67,89];
console.log(marks);
console.log(marks.length); //returns numbers of items
let heros=["ironman","batman","thor","spidrman"];
console.log(typeof heros);
//Array indicies => starts from 0, means first element is at 0th index
console.log("at 0th index of hero array: ",heros[0]);
console.log("at 3th index of hero array: ",heros[3]);
console.log("at 5th index of hero array: ",heros[5]); //undefined => we're trying to access the index that is not the part of array
heros[0]="doremon"; //arrays are immutable
console.log("0th index of heros array is: ",heros[0]);
//Looping over an Array
//arrays ,objects and strings are iterable
console.log("For loop");
for(let i=0;i<heros.length;i++){
    console.log(`at ${i}th index`,heros[i]);
}
console.log("for of loop"); //preferable
for(let el of heros){
    console.log("heros: ",el);
}
let cities=["Rwp","RYK","ISL","LHR"];
for(let city in cities){
    console.log("cities: ",city.toLowerCase());
}
//Practice question 1
console.log("Array Practice Question: ");
let marksArray=[24,45,67,87,43,9,12,45,64,21]; 
let sum=0;
let avg=0;
// for(let marks in marksArray){  //it works over indexs and 
//     sum=sum+marks;
// }
// console.log("Sum of Marks are: ",sum); //00123456789
//  avg=sum/marksArray.length;
// console.log("Avg marks are: ",avg); //12345678.9
for(let marks of marksArray){  //it works over indexs and 
    sum=sum+marks;
}
console.log("Sum of Marks are: ",sum); //417
 avg=sum/marksArray.length;
console.log("Avg marks are: ",avg); //41.7
//Practice question 2 
console.log("Question 2");
let prices=[250,645,300,900,50];
let idx=0;
for(let val of prices){
    console.log(`value at index ${idx} is ${val}`); //for of m hm value le lety hyn index nhi=> but hm yhn index ko b access krhy hyn
    let offer=val/10;
    val-=offer;
    prices[idx]=val;
    //console.log("Value after change: ",val); //no changes
    console.log("value after offer: ",prices[idx]);
    idx++;
}
console.log(prices);
 prices=[250,645,300,900,50];
//for loop
for(let i=0;i<prices.length;i++){
    let offer=prices[i]/10;
    prices[i]-=offer;
}
console.log(prices);
//Arrays method => some methods change arrays , some methods return a new array
//Pop => delete to end => change in original arrays
//push => add to end => change in original arrays
//toString => convert arrays to string => donot change in original arrays
//concatt => join arrys  => donot change in original arrays
//unshift => works like push (add elemsnt in start of array) => change in original arrays
//shift => works like pop (remove element from start) => change in original arrays
//slice => return a piece of array , works some as slice in strng => doot change in original array => sometimes works to copy an array 
//splice => add, remove, replace => takes 3 parameter (starting index, no of items to be deleted , add new elements) => changes in original arrays
let veges=["okra","tomato","potato","onion"];
let fruits=["apple","mango","banana","pear"];
veges.push("cucumber");
console.log(veges);
veges.pop();
veges.pop();
console.log(veges);
console.log(veges.toString());  //okra,tomato,potato
console.log(veges); //return the previous array , donot change in original one => ['okra', 'tomato', 'potato']
console.log(typeof veges); //object
console.log(veges.concat(fruits)); // ['okra', 'tomato', 'potato', 'apple', 'mango', 'banana', 'pear']
console.log(veges); // ['okra', 'tomato', 'potato'] donot chnage in original one
veges.unshift("ladyfinger");
console.log(veges);
console.log(veges.slice(1,3)); //['okra', 'tomato']
console.log(veges.slice()); //returns all elements of arrays => sometimes use to copy arrays
let marksArrays =[21,23,45,65,32,34,11,24,67,98,54,0,11,23,43];
marksArrays.splice(4,3,101,110,123,404);
console.log(marksArrays); //[21, 23, 45, 65, 101, 110, 123, 404, 24, 67, 98, 54, 0, 11, 23, 43]
//Element add
marksArrays.splice(2,0,901);
console.log(marksArrays); //[21, 23, 901, 45, 65, 101, 110, 123, 404, 24, 67, 98, 54, 0, 11, 23, 43]
//Element delete
marksArrays.splice(3,1);
console.log(marksArrays); //(16) [21, 23, 901, 65, 101, 110, 123, 404, 24, 67, 98, 54, 0, 11, 23, 43]
//Replace elements
marksArrays.splice(4,1,999);
console.log(marksArrays); //(16) [21, 23, 901, 65, 999, 110, 123, 404, 24, 67, 98, 54, 0, 11, 23, 43]
//splice(4) => starts from index 4 and delete all items
//Practice question 3
console.log("Prcatice question 3");
let companies=["Boomberg","Microsoft","Google","IBM","Uber"]
console.log(companies.shift()); //delete first item
console.log(companies);
//remove uber and add ola =>replace
companies.splice(3,1,"Ola");
console.log(companies);
//remove elements from last
companies.pop();
console.log(companies);

