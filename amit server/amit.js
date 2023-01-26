// const http = require("http");
// const server=http.createServer((req,resp) => {
//     resp.writeHead(200, {"content-type": "text/html"});
//     resp.write("<h1> Wow this is response from first server </h1>");
//     resp.write("<h2> Ok nice work</h2>");
//     resp.write("<button>Click me</button>");
//     resp.end("Ok by by");
// });
// server.listen(9898);
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
});
server.listen(8080);

var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('C:\\Users\\amita\\Desktop\\web dev\\school project\\project.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
