//Install express server
const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();

var app = http.createServer(function (req, res, next) {
    var headers = {};

    // set header to handle the CORS
    headers['Access-Control-Allow-Origin'] = '*';
    headers['Access-Control-Allow-Headers'] = 'Authorization';
    headers['Access-Contrl-Allow-Methods'] = 'POST, OPTIONS';
    headers["Access-Control-Max-Age"] = '86400';
    res.writeHead(200, headers);

    if (req.method === 'OPTIONS') {
        console.log('OPTIONS SUCCESS');
        res.end();
    }
    else {
        //other requests
    }
});

// Check if preflight request
if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
}
else {
    // Pass to next layer of middleware
    next();
}

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/src'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
