function parseURL(url) {
 try {
 const parsedURL = new URL(url);
 return {
 protocol: parsedURL.protocol,
 hostname: parsedURL.hostname,
 port: parsedURL.port,
 pathname: parsedURL.pathname,
 search: parsedURL.search,
 hash: parsedURL.hash
 };
 } catch (error) {
 console.error("Invalid URL:", error);
 return null;
 }
}
// Example usage:
const url = "https://www.example.com:8080/path/to/resource?query=value#section";
const parsed = parseURL(url);
console.log(parsed);
