var counter=document.querySelector(".counter");
var follower=document.querySelector(".follower");

var count=setInterval(()=>{
if (count<1000) {
    count++;
    counter.innerText=count;
}
},1);//setInterval(function(),timeout)

setTimeout(()=>{
    follower.innerText="Followers Done";
},5500);