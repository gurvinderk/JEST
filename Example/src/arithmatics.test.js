const { add, mul, sub, div, isPalindrome } = require('./arithmatics');

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test.skip('3 * 4 = 12', () => {
//test.skip('3 * 4 = 12', () => {
    expect(mul(3, 4)).toBe(12);
});

xtest('5 - 6 = -1', () => {
    expect(sub(5, 6)).toBe(-1);
});

test('8 / 4 = 2', () => {
    expect(div(8, 4)).toBe(2);
});

test('Palindrome: ', () => {
    expect(isPalindrome("PoP")).toBe(true);
    expect(isPalindrome("MoM")).toBe(true);
    expect(isPalindrome("noon")).toBe(true);
});