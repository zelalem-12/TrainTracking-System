'user strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, {useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() => console.log(`Connected to database ${config.database}`))
  .catch((err) => console.log(`unable to connect to the server: ${err}`));
  
const port = process.env.PORT || 8080;

const app = express();

const train = require('./routes/train');

 

// Port Number
// CORS Middleware 
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());


// App  routs
app.use('/trains', train);

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
