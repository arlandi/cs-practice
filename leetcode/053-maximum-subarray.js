/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return false;

    let max = nums[0];
    let sum = 0;

    for (let i = 0;i < nums.length;i++) {
        sum += nums[i];

        max = Math.max(max,sum);

        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
};


/*
If we were to keep the start and end indices
*/
var maxSubArray = function(nums) {
    if (!nums.length) return false;

    let max = nums[0];
    let sum = 0;

    let start = 0;
    let end = 0;
    let potentialStart = 0;

    for (let i = 0;i < nums.length;i++) {
        sum += nums[i];

        if (sum > max) {
            max = sum;
            start = potentialStart;
            end = i;
        }

        if (sum < 0) {
            sum = 0;
            potentialStart = i + 1;
        }
    }

    return max;
};
