/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s || !s.length) return 0;

    let num = 0;
    const map = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    };

    for (let i = 0;i < s.length;i++) {
        const special = map[s[i] + s[i+1]];
        if (special !== undefined) {
            num += special;
            i++;
        } else {
            num += map[s[i]];
        }
    }

    return num;
};
