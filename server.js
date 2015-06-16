/*
var http = require("http");
var server = http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
});
 
server.listen(8009);
console.log("Server is listening");


*/

exports.printMsg = function() {
    console.log("This is a message from the demo package");
};