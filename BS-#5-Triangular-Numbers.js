// DESCRIPTION:
// Triangular number is any amount of points that can fill an equilateral triangle.
// Example: the number 6 is a triangular number because all sides of a triangle has
// the same amount of points.
//
// MY SOLUTION
function isTriangular(t) {
    return Number.isInteger(Math.sqrt(8 * t + 1));
}
