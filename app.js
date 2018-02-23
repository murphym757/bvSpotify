//Install express server
const express = require('express'),
      cors = require('cors'),
      router = express.Router(),
      app = express();

app.use(cors({
    origin: 'https://bvspotify.herokuapp.com'
}));

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
