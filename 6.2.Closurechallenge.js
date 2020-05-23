//Create a empty array Using a for loop insert three functions logging their corresponding index inside the array.
//Provide the solution in both ES5 and ES6

//ES6 (easiest)
let cars = [];
for(let i=0;i<3;i++){
    car[i] =function(){
        console.log(i);
    }
}
cars[0]();
cars[1]();
cars[2]();

//ES5
//using closures
var cars2 =[];


function fun(x){
    return function(){
        console.log(x);
    }
}

for(var i = 0;i<3;i++){
    cars2[i] = fun(i);
}

cars2[0]();
cars2[1]();
cars2[2]();