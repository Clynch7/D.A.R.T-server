'use strict';

var HTTP_PORT = 8080;

var nodeStatic = require('node-static');
var http = require('http');
var https = require('https')
var express = require('express');
app = express();
var fs = require('fs');
var queue = [];
var i = 1;

var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getdart',function(req,res){
    if(queue.length > 0){
        var dart = queue.shift();
        console.log(dart)
        console.log(dart.score)
        res.end(JSON.stringify({ answer : "accepted" , dart: dart.dart, score : dart.score}, null, 3))
    }else{
        res.end(JSON.stringify({ answer : "declined"}, null, 3))
    }
    
});
app.get('/dart',function(req,res){
    res.sendFile(__dirname + '/DART.html')
});
app.post('/newdart',function(req,res){
  var dart =req.body.dart
  var score = req.body.score;
  queue.push({"dart" : dart, "score" : score});

  res.end("yes");
});
app.listen(8000,function(){
  console.log("Started on PORT 8000");
})

/*
var fileServer = new(nodeStatic.Server)();
var httpServer = http.createServer(function(req, res) {
    console.log(req.url)
    if(req.url === "/Dart.html"){
        fileServer.serve(req, res);
    }else if(req.url === "/newdart.html"){
    }else{
        res.end(JSON.stringify({ answer : "accepted" , score : i, url : req.url }, null, 3))
        i++;
    }
    
}).listen(HTTP_PORT);*/