var User=function(firstName,Lastname){
    this.firstName=firstName;
    this.Lastname=Lastname;//this is how objects can be made
    this.getLastname=function(){
        console.log(`Lastname is: ${this.Lastname}`);
    };
};
//var user=(name:"Narayan") another way of making objects

var narayan= new User("Narayan","Mishra");
console.log(narayan);
//new keyword is something which is used to invoke constructor and used to created a new instance every single time
var narayandusra= new User("Kuch bhi","Khotiya");
console.log(narayandusra);
//After this we can see two instances are created of User 

//new keyword also takecare of this keyword
//whenever we use this new keyword then the function will not more a regular function and it will become a irregular function so this keyword will not going to take window object no more 