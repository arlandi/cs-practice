/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (let i = 0;i < s.length;i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }

    for (let i = 0;i < t.length;i++) {
        const c = t[i];

        if (!map[c]) return false;

        map[c] = map[c] - 1;
    }

    return true;
};
