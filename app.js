//Install express server
const express = require('express'),
      cors = require('cors'),
      router = express.Router(),
      app = express();

// allow-cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://bvspotify.herokuapp.com/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
