//Mine Favourite
//Functions:These are block of codes which makes programming easy

/*without Parameters
function sayhello(){
    console.log("Hello baby");
}

sayhello();

*/

//With Parameters
function sayhello(name){
    //console.log("Hello there, ",name);
    console.log(`Hello there,${name}.How are you ${name}`);
}

sayhello("Narayan");//If we not pass something here it will print Hello there, undefined


function namaste(){
    return "Jay hind Doston";
}

var greetings=namaste();//if you directly call the function it will not going to show something until you don't console it

console.log(greetings);

//We can assign a function to a variable as well
var user="mishra";
var getrole=function(name,role)
{
    switch (user) {
        case "sharma":
            return `${name} is just another client`;
            break;//Here is not neccesary if you are using return statement
        case "mishra":    
            return `${name} is the admin`;    
            break;
        default:
            return `${name} is the baap`;
            break;
    };
}

console.log(getrole("Narayan","mishra"));
