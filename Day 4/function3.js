// newFunc("mia");

name1 = "Shanaya";

if(name1) {
    var newFunc = function(name) {
        console.log(`Hello ${name}`);
    }
} else {
    let func1 = function() {
        console.log("No name");
    }
}

newFunc("Naina");


let n = "Shanaya";

let newFunc2;
let func3;

if (n) {
    newFunc2 = function(name) {
        console.log(`Hello ${name}`);
    };
} else {
    func3 = function() {
        console.log("No name");
    };
}

newFunc2?.("Naina");
func3?.();
