
function multiply(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) =>  a * b)
}
// git checkout .
exports.multiply = multiply;
