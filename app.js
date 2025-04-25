const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const url = require("url");

// Read file -- read content from a file

/* fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
}); */

// Write File -- make a file & input/insert content to a file

/* const content = "hello, NodeJS";
fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("file written successfully");
});
 */

// HTTP -- Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

//Use the createServer() method to create an HTTP server.

//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 3000.

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello, world");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000 ");
}); */

// Path

/* const directory = "/user/local";
const fileName = "example.txt";

const fullPath = path.join(directory, fileName);

console.log(fullPath);
 */

// OS

/* console.log("platform:", os.platform());
console.log("Cpu Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
 */

// URL

const myUrl = new URL("http://example.com:8080/path/dip?query=hello#hash");
console.log("Host", myUrl.host);
console.log("Pathname", myUrl.pathname);
console.log("Search Params", myUrl.searchParams.get("query"));
