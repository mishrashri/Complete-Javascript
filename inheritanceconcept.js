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
    static carName(name){
        this.carList.push(name);
    }//for noone can use this add static keyword to make is private
}

module.exports=User;

class subUser extends User{
    constructor(name,email){
        super(name,email);
    }
    getsubAdminInfo()
    {
        return "I'm subUser";
    }
}

const obj=new subUser("narayan","killer2017silent@gmail.com");
console.log(obj.getInfo());
console.log(obj.getsubAdminInfo());