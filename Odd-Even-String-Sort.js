// DESCRIPTION:
//
// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
// Examples
// input:    "CodeWars" => "CdWr oeas"
// indices:   01234567      0246 1357
// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".
// Notes
// Tested strings are at least 8 characters long.
//
// MY SOLUTION:
function sortMyString(S) {
    const evenIndices = [];
    const oddIndices = [];
    for (let i = 0; S.length > i; i++){
        if (i % 2 === 0){
            evenIndices.push(S[i]);
        } else oddIndices.push(S[i]);
    }
    return (evenIndices.join("") + " " + oddIndices.join(""));
}
console.log(sortMyString("Codewars"));

// OTHER SOLUTION:
//
// const sortMyString = s => {
//     let even = s.split('').filter((v, i) => i % 2 === 0).join('')
//     let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
//     return even + ' ' + odd
// }
//
// function sortMyString(S) {
//     let even = [], odd = [];
//     S.split('').forEach((e, i) => { i % 2 === 0 ? even.push(e) : odd.push(e) })
//     return `${even.join('')} ${odd.join('')}`;
// }
//
