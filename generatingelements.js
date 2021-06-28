var courses=[
    {
        name:"pehla course ",
        price:"130"
    },
    {
        name:"dusra course ",
        price:"132"
    },
    {
        name:"teesra course ",
        price:"139"
    },
    {
        name:"chautha course ",
        price:"127"
    },
];


//createElement =>make <></> <-this for us
//or agar iske braces mein kuch likhe to wo uss tag ko bna dega
//for example-:createElement("p")-> <p></p> 


function generateList(){
    const ul=document.querySelector(".listgenerator");
    ul.innerHTML="";

    courses.forEach(course=>{
        const li=document.createElement("li");
        li.classList.add("listwali");

        const name=document.createTextNode(course.name);
        li.appendChild(name);

        const span=document.createElement("span");
        span.classList.add("spanwali");
        const price=document.createTextNode("price is $"+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}
// generateList();

window.addEventListener("load",generateList);//after reload it will show

const button=document.querySelector(".buttonwali");
button.addEventListener("click",()=>{
    courses.sort((a,b)=> a.price - b.price);//comparable
    generateList();
});