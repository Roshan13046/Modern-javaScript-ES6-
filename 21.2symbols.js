//Why are needed Symbols : to create unique values to same name featuresre not mixed up with other values
//values that 
const OFFSTATE ="off";
const ONSTATE ="on";
const feature1 = "feature";
const feature2 = "feature";

let car ={
    make:"BMW",
    [feature1]: 'cruise control',//note:
    [feature2]: 'Air Conditioning',//note:
    state: 'on',
    speed: 20,
    turnon(){
        this.state = 'on';
    },
    turnoff(){
      this.state='off';  
    },
    accelerate(){
        if(this.state === 'on'){
            this.speed += 20;
        }
    }
};

console.log(car);//only one feature is listed bcz feature1 and 2 has the same value "feature" ie is a string  so to overcome this we use symbols 

//so fixing this by using symbols
const feature11 = Symbol("feature");
const feature22 = Symbol("feature");
const OFFSTATE1 =Symbol("off")
const ONSTATE1 =Symbol("on");

let car2 ={
    make:"BMW",
    [feature11]: 'cruise control',//note:
    [feature22]: 'Air Conditioning',//note:
                       
//*********NOTE**********************                       
//    state: 'on',     Error:
  //state: Symbol("on"); 
    //Error: BCZ ONSTATE1 != Symbol("on")
    
    state: ONSTATE1, 
    speed: 20,
    turnon(){
        //this.state = 'on';//error
        this.state = ONSTATE1;
    },
    turnoff(){
      this.state=OFFSTATE1;  
    },
    accelerate(){
        if(this.state === ONSTATE1){
            this.speed += 20;
        }
    }
};

console.log(car2);

//NOTE : symbols are not printed as property if we print like this
console.log(Object.keys(car2));

console.log(Object.getOwnPropertyNames(car2));

for(const key in car2){
    console.log(key);
}

//OwnPropertySymbols
console.log(Object.getOwnPropertySymbols(car2));


