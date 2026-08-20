function add(val1, val2) {
    return val1 + val2;
}
function sub(val1, val2) {
    return val1 - val2;
}
function multiply(val1, val2) {
    return val1 * val2;
}
function divide(val1, val2) {
    return val1 / val2;
}
function calculate(val1, val2, callback) {
    return callback(val1, val2);
}
console.log(calculate(10, 20, add));
console.log(calculate(10, 20, sub));
console.log(calculate(10, 20, multiply));
console.log(calculate(10, 20, divide));

// First-class function → function can be stored/passed/returned
// HOF → function that takes or returns another function
// Pass function → callback
// Return function → function returned from another function