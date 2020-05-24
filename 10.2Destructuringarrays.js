//Destructuring allows us to access the data from arrays ,objetcs etc.

//ES5
var x =1,y=2;

//ES6
//any no of values can be declared and initialized using array
const [a,b] =[3,4];
console.log(a);
console.log(b);

const [p,q,r,s,t]=[1,2,3,4,5];
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);
//or is one line stmt
console.log(p,q,r,s);


//process return value in array format
function processString(x){
    return [x,x.length];
}
console.log(processString("Roshan"));

//result
//value = result.value;
//length = result.length;

const[value,length] = processString("Roshan");
console.log(value);
console.log(length);

//swap values of two varaibles
//ES5
var m=1,n=2;
var temp =m;
m=n;
n=temp;
console.log(m,n);

//ES6
let [c,d]=[3,4];
[c,d] = [d,c];//just one stmt in ES6
console.log(c,d);

//swapping three varaible in ES6 is easy than ES5

let [e,f,g]=[1,2,3];
[e,f,g] = [f,g,e];
console.log(e,f,g);

//default values
//ES6
let list =["amritsar"];
let [city,country = "India"] = list; //India is a default value for country
console.log(city,country);

//default values in ES5 is tedious
var cit =list[0];
var countr = list[1]=== undefined ? 'USA':list[1];
console.log(cit,countr);
