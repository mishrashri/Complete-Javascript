/*If we write a variable but do not give
any value to it then it is said to be UNDEFINED
*/


/*var x;
console.log(x);
It will through undefined as O/P
*/

//Difference b/w null and undefined
/*var x;
var y=null;
console.log(x,y);
This will through undefined and null as O/P
*/

/*Falsy Values:-These are something which are treated as false
undefined
null
0
''(Empty String)
Nan(not a number)
*/


/*Coercion:-It is something which takes loosely values for example
Adding (3+"3");It will give you a O/P as 33 JS assumes so much by its own
Due its assumption the Coercion happens
*/
var a="2";
if(2==a)//Here JS will assume this 2 is String and developer forget to give double or single quotes to it
{
    console.log("Print Me!!");
}
//Due to this problem we use ===(Triple Equal signs)
//This will strictly check types of values