function splitStringIntoWords(str) {
 // Use split() method to split the string by whitespace characters
 return str.split(/\s+/);
}
// Example usage:
const sentence = "This is a sample sentence";
const wordsArray = splitStringIntoWords(sentence);
console.log(wordsArray);