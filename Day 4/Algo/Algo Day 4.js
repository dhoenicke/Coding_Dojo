var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

// var | Value
// x | 5, 15

// newvalue | 15

// console.log()
// 5
// 15


var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);


// var | Value
// x | 5
// result | -5
//

// amount | -10

// console.log()
// 5
// -5
// 5


function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);


// var | Value
// result1 | "Not a pal-indrome!"
// result2 | "Pal-indrome!"

// var | Value
// left | 0, 1
// right | 4, 3

// Var | Value
// Left | 0, 1, 2, 3
// Right | 5, 4, 3, 2

// console.log
// Not a pal-indrome!
// Pal-indrome!