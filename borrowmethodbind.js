const narayan={
    firstName:"Narayan",
    lastName:"Mishra",
    role:"Admin",
    getInfo:function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
        `);
    },
};

//BORROWING OF THE METHOD
const utkarsh={
    firstName:"Utkarsh",
    lastName:"Rathore",
    role:"sub-Admin",
};
//if we do utkarsh.getInfo()->it will going to throw an error because he is not able to get that function
//for removing this problem JS have borrow method

// narayan.getInfo.bind(utkarsh)(); One way of run this method by utkarsh
var res=narayan.getInfo.bind(utkarsh);//both are the ways to run this
res();

//narayan.getInfo.bind(utkarsh)();->if you not passing something in place of utkarsh then it simply call default function with its values