let x="123";
console.log(Number(x));
console.log(typeof x);
 
let y=null;
console.log(y);
console.log(typeof y);
console.log(Number(y));
 
let z=undefined;
console.log(z);
console.log(typeof z);
console.log(Number(z));
 
let a=false;
console.log(typeof a);
console.log(Number(a));
 
let a1=true;
console.log(typeof a1);
console.log(Number(a1));
 
let a2="hi";
console.log(Number(a2));
 
// Boolean of 0 ,null, undefined ,NaN resultant with false
let res=Boolean(1);
console.log(res)

let myVal = "0";
console.log(Boolean (myVal));

let myVal1 = 0;
console.log(Boolean (myVal1));

// Using !! to conevrt it to boolean
console.log(!!"world");        
console.log(!!undefined);

// empty string with space is truthy
let str = " ";
console.log(!! str);

// using === is important in js as this code shows the error as it tells true=false
console.log(`to check if string 0 is equal to actual 0 ${myVal==myVal1}`)
console.log(`to check if string 0 is equal to actual 0 ${myVal===myVal1}`)

console.log(true=="false");
console.log(true=="1");
console.log(true=="e1");
console.log(true==!!"false");