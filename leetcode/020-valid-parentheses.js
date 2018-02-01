/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) return false;

    const stack = [];

    for (let i = 0;i < s.length;i++) {
        switch (s[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(s[i]);
                break;
            case ')': if (stack.pop() !== '(') return false;break;
            case '}': if (stack.pop() !== '{') return false;break;
            case ']': if (stack.pop() !== '[') return false;break;
        }
    }

    return stack.length === 0 ? true : false;
};
