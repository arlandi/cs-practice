/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let endPointer = string.length - 1;

    // Can be optimized by checking up til the midpoint only
    for (let i = 0;i < string.length;i++) {
        if (string[i] !== string[endPointer]) return false;
        endPointer--;
    }

    return true;
};
