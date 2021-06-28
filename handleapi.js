//These code can't be run on node environment
//So please try to run on Console

fetch('https://api.chucknorris.io/jokes/random')
.then(response=>{
    return response.json();//whatever will return it will goes to next then
})//for good thing
.then((data)=>{
    // console.log("Data is: ",data);
    var joke=data.value;
    console.log("Joke is : ",joke);
})//recieve here
.catch();//for bad thing

//take this code to console
