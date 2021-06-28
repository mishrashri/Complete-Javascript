/*
You can ask for something to a bigger guy but you can not ask someone is smaller than you (Jeevan ka satya)
*/

var name="Narayan Mishra";
console.log("Line no. 5",name);

function saymyname(){
    var name="Mishrashri";
    console.log("Line no. 9",name);
    saymynameagain();
    function saymynameagain(){
    console.log("Line no. 13",name);
    }//What if I never declare variable name and take variable name from down it will going to through an error
}
saymyname();

/*
{SCOPE IS HERE}
*/