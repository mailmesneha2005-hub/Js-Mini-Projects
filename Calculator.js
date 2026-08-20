const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};
console.log(calculator.add(10, 5));
console.log(calculator.sub(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));

// ================= METHODS =================

// Method = a function that belongs to an object.
// Function = standalone block of code.
// Method is called using object.method().


// ================ STRING METHODS ================

let str = "Hello World";

str.length;              // number of characters
str.toUpperCase();       // converts to uppercase
str.toLowerCase();       // converts to lowercase
str.includes("World");   // checks if value exists
str.indexOf("World");    // returns index
str.slice(0, 5);         // extracts part of string
str.replace("World","JS"); // replaces value
str.trim();              // removes extra spaces


// ================ ARRAY METHODS ================

let arr = [1, 2, 3];

arr.push(4);             // adds at end
arr.pop();               // removes from end
arr.unshift(0);          // adds at beginning
arr.shift();             // removes from beginning
arr.includes(2);         // checks if element exists
arr.indexOf(2);          // returns index
arr.slice(0, 2);         // returns part of array
arr.splice(1, 1);        // adds/removes elements

arr.forEach();           // runs function for each element
arr.map();               // creates new modified array
arr.filter();            // returns matching elements
arr.find();              // returns first matching element


// ================ OBJECT METHODS ================

let student = {
    name: "Sneha",
    age: 20
};

Object.keys(student);    // returns all keys
Object.values(student);  // returns all values
Object.entries(student); // returns key-value pairs