class User{
    //there is no big issue if do not declare name and email variables
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    carList=[];
    //without a function keywork you can make a function like below
    getInfo(){
        return {name:this.name,email:this.email};
    }
    carName(name){
        this.carList.push(name);
    }
}

module.exports=User;
//Now you can access this file everywhere and anywhere you want to access this

//for the refrence you can open objectforclasses.js file