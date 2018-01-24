/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const num = x + '';
    let reverse = '';

    for (let i = num.length - 1;i >= 0;i--) {
        if (num[i] !== '-') {
            reverse += num[i];
        }
    }

    if (+reverse > 2147483648) {
        return 0;
    }

    return x < 0 ? -reverse : +reverse;
};
