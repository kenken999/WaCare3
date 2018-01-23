//import { route } from "./router";
//import { request } from "https";

var http = require("http");
var url = require("url");
var router = require("./router");
var express = require("express");
var app = express();

app.use('/images',express.static(__dirname + '/image'));

var server = app.listen(5050);
/*
http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8881);
*/
/*
function start() {

  function onRequest(request, response) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8881);
  console.log("Server has started");
}

exports.start = start;
*/
/*
function start() {
  
    function onRequest(request, response) {

      var pathname = url.parse(request.url).pathname
      console.log("Request for " + pathname + "received.");

      var x = router.route(pathname);

      response.writeHead(200, {"Content-Type":"text/plain"});
      response.write(x);
      response.end();
    }
  
    http.createServer(onRequest).listen(8881);
    console.log("Server has started");
  }
  
  exports.start = start;
  */
  function start() {
    
      function onRequest(request, response) {
  
        var pathname = url.parse(request.url).pathname
        console.log("Request for " + pathname + "received.");
  
        //router.route(pathname, response, request);
        
        var postData = "";
        request.setEncoding("utf8");
        
        request.addListener("data", function(x){
          postData += x;
        });

        request.addListener("end", function(){
          router.route(pathname, response, postData);
        });
        
      }
    
      http.createServer(onRequest).listen(8881);
      console.log("Server has started");
      /*
      http.createServer(function(request, response){
        request.addListener("data", function(x){
          postData += x;
        });

        request.addListener("end", function(){
          router.route(pathname, response, postData);
        });
      });
      */
    }
    
    exports.start = start;