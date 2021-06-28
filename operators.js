//Sample of Discount Finder

var Discount,lp,sp;
sp=199;
lp=799;
Discount=((lp-sp)/lp) *100;

console.log("Your Discount is "+Discount);


var dispDiscountpercent=Math.round(Discount);
console.log("Round Figure mein :"+dispDiscountpercent+" % off");

//typeof 
var res=sp>lp;
console.log(typeof res);