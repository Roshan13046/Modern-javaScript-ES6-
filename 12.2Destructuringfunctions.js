//ES5
function f(arr){
    console.log('hello '+arr[0]+' '+arr[1]);
}

f(["Roshan","Raut"]);

//ES6
 function g([firstName,lastName]){
     console.log(`hello ${firstName} ${lastName}`);
 }

g(["Roshan","Raut"]);

//for more array elements

function k(arr){
    console.log("hello");
    for(var i=0;i<arr.length;i++){
        console.log(`${arr[i]}`);
    }
}


k(["Sham","Roan","As","Kin"]);


function any({firstname,lastname}){
    console.log(`hello ${firstname} ${lastname}`);
}

any({firstname:"Roshan",lastname:"Raut"});