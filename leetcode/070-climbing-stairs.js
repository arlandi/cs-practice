/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.


Example 1:

Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/*
use recursive. The person can reach n’th stair from either (n-1)’th stair or from (n-2)’th stair. Let the total number of ways to reach n’t stair be ‘ways(n)’.
The value of ‘ways(n)’ can be written as following:
ways(n) = ways(n-1) + ways(n-2)
*/

/**
 * @param {number} n
 * @return {number}
 */
 // Time and Space complexity is O(n)
var climbStairs = function(n) {
    const numberOfWays = [];

    numberOfWays[0] = 0;
    numberOfWays[1] = 1;
    numberOfWays[2] = 2;

    for (let i = 3;i <= n;i++) {
        numberOfWays[i] = numberOfWays[i - 2] + numberOfWays[i - 1];
    }

    return numberOfWays[n];
};
