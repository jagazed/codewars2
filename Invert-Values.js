// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
//
// MY SOLUTION:
function invert(arr) {
    let invertedArray = [];
    for (let i = 0; i < arr.length; i++) {
        invertedArray.push(-arr[i]);
    }
    return invertedArray;
}

// OTHER SOLUTION:
// const invert = array => array.map(num => -num);
//
// function invert(array) {
//    return array.map( x => x === 0 ? x : -x);
// }
//
// function invert(array) {
//    return array.map(i => 0 - i);
// }

