//IN ES5
//superclass
//constructor
function phone(make,model,warranty,colour){
        this.make =  make;
        this.model = model;
        this.warranty = warranty || 2;
        this.colour = colour || "black";    
}

phone.prototype = {
    extendWarranty : function(x){
        this.warranty += x;
    }
};

//Subclass
function smartPhone(make,model,OS){
    this.OS = OS;
    phone.call(this,make,model);
    //call: this function with a given this values of make and model
}

smartPhone.prototype = new phone("samsu","j7");

var mySmartphone = new smartPhone("apple","iphone10","IOS20");

console.log(mySmartphone);
console.log(mySmartphone.extendWarranty);

smartPhone.prototype.constructor = smartPhone;

var myPhone = new smartPhone("XIOMI","J7");
console.log(myPhone);
console.log(myPhone.extendWarranty);
myPhone.extendWarranty(222);


//**************************** ES6 Class ************
console.log("ES6 class : ");

class Phone6{
    constructor(make , model,warranty,colour){
        this.make = make ;
        this.model = model;
        this.warranty = warranty;
        this.colour = colour;
    }
    
    extendWarranty(x){
        this.warranty += x;
    }    
    
    //static methods: these methods are instance of class but not of objects and they are commom for all class instances or objects and they are created only one copy for class .
    //they are called with class and function name or with only function name
    
    static defaultPhone(){
        return new Phone6("XIOMII","X23D2",2);
    }
    
    
    //getters and setters 
//    set warranty(x){
//        this.warranty = x; //error it undergoes infinite calls to setter function
//    }
    //to overcome this error we use different name to function
    set _warranty(x){
        console.log("warranty setter called ")
        this.warranty = x; 
    }
    
    //getter function
    get _warranty(){
        console.log("Warranty getter function called")
        return this.warranty;
    }
    
    
}

const roshanPhone = new Phone6("SAMSUNG","J7",4,"gray");
console.log(roshanPhone);
console.log(typeof roshanPhone);

//************ STATIC methods in ES6 *****************
console.log(roshanPhone.defaultPhone);//undefined BCZ static methods are not attached to instances of the class

console.log(Phone6.defaultPhone);
console.log(Phone6.defaultPhone());

//************** getters and setters in ES6 **********

//Note: to use different names for functions of getters and setters 
//So we used _warranty for function name

roshanPhone._warranty = 8;//calls setter
console.log(roshanPhone._warranty);//calls the getter 



//Inheritance - extends - super
class smartPhone6 extends Phone6{
    constructor(make,model,OS){
        super(make,model);
        this.OS = OS;
    }
    
    extendWarranty(x){
        super.extendWarranty(x);
    }
}

const mysmartPhone6 = new smartPhone6("Apple","Iphone7","IOS 11");
console.log(mysmartPhone6);
mysmartPhone6.extendWarranty(10);
console.log(mysmartPhone6);
console.log(mysmartPhone6 instanceof smartPhone6);//true
console.log(mysmartPhone6 instanceof Phone6);//true























