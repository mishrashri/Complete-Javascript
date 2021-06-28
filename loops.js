const myStates=["RAJ","UP","AP","HP","TN","MH"];
// for (let index = 0; index < myStates.length; index++) {
    
//     console.log(myStates[index]);
// }
/*
for (let index = 0; index < myStates.length; index++) {
    if(typeof myStates!=="string")continue or break we can use to cross check
    console.log(myStates[index]);
}
 */

//Reason why we are using let keyword for defining variables in the loops let is somethings which can be free after using it you can redeclare a variable outside the loop 

//For-each
// myStates.forEach((s)=>console.log(s));

const webapps=["Facebook","Instagram","Twitter","Youtube","Assistant"];
//forin and forof loop
// for(const n of webapps)
// {
//     console.log(n);
// }

const symbols={
    YT:"Youtube",
    fb:"Facebook",
    ig:"Instagram",
    tw:"Twitter"
};

for(const n in symbols){
    console.log(`Key is ${n} and Value is: ${symbols[n]}`);
}