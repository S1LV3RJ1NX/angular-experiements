// Arrays in TypeScript
// Only values of same type
var numberList = [1, 2, 3, 4, 5];
console.log("Array example...");
for (var index in numberList) {
    console.log(numberList[index]);
}
// Tuples in TypeScript
// Can contain values of different type
var mixedTuple = [1, 'abc', 2.5];
console.log("\nTuple example...");
for (var idx in mixedTuple) {
    console.log(mixedTuple[idx]);
}
// function
function add(num1, num2) {
    return num1 + num2;
}
console.log("\nFunction example...");
console.log(add(3, 5));
console.log(add("Hello", " World"));
