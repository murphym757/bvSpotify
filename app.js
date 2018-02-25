const express = require('express'), 
    cors = require('cors'), 
    app = express();

app.use(cors());


// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
