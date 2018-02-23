//Install express server
const express = require('express'),
      cors = require('cors'),
      router = express.Router(),
      app = express();

var allowedOrigins = ['http://localhost:4200',
    'https://bvspotify.herokuapp.com'];

app.use(cors({
    origin: function (origin, callback) {

        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }

        return callback(null, true);
    }
}));

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
