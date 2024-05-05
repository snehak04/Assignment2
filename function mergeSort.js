function mergeSort(arr) {
 if (arr.length <= 1) {
 return arr; // Base case: if the array has 0 or 1 element, it is already sorted
 }
 // Split the array into two halves
 const middle = Math.floor(arr.length / 2);
 const left = arr.slice(0, middle);
 const right = arr.slice(middle);
 // Recursively sort the left and right halves
 const sortedLeft = mergeSort(left);
 const sortedRight = mergeSort(right);
 // Merge the sorted halves
 return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
 let result = [];
 let leftIndex = 0;
 let rightIndex = 0;
 // Compare elements from left and right arrays and merge them into the result array
 while (leftIndex < left.length && rightIndex < right.length) {
 if (left[leftIndex] < right[rightIndex]) {
 result.push(left[leftIndex]);
 leftIndex++;
 } else {
 result.push(right[rightIndex]);
 rightIndex++;
 }
 }
 // Concatenate the remaining elements from left and right arrays (if any)
 return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// Example usage:
const arr = [5, 3, 8, 4, 2, 7, 1];
console.log("Original array:", arr);
const sortedArray = mergeSort(arr);
console.log("Sorted array:", sortedArray);