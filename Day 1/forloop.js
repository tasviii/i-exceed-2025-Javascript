function iterateme()
 {
    for(let i=0;i<5;i++)
    {
        console.log(i);
    }
    // can't access i from outside the loop coz of let
    // console.log(i);
 }

 iterateme();

 function usingVar() {
    for(var i=0;i<6;i++){
        console.log(i);
    }
    // i can be accessed from outside the loop which causes a leakage
    // risks of initializing using var
    console.log(i);
 }
 usingVar();