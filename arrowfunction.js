/*function isEven(element)
{
    return element%2===0;//this will return true or false value from here
}

console.log(isEven(5));
*/

//We can do the same thing as above by making a variable

var isEven=(element)=>//This is arrow function if we don't write function before (element) then we need to write this to make it as a function
{
    return element%2===0;//this will return true or false value from here
};
//If we are using arrow function then it should have a return statement
// console.log(isEven(5));

//Below is an example of callback fucntion
var res=[2,4,6,8].every(isEven);//This every will check this  array that evry element is even or not if not then false if yes then true it should follow for every cases if it fails for single one then it will return a false
console.log(res);
//We can take a array as [1,2,3,4].anyfunctionofarray you can call here


//How to write a callback ->
/*
var res=[2,3,4,5].every((e)=>{
    return e%2===0;
});

            OR
var res=[2,3,4,5].every((e)=>
    e%2===0; //If we do not write return statement then we do not need to write the curly braces as well
);            
*/