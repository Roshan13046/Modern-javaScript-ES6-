//Spread Operator
//ES5
console.log(Math.min(1,2,4));
console.log(Math.max(1,2,4));

//but for array it wont work
console.log(Math.min([1,2,3,4]));//will not work

//solution for this is spread operator
//ES5
console.log(Math.min.apply(null,[1,2,3,4]));

//ES6
console.log(Math.min(...[1,2,3,4]));//using spread operator
let x = [3,4,17];
console.log(Math.max(1,2,3,...x,200));

//spread operator can also be used to insert inside a array
console.log([1,2,3,...x,9,10,11])

