let a=0.1;
let b=0.2;
let sum=a+b;
console.log(sum);
console.log(sum===(0.1+0.2));
 
 
let x=123456789012345678901n;
console.log(x);
let y=BigInt(123456789012345678901);
console.log(y);
 
let balance=1000n;// 10.00
let deposit=25n;
balance+=deposit;
console.log(Number(balance)/100);

let max=Number.MAX_SAFE_INTEGER;
console.log(max);
let max_n=9007199254740991n
let ad=10n;
console.log(max_n+ad);