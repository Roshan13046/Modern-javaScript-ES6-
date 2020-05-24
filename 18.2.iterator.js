const BASKET = ["apple","mango","grapes","banana"];

//iteration
for(const x of BASKET){
    console.log(x);
}

//BASKET is iterable
//an iterator next()->{value:,done:}
//uilt in method creating an iterator out of an array

let arrIt = BASKET.entries();
//let arrIt = BASKET.values();
//let arrIt = BASKET.keys();
console.log(arrIt);
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));

//let's reate a function that makes an iterator out of an array
const createIterator = array =>{
    let index = 0;
    return {
        next(){
            if(index < array.length){
                return {
                    value: array[index++],
                    done: false
                }
            }else{
                return{
                    done:true
                }
            }
        }
    };
};

const arrIt2 = createIterator([1,2,3]);
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());

//ES6 has some predefined inbuilt functions called generators which saves our time to write fuctions like createIterators

//generators functions:factory of iterators

function* genIterator(){
    console.log('running');
    yield 1;//stoping
    console.log('running');
    yield 2;//stoping
     console.log('running');
    yield 3;
}

const it = genIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


