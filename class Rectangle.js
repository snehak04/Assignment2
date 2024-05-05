class Rectangle {
 constructor(width, height) {
 this.width = width;
 this.height = height;
 }
 // Method to calculate rectangle area
 calculateArea() {
 return this.width * this.height;
 }
 // Method to calculate rectangle perimeter
 calculatePerimeter() {
 return 2 * (this.width + this.height);
 }
}
// Create an instance of the Rectangle class
const rectangle = new Rectangle(5, 3);
// Calculate area and perimeter
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();
console.log("Rectangle Area:", area);
console.log("Rectangle Perimeter:", perimeter);