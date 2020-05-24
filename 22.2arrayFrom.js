//******This content is about how to create arrays from differents collection,data types ,sets ,maps etc in ES6


//why we need to create arrays from other objects?
let arr = [1,2,3];
console.log(arr.map(x => x*2));
let str = "namastey";
console.log(arr.map); //works
console.log(str.map); //won't work

//to make it work in ES5 it's Laborious work
console.log(Array.prototype.map.call(str,function(x){
    return x+'a';
}));

const collection = document.getElementsByClassName('blue');
console.log(collection);
console.log(collection.slice);
//ES5:
console.log(Array.prototype.slice.call(collection,1,3));


//create an array from a collection
//IN ES6
console.log(Array.from(collection));

//Create an array from a string
console.log(Array.from(str));


//Create an array from function arguments
function g(x,y){
    console.log(arguments);
    console.log(Array.from(arguments));
}
g(1,2);


//*********************************************************
//Arrays from optional map , length property,Maps & Sets


//Use the optional map function
let str2 ="RoshanRaut";
console.log(Array.from(str2));
console.log(Array.from(str2, x=> x+","));
console.log(Array.from([1,2,3,4,5],x => x*2));

//from any object with length property
const obj = {length: 5};//fixed length variable
console.log(Array.from(obj));
console.log(Array.from(obj, value =>2));
console.log(Array.from(obj, (value,index)=>index*2));


//create an array from sets and Maps (iterable Objects)

const set = new Set();
set.add("Roshan");
set.add(22);
set.add(false);

console.log(set);
console.log(set.size);
console.log(Array.from(set));

const map = new Map([[1,"Roshan"],[3,false],[4,"Raut"],[6,222]]);
console.log(map);
console.log(map.size);
console.log(Array.from(map));




//****************************************************

//create an array of 1 element
const x = Array.of(5);
console.log(x);
console.log(x.length);

//Create an array of 8 elements 
const y = Array.of(1,2,3,4,5,6,7,8);
console.log(y);
console.log(y.length);

//This is not same as Array constructor both are different
const z = new Array(3);
console.log(z);//array with 3 empty slots




