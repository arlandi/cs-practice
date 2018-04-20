/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/*
Use map to keep track of the index of all characters.
If a character is repeated, update the index to the latest one
/*

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let max = 0;
    let start = 0;
    let map = {};

    for (let i = 0;i < s.length;i++) {
        const char = s[i];

        if (map[char] !== undefined && map[char] >= start) {
            start = map[char] + 1;
        }

        map[char] = i;
        max = Math.max(max, i - start + 1);
    }

    return max;
};
