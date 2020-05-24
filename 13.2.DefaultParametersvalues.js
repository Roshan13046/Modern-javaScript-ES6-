//DEFAULT PARAMETRS
//ES5 

function add(x,y){
    return(y==undefined) ? (x+0) : (x+y);
}

console.log(add(2));//2
console.log(add(2,3));//5

//ES6
const add2 = (x=0,y=0)=>x+y;

console.log(add2());//0
console.log(add2(3));//3

//using destructuring
function great([firstName='',lastName='']){
    console.log(`hello ${firstName} ${lastName}`);
};
great([]);
great(['Roshan']);
great(['Roshan','Raut']);

//some more default values concepts for objects
function cost({item:item='apples',price:price=0,quantity:quantity=0}={}){
    console.log(`Please pay Rs ${price * quantity} for ${quantity} ${item}`);
};

cost({item:"Mangoes",price:1,quantity:20});
cost({});
cost();//Note : for this we made ({objects}={})
