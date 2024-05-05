function isRegExp(value) {
 return Object.prototype.toString.call(value) === '[object RegExp]';
}
// Example usage:
console.log(isRegExp(/test/)); // true
console.log(isRegExp(new RegExp('test'))); // true
console.log(isRegExp("hello")); // false
console.log(isRegExp(5)); // false
console.log(isRegExp(null)); // false
