// DESCRIPTION:
// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.
//     Note: a and b are not ordered!
//     Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//
// MY SOLUTION
function getSum(a, b) {
    if (a === b) {
        return a;
    } else {
        if (a < b) {
            sum = 0;
            for (; a <= b; a++){
                sum = sum + a;
            }
            return sum;
        } else {
            sum = 0;
            for (; b <= a; b++){
                sum = sum + b;
            }
            return sum;
        }

    }
}

// OTHER SOLUTION
// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
// }
//
// function GetSum(a,b)
// {
//     return (Math.abs(a - b) + 1) * (a+b) / 2;
// }