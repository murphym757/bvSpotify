//Install express server
const express = require('express'),
      cors = require('cors'),
      router = express.Router(),
      app = express();

app.use(function (req, res, next) {
    var allowedOrigins = ['http://localhost:4200', 'http://localhost:8080', 'https://bvspotify.herokuapp.com'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'https://bvspotify.herokuapp.com');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
