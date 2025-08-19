let a = 12334547n;
let b = BigInt(1245729986);

// arithmetic functions
function arithmetic(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
}
console.log("two big int numbers");
arithmetic(a,b);

let num = 458n;
let x = 6;

// can't add big int and number type with eachother
console.log("converting the integer to a big int");
arithmetic(num,BigInt(x));
console.log("Conevrting big int to number");
arithmetic(Number(num),x);

function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(30n)); 