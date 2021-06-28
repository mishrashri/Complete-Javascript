var countries=["India","USA","Japan","Russia"];
var states=new Array("Uttar Pradesh","Rajasthan","Delhi","Mumbai");
/*console.log(states[0]);//Access array one by one
console.log(states);//Complete array
console.log(countries.length);//length of array
states[2]="Punjab";//replacing 
console.log(states);*/

//If we Perform an Operation states.pop() it will delete the the top value means last value in the array

//To add a element at start in the array we are having a operation called Unshift
//countries.unshift("China");
//Above operation we add a value in start of countries array

//But if we do shift then it shifts the array from start to the left side then the 0th index value will remove
/*countries.shift(); 
console.log(countries);*/


console.log(countries.indexOf("USA"));//It will return index for particular element
//If not present then it returns -1
countries.push("Bangkok");//To add element at last
console.log(countries);

//to make a array of a string we can do this
console.log(Array.from("Narayan"));