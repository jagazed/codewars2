// DESCRIPTION:
// Given a logarithm base X and two values A and B, return a sum of logarithms with the base
// X: log(x)A + log(x)B
//
// MY SOLUTION:
function logs(x , a, b){
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}
// OTHER SOLUTION:
// const logs = (x,a,b) => Math.log(a*b)/Math.log(x)
//