// function init(){
//     //init-Initialiser
//     var firstname="Narayan Mishra";
//     console.log("I'm Init");

//     function sayfirstname(){
//         console.log(firstname);
//     }
//     return sayfirstname;
// }

// var value=init();
// value();//this is closure


function addition(x){
    return function(y)
    {
        return x+y;
    }
}
var add=addition(2);
console.log(add(5));

//we can do this as well
console.log(addition(12)(23));//this is because of closure and how memory is working in js 
//addition()()->also known as curring