function quickSort(arr) {
 if (arr.length <= 1) {
 return arr; // Base case: if the array has 0 or 1 element, it is already sorted
 }
 const pivot = arr[0]; // Choose the first element as the pivot
 const left = [];
 const right = [];
 for (let i = 1; i < arr.length; i++) {
 if (arr[i] < pivot) {
 left.push(arr[i]); // Elements smaller than pivot go to the left array
 } else {
 right.push(arr[i]); // Elements greater than or equal to pivot go to the right array
 }
 }
 // Recursively sort the left and right arrays
 return [...quickSort(left), pivot, ...quickSort(right)];
}
// Example usage:
const arr = [5, 3, 8, 4, 2, 7, 1];
console.log("Original array:", arr);
const sortedArray = quickSort(arr);
console.log("Sorted array:", sortedArray)
