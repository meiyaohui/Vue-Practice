 var express = require('express');
 var app = express();
 var fs = require('fs');


 app.listen(3000);
 app.get("/", function(req, res) {
     res.sendFile(__dirname + '/load.html');

 });

 app.get("/data.json", function(req, res) {
     res.sendFile(__dirname + '/data.json');
 });