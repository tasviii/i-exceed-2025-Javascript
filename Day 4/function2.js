"use strict";
 
let age=12;
 
if(age<18)
{
   
   var greeting= function () // using var to access the function outside of the block scope 
     {
        console.log("welcome you all and wait for your turn!");
     };
} else {
    var greeting=function()
     {
        console.log("welcome you all and you are all eligible to write the exam!");
     };
}
 
greeting();