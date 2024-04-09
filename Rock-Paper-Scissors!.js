// DESCRIPTION:
//
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
//
// MY SOLUTION:
const rps = (p1, p2) => {
    if ((p1 === "scissors" && p2 === "paper") || (p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock")){
        return "Player 1 won!"
    } else if (p1 === p2) {
        return "Draw!"
    } else return "Player 2 won!"
};
console.log(rps("scissors", "scissors"));

// OTHER SOLUTION:
// rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;
//
// const rps = (p1, p2) => {
//     if(p1 === p2) {
//         return 'Draw!'
//     };
//     return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }
//