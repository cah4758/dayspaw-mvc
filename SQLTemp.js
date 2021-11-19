var express = require('express');
var app = express();

app.get('/'), function (req, res)

var sql = require("mssql");

var config = {
    user: '',
    password: '',
    server: '',
    datavase: ''
};

sql.connect(config, function (err) {

    if (err) console.log(err);

    var request = new sql.request();

    request.query('select *', function (err, recordset) {

        if (err) console.log(err)
        
        res.send(recordset);

    });
});

var server = app.listen(5000, function (){
    console.log('server is running');
    ;})