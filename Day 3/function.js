function addition(a,b) {
    return a+b;
}

function welcome(name) {
    console.log("Hi, "+name);
}

console.log(addition(323,4657));
welcome("Alia");

function displayData(name,age,city="Bangalore")
  {
    console.log(name);
    console.log(age);
    console.log(city);
  }
 
displayData("Anna",21,"LA");

// arrow function
let Multiply = (x,y,z) => x*y*z; // takes any number of parameters but only one expression gets returned
console.log(Multiply(2,3,4));
 
// to upper case
let nameToUpper = name1 => name1.toUpperCase();
console.log(nameToUpper("alia"));

let trimString = str => (str.trim()).toUpperCase();
console.log(trimString(" hiya "));

let getMyMail=(name,age,city)=>name+age+city+"@"+"gmail.com";
console.log(getMyMail("rakesh",21,"blore"));

function displayData(name,age,city,...args) // args is a rest parameter
{
 console.log(name);
 console.log(age);
 console.log(city);
 console.log(args.sort());
}
displayData("Naina",20,"Mumbai","Maharastra","India","Asia","London","Los Angeles");
 