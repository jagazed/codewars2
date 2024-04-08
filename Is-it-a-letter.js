// DESCRIPTION:
//
// Write a function, isItLetter which tells us if a given character is a letter or not.
//
// MY SOLUTION:
function isItLetter(character) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return (alphabet.includes(character.toLowerCase()) === true)? true: false;
}
console.log(isItLetter("1"));

// OTHER SOLUTION:
// function isItLetter(character) {
//     return /[a-z]/i.test(character);
// }
//
// function isItLetter(cc) {
//     if( cc.toLowerCase() === cc.toUpperCase()) return false;
//     return true
// }
//
// const isItLetter = (char) => char.toLowerCase() !== char.toUpperCase()