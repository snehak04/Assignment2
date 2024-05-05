function findWordIndices(inputString, word) {
 let indices = [];
 let index = inputString.indexOf(word);
 while (index !== -1) {
 indices.push(index);
 index = inputString.indexOf(word, index + 1);
 }
 return indices;
}
// Example usage:
const inputString = "This is an example string with example words in it.";
const wordToFind = "example";
const indices = findWordIndices(inputString, wordToFind);
console.log("Indices of the word '" + wordToFind + "': ", indices);