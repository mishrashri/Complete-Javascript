const name=()=>{
    console.log("I'm Narayan");
};

const lastName=()=>{
    setTimeout (()=>{
        console.log("I'm Timeout");
    },3000);
    console.log("I'm Mishra");
};
const Age=()=>{
    console.log("I'm 20 years old");
};

name();
Age();//it will firstly print log then it'll wait for that timeout which we have provided
lastName();
