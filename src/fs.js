var fs = require('fs');
var http = require('http');


var result = [];
for (var i = 0; i < 130000; i++) {
    var data = {
        index: i,
        title: "title" + i,
        content: "content" + i
    };
    result.push(data);
}
var ws = fs.createWriteStream(__dirname + '/data.json');

ws.write(JSON.stringify(result));
ws.end();