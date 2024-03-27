// Description:
//     Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
//     Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//My solution
function replace(s){
    s = s.replace(/[aeiouAEIOU]/g, '!');
    return s;
}

//Another solution
//
// function replace(s){
//     return s.replace(/[aeoiu]/ig, '!')
// }
//
// const replace = s => s.replace(/[aeiou]/gi, '!');