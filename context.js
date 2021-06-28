/*sayhello();

function sayhello(){
    console.log("Hello brother aa gya swaadd");
}*/
//Above Code will run due to global context


//There are two types of context in the JS
/*
1.Global:They are contacting with everything with everything.
        Everything which is running in JS program is comes under global context.
2.Execution:This is that context which is excuted line by line.This brings some features
            >Variable Object
            >Scope Chain
            >this
*/


/*Two important rules we need to follow:-
1.Function declaration are scanned and made available
2.Variable declarations are scanned and made undefined
*/

function tip(a)
{
    var bill=parseInt(a);
    console.log("Your bill with tip "+(bill+5));
}
tip("5");//If you pass string then also it will going to take by function as integer jisse ki tip dene mein koi gadbadi naa ho