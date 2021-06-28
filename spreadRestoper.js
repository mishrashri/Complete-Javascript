// ...args Spread and Rest Operator.You can take any name in place of args

//Difference b/w spread and rest

// var res=Math.max(2,5,7,8,9);
// console.log(res);  

function sum(a,b){
    return a+b;
}
var mysum=[5,7];
// console.log(sum(mysum));->Only this will going to give me error becuase it will not understand what is happening over here
//but if I use those 3 dots here then magic will happen
console.log(sum(...mysum));//Now if you pass any other value to the array then the error will ignore after getting two values because we are colling a function who takes 2 values only
//Here we call this Spread Operator

function sumagain(...args){//Always remember if you see ...args then this means array is going to come up and this is used here because we don't know howmany values we are going to take it
//This is rest operator which we are using    
let sum=0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}
console.log(sumagain(2,4,5,6,67,7,34));


function sumonceagain(a,b,...args){
//This is rest operator which we are using 
//fixing starting 2 variable to perform some specific operation
let multi=a*b;   
let sum=0;
    for (const arg of args) {
        sum+=arg;
    }
    return [multi,sum];
}
console.log(sumonceagain(2,4,5,6,67,7,34));