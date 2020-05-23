 //  let scope vs closures
//        //ES5 
//         for(var i=0; i<3 ;i++){
//             document.getElementById(i).addEventListener('click',function(){
//                 console.log(i);
//             });
//         }
//         
         
         //solution in ES5 : use a closure
//         var f = function(x){
//             return function(){
//                 console.log(x);
//             }
//         }
//         
//         for(var i=0;i<3;i++){
//             document.getElementById(i).addEventListener('click',f(i))
//         }
//         
         

//Note : Concept
//Basically var keeps a reference to the last value in memory while let does not do that. So you get the correct value each time without having to use closures.
           //Try the code with let  
         for(let i=0; i<3 ;i++){
             document.getElementById(i).addEventListener('click',function(){
                 console.log(i);
             });
         }

        