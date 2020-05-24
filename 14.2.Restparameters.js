//ES5
function printAll(x,y){
//    console.log(x);
//    console.log(y);
    console.log(arguments);
    
}

printAll(1,2);

//to return arguments
function printAll2(){
    var tempArr=[];
    for(var i=0;i<arguments.length;i++){
        tempArr.push(arguments[i]);
    }    
    return tempArr;
}

console.log(printAll2(1,2,3,4,5,6))

//ES6 has simple syntax using Rest parameters with symbol ...x:
//if we don't know how many parameters our function is going to take

function printAll3(...x){
    return x;
}
console.log(printAll3(1,2,3));
console.log(printAll3());


function printAll4(x, ...y){
    console.log(x);
    console.log(y);
}
printAll4(1,2,3);
printAll4();

//Challenge
    //function pcheck firstname , lastname,
    //Passenger: firstname lastname
    //Belongings: item1,item2........
    

//ES6
console.log("Challenge using ES6");
//x=firstName,y=lastName,...z=Rest items belongings
function pcheck(x,y,...z){
    console.log(`Passenger: ${x} ${y}`);
    const items = z.length>0 ? z : "none";
    console.log(`Belongings: ${items}`);
}

pcheck("Roshan","Raut","laptop","chargers","bags","earPhones","headPhones","cardReaders","etc");
pcheck("Roshan",'Raut');

//ES5
console.log("Challenge using ES5")
function pcheck2(){
    console.log(`Passenger: ${arguments[0]} ${arguments[1]}`);
    
    var tempArray =[];
    for(var i=2;i<arguments.length;i++){
        tempArray.push(arguments[i]);
    }    
    if(tempArray.length>0)
        console.log(`Belonging: ${tempArray}`);
    else
        console.log("Belonging: none");
}


pcheck2("Roshan","Raut","laptop","chargers","bags","earPhones","headPhones","cardReaders","etc");
pcheck2("Roshan",'Raut');