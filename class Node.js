class Node {
 constructor(data) {
 this.data = data;
 this.next = null;
 }
}
class LinkedList {
 constructor() {
 this.head = null;
 }
 // Check if the linked list is empty
 isEmpty() {
 return this.head === null;
 }
}
// Example usage:
const list = new LinkedList();
console.log("Is the linked list empty?", list.isEmpty()); // true
list.head = new Node(5);
console.log("Is the linked list empty?", list.isEmpty()); // false
