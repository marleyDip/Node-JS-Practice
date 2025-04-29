const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  // /user/1234
  if (pathname.startsWith("/user")) {
    /* pathname is a string representing the URL path, like:
        --> /user/profile/123

      .split("/") breaks that string into an array using "/" as the separator:
          --> ["", "user", "profile", "123"]

      [3] gets the 4th element (index 3) of that array — which is "123" in this example. */

    const userId = pathname.split("/")[2];
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`User Id : ${userId}`);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route Not Found");
  }
});
const port = 3000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
