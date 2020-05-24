//Some More Array Elements

const x = [1,2,3,4,5,6,7,8,9];
//find the first element greater than 6
console.log(x.find(value => value > 6));
console.log(x.findIndex(value => value > 6)); //to find that index

//find the first element which if added to its index , the sum is smaller than 5
console.log(x.find((value,index) => value + index < 6));

console.log(x.findIndex((value,index) => value + index < 6));


//get the index of a value
console.log(x.indexOf(3));//1
console.log(x.indexOf(222));//-1

//check if a value exists
console.log(x.includes(2));
console.log(x.includes(444));

console.log(x);
//copy in position 1 the chunk between 0 and 1

x.copyWithin(1,0,1);
console.log(x);

//copy in position 3 the chunk btw 1 and end
//x.copyWithin(2,1,8);
x.copyWithin(2,1);//last value is bydefault end value
console.log(x);

//copy in position 3 the first value of the array
x.copyWithin(3);//Note: it starts copying elements from start to end at position 3
console.log(x);

//fill x with 4's from position 1 to 1
x.fill(4,1,2);//Note: last index is not included in fill function it fill 4 from position 1 to 2-1 ie 1 to 1
console.log(x);


x.fill(33,2,5);//fill 33 from 2 to 4
console.log(x);


//fill x with (name:"Roshan") from position 2 to the end
x.fill({name:'Roshan'},2);//bydefault last value is last 
console.log(x);


//Note : imp concept
//check if values x[2] and x[3] are equal
console.log(x[2] === x[3]);//true because we are passing Reference only

console.log({name:"Roshan"} === {name:"Roshan"});//false
