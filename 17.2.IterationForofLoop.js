//traditional for in ES5
for(let i =0 ;i<4;i++){
    console.log(i);
}

for(let i=0;i<4;i++){
    if(i == 1) break;
    console.log(i);
}

//for each
const NAMES = ['Ram','Sham','Seeta','Krishna'];
NAMES.forEach((element,index)=>{
   console.log(`Name ${index + 1} : ${element}`) ;    
});

//ES6 for of:
console.log("ES 6")
var index = 1;
for (const x of NAMES){    
    console.log(`Name ${index} : ${x}`);
    index++;
}

