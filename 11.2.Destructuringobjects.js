//ES6
const person ={name:"Roshan",age:34};
const {name:n,age:a} = person;
console.log(n,a);

//deep Matching
const {country:c,address:{
    postcode:p,housenumber:hn}} = {country:"UK",address:{
         postcode:"3321",housenumber: 2  }};
console.log(c,p,hn);

//same as(name:name,age:age)
const {name,age}=person;
console.log(name,age);


//default values
//const car={model:"xyz",country:"India"};
const car={model:"xyz"};
const{model:model,country:country="Bharat"} = car;//default value is Bharat
console.log(model,country);


//ES5
//if(car.country === undefined){}else{}

function processString(x){
    return {value:x,length:x.length};
}

const{value,length} = processString("Roshan");
console.log(value,length);
