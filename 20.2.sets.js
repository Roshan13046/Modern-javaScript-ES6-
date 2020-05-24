//Set : it's a collection of unique elements .

let set1 = new Set();
set1.add("Roshan");
set1.add(23);
const phone = {
    make: "Smsu",
    model: "J7"
};
set1.add(phone);
set1.add(document.body);
console.log(set1);

//pass an iterable object to the set constructor
let set2 = new Set("namo",2,2,3,3,3,3,"Roshan","Roshan");
console.log(set2);

let set3 = new Set("hello");
console.log(set3);//Note: o/p:  h,e,l,o

//similar methods to maps
console.log(set1.has(phone));
console.log(set1.has({
    make: "Smsu",
    model: "J7"
}));//objects are not equal
console.log(phone === {
    make: "Smsu",
    model: "J7"
});

//console.log(set1.delete(phone));
//console.log(set1);
//
////clear all the set value to make it empty
//set1.clear();
//console.log(set1);


//iterate a loop over set


///for of loop
console.log("For of loop : ")
for(const value of set1){
    console.log(value)
}

console.log("[key ,value ] : ");
//note: in sets key and value both are same
for(const [key,value] of set1.entries()){
    console.log(key,value);
}

console.log("Sets key printing : ");
for(const key of set1.keys()){
    console.log(key);
}

console.log("sets values printing :");
for(const value of set1.values()){
    console.log(value);
}

//iteration with forEach
console.log("iteration with forEach : ");

set1.forEach((value)=>{
    console.log(value);
});

//from 
//...
//copying the ste elemnts into array and printing the array

const array = [ ...set1];
console.log("Array elelments : ");
console.log(array);


//Sets intersection and Difference challenge 
//set1 and set2
//intSet and difSet
//****Note: use filter function of arrays eg: 
console.log([1,2,3,4].filter((item) => item > 2));

set1.add('n');
set1.add('a');
console.log("set1:",set1);
console.log("set2:",set2);

//intersection
const intArray = [...set1].filter((item) => set2.has(item));
const intSet = new Set(intArray)
console.log("intersection: ",intSet);

//differnce of set1 - set2
const difSet1Set2 = [...set1].filter((item) => set2.has(item)===false);
const difSet1andSet2 = new Set(difSet1Set2);
console.log("set1 - set2 : ",difSet1andSet2);


//differnce of set2 - set1
const difSet2Set1 = [...set2].filter((item) => set1.has(item)===false);

const difSet2andSet1 = new Set(difSet2Set1);
console.log("set2 - set1  : ",difSet2andSet1);






