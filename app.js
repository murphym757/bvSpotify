//Install express server
const express = require('express'),
    app = express(),
    cors = require('cors');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', true);
    next(console.log('Hello'));
});

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/src'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
