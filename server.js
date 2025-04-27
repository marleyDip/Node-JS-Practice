const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Data received ", data: body }));
    });
    ///res.writeHead(200, { "content-type": "text/plain" });
    ///res.end("Welcome to Homepage");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route not Found");

    ///res.writeHead(404, { "content-type": "text/plain" });
    ///res.end("Page not Found");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
