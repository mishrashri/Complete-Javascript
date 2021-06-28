var users=["Narayan","Utkarsh","Mannat","Akash","Deepesh"];
//Keep in Mind-: Start is inclusive and End is Exclusive


console.log(users.slice(1,3));//Start=1,End=3(Not included)

//What if we pass one value in it
console.log(users.slice(2));//Jahn se likha  hai wahn se karo print krna shuru

users.splice(1,2,"HI");//start=1,Count=2(Howmuch need to be deleted),PrintwhatI'mProviding
console.log(users);