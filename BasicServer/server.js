const http = require("http");

http
  .createServer((req, resp) => {
    resp.writeHead(200,{'content-type':'application\json'})
    resp.write(JSON.stringify({name:"Ankur",city:"Rohtak",university:"Mdu"}))
    resp.end()
  })
  .listen(4500);
