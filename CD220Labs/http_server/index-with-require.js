const http = require("http");
const today = require("./today");

const requestListener = function (req, res) {
  res.writeHead(200);
  let dateVal = today.getDate();
  if (dateVal.getHours() < 12) {
    res.end(`Good morning World! The date today is ${dateVal}`);
  } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
    res.end(`Good afternoon World! The date today is ${dateVal}`);
  } else if (dateVal.getHours() >= 18 && dateVal.getHours() < 21) {
    res.end(`Good evening World! The date today is ${dateVal}`);
  } else if (dateVal.getHours() >= 21 && dateVal.getHours() < 24) {
    res.end(`Good night World! The date today is ${dateVal}`);
  }
};

const port = 8080;
const server = http.createServer(requestListener);
console.log("server listening on port: " + port);
server.listen(port);
