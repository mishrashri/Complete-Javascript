const arr=[12,4,56,11,10,14,17,2];
console.log(arr.fill("N"));//It fills all the values in the array with the given thing
//fill(somethingtofill,start,end)
//Start inclusive and end is exclusive

var myNum=[23,12,4,34,2,3];
var res=myNum.filter((num)=> num>10);//Filter makes a new array
console.log(res);