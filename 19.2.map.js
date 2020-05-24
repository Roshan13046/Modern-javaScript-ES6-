const CAR={
    make: 'Toyota',
    model: 'Yaris'
};

for(key in CAR){
    console.log(key);//order not guaranted
}
console.log(typeof CAR.forEach);//undefined

//Example 

let map1 = new Map([[1,"roshan"],[3,"Shubham"],[5,"Ashhh"]]);
console.log(map1);
//type
console.log(typeof map1);//object
map1.delete(1);//true //i deltes if that particular key is present in map and return bool value
map1.delete(2);//false
map1.delete(3);//true

console.log(map1);
console.log(map1.delete(4));//false
console.log(map1.delete(5));//true

//example 2

//making different data types
const [x,y,z] =[1,NaN,3];
const LANGUAGE = {
    name:'javaScript',
    version:"ES6"
};


const add =(x,y)=>x+y;
const str1="learning js for web development";
const str2 = "NAN is not Equal to itself,but this changes when it comes to maps";

let arr=[22,33];

let map2 = new Map();
console.log(map2);

//set key values
map2.set(x,y);
console.log(map2);

map2.set(y,str2);
console.log(map2);

map2.set(z,LANGUAGE);
console.log(map2);

map2.set(LANGUAGE,add);
console.log(map2);

map2.set(add,arr);  
console.log(map2);

map2.set(add,str2);
console.log(map2);

map2.set(add,str1);
console.log(map2);

map2.set(str1,str2);
console.log(map2);


//some more method of maps
console.log(map2.get(1));
console.log(map2.get(x));

console.log(map2.has(x));//true
console.log(map2.has(1));//true


//NOTE: concept here
console.log("IMP concepts in case of objects");
console.log(LANGUAGE ==={             //Note : false
    name:'javaScript',
    version:"ES6"
});
console.log(map2.get(LANGUAGE));
console.log(map2.has( {
    name:'javaScript',
    version:"ES6"
}
));//Undefined bcz :Objects are not equal as they are pass by refernce .Every object in javaScript has new reference.

console.log(map2.has(LANGUAGE));
console.log(map2.get( {
    name:'javaScript',
    version:"ES6"
}
));

//CASE of NaN
console.log(map2.get(y));
console.log(map2.get(NaN));//both gives same output in log
console.log(y === NaN);//false : NaN is not equal to itself but this changes when it comes to Maps.


console.log(map2.has(str1));
console.log(map2.has("learning js for web development"))
console.log(str1==="learning js for web development" );//true


//iteration with for of


//printing key and value 
for(const [key,value] of map2){
    console.log(`key:${key} -> Value: ${value} , `);
}

//printing only keys
for(const key of map2){
    console.log(key);
}
//printing only values
for(const value of map2){
    console.log(value);
}

//iterating using forEach 
map2.forEach((key,value) => {
   console.log(`key:${key} -> value:${value}`) ;
});


//iterator

const k = map2.entries();
//const k = map2.keys();//printing only keys
//const k = map2.values();//printing only values

console.log(k);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
