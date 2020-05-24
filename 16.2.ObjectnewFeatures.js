//Ojects literal features

//in ES5
var phonee ={
    ring: function(i){
        console.log("beep ".repeat(i));
    }
};
phonee.ring(3);

//method defination in ES6
const phone ={
    ring(i){
        console.log("beep  ".repeat(i));
    }
};
phone.ring(3);

//computed property keys
const phone2 ={
    make:'samsung',
    ring(i){
        console.log("beep".repeat(i));
    }
}

//Another way

const x='make';
function g(){
    return 'ring';
}

const phone3={
    [x]:'Samsung',
    [g()](i){
        console.log("beep ".repeat(i));
    }
};

console.log(phone3);
phone3.ring(4);

//new Object methods: assign
//to add more features to an object in ES6

Object.assign(phone3,{warranty: 24},{waterProof:true});//two more features added to Object
console.log(phone3);
