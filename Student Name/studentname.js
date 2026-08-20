const Student = {
name: "Sneha",
Roll_no: 54,
gettName: function() {
console.log(this.name);
},
gettRoll_no: function() {
console.log(this.Roll_no);
}
};
Student.gettName();
Student.gettRoll_no();

// ==================== THIS KEYWORD ====================
// this → refers to the current object/context.
// 1. this INSIDE OBJECTS
let student = {
    name: "Sneha",

    greet: function() {
        console.log(this.name);
    }
};
student.greet();
// this refers to the student object
// 2. this INSIDE REGULAR FUNCTIONS
function show() {
    console.log(this);
}
// In a regular function, this depends on how
// the function is called.
// 3. this INSIDE ARROW FUNCTIONS
let user = {
    name: "Sneha",
    greet: () => {
        console.log(this.name);
    }
};
// Arrow functions do NOT have their own this.
// They take this from their surrounding scope.