function init(){
    //init-Initialiser
    var firstname="Narayan Mishra";
    function sayfirstname(){
        console.log(this.firstname);
    }
    sayfirstname();
}
//init();//if we simply run it will going to give undefined as O/p
