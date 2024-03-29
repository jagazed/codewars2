// DESCRIPTION:
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// MY SOLUTION
function sum(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((acc, current) => acc + current, 0);
}
// OTHER SOLUTION
// function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }