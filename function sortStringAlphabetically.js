function sortStringAlphabetically(str) {
 // Convert the string to an array of characters, sort it, and then join it back to a string
 return str.split('').sort().join('');
}
// Example usage:
const inputString = "hello world";
console.log("Original string:", inputString);
const sortedString = sortStringAlphabetically(inputString);
console.log("Sorted string:", sortedString);
