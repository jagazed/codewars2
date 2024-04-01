// DESCRIPTION:
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name).
// The function should return the full name.
// Example:
// combineNames('James', 'Stevens')
// Returns:
// 'James Stevens'

// MY SOLUTION:
function combineNames(s1, s2){
    return s1 + ' ' + s2;
}
console.log("James","Nick");

// OTHER SOLUTION:
// const combineNames = (...names) => names.join(' ');
//
// const combineNames = (a, b) => `${a} ${b}`;
//