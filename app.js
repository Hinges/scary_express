console.log("hello");

var express = require('express');
var path = require('path');
var app = express();
var banking = require('./public/modules/balance');
app.use(express.static("public"));


app.get('/balance', function(request, response){
    console.log("i am working");
    var totalSalary = banking.balance();
    totalSalary += banking.text();
    response.send(totalSalary);
});

app.get('/', function(request, response){  ////app.method(path, handler)
    response.sendFile(path.join(__dirname, "/public/views/index.html"));
});


var server = app.listen(3000, function() {
    var port = server.address().port;
});