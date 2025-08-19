var x = 10; // global scope
// printing the value
console.log(x);

// x can be accessed inside the function as well
function myFunc() {
    var y = 30; // this is function scope
    if(true) {
        console.log(y);
        console.log(x+y);
    }
}
myFunc();

// this will give an error
// console.log(y);

function display()
{
    var x=10;
    function display1()
        {
            var y=20;
            console.log(x);
            console.log(y);
        }
        // console.log(y);
    display1();
}
display();
