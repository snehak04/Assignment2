function linearSearch(array, element) {
 for (let i = 0; i < array.length; i++) {
 if (array[i] === element) {
 return i; // Return the index of the element if found
 }
 }
 return -1; // Return -1 if the element is not found in the array
}
// Example usage:
const arr = [3, 5, 2, 8, 1, 7, 9];
const elementToFind = 2;
const index = linearSearch(arr, elementToFind);
if (index !== -1) {
 console.log("The first index of", elementToFind, "in the array is:", index);
} else {
 console.log(elementToFind, "is not found in the array.");
}