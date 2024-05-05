function insertionSort(arr) {
 const n = arr.length;
 for (let i = 1; i < n; i++) {
 let current = arr[i];
 let j = i - 1;
 // Move elements of arr[0..i-1], that are greater than current,
 // to one position ahead of their current position
 while (j >= 0 && arr[j] > current) {
 arr[j + 1] = arr[j];
 j--;
 }
 arr[j + 1] = current;
 }
 return arr;
}
// Example usage:
const arr = [5, 3, 8, 4, 2, 7, 1];
console.log("Original array:", arr);
const sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);