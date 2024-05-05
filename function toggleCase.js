function toggleCase(str) {
 let toggledStr = "";
 for (let i = 0; i < str.length; i++) {
 const char = str[i];
 if (char === char.toUpperCase()) {
 toggledStr += char.toLowerCase();
 } else {
 toggledStr += char.toUpperCase();
 }
 }
 return toggledStr;
}
// Example usage:
const inputString = "Hello World";
const toggledString = toggleCase(inputString);
console.log("Original string:", inputString);
console.log("Toggled string:", toggledString);