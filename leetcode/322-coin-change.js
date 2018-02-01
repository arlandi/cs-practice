/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.

Note:
You may assume that you have an infinite number of each kind of coin.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 // O(nm) Time
 // O(n) Space
 // A bottom up approach where we calculate the minimum amount of possible combinations
 // for each amount starting from 1
var coinChange = function(coins, amount) {
    // An array to store the minimum number of coins possbile for index = amount
    const memo = [0];

    for (let i = 1; i <= amount;i++) {
        // Set an impossible amount of combinations initially
        memo[i] = amount + 1;

        // For amount at index, calculate the minimum combinations for each coin in coins
        for (let j = 0;j < coins.length;j++) {
            const coin = coins[j];

            if (coin <= i) {
                memo[i] = Math.min(memo[i], memo[i - coin] + 1);
            }
        }
    }

    return memo[amount] > amount ? -1 : memo[amount];
};
