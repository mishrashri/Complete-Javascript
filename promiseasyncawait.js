//promise:It is an event which is going to fullfill in future or may be not 
const name=()=>{
    return "I'm Narayan";
};

// const lastName=()=>{
//     setTimeout (()=>{
//         return "I'm Mishra"
//     },3000);
// };

const lastName=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("My Lastname is Mishra");//our promise going to resolve
        },3000);
    });
};
const Age=()=>{
    return "I'm 20 years old";
};
//async
//await
const callMe=async()=>{//we have promise over there so we need to make the function as asynchronous
    let n=name();
    console.log(n);
    let l=await lastName();//await will going to mark this step as important then it will wait for it
    console.log(l);//it will return undefined due to timeout 
    let a=Age();
    console.log(a);
};

callMe();




