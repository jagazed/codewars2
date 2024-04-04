// DESCRIPTION:
//
// There are pillars near the road. The distance between the pillars is the same
// and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in
// centimeters (without the width of the first and last pillar).
//
// MY SOLUTION:
// before result
function pillars(numPill, dist, width) {
    if (numPill < 2){
        return 0;
    } else if (numPill === 2){
        return distance = dist * 100;
    } else return distance = ((numPill - 2) * width) + ((numPill - 1) * dist * 100)
}
// after result
// function pillars(numPill, dist, width) {
//     if (numPill < 2) return 0;
//     else return distance = ((numPill - 2) * width) + ((numPill - 1) * dist * 100)
// }
//console.log(pillars(3, 10, 10))
//
// OTHER SOLUTION:
//
// function pillars(num_pill, dist, width) {
//     return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
// }