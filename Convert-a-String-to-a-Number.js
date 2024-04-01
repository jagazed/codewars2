// DESCRIPTION:
// We need a function that can transform a string into a number.
// All inputs will be strings, and every string is a perfectly valid
// representation of an integral number.
// Examples
// "1234" --> 1234
// "-7" --> -7
//
// MY SOLUTION:
const stringToNumber = function(str){
    return numb = parseInt(str, 10);
}

// OTHER SOLUTION:
// var stringToNumber = function(str){
//     return +str;
// }