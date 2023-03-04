const multiplication = require('./multiplication');
test('string with a single number should result in the number itself', () => {
    expect(multiplication.multiply('1')).toBe(1);
});

test('string with two numbers should result in the product of the numbers', () => {
    expect(multiplication.multiply('5,5')).toBe(25);
});