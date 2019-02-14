var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 9999;
var fs          = require('fs');
var load        = require('express-load');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
load('routes').into(app);

// 404 error
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handling
app.use(function(err, req, res, next) {
    console.log(err);
    console.log(req.url);
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(port);

console.log("Server listening on:: http://localhost:%s", port);
