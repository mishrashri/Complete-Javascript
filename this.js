console.log(this);//This will throw empty{} in node js engine but if we run on console of web browser then
//We get global context->Window {0: global, 1: global, 2: Window, window: Window, self: Window, document: document, name: "", location: Location, …}


var game="PS5";
function gamename(){
    var name="Takken 6";
    console.log(this);
}
gamename();

//We can say This keyword give us an access of Global Context and it differs in the situation

//For all regular function calls,this points to window object
var names={
    name1:"Narayan",
    name2:"Utkarsh",
    name3:"Mannat",
    getNamesCount:function(){
        console.log("Line 20",this);
        //regular function
        function mynames(){
            console.log("You are in regular function",this);
            console.log("Line no.24");
        }
        mynames();//this gonna contain window object because it is regular function call
    },
};
names.getNamesCount();