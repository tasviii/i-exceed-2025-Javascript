function add(x,x) {
    return x+x;
}
console.log(add(10,20));

'use strict';
function add1(x,x) {
    return x+x;
}
console.log(add1(10,20));

'use strict';
function deleteme()
{
    var x=1000;
    console.log(delete x);
    console.log(x);
}
deleteme();