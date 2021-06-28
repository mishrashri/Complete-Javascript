 //Hoisting is something which follow some rules
 /*Two important rules we need to follow:-
1.Function declaration are scanned and made available
2.Variable declarations are scanned and made undefined
*/
//For example-:

simpletip("100");//This is simple function call which follows rule no.1

function simpletip(a){
    var bill=parseInt(a);
    console.log("Your bill with tip "+(bill+5));
};

//this code will work properly



var bigtip=function(a){
    var bill=parseInt(a);
    console.log("Your bill with tip "+(bill+15));
};

bigtip("200");//passing value as string
//The running code 

//But what if we take call first then it break the 2nd rule
/*
bigtip("200");
var bigtip=function(a){
    var bill=parseInt(a);
    console.log("Your bill with tip "+(bill+15));
};

This code will through an error
*/

//For proving rule 2
console.log(name);//This will print undefined
var name="Narayan Mishra";

//Global context knows the name is there but execution context do its work thats why it will give undefined
function sayname(){
    var name="Kuch bhi";
    console.log(name);
}

sayname();
console.log(name);