function isArraySorted(arr) {
 // Iterate through the array and check if each element is less than or equal to the next element
 for (let i = 0; i < arr.length - 1; i++) {
 if (arr[i] > arr[i + 1]) {
 return false; // If any element is greater than the next element, the array is not sorted
 }
 }
 return true; // If all elements are in non-decreasing order, the array is sorted
}
// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
console.log("Is the array sorted?", isArraySorted(sortedArray));
const unsortedArray = [5, 3, 8, 2, 7];
console.log("Is the array sorted?", isArraySorted(unsortedArray));
