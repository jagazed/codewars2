// DESCRIPTION:
//
// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.
//
// MY SOLUTION:
function well(x){
    let count = 0;
    for (let i = 0; x.length > i; i++) {
        if (x[i] === "good"){
            count++;
        }
    }
    return count >2? "I smell a series!" : count !== 0? "Publish!" : "Fail!";
    // if (count > 2){
    //     return "I smell a series!";
    // } else if (count !== 0 ){
    //     return "Publish!"
    // } return "Fail!";

}
console.log(well(["bad", "bad"]));

// OTHER SOLUTION:
// function well(x) {
//     var good = 0
//
//     for (var i = 0; i < x.length; ++i)
//         if (x[i] == 'good' && ++good > 2)
//             return 'I smell a series!'
//
//     return good ? 'Publish!' : 'Fail!'
// }