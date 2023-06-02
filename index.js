#!/bin/env node

//var nodemailer = require('nodemailer');

var http, director, bot, router, server, port, db;

http        = require('http');
director    = require('director');
bot         = require('./bot.js');

router = new director.http.Router({
  '/'    : {
    get: ping
  },
  '/tiago'    : {

    get: tiago

  },
  '/init' : {
    get:  bot.init,
    post: bot.init
  },
  '/commands' : {
    get: bot.commands,
    post: bot.commands
  },
  '/bot/:botRoom' : {
    get: ping,
    post: bot.respond
  },
});

server = http.createServer(function (req, res) {
  req.chunks = [];

  req.on('data', function (chunk) {
    req.chunks.push(chunk.toString());
  });

  router.dispatch(req, res, function(err) {
    res.writeHead(err.status, {"Content-Type": "text/plain"});
    res.end(err.message);
  });
});

port = Number(process.env.NODEJS_SERVICE_PORT || process.env.PORT || 8080);
ip = process.env.IP || "0.0.0.0" || process.env.NODEJS_SERVICE_PORT;

//server.listen(port, ip);
//console.log(port + " " + ip);
server.listen(port, function(req, res) {

  console.log('Server started on port: ' + port +  ' ip: ' + ip);

});
*/
function ping() {
  this.res.writeHead(200);
  this.res.end("I am a robot.");
}

function tiago() {

  this.res.writeHead(200);

  this.res.end("");

}
