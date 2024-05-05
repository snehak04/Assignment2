function isNumber(value) {
 return typeof value === 'number' && !isNaN(value);
}
// Example usage:
console.log(isNumber(5)); // true
console.log(isNumber("hello")); // false
console.log(isNumber(null)); // false
console.log(isNumber([])); // false