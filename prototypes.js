var User=function(firstName,Lastname){
    this.firstName=firstName;
    this.Lastname=Lastname;//this is how objects can be made
    this.getLastname=function(){
        console.log(`Lastname is: ${this.Lastname}`);
    };
};

//__proto__
User.prototype.getFirstName=function(){//this is how prototype works
    console.log(`First name is: ${this.firstName}`);
};
var narayan=new User("Narayan","Mishra");
narayan.getLastname();
narayan.getFirstName();
var utkarsh=new User("Utkarsh","Rathore");
utkarsh.getLastname();
utkarsh.getFirstName();//calling that prototype function
