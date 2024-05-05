try {
 const invalidJSONString = "{ name: 'John', age: 30, city: 'New York' }";
 const parsedJSON = JSON.parse(invalidJSONString);
 console.log(parsedJSON); // This line will not execute if a SyntaxError occurs
} catch (error) {
 if (error instanceof SyntaxError) {
 console.error("Invalid JSON string:", error.message);
 // Handle the SyntaxError here
 } else {
 // Handle other types of errors here
 console.error("Error:", error);
 }
}