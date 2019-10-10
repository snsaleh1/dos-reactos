var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const cors = require('cors')

require('dotenv').config({ debug: process.env.DEBUG });

require('./config/database');

var testimonialsRouter = require('./routes/api/testimonials');

var app = express();

app.use(cors());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());


// api routes must be before the "catch all" route
app.use('/api/testimonials', testimonialsRouter);

// "catch all" route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});