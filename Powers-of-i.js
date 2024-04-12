// DESCRIPTION:
// i is the imaginary unit, it is defined by i²=−1, therefore it is a solution to x²+1=0.
// Complete the function pofi() that returns i to the power of a given non-negative integer
// in its simplest form, as a string i).
//
// MY SOLUTION:
function pofi(n) {
    const results = ['1', 'i', '-1', '-i'];
    return results[n % 4];
}
console.log(pofi(5));

// OTHER SOLUTION:
//
// const pofi=n=>['1','i','-1','-i'][n%4];
//
// pofi=n=>(n&2?'-':'')+'1i'[n&1]