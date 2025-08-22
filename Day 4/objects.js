// creating object by literal 
let Person = {
    name:"Tasvi",
    age: 23,
    role:"Software engineer trainee"
};
console.log(Person.age);
console.log(Person.name);
console.log(Person.role);

Person.lastName = "Shetty";
Person.city = "Bangalore";
console.log(Person.lastName);
console.log(Person.city);

x = "name";
y = "age";
console.log(Person[x]);
console.log(Person[y]);

// creating object constructor
let bankAccount = new Object({
    accNumber : "123452",
    bankName : "Axis",
    accType : "Salary"
});

