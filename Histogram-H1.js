// DESCRIPTION:
//
// A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.
//
// Example:
// 6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7
//
// Task
// You will be passed the dice value frequencies, and your task is to write
// the code to return a string representing a histogram,
// so that when it is printed it has the same format as the example.
//
// Notes
// There are no trailing spaces on the lines
// All lines (including the last) end with a newline \n
// A count is displayed beside each bar except where the count is 0
// The number of rolls may vary but there are never more than 100
//
// MY SOLUTION:
function histogram(s) {
    const reversedS = s.reverse();
    let result = "";
    for (let i = 0; i < reversedS.length; i++ ){
        let charCount =[];
        let n = 0;
        while (n < reversedS[i]){
            charCount += '#';
            n++;
        }
        if (reversedS[i] === 0){
            result += (reversedS.length - i) + "|" +  "\n";
        } else result += (reversedS.length - i) + "|" + charCount + " " + s[i] + "\n";
    }
    return result;
}
console.log(histogram([5,4,2,3,0,10]));

// OTHER SOLUTION:
//
// const histogram = r => r.reduce((r, x, i) => (i+1)+'|'+(x ? '#'.repeat(x)+' '+x : '')+'\n'+r, '');
//
// const histogram = results => {
//     let res = ''
//
//     for (let i = 6; i > 0; i--) {
//         const amount = results[i - 1]
//         const t = amount ? `${'#'.repeat(amount)} ${amount}` : ''
//         res += `${i}|${t}\n`
//     }
//
//     return res
// }
//