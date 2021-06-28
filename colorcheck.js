//Check index.html for reference
var red=document.querySelector(".red");
var blue=document.querySelector(".blue");
var yellow=document.querySelector(".yellow");
var green=document.querySelector(".green");
var black=document.querySelector(".black");
const colors=document.querySelector(".colors");
const center=document.querySelector(".center");

// window.getComputedStyle(red);
//agar aap iska console.log krte hain toh ye aapko pura css dikha dega
//console.log(window.getComputedStyle(red).background); it will give you background properties
//In computedstyle property - changes to camelcase
//for example: if I want font-family then it will become fontFamily,if i want background-color then it will become backgroundColor


//Example for computed style
// const getbg=(selectedElement)=>{
//     return window.getComputedStyle(selectedElement.backgroundColor);
// };


//Implementing eventlistners
const getbg=(selectedElement)=>{
    return selectedElement.innerText;
};


// var selectcolor=getbg(yellow);
// yellow.addEventListener('mouseenter',()=>{//you can replace mouseenter with click to check what will happen if we click
//     yellow.innerText="You are on Yellow";
//     //center.style.background=selectcolor; if someone is using for colors
// });

const textchanger=(element,color)=>{
    return element.addEventListener('mouseenter',()=>{
        center.innerText="You are on a color";
    });
};

textchanger(red,getbg(red));
textchanger(blue,getbg(blue));
textchanger(yellow,getbg(yellow));
textchanger(green,getbg(green));
textchanger(black,getbg(black));

