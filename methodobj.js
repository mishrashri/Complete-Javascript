var user={
    firstName:"Narayan",//key:"Value"
    lastName:"Mishra",
    role:"Admin",
    age:20,
    pincode:281405,
    family:[],
    myfamily:function(membersName){
        this.family.push(membersName)
    },
    getfamilycount:function(){
        return `${this.firstName} is have ${this.family.length} members in the family`;
    },
};

user.myfamily("father");
user.myfamily("mother");
user.myfamily("sister");
console.log(user.getfamilycount());