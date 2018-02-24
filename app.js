//Install express server
const express = require('express'),
      app = express(),
      cors = require('cors'),
      path = require('path'),
      router = express.Router(),
      port = process.env.PORT || 3000;


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://bvspotify.herokuapp.com/'); //<-- you can change this with a specific url like http://localhost:4200
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/src'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

// process.env.PORT lets the port be set by Heroku
// use port 3000 unless there exists a preconfigured port ("port" is called with the other dependencies)
//Localhost server
app.listen(port, () => {
    console.log('Server started on port ' + port)
});
