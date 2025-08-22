// exponents 

let x =23;
let y = 4;

function exponents(x,y) {
    console.log(Math.pow(x,y));

    console.log(Math.sqrt(x));
    console.log(Math.sqrt(y));
    console.log(Math.cbrt(x));
    console.log(Math.cbrt(y));

    console.log(Math.exp(y));
    console.log(Math.expm1(y));
    console.log(Math.log10(y));
    console.log(Math.log2(y));
    console.log(Math.log1p(y));
  
    console.log(Math.exp(x));
    console.log(Math.expm1(x));
    console.log(Math.log10(x));
    console.log(Math.log2(x));
    console.log(Math.log1p(x));

}

function rounding(x) {
    console.log(Math.round(x));
    console.log(Math.ceil(x));
    console.log(Math.floor(x));
    console.log(Math.trunc(x));
}

function sign(x) {
    console.log(Math.sign(x));
}

function trig(degree) {
    let radians = (Math.PI/180)*degree
    console.log(Math.sin(radians));
    console.log(Math.cos(radians));
    console.log(Math.tan(radians));
}

console.log("The max value: ",Math.max(4,5.7,9,10.5));
console.log("The min value: ",Math.min(4,5.7,9,10.5));
console.log("The random value: ",Math.random());
console.log("the hypotenuse: ",Math.hypot(3, 4));

exponents(x,y);
rounding(45.6);
rounding(18.3);
sign(-24);
sign(0);
sign(56.4);
trig(45);