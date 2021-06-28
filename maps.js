var myMaps=new Map();
myMaps.set(0,"India");
myMaps.set(1,"US");
myMaps.set(2,"California");
myMaps.set(3,"Brazil");
myMaps.set(4,"Pak");
myMaps.set(5,"China");

// console.log(myMaps);

// for(let key of myMaps.keys()){
//     console.log(`Key is ${key}`);
// }
// for(let value of myMaps.values()){
//     console.log(`Values is ${value}`);
// }

// for(let [key,value] of myMaps){
//     console.log(`Key and values-> ${key}:${value}`);
// }


myMaps.forEach((value,key)=>console.log(`${value} and key is ${key}`));

myMaps.delete(5);
console.log(myMaps);