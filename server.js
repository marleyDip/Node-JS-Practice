const http = require("http");
const url = require("url");

// Route Handler

const routes = {
  "/": (req, res) => {
    res.writeHead(200, { "content-type": "text-plain" });
    res.end("Welcome to Homepage");
  },
  "/about": (req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("This is About Page");
  },
  "./notfound": (req, res) => {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not Found");
  },
};

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (routes[pathname]) {
    routes[pathname](req, res);
  } else {
    routes["./notfound"](req, res);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
