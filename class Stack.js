class Stack {
 constructor() {
 this.items = [];
 }
 // Push element to the top of the stack
 push(element) {
 this.items.push(element);
 }
 // Pop element from the top of the stack
 pop() {
 if (this.isEmpty()) {
 return "Underflow";
 }
 return this.items.pop();
 }
 // Peek at the top element of the stack without removing it
 peek() {
 return this.items[this.items.length - 1];
 }
 // Check if the stack is empty
 isEmpty() {
 return this.items.length === 0;
 }
 // Check if the given element is present in the stack
 contains(element) {
 return this.items.includes(element);
 }
}
// Example usage:
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
console.log("Is 10 present in the stack?", stack.contains(10)); // true
console.log("Is 20 present in the stack?", stack.contains(20)); // false