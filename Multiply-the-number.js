// DESCRIPTION:
// Jack really likes his number five: the trick here is that you have to
// multiply each number by 5 raised to the number
// of digits of each numbers, so, for example:
// 3 -->    15  (  3 * 5¹)
// 10 -->   250  ( 10 * 5²)
// -3 -->   -15  ( -3 * 5¹)
//
// MY SOLUTION:
// function multiply(number){
//     let number2 = Math.abs(number);
//     let stringNumber = Number(number2).toString();
//     let numb = stringNumber.length;
//     return number * (Math.pow(5, numb));
// }
function multiply(number){
    return number * (Math.pow(5, (Number(Math.abs(number)).toString()).length));
}

// OTHER SOLUTION:
// const multiply = num => num * 5 ** (Math.abs(num).toString()).length