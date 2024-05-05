function heapSort(arr) {
 // Build max heap
 buildMaxHeap(arr);
 // Heapify the array
 for (let i = arr.length - 1; i > 0; i--) {
 // Swap root (maximum value) with the last element of the heap
 [arr[0], arr[i]] = [arr[i], arr[0]];

 // Restore heap property of the subtree rooted at index 0
 heapify(arr, 0, i);
 }
 return arr;
}
function buildMaxHeap(arr) {
 const n = arr.length;
 for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
 heapify(arr, i, n);
 }
}
function heapify(arr, index, heapSize) {
 const left = 2 * index + 1;
 const right = 2 * index + 2;
 let largest = index;
 if (left < heapSize && arr[left] > arr[largest]) {
 largest = left;
 }
 if (right < heapSize && arr[right] > arr[largest]) {
 largest = right;
 }
 if (largest !== index) {
 [arr[index], arr[largest]] = [arr[largest], arr[index]];
 heapify(arr, largest, heapSize);
 }
}
// Example usage:
const arr = [5, 3, 8, 4, 2, 7, 1];
console.log("Original array:", arr);
const sortedArray = heapSort(arr);
console.log("Sorted array:", sortedArray);
