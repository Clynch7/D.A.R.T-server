'use strict';

var HTTP_PORT = 8080;

var nodeStatic = require('node-static');
var expess = require("express")
var http = require('http');
var https = require('https')
var fs = require('fs');
var queue = require('queue')

var i = 1;
/**
 * Create servers for HTTPS and HTTP, have them serve the user with the requested file
 * There is a function inside solving strange error when geturl is /patient.html/THEROOM
 */
var app = expess()
var fileServer = new(nodeStatic.Server)();
var httpServer = http.createServer(function(req, res) {
    res.end(JSON.stringify({ answer : "accepted" , score : i }, null, 3))
    i++;
}).listen(HTTP_PORT);