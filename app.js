//Install express server
const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();

app.use(function (req, res, next) {
    res.setheader("Access-Control-Allow-Origin", "*");
    res.setheader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setheader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next(console.log('Hello'));
});

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/src'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
