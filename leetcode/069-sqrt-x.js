/*
Implement int sqrt(int x).

Compute and return the square root of x.

x is guaranteed to be a non-negative integer.
*/

/**
 * @param {number} x
 * @return {number}
 */

// O(sqrt(n)) Solution
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;

    let i = 1;
    while (i*i < x) {
        i++;
    }

    return i*i === x ? i : i - 1;
};

// Binary Search solution - O(logn)
var mySqrt = function(x) {
    if (x < 2) return x;

    let start = 0;
    let end = x;
    let answer = start;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const mid2 = mid * mid;

        if (mid2 === x) return mid;

        if (mid2 > x) {
            end = mid - 1;
        } else {
            start = mid + 1;
            answer = mid;
        }
    }

    return answer;
};

// Implement sqrt with precision:
// http://www.cs.wustl.edu/~kjg/CS101_SP97/Notes/SquareRoot/sqrt.html
