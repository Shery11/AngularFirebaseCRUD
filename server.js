var express = require('express');
var app = express();

//directs server to static index.html file
app.use(express.static(__dirname + '/public'));


app.listen(3000);
console.log('Working on 3000');
