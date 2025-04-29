const http = require("http");
const url = require("url");

// Middleware Function for logging requests

/* In Node.js, especially when using frameworks like Express.js, a middleware is a function that sits between the request and the response. 

It can process, modify, or terminate the request before it reaches the final route handler. */

function logRequest(req, res, next) {
  console.log(`${req.method} request made to ${req.url}`);
  next(req, res);
}

/*  Types of Middleware:
      --> Application-level middleware – applied to all routes (app.use)

      --> Router-level middleware – tied to  specific routers

      --> Error-handling middleware – handles errors (function (err, req, res, next))

      --> Built-in middleware – like express.json()

      --> Third-party middleware – like cors, morgan, etc. */

const server = http.createServer((req, res) => {
  logRequest(req, res, (req, res) => {
    const { pathname } = url.parse(req.url);

    // /user/1234
    if (pathname.startsWith("/user")) {
      const userId = pathname.split("/")[2];
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`User Id : ${userId}`);
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Route Not Found");
    }
  });
});
const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
