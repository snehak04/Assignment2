function printTime() {
 const date = new Date();
 const hours = String(date.getHours()).padStart(2, '0');
 const minutes = String(date.getMinutes()).padStart(2, '0');
 const seconds = String(date.getSeconds()).padStart(2, '0');
 console.log(hours + ":" + minutes + ":" + seconds);
}
// Print the current time every second
setInterval(printTime, 1000);