const http = require("http");
const url = require("url");
const queryString = require("querystring");

///  --> The queryString module in Node.js to convert a URL-encoded query string into a JavaScript object.

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    /* data is expected to be a query string, like:
            "name=John&age=25"

        queryString.parse(data) converts that string into an object:
              { name: "John", age: "25" } */

    req.on("end", () => {
      const parseData = queryString.parse(data);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "From data received", parseData }));
    });
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
