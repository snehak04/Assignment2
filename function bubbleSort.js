function bubbleSort(arr) {
 const n = arr.length;
 for (let i = 0; i < n - 1; i++) {
 // Last i elements are already in place, so we don't need to check them
 for (let j = 0; j < n - i - 1; j++) {
 // Swap if the element found is greater than the next element
 if (arr[j] > arr[j + 1]) {
 // Swap arr[j] and arr[j+1]
 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
 }
 }
 }
 return arr;
}
// Example usage:
const arr = [5, 3, 8, 4, 2, 7, 1];
console.log("Original array:", arr);
const sortedArray = bubbleSort(arr);
console.log("Sorted array:", sortedArray);