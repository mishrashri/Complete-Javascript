const user=["Narayan","Mishra","20"];
// console.log(name[1]);//calling 1st value

// var age=user[2];
// var lastName=user[1];//Common way of taking values in them

//we can also do destructuring of data
var [name,lastName,age]=user;
console.log(lastName);

const obj={
    carName:"Audi",
    carCount:"16",
    carModel:"R8",
};
// console.log(obj.carModel); Commonly used

//we can also do
const {carName,carCount,carModel}=obj;
console.log(carModel);